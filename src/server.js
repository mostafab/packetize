'use strict';

import Path from 'path';
import Hapi from 'hapi';
import inert from 'inert';
import vision from 'vision';
import handlebars from 'handlebars';
import index from './routes/index';
import authAPI from './routes/api/auth/auth';
import setsAPI from './routes/api/sets/sets';

const server = new Hapi.Server();

let registerRoutes = (server, ...routes) => {
    routes.forEach(route => route(server));
}

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
    
    registerRoutes(server, index, authAPI, setsAPI);

    server.start(err => {
        if (err) {
            throw err;
        }
        console.log(`Server started at ${new Date()} is running at: ${server.info.uri}`);
    });
    
});

