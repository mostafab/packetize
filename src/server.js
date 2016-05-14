'use strict';

import Hapi from 'hapi';
import index from './routes/index';

const server = new Hapi.Server();

server.connection({
   host: 'localhost',
   port: 3000 
});

index(server);

server.start(err => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
