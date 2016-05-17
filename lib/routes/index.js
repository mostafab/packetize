'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (server) {
    server.route([{
        method: 'GET',
        path: '/',
        handler: function handler(request, reply) {
            reply.view('index');
        }
    }, {
        method: 'POST',
        path: '/login',
        handler: function handler(request, reply) {
            reply({ success: true });
        }
    }]);
};