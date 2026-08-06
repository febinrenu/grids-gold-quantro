"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["customizer"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/common/customizer.vue?vue&type=script&lang=js"
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/common/customizer.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isOpen: false
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)("config", ["getThemeMode"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["getAvailableLanguages", "getSidebarLayout"])),
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)("config", ["changeThemeMode", "changeThemeRtl"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["setSidebarLayout"])), {}, {
    setThemeMode: function setThemeMode(dark) {
      if (this.getThemeMode.dark !== dark) {
        this.changeThemeMode();
      }
    },
    changeSidebarLayout: function changeSidebarLayout(layout) {
      this.setSidebarLayout(layout);
      this.$root.$bvToast.toast("Workspace layout updated to ".concat(layout === 'vertical' ? 'column menu' : 'split rail', "."), {
        title: 'Appearance updated',
        variant: 'success',
        solid: true,
        autoHideDelay: 2200
      });
    },
    SetLocal: function SetLocal(locale) {
      this.$i18n.locale = locale;
      this.$store.dispatch("setLanguage", locale);
      Fire.$emit("ChangeLanguage");
      window.location.reload();
    }
  }),
  created: function created() {
    this.$store.dispatch("loadAvailableLanguages");
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/common/customizer.vue?vue&type=template&id=525a0006&scoped=true"
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/common/customizer.vue?vue&type=template&id=525a0006&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "customizer",
    "class": {
      open: _vm.isOpen
    }
  }, [_c("div", {
    staticClass: "handle",
    on: {
      click: function click($event) {
        _vm.isOpen = !_vm.isOpen;
      }
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: _vm.isOpen ? "x" : "sparkles"
    }
  })], 1), _vm._v(" "), _c("vue-perfect-scrollbar", {
    staticClass: "customizer-body ps rtl-ps-none",
    attrs: {
      settings: {
        suppressScrollX: true,
        wheelPropagation: false
      }
    }
  }, [_c("section", {
    staticClass: "customizer-section customizer-intro"
  }, [_c("span", {
    staticClass: "customizer-kicker"
  }, [_vm._v("Appearance Atelier")]), _vm._v(" "), _c("h3", [_vm._v("Jewelry-grade workspace polish")]), _vm._v(" "), _c("p", [_vm._v("Choose the mood that fits the room, then refine the navigation and reading direction without breaking the luxury palette.")])]), _vm._v(" "), _c("section", {
    staticClass: "customizer-section"
  }, [_c("div", {
    staticClass: "section-heading"
  }, [_c("p", [_vm._v("Theme")]), _vm._v(" "), _c("span", [_vm._v("Two independently crafted modes")])]), _vm._v(" "), _c("div", {
    staticClass: "theme-options"
  }, [_c("button", {
    staticClass: "theme-option",
    "class": {
      active: !_vm.getThemeMode.dark
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.setThemeMode(false);
      }
    }
  }, [_c("span", {
    staticClass: "theme-preview theme-preview--light"
  }, [_c("span"), _c("span"), _c("span")]), _vm._v(" "), _c("span", {
    staticClass: "theme-copy"
  }, [_c("strong", [_vm._v("Ivory Atelier")]), _vm._v(" "), _c("small", [_vm._v("Soft ivory panels, brushed gold accents, warm editorial contrast.")])]), _vm._v(" "), !_vm.getThemeMode.dark ? _c("lucide-icon", {
    staticClass: "theme-check",
    attrs: {
      name: "check"
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("button", {
    staticClass: "theme-option",
    "class": {
      active: _vm.getThemeMode.dark
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.setThemeMode(true);
      }
    }
  }, [_c("span", {
    staticClass: "theme-preview theme-preview--dark"
  }, [_c("span"), _c("span"), _c("span")]), _vm._v(" "), _c("span", {
    staticClass: "theme-copy"
  }, [_c("strong", [_vm._v("Noir Vault")]), _vm._v(" "), _c("small", [_vm._v("Obsidian surfaces, champagne highlights, deeper contrast for night operations.")])]), _vm._v(" "), _vm.getThemeMode.dark ? _c("lucide-icon", {
    staticClass: "theme-check",
    attrs: {
      name: "check"
    }
  }) : _vm._e()], 1)])]), _vm._v(" "), _c("section", {
    staticClass: "customizer-section"
  }, [_c("div", {
    staticClass: "section-heading"
  }, [_c("p", [_vm._v("Navigation")]), _vm._v(" "), _c("span", [_vm._v("Match your team’s browsing style")])]), _vm._v(" "), _c("div", {
    staticClass: "layout-options"
  }, [_c("label", {
    staticClass: "layout-option",
    "class": {
      active: _vm.getSidebarLayout === "horizontal"
    }
  }, [_c("input", {
    attrs: {
      type: "radio",
      name: "sidebar-layout",
      value: "horizontal"
    },
    domProps: {
      checked: _vm.getSidebarLayout === "horizontal"
    },
    on: {
      change: function change($event) {
        return _vm.changeSidebarLayout("horizontal");
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "layout-preview layout-preview--rail"
  }, [_c("span", {
    staticClass: "rail"
  }), _vm._v(" "), _c("span", {
    staticClass: "panel"
  }), _vm._v(" "), _c("span", {
    staticClass: "canvas"
  })]), _vm._v(" "), _c("span", {
    staticClass: "option-copy"
  }, [_c("strong", [_vm._v("Split rail")]), _vm._v(" "), _c("small", [_vm._v("Primary navigation in a compact icon rail with a focused sub-panel.")])])]), _vm._v(" "), _c("label", {
    staticClass: "layout-option",
    "class": {
      active: _vm.getSidebarLayout === "vertical"
    }
  }, [_c("input", {
    attrs: {
      type: "radio",
      name: "sidebar-layout",
      value: "vertical"
    },
    domProps: {
      checked: _vm.getSidebarLayout === "vertical"
    },
    on: {
      change: function change($event) {
        return _vm.changeSidebarLayout("vertical");
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "layout-preview layout-preview--column"
  }, [_c("span", {
    staticClass: "column"
  }), _vm._v(" "), _c("span", {
    staticClass: "canvas"
  })]), _vm._v(" "), _c("span", {
    staticClass: "option-copy"
  }, [_c("strong", [_vm._v("Column menu")]), _vm._v(" "), _c("small", [_vm._v("A fuller navigation column ideal for dense catalog and reporting workflows.")])])])])]), _vm._v(" "), _vm.getThemeMode.layout != "vertical-sidebar" && _vm.getThemeMode.layout != "vertical-sidebar-two" ? _c("section", {
    staticClass: "customizer-section"
  }, [_c("div", {
    staticClass: "section-heading"
  }, [_c("p", [_vm._v("Reading direction")]), _vm._v(" "), _c("span", [_vm._v("Switch instantly for RTL languages")])]), _vm._v(" "), _c("label", {
    staticClass: "toggle-row"
  }, [_c("span", [_c("strong", [_vm._v("RTL layout")]), _vm._v(" "), _c("small", [_vm._v("Mirror navigation, forms, and content flow.")])]), _vm._v(" "), _c("span", {
    staticClass: "switch switch-primary"
  }, [_c("input", {
    attrs: {
      type: "checkbox",
      id: "rtl-checkbox"
    },
    domProps: {
      checked: _vm.getThemeMode.rtl
    },
    on: {
      change: _vm.changeThemeRtl
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "slider"
  })])])]) : _vm._e(), _vm._v(" "), _c("section", {
    staticClass: "customizer-section"
  }, [_c("div", {
    staticClass: "section-heading"
  }, [_c("p", [_vm._v("Language")]), _vm._v(" "), _c("span", [_vm._v("Choose the workspace language")])]), _vm._v(" "), _c("div", {
    staticClass: "language-list"
  }, _vm._l(_vm.getAvailableLanguages, function (lang) {
    return _c("button", {
      key: lang.locale,
      staticClass: "language-item",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.SetLocal(lang.locale);
        }
      }
    }, [_c("img", {
      staticClass: "flag-icon",
      attrs: {
        src: "/flags/".concat(lang.flag),
        alt: lang.name
      }
    }), _vm._v(" "), _c("span", [_vm._v(_vm._s(lang.name))])]);
  }), 0)])])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/common/customizer.vue?vue&type=style&index=0&id=525a0006&lang=scss&scoped=true"
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/common/customizer.vue?vue&type=style&index=0&id=525a0006&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".customizer-intro[data-v-525a0006] {\n  padding-bottom: 0.35rem;\n}\n.customizer-kicker[data-v-525a0006] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.35rem 0.7rem;\n  border-radius: 999px;\n  background: rgba(180, 136, 82, 0.12);\n  color: var(--lux-accent-strong, #8b622f);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.customizer-section[data-v-525a0006] {\n  padding: 1.2rem 1.25rem;\n  border-bottom: 1px solid var(--lux-border, rgba(96, 74, 48, 0.12));\n}\n.customizer-section[data-v-525a0006]:last-child {\n  border-bottom: none;\n}\n.customizer-intro h3[data-v-525a0006],\n.section-heading p[data-v-525a0006],\n.option-copy strong[data-v-525a0006],\n.theme-copy strong[data-v-525a0006],\n.toggle-row strong[data-v-525a0006] {\n  color: var(--lux-heading, #1e170f);\n}\n.customizer-intro h3[data-v-525a0006] {\n  margin: 0.85rem 0 0.45rem;\n  font-family: \"Source Serif 4\", Georgia, serif;\n  font-size: 1.25rem;\n  letter-spacing: -0.03em;\n}\n.customizer-intro p[data-v-525a0006],\n.section-heading span[data-v-525a0006],\n.option-copy small[data-v-525a0006],\n.theme-copy small[data-v-525a0006],\n.toggle-row small[data-v-525a0006] {\n  display: block;\n  color: var(--lux-muted, #746555);\n  line-height: 1.6;\n}\n.section-heading[data-v-525a0006] {\n  margin-bottom: 0.95rem;\n}\n.section-heading p[data-v-525a0006] {\n  margin: 0;\n  font-family: \"Source Serif 4\", Georgia, serif;\n  font-size: 1rem;\n}\n.section-heading span[data-v-525a0006] {\n  margin-top: 0.2rem;\n  font-size: 0.82rem;\n}\n.theme-options[data-v-525a0006],\n.layout-options[data-v-525a0006] {\n  display: grid;\n  gap: 0.85rem;\n}\n.theme-option[data-v-525a0006],\n.layout-option[data-v-525a0006] {\n  position: relative;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  gap: 0.85rem;\n  align-items: center;\n  width: 100%;\n  padding: 0.95rem;\n  border: 1px solid var(--lux-border, rgba(96, 74, 48, 0.12));\n  border-radius: 18px;\n  background: rgba(255, 251, 245, 0.74);\n  cursor: pointer;\n  transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease, background 0.22s ease;\n}\n.theme-option[data-v-525a0006]:hover,\n.layout-option[data-v-525a0006]:hover {\n  transform: translateY(-1px);\n  border-color: rgba(180, 136, 82, 0.28);\n  box-shadow: 0 14px 24px rgba(58, 36, 16, 0.08);\n}\n.theme-option.active[data-v-525a0006],\n.layout-option.active[data-v-525a0006] {\n  border-color: rgba(180, 136, 82, 0.34);\n  background: rgba(180, 136, 82, 0.1);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.34), 0 16px 30px rgba(58, 36, 16, 0.08);\n}\n.theme-option[data-v-525a0006] {\n  text-align: left;\n}\n.theme-option[data-v-525a0006]:focus,\n.layout-option[data-v-525a0006]:focus-within,\n.language-item[data-v-525a0006]:focus,\n.toggle-row input:focus + .slider[data-v-525a0006] {\n  outline: none;\n  box-shadow: var(--lux-ring, 0 0 0 3px rgba(180, 136, 82, 0.14));\n}\n.theme-preview[data-v-525a0006],\n.layout-preview[data-v-525a0006] {\n  position: relative;\n  display: inline-grid;\n  flex-shrink: 0;\n  overflow: hidden;\n  border-radius: 14px;\n  border: 1px solid rgba(96, 74, 48, 0.14);\n}\n.theme-preview[data-v-525a0006] {\n  width: 62px;\n  height: 62px;\n  grid-template-columns: 14px 1fr;\n  gap: 5px;\n  padding: 6px;\n}\n.theme-preview span[data-v-525a0006]:nth-child(1) {\n  border-radius: 10px;\n}\n.theme-preview span[data-v-525a0006]:nth-child(2),\n.theme-preview span[data-v-525a0006]:nth-child(3) {\n  border-radius: 10px;\n}\n.theme-preview span[data-v-525a0006]:nth-child(2) {\n  height: 16px;\n}\n.theme-preview span[data-v-525a0006]:nth-child(3) {\n  margin-top: auto;\n  height: 28px;\n}\n.theme-preview--light[data-v-525a0006] {\n  background: #f8f2e7;\n}\n.theme-preview--light span[data-v-525a0006]:nth-child(1) {\n  background: linear-gradient(180deg, #efe1cc, #e5d3b8);\n}\n.theme-preview--light span[data-v-525a0006]:nth-child(2) {\n  background: #fffdf8;\n}\n.theme-preview--light span[data-v-525a0006]:nth-child(3) {\n  background: linear-gradient(180deg, #d2b183, #b48852);\n}\n.theme-preview--dark[data-v-525a0006] {\n  background: #17120f;\n}\n.theme-preview--dark span[data-v-525a0006]:nth-child(1) {\n  background: linear-gradient(180deg, #2d241e, #241c17);\n}\n.theme-preview--dark span[data-v-525a0006]:nth-child(2) {\n  background: #201914;\n}\n.theme-preview--dark span[data-v-525a0006]:nth-child(3) {\n  background: linear-gradient(180deg, #f0d5a4, #d6b17a);\n}\n.theme-copy[data-v-525a0006],\n.option-copy[data-v-525a0006] {\n  display: block;\n  text-align: left;\n}\n.theme-copy strong[data-v-525a0006],\n.option-copy strong[data-v-525a0006],\n.toggle-row strong[data-v-525a0006] {\n  display: block;\n  font-size: 0.92rem;\n  margin-bottom: 0.18rem;\n}\n.theme-check[data-v-525a0006] {\n  color: var(--lux-accent-strong, #8b622f);\n}\n.layout-option input[type=radio][data-v-525a0006] {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n.layout-preview[data-v-525a0006] {\n  width: 70px;\n  height: 56px;\n  padding: 6px;\n  background: #f6efe4;\n}\n.layout-preview--rail[data-v-525a0006] {\n  grid-template-columns: 10px 18px 1fr;\n  gap: 5px;\n}\n.layout-preview--rail .rail[data-v-525a0006],\n.layout-preview--rail .panel[data-v-525a0006],\n.layout-preview--rail .canvas[data-v-525a0006],\n.layout-preview--column .column[data-v-525a0006],\n.layout-preview--column .canvas[data-v-525a0006] {\n  border-radius: 10px;\n}\n.layout-preview--rail .rail[data-v-525a0006] {\n  background: linear-gradient(180deg, #d4ba93, #b48852);\n}\n.layout-preview--rail .panel[data-v-525a0006] {\n  background: #ebe0cf;\n}\n.layout-preview--rail .canvas[data-v-525a0006] {\n  background: #fffdf8;\n}\n.layout-preview--column[data-v-525a0006] {\n  grid-template-columns: 22px 1fr;\n  gap: 6px;\n}\n.layout-preview--column .column[data-v-525a0006] {\n  background: linear-gradient(180deg, #3a2f25, #201812);\n}\n.layout-preview--column .canvas[data-v-525a0006] {\n  background: linear-gradient(180deg, #fffdf8, #f3eadc);\n}\n.toggle-row[data-v-525a0006] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1rem;\n  border-radius: 18px;\n  border: 1px solid var(--lux-border, rgba(96, 74, 48, 0.12));\n  background: rgba(255, 251, 245, 0.72);\n}\n.language-list[data-v-525a0006] {\n  display: grid;\n  gap: 0.65rem;\n}\n.language-item[data-v-525a0006] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  width: 100%;\n  padding: 0.85rem 0.9rem;\n  border: 1px solid var(--lux-border, rgba(96, 74, 48, 0.12));\n  border-radius: 16px;\n  background: rgba(255, 251, 245, 0.74);\n  color: var(--lux-text, #2f261d);\n  cursor: pointer;\n  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;\n}\n.language-item[data-v-525a0006]:hover {\n  transform: translateY(-1px);\n  border-color: rgba(180, 136, 82, 0.28);\n  background: rgba(180, 136, 82, 0.08);\n}\n.flag-icon[data-v-525a0006] {\n  width: 22px;\n  height: 22px;\n  border-radius: 999px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  box-shadow: 0 4px 14px rgba(58, 36, 16, 0.12);\n}\nbody.dark-theme .theme-option[data-v-525a0006],\nbody.dark-theme .layout-option[data-v-525a0006],\nbody.dark-theme .toggle-row[data-v-525a0006],\nbody.dark-theme .language-item[data-v-525a0006] {\n  background: rgba(31, 27, 24, 0.82);\n}\nbody.dark-theme .layout-preview[data-v-525a0006] {\n  background: #17120f;\n}\nbody.dark-theme .layout-preview--rail .panel[data-v-525a0006] {\n  background: #2a221b;\n}\nbody.dark-theme .layout-preview--rail .canvas[data-v-525a0006],\nbody.dark-theme .layout-preview--column .canvas[data-v-525a0006] {\n  background: #231c17;\n}", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/common/customizer.vue?vue&type=style&index=0&id=525a0006&lang=scss&scoped=true"
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/common/customizer.vue?vue&type=style&index=0&id=525a0006&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customizer_vue_vue_type_style_index_0_id_525a0006_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./customizer.vue?vue&type=style&index=0&id=525a0006&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/common/customizer.vue?vue&type=style&index=0&id=525a0006&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customizer_vue_vue_type_style_index_0_id_525a0006_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customizer_vue_vue_type_style_index_0_id_525a0006_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/components/common/customizer.vue"
/*!********************************************************!*\
  !*** ./resources/src/components/common/customizer.vue ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _customizer_vue_vue_type_template_id_525a0006_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customizer.vue?vue&type=template&id=525a0006&scoped=true */ "./resources/src/components/common/customizer.vue?vue&type=template&id=525a0006&scoped=true");
/* harmony import */ var _customizer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customizer.vue?vue&type=script&lang=js */ "./resources/src/components/common/customizer.vue?vue&type=script&lang=js");
/* harmony import */ var _customizer_vue_vue_type_style_index_0_id_525a0006_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customizer.vue?vue&type=style&index=0&id=525a0006&lang=scss&scoped=true */ "./resources/src/components/common/customizer.vue?vue&type=style&index=0&id=525a0006&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _customizer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _customizer_vue_vue_type_template_id_525a0006_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _customizer_vue_vue_type_template_id_525a0006_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "525a0006",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/components/common/customizer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/components/common/customizer.vue?vue&type=script&lang=js"
/*!********************************************************************************!*\
  !*** ./resources/src/components/common/customizer.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customizer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./customizer.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/common/customizer.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customizer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/components/common/customizer.vue?vue&type=template&id=525a0006&scoped=true"
/*!**************************************************************************************************!*\
  !*** ./resources/src/components/common/customizer.vue?vue&type=template&id=525a0006&scoped=true ***!
  \**************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_customizer_vue_vue_type_template_id_525a0006_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_customizer_vue_vue_type_template_id_525a0006_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_customizer_vue_vue_type_template_id_525a0006_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./customizer.vue?vue&type=template&id=525a0006&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/common/customizer.vue?vue&type=template&id=525a0006&scoped=true");


/***/ },

/***/ "./resources/src/components/common/customizer.vue?vue&type=style&index=0&id=525a0006&lang=scss&scoped=true"
/*!*****************************************************************************************************************!*\
  !*** ./resources/src/components/common/customizer.vue?vue&type=style&index=0&id=525a0006&lang=scss&scoped=true ***!
  \*****************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customizer_vue_vue_type_style_index_0_id_525a0006_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./customizer.vue?vue&type=style&index=0&id=525a0006&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/common/customizer.vue?vue&type=style&index=0&id=525a0006&lang=scss&scoped=true");


/***/ }

}]);