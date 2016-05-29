'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.login = exports.concat = undefined;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var concat = exports.concat = function concat(_ref) {
    var dispatch = _ref.dispatch;
    return dispatch('CONCAT');
};

var login = exports.login = function login(_ref2) {
    var dispatch = _ref2.dispatch;
    var state = _ref2.state;

    if (!state.authenticated) {
        _jquery2.default.post('/api/authenticate').then(function (data) {
            return dispatch('LOGIN_SUCCESS');
        }).fail(function (err) {
            return dispatch('LOGIN_ERROR');
        });
    }
};