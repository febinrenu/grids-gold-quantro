"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["batches"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/batches.vue?vue&type=script&lang=js"
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/batches.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _utils_priceFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/priceFormat */ "./resources/src/utils/priceFormat.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Batches"
  },
  data: function data() {
    return {
      isLoading: true,
      SubmitProcessing: false,
      serverParams: {
        sort: {
          field: "expiry_date",
          type: "asc"
        },
        page: 1,
        perPage: 10
      },
      totalRows: 0,
      search: "",
      limit: "10",
      batches: [],
      warehouses: [],
      expiryWarningDays: 90,
      filters: {
        warehouse_id: "",
        status: "all",
        expiry_window: "all"
      },
      editing: {
        id: null,
        product_name: "",
        batch_no: "",
        expiry_date: "",
        mfg_date: "",
        qty: 0,
        unit_cost: null,
        status: "active",
        notes: ""
      },
      writingOff: {
        id: null,
        batch_no: "",
        product_name: "",
        qty: 0,
        reason: ""
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["currentUserPermissions"])), {}, {
    // Monetary precision (2 or 3) driven by the "Enable 3 Decimal Pricing" setting.
    priceDecimals: function priceDecimals() {
      return (0,_utils_priceFormat__WEBPACK_IMPORTED_MODULE_2__.getPriceDecimals)({
        store: this.$store
      });
    },
    canManage: function canManage() {
      var perms = this.currentUserPermissions || [];
      return perms.includes('manage_batches') || perms.includes('batch_manage');
    },
    canWriteOff: function canWriteOff() {
      var perms = this.currentUserPermissions || [];
      return perms.includes('writeoff_batches') || perms.includes('batch_writeoff');
    },
    columns: function columns() {
      return [{
        label: this.$t('Product'),
        field: 'product',
        sortable: false,
        tdClass: 'text-left',
        thClass: 'text-left'
      }, {
        label: this.$t('Batch_No'),
        field: 'batch_no',
        tdClass: 'text-left',
        thClass: 'text-left'
      }, {
        label: this.$t('Warehouse'),
        field: 'warehouse_name',
        sortable: false,
        tdClass: 'text-left',
        thClass: 'text-left'
      }, {
        label: this.$t('Expiry_Date'),
        field: 'expiry_date',
        tdClass: 'text-left',
        thClass: 'text-left'
      }, {
        label: this.$t('Quantity'),
        field: 'qty',
        tdClass: 'text-right',
        thClass: 'text-right'
      }, {
        label: this.$t('UnitCost'),
        field: 'unit_cost',
        tdClass: 'text-right',
        thClass: 'text-right'
      }, {
        label: this.$t('Status'),
        field: 'status',
        tdClass: 'text-left',
        thClass: 'text-left'
      }, {
        label: this.$t('Action'),
        field: 'actions',
        sortable: false,
        tdClass: 'text-left',
        thClass: 'text-left'
      }];
    }
  }),
  methods: {
    statusBadge: function statusBadge(status) {
      switch (status) {
        case 'active':
          return 'badge-success';
        case 'quarantined':
          return 'badge-warning';
        case 'expired':
          return 'badge-danger';
        case 'written_off':
          return 'badge-secondary';
        default:
          return 'badge-light';
      }
    },
    formatNumber: function formatNumber(v) {
      if (v === null || v === undefined || v === '') return '';
      var n = Number(v);
      if (Number.isNaN(n)) return v;
      return Number.isInteger(n) ? n.toString() : n.toFixed(this.priceDecimals);
    },
    getValidationState: function getValidationState(_ref) {
      var dirty = _ref.dirty,
        validated = _ref.validated,
        _ref$valid = _ref.valid,
        valid = _ref$valid === void 0 ? null : _ref$valid;
      return dirty || validated ? valid : null;
    },
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    updateParams: function updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    onPageChange: function onPageChange(_ref2) {
      var currentPage = _ref2.currentPage;
      if (this.serverParams.page !== currentPage) {
        this.updateParams({
          page: currentPage
        });
        this.fetch(currentPage);
      }
    },
    onPerPageChange: function onPerPageChange(_ref3) {
      var currentPerPage = _ref3.currentPerPage;
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({
          page: 1,
          perPage: currentPerPage
        });
        this.fetch(1);
      }
    },
    onSortChange: function onSortChange(params) {
      this.updateParams({
        sort: {
          type: params[0].type,
          field: params[0].field
        }
      });
      this.fetch(this.serverParams.page);
    },
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.fetch(1);
    },
    onFilterChange: function onFilterChange() {
      this.updateParams({
        page: 1
      });
      this.fetch(1);
    },
    fetch: function fetch(page) {
      var _this = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      var params = {
        page: page || 1,
        limit: this.limit,
        SortField: this.serverParams.sort.field,
        SortType: this.serverParams.sort.type,
        search: this.search || '',
        status: this.filters.status,
        expiry_window: this.filters.expiry_window
      };
      if (this.filters.warehouse_id !== '') {
        params.warehouse_id = this.filters.warehouse_id;
      }
      axios.get('product_batches', {
        params: params
      }).then(function (response) {
        _this.batches = response.data.batches || [];
        _this.totalRows = response.data.totalRows || 0;
        _this.warehouses = response.data.warehouses || [];
        if (response.data.expiry_warning_days) {
          _this.expiryWarningDays = response.data.expiry_warning_days;
        }
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this.isLoading = false;
      })["catch"](function () {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        setTimeout(function () {
          _this.isLoading = false;
        }, 500);
      });
    },
    openEdit: function openEdit(row) {
      this.editing = {
        id: row.id,
        product_name: row.product_name,
        batch_no: row.batch_no,
        expiry_date: row.expiry_date || '',
        mfg_date: row.mfg_date || '',
        qty: row.qty,
        unit_cost: row.unit_cost,
        status: row.status,
        notes: row.notes || ''
      };
      this.$bvModal.show('Edit_batch');
    },
    submitEdit: function submitEdit() {
      var _this2 = this;
      this.$refs.Edit_batch.validate().then(function (success) {
        if (!success) {
          _this2.makeToast('danger', _this2.$t('Please_fill_the_form_correctly'), _this2.$t('Failed'));
          return;
        }
        _this2.SubmitProcessing = true;
        var payload = {
          batch_no: _this2.editing.batch_no,
          expiry_date: _this2.editing.expiry_date || null,
          mfg_date: _this2.editing.mfg_date || null,
          qty: _this2.editing.qty,
          unit_cost: _this2.editing.unit_cost,
          status: _this2.editing.status,
          notes: _this2.editing.notes
        };
        axios.put('product_batches/' + _this2.editing.id, payload).then(function () {
          _this2.SubmitProcessing = false;
          _this2.$bvModal.hide('Edit_batch');
          _this2.makeToast('success', _this2.$t('Successfully_Updated'), _this2.$t('Success'));
          _this2.fetch(_this2.serverParams.page);
        })["catch"](function () {
          _this2.SubmitProcessing = false;
          _this2.makeToast('danger', _this2.$t('InvalidData'), _this2.$t('Failed'));
        });
      });
    },
    openWriteOff: function openWriteOff(row) {
      this.writingOff = {
        id: row.id,
        batch_no: row.batch_no,
        product_name: row.product_name,
        qty: row.qty,
        reason: ''
      };
      this.$bvModal.show('WriteOff_batch');
    },
    submitWriteOff: function submitWriteOff() {
      var _this3 = this;
      this.SubmitProcessing = true;
      axios.post('product_batches/' + this.writingOff.id + '/writeoff', {
        reason: this.writingOff.reason
      }).then(function () {
        _this3.SubmitProcessing = false;
        _this3.$bvModal.hide('WriteOff_batch');
        _this3.makeToast('success', _this3.$t('Successfully_Updated'), _this3.$t('Success'));
        _this3.fetch(_this3.serverParams.page);
      })["catch"](function () {
        _this3.SubmitProcessing = false;
        _this3.makeToast('danger', _this3.$t('InvalidData'), _this3.$t('Failed'));
      });
    },
    deleteBatch: function deleteBatch(id) {
      var _this4 = this;
      this.$swal({
        title: this.$t('Delete_Title'),
        text: this.$t('Delete_Text'),
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: this.$t('Delete_cancelButtonText'),
        confirmButtonText: this.$t('Delete_confirmButtonText')
      }).then(function (result) {
        if (result.value) {
          axios["delete"]('product_batches/' + id).then(function () {
            _this4.$swal(_this4.$t('Delete_Deleted'), _this4.$t('Deleted_in_successfully'), 'success');
            _this4.fetch(_this4.serverParams.page);
          })["catch"](function () {
            _this4.$swal(_this4.$t('Delete_Failed'), _this4.$t('Delete_Therewassomethingwronge'), 'warning');
          });
        }
      });
    }
  },
  created: function created() {
    this.fetch(1);
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/batches.vue?vue&type=template&id=19eba3cc"
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/batches.vue?vue&type=template&id=19eba3cc ***!
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
    staticClass: "main-content"
  }, [_c("breadcumb", {
    attrs: {
      page: _vm.$t("Batches"),
      folder: _vm.$t("Products")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("b-card", {
    staticClass: "wrapper"
  }, [_c("b-row", {
    staticClass: "mb-3"
  }, [_c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Warehouse")
    }
  }, [_c("b-form-select", {
    on: {
      change: _vm.onFilterChange
    },
    model: {
      value: _vm.filters.warehouse_id,
      callback: function callback($$v) {
        _vm.$set(_vm.filters, "warehouse_id", $$v);
      },
      expression: "filters.warehouse_id"
    }
  }, [_c("option", {
    domProps: {
      value: ""
    }
  }, [_vm._v(_vm._s(_vm.$t("All")))]), _vm._v(" "), _vm._l(_vm.warehouses, function (w) {
    return _c("option", {
      key: w.id,
      domProps: {
        value: w.id
      }
    }, [_vm._v(_vm._s(w.name))]);
  })], 2)], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Status")
    }
  }, [_c("b-form-select", {
    on: {
      change: _vm.onFilterChange
    },
    model: {
      value: _vm.filters.status,
      callback: function callback($$v) {
        _vm.$set(_vm.filters, "status", $$v);
      },
      expression: "filters.status"
    }
  }, [_c("option", {
    attrs: {
      value: "all"
    }
  }, [_vm._v(_vm._s(_vm.$t("All")))]), _vm._v(" "), _c("option", {
    attrs: {
      value: "active"
    }
  }, [_vm._v(_vm._s(_vm.$t("Batch_Status_active")))]), _vm._v(" "), _c("option", {
    attrs: {
      value: "quarantined"
    }
  }, [_vm._v(_vm._s(_vm.$t("Batch_Status_quarantined")))]), _vm._v(" "), _c("option", {
    attrs: {
      value: "expired"
    }
  }, [_vm._v(_vm._s(_vm.$t("Batch_Status_expired")))]), _vm._v(" "), _c("option", {
    attrs: {
      value: "written_off"
    }
  }, [_vm._v(_vm._s(_vm.$t("Batch_Status_written_off")))])])], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Expiry_Window")
    }
  }, [_c("b-form-select", {
    on: {
      change: _vm.onFilterChange
    },
    model: {
      value: _vm.filters.expiry_window,
      callback: function callback($$v) {
        _vm.$set(_vm.filters, "expiry_window", $$v);
      },
      expression: "filters.expiry_window"
    }
  }, [_c("option", {
    attrs: {
      value: "all"
    }
  }, [_vm._v(_vm._s(_vm.$t("All")))]), _vm._v(" "), _c("option", {
    attrs: {
      value: "expired"
    }
  }, [_vm._v(_vm._s(_vm.$t("Expired")))]), _vm._v(" "), _c("option", {
    attrs: {
      value: "near"
    }
  }, [_vm._v(_vm._s(_vm.$t("Near_Expiry")))]), _vm._v(" "), _c("option", {
    attrs: {
      value: "valid"
    }
  }, [_vm._v(_vm._s(_vm.$t("Valid")))])])], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "d-flex align-items-end",
    attrs: {
      md: "3"
    }
  }, [_c("small", {
    staticClass: "text-muted"
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Expiry_Warning_Days")) + ": " + _vm._s(_vm.expiryWarningDays) + "\n        ")])])], 1), _vm._v(" "), _c("vue-good-table", {
    attrs: {
      mode: "remote",
      columns: _vm.columns,
      totalRows: _vm.totalRows,
      rows: _vm.batches,
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
      styleClass: "table-hover tableOne vgt-table"
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
        return [props.column.field == "product" ? _c("span", [_c("div", [_c("strong", [_vm._v(_vm._s(props.row.product_name))]), _vm._v(" "), props.row.product_code ? _c("small", {
          staticClass: "text-muted ml-1"
        }, [_vm._v("[" + _vm._s(props.row.product_code) + "]")]) : _vm._e()]), _vm._v(" "), props.row.generic_name ? _c("small", {
          staticClass: "text-muted"
        }, [_vm._v("\n            " + _vm._s(props.row.generic_name) + "\n            "), props.row.strength ? _c("span", [_vm._v(" · " + _vm._s(props.row.strength))]) : _vm._e(), _vm._v(" "), props.row.dosage_form ? _c("span", [_vm._v(" · " + _vm._s(props.row.dosage_form))]) : _vm._e()]) : _vm._e(), _vm._v(" "), props.row.variant_name ? _c("div", [_c("small", {
          staticClass: "badge badge-light"
        }, [_vm._v(_vm._s(props.row.variant_name))])]) : _vm._e()]) : props.column.field == "expiry_date" ? _c("span", [props.row.expiry_date ? _c("span", [_vm._v("\n            " + _vm._s(props.row.expiry_date) + "\n            "), _c("br"), _vm._v(" "), _c("small", {
          "class": {
            "text-danger": props.row.expiry_bucket === "expired",
            "text-warning": props.row.expiry_bucket === "near",
            "text-success": props.row.expiry_bucket === "valid"
          }
        }, [props.row.expiry_bucket === "expired" ? _c("span", [_vm._v("\n                " + _vm._s(_vm.$t("Expired")) + " (" + _vm._s(Math.abs(props.row.days_to_expiry)) + "d)\n              ")]) : props.row.expiry_bucket === "near" ? _c("span", [_vm._v("\n                " + _vm._s(_vm.$t("Expires_in")) + " " + _vm._s(props.row.days_to_expiry) + "d\n              ")]) : _c("span", [_vm._v("\n                " + _vm._s(props.row.days_to_expiry) + "d\n              ")])])]) : _c("span", {
          staticClass: "text-muted"
        }, [_vm._v("—")])]) : props.column.field == "status" ? _c("span", [_c("span", {
          staticClass: "badge",
          "class": _vm.statusBadge(props.row.status)
        }, [_vm._v("\n            " + _vm._s(_vm.$t("Batch_Status_" + props.row.status)) + "\n          ")])]) : props.column.field == "qty" ? _c("span", [_vm._v("\n          " + _vm._s(_vm.formatNumber(props.row.qty)) + "\n        ")]) : props.column.field == "unit_cost" ? _c("span", [props.row.unit_cost !== null ? _c("span", [_vm._v(_vm._s(_vm.formatNumber(props.row.unit_cost)))]) : _c("span", {
          staticClass: "text-muted"
        }, [_vm._v("—")])]) : props.column.field == "actions" ? _c("span", [_vm.canManage ? _c("a", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          attrs: {
            title: _vm.$t("Edit")
          },
          on: {
            click: function click($event) {
              return _vm.openEdit(props.row);
            }
          }
        }, [_c("lucide-icon", {
          staticClass: "text-25 text-success",
          attrs: {
            name: "pencil"
          }
        })], 1) : _vm._e(), _vm._v(" "), _vm.canWriteOff && props.row.status !== "written_off" ? _c("a", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          attrs: {
            title: _vm.$t("Write_Off")
          },
          on: {
            click: function click($event) {
              return _vm.openWriteOff(props.row);
            }
          }
        }, [_c("lucide-icon", {
          staticClass: "text-25 text-warning",
          attrs: {
            name: "trash-2"
          }
        })], 1) : _vm._e(), _vm._v(" "), _vm.canWriteOff ? _c("a", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          attrs: {
            title: _vm.$t("Delete")
          },
          on: {
            click: function click($event) {
              return _vm.deleteBatch(props.row.id);
            }
          }
        }, [_c("lucide-icon", {
          staticClass: "text-25 text-danger",
          attrs: {
            name: "x"
          }
        })], 1) : _vm._e()]) : _vm._e()];
      }
    }], null, false, 798018526)
  })], 1) : _vm._e(), _vm._v(" "), _c("validation-observer", {
    ref: "Edit_batch"
  }, [_c("b-modal", {
    attrs: {
      "hide-footer": "",
      size: "md",
      id: "Edit_batch",
      title: _vm.$t("Edit_Batch")
    }
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submitEdit.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Product")
    }
  }, [_c("b-form-input", {
    attrs: {
      value: _vm.editing.product_name,
      disabled: ""
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "batch_no",
      rules: {
        required: true,
        max: 100
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Batch_No") + " *"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext)
          },
          model: {
            value: _vm.editing.batch_no,
            callback: function callback($$v) {
              _vm.$set(_vm.editing, "batch_no", $$v);
            },
            expression: "editing.batch_no"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Status")
    }
  }, [_c("b-form-select", {
    model: {
      value: _vm.editing.status,
      callback: function callback($$v) {
        _vm.$set(_vm.editing, "status", $$v);
      },
      expression: "editing.status"
    }
  }, [_c("option", {
    attrs: {
      value: "active"
    }
  }, [_vm._v(_vm._s(_vm.$t("Batch_Status_active")))]), _vm._v(" "), _c("option", {
    attrs: {
      value: "quarantined"
    }
  }, [_vm._v(_vm._s(_vm.$t("Batch_Status_quarantined")))]), _vm._v(" "), _c("option", {
    attrs: {
      value: "expired"
    }
  }, [_vm._v(_vm._s(_vm.$t("Batch_Status_expired")))]), _vm._v(" "), _c("option", {
    attrs: {
      value: "written_off"
    }
  }, [_vm._v(_vm._s(_vm.$t("Batch_Status_written_off")))])])], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Expiry_Date")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "date"
    },
    model: {
      value: _vm.editing.expiry_date,
      callback: function callback($$v) {
        _vm.$set(_vm.editing, "expiry_date", $$v);
      },
      expression: "editing.expiry_date"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Mfg_Date")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "date"
    },
    model: {
      value: _vm.editing.mfg_date,
      callback: function callback($$v) {
        _vm.$set(_vm.editing, "mfg_date", $$v);
      },
      expression: "editing.mfg_date"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Quantity")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "number",
      step: "0.01",
      min: "0"
    },
    model: {
      value: _vm.editing.qty,
      callback: function callback($$v) {
        _vm.$set(_vm.editing, "qty", _vm._n($$v));
      },
      expression: "editing.qty"
    }
  }), _vm._v(" "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Batch_Qty_Edit_Hint")))])], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("UnitCost")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "number",
      step: "0.0001",
      min: "0"
    },
    model: {
      value: _vm.editing.unit_cost,
      callback: function callback($$v) {
        _vm.$set(_vm.editing, "unit_cost", _vm._n($$v));
      },
      expression: "editing.unit_cost"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Note")
    }
  }, [_c("b-form-textarea", {
    attrs: {
      rows: "2"
    },
    model: {
      value: _vm.editing.notes,
      callback: function callback($$v) {
        _vm.$set(_vm.editing, "notes", $$v);
      },
      expression: "editing.notes"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mt-2",
    attrs: {
      md: "12"
    }
  }, [_c("b-button", {
    attrs: {
      variant: "primary",
      type: "submit",
      disabled: _vm.SubmitProcessing
    }
  }, [_c("lucide-icon", {
    staticClass: "me-2 font-weight-bold",
    attrs: {
      name: "check"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("submit")) + "\n            ")], 1), _vm._v(" "), _vm.SubmitProcessing ? _vm._m(0) : _vm._e()], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("b-modal", {
    attrs: {
      "hide-footer": "",
      size: "md",
      id: "WriteOff_batch",
      title: _vm.$t("Write_Off")
    }
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submitWriteOff.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-alert", {
    attrs: {
      show: "",
      variant: "warning"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Write_Off_Confirm", {
    batch: _vm.writingOff.batch_no,
    product: _vm.writingOff.product_name,
    qty: _vm.writingOff.qty
  })) + "\n          ")])], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Reason")
    }
  }, [_c("b-form-textarea", {
    attrs: {
      rows: "3"
    },
    model: {
      value: _vm.writingOff.reason,
      callback: function callback($$v) {
        _vm.$set(_vm.writingOff, "reason", $$v);
      },
      expression: "writingOff.reason"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-button", {
    attrs: {
      variant: "warning",
      type: "submit",
      disabled: _vm.SubmitProcessing
    }
  }, [_c("lucide-icon", {
    staticClass: "me-2",
    attrs: {
      name: "trash-2"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Write_Off")) + "\n          ")], 1)], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "typo__p"
  }, [_c("div", {
    staticClass: "spinner sm spinner-primary mt-3"
  })]);
}];
render._withStripped = true;


/***/ },

/***/ "./resources/src/utils/priceFormat.js"
/*!********************************************!*\
  !*** ./resources/src/utils/priceFormat.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PRICE_FORMATS: () => (/* binding */ PRICE_FORMATS),
/* harmony export */   cachePriceDecimals: () => (/* binding */ cachePriceDecimals),
/* harmony export */   cachePriceFormat: () => (/* binding */ cachePriceFormat),
/* harmony export */   formatPriceDisplay: () => (/* binding */ formatPriceDisplay),
/* harmony export */   getPriceDecimals: () => (/* binding */ getPriceDecimals),
/* harmony export */   getPriceFormatSetting: () => (/* binding */ getPriceFormatSetting),
/* harmony export */   normalizePriceFormatKey: () => (/* binding */ normalizePriceFormatKey)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Price formatting helper for frontend display (e.g., POS)
// This helper is purely presentational and does NOT affect calculations or stored values.

// Internal map of supported formats:
// - 'comma_dot'   => 1,234.56 (thousand ',', decimal '.')
// - 'dot_comma'   => 1.234,56 (thousand '.', decimal ',')
// - 'space_comma' => 1 234,56 (thousand ' ', decimal ',')
var PRICE_FORMATS = {
  comma_dot: {
    thousands: ',',
    decimal: '.'
  },
  dot_comma: {
    thousands: '.',
    decimal: ','
  },
  space_comma: {
    thousands: ' ',
    decimal: ','
  }
};

// Normalize a stored value/label into one of our internal keys
function normalizePriceFormatKey(input) {
  if (!input) return null;
  var raw = String(input).trim();

  // Direct key
  if (PRICE_FORMATS[raw]) {
    return raw;
  }

  // Allow matching by exact label text (for safety if something stored the label)
  var labelMap = {
    "1,234.56 (thousand , decimal .)": "comma_dot",
    "1.234,56 (thousand . decimal ,)": "dot_comma",
    "1 234,56 (thousand space, decimal ,)": "space_comma"
  };
  if (labelMap[raw]) {
    return labelMap[raw];
  }
  return null;
}

// Format a numeric value according to the selected price format.
// - value: number or numeric-like
// - decimals: integer number of decimal places
// - formatKey: one of PRICE_FORMATS keys or label text; if falsy/unknown, falls back to legacy formatting
function formatPriceDisplay(value) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var formatKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var d = Number.isInteger(decimals) ? decimals : 0;
  var n = Number(value);
  var safe = Number.isFinite(n) ? n : 0;
  var key = normalizePriceFormatKey(formatKey);

  // Fallback: keep current/default behavior (en-US locale style)
  if (!key) {
    try {
      return safe.toLocaleString('en-US', {
        minimumFractionDigits: d,
        maximumFractionDigits: d
      });
    } catch (e) {
      var _fixed = safe.toFixed(d);
      var parts = _fixed.split('.');
      var _intPart = parts[0];
      var _fracPart = parts[1] || '';
      var withCommas = _intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return d > 0 ? "".concat(withCommas, ".").concat(_fracPart) : withCommas;
    }
  }
  var cfg = PRICE_FORMATS[key];
  var fixed = safe.toFixed(d);
  var _fixed$split = fixed.split('.'),
    _fixed$split2 = _slicedToArray(_fixed$split, 2),
    intPart = _fixed$split2[0],
    _fixed$split2$ = _fixed$split2[1],
    fracPart = _fixed$split2$ === void 0 ? '' : _fixed$split2$;

  // Thousands grouping
  var re = /\B(?=(\d{3})+(?!\d))/g;
  intPart = intPart.replace(re, cfg.thousands);
  if (d <= 0) {
    return intPart;
  }
  if (fracPart.length < d) {
    fracPart = fracPart.padEnd(d, '0');
  }
  return "".concat(intPart).concat(cfg.decimal).concat(fracPart);
}

