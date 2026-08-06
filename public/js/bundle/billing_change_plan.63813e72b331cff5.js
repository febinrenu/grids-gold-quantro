"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["billing_change_plan"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/billing/change_plan.vue?vue&type=script&lang=js"
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/billing/change_plan.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  name: "ChangePlan",
  data: function data() {
    return {
      loading: true,
      plans: [],
      cycle: "monthly",
      currentPlanId: null,
      currentPlanPrice: null,
      hasActive: false,
      pendingUpgrade: null,
      allFeatures: {}
    };
  },
  created: function created() {
    this.fetchPlans();
  },
  methods: {
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    fetchPlans: function fetchPlans() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$get, data, _e$response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _this.loading = true;
              _context.p = 1;
              _context.n = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/billing/plans");
            case 2:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.plans = data.plans;
              _this.currentPlanId = data.current_plan_id;
              _this.currentPlanPrice = data.current_plan_price;
              _this.hasActive = data.has_active;
              _this.pendingUpgrade = data.pending_upgrade || null;
              if (_this.plans.length > 0) {
                _this.allFeatures = _this.plans[0].all_features || {};
              }
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              _this.makeToast("danger", ((_e$response = _t.response) === null || _e$response === void 0 || (_e$response = _e$response.data) === null || _e$response === void 0 ? void 0 : _e$response.message) || "Failed to load plans.", "Error");
            case 4:
              _this.loading = false;
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3]]);
      }))();
    },
    missingFeatures: function missingFeatures(plan) {
      var active = plan.features || {};
      var all = this.allFeatures || {};
      var missing = {};
      for (var _i = 0, _Object$keys = Object.keys(all); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        if (!active[key]) missing[key] = all[key];
      }
      return missing;
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/billing/change_plan.vue?vue&type=template&id=96199e12"
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/billing/change_plan.vue?vue&type=template&id=96199e12 ***!
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
  }, [_vm.loading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _c("div", {
    staticClass: "billing-page change-plan-page"
  }, [_c("div", {
    staticClass: "row mb-3"
  }, [_c("div", {
    staticClass: "col-12 d-flex align-items-center justify-content-between flex-wrap"
  }, [_c("div", [_c("h2", {
    staticClass: "billing-title"
  }, [_vm._v(_vm._s(_vm.$t("Choose_Plan") || "Choose Your Plan"))]), _vm._v(" "), _c("p", {
    staticClass: "text-muted mb-0"
  }, [_vm._v(_vm._s(_vm.$t("Select_plan_fits") || "Select the plan that fits your business."))])]), _vm._v(" "), _c("router-link", {
    staticClass: "btn btn-outline-secondary btn-sm",
    attrs: {
      to: "/app/billing/current-plan"
    }
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "arrow-left"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Back") || "Back") + "\n        ")], 1)], 1)]), _vm._v(" "), _vm.pendingUpgrade ? _c("div", {
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
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Pending_upgrade_message") || "You have a pending upgrade to") + "\n            "), _c("strong", [_vm._v(_vm._s(_vm.pendingUpgrade.plan_name))]), _vm._v(".\n            " + _vm._s(_vm.$t("Pending_upgrade_wait") || "Please wait for admin approval before submitting another request.") + "\n          ")]), _vm._v(" "), _c("router-link", {
    staticClass: "btn btn-outline-secondary btn-sm",
    attrs: {
      to: "/app/billing/current-plan"
    }
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "arrow-left"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Back_to_plan") || "Back to Current Plan") + "\n          ")], 1)], 1)])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "text-center mb-4"
  }, [_c("div", {
    staticClass: "cycle-toggle d-inline-flex"
  }, [_c("button", {
    staticClass: "cycle-btn",
    "class": {
      active: _vm.cycle === "monthly"
    },
    on: {
      click: function click($event) {
        _vm.cycle = "monthly";
      }
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Monthly") || "Monthly") + "\n        ")]), _vm._v(" "), _c("button", {
    staticClass: "cycle-btn",
    "class": {
      active: _vm.cycle === "yearly"
    },
    on: {
      click: function click($event) {
        _vm.cycle = "yearly";
      }
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Yearly") || "Yearly") + "\n          "), _c("span", {
    staticClass: "save-badge"
  }, [_vm._v(_vm._s(_vm.$t("Save") || "Save"))])])])]), _vm._v(" "), _c("div", {
    staticClass: "row justify-content-center"
  }, _vm._l(_vm.plans, function (plan) {
    return _c("div", {
      key: plan.id,
      staticClass: "col-lg-4 col-md-6 mb-4"
    }, [_c("div", {
      "class": ["plan-card", {
        "plan-current": plan.is_current
      }]
    }, [plan.is_current ? _c("div", {
      staticClass: "plan-current-badge"
    }, [_vm._v("\n            " + _vm._s(_vm.$t("Current") || "Current") + "\n          ")]) : _vm._e(), _vm._v(" "), _c("h4", {
      staticClass: "plan-name"
    }, [_vm._v(_vm._s(plan.name))]), _vm._v(" "), _c("p", {
      staticClass: "plan-slug text-muted"
    }, [_vm._v(_vm._s(plan.slug))]), _vm._v(" "), _c("div", {
      staticClass: "plan-price"
    }, [_c("span", {
      staticClass: "price-amount"
    }, [_vm._v("$" + _vm._s(_vm.cycle === "yearly" ? plan.yearly_price.toFixed(2) : plan.price.toFixed(2)))]), _vm._v(" "), _c("span", {
      staticClass: "price-period"
    }, [_vm._v("/" + _vm._s(_vm.cycle === "yearly" ? _vm.$t("year") || "year" : _vm.$t("month") || "month"))])]), _vm._v(" "), _vm.cycle === "yearly" && plan.savings_percent > 0 ? _c("div", {
      staticClass: "plan-savings"
    }, [_vm._v("\n            " + _vm._s(_vm.$t("Save") || "Save") + " " + _vm._s(plan.savings_percent) + "%\n          ")]) : _vm._e(), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
      staticClass: "plan-section-label"
    }, [_vm._v(_vm._s(_vm.$t("Limits") || "Limits"))]), _vm._v(" "), _vm._l(plan.limits, function (limit, key) {
      return _c("div", {
        key: "l-" + key,
        staticClass: "plan-feature-row"
      }, [_c("i", {
        staticClass: "plan-feature-icon text-primary",
        "class": "bi " + limit.icon
      }), _vm._v(" "), _c("span", [_vm._v(_vm._s(limit.display) + " " + _vm._s(limit.label))])]);
    }), _vm._v(" "), _c("div", {
      staticClass: "plan-section-label mt-3"
    }, [_vm._v(_vm._s(_vm.$t("Features") || "Features"))]), _vm._v(" "), _vm._l(plan.features, function (feat, key) {
      return _c("div", {
        key: "f-" + key,
        staticClass: "plan-feature-row"
      }, [_c("lucide-icon", {
        staticClass: "text-success plan-feature-icon",
        attrs: {
          name: "check"
        }
      }), _vm._v(" "), _c("span", [_vm._v(_vm._s(feat.label))])], 1);
    }), _vm._v(" "), _vm._l(_vm.missingFeatures(plan), function (feat, key) {
      return _c("div", {
        key: "m-" + key,
        staticClass: "plan-feature-row text-muted"
      }, [_c("lucide-icon", {
        staticClass: "plan-feature-icon",
        attrs: {
          name: "x"
        }
      }), _vm._v(" "), _c("span", [_vm._v(_vm._s(feat.label))])], 1);
    }), _vm._v(" "), _c("div", {
      staticClass: "mt-4"
    }, [plan.is_current ? _c("button", {
      staticClass: "btn btn-outline-secondary w-100",
      attrs: {
        disabled: ""
      }
    }, [_c("lucide-icon", {
      staticClass: "mr-1",
      attrs: {
        name: "check"
      }
    }), _vm._v(" " + _vm._s(_vm.$t("Current_Plan") || "Current Plan") + "\n            ")], 1) : _vm.pendingUpgrade ? _c("button", {
      staticClass: "btn btn-outline-secondary w-100",
      attrs: {
        disabled: ""
      }
    }, [_c("lucide-icon", {
      staticClass: "mr-1",
      attrs: {
        name: "clock"
      }
    }), _vm._v(" " + _vm._s(_vm.$t("Upgrade_Pending") || "Upgrade Pending") + "\n            ")], 1) : _c("router-link", {
      staticClass: "btn btn-primary w-100",
      attrs: {
        to: "/app/billing/checkout/" + plan.id + "?cycle=" + _vm.cycle
      }
    }, [_vm.hasActive && _vm.currentPlanPrice !== null && plan.price > _vm.currentPlanPrice ? [_c("lucide-icon", {
      staticClass: "mr-1",
      attrs: {
        name: "arrow-up"
      }
    }), _vm._v(" " + _vm._s(_vm.$t("Upgrade") || "Upgrade") + "\n              ")] : _vm.hasActive ? [_c("lucide-icon", {
      staticClass: "mr-1",
      attrs: {
        name: "arrow-down"
      }
    }), _vm._v(" " + _vm._s(_vm.$t("Switch") || "Switch") + "\n              ")] : [_c("lucide-icon", {
      staticClass: "mr-1",
      attrs: {
        name: "arrow-right"
      }
    }), _vm._v(" " + _vm._s(_vm.$t("Get_Started") || "Get Started") + "\n              ")]], 2)], 1)], 2)]);
  }), 0)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./resources/src/views/app/pages/billing/change_plan.vue"
/*!***************************************************************!*\
  !*** ./resources/src/views/app/pages/billing/change_plan.vue ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _change_plan_vue_vue_type_template_id_96199e12__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change_plan.vue?vue&type=template&id=96199e12 */ "./resources/src/views/app/pages/billing/change_plan.vue?vue&type=template&id=96199e12");
/* harmony import */ var _change_plan_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change_plan.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/billing/change_plan.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _change_plan_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _change_plan_vue_vue_type_template_id_96199e12__WEBPACK_IMPORTED_MODULE_0__.render,
  _change_plan_vue_vue_type_template_id_96199e12__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/billing/change_plan.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/billing/change_plan.vue?vue&type=script&lang=js"
/*!***************************************************************************************!*\
  !*** ./resources/src/views/app/pages/billing/change_plan.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_plan_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./change_plan.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/billing/change_plan.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_plan_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/billing/change_plan.vue?vue&type=template&id=96199e12"
/*!*********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/billing/change_plan.vue?vue&type=template&id=96199e12 ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_change_plan_vue_vue_type_template_id_96199e12__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_change_plan_vue_vue_type_template_id_96199e12__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_change_plan_vue_vue_type_template_id_96199e12__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./change_plan.vue?vue&type=template&id=96199e12 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/billing/change_plan.vue?vue&type=template&id=96199e12");


/***/ }

}]);