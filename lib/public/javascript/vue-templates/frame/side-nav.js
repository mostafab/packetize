"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {};
    },

    vuex: {
        getters: {}
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<ul class=\"side-nav fixed blue-grey darken-4\">\n      <li class=\"logo\"></li>\n</ul>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "D:\\Documents\\packet_maker\\src\\public\\javascript\\vue-templates\\frame\\side-nav.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}