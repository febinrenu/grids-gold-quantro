"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["marketing_templates"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/templates.vue?vue&type=script&lang=js"
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/templates.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Templates"
  },
  data: function data() {
    return {
      isLoading: true,
      SubmitProcessing: false,
      serverParams: {
        sort: {
          field: "id",
          type: "desc"
        },
        page: 1,
        perPage: 10
      },
      totalRows: "",
      search: "",
      limit: "10",
      editmode: false,
      templates: [],
      template: this.empty_template()
    };
  },
  computed: {
    templateType: function templateType() {
      return this.$route.meta.templateType || "sms";
    },
    pageTitle: function pageTitle() {
      var map = {
        sms: this.$t("SMS_Templates"),
        whatsapp: this.$t("WhatsApp_Templates"),
        email: this.$t("Email_Templates")
      };
      return map[this.templateType] || this.$t("Marketing_Templates");
    },
    columns: function columns() {
      return [{
        label: this.$t("Template_Name"),
        field: "name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Category"),
        field: "category",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Action"),
        field: "actions",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }];
    }
  },
  watch: {
    "$route": function $route() {
      this.isLoading = true;
      this.Get_Templates(1);
    }
  },
  methods: {
    empty_template: function empty_template() {
      return {
        id: "",
        name: "",
        category: "",
        subject: "",
        content: ""
      };
    },
    getValidationState: function getValidationState(_ref) {
      var dirty = _ref.dirty,
        validated = _ref.validated,
        _ref$valid = _ref.valid,
        valid = _ref$valid === void 0 ? null : _ref$valid;
      return dirty || validated ? valid : null;
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
    onPageChange: function onPageChange(_ref2) {
      var currentPage = _ref2.currentPage;
      if (this.serverParams.page !== currentPage) {
        this.updateParams({
          page: currentPage
        });
        this.Get_Templates(currentPage);
      }
    },
    onPerPageChange: function onPerPageChange(_ref3) {
      var currentPerPage = _ref3.currentPerPage;
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({
          page: 1,
          perPage: currentPerPage
        });
        this.Get_Templates(1);
      }
    },
    onSortChange: function onSortChange(params) {
      this.updateParams({
        sort: {
          type: params[0].type,
          field: params[0].field
        }
      });
      this.Get_Templates(this.serverParams.page);
    },
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Templates(this.serverParams.page);
    },
    New_Template: function New_Template() {
      this.template = this.empty_template();
      this.editmode = false;
      this.$bvModal.show("New_Template");
    },
    Edit_Template: function Edit_Template(row) {
      this.template = _objectSpread(_objectSpread({}, this.empty_template()), row);
      this.editmode = true;
      this.$bvModal.show("New_Template");
    },
    Duplicate_Template: function Duplicate_Template(id) {
      var _this = this;
      axios.post("marketing/templates/" + id + "/duplicate").then(function () {
        _this.makeToast("success", _this.$t("Created_in_successfully"), _this.$t("Success"));
        _this.Get_Templates(_this.serverParams.page);
      })["catch"](function () {
        _this.makeToast("danger", _this.$t("InvalidData"), _this.$t("Failed"));
      });
    },
    Get_Templates: function Get_Templates(page) {
      var _this2 = this;
      this.serverParams.page = page;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("marketing/templates?page=" + page + "&type=" + this.templateType + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&limit=" + this.limit).then(function (response) {
        _this2.totalRows = response.data.totalRows;
        _this2.templates = response.data.templates;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this2.isLoading = false;
      })["catch"](function () {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        setTimeout(function () {
          _this2.isLoading = false;
        }, 500);
      });
    },
    Submit_Template: function Submit_Template() {
      var _this3 = this;
      this.$refs.Template_Form.validate().then(function (success) {
        if (!success) {
          _this3.makeToast("danger", _this3.$t("Please_fill_the_form_correctly"), _this3.$t("Failed"));
          return;
        }
        _this3.SubmitProcessing = true;
        var payload = {
          name: _this3.template.name,
          type: _this3.templateType,
          category: _this3.template.category,
          subject: _this3.template.subject,
          content: _this3.template.content
        };
        var req = _this3.editmode ? axios.put("marketing/templates/" + _this3.template.id, payload) : axios.post("marketing/templates", payload);
        req.then(function () {
          _this3.SubmitProcessing = false;
          _this3.$bvModal.hide("New_Template");
          _this3.makeToast("success", _this3.$t(_this3.editmode ? "Updated_in_successfully" : "Created_in_successfully"), _this3.$t("Success"));
          _this3.Get_Templates(_this3.serverParams.page);
        })["catch"](function () {
          _this3.SubmitProcessing = false;
          _this3.makeToast("danger", _this3.$t("InvalidData"), _this3.$t("Failed"));
        });
      });
    },
    Remove_Template: function Remove_Template(id) {
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
          axios["delete"]("marketing/templates/" + id).then(function () {
            _this4.$swal(_this4.$t("Delete_Deleted"), _this4.$t("Deleted_in_successfully"), "success");
            _this4.Get_Templates(_this4.serverParams.page);
          })["catch"](function () {
            _this4.$swal(_this4.$t("Delete_Failed"), _this4.$t("Delete_Therewassomethingwronge"), "warning");
          });
        }
      });
    }
  },
  created: function created() {
    this.Get_Templates(1);
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/templates.vue?vue&type=template&id=457428c3"
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/templates.vue?vue&type=template&id=457428c3 ***!
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
      page: _vm.pageTitle,
      folder: _vm.$t("Marketing_Management")
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
      rows: _vm.templates,
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
        return [props.column.field == "actions" ? _c("span", [_c("a", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "cursor-pointer",
          attrs: {
            title: _vm.$t("Duplicate")
          },
          on: {
            click: function click($event) {
              return _vm.Duplicate_Template(props.row.id);
            }
          }
        }, [_c("lucide-icon", {
          staticClass: "text-25 text-info",
          attrs: {
            name: "copy"
          }
        })], 1), _vm._v(" "), _c("a", {
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
              return _vm.Edit_Template(props.row);
            }
          }
        }, [_c("lucide-icon", {
          staticClass: "text-25 text-success",
          attrs: {
            name: "pencil"
          }
        })], 1), _vm._v(" "), _c("a", {
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
              return _vm.Remove_Template(props.row.id);
            }
          }
        }, [_c("lucide-icon", {
          staticClass: "text-25 text-danger",
          attrs: {
            name: "x"
          }
        })], 1)]) : _vm._e()];
      }
    }], null, false, 3196694811)
  }, [_c("div", {
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
        return _vm.New_Template();
      }
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "plus"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("New_Template")) + "\n        ")], 1)], 1)])], 1) : _vm._e(), _vm._v(" "), _c("validation-observer", {
    ref: "Template_Form"
  }, [_c("b-modal", {
    attrs: {
      "hide-footer": "",
      size: "lg",
      id: "New_Template",
      title: _vm.editmode ? _vm.$t("Edit_Template") : _vm.$t("New_Template")
    }
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Submit_Template.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "8"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "name",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Template_Name") + " *"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext)
          },
          model: {
            value: _vm.template.name,
            callback: function callback($$v) {
              _vm.$set(_vm.template, "name", $$v);
            },
            expression: "template.name"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Category")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.template.category,
      callback: function callback($$v) {
        _vm.$set(_vm.template, "category", $$v);
      },
      expression: "template.category"
    }
  })], 1)], 1), _vm._v(" "), _vm.templateType === "email" ? _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Email_Subject")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.template.subject,
      callback: function callback($$v) {
        _vm.$set(_vm.template, "subject", $$v);
      },
      expression: "template.subject"
    }
  })], 1)], 1) : _vm._e(), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "content",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Message_Content") + " *"
          }
        }, [_c("b-form-textarea", {
          attrs: {
            rows: _vm.templateType === "email" ? 8 : 4,
            state: _vm.getValidationState(validationContext)
          },
          model: {
            value: _vm.template.content,
            callback: function callback($$v) {
              _vm.$set(_vm.template, "content", $$v);
            },
            expression: "template.content"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }])
  }), _vm._v(" "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Available_Variables")) + ": {customer_name} {phone} {email} {last_purchase} {total_spent}")])], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mt-3",
    attrs: {
      md: "12"
    }
  }, [_c("b-button", {
    attrs: {
      variant: "primary",
      type: "submit",
      disabled: _vm.SubmitProcessing
    }
  }, [_c("lucide-icon", {
    staticClass: "me-2 font-weight-bold",
    attrs: {
      name: "check"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("submit")) + "\n            ")], 1), _vm._v(" "), _vm.SubmitProcessing ? _c("div", {
    staticClass: "spinner sm spinner-primary mt-3"
  }) : _vm._e()], 1)], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./resources/src/views/app/pages/marketing/templates.vue"
/*!***************************************************************!*\
  !*** ./resources/src/views/app/pages/marketing/templates.vue ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _templates_vue_vue_type_template_id_457428c3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates.vue?vue&type=template&id=457428c3 */ "./resources/src/views/app/pages/marketing/templates.vue?vue&type=template&id=457428c3");
/* harmony import */ var _templates_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/marketing/templates.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _templates_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _templates_vue_vue_type_template_id_457428c3__WEBPACK_IMPORTED_MODULE_0__.render,
  _templates_vue_vue_type_template_id_457428c3__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/marketing/templates.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/marketing/templates.vue?vue&type=script&lang=js"
/*!***************************************************************************************!*\
  !*** ./resources/src/views/app/pages/marketing/templates.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_templates_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./templates.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/templates.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_templates_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/marketing/templates.vue?vue&type=template&id=457428c3"
/*!*********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/marketing/templates.vue?vue&type=template&id=457428c3 ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_templates_vue_vue_type_template_id_457428c3__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_templates_vue_vue_type_template_id_457428c3__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_templates_vue_vue_type_template_id_457428c3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./templates.vue?vue&type=template&id=457428c3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/templates.vue?vue&type=template&id=457428c3");


/***/ }

}]);