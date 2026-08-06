"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["marketing_campaigns"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/campaigns.vue?vue&type=script&lang=js"
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/campaigns.vue?vue&type=script&lang=js ***!
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
    title: "Campaigns"
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
      selectedIds: [],
      totalRows: "",
      search: "",
      limit: "10",
      type_filter: "",
      status_filter: "",
      types: ["sms", "email", "whatsapp"],
      statuses: ["draft", "scheduled", "sending", "sent", "failed", "cancelled"],
      campaigns: []
    };
  },
  computed: {
    columns: function columns() {
      return [{
        label: this.$t("Campaign_Title"),
        field: "title",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Type"),
        field: "type",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Status"),
        field: "status",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Delivery_Status"),
        field: "progress",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Scheduled_At"),
        field: "schedule",
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
    format_label: function format_label(v) {
      return v ? String(v).replace(/_/g, " ") : "-";
    },
    type_label: function type_label(t) {
      var map = {
        sms: "SMS",
        email: "Email",
        whatsapp: "WhatsApp"
      };
      return map[t] || t;
    },
    short_dt: function short_dt(d) {
      return d ? String(d).replace("T", " ").substring(0, 16) : "-";
    },
    status_class: function status_class(s) {
      var map = {
        draft: "badge-outline-secondary",
        scheduled: "badge-outline-primary",
        sending: "badge-outline-warning",
        sent: "badge-outline-success",
        failed: "badge-outline-danger",
        cancelled: "badge-outline-dark"
      };
      return map[s] || "badge-outline-secondary";
    },
    canEdit: function canEdit(row) {
      return ["draft", "scheduled", "failed", "cancelled"].includes(row.status);
    },
    canSend: function canSend(row) {
      return ["draft", "scheduled", "failed"].includes(row.status);
    },
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    updateParams: function updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    onPageChange: function onPageChange(_ref) {
      var currentPage = _ref.currentPage;
      if (this.serverParams.page !== currentPage) {
        this.updateParams({
          page: currentPage
        });
        this.Get_Campaigns(currentPage);
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
        this.Get_Campaigns(1);
      }
    },
    selectionChanged: function selectionChanged(_ref3) {
      var _this = this;
      var selectedRows = _ref3.selectedRows;
      this.selectedIds = [];
      selectedRows.forEach(function (row) {
        return _this.selectedIds.push(row.id);
      });
    },
    onSortChange: function onSortChange(params) {
      this.updateParams({
        sort: {
          type: params[0].type,
          field: params[0].field
        }
      });
      this.Get_Campaigns(this.serverParams.page);
    },
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Campaigns(this.serverParams.page);
    },
    New_Campaign: function New_Campaign() {
      this.$router.push({
        name: "marketing_create_campaign"
      });
    },
    Edit_Campaign: function Edit_Campaign(id) {
      this.$router.push({
        name: "marketing_edit_campaign",
        params: {
          id: id
        }
      });
    },
    View_Details: function View_Details(id) {
      this.$router.push({
        name: "marketing_campaign_details",
        params: {
          id: id
        }
      });
    },
    Get_Campaigns: function Get_Campaigns(page) {
      var _this2 = this;
      this.serverParams.page = page;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("marketing/campaigns?page=" + page + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&type=" + this.type_filter + "&status=" + this.status_filter + "&limit=" + this.limit).then(function (response) {
        _this2.totalRows = response.data.totalRows;
        _this2.campaigns = response.data.campaigns;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this2.isLoading = false;
      })["catch"](function () {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        setTimeout(function () {
          _this2.isLoading = false;
        }, 500);
      });
    },
    Send_Campaign: function Send_Campaign(id) {
      var _this3 = this;
      this.$swal({
        title: this.$t("Send_Campaign"),
        text: this.$t("Send_Now") + " ?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: this.$t("Send_Now")
      }).then(function (result) {
        if (result.value) {
          axios.post("marketing/campaigns/" + id + "/send").then(function () {
            _this3.makeToast("success", _this3.$t("Created_in_successfully"), _this3.$t("Success"));
            _this3.Get_Campaigns(_this3.serverParams.page);
          })["catch"](function () {
            _this3.makeToast("danger", _this3.$t("InvalidData"), _this3.$t("Failed"));
          });
        }
      });
    },
    Remove_Campaign: function Remove_Campaign(id) {
      var _this4 = this;
      this.$swal({
        title: this.$t("Delete_Title"),
        text: this.$t("Delete_Text"),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Delete_cancelButtonText"),
        confirmButtonText: this.$t("Delete_confirmButtonText")
      }).then(function (result) {
        if (result.value) {
          axios["delete"]("marketing/campaigns/" + id).then(function () {
            _this4.$swal(_this4.$t("Delete_Deleted"), _this4.$t("Deleted_in_successfully"), "success");
            _this4.Get_Campaigns(_this4.serverParams.page);
          })["catch"](function () {
            _this4.$swal(_this4.$t("Delete_Failed"), _this4.$t("Delete_Therewassomethingwronge"), "warning");
          });
        }
      });
    },
    delete_by_selected: function delete_by_selected() {
      var _this5 = this;
      this.$swal({
        title: this.$t("Delete_Title"),
        text: this.$t("Delete_Text"),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Delete_cancelButtonText"),
        confirmButtonText: this.$t("Delete_confirmButtonText")
      }).then(function (result) {
        if (result.value) {
          axios.post("marketing/campaigns/delete/by_selection", {
            selectedIds: _this5.selectedIds
          }).then(function () {
            _this5.$swal(_this5.$t("Delete_Deleted"), _this5.$t("Deleted_in_successfully"), "success");
            _this5.Get_Campaigns(_this5.serverParams.page);
          })["catch"](function () {
            _this5.$swal(_this5.$t("Delete_Failed"), _this5.$t("Delete_Therewassomethingwronge"), "warning");
          });
        }
      });
    }
  },
  created: function created() {
    this.Get_Campaigns(1);
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/campaigns.vue?vue&type=template&id=e0853c26"
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/campaigns.vue?vue&type=template&id=e0853c26 ***!
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
      page: _vm.$t("Campaign_List"),
      folder: _vm.$t("Marketing_Management")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("b-card", {
    staticClass: "wrapper"
  }, [_c("b-row", {
    staticClass: "mb-3"
  }, [_c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Campaign_Type")
    }
  }, [_c("b-form-select", {
    on: {
      change: function change($event) {
        return _vm.Get_Campaigns(1);
      }
    },
    model: {
      value: _vm.type_filter,
      callback: function callback($$v) {
        _vm.type_filter = $$v;
      },
      expression: "type_filter"
    }
  }, [_c("b-form-select-option", {
    attrs: {
      value: ""
    }
  }, [_vm._v(_vm._s(_vm.$t("All")))]), _vm._v(" "), _vm._l(_vm.types, function (t) {
    return _c("b-form-select-option", {
      key: t,
      attrs: {
        value: t
      }
    }, [_vm._v(_vm._s(_vm.type_label(t)))]);
  })], 2)], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Status")
    }
  }, [_c("b-form-select", {
    on: {
      change: function change($event) {
        return _vm.Get_Campaigns(1);
      }
    },
    model: {
      value: _vm.status_filter,
      callback: function callback($$v) {
        _vm.status_filter = $$v;
      },
      expression: "status_filter"
    }
  }, [_c("b-form-select-option", {
    attrs: {
      value: ""
    }
  }, [_vm._v(_vm._s(_vm.$t("All")))]), _vm._v(" "), _vm._l(_vm.statuses, function (s) {
    return _c("b-form-select-option", {
      key: s,
      attrs: {
        value: s
      }
    }, [_vm._v(_vm._s(_vm.format_label(s)))]);
  })], 2)], 1)], 1)], 1), _vm._v(" "), _c("vue-good-table", {
    attrs: {
      mode: "remote",
      columns: _vm.columns,
      totalRows: _vm.totalRows,
      rows: _vm.campaigns,
      "search-options": {
        enabled: true,
        placeholder: _vm.$t("Search_this_table")
      },
      "select-options": {
        enabled: true,
        clearSelectionText: ""
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
      "on-search": _vm.onSearch,
      "on-selected-rows-change": _vm.selectionChanged
    },
    scopedSlots: _vm._u([{
      key: "table-row",
      fn: function fn(props) {
        return [props.column.field == "title" ? _c("span", [_c("a", {
          staticClass: "cursor-pointer text-primary font-weight-bold",
          on: {
            click: function click($event) {
              return _vm.View_Details(props.row.id);
            }
          }
        }, [_vm._v(_vm._s(props.row.title))])]) : props.column.field == "type" ? _c("span", [_c("span", {
          staticClass: "badge badge-outline-info"
        }, [_vm._v(_vm._s(_vm.type_label(props.row.type)))])]) : props.column.field == "status" ? _c("span", [_c("span", {
          staticClass: "badge",
          "class": _vm.status_class(props.row.status)
        }, [_vm._v(_vm._s(_vm.format_label(props.row.status)))])]) : props.column.field == "progress" ? _c("span", [_vm._v("\n          " + _vm._s(props.row.sent_count) + " / " + _vm._s(props.row.total_recipients) + "\n          "), props.row.failed_count > 0 ? _c("span", {
          staticClass: "text-danger"
        }, [_vm._v("(" + _vm._s(props.row.failed_count) + " " + _vm._s(_vm.$t("Failed")) + ")")]) : _vm._e()]) : props.column.field == "schedule" ? _c("span", [_vm._v("\n          " + _vm._s(props.row.send_immediately ? "-" : _vm.short_dt(props.row.scheduled_at)) + "\n        ")]) : props.column.field == "actions" ? _c("span", [_c("a", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "cursor-pointer",
          attrs: {
            title: _vm.$t("View_Details")
          },
          on: {
            click: function click($event) {
              return _vm.View_Details(props.row.id);
            }
          }
        }, [_c("lucide-icon", {
          staticClass: "text-25 text-primary",
          attrs: {
            name: "eye"
          }
        })], 1), _vm._v(" "), _vm.canSend(props.row) ? _c("a", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "cursor-pointer",
          attrs: {
            title: _vm.$t("Send_Now")
          },
          on: {
            click: function click($event) {
              return _vm.Send_Campaign(props.row.id);
            }
          }
        }, [_c("lucide-icon", {
          staticClass: "text-25 text-info",
          attrs: {
            name: "send"
          }
        })], 1) : _vm._e(), _vm._v(" "), _vm.canEdit(props.row) ? _c("a", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "cursor-pointer",
          attrs: {
            title: "Edit"
          },
          on: {
            click: function click($event) {
              return _vm.Edit_Campaign(props.row.id);
            }
          }
        }, [_c("lucide-icon", {
          staticClass: "text-25 text-success",
          attrs: {
            name: "pencil"
          }
        })], 1) : _vm._e(), _vm._v(" "), _c("a", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "cursor-pointer",
          attrs: {
            title: _vm.$t("Delete")
          },
          on: {
            click: function click($event) {
              return _vm.Remove_Campaign(props.row.id);
            }
          }
        }, [_c("lucide-icon", {
          staticClass: "text-25 text-danger",
          attrs: {
            name: "x"
          }
        })], 1)]) : _vm._e()];
      }
    }], null, false, 1796135162)
  }, [_c("div", {
    attrs: {
      slot: "selected-row-actions"
    },
    slot: "selected-row-actions"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    on: {
      click: function click($event) {
        return _vm.delete_by_selected();
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("Del")))])]), _vm._v(" "), _c("div", {
    staticClass: "mt-2 mb-3",
    attrs: {
      slot: "table-actions"
    },
    slot: "table-actions"
  }, [_c("b-button", {
    staticClass: "btn-rounded",
    attrs: {
      variant: "btn btn-primary btn-icon m-1"
    },
    on: {
      click: function click($event) {
        return _vm.New_Campaign();
      }
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "plus"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("New_Campaign")) + "\n        ")], 1)], 1)])], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./resources/src/views/app/pages/marketing/campaigns.vue"
/*!***************************************************************!*\
  !*** ./resources/src/views/app/pages/marketing/campaigns.vue ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _campaigns_vue_vue_type_template_id_e0853c26__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./campaigns.vue?vue&type=template&id=e0853c26 */ "./resources/src/views/app/pages/marketing/campaigns.vue?vue&type=template&id=e0853c26");
/* harmony import */ var _campaigns_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campaigns.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/marketing/campaigns.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _campaigns_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _campaigns_vue_vue_type_template_id_e0853c26__WEBPACK_IMPORTED_MODULE_0__.render,
  _campaigns_vue_vue_type_template_id_e0853c26__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/marketing/campaigns.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/marketing/campaigns.vue?vue&type=script&lang=js"
/*!***************************************************************************************!*\
  !*** ./resources/src/views/app/pages/marketing/campaigns.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_campaigns_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./campaigns.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/campaigns.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_campaigns_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/marketing/campaigns.vue?vue&type=template&id=e0853c26"
/*!*********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/marketing/campaigns.vue?vue&type=template&id=e0853c26 ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_campaigns_vue_vue_type_template_id_e0853c26__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_campaigns_vue_vue_type_template_id_e0853c26__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_campaigns_vue_vue_type_template_id_e0853c26__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./campaigns.vue?vue&type=template&id=e0853c26 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/campaigns.vue?vue&type=template&id=e0853c26");


/***/ }

}]);