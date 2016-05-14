'use strict';

import Hapi from 'hapi';

const server = new Hapi.Server();

server.connection({
   host: 'localhost',
   port: 3000 
});

server.route({
    method: 'GET',
    path: '/',
    handler: (req, res) => {
        return res('hello world');
    }
});

server.start(err => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
