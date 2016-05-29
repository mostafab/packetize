'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _token = require('./../../../auth/token');

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (server) {
    server.route([{
        method: 'POST',
        path: '/api/authenticate',
        handler: function handler(request, reply) {
            (0, _token.generateToken)().then(function (token) {
                return reply({ success: true, token: token });
            }).catch(function (err) {
                return reply({ success: false, error: err });
            });
        },
        config: {
            validate: {
                payload: {
                    username: _joi2.default.string().min(7).max(20).required(),
                    password: _joi2.default.string().min(7).max(20).required()
                }
            }
        }
    }, {
        method: 'GET',
        path: '/api/authenticate',
        handler: function handler(request, reply) {
            (0, _token.verifyToken)().then(function (verified) {
                reply({ verified: verified });
            }).catch(function (err) {
                reply({ error: err });
            });
        },
        config: {
            validate: {
                query: {
                    token: _joi2.default.string().required()
                }
            }
        }
    }]);
};