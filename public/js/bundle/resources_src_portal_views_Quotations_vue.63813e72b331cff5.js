"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_portal_views_Quotations_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Quotations.vue?vue&type=script&lang=js"
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Quotations.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
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
      quotations: [],
      search: '',
      page: 1,
      pageSize: 10,
      totalRows: 0,
      loading: false,
      debounce: null
    };
  },
  computed: {
    totalPages: function totalPages() {
      return Math.ceil(this.totalRows / this.pageSize) || 1;
    }
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
              _this.loading = true;
              _context.p = 1;
              _context.n = 2;
              return axios.get('/portal/quotations', {
                params: {
                  page: _this.page,
                  limit: _this.pageSize,
                  search: _this.search || undefined
                }
              });
            case 2:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.quotations = data.quotations || [];
              _this.totalRows = data.totalRows || 0;
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
            case 4:
              _this.loading = false;
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3]]);
      }))();
    },
    debounceFetch: function debounceFetch() {
      var _this2 = this;
      clearTimeout(this.debounce);
      this.debounce = setTimeout(function () {
        _this2.page = 1;
        _this2.fetch();
      }, 300);
    },
    formatMoney: function formatMoney(n) {
      if (n == null) return '0.00';
      return Number(n).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    },
    badgeClass: function badgeClass(s) {
      var v = (s || '').toLowerCase();
      if (v === 'approved' || v === 'accepted' || v === 'completed') return 'paid';
      if (v === 'pending' || v === 'requested') return 'pending';
      if (v === 'rejected' || v === 'cancelled') return 'partial';
      return 'pending';
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Quotations.vue?vue&type=template&id=1f2c7258&scoped=true"
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Quotations.vue?vue&type=template&id=1f2c7258&scoped=true ***!
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
    staticClass: "portal-page portal-quotations"
  }, [_c("header", {
    staticClass: "pc-page-header"
  }, [_vm._m(0), _vm._v(" "), _c("router-link", {
    staticClass: "pc-btn pc-btn-primary",
    attrs: {
      to: "/quotations/new"
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
      d: "M12 5v14M5 12h14"
    }
  })]), _vm._v("\n      Request quotation\n    ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "pc-card"
  }, [_c("div", {
    staticClass: "pc-toolbar"
  }, [_c("div", {
    staticClass: "pc-search"
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
  }, [_c("circle", {
    attrs: {
      cx: "11",
      cy: "11",
      r: "7"
    }
  }), _c("path", {
    attrs: {
      d: "M21 21l-4.3-4.3"
    }
  })]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search,
      expression: "search"
    }],
    attrs: {
      type: "text",
      placeholder: "Search by ref or status..."
    },
    domProps: {
      value: _vm.search
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.search = $event.target.value;
      }, _vm.debounceFetch]
    }
  })])]), _vm._v(" "), _vm.loading ? _c("div", {
    staticClass: "pc-inline-loading"
  }, [_c("div", {
    staticClass: "pc-spinner"
  }), _c("span", [_vm._v("Loading quotations...")])]) : [!_vm.quotations.length ? _c("div", {
    staticClass: "pc-empty"
  }, [_c("div", {
    staticClass: "pc-empty-icon"
  }, [_vm._v("📝")]), _vm._v(" "), _c("p", [_vm._v("No quotations yet")])]) : _c("div", {
    staticClass: "pc-table-wrap pc-hide-mobile"
  }, [_c("table", {
    staticClass: "pc-table"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", _vm._l(_vm.quotations, function (q) {
    return _c("tr", {
      key: q.id
    }, [_c("td", [_c("router-link", {
      staticClass: "pc-link",
      attrs: {
        to: "/quotations/".concat(q.id)
      }
    }, [_vm._v(_vm._s(q.Ref))])], 1), _vm._v(" "), _c("td", [_vm._v(_vm._s(q.date))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatMoney(q.GrandTotal)))]), _vm._v(" "), _c("td", [_c("span", {
      "class": "pc-badge pc-badge-" + _vm.badgeClass(q.statut)
    }, [_vm._v(_vm._s(q.statut))])]), _vm._v(" "), _c("td", [_c("router-link", {
      staticClass: "pc-chip",
      attrs: {
        to: "/quotations/".concat(q.id)
      }
    }, [_vm._v("View")])], 1)]);
  }), 0)])]), _vm._v(" "), _vm.quotations.length ? _c("ul", {
    staticClass: "pc-mobile-list pc-show-mobile"
  }, _vm._l(_vm.quotations, function (q) {
    return _c("li", {
      key: "m-" + q.id,
      staticClass: "pc-mobile-row"
    }, [_c("router-link", {
      staticClass: "pc-mobile-row-main",
      attrs: {
        to: "/quotations/".concat(q.id)
      }
    }, [_c("div", {
      staticClass: "pc-mobile-top"
    }, [_c("strong", {
      staticClass: "pc-mobile-ref"
    }, [_vm._v(_vm._s(q.Ref))]), _vm._v(" "), _c("span", {
      "class": "pc-badge pc-badge-" + _vm.badgeClass(q.statut)
    }, [_vm._v(_vm._s(q.statut))])]), _vm._v(" "), _c("div", {
      staticClass: "pc-mobile-mid"
    }, [_c("span", {
      staticClass: "pc-mobile-muted"
    }, [_vm._v(_vm._s(q.date))]), _vm._v(" "), _c("span", {
      staticClass: "pc-mobile-amount"
    }, [_vm._v(_vm._s(_vm.formatMoney(q.GrandTotal)))])])])], 1);
  }), 0) : _vm._e(), _vm._v(" "), _vm.totalRows > _vm.pageSize ? _c("div", {
    staticClass: "pc-pagination"
  }, [_c("button", {
    staticClass: "pc-pg-btn",
    attrs: {
      type: "button",
      disabled: _vm.page <= 1
    },
    on: {
      click: function click($event) {
        _vm.page--;
        _vm.fetch();
      }
    }
  }, [_vm._v("Previous")]), _vm._v(" "), _c("span", {
    staticClass: "pc-pg-info"
  }, [_vm._v("Page " + _vm._s(_vm.page) + " of " + _vm._s(_vm.totalPages))]), _vm._v(" "), _c("button", {
    staticClass: "pc-pg-btn",
    attrs: {
      type: "button",
      disabled: _vm.page >= _vm.totalPages
    },
    on: {
      click: function click($event) {
        _vm.page++;
        _vm.fetch();
      }
    }
  }, [_vm._v("Next")])]) : _vm._e()]], 2)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("h1", {
    staticClass: "pc-page-title"
  }, [_vm._v("Quotations")]), _vm._v(" "), _c("p", {
    staticClass: "pc-page-sub"
  }, [_vm._v("Browse your quotations and submit new requests")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Ref")]), _c("th", [_vm._v("Date")]), _c("th", [_vm._v("Total")]), _c("th", [_vm._v("Status")]), _c("th")])]);
}];
render._withStripped = true;


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Quotations.vue?vue&type=style&index=0&id=1f2c7258&scoped=true&lang=css"
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Quotations.vue?vue&type=style&index=0&id=1f2c7258&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.portal-quotations[data-v-1f2c7258] { padding-bottom: 1rem;\n}\n.pc-page-header[data-v-1f2c7258] { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; gap: 1rem; flex-wrap: wrap;\n}\n.pc-page-title[data-v-1f2c7258] { font-size: 1.5rem; font-weight: 700; color: var(--pc-text); margin: 0 0 0.2rem; letter-spacing: -0.01em;\n}\n.pc-page-sub[data-v-1f2c7258] { font-size: 0.9rem; color: var(--pc-text-muted); margin: 0;\n}\n.pc-btn[data-v-1f2c7258] { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.55rem 0.95rem; border-radius: 10px; font-size: 0.88rem; font-weight: 600; text-decoration: none; border: 1px solid transparent; cursor: pointer; transition: background 0.15s, border-color 0.15s, color 0.15s;\n}\n.pc-btn-primary[data-v-1f2c7258] { background: var(--pc-primary); color: #fff;\n}\n.pc-btn-primary[data-v-1f2c7258]:hover { background: var(--pc-primary-600);\n}\n.pc-card[data-v-1f2c7258] { background: var(--pc-surface); border: 1px solid var(--pc-border); border-radius: var(--pc-radius); box-shadow: var(--pc-shadow-sm); overflow: hidden;\n}\n.pc-toolbar[data-v-1f2c7258] { padding: 0.9rem 1.15rem; border-bottom: 1px solid var(--pc-border);\n}\n.pc-search[data-v-1f2c7258] { position: relative; display: flex; align-items: center;\n}\n.pc-search svg[data-v-1f2c7258] { position: absolute; left: 0.85rem; color: var(--pc-text-soft); pointer-events: none;\n}\n.pc-search input[data-v-1f2c7258] { width: 100%; padding: 0.6rem 1rem 0.6rem 2.3rem; border: 1px solid var(--pc-border-strong); border-radius: 10px; font-size: 0.92rem; background: var(--pc-surface-alt); box-sizing: border-box;\n}\n.pc-search input[data-v-1f2c7258]:focus { outline: none; background: var(--pc-surface); border-color: var(--pc-primary); box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);\n}\n.pc-inline-loading[data-v-1f2c7258] { display: flex; align-items: center; justify-content: center; gap: 0.75rem; padding: 3rem; color: var(--pc-text-muted);\n}\n.pc-spinner[data-v-1f2c7258] { width: 28px; height: 28px; border: 2px solid rgba(79, 70, 229, 0.15); border-top-color: var(--pc-primary); border-radius: 50%; animation: pc-spin-1f2c7258 0.7s linear infinite;\n}\n@keyframes pc-spin-1f2c7258 {\nto { transform: rotate(360deg);\n}\n}\n.pc-empty[data-v-1f2c7258] { padding: 3rem 1rem; text-align: center; color: var(--pc-text-soft);\n}\n.pc-empty-icon[data-v-1f2c7258] { font-size: 2.5rem; opacity: 0.7; margin-bottom: 0.5rem;\n}\n.pc-empty p[data-v-1f2c7258] { margin: 0;\n}\n.pc-table-wrap[data-v-1f2c7258] { overflow-x: auto;\n}\n.pc-table[data-v-1f2c7258] { width: 100%; border-collapse: collapse; font-size: 0.88rem;\n}\n.pc-table th[data-v-1f2c7258], .pc-table td[data-v-1f2c7258] { padding: 0.7rem 1.15rem; text-align: left; border-bottom: 1px solid var(--pc-border);\n}\n.pc-table th[data-v-1f2c7258] { background: var(--pc-surface-alt); font-weight: 600; color: var(--pc-text-muted); font-size: 0.73rem; text-transform: uppercase; letter-spacing: 0.04em;\n}\n.pc-table tbody tr:last-child td[data-v-1f2c7258] { border-bottom: none;\n}\n.pc-table tbody tr[data-v-1f2c7258]:hover { background: var(--pc-surface-alt);\n}\n.pc-link[data-v-1f2c7258] { color: var(--pc-primary); text-decoration: none; font-weight: 500;\n}\n.pc-link[data-v-1f2c7258]:hover { text-decoration: underline;\n}\n.pc-chip[data-v-1f2c7258] { display: inline-flex; align-items: center; padding: 0.25rem 0.6rem; border: 1px solid var(--pc-border-strong); border-radius: 6px; font-size: 0.75rem; font-weight: 500; color: var(--pc-text-muted); text-decoration: none; background: #fff;\n}\n.pc-chip[data-v-1f2c7258]:hover { border-color: var(--pc-primary); color: var(--pc-primary);\n}\n.pc-badge[data-v-1f2c7258] { display: inline-block; padding: 0.22rem 0.55rem; border-radius: 999px; font-size: 0.72rem; font-weight: 600; text-transform: capitalize;\n}\n.pc-badge-paid[data-v-1f2c7258] { background: var(--pc-success-bg); color: var(--pc-success);\n}\n.pc-badge-pending[data-v-1f2c7258] { background: var(--pc-warning-bg); color: var(--pc-warning);\n}\n.pc-badge-partial[data-v-1f2c7258] { background: #fee2e2; color: #b91c1c;\n}\n.pc-mobile-list[data-v-1f2c7258] { list-style: none; margin: 0; padding: 0;\n}\n.pc-mobile-row[data-v-1f2c7258] { border-bottom: 1px solid var(--pc-border);\n}\n.pc-mobile-row-main[data-v-1f2c7258] { display: block; padding: 0.95rem 1.15rem; text-decoration: none; color: var(--pc-text);\n}\n.pc-mobile-top[data-v-1f2c7258] { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem; gap: 0.5rem;\n}\n.pc-mobile-ref[data-v-1f2c7258] { font-weight: 600; font-size: 0.95rem;\n}\n.pc-mobile-mid[data-v-1f2c7258] { display: flex; justify-content: space-between; align-items: center; font-size: 0.88rem;\n}\n.pc-mobile-muted[data-v-1f2c7258] { color: var(--pc-text-muted);\n}\n.pc-mobile-amount[data-v-1f2c7258] { font-weight: 600; font-size: 0.98rem;\n}\n.pc-pagination[data-v-1f2c7258] { display: flex; align-items: center; justify-content: center; gap: 1rem; padding: 0.85rem 1.15rem; border-top: 1px solid var(--pc-border); background: var(--pc-surface-alt);\n}\n.pc-pg-btn[data-v-1f2c7258] { padding: 0.5rem 1rem; background: var(--pc-surface); border: 1px solid var(--pc-border-strong); border-radius: 8px; font-size: 0.88rem; font-weight: 500; color: var(--pc-text); cursor: pointer;\n}\n.pc-pg-btn[data-v-1f2c7258]:disabled { opacity: 0.45; cursor: not-allowed;\n}\n.pc-pg-info[data-v-1f2c7258] { font-size: 0.85rem; color: var(--pc-text-muted);\n}\n.pc-show-mobile[data-v-1f2c7258] { display: none;\n}\n.pc-hide-mobile[data-v-1f2c7258] { display: block;\n}\n@media (max-width: 768px) {\n.pc-page-title[data-v-1f2c7258] { font-size: 1.3rem;\n}\n.pc-show-mobile[data-v-1f2c7258] { display: block;\n}\n.pc-hide-mobile[data-v-1f2c7258] { display: none;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Quotations.vue?vue&type=style&index=0&id=1f2c7258&scoped=true&lang=css"
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Quotations.vue?vue&type=style&index=0&id=1f2c7258&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Quotations_vue_vue_type_style_index_0_id_1f2c7258_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Quotations.vue?vue&type=style&index=0&id=1f2c7258&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Quotations.vue?vue&type=style&index=0&id=1f2c7258&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Quotations_vue_vue_type_style_index_0_id_1f2c7258_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Quotations_vue_vue_type_style_index_0_id_1f2c7258_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ },

