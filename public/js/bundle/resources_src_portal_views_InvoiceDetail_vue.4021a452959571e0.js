"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_portal_views_InvoiceDetail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/InvoiceDetail.vue?vue&type=script&lang=js"
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/InvoiceDetail.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      invoice: null,
      loading: true
    };
  },
  mounted: function mounted() {
    this.fetch();
  },
  methods: {
    fetch: function fetch() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$get, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return axios.get("/portal/invoices/".concat(_this.$route.params.id));
            case 1:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.invoice = data;
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              _this.invoice = null;
            case 3:
              _this.loading = false;
            case 4:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    formatMoney: function formatMoney(n) {
      if (n == null) return '0.00';
      return Number(n).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    },
    badgeClass: function badgeClass(s) {
      if (!s) return 'pending';
      var v = (s + '').toLowerCase();
      if (v === 'paid' || v === 'completed') return 'paid';
      if (v === 'partial') return 'partial';
      return 'pending';
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/InvoiceDetail.vue?vue&type=template&id=4aa2bbfd&scoped=true"
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/InvoiceDetail.vue?vue&type=template&id=4aa2bbfd&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "portal-page portal-invoice-detail"
  }, [_c("router-link", {
    staticClass: "pc-back",
    attrs: {
      to: "/invoices"
    }
  }, [_c("svg", {
    attrs: {
      viewBox: "0 0 20 20",
      width: "14",
      height: "14",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }, [_c("path", {
    attrs: {
      d: "M15 10H5M10 5l-5 5 5 5"
    }
  })]), _vm._v("\n    Back to Invoices\n  ")]), _vm._v(" "), _vm.loading ? _c("div", {
    staticClass: "pc-inline-loading"
  }, [_c("div", {
    staticClass: "pc-spinner"
  }), _vm._v(" "), _c("span", [_vm._v("Loading invoice...")])]) : _vm.invoice ? _c("div", {
    staticClass: "pc-detail"
  }, [_c("div", {
    staticClass: "pc-detail-head"
  }, [_c("div", {
    staticClass: "pc-detail-title-wrap"
  }, [_c("span", {
    staticClass: "pc-eyebrow"
  }, [_vm._v("Invoice")]), _vm._v(" "), _c("h1", {
    staticClass: "pc-detail-title"
  }, [_vm._v(_vm._s(_vm.invoice.Ref))]), _vm._v(" "), _c("div", {
    staticClass: "pc-detail-meta"
  }, [_c("span", [_vm._v(_vm._s(_vm.invoice.date)), _vm.invoice.time ? [_vm._v(" · " + _vm._s(_vm.invoice.time))] : _vm._e()], 2), _vm._v(" "), _c("span", {
    "class": "pc-badge pc-badge-" + _vm.badgeClass(_vm.invoice.payment_status)
  }, [_vm._v(_vm._s(_vm.invoice.payment_status))])])]), _vm._v(" "), _c("a", {
    staticClass: "pc-btn-primary",
    attrs: {
      href: "/api/portal/invoices/".concat(_vm.invoice.id, "/pdf"),
      target: "_blank",
      rel: "noopener"
    }
  }, [_c("svg", {
    attrs: {
      viewBox: "0 0 24 24",
      width: "16",
      height: "16",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }, [_c("path", {
    attrs: {
      d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"
    }
  }), _c("path", {
    attrs: {
      d: "M7 10l5 5 5-5"
    }
  }), _c("path", {
    attrs: {
      d: "M12 15V3"
    }
  })]), _vm._v("\n        Download PDF\n      ")])]), _vm._v(" "), _c("div", {
    staticClass: "pc-detail-stats"
  }, [_c("div", {
    staticClass: "pc-detail-stat"
  }, [_c("span", {
    staticClass: "pc-detail-stat-label"
  }, [_vm._v("Total")]), _vm._v(" "), _c("span", {
    staticClass: "pc-detail-stat-value"
  }, [_vm._v(_vm._s(_vm.formatMoney(_vm.invoice.GrandTotal)))])]), _vm._v(" "), _c("div", {
    staticClass: "pc-detail-stat"
  }, [_c("span", {
    staticClass: "pc-detail-stat-label"
  }, [_vm._v("Paid")]), _vm._v(" "), _c("span", {
    staticClass: "pc-detail-stat-value pc-amount-pos"
  }, [_vm._v(_vm._s(_vm.formatMoney(_vm.invoice.paid_amount)))])]), _vm._v(" "), _c("div", {
    staticClass: "pc-detail-stat pc-detail-stat-due",
    "class": {
      "is-due": Number(_vm.invoice.due) > 0
    }
  }, [_c("span", {
    staticClass: "pc-detail-stat-label"
  }, [_vm._v("Due")]), _vm._v(" "), _c("span", {
    staticClass: "pc-detail-stat-value"
  }, [_vm._v(_vm._s(_vm.formatMoney(_vm.invoice.due)))])])]), _vm._v(" "), _c("div", {
    staticClass: "pc-detail-items"
  }, [_c("div", {
    staticClass: "pc-items-head"
  }, [_c("h2", {
    staticClass: "pc-items-title"
  }, [_vm._v("Items")]), _vm._v(" "), _c("span", {
    staticClass: "pc-items-count"
  }, [_vm._v(_vm._s((_vm.invoice.details || []).length) + " item" + _vm._s((_vm.invoice.details || []).length === 1 ? "" : "s"))])]), _vm._v(" "), _c("div", {
    staticClass: "pc-table-wrap pc-hide-mobile"
  }, [_c("table", {
    staticClass: "pc-table"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", _vm._l(_vm.invoice.details, function (line, i) {
    return _c("tr", {
      key: i
    }, [_c("td", [_vm._v(_vm._s(line.product_name))]), _vm._v(" "), _c("td", {
      staticClass: "pc-num"
    }, [_vm._v(_vm._s(line.quantity))]), _vm._v(" "), _c("td", {
      staticClass: "pc-num"
    }, [_vm._v(_vm._s(_vm.formatMoney(line.price)))]), _vm._v(" "), _c("td", {
      staticClass: "pc-num"
    }, [_vm._v(_vm._s(_vm.formatMoney(line.DiscountNet)))]), _vm._v(" "), _c("td", {
      staticClass: "pc-num"
    }, [_vm._v(_vm._s(_vm.formatMoney(line.taxe)))]), _vm._v(" "), _c("td", {
      staticClass: "pc-num pc-total-cell"
    }, [_vm._v(_vm._s(_vm.formatMoney(line.total)))])]);
  }), 0)])]), _vm._v(" "), _c("ul", {
    staticClass: "pc-item-list pc-show-mobile"
  }, _vm._l(_vm.invoice.details, function (line, i) {
    return _c("li", {
      key: "m-" + i,
      staticClass: "pc-item-card"
    }, [_c("div", {
      staticClass: "pc-item-top"
    }, [_c("strong", {
      staticClass: "pc-item-name"
    }, [_vm._v(_vm._s(line.product_name))]), _vm._v(" "), _c("span", {
      staticClass: "pc-item-total"
    }, [_vm._v(_vm._s(_vm.formatMoney(line.total)))])]), _vm._v(" "), _c("div", {
      staticClass: "pc-item-sub"
    }, [_c("span", [_vm._v(_vm._s(line.quantity) + " × " + _vm._s(_vm.formatMoney(line.price)))])]), _vm._v(" "), Number(line.DiscountNet) > 0 || Number(line.taxe) > 0 ? _c("div", {
      staticClass: "pc-item-sub pc-item-sub-extras"
    }, [Number(line.DiscountNet) > 0 ? _c("span", {
      staticClass: "pc-item-discount"
    }, [_vm._v("Discount " + _vm._s(_vm.formatMoney(line.DiscountNet)))]) : _vm._e(), _vm._v(" "), Number(line.taxe) > 0 ? _c("span", [_vm._v("Tax " + _vm._s(_vm.formatMoney(line.taxe)))]) : _vm._e()]) : _vm._e()]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "pc-totals"
  }, [_c("div", {
    staticClass: "pc-totals-row"
  }, [_c("span", [_vm._v("Subtotal")]), _vm._v(" "), _c("strong", [_vm._v(_vm._s(_vm.formatMoney(_vm.invoice.subtotal != null ? _vm.invoice.subtotal : _vm.invoice.GrandTotal)))])]), _vm._v(" "), Number(_vm.invoice.TaxNet) > 0 ? _c("div", {
    staticClass: "pc-totals-row"
  }, [_c("span", [_vm._v("Order Tax")]), _vm._v(" "), _c("strong", [_vm._v(_vm._s(_vm.formatMoney(_vm.invoice.TaxNet)))])]) : _vm._e(), _vm._v(" "), Number(_vm.invoice.discount) > 0 ? _c("div", {
    staticClass: "pc-totals-row"
  }, [_c("span", [_vm._v("Discount")]), _vm._v(" "), _c("strong", {
    staticClass: "pc-amount-neg"
  }, [String(_vm.invoice.discount_Method || "2") === "1" ? [_vm._v("\n            − " + _vm._s(Number(_vm.invoice.discount).toFixed(2)) + "%\n          ")] : [_vm._v("\n            − " + _vm._s(_vm.formatMoney(_vm.invoice.discount)) + "\n          ")]], 2)]) : _vm._e(), _vm._v(" "), Number(_vm.invoice.discount_from_points) > 0 ? _c("div", {
    staticClass: "pc-totals-row"
  }, [_c("span", [_vm._v("Discount from Points")]), _vm._v(" "), _c("strong", {
    staticClass: "pc-amount-neg"
  }, [_vm._v("− " + _vm._s(_vm.formatMoney(_vm.invoice.discount_from_points)))])]) : _vm._e(), _vm._v(" "), Number(_vm.invoice.shipping) > 0 ? _c("div", {
    staticClass: "pc-totals-row"
  }, [_c("span", [_vm._v("Shipping")]), _vm._v(" "), _c("strong", [_vm._v(_vm._s(_vm.formatMoney(_vm.invoice.shipping)))])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "pc-totals-row pc-totals-grand"
  }, [_c("span", [_vm._v("Total")]), _vm._v(" "), _c("strong", [_vm._v(_vm._s(_vm.formatMoney(_vm.invoice.GrandTotal)))])]), _vm._v(" "), _c("div", {
    staticClass: "pc-totals-row"
  }, [_c("span", [_vm._v("Paid")]), _vm._v(" "), _c("strong", {
    staticClass: "pc-amount-pos"
  }, [_vm._v(_vm._s(_vm.formatMoney(_vm.invoice.paid_amount)))])]), _vm._v(" "), _c("div", {
    staticClass: "pc-totals-row pc-totals-due"
  }, [_c("span", [_vm._v("Amount due")]), _vm._v(" "), _c("strong", [_vm._v(_vm._s(_vm.formatMoney(_vm.invoice.due)))])])])]) : _c("div", {
    staticClass: "pc-empty"
  }, [_c("div", {
    staticClass: "pc-empty-icon"
  }, [_vm._v("⚠️")]), _vm._v(" "), _c("p", [_vm._v("Invoice not found")])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Product")]), _vm._v(" "), _c("th", {
    staticClass: "pc-num"
  }, [_vm._v("Qty")]), _vm._v(" "), _c("th", {
    staticClass: "pc-num"
  }, [_vm._v("Price")]), _vm._v(" "), _c("th", {
    staticClass: "pc-num"
  }, [_vm._v("Discount")]), _vm._v(" "), _c("th", {
    staticClass: "pc-num"
  }, [_vm._v("Tax")]), _vm._v(" "), _c("th", {
    staticClass: "pc-num"
  }, [_vm._v("Total")])])]);
}];
render._withStripped = true;


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/InvoiceDetail.vue?vue&type=style&index=0&id=4aa2bbfd&scoped=true&lang=css"
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/InvoiceDetail.vue?vue&type=style&index=0&id=4aa2bbfd&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.portal-invoice-detail[data-v-4aa2bbfd] { padding-bottom: 1rem;\n}\n.pc-back[data-v-4aa2bbfd] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  margin-bottom: 1.1rem;\n  color: var(--pc-text-muted);\n  text-decoration: none;\n  font-size: 0.9rem;\n  transition: color 0.15s;\n}\n.pc-back[data-v-4aa2bbfd]:hover { color: var(--pc-text);\n}\n.pc-inline-loading[data-v-4aa2bbfd] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 3rem;\n  color: var(--pc-text-muted);\n}\n.pc-spinner[data-v-4aa2bbfd] {\n  width: 28px; height: 28px;\n  border: 2px solid rgba(79, 70, 229, 0.15);\n  border-top-color: var(--pc-primary);\n  border-radius: 50%;\n  animation: pc-spin-4aa2bbfd 0.7s linear infinite;\n}\n@keyframes pc-spin-4aa2bbfd {\nto { transform: rotate(360deg);\n}\n}\n.pc-empty[data-v-4aa2bbfd] { padding: 3rem; text-align: center; color: var(--pc-text-soft);\n}\n.pc-empty-icon[data-v-4aa2bbfd] { font-size: 2.5rem; opacity: 0.7; margin-bottom: 0.5rem;\n}\n.pc-empty p[data-v-4aa2bbfd] { margin: 0;\n}\n.pc-detail[data-v-4aa2bbfd] {\n  background: var(--pc-surface);\n  border: 1px solid var(--pc-border);\n  border-radius: var(--pc-radius);\n  box-shadow: var(--pc-shadow-sm);\n  overflow: hidden;\n}\n.pc-detail-head[data-v-4aa2bbfd] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  gap: 1rem;\n  padding: 1.4rem 1.5rem;\n  background: linear-gradient(180deg, var(--pc-surface) 0%, var(--pc-surface-alt) 100%);\n  border-bottom: 1px solid var(--pc-border);\n}\n.pc-eyebrow[data-v-4aa2bbfd] {\n  font-size: 0.72rem;\n  color: var(--pc-text-soft);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  font-weight: 600;\n}\n.pc-detail-title[data-v-4aa2bbfd] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--pc-text);\n  margin: 0.2rem 0 0.5rem;\n  letter-spacing: -0.01em;\n}\n.pc-detail-meta[data-v-4aa2bbfd] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.88rem;\n  color: var(--pc-text-muted);\n  flex-wrap: wrap;\n}\n.pc-btn-primary[data-v-4aa2bbfd] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.6rem 1rem;\n  background: var(--pc-primary);\n  color: #fff;\n  border-radius: 10px;\n  text-decoration: none;\n  font-size: 0.9rem;\n  font-weight: 500;\n  transition: background 0.15s, transform 0.15s, box-shadow 0.15s;\n  box-shadow: 0 4px 10px -4px rgba(79, 70, 229, 0.5);\n}\n.pc-btn-primary[data-v-4aa2bbfd]:hover { background: var(--pc-primary-600); transform: translateY(-1px);\n}\n.pc-badge[data-v-4aa2bbfd] {\n  display: inline-block;\n  padding: 0.22rem 0.55rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.pc-badge-paid[data-v-4aa2bbfd] { background: var(--pc-success-bg); color: var(--pc-success);\n}\n.pc-badge-pending[data-v-4aa2bbfd], .pc-badge-unpaid[data-v-4aa2bbfd] { background: var(--pc-warning-bg); color: var(--pc-warning);\n}\n.pc-badge-partial[data-v-4aa2bbfd] { background: #dbeafe; color: #1d4ed8;\n}\n\n/* Stats */\n.pc-detail-stats[data-v-4aa2bbfd] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1px;\n  background: var(--pc-border);\n}\n.pc-detail-stat[data-v-4aa2bbfd] {\n  padding: 1rem 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  background: var(--pc-surface);\n}\n.pc-detail-stat-label[data-v-4aa2bbfd] {\n  font-size: 0.74rem;\n  color: var(--pc-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  font-weight: 600;\n}\n.pc-detail-stat-value[data-v-4aa2bbfd] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--pc-text);\n  letter-spacing: -0.01em;\n}\n.pc-detail-stat-due.is-due .pc-detail-stat-value[data-v-4aa2bbfd] { color: var(--pc-danger);\n}\n.pc-amount-pos[data-v-4aa2bbfd] { color: var(--pc-success);\n}\n\n/* Items */\n.pc-detail-items[data-v-4aa2bbfd] { padding: 0.5rem 0 0.25rem;\n}\n.pc-items-head[data-v-4aa2bbfd] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1.5rem 0.75rem;\n}\n.pc-items-title[data-v-4aa2bbfd] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: var(--pc-text);\n  margin: 0;\n}\n.pc-items-count[data-v-4aa2bbfd] {\n  font-size: 0.8rem;\n  color: var(--pc-text-muted);\n  background: var(--pc-surface-alt);\n  padding: 0.2rem 0.55rem;\n  border-radius: 999px;\n}\n.pc-table-wrap[data-v-4aa2bbfd] { overflow-x: auto;\n}\n.pc-table[data-v-4aa2bbfd] { width: 100%; border-collapse: collapse; font-size: 0.88rem;\n}\n.pc-table th[data-v-4aa2bbfd], .pc-table td[data-v-4aa2bbfd] { padding: 0.7rem 1.5rem; text-align: left; border-top: 1px solid var(--pc-border);\n}\n.pc-table th[data-v-4aa2bbfd] {\n  background: var(--pc-surface-alt);\n  font-weight: 600;\n  color: var(--pc-text-muted);\n  font-size: 0.73rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.pc-num[data-v-4aa2bbfd] { text-align: right;\n}\n.pc-total-cell[data-v-4aa2bbfd] { font-weight: 600; color: var(--pc-text);\n}\n\n/* Item cards (mobile) */\n.pc-item-list[data-v-4aa2bbfd] { list-style: none; margin: 0; padding: 0;\n}\n.pc-item-card[data-v-4aa2bbfd] {\n  padding: 0.85rem 1.25rem;\n  border-top: 1px solid var(--pc-border);\n}\n.pc-item-top[data-v-4aa2bbfd] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.25rem;\n}\n.pc-item-name[data-v-4aa2bbfd] { font-weight: 500; font-size: 0.92rem; color: var(--pc-text);\n}\n.pc-item-total[data-v-4aa2bbfd] { font-weight: 700; font-size: 0.95rem; color: var(--pc-text);\n}\n.pc-item-sub[data-v-4aa2bbfd] { font-size: 0.82rem; color: var(--pc-text-muted);\n}\n\n/* Totals */\n.pc-totals[data-v-4aa2bbfd] {\n  margin-top: 0.5rem;\n  padding: 1rem 1.5rem 1.25rem;\n  background: var(--pc-surface-alt);\n  border-top: 1px solid var(--pc-border);\n}\n.pc-totals-row[data-v-4aa2bbfd] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.35rem 0;\n  font-size: 0.92rem;\n  max-width: 320px;\n  margin-left: auto;\n}\n.pc-totals-row span[data-v-4aa2bbfd] { color: var(--pc-text-muted);\n}\n.pc-totals-row strong[data-v-4aa2bbfd] { font-weight: 600; color: var(--pc-text);\n}\n.pc-amount-neg[data-v-4aa2bbfd] { color: var(--pc-danger);\n}\n.pc-totals-grand[data-v-4aa2bbfd] {\n  margin-top: 0.35rem;\n  padding-top: 0.6rem;\n  border-top: 1px solid var(--pc-border);\n  font-size: 1rem;\n}\n.pc-totals-grand span[data-v-4aa2bbfd] { color: var(--pc-text); font-weight: 600;\n}\n.pc-totals-grand strong[data-v-4aa2bbfd] { font-size: 1.05rem;\n}\n.pc-totals-due[data-v-4aa2bbfd] {\n  margin-top: 0.35rem;\n  padding-top: 0.75rem;\n  border-top: 2px solid var(--pc-border);\n  font-size: 1.05rem;\n}\n.pc-totals-due span[data-v-4aa2bbfd] { color: var(--pc-text); font-weight: 500;\n}\n.pc-totals-due strong[data-v-4aa2bbfd] { color: var(--pc-danger); font-size: 1.15rem;\n}\n.pc-item-sub-extras[data-v-4aa2bbfd] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n  margin-top: 0.25rem;\n}\n.pc-item-sub-extras .pc-item-discount[data-v-4aa2bbfd] { color: var(--pc-danger);\n}\n.pc-show-mobile[data-v-4aa2bbfd] { display: none;\n}\n.pc-hide-mobile[data-v-4aa2bbfd] { display: block;\n}\n@media (max-width: 768px) {\n.pc-detail-head[data-v-4aa2bbfd] { padding: 1.15rem 1.15rem;\n}\n.pc-detail-title[data-v-4aa2bbfd] { font-size: 1.25rem;\n}\n.pc-detail-stats[data-v-4aa2bbfd] { grid-template-columns: 1fr;\n}\n.pc-detail-stat[data-v-4aa2bbfd] { padding: 0.85rem 1.15rem; flex-direction: row; align-items: center; justify-content: space-between; gap: 0.5rem;\n}\n.pc-detail-stat-value[data-v-4aa2bbfd] { font-size: 1.05rem;\n}\n.pc-items-head[data-v-4aa2bbfd] { padding: 0.85rem 1.15rem 0.5rem;\n}\n.pc-totals[data-v-4aa2bbfd] { padding: 1rem 1.15rem;\n}\n.pc-totals-row[data-v-4aa2bbfd] { max-width: 100%;\n}\n.pc-show-mobile[data-v-4aa2bbfd] { display: block;\n}\n.pc-hide-mobile[data-v-4aa2bbfd] { display: none;\n}\n.pc-btn-primary[data-v-4aa2bbfd] { width: 100%; justify-content: center;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/InvoiceDetail.vue?vue&type=style&index=0&id=4aa2bbfd&scoped=true&lang=css"
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/InvoiceDetail.vue?vue&type=style&index=0&id=4aa2bbfd&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceDetail_vue_vue_type_style_index_0_id_4aa2bbfd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InvoiceDetail.vue?vue&type=style&index=0&id=4aa2bbfd&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/InvoiceDetail.vue?vue&type=style&index=0&id=4aa2bbfd&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceDetail_vue_vue_type_style_index_0_id_4aa2bbfd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceDetail_vue_vue_type_style_index_0_id_4aa2bbfd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ },

