'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _header = require('./vue-templates/frame/header');

var _header2 = _interopRequireDefault(_header);

var _sideNav = require('./vue-templates/frame/side-nav');

var _sideNav2 = _interopRequireDefault(_sideNav);

var _store = require('./stores/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ---------------------------------------------------------- */

var app = new _vue2.default({
    el: '#app',
    store: _store2.default,
    components: {
        FixedHeader: _header2.default,
        SideNav: _sideNav2.default
    }
});