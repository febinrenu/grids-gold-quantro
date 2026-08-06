"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_portal_views_Article_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Article.vue?vue&type=script&lang=js"
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Article.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
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
      article: {},
      loading: false
    };
  },
  watch: {
    '$route.params.slug': {
      handler: function handler() {
        this.fetch();
      },
      immediate: false
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
              return axios.get("/portal/knowledge-base/".concat(_this.$route.params.slug));
            case 2:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.article = data || {};
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              _this.article = {};
            case 4:
              _this.loading = false;
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3]]);
      }))();
    },
    formatDate: function formatDate(iso) {
      if (!iso) return '';
      try {
        return new Date(iso).toLocaleDateString();
      } catch (_) {
        return iso;
      }
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Article.vue?vue&type=template&id=694c0756&scoped=true"
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Article.vue?vue&type=template&id=694c0756&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "portal-page portal-article"
  }, [_c("header", {
    staticClass: "pc-page-header"
  }, [_c("router-link", {
    staticClass: "pc-link-back",
    attrs: {
      to: "/help"
    }
  }, [_vm._v("← Back to help center")])], 1), _vm._v(" "), _vm.loading ? _c("div", {
    staticClass: "pc-inline-loading"
  }, [_c("div", {
    staticClass: "pc-spinner"
  }), _c("span", [_vm._v("Loading article...")])]) : _vm.article.id ? _c("article", {
    staticClass: "pc-card pc-article-body"
  }, [_vm.article.group ? _c("div", {
    staticClass: "pc-article-crumb"
  }, [_vm._v(_vm._s(_vm.article.group.name))]) : _vm._e(), _vm._v(" "), _c("h1", {
    staticClass: "pc-article-h1"
  }, [_vm._v(_vm._s(_vm.article.title))]), _vm._v(" "), _vm.article.updated_at ? _c("div", {
    staticClass: "pc-article-meta"
  }, [_vm._v("Updated " + _vm._s(_vm.formatDate(_vm.article.updated_at)))]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "pc-article-content",
    domProps: {
      innerHTML: _vm._s(_vm.article.content || "")
    }
  })]) : _c("div", {
    staticClass: "pc-card pc-empty"
  }, [_c("div", {
    staticClass: "pc-empty-icon"
  }, [_vm._v("📄")]), _vm._v(" "), _c("p", [_vm._v("Article not found")])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Article.vue?vue&type=style&index=0&id=694c0756&scoped=true&lang=css"
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Article.vue?vue&type=style&index=0&id=694c0756&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.portal-article[data-v-694c0756] { padding-bottom: 1rem;\n}\n.pc-page-header[data-v-694c0756] { margin-bottom: 1rem;\n}\n.pc-link-back[data-v-694c0756] { color: var(--pc-text-muted); text-decoration: none; font-size: 0.88rem;\n}\n.pc-link-back[data-v-694c0756]:hover { color: var(--pc-primary);\n}\n.pc-card[data-v-694c0756] { background: var(--pc-surface); border: 1px solid var(--pc-border); border-radius: var(--pc-radius); box-shadow: var(--pc-shadow-sm);\n}\n.pc-article-body[data-v-694c0756] { padding: 2rem; max-width: 820px; margin: 0 auto;\n}\n.pc-article-crumb[data-v-694c0756] { font-size: 0.78rem; font-weight: 600; color: var(--pc-primary); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;\n}\n.pc-article-h1[data-v-694c0756] { font-size: 1.85rem; font-weight: 800; color: var(--pc-text); margin: 0 0 0.45rem; letter-spacing: -0.015em; line-height: 1.2;\n}\n.pc-article-meta[data-v-694c0756] { font-size: 0.82rem; color: var(--pc-text-soft); margin-bottom: 1.5rem;\n}\n.pc-article-content[data-v-694c0756] { font-size: 1rem; line-height: 1.7; color: var(--pc-text);\n}\n.pc-article-content[data-v-694c0756] h2 { font-size: 1.3rem; font-weight: 700; margin: 1.6rem 0 0.6rem;\n}\n.pc-article-content[data-v-694c0756] h3 { font-size: 1.1rem; font-weight: 700; margin: 1.3rem 0 0.5rem;\n}\n.pc-article-content[data-v-694c0756] p { margin: 0 0 1rem;\n}\n.pc-article-content[data-v-694c0756] ul, .pc-article-content[data-v-694c0756] ol { margin: 0 0 1rem; padding-left: 1.4rem;\n}\n.pc-article-content[data-v-694c0756] li { margin-bottom: 0.3rem;\n}\n.pc-article-content[data-v-694c0756] a { color: var(--pc-primary); text-decoration: none;\n}\n.pc-article-content[data-v-694c0756] a:hover { text-decoration: underline;\n}\n.pc-article-content[data-v-694c0756] code { background: var(--pc-surface-alt); padding: 0.1rem 0.4rem; border-radius: 4px; font-size: 0.88em;\n}\n.pc-article-content[data-v-694c0756] pre { background: var(--pc-surface-alt); padding: 0.9rem 1rem; border-radius: 10px; overflow-x: auto;\n}\n.pc-article-content[data-v-694c0756] blockquote { border-left: 3px solid var(--pc-border-strong); padding-left: 1rem; color: var(--pc-text-muted); margin: 1rem 0;\n}\n.pc-article-content[data-v-694c0756] img { max-width: 100%; height: auto; border-radius: 10px;\n}\n.pc-inline-loading[data-v-694c0756] { display: flex; align-items: center; justify-content: center; gap: 0.75rem; padding: 3rem; color: var(--pc-text-muted);\n}\n.pc-spinner[data-v-694c0756] { width: 28px; height: 28px; border: 2px solid rgba(79, 70, 229, 0.15); border-top-color: var(--pc-primary); border-radius: 50%; animation: pc-spin-694c0756 0.7s linear infinite;\n}\n@keyframes pc-spin-694c0756 {\nto { transform: rotate(360deg);\n}\n}\n.pc-empty[data-v-694c0756] { padding: 3rem 1rem; text-align: center; color: var(--pc-text-soft);\n}\n.pc-empty-icon[data-v-694c0756] { font-size: 2.5rem; opacity: 0.7; margin-bottom: 0.5rem;\n}\n@media (max-width: 768px) {\n.pc-article-body[data-v-694c0756] { padding: 1.25rem;\n}\n.pc-article-h1[data-v-694c0756] { font-size: 1.4rem;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Article.vue?vue&type=style&index=0&id=694c0756&scoped=true&lang=css"
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Article.vue?vue&type=style&index=0&id=694c0756&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_style_index_0_id_694c0756_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Article.vue?vue&type=style&index=0&id=694c0756&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Article.vue?vue&type=style&index=0&id=694c0756&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_style_index_0_id_694c0756_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_style_index_0_id_694c0756_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ },

/***/ "./resources/src/portal/views/Article.vue"
/*!************************************************!*\
  !*** ./resources/src/portal/views/Article.vue ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Article_vue_vue_type_template_id_694c0756_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Article.vue?vue&type=template&id=694c0756&scoped=true */ "./resources/src/portal/views/Article.vue?vue&type=template&id=694c0756&scoped=true");
/* harmony import */ var _Article_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Article.vue?vue&type=script&lang=js */ "./resources/src/portal/views/Article.vue?vue&type=script&lang=js");
/* harmony import */ var _Article_vue_vue_type_style_index_0_id_694c0756_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Article.vue?vue&type=style&index=0&id=694c0756&scoped=true&lang=css */ "./resources/src/portal/views/Article.vue?vue&type=style&index=0&id=694c0756&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Article_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Article_vue_vue_type_template_id_694c0756_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Article_vue_vue_type_template_id_694c0756_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "694c0756",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/portal/views/Article.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/portal/views/Article.vue?vue&type=script&lang=js"
/*!************************************************************************!*\
  !*** ./resources/src/portal/views/Article.vue?vue&type=script&lang=js ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Article.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Article.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/portal/views/Article.vue?vue&type=template&id=694c0756&scoped=true"
/*!******************************************************************************************!*\
  !*** ./resources/src/portal/views/Article.vue?vue&type=template&id=694c0756&scoped=true ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_template_id_694c0756_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_template_id_694c0756_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_template_id_694c0756_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Article.vue?vue&type=template&id=694c0756&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Article.vue?vue&type=template&id=694c0756&scoped=true");


/***/ },

/***/ "./resources/src/portal/views/Article.vue?vue&type=style&index=0&id=694c0756&scoped=true&lang=css"
/*!********************************************************************************************************!*\
  !*** ./resources/src/portal/views/Article.vue?vue&type=style&index=0&id=694c0756&scoped=true&lang=css ***!
  \********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_style_index_0_id_694c0756_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Article.vue?vue&type=style&index=0&id=694c0756&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/portal/views/Article.vue?vue&type=style&index=0&id=694c0756&scoped=true&lang=css");


/***/ }

}]);