// Get the selected price format from:
// - explicit settings object (preferred)
// - Vuex store getter (getPriceFormat) - from get_user_auth API
// This helper never throws; it returns null if no valid format is found.
function getPriceFormatSetting() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$settings = _ref.settings,
    settings = _ref$settings === void 0 ? null : _ref$settings,
    _ref$store = _ref.store,
    store = _ref$store === void 0 ? null : _ref$store;
  // 1) Explicit settings object (e.g., System Settings API payload)
  if (settings && settings.price_format) {
    var key = normalizePriceFormatKey(settings.price_format);
    if (key) {
      return key;
    }
  }

  // 2) Vuex store getter (from get_user_auth API)
  if (store && _typeof(store.getters) === 'object' && store.getters.getPriceFormat) {
    try {
      var priceFormat = store.getters.getPriceFormat;
      var _key = normalizePriceFormatKey(priceFormat);
      if (_key) {
        return _key;
      }
    } catch (e) {
      // ignore
    }
  }

  // No valid setting => use default behavior (caller should treat null as "legacy" formatting)
  return null;
}

// Resolve the configured monetary precision (2 or 3) from:
// - explicit settings object (System Settings API payload: enable_3_decimal_pricing)
// - Vuex store getter (getPriceDecimals) - from get_user_auth API
// - localStorage cache (set at login) as an offline-friendly fallback
// Always returns 2 or 3; defaults to 2.
function getPriceDecimals() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref2$settings = _ref2.settings,
    settings = _ref2$settings === void 0 ? null : _ref2$settings,
    _ref2$store = _ref2.store,
    store = _ref2$store === void 0 ? null : _ref2$store;
  // 1) Explicit settings object
  if (settings && typeof settings.enable_3_decimal_pricing !== 'undefined') {
    var enabled = settings.enable_3_decimal_pricing === true || settings.enable_3_decimal_pricing === 1 || settings.enable_3_decimal_pricing === '1';
    return enabled ? 3 : 2;
  }

  // 2) Vuex store getter
  if (store && _typeof(store.getters) === 'object' && store.getters.getPriceDecimals) {
    try {
      var n = parseInt(store.getters.getPriceDecimals, 10);
      if (n === 3) return 3;
      if (n === 2) return 2;
    } catch (e) {
      // ignore
    }
  }

  // 3) localStorage cache
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      var cached = parseInt(window.localStorage.getItem('app_price_decimals'), 10);
      if (cached === 3) return 3;
    } catch (e) {
      // ignore
    }
  }
  return 2;
}

