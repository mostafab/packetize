'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _header = require('./vue-templates/header/header');

var _header2 = _interopRequireDefault(_header);

var _store = require('./stores/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ---------------------------------------------------------- */

var app = new _vue2.default({
    el: '#app',
    store: _store2.default,
    components: {
        FixedHeader: _header2.default
    }
});