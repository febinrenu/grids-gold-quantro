"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_portal_views_SetPassword_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/SetPassword.vue?vue&type=script&lang=js"
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/SetPassword.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
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
      token: '',
      email: '',
      password: '',
      confirm: '',
      valid: false,
      error: '',
      loading: false,
      invalidMsg: ''
    };
  },
  mounted: function mounted() {
    this.token = new URLSearchParams(window.location.search).get('token') || '';
    if (!this.token) {
      this.invalidMsg = 'Invalid or missing invitation link.';
      return;
    }
    this.validate();
  },
  methods: {
    validate: function validate() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$get, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return axios.get('/portal/validate-invite', {
                params: {
                  token: _this.token
                }
              });
            case 1:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.valid = data.valid;
              _this.email = data.email || '';
              if (!_this.valid) _this.invalidMsg = data.message || 'Invalid or expired link.';
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              _this.invalidMsg = 'Invalid or expired invitation link.';
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    submit: function submit() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var data, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              if (!(_this2.password !== _this2.confirm)) {
                _context2.n = 1;
                break;
              }
              _this2.error = 'Passwords do not match';
              return _context2.a(2);
            case 1:
              _this2.error = '';
              _this2.loading = true;
              _context2.p = 2;
              _context2.n = 3;
              return axios.post('/portal/set-password', {
                token: _this2.token,
                password: _this2.password,
                password_confirmation: _this2.confirm
              });
            case 3:
              window.location.href = '/portal/dashboard';
              _context2.n = 5;
              break;
            case 4:
              _context2.p = 4;
              _t2 = _context2.v;
              data = _t2 && _t2.response && _t2.response.data ? _t2.response.data : _t2;
              _this2.error = data && data.message || 'Failed to set password';
            case 5:
              _context2.p = 5;
              _this2.loading = false;
              return _context2.f(5);
            case 6:
              return _context2.a(2);
          }
        }, _callee2, null, [[2, 4, 5, 6]]);
      }))();
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/SetPassword.vue?vue&type=template&id=3b45e17c&scoped=true"
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/SetPassword.vue?vue&type=template&id=3b45e17c&scoped=true ***!
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
    staticClass: "portal-set-password"
  }, [_c("div", {
    staticClass: "pc-login-bg"
  }), _vm._v(" "), _c("div", {
    staticClass: "pc-login-card"
  }, [_c("div", {
    staticClass: "pc-login-brand"
  }, [_c("div", {
    staticClass: "pc-login-mark"
  }, [_c("svg", {
    attrs: {
      viewBox: "0 0 24 24",
      width: "26",
      height: "26",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }, [_c("path", {
    attrs: {
      d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
    }
  })])]), _vm._v(" "), _c("h1", [_vm._v("Set your password")]), _vm._v(" "), _vm.email ? _c("p", {
    staticClass: "pc-sub"
  }, [_vm._v("for "), _c("strong", [_vm._v(_vm._s(_vm.email))])]) : _c("p", {
    staticClass: "pc-sub"
  }, [_vm._v("Secure your portal account")])]), _vm._v(" "), _vm.valid ? _c("form", {
    staticClass: "pc-form",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "pc-field"
  }, [_c("label", [_vm._v("New password")]), _vm._v(" "), _c("div", {
    staticClass: "pc-input-wrap"
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
  }, [_c("rect", {
    attrs: {
      x: "3",
      y: "11",
      width: "18",
      height: "11",
      rx: "2"
    }
  }), _c("path", {
    attrs: {
      d: "M7 11V7a5 5 0 0110 0v4"
    }
  })]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.password,
      expression: "password"
    }],
    attrs: {
      type: "password",
      required: "",
      minlength: "8",
      placeholder: "Min 8 characters",
      autocomplete: "new-password"
    },
    domProps: {
      value: _vm.password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.password = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "pc-field"
  }, [_c("label", [_vm._v("Confirm password")]), _vm._v(" "), _c("div", {
    staticClass: "pc-input-wrap"
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
      d: "M20 6L9 17l-5-5"
    }
  })]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.confirm,
      expression: "confirm"
    }],
    attrs: {
      type: "password",
      required: "",
      placeholder: "Confirm password",
      autocomplete: "new-password"
    },
    domProps: {
      value: _vm.confirm
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.confirm = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _vm.error ? _c("p", {
    staticClass: "pc-alert pc-alert-error"
  }, [_vm._v(_vm._s(_vm.error))]) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "pc-btn-primary",
    attrs: {
      type: "submit",
      disabled: _vm.loading
    }
  }, [_vm.loading ? _c("span", {
    staticClass: "pc-btn-spinner"
  }) : _vm._e(), _vm._v("\n        " + _vm._s(_vm.loading ? "Setting..." : "Set password & sign in") + "\n      ")])]) : _c("div", {
    staticClass: "pc-invalid"
  }, [_c("div", {
    staticClass: "pc-invalid-icon"
  }, [_c("svg", {
    attrs: {
      viewBox: "0 0 24 24",
      width: "26",
      height: "26",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }, [_c("circle", {
    attrs: {
      cx: "12",
      cy: "12",
      r: "10"
    }
  }), _c("path", {
    attrs: {
      d: "M12 8v5M12 16h.01"
    }
  })])]), _vm._v(" "), _c("p", {
    staticClass: "pc-invalid-text"
  }, [_vm._v(_vm._s(_vm.invalidMsg))])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/SetPassword.vue?vue&type=style&index=0&id=3b45e17c&scoped=true&lang=css"
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/SetPassword.vue?vue&type=style&index=0&id=3b45e17c&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.portal-set-password[data-v-3b45e17c] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1.25rem;\n  position: relative;\n  overflow: hidden;\n}\n.pc-login-bg[data-v-3b45e17c] {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  background:\n    radial-gradient(1100px circle at 20% -10%, rgba(99, 102, 241, 0.35), transparent 55%),\n    radial-gradient(1000px circle at 110% 110%, rgba(6, 182, 212, 0.28), transparent 55%),\n    linear-gradient(180deg, #eef2ff 0%, #f6f8fb 100%);\n}\n.pc-login-card[data-v-3b45e17c] {\n  position: relative;\n  z-index: 1;\n  background: var(--pc-surface);\n  padding: 2.25rem 2.25rem 2rem;\n  border-radius: 18px;\n  box-shadow: 0 18px 50px -12px rgba(15, 23, 42, 0.18), 0 6px 18px -8px rgba(79, 70, 229, 0.2);\n  border: 1px solid var(--pc-border);\n  width: 100%;\n  max-width: 440px;\n  animation: pc-slide-up-3b45e17c 0.35s ease-out both;\n}\n@keyframes pc-slide-up-3b45e17c {\nfrom { opacity: 0; transform: translateY(10px);\n}\nto { opacity: 1; transform: translateY(0);\n}\n}\n.pc-login-brand[data-v-3b45e17c] { text-align: center; margin-bottom: 1.75rem;\n}\n.pc-login-mark[data-v-3b45e17c] {\n  width: 56px;\n  height: 56px;\n  border-radius: 16px;\n  background: linear-gradient(135deg, #4f46e5 0%, #6366f1 50%, #7c3aed 100%);\n  color: #fff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 0.85rem;\n  box-shadow: 0 10px 25px -8px rgba(79, 70, 229, 0.6);\n}\n.pc-login-card h1[data-v-3b45e17c] {\n  margin: 0 0 0.4rem;\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: var(--pc-text);\n  letter-spacing: -0.01em;\n}\n.pc-sub[data-v-3b45e17c] {\n  color: var(--pc-text-muted);\n  font-size: 0.92rem;\n  margin: 0;\n}\n.pc-sub strong[data-v-3b45e17c] { color: var(--pc-text); font-weight: 600;\n}\n.pc-form[data-v-3b45e17c] { display: flex; flex-direction: column; gap: 1rem;\n}\n.pc-field[data-v-3b45e17c] { display: flex; flex-direction: column; gap: 0.35rem;\n}\n.pc-field label[data-v-3b45e17c] {\n  font-size: 0.82rem;\n  font-weight: 500;\n  color: var(--pc-text);\n}\n.pc-input-wrap[data-v-3b45e17c] { position: relative; display: flex; align-items: center;\n}\n.pc-input-wrap svg[data-v-3b45e17c] { position: absolute; left: 0.85rem; color: var(--pc-text-soft); pointer-events: none;\n}\n.pc-input-wrap input[data-v-3b45e17c] {\n  width: 100%;\n  padding: 0.7rem 1rem 0.7rem 2.35rem;\n  border: 1px solid var(--pc-border-strong);\n  border-radius: 10px;\n  font-size: 0.95rem;\n  background: var(--pc-surface-alt);\n  color: var(--pc-text);\n  transition: border-color 0.15s, background 0.15s, box-shadow 0.15s;\n  box-sizing: border-box;\n}\n.pc-input-wrap input[data-v-3b45e17c]:focus {\n  outline: none;\n  background: var(--pc-surface);\n  border-color: var(--pc-primary);\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);\n}\n.pc-alert[data-v-3b45e17c] {\n  margin: 0;\n  padding: 0.65rem 0.85rem;\n  border-radius: 8px;\n  font-size: 0.88rem;\n  font-weight: 500;\n}\n.pc-alert-error[data-v-3b45e17c] { background: var(--pc-danger-bg); color: var(--pc-danger); border: 1px solid #fecaca;\n}\n.pc-btn-primary[data-v-3b45e17c] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.45rem;\n  width: 100%;\n  padding: 0.8rem 1rem;\n  background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.98rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: transform 0.15s, box-shadow 0.15s, filter 0.15s;\n  box-shadow: 0 8px 20px -8px rgba(79, 70, 229, 0.6);\n}\n.pc-btn-primary[data-v-3b45e17c]:hover:not(:disabled) { transform: translateY(-1px); filter: brightness(1.05);\n}\n.pc-btn-primary[data-v-3b45e17c]:disabled { opacity: 0.7; cursor: not-allowed;\n}\n.pc-btn-spinner[data-v-3b45e17c] {\n  display: inline-block;\n  width: 1rem; height: 1rem;\n  border: 2px solid rgba(255,255,255,0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: pc-spin-3b45e17c 0.7s linear infinite;\n}\n@keyframes pc-spin-3b45e17c {\nto { transform: rotate(360deg);\n}\n}\n.pc-invalid[data-v-3b45e17c] {\n  padding: 1.5rem 0.5rem 0.5rem;\n  text-align: center;\n}\n.pc-invalid-icon[data-v-3b45e17c] {\n  color: var(--pc-danger);\n  display: inline-flex;\n  margin-bottom: 0.75rem;\n  background: var(--pc-danger-bg);\n  padding: 0.85rem;\n  border-radius: 50%;\n}\n.pc-invalid-text[data-v-3b45e17c] {\n  margin: 0;\n  color: var(--pc-danger);\n  font-size: 0.95rem;\n  font-weight: 500;\n}\n@media (max-width: 480px) {\n.portal-set-password[data-v-3b45e17c] { padding: 1rem;\n}\n.pc-login-card[data-v-3b45e17c] { padding: 1.75rem 1.25rem 1.5rem; border-radius: 16px;\n}\n.pc-login-card h1[data-v-3b45e17c] { font-size: 1.2rem;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/SetPassword.vue?vue&type=style&index=0&id=3b45e17c&scoped=true&lang=css"
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/SetPassword.vue?vue&type=style&index=0&id=3b45e17c&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SetPassword_vue_vue_type_style_index_0_id_3b45e17c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SetPassword.vue?vue&type=style&index=0&id=3b45e17c&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/SetPassword.vue?vue&type=style&index=0&id=3b45e17c&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SetPassword_vue_vue_type_style_index_0_id_3b45e17c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SetPassword_vue_vue_type_style_index_0_id_3b45e17c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ },

/***/ "./resources/src/portal/views/SetPassword.vue"
/*!****************************************************!*\
  !*** ./resources/src/portal/views/SetPassword.vue ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SetPassword_vue_vue_type_template_id_3b45e17c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SetPassword.vue?vue&type=template&id=3b45e17c&scoped=true */ "./resources/src/portal/views/SetPassword.vue?vue&type=template&id=3b45e17c&scoped=true");
/* harmony import */ var _SetPassword_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SetPassword.vue?vue&type=script&lang=js */ "./resources/src/portal/views/SetPassword.vue?vue&type=script&lang=js");
/* harmony import */ var _SetPassword_vue_vue_type_style_index_0_id_3b45e17c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SetPassword.vue?vue&type=style&index=0&id=3b45e17c&scoped=true&lang=css */ "./resources/src/portal/views/SetPassword.vue?vue&type=style&index=0&id=3b45e17c&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SetPassword_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SetPassword_vue_vue_type_template_id_3b45e17c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _SetPassword_vue_vue_type_template_id_3b45e17c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3b45e17c",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/portal/views/SetPassword.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/portal/views/SetPassword.vue?vue&type=script&lang=js"
/*!****************************************************************************!*\
  !*** ./resources/src/portal/views/SetPassword.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetPassword_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SetPassword.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/SetPassword.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetPassword_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/portal/views/SetPassword.vue?vue&type=template&id=3b45e17c&scoped=true"
/*!**********************************************************************************************!*\
  !*** ./resources/src/portal/views/SetPassword.vue?vue&type=template&id=3b45e17c&scoped=true ***!
  \**********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SetPassword_vue_vue_type_template_id_3b45e17c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SetPassword_vue_vue_type_template_id_3b45e17c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SetPassword_vue_vue_type_template_id_3b45e17c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SetPassword.vue?vue&type=template&id=3b45e17c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/SetPassword.vue?vue&type=template&id=3b45e17c&scoped=true");


/***/ },

/***/ "./resources/src/portal/views/SetPassword.vue?vue&type=style&index=0&id=3b45e17c&scoped=true&lang=css"
/*!************************************************************************************************************!*\
  !*** ./resources/src/portal/views/SetPassword.vue?vue&type=style&index=0&id=3b45e17c&scoped=true&lang=css ***!
  \************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SetPassword_vue_vue_type_style_index_0_id_3b45e17c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SetPassword.vue?vue&type=style&index=0&id=3b45e17c&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/SetPassword.vue?vue&type=style&index=0&id=3b45e17c&scoped=true&lang=css");


/***/ }

}]);