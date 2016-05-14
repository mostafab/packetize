'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _vision = require('vision');

var _vision2 = _interopRequireDefault(_vision);

var _pug = require('pug');

var _pug2 = _interopRequireDefault(_pug);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = new _hapi2.default.Server();

server.connection({
    host: 'localhost',
    port: 3000
});

(0, _index2.default)(server);

server.register(_vision2.default, function (err) {
    server.views({
        engines: {
            pug: _pug2.default
        },
        relativeTo: __dirname,
        path: './templates',
        layoutPath: './templates/layout'
    });
});

server.start(function (err) {
    if (err) {
        throw err;
    }
    console.log('Server running at: ' + server.info.uri);
});