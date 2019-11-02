(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("npmComBgPagination", [], factory);
	else if(typeof exports === 'object')
		exports["npmComBgPagination"] = factory();
	else
		root["npmComBgPagination"] = factory();
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
/* harmony import */ var _npm_com_bg_pagination_vue_vue_type_template_id_50c1506b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _npm_com_bg_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* empty/unused harmony star reexport *//* harmony import */ var _npm_com_bg_pagination_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _npm_com_bg_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _npm_com_bg_pagination_vue_vue_type_template_id_50c1506b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _npm_com_bg_pagination_vue_vue_type_template_id_50c1506b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/npm-com-bg-pagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_0_1_npm_com_bg_pagination_vue_vue_type_template_id_50c1506b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_0_1_npm_com_bg_pagination_vue_vue_type_template_id_50c1506b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_0_1_npm_com_bg_pagination_vue_vue_type_template_id_50c1506b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
      staticClass: "npm-com-bg-pagination",
      class: { "is-background": _vm.background }
    },
    [
      _vm.showTotal
        ? _c("span", { staticClass: "pagination-total" }, [
            _vm._v("共 " + _vm._s(_vm.total) + " 条")
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("button", {
        staticClass: "btn-prev",
        attrs: {
          type: "button",
          disabled: _vm.disabled || _vm.internalCurrentPage <= 1
        },
        on: { click: _vm.handlePre }
      }),
      _vm._v(" "),
      _c("com-pager", {
        attrs: {
          currentPage: _vm.internalCurrentPage,
          pageCount: _vm.internalPageCount,
          pagerCount: _vm.pagerCount,
          disabled: _vm.disabled
        },
        on: { change: _vm.handleChangePage }
      }),
      _vm._v(" "),
      _c("button", {
        staticClass: "btn-next",
        attrs: {
          type: "button",
          disabled:
            _vm.disabled || _vm.internalCurrentPage >= _vm.internalPageCount
        },
        on: { click: _vm.handleNext }
      }),
      _vm._v(" "),
      _vm.jump
        ? _c("span", { staticClass: "pagination_jump" }, [
            _c("span", { staticClass: "jump_text" }, [_vm._v("前往")]),
            _vm._v(" "),
            _c("div", { staticClass: "pagination-input" }, [
              _c("input", {
                staticClass: "input-inner",
                attrs: {
                  disabled: _vm.disabled,
                  type: "number",
                  min: 1,
                  max: _vm.internalCurrentPage
                },
                domProps: { value: _vm.internalCurrentPage },
                on: { change: _vm.handleIptChange }
              })
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "jump_text" }, [_vm._v("页")])
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _npm_com_bg_pagination_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _npm_com_bg_pagination_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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
  props: {
    /**
     * @desc 总数,是否显示总数
     */
    total: {
      type: Number,
      default: 0
    },

    /** 
     * 是否显示总数
    */
    showTotal: {
      type: Boolean,
      default: false
    },

    /** 
     * 每页显示总条目个数
    */
    pageSize: {
      type: Number,
      default: 10
    },

    /** 
     * 总页数
    */
    pageCount: {
      type: Number,
      default: 0
    },

    /** 
     * 是否禁用
    */
    disabled: {
      type: Boolean,
      default: false
    },

    /** 
     * 当前页数
    */
    currentPage: {
      type: Number,
      default: 1
    },

    /** 
     * 页码按钮的数量
    */
    pagerCount: {
      type: Number,
      validator: function validator(value) {
        return value > 4 && value < 22 && value % 2 === 1;
      },
      default: 7
    },

    /** 
     * 是否显示跳转功能
    */
    jump: {
      type: Boolean,
      default: false
    },

    /** 
     * 是否有背景
    */
    background: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      internalCurrentPage: 1,
      internalPageSize: 10
    };
  },
  computed: {
    internalPageCount: function internalPageCount() {
      if (typeof this.total === 'number') {
        return Math.max(1, Math.ceil(this.total / this.pageSize));
      } else if (typeof this.pageCount === 'number') {
        return Math.max(1, this.pageCount);
      }

      return null;
    }
  },
  watch: {
    currentPage: {
      // 最初时候watch就执行
      immediate: true,
      handler: function handler(val) {
        this.internalCurrentPage = val;
      }
    },
    pageSize: {
      immediate: true,
      handler: function handler(val) {
        this.internalPageSize = isNaN(val) ? 10 : val;
      }
    }
  },
  components: {
    'com-pager': __webpack_require__(6).default
  },
  created: function created() {},
  mounted: function mounted() {},
  beforeDestroy: function beforeDestroy() {},
  methods: {
    // 点击当前页
    handleChangePage: function handleChangePage(val) {
      this.internalCurrentPage = val;
      this.emitChange();
    },
    // 点击前一页按钮
    handlePre: function handlePre() {
      if (this.disabled || this.internalCurrentPage <= 1) return;
      this.internalCurrentPage = this.internalCurrentPage - 1;
      this.$emit('pre-click', this.internalCurrentPage);
      this.emitChange();
    },
    // 点击后一页按钮
    handleNext: function handleNext() {
      if (this.disabled || this.internalCurrentPage >= this.internalPageCount) return;
      this.internalCurrentPage = this.internalCurrentPage + 1;
      this.$emit('next-click', this.internalCurrentPage);
      this.emitChange();
    },
    emitChange: function emitChange() {
      var _this = this;

      this.$nextTick(function () {
        _this.$emit('current-change', _this.internalCurrentPage);
      });
    },
    // 输入框发生变化
    handleIptChange: function handleIptChange(e) {
      var val = Number(e.target.value);
      this.internalCurrentPage = val;
      this.emitChange();
    }
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pager_vue_vue_type_template_id_4d0ee3ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _pager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _pager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pager_vue_vue_type_template_id_4d0ee3ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pager_vue_vue_type_template_id_4d0ee3ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/com/pager.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_0_1_pager_vue_vue_type_template_id_4d0ee3ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_0_1_pager_vue_vue_type_template_id_4d0ee3ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_0_1_pager_vue_vue_type_template_id_4d0ee3ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 8 */
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
    "ul",
    { staticClass: "pagination-pager", on: { click: _vm.handlePagerClick } },
    [
      _vm.pageCount > 0
        ? _c(
            "li",
            {
              staticClass: "number",
              class: { active: _vm.currentPage === 1, disabled: _vm.disabled }
            },
            [_vm._v("1")]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.showPrevMore
        ? _c("li", {
            staticClass: "more btn-quickprev",
            class: { disabled: _vm.disabled }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.pagers, function(pager) {
        return _c(
          "li",
          {
            key: pager,
            staticClass: "number",
            class: { active: _vm.currentPage === pager, disabled: _vm.disabled }
          },
          [_vm._v(_vm._s(pager))]
        )
      }),
      _vm._v(" "),
      _vm.showNextMore
        ? _c("li", {
            staticClass: "more btn-quicknext",
            class: { disabled: _vm.disabled }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.pageCount > 1
        ? _c(
            "li",
            {
              staticClass: "number",
              class: {
                active: _vm.currentPage === _vm.pageCount,
                disabled: _vm.disabled
              }
            },
            [_vm._v(_vm._s(_vm.pageCount))]
          )
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_pager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_pager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _pager_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'pager',
  props: {
    currentPage: Number,
    pageCount: Number,
    pagerCount: Number,
    disabled: Boolean
  },
  watch: {// showPrevMore(val) {
    //   if (!val) this.quickprevIconClass = 'el-icon-more';
    // },
    // showNextMore(val) {
    //   if (!val) this.quicknextIconClass = 'el-icon-more';
    // }
  },
  methods: {
    handlePagerClick: function handlePagerClick(event) {
      var target = event.target;

      if (target.tagName === 'UL' || this.disabled) {
        return;
      }

      var newPage = Number(event.target.textContent);
      var pageCount = this.pageCount;
      var currentPage = this.currentPage;
      var pagerCountOffset = this.pagerCount - 2;

      if (target.className.indexOf('more') !== -1) {
        if (target.className.indexOf('quickprev') !== -1) {
          newPage = currentPage - pagerCountOffset;
        } else if (target.className.indexOf('quicknext') !== -1) {
          newPage = currentPage + pagerCountOffset;
        }
      }
      /* istanbul ignore if */


      if (!isNaN(newPage)) {
        if (newPage < 1) {
          newPage = 1;
        }

        if (newPage > pageCount) {
          newPage = pageCount;
        }
      }

      if (newPage !== currentPage) {
        this.$emit('change', newPage);
      }
    } // onMouseenter(direction) {
    //   if (this.disabled) return;
    //   if (direction === 'left') {
    //     this.quickprevIconClass = 'el-icon-d-arrow-left';
    //   } else {
    //     this.quicknextIconClass = 'el-icon-d-arrow-right';
    //   }
    // }

  },
  computed: {
    pagers: function pagers() {
      var pagerCount = this.pagerCount;
      var halfPagerCount = (pagerCount - 1) / 2;
      var currentPage = Number(this.currentPage);
      var pageCount = Number(this.pageCount);
      var showPrevMore = false;
      var showNextMore = false;

      if (pageCount > pagerCount) {
        if (currentPage > pagerCount - halfPagerCount) {
          showPrevMore = true;
        }

        if (currentPage < pageCount - halfPagerCount) {
          showNextMore = true;
        }
      }

      var array = [];

      if (showPrevMore && !showNextMore) {
        var startPage = pageCount - (pagerCount - 2);

        for (var i = startPage; i < pageCount; i++) {
          array.push(i);
        }
      } else if (!showPrevMore && showNextMore) {
        for (var _i = 2; _i < pagerCount; _i++) {
          array.push(_i);
        }
      } else if (showPrevMore && showNextMore) {
        var offset = Math.floor(pagerCount / 2) - 1;

        for (var _i2 = currentPage - offset; _i2 <= currentPage + offset; _i2++) {
          array.push(_i2);
        }
      } else {
        for (var _i3 = 2; _i3 < pageCount; _i3++) {
          array.push(_i3);
        }
      }

      this.showPrevMore = showPrevMore;
      this.showNextMore = showNextMore;
      return array;
    }
  },
  data: function data() {
    return {
      current: null,
      showPrevMore: false,
      showNextMore: false // quicknextIconClass: 'el-icon-more',
      // quickprevIconClass: 'el-icon-more'

    };
  }
});

/***/ }),
/* 12 */
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


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_pagination_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_pagination_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_pagination_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_pagination_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_pagination_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_pagination_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(15);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(22).default
var update = add("6d7211ef", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(16);
exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".npm-com-bg-pagination {\n  white-space: nowrap;\n  padding: 0.02rem 0.05rem;\n  color: #303133;\n  font-weight: bold;\n}\n.npm-com-bg-pagination::before,\n  .npm-com-bg-pagination::after {\n    display: block;\n    content: '';\n}\n.npm-com-bg-pagination::after {\n    clear: both;\n}\n.npm-com-bg-pagination .btn-prev,\n  .npm-com-bg-pagination .btn-next,\n  .npm-com-bg-pagination .pagination-pager li,\n  .npm-com-bg-pagination .pagination-pager li.btn-quicknext,\n  .npm-com-bg-pagination .pagination-pager li.btn-quickprev,\n  .npm-com-bg-pagination .pagination-pager li:last-child {\n    border-color: transparent;\n    font-size: 0.13rem;\n    line-height: 0.28rem;\n    height: 0.28rem;\n    min-width: 0.35rem;\n}\n.npm-com-bg-pagination .arrow.disabled {\n    visibility: hidden;\n}\n.npm-com-bg-pagination .more::before,\n  .npm-com-bg-pagination li.more::before {\n    line-height: 0.24rem;\n}\n.npm-com-bg-pagination span:not([class*=suffix]),\n  .npm-com-bg-pagination button {\n    height: 0.28rem;\n    line-height: 0.28rem;\n}\n.npm-com-bg-pagination span:not([class*=suffix]),\n  .npm-com-bg-pagination button {\n    display: inline-block;\n    font-size: 0.13rem;\n    min-width: 0.35rem;\n    height: 0.28rem;\n    line-height: 0.28rem;\n    vertical-align: top;\n    -webkit-box-sizing: border-box;\n       -moz-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.npm-com-bg-pagination button {\n    border: none;\n    padding: 0 6px;\n    background: transparent;\n}\n.npm-com-bg-pagination button:focus {\n      outline: none;\n}\n.npm-com-bg-pagination button:hover {\n      color: #4F65FE;\n}\n.npm-com-bg-pagination button:disabled {\n      color: #C0C4CC;\n      background-color: #fff;\n      cursor: not-allowed;\n}\n.npm-com-bg-pagination .btn-prev,\n  .npm-com-bg-pagination .btn-next {\n    background-size: 0.16rem;\n    background-image: url(" + escape(__webpack_require__(18)) + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-color: #fff;\n    cursor: pointer;\n    margin: 0;\n    color: #303133;\n}\n.npm-com-bg-pagination .btn-prev:hover,\n    .npm-com-bg-pagination .btn-next:hover {\n      background-image: url(" + escape(__webpack_require__(19)) + ");\n}\n.npm-com-bg-pagination .btn-prev .el-icon,\n    .npm-com-bg-pagination .btn-next .el-icon {\n      display: block;\n      font-size: 12px;\n      font-weight: bold;\n}\n.npm-com-bg-pagination .btn-prev {\n    padding-right: 12px;\n}\n.npm-com-bg-pagination .btn-next {\n    padding-left: 12px;\n    -webkit-transform: rotate(180deg);\n        -ms-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n.npm-com-bg-pagination .pagination-total {\n    margin-right: 10px;\n    font-weight: normal;\n    color: #606266;\n}\n.pagination-pager {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    list-style: none;\n    display: inline-block;\n    vertical-align: top;\n    font-size: 0;\n    padding: 0;\n    margin: 0;\n}\n.pagination-pager .more::before {\n      line-height: 30px;\n}\n.pagination-pager li {\n      padding: 0 4px;\n      background: #fff;\n      vertical-align: top;\n      display: inline-block;\n      font-size: 0.13rem;\n      min-width: 0.35rem;\n      height: 0.28rem;\n      line-height: 0.28rem;\n      cursor: pointer;\n      -webkit-box-sizing: border-box;\n         -moz-box-sizing: border-box;\n              box-sizing: border-box;\n      text-align: center;\n      margin: 0;\n}\n.pagination-pager li.btn-quicknext, .pagination-pager li.btn-quickprev {\n        line-height: 28px;\n        color: #303133;\n}\n.pagination-pager li.btn-quicknext.disabled, .pagination-pager li.btn-quickprev.disabled {\n          color: #C0C4CC;\n}\n.pagination-pager li.btn-quickprev:hover {\n        cursor: pointer;\n}\n.pagination-pager li.btn-quicknext:hover {\n        cursor: pointer;\n}\n.pagination-pager li.active + li {\n        border-left: 0;\n}\n.pagination-pager li:hover {\n        color: #4F65FE;\n}\n.pagination-pager li.active {\n        color: #4F65FE;\n        cursor: default;\n}\n.pagination-pager .btn-quickprev,\n    .pagination-pager .btn-quicknext {\n      width: 0.15rem;\n      height: 0.15rem;\n      background-image: url(" + escape(__webpack_require__(20)) + ");\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: 40%;\n}\n.pagination-pager .btn-quickprev:hover,\n      .pagination-pager .btn-quicknext:hover {\n        background-image: url(" + escape(__webpack_require__(21)) + ");\n}\n.pagination-pager .btn-quickprev:hover {\n      -webkit-transform: rotate(180deg);\n          -ms-transform: rotate(180deg);\n              transform: rotate(180deg);\n}\n.npm-com-bg-pagination.is-background .btn-prev,\n  .npm-com-bg-pagination.is-background .btn-next,\n  .npm-com-bg-pagination.is-background .pagination-pager li {\n    background-color: #f4f4f5;\n    color: #606266;\n    min-width: 0.3rem;\n    border-radius: 0.02rem;\n    margin: 0 0.03rem;\n}\n.npm-com-bg-pagination.is-background .btn-prev.disabled,\n    .npm-com-bg-pagination.is-background .btn-next.disabled,\n    .npm-com-bg-pagination.is-background .pagination-pager li.disabled {\n      color: #C0C4CC;\n}\n.npm-com-bg-pagination.is-background .btn-prev,\n  .npm-com-bg-pagination.is-background .btn-next {\n    padding: 0;\n}\n.npm-com-bg-pagination.is-background .btn-prev:disabled,\n    .npm-com-bg-pagination.is-background .btn-next:disabled {\n      color: #C0C4CC;\n}\n.npm-com-bg-pagination.is-background .pagination-pager li:not(.disabled):hover {\n    color: #4F65FE;\n}\n.npm-com-bg-pagination.is-background .pagination-pager li:not(.disabled).active {\n    background-color: #4F65FE;\n    color: #fff;\n}\n.pagination_jump {\n    margin-left: 0.24rem;\n    font-weight: 400;\n    color: #606266;\n}\n.pagination_jump .pagination-input {\n      position: relative;\n      font-size: 0.14rem;\n      width: 0.5rem;\n      display: inline-block;\n      line-height: 0.18rem;\n      padding: 0 0.02rem;\n      height: 0.28rem;\n      text-align: center;\n      margin: 0 0.02rem;\n      -webkit-box-sizing: border-box;\n         -moz-box-sizing: border-box;\n              box-sizing: border-box;\n      border-radius: 0.03rem;\n}\n.pagination_jump .jump_text {\n      min-width: auto;\n}\n.pagination_jump input::-webkit-outer-spin-button,\n    .pagination_jump input::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n}\n.pagination_jump input[type=\"number\"] {\n      -moz-appearance: textfield;\n}\n.pagination_jump .input-inner {\n      -webkit-appearance: none;\n      background-color: #fff;\n      background-image: none;\n      border-radius: 4px;\n      border: 1px solid #dcdfe6;\n      -webkit-box-sizing: border-box;\n         -moz-box-sizing: border-box;\n              box-sizing: border-box;\n      text-align: center;\n      color: #606266;\n      display: inline-block;\n      font-size: inherit;\n      height: 0.28rem;\n      line-height: normal;\n      outline: none;\n      padding: 0 0.03rem;\n      -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n      -o-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n      width: 100%;\n}\n", ""]);

// exports


/***/ }),
/* 16 */
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
/* 17 */
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
/* 18 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
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
/* 23 */
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

/***/ })
/******/ ]);
});
//# sourceMappingURL=npm-com-bg-pagination.client.js.map