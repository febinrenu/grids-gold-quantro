"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["serial_available_report"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Serial_Available_Report.vue?vue&type=script&lang=js"
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Serial_Available_Report.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Available Serials Report"
  },
  data: function data() {
    return {
      isLoading: true,
      serverParams: {
        sort: {
          field: "id",
          type: "desc"
        },
        page: 1,
        perPage: 10
      },
      limit: "10",
      search: "",
      totalRows: "",
      reports: [],
      warehouses: [],
      warehouse_id: ""
    };
  },
  computed: {
    columns: function columns() {
      return [{
        label: this.$t("Serial_Number"),
        field: "serial_number",
        thClass: "text-left",
        tdClass: "text-left"
      }, {
        label: this.$t("Name_product"),
        field: "product_name",
        thClass: "text-left",
        tdClass: "text-left",
        sortable: false
      }, {
        label: this.$t("ProductCode"),
        field: "product_code",
        thClass: "text-left",
        tdClass: "text-left",
        sortable: false
      }, {
        label: this.$t("warehouse"),
        field: "warehouse_name",
        thClass: "text-left",
        tdClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Supplier"),
        field: "provider_name",
        thClass: "text-left",
        tdClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Registered_Date") || "Registered",
        field: "created_at",
        thClass: "text-left",
        tdClass: "text-left"
      }];
    }
  },
  methods: {
    updateParams: function updateParams(p) {
      this.serverParams = Object.assign({}, this.serverParams, p);
    },
    onPageChange: function onPageChange(_ref) {
      var currentPage = _ref.currentPage;
      if (this.serverParams.page !== currentPage) {
        this.updateParams({
          page: currentPage
        });
        this.loadItems(currentPage);
      }
    },
    onPerPageChange: function onPerPageChange(_ref2) {
      var currentPerPage = _ref2.currentPerPage;
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({
          page: 1,
          perPage: currentPerPage
        });
        this.loadItems(1);
      }
    },
    onSortChange: function onSortChange(p) {
      this.updateParams({
        sort: {
          type: p[0].type,
          field: p[0].field
        }
      });
      this.loadItems(this.serverParams.page);
    },
    onSearch: function onSearch(v) {
      this.search = v.searchTerm;
      this.loadItems(this.serverParams.page);
    },
    loadItems: function loadItems(page) {
      var _this = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("report/serials/available", {
        params: {
          page: page,
          SortField: this.serverParams.sort.field,
          SortType: this.serverParams.sort.type,
          search: this.search,
          warehouse_id: this.warehouse_id || "",
          limit: this.limit
        }
      }).then(function (r) {
        _this.reports = r.data.report;
        _this.totalRows = r.data.totalRows;
        if (r.data.warehouses) _this.warehouses = r.data.warehouses;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this.isLoading = false;
      })["catch"](function () {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        setTimeout(function () {
          _this.isLoading = false;
        }, 500);
      });
    }
  },
  created: function created() {
    this.loadItems(1);
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Serial_Available_Report.vue?vue&type=template&id=b9fa7d50"
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Serial_Available_Report.vue?vue&type=template&id=b9fa7d50 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("Available_Serial_Numbers") || "Available Serial Numbers",
      folder: _vm.$t("Reports")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("b-card", {
    staticClass: "wrapper"
  }, [_c("vue-good-table", {
    attrs: {
      mode: "remote",
      columns: _vm.columns,
      totalRows: _vm.totalRows,
      rows: _vm.reports,
      "search-options": {
        placeholder: _vm.$t("Search_this_table"),
        enabled: true
      },
      "pagination-options": {
        enabled: true,
        mode: "records",
        nextLabel: "next",
        prevLabel: "prev"
      },
      styleClass: "tableOne table-hover vgt-table mt-3"
    },
    on: {
      "on-page-change": _vm.onPageChange,
      "on-per-page-change": _vm.onPerPageChange,
      "on-sort-change": _vm.onSortChange,
      "on-search": _vm.onSearch
    }
  }, [_c("div", {
    staticClass: "mt-2 mb-3",
    staticStyle: {
      display: "flex",
      gap: "10px",
      "flex-wrap": "wrap",
      "align-items": "flex-end"
    },
    attrs: {
      slot: "table-actions"
    },
    slot: "table-actions"
  }, [_c("b-form-group", {
    staticStyle: {
      "min-width": "200px"
    },
    attrs: {
      label: _vm.$t("warehouse")
    }
  }, [_c("v-select", {
    attrs: {
      reduce: function reduce(l) {
        return l.value;
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
      input: function input($event) {
        return _vm.loadItems(1);
      }
    },
    model: {
      value: _vm.warehouse_id,
      callback: function callback($$v) {
        _vm.warehouse_id = $$v;
      },
      expression: "warehouse_id"
    }
  })], 1), _vm._v(" "), _c("vue-excel-xlsx", {
    staticClass: "btn btn-sm btn-outline-danger ripple m-1",
    attrs: {
      data: _vm.reports,
      columns: _vm.columns,
      "file-name": "available_serials",
      "file-type": "xlsx",
      "sheet-name": "available_serials"
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "file-spreadsheet"
    }
  }), _vm._v(" EXCEL\n        ")], 1)], 1)])], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./resources/src/views/app/pages/reports/Serial_Available_Report.vue"
/*!***************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/Serial_Available_Report.vue ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Serial_Available_Report_vue_vue_type_template_id_b9fa7d50__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Serial_Available_Report.vue?vue&type=template&id=b9fa7d50 */ "./resources/src/views/app/pages/reports/Serial_Available_Report.vue?vue&type=template&id=b9fa7d50");
/* harmony import */ var _Serial_Available_Report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Serial_Available_Report.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/reports/Serial_Available_Report.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Serial_Available_Report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Serial_Available_Report_vue_vue_type_template_id_b9fa7d50__WEBPACK_IMPORTED_MODULE_0__.render,
  _Serial_Available_Report_vue_vue_type_template_id_b9fa7d50__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/reports/Serial_Available_Report.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/reports/Serial_Available_Report.vue?vue&type=script&lang=js"
/*!***************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/Serial_Available_Report.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Serial_Available_Report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Serial_Available_Report.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Serial_Available_Report.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Serial_Available_Report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/reports/Serial_Available_Report.vue?vue&type=template&id=b9fa7d50"
/*!*********************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/Serial_Available_Report.vue?vue&type=template&id=b9fa7d50 ***!
  \*********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Serial_Available_Report_vue_vue_type_template_id_b9fa7d50__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Serial_Available_Report_vue_vue_type_template_id_b9fa7d50__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Serial_Available_Report_vue_vue_type_template_id_b9fa7d50__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Serial_Available_Report.vue?vue&type=template&id=b9fa7d50 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Serial_Available_Report.vue?vue&type=template&id=b9fa7d50");


/***/ }

}]);