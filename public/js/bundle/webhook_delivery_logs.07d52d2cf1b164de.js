"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["webhook_delivery_logs"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/webhooks/Delivery_Logs.vue?vue&type=script&lang=js"
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/webhooks/Delivery_Logs.vue?vue&type=script&lang=js ***!
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
    title: "Webhook Delivery Logs"
  },
  data: function data() {
    return {
      isLoading: true,
      serverParams: {
        columnFilters: {},
        sort: {
          field: "id",
          type: "desc"
        },
        page: 1,
        perPage: 15
      },
      totalRows: 0,
      search: "",
      limit: "15",
      rows: [],
      active: null,
      statusFilter: "",
      statusOptions: [{
        value: "",
        text: "All statuses"
      }, {
        value: "pending",
        text: "Pending"
      }, {
        value: "retrying",
        text: "Retrying"
      }, {
        value: "success",
        text: "Success"
      }, {
        value: "failed",
        text: "Failed"
      }]
    };
  },
  computed: {
    columns: function columns() {
      return [{
        label: "ID",
        field: "id",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Event") || "Event",
        field: "event",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Webhook") || "Webhook",
        field: "webhook",
        sortable: false,
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Status"),
        field: "status",
        tdClass: "text-center",
        thClass: "text-center"
      }, {
        label: "HTTP",
        field: "response_code",
        tdClass: "text-center",
        thClass: "text-center"
      }, {
        label: this.$t("Attempt") || "Attempt",
        field: "attempt",
        tdClass: "text-center",
        thClass: "text-center"
      }, {
        label: this.$t("Created_At") || "Created",
        field: "created_at",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Action"),
        field: "actions",
        sortable: false,
        tdClass: "text-left",
        thClass: "text-left"
      }];
    }
  },
  methods: {
    updateParams: function updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    onPageChange: function onPageChange(_ref) {
      var currentPage = _ref.currentPage;
      if (this.serverParams.page !== currentPage) {
        this.updateParams({
          page: currentPage
        });
        this.Get_Logs(currentPage);
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
        this.Get_Logs(1);
      }
    },
    onSortChange: function onSortChange(params) {
      this.updateParams({
        sort: {
          type: params[0].type,
          field: params[0].field
        }
      });
      this.Get_Logs(this.serverParams.page);
    },
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Logs(this.serverParams.page);
    },
    statusVariant: function statusVariant(s) {
      return {
        success: "success",
        failed: "danger",
        pending: "secondary",
        retrying: "warning"
      }[s] || "secondary";
    },
    httpVariant: function httpVariant(code) {
      if (code >= 200 && code < 300) return "success";
      if (code >= 400 && code < 500) return "warning";
      if (code >= 500) return "danger";
      return "secondary";
    },
    formatJson: function formatJson(value) {
      if (!value) return "—";
      try {
        return JSON.stringify(JSON.parse(value), null, 2);
      } catch (_) {
        return value;
      }
    },
    Show_Log: function Show_Log(row) {
      this.active = row;
      this.$bvModal.show("Log_Modal");
    },
    Get_Logs: function Get_Logs(page) {
      var _this = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("webhooks/deliveries", {
        params: {
          page: page,
          SortField: this.serverParams.sort.field,
          SortType: this.serverParams.sort.type,
          search: this.search,
          limit: this.limit,
          status: this.statusFilter
        }
      }).then(function (response) {
        _this.rows = response.data.deliveries;
        _this.totalRows = response.data.totalRows;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this.isLoading = false;
      })["catch"](function () {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        setTimeout(function () {
          return _this.isLoading = false;
        }, 500);
      });
    }
  },
  created: function created() {
    this.Get_Logs(1);
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/webhooks/Delivery_Logs.vue?vue&type=template&id=b86d0274"
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/webhooks/Delivery_Logs.vue?vue&type=template&id=b86d0274 ***!
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
      page: _vm.$t("Delivery_Logs") || "Delivery Logs",
      folder: _vm.$t("Webhooks")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("b-card", {
    staticClass: "wrapper"
  }, [_c("div", {
    staticClass: "mb-3 d-flex flex-wrap",
    staticStyle: {
      gap: "8px"
    }
  }, [_c("router-link", {
    staticClass: "btn btn-outline-secondary btn-rounded btn-sm",
    attrs: {
      to: "/app/settings/webhooks/list"
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "arrow-left"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Back") || "Back to Webhooks") + "\n      ")], 1), _vm._v(" "), _c("b-form-select", {
    staticStyle: {
      "max-width": "180px"
    },
    attrs: {
      options: _vm.statusOptions,
      size: "sm"
    },
    on: {
      change: function change($event) {
        return _vm.Get_Logs(1);
      }
    },
    model: {
      value: _vm.statusFilter,
      callback: function callback($$v) {
        _vm.statusFilter = $$v;
      },
      expression: "statusFilter"
    }
  })], 1), _vm._v(" "), _c("vue-good-table", {
    attrs: {
      mode: "remote",
      columns: _vm.columns,
      totalRows: _vm.totalRows,
      rows: _vm.rows,
      "search-options": {
        enabled: true,
        placeholder: _vm.$t("Search_this_table")
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
        return [props.column.field == "status" ? _c("span", [_c("b-badge", {
          attrs: {
            variant: _vm.statusVariant(props.row.status)
          }
        }, [_vm._v(_vm._s(props.row.status))])], 1) : props.column.field == "webhook" ? _c("span", [_vm._v("\n          " + _vm._s(props.row.webhook ? props.row.webhook.name : "—") + "\n        ")]) : props.column.field == "response_code" ? _c("span", [props.row.response_code ? _c("b-badge", {
          attrs: {
            variant: _vm.httpVariant(props.row.response_code)
          }
        }, [_vm._v("\n            " + _vm._s(props.row.response_code) + "\n          ")]) : _c("span", [_vm._v("—")])], 1) : props.column.field == "actions" ? _c("span", [_c("a", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          attrs: {
            title: "View"
          },
          on: {
            click: function click($event) {
              return _vm.Show_Log(props.row);
            }
          }
        }, [_c("lucide-icon", {
          staticClass: "text-25 text-info",
          attrs: {
            name: "eye"
          }
        })], 1)]) : _vm._e()];
      }
    }], null, false, 1622658423)
  })], 1) : _vm._e(), _vm._v(" "), _c("b-modal", {
    attrs: {
      "hide-footer": "",
      size: "lg",
      id: "Log_Modal",
      title: _vm.$t("Delivery_Details") || "Delivery Details"
    }
  }, [_vm.active ? _c("div", [_c("p", [_c("strong", [_vm._v("Event:")]), _vm._v(" " + _vm._s(_vm.active.event))]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Webhook:")]), _vm._v(" " + _vm._s(_vm.active.webhook && _vm.active.webhook.name))]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("URL:")]), _vm._v(" " + _vm._s(_vm.active.webhook && _vm.active.webhook.url))]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Status:")]), _vm._v(" "), _c("b-badge", {
    attrs: {
      variant: _vm.statusVariant(_vm.active.status)
    }
  }, [_vm._v(_vm._s(_vm.active.status))])], 1), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Response code:")]), _vm._v(" " + _vm._s(_vm.active.response_code || "—"))]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Attempt:")]), _vm._v(" " + _vm._s(_vm.active.attempt))]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Duration:")]), _vm._v(" " + _vm._s(_vm.active.duration_ms) + " ms")]), _vm._v(" "), _vm.active.error_message ? _c("p", [_c("strong", [_vm._v("Error:")]), _vm._v(" " + _vm._s(_vm.active.error_message))]) : _vm._e(), _vm._v(" "), _c("h6", {
    staticClass: "mt-3"
  }, [_vm._v("Payload")]), _vm._v(" "), _c("pre", {
    staticStyle: {
      "max-height": "260px",
      overflow: "auto",
      background: "#f8f9fa",
      padding: "8px",
      "border-radius": "4px"
    }
  }, [_vm._v(_vm._s(_vm.formatJson(_vm.active.payload)))]), _vm._v(" "), _c("h6", {
    staticClass: "mt-3"
  }, [_vm._v("Response body")]), _vm._v(" "), _c("pre", {
    staticStyle: {
      "max-height": "220px",
      overflow: "auto",
      background: "#f8f9fa",
      padding: "8px",
      "border-radius": "4px"
    }
  }, [_vm._v(_vm._s(_vm.active.response_body || "—"))])]) : _vm._e()])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./resources/src/views/app/pages/settings/webhooks/Delivery_Logs.vue"
