'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyToken = exports.generateToken = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _nodeUuid = require('node-uuid');

var _nodeUuid2 = _interopRequireDefault(_nodeUuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generateToken = exports.generateToken = function generateToken() {
    return new Promise(function (resolve, reject) {
        //    jwt.sign({foo: 'bar'}, 'Ilovescotchyscotch', {algorithm: 'RS256'}, (err, token) => {
        //       if (err) {
        //           console.log(err);
        //           reject(err);
        //       }
        //       resolve(token);
        //    });
        resolve(_nodeUuid2.default.v4());
    });
};

var verifyToken = exports.verifyToken = function verifyToken(token) {
    return new Promise(function (resolve, reject) {
        resolve(true);
    });
};