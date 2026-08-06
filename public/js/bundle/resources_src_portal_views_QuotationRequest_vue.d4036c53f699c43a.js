"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_portal_views_QuotationRequest_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/QuotationRequest.vue?vue&type=script&lang=js"
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/QuotationRequest.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
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
      form: {
        subject: '',
        notes: '',
        items: [{
          description: '',
          quantity: 1
        }]
      },
      submitting: false,
      error: ''
    };
  },
  methods: {
    addItem: function addItem() {
      this.form.items.push({
        description: '',
        quantity: 1
      });
    },
    removeItem: function removeItem(i) {
      this.form.items.splice(i, 1);
    },
    submit: function submit() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var items, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              if (!(!_this.form.notes || !_this.form.notes.trim())) {
                _context.n = 1;
                break;
              }
              _this.error = 'Please describe your request.';
              return _context.a(2);
            case 1:
              _this.error = '';
              _this.submitting = true;
              _context.p = 2;
              items = _this.form.items.filter(function (it) {
                return it.description && it.description.trim();
              });
              _context.n = 3;
              return axios.post('/portal/quotations', {
                subject: _this.form.subject || undefined,
                notes: _this.form.notes,
                items: items.length ? items : undefined
              });
            case 3:
              _this.$router.push('/quotations');
              _context.n = 5;
              break;
            case 4:
              _context.p = 4;
              _t = _context.v;
              _this.error = _t && _t.response && _t.response.data && _t.response.data.message || 'Could not submit your request. Please try again.';
            case 5:
              _this.submitting = false;
            case 6:
              return _context.a(2);
          }
        }, _callee, null, [[2, 4]]);
      }))();
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/QuotationRequest.vue?vue&type=template&id=193fded8&scoped=true"
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/QuotationRequest.vue?vue&type=template&id=193fded8&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "portal-page portal-quotation-request"
  }, [_c("header", {
    staticClass: "pc-page-header"
  }, [_vm._m(0), _vm._v(" "), _c("router-link", {
    staticClass: "pc-link-back",
    attrs: {
      to: "/quotations"
    }
  }, [_vm._v("← Back to quotations")])], 1), _vm._v(" "), _c("form", {
    staticClass: "pc-card pc-form",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "pc-form-row"
  }, [_vm._m(1), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.subject,
      expression: "form.subject"
    }],
    attrs: {
      type: "text",
      maxlength: "190",
      placeholder: "e.g. Office furniture for new branch"
    },
    domProps: {
      value: _vm.form.subject
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "subject", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "pc-form-row"
  }, [_vm._m(2), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.notes,
      expression: "form.notes"
    }],
    attrs: {
      rows: "5",
      required: "",
      maxlength: "5000",
      placeholder: "Describe what you need, expected timing, delivery location, etc."
    },
    domProps: {
      value: _vm.form.notes
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "notes", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "pc-form-row"
  }, [_vm._m(3), _vm._v(" "), _vm._l(_vm.form.items, function (item, i) {
    return _c("div", {
      key: i,
      staticClass: "pc-item-row"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.description,
        expression: "item.description"
      }],
      attrs: {
        type: "text",
        placeholder: "Item description"
      },
      domProps: {
        value: item.description
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "description", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: item.quantity,
        expression: "item.quantity",
        modifiers: {
          number: true
        }
      }],
      staticClass: "pc-qty-input",
      attrs: {
        type: "number",
        min: "0",
        step: "0.01",
        placeholder: "Qty"
      },
      domProps: {
        value: item.quantity
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "quantity", _vm._n($event.target.value));
        },
        blur: function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    }), _vm._v(" "), _c("button", {
      staticClass: "pc-icon-btn",
      attrs: {
        type: "button",
        title: "Remove"
      },
      on: {
        click: function click($event) {
          return _vm.removeItem(i);
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
    }, [_c("path", {
      attrs: {
        d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"
      }
    })])])]);
  }), _vm._v(" "), _c("button", {
    staticClass: "pc-btn pc-btn-ghost",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.addItem
    }
  }, [_vm._v("+ Add item")])], 2), _vm._v(" "), _vm.error ? _c("div", {
    staticClass: "pc-alert pc-alert-error"
  }, [_vm._v(_vm._s(_vm.error))]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "pc-form-actions"
  }, [_c("router-link", {
    staticClass: "pc-btn pc-btn-ghost",
    attrs: {
      to: "/quotations"
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c("button", {
    staticClass: "pc-btn pc-btn-primary",
    attrs: {
      type: "submit",
      disabled: _vm.submitting
    }
  }, [_vm.submitting ? _c("span", [_vm._v("Submitting...")]) : _c("span", [_vm._v("Submit request")])])], 1)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("h1", {
    staticClass: "pc-page-title"
  }, [_vm._v("Request a quotation")]), _vm._v(" "), _c("p", {
    staticClass: "pc-page-sub"
  }, [_vm._v("Tell us what you need and our team will respond shortly.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_vm._v("Subject "), _c("span", {
    staticClass: "pc-muted"
  }, [_vm._v("(optional)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_vm._v("Details "), _c("span", {
    staticClass: "pc-required"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_vm._v("Items "), _c("span", {
    staticClass: "pc-muted"
  }, [_vm._v("(optional)")])]);
}];
render._withStripped = true;


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/QuotationRequest.vue?vue&type=style&index=0&id=193fded8&scoped=true&lang=css"
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/QuotationRequest.vue?vue&type=style&index=0&id=193fded8&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.portal-quotation-request[data-v-193fded8] { padding-bottom: 1rem;\n}\n.pc-page-header[data-v-193fded8] { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; gap: 1rem; flex-wrap: wrap;\n}\n.pc-page-title[data-v-193fded8] { font-size: 1.5rem; font-weight: 700; color: var(--pc-text); margin: 0 0 0.2rem;\n}\n.pc-page-sub[data-v-193fded8] { font-size: 0.9rem; color: var(--pc-text-muted); margin: 0;\n}\n.pc-link-back[data-v-193fded8] { color: var(--pc-text-muted); text-decoration: none; font-size: 0.88rem;\n}\n.pc-link-back[data-v-193fded8]:hover { color: var(--pc-primary);\n}\n.pc-card[data-v-193fded8] { background: var(--pc-surface); border: 1px solid var(--pc-border); border-radius: var(--pc-radius); box-shadow: var(--pc-shadow-sm);\n}\n.pc-form[data-v-193fded8] { padding: 1.5rem; display: flex; flex-direction: column; gap: 1.15rem;\n}\n.pc-form-row[data-v-193fded8] { display: flex; flex-direction: column; gap: 0.45rem;\n}\n.pc-form-row label[data-v-193fded8] { font-size: 0.85rem; font-weight: 600; color: var(--pc-text);\n}\n.pc-muted[data-v-193fded8] { color: var(--pc-text-soft); font-weight: 400; font-size: 0.78rem;\n}\n.pc-required[data-v-193fded8] { color: var(--pc-danger);\n}\n.pc-form-row input[data-v-193fded8], .pc-form-row textarea[data-v-193fded8] { width: 100%; padding: 0.6rem 0.85rem; border: 1px solid var(--pc-border-strong); border-radius: 10px; font-size: 0.92rem; background: var(--pc-surface-alt); box-sizing: border-box; font-family: inherit;\n}\n.pc-form-row input[data-v-193fded8]:focus, .pc-form-row textarea[data-v-193fded8]:focus { outline: none; background: var(--pc-surface); border-color: var(--pc-primary); box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);\n}\n.pc-item-row[data-v-193fded8] { display: flex; gap: 0.5rem; margin-bottom: 0.5rem; align-items: center;\n}\n.pc-item-row input[data-v-193fded8] { flex: 1;\n}\n.pc-qty-input[data-v-193fded8] { max-width: 110px;\n}\n.pc-icon-btn[data-v-193fded8] { background: transparent; border: 1px solid var(--pc-border-strong); width: 38px; height: 38px; border-radius: 10px; cursor: pointer; color: var(--pc-text-soft); display: flex; align-items: center; justify-content: center;\n}\n.pc-icon-btn[data-v-193fded8]:hover { border-color: var(--pc-danger); color: var(--pc-danger);\n}\n.pc-btn[data-v-193fded8] { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.55rem 1rem; border-radius: 10px; font-size: 0.9rem; font-weight: 600; text-decoration: none; border: 1px solid transparent; cursor: pointer;\n}\n.pc-btn-primary[data-v-193fded8] { background: var(--pc-primary); color: #fff;\n}\n.pc-btn-primary[data-v-193fded8]:hover:not(:disabled) { background: var(--pc-primary-600);\n}\n.pc-btn-primary[data-v-193fded8]:disabled { opacity: 0.6; cursor: not-allowed;\n}\n.pc-btn-ghost[data-v-193fded8] { background: var(--pc-surface); border-color: var(--pc-border-strong); color: var(--pc-text);\n}\n.pc-btn-ghost[data-v-193fded8]:hover { border-color: var(--pc-primary); color: var(--pc-primary);\n}\n.pc-form-actions[data-v-193fded8] { display: flex; justify-content: flex-end; gap: 0.6rem; margin-top: 0.5rem;\n}\n.pc-alert[data-v-193fded8] { padding: 0.7rem 0.95rem; border-radius: 10px; font-size: 0.88rem;\n}\n.pc-alert-error[data-v-193fded8] { background: #fef2f2; color: #b91c1c; border: 1px solid #fecaca;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/QuotationRequest.vue?vue&type=style&index=0&id=193fded8&scoped=true&lang=css"
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/QuotationRequest.vue?vue&type=style&index=0&id=193fded8&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationRequest_vue_vue_type_style_index_0_id_193fded8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuotationRequest.vue?vue&type=style&index=0&id=193fded8&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/QuotationRequest.vue?vue&type=style&index=0&id=193fded8&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationRequest_vue_vue_type_style_index_0_id_193fded8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationRequest_vue_vue_type_style_index_0_id_193fded8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ },

/***/ "./resources/src/portal/views/QuotationRequest.vue"
/*!*********************************************************!*\
  !*** ./resources/src/portal/views/QuotationRequest.vue ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuotationRequest_vue_vue_type_template_id_193fded8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuotationRequest.vue?vue&type=template&id=193fded8&scoped=true */ "./resources/src/portal/views/QuotationRequest.vue?vue&type=template&id=193fded8&scoped=true");
