"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["billing_current_plan"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/billing/current_plan.vue?vue&type=script&lang=js"
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/billing/current_plan.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CurrentPlan",
  data: function data() {
    return {
      loading: true,
      subscription: null,
      plan: null,
      hasActive: false,
      pendingUpgrade: null,
      showCancelModal: false,
      cancelLoading: false,
      showCancelUpgradeModal: false,
      cancelUpgradeLoading: false,
      resumeLoading: false,
      planUsage: null,
      usageLoading: true
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["currentUserPermissions"])),
  created: function created() {
    this.fetchCurrentPlan();
    this.fetchPlanUsage();
  },
  methods: {
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    fetchCurrentPlan: function fetchCurrentPlan() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$get, data, _e$response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _this.loading = true;
              _context.p = 1;
              _context.n = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/billing/current-plan");
            case 2:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.subscription = data.subscription;
              _this.plan = data.plan;
              _this.hasActive = data.has_active;
              _this.pendingUpgrade = data.pending_upgrade || null;
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              _this.makeToast("danger", ((_e$response = _t.response) === null || _e$response === void 0 || (_e$response = _e$response.data) === null || _e$response === void 0 ? void 0 : _e$response.message) || "Failed to load plan data.", "Error");
            case 4:
              _this.loading = false;
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3]]);
      }))();
    },
    fetchPlanUsage: function fetchPlanUsage() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get2, data, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _this2.usageLoading = true;
              _context2.p = 1;
              _context2.n = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/billing/plan-usage");
            case 2:
              _yield$axios$get2 = _context2.v;
              data = _yield$axios$get2.data;
              _this2.planUsage = data;
              _context2.n = 4;
              break;
            case 3:
              _context2.p = 3;
              _t2 = _context2.v;
              // Fall back to window.__planSummary if available
              if (window.__planSummary) {
                _this2.planUsage = window.__planSummary;
              }
            case 4:
              _this2.usageLoading = false;
            case 5:
              return _context2.a(2);
          }
        }, _callee2, null, [[1, 3]]);
      }))();
    },
    limitValueClass: function limitValueClass(limit) {
      if (limit.unlimited) return 'text-primary';
      if (limit.percentage >= 100) return 'text-danger fw-bold';
      if (limit.percentage >= 80) return 'text-warning fw-bold';
      return '';
    },
    progressBarClass: function progressBarClass(limit) {
      if (limit.percentage >= 100) return 'bg-danger';
      if (limit.percentage >= 80) return 'bg-warning';
      return 'bg-primary';
    },
    cancelSubscription: function cancelSubscription() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$axios$post, data, _e$response2, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _this3.cancelLoading = true;
              _context3.p = 1;
              _context3.n = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("/api/billing/cancel");
            case 2:
              _yield$axios$post = _context3.v;
              data = _yield$axios$post.data;
              _this3.makeToast("success", data.message || "Subscription cancelled.", "Success");
              _this3.showCancelModal = false;
              _context3.n = 3;
              return _this3.fetchCurrentPlan();
            case 3:
              _context3.n = 5;
              break;
            case 4:
              _context3.p = 4;
              _t3 = _context3.v;
              _this3.makeToast("danger", ((_e$response2 = _t3.response) === null || _e$response2 === void 0 || (_e$response2 = _e$response2.data) === null || _e$response2 === void 0 ? void 0 : _e$response2.message) || "Failed to cancel subscription.", "Error");
            case 5:
              _this3.cancelLoading = false;
            case 6:
              return _context3.a(2);
          }
        }, _callee3, null, [[1, 4]]);
      }))();
    },
    resumeSubscription: function resumeSubscription() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var _yield$axios$post2, data, _e$response3, _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _this4.resumeLoading = true;
              _context4.p = 1;
              _context4.n = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("/api/billing/resume");
            case 2:
              _yield$axios$post2 = _context4.v;
              data = _yield$axios$post2.data;
              _this4.makeToast("success", data.message || "Subscription resumed.", "Success");
              _context4.n = 3;
              return _this4.fetchCurrentPlan();
            case 3:
              _context4.n = 5;
              break;
            case 4:
              _context4.p = 4;
              _t4 = _context4.v;
              _this4.makeToast("danger", ((_e$response3 = _t4.response) === null || _e$response3 === void 0 || (_e$response3 = _e$response3.data) === null || _e$response3 === void 0 ? void 0 : _e$response3.message) || "Failed to resume subscription.", "Error");
            case 5:
              _this4.resumeLoading = false;
            case 6:
              return _context4.a(2);
          }
        }, _callee4, null, [[1, 4]]);
      }))();
    },
    cancelPendingUpgrade: function cancelPendingUpgrade() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var _yield$axios$post3, data, _e$response4, _t5;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _this5.cancelUpgradeLoading = true;
              _context5.p = 1;
              _context5.n = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("/api/billing/cancel-upgrade");
            case 2:
              _yield$axios$post3 = _context5.v;
              data = _yield$axios$post3.data;
              _this5.makeToast("success", data.message || "Pending upgrade cancelled.", "Success");
              _this5.showCancelUpgradeModal = false;
              _context5.n = 3;
              return _this5.fetchCurrentPlan();
            case 3:
              _context5.n = 5;
              break;
            case 4:
              _context5.p = 4;
              _t5 = _context5.v;
              _this5.makeToast("danger", ((_e$response4 = _t5.response) === null || _e$response4 === void 0 || (_e$response4 = _e$response4.data) === null || _e$response4 === void 0 ? void 0 : _e$response4.message) || "Failed to cancel upgrade.", "Error");
            case 5:
              _this5.cancelUpgradeLoading = false;
            case 6:
              return _context5.a(2);
          }
        }, _callee5, null, [[1, 4]]);
      }))();
    },
    formatDate: function formatDate(d) {
      if (!d) return "—";
      return new Date(d).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/billing/current_plan.vue?vue&type=template&id=641f2220"
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/billing/current_plan.vue?vue&type=template&id=641f2220 ***!
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
  }, [_vm.loading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _c("div", {
    staticClass: "billing-page current-plan-page"
  }, [_c("div", {
    staticClass: "row mb-4"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("h2", {
    staticClass: "billing-title"
  }, [_vm._v(_vm._s(_vm.$t("Current_Plan") || "Current Plan"))]), _vm._v(" "), _c("p", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Manage_your_subscription") || "Manage your subscription and billing details."))])])]), _vm._v(" "), !_vm.subscription ? _c("div", {
    staticClass: "billing-card text-center py-5"
  }, [_c("lucide-icon", {
    staticClass: "billing-empty-icon",
    attrs: {
      name: "credit-card"
    }
  }), _vm._v(" "), _c("h4", {
    staticClass: "mt-3"
  }, [_vm._v(_vm._s(_vm.$t("No_active_subscription") || "No Active Subscription"))]), _vm._v(" "), _c("p", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Choose_plan_to_start") || "Choose a plan to start using the application."))]), _vm._v(" "), _c("router-link", {
    staticClass: "btn btn-primary mt-2",
    attrs: {
      to: "/app/billing/change-plan"
    }
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "arrow-right"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Choose_a_Plan") || "Choose a Plan") + "\n      ")], 1)], 1) : _vm.subscription && _vm.subscription.status === "expired" ? _c("div", {
    staticClass: "billing-card text-center py-5"
  }, [_c("div", {
    staticClass: "expired-icon-wrapper mb-3"
  }, [_c("lucide-icon", {
    attrs: {
      name: "x"
    }
  })], 1), _vm._v(" "), _c("h4", {
    staticClass: "mt-2"
  }, [_vm._v(_vm._s(_vm.$t("Plan_Has_Ended") || "Your Plan Has Ended"))]), _vm._v(" "), _c("p", {
    staticClass: "text-muted billing-plan-ended-desc"
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Plan_ended_message") || "Your subscription has expired. Resubscribe now to regain access to all features and continue managing your business.") + "\n      ")]), _vm._v(" "), _c("div", {
    staticClass: "expired-plan-info mt-3 mb-3"
  }, [_c("span", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Previous_Plan") || "Previous Plan") + ":")]), _vm._v(" "), _c("strong", [_vm._v(_vm._s(_vm.plan ? _vm.plan.name : "—"))]), _vm._v(" "), _c("span", {
    staticClass: "mx-2"
  }, [_vm._v("|")]), _vm._v(" "), _c("span", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Expired_On") || "Expired On") + ":")]), _vm._v(" "), _c("strong", [_vm._v(_vm._s(_vm.formatDate(_vm.subscription.ends_at)))])]), _vm._v(" "), _c("router-link", {
    staticClass: "btn btn-primary btn-lg mt-2",
    attrs: {
      to: "/app/billing/change-plan"
    }
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "arrow-right"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Resubscribe_Now") || "Resubscribe Now") + "\n      ")], 1)], 1) : _c("div", [_vm.pendingUpgrade ? _c("div", {
    staticClass: "pending-upgrade-alert mb-4"
  }, [_c("div", {
    staticClass: "d-flex align-items-start justify-content-between flex-wrap gap-3"
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
    staticClass: "mb-0 text-muted"
  }, [_vm._v("\n                " + _vm._s(_vm.$t("Pending_upgrade_message") || "You have a pending upgrade to") + "\n                "), _c("strong", [_vm._v(_vm._s(_vm.pendingUpgrade.plan_name))]), _vm._v("\n                (" + _vm._s(_vm.pendingUpgrade.billing_cycle === "yearly" ? _vm.$t("Yearly") || "Yearly" : _vm.$t("Monthly") || "Monthly") + " — $" + _vm._s(_vm.pendingUpgrade.amount.toFixed(2)) + " " + _vm._s(_vm.pendingUpgrade.currency) + ").\n                " + _vm._s(_vm.$t("Pending_upgrade_wait") || "Please wait for admin approval before submitting another request.") + "\n              ")])])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-outline-danger btn-sm flex-shrink-0",
    attrs: {
      disabled: _vm.cancelUpgradeLoading
    },
    on: {
      click: function click($event) {
        _vm.showCancelUpgradeModal = true;
      }
    }
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "x"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Cancel_Upgrade") || "Cancel Upgrade") + "\n          ")], 1)])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-8"
  }, [_c("div", {
    staticClass: "billing-card mb-4"
  }, [_c("div", {
    staticClass: "billing-card-header d-flex align-items-center justify-content-between"
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_vm._v(_vm._s(_vm.plan.name))]), _vm._v(" "), _c("span", {
    "class": "badge-billing badge-" + _vm.subscription.status
  }, [_vm._v("\n                " + _vm._s(_vm.subscription.status.charAt(0).toUpperCase() + _vm.subscription.status.slice(1)) + "\n              ")])]), _vm._v(" "), _c("div", {
    staticClass: "billing-card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_c("div", {
    staticClass: "billing-detail-row"
  }, [_c("span", {
    staticClass: "billing-label"
  }, [_vm._v(_vm._s(_vm.$t("Billing_Cycle") || "Billing Cycle"))]), _vm._v(" "), _c("span", {
    staticClass: "billing-value"
  }, [_vm._v(_vm._s(_vm.subscription.billing_cycle === "yearly" ? _vm.$t("Yearly") || "Yearly" : _vm.$t("Monthly") || "Monthly"))])]), _vm._v(" "), _c("div", {
    staticClass: "billing-detail-row"
  }, [_c("span", {
    staticClass: "billing-label"
  }, [_vm._v(_vm._s(_vm.$t("Amount") || "Amount"))]), _vm._v(" "), _c("span", {
    staticClass: "billing-value fw-bold"
  }, [_vm._v("$" + _vm._s(_vm.subscription.amount.toFixed(2)) + " " + _vm._s(_vm.subscription.currency))])]), _vm._v(" "), _c("div", {
    staticClass: "billing-detail-row"
  }, [_c("span", {
    staticClass: "billing-label"
  }, [_vm._v(_vm._s(_vm.$t("start_date") || "Start Date"))]), _vm._v(" "), _c("span", {
    staticClass: "billing-value"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.subscription.starts_at)))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("div", {
    staticClass: "billing-detail-row"
  }, [_c("span", {
    staticClass: "billing-label"
  }, [_vm._v(_vm._s(_vm.$t("End_Date") || "End Date"))]), _vm._v(" "), _c("span", {
    staticClass: "billing-value"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.subscription.ends_at)))])]), _vm._v(" "), _vm.subscription.trial_ends_at ? _c("div", {
    staticClass: "billing-detail-row"
  }, [_c("span", {
    staticClass: "billing-label"
  }, [_vm._v(_vm._s(_vm.$t("Trial_Ends") || "Trial Ends"))]), _vm._v(" "), _c("span", {
    staticClass: "billing-value"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.subscription.trial_ends_at)))])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "billing-detail-row"
  }, [_c("span", {
    staticClass: "billing-label"
  }, [_vm._v(_vm._s(_vm.$t("Days_Remaining") || "Days Remaining"))]), _vm._v(" "), _c("span", {
    staticClass: "billing-value"
  }, [_c("span", {
    "class": _vm.subscription.days_remaining <= 7 ? "text-danger fw-bold" : ""
  }, [_vm._v("\n                        " + _vm._s(_vm.subscription.days_remaining) + " " + _vm._s(_vm.$t("days") || "days") + "\n                      ")])])])])]), _vm._v(" "), _vm.subscription.status === "pending" ? _c("div", {
    staticClass: "pending-notice mt-3"
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "info"
    }
  }), _vm._v("\n                " + _vm._s(_vm.$t("Subscription_pending_notice") || "Your subscription is currently pending approval.") + "\n              ")], 1) : _vm._e(), _vm._v(" "), _vm.subscription.is_cancelled ? _c("div", {
    staticClass: "cancelled-notice mt-3"
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "alert-triangle"
    }
  }), _vm._v("\n                " + _vm._s(_vm.$t("Subscription_cancelled_notice") || "Your subscription is cancelled and will expire on") + "\n                " + _vm._s(_vm.formatDate(_vm.subscription.ends_at)) + ".\n              ")], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "mt-3 d-flex gap-2 flex-wrap"
  }, [_vm.subscription.status !== "pending" && !_vm.pendingUpgrade ? _c("router-link", {
    staticClass: "btn btn-primary btn-sm",
    attrs: {
      to: "/app/billing/change-plan"
    }
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "arrow-up"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Change_Plan") || "Change Plan") + "\n                ")], 1) : _vm.pendingUpgrade ? _c("span", {
    staticClass: "btn btn-outline-secondary btn-sm disabled",
    staticStyle: {
      "pointer-events": "none",
      opacity: "0.6"
    }
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "clock"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Upgrade_Pending") || "Upgrade Pending") + "\n                ")], 1) : _vm._e(), _vm._v(" "), _c("router-link", {
    staticClass: "btn btn-outline-secondary btn-sm",
    attrs: {
      to: "/app/billing/history"
    }
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "clock"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Billing_History") || "Billing History") + "\n                ")], 1), _vm._v(" "), _c("router-link", {
    staticClass: "btn btn-outline-secondary btn-sm",
    attrs: {
      to: "/app/billing/invoices"
    }
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "file"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Invoices") || "Invoices") + "\n                ")], 1), _vm._v(" "), _vm.subscription.status === "active" ? _c("button", {
    staticClass: "btn btn-outline-danger btn-sm",
    on: {
      click: function click($event) {
        _vm.showCancelModal = true;
      }
    }
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "x"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Cancel_Subscription") || "Cancel Subscription") + "\n                ")], 1) : _vm._e(), _vm._v(" "), _vm.subscription.can_resume ? _c("button", {
    staticClass: "btn btn-success btn-sm",
    attrs: {
      disabled: _vm.resumeLoading
    },
    on: {
      click: _vm.resumeSubscription
    }
  }, [_vm.resumeLoading ? _c("span", {
    staticClass: "spinner-border spinner-border-sm mr-1"
  }) : _c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "rotate-cw"
    }
  }), _vm._v("\n                  " + _vm._s(_vm.$t("Resume_Subscription") || "Resume Subscription") + "\n                ")], 1) : _vm._e()], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-4"
  }, [_c("div", {
    staticClass: "billing-card mb-4"
  }, [_c("div", {
    staticClass: "billing-card-header"
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_vm._v(_vm._s(_vm.$t("Usage_Limits") || "Usage Limits"))])]), _vm._v(" "), _c("div", {
    staticClass: "billing-card-body"
  }, [_vm.usageLoading ? _c("div", {
    staticClass: "text-center py-3"
  }, [_c("div", {
    staticClass: "spinner spinner-primary spinner-sm"
  })]) : _vm.planUsage && _vm.planUsage.has_plan ? _c("div", _vm._l(_vm.planUsage.limits, function (limit, key) {
    return _c("div", {
      key: key,
      staticClass: "usage-limit-item"
    }, [_c("div", {
      staticClass: "d-flex align-items-center justify-content-between mb-1"
    }, [_c("span", {
      staticClass: "usage-limit-label"
    }, [_c("i", {
      staticClass: "usage-limit-icon",
      "class": limit.icon
    }), _vm._v("\n                      " + _vm._s(limit.label) + "\n                    ")]), _vm._v(" "), _c("span", {
      staticClass: "usage-limit-value",
      "class": _vm.limitValueClass(limit)
    }, [limit.unlimited ? [_vm._v("\n                        " + _vm._s(limit.current) + " / ∞\n                      ")] : [_vm._v("\n                        " + _vm._s(limit.current) + " / " + _vm._s(limit.max) + "\n                      ")]], 2)]), _vm._v(" "), !limit.unlimited ? _c("div", {
      staticClass: "usage-progress-track"
    }, [_c("div", {
      staticClass: "usage-progress-bar",
      "class": _vm.progressBarClass(limit),
      style: {
        width: limit.percentage + "%"
      }
    })]) : _vm._e()]);
  }), 0) : _c("div", {
    staticClass: "text-center py-3"
  }, [_c("p", {
    staticClass: "text-muted small mb-0"
  }, [_vm._v(_vm._s(_vm.$t("No_plan_data") || "No plan data available."))])])])]), _vm._v(" "), _c("div", {
    staticClass: "billing-card"
  }, [_c("div", {
    staticClass: "billing-card-header"
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_vm._v(_vm._s(_vm.$t("Features") || "Features"))])]), _vm._v(" "), _c("div", {
    staticClass: "billing-card-body"
  }, [_vm.usageLoading ? _c("div", {
    staticClass: "text-center py-3"
  }, [_c("div", {
    staticClass: "spinner spinner-primary spinner-sm"
  })]) : _vm.planUsage && _vm.planUsage.has_plan ? _c("div", _vm._l(_vm.planUsage.features, function (feat, key) {
    return _c("div", {
      key: key,
      staticClass: "feature-item",
      "class": feat.enabled ? "feature-enabled" : "feature-disabled"
    }, [_c("lucide-icon", {
      staticClass: "feature-status-icon",
      attrs: {
        name: feat.enabled ? "check" : "x"
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "feature-label"
    }, [_vm._v(_vm._s(feat.label))])], 1);
  }), 0) : _c("p", {
    staticClass: "text-muted small mb-0"
  }, [_vm._v("\n                " + _vm._s(_vm.$t("No_features_listed") || "No features listed for this plan.") + "\n              ")])])])])])]), _vm._v(" "), _vm.showCancelModal ? _c("div", {
    staticClass: "modal-overlay",
    on: {
      click: function click($event) {
        if ($event.target !== $event.currentTarget) return null;
        _vm.showCancelModal = false;
      }
    }
  }, [_c("div", {
    staticClass: "confirm-modal"
  }, [_c("div", {
    staticClass: "confirm-modal-icon"
  }, [_c("lucide-icon", {
    attrs: {
      name: "alert-triangle"
    }
  })], 1), _vm._v(" "), _c("h4", [_vm._v(_vm._s(_vm.$t("Cancel_Subscription") || "Cancel Subscription"))]), _vm._v(" "), _c("p", {
    staticClass: "text-muted"
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Cancel_confirm_message") || "Are you sure you want to cancel? Your subscription will remain active until the end of the current billing period.") + "\n        ")]), _vm._v(" "), _vm.subscription ? _c("div", {
    staticClass: "cancel-info mb-3"
  }, [_c("span", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Active_until") || "Active until") + ":")]), _vm._v(" "), _c("strong", [_vm._v(_vm._s(_vm.formatDate(_vm.subscription.ends_at)))])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-2 justify-content-center"
  }, [_c("button", {
    staticClass: "btn btn-outline-secondary",
    on: {
      click: function click($event) {
        _vm.showCancelModal = false;
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Keep_Subscription") || "Keep Subscription") + "\n          ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-danger",
    attrs: {
      disabled: _vm.cancelLoading
    },
    on: {
      click: _vm.cancelSubscription
    }
  }, [_vm.cancelLoading ? _c("span", {
    staticClass: "spinner-border spinner-border-sm mr-1"
  }) : _vm._e(), _vm._v("\n            " + _vm._s(_vm.$t("Confirm_Cancel") || "Yes, Cancel") + "\n          ")])])])]) : _vm._e(), _vm._v(" "), _vm.showCancelUpgradeModal ? _c("div", {
    staticClass: "modal-overlay",
    on: {
      click: function click($event) {
        if ($event.target !== $event.currentTarget) return null;
        _vm.showCancelUpgradeModal = false;
      }
    }
  }, [_c("div", {
    staticClass: "confirm-modal"
  }, [_c("div", {
    staticClass: "confirm-modal-icon"
  }, [_c("lucide-icon", {
    attrs: {
      name: "alert-triangle"
    }
  })], 1), _vm._v(" "), _c("h4", [_vm._v(_vm._s(_vm.$t("Cancel_Pending_Upgrade") || "Cancel Pending Upgrade"))]), _vm._v(" "), _c("p", {
    staticClass: "text-muted"
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Cancel_upgrade_confirm") || "Are you sure you want to cancel your pending upgrade to") + "\n          "), _c("strong", [_vm._v(_vm._s(_vm.pendingUpgrade ? _vm.pendingUpgrade.plan_name : ""))]), _vm._v("?\n          " + _vm._s(_vm.$t("Cancel_upgrade_note") || "Your current plan will remain unchanged.") + "\n        ")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-2 justify-content-center"
  }, [_c("button", {
    staticClass: "btn btn-outline-secondary",
    on: {
      click: function click($event) {
        _vm.showCancelUpgradeModal = false;
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Keep_Upgrade") || "Keep Upgrade") + "\n          ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-danger",
    attrs: {
      disabled: _vm.cancelUpgradeLoading
    },
    on: {
      click: _vm.cancelPendingUpgrade
    }
  }, [_vm.cancelUpgradeLoading ? _c("span", {
    staticClass: "spinner-border spinner-border-sm mr-1"
  }) : _vm._e(), _vm._v("\n            " + _vm._s(_vm.$t("Confirm_Cancel_Upgrade") || "Yes, Cancel Upgrade") + "\n          ")])])])]) : _vm._e()])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./resources/src/views/app/pages/billing/current_plan.vue"
/*!****************************************************************!*\
  !*** ./resources/src/views/app/pages/billing/current_plan.vue ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _current_plan_vue_vue_type_template_id_641f2220__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current_plan.vue?vue&type=template&id=641f2220 */ "./resources/src/views/app/pages/billing/current_plan.vue?vue&type=template&id=641f2220");
/* harmony import */ var _current_plan_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current_plan.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/billing/current_plan.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _current_plan_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _current_plan_vue_vue_type_template_id_641f2220__WEBPACK_IMPORTED_MODULE_0__.render,
  _current_plan_vue_vue_type_template_id_641f2220__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/billing/current_plan.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/billing/current_plan.vue?vue&type=script&lang=js"
/*!****************************************************************************************!*\
  !*** ./resources/src/views/app/pages/billing/current_plan.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_current_plan_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./current_plan.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/billing/current_plan.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_current_plan_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/billing/current_plan.vue?vue&type=template&id=641f2220"
/*!**********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/billing/current_plan.vue?vue&type=template&id=641f2220 ***!
  \**********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_current_plan_vue_vue_type_template_id_641f2220__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_current_plan_vue_vue_type_template_id_641f2220__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_current_plan_vue_vue_type_template_id_641f2220__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./current_plan.vue?vue&type=template&id=641f2220 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/billing/current_plan.vue?vue&type=template&id=641f2220");


/***/ }

}]);