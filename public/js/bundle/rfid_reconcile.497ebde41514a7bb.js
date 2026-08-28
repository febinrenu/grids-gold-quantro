"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["rfid_reconcile"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/serial_numbers/reconcile.vue?vue&type=script&lang=js"
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/serial_numbers/reconcile.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "RFID Reconciliation"
  },
  data: function data() {
    return {
      isLoading: true,
      submitting: false,
      warehouse_id: null,
      warehouses: [],
      rawScans: "",
      reconciliation: null,
      itemFields: [{
        key: "epc",
        label: "EPC Code"
      }, {
        key: "serial_number",
        label: "Serial Number"
      }, {
        key: "product_name",
        label: "Product Name"
      }, {
        key: "karat",
        label: "Karat Purity"
      }, {
        key: "gross_weight",
        label: "Gross Weight (g)"
      }],
      unexpectedFields: [{
        key: "epc",
        label: "EPC Code"
      }, {
        key: "serial_number",
        label: "Serial Number"
      }, {
        key: "product_name",
        label: "Product Name"
      }, {
        key: "error",
        label: "System Note",
        tdClass: "text-danger font-weight-bold"
      }],
      unknownFields: [{
        key: "epc",
        label: "EPC Code"
      }, {
        key: "error",
        label: "Validation Status",
        tdClass: "text-danger font-weight-bold"
      }]
    };
  },
  methods: {
    loadWarehouses: function loadWarehouses() {
      var _this = this;
      axios.get("serial_numbers").then(function (response) {
        if (response.data.warehouses) {
          _this.warehouses = response.data.warehouses;
        }
        _this.isLoading = false;
      })["catch"](function () {
        _this.isLoading = false;
      });
    },
    onWarehouseChange: function onWarehouseChange() {
      var _this2 = this;
      this.reconciliation = null;
      this.$nextTick(function () {
        if (_this2.$refs.scanTextarea) {
          _this2.$refs.scanTextarea.focus();
        }
      });
    },
    resetScan: function resetScan() {
      this.rawScans = "";
      this.reconciliation = null;
    },
    simulatePerfectScan: function simulatePerfectScan() {
      var _this3 = this;
      if (!this.warehouse_id) return;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      // Fetch active tags for expected serials in this warehouse
      axios.get("serial_numbers", {
        params: {
          warehouse_id: this.warehouse_id,
          status: "available",
          limit: 100
        }
      }).then(function (response) {
        var serialIds = response.data.serials.map(function (s) {
          return s.id;
        });
        if (serialIds.length === 0) {
          _this3.makeToast("warning", "No available serialized stock found in this warehouse to simulate.");
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
          return;
        }

        // Look up active RFID tags for these serials
        axios.get("rfid-tags", {
          params: {
            status: "active",
            limit: 200
          }
        }).then(function (res) {
          // Filter to only match our warehouse serials
          var tags = res.data.data.filter(function (t) {
            return serialIds.includes(t.product_serial_id);
          });
          if (tags.length === 0) {
            _this3.makeToast("warning", "No active RFID tags assigned to the available items in this warehouse.");
          } else {
            _this3.rawScans = tags.map(function (t) {
              return t.epc_number;
            }).join("\n");
            _this3.makeToast("success", "Loaded ".concat(tags.length, " active tag codes into input area."));
          }
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        })["catch"](function () {
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        });
      })["catch"](function () {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      });
    },
    runReconciliation: function runReconciliation() {
      var _this4 = this;
      if (!this.warehouse_id) return;
      var lines = this.rawScans.split("\n").map(function (line) {
        return line.trim();
      }).filter(function (line) {
        return line.length > 0;
      });
      this.submitting = true;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      axios.post("rfid/reconcile", {
        warehouse_id: this.warehouse_id,
        epcs: lines
      }).then(function (response) {
        _this4.reconciliation = response.data;
        _this4.submitting = false;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this4.makeToast("success", "Reconciliation analysis complete!");
      })["catch"](function (error) {
        _this4.submitting = false;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        var msg = error.response && error.response.data && error.response.data.message ? error.response.data.message : "Failed to reconcile scans.";
        _this4.makeToast("danger", msg);
      });
    },
    makeToast: function makeToast(variant, msg, title) {
      this.$bvToast.toast(msg, {
        title: title || "RFID Reconciliation",
        variant: variant,
        solid: true
      });
    }
  },
  created: function created() {
    this.loadWarehouses();
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/serial_numbers/reconcile.vue?vue&type=template&id=369f851b&scoped=true"
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/serial_numbers/reconcile.vue?vue&type=template&id=369f851b&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("RFID_Reconciliation") || "RFID Reconciliation",
      folder: _vm.$t("Serial_Numbers")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("b-row", [_c("b-col", {
    staticClass: "mb-4",
    attrs: {
      md: "4"
    }
  }, [_c("b-card", {
    attrs: {
      title: "Scan Configuration"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Choose Warehouse"
    }
  }, [_c("v-select", {
    attrs: {
      reduce: function reduce(label) {
        return label.value;
      },
      placeholder: _vm.$t("Choose_Warehouse"),
      options: _vm.warehouses.map(function (w) {
        return {
          label: w.name,
          value: w.id
        };
      })
    },
    on: {
      input: _vm.onWarehouseChange
    },
    model: {
      value: _vm.warehouse_id,
      callback: function callback($$v) {
        _vm.warehouse_id = $$v;
      },
      expression: "warehouse_id"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: "Scanned RFID EPCs (One per line / scan entry)"
    }
  }, [_c("b-form-textarea", {
    ref: "scanTextarea",
    attrs: {
      rows: "12",
      placeholder: "Scan tags here or type EPC codes...",
      disabled: !_vm.warehouse_id
    },
    model: {
      value: _vm.rawScans,
      callback: function callback($$v) {
        _vm.rawScans = $$v;
      },
      expression: "rawScans"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-3 d-flex justify-content-between"
  }, [_c("b-button", {
    attrs: {
      size: "sm",
      variant: "outline-danger"
    },
    on: {
      click: _vm.resetScan
    }
  }, [_vm._v("Reset")]), _vm._v(" "), _c("b-button", {
    attrs: {
      size: "sm",
      variant: "warning",
      disabled: !_vm.warehouse_id
    },
    on: {
      click: _vm.simulatePerfectScan
    }
  }, [_vm._v("Simulate Scan")]), _vm._v(" "), _c("b-button", {
    attrs: {
      size: "sm",
      variant: "primary",
      disabled: !_vm.warehouse_id || _vm.submitting
    },
    on: {
      click: _vm.runReconciliation
    }
  }, [_vm.submitting ? _c("span", {
    staticClass: "spinner spinner-primary small mr-1"
  }) : _vm._e(), _vm._v("\n            Analyze\n          ")])], 1)], 1)], 1), _vm._v(" "), _vm.reconciliation ? _c("b-col", {
    staticClass: "mb-4",
    attrs: {
      md: "8"
    }
  }, [_c("b-row", {
    staticClass: "mb-4"
  }, [_c("b-col", {
    staticClass: "mb-2",
    attrs: {
      sm: "6",
      lg: "3"
    }
  }, [_c("b-card", {
    staticClass: "text-center p-2 border-left-success"
  }, [_c("h3", {
    staticClass: "text-success"
  }, [_vm._v(_vm._s(_vm.reconciliation.summary.found_count))]), _vm._v(" "), _c("p", {
    staticClass: "text-muted mb-0"
  }, [_vm._v("Found")])])], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-2",
    attrs: {
      sm: "6",
      lg: "3"
    }
  }, [_c("b-card", {
    staticClass: "text-center p-2 border-left-warning"
  }, [_c("h3", {
    staticClass: "text-warning"
  }, [_vm._v(_vm._s(_vm.reconciliation.summary.missing_count))]), _vm._v(" "), _c("p", {
    staticClass: "text-muted mb-0"
  }, [_vm._v("Missing")])])], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-2",
    attrs: {
      sm: "6",
      lg: "3"
    }
  }, [_c("b-card", {
    staticClass: "text-center p-2 border-left-danger"
  }, [_c("h3", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.reconciliation.summary.unexpected_count))]), _vm._v(" "), _c("p", {
    staticClass: "text-muted mb-0"
  }, [_vm._v("Unexpected")])])], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-2",
    attrs: {
      sm: "6",
      lg: "3"
    }
  }, [_c("b-card", {
    staticClass: "text-center p-2 border-left-dark"
  }, [_c("h3", {
    staticClass: "text-dark"
  }, [_vm._v(_vm._s(_vm.reconciliation.summary.unknown_count))]), _vm._v(" "), _c("p", {
    staticClass: "text-muted mb-0"
  }, [_vm._v("Unknown Tags")])])], 1)], 1), _vm._v(" "), _c("b-card", [_c("b-tabs", {
    attrs: {
      "content-class": "mt-3"
    }
  }, [_c("b-tab", {
    attrs: {
      title: "Found",
      active: ""
    }
  }, [_vm.reconciliation.found.length === 0 ? _c("div", {
    staticClass: "text-center py-4 text-muted"
  }, [_vm._v("\n              No matching items scanned yet.\n            ")]) : _c("b-table", {
    attrs: {
      items: _vm.reconciliation.found,
      fields: _vm.itemFields,
      striped: "",
      responsive: ""
    }
  })], 1), _vm._v(" "), _c("b-tab", {
    attrs: {
      title: "Missing"
    }
  }, [_vm.reconciliation.missing.length === 0 ? _c("div", {
    staticClass: "text-center py-4 text-success"
  }, [_vm._v("\n              All expected items successfully found!\n            ")]) : _c("b-table", {
    staticClass: "table-warning",
    attrs: {
      items: _vm.reconciliation.missing,
      fields: _vm.itemFields,
      responsive: ""
    }
  })], 1), _vm._v(" "), _c("b-tab", {
    attrs: {
      title: "Unexpected / Wrong Branch"
    }
  }, [_vm.reconciliation.unexpected.length === 0 ? _c("div", {
    staticClass: "text-center py-4 text-muted"
  }, [_vm._v("\n              No misplaced items scanned.\n            ")]) : _c("b-table", {
    staticClass: "table-danger",
    attrs: {
      items: _vm.reconciliation.unexpected,
      fields: _vm.unexpectedFields,
      responsive: ""
    }
  })], 1), _vm._v(" "), _c("b-tab", {
    attrs: {
      title: "Unknown Tags"
    }
  }, [_vm.reconciliation.unknown.length === 0 ? _c("div", {
    staticClass: "text-center py-4 text-muted"
  }, [_vm._v("\n              No unregistered tags scanned.\n            ")]) : _c("b-table", {
    staticClass: "table-dark",
    attrs: {
      items: _vm.reconciliation.unknown,
      fields: _vm.unknownFields,
      responsive: ""
    }
  })], 1)], 1)], 1)], 1) : _vm._e()], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/serial_numbers/reconcile.vue?vue&type=style&index=0&id=369f851b&scoped=true&lang=css"
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/serial_numbers/reconcile.vue?vue&type=style&index=0&id=369f851b&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.border-left-success[data-v-369f851b] {\r\n  border-left: 5px solid #28a745 !important;\n}\n.border-left-warning[data-v-369f851b] {\r\n  border-left: 5px solid #ffc107 !important;\n}\n.border-left-danger[data-v-369f851b] {\r\n  border-left: 5px solid #dc3545 !important;\n}\n.border-left-dark[data-v-369f851b] {\r\n  border-left: 5px solid #343a40 !important;\n}\r\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/serial_numbers/reconcile.vue?vue&type=style&index=0&id=369f851b&scoped=true&lang=css"
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/serial_numbers/reconcile.vue?vue&type=style&index=0&id=369f851b&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reconcile_vue_vue_type_style_index_0_id_369f851b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./reconcile.vue?vue&type=style&index=0&id=369f851b&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/serial_numbers/reconcile.vue?vue&type=style&index=0&id=369f851b&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reconcile_vue_vue_type_style_index_0_id_369f851b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reconcile_vue_vue_type_style_index_0_id_369f851b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/views/app/pages/serial_numbers/reconcile.vue"
/*!********************************************************************!*\
  !*** ./resources/src/views/app/pages/serial_numbers/reconcile.vue ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reconcile_vue_vue_type_template_id_369f851b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reconcile.vue?vue&type=template&id=369f851b&scoped=true */ "./resources/src/views/app/pages/serial_numbers/reconcile.vue?vue&type=template&id=369f851b&scoped=true");