/***/ "./resources/src/portal/views/InvoiceDetail.vue"
/*!******************************************************!*\
  !*** ./resources/src/portal/views/InvoiceDetail.vue ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InvoiceDetail_vue_vue_type_template_id_4aa2bbfd_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvoiceDetail.vue?vue&type=template&id=4aa2bbfd&scoped=true */ "./resources/src/portal/views/InvoiceDetail.vue?vue&type=template&id=4aa2bbfd&scoped=true");
/* harmony import */ var _InvoiceDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvoiceDetail.vue?vue&type=script&lang=js */ "./resources/src/portal/views/InvoiceDetail.vue?vue&type=script&lang=js");
/* harmony import */ var _InvoiceDetail_vue_vue_type_style_index_0_id_4aa2bbfd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InvoiceDetail.vue?vue&type=style&index=0&id=4aa2bbfd&scoped=true&lang=css */ "./resources/src/portal/views/InvoiceDetail.vue?vue&type=style&index=0&id=4aa2bbfd&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _InvoiceDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _InvoiceDetail_vue_vue_type_template_id_4aa2bbfd_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _InvoiceDetail_vue_vue_type_template_id_4aa2bbfd_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4aa2bbfd",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/portal/views/InvoiceDetail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/portal/views/InvoiceDetail.vue?vue&type=script&lang=js"
/*!******************************************************************************!*\
  !*** ./resources/src/portal/views/InvoiceDetail.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InvoiceDetail.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/InvoiceDetail.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/portal/views/InvoiceDetail.vue?vue&type=template&id=4aa2bbfd&scoped=true"
/*!************************************************************************************************!*\
  !*** ./resources/src/portal/views/InvoiceDetail.vue?vue&type=template&id=4aa2bbfd&scoped=true ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceDetail_vue_vue_type_template_id_4aa2bbfd_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceDetail_vue_vue_type_template_id_4aa2bbfd_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceDetail_vue_vue_type_template_id_4aa2bbfd_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InvoiceDetail.vue?vue&type=template&id=4aa2bbfd&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/InvoiceDetail.vue?vue&type=template&id=4aa2bbfd&scoped=true");


/***/ },

/***/ "./resources/src/portal/views/InvoiceDetail.vue?vue&type=style&index=0&id=4aa2bbfd&scoped=true&lang=css"
/*!**************************************************************************************************************!*\
  !*** ./resources/src/portal/views/InvoiceDetail.vue?vue&type=style&index=0&id=4aa2bbfd&scoped=true&lang=css ***!
  \**************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceDetail_vue_vue_type_style_index_0_id_4aa2bbfd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InvoiceDetail.vue?vue&type=style&index=0&id=4aa2bbfd&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/InvoiceDetail.vue?vue&type=style&index=0&id=4aa2bbfd&scoped=true&lang=css");


/***/ }

}]);