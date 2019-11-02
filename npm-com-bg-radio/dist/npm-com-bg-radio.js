(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("npmComBgRadio", [], factory);
	else if(typeof exports === 'object')
		exports["npmComBgRadio"] = factory();
	else
		root["npmComBgRadio"] = factory();
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
/* harmony import */ var _npm_com_bg_radio_vue_vue_type_template_id_88e2a38c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _npm_com_bg_radio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);



function injectStyles (context) {
  
  var style0 = __webpack_require__(14)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _npm_com_bg_radio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _npm_com_bg_radio_vue_vue_type_template_id_88e2a38c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _npm_com_bg_radio_vue_vue_type_template_id_88e2a38c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "1f3d7b85"
  
)

component.options.__file = "src/npm-com-bg-radio.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_0_1_npm_com_bg_radio_vue_vue_type_template_id_88e2a38c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_0_1_npm_com_bg_radio_vue_vue_type_template_id_88e2a38c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_0_1_npm_com_bg_radio_vue_vue_type_template_id_88e2a38c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
    { staticClass: "npm-com-bg-radio", attrs: { role: "radiogroup" } },
    _vm._l(_vm.radioList, function(item, index) {
      return _c(
        "npm-com-bg-radio-item",
        {
          key: index,
          attrs: {
            value: _vm.value,
            label: item[_vm.labelvalue],
            disabled: item.disabled,
            name: item.name
          }
        },
        [_vm._v(_vm._s(item[_vm.labelkey]))]
      )
    })
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_radio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_radio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _npm_com_bg_radio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _npm_com_bg_radio_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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
/* harmony import */ var _js_emitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'npmComBgRadio',
  componentName: 'npmComBgRadio',
  mixins: [_js_emitter_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  inject: {
    comFormItem: {
      default: ''
    }
  },
  // model: {
  //   prop: 'value',
  //   event: 'change'
  // },
  components: {
    'npm-com-bg-radio-item': __webpack_require__(7).default
  },
  created: function created() {
    var _this = this;

    this.$on('handleChange', function (value) {
      _this.$emit('change', value);
    });
  },
  props: {
    /** 
     * list
    */
    radioList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    /** 
     * radio的值
    */
    // value: {
    //   type: [Number, String],
    //   default: '',
    // },
    value: {},

    /** 
     * 是否禁用
    */
    disabled: {
      type: Boolean,
      default: false
    },

    /** 
     * 显示的value
    */
    labelkey: {
      type: String,
      default: 'label'
    },

    /** 
     * 显示的label
    */
    labelvalue: {
      type: String,
      default: 'value'
    },

    /** 
     * 是否带边框
    */
    border: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value: function value(_value) {
      this.dispatch('ComFormItem', 'com.form.change', [this.value]);
    }
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _broadcast(componentName, eventName, params) {
  // eslint-disable-line
  this.$children.forEach(function (child) {
    // eslint-disable-line
    var name = child.$options.componentName;

    if (name === componentName) {
      child.$emit.apply(child, _toConsumableArray([eventName].concat(params)));
    } else {
      _broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    dispatch: function dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }

      if (parent) {
        var _parent;

        (_parent = parent).$emit.apply(_parent, _toConsumableArray([eventName].concat(params)));
      }
    },
    broadcast: function broadcast(componentName, eventName, params) {
      _broadcast.call(this, componentName, eventName, params);
    }
  }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _radio_item_vue_vue_type_template_id_4722658c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _radio_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _radio_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _radio_item_vue_vue_type_template_id_4722658c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _radio_item_vue_vue_type_template_id_4722658c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "4e2a0997"
  
)

component.options.__file = "src/com/radio-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_0_1_radio_item_vue_vue_type_template_id_4722658c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_0_1_radio_item_vue_vue_type_template_id_4722658c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_0_1_radio_item_vue_vue_type_template_id_4722658c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 9 */
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
    "label",
    {
      staticClass: "npm-com-bg-radio",
      class: [
        { "is-disabled": _vm.isDisabled },
        { "is-border": _vm.border },
        { "is-checked": _vm.model === _vm.label }
      ],
      attrs: {
        "aria-checked": _vm.model === _vm.label,
        "aria-disabled": _vm.isDisabled,
        tabindex: _vm.tabIndex,
        role: "radio"
      },
      on: {
        keydown: function($event) {
          if (
            !("button" in $event) &&
            _vm._k($event.keyCode, "space", 32, $event.key, " ")
          ) {
            return null
          }
          $event.stopPropagation()
          $event.preventDefault()
          _vm.model = _vm.isDisabled ? _vm.model : _vm.label
        }
      }
    },
    [
      _vm._ssrNode(
        "<span" +
          _vm._ssrClass("npm-com-bg-radio__input", {
            "is-disabled": _vm.isDisabled,
            "is-checked": _vm.model === _vm.label
          }) +
          '><span class="npm-com-bg-radio__inner"></span> <input type="radio"' +
          _vm._ssrAttr("name", _vm.name) +
          _vm._ssrAttr("disabled", _vm.isDisabled) +
          ' tabindex="-1"' +
          _vm._ssrAttr("value", _vm.label) +
          _vm._ssrAttr("checked", _vm._q(_vm.model, _vm.label)) +
          ' class="npm-com-bg-radio__original"></span> '
      ),
      _vm._ssrNode(
        '<span class="npm-com-bg-radio__label">',
        "</span>",
        [_vm._t("default")],
        2
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_radio_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_radio_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _radio_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _radio_item_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/* eslint object-curly-spacing: "off" */



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_emitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'npmComBgRadioItem',
  componentName: 'npmComBgRadioItem',
  inject: {
    ComForm: {
      default: ''
    },
    ComFormItem: {
      default: ''
    }
  },
  mixins: [_js_emitter_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      focus: false
    };
  },
  mounted: function mounted() {},
  props: {
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
    border: Boolean
  },
  computed: {
    isGroup: function isGroup() {
      var parent = this.$parent;

      while (parent) {
        if (parent.$options.componentName !== 'npmComBgRadio') {
          // eslint-disable-line
          parent = parent.$parent;
        } else {
          this._radioGroup = parent; // eslint-disable-line

          return true;
        }
      }

      return false;
    },
    model: {
      get: function get() {
        return this.isGroup ? this._radioGroup.value : this.value; // eslint-disable-line
      },
      set: function set(val) {
        if (this.isGroup) {
          this.dispatch('npmComBgRadio', 'input', [val]);
        } else {
          this.$emit('input', val);
        }
      }
    },
    isDisabled: function isDisabled() {
      return this._radioGroup ? this._radioGroup.disabled || this.disabled || (this.comForm || {}).disabled // eslint-disable-line
      : this.disabled || (this.comForm || {}).disabled;
    },
    tabIndex: function tabIndex() {
      return this.isDisabled || this.isGroup && this.model !== this.label ? -1 : 0;
    }
  },
  methods: {
    handleChange: function handleChange() {
      var _this = this;

      this.$nextTick(function () {
        _this.$emit('change', _this.model);

        _this.isGroup && _this.dispatch('npmComBgRadio', 'handleChange', _this.model); // eslint-disable-line
      });
    }
  }
});

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


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_radio_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_radio_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_radio_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_radio_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_radio_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_sass_loader_lib_loader_js_ref_3_3_node_modules_npm_build_webpack_base_dist_loader_replace_loader_js_ref_3_4_node_modules_vue_loader_lib_index_js_vue_loader_options_npm_com_bg_radio_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(18).default
module.exports.__inject__ = function (context) {
  add("49018ad1", content, false, context)
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".npm-com-bg-radio {\n  color: #606266;\n  font-weight: 500;\n  line-height: 0.32rem;\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  white-space: nowrap;\n  outline: none;\n  font-size: 0.14rem;\n  margin-right: 0.3rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.npm-com-bg-radio.is-bordered {\n    padding: 0.12rem 0.2rem 0 0.1rem;\n    border-radius: 0.04rem;\n    border: 1px solid #DCDFE6;\n    -webkit-box-sizing: border-box;\n       -moz-box-sizing: border-box;\n            box-sizing: border-box;\n    height: 0.4rem;\n}\n.npm-com-bg-radio.is-bordered.is-checked {\n      border-color: #4F65FE;\n}\n.npm-com-bg-radio.is-bordered.is-disabled {\n      cursor: not-allowed;\n      border-color: #EBEEF5;\n}\n.npm-com-bg-radio.is-bordered + .npm-com-bg-radio.is-bordered {\n      margin-left: 10px;\n}\n.npm-com-bg-radio.is-checked .npm-com-bg-radio__inner {\n    border-color: #4F65FE;\n    background: #4F65FE;\n}\n.npm-com-bg-radio.is-checked .npm-com-bg-radio__inner::after {\n      -webkit-transform: translate(-50%, -50%) scale(1);\n          -ms-transform: translate(-50%, -50%) scale(1);\n              transform: translate(-50%, -50%) scale(1);\n}\n.npm-com-bg-radio.is-checked .npm-com-bg-radio__input + .npm-com-bg-radio__label {\n    color: #4F65FE;\n}\n.npm-com-bg-radio:last-child {\n    margin-right: 0;\n}\n.npm-com-bg-radio__input {\n    white-space: nowrap;\n    cursor: pointer;\n    outline: none;\n    display: inline-block;\n    line-height: 1;\n    position: relative;\n    vertical-align: middle;\n}\n.npm-com-bg-radio__input + .npm-com-bg-radio__label {\n      padding-left: 0.05rem;\n}\n.npm-com-bg-radio__input.is-disabled .npm-com-bg-radio__inner {\n      background-color: #F5F7FA;\n      border-color: #E4E7ED;\n      cursor: not-allowed;\n}\n.npm-com-bg-radio__input.is-disabled .npm-com-bg-radio__inner::after {\n        cursor: not-allowed;\n        background-color: #F5F7FA;\n}\n.npm-com-bg-radio__input.is-disabled .npm-com-bg-radio__inner + .npm-com-bg-radio__label {\n        cursor: not-allowed;\n}\n.npm-com-bg-radio__input.is-disabled.is-checked .npm-com-bg-radio__inner {\n      background-color: #F5F7FA;\n      border-color: #E4E7ED;\n}\n.npm-com-bg-radio__input.is-disabled.is-checked .npm-com-bg-radio__inner::after {\n        background-color: #C0C4CC;\n}\n.npm-com-bg-radio__input.is-disabled + span.npm-com-bg-radio__label {\n      color: #C0C4CC;\n      cursor: not-allowed;\n}\n.npm-com-bg-radio__input.is-focus .npm-com-bg-radio__inner {\n      border-color: #4F65FE;\n}\n.npm-com-bg-radio__inner {\n    border: 1px solid #DCDFE6;\n    border-radius: 100%;\n    width: 0.14rem;\n    height: 0.14rem;\n    background-color: #FFFFFF;\n    position: relative;\n    cursor: pointer;\n    display: inline-block;\n    -webkit-box-sizing: border-box;\n       -moz-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.npm-com-bg-radio__inner:hover {\n      border-color: #4F65FE;\n}\n.npm-com-bg-radio__inner::after {\n      width: 4px;\n      height: 4px;\n      border-radius: 100%;\n      background-color: #FFFFFF;\n      content: \"\";\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      -webkit-transform: translate(-50%, -50%) scale(0);\n          -ms-transform: translate(-50%, -50%) scale(0);\n              transform: translate(-50%, -50%) scale(0);\n      -webkit-transition: -webkit-transform 0.15s ease-in;\n      transition: -webkit-transform 0.15s ease-in;\n      -o-transition: transform 0.15s ease-in;\n      transition: transform 0.15s ease-in;\n      transition: transform 0.15s ease-in, -webkit-transform 0.15s ease-in;\n}\n.npm-com-bg-radio__original {\n    opacity: 0;\n    outline: none;\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: 0;\n}\n.npm-com-bg-radio:focus:not(.is-focus):not(:active):not(.is-disabled) .npm-com-bg-radio__inner {\n    -webkit-box-shadow: 0 0 2px 2px #4F65FE;\n            box-shadow: 0 0 2px 2px #4F65FE;\n}\n.npm-com-bg-radio-group {\n  display: inline-block;\n  line-height: 1;\n  vertical-align: middle;\n  font-size: 0;\n}\n", ""]);

// exports


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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesServer; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);


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
/* 19 */
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
//# sourceMappingURL=npm-com-bg-radio.js.map