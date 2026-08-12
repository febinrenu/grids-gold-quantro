"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["module_settings"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/module_settings.vue?vue&type=script&lang=js"
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/module_settings.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Module Settings"
  },
  data: function data() {
    return {
      isLoading: true,
      SubmitProcessing: false,
      modules_info: [],
      module_zip: '',
      data: new FormData(),
      isDragging: false,
      filter: 'all',
      togglingModule: null
    };
  },
  computed: {
    activeCount: function activeCount() {
      return this.modules_info.filter(function (m) {
        return m.status;
      }).length;
    },
    inactiveCount: function inactiveCount() {
      return this.modules_info.filter(function (m) {
        return !m.status;
      }).length;
    },
    filteredModules: function filteredModules() {
      if (this.filter === 'active') return this.modules_info.filter(function (m) {
        return m.status;
      });
      if (this.filter === 'inactive') return this.modules_info.filter(function (m) {
        return !m.status;
      });
      return this.modules_info;
    }
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["refreshUserPermissions"])), {}, {
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    formatFileSize: function formatFileSize(bytes) {
      if (!bytes) return '0 B';
      var k = 1024;
      var sizes = ['B', 'KB', 'MB', 'GB'];
      var i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
    },
    formatModuleName: function formatModuleName(name) {
      return name.replace(/([A-Z])/g, ' $1').replace(/^[\s]/, '').trim();
    },
    getModuleIcon: function getModuleIcon(name) {
      var icons = {
        'ApiDocs': 'clipboard-list',
        'WooCommerceSync': 'shopping-cart',
        'Ecommerce': 'shopping-bag',
        'HRM': 'users',
        'Commission': 'banknote',
        'Contracts': 'file-pen',
        'Bookings': 'calendar',
        'Reports': 'bar-chart',
        'Recruit': 'users'
      };
      return icons[name] || 'puzzle';
    },
    getModuleDescription: function getModuleDescription(name) {
      var descriptions = {
        'ApiDocs': 'Interactive API documentation with code examples and endpoint reference.',
        'WooCommerceSync': 'Sync products and stock with your WooCommerce store.',
        'Ecommerce': 'Full-featured online store with product catalog and checkout.',
        'HRM': 'Human resource management with employees, attendance, and payroll.',
        'Commission': 'Sales agent commission programs, rules, and tracking.',
        'Contracts': 'Contract management with templates, tasks, and attachments.',
        'Bookings': 'Appointment booking and service job management.',
        'Reports': 'Advanced reporting and business analytics.',
        'Recruit': 'Recruitment management with jobs, candidates, applications, interviews and reports.'
      };
      return descriptions[name] || 'Extends your Stocky application with additional functionality.';
    },
    onFileSelected: function onFileSelected(e) {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$_this$$refs$Up, valid;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _this.$refs.Upload_Module.validate(e);
            case 1:
              _yield$_this$$refs$Up = _context.v;
              valid = _yield$_this$$refs$Up.valid;
              if (valid) {
                _this.module_zip = e.target.files[0];
              } else {
                _this.module_zip = "";
              }
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    onFileDrop: function onFileDrop(e) {
      this.isDragging = false;
      var files = e.dataTransfer.files;
      if (files.length && files[0].name.endsWith('.zip')) {
        this.module_zip = files[0];
      } else {
        this.makeToast("danger", "Please upload a .zip file", this.$t("Failed"));
      }
    },
    removeFile: function removeFile() {
      this.module_zip = '';
      this.data = new FormData();
      if (this.$refs.fileInput) {
        this.$refs.fileInput.value = '';
      }
    },
    update_status_module: function update_status_module(module_info) {
      var _this2 = this;
      this.togglingModule = module_info.module_name;
      axios.post("update_status_module", {
        status: module_info.status,
        name: module_info.module_name
      }).then(function (response) {
        if (module_info.status) {
          _this2.makeToast("success", _this2.$t("Module_enabled_success") || "Module enabled successfully", _this2.$t("Success"));
        } else {
          _this2.makeToast("warning", _this2.$t("Module_Disabled_success") || "Module disabled successfully", _this2.$t("Warning"));
        }
        _this2.togglingModule = null;
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      })["catch"](function (error) {
        module_info.status = !module_info.status;
        _this2.togglingModule = null;
        _this2.makeToast("danger", _this2.$t("Delete_Therewassomethingwronge") || "Something went wrong", _this2.$t("Warning"));
      });
    },
    get_modules_info: function get_modules_info() {
      var _this3 = this;
      axios.get("get_modules_info").then(function (response) {
        _this3.modules_info = response.data;
        _this3.isLoading = false;
      })["catch"](function (error) {
        setTimeout(function () {
          _this3.isLoading = false;
        }, 500);
      });
    },
    Submit_Upload_Module: function Submit_Upload_Module() {
      var _this4 = this;
      this.$refs.ref_Upload_Module.validate().then(function (success) {
        if (!success) {
          _this4.makeToast("danger", _this4.$t("Please_Upload_the_Correct_Module") || "Please upload a valid module", _this4.$t("Failed"));
        } else {
          _this4.Upload_Module();
        }
      });
    },
    Upload_Module: function Upload_Module() {
      var self = this;
      self.SubmitProcessing = true;
      self.data.append("module_zip", self.module_zip);
      axios.post("upload_module", self.data).then(function (response) {
        self.SubmitProcessing = false;
        self.module_zip = '';
        self.data = new FormData();
        self.makeToast("success", self.$t("Uploaded_Success") || "Module installed successfully", self.$t("Success"));
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      })["catch"](function (error) {
        self.SubmitProcessing = false;
        self.makeToast("danger", self.$t("InvalidData") || "Invalid module file", self.$t("Failed"));
      });
    }
  }),
  created: function created() {
    this.get_modules_info();
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/module_settings.vue?vue&type=template&id=ec5ff4f2&scoped=true"
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/module_settings.vue?vue&type=template&id=ec5ff4f2&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("breadcumb", {
    attrs: {
      page: _vm.$t("module_settings"),
      folder: _vm.$t("Settings")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "d-flex justify-content-center align-items-center",
    staticStyle: {
      "min-height": "300px"
    }
  }, [_c("div", {
    staticClass: "spinner spinner-primary mr-3"
  })]) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("div", [_c("div", {
    staticClass: "module-header-card mb-4"
  }, [_c("div", {
    staticClass: "module-header-content"
  }, [_c("div", {
    staticClass: "module-header-icon"
  }, [_c("lucide-icon", {
    staticStyle: {
      "font-size": "28px"
    },
    attrs: {
      name: "puzzle"
    }
  })], 1), _vm._v(" "), _c("div", [_c("h3", {
    staticClass: "module-header-title"
  }, [_vm._v(_vm._s(_vm.$t("module_settings") || "Module Settings"))]), _vm._v(" "), _c("p", {
    staticClass: "module-header-desc"
  }, [_vm._v("Install, manage and configure modules to extend your Stocky application.")])])]), _vm._v(" "), _c("div", {
    staticClass: "module-header-stats"
  }, [_c("div", {
    staticClass: "stat-item"
  }, [_c("span", {
    staticClass: "stat-number"
  }, [_vm._v(_vm._s(_vm.modules_info.length))]), _vm._v(" "), _c("span", {
    staticClass: "stat-label"
  }, [_vm._v("Installed")])]), _vm._v(" "), _c("div", {
    staticClass: "stat-item"
  }, [_c("span", {
    staticClass: "stat-number stat-active"
  }, [_vm._v(_vm._s(_vm.activeCount))]), _vm._v(" "), _c("span", {
    staticClass: "stat-label"
  }, [_vm._v("Active")])]), _vm._v(" "), _c("div", {
    staticClass: "stat-item"
  }, [_c("span", {
    staticClass: "stat-number stat-inactive"
  }, [_vm._v(_vm._s(_vm.inactiveCount))]), _vm._v(" "), _c("span", {
    staticClass: "stat-label"
  }, [_vm._v("Inactive")])])])]), _vm._v(" "), _c("div", {
    staticClass: "upload-card mb-4"
  }, [_c("div", {
    staticClass: "upload-card-header"
  }, [_c("lucide-icon", {
    staticStyle: {
      "font-size": "18px"
    },
    attrs: {
      name: "upload"
    }
  }), _vm._v(" "), _c("span", [_vm._v("Install New Module")])], 1), _vm._v(" "), _c("div", {
    staticClass: "upload-card-body"
  }, [_c("validation-observer", {
    ref: "ref_Upload_Module"
  }, [_c("b-form", {
    attrs: {
      enctype: "multipart/form-data"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Submit_Upload_Module.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "upload-zone",
    "class": {
      "drag-over": _vm.isDragging,
      "has-file": _vm.module_zip
    },
    on: {
      dragover: function dragover($event) {
        $event.preventDefault();
        _vm.isDragging = true;
      },
      dragleave: function dragleave($event) {
        $event.preventDefault();
        _vm.isDragging = false;
      },
      drop: function drop($event) {
        $event.preventDefault();
        return _vm.onFileDrop.apply(null, arguments);
      }
    }
  }, [_c("validation-provider", {
    ref: "Upload_Module",
    attrs: {
      name: "Upload Module"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var validate = _ref.validate,
          valid = _ref.valid,
          errors = _ref.errors;
        return _c("div", {}, [_c("input", {
          ref: "fileInput",
          staticClass: "d-none",
          "class": {
            "is-invalid": !!errors.length
          },
          attrs: {
            state: errors[0] ? false : valid ? true : null,
            type: "file",
            accept: ".zip"
          },
          on: {
            change: _vm.onFileSelected
          }
        }), _vm._v(" "), _c("div", {
          staticClass: "upload-zone-content",
          on: {
            click: function click($event) {
              return _vm.$refs.fileInput.click();
            }
          }
        }, [!_vm.module_zip ? _c("div", {
          staticClass: "upload-placeholder"
        }, [_c("div", {
          staticClass: "upload-icon-circle"
        }, [_c("lucide-icon", {
          staticStyle: {
            "font-size": "24px"
          },
          attrs: {
            name: "upload"
          }
        })], 1), _vm._v(" "), _c("p", {
          staticClass: "upload-text"
        }, [_vm._v("Drag & drop your module "), _c("strong", [_vm._v(".zip")]), _vm._v(" file here")]), _vm._v(" "), _c("p", {
          staticClass: "upload-subtext"
        }, [_vm._v("or click to browse files")])]) : _c("div", {
          staticClass: "upload-selected"
        }, [_c("div", {
          staticClass: "file-icon-circle"
        }, [_c("lucide-icon", {
          staticStyle: {
            "font-size": "22px"
          },
          attrs: {
            name: "file-archive"
          }
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "file-details"
        }, [_c("span", {
          staticClass: "file-name"
        }, [_vm._v(_vm._s(_vm.module_zip.name))]), _vm._v(" "), _c("span", {
          staticClass: "file-size"
        }, [_vm._v(_vm._s(_vm.formatFileSize(_vm.module_zip.size)))])]), _vm._v(" "), _c("button", {
          staticClass: "file-remove",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.removeFile.apply(null, arguments);
            }
          }
        }, [_c("lucide-icon", {
          attrs: {
            name: "x"
          }
        })], 1)])]), _vm._v(" "), errors[0] ? _c("b-form-invalid-feedback", {
          staticClass: "text-center mt-2",
          attrs: {
            state: false
          }
        }, [_vm._v("\n                    " + _vm._s(errors[0]) + "\n                  ")]) : _vm._e()], 1);
      }
    }], null, false, 2938315580)
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "text-center mt-3"
  }, [_c("b-button", {
    staticClass: "upload-btn",
    attrs: {
      variant: "primary",
      type: "submit",
      disabled: _vm.SubmitProcessing || !_vm.module_zip
    }
  }, [!_vm.SubmitProcessing ? _c("span", [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "upload"
    }
  }), _vm._v(" Install Module\n                ")], 1) : _c("span", {
    staticClass: "d-flex align-items-center justify-content-center"
  }, [_c("div", {
    staticClass: "spinner spinner-white sm mr-2"
  }), _vm._v(" Installing...\n                ")])])], 1)])], 1)], 1)]), _vm._v(" "), _vm.modules_info.length > 0 ? _c("div", [_c("div", {
    staticClass: "modules-section-header mb-3"
  }, [_c("h4", {
    staticClass: "modules-section-title"
  }, [_c("lucide-icon", {
    staticClass: "mr-2",
    staticStyle: {
      "font-size": "18px"
    },
    attrs: {
      name: "settings"
    }
  }), _vm._v("\n          Installed Modules\n        ")], 1), _vm._v(" "), _c("div", {
    staticClass: "modules-filter"
  }, [_c("button", {
    staticClass: "filter-btn",
    "class": {
      active: _vm.filter === "all"
    },
    on: {
      click: function click($event) {
        _vm.filter = "all";
      }
    }
  }, [_vm._v("All")]), _vm._v(" "), _c("button", {
    staticClass: "filter-btn",
    "class": {
      active: _vm.filter === "active"
    },
    on: {
      click: function click($event) {
        _vm.filter = "active";
      }
    }
  }, [_vm._v("Active")]), _vm._v(" "), _c("button", {
    staticClass: "filter-btn",
    "class": {
      active: _vm.filter === "inactive"
    },
    on: {
      click: function click($event) {
        _vm.filter = "inactive";
      }
    }
  }, [_vm._v("Inactive")])])]), _vm._v(" "), _c("b-row", _vm._l(_vm.filteredModules, function (module_item) {
    return _c("b-col", {
      key: module_item.module_name,
      staticClass: "mb-4",
      attrs: {
        lg: "4",
        md: "6",
        sm: "12"
      }
    }, [_c("div", {
      staticClass: "module-card",
      "class": {
        "module-active": module_item.status,
        "module-inactive": !module_item.status
      }
    }, [_c("div", {
      staticClass: "module-status-bar",
      "class": module_item.status ? "bar-active" : "bar-inactive"
    }), _vm._v(" "), _c("div", {
      staticClass: "module-card-body"
    }, [_c("div", {
      staticClass: "module-card-top"
    }, [_c("div", {
      staticClass: "module-icon-wrapper",
      "class": module_item.status ? "icon-active" : "icon-inactive"
    }, [_c("lucide-icon", {
      attrs: {
        name: _vm.getModuleIcon(module_item.module_name),
        size: 22
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "module-badge-wrapper"
    }, [_c("span", {
      staticClass: "module-status-badge",
      "class": module_item.status ? "badge-active" : "badge-inactive"
    }, [_vm._v("\n                    " + _vm._s(module_item.status ? "Active" : "Inactive") + "\n                  ")])])]), _vm._v(" "), _c("div", {
      staticClass: "module-info"
    }, [_c("h5", {
      staticClass: "module-name"
    }, [_vm._v(_vm._s(_vm.formatModuleName(module_item.module_name)))]), _vm._v(" "), _c("p", {
      staticClass: "module-description"
    }, [_vm._v(_vm._s(_vm.getModuleDescription(module_item.module_name)))])]), _vm._v(" "), _c("div", {
      staticClass: "module-meta"
    }, [_c("div", {
      staticClass: "meta-item"
    }, [_c("lucide-icon", {
      staticStyle: {
        "font-size": "12px"
      },
      attrs: {
        name: "tag"
      }
    }), _vm._v(" "), _c("span", [_vm._v("v" + _vm._s(module_item.current_version))])], 1)]), _vm._v(" "), _c("div", {
      staticClass: "module-card-footer"
    }, [_c("div", {
      staticClass: "module-toggle-wrapper"
    }, [_c("label", {
      staticClass: "modern-toggle"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: module_item.status,
        expression: "module_item.status"
      }],
      attrs: {
        type: "checkbox",
        disabled: _vm.togglingModule === module_item.module_name
      },
      domProps: {
        checked: Array.isArray(module_item.status) ? _vm._i(module_item.status, null) > -1 : module_item.status
      },
      on: {
        change: [function ($event) {
          var $$a = module_item.status,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(module_item, "status", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(module_item, "status", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(module_item, "status", $$c);
          }
        }, function ($event) {
          return _vm.update_status_module(module_item);
        }]
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "toggle-slider"
    })]), _vm._v(" "), _c("span", {
      staticClass: "toggle-label",
      "class": module_item.status ? "text-success" : "text-muted"
    }, [_vm._v("\n                    " + _vm._s(module_item.status ? "Enabled" : "Disabled") + "\n                  ")])])])])])]);
  }), 1)], 1) : _c("div", {
    staticClass: "empty-state"
  }, [_c("div", {
    staticClass: "empty-state-icon"
  }, [_c("lucide-icon", {
    staticStyle: {
      "font-size": "48px"
    },
    attrs: {
      name: "puzzle"
    }
  })], 1), _vm._v(" "), _c("h5", {
    staticClass: "empty-state-title"
  }, [_vm._v("No Modules Installed")]), _vm._v(" "), _c("p", {
    staticClass: "empty-state-desc"
  }, [_vm._v("Upload a module zip file above to get started. Modules add new features and functionality to your Stocky application.")])])]) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/module_settings.vue?vue&type=style&index=0&id=ec5ff4f2&scoped=true&lang=css"
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/module_settings.vue?vue&type=style&index=0&id=ec5ff4f2&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n/* ========== Header Card ========== */\n.module-header-card[data-v-ec5ff4f2] {\n  background: linear-gradient(135deg, #4361ee 0%, #7c3aed 100%);\n  border-radius: 12px;\n  padding: 28px 32px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 20px;\n  box-shadow: 0 4px 20px rgba(67, 97, 238, 0.25);\n}\n.module-header-content[data-v-ec5ff4f2] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.module-header-icon[data-v-ec5ff4f2] {\n  width: 52px;\n  height: 52px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n}\n.module-header-title[data-v-ec5ff4f2] {\n  color: #fff;\n  font-size: 22px;\n  font-weight: 700;\n  margin: 0;\n}\n.module-header-desc[data-v-ec5ff4f2] {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 14px;\n  margin: 4px 0 0;\n}\n.module-header-stats[data-v-ec5ff4f2] {\n  display: flex;\n  gap: 24px;\n}\n.stat-item[data-v-ec5ff4f2] {\n  text-align: center;\n}\n.stat-number[data-v-ec5ff4f2] {\n  display: block;\n  font-size: 26px;\n  font-weight: 800;\n  color: #fff;\n  line-height: 1.2;\n}\n.stat-active[data-v-ec5ff4f2] { color: #a7f3d0;\n}\n.stat-inactive[data-v-ec5ff4f2] { color: #fecaca;\n}\n.stat-label[data-v-ec5ff4f2] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.7);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 600;\n}\n\n/* ========== Upload Card ========== */\n.upload-card[data-v-ec5ff4f2] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n}\n.upload-card-header[data-v-ec5ff4f2] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 24px;\n  border-bottom: 1px solid #e2e8f0;\n  font-weight: 600;\n  font-size: 15px;\n  color: #1e293b;\n}\n.upload-card-body[data-v-ec5ff4f2] {\n  padding: 24px;\n}\n\n/* Upload Zone */\n.upload-zone[data-v-ec5ff4f2] {\n  border: 2px dashed #cbd5e1;\n  border-radius: 12px;\n  transition: all 0.25s ease;\n  background: #f8fafc;\n}\n.upload-zone[data-v-ec5ff4f2]:hover {\n  border-color: #4361ee;\n  background: rgba(67, 97, 238, 0.03);\n}\n.upload-zone.drag-over[data-v-ec5ff4f2] {\n  border-color: #4361ee;\n  background: rgba(67, 97, 238, 0.06);\n  transform: scale(1.01);\n}\n.upload-zone.has-file[data-v-ec5ff4f2] {\n  border-color: #22c55e;\n  border-style: solid;\n  background: rgba(34, 197, 94, 0.04);\n}\n.upload-zone-content[data-v-ec5ff4f2] {\n  cursor: pointer;\n  padding: 32px 20px;\n}\n.upload-placeholder[data-v-ec5ff4f2] {\n  text-align: center;\n}\n.upload-icon-circle[data-v-ec5ff4f2] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: rgba(67, 97, 238, 0.1);\n  color: #4361ee;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n}\n.upload-text[data-v-ec5ff4f2] {\n  font-size: 15px;\n  color: #475569;\n  margin: 0;\n}\n.upload-subtext[data-v-ec5ff4f2] {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 4px 0 0;\n}\n\n/* Selected file */\n.upload-selected[data-v-ec5ff4f2] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.file-icon-circle[data-v-ec5ff4f2] {\n  width: 48px;\n  height: 48px;\n  border-radius: 10px;\n  background: rgba(34, 197, 94, 0.1);\n  color: #22c55e;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.file-details[data-v-ec5ff4f2] {\n  flex: 1;\n  min-width: 0;\n}\n.file-name[data-v-ec5ff4f2] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1e293b;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.file-size[data-v-ec5ff4f2] {\n  display: block;\n  font-size: 12px;\n  color: #94a3b8;\n  margin-top: 2px;\n}\n.file-remove[data-v-ec5ff4f2] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: none;\n  background: rgba(239, 68, 68, 0.08);\n  color: #ef4444;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.file-remove[data-v-ec5ff4f2]:hover {\n  background: rgba(239, 68, 68, 0.16);\n}\n\n/* Upload button */\n.upload-btn[data-v-ec5ff4f2] {\n  padding: 10px 32px;\n  font-weight: 600;\n  border-radius: 8px;\n  font-size: 14px;\n  min-width: 180px;\n}\n\n/* ========== Module Section Header ========== */\n.modules-section-header[data-v-ec5ff4f2] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.modules-section-title[data-v-ec5ff4f2] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.modules-filter[data-v-ec5ff4f2] {\n  display: flex;\n  gap: 4px;\n  background: #f1f5f9;\n  padding: 4px;\n  border-radius: 8px;\n}\n.filter-btn[data-v-ec5ff4f2] {\n  padding: 6px 16px;\n  border: none;\n  background: transparent;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #64748b;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.filter-btn[data-v-ec5ff4f2]:hover {\n  color: #1e293b;\n}\n.filter-btn.active[data-v-ec5ff4f2] {\n  background: #fff;\n  color: #4361ee;\n  font-weight: 600;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n\n/* ========== Module Card ========== */\n.module-card[data-v-ec5ff4f2] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n  transition: all 0.25s ease;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  height: 100%;\n}\n.module-card[data-v-ec5ff4f2]:hover {\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n\n/* Status bar at top of card */\n.module-status-bar[data-v-ec5ff4f2] {\n  height: 4px;\n  width: 100%;\n}\n.bar-active[data-v-ec5ff4f2] {\n  background: linear-gradient(90deg, #22c55e, #16a34a);\n}\n.bar-inactive[data-v-ec5ff4f2] {\n  background: #e2e8f0;\n}\n.module-card-body[data-v-ec5ff4f2] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  height: calc(100% - 4px);\n}\n.module-card-top[data-v-ec5ff4f2] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n\n/* Module icon */\n.module-icon-wrapper[data-v-ec5ff4f2] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-active[data-v-ec5ff4f2] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #22c55e;\n}\n.icon-inactive[data-v-ec5ff4f2] {\n  background: #f1f5f9;\n  color: #94a3b8;\n}\n\n/* Status badge */\n.module-status-badge[data-v-ec5ff4f2] {\n  display: inline-block;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.badge-active[data-v-ec5ff4f2] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #16a34a;\n}\n.badge-inactive[data-v-ec5ff4f2] {\n  background: #f1f5f9;\n  color: #94a3b8;\n}\n\n/* Module info */\n.module-info[data-v-ec5ff4f2] {\n  flex: 1;\n  margin-bottom: 16px;\n}\n.module-name[data-v-ec5ff4f2] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 6px;\n}\n.module-description[data-v-ec5ff4f2] {\n  font-size: 13px;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n/* Meta */\n.module-meta[data-v-ec5ff4f2] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.meta-item[data-v-ec5ff4f2] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: #94a3b8;\n}\n\n/* Card footer */\n.module-card-footer[data-v-ec5ff4f2] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.module-toggle-wrapper[data-v-ec5ff4f2] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n/* Modern Toggle Switch */\n.modern-toggle[data-v-ec5ff4f2] {\n  position: relative;\n  display: inline-block;\n  width: 44px;\n  height: 24px;\n  margin: 0;\n  cursor: pointer;\n}\n.modern-toggle input[data-v-ec5ff4f2] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle-slider[data-v-ec5ff4f2] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #cbd5e1;\n  border-radius: 24px;\n  transition: all 0.3s ease;\n}\n.toggle-slider[data-v-ec5ff4f2]::before {\n  content: '';\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  left: 3px;\n  bottom: 3px;\n  background: #fff;\n  border-radius: 50%;\n  transition: all 0.3s ease;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.modern-toggle input:checked + .toggle-slider[data-v-ec5ff4f2] {\n  background: linear-gradient(135deg, #22c55e, #16a34a);\n}\n.modern-toggle input:checked + .toggle-slider[data-v-ec5ff4f2]::before {\n  transform: translateX(20px);\n}\n.modern-toggle input:disabled + .toggle-slider[data-v-ec5ff4f2] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.toggle-label[data-v-ec5ff4f2] {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n/* ========== Empty State ========== */\n.empty-state[data-v-ec5ff4f2] {\n  text-align: center;\n  padding: 60px 20px;\n  background: #fff;\n  border-radius: 12px;\n  border: 2px dashed #e2e8f0;\n}\n.empty-state-icon[data-v-ec5ff4f2] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: #f1f5f9;\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n}\n.empty-state-title[data-v-ec5ff4f2] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 8px;\n}\n.empty-state-desc[data-v-ec5ff4f2] {\n  font-size: 14px;\n  color: #64748b;\n  max-width: 400px;\n  margin: 0 auto;\n  line-height: 1.6;\n}\n\n/* ========== Dark Mode ========== */\n.dark-mode .upload-card[data-v-ec5ff4f2],\n[data-theme=\"dark\"] .upload-card[data-v-ec5ff4f2] {\n  background: #1e293b;\n  border-color: #334155;\n}\n.dark-mode .upload-card-header[data-v-ec5ff4f2],\n[data-theme=\"dark\"] .upload-card-header[data-v-ec5ff4f2] {\n  border-color: #334155;\n  color: #e2e8f0;\n}\n.dark-mode .upload-zone[data-v-ec5ff4f2],\n[data-theme=\"dark\"] .upload-zone[data-v-ec5ff4f2] {\n  border-color: #475569;\n  background: #0f172a;\n}\n.dark-mode .upload-zone[data-v-ec5ff4f2]:hover,\n[data-theme=\"dark\"] .upload-zone[data-v-ec5ff4f2]:hover {\n  border-color: #4361ee;\n  background: rgba(67, 97, 238, 0.08);\n}\n.dark-mode .upload-text[data-v-ec5ff4f2],\n[data-theme=\"dark\"] .upload-text[data-v-ec5ff4f2] {\n  color: #cbd5e1;\n}\n.dark-mode .file-name[data-v-ec5ff4f2],\n[data-theme=\"dark\"] .file-name[data-v-ec5ff4f2] {\n  color: #e2e8f0;\n}\n.dark-mode .module-card[data-v-ec5ff4f2],\n[data-theme=\"dark\"] .module-card[data-v-ec5ff4f2] {\n  background: #1e293b;\n  border-color: #334155;\n}\n.dark-mode .module-name[data-v-ec5ff4f2],\n[data-theme=\"dark\"] .module-name[data-v-ec5ff4f2] {\n  color: #e2e8f0;\n}\n.dark-mode .module-description[data-v-ec5ff4f2],\n[data-theme=\"dark\"] .module-description[data-v-ec5ff4f2] {\n  color: #94a3b8;\n}\n.dark-mode .modules-section-title[data-v-ec5ff4f2],\n[data-theme=\"dark\"] .modules-section-title[data-v-ec5ff4f2] {\n  color: #e2e8f0;\n}\n.dark-mode .modules-filter[data-v-ec5ff4f2],\n[data-theme=\"dark\"] .modules-filter[data-v-ec5ff4f2] {\n  background: #0f172a;\n}\n.dark-mode .filter-btn[data-v-ec5ff4f2],\n[data-theme=\"dark\"] .filter-btn[data-v-ec5ff4f2] {\n  color: #94a3b8;\n}\n.dark-mode .filter-btn[data-v-ec5ff4f2]:hover,\n[data-theme=\"dark\"] .filter-btn[data-v-ec5ff4f2]:hover {\n  color: #e2e8f0;\n}\n.dark-mode .filter-btn.active[data-v-ec5ff4f2],\n[data-theme=\"dark\"] .filter-btn.active[data-v-ec5ff4f2] {\n  background: #334155;\n  color: #818cf8;\n}\n.dark-mode .module-meta[data-v-ec5ff4f2],\n[data-theme=\"dark\"] .module-meta[data-v-ec5ff4f2] {\n  border-color: #334155;\n}\n.dark-mode .icon-inactive[data-v-ec5ff4f2],\n[data-theme=\"dark\"] .icon-inactive[data-v-ec5ff4f2] {\n  background: #334155;\n}\n.dark-mode .badge-inactive[data-v-ec5ff4f2],\n[data-theme=\"dark\"] .badge-inactive[data-v-ec5ff4f2] {\n  background: #334155;\n  color: #94a3b8;\n}\n.dark-mode .bar-inactive[data-v-ec5ff4f2],\n[data-theme=\"dark\"] .bar-inactive[data-v-ec5ff4f2] {\n  background: #334155;\n}\n.dark-mode .empty-state[data-v-ec5ff4f2],\n[data-theme=\"dark\"] .empty-state[data-v-ec5ff4f2] {\n  background: #1e293b;\n  border-color: #334155;\n}\n.dark-mode .empty-state-title[data-v-ec5ff4f2],\n[data-theme=\"dark\"] .empty-state-title[data-v-ec5ff4f2] {\n  color: #e2e8f0;\n}\n.dark-mode .empty-state-icon[data-v-ec5ff4f2],\n[data-theme=\"dark\"] .empty-state-icon[data-v-ec5ff4f2] {\n  background: #334155;\n}\n.dark-mode .toggle-slider[data-v-ec5ff4f2],\n[data-theme=\"dark\"] .toggle-slider[data-v-ec5ff4f2] {\n  background: #475569;\n}\n\n/* ========== Responsive ========== */\n@media (max-width: 768px) {\n.module-header-card[data-v-ec5ff4f2] {\n    padding: 20px;\n    flex-direction: column;\n    align-items: flex-start;\n}\n.module-header-stats[data-v-ec5ff4f2] {\n    width: 100%;\n    justify-content: space-around;\n    padding-top: 16px;\n    border-top: 1px solid rgba(255, 255, 255, 0.15);\n}\n.upload-zone-content[data-v-ec5ff4f2] {\n    padding: 24px 16px;\n}\n.upload-selected[data-v-ec5ff4f2] {\n    flex-wrap: wrap;\n}\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/module_settings.vue?vue&type=style&index=0&id=ec5ff4f2&scoped=true&lang=css"
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/module_settings.vue?vue&type=style&index=0&id=ec5ff4f2&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_module_settings_vue_vue_type_style_index_0_id_ec5ff4f2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./module_settings.vue?vue&type=style&index=0&id=ec5ff4f2&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/module_settings.vue?vue&type=style&index=0&id=ec5ff4f2&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_module_settings_vue_vue_type_style_index_0_id_ec5ff4f2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_module_settings_vue_vue_type_style_index_0_id_ec5ff4f2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/views/app/pages/settings/module_settings.vue"
/*!********************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/module_settings.vue ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _module_settings_vue_vue_type_template_id_ec5ff4f2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module_settings.vue?vue&type=template&id=ec5ff4f2&scoped=true */ "./resources/src/views/app/pages/settings/module_settings.vue?vue&type=template&id=ec5ff4f2&scoped=true");
/* harmony import */ var _module_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module_settings.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/settings/module_settings.vue?vue&type=script&lang=js");
/* harmony import */ var _module_settings_vue_vue_type_style_index_0_id_ec5ff4f2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module_settings.vue?vue&type=style&index=0&id=ec5ff4f2&scoped=true&lang=css */ "./resources/src/views/app/pages/settings/module_settings.vue?vue&type=style&index=0&id=ec5ff4f2&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _module_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _module_settings_vue_vue_type_template_id_ec5ff4f2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _module_settings_vue_vue_type_template_id_ec5ff4f2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "ec5ff4f2",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/settings/module_settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/settings/module_settings.vue?vue&type=script&lang=js"
/*!********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/module_settings.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_module_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./module_settings.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/module_settings.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_module_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/settings/module_settings.vue?vue&type=template&id=ec5ff4f2&scoped=true"
/*!**************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/module_settings.vue?vue&type=template&id=ec5ff4f2&scoped=true ***!
  \**************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_module_settings_vue_vue_type_template_id_ec5ff4f2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_module_settings_vue_vue_type_template_id_ec5ff4f2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_module_settings_vue_vue_type_template_id_ec5ff4f2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./module_settings.vue?vue&type=template&id=ec5ff4f2&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/module_settings.vue?vue&type=template&id=ec5ff4f2&scoped=true");


/***/ },

/***/ "./resources/src/views/app/pages/settings/module_settings.vue?vue&type=style&index=0&id=ec5ff4f2&scoped=true&lang=css"
/*!****************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/module_settings.vue?vue&type=style&index=0&id=ec5ff4f2&scoped=true&lang=css ***!
  \****************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_module_settings_vue_vue_type_style_index_0_id_ec5ff4f2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./module_settings.vue?vue&type=style&index=0&id=ec5ff4f2&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/module_settings.vue?vue&type=style&index=0&id=ec5ff4f2&scoped=true&lang=css");


/***/ }

}]);