"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_portal_views_Statement_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Statement.vue?vue&type=script&lang=js"
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Statement.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
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
      data: null,
      fromDate: '',
      toDate: ''
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
              return axios.get('/portal/statement', {
                params: {
                  from_date: _this.fromDate || undefined,
                  to_date: _this.toDate || undefined
                }
              });
            case 1:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.data = data;
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              _this.data = null;
            case 3:
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
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Statement.vue?vue&type=template&id=be0ec2e4&scoped=true"
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Statement.vue?vue&type=template&id=be0ec2e4&scoped=true ***!
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
    staticClass: "portal-page portal-statement"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "pc-card"
  }, [_c("div", {
    staticClass: "pc-filters"
  }, [_c("div", {
    staticClass: "pc-filter"
  }, [_c("label", [_vm._v("From")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.fromDate,
      expression: "fromDate"
    }],
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.fromDate
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.fromDate = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "pc-filter"
  }, [_c("label", [_vm._v("To")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.toDate,
      expression: "toDate"
    }],
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.toDate
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.toDate = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("button", {
    staticClass: "pc-btn-primary",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.fetch
    }
  }, [_c("svg", {
    attrs: {
      viewBox: "0 0 24 24",
      width: "15",
      height: "15",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }, [_c("path", {
    attrs: {
      d: "M20 6L9 17l-5-5"
    }
  })]), _vm._v("\n        Apply\n      ")])]), _vm._v(" "), _vm.data ? _c("div", {
    staticClass: "pc-statement-body"
  }, [_c("div", {
    staticClass: "pc-summary"
  }, [_c("div", {
    staticClass: "pc-summary-card"
  }, [_c("span", {
    staticClass: "pc-summary-label"
  }, [_vm._v("Account")]), _vm._v(" "), _c("strong", {
    staticClass: "pc-summary-value"
  }, [_vm._v(_vm._s(_vm.data.client && _vm.data.client.name))])]), _vm._v(" "), _c("div", {
    staticClass: "pc-summary-card"
  }, [_c("span", {
    staticClass: "pc-summary-label"
  }, [_vm._v("Opening balance")]), _vm._v(" "), _c("strong", {
    staticClass: "pc-summary-value"
  }, [_vm._v(_vm._s(_vm.formatMoney(_vm.data.current_opening_balance != null ? _vm.data.current_opening_balance : _vm.data.opening_balance)))])]), _vm._v(" "), _c("div", {
    staticClass: "pc-summary-card pc-summary-card-highlight"
  }, [_c("span", {
    staticClass: "pc-summary-label"
  }, [_vm._v("Closing balance")]), _vm._v(" "), _c("strong", {
    staticClass: "pc-summary-value"
  }, [_vm._v(_vm._s(_vm.formatMoney(_vm.data.closing_balance)))])])]), _vm._v(" "), _c("div", {
    staticClass: "pc-table-wrap pc-hide-mobile"
  }, [_c("table", {
    staticClass: "pc-table"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_vm._l(_vm.data.entries, function (e, i) {
    return _c("tr", {
      key: i
    }, [_c("td", [_vm._v(_vm._s(e.date))]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "pc-type-pill"
    }, [_vm._v(_vm._s(e.type))])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(e.ref))]), _vm._v(" "), _c("td", {
      staticClass: "pc-desc"
    }, [_vm._v(_vm._s(e.description))]), _vm._v(" "), _c("td", {
      staticClass: "pc-num"
    }, [_vm._v(_vm._s(e.debit ? _vm.formatMoney(e.debit) : "—"))]), _vm._v(" "), _c("td", {
      staticClass: "pc-num pc-credit"
    }, [_vm._v(_vm._s(e.credit ? _vm.formatMoney(e.credit) : "—"))]), _vm._v(" "), _c("td", {
      staticClass: "pc-num pc-balance"
    }, [_vm._v(_vm._s(_vm.formatMoney(e.balance)))])]);
  }), _vm._v(" "), !(_vm.data.entries && _vm.data.entries.length) ? _c("tr", [_c("td", {
    staticClass: "pc-empty-cell",
    attrs: {
      colspan: "7"
    }
  }, [_vm._v("No entries in this period")])]) : _vm._e()], 2)])]), _vm._v(" "), _c("ul", {
    staticClass: "pc-entry-list pc-show-mobile"
  }, [_vm._l(_vm.data.entries, function (e, i) {
    return _c("li", {
      key: "m-" + i,
      staticClass: "pc-entry"
    }, [_c("div", {
      staticClass: "pc-entry-top"
    }, [_c("span", {
      staticClass: "pc-type-pill"
    }, [_vm._v(_vm._s(e.type))]), _vm._v(" "), _c("span", {
      staticClass: "pc-entry-date"
    }, [_vm._v(_vm._s(e.date))])]), _vm._v(" "), _c("div", {
      staticClass: "pc-entry-desc"
    }, [_vm._v(_vm._s(e.description || e.ref))]), _vm._v(" "), _c("div", {
      staticClass: "pc-entry-foot"
    }, [e.debit ? _c("span", {
      staticClass: "pc-debit"
    }, [_vm._v("−" + _vm._s(_vm.formatMoney(e.debit)))]) : _vm._e(), _vm._v(" "), e.credit ? _c("span", {
      staticClass: "pc-credit"
    }, [_vm._v("+" + _vm._s(_vm.formatMoney(e.credit)))]) : _vm._e(), _vm._v(" "), _c("span", {
      staticClass: "pc-balance-m"
    }, [_vm._v("Bal " + _vm._s(_vm.formatMoney(e.balance)))])])]);
  }), _vm._v(" "), !(_vm.data.entries && _vm.data.entries.length) ? _c("li", {
    staticClass: "pc-empty"
  }, [_c("div", {
    staticClass: "pc-empty-icon"
  }, [_vm._v("📊")]), _vm._v(" "), _c("p", [_vm._v("No entries in this period")])]) : _vm._e()], 2)]) : _c("div", {
    staticClass: "pc-empty"
  }, [_c("div", {
    staticClass: "pc-empty-icon"
  }, [_vm._v("📊")]), _vm._v(" "), _c("p", [_vm._v("Select date range and tap Apply to load your statement.")])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("header", {
    staticClass: "pc-page-header"
  }, [_c("div", [_c("h1", {
    staticClass: "pc-page-title"
  }, [_vm._v("Account Statement")]), _vm._v(" "), _c("p", {
    staticClass: "pc-page-sub"
  }, [_vm._v("Your account activity and balance")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Date")]), _vm._v(" "), _c("th", [_vm._v("Type")]), _vm._v(" "), _c("th", [_vm._v("Ref")]), _vm._v(" "), _c("th", [_vm._v("Description")]), _vm._v(" "), _c("th", {
    staticClass: "pc-num"
  }, [_vm._v("Debit")]), _vm._v(" "), _c("th", {
    staticClass: "pc-num"
  }, [_vm._v("Credit")]), _vm._v(" "), _c("th", {
    staticClass: "pc-num"
  }, [_vm._v("Balance")])])]);
}];
render._withStripped = true;


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Statement.vue?vue&type=style&index=0&id=be0ec2e4&scoped=true&lang=css"
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Statement.vue?vue&type=style&index=0&id=be0ec2e4&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.portal-statement[data-v-be0ec2e4] { padding-bottom: 1rem;\n}\n.pc-page-header[data-v-be0ec2e4] { margin-bottom: 1.25rem;\n}\n.pc-page-title[data-v-be0ec2e4] { font-size: 1.5rem; font-weight: 700; color: var(--pc-text); margin: 0 0 0.2rem; letter-spacing: -0.01em;\n}\n.pc-page-sub[data-v-be0ec2e4] { font-size: 0.9rem; color: var(--pc-text-muted); margin: 0;\n}\n.pc-card[data-v-be0ec2e4] {\n  background: var(--pc-surface);\n  border: 1px solid var(--pc-border);\n  border-radius: var(--pc-radius);\n  box-shadow: var(--pc-shadow-sm);\n  overflow: hidden;\n}\n.pc-filters[data-v-be0ec2e4] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  gap: 0.85rem;\n  padding: 1rem 1.15rem;\n  border-bottom: 1px solid var(--pc-border);\n  background: var(--pc-surface);\n}\n.pc-filter[data-v-be0ec2e4] { display: flex; flex-direction: column; gap: 0.3rem;\n}\n.pc-filter label[data-v-be0ec2e4] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: var(--pc-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.pc-filter input[data-v-be0ec2e4] {\n  padding: 0.55rem 0.85rem;\n  border: 1px solid var(--pc-border-strong);\n  border-radius: 10px;\n  font-size: 0.9rem;\n  background: var(--pc-surface);\n  color: var(--pc-text);\n  min-width: 150px;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.pc-filter input[data-v-be0ec2e4]:focus {\n  outline: none;\n  border-color: var(--pc-primary);\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);\n}\n.pc-btn-primary[data-v-be0ec2e4] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.6rem 1.1rem;\n  background: var(--pc-primary);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.15s, transform 0.15s;\n  box-shadow: 0 4px 10px -4px rgba(79, 70, 229, 0.5);\n}\n.pc-btn-primary[data-v-be0ec2e4]:hover { background: var(--pc-primary-600); transform: translateY(-1px);\n}\n.pc-statement-body[data-v-be0ec2e4] { padding: 1.15rem 1.15rem 1rem;\n}\n.pc-summary[data-v-be0ec2e4] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.75rem;\n  margin-bottom: 1.15rem;\n}\n.pc-summary-card[data-v-be0ec2e4] {\n  padding: 0.85rem 1rem;\n  background: var(--pc-surface-alt);\n  border: 1px solid var(--pc-border);\n  border-radius: var(--pc-radius-sm);\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.pc-summary-label[data-v-be0ec2e4] {\n  font-size: 0.72rem;\n  color: var(--pc-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  font-weight: 600;\n}\n.pc-summary-value[data-v-be0ec2e4] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--pc-text);\n  letter-spacing: -0.01em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.pc-summary-card-highlight[data-v-be0ec2e4] {\n  background: var(--pc-primary-50);\n  border-color: #c7d2fe;\n}\n.pc-summary-card-highlight .pc-summary-value[data-v-be0ec2e4] { color: var(--pc-primary-600);\n}\n.pc-table-wrap[data-v-be0ec2e4] { overflow-x: auto;\n}\n.pc-table[data-v-be0ec2e4] { width: 100%; border-collapse: collapse; font-size: 0.87rem;\n}\n.pc-table th[data-v-be0ec2e4], .pc-table td[data-v-be0ec2e4] { padding: 0.65rem 0.8rem; text-align: left; border-bottom: 1px solid var(--pc-border);\n}\n.pc-table th[data-v-be0ec2e4] {\n  background: var(--pc-surface-alt);\n  font-weight: 600;\n  color: var(--pc-text-muted);\n  font-size: 0.73rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.pc-table tbody tr:last-child td[data-v-be0ec2e4] { border-bottom: none;\n}\n.pc-num[data-v-be0ec2e4] { text-align: right;\n}\n.pc-credit[data-v-be0ec2e4] { color: var(--pc-success); font-weight: 500;\n}\n.pc-balance[data-v-be0ec2e4] { font-weight: 600; color: var(--pc-text);\n}\n.pc-desc[data-v-be0ec2e4] { color: var(--pc-text-muted);\n}\n.pc-empty-cell[data-v-be0ec2e4] { text-align: center !important; color: var(--pc-text-soft); padding: 1.5rem !important; font-style: italic;\n}\n.pc-type-pill[data-v-be0ec2e4] {\n  display: inline-block;\n  padding: 0.18rem 0.55rem;\n  border-radius: 999px;\n  background: var(--pc-primary-50);\n  color: var(--pc-primary);\n  font-size: 0.72rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n\n/* Mobile entry list */\n.pc-entry-list[data-v-be0ec2e4] { list-style: none; margin: 0; padding: 0;\n}\n.pc-entry[data-v-be0ec2e4] {\n  padding: 0.85rem 0;\n  border-bottom: 1px solid var(--pc-border);\n}\n.pc-entry[data-v-be0ec2e4]:last-child { border-bottom: none;\n}\n.pc-entry-top[data-v-be0ec2e4] {\n  display: flex; justify-content: space-between; align-items: center;\n  margin-bottom: 0.4rem;\n}\n.pc-entry-date[data-v-be0ec2e4] { font-size: 0.8rem; color: var(--pc-text-muted);\n}\n.pc-entry-desc[data-v-be0ec2e4] {\n  font-size: 0.92rem;\n  color: var(--pc-text);\n  margin-bottom: 0.4rem;\n  word-break: break-word;\n}\n.pc-entry-foot[data-v-be0ec2e4] {\n  display: flex; align-items: center; gap: 0.85rem; flex-wrap: wrap;\n  font-size: 0.85rem;\n}\n.pc-debit[data-v-be0ec2e4] { color: var(--pc-danger); font-weight: 600;\n}\n.pc-balance-m[data-v-be0ec2e4] {\n  margin-left: auto;\n  color: var(--pc-text-muted);\n  font-size: 0.82rem;\n  background: var(--pc-surface-alt);\n  padding: 0.18rem 0.6rem;\n  border-radius: 999px;\n  font-weight: 500;\n}\n.pc-empty[data-v-be0ec2e4] { padding: 2.5rem 1rem; text-align: center; color: var(--pc-text-soft);\n}\n.pc-empty-icon[data-v-be0ec2e4] { font-size: 2.25rem; opacity: 0.7; margin-bottom: 0.5rem;\n}\n.pc-empty p[data-v-be0ec2e4] { margin: 0; font-size: 0.9rem;\n}\n.pc-show-mobile[data-v-be0ec2e4] { display: none;\n}\n.pc-hide-mobile[data-v-be0ec2e4] { display: block;\n}\n@media (max-width: 768px) {\n.pc-page-title[data-v-be0ec2e4] { font-size: 1.3rem;\n}\n.pc-filters[data-v-be0ec2e4] { padding: 0.85rem;\n}\n.pc-filter input[data-v-be0ec2e4] { min-width: 130px; font-size: 0.85rem;\n}\n.pc-btn-primary[data-v-be0ec2e4] { margin-left: auto;\n}\n.pc-summary[data-v-be0ec2e4] { grid-template-columns: 1fr; gap: 0.6rem;\n}\n.pc-summary-card[data-v-be0ec2e4] { flex-direction: row; align-items: center; justify-content: space-between;\n}\n.pc-summary-label[data-v-be0ec2e4] { letter-spacing: 0.03em;\n}\n.pc-show-mobile[data-v-be0ec2e4] { display: block;\n}\n.pc-hide-mobile[data-v-be0ec2e4] { display: none;\n}\n.pc-statement-body[data-v-be0ec2e4] { padding: 1rem 1.15rem;\n}\n}\n@media (max-width: 480px) {\n.pc-filter[data-v-be0ec2e4] { flex: 1;\n}\n.pc-filter input[data-v-be0ec2e4] { min-width: 0; width: 100%;\n}\n.pc-btn-primary[data-v-be0ec2e4] { width: 100%; justify-content: center; margin-left: 0;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Statement.vue?vue&type=style&index=0&id=be0ec2e4&scoped=true&lang=css"
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Statement.vue?vue&type=style&index=0&id=be0ec2e4&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Statement_vue_vue_type_style_index_0_id_be0ec2e4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Statement.vue?vue&type=style&index=0&id=be0ec2e4&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Statement.vue?vue&type=style&index=0&id=be0ec2e4&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Statement_vue_vue_type_style_index_0_id_be0ec2e4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Statement_vue_vue_type_style_index_0_id_be0ec2e4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ },

/***/ "./resources/src/portal/views/Statement.vue"
/*!**************************************************!*\
  !*** ./resources/src/portal/views/Statement.vue ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Statement_vue_vue_type_template_id_be0ec2e4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Statement.vue?vue&type=template&id=be0ec2e4&scoped=true */ "./resources/src/portal/views/Statement.vue?vue&type=template&id=be0ec2e4&scoped=true");