// Cache the monetary precision (2 or 3) into localStorage for quick frontend access
function cachePriceDecimals(decimals) {
  var n = parseInt(decimals, 10) === 3 ? 3 : 2;
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    window.localStorage.setItem('app_price_decimals', String(n));
  } catch (e) {
    // ignore quota or storage errors
  }
}

// Cache a selected price format key into localStorage for quick frontend access
function cachePriceFormat(formatKey) {
  var key = normalizePriceFormatKey(formatKey);
  if (!key) return;
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    window.localStorage.setItem('app_price_format', key);
  } catch (e) {
    // ignore quota or storage errors
  }
}

/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/batches.vue?vue&type=style&index=0&id=19eba3cc&lang=css"
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/batches.vue?vue&type=style&index=0&id=19eba3cc&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n/* Action column icon hover state on dark rows */\n.dark-theme .vgt-table td a:not(.btn):has(> .text-25):hover,\n.dark-theme .vgt-table td a:not(.btn):has(> .text-25):focus {\n  background: rgba(255, 255, 255, 0.06) !important;\n  border-color: rgba(255, 255, 255, 0.18) !important;\n}\n\n/* Empty/dash placeholders inside vgt cells */\n.dark-theme .vgt-table td .text-muted {\n  color: rgba(216, 216, 216, 0.55) !important;\n}\n\n/* Filter row labels inside the b-card.wrapper */\n.dark-theme .main-content > .wrapper .form-group label {\n  color: #d8d8d8 !important;\n}\n\n/* Write-Off modal warning alert */\n.dark-theme #WriteOff_batch .alert.alert-warning {\n  background: rgba(237, 137, 54, 0.12) !important;\n  border-color: rgba(237, 137, 54, 0.35) !important;\n  color: #fbbf24 !important;\n}\n\n/* Edit modal disabled / readonly Product field */\n.dark-theme #Edit_batch .form-control:disabled,\n.dark-theme #Edit_batch .form-control[readonly] {\n  background: #232323 !important;\n  border-color: #2a2a2a !important;\n  color: rgba(216, 216, 216, 0.55) !important;\n}\n\n/* Native date pickers' calendar icon */\n.dark-theme #Edit_batch input[type=\"date\"]::-webkit-calendar-picker-indicator {\n  filter: invert(0.8);\n  opacity: 0.85;\n}\n\n/* Edit modal \"Batch_Qty_Edit_Hint\" small note */\n.dark-theme #Edit_batch .form-group small.text-muted {\n  color: rgba(216, 216, 216, 0.6) !important;\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/batches.vue?vue&type=style&index=0&id=19eba3cc&lang=css"
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/batches.vue?vue&type=style&index=0&id=19eba3cc&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_batches_vue_vue_type_style_index_0_id_19eba3cc_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./batches.vue?vue&type=style&index=0&id=19eba3cc&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/batches.vue?vue&type=style&index=0&id=19eba3cc&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_batches_vue_vue_type_style_index_0_id_19eba3cc_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_batches_vue_vue_type_style_index_0_id_19eba3cc_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/views/app/pages/products/batches.vue"
/*!************************************************************!*\
  !*** ./resources/src/views/app/pages/products/batches.vue ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _batches_vue_vue_type_template_id_19eba3cc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batches.vue?vue&type=template&id=19eba3cc */ "./resources/src/views/app/pages/products/batches.vue?vue&type=template&id=19eba3cc");