/* harmony import */ var _reconcile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reconcile.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/serial_numbers/reconcile.vue?vue&type=script&lang=js");
/* harmony import */ var _reconcile_vue_vue_type_style_index_0_id_369f851b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reconcile.vue?vue&type=style&index=0&id=369f851b&scoped=true&lang=css */ "./resources/src/views/app/pages/serial_numbers/reconcile.vue?vue&type=style&index=0&id=369f851b&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _reconcile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _reconcile_vue_vue_type_template_id_369f851b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _reconcile_vue_vue_type_template_id_369f851b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "369f851b",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/serial_numbers/reconcile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/serial_numbers/reconcile.vue?vue&type=script&lang=js"
/*!********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/serial_numbers/reconcile.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reconcile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./reconcile.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/serial_numbers/reconcile.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reconcile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/serial_numbers/reconcile.vue?vue&type=template&id=369f851b&scoped=true"
/*!**************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/serial_numbers/reconcile.vue?vue&type=template&id=369f851b&scoped=true ***!
  \**************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reconcile_vue_vue_type_template_id_369f851b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reconcile_vue_vue_type_template_id_369f851b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reconcile_vue_vue_type_template_id_369f851b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./reconcile.vue?vue&type=template&id=369f851b&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/serial_numbers/reconcile.vue?vue&type=template&id=369f851b&scoped=true");


/***/ },

/***/ "./resources/src/views/app/pages/serial_numbers/reconcile.vue?vue&type=style&index=0&id=369f851b&scoped=true&lang=css"
/*!****************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/serial_numbers/reconcile.vue?vue&type=style&index=0&id=369f851b&scoped=true&lang=css ***!
  \****************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reconcile_vue_vue_type_style_index_0_id_369f851b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./reconcile.vue?vue&type=style&index=0&id=369f851b&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/serial_numbers/reconcile.vue?vue&type=style&index=0&id=369f851b&scoped=true&lang=css");


/***/ }

}]);