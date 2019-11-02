(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("npmComBgInputText", [], factory);
	else if(typeof exports === 'object')
		exports["npmComBgInputText"] = factory();
	else
		root["npmComBgInputText"] = factory();
})(window, function() {
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
/* harmony import */ var _npm_com_bg_input_text_vue_vue_type_template_id_5838ab21___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _npm_com_bg_input_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* empty/unused harmony star reexport *//* harmony import */ var _npm_com_bg_input_text_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _npm_com_bg_input_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _npm_com_bg_input_text_vue_vue_type_template_id_5838ab21___WEBPACK_IMPORTED_MODULE_0__["render"],
  _npm_com_bg_input_text_vue_vue_type_template_id_5838ab21___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/npm-com-bg-input-text.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_0_1_npm_com_bg_input_text_vue_vue_type_template_id_5838ab21___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_0_1_npm_com_bg_input_text_vue_vue_type_template_id_5838ab21___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_0_1_npm_com_bg_input_text_vue_vue_type_template_id_5838ab21___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
    "div",
    {
      class: [
        _vm.type === "textarea" ? "npm-com-bg-textarea" : "npm-com-bg-input",
        _vm.inputSize ? "npm-com-bg-input--" + _vm.inputSize : "",
        {
          "is-disabled": _vm.disabled
        }
      ]
    },
    [
      _vm.type !== "textarea"
        ? [
            _vm.type !== "textarea"
              ? _c(
                  "input",
                  _vm._b(
                    {
                      ref: "input",
                      staticClass: "npm-com-bg-input__inner",
                      attrs: {
                        tabindex: _vm.tabindex,
                        placeholder: _vm.placeholder,
                        autocomplete: _vm.autocomplete,
                        readonly: _vm.readonly,
                        disabled: _vm.disabled,
                        type: _vm.showPassword
                          ? _vm.passwordVisible
                            ? "text"
                            : "password"
                          : _vm.type,
                        "aria-label": _vm.label
                      },
                      on: {
                        compositionstart: _vm.handleCompositionStart,
                        compositionend: _vm.handleCompositionEnd,
                        input: _vm.handleInput,
                        focus: _vm.handleFocus,
                        blur: _vm.handleBlur,
                        change: _vm.handleChange
                      }
                    },
                    "input",
                    _vm.$attrs,
                    false
                  )
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.showClear || _vm.showPassword
              ? _c("span", { staticClass: "npm-com-bg-input__suffix" }, [
                  _c(
                    "span",
                    { staticClass: "npm-com-bg-input__suffix-inner" },
                    [
                      _vm.showClear
                        ? _c("i", {
                            staticClass:
                              "npm-com-bg-input__icon npm-com-bg-input__clear",
                            on: {
                              mousedown: _vm.handleMouseDown,
                              click: _vm.clear
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.showPwdVisible
                        ? _c("i", {
                            staticClass:
                              "npm-com-bg-input__icon npm-com-bg-input__showPwd",
                            on: {
                              mousedown: _vm.handleMouseDown,
                              click: _vm.handlePasswordVisible
                            }
                          })
                        : _vm._e()
                    ]
                  )
                ])
              : _vm._e()
          ]
        : _c(
            "textarea",
            _vm._b(
              {
                ref: "textarea",
                staticClass: "npm-com-bg-textarea__inner",
                attrs: {
                  placeholder: _vm.placeholder,
                  disabled: _vm.disabled,
                  "aria-label": _vm.label,
                  tabindex: _vm.tabindex,
                  readonly: _vm.readonly,
                  autocomplete: _vm.autocomplete
                },
                on: {
                  compositionstart: _vm.handleCompositionStart,
                  compositionend: _vm.handleCompositionEnd,
                  input: _vm.handleInput,
                  focus: _vm.handleFocus,
                  blur: _vm.handleBlur,
                  change: _vm.handleChange
                }
              },
              "textarea",
              _vm.$attrs,
              false
            )
          )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_input_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_input_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _npm_com_bg_input_text_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _npm_com_bg_input_text_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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
  name: 'npm-com-bg-input',
  componentName: 'npm-com-bg-input',
  data: function data() {
    return {
      passwordVisible: false,
      focused: false,
      isComposing: false,
      timer: null
    };
  },
  mounted: function mounted() {
    this.setNativeInputValue();
  },
  watch: {
    nativeInputValue: function nativeInputValue() {
      this.setNativeInputValue();
    }
  },
  computed: {
    // 清空
    showClear: function showClear() {
      return this.clearable && !this.readonly && this.focused;
    },
    nativeInputValue: function nativeInputValue() {
      return this.value === null || this.value === undefined ? '' : String(this.value); // eslint-disable-line
    },
    // 显示密码icon
    showPwdVisible: function showPwdVisible() {
      return this.showPassword && !this.readonly && !this.disabled && this.focused; // return this.showPassword && !this.readonly && !this.disabled;
    },
    inputSize: function inputSize() {
      return this.size;
    }
  },
  props: {
    /** 
     * input 值
    */
    value: [String, Number],

    /** 
     * 是否禁用
    */
    disabled: Boolean,

    /** 
     * 是否只读
    */
    readonly: Boolean,

    /** 
     * placeholder
    */
    placeholder: {
      type: String,
      default: '请输入'
    },

    /** 
     * 是否显示密码
    */
    showPassword: {
      type: Boolean,
      default: false
    },

    /** 
     * 是否清空
    */
    clearable: {
      type: Boolean,
      default: false
    },

    /** 
     * 大小 暂时不用
    */
    size: String,

    /** x
     * 类型 text, textera
    */
    type: {
      type: String,
      default: 'text'
    },

    /** 
     * 是否启用自动完成功能
    */
    autocomplete: {
      type: String,
      default: 'off'
    },

    /** 
     * 标签描述
    */
    label: String,

    /** 
     * input 索引
    */
    tabindex: String,

    /** 
     * 格式
    */
    formate: {
      type: String,
      default: ''
    }
  },
  methods: {
    // 聚焦方法
    focus: function focus() {
      this.getInput().focus();
      this.focused = true;
    },
    // 失焦
    blur: function blur() {
      this.getInput().blur();
    },

    /** 
     * 类似keydow 参考(https://developer.mozilla.org/zh-CN/docs/Web/Events/compositionstart)
    */
    handleCompositionStart: function handleCompositionStart() {
      this.isComposing = true;
    },
    handleCompositionEnd: function handleCompositionEnd(event) {
      this.isComposing = false;
      this.handleInput(event);
    },
    // input 事件
    handleInput: function handleInput(event) {
      if (this.isComposing) {
        return;
      }

      if (this.formate == 'phone') {
        event.target.value = event.target.value.replace(/\D/ig, '');
        event.target.value = event.target.value.substring(0, 11);
      }

      if (this.formate == 'number') {
        event.target.value = event.target.value.replace(/\D/ig, '');
      }

      this.$emit('input', event.target.value);
    },
    handleFocus: function handleFocus(event) {
      this.focused = true;
      this.$emit('focus', event);
    },
    handleBlur: function handleBlur(event) {
      this.focused = false;
      var value = event.target.value;
      var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/ig;

      switch (this.formate) {
        case 'email':
          if (!reg.test(value)) {
            event.target.value = '';
          }

          break;

        default:
          event.target.value = value;
      }

      this.$emit('blur', event);
    },
    handleChange: function handleChange(event) {
      this.$emit('change', event.target.value);
    },
    // 是否显示密码
    handlePasswordVisible: function handlePasswordVisible() {
      this.passwordVisible = !this.passwordVisible;
      this.focus();
    },
    // 将blur触发放到点击事件之后,详情(https://www.jb51.net/article/112086.htm)
    handleMouseDown: function handleMouseDown(e) {
      e.preventDefault();
    },
    setNativeInputValue: function setNativeInputValue() {
      var input = this.getInput();

      if (!input) {
        return;
      }

      if (input.value === this.nativeInputValue) {
        return;
      }

      input.value = this.nativeInputValue;
    },
    getInput: function getInput() {
      return this.$refs.input || this.$refs.textarea;
    },
    // 清空
    clear: function clear() {
      this.$emit('input', '');
      this.$emit('change', '');
      this.$emit('clear');
    }
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_input_text_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_input_text_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_input_text_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_input_text_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_input_text_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_input_text_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(13).default
var update = add("fb8ceb4a", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(9);
exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".npm-com-bg-input {\n  position: relative;\n  font-size: 0.14rem;\n  display: inline-block;\n  width: 100%;\n}\n.npm-com-bg-input__inner {\n    -webkit-appearance: none;\n    background-color: #fff;\n    background-image: none;\n    border-radius: 0.04rem;\n    border: 1px solid #dcdfe6;\n    -webkit-box-sizing: border-box;\n       -moz-box-sizing: border-box;\n            box-sizing: border-box;\n    color: #606266;\n    display: inline-block;\n    font-size: inherit;\n    height: 0.32rem;\n    line-height: 0.32rem;\n    outline: none;\n    padding: 0 0.15rem;\n    -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n    -o-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n    width: 100%;\n}\n.npm-com-bg-input__inner::-webkit-input-placeholder {\n      color: #c0c4cc;\n}\n.npm-com-bg-input__inner::-moz-placeholder {\n      color: #c0c4cc;\n}\n.npm-com-bg-input__inner:-ms-input-placeholder {\n      color: #c0c4cc;\n}\n.npm-com-bg-input__inner::-ms-input-placeholder {\n      color: #c0c4cc;\n}\n.npm-com-bg-input__inner::placeholder {\n      color: #c0c4cc;\n}\n.npm-com-bg-input__inner:hover {\n      border-color: #c0c4cc;\n}\n.npm-com-bg-input__inner:focus {\n      outline: none;\n      border-color: #4F65FE;\n}\n.npm-com-bg-input__suffix {\n    position: absolute;\n    height: 100%;\n    right: 0.05rem;\n    top: 0;\n    text-align: center;\n    color: #c0c4cc;\n    -webkit-transition: all 0.3s;\n    -o-transition: all 0.3s;\n    transition: all 0.3s;\n    pointer-events: none;\n}\n.npm-com-bg-input__suffix-inner {\n      pointer-events: all;\n}\n.npm-com-bg-input__icon {\n    display: inline-block;\n    height: 100%;\n    width: 0.2rem;\n    text-align: center;\n    -webkit-transition: all 0.3s;\n    -o-transition: all 0.3s;\n    transition: all 0.3s;\n    cursor: pointer;\n    line-height: 0.32rem;\n}\n.npm-com-bg-input__icon::after {\n      content: '';\n      height: 100%;\n      width: 0;\n      display: inline-block;\n      vertical-align: middle;\n}\n.npm-com-bg-input__showPwd {\n    background: url(" + escape(__webpack_require__(11)) + ") no-repeat;\n    background-size: 100%;\n    background-position: center;\n}\n.npm-com-bg-input__clear {\n    width: 0.15rem;\n    background: url(" + escape(__webpack_require__(12)) + ") no-repeat;\n    background-size: 100%;\n    background-position: center;\n}\n.npm-com-bg-input.is-active .npm-com-bg-input__inner {\n    outline: none;\n    border-color: #4F65FE;\n}\n.npm-com-bg-input.is-disabled .npm-com-bg-input__inner {\n    background-color: #f5f7fa;\n    border-color: #ebeef5;\n    color: #c0c4cc;\n    cursor: not-allowed;\n}\n.npm-com-bg-input.is-disabled .npm-com-bg-input__inner::-webkit-input-placeholder {\n      color: #c0c4cc;\n}\n.npm-com-bg-input.is-disabled .npm-com-bg-input__inner::-moz-placeholder {\n      color: #c0c4cc;\n}\n.npm-com-bg-input.is-disabled .npm-com-bg-input__inner:-ms-input-placeholder {\n      color: #c0c4cc;\n}\n.npm-com-bg-input.is-disabled .npm-com-bg-input__inner::-ms-input-placeholder {\n      color: #c0c4cc;\n}\n.npm-com-bg-input.is-disabled .npm-com-bg-input__inner::placeholder {\n      color: #c0c4cc;\n}\n.npm-com-bg-input.is-disabled .npm-com-bg-input__icon {\n    cursor: not-allowed;\n}\n.npm-com-bg-textarea__inner {\n  display: block;\n  resize: vertical;\n  padding: 5px 15px;\n  line-height: 1.5;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 100%;\n  font-size: inherit;\n  color: #606266;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #dcdfe6;\n  border-radius: 0.04rem;\n  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n  -o-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n\n/** disalbe default clear on IE */\n.com-input__inner::-ms-clear {\n  display: none;\n  width: 0;\n  height: 0;\n}\n", ""]);

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

module.exports = "data:image/png;base64,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"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 14 */
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
/* 15 */
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
//# sourceMappingURL=npm-com-bg-input-text.client.js.map