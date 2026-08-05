"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["KnowledgeBaseArticleView"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/knowledge_base/KnowledgeBaseArticleView.vue?vue&type=script&lang=js"
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/knowledge_base/KnowledgeBaseArticleView.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  name: 'KnowledgeBaseArticleView',
  metaInfo: function metaInfo() {
    return {
      title: this.article.title || 'Article'
    };
  },
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  data: function data() {
    return {
      isLoading: true,
      article: {},
      feedbackSent: false,
      userFeedback: null
    };
  },
  mounted: function mounted() {
    this.fetch();
  },
  methods: {
    fetch: function fetch() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var res, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _this.isLoading = true;
              _context.p = 1;
              _context.n = 2;
              return axios.get('/knowledge-base/articles/' + _this.id);
            case 2:
              res = _context.v;
              _this.article = res.data;
              _context.n = 5;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              if (!(_t.response && _t.response.status === 403)) {
                _context.n = 4;
                break;
              }
              if (_this.$root && _this.$root.$bvToast) {
                _this.$root.$bvToast.toast(_this.$t('Access_denied') || 'Access denied', {
                  variant: 'danger',
                  solid: true
                });
              }
              _this.$router.replace({
                name: 'KnowledgeBaseList'
              });
              return _context.a(2);
            case 4:
              _this.article = {};
              if (_this.$root && _this.$root.$bvToast) {
                _this.$root.$bvToast.toast(_this.$t('Failed_to_load') || 'Failed to load', {
                  variant: 'danger',
                  solid: true
                });
              }
            case 5:
              _context.p = 5;
              _this.isLoading = false;
              return _context.f(5);
            case 6:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3, 5, 6]]);
      }))();
    },
    submitFeedback: function submitFeedback(helpful) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return axios.post('/knowledge-base/articles/' + _this2.id + '/feedback', {
                helpful: helpful
              });
            case 1:
              _this2.feedbackSent = true;
              _this2.userFeedback = helpful;
              if (helpful) _this2.article.feedback_helpful_count = (_this2.article.feedback_helpful_count || 0) + 1;else _this2.article.feedback_not_helpful_count = (_this2.article.feedback_not_helpful_count || 0) + 1;
              if (_this2.$root && _this2.$root.$bvToast) {
                _this2.$root.$bvToast.toast(_this2.$t('Thank_you_for_feedback') || 'Thank you for your feedback.', {
                  variant: 'success',
                  solid: true
                });
              }
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t2 = _context2.v;
              if (_this2.$root && _this2.$root.$bvToast) {
                _this2.$root.$bvToast.toast(_this2.$t('Failed_to_save') || 'Failed to save', {
                  variant: 'danger',
                  solid: true
                });
              }
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }))();
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/knowledge_base/KnowledgeBaseArticleView.vue?vue&type=template&id=ca3b46c8&scoped=true"
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/knowledge_base/KnowledgeBaseArticleView.vue?vue&type=template&id=ca3b46c8&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "main-content kb-article-page"
  }, [_c("breadcumb", {
    attrs: {
      page: _vm.article.title,
      folder: _vm.$t("Knowledge_Base") || "Knowledge Base"
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _c("div", {
    staticClass: "kb-article-wrap"
  }, [_c("b-card", {
    staticClass: "kb-article-card shadow-sm"
  }, [_c("div", {
    staticClass: "kb-article-header"
  }, [_c("div", {
    staticClass: "kb-article-header-content"
  }, [_c("h1", {
    staticClass: "kb-article-title"
  }, [_vm._v(_vm._s(_vm.article.title))]), _vm._v(" "), _c("div", {
    staticClass: "kb-article-badges"
  }, [_c("span", {
    staticClass: "kb-badge-group"
  }, [_vm._v(_vm._s(_vm.article.group ? _vm.article.group.name : ""))]), _vm._v(" "), _vm.article.is_internal ? _c("b-badge", {
    staticClass: "kb-badge-internal",
    attrs: {
      variant: "warning"
    }
  }, [_vm._v(_vm._s(_vm.$t("Internal") || "Internal"))]) : _vm._e()], 1)]), _vm._v(" "), _c("router-link", {
    staticClass: "btn btn-outline-secondary btn-sm kb-back-btn",
    attrs: {
      to: {
        name: "KnowledgeBaseList"
      }
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "chevron-left"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Back")) + "\n        ")], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "kb-article-content ql-editor",
    domProps: {
      innerHTML: _vm._s(_vm.article.content)
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "kb-feedback-box"
  }, [_c("p", {
    staticClass: "kb-feedback-question"
  }, [_vm._v(_vm._s(_vm.$t("Was_this_helpful") || "Was this helpful?"))]), _vm._v(" "), _c("div", {
    staticClass: "kb-feedback-buttons"
  }, [_c("b-button", {
    staticClass: "kb-feedback-btn",
    attrs: {
      variant: _vm.feedbackSent && _vm.userFeedback === true ? "success" : "outline-success",
      size: "sm",
      disabled: _vm.feedbackSent && _vm.userFeedback !== null
    },
    on: {
      click: function click($event) {
        return _vm.submitFeedback(true);
      }
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "check"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Yes")) + "\n          ")], 1), _vm._v(" "), _c("b-button", {
    staticClass: "kb-feedback-btn",
    attrs: {
      variant: _vm.feedbackSent && _vm.userFeedback === false ? "danger" : "outline-danger",
      size: "sm",
      disabled: _vm.feedbackSent && _vm.userFeedback !== null
    },
    on: {
      click: function click($event) {
        return _vm.submitFeedback(false);
      }
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "x"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("No")) + "\n          ")], 1), _vm._v(" "), _vm.feedbackSent ? _c("span", {
    staticClass: "kb-feedback-thanks"
  }, [_vm._v(_vm._s(_vm.$t("Thank_you_for_feedback") || "Thank you for your feedback."))]) : _vm._e()], 1), _vm._v(" "), _vm.article.feedback_helpful_count != null || _vm.article.feedback_not_helpful_count != null ? _c("p", {
    staticClass: "kb-feedback-stats text-muted small mb-0"
  }, [_vm._v("\n          " + _vm._s(_vm.article.feedback_helpful_count || 0) + " " + _vm._s(_vm.$t("Yes")) + " · " + _vm._s(_vm.article.feedback_not_helpful_count || 0) + " " + _vm._s(_vm.$t("No")) + "\n        ")]) : _vm._e()])])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/knowledge_base/KnowledgeBaseArticleView.vue?vue&type=style&index=0&id=ca3b46c8&scoped=true&lang=css"
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/knowledge_base/KnowledgeBaseArticleView.vue?vue&type=style&index=0&id=ca3b46c8&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.kb-article-page[data-v-ca3b46c8] { padding-bottom: 2rem;\n}\n.kb-article-wrap[data-v-ca3b46c8] { max-width: 900px;\n}\n.kb-article-card[data-v-ca3b46c8] { border-radius: 12px; border: none;\n}\n.kb-article-header[data-v-ca3b46c8] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  flex-wrap: wrap;\r\n  gap: 1rem;\r\n  margin-bottom: 1.5rem;\r\n  padding-bottom: 1.25rem;\r\n  border-bottom: 1px solid #eee;\n}\n.kb-article-header-content[data-v-ca3b46c8] { flex: 1; min-width: 0;\n}\n.kb-article-title[data-v-ca3b46c8] {\r\n  font-size: 1.6rem;\r\n  font-weight: 700;\r\n  color: #2d3748;\r\n  margin: 0 0 0.5rem 0;\r\n  line-height: 1.3;\n}\n.kb-article-badges[data-v-ca3b46c8] { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;\n}\n.kb-badge-group[data-v-ca3b46c8] {\r\n  font-size: 0.8rem;\r\n  color: #667eea;\r\n  background: rgba(102, 126, 234, 0.12);\r\n  padding: 0.35rem 0.65rem;\r\n  border-radius: 8px;\r\n  font-weight: 500;\n}\n.kb-badge-internal[data-v-ca3b46c8] { font-size: 0.75rem;\n}\n.kb-back-btn[data-v-ca3b46c8] { border-radius: 8px;\n}\n.kb-article-content[data-v-ca3b46c8] {\r\n  min-height: 80px;\r\n  line-height: 1.75;\r\n  color: #4a5568;\r\n  font-size: 1rem;\n}\n.kb-article-content[data-v-ca3b46c8] img { max-width: 100%; height: auto; border-radius: 8px;\n}\n.kb-article-content[data-v-ca3b46c8] h1, .kb-article-content[data-v-ca3b46c8] h2, .kb-article-content[data-v-ca3b46c8] h3 { color: #2d3748; margin-top: 1.25em; margin-bottom: 0.5em;\n}\n.kb-article-content[data-v-ca3b46c8] p { margin-bottom: 0.75em;\n}\n.kb-article-content[data-v-ca3b46c8] ul, .kb-article-content[data-v-ca3b46c8] ol { padding-left: 1.5em; margin-bottom: 0.75em;\n}\n.kb-article-content[data-v-ca3b46c8] a { color: #667eea;\n}\n.kb-article-content[data-v-ca3b46c8] blockquote { border-left: 4px solid #667eea; padding-left: 1rem; margin: 1rem 0; color: #718096;\n}\n.kb-feedback-box[data-v-ca3b46c8] {\r\n  margin-top: 2rem;\r\n  padding: 1.25rem;\r\n  background: #f8f9fc;\r\n  border-radius: 12px;\r\n  border: 1px solid #eef1f6;\n}\n.kb-feedback-question[data-v-ca3b46c8] { font-weight: 600; margin-bottom: 0.75rem; color: #2d3748;\n}\n.kb-feedback-buttons[data-v-ca3b46c8] { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;\n}\n.kb-feedback-btn[data-v-ca3b46c8] { border-radius: 8px;\n}\n.kb-feedback-thanks[data-v-ca3b46c8] { margin-left: 0.5rem; color: #48bb78; font-size: 0.9rem;\n}\n.kb-feedback-stats[data-v-ca3b46c8] { margin-top: 0.75rem; font-size: 0.85rem;\n}\r\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/knowledge_base/KnowledgeBaseArticleView.vue?vue&type=style&index=0&id=ca3b46c8&scoped=true&lang=css"
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/knowledge_base/KnowledgeBaseArticleView.vue?vue&type=style&index=0&id=ca3b46c8&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBaseArticleView_vue_vue_type_style_index_0_id_ca3b46c8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KnowledgeBaseArticleView.vue?vue&type=style&index=0&id=ca3b46c8&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/knowledge_base/KnowledgeBaseArticleView.vue?vue&type=style&index=0&id=ca3b46c8&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBaseArticleView_vue_vue_type_style_index_0_id_ca3b46c8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBaseArticleView_vue_vue_type_style_index_0_id_ca3b46c8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/views/app/pages/knowledge_base/KnowledgeBaseArticleView.vue"
/*!***********************************************************************************!*\
  !*** ./resources/src/views/app/pages/knowledge_base/KnowledgeBaseArticleView.vue ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _KnowledgeBaseArticleView_vue_vue_type_template_id_ca3b46c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KnowledgeBaseArticleView.vue?vue&type=template&id=ca3b46c8&scoped=true */ "./resources/src/views/app/pages/knowledge_base/KnowledgeBaseArticleView.vue?vue&type=template&id=ca3b46c8&scoped=true");
/* harmony import */ var _KnowledgeBaseArticleView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KnowledgeBaseArticleView.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/knowledge_base/KnowledgeBaseArticleView.vue?vue&type=script&lang=js");
/* harmony import */ var _KnowledgeBaseArticleView_vue_vue_type_style_index_0_id_ca3b46c8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KnowledgeBaseArticleView.vue?vue&type=style&index=0&id=ca3b46c8&scoped=true&lang=css */ "./resources/src/views/app/pages/knowledge_base/KnowledgeBaseArticleView.vue?vue&type=style&index=0&id=ca3b46c8&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _KnowledgeBaseArticleView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _KnowledgeBaseArticleView_vue_vue_type_template_id_ca3b46c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _KnowledgeBaseArticleView_vue_vue_type_template_id_ca3b46c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "ca3b46c8",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/knowledge_base/KnowledgeBaseArticleView.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/knowledge_base/KnowledgeBaseArticleView.vue?vue&type=script&lang=js"
/*!***********************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/knowledge_base/KnowledgeBaseArticleView.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBaseArticleView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KnowledgeBaseArticleView.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/knowledge_base/KnowledgeBaseArticleView.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBaseArticleView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/knowledge_base/KnowledgeBaseArticleView.vue?vue&type=template&id=ca3b46c8&scoped=true"
/*!*****************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/knowledge_base/KnowledgeBaseArticleView.vue?vue&type=template&id=ca3b46c8&scoped=true ***!
  \*****************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBaseArticleView_vue_vue_type_template_id_ca3b46c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBaseArticleView_vue_vue_type_template_id_ca3b46c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBaseArticleView_vue_vue_type_template_id_ca3b46c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KnowledgeBaseArticleView.vue?vue&type=template&id=ca3b46c8&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/knowledge_base/KnowledgeBaseArticleView.vue?vue&type=template&id=ca3b46c8&scoped=true");


/***/ },

/***/ "./resources/src/views/app/pages/knowledge_base/KnowledgeBaseArticleView.vue?vue&type=style&index=0&id=ca3b46c8&scoped=true&lang=css"
/*!*******************************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/knowledge_base/KnowledgeBaseArticleView.vue?vue&type=style&index=0&id=ca3b46c8&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBaseArticleView_vue_vue_type_style_index_0_id_ca3b46c8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KnowledgeBaseArticleView.vue?vue&type=style&index=0&id=ca3b46c8&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/knowledge_base/KnowledgeBaseArticleView.vue?vue&type=style&index=0&id=ca3b46c8&scoped=true&lang=css");


/***/ }

}]);