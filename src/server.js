'use strict';

import Path from 'path';
import Hapi from 'hapi';
import inert from 'inert';
import vision from 'vision';
import handlebars from 'handlebars';
import index from './routes/index';

const server = new Hapi.Server();

server.connection({
   host: 'localhost',
   port: 3000 
});

server.register([
    {register: inert},
    {register: vision}
], (err) => {
    if (err) {
        throw err;
    }
    server.views({
        engines: {
            html: handlebars
        },
        path: Path.join(__dirname, 'views')
    });
    server.route({
        method: 'GET',
        path: '/public/{param*}',
        handler: {
            directory: {
                path: Path.join(__dirname, 'public')
            }
        }
    });
    
    index(server);

    server.start(err => {
        if (err) {
            throw err;
        }
        console.log(`Server started at ${new Date()} is running at: ${server.info.uri}`);
    });
    
});

