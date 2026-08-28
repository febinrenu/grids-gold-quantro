"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["whatsapp_settings"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/whatsapp/Settings.vue?vue&type=script&lang=js"
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/whatsapp/Settings.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isLoading: true,
      saving: false,
      testing: false,
      globallyEnabled: false,
      webhookUrl: "",
      automationKeys: [],
      automationLabels: {
        invoice_created: "Invoice created (new sale)",
        payment_received: "Payment received"
      },
      status: {
        is_connected: false,
        connected_at: null,
        has_access_token: false,
        has_app_secret: false
      },
      quota: {
        used: 0,
        max: null,
        remaining: null
      },
      form: {
        phone_number_id: "",
        business_account_id: "",
        access_token: "",
        app_secret: "",
        webhook_verify_token: "",
        default_country_code: "",
        automations: {}
      }
    };
  },
  computed: {
    quotaVariant: function quotaVariant() {
      if (!this.quota.max) return "success";
      var pct = this.quota.used / this.quota.max * 100;
      if (pct >= 100) return "danger";
      if (pct >= 80) return "warning";
      return "success";
    }
  },
  mounted: function mounted() {
    this.load();
  },
  methods: {
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    load: function load() {
      var _this = this;
      this.isLoading = true;
      axios.get("/whatsapp/settings").then(function (res) {
        var d = res.data;
        _this.globallyEnabled = d.globally_enabled;
        _this.webhookUrl = d.webhook_url;
        _this.automationKeys = d.automation_keys || [];
        _this.status = d.settings;
        _this.quota = d.quota;
        _this.form.phone_number_id = d.settings.phone_number_id || "";
        _this.form.business_account_id = d.settings.business_account_id || "";
        _this.form.webhook_verify_token = d.settings.webhook_verify_token || "";
        _this.form.default_country_code = d.settings.default_country_code || "";
        _this.form.automations = Object.assign({}, d.settings.automations || {});
      })["catch"](function () {
        return _this.makeToast("danger", "Failed to load WhatsApp settings.", "Error");
      })["finally"](function () {
        return _this.isLoading = false;
      });
    },
    save: function save() {
      var _this2 = this;
      this.saving = true;
      axios.post("/whatsapp/settings", this.form).then(function () {
        _this2.makeToast("success", "WhatsApp settings saved.", "Success");
        _this2.form.access_token = "";
        _this2.form.app_secret = "";
        _this2.load();
      })["catch"](function (err) {
        var msg = err.response && err.response.data && err.response.data.message || "Failed to save.";
        _this2.makeToast("danger", msg, "Error");
      })["finally"](function () {
        return _this2.saving = false;
      });
    },
    testConnection: function testConnection() {
      var _this3 = this;
      this.testing = true;
      // Persist first so the test uses the latest credentials.
      axios.post("/whatsapp/settings", this.form).then(function () {
        return axios.post("/whatsapp/test");
      }).then(function (res) {
        _this3.makeToast(res.data.status === "success" ? "success" : "danger", res.data.message, res.data.status === "success" ? "Success" : "Failed");
        _this3.form.access_token = "";
        _this3.form.app_secret = "";
        _this3.load();
      })["catch"](function (err) {
        var msg = err.response && err.response.data && err.response.data.message || "Connection test failed.";
        _this3.makeToast("danger", msg, "Failed");
      })["finally"](function () {
        return _this3.testing = false;
      });
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/whatsapp/Settings.vue?vue&type=template&id=3e466d13"
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/whatsapp/Settings.vue?vue&type=template&id=3e466d13 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: "WhatsApp Settings",
      folder: "WhatsApp"
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("div", [_c("b-alert", {
    attrs: {
      variant: "warning",
      show: !_vm.globallyEnabled
    }
  }, [_vm._v("\n      WhatsApp is currently disabled by the platform administrator. You can configure your account, but messages will not be sent until it is enabled.\n    ")]), _vm._v(" "), _c("b-row", [_c("b-col", {
    attrs: {
      md: "8"
    }
  }, [_c("b-card", {
    staticClass: "mb-4",
    attrs: {
      title: "Connection"
    }
  }, [_c("b-row", [_c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "12"
    }
  }, [_c("label", {
    staticClass: "font-weight-bold"
  }, [_vm._v("Provider")]), _vm._v(" "), _c("b-form-input", {
    attrs: {
      value: "Meta Cloud API",
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "6"
    }
  }, [_c("label", {
    staticClass: "font-weight-bold"
  }, [_vm._v("Phone Number ID")]), _vm._v(" "), _c("b-form-input", {
    attrs: {
      placeholder: "e.g. 123456789012345"
    },
    model: {
      value: _vm.form.phone_number_id,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "phone_number_id", $$v);
      },
      expression: "form.phone_number_id"
    }
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "6"
    }
  }, [_c("label", {
    staticClass: "font-weight-bold"
  }, [_vm._v("WhatsApp Business Account ID")]), _vm._v(" "), _c("b-form-input", {
    attrs: {
      placeholder: "Optional"
    },
    model: {
      value: _vm.form.business_account_id,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "business_account_id", $$v);
      },
      expression: "form.business_account_id"
    }
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "12"
    }
  }, [_c("label", {
    staticClass: "font-weight-bold"
  }, [_vm._v("Access Token")]), _vm._v(" "), _c("b-form-input", {
    attrs: {
      type: "password",
      placeholder: _vm.status.has_access_token ? "••••••••  (leave blank to keep)" : "Permanent access token",
      autocomplete: "new-password"
    },
    model: {
      value: _vm.form.access_token,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "access_token", $$v);
      },
      expression: "form.access_token"
    }
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "6"
    }
  }, [_c("label", {
    staticClass: "font-weight-bold"
  }, [_vm._v("App Secret")]), _vm._v(" "), _c("b-form-input", {
    attrs: {
      type: "password",
      placeholder: _vm.status.has_app_secret ? "••••••••  (leave blank to keep)" : "For webhook signature (optional)",
      autocomplete: "new-password"
    },
    model: {
      value: _vm.form.app_secret,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "app_secret", $$v);
      },
      expression: "form.app_secret"
    }
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "6"
    }
  }, [_c("label", {
    staticClass: "font-weight-bold"
  }, [_vm._v("Webhook Verify Token")]), _vm._v(" "), _c("b-form-input", {
    attrs: {
      placeholder: "Any secret string you set in Meta"
    },
    model: {
      value: _vm.form.webhook_verify_token,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "webhook_verify_token", $$v);
      },
      expression: "form.webhook_verify_token"
    }
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "6"
    }
  }, [_c("label", {
    staticClass: "font-weight-bold"
  }, [_vm._v("Default Country Code")]), _vm._v(" "), _c("b-form-input", {
    attrs: {
      placeholder: "e.g. 1, 44, 212"
    },
    model: {
      value: _vm.form.default_country_code,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "default_country_code", $$v);
      },
      expression: "form.default_country_code"
    }
  }), _vm._v(" "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v("Prepended to local numbers starting with 0.")])], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_c("b-button", {
    attrs: {
      variant: "primary",
      disabled: _vm.saving
    },
    on: {
      click: _vm.save
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "check"
    }
  }), _vm._v(" Save\n            ")], 1), _vm._v(" "), _c("b-button", {
    staticClass: "ml-2",
    attrs: {
      variant: "outline-success",
      disabled: _vm.testing || _vm.saving
    },
    on: {
      click: _vm.testConnection
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "power"
    }
  }), _vm._v(" " + _vm._s(_vm.testing ? "Testing..." : "Test Connection") + "\n            ")], 1)], 1)], 1), _vm._v(" "), _c("b-card", {
    staticClass: "mb-4",
    attrs: {
      title: "Automated Messages"
    }
  }, [_c("p", {
    staticClass: "text-muted"
  }, [_vm._v("Automatically send a WhatsApp message when these events happen. Each event uses the matching template (by key).")]), _vm._v(" "), _vm._l(_vm.automationKeys, function (key) {
    return _c("b-form-checkbox", {
      key: key,
      staticClass: "mb-2",
      attrs: {
        "switch": ""
      },
      model: {
        value: _vm.form.automations[key],
        callback: function callback($$v) {
          _vm.$set(_vm.form.automations, key, $$v);
        },
        expression: "form.automations[key]"
      }
    }, [_vm._v("\n            " + _vm._s(_vm.automationLabels[key] || key) + "\n          ")]);
  })], 2)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-card", {
    staticClass: "mb-4"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("h5", [_vm._v("Connection Status")]), _vm._v(" "), _c("b-badge", {
    staticClass: "px-3 py-2",
    staticStyle: {
      "font-size": "0.9rem"
    },
    attrs: {
      variant: _vm.status.is_connected ? "success" : "secondary"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.status.is_connected ? "Connected" : "Not Connected") + "\n            ")]), _vm._v(" "), _vm.status.connected_at ? _c("p", {
    staticClass: "text-muted mt-2 mb-0"
  }, [_c("small", [_vm._v("Since " + _vm._s(_vm.status.connected_at))])]) : _vm._e()], 1)]), _vm._v(" "), _c("b-card", {
    staticClass: "mb-4",
    attrs: {
      title: "Monthly Quota"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("span", [_vm._v("Used")]), _c("strong", [_vm._v(_vm._s(_vm.quota.used))])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("span", [_vm._v("Limit")]), _c("strong", [_vm._v(_vm._s(_vm.quota.max === null ? "Unlimited" : _vm.quota.max))])]), _vm._v(" "), _vm.quota.remaining !== null ? _c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("span", [_vm._v("Remaining")]), _c("strong", [_vm._v(_vm._s(_vm.quota.remaining))])]) : _vm._e(), _vm._v(" "), _vm.quota.max ? _c("b-progress", {
    staticClass: "mt-2",
    attrs: {
      max: _vm.quota.max
    }
  }, [_c("b-progress-bar", {
    attrs: {
      value: _vm.quota.used,
      variant: _vm.quotaVariant
    }
  })], 1) : _vm._e()], 1), _vm._v(" "), _c("b-card", {
    attrs: {
      title: "Webhook URL"
    }
  }, [_c("p", {
    staticClass: "text-muted mb-1"
  }, [_c("small", [_vm._v("Paste this into your Meta app webhook configuration:")])]), _vm._v(" "), _c("b-form-textarea", {
    attrs: {
      value: _vm.webhookUrl,
      readonly: "",
      rows: "2",
      size: "sm"
    }
  })], 1)], 1)], 1)], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./resources/src/views/app/pages/whatsapp/Settings.vue"
/*!*************************************************************!*\
  !*** ./resources/src/views/app/pages/whatsapp/Settings.vue ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Settings_vue_vue_type_template_id_3e466d13__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=3e466d13 */ "./resources/src/views/app/pages/whatsapp/Settings.vue?vue&type=template&id=3e466d13");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/whatsapp/Settings.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_3e466d13__WEBPACK_IMPORTED_MODULE_0__.render,
  _Settings_vue_vue_type_template_id_3e466d13__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/whatsapp/Settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/whatsapp/Settings.vue?vue&type=script&lang=js"
/*!*************************************************************************************!*\
  !*** ./resources/src/views/app/pages/whatsapp/Settings.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settings.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/whatsapp/Settings.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/whatsapp/Settings.vue?vue&type=template&id=3e466d13"
/*!*******************************************************************************************!*\
  !*** ./resources/src/views/app/pages/whatsapp/Settings.vue?vue&type=template&id=3e466d13 ***!
  \*******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_3e466d13__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_3e466d13__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_3e466d13__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settings.vue?vue&type=template&id=3e466d13 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/whatsapp/Settings.vue?vue&type=template&id=3e466d13");


/***/ }

}]);