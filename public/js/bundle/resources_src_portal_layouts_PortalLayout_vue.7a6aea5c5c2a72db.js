"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_portal_layouts_PortalLayout_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/layouts/PortalLayout.vue?vue&type=script&lang=js"
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/layouts/PortalLayout.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var ICONS = {
  home: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>',
  invoice: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h9l5 5v13a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z"/><path d="M14 3v6h6"/><path d="M9 14h6M9 18h4"/></svg>',
  payment: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="13" rx="2"/><path d="M2 11h20"/><path d="M6 15h4"/></svg>',
  statement: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/></svg>',
  quotation: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3 8-8"/><path d="M20 12v7a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h9"/></svg>',
  appointment: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  contract: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h4"/></svg>',
  help: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.1 9.1A3 3 0 0112 7a3 3 0 011 5.83V14"/><circle cx="12" cy="17.5" r="0.5" fill="currentColor"/></svg>',
  profile: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6"/></svg>'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      clientName: '',
      menuOpen: false,
      navItems: [{
        to: '/dashboard',
        label: 'Home',
        icon: ICONS.home
      }, {
        to: '/invoices',
        label: 'Invoices',
        icon: ICONS.invoice
      }, {
        to: '/quotations',
        label: 'Quotations',
        icon: ICONS.quotation
      }, {
        to: '/appointments',
        label: 'Appointments',
        icon: ICONS.appointment
      }, {
        to: '/contracts',
        label: 'Contracts',
        icon: ICONS.contract
      }, {
        to: '/payments',
        label: 'Payments',
        icon: ICONS.payment
      }, {
        to: '/statement',
        label: 'Statement',
        icon: ICONS.statement
      }, {
        to: '/help',
        label: 'Help',
        icon: ICONS.help
      }, {
        to: '/profile',
        label: 'Profile',
        icon: ICONS.profile
      }]
    };
  },
  computed: {
    initials: function initials() {
      var name = this.clientName || 'A';
      return name.split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) {
        return w.charAt(0).toUpperCase();
      }).join('') || 'A';
    },
    desktopNavItems: function desktopNavItems() {
      return this.navItems.filter(function (i) {
        return i.to !== '/profile';
      });
    }
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _yield$axios$get, data, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            document.addEventListener('click', _this.closeMenu);
            _context.p = 1;
            _context.n = 2;
            return axios.get('/portal/me');
          case 2:
            _yield$axios$get = _context.v;
            data = _yield$axios$get.data;
            _this.clientName = data && data.portal_client && data.portal_client.client && data.portal_client.client.name || 'Account';
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            _this.clientName = 'Account';
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }))();
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('click', this.closeMenu);
  },
  methods: {
    closeMenu: function closeMenu() {
      this.menuOpen = false;
    },
    logout: function logout() {
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return axios.post('/portal/logout');
            case 1:
              window.location.href = '/portal/login';
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/layouts/PortalLayout.vue?vue&type=template&id=44395e2c&scoped=true"
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/layouts/PortalLayout.vue?vue&type=template&id=44395e2c&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "portal-layout"
  }, [_c("header", {
    staticClass: "pc-header"
  }, [_c("div", {
    staticClass: "pc-header-inner"
  }, [_c("router-link", {
    staticClass: "pc-brand",
    attrs: {
      to: "/dashboard"
    }
  }, [_c("span", {
    staticClass: "pc-brand-mark"
  }, [_c("svg", {
    attrs: {
      viewBox: "0 0 24 24",
      width: "20",
      height: "20",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }, [_c("path", {
    attrs: {
      d: "M3 7h18M3 12h18M3 17h12"
    }
  })])]), _vm._v(" "), _c("span", {
    staticClass: "pc-brand-text"
  }, [_vm._v("Client Portal")])]), _vm._v(" "), _c("nav", {
    staticClass: "pc-nav pc-nav-desktop"
  }, _vm._l(_vm.desktopNavItems, function (item) {
    return _c("router-link", {
      key: item.to,
      staticClass: "pc-nav-link",
      attrs: {
        to: item.to
      }
    }, [_c("span", {
      staticClass: "pc-nav-icon",
      domProps: {
        innerHTML: _vm._s(item.icon)
      }
    }), _vm._v(" "), _c("span", [_vm._v(_vm._s(item.label))])]);
  }), 1), _vm._v(" "), _c("div", {
    staticClass: "pc-header-actions"
  }, [_c("div", {
    staticClass: "pc-user",
    "class": {
      open: _vm.menuOpen
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        _vm.menuOpen = !_vm.menuOpen;
      }
    }
  }, [_c("div", {
    staticClass: "pc-avatar",
    attrs: {
      title: _vm.clientName
    }
  }, [_vm._v(_vm._s(_vm.initials))]), _vm._v(" "), _c("span", {
    staticClass: "pc-user-name"
  }, [_vm._v(_vm._s(_vm.clientName))]), _vm._v(" "), _c("svg", {
    staticClass: "pc-caret",
    attrs: {
      viewBox: "0 0 20 20",
      width: "12",
      height: "12",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2"
    }
  }, [_c("path", {
    attrs: {
      d: "M5 7l5 5 5-5"
    }
  })]), _vm._v(" "), _vm.menuOpen ? _c("div", {
    staticClass: "pc-menu",
    on: {
      click: function click($event) {
        $event.stopPropagation();
      }
    }
  }, [_c("div", {
    staticClass: "pc-menu-header"
  }, [_c("div", {
    staticClass: "pc-avatar pc-avatar-lg"
  }, [_vm._v(_vm._s(_vm.initials))]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "pc-menu-name"
  }, [_vm._v(_vm._s(_vm.clientName))]), _vm._v(" "), _c("div", {
    staticClass: "pc-menu-sub"
  }, [_vm._v("Signed in")])])]), _vm._v(" "), _c("router-link", {
    staticClass: "pc-menu-item",
    attrs: {
      to: "/profile"
    },
    nativeOn: {
      click: function click($event) {
        _vm.menuOpen = false;
      }
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
  }, [_c("circle", {
    attrs: {
      cx: "12",
      cy: "8",
      r: "4"
    }
  }), _c("path", {
    attrs: {
      d: "M4 20c1.5-4 5-6 8-6s6.5 2 8 6"
    }
  })]), _vm._v("\n              Profile\n            ")]), _vm._v(" "), _c("button", {
    staticClass: "pc-menu-item pc-menu-danger",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.logout
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
      d: "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"
    }
  }), _c("path", {
    attrs: {
      d: "M16 17l5-5-5-5"
    }
  }), _c("path", {
    attrs: {
      d: "M21 12H9"
    }
  })]), _vm._v("\n              Logout\n            ")])], 1) : _vm._e()])])], 1)]), _vm._v(" "), _c("main", {
    staticClass: "pc-main"
  }, [_c("router-view")], 1), _vm._v(" "), _c("nav", {
    staticClass: "pc-bottom-nav"
  }, _vm._l(_vm.navItems, function (item) {
    return _c("router-link", {
      key: "bn-" + item.to,
      staticClass: "pc-bottom-link",
      attrs: {
        to: item.to
      }
    }, [_c("span", {
      staticClass: "pc-bottom-icon",
      domProps: {
        innerHTML: _vm._s(item.icon)
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "pc-bottom-label"
    }, [_vm._v(_vm._s(item.label))])]);
  }), 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/layouts/PortalLayout.vue?vue&type=style&index=0&id=44395e2c&scoped=true&lang=css"
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/layouts/PortalLayout.vue?vue&type=style&index=0&id=44395e2c&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.portal-layout[data-v-44395e2c] {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: var(--pc-bg);\n}\r\n\r\n/* Header */\n.pc-header[data-v-44395e2c] {\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 100;\r\n  background: var(--pc-header-bg);\r\n  backdrop-filter: saturate(180%) blur(14px);\r\n  -webkit-backdrop-filter: saturate(180%) blur(14px);\r\n  border-bottom: 1px solid var(--pc-border);\n}\n.pc-header-inner[data-v-44395e2c] {\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n  padding: 0.75rem 1.25rem;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  min-width: 0;\n}\n.pc-brand[data-v-44395e2c] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.6rem;\r\n  text-decoration: none;\r\n  color: var(--pc-text);\r\n  font-weight: 700;\r\n  font-size: 1.05rem;\r\n  letter-spacing: -0.01em;\r\n  flex-shrink: 0;\r\n  min-width: 0;\n}\n.pc-brand-text[data-v-44395e2c] {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\n}\n.pc-brand-mark[data-v-44395e2c] {\r\n  width: 34px;\r\n  height: 34px;\r\n  border-radius: 10px;\r\n  background: linear-gradient(135deg, var(--pc-primary) 0%, #6366f1 100%);\r\n  color: #fff;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  box-shadow: 0 4px 12px -2px rgba(79, 70, 229, 0.45);\n}\n.pc-nav[data-v-44395e2c] {\r\n  display: flex;\r\n  gap: 0.1rem;\r\n  flex: 1 1 auto;\r\n  justify-content: center;\r\n  min-width: 0;\r\n  flex-wrap: nowrap;\r\n  overflow: hidden;\n}\n.pc-nav-link[data-v-44395e2c] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.4rem;\r\n  padding: 0.5rem 0.7rem;\r\n  border-radius: 10px;\r\n  color: var(--pc-text-muted);\r\n  font-weight: 500;\r\n  font-size: 0.85rem;\r\n  text-decoration: none;\r\n  white-space: nowrap;\r\n  transition: background 0.15s, color 0.15s;\n}\n.pc-nav-link[data-v-44395e2c]:hover { color: var(--pc-text); background: var(--pc-surface-alt);\n}\n.pc-nav-link.router-link-active[data-v-44395e2c] {\r\n  color: var(--pc-primary);\r\n  background: var(--pc-primary-50);\n}\n.pc-nav-icon[data-v-44395e2c] { display: inline-flex;\n}\n.pc-nav-icon[data-v-44395e2c] svg { width: 16px; height: 16px;\n}\n.pc-header-actions[data-v-44395e2c] { margin-left: auto; flex-shrink: 0;\n}\n.pc-user[data-v-44395e2c] {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.55rem;\r\n  padding: 0.3rem 0.55rem 0.3rem 0.3rem;\r\n  border-radius: 999px;\r\n  cursor: pointer;\r\n  border: 1px solid transparent;\r\n  transition: border-color 0.15s, background 0.15s;\r\n  max-width: 100%;\r\n  min-width: 0;\n}\n.pc-user[data-v-44395e2c]:hover { border-color: var(--pc-border); background: var(--pc-surface);\n}\n.pc-user.open[data-v-44395e2c] { border-color: var(--pc-border); background: var(--pc-surface);\n}\n.pc-avatar[data-v-44395e2c] {\r\n  width: 32px;\r\n  height: 32px;\r\n  border-radius: 50%;\r\n  background: linear-gradient(135deg, #4f46e5, #7c3aed);\r\n  color: #fff;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-weight: 600;\r\n  font-size: 0.82rem;\r\n  flex-shrink: 0;\n}\n.pc-avatar-lg[data-v-44395e2c] { width: 42px; height: 42px; font-size: 0.95rem;\n}\n.pc-user-name[data-v-44395e2c] {\r\n  font-size: 0.88rem;\r\n  font-weight: 500;\r\n  color: var(--pc-text);\r\n  max-width: 140px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\n}\n.pc-caret[data-v-44395e2c] { color: var(--pc-text-soft);\n}\n.pc-menu[data-v-44395e2c] {\r\n  position: absolute;\r\n  top: calc(100% + 8px);\r\n  right: 0;\r\n  min-width: 220px;\r\n  max-width: calc(100vw - 1.5rem);\r\n  background: var(--pc-surface);\r\n  border: 1px solid var(--pc-border);\r\n  border-radius: var(--pc-radius);\r\n  box-shadow: var(--pc-shadow-lg);\r\n  padding: 0.35rem;\r\n  z-index: 200;\r\n  animation: pc-fade-down-44395e2c 0.15s ease-out;\n}\n@keyframes pc-fade-down-44395e2c {\nfrom { opacity: 0; transform: translateY(-4px);\n}\nto { opacity: 1; transform: translateY(0);\n}\n}\n.pc-menu-header[data-v-44395e2c] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.7rem;\r\n  padding: 0.7rem 0.7rem 0.85rem;\r\n  border-bottom: 1px solid var(--pc-border);\r\n  margin-bottom: 0.35rem;\r\n  min-width: 0;\n}\n.pc-menu-header > div[data-v-44395e2c]:not(.pc-avatar) { min-width: 0; flex: 1;\n}\n.pc-menu-name[data-v-44395e2c] { font-weight: 600; color: var(--pc-text); font-size: 0.9rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\n}\n.pc-menu-sub[data-v-44395e2c] { font-size: 0.78rem; color: var(--pc-text-muted);\n}\n.pc-menu-item[data-v-44395e2c] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.6rem;\r\n  width: 100%;\r\n  padding: 0.55rem 0.7rem;\r\n  border: none;\r\n  background: transparent;\r\n  color: var(--pc-text);\r\n  font-size: 0.88rem;\r\n  text-align: left;\r\n  text-decoration: none;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  transition: background 0.15s;\n}\n.pc-menu-item[data-v-44395e2c]:hover { background: var(--pc-surface-alt);\n}\n.pc-menu-danger[data-v-44395e2c] { color: var(--pc-danger);\n}\n.pc-menu-danger[data-v-44395e2c]:hover { background: var(--pc-danger-bg);\n}\r\n\r\n/* Main */\n.pc-main[data-v-44395e2c] {\r\n  flex: 1;\r\n  width: 100%;\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n  padding: 1.75rem 1.5rem 2rem;\r\n  box-sizing: border-box;\n}\r\n\r\n/* Bottom nav (mobile only) */\n.pc-bottom-nav[data-v-44395e2c] {\r\n  display: none;\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 100;\r\n  background: rgba(255, 255, 255, 0.95);\r\n  backdrop-filter: saturate(180%) blur(14px);\r\n  -webkit-backdrop-filter: saturate(180%) blur(14px);\r\n  border-top: 1px solid var(--pc-border);\r\n  padding: 0.35rem 0.25rem calc(0.35rem + env(safe-area-inset-bottom, 0px));\r\n  overflow-x: auto;\r\n  overflow-y: hidden;\r\n  scrollbar-width: none;\r\n  -ms-overflow-style: none;\r\n  -webkit-overflow-scrolling: touch;\r\n  scroll-snap-type: x proximity;\r\n  gap: 0.1rem;\n}\n.pc-bottom-nav[data-v-44395e2c]::-webkit-scrollbar { display: none;\n}\n.pc-bottom-link[data-v-44395e2c] {\r\n  flex: 1 1 auto;\r\n  min-width: 56px;\r\n  max-width: 96px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 0.18rem;\r\n  padding: 0.4rem 0.2rem;\r\n  text-decoration: none;\r\n  color: var(--pc-text-soft);\r\n  font-size: 0.68rem;\r\n  font-weight: 500;\r\n  border-radius: 10px;\r\n  transition: color 0.15s, background 0.15s;\r\n  scroll-snap-align: center;\n}\n.pc-bottom-link[data-v-44395e2c]:hover { color: var(--pc-text-muted);\n}\n.pc-bottom-link.router-link-active[data-v-44395e2c] {\r\n  color: var(--pc-primary);\r\n  background: var(--pc-primary-50);\n}\n.pc-bottom-link.router-link-active .pc-bottom-icon[data-v-44395e2c] {\r\n  transform: translateY(-1px) scale(1.05);\n}\n.pc-bottom-icon[data-v-44395e2c] {\r\n  display: inline-flex;\r\n  transition: transform 0.2s;\n}\n.pc-bottom-icon[data-v-44395e2c] svg { width: 22px; height: 22px;\n}\n.pc-bottom-label[data-v-44395e2c] {\r\n  line-height: 1;\r\n  letter-spacing: 0.01em;\r\n  max-width: 100%;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\n}\r\n\r\n/* Collapse to icon-only nav before items can overflow the 1200px container */\n@media (max-width: 1280px) {\n.pc-nav-desktop .pc-nav-link span[data-v-44395e2c]:not(.pc-nav-icon) { display: none;\n}\n.pc-nav-link[data-v-44395e2c] { padding: 0.5rem;\n}\n.pc-nav-icon[data-v-44395e2c] svg { width: 18px; height: 18px;\n}\n}\r\n\r\n/* Narrow tablet: hide user name in header pill to free space for icon nav */\n@media (max-width: 820px) {\n.pc-user-name[data-v-44395e2c] { display: none;\n}\n.pc-caret[data-v-44395e2c] { display: none;\n}\n.pc-user[data-v-44395e2c] { padding: 0.25rem;\n}\n}\r\n\r\n/* Mobile: hide top nav, show bottom nav */\n@media (max-width: 640px) {\n.pc-header-inner[data-v-44395e2c] { padding: 0.55rem 0.85rem; gap: 0.5rem;\n}\n.pc-nav-desktop[data-v-44395e2c] { display: none;\n}\n.pc-main[data-v-44395e2c] { padding: 1rem 1rem 5.5rem;\n}\n.pc-bottom-nav[data-v-44395e2c] { display: flex;\n}\n.pc-brand[data-v-44395e2c] { font-size: 1rem;\n}\n.pc-brand-mark[data-v-44395e2c] { width: 30px; height: 30px; border-radius: 9px;\n}\n.pc-bottom-link[data-v-44395e2c] { min-width: 52px; font-size: 0.66rem; padding: 0.35rem 0.15rem;\n}\n.pc-bottom-icon[data-v-44395e2c] svg { width: 21px; height: 21px;\n}\n}\n@media (max-width: 480px) {\n.pc-header-inner[data-v-44395e2c] { padding: 0.5rem 0.75rem;\n}\n.pc-bottom-nav[data-v-44395e2c] { padding-left: 0.15rem; padding-right: 0.15rem; gap: 0.05rem;\n}\n.pc-bottom-link[data-v-44395e2c] { min-width: 44px; font-size: 0.62rem; padding: 0.3rem 0.1rem; gap: 0.12rem;\n}\n.pc-bottom-icon[data-v-44395e2c] svg { width: 20px; height: 20px;\n}\n.pc-bottom-label[data-v-44395e2c] { letter-spacing: 0; font-size: 0.6rem;\n}\n}\n@media (max-width: 380px) {\n.pc-brand-text[data-v-44395e2c] { display: none;\n}\n.pc-main[data-v-44395e2c] { padding: 0.85rem 0.85rem 5rem;\n}\n.pc-bottom-link[data-v-44395e2c] { min-width: 38px;\n}\n.pc-bottom-label[data-v-44395e2c] { display: none;\n}\n.pc-bottom-link[data-v-44395e2c] { padding: 0.45rem 0.1rem;\n}\n.pc-bottom-icon[data-v-44395e2c] svg { width: 22px; height: 22px;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/layouts/PortalLayout.vue?vue&type=style&index=0&id=44395e2c&scoped=true&lang=css"
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/layouts/PortalLayout.vue?vue&type=style&index=0&id=44395e2c&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PortalLayout_vue_vue_type_style_index_0_id_44395e2c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PortalLayout.vue?vue&type=style&index=0&id=44395e2c&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/layouts/PortalLayout.vue?vue&type=style&index=0&id=44395e2c&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PortalLayout_vue_vue_type_style_index_0_id_44395e2c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PortalLayout_vue_vue_type_style_index_0_id_44395e2c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ },

/***/ "./resources/src/portal/layouts/PortalLayout.vue"
/*!*******************************************************!*\
  !*** ./resources/src/portal/layouts/PortalLayout.vue ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PortalLayout_vue_vue_type_template_id_44395e2c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PortalLayout.vue?vue&type=template&id=44395e2c&scoped=true */ "./resources/src/portal/layouts/PortalLayout.vue?vue&type=template&id=44395e2c&scoped=true");
/* harmony import */ var _PortalLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PortalLayout.vue?vue&type=script&lang=js */ "./resources/src/portal/layouts/PortalLayout.vue?vue&type=script&lang=js");
/* harmony import */ var _PortalLayout_vue_vue_type_style_index_0_id_44395e2c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PortalLayout.vue?vue&type=style&index=0&id=44395e2c&scoped=true&lang=css */ "./resources/src/portal/layouts/PortalLayout.vue?vue&type=style&index=0&id=44395e2c&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PortalLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PortalLayout_vue_vue_type_template_id_44395e2c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _PortalLayout_vue_vue_type_template_id_44395e2c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "44395e2c",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/portal/layouts/PortalLayout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/portal/layouts/PortalLayout.vue?vue&type=script&lang=js"
/*!*******************************************************************************!*\
  !*** ./resources/src/portal/layouts/PortalLayout.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PortalLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PortalLayout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/layouts/PortalLayout.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PortalLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/portal/layouts/PortalLayout.vue?vue&type=template&id=44395e2c&scoped=true"
/*!*************************************************************************************************!*\
  !*** ./resources/src/portal/layouts/PortalLayout.vue?vue&type=template&id=44395e2c&scoped=true ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PortalLayout_vue_vue_type_template_id_44395e2c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PortalLayout_vue_vue_type_template_id_44395e2c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PortalLayout_vue_vue_type_template_id_44395e2c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PortalLayout.vue?vue&type=template&id=44395e2c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/layouts/PortalLayout.vue?vue&type=template&id=44395e2c&scoped=true");


/***/ },

/***/ "./resources/src/portal/layouts/PortalLayout.vue?vue&type=style&index=0&id=44395e2c&scoped=true&lang=css"
/*!***************************************************************************************************************!*\
  !*** ./resources/src/portal/layouts/PortalLayout.vue?vue&type=style&index=0&id=44395e2c&scoped=true&lang=css ***!
  \***************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PortalLayout_vue_vue_type_style_index_0_id_44395e2c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PortalLayout.vue?vue&type=style&index=0&id=44395e2c&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/layouts/PortalLayout.vue?vue&type=style&index=0&id=44395e2c&scoped=true&lang=css");


/***/ }

}]);