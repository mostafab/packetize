'use strict';

import Hapi from 'hapi';
import vision from 'vision';
import pug from 'pug';
import index from './routes/index';

const server = new Hapi.Server();

server.connection({
   host: 'localhost',
   port: 3000 
});

index(server);

server.register(vision, err => {
    server.views({
        engines: {
            pug: pug
        },
        relativeTo: __dirname,
        path: './templates',
        layoutPath: './templates/layout'
    });
});

server.start(err => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
