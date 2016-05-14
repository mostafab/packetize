'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = new _hapi2.default.Server();

server.connection({
    host: 'localhost',
    port: 3000
});

(0, _index2.default)(server);

server.start(function (err) {
    if (err) {
        throw err;
    }
    console.log('Server running at: ' + server.info.uri);
});