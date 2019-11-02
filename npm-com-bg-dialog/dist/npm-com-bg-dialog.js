(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("npmComBgDialog", [], factory);
	else if(typeof exports === 'object')
		exports["npmComBgDialog"] = factory();
	else
		root["npmComBgDialog"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _npm_com_bg_dialog_vue_vue_type_template_id_66781399___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _npm_com_bg_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);



function injectStyles (context) {
  
  var style0 = __webpack_require__(6)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _npm_com_bg_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _npm_com_bg_dialog_vue_vue_type_template_id_66781399___WEBPACK_IMPORTED_MODULE_0__["render"],
  _npm_com_bg_dialog_vue_vue_type_template_id_66781399___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "ae666bc2"
  
)

component.options.__file = "src/npm-com-bg-dialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_0_1_npm_com_bg_dialog_vue_vue_type_template_id_66781399___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_0_1_npm_com_bg_dialog_vue_vue_type_template_id_66781399___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_0_1_npm_com_bg_dialog_vue_vue_type_template_id_66781399___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: { name: "dialog-fade" },
      on: { "after-enter": _vm.afterEnter, "after-leave": _vm.afterLeave }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }
          ],
          staticClass: "npm-com-bg-dialog__wrapper",
          on: {
            click: function($event) {
              if ($event.target !== $event.currentTarget) {
                return null
              }
              return _vm.handleWrapperClick($event)
            }
          }
        },
        [
          _c(
            "div",
            {
              ref: "dialog",
              staticClass: "npm-com-bg-dialog",
              class: [
                {
                  "is-fullscreen": _vm.fullscreen,
                  "npm-com-bg-dialog--center": _vm.center
                },
                _vm.customClass
              ],
              style: _vm.style,
              attrs: {
                role: "dialog",
                "aria-modal": "true",
                "aria-label": _vm.title || "dialog"
              }
            },
            [
              _c(
                "div",
                { staticClass: "npm-com-bg-dialog__header" },
                [
                  _vm._t("title", [
                    _c("span", { staticClass: "npm-com-bg-dialog__title" }, [
                      _vm._v(_vm._s(_vm.title))
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.showClose
                    ? _c(
                        "button",
                        {
                          staticClass: "npm-com-bg-dialog__headerbtn",
                          attrs: { type: "button", "aria-label": "Close" },
                          on: { click: _vm.handleClose }
                        },
                        [_c("i", { staticClass: "close-icon" })]
                      )
                    : _vm._e()
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "npm-com-bg-dialog__body" },
                [_vm._t("default")],
                2
              ),
              _vm._v(" "),
              _vm.$slots.footer
                ? _c(
                    "div",
                    { staticClass: "npm-com-bg-dialog__footer" },
                    [_vm._t("footer")],
                    2
                  )
                : _vm._e()
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _npm_com_bg_dialog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _npm_com_bg_dialog_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'NpmComBgDialog',
  data: function data() {
    return {
      rendered: false
    };
  },
  mounted: function mounted() {
    if (this.visible) {
      this.rendered = true;
      this.open();
    }
  },
  watch: {
    visible: function visible(val) {
      var _this = this;

      if (val) {
        this.close = false;
        this.$emit('open');
        this.$nextTick(function () {
          _this.$refs.dialog.scrollTop = 0;
        });
      } else {
        if (!this.close) {
          this.$emit('close');
        }
      }
    }
  },
  computed: {
    style: function style() {
      var style = {};

      if (!this.fullscreen) {
        style.marginTop = this.top;

        if (this.width) {
          style.width = this.width;
        }
      }

      return style;
    }
  },
  props: {
    /** 
     * 弹框的标题
    */
    title: {
      type: String,
      default: ''
    },

    /** 
     * 是否显示
    */
    visible: {
      type: Boolean,
      default: false
    },

    /** 
     * 点击蒙层是否关闭
    */
    closeOnClickModal: {
      type: Boolean,
      default: true
    },

    /** 
     * 宽度
    */
    width: String,

    /** 
     * 全屏
    */
    fullscreen: {
      type: Boolean,
      default: false
    },

    /** 
     * 离顶部的高度
    */
    top: {
      type: String,
      default: '15vh'
    },

    /** 
     * 关闭之前的回调
    */
    beforeClose: Function,

    /** 
     * 是否居中
    */
    center: {
      type: Boolean,
      default: false
    },

    /** 
     * 额外类
    */
    customClass: {
      type: String,
      default: ''
    },

    /** 
     * 是否显示关闭按钮
    */
    showClose: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleClose: function handleClose() {
      if (this.beforeClose) {
        this.beforeClose();
      } else {
        this.hide();
      }
    },
    hide: function hide(cancel) {
      if (cancel !== false) {
        this.$emit('update:visible', false);
        this.$emit('close');
        this.closed = true;
      }
    },
    handleWrapperClick: function handleWrapperClick() {
      if (!this.closeOnClickModal) return;
      this.handleClose();
    },
    afterEnter: function afterEnter() {
      this.$emit('opened');
    },
    afterLeave: function afterLeave() {
      this.$emit('closed');
    },
    destroyed: function destroyed() {
      if (this.appendToBody && this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
    }
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_dialog_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_dialog_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_dialog_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_dialog_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_dialog_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_dialog_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(12).default
module.exports.__inject__ = function (context) {
  add("eab43a6a", content, false, context)
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(9);
exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".npm-com-bg-dialog {\n  position: relative;\n  margin: 0 auto 0.5rem;\n  background: #fff;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 50%;\n}\n.npm-com-bg-dialog.is-fullscreen {\n    width: 100%;\n    margin-top: 0;\n    margin-bottom: 0;\n    height: 100%;\n    overflow: auto;\n}\n.npm-com-bg-dialog__wrapper {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 10;\n    overflow: auto;\n    margin: 0;\n    background: rgba(0, 0, 0, 0.5);\n}\n.npm-com-bg-dialog__header {\n    padding: 0.2rem;\n    padding-bottom: 0.1rem;\n    text-align: center;\n    border: 0.01rem solid #eeeeee;\n}\n.npm-com-bg-dialog__headerbtn {\n    position: absolute;\n    top: 0.2rem;\n    right: 0.2rem;\n    padding: 0;\n    background: transparent;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    font-size: 0.16rem;\n}\n.npm-com-bg-dialog__headerbtn .npm-com-bg-dialog__close {\n      color: #909399;\n}\n.npm-com-bg-dialog__headerbtn .close-icon {\n      display: inline-block;\n      background: url(" + escape(__webpack_require__(11)) + ") no-repeat center;\n      background-size: 100%;\n      width: 0.2rem;\n      height: 0.2rem;\n}\n.npm-com-bg-dialog__headerbtn:focus .npm-com-bg-dialog__close, .npm-com-bg-dialog__headerbtn:hover .npm-com-bg-dialog__close {\n      color: #4F65FE;\n}\n.npm-com-bg-dialog__title {\n    line-height: 0.24rem;\n    font-size: 0.18rem;\n    color: #4F65FE;\n}\n.npm-com-bg-dialog__body {\n    padding: 0.15rem 0.2rem;\n    color: #606266;\n    font-size: 0.14rem;\n    word-break: break-all;\n}\n.npm-com-bg-dialog__footer {\n    padding: 0.2rem;\n    padding-top: 0.1rem;\n    text-align: right;\n    -webkit-box-sizing: border-box;\n       -moz-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.npm-com-bg-dialog--center {\n    text-align: center;\n}\n.npm-com-bg-dialog--center .npm-com-bg-dialog__body {\n      text-align: initial;\n      padding: 0.25rem 0.25rem 0.3rem;\n}\n.npm-com-bg-dialog--center .npm-com-bg-dialog__footer {\n      text-align: inherit;\n}\n.dialog-fade-enter-active {\n  -webkit-animation: dialog-fade-in 0.3s;\n          animation: dialog-fade-in 0.3s;\n}\n.dialog-fade-leave-active {\n  -webkit-animation: dialog-fade-out 0.3s;\n          animation: dialog-fade-out 0.3s;\n}\n@-webkit-keyframes dialog-fade-in {\n0% {\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    opacity: 1;\n}\n}\n@keyframes dialog-fade-in {\n0% {\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    opacity: 1;\n}\n}\n@-webkit-keyframes dialog-fade-out {\n0% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    opacity: 1;\n}\n100% {\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n    opacity: 0;\n}\n}\n@keyframes dialog-fade-out {\n0% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    opacity: 1;\n}\n100% {\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n    opacity: 0;\n}\n}\n", ""]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url)) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media " + item[2] + "{" + content + "}";
      } else {
        return content;
      }
    }).join("");
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === "string") modules = [[null, modules, ""]];
    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];
      if (typeof id === "number") alreadyImportedModules[id] = true;
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      //  when a module is imported multiple times with different media queries.
      //  I hope this will never occur (Hey this way we have smaller bundles)

      if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAV1BMVEUAAACPj4+NjY2GhoaJiYmKioqKioqKioqKioqKioqJiYmJiYmKioqJiYmKioqKioqJiYmJiYmNjY2KioqKioqKioqJiYmJiYmKioqKioqKioqKioqKiorfpFdyAAAAHHRSTlMABQwIxJ2+uMjRsqyWpMyHd44QbzxW5fRefy0ZihFqUwAAAwVJREFUeNrt3Ntu4jAUheGdhAQoh5JOy6H1+z/nZBhVHgmvNJ04rpe1/gfA+rRjELnYppRSSimllFJKKaWUUkoppQrutT1etu2rfVXmBzd797d9bSnzB7dRDq5W7rPtiyWs3rjPjo3N7+RcWol3+J5tfmf3I5J65f7pEuG+OV9CSXN3+OZf+DeXQILm4btGgCSQoHn43mxu7y6dBDvce7zLjiUJHFub39UlkKD74Z+sCPXuoSOQLOXYW5T2AUltC9UEHAczOglw0EmAg04ScuzM6CTAQScBDjoJcrBJoCN+bUhC6AASQseCkqYbd7BIvnZwSKY4GCTTHPlLpjpyl0x35C35jiNnSSrHdMmmJnQASRzHk42VpyToqGy0HCVZOICE0AEkhA4gIXTMklQ5OWZIqnVWDrNDSELoABJCB5AQOoCE0AEkhA4gIXQACaEDSAgdQDLNsc7JEZY0hI6gZNUQOoCE0AEkhA4gIXQACaFjRFI9UTmAhNABJISOsCTksOzbuYcI53GXFOIYJIU4BkkhjkFSiGNU0jE5RiRdY1ztCnEMkkIcZudHx+XF+NoVcNPvjiK+swZH6d++ZJLBUYKkGhwlSPz/Qe5fd+/ArQgkfxxFSAKO/hefpAo5zOgkwEEnAQ46CXDQSYCDTgIcdBLgoJNU66CDThJy7M3oJMDx2ClvCXBMldSWScAxWbLJRAIcdBLgoJMAB50EOOgkwEEnAQ46SdUFHXQS4KCTAAedBDjoJMBBJwEOOglw0EmAI4pkm0SCHa39V7fvSDJ2mD3/nKQJO+gkzSrooJMAB50EOOgkwEEnAQ46CXDQSYCDTgIcdBLgoJMAR1RJih2dddhBJ6k3QQedBDnYJNjBJRlzMEnGHTySauk9qXi/cOQF+IkdXhJ7AX6C5wo8XXEX4Kedh59J9AX4KeeBZ3KNDjlYkvqlF+C3lqg+/gL8dPPAkrPN75puHlhyjfuBB0tav9SLgd4Sd/Mv+uP0ceq67vZhk6M/WCmllFJKKaWUUkoppZRSKv9+A7TQ/3SPXs3uAAAAAElFTkSuQmCC"

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesServer; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=npm-com-bg-dialog.js.map