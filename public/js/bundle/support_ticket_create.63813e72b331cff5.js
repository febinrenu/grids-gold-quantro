"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["support_ticket_create"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/CreateTicket.vue?vue&type=script&lang=js"
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/CreateTicket.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Create Support Ticket"
  },
  data: function data() {
    return {
      processing: false,
      form: {
        subject: "",
        category: null,
        priority: "medium",
        message: ""
      },
      files: []
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;
      if (!this.form.subject || !this.form.category || !this.form.priority || !this.form.message) {
        this.makeToast("warning", this.$t("please_fill_required"), this.$t("Warning"));
        return;
      }
      this.processing = true;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      var data = new FormData();
      data.append("subject", this.form.subject);
      data.append("category", this.form.category);
      data.append("priority", this.form.priority);
      data.append("message", this.form.message);
      if (this.files && this.files.length) {
        this.files.forEach(function (f) {
          return data.append("attachments[]", f);
        });
      }
      axios.post("support/tickets", data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (response) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this.processing = false;
        _this.makeToast("success", _this.$t("ticket_created_success"), _this.$t("Success"));
        var id = response.data.ticket && response.data.ticket.id;
        _this.$router.push(id ? "/app/support/tickets/" + id : "/app/support/tickets");
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this.processing = false;
        var msg = error.response && error.response.data && error.response.data.message || _this.$t("please_fill_required");
        _this.makeToast("danger", msg, _this.$t("Failed"));
      });
    },
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/CreateTicket.vue?vue&type=template&id=06621036"
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/CreateTicket.vue?vue&type=template&id=06621036 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("create_ticket"),
      folder: _vm.$t("support_center")
    }
  }), _vm._v(" "), _c("b-row", [_c("b-col", {
    staticClass: "mx-auto",
    attrs: {
      lg: "8",
      md: "10",
      sm: "12"
    }
  }, [_c("b-card", {
    attrs: {
      title: _vm.$t("open_a_ticket")
    }
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("subject") + " *"
    }
  }, [_c("b-form-input", {
    attrs: {
      placeholder: _vm.$t("subject_placeholder"),
      required: ""
    },
    model: {
      value: _vm.form.subject,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "subject", $$v);
      },
      expression: "form.subject"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("category") + " *"
    }
  }, [_c("b-form-select", {
    attrs: {
      required: ""
    },
    model: {
      value: _vm.form.category,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "category", $$v);
      },
      expression: "form.category"
    }
  }, [_c("b-form-select-option", {
    attrs: {
      value: null,
      disabled: ""
    }
  }, [_vm._v(_vm._s(_vm.$t("choose_category")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "bug"
    }
  }, [_vm._v(_vm._s(_vm.$t("cat_bug")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "technical"
    }
  }, [_vm._v(_vm._s(_vm.$t("cat_technical")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "billing"
    }
  }, [_vm._v(_vm._s(_vm.$t("cat_billing")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "feature_request"
    }
  }, [_vm._v(_vm._s(_vm.$t("cat_feature_request")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "account"
    }
  }, [_vm._v(_vm._s(_vm.$t("cat_account")))])], 1)], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("priority") + " *"
    }
  }, [_c("b-form-select", {
    attrs: {
      required: ""
    },
    model: {
      value: _vm.form.priority,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "priority", $$v);
      },
      expression: "form.priority"
    }
  }, [_c("b-form-select-option", {
    attrs: {
      value: null,
      disabled: ""
    }
  }, [_vm._v(_vm._s(_vm.$t("choose_priority")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "low"
    }
  }, [_vm._v(_vm._s(_vm.$t("pri_low")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "medium"
    }
  }, [_vm._v(_vm._s(_vm.$t("pri_medium")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "high"
    }
  }, [_vm._v(_vm._s(_vm.$t("pri_high")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "urgent"
    }
  }, [_vm._v(_vm._s(_vm.$t("pri_urgent")))])], 1)], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("message") + " *"
    }
  }, [_c("b-form-textarea", {
    attrs: {
      rows: "6",
      placeholder: _vm.$t("message_placeholder"),
      required: ""
    },
    model: {
      value: _vm.form.message,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "message", $$v);
      },
      expression: "form.message"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("attach_files")
    }
  }, [_c("b-form-file", {
    attrs: {
      multiple: "",
      placeholder: _vm.$t("attach_files"),
      accept: ".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.gif,.txt,.csv,.zip"
    },
    model: {
      value: _vm.files,
      callback: function callback($$v) {
        _vm.files = $$v;
      },
      expression: "files"
    }
  }), _vm._v(" "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("attachments_hint")))])], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_c("b-button", {
    attrs: {
      type: "submit",
      variant: "primary",
      disabled: _vm.processing
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "send"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("submit")) + "\n            ")], 1), _vm._v(" "), _c("router-link", {
    staticClass: "btn btn-outline-secondary ml-2",
    attrs: {
      to: "/app/support/tickets"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t("cancel")) + "\n            ")])], 1)], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./resources/src/views/app/pages/support/CreateTicket.vue"
/*!****************************************************************!*\
  !*** ./resources/src/views/app/pages/support/CreateTicket.vue ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateTicket_vue_vue_type_template_id_06621036__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateTicket.vue?vue&type=template&id=06621036 */ "./resources/src/views/app/pages/support/CreateTicket.vue?vue&type=template&id=06621036");
/* harmony import */ var _CreateTicket_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateTicket.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/support/CreateTicket.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateTicket_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateTicket_vue_vue_type_template_id_06621036__WEBPACK_IMPORTED_MODULE_0__.render,
  _CreateTicket_vue_vue_type_template_id_06621036__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/support/CreateTicket.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/support/CreateTicket.vue?vue&type=script&lang=js"
/*!****************************************************************************************!*\
  !*** ./resources/src/views/app/pages/support/CreateTicket.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateTicket_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateTicket.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/CreateTicket.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateTicket_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/support/CreateTicket.vue?vue&type=template&id=06621036"
/*!**********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/support/CreateTicket.vue?vue&type=template&id=06621036 ***!
  \**********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateTicket_vue_vue_type_template_id_06621036__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateTicket_vue_vue_type_template_id_06621036__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateTicket_vue_vue_type_template_id_06621036__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateTicket.vue?vue&type=template&id=06621036 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/CreateTicket.vue?vue&type=template&id=06621036");


/***/ }

}]);