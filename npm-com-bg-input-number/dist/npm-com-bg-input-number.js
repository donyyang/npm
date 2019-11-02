(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("npmComBgInputNumber", [], factory);
	else if(typeof exports === 'object')
		exports["npmComBgInputNumber"] = factory();
	else
		root["npmComBgInputNumber"] = factory();
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
/* harmony import */ var _npm_com_bg_input_number_vue_vue_type_template_id_34246786___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _npm_com_bg_input_number_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);



function injectStyles (context) {
  
  var style0 = __webpack_require__(7)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _npm_com_bg_input_number_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _npm_com_bg_input_number_vue_vue_type_template_id_34246786___WEBPACK_IMPORTED_MODULE_0__["render"],
  _npm_com_bg_input_number_vue_vue_type_template_id_34246786___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "5681d5aa"
  
)

component.options.__file = "src/npm-com-bg-input-number.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_npm_build_webpack_module_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_0_1_npm_com_bg_input_number_vue_vue_type_template_id_34246786___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_npm_build_webpack_module_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_0_1_npm_com_bg_input_number_vue_vue_type_template_id_34246786___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_npm_build_webpack_module_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_0_1_npm_com_bg_input_number_vue_vue_type_template_id_34246786___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
  return _c("div", { staticClass: "npm-com-bg-input-number" }, [
    _vm._ssrNode(
      (!_vm.isDisableMinus
        ? "<span" +
          _vm._ssrClass("minus-btn", { disabled: _vm.isDisableMinus }) +
          ">-</span>"
        : "<!---->") +
        ' <input type="text"' +
        _vm._ssrAttr("value", _vm.inputValue) +
        ' class="input"> ' +
        (!_vm.isDisablePlus
          ? "<span" +
            _vm._ssrClass("plus-btn", { disabled: _vm.isDisablePlus }) +
            ">+</span>"
          : "<!---->")
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_npm_build_webpack_module_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_input_number_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_npm_build_webpack_module_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_input_number_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _npm_com_bg_input_number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _npm_com_bg_input_number_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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
/* harmony import */ var npm_js_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var npm_js_number__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(npm_js_number__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    /**
     * 文本框的（初始&最终）值
     */
    value: {
      type: String,
      default: '0'
    },

    /**
     * 自（增/减）的量，每次点击按钮时按照此值（自增/自减）
     */
    step: {
      type: String,
      default: '1'
    },

    /**
     * 小数点位数（默认不处理）
     */
    digit: {
      type: String,
      default: '-1'
    },

    /**
     * 最小值
     */
    minValue: {
      type: String,
      default: null
    },

    /**
     * 最大值
     */
    maxValue: {
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      inputValue: null
    };
  },
  computed: {
    /**
     * 是否禁止自减按钮
     */
    isDisableMinus: function isDisableMinus() {
      // 计算下一次自减后且格式化的值
      var newValue = npm_js_number__WEBPACK_IMPORTED_MODULE_0___default.a.suffixZero(npm_js_number__WEBPACK_IMPORTED_MODULE_0___default.a.minus(this.inputValue, this.step), this.digit); // 判断结果

      return this.minValue !== null && new Number(newValue) < new Number(this.minValue);
    },

    /**
     * 是否禁止自增按钮
     */
    isDisablePlus: function isDisablePlus() {
      // 计算下一次自增后且格式化的值
      var newValue = npm_js_number__WEBPACK_IMPORTED_MODULE_0___default.a.suffixZero(npm_js_number__WEBPACK_IMPORTED_MODULE_0___default.a.plus(this.inputValue, this.step), this.digit); // 判断结果

      return this.maxValue !== null && new Number(newValue) > new Number(this.maxValue);
    }
  },
  created: function created() {
    this.inputValue = npm_js_number__WEBPACK_IMPORTED_MODULE_0___default.a.suffixZero(this.value, this.digit);
  },
  mounted: function mounted() {},
  beforeDestroy: function beforeDestroy() {},
  methods: {
    /**
     * 自减
     */
    minus: function minus() {
      // 计算自减后且格式化的值
      var newValue = npm_js_number__WEBPACK_IMPORTED_MODULE_0___default.a.suffixZero(npm_js_number__WEBPACK_IMPORTED_MODULE_0___default.a.minus(this.inputValue, this.step), this.digit); // 最小值检测

      if (this.minValue === null || new Number(newValue) >= new Number(this.minValue)) {
        this.inputValue = newValue;
        this.$emit('change', newValue);
      }
    },

    /**
     * 自增
     */
    plus: function plus() {
      // 计算自增后且格式化的值
      var newValue = npm_js_number__WEBPACK_IMPORTED_MODULE_0___default.a.suffixZero(npm_js_number__WEBPACK_IMPORTED_MODULE_0___default.a.plus(this.inputValue, this.step), this.digit); // 最大值检测

      if (this.maxValue === null || new Number(newValue) <= new Number(this.maxValue)) {
        this.inputValue = newValue;
        this.$emit('change', newValue);
      }
    },

    /**
     * 键盘输入回调
     */
    onInput: function onInput(event) {
      // 键盘输入的新值
      var newValue = event.target.value; // 超出范围

      if (this.minValue !== null && new Number(newValue) < new Number(this.minValue) || this.maxValue !== null && new Number(newValue) > new Number(this.maxValue)) {
        this.inputValue = this.inputValue; // 符合范围
      } else {
        newValue = npm_js_number__WEBPACK_IMPORTED_MODULE_0___default.a.suffixZero(newValue, this.digit);
        debugger;
        this.inputValue = newValue;
        this.$emit('change', newValue);
      }

      this.$forceUpdate();
    }
  },
  filters: {},
  watch: {}
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("npm-js-number");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_npm_build_webpack_module_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_3_node_modules_sass_loader_lib_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_input_number_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_npm_build_webpack_module_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_3_node_modules_sass_loader_lib_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_input_number_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_npm_build_webpack_module_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_3_node_modules_sass_loader_lib_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_input_number_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_npm_build_webpack_module_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_3_node_modules_sass_loader_lib_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_input_number_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_npm_build_webpack_module_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_3_node_modules_sass_loader_lib_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_input_number_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_npm_build_webpack_module_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_3_node_modules_sass_loader_lib_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_input_number_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("777db824", content, false, context)
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".npm-com-bg-input-number{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:.32rem;line-height:.32rem;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:.01rem solid #CACBDA;border-radius:.04rem;background-color:#fff;overflow:hidden}.npm-com-bg-input-number .minus-btn,.npm-com-bg-input-number .input,.npm-com-bg-input-number .plus-btn{height:.3rem;line-height:.3rem;display:block;text-align:center}.npm-com-bg-input-number .minus-btn,.npm-com-bg-input-number .plus-btn{width:.32rem;background-color:#f5f7fa;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;font-size:.14rem}.npm-com-bg-input-number .minus-btn:not(.disabled):hover,.npm-com-bg-input-number .plus-btn:not(.disabled):hover{background-color:#4f65fe;color:#fff}.npm-com-bg-input-number .minus-btn:not(.disabled):active,.npm-com-bg-input-number .plus-btn:not(.disabled):active{background-color:#4f65fe;color:#fff;opacity:0.8}.npm-com-bg-input-number .minus-btn{border-right:.01rem solid #CACBDA}.npm-com-bg-input-number .input{width:0;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;border:none;color:#404049;font-size:.14rem}.npm-com-bg-input-number .plus-btn{border-left:.01rem solid #CACBDA}\n", ""]);

// exports


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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesServer; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);


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
/* 12 */
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
/* 13 */
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
//# sourceMappingURL=npm-com-bg-input-number.js.map