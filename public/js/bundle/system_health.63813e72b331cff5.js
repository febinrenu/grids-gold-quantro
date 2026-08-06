"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["system_health"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_health.vue?vue&type=script&lang=js"
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_health.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: 'System Health'
  },
  data: function data() {
    return {
      isLoading: true,
      refreshing: false,
      pdfLoading: false,
      metrics: {},
      generatedAt: null
    };
  },
  computed: {
    envVariant: function envVariant() {
      var env = (this.metrics.environment || '').toLowerCase();
      if (env === 'production') return 'success';
      if (env === 'local' || env === 'development') return 'info';
      return 'secondary';
    }
  },
  created: function created() {
    this.fetchMetrics();
  },
  methods: {
    fetchMetrics: function fetchMetrics() {
      var _this = this;
      var setLoading = this.refreshing ? function () {} : function (v) {
        _this.isLoading = v;
      };
      axios.get('system_health').then(function (response) {
        if (response.data && response.data.success && response.data.data) {
          _this.metrics = response.data.data;
          _this.generatedAt = response.data.generated_at || null;
        }
      })["catch"](function (error) {
        var msg = error.response && error.response.data && (error.response.data.message || error.response.data.error) || _this.$t('InvalidData');
        _this.makeToast('danger', msg, _this.$t('Failed'));
      })["finally"](function () {
        _this.isLoading = false;
        _this.refreshing = false;
      });
    },
    refresh: function refresh() {
      this.refreshing = true;
      this.fetchMetrics();
    },
    downloadPdf: function downloadPdf() {
      var _this2 = this;
      this.pdfLoading = true;
      axios.get('system_health/pdf', {
        responseType: 'blob'
      }).then(function (response) {
        var blob = new Blob([response.data], {
          type: 'application/pdf'
        });
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'system-health-report.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        _this2.makeToast('success', _this2.$t('Success'), _this2.$t('Success'));
      })["catch"](function (error) {
        var msg = error.response && error.response.data ? typeof error.response.data === 'string' ? error.response.data : error.response.data.message || error.response.data.error : _this2.$t('InvalidData');
        _this2.makeToast('danger', msg || _this2.$t('Failed'), _this2.$t('Failed'));
      })["finally"](function () {
        _this2.pdfLoading = false;
      });
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_health.vue?vue&type=template&id=9f2d12c6&scoped=true"
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_health.vue?vue&type=template&id=9f2d12c6&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "main-content"
  }, [_c("breadcumb", {
    attrs: {
      page: _vm.$t("System_Health"),
      folder: _vm.$t("Settings")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("b-card", {
    staticClass: "system-health-card"
  }, [_c("div", {
    staticClass: "d-flex flex-wrap justify-content-between align-items-center mb-4"
  }, [_c("h4", {
    staticClass: "mb-0"
  }, [_vm._v(_vm._s(_vm.$t("System_Health")))]), _vm._v(" "), _c("div", {
    staticClass: "d-flex flex-wrap gap-2"
  }, [_c("b-button", {
    attrs: {
      variant: "outline-primary",
      disabled: _vm.refreshing
    },
    on: {
      click: _vm.refresh
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "refresh-cw"
    }
  }), _vm._v("\n          " + _vm._s(_vm.refreshing ? _vm.$t("Refreshing") + "..." : _vm.$t("Refresh")) + "\n        ")], 1), _vm._v(" "), _c("b-button", {
    attrs: {
      variant: "primary",
      disabled: _vm.pdfLoading
    },
    on: {
      click: _vm.downloadPdf
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "download"
    }
  }), _vm._v("\n          " + _vm._s(_vm.pdfLoading ? _vm.$t("Loading") + "..." : _vm.$t("Download_Report_PDF")) + "\n        ")], 1)], 1)]), _vm._v(" "), _c("b-row", [_c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "6",
      lg: "4"
    }
  }, [_c("b-card", {
    staticClass: "metric-card h-100"
  }, [_c("div", {
    staticClass: "metric-icon-wrap text-primary"
  }, [_c("lucide-icon", {
    attrs: {
      name: "code"
    }
  })], 1), _vm._v(" "), _c("h6", {
    staticClass: "text-muted text-uppercase mb-2"
  }, [_vm._v(_vm._s(_vm.$t("PHP_Version")))]), _vm._v(" "), _c("p", {
    staticClass: "metric-value mb-0"
  }, [_vm._v(_vm._s(_vm.metrics.php_version || "—"))])])], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "6",
      lg: "4"
    }
  }, [_c("b-card", {
    staticClass: "metric-card h-100"
  }, [_c("div", {
    staticClass: "metric-icon-wrap text-danger"
  }, [_c("lucide-icon", {
    attrs: {
      name: "server"
    }
  })], 1), _vm._v(" "), _c("h6", {
    staticClass: "text-muted text-uppercase mb-2"
  }, [_vm._v(_vm._s(_vm.$t("Laravel_Version")))]), _vm._v(" "), _c("p", {
    staticClass: "metric-value mb-0"
  }, [_vm._v(_vm._s(_vm.metrics.laravel_version || "—"))])])], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "6",
      lg: "4"
    }
  }, [_c("b-card", {
    staticClass: "metric-card h-100"
  }, [_c("div", {
    staticClass: "metric-icon-wrap text-success"
  }, [_c("lucide-icon", {
    attrs: {
      name: "activity"
    }
  })], 1), _vm._v(" "), _c("h6", {
    staticClass: "text-muted text-uppercase mb-2"
  }, [_vm._v(_vm._s(_vm.$t("Environment")))]), _vm._v(" "), _c("p", {
    staticClass: "metric-value mb-0"
  }, [_c("b-badge", {
    attrs: {
      variant: _vm.envVariant
    }
  }, [_vm._v(_vm._s(_vm.metrics.environment || "—"))])], 1)])], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "6",
      lg: "4"
    }
  }, [_c("b-card", {
    staticClass: "metric-card h-100"
  }, [_c("div", {
    staticClass: "metric-icon-wrap text-info"
  }, [_c("lucide-icon", {
    attrs: {
      name: "server"
    }
  })], 1), _vm._v(" "), _c("h6", {
    staticClass: "text-muted text-uppercase mb-2"
  }, [_vm._v(_vm._s(_vm.$t("Database_Size")))]), _vm._v(" "), _c("p", {
    staticClass: "metric-value mb-0"
  }, [_vm._v(_vm._s(_vm.metrics.database && _vm.metrics.database.size_human || _vm.metrics.database && _vm.metrics.database.error || "—"))])])], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "6",
      lg: "4"
    }
  }, [_c("b-card", {
    staticClass: "metric-card h-100"
  }, [_c("div", {
    staticClass: "metric-icon-wrap text-secondary"
  }, [_c("lucide-icon", {
    attrs: {
      name: "database"
    }
  })], 1), _vm._v(" "), _c("h6", {
    staticClass: "text-muted text-uppercase mb-2"
  }, [_vm._v(_vm._s(_vm.$t("Storage_Usage")))]), _vm._v(" "), _c("p", {
    staticClass: "metric-value mb-0"
  }, [_vm._v(_vm._s(_vm.metrics.storage && _vm.metrics.storage.size_human || "—"))])])], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "6",
      lg: "4"
    }
  }, [_c("b-card", {
    staticClass: "metric-card h-100"
  }, [_c("div", {
    staticClass: "metric-icon-wrap text-warning"
  }, [_c("lucide-icon", {
    attrs: {
      name: "activity"
    }
  })], 1), _vm._v(" "), _c("h6", {
    staticClass: "text-muted text-uppercase mb-2"
  }, [_vm._v(_vm._s(_vm.$t("Queue_Status")))]), _vm._v(" "), _c("p", {
    staticClass: "metric-value mb-0"
  }, [_vm.metrics.queue ? _c("span", [_vm._v("\n              " + _vm._s(_vm.metrics.queue.driver) + " —\n              "), _vm.metrics.queue.pending !== undefined ? _c("span", [_vm._v("Pending: " + _vm._s(_vm.metrics.queue.pending))]) : _vm._e(), _vm._v(" "), _vm.metrics.queue.failed !== undefined ? _c("span", [_vm._v(", Failed: " + _vm._s(_vm.metrics.queue.failed))]) : _vm._e(), _vm._v(" "), _vm.metrics.queue.error ? _c("span", [_vm._v(" (" + _vm._s(_vm.metrics.queue.error) + ")")]) : _vm._e()]) : _c("span", [_vm._v("—")])])])], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "6",
      lg: "4"
    }
  }, [_c("b-card", {
    staticClass: "metric-card h-100"
  }, [_c("div", {
    staticClass: "metric-icon-wrap text-success"
  }, [_c("lucide-icon", {
    attrs: {
      name: "database-backup"
    }
  })], 1), _vm._v(" "), _c("h6", {
    staticClass: "text-muted text-uppercase mb-2"
  }, [_vm._v(_vm._s(_vm.$t("Last_Backup_Date")))]), _vm._v(" "), _c("p", {
    staticClass: "metric-value mb-0"
  }, [_vm._v("\n            " + _vm._s(_vm.metrics.last_backup && _vm.metrics.last_backup.human || _vm.metrics.last_backup && _vm.metrics.last_backup.message || "—") + "\n          ")])])], 1)], 1), _vm._v(" "), _vm.generatedAt ? _c("div", {
    staticClass: "text-muted small mt-2"
  }, [_vm._v("\n      " + _vm._s(_vm.$t("Last_updated")) + ": " + _vm._s(_vm.generatedAt) + "\n    ")]) : _vm._e()], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_health.vue?vue&type=style&index=0&id=9f2d12c6&scoped=true&lang=css"
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_health.vue?vue&type=style&index=0&id=9f2d12c6&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.system-health-card[data-v-9f2d12c6] {\r\n  border-radius: 8px;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.metric-card[data-v-9f2d12c6] {\r\n  border-radius: 8px;\r\n  border: 1px solid #e9ecef;\r\n  transition: box-shadow 0.2s ease;\n}\n.metric-card[data-v-9f2d12c6]:hover {\r\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.metric-icon-wrap[data-v-9f2d12c6] {\r\n  margin-bottom: 12px;\r\n  font-size: 2rem;\r\n  line-height: 1;\n}\n.metric-icon-wrap i[data-v-9f2d12c6] {\r\n  font-size: 2rem;\n}\n.metric-value[data-v-9f2d12c6] {\r\n  font-size: 1.1rem;\r\n  font-weight: 600;\r\n  color: #1f2937;\n}\n.gap-2[data-v-9f2d12c6] { gap: 0.5rem;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ },

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_health.vue?vue&type=style&index=0&id=9f2d12c6&scoped=true&lang=css"
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_health.vue?vue&type=style&index=0&id=9f2d12c6&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_system_health_vue_vue_type_style_index_0_id_9f2d12c6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./system_health.vue?vue&type=style&index=0&id=9f2d12c6&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_health.vue?vue&type=style&index=0&id=9f2d12c6&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_system_health_vue_vue_type_style_index_0_id_9f2d12c6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_system_health_vue_vue_type_style_index_0_id_9f2d12c6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "./resources/src/views/app/pages/settings/system_health.vue"
/*!******************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/system_health.vue ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _system_health_vue_vue_type_template_id_9f2d12c6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system_health.vue?vue&type=template&id=9f2d12c6&scoped=true */ "./resources/src/views/app/pages/settings/system_health.vue?vue&type=template&id=9f2d12c6&scoped=true");
/* harmony import */ var _system_health_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system_health.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/settings/system_health.vue?vue&type=script&lang=js");
/* harmony import */ var _system_health_vue_vue_type_style_index_0_id_9f2d12c6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./system_health.vue?vue&type=style&index=0&id=9f2d12c6&scoped=true&lang=css */ "./resources/src/views/app/pages/settings/system_health.vue?vue&type=style&index=0&id=9f2d12c6&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _system_health_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _system_health_vue_vue_type_template_id_9f2d12c6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _system_health_vue_vue_type_template_id_9f2d12c6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9f2d12c6",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/settings/system_health.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/settings/system_health.vue?vue&type=script&lang=js"
/*!******************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/system_health.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_system_health_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./system_health.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_health.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_system_health_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/settings/system_health.vue?vue&type=template&id=9f2d12c6&scoped=true"
/*!************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/system_health.vue?vue&type=template&id=9f2d12c6&scoped=true ***!
  \************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_system_health_vue_vue_type_template_id_9f2d12c6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_system_health_vue_vue_type_template_id_9f2d12c6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_system_health_vue_vue_type_template_id_9f2d12c6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./system_health.vue?vue&type=template&id=9f2d12c6&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_health.vue?vue&type=template&id=9f2d12c6&scoped=true");


/***/ },

/***/ "./resources/src/views/app/pages/settings/system_health.vue?vue&type=style&index=0&id=9f2d12c6&scoped=true&lang=css"
/*!**************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/system_health.vue?vue&type=style&index=0&id=9f2d12c6&scoped=true&lang=css ***!
  \**************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_system_health_vue_vue_type_style_index_0_id_9f2d12c6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./system_health.vue?vue&type=style&index=0&id=9f2d12c6&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_health.vue?vue&type=style&index=0&id=9f2d12c6&scoped=true&lang=css");


/***/ }

}]);