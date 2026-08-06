"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["webhook_incoming_logs"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/webhooks/Incoming_Logs.vue?vue&type=script&lang=js"
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/webhooks/Incoming_Logs.vue?vue&type=script&lang=js ***!
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
    title: "Incoming Webhook Logs"
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
      sourceFilter: "",
      statusFilter: "",
      statusOptions: [{
        value: "",
        text: "All statuses"
      }, {
        value: "received",
        text: "Received"
      }, {
        value: "processed",
        text: "Processed"
      }, {
        value: "failed",
        text: "Failed"
      }, {
        value: "ignored",
        text: "Ignored"
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
        label: this.$t("Source") || "Source",
        field: "source",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Event") || "Event",
        field: "event",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Status"),
        field: "status",
        tdClass: "text-center",
        thClass: "text-center"
      }, {
        label: this.$t("Signature") || "Signature",
        field: "signature_valid",
        tdClass: "text-center",
        thClass: "text-center"
      }, {
        label: "IP",
        field: "ip",
        tdClass: "text-left",
        thClass: "text-left"
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
        processed: "success",
        received: "info",
        failed: "danger",
        ignored: "secondary"
      }[s] || "secondary";
    },
    formatJson: function formatJson(value) {
      if (!value) return "—";
      try {
        return JSON.stringify(value, null, 2);
      } catch (_) {
        return String(value);
      }
    },
    formatPayload: function formatPayload(value) {
      if (!value) return "—";
      try {
        return JSON.stringify(JSON.parse(value), null, 2);
      } catch (_) {
        return value;
      }
    },
    Show_Log: function Show_Log(row) {
      this.active = row;
      this.$bvModal.show("Incoming_Modal");
    },
    Get_Logs: function Get_Logs(page) {
      var _this = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("webhooks/incoming-logs", {
        params: {
          page: page,
          SortField: this.serverParams.sort.field,
          SortType: this.serverParams.sort.type,
          search: this.search,
          limit: this.limit,
          source: this.sourceFilter,
          status: this.statusFilter
        }
      }).then(function (response) {
        _this.rows = response.data.logs;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/webhooks/Incoming_Logs.vue?vue&type=template&id=f9b38a58"
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/webhooks/Incoming_Logs.vue?vue&type=template&id=f9b38a58 ***!
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
      page: _vm.$t("Incoming_Logs") || "Incoming Logs",
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
  }), _vm._v(" " + _vm._s(_vm.$t("Back") || "Back to Webhooks") + "\n      ")], 1), _vm._v(" "), _c("b-form-input", {
    staticStyle: {
      "max-width": "180px"
    },
    attrs: {
      size: "sm",
      placeholder: "Filter source…"
    },
    on: {
      change: function change($event) {
        return _vm.Get_Logs(1);
      }
    },
    model: {
      value: _vm.sourceFilter,
      callback: function callback($$v) {
        _vm.sourceFilter = $$v;
      },
      expression: "sourceFilter"
    }
  }), _vm._v(" "), _c("b-form-select", {
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
        }, [_vm._v(_vm._s(props.row.status))])], 1) : props.column.field == "signature_valid" ? _c("span", [_c("b-badge", {
          attrs: {
            variant: props.row.signature_valid ? "success" : "danger"
          }
        }, [_vm._v("\n            " + _vm._s(props.row.signature_valid ? "Valid" : "Invalid") + "\n          ")])], 1) : props.column.field == "actions" ? _c("span", [_c("a", {
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
    }], null, false, 2022849383)
  })], 1) : _vm._e(), _vm._v(" "), _c("b-modal", {
    attrs: {
      "hide-footer": "",
      size: "lg",
      id: "Incoming_Modal",
      title: _vm.$t("Incoming_Details") || "Incoming Webhook"
    }
  }, [_vm.active ? _c("div", [_c("p", [_c("strong", [_vm._v("Source:")]), _vm._v(" " + _vm._s(_vm.active.source))]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Event:")]), _vm._v(" " + _vm._s(_vm.active.event || "—"))]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Status:")]), _vm._v(" "), _c("b-badge", {
    attrs: {
      variant: _vm.statusVariant(_vm.active.status)
    }
  }, [_vm._v(_vm._s(_vm.active.status))])], 1), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Signature:")]), _vm._v(" "), _c("b-badge", {
    attrs: {
      variant: _vm.active.signature_valid ? "success" : "danger"
    }
  }, [_vm._v("\n          " + _vm._s(_vm.active.signature_valid ? "Valid" : "Invalid") + "\n        ")])], 1), _vm._v(" "), _c("p", [_c("strong", [_vm._v("IP:")]), _vm._v(" " + _vm._s(_vm.active.ip || "—"))]), _vm._v(" "), _vm.active.error_message ? _c("p", [_c("strong", [_vm._v("Error:")]), _vm._v(" " + _vm._s(_vm.active.error_message))]) : _vm._e(), _vm._v(" "), _c("h6", {
    staticClass: "mt-3"
  }, [_vm._v("Headers")]), _vm._v(" "), _c("pre", {
    staticStyle: {
      "max-height": "180px",
      overflow: "auto",
      background: "#f8f9fa",
      padding: "8px",
      "border-radius": "4px"
    }
  }, [_vm._v(_vm._s(_vm.formatJson(_vm.active.headers)))]), _vm._v(" "), _c("h6", {
    staticClass: "mt-3"
  }, [_vm._v("Payload")]), _vm._v(" "), _c("pre", {
    staticStyle: {
      "max-height": "260px",
      overflow: "auto",
      background: "#f8f9fa",
      padding: "8px",
      "border-radius": "4px"
    }
  }, [_vm._v(_vm._s(_vm.formatPayload(_vm.active.payload)))])]) : _vm._e()])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./resources/src/views/app/pages/settings/webhooks/Incoming_Logs.vue"
/*!***************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/webhooks/Incoming_Logs.vue ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Incoming_Logs_vue_vue_type_template_id_f9b38a58__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Incoming_Logs.vue?vue&type=template&id=f9b38a58 */ "./resources/src/views/app/pages/settings/webhooks/Incoming_Logs.vue?vue&type=template&id=f9b38a58");
/* harmony import */ var _Incoming_Logs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Incoming_Logs.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/settings/webhooks/Incoming_Logs.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Incoming_Logs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Incoming_Logs_vue_vue_type_template_id_f9b38a58__WEBPACK_IMPORTED_MODULE_0__.render,
  _Incoming_Logs_vue_vue_type_template_id_f9b38a58__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/settings/webhooks/Incoming_Logs.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/settings/webhooks/Incoming_Logs.vue?vue&type=script&lang=js"
/*!***************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/webhooks/Incoming_Logs.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Incoming_Logs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Incoming_Logs.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/webhooks/Incoming_Logs.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Incoming_Logs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/settings/webhooks/Incoming_Logs.vue?vue&type=template&id=f9b38a58"
/*!*********************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/webhooks/Incoming_Logs.vue?vue&type=template&id=f9b38a58 ***!
  \*********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Incoming_Logs_vue_vue_type_template_id_f9b38a58__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Incoming_Logs_vue_vue_type_template_id_f9b38a58__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Incoming_Logs_vue_vue_type_template_id_f9b38a58__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Incoming_Logs.vue?vue&type=template&id=f9b38a58 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/webhooks/Incoming_Logs.vue?vue&type=template&id=f9b38a58");


/***/ }

}]);