"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["serial_numbers_list"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/serial_numbers/list.vue?vue&type=script&lang=js"
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/serial_numbers/list.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Serial Numbers"
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
      serials: [],
      warehouses: [],
      warehouse_id: "",
      status: ""
    };
  },
  computed: {
    statusOptions: function statusOptions() {
      return [{
        label: this.$t("Status_available"),
        value: "available"
      }, {
        label: this.$t("Status_sold"),
        value: "sold"
      }, {
        label: this.$t("Status_returned_customer"),
        value: "returned_customer"
      }, {
        label: this.$t("Status_returned_supplier"),
        value: "returned_supplier"
      }, {
        label: this.$t("Status_damaged"),
        value: "damaged"
      }, {
        label: this.$t("Status_reserved"),
        value: "reserved"
      }];
    },
    columns: function columns() {
      return [{
        label: this.$t("Serial_Number"),
        field: "serial_number",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Name_product"),
        field: "product_name",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("warehouse"),
        field: "warehouse_name",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Serial_Status"),
        field: "status",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Supplier"),
        field: "provider_name",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Customer"),
        field: "client_name",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Action"),
        field: "actions",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }];
    }
  },
  methods: {
    statusLabel: function statusLabel(s) {
      return this.$t("Status_" + s) || s;
    },
    statusBadge: function statusBadge(s) {
      var map = {
        available: "badge-success",
        sold: "badge-primary",
        returned_customer: "badge-info",
        returned_supplier: "badge-warning",
        damaged: "badge-danger",
        reserved: "badge-secondary"
      };
      return map[s] || "badge-light";
    },
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
    onSortChange: function onSortChange(params) {
      this.updateParams({
        sort: {
          type: params[0].type,
          field: params[0].field
        }
      });
      this.loadItems(this.serverParams.page);
    },
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.loadItems(this.serverParams.page);
    },
    loadOnFilter: function loadOnFilter() {
      this.loadItems(1);
    },
    loadItems: function loadItems(page) {
      var _this = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("serial_numbers", {
        params: {
          page: page,
          SortField: this.serverParams.sort.field,
          SortType: this.serverParams.sort.type,
          search: this.search,
          status: this.status || "",
          warehouse_id: this.warehouse_id || "",
          limit: this.limit
        }
      }).then(function (response) {
        _this.serials = response.data.serials;
        _this.totalRows = response.data.totalRows;
        if (response.data.warehouses) _this.warehouses = response.data.warehouses;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/serial_numbers/list.vue?vue&type=template&id=5dd598e1"
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/serial_numbers/list.vue?vue&type=template&id=5dd598e1 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("Serial_Management"),
      folder: _vm.$t("Serial_Numbers")
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
      rows: _vm.serials,
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
    },
    scopedSlots: _vm._u([{
      key: "table-row",
      fn: function fn(props) {
        return [props.column.field == "status" ? _c("span", [_c("span", {
          staticClass: "badge",
          "class": _vm.statusBadge(props.row.status)
        }, [_vm._v(_vm._s(_vm.statusLabel(props.row.status)))])]) : props.column.field == "actions" ? _c("span", [_c("router-link", {
          attrs: {
            title: _vm.$t("History"),
            to: "/app/serial_numbers/detail/" + props.row.id
          }
        }, [_c("b-button", {
          attrs: {
            size: "sm",
            variant: "primary"
          }
        }, [_c("lucide-icon", {
          attrs: {
            name: "history"
          }
        }), _vm._v(" " + _vm._s(_vm.$t("History") || "History"))], 1)], 1)], 1) : _c("span", [_vm._v(_vm._s(props.formattedRow[props.column.field]))])];
      }
    }], null, false, 1013080203)
  }, [_c("div", {
    staticClass: "mt-2 mb-3",
    staticStyle: {
      display: "flex",
      gap: "10px",
      "flex-wrap": "wrap"
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
      input: _vm.loadOnFilter
    },
    model: {
      value: _vm.warehouse_id,
      callback: function callback($$v) {
        _vm.warehouse_id = $$v;
      },
      expression: "warehouse_id"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    staticStyle: {
      "min-width": "200px"
    },
    attrs: {
      label: _vm.$t("Serial_Status")
    }
  }, [_c("v-select", {
    attrs: {
      reduce: function reduce(label) {
        return label.value;
      },
      placeholder: _vm.$t("Serial_Status"),
      options: _vm.statusOptions
    },
    on: {
      input: _vm.loadOnFilter
    },
    model: {
      value: _vm.status,
      callback: function callback($$v) {
        _vm.status = $$v;
      },
      expression: "status"
    }
  })], 1)], 1)])], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./resources/src/views/app/pages/serial_numbers/list.vue"
/*!***************************************************************!*\
  !*** ./resources/src/views/app/pages/serial_numbers/list.vue ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _list_vue_vue_type_template_id_5dd598e1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=5dd598e1 */ "./resources/src/views/app/pages/serial_numbers/list.vue?vue&type=template&id=5dd598e1");
/* harmony import */ var _list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/serial_numbers/list.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_5dd598e1__WEBPACK_IMPORTED_MODULE_0__.render,
  _list_vue_vue_type_template_id_5dd598e1__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/serial_numbers/list.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/serial_numbers/list.vue?vue&type=script&lang=js"
/*!***************************************************************************************!*\
  !*** ./resources/src/views/app/pages/serial_numbers/list.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./list.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/serial_numbers/list.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/serial_numbers/list.vue?vue&type=template&id=5dd598e1"
/*!*********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/serial_numbers/list.vue?vue&type=template&id=5dd598e1 ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_5dd598e1__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_5dd598e1__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_5dd598e1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./list.vue?vue&type=template&id=5dd598e1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/serial_numbers/list.vue?vue&type=template&id=5dd598e1");


/***/ }

}]);