"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["internal_location_report"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/internal_location_report.vue?vue&type=script&lang=js"
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/internal_location_report.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Internal Location Report"
  },
  data: function data() {
    return {
      isLoading: true,
      warehouses: [],
      warehouse_id: "",
      rows: [],
      totalRows: 0,
      searchTerm: "",
      limit: "10",
      serverParams: {
        sort: {
          field: "name",
          type: "asc"
        },
        page: 1,
        perPage: 10
      }
    };
  },
  computed: {
    columns: function columns() {
      return [{
        label: this.$t("warehouse"),
        field: "warehouse",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("CodeProduct"),
        field: "code",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("ProductName"),
        field: "name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Internal_Location_Rack_Shelf"),
        field: "location",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }];
    }
  },
  methods: {
    Selected_Warehouse: function Selected_Warehouse(val) {
      if (val === null) this.warehouse_id = "";
      this.getReport(1);
    },
    onPageChange: function onPageChange(params) {
      this.serverParams.page = params.currentPage;
      this.getReport(this.serverParams.page);
    },
    onPerPageChange: function onPerPageChange(params) {
      this.serverParams.perPage = params.currentPerPage;
      this.limit = String(params.currentPerPage);
      this.getReport(1);
    },
    onSortChange: function onSortChange(params) {
      if (params && params.length) {
        this.serverParams.sort.field = params[0].field;
        this.serverParams.sort.type = params[0].type;
      }
      this.getReport(1);
    },
    onSearch: function onSearch(params) {
      this.searchTerm = params.searchTerm;
      this.getReport(1);
    },
    getReport: function getReport(page) {
      var _this = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      this.isLoading = true;
      axios.get("report/internal_location_report?page=" + page + "&limit=" + this.limit + "&warehouse_id=" + (this.warehouse_id || "") + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + (this.searchTerm || "")).then(function (response) {
        _this.rows = response.data.rows || [];
        _this.totalRows = response.data.totalRows || 0;
        _this.warehouses = response.data.warehouses || [];
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this.isLoading = false;
      })["catch"](function () {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        setTimeout(function () {
          _this.isLoading = false;
        }, 400);
      });
    }
  },
  created: function created() {
    this.getReport(1);
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/internal_location_report.vue?vue&type=template&id=7fcc82a9"
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/internal_location_report.vue?vue&type=template&id=7fcc82a9 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("Internal_Location_Report"),
      folder: _vm.$t("Reports")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("b-row", {
    staticClass: "justify-content-center mb-4"
  }, [_c("b-col", {
    attrs: {
      lg: "4",
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("warehouse")
    }
  }, [_c("v-select", {
    attrs: {
      reduce: function reduce(label) {
        return label.value;
      },
      placeholder: _vm.$t("All_Warehouses"),
      options: _vm.warehouses.map(function (w) {
        return {
          label: w.name,
          value: w.id
        };
      })
    },
    on: {
      input: _vm.Selected_Warehouse
    },
    model: {
      value: _vm.warehouse_id,
      callback: function callback($$v) {
        _vm.warehouse_id = $$v;
      },
      expression: "warehouse_id"
    }
  })], 1)], 1)], 1) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("vue-good-table", {
    attrs: {
      mode: "remote",
      columns: _vm.columns,
      totalRows: _vm.totalRows,
      rows: _vm.rows,
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
      styleClass: "table-hover tableOne vgt-table"
    },
    on: {
      "on-page-change": _vm.onPageChange,
      "on-per-page-change": _vm.onPerPageChange,
      "on-sort-change": _vm.onSortChange,
      "on-search": _vm.onSearch
    },
    scopedSlots: _vm._u([{
      key: "table-row",
      fn: function fn(props) {
        return [props.column.field === "location" ? _c("span", [props.row.location_code ? _c("span", [_vm._v("\n          " + _vm._s(props.row.location_code)), props.row.location_name ? _c("span", [_vm._v(" - " + _vm._s(props.row.location_name))]) : _vm._e()]) : _c("span", [_vm._v("-")])]) : _c("span", [_vm._v("\n        " + _vm._s(props.formattedRow[props.column.field]) + "\n      ")])];
      }
    }], null, false, 818783651)
  }) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./resources/src/views/app/pages/reports/internal_location_report.vue"
/*!****************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/internal_location_report.vue ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_location_report_vue_vue_type_template_id_7fcc82a9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal_location_report.vue?vue&type=template&id=7fcc82a9 */ "./resources/src/views/app/pages/reports/internal_location_report.vue?vue&type=template&id=7fcc82a9");
/* harmony import */ var _internal_location_report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal_location_report.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/reports/internal_location_report.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _internal_location_report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _internal_location_report_vue_vue_type_template_id_7fcc82a9__WEBPACK_IMPORTED_MODULE_0__.render,
  _internal_location_report_vue_vue_type_template_id_7fcc82a9__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/reports/internal_location_report.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/reports/internal_location_report.vue?vue&type=script&lang=js"
/*!****************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/internal_location_report.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_internal_location_report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./internal_location_report.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/internal_location_report.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_internal_location_report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/reports/internal_location_report.vue?vue&type=template&id=7fcc82a9"
/*!**********************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/internal_location_report.vue?vue&type=template&id=7fcc82a9 ***!
  \**********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_internal_location_report_vue_vue_type_template_id_7fcc82a9__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_internal_location_report_vue_vue_type_template_id_7fcc82a9__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_internal_location_report_vue_vue_type_template_id_7fcc82a9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./internal_location_report.vue?vue&type=template&id=7fcc82a9 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/internal_location_report.vue?vue&type=template&id=7fcc82a9");


/***/ }

}]);