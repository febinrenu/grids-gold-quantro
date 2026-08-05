"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["commission_agents"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/commissions/index_agents.vue?vue&type=script&lang=js"
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/commissions/index_agents.vue?vue&type=script&lang=js ***!
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
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isLoading: true,
      agents: [],
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
      usersList: [],
      form: {
        name: '',
        code: '',
        email: '',
        phone: '',
        user_id: null,
        is_active: true,
        notes: ''
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['currentUserPermissions'])), {}, {
    columns: function columns() {
      return [{
        label: this.$t('Name'),
        field: 'name'
      }, {
        label: this.$t('Code'),
        field: 'code'
      }, {
        label: this.$t('email'),
        field: 'email'
      }, {
        label: this.$t('User'),
        field: 'user'
      }, {
        label: this.$t('Active'),
        field: 'is_active'
      }, {
        label: this.$t('Commissions'),
        field: 'sale_commissions_count'
      }, {
        label: this.$t('Action'),
        field: 'actions',
        sortable: false
      }];
    }
  }),
  created: function created() {
    var _this = this;
    axios.get('users_list_for_select').then(function (res) {
      var list = res.data && res.data.users || [];
      _this.usersList = list.map(function (u) {
        return {
          id: u.id,
          label: ((u.firstname || '') + ' ' + (u.lastname || '')).trim() || u.username || u.email
        };
      });
    })["catch"](function (e) {
      _this.usersList = [];
      _this.makeToast('danger', e.response && e.response.data && e.response.data.message || _this.$t('Error') || 'Could not load users');
    });
    this.load();
  },
  methods: {
    load: function load(page) {
      var _this2 = this;
      page = page || 1;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      axios.get('sales_agents', {
        params: {
          page: page,
          limit: this.limit,
          SortField: this.serverParams.sort.field,
          SortType: this.serverParams.sort.type,
          search: this.search
        }
      }).then(function (res) {
        var d = res.data.data || res.data;
        _this2.agents = d.agents || [];
        _this2.totalRows = d.totalRows || 0;
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        _this2.isLoading = false;
      })["catch"](function () {
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        _this2.isLoading = false;
      });
    },
    onPageChange: function onPageChange(p) {
      this.load(p.currentPage);
    },
    onPerPageChange: function onPerPageChange(p) {
      this.limit = String(p.currentPerPage);
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
    onSearch: function onSearch(p) {
      this.search = p.searchTerm || '';
      this.load(1);
    },
    openModal: function openModal(row) {
      this.editMode = !!row;
      this.form = row ? {
        id: row.id,
        name: row.name,
        code: row.code || '',
        email: row.email || '',
        phone: row.phone || '',
        user_id: row.user_id || null,
        is_active: !!row.is_active,
        notes: row.notes || ''
      } : {
        name: '',
        code: '',
        email: '',
        phone: '',
        user_id: null,
        is_active: true,
        notes: ''
      };
      if (!row) delete this.form.id;
      this.$bvModal.show('form_modal');
    },
    resetForm: function resetForm() {
      this.form = {
        name: '',
        code: '',
        email: '',
        phone: '',
        user_id: null,
        is_active: true,
        notes: ''
      };
    },
    submit: function submit() {
      var _this3 = this;
      var url = this.editMode ? 'sales_agents/' + this.form.id : 'sales_agents';
      var method = this.editMode ? 'put' : 'post';
      var payload = {
        name: this.form.name,
        code: this.form.code || null,
        email: this.form.email || null,
        phone: this.form.phone || null,
        user_id: this.form.user_id || null,
        is_active: this.form.is_active,
        notes: this.form.notes || null
      };
      axios[method](url, payload).then(function () {
        _this3.makeToast('success', _this3.$t('Success'));
        _this3.$bvModal.hide('form_modal');
        _this3.load(_this3.serverParams.page);
      })["catch"](function (e) {
        return _this3.makeToast('danger', e.response && e.response.data && e.response.data.message || _this3.$t('Error'));
      });
    },
    confirmDelete: function confirmDelete(row) {
      var _this4 = this;
      this.$bvModal.msgBoxConfirm(this.$t('Confirm_delete')).then(function (ok) {
        if (ok) axios["delete"]('sales_agents/' + row.id).then(function () {
          _this4.makeToast('success', _this4.$t('Deleted'));
          _this4.load(_this4.serverParams.page);
        })["catch"](function (e) {
          return _this4.makeToast('danger', e.response && e.response.data && e.response.data.message || _this4.$t('Error'));
        });
      });
    },
    makeToast: function makeToast(variant, msg) {
      this.$bvToast.toast(msg, {
        title: this.$t('Notice'),
        variant: variant,
        solid: true
      });
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/commissions/index_agents.vue?vue&type=template&id=95d6ba82"
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/commissions/index_agents.vue?vue&type=template&id=95d6ba82 ***!
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
  return _c("div", [_c("breadcumb", {
    attrs: {
      page: _vm.$t("Sales_Agents"),
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
      rows: _vm.agents,
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
        }, [_vm._v(_vm._s(props.row.is_active ? _vm.$t("Active") : _vm.$t("Inactive")))])], 1) : props.column.field === "user" ? _c("span", [_vm._v("\n            " + _vm._s(props.row.user ? (props.row.user.firstname + " " + props.row.user.lastname).trim() || props.row.user.email : "—") + "\n          ")]) : props.column.field === "actions" ? _c("span", [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("commissions_edit") ? _c("b-button", {
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
      label: _vm.$t("Name")
    }
  }, [_c("b-form-input", {
    attrs: {
      required: ""
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
      label: _vm.$t("Code")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.form.code,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "code", $$v);
      },
      expression: "form.code"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("email")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "email"
    },
    model: {
      value: _vm.form.email,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "email", $$v);
      },
      expression: "form.email"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("phone")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.form.phone,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "phone", $$v);
      },
      expression: "form.phone"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("Link_User")
    }
  }, [_c("v-select", {
    attrs: {
      reduce: function reduce(u) {
        return u.id;
      },
      options: _vm.usersList,
      placeholder: _vm.$t("PleaseSelect"),
      label: "label"
    },
    model: {
      value: _vm.form.user_id,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "user_id", $$v);
      },
      expression: "form.user_id"
    }
  })], 1), _vm._v(" "), _c("b-form-checkbox", {
    model: {
      value: _vm.form.is_active,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "is_active", $$v);
      },
      expression: "form.is_active"
    }
  }, [_vm._v(_vm._s(_vm.$t("Active")))]), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("Notes")
    }
  }, [_c("b-form-textarea", {
    attrs: {
      rows: "2"
    },
    model: {
      value: _vm.form.notes,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "notes", $$v);
      },
      expression: "form.notes"
    }
  })], 1), _vm._v(" "), _c("div", {
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

/***/ "./resources/src/views/app/pages/commissions/index_agents.vue"
/*!********************************************************************!*\
  !*** ./resources/src/views/app/pages/commissions/index_agents.vue ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_agents_vue_vue_type_template_id_95d6ba82__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_agents.vue?vue&type=template&id=95d6ba82 */ "./resources/src/views/app/pages/commissions/index_agents.vue?vue&type=template&id=95d6ba82");
/* harmony import */ var _index_agents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_agents.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/commissions/index_agents.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_agents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_agents_vue_vue_type_template_id_95d6ba82__WEBPACK_IMPORTED_MODULE_0__.render,
  _index_agents_vue_vue_type_template_id_95d6ba82__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/commissions/index_agents.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/commissions/index_agents.vue?vue&type=script&lang=js"
/*!********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/commissions/index_agents.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_agents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index_agents.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/commissions/index_agents.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_agents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/commissions/index_agents.vue?vue&type=template&id=95d6ba82"
/*!**************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/commissions/index_agents.vue?vue&type=template&id=95d6ba82 ***!
  \**************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_agents_vue_vue_type_template_id_95d6ba82__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_agents_vue_vue_type_template_id_95d6ba82__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_agents_vue_vue_type_template_id_95d6ba82__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index_agents.vue?vue&type=template&id=95d6ba82 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/commissions/index_agents.vue?vue&type=template&id=95d6ba82");


/***/ }

}]);