/* harmony import */ var _batches_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./batches.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/products/batches.vue?vue&type=script&lang=js");
/* harmony import */ var _batches_vue_vue_type_style_index_0_id_19eba3cc_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./batches.vue?vue&type=style&index=0&id=19eba3cc&lang=css */ "./resources/src/views/app/pages/products/batches.vue?vue&type=style&index=0&id=19eba3cc&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _batches_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _batches_vue_vue_type_template_id_19eba3cc__WEBPACK_IMPORTED_MODULE_0__.render,
  _batches_vue_vue_type_template_id_19eba3cc__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/products/batches.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/products/batches.vue?vue&type=script&lang=js"
/*!************************************************************************************!*\
  !*** ./resources/src/views/app/pages/products/batches.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_batches_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./batches.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/batches.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_batches_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/products/batches.vue?vue&type=template&id=19eba3cc"
/*!******************************************************************************************!*\
  !*** ./resources/src/views/app/pages/products/batches.vue?vue&type=template&id=19eba3cc ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_batches_vue_vue_type_template_id_19eba3cc__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_batches_vue_vue_type_template_id_19eba3cc__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_batches_vue_vue_type_template_id_19eba3cc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./batches.vue?vue&type=template&id=19eba3cc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/batches.vue?vue&type=template&id=19eba3cc");


/***/ },

/***/ "./resources/src/views/app/pages/products/batches.vue?vue&type=style&index=0&id=19eba3cc&lang=css"
/*!********************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/products/batches.vue?vue&type=style&index=0&id=19eba3cc&lang=css ***!
  \********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_batches_vue_vue_type_style_index_0_id_19eba3cc_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./batches.vue?vue&type=style&index=0&id=19eba3cc&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/batches.vue?vue&type=style&index=0&id=19eba3cc&lang=css");


/***/ }

}]);