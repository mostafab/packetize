'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _inert = require('inert');

var _inert2 = _interopRequireDefault(_inert);

var _vision = require('vision');

var _vision2 = _interopRequireDefault(_vision);

var _handlebars = require('handlebars');

var _handlebars2 = _interopRequireDefault(_handlebars);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = new _hapi2.default.Server();

server.connection({
    host: 'localhost',
    port: 3000
});

server.register([{ register: _inert2.default }, { register: _vision2.default }], function (err) {
    if (err) {
        throw err;
    }
    server.views({
        engines: {
            html: _handlebars2.default
        },
        path: _path2.default.join(__dirname, 'views')
    });
    server.route({
        method: 'GET',
        path: '/public/{param*}',
        handler: {
            directory: {
                path: _path2.default.join(__dirname, 'public')
            }
        }
    });

    (0, _index2.default)(server);

    server.start(function (err) {
        if (err) {
            throw err;
        }
        console.log('Server started at ' + new Date() + ' is running at: ' + server.info.uri);
    });
});