'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

var state = {
    authenticated: false,
    header: {
        headerTitle: 'Packetize',
        headerLinks: [{ name: 'About' }, { name: 'Login' }]
    }
};

var mutations = {
    LOGIN_SUCCESS: function LOGIN_SUCCESS(state, token) {
        state.header.headerTitle = 'Home';
        state.header.headerLinks = [{ name: 'Logout' }];
        state.token = token;
        state.authenticated = true;
    },
    LOGOUT: function LOGOUT(state) {
        state.header.headerTitle = 'Packetize';
        state.header.headerLinks = [{ name: 'About' }, { name: 'Login' }];
        state.authenticated = false;
    },
    REGISTER: function REGISTER(state) {
        state.registering = true;
    },
    CONCAT: function CONCAT(state) {
        console.log(state);
        state.headerTitle += 'A';
    }
};

exports.default = new _vuex2.default.Store({
    state: state,
    mutations: mutations
});