/*!***************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/webhooks/Delivery_Logs.vue ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Delivery_Logs_vue_vue_type_template_id_b86d0274__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Delivery_Logs.vue?vue&type=template&id=b86d0274 */ "./resources/src/views/app/pages/settings/webhooks/Delivery_Logs.vue?vue&type=template&id=b86d0274");
/* harmony import */ var _Delivery_Logs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Delivery_Logs.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/settings/webhooks/Delivery_Logs.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Delivery_Logs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Delivery_Logs_vue_vue_type_template_id_b86d0274__WEBPACK_IMPORTED_MODULE_0__.render,
  _Delivery_Logs_vue_vue_type_template_id_b86d0274__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/settings/webhooks/Delivery_Logs.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/settings/webhooks/Delivery_Logs.vue?vue&type=script&lang=js"
/*!***************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/webhooks/Delivery_Logs.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivery_Logs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Delivery_Logs.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/webhooks/Delivery_Logs.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivery_Logs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/settings/webhooks/Delivery_Logs.vue?vue&type=template&id=b86d0274"
/*!*********************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/webhooks/Delivery_Logs.vue?vue&type=template&id=b86d0274 ***!
  \*********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivery_Logs_vue_vue_type_template_id_b86d0274__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivery_Logs_vue_vue_type_template_id_b86d0274__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivery_Logs_vue_vue_type_template_id_b86d0274__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Delivery_Logs.vue?vue&type=template&id=b86d0274 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/webhooks/Delivery_Logs.vue?vue&type=template&id=b86d0274");


/***/ }

}]);