/* harmony import */ var _Statement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Statement.vue?vue&type=script&lang=js */ "./resources/src/portal/views/Statement.vue?vue&type=script&lang=js");
/* harmony import */ var _Statement_vue_vue_type_style_index_0_id_be0ec2e4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Statement.vue?vue&type=style&index=0&id=be0ec2e4&scoped=true&lang=css */ "./resources/src/portal/views/Statement.vue?vue&type=style&index=0&id=be0ec2e4&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Statement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Statement_vue_vue_type_template_id_be0ec2e4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Statement_vue_vue_type_template_id_be0ec2e4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "be0ec2e4",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/portal/views/Statement.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/portal/views/Statement.vue?vue&type=script&lang=js"
/*!**************************************************************************!*\
  !*** ./resources/src/portal/views/Statement.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Statement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Statement.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Statement.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Statement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/portal/views/Statement.vue?vue&type=template&id=be0ec2e4&scoped=true"
/*!********************************************************************************************!*\
  !*** ./resources/src/portal/views/Statement.vue?vue&type=template&id=be0ec2e4&scoped=true ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Statement_vue_vue_type_template_id_be0ec2e4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Statement_vue_vue_type_template_id_be0ec2e4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Statement_vue_vue_type_template_id_be0ec2e4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Statement.vue?vue&type=template&id=be0ec2e4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Statement.vue?vue&type=template&id=be0ec2e4&scoped=true");


/***/ },

/***/ "./resources/src/portal/views/Statement.vue?vue&type=style&index=0&id=be0ec2e4&scoped=true&lang=css"
/*!**********************************************************************************************************!*\
  !*** ./resources/src/portal/views/Statement.vue?vue&type=style&index=0&id=be0ec2e4&scoped=true&lang=css ***!
  \**********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Statement_vue_vue_type_style_index_0_id_be0ec2e4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Statement.vue?vue&type=style&index=0&id=be0ec2e4&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Statement.vue?vue&type=style&index=0&id=be0ec2e4&scoped=true&lang=css");


/***/ }

}]);