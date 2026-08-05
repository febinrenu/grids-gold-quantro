"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["serial_numbers_detail"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/serial_numbers/detail.vue?vue&type=script&lang=js"
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/serial_numbers/detail.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Serial Detail"
  },
  data: function data() {
    return {
      isLoading: true,
      serial: {},
      movements: []
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["currentUserPermissions"])), {}, {
    // Only in-stock states can be changed manually.
    canManageStatus: function canManageStatus() {
      return ["available", "damaged", "reserved"].includes(this.serial.status);
    }
  }),
  methods: {
    setStatus: function setStatus(status) {
      var _this = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      axios.post("serial_numbers/" + this.serial.id + "/status", {
        status: status
      }).then(function () {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this.$root.$bvToast.toast(_this.$t("Successfully_Updated") || "Updated", {
          variant: "success",
          solid: true
        });
        _this.loadData();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        var msg = error.response && error.response.data && error.response.data.errors && error.response.data.errors.status ? error.response.data.errors.status[0] : _this.$t("InvalidData") || "Failed";
        _this.$root.$bvToast.toast(msg, {
          variant: "danger",
          solid: true
        });
      });
    },
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
    actionLabel: function actionLabel(a) {
      var map = {
        purchased: this.$t("Purchased") || "Purchased",
        sold: this.$t("Status_sold") || "Sold",
        sale_returned: this.$t("Status_returned_customer") || "Sale returned",
        purchase_returned: this.$t("Status_returned_supplier") || "Purchase returned",
        status_changed: this.$t("Status_changed") || "Status changed",
        adjusted: this.$t("Adjusted") || "Adjusted"
      };
      return map[a] || a;
    },
    loadData: function loadData() {
      var _this2 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      var id = this.$route.params.id;
      axios.get("serial_numbers/" + id).then(function (response) {
        _this2.serial = response.data.serial || {};
        _this2.movements = response.data.movements || [];
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this2.isLoading = false;
      })["catch"](function () {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        setTimeout(function () {
          _this2.isLoading = false;
        }, 500);
      });
    }
  },
  created: function created() {
    this.loadData();
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/serial_numbers/detail.vue?vue&type=template&id=2a417054"
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/serial_numbers/detail.vue?vue&type=template&id=2a417054 ***!
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
      page: _vm.$t("Serial_Number"),
      folder: _vm.$t("Serial_Numbers")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("div", [_c("b-card", {
    staticClass: "mb-3"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center",
    staticStyle: {
      "flex-wrap": "wrap",
      gap: "8px"
    }
  }, [_c("h4", {
    staticClass: "mb-0"
  }, [_c("lucide-icon", {
    staticStyle: {
      width: "20px",
      height: "20px",
      "vertical-align": "-4px"
    },
    attrs: {
      name: "scan-barcode"
    }
  }), _vm._v("\n          " + _vm._s(_vm.serial.serial_number) + "\n        ")], 1), _vm._v(" "), _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center",
      gap: "8px",
      "flex-wrap": "wrap"
    }
  }, [_c("span", {
    staticClass: "badge",
    "class": _vm.statusBadge(_vm.serial.status),
    staticStyle: {
      "font-size": "13px"
    }
  }, [_vm._v(_vm._s(_vm.statusLabel(_vm.serial.status)))]), _vm._v(" "), _vm.canManageStatus && _vm.currentUserPermissions && _vm.currentUserPermissions.includes("serial_numbers") ? [_vm.serial.status !== "available" ? _c("b-button", {
    attrs: {
      size: "sm",
      variant: "outline-success"
    },
    on: {
      click: function click($event) {
        return _vm.setStatus("available");
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("Status_available")))]) : _vm._e(), _vm._v(" "), _vm.serial.status !== "damaged" ? _c("b-button", {
    attrs: {
      size: "sm",
      variant: "outline-danger"
    },
    on: {
      click: function click($event) {
        return _vm.setStatus("damaged");
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("Status_damaged")))]) : _vm._e(), _vm._v(" "), _vm.serial.status !== "reserved" ? _c("b-button", {
    attrs: {
      size: "sm",
      variant: "outline-secondary"
    },
    on: {
      click: function click($event) {
        return _vm.setStatus("reserved");
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("Status_reserved")))]) : _vm._e()] : _vm._e()], 2)]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("b-row", [_c("b-col", {
    staticClass: "mb-2",
    attrs: {
      md: "4"
    }
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("Name_product")) + ":")]), _vm._v(" " + _vm._s(_vm.serial.product_name) + " "), _vm.serial.product_code ? _c("small", {
    staticClass: "text-muted"
  }, [_vm._v("(" + _vm._s(_vm.serial.product_code) + ")")]) : _vm._e()]), _vm._v(" "), _vm.serial.variant_name ? _c("b-col", {
    staticClass: "mb-2",
    attrs: {
      md: "4"
    }
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("Variant") || "Variant") + ":")]), _vm._v(" " + _vm._s(_vm.serial.variant_name))]) : _vm._e(), _vm._v(" "), _c("b-col", {
    staticClass: "mb-2",
    attrs: {
      md: "4"
    }
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("warehouse")) + ":")]), _vm._v(" " + _vm._s(_vm.serial.warehouse_name))]), _vm._v(" "), _vm.serial.provider_name ? _c("b-col", {
    staticClass: "mb-2",
    attrs: {
      md: "4"
    }
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("Supplier")) + ":")]), _vm._v(" " + _vm._s(_vm.serial.provider_name))]) : _vm._e(), _vm._v(" "), _vm.serial.client_name ? _c("b-col", {
    staticClass: "mb-2",
    attrs: {
      md: "4"
    }
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("Customer")) + ":")]), _vm._v(" " + _vm._s(_vm.serial.client_name))]) : _vm._e(), _vm._v(" "), _vm.serial.created_at ? _c("b-col", {
    staticClass: "mb-2",
    attrs: {
      md: "4"
    }
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("Registered_Date") || "Registered") + ":")]), _vm._v(" " + _vm._s(_vm.serial.created_at))]) : _vm._e()], 1)], 1), _vm._v(" "), _c("b-card", {
    attrs: {
      title: _vm.$t("Serial_Movement_Log") || "Movement Log"
    }
  }, [_c("table", {
    staticClass: "table table-hover vgt-table mt-2"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "text-left"
  }, [_vm._v(_vm._s(_vm.$t("date")))]), _vm._v(" "), _c("th", {
    staticClass: "text-left"
  }, [_vm._v(_vm._s(_vm.$t("Action")))]), _vm._v(" "), _c("th", {
    staticClass: "text-left"
  }, [_vm._v(_vm._s(_vm.$t("Serial_Status")))]), _vm._v(" "), _c("th", {
    staticClass: "text-left"
  }, [_vm._v(_vm._s(_vm.$t("Reference") || "Reference"))]), _vm._v(" "), _c("th", {
    staticClass: "text-left"
  }, [_vm._v(_vm._s(_vm.$t("User") || "User"))])])]), _vm._v(" "), _c("tbody", [_vm.movements.length === 0 ? _c("tr", [_c("td", {
    attrs: {
      colspan: "5"
    }
  }, [_vm._v(_vm._s(_vm.$t("NodataAvailable")))])]) : _vm._e(), _vm._v(" "), _vm._l(_vm.movements, function (m) {
    return _c("tr", {
      key: m.id
    }, [_c("td", {
      staticClass: "text-left"
    }, [_vm._v(_vm._s(m.created_at))]), _vm._v(" "), _c("td", {
      staticClass: "text-left"
    }, [_vm._v(_vm._s(_vm.actionLabel(m.action)))]), _vm._v(" "), _c("td", {
      staticClass: "text-left"
    }, [m.from_status ? _c("span", {
      staticClass: "text-muted"
    }, [_vm._v(_vm._s(_vm.statusLabel(m.from_status)) + " → ")]) : _vm._e(), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.statusLabel(m.to_status)))])]), _vm._v(" "), _c("td", {
      staticClass: "text-left"
    }, [m.reference_type ? _c("span", [_vm._v(_vm._s(m.reference_type)), m.reference_ref ? _c("span", [_vm._v(" · " + _vm._s(m.reference_ref))]) : _vm._e()]) : _c("span", [_vm._v("—")])]), _vm._v(" "), _c("td", {
      staticClass: "text-left"
    }, [_vm._v(_vm._s(m.user_name || "—"))])]);
  })], 2)])])], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./resources/src/views/app/pages/serial_numbers/detail.vue"
/*!*****************************************************************!*\
  !*** ./resources/src/views/app/pages/serial_numbers/detail.vue ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _detail_vue_vue_type_template_id_2a417054__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=2a417054 */ "./resources/src/views/app/pages/serial_numbers/detail.vue?vue&type=template&id=2a417054");
/* harmony import */ var _detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/serial_numbers/detail.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_2a417054__WEBPACK_IMPORTED_MODULE_0__.render,
  _detail_vue_vue_type_template_id_2a417054__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/serial_numbers/detail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/serial_numbers/detail.vue?vue&type=script&lang=js"
/*!*****************************************************************************************!*\
  !*** ./resources/src/views/app/pages/serial_numbers/detail.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detail.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/serial_numbers/detail.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/serial_numbers/detail.vue?vue&type=template&id=2a417054"
/*!***********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/serial_numbers/detail.vue?vue&type=template&id=2a417054 ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_2a417054__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_2a417054__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_2a417054__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detail.vue?vue&type=template&id=2a417054 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/serial_numbers/detail.vue?vue&type=template&id=2a417054");


/***/ }

}]);