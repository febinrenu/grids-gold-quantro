"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["whatsapp_logs"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/whatsapp/Logs.vue?vue&type=script&lang=js"
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/whatsapp/Logs.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      logs: [],
      totalRows: 0,
      isLoading: true,
      perPage: 15,
      currentPage: 1,
      search: "",
      statusFilter: "",
      statusOptions: [{
        value: "",
        text: "All statuses"
      }, {
        value: "pending",
        text: "Pending"
      }, {
        value: "sent",
        text: "Sent"
      }, {
        value: "delivered",
        text: "Delivered"
      }, {
        value: "read",
        text: "Read"
      }, {
        value: "failed",
        text: "Failed"
      }],
      columns: [{
        label: "Recipient",
        field: "recipient"
      }, {
        label: "Type",
        field: "message_type"
      }, {
        label: "Template",
        field: "template_key"
      }, {
        label: "Message",
        field: "body"
      }, {
        label: "Status",
        field: "status"
      }, {
        label: "Error",
        field: "error"
      }, {
        label: "Sent At",
        field: "sent_at"
      }, {
        label: "Actions",
        field: "actions",
        sortable: false
      }]
    };
  },
  mounted: function mounted() {
    this.fetchLogs();
  },
  methods: {
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    truncate: function truncate(s) {
      s = String(s || "");
      return s.length > 40 ? s.slice(0, 40) + "…" : s;
    },
    statusVariant: function statusVariant(status) {
      return {
        sent: "info",
        delivered: "primary",
        read: "success",
        failed: "danger",
        pending: "secondary"
      }[status] || "secondary";
    },
    fetchLogs: function fetchLogs() {
      var _this = this;
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.currentPage = page;
      this.isLoading = true;
      axios.get("/whatsapp/logs", {
        params: {
          page: page,
          per_page: this.perPage,
          search: this.search,
          status: this.statusFilter
        }
      }).then(function (res) {
        _this.logs = res.data.logs;
        _this.totalRows = res.data.total;
      })["catch"](function () {
        return _this.makeToast("danger", "Failed to load logs.", "Error");
      })["finally"](function () {
        return _this.isLoading = false;
      });
    },
    remove: function remove(id) {
      var _this2 = this;
      axios["delete"]("/whatsapp/logs/" + id).then(function () {
        _this2.makeToast("success", "Log deleted.", "Success");
        _this2.fetchLogs(_this2.currentPage);
      })["catch"](function () {
        return _this2.makeToast("danger", "Failed to delete.", "Error");
      });
    },
    onPageChange: function onPageChange(params) {
      this.fetchLogs(params.currentPage);
    },
    onPerPageChange: function onPerPageChange(params) {
      this.perPage = params.currentPerPage;
      this.fetchLogs(1);
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/whatsapp/Logs.vue?vue&type=template&id=16e706c2"
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/whatsapp/Logs.vue?vue&type=template&id=16e706c2 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: "Message Logs",
      folder: "WhatsApp"
    }
  }), _vm._v(" "), _c("b-card", [_c("b-row", {
    staticClass: "mb-3"
  }, [_c("b-col", {
    staticClass: "mb-2",
    attrs: {
      md: "4"
    }
  }, [_c("b-form-input", {
    attrs: {
      placeholder: "Search recipient / message"
    },
    on: {
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.fetchLogs(1);
      }
    },
    model: {
      value: _vm.search,
      callback: function callback($$v) {
        _vm.search = $$v;
      },
      expression: "search"
    }
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-2",
    attrs: {
      md: "3"
    }
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.statusOptions
    },
    on: {
      change: function change($event) {
        return _vm.fetchLogs(1);
      }
    },
    model: {
      value: _vm.statusFilter,
      callback: function callback($$v) {
        _vm.statusFilter = $$v;
      },
      expression: "statusFilter"
    }
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-2 text-right",
    attrs: {
      md: "5"
    }
  }, [_c("b-button", {
    attrs: {
      variant: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.fetchLogs(1);
      }
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "refresh-cw"
    }
  }), _vm._v(" Refresh")], 1)], 1)], 1), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("vue-good-table", {
    attrs: {
      mode: "remote",
      columns: _vm.columns,
      totalRows: _vm.totalRows,
      rows: _vm.logs,
      "pagination-options": {
        enabled: true,
        mode: "records",
        perPage: _vm.perPage
      },
      styleClass: "table-hover tableOne vgt-table"
    },
    on: {
      "on-page-change": _vm.onPageChange,
      "on-per-page-change": _vm.onPerPageChange
    },
    scopedSlots: _vm._u([{
      key: "table-row",
      fn: function fn(props) {
        return [props.column.field === "status" ? _c("span", [_c("b-badge", {
          attrs: {
            variant: _vm.statusVariant(props.row.status)
          }
        }, [_vm._v(_vm._s(props.row.status))])], 1) : props.column.field === "error" ? _c("span", [props.row.error ? _c("span", {
          staticClass: "text-danger",
          attrs: {
            title: props.row.error
          }
        }, [_vm._v("\n            " + _vm._s(_vm.truncate(props.row.error)) + "\n          ")]) : _c("span", [_vm._v("—")])]) : props.column.field === "actions" ? _c("span", [_c("b-button", {
          attrs: {
            size: "sm",
            variant: "outline-danger"
          },
          on: {
            click: function click($event) {
              return _vm.remove(props.row.id);
            }
          }
        }, [_c("lucide-icon", {
          attrs: {
            name: "trash-2"
          }
        })], 1)], 1) : _c("span", [_vm._v(_vm._s(props.formattedRow[props.column.field]))])];
      }
    }], null, false, 961724415)
  }) : _vm._e()], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./resources/src/views/app/pages/whatsapp/Logs.vue"
/*!*********************************************************!*\
  !*** ./resources/src/views/app/pages/whatsapp/Logs.vue ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Logs_vue_vue_type_template_id_16e706c2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logs.vue?vue&type=template&id=16e706c2 */ "./resources/src/views/app/pages/whatsapp/Logs.vue?vue&type=template&id=16e706c2");
/* harmony import */ var _Logs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logs.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/whatsapp/Logs.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Logs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Logs_vue_vue_type_template_id_16e706c2__WEBPACK_IMPORTED_MODULE_0__.render,
  _Logs_vue_vue_type_template_id_16e706c2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/whatsapp/Logs.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/whatsapp/Logs.vue?vue&type=script&lang=js"
/*!*********************************************************************************!*\
  !*** ./resources/src/views/app/pages/whatsapp/Logs.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Logs.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/whatsapp/Logs.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/whatsapp/Logs.vue?vue&type=template&id=16e706c2"
/*!***************************************************************************************!*\
  !*** ./resources/src/views/app/pages/whatsapp/Logs.vue?vue&type=template&id=16e706c2 ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Logs_vue_vue_type_template_id_16e706c2__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Logs_vue_vue_type_template_id_16e706c2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Logs_vue_vue_type_template_id_16e706c2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Logs.vue?vue&type=template&id=16e706c2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/whatsapp/Logs.vue?vue&type=template&id=16e706c2");


/***/ }

}]);