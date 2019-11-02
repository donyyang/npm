(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("npmComBgInputNumber", [], factory);
	else if(typeof exports === 'object')
		exports["npmComBgInputNumber"] = factory();
	else
		root["npmComBgInputNumber"] = factory();
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
/* harmony import */ var _npm_com_bg_input_number_vue_vue_type_template_id_34246786___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _npm_com_bg_input_number_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* empty/unused harmony star reexport *//* harmony import */ var _npm_com_bg_input_number_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _npm_com_bg_input_number_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _npm_com_bg_input_number_vue_vue_type_template_id_34246786___WEBPACK_IMPORTED_MODULE_0__["render"],
  _npm_com_bg_input_number_vue_vue_type_template_id_34246786___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
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
    !_vm.isDisableMinus
      ? _c(
          "span",
          {
            staticClass: "minus-btn",
            class: { disabled: _vm.isDisableMinus },
            on: { click: _vm.minus }
          },
          [_vm._v("-")]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("input", {
      staticClass: "input",
      attrs: { type: "text" },
      domProps: { value: _vm.inputValue },
      on: { input: _vm.onInput }
    }),
    _vm._v(" "),
    !_vm.isDisablePlus
      ? _c(
          "span",
          {
            staticClass: "plus-btn",
            class: { disabled: _vm.isDisablePlus },
            on: { click: _vm.plus }
          },
          [_vm._v("+")]
        )
      : _vm._e()
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
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(window, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * @module npm-js-number
       * @desc 用作处理数字
       * @author swg [源码地址](http://gitlab.sys.bandubanxie.com/fe/npm/tree/master/npm-js-number)
       */

      /* harmony default export */


      __webpack_exports__["default"] = {
        /**
         * 数字前面补0
         * @param {Number|String} value 需要补0的数字
         * @param {Number} digit 补0后的位数
         * @return {String}
         */
        prefixZero: function prefixZero() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0; // 指定的总位数没有比当前数字大，直接范围当前数字的字符串形式

          if (digit <= value.toString().length) {
            return value.toString();
          } // 计算需要补充的0的数量


          var needZeroNum = digit - value.toString().length; // 生成前置0

          var zeroArr = [];

          for (var i = 0; i < needZeroNum; i++) {
            zeroArr.push('0');
          } // 拼接前置0+数字返回


          return zeroArr.join('') + value;
        },

        /**
         * 小数位后面补0
         * @param {Number|String} value 需要补0的数字
         * @param {Number} digit 补0后的位数
         * @return {String}
         */
        suffixZero: function suffixZero() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0; // 位数小于零时无效，不做处理

          if (digit < 0) {
            return value.toString();
          } // 获取小数位


          var arr = value.toString().split('.'); // 小数位长度

          var decimalsLength = arr[1] ? arr[1].length : 0; // 计算需要补充的0的数量

          var needZeroNum = digit - decimalsLength; // 生成前置0

          var zeroArr = [];

          for (var i = 0; i < needZeroNum; i++) {
            zeroArr.push('0');
          } // 拼接前置0+数字返回


          return value + (arr[1] ? '' : '.') + zeroArr.join('');
        },

        /**
         * 浮点数计算-除法
         * @param {Number|String} num 数字
         * @param {Number} digit 显示的有效位数（小数点后面的位数）
         * @returns {String}
         */
        format: function format(num, digit) {
          // 如果没传，不处理
          if (digit === undefined) {
            return num.toString();
          }

          var arr = num.toString().split('.');

          if (arr[1]) {}

          arr.let;
          expand = Math.pow(10, digit);
          return Math.round(new Number(a) * expand) / Math.round(new Number(b) * expand);
        },

        /**
         * 浮点数计算-加法
         * @param {Number} a 数字a
         * @param {Number} b 数字b
         * @param {Number} digit 有效位数（有效位之后的数字将被丢弃不予计算）
         * @returns {Number}
         */
        plus: function plus() {
          var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var digit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
          var expand = Math.pow(10, digit);
          var aaa = (Math.round(new Number(a) * expand) + Math.round(new Number(b) * expand)) / expand;
          return aaa;
        },

        /**
         * 浮点数计算-减法
         * @param {Number} a 数字a
         * @param {Number} b 数字b
         * @param {Number} digit 有效位数（有效位之后的数字将被丢弃不予计算）
         * @returns {Number}
         */
        minus: function minus() {
          var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var digit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
          var expand = Math.pow(10, digit);
          return (Math.round(new Number(a) * expand) - Math.round(new Number(b) * expand)) / expand;
        },

        /**
         * 浮点数计算-乘法
         * @param {Number} a 数字a
         * @param {Number} b 数字b
         * @param {Number} digit 有效位数（有效位之后的数字将被丢弃不予计算）
         * @returns {Number}
         */
        multiply: function multiply() {
          var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var digit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
          var expand = Math.pow(10, digit);
          return Math.round(new Number(a) * expand) * Math.round(new Number(b) * expand) / expand / expand;
        },

        /**
         * 浮点数计算-除法
         * @param {Number} a 数字a
         * @param {Number} b 数字b
         * @param {Number} digit 有效位数（有效位之后的数字将被丢弃不予计算）
         * @returns {Number}
         */
        divide: function divide() {
          var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var digit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
          var expand = Math.pow(10, digit);
          return Math.round(new Number(a) * expand) / Math.round(new Number(b) * expand);
        }
      };
      /***/
    }
    /******/
    ])
  );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_npm_build_webpack_module_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_3_node_modules_sass_loader_lib_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_input_number_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_npm_build_webpack_module_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_3_node_modules_sass_loader_lib_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_input_number_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_npm_build_webpack_module_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_3_node_modules_sass_loader_lib_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_input_number_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_npm_build_webpack_module_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_3_node_modules_sass_loader_lib_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_input_number_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_npm_build_webpack_module_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_3_node_modules_sass_loader_lib_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_input_number_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_npm_build_webpack_module_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_3_node_modules_sass_loader_lib_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_input_number_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(12).default
var update = add("777db824", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, ".npm-com-bg-input-number{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:.32rem;line-height:.32rem;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:.01rem solid #CACBDA;border-radius:.04rem;background-color:#fff;overflow:hidden}.npm-com-bg-input-number .minus-btn,.npm-com-bg-input-number .input,.npm-com-bg-input-number .plus-btn{height:.3rem;line-height:.3rem;display:block;text-align:center}.npm-com-bg-input-number .minus-btn,.npm-com-bg-input-number .plus-btn{width:.32rem;background-color:#f5f7fa;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;font-size:.14rem}.npm-com-bg-input-number .minus-btn:not(.disabled):hover,.npm-com-bg-input-number .plus-btn:not(.disabled):hover{background-color:#4f65fe;color:#fff}.npm-com-bg-input-number .minus-btn:not(.disabled):active,.npm-com-bg-input-number .plus-btn:not(.disabled):active{background-color:#4f65fe;color:#fff;opacity:0.8}.npm-com-bg-input-number .minus-btn{border-right:.01rem solid #CACBDA}.npm-com-bg-input-number .input{width:0;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;border:none;color:#404049;font-size:.14rem}.npm-com-bg-input-number .plus-btn{border-left:.01rem solid #CACBDA}\n", ""]);

// exports


/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
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
//# sourceMappingURL=npm-com-bg-input-number.client.js.map