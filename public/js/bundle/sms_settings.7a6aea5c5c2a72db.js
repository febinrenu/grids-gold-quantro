"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["sms_settings"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/sms_settings.vue?vue&type=script&lang=js"
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/sms_settings.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "SMS Settings"
  },
  data: function data() {
    return {
      isLoading: true,
      sms_gateway: [],
      default_sms_gateway: '',
      twilio: {
        TWILIO_SID: '',
        TWILIO_TOKEN: '',
        TWILIO_FROM: ''
      },
      termi: {
        TERMI_KEY: '',
        TERMI_SECRET: '',
        TERMI_SENDER: ''
      },
      infobip: {
        base_url: '',
        api_key: '',
        sender_from: ''
      },
      custom: {
        api_url: '',
        method: 'POST',
        content_type: 'json',
        sender: '',
        success_keyword: '',
        headers: {},
        payload: {}
      },
      customHeaderRows: [],
      customPayloadRows: []
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["refreshUserPermissions"])), {}, {
    //------------- Submit_Default_SMS
    Submit_Default_SMS: function Submit_Default_SMS() {
      var _this = this;
      this.$refs.default_form_sms.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else {
          _this.update_Default_SMS();
        }
      });
    },
    //------------- Submit Validation SMS
    Submit_Twilio_SMS: function Submit_Twilio_SMS() {
      var _this2 = this;
      this.$refs.twilio_form_sms.validate().then(function (success) {
        if (!success) {
          _this2.makeToast("danger", _this2.$t("Please_fill_the_form_correctly"), _this2.$t("Failed"));
        } else {
          _this2.update_twilio_config();
        }
      });
    },
    //------------- Submit Validation SMS
    Submit_Termi_SMS: function Submit_Termi_SMS() {
      var _this3 = this;
      this.$refs.termi_form_sms.validate().then(function (success) {
        if (!success) {
          _this3.makeToast("danger", _this3.$t("Please_fill_the_form_correctly"), _this3.$t("Failed"));
        } else {
          _this3.update_termi_config();
        }
      });
    },
    //------------- Submit Custom SMS
    Submit_Custom_SMS: function Submit_Custom_SMS() {
      var _this4 = this;
      this.$refs.custom_form_sms.validate().then(function (success) {
        if (!success) {
          _this4.makeToast("danger", _this4.$t("Please_fill_the_form_correctly"), _this4.$t("Failed"));
        } else {
          _this4.update_custom_config();
        }
      });
    },
    addHeaderRow: function addHeaderRow() {
      this.customHeaderRows.push({
        key: '',
        value: ''
      });
    },
    removeHeaderRow: function removeHeaderRow(idx) {
      this.customHeaderRows.splice(idx, 1);
    },
    addPayloadRow: function addPayloadRow() {
      this.customPayloadRows.push({
        key: '',
        value: ''
      });
    },
    removePayloadRow: function removePayloadRow(idx) {
      this.customPayloadRows.splice(idx, 1);
    },
    rowsToObject: function rowsToObject(rows) {
      var obj = {};
      rows.forEach(function (r) {
        var key = (r.key || '').trim();
        if (key !== '') {
          obj[key] = r.value || '';
        }
      });
      return obj;
    },
    objectToRows: function objectToRows(obj) {
      if (!obj || _typeof(obj) !== 'object') return [];
      return Object.keys(obj).map(function (k) {
        return {
          key: k,
          value: obj[k]
        };
      });
    },
    //------------- Submit Validation SMS
    Submit_infobip_SMS: function Submit_infobip_SMS() {
      var _this5 = this;
      this.$refs.infobip_form_sms.validate().then(function (success) {
        if (!success) {
          _this5.makeToast("danger", _this5.$t("Please_fill_the_form_correctly"), _this5.$t("Failed"));
        } else {
          _this5.update_infobip_config();
        }
      });
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    getValidationState: function getValidationState(_ref) {
      var dirty = _ref.dirty,
        validated = _ref.validated,
        _ref$valid = _ref.valid,
        valid = _ref$valid === void 0 ? null : _ref$valid;
      return dirty || validated ? valid : null;
    },
    //---------------------------------- update_twilio_config ----------------\\
    update_Default_SMS: function update_Default_SMS() {
      var _this6 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      axios.put("update_Default_SMS", {
        default_sms_gateway: this.default_sms_gateway
      }).then(function (response) {
        _this6.makeToast("success", _this6.$t("Successfully_Updated"), _this6.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        _this6.makeToast("danger", _this6.$t("InvalidData"), _this6.$t("Failed"));
      });
    },
    //---------------------------------- update_twilio_config ----------------\\
    update_twilio_config: function update_twilio_config() {
      var _this7 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      axios.post("update_twilio_config", {
        TWILIO_SID: this.twilio.TWILIO_SID,
        TWILIO_TOKEN: this.twilio.TWILIO_TOKEN,
        TWILIO_FROM: this.twilio.TWILIO_FROM
      }).then(function (response) {
        Fire.$emit("Event_sms");
        _this7.makeToast("success", _this7.$t("Successfully_Updated"), _this7.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        _this7.makeToast("danger", _this7.$t("InvalidData"), _this7.$t("Failed"));
      });
    },
    //---------------------------------- update_termi_config ----------------\\
    update_termi_config: function update_termi_config() {
      var _this8 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      axios.post("update_termi_config", {
        TERMI_KEY: this.termi.TERMI_KEY,
        TERMI_SECRET: this.termi.TERMI_SECRET,
        TERMI_SENDER: this.termi.TERMI_SENDER
      }).then(function (response) {
        Fire.$emit("Event_sms");
        _this8.makeToast("success", _this8.$t("Successfully_Updated"), _this8.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        _this8.makeToast("danger", _this8.$t("InvalidData"), _this8.$t("Failed"));
      });
    },
    //---------------------------------- update_custom_config ----------------\\
    update_custom_config: function update_custom_config() {
      var _this9 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      axios.post("update_custom_config", {
        api_url: this.custom.api_url,
        method: this.custom.method,
        content_type: this.custom.content_type,
        sender: this.custom.sender,
        success_keyword: this.custom.success_keyword,
        headers: this.rowsToObject(this.customHeaderRows),
        payload: this.rowsToObject(this.customPayloadRows)
      }).then(function (response) {
        Fire.$emit("Event_sms");
        _this9.makeToast("success", _this9.$t("Successfully_Updated"), _this9.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        _this9.makeToast("danger", _this9.$t("InvalidData"), _this9.$t("Failed"));
      });
    },
    //---------------------------------- update_termi_config ----------------\\
    update_infobip_config: function update_infobip_config() {
      var _this0 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      axios.post("update_infobip_config", {
        base_url: this.infobip.base_url,
        api_key: this.infobip.api_key,
        sender_from: this.infobip.sender_from
      }).then(function (response) {
        Fire.$emit("Event_sms");
        _this0.makeToast("success", _this0.$t("Successfully_Updated"), _this0.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        _this0.makeToast("danger", _this0.$t("InvalidData"), _this0.$t("Failed"));
      });
    },
    //---------------------------------- get_sms_config ----------------\\
    get_sms_config: function get_sms_config() {
      var _this1 = this;
      axios.get("get_sms_config").then(function (response) {
        _this1.twilio = response.data.twilio;
        _this1.termi = response.data.termi;
        _this1.infobip = response.data.infobip;
        _this1.sms_gateway = response.data.sms_gateway;
        _this1.default_sms_gateway = response.data.default_sms_gateway;
        var c = response.data.custom || {};
        _this1.custom = {
          api_url: c.api_url || '',
          method: c.method || 'POST',
          content_type: c.content_type || 'json',
          sender: c.sender || '',
          success_keyword: c.success_keyword || '',
          headers: c.headers || {},
          payload: c.payload || {}
        };
        _this1.customHeaderRows = _this1.objectToRows(_this1.custom.headers);
        _this1.customPayloadRows = _this1.objectToRows(_this1.custom.payload);
        _this1.isLoading = false;
      })["catch"](function (error) {
        setTimeout(function () {
          _this1.isLoading = false;
        }, 500);
      });
    }
  }),
  //end Methods

  //----------------------------- Created function-------------------

  created: function created() {
    var _this10 = this;
    this.get_sms_config();
    Fire.$on("Event_sms", function () {
      _this10.get_sms_config();
    });
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/sms_settings.vue?vue&type=template&id=4f3d63a8"
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/sms_settings.vue?vue&type=template&id=4f3d63a8 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("sms_settings"),
      folder: _vm.$t("Settings")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("validation-observer", {
    ref: "default_form_sms"
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Submit_Default_SMS.apply(null, arguments);
      }
    }
  }, [_c("b-row", {
    staticClass: "mt-5"
  }, [_c("b-col", {
    attrs: {
      lg: "12",
      md: "12",
      sm: "12"
    }
  }, [_c("b-card", {
    attrs: {
      "no-body": "",
      header: "default sms gateway"
    }
  }, [_c("b-card-body", [_c("b-row", [_c("b-col", {
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Default_SMS_Gateway")
    }
  }, [_c("v-select", {
    attrs: {
      reduce: function reduce(label) {
        return label.value;
      },
      placeholder: _vm.$t("Choose_SMS_Gateway"),
      options: _vm.sms_gateway.map(function (sms_gateway) {
        return {
          label: sms_gateway.title,
          value: sms_gateway.id
        };
      })
    },
    model: {
      value: _vm.default_sms_gateway,
      callback: function callback($$v) {
        _vm.default_sms_gateway = $$v;
      },
      expression: "default_sms_gateway"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", [_c("b-button", {
    attrs: {
      variant: "primary",
      type: "submit"
    }
  }, [_c("lucide-icon", {
    staticClass: "me-2 font-weight-bold",
    attrs: {
      name: "check"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("submit")))], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("validation-observer", {
    ref: "termi_form_sms"
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Submit_Termi_SMS.apply(null, arguments);
      }
    }
  }, [_c("b-row", {
    staticClass: "mt-5"
  }, [_c("b-col", {
    attrs: {
      lg: "12",
      md: "12",
      sm: "12"
    }
  }, [_c("b-card", {
    attrs: {
      "no-body": "",
      header: "Termii"
    }
  }, [_c("b-card-body", [_c("b-row", [_c("b-col", {
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "TERMI_KEY",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: "Termii KEY *"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "TERMI_KEY-feedback",
            label: "TERMI_KEY"
          },
          model: {
            value: _vm.termi.TERMI_KEY,
            callback: function callback($$v) {
              _vm.$set(_vm.termi, "TERMI_KEY", $$v);
            },
            expression: "termi.TERMI_KEY"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "TERMI_KEY-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 3758007307)
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "TERMI_SECRET",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: "Termii SECRET *"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "TERMI_SECRET-feedback",
            label: "TERMI_SECRET"
          },
          model: {
            value: _vm.termi.TERMI_SECRET,
            callback: function callback($$v) {
              _vm.$set(_vm.termi, "TERMI_SECRET", $$v);
            },
            expression: "termi.TERMI_SECRET"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "TERMI_SECRET-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 1666192266)
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "TERMI_SENDER",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: "Termii Sender *"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "TERMI_SENDER-feedback",
            label: "TERMI_SENDER"
          },
          model: {
            value: _vm.termi.TERMI_SENDER,
            callback: function callback($$v) {
              _vm.$set(_vm.termi, "TERMI_SENDER", $$v);
            },
            expression: "termi.TERMI_SENDER"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "TERMI_SENDER-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 2211821623)
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", [_c("b-button", {
    attrs: {
      variant: "primary",
      type: "submit"
    }
  }, [_c("lucide-icon", {
    staticClass: "me-2 font-weight-bold",
    attrs: {
      name: "check"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("submit")))], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("validation-observer", {
    ref: "twilio_form_sms"
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Submit_Twilio_SMS.apply(null, arguments);
      }
    }
  }, [_c("b-row", {
    staticClass: "mt-5"
  }, [_c("b-col", {
    attrs: {
      lg: "12",
      md: "12",
      sm: "12"
    }
  }, [_c("b-card", {
    attrs: {
      "no-body": "",
      header: "TWILIO_SMS"
    }
  }, [_c("b-card-body", [_c("b-row", [_c("b-col", {
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "TWILIO_SID",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: "TWILIO SID *"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "TWILIO_SID-feedback",
            label: "TWILIO_SID"
          },
          model: {
            value: _vm.twilio.TWILIO_SID,
            callback: function callback($$v) {
              _vm.$set(_vm.twilio, "TWILIO_SID", $$v);
            },
            expression: "twilio.TWILIO_SID"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "TWILIO_SID-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 1441324107)
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "TWILIO TOKEN *"
    }
  }, [_c("b-form-input", {
    attrs: {
      label: "TWILIO_TOKEN",
      placeholder: _vm.$t("LeaveBlank")
    },
    model: {
      value: _vm.twilio.TWILIO_TOKEN,
      callback: function callback($$v) {
        _vm.$set(_vm.twilio, "TWILIO_TOKEN", $$v);
      },
      expression: "twilio.TWILIO_TOKEN"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "TWILIO_FROM",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: "TWILIO FROM *"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "TWILIO_FROM-feedback",
            label: "TWILIO_FROM"
          },
          model: {
            value: _vm.twilio.TWILIO_FROM,
            callback: function callback($$v) {
              _vm.$set(_vm.twilio, "TWILIO_FROM", $$v);
            },
            expression: "twilio.TWILIO_FROM"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "TWILIO_FROM-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 918133443)
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", [_c("b-button", {
    attrs: {
      variant: "primary",
      type: "submit"
    }
  }, [_c("lucide-icon", {
    staticClass: "me-2 font-weight-bold",
    attrs: {
      name: "check"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("submit")))], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("validation-observer", {
    ref: "infobip_form_sms"
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Submit_infobip_SMS.apply(null, arguments);
      }
    }
  }, [_c("b-row", {
    staticClass: "mt-5"
  }, [_c("b-col", {
    attrs: {
      lg: "12",
      md: "12",
      sm: "12"
    }
  }, [_c("b-card", {
    attrs: {
      "no-body": "",
      header: "InfoBip"
    }
  }, [_c("b-card-body", [_c("b-row", [_c("b-col", {
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "BASE URL"
    }
  }, [_c("b-form-input", {
    attrs: {
      label: "BASE_URL"
    },
    model: {
      value: _vm.infobip.base_url,
      callback: function callback($$v) {
        _vm.$set(_vm.infobip, "base_url", $$v);
      },
      expression: "infobip.base_url"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "API KEY"
    }
  }, [_c("b-form-input", {
    attrs: {
      label: "API_KEY"
    },
    model: {
      value: _vm.infobip.api_key,
      callback: function callback($$v) {
        _vm.$set(_vm.infobip, "api_key", $$v);
      },
      expression: "infobip.api_key"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "SMS sender number Or Name"
    }
  }, [_c("b-form-input", {
    attrs: {
      label: "SMS_From"
    },
    model: {
      value: _vm.infobip.sender_from,
      callback: function callback($$v) {
        _vm.$set(_vm.infobip, "sender_from", $$v);
      },
      expression: "infobip.sender_from"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", [_c("b-button", {
    attrs: {
      variant: "primary",
      type: "submit"
    }
  }, [_c("lucide-icon", {
    staticClass: "me-2 font-weight-bold",
    attrs: {
      name: "check"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("submit")))], 1)], 1)], 1)], 1), _vm._v(" "), _c("p", {
    staticClass: "mt-5"
  }, [_c("strong", [_vm._v("BASE_URL : ")]), _vm._v(" The Infobip data center used for API traffic."), _c("br"), _vm._v(" "), _c("strong", [_vm._v("API_KEY :")]), _vm._v(" Authentication method. See API documentation "), _c("br"), _vm._v(" "), _c("strong", [_vm._v("SMS sender number Or Name :")]), _vm._v(" displayed on recipient's device as message sender. "), _c("br"), _vm._v(" "), _c("strong", [_vm._v("WhatsApp sender number :")]), _vm._v(" Registered WhatsApp sender number. Must be in international format."), _c("br"), _vm._v(" "), _c("strong", [_vm._v(" ## Links")]), _c("br"), _vm._v(" "), _c("strong", [_vm._v("[API Reference](https://www.infobip.com/docs/api)")]), _c("br"), _vm._v(" "), _c("strong", [_vm._v("[PHP Client for Infobip API](https://github.com/infobip/infobip-api-php-client)")]), _c("br")])], 1)], 1)], 1)], 1)], 1)], 1) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("validation-observer", {
    ref: "custom_form_sms"
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Submit_Custom_SMS.apply(null, arguments);
      }
    }
  }, [_c("b-row", {
    staticClass: "mt-5"
  }, [_c("b-col", {
    attrs: {
      lg: "12",
      md: "12",
      sm: "12"
    }
  }, [_c("b-card", {
    attrs: {
      "no-body": "",
      header: _vm.$t("Custom_SMS_Gateway")
    }
  }, [_c("b-card-body", [_c("b-row", [_c("b-col", {
    attrs: {
      lg: "8",
      md: "8",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "api_url",
      rules: {
        required: true,
        url: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Custom_SMS_Api_Url") + " *"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "custom_api_url-feedback",
            placeholder: "https://api.provider.com/sms/send"
          },
          model: {
            value: _vm.custom.api_url,
            callback: function callback($$v) {
              _vm.$set(_vm.custom, "api_url", $$v);
            },
            expression: "custom.api_url"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "custom_api_url-feedback"
          }
        }, [_vm._v("\n                        " + _vm._s(validationContext.errors[0]) + "\n                      ")])], 1)];
      }
    }], null, false, 2088825791)
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Custom_SMS_Method")
    }
  }, [_c("v-select", {
    attrs: {
      clearable: false,
      options: ["POST", "GET", "PUT"]
    },
    model: {
      value: _vm.custom.method,
      callback: function callback($$v) {
        _vm.$set(_vm.custom, "method", $$v);
      },
      expression: "custom.method"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Custom_SMS_Content_Type")
    }
  }, [_c("v-select", {
    attrs: {
      clearable: false,
      options: ["json", "form"]
    },
    model: {
      value: _vm.custom.content_type,
      callback: function callback($$v) {
        _vm.$set(_vm.custom, "content_type", $$v);
      },
      expression: "custom.content_type"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Custom_SMS_Sender")
    }
  }, [_c("b-form-input", {
    attrs: {
      placeholder: "Sender ID or phone"
    },
    model: {
      value: _vm.custom.sender,
      callback: function callback($$v) {
        _vm.$set(_vm.custom, "sender", $$v);
      },
      expression: "custom.sender"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Custom_SMS_Success_Keyword")
    }
  }, [_c("b-form-input", {
    attrs: {
      placeholder: "e.g. success"
    },
    model: {
      value: _vm.custom.success_keyword,
      callback: function callback($$v) {
        _vm.$set(_vm.custom, "success_keyword", $$v);
      },
      expression: "custom.success_keyword"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("label", {
    staticClass: "font-weight-bold mt-3"
  }, [_vm._v(_vm._s(_vm.$t("Custom_SMS_Headers")))]), _vm._v(" "), _vm._l(_vm.customHeaderRows, function (row, idx) {
    return _c("b-row", {
      key: "h-" + idx,
      staticClass: "align-items-center"
    }, [_c("b-col", {
      attrs: {
        lg: "5",
        md: "5",
        sm: "12"
      }
    }, [_c("b-form-group", [_c("b-form-input", {
      attrs: {
        placeholder: "Header name (e.g. Authorization)"
      },
      model: {
        value: row.key,
        callback: function callback($$v) {
          _vm.$set(row, "key", $$v);
        },
        expression: "row.key"
      }
    })], 1)], 1), _vm._v(" "), _c("b-col", {
      attrs: {
        lg: "6",
        md: "6",
        sm: "12"
      }
    }, [_c("b-form-group", [_c("b-form-input", {
      attrs: {
        placeholder: "Header value (e.g. Bearer xxx)"
      },
      model: {
        value: row.value,
        callback: function callback($$v) {
          _vm.$set(row, "value", $$v);
        },
        expression: "row.value"
      }
    })], 1)], 1), _vm._v(" "), _c("b-col", {
      attrs: {
        lg: "1",
        md: "1",
        sm: "12"
      }
    }, [_c("b-button", {
      attrs: {
        variant: "outline-danger",
        size: "sm"
      },
      on: {
        click: function click($event) {
          return _vm.removeHeaderRow(idx);
        }
      }
    }, [_c("lucide-icon", {
      attrs: {
        name: "x"
      }
    })], 1)], 1)], 1);
  }), _vm._v(" "), _c("b-button", {
    staticClass: "mb-3",
    attrs: {
      variant: "outline-primary",
      size: "sm"
    },
    on: {
      click: _vm.addHeaderRow
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "plus"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Custom_SMS_Add_Header")) + "\n                  ")], 1)], 2), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("label", {
    staticClass: "font-weight-bold mt-3"
  }, [_vm._v(_vm._s(_vm.$t("Custom_SMS_Payload")))]), _vm._v(" "), _c("p", {
    staticClass: "text-muted small"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Custom_SMS_Payload_Hint")) + "\n                  ")]), _vm._v(" "), _vm._l(_vm.customPayloadRows, function (row, idx) {
    return _c("b-row", {
      key: "p-" + idx,
      staticClass: "align-items-center"
    }, [_c("b-col", {
      attrs: {
        lg: "5",
        md: "5",
        sm: "12"
      }
    }, [_c("b-form-group", [_c("b-form-input", {
      attrs: {
        placeholder: "Field name (e.g. to)"
      },
      model: {
        value: row.key,
        callback: function callback($$v) {
          _vm.$set(row, "key", $$v);
        },
        expression: "row.key"
      }
    })], 1)], 1), _vm._v(" "), _c("b-col", {
      attrs: {
        lg: "6",
        md: "6",
        sm: "12"
      }
    }, [_c("b-form-group", [_c("b-form-input", {
      attrs: {
        placeholder: "Value (e.g. {phone})"
      },
      model: {
        value: row.value,
        callback: function callback($$v) {
          _vm.$set(row, "value", $$v);
        },
        expression: "row.value"
      }
    })], 1)], 1), _vm._v(" "), _c("b-col", {
      attrs: {
        lg: "1",
        md: "1",
        sm: "12"
      }
    }, [_c("b-button", {
      attrs: {
        variant: "outline-danger",
        size: "sm"
      },
      on: {
        click: function click($event) {
          return _vm.removePayloadRow(idx);
        }
      }
    }, [_c("lucide-icon", {
      attrs: {
        name: "x"
      }
    })], 1)], 1)], 1);
  }), _vm._v(" "), _c("b-button", {
    staticClass: "mb-3",
    attrs: {
      variant: "outline-primary",
      size: "sm"
    },
    on: {
      click: _vm.addPayloadRow
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "plus"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Custom_SMS_Add_Field")) + "\n                  ")], 1)], 2), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", [_c("b-button", {
    attrs: {
      variant: "primary",
      type: "submit"
    }
  }, [_c("lucide-icon", {
    staticClass: "me-2 font-weight-bold",
    attrs: {
      name: "check"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("submit")) + "\n                    ")], 1)], 1)], 1)], 1), _vm._v(" "), _c("p", {
    staticClass: "mt-3 text-muted small"
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("Custom_SMS_Placeholders")) + ":")]), _vm._v(" "), _c("code", [_vm._v("{phone}")]), _vm._v(", "), _c("code", [_vm._v("{message}")]), _vm._v(", "), _c("code", [_vm._v("{sender}")])])], 1)], 1)], 1)], 1)], 1)], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./resources/src/views/app/pages/settings/sms_settings.vue"
/*!*****************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/sms_settings.vue ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sms_settings_vue_vue_type_template_id_4f3d63a8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sms_settings.vue?vue&type=template&id=4f3d63a8 */ "./resources/src/views/app/pages/settings/sms_settings.vue?vue&type=template&id=4f3d63a8");
/* harmony import */ var _sms_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sms_settings.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/settings/sms_settings.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sms_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _sms_settings_vue_vue_type_template_id_4f3d63a8__WEBPACK_IMPORTED_MODULE_0__.render,
  _sms_settings_vue_vue_type_template_id_4f3d63a8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/settings/sms_settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/settings/sms_settings.vue?vue&type=script&lang=js"
/*!*****************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/sms_settings.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sms_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./sms_settings.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/sms_settings.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sms_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/settings/sms_settings.vue?vue&type=template&id=4f3d63a8"
/*!***********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/sms_settings.vue?vue&type=template&id=4f3d63a8 ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sms_settings_vue_vue_type_template_id_4f3d63a8__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sms_settings_vue_vue_type_template_id_4f3d63a8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sms_settings_vue_vue_type_template_id_4f3d63a8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./sms_settings.vue?vue&type=template&id=4f3d63a8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/sms_settings.vue?vue&type=template&id=4f3d63a8");


/***/ }

}]);