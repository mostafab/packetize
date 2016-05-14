'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var count = 0;

exports.default = function (server) {
    server.route({
        method: 'GET',
        path: '/',
        handler: function handler(req, res) {
            return res({ hello: 'world' });
        }
    });

    server.route({
        method: 'POST',
        path: '/increment',
        handler: function handler(req, res) {
            count++;
            return res({ count: count });
        }
    });
};