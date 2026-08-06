"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["commission_programs"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/commissions/index_programs.vue?vue&type=script&lang=js"
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/commissions/index_programs.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: 'Commission Programs'
  },
  data: function data() {
    return {
      isLoading: true,
      programs: [],
      totalRows: 0,
      serverParams: {
        sort: {
          field: 'id',
          type: 'desc'
        },
        page: 1,
        perPage: 10
      },
      limit: '10',
      search: '',
      editMode: false,
      form: {
        name: '',
        description: '',
        is_active: true,
        valid_from: '',
        valid_to: ''
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['currentUserPermissions'])), {}, {
    columns: function columns() {
      return [{
        label: this.$t('Name'),
        field: 'name'
      }, {
        label: this.$t('Description'),
        field: 'description'
      }, {
        label: this.$t('Active'),
        field: 'is_active'
      }, {
        label: this.$t('Valid_From'),
        field: 'valid_from'
      }, {
        label: this.$t('Valid_To'),
        field: 'valid_to'
      }, {
        label: this.$t('Rules'),
        field: 'commission_rules_count'
      }, {
        label: this.$t('Action'),
        field: 'actions',
        sortable: false
      }];
    }
  }),
  created: function created() {
    this.load();
  },
  methods: {
    load: function load() {
      var _this = this;
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      var params = {
        page: page,
        limit: this.limit,
        SortField: this.serverParams.sort.field,
        SortType: this.serverParams.sort.type,
        search: this.search
      };
      axios.get('commission_programs', {
        params: params
      }).then(function (res) {
        var d = res.data.data || res.data;
        _this.programs = d.programs || [];
        _this.totalRows = d.totalRows || 0;
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        _this.isLoading = false;
      })["catch"](function () {
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        _this.isLoading = false;
      });
    },
    onPageChange: function onPageChange(_ref) {
      var currentPage = _ref.currentPage;
      this.serverParams.page = currentPage;
      this.load(currentPage);
    },
    onPerPageChange: function onPerPageChange(_ref2) {
      var currentPerPage = _ref2.currentPerPage;
      this.limit = String(currentPerPage);
      this.serverParams.perPage = currentPerPage;
      this.load(1);
    },
    onSortChange: function onSortChange(params) {
      if (params.length) {
        this.serverParams.sort = {
          field: params[0].field,
          type: params[0].type
        };
        this.load(1);
      }
    },
    onSearch: function onSearch(_ref3) {
      var searchTerm = _ref3.searchTerm;
      this.search = searchTerm || '';
      this.load(1);
    },
    formatDate: function formatDate(v) {
      if (!v) return '—';
      return new Date(v).toLocaleDateString();
    },
    openModal: function openModal() {
      var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.editMode = !!row;
      if (row) {
        this.form = {
          id: row.id,
          name: row.name,
          description: row.description || '',
          is_active: !!row.is_active,
          valid_from: row.valid_from ? row.valid_from.slice(0, 10) : '',
          valid_to: row.valid_to ? row.valid_to.slice(0, 10) : ''
        };
      } else {
        this.resetForm();
      }
      this.$bvModal.show('form_modal');
    },
    resetForm: function resetForm() {
      this.form = {
        name: '',
        description: '',
        is_active: true,
        valid_from: '',
        valid_to: ''
      };
      delete this.form.id;
    },
    submit: function submit() {
      var _this2 = this;
      var url = this.editMode ? "commission_programs/".concat(this.form.id) : 'commission_programs';
      var method = this.editMode ? 'put' : 'post';
      var payload = {
        name: this.form.name,
        description: this.form.description,
        is_active: this.form.is_active,
        valid_from: this.form.valid_from || null,
        valid_to: this.form.valid_to || null
      };
      axios[method](url, payload).then(function () {
        _this2.makeToast('success', _this2.$t('Success'));
        _this2.$bvModal.hide('form_modal');
        _this2.load(_this2.serverParams.page);
      })["catch"](function (e) {
        var _e$response;
        _this2.makeToast('danger', ((_e$response = e.response) === null || _e$response === void 0 || (_e$response = _e$response.data) === null || _e$response === void 0 ? void 0 : _e$response.message) || _this2.$t('Error'));
      });
    },
    confirmDelete: function confirmDelete(row) {
      var _this3 = this;
      this.$bvModal.msgBoxConfirm(this.$t('Confirm_delete')).then(function (ok) {
        if (ok) {
          axios["delete"]("commission_programs/".concat(row.id)).then(function () {
            _this3.makeToast('success', _this3.$t('Deleted'));
            _this3.load(_this3.serverParams.page);
          })["catch"](function (e) {
            var _e$response2;
            return _this3.makeToast('danger', ((_e$response2 = e.response) === null || _e$response2 === void 0 || (_e$response2 = _e$response2.data) === null || _e$response2 === void 0 ? void 0 : _e$response2.message) || _this3.$t('Error'));
          });
        }
      });
    },
    makeToast: function makeToast(variant, msg) {
      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      this.$bvToast.toast(msg, {
        title: title || this.$t('Notice'),
        variant: variant,
        solid: true
      });
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/commissions/index_programs.vue?vue&type=template&id=08118740"
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/commissions/index_programs.vue?vue&type=template&id=08118740 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("breadcumb", {
    attrs: {
      page: _vm.$t("Commission_Programs"),
      folder: _vm.$t("Commissions")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _c("div", [_c("b-card", {
    staticClass: "shadow-soft border-0"
  }, [_c("vue-good-table", {
    attrs: {
      mode: "remote",
      columns: _vm.columns,
      totalRows: _vm.totalRows,
      rows: _vm.programs,
      "search-options": {
        enabled: true,
        placeholder: _vm.$t("Search_this_table")
      },
      "pagination-options": {
        enabled: true,
        mode: "records",
        nextLabel: "next",
        prevLabel: "prev"
      },
      styleClass: "tableOne table-hover vgt-table"
    },
    on: {
      "on-page-change": _vm.onPageChange,
      "on-per-page-change": _vm.onPerPageChange,
      "on-sort-change": _vm.onSortChange,
      "on-search": _vm.onSearch
    },
    scopedSlots: _vm._u([{
      key: "table-row",
      fn: function fn(props) {
        return [props.column.field === "is_active" ? _c("span", [_c("b-badge", {
          attrs: {
            variant: props.row.is_active ? "success" : "secondary"
          }
        }, [_vm._v("\n              " + _vm._s(props.row.is_active ? _vm.$t("Active") : _vm.$t("Inactive")) + "\n            ")])], 1) : props.column.field === "valid_from" ? _c("span", [_vm._v("\n            " + _vm._s(props.row.valid_from ? _vm.formatDate(props.row.valid_from) : "—") + "\n          ")]) : props.column.field === "valid_to" ? _c("span", [_vm._v("\n            " + _vm._s(props.row.valid_to ? _vm.formatDate(props.row.valid_to) : "—") + "\n          ")]) : props.column.field === "actions" ? _c("span", [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("commissions_edit") ? _c("b-button", {
          staticClass: "p-0 mr-2",
          attrs: {
            variant: "link",
            size: "sm"
          },
          on: {
            click: function click($event) {
              return _vm.openModal(props.row);
            }
          }
        }, [_c("lucide-icon", {
          staticClass: "text-success",
          attrs: {
            name: "pen"
          }
        })], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("commissions_delete") ? _c("b-button", {
          staticClass: "p-0",
          attrs: {
            variant: "link",
            size: "sm"
          },
          on: {
            click: function click($event) {
              return _vm.confirmDelete(props.row);
            }
          }
        }, [_c("lucide-icon", {
          staticClass: "text-danger",
          attrs: {
            name: "x"
          }
        })], 1) : _vm._e()], 1) : _c("span", [_vm._v(_vm._s(props.formattedRow[props.column.field]))])];
      }
    }])
  }, [_c("div", {
    staticClass: "mt-2 mb-3",
    attrs: {
      slot: "table-actions"
    },
    slot: "table-actions"
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("commissions_add") ? _c("b-button", {
    attrs: {
      variant: "primary",
      size: "sm"
    },
    on: {
      click: function click($event) {
        return _vm.openModal();
      }
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "plus"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Add")) + "\n          ")], 1) : _vm._e()], 1)])], 1)], 1), _vm._v(" "), _c("b-modal", {
    attrs: {
      title: _vm.editMode ? _vm.$t("Edit") : _vm.$t("Add"),
      "hide-footer": "",
      id: "form_modal"
    },
    on: {
      hidden: _vm.resetForm
    }
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      }
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Name"),
      "label-for": "name"
    }
  }, [_c("b-form-input", {
    attrs: {
      id: "name",
      required: "",
      maxlength: "192"
    },
    model: {
      value: _vm.form.name,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "name", $$v);
      },
      expression: "form.name"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("Description"),
      "label-for": "description"
    }
  }, [_c("b-form-textarea", {
    attrs: {
      id: "description",
      rows: "2",
      maxlength: "500"
    },
    model: {
      value: _vm.form.description,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "description", $$v);
      },
      expression: "form.description"
    }
  })], 1), _vm._v(" "), _c("b-form-group", [_c("b-form-checkbox", {
    model: {
      value: _vm.form.is_active,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "is_active", $$v);
      },
      expression: "form.is_active"
    }
  }, [_vm._v(_vm._s(_vm.$t("Active")))])], 1), _vm._v(" "), _c("b-row", [_c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Valid_From"),
      "label-for": "valid_from"
    }
  }, [_c("b-form-input", {
    attrs: {
      id: "valid_from",
      type: "date"
    },
    model: {
      value: _vm.form.valid_from,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "valid_from", $$v);
      },
      expression: "form.valid_from"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Valid_To"),
      "label-for": "valid_to"
    }
  }, [_c("b-form-input", {
    attrs: {
      id: "valid_to",
      type: "date"
    },
    model: {
      value: _vm.form.valid_to,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "valid_to", $$v);
      },
      expression: "form.valid_to"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-end mt-3"
  }, [_c("b-button", {
    attrs: {
      type: "button",
      variant: "secondary"
    },
    on: {
      click: function click($event) {
        return _vm.$bvModal.hide("form_modal");
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("Cancel")))]), _vm._v(" "), _c("b-button", {
    staticClass: "ml-2",
    attrs: {
      type: "submit",
      variant: "primary"
    }
  }, [_vm._v(_vm._s(_vm.$t("Submit")))])], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./resources/src/views/app/pages/commissions/index_programs.vue"
/*!**********************************************************************!*\
  !*** ./resources/src/views/app/pages/commissions/index_programs.vue ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_programs_vue_vue_type_template_id_08118740__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_programs.vue?vue&type=template&id=08118740 */ "./resources/src/views/app/pages/commissions/index_programs.vue?vue&type=template&id=08118740");
/* harmony import */ var _index_programs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_programs.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/commissions/index_programs.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_programs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_programs_vue_vue_type_template_id_08118740__WEBPACK_IMPORTED_MODULE_0__.render,
  _index_programs_vue_vue_type_template_id_08118740__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/commissions/index_programs.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/commissions/index_programs.vue?vue&type=script&lang=js"
/*!**********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/commissions/index_programs.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_programs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index_programs.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/commissions/index_programs.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_programs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/commissions/index_programs.vue?vue&type=template&id=08118740"
/*!****************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/commissions/index_programs.vue?vue&type=template&id=08118740 ***!
  \****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_programs_vue_vue_type_template_id_08118740__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_programs_vue_vue_type_template_id_08118740__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_programs_vue_vue_type_template_id_08118740__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index_programs.vue?vue&type=template&id=08118740 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/commissions/index_programs.vue?vue&type=template&id=08118740");


/***/ }

}]);