/* harmony import */ var _QuotationRequest_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuotationRequest.vue?vue&type=script&lang=js */ "./resources/src/portal/views/QuotationRequest.vue?vue&type=script&lang=js");
/* harmony import */ var _QuotationRequest_vue_vue_type_style_index_0_id_193fded8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuotationRequest.vue?vue&type=style&index=0&id=193fded8&scoped=true&lang=css */ "./resources/src/portal/views/QuotationRequest.vue?vue&type=style&index=0&id=193fded8&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _QuotationRequest_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuotationRequest_vue_vue_type_template_id_193fded8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _QuotationRequest_vue_vue_type_template_id_193fded8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "193fded8",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/portal/views/QuotationRequest.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/portal/views/QuotationRequest.vue?vue&type=script&lang=js"
/*!*********************************************************************************!*\
  !*** ./resources/src/portal/views/QuotationRequest.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationRequest_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuotationRequest.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/QuotationRequest.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationRequest_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/portal/views/QuotationRequest.vue?vue&type=template&id=193fded8&scoped=true"
/*!***************************************************************************************************!*\
  !*** ./resources/src/portal/views/QuotationRequest.vue?vue&type=template&id=193fded8&scoped=true ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationRequest_vue_vue_type_template_id_193fded8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationRequest_vue_vue_type_template_id_193fded8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationRequest_vue_vue_type_template_id_193fded8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuotationRequest.vue?vue&type=template&id=193fded8&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/QuotationRequest.vue?vue&type=template&id=193fded8&scoped=true");


/***/ },

/***/ "./resources/src/portal/views/QuotationRequest.vue?vue&type=style&index=0&id=193fded8&scoped=true&lang=css"
/*!*****************************************************************************************************************!*\
  !*** ./resources/src/portal/views/QuotationRequest.vue?vue&type=style&index=0&id=193fded8&scoped=true&lang=css ***!
  \*****************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationRequest_vue_vue_type_style_index_0_id_193fded8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuotationRequest.vue?vue&type=style&index=0&id=193fded8&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/QuotationRequest.vue?vue&type=style&index=0&id=193fded8&scoped=true&lang=css");


/***/ }

}]);