/***/ "./resources/src/portal/views/Quotations.vue"
/*!***************************************************!*\
  !*** ./resources/src/portal/views/Quotations.vue ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Quotations_vue_vue_type_template_id_1f2c7258_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Quotations.vue?vue&type=template&id=1f2c7258&scoped=true */ "./resources/src/portal/views/Quotations.vue?vue&type=template&id=1f2c7258&scoped=true");
/* harmony import */ var _Quotations_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Quotations.vue?vue&type=script&lang=js */ "./resources/src/portal/views/Quotations.vue?vue&type=script&lang=js");
/* harmony import */ var _Quotations_vue_vue_type_style_index_0_id_1f2c7258_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Quotations.vue?vue&type=style&index=0&id=1f2c7258&scoped=true&lang=css */ "./resources/src/portal/views/Quotations.vue?vue&type=style&index=0&id=1f2c7258&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Quotations_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Quotations_vue_vue_type_template_id_1f2c7258_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Quotations_vue_vue_type_template_id_1f2c7258_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1f2c7258",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/portal/views/Quotations.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/portal/views/Quotations.vue?vue&type=script&lang=js"
/*!***************************************************************************!*\
  !*** ./resources/src/portal/views/Quotations.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Quotations_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Quotations.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Quotations.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Quotations_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/portal/views/Quotations.vue?vue&type=template&id=1f2c7258&scoped=true"
/*!*********************************************************************************************!*\
  !*** ./resources/src/portal/views/Quotations.vue?vue&type=template&id=1f2c7258&scoped=true ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Quotations_vue_vue_type_template_id_1f2c7258_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Quotations_vue_vue_type_template_id_1f2c7258_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Quotations_vue_vue_type_template_id_1f2c7258_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Quotations.vue?vue&type=template&id=1f2c7258&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Quotations.vue?vue&type=template&id=1f2c7258&scoped=true");


/***/ },

/***/ "./resources/src/portal/views/Quotations.vue?vue&type=style&index=0&id=1f2c7258&scoped=true&lang=css"
/*!***********************************************************************************************************!*\
  !*** ./resources/src/portal/views/Quotations.vue?vue&type=style&index=0&id=1f2c7258&scoped=true&lang=css ***!
  \***********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Quotations_vue_vue_type_style_index_0_id_1f2c7258_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Quotations.vue?vue&type=style&index=0&id=1f2c7258&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Quotations.vue?vue&type=style&index=0&id=1f2c7258&scoped=true&lang=css");


/***/ }

}]);