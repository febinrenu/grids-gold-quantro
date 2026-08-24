"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["billing_checkout"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/billing/checkout.vue?vue&type=script&lang=js"
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/billing/checkout.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "BillingCheckout",
  data: function data() {
    return {
      loading: true,
      processing: false,
      plan: {
        name: "",
        price: 0,
        yearly_price: 0,
        savings_percent: 0,
        limits: {},
        features: {}
      },
      gateways: [],
      selectedCycle: "monthly",
      selectedGateway: "",
      proofFile: null,
      dragOver: false,
      isUpgrade: null,
      pendingUpgrade: null,
      currencyCode: "USD",
      currencySymbol: "$",
      bankDetails: {}
    };
  },
  computed: {
    displayAmount: function displayAmount() {
      var amt = this.selectedCycle === "yearly" ? this.plan.yearly_price : this.plan.price;
      return (amt || 0).toFixed(2);
    },
    selectedCycleLabel: function selectedCycleLabel() {
      return this.selectedCycle === "yearly" ? this.$t("Yearly") || "Yearly" : this.$t("Monthly") || "Monthly";
    },
    isOfflinePayment: function isOfflinePayment() {
      return this.selectedGateway === 'offline';
    },
    hasBankDetails: function hasBankDetails() {
      return !!(this.bankDetails.bank_name || this.bankDetails.account_number);
    },
    submitButtonText: function submitButtonText() {
      if (this.isOfflinePayment) {
        return this.$t('Submit_Payment_Proof') || 'Submit Payment Proof';
      }
      return (this.$t('Pay') || 'Pay') + ' ' + this.currencySymbol + this.displayAmount + ' ' + this.currencyCode;
    }
  },
  created: function created() {
    this.selectedCycle = this.$route.query.cycle || "monthly";
    this.fetchCheckoutData();
  },
  methods: {
    mapGatewayIcon: function mapGatewayIcon(biIcon) {
      var map = {
        'bi-credit-card-2-front': 'receipt',
        'bi-credit-card': 'receipt',
        'bi-paypal': 'wallet',
        'bi-currency-rupee': 'coins',
        'bi-cash-stack': 'banknote',
        'bi-cash-coin': 'coins',
        'bi-wallet2': 'wallet',
        'bi-bank': 'landmark'
      };
      return map[biIcon] || 'receipt';
    },
    fetchCheckoutData: function fetchCheckoutData() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var planId, _yield$axios$get, data, _e$response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _this.loading = true;
              _context.p = 1;
              planId = _this.$route.params.id;
              _context.n = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/billing/checkout-data/".concat(planId));
            case 2:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.plan = data.plan;
              _this.gateways = data.gateways;
              _this.isUpgrade = data.is_upgrade;
              _this.pendingUpgrade = data.pending_upgrade || null;
              _this.currencyCode = data.currency_code || "USD";
              _this.currencySymbol = data.currency_symbol || "$";
              _this.bankDetails = data.bank_details || {};
              if (_this.gateways.length > 0) {
                _this.selectedGateway = _this.gateways[0].key;
              }
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              _this.makeToast("danger", ((_e$response = _t.response) === null || _e$response === void 0 || (_e$response = _e$response.data) === null || _e$response === void 0 ? void 0 : _e$response.message) || "Failed to load checkout data.", _this.$t("Error") || "Error");
            case 4:
              _this.loading = false;
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3]]);
      }))();
    },
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    onProofSelected: function onProofSelected(e) {
      var file = e.target.files[0];
      if (file) this.setProofFile(file);
    },
    onDropProof: function onDropProof(e) {
      this.dragOver = false;
      var file = e.dataTransfer.files[0];
      if (file) this.setProofFile(file);
    },
    setProofFile: function setProofFile(file) {
      var maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        this.makeToast("warning", this.$t("File_too_large") || "File must be less than 5MB.", this.$t("Warning") || "Warning");
        return;
      }
      var allowed = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp', 'application/pdf'];
      if (!allowed.includes(file.type)) {
        this.makeToast("warning", this.$t("Invalid_file_type") || "Only JPG, PNG, WebP, and PDF files are allowed.", this.$t("Warning") || "Warning");
        return;
      }
      this.proofFile = file;
    },
    removeProof: function removeProof() {
      this.proofFile = null;
      if (this.$refs.proofInput) this.$refs.proofInput.value = '';
    },
    submitPayment: function submitPayment() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var formData, _yield$axios$post, data, _e$response2, _yield$axios$post2, _data, _e$response3, _t2, _t3;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              if (_this2.selectedGateway) {
                _context2.n = 1;
                break;
              }
              _this2.makeToast("warning", _this2.$t("Select_gateway") || "Please select a payment method.", _this2.$t("Warning") || "Warning");
              return _context2.a(2);
            case 1:
              if (!_this2.isOfflinePayment) {
                _context2.n = 8;
                break;
              }
              if (_this2.proofFile) {
                _context2.n = 2;
                break;
              }
              _this2.makeToast("warning", _this2.$t("Upload_proof_required") || "Please upload proof of payment.", _this2.$t("Warning") || "Warning");
              return _context2.a(2);
            case 2:
              _this2.processing = true;
              _context2.p = 3;
              formData = new FormData();
              formData.append('plan_id', _this2.plan.id);
              formData.append('billing_cycle', _this2.selectedCycle);
              formData.append('offline_method', 'bank_transfer');
              formData.append('payment_proof', _this2.proofFile);
              _context2.n = 4;
              return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("/api/billing/offline-payment", formData);
            case 4:
              _yield$axios$post = _context2.v;
              data = _yield$axios$post.data;
              if (data.success) {
                _this2.makeToast("success", data.message || "Payment proof submitted successfully.", _this2.$t("Success") || "Success");
                _this2.$router.push("/app/billing/current-plan");
              } else {
                _this2.makeToast("danger", data.message || "Request failed.", _this2.$t("Error") || "Error");
              }
              _context2.n = 6;
              break;
            case 5:
              _context2.p = 5;
              _t2 = _context2.v;
              _this2.makeToast("danger", ((_e$response2 = _t2.response) === null || _e$response2 === void 0 || (_e$response2 = _e$response2.data) === null || _e$response2 === void 0 ? void 0 : _e$response2.message) || "Submission failed. Please try again.", _this2.$t("Error") || "Error");
            case 6:
              _context2.p = 6;
              _this2.processing = false;
              return _context2.f(6);
            case 7:
              return _context2.a(2);
            case 8:
              // Online payment flow
              _this2.processing = true;
              _context2.p = 9;
              _context2.n = 10;
              return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("/api/billing/checkout", {
                plan_id: _this2.plan.id,
                gateway: _this2.selectedGateway,
                billing_cycle: _this2.selectedCycle
              });
            case 10:
              _yield$axios$post2 = _context2.v;
              _data = _yield$axios$post2.data;
              if (_data.success && _data.payment_url) {
                window.location.href = _data.payment_url;
              } else {
                _this2.makeToast("danger", _data.message || "Payment initialization failed.", _this2.$t("Error") || "Error");
              }
              _context2.n = 12;
              break;
            case 11:
              _context2.p = 11;
              _t3 = _context2.v;
              _this2.makeToast("danger", ((_e$response3 = _t3.response) === null || _e$response3 === void 0 || (_e$response3 = _e$response3.data) === null || _e$response3 === void 0 ? void 0 : _e$response3.message) || "Payment failed. Please try again.", _this2.$t("Error") || "Error");
            case 12:
              _context2.p = 12;
              _this2.processing = false;
              return _context2.f(12);
            case 13:
              return _context2.a(2);
          }
        }, _callee2, null, [[9, 11, 12, 13], [3, 5, 6, 7]]);
      }))();
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/billing/checkout.vue?vue&type=template&id=e3e15392&scoped=true"
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/billing/checkout.vue?vue&type=template&id=e3e15392&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm.loading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _c("div", {
    staticClass: "billing-page"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("router-link", {
    staticClass: "text-muted small text-decoration-none",
    attrs: {
      to: "/app/billing/change-plan"
    }
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "arrow-left"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Back_to_plans") || "Back to plans") + "\n      ")], 1)], 1), _vm._v(" "), _vm.pendingUpgrade ? _c("div", {
    staticClass: "pending-upgrade-alert mb-4"
  }, [_c("div", {
    staticClass: "d-flex align-items-start gap-3"
  }, [_c("div", {
    staticClass: "pending-upgrade-icon"
  }, [_c("lucide-icon", {
    attrs: {
      name: "clock"
    }
  })], 1), _vm._v(" "), _c("div", [_c("h5", {
    staticClass: "mb-1"
  }, [_vm._v(_vm._s(_vm.$t("Pending_Upgrade") || "Pending Upgrade Request"))]), _vm._v(" "), _c("p", {
    staticClass: "mb-2 text-muted"
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Pending_upgrade_message") || "You have a pending upgrade to") + "\n            "), _c("strong", [_vm._v(_vm._s(_vm.pendingUpgrade.plan_name))]), _vm._v(".\n            " + _vm._s(_vm.$t("Pending_upgrade_checkout_block") || "You cannot submit a new request until the pending one is processed or cancelled.") + "\n          ")]), _vm._v(" "), _c("router-link", {
    staticClass: "btn btn-outline-secondary btn-sm",
    attrs: {
      to: "/app/billing/current-plan"
    }
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "arrow-left"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Back_to_plan") || "Back to Current Plan") + "\n          ")], 1)], 1)])]) : _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-5 order-lg-2 mb-4"
  }, [_c("div", {
    staticClass: "billing-card sticky-card"
  }, [_c("div", {
    staticClass: "billing-card-header"
  }, [_c("lucide-icon", {
    staticClass: "mr-2",
    attrs: {
      name: "receipt"
    }
  }), _vm._v(_vm._s(_vm.$t("Order_Summary") || "Order Summary"))], 1), _vm._v(" "), _c("div", {
    staticClass: "billing-card-body"
  }, [_c("div", {
    staticClass: "summary-row"
  }, [_c("span", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Plan") || "Plan"))]), _c("span", {
    staticClass: "fw-bold"
  }, [_vm._v(_vm._s(_vm.plan.name))])]), _vm._v(" "), _c("div", {
    staticClass: "summary-row"
  }, [_c("span", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Billing_Cycle") || "Billing Cycle"))]), _c("span", {
    staticClass: "fw-bold"
  }, [_vm._v(_vm._s(_vm.selectedCycleLabel))])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "summary-row"
  }, [_c("span", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Subtotal") || "Subtotal"))]), _c("span", {
    staticClass: "fw-bold"
  }, [_vm._v(_vm._s(_vm.currencySymbol) + _vm._s(_vm.displayAmount) + " " + _vm._s(_vm.currencyCode))])]), _vm._v(" "), _c("div", {
    staticClass: "summary-row"
  }, [_c("span", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Tax") || "Tax"))]), _c("span", {
    staticClass: "fw-bold"
  }, [_vm._v(_vm._s(_vm.currencySymbol) + "0.00")])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "summary-row"
  }, [_c("span", {
    staticClass: "fw-bold summary-total-label"
  }, [_vm._v(_vm._s(_vm.$t("Total") || "Total"))]), _vm._v(" "), _c("span", {
    staticClass: "fw-bold text-primary summary-total-amount"
  }, [_vm._v(_vm._s(_vm.currencySymbol) + _vm._s(_vm.displayAmount) + " " + _vm._s(_vm.currencyCode))])]), _vm._v(" "), _vm.isUpgrade !== null ? _c("div", {
    staticClass: "upgrade-note mt-3"
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "info"
    }
  }), _vm._v(" "), _vm.isUpgrade ? _c("span", [_vm._v(_vm._s(_vm.$t("Upgrade_note") || "Your current plan will be replaced immediately after payment."))]) : _c("span", [_vm._v(_vm._s(_vm.$t("Downgrade_note") || "Your new plan will start immediately after payment."))])], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "mt-3 pt-3 summary-included"
  }, [_c("div", {
    staticClass: "small fw-bold text-muted text-uppercase mb-2"
  }, [_vm._v(_vm._s(_vm.$t("Included") || "Included"))]), _vm._v(" "), _vm._l(_vm.plan.limits, function (limit, key) {
    return _c("div", {
      key: "l" + key,
      staticClass: "d-flex align-items-center gap-1 mb-1 small"
    }, [_c("lucide-icon", {
      staticClass: "text-success",
      attrs: {
        name: "check"
      }
    }), _vm._v(" " + _vm._s(limit.display) + " " + _vm._s(limit.label) + "\n              ")], 1);
  }), _vm._v(" "), _vm._l(_vm.plan.features, function (feat, key) {
    return _c("div", {
      key: "f" + key,
      staticClass: "d-flex align-items-center gap-1 mb-1 small"
    }, [_c("lucide-icon", {
      staticClass: "text-success",
      attrs: {
        name: "check"
      }
    }), _vm._v(" " + _vm._s(feat.label) + "\n              ")], 1);
  })], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-7 order-lg-1"
  }, [_c("div", {
    staticClass: "billing-card mb-4"
  }, [_c("div", {
    staticClass: "billing-card-header"
  }, [_c("lucide-icon", {
    staticClass: "mr-2",
    attrs: {
      name: "calendar"
    }
  }), _vm._v(_vm._s(_vm.$t("Billing_Cycle") || "Billing Cycle"))], 1), _vm._v(" "), _c("div", {
    staticClass: "billing-card-body"
  }, [_c("div", {
    staticClass: "d-flex gap-3"
  }, [_c("label", {
    "class": ["cycle-option flex-fill", {
      selected: _vm.selectedCycle === "monthly"
    }]
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedCycle,
      expression: "selectedCycle"
    }],
    staticClass: "d-none",
    attrs: {
      type: "radio",
      value: "monthly"
    },
    domProps: {
      checked: _vm._q(_vm.selectedCycle, "monthly")
    },
    on: {
      change: function change($event) {
        _vm.selectedCycle = "monthly";
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "cycle-card"
  }, [_c("div", [_c("div", {
    staticClass: "fw-bold"
  }, [_vm._v(_vm._s(_vm.$t("Monthly") || "Monthly"))]), _vm._v(" "), _c("div", {
    staticClass: "text-muted small"
  }, [_vm._v(_vm._s(_vm.$t("Billed_monthly") || "Billed every month"))])]), _vm._v(" "), _c("span", {
    staticClass: "fw-bold"
  }, [_vm._v(_vm._s(_vm.currencySymbol) + _vm._s(_vm.plan.price.toFixed(2)))])])]), _vm._v(" "), _c("label", {
    "class": ["cycle-option flex-fill", {
      selected: _vm.selectedCycle === "yearly"
    }]
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedCycle,
      expression: "selectedCycle"
    }],
    staticClass: "d-none",
    attrs: {
      type: "radio",
      value: "yearly"
    },
    domProps: {
      checked: _vm._q(_vm.selectedCycle, "yearly")
    },
    on: {
      change: function change($event) {
        _vm.selectedCycle = "yearly";
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "cycle-card"
  }, [_c("div", [_c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Yearly") || "Yearly") + "\n                      "), _vm.plan.savings_percent > 0 ? _c("span", {
    staticClass: "save-chip"
  }, [_vm._v("-" + _vm._s(_vm.plan.savings_percent) + "%")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "text-muted small"
  }, [_vm._v(_vm._s(_vm.$t("Billed_annually") || "Billed annually"))])]), _vm._v(" "), _c("span", {
    staticClass: "fw-bold"
  }, [_vm._v(_vm._s(_vm.currencySymbol) + _vm._s(_vm.plan.yearly_price.toFixed(2)))])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "billing-card mb-4"
  }, [_c("div", {
    staticClass: "billing-card-header"
  }, [_c("lucide-icon", {
    staticClass: "mr-2",
    attrs: {
      name: "credit-card"
    }
  }), _vm._v(_vm._s(_vm.$t("Payment_Method") || "Payment Method"))], 1), _vm._v(" "), _c("div", {
    staticClass: "billing-card-body"
  }, [_vm.gateways.length === 0 ? _c("div", {
    staticClass: "text-center py-4"
  }, [_c("lucide-icon", {
    staticClass: "text-warning no-gateways-icon",
    attrs: {
      name: "alert-triangle"
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "text-muted mt-2"
  }, [_vm._v(_vm._s(_vm.$t("No_gateways") || "No payment gateways available. Please contact support."))])], 1) : _c("div", {
    staticClass: "d-flex flex-column gap-2"
  }, _vm._l(_vm.gateways, function (gw, i) {
    return _c("label", {
      key: gw.key,
      "class": ["gateway-option", {
        selected: _vm.selectedGateway === gw.key
      }]
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.selectedGateway,
        expression: "selectedGateway"
      }],
      staticClass: "d-none",
      attrs: {
        type: "radio"
      },
      domProps: {
        value: gw.key,
        checked: _vm._q(_vm.selectedGateway, gw.key)
      },
      on: {
        change: function change($event) {
          _vm.selectedGateway = gw.key;
        }
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "gateway-card"
    }, [_c("div", {
      staticClass: "d-flex align-items-center gap-3"
    }, [_c("div", {
      staticClass: "gateway-icon",
      style: {
        background: gw.color + "15"
      }
    }, [_c("lucide-icon", {
      style: {
        color: gw.color
      },
      attrs: {
        name: _vm.mapGatewayIcon(gw.icon)
      }
    })], 1), _vm._v(" "), _c("div", [_c("div", {
      staticClass: "fw-bold small"
    }, [_vm._v(_vm._s(gw.label))]), _vm._v(" "), _c("div", {
      staticClass: "text-muted gateway-description"
    }, [_vm._v("\n                        " + _vm._s(gw.key === "offline" ? _vm.$t("Pay_via_bank") || "Pay via bank transfer and upload proof of payment" : (_vm.$t("Pay_with") || "Pay securely with") + " " + gw.label) + "\n                      ")])])]), _vm._v(" "), _c("span", {
      staticClass: "gateway-check"
    }, [_vm._v(_vm._s(_vm.selectedGateway === gw.key ? "✓" : "○"))])])]);
  }), 0)])]), _vm._v(" "), _vm.isOfflinePayment ? _c("div", {
    staticClass: "billing-card mb-4"
  }, [_c("div", {
    staticClass: "billing-card-header"
  }, [_c("lucide-icon", {
    staticClass: "mr-2",
    attrs: {
      name: "landmark"
    }
  }), _vm._v(_vm._s(_vm.$t("Bank_Transfer_Details") || "Bank Transfer Details"))], 1), _vm._v(" "), _c("div", {
    staticClass: "billing-card-body"
  }, [_c("div", {
    staticClass: "offline-amount-box mb-3"
  }, [_c("p", {
    staticClass: "mb-1 text-muted small-label"
  }, [_vm._v(_vm._s(_vm.$t("Amount_to_Transfer") || "Amount to Transfer"))]), _vm._v(" "), _c("p", {
    staticClass: "mb-0 fw-bold amount-value"
  }, [_vm._v(_vm._s(_vm.currencySymbol) + _vm._s(_vm.displayAmount) + " " + _vm._s(_vm.currencyCode))])]), _vm._v(" "), _vm.hasBankDetails ? _c("div", {
    staticClass: "bank-details-grid mb-3"
  }, [_vm.bankDetails.bank_name ? _c("div", {
    staticClass: "bank-detail-row"
  }, [_c("span", {
    staticClass: "bank-detail-label"
  }, [_vm._v(_vm._s(_vm.$t("Bank_Name") || "Bank Name"))]), _vm._v(" "), _c("span", {
    staticClass: "bank-detail-value"
  }, [_vm._v(_vm._s(_vm.bankDetails.bank_name))])]) : _vm._e(), _vm._v(" "), _vm.bankDetails.account_holder ? _c("div", {
    staticClass: "bank-detail-row"
  }, [_c("span", {
    staticClass: "bank-detail-label"
  }, [_vm._v(_vm._s(_vm.$t("Account_Holder") || "Account Holder"))]), _vm._v(" "), _c("span", {
    staticClass: "bank-detail-value"
  }, [_vm._v(_vm._s(_vm.bankDetails.account_holder))])]) : _vm._e(), _vm._v(" "), _vm.bankDetails.account_number ? _c("div", {
    staticClass: "bank-detail-row"
  }, [_c("span", {
    staticClass: "bank-detail-label"
  }, [_vm._v(_vm._s(_vm.$t("Account_Number") || "Account Number"))]), _vm._v(" "), _c("span", {
    staticClass: "bank-detail-value"
  }, [_vm._v(_vm._s(_vm.bankDetails.account_number))])]) : _vm._e(), _vm._v(" "), _vm.bankDetails.iban ? _c("div", {
    staticClass: "bank-detail-row"
  }, [_c("span", {
    staticClass: "bank-detail-label"
  }, [_vm._v(_vm._s(_vm.$t("IBAN") || "IBAN"))]), _vm._v(" "), _c("span", {
    staticClass: "bank-detail-value"
  }, [_vm._v(_vm._s(_vm.bankDetails.iban))])]) : _vm._e(), _vm._v(" "), _vm.bankDetails.swift ? _c("div", {
    staticClass: "bank-detail-row"
  }, [_c("span", {
    staticClass: "bank-detail-label"
  }, [_vm._v(_vm._s(_vm.$t("SWIFT_BIC") || "SWIFT / BIC"))]), _vm._v(" "), _c("span", {
    staticClass: "bank-detail-value"
  }, [_vm._v(_vm._s(_vm.bankDetails.swift))])]) : _vm._e(), _vm._v(" "), _vm.bankDetails.branch ? _c("div", {
    staticClass: "bank-detail-row"
  }, [_c("span", {
    staticClass: "bank-detail-label"
  }, [_vm._v(_vm._s(_vm.$t("Branch") || "Branch"))]), _vm._v(" "), _c("span", {
    staticClass: "bank-detail-value"
  }, [_vm._v(_vm._s(_vm.bankDetails.branch))])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.bankDetails.instructions ? _c("div", {
    staticClass: "bank-instructions mb-3"
  }, [_c("p", {
    staticClass: "mb-1 fw-bold small-label"
  }, [_vm._v(_vm._s(_vm.$t("Instructions") || "Instructions"))]), _vm._v(" "), _c("p", {
    staticClass: "mb-0 text-muted small-text"
  }, [_vm._v(_vm._s(_vm.bankDetails.instructions))])]) : _vm._e(), _vm._v(" "), !_vm.hasBankDetails ? _c("div", {
    staticClass: "alert alert-warning d-flex align-items-center gap-2 mb-3 small"
  }, [_c("lucide-icon", {
    attrs: {
      name: "alert-triangle"
    }
  }), _vm._v("\n              " + _vm._s(_vm.$t("Bank_details_not_configured") || "Bank details are not configured yet. Please contact support.") + "\n            ")], 1) : _vm._e(), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "mb-2"
  }, [_c("label", {
    staticClass: "fw-bold small-label mb-2"
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "upload"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Upload_Proof") || "Upload Proof of Payment") + " "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])], 1), _vm._v(" "), _c("div", {
    staticClass: "offline-upload-area",
    "class": {
      "drag-over": _vm.dragOver
    },
    on: {
      click: function click($event) {
        return _vm.$refs.proofInput.click();
      },
      dragover: function dragover($event) {
        $event.preventDefault();
        _vm.dragOver = true;
      },
      dragleave: function dragleave($event) {
        _vm.dragOver = false;
      },
      drop: function drop($event) {
        $event.preventDefault();
        return _vm.onDropProof.apply(null, arguments);
      }
    }
  }, [_c("input", {
    ref: "proofInput",
    staticClass: "d-none",
    attrs: {
      type: "file",
      accept: ".jpg,.jpeg,.png,.webp,.pdf"
    },
    on: {
      change: _vm.onProofSelected
    }
  }), _vm._v(" "), !_vm.proofFile ? _c("div", {
    staticClass: "text-center"
  }, [_c("lucide-icon", {
    staticClass: "upload-icon",
    attrs: {
      name: "upload"
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "mb-1 fw-bold small-label"
  }, [_vm._v(_vm._s(_vm.$t("Click_or_drag") || "Click or drag file here"))]), _vm._v(" "), _c("p", {
    staticClass: "mb-0 text-muted tiny-text"
  }, [_vm._v(_vm._s(_vm.$t("File_formats") || "JPG, PNG, WebP or PDF (max 5MB)"))])], 1) : _c("div", {
    staticClass: "text-center"
  }, [_c("lucide-icon", {
    staticClass: "upload-icon-success",
    attrs: {
      name: "file-text"
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "mb-0 fw-bold small-label"
  }, [_vm._v(_vm._s(_vm.proofFile.name))]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm btn-outline-danger mt-2",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.removeProof.apply(null, arguments);
      }
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "x"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Remove") || "Remove") + "\n                  ")], 1)], 1)])])])]) : _vm._e(), _vm._v(" "), _vm.gateways.length > 0 ? _c("button", {
    staticClass: "btn btn-primary w-100 py-2",
    attrs: {
      disabled: _vm.processing
    },
    on: {
      click: _vm.submitPayment
    }
  }, [_vm.processing ? _c("span", {
    staticClass: "spinner-border spinner-border-sm mr-2"
  }) : _c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "lock"
    }
  }), _vm._v("\n          " + _vm._s(_vm.processing ? _vm.$t("Processing") || "Processing..." : _vm.submitButtonText) + "\n        ")], 1) : _vm._e(), _vm._v(" "), _c("p", {
    staticClass: "text-center text-muted small mt-3"
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "lock"
    }
  }), _vm._v("\n          " + _vm._s(_vm.isOfflinePayment ? _vm.$t("Proof_review_note") || "Your proof will be reviewed by our team. Your plan activates after approval." : _vm.$t("Payment_secure") || "Your payment is secured and encrypted. You will be redirected to complete payment.") + "\n        ")], 1)])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/billing/checkout.vue?vue&type=style&index=0&id=e3e15392&scoped=true&lang=css"
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/billing/checkout.vue?vue&type=style&index=0&id=e3e15392&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.offline-amount-box[data-v-e3e15392] {\n  background: #f0fdfa;\n  border: 1px solid #c7d2fe;\n  border-radius: 10px;\n  padding: 0.85rem 1rem;\n  text-align: center;\n}\n.amount-value[data-v-e3e15392] {\n  font-size: 1.35rem;\n  color: #0d9488;\n}\n.bank-details-grid[data-v-e3e15392] {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.bank-detail-row[data-v-e3e15392] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.6rem 0.85rem;\n  font-size: 0.85rem;\n}\n.bank-detail-row[data-v-e3e15392]:not(:last-child) {\n  border-bottom: 1px solid #e2e8f0;\n}\n.bank-detail-row[data-v-e3e15392]:nth-child(even) {\n  background: #f8fafc;\n}\n.bank-detail-label[data-v-e3e15392] {\n  color: #64748b;\n  font-weight: 500;\n}\n.bank-detail-value[data-v-e3e15392] {\n  font-weight: 600;\n  color: #1e293b;\n  text-align: right;\n  word-break: break-all;\n}\n.bank-instructions[data-v-e3e15392] {\n  background: #fffbeb;\n  border: 1px solid #fde68a;\n  border-radius: 10px;\n  padding: 0.75rem 1rem;\n}\n.offline-upload-area[data-v-e3e15392] {\n  border: 2px dashed #cbd5e1;\n  border-radius: 12px;\n  padding: 1.5rem 1rem;\n  cursor: pointer;\n  text-align: center;\n  transition: border-color 0.2s, background 0.2s;\n}\n.offline-upload-area[data-v-e3e15392]:hover,\n.offline-upload-area.drag-over[data-v-e3e15392] {\n  border-color: #0d9488;\n  background: #f0fdfa;\n}\n.upload-icon[data-v-e3e15392] {\n  font-size: 2rem;\n  color: #94a3b8;\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.upload-icon-success[data-v-e3e15392] {\n  font-size: 2rem;\n  color: #10b981;\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.small-label[data-v-e3e15392] {\n  font-size: 0.85rem;\n}\n.small-text[data-v-e3e15392] {\n  font-size: 0.82rem;\n}\n.tiny-text[data-v-e3e15392] {\n  font-size: 0.75rem;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ },

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/billing/checkout.vue?vue&type=style&index=0&id=e3e15392&scoped=true&lang=css"
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/billing/checkout.vue?vue&type=style&index=0&id=e3e15392&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_e3e15392_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./checkout.vue?vue&type=style&index=0&id=e3e15392&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/billing/checkout.vue?vue&type=style&index=0&id=e3e15392&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_e3e15392_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_e3e15392_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "./resources/src/views/app/pages/billing/checkout.vue"
/*!************************************************************!*\
  !*** ./resources/src/views/app/pages/billing/checkout.vue ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _checkout_vue_vue_type_template_id_e3e15392_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout.vue?vue&type=template&id=e3e15392&scoped=true */ "./resources/src/views/app/pages/billing/checkout.vue?vue&type=template&id=e3e15392&scoped=true");
/* harmony import */ var _checkout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/billing/checkout.vue?vue&type=script&lang=js");
/* harmony import */ var _checkout_vue_vue_type_style_index_0_id_e3e15392_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout.vue?vue&type=style&index=0&id=e3e15392&scoped=true&lang=css */ "./resources/src/views/app/pages/billing/checkout.vue?vue&type=style&index=0&id=e3e15392&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _checkout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _checkout_vue_vue_type_template_id_e3e15392_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _checkout_vue_vue_type_template_id_e3e15392_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e3e15392",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/billing/checkout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/billing/checkout.vue?vue&type=script&lang=js"
/*!************************************************************************************!*\
  !*** ./resources/src/views/app/pages/billing/checkout.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./checkout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/billing/checkout.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/billing/checkout.vue?vue&type=template&id=e3e15392&scoped=true"
/*!******************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/billing/checkout.vue?vue&type=template&id=e3e15392&scoped=true ***!
  \******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_template_id_e3e15392_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_template_id_e3e15392_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_template_id_e3e15392_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./checkout.vue?vue&type=template&id=e3e15392&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/billing/checkout.vue?vue&type=template&id=e3e15392&scoped=true");


/***/ },

/***/ "./resources/src/views/app/pages/billing/checkout.vue?vue&type=style&index=0&id=e3e15392&scoped=true&lang=css"
/*!********************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/billing/checkout.vue?vue&type=style&index=0&id=e3e15392&scoped=true&lang=css ***!
  \********************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_e3e15392_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./checkout.vue?vue&type=style&index=0&id=e3e15392&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/billing/checkout.vue?vue&type=style&index=0&id=e3e15392&scoped=true&lang=css");


/***/ }

}]);