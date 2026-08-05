"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["marketing_settings"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/settings.vue?vue&type=script&lang=js"
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/settings.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Marketing Settings"
  },
  data: function data() {
    return {
      isLoading: true,
      SubmitProcessing: false,
      settings: {}
    };
  },
  methods: {
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    Get_Settings: function Get_Settings() {
      var _this = this;
      axios.get("marketing/settings").then(function (_ref) {
        var data = _ref.data;
        _this.settings = data.settings || {};
        // normalise booleans coming back as 0/1
        ["sms_enabled", "whatsapp_enabled", "email_enabled", "scheduling_enabled"].forEach(function (k) {
          _this.settings[k] = !!_this.settings[k];
        });
        _this.isLoading = false;
      })["catch"](function () {
        setTimeout(function () {
          _this.isLoading = false;
        }, 500);
      });
    },
    Save_Settings: function Save_Settings() {
      var _this2 = this;
      this.SubmitProcessing = true;
      var payload = _objectSpread({}, this.settings);
      ["sms_enabled", "whatsapp_enabled", "email_enabled", "scheduling_enabled"].forEach(function (k) {
        payload[k] = _this2.settings[k] ? 1 : 0;
      });
      axios.post("marketing/settings", payload).then(function () {
        _this2.SubmitProcessing = false;
        _this2.makeToast("success", _this2.$t("Updated_in_successfully"), _this2.$t("Success"));
      })["catch"](function () {
        _this2.SubmitProcessing = false;
        _this2.makeToast("danger", _this2.$t("InvalidData"), _this2.$t("Failed"));
      });
    }
  },
  created: function created() {
    this.Get_Settings();
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/settings.vue?vue&type=template&id=818410ee"
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/settings.vue?vue&type=template&id=818410ee ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("Marketing_Settings"),
      folder: _vm.$t("Marketing_Management")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Save_Settings.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-card", {
    attrs: {
      title: _vm.$t("SMS_Provider_Configuration")
    }
  }, [_c("b-form-checkbox", {
    staticClass: "mb-2",
    model: {
      value: _vm.settings.sms_enabled,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "sms_enabled", $$v);
      },
      expression: "settings.sms_enabled"
    }
  }, [_vm._v(_vm._s(_vm.$t("Enable_SMS")))]), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("Provider_Name")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.settings.sms_provider,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "sms_provider", $$v);
      },
      expression: "settings.sms_provider"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("API_URL")
    }
  }, [_c("b-form-input", {
    attrs: {
      placeholder: "https://"
    },
    model: {
      value: _vm.settings.sms_api_url,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "sms_api_url", $$v);
      },
      expression: "settings.sms_api_url"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("API_Key")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.settings.sms_api_key,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "sms_api_key", $$v);
      },
      expression: "settings.sms_api_key"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("Sender_ID")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.settings.sms_sender_id,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "sms_sender_id", $$v);
      },
      expression: "settings.sms_sender_id"
    }
  })], 1), _vm._v(" "), _c("b-row", [_c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("HTTP_Method")
    }
  }, [_c("b-form-select", {
    model: {
      value: _vm.settings.sms_http_method,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "sms_http_method", $$v);
      },
      expression: "settings.sms_http_method"
    }
  }, [_c("b-form-select-option", {
    attrs: {
      value: "POST"
    }
  }, [_vm._v("POST")]), _c("b-form-select-option", {
    attrs: {
      value: "GET"
    }
  }, [_vm._v("GET")])], 1)], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Recipient_Field_Name")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.settings.sms_to_field,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "sms_to_field", $$v);
      },
      expression: "settings.sms_to_field"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Message_Field_Name")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.settings.sms_message_field,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "sms_message_field", $$v);
      },
      expression: "settings.sms_message_field"
    }
  })], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-card", {
    attrs: {
      title: _vm.$t("WhatsApp_API_Configuration")
    }
  }, [_c("b-form-checkbox", {
    staticClass: "mb-2",
    model: {
      value: _vm.settings.whatsapp_enabled,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "whatsapp_enabled", $$v);
      },
      expression: "settings.whatsapp_enabled"
    }
  }, [_vm._v(_vm._s(_vm.$t("Enable_WhatsApp")))]), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("Provider_Name")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.settings.whatsapp_provider,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "whatsapp_provider", $$v);
      },
      expression: "settings.whatsapp_provider"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("API_URL")
    }
  }, [_c("b-form-input", {
    attrs: {
      placeholder: "https://"
    },
    model: {
      value: _vm.settings.whatsapp_api_url,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "whatsapp_api_url", $$v);
      },
      expression: "settings.whatsapp_api_url"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("API_Key")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.settings.whatsapp_api_key,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "whatsapp_api_key", $$v);
      },
      expression: "settings.whatsapp_api_key"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("Phone_Number_ID")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.settings.whatsapp_phone_id,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "whatsapp_phone_id", $$v);
      },
      expression: "settings.whatsapp_phone_id"
    }
  })], 1), _vm._v(" "), _c("b-row", [_c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("HTTP_Method")
    }
  }, [_c("b-form-select", {
    model: {
      value: _vm.settings.whatsapp_http_method,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "whatsapp_http_method", $$v);
      },
      expression: "settings.whatsapp_http_method"
    }
  }, [_c("b-form-select-option", {
    attrs: {
      value: "POST"
    }
  }, [_vm._v("POST")]), _c("b-form-select-option", {
    attrs: {
      value: "GET"
    }
  }, [_vm._v("GET")])], 1)], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Recipient_Field_Name")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.settings.whatsapp_to_field,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "whatsapp_to_field", $$v);
      },
      expression: "settings.whatsapp_to_field"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Message_Field_Name")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.settings.whatsapp_message_field,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "whatsapp_message_field", $$v);
      },
      expression: "settings.whatsapp_message_field"
    }
  })], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-card", {
    attrs: {
      title: _vm.$t("Email_SMTP_Configuration")
    }
  }, [_c("b-form-checkbox", {
    staticClass: "mb-2",
    model: {
      value: _vm.settings.email_enabled,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "email_enabled", $$v);
      },
      expression: "settings.email_enabled"
    }
  }, [_vm._v(_vm._s(_vm.$t("Enable_Email")))]), _vm._v(" "), _c("p", {
    staticClass: "text-muted",
    staticStyle: {
      "font-size": "0.85rem"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Email_SMTP_Configuration")) + " — SMTP is taken from the system Mail Settings (Servers).\n          ")]), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("From_Name")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.settings.email_from_name,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "email_from_name", $$v);
      },
      expression: "settings.email_from_name"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("From_Email")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "email"
    },
    model: {
      value: _vm.settings.email_from_address,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "email_from_address", $$v);
      },
      expression: "settings.email_from_address"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-card", {
    attrs: {
      title: _vm.$t("Default_Sender_Information")
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Default_Sender_Name")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.settings.default_sender_name,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "default_sender_name", $$v);
      },
      expression: "settings.default_sender_name"
    }
  })], 1)], 1), _vm._v(" "), _c("b-card", {
    attrs: {
      title: _vm.$t("Campaign_Scheduling_Settings")
    }
  }, [_c("b-form-checkbox", {
    staticClass: "mb-2",
    model: {
      value: _vm.settings.scheduling_enabled,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "scheduling_enabled", $$v);
      },
      expression: "settings.scheduling_enabled"
    }
  }, [_vm._v(_vm._s(_vm.$t("Enable_Scheduling")))]), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("Batch_Size")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "number",
      min: "1"
    },
    model: {
      value: _vm.settings.batch_size,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "batch_size", $$v);
      },
      expression: "settings.batch_size"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("b-col", {
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
  }), _vm._v(" " + _vm._s(_vm.$t("Save_Settings")) + "\n        ")], 1), _vm._v(" "), _vm.SubmitProcessing ? _c("div", {
    staticClass: "spinner sm spinner-primary mt-3"
  }) : _vm._e()], 1)], 1)], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./resources/src/views/app/pages/marketing/settings.vue"
/*!**************************************************************!*\
  !*** ./resources/src/views/app/pages/marketing/settings.vue ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settings_vue_vue_type_template_id_818410ee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.vue?vue&type=template&id=818410ee */ "./resources/src/views/app/pages/marketing/settings.vue?vue&type=template&id=818410ee");
/* harmony import */ var _settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/marketing/settings.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _settings_vue_vue_type_template_id_818410ee__WEBPACK_IMPORTED_MODULE_0__.render,
  _settings_vue_vue_type_template_id_818410ee__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/marketing/settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/marketing/settings.vue?vue&type=script&lang=js"
/*!**************************************************************************************!*\
  !*** ./resources/src/views/app/pages/marketing/settings.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/settings.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/marketing/settings.vue?vue&type=template&id=818410ee"
/*!********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/marketing/settings.vue?vue&type=template&id=818410ee ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_818410ee__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_818410ee__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_818410ee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=template&id=818410ee */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/settings.vue?vue&type=template&id=818410ee");


/***/ }

}]);