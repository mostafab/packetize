'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (server) {
    server.route([{
        method: 'GET',
        path: '/api/sets',
        handler: function handler(request, reply) {}
    }, {
        method: 'POST',
        path: '/api/sets',
        handler: function handler(request, reply) {},
        config: {
            validate: {
                payload: {
                    'set-name': _joi2.default.string().min(1).max(100)
                }
            }
        }
    }]);
};