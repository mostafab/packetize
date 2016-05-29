'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (server) {
    server.route([{
        method: 'GET',
        path: '/',
        handler: function handler(request, reply) {
            reply.view('index');
        }
    }]);
};