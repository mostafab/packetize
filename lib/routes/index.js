'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (server) {
    server.route({
        method: 'GET',
        path: '/',
        handler: function handler(req, reply) {
            return reply.view('index', {
                title: 'Welcome to my Hapi app!'
            });
            // return res({hello: 'world'});
        }
    });
};