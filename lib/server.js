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

var _auth = require('./routes/api/auth/auth');

var _auth2 = _interopRequireDefault(_auth);

var _sets = require('./routes/api/sets/sets');

var _sets2 = _interopRequireDefault(_sets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = new _hapi2.default.Server();

var registerRoutes = function registerRoutes(server) {
    for (var _len = arguments.length, routes = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        routes[_key - 1] = arguments[_key];
    }

    routes.forEach(function (route) {
        return route(server);
    });
};

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

    registerRoutes(server, _index2.default, _auth2.default, _sets2.default);

    server.start(function (err) {
        if (err) {
            throw err;
        }
        console.log('Server started at ' + new Date() + ' is running at: ' + server.info.uri);
    });
});