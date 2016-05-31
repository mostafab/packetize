'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _headerActions = require('./../../actions/header-actions');

var actions = _interopRequireWildcard(_headerActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
    data: function data() {
        return {};
    },

    vuex: {
        getters: {
            headerTitle: function headerTitle(state) {
                return state.header.headerTitle;
            },
            headerLinks: function headerLinks(state) {
                return state.header.headerLinks;
            }
        },
        actions: actions
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n\n<div>\n    <nav class=\"blue-grey darken-3\">\n        <div class=\"nav-wrapper\">\n            <a v-on:click=\"login\" class=\"brand-logo center\">{{ headerTitle }}</a>\n            <ul class=\"left hide-on-med-and-down\" v-for=\"link in headerLinks\">\n                <li>\n                    <a> {{ link.name }} </a>\n                </li>\n            </ul>\n        </div>\n    </nav>\n</div>\n\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "D:\\Documents\\packet_maker\\src\\public\\javascript\\vue-templates\\frame\\header.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}