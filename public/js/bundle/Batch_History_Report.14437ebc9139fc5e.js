"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Batch_History_Report"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Batch_History_Report.vue?vue&type=script&lang=js"
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Batch_History_Report.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    title: "Batch History"
  },
  data: function data() {
    return {
      isLoading: true,
      batch: {},
      transactions: [],
      totals: {
        "in": 0,
        out: 0,
        computed_qty: 0,
        actual_qty: 0,
        drift: 0
      },
      typeFilter: 'all'
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["currentUser"])), {}, {
    // Monetary precision (2 or 3) driven by the "Enable 3 Decimal Pricing" setting.
    priceDecimals: function priceDecimals() {
      return (0,_utils_priceFormat__WEBPACK_IMPORTED_MODULE_2__.getPriceDecimals)({
        store: this.$store
      });
    },
    currencySymbol: function currencySymbol() {
      return this.currentUser && this.currentUser.currency || '';
    },
    filteredTransactions: function filteredTransactions() {
      var _this = this;
      if (this.typeFilter === 'all') return this.transactions;
      if (this.typeFilter === 'in') return this.transactions.filter(function (t) {
        return t.direction === 'in';
      });
      if (this.typeFilter === 'out') return this.transactions.filter(function (t) {
        return t.direction === 'out';
      });
      return this.transactions.filter(function (t) {
        return t.type === _this.typeFilter;
      });
    },
    hasDrift: function hasDrift() {
      return Math.abs(Number(this.totals.drift) || 0) > 0.0001;
    }
  }),
  methods: {
    formatNumber: function formatNumber(v, dec) {
      if (v === null || v === undefined || v === '') return '0';
      var n = Number(v);
      if (Number.isNaN(n)) return '0';
      if (dec !== undefined) return n.toFixed(dec);
      return Number.isInteger(n) ? n.toString() : n.toFixed(2);
    },
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
    typeBadgeClass: function typeBadgeClass(type) {
      switch (type) {
        case 'purchase':
          return 'badge-success';
        case 'sale_return':
          return 'badge-info';
        case 'sale':
          return 'badge-danger';
        case 'purchase_return':
          return 'badge-warning';
        case 'adjustment':
          return 'badge-primary';
        case 'transfer_in':
          return 'badge-info';
        case 'transfer_out':
          return 'badge-secondary';
        case 'damage':
          return 'badge-dark';
        case 'quotation':
          return 'badge-light';
        default:
          return 'badge-light';
      }
    },
    typeIcon: function typeIcon(type) {
      switch (type) {
        case 'purchase':
          return 'shopping-cart';
        case 'sale_return':
          return 'refresh-cw';
        case 'sale':
          return 'calculator';
        case 'purchase_return':
          return 'refresh-cw';
        case 'adjustment':
          return 'pen';
        case 'transfer_in':
          return 'download';
        case 'transfer_out':
          return 'upload';
        case 'damage':
          return 'x';
        case 'quotation':
          return 'clipboard-list';
        default:
          return 'file-text';
      }
    },
    typeLabel: function typeLabel(type) {
      var labels = {
        purchase: this.$t('Purchase') || 'Purchase',
        sale: this.$t('Sale') || 'Sale',
        sale_return: this.$t('Sales_Return') || 'Sales Return',
        purchase_return: this.$t('Purchase_Return') || 'Purchase Return',
        adjustment: this.$t('Adjustment') || 'Adjustment',
        transfer_in: this.$t('Transfer_In') || 'Transfer In',
        transfer_out: this.$t('Transfer_Out') || 'Transfer Out',
        damage: this.$t('Damage') || 'Damage',
        quotation: this.$t('Quotation') || 'Quotation'
      };
      return labels[type] || type;
    },
    expiryPillStyle: function expiryPillStyle(bucket) {
      var base = {
        display: 'inline-block',
        padding: '2px 8px',
        borderRadius: '10px',
        fontSize: '12px',
        fontWeight: '600'
      };
      var palettes = {
        expired: {
          background: '#fee2e2',
          color: '#991b1b'
        },
        near: {
          background: '#fef3c7',
          color: '#92400e'
        },
        valid: {
          background: '#dcfce7',
          color: '#166534'
        }
      };
      return Object.assign({}, base, palettes[bucket] || {
        background: '#f3f4f6',
        color: '#6b7280'
      });
    },
    sourceLink: function sourceLink(t) {
      if (!t || !t.ref_id) return null;
      switch (t.type) {
        case 'purchase':
          return {
            name: 'detail_purchase',
            params: {
              id: t.ref_id
            }
          };
        case 'sale':
          return {
            name: 'detail_sale',
            params: {
              id: t.ref_id
            }
          };
        case 'sale_return':
          return {
            name: 'detail_sale_return',
            params: {
              id: t.ref_id
            }
          };
        case 'purchase_return':
          return {
            name: 'detail_purchase_return',
            params: {
              id: t.ref_id
            }
          };
        case 'adjustment':
          return {
            name: 'detail_adjustment',
            params: {
              id: t.ref_id
            }
          };
        case 'transfer_in':
        case 'transfer_out':
          return {
            name: 'detail_transfer',
            params: {
              id: t.ref_id
            }
          };
        case 'damage':
          return {
            name: 'edit_damage',
            params: {
              id: t.ref_id
            }
          };
        case 'quotation':
          return {
            name: 'detail_quotation',
            params: {
              id: t.ref_id
            }
          };
        default:
          return null;
      }
    },
    fetch: function fetch() {
      var _this2 = this;
      var id = this.$route.params.id;
      if (!id) return;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("report/batches/".concat(id, "/history")).then(function (response) {
        var data = response.data || {};
        _this2.batch = data.batch || {};
        _this2.transactions = data.transactions || [];
        _this2.totals = data.totals || _this2.totals;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this2.isLoading = false;
      })["catch"](function () {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        setTimeout(function () {
          _this2.isLoading = false;
        }, 500);
      });
    },
    printTable: function printTable() {
      var _this3 = this;
      var title = "".concat(this.$t('Reports'), " / ").concat(this.$t('Batch_History') || 'Batch History', " \u2014 ").concat(this.batch.batch_no || '');
      var items = this.filteredTransactions || [];
      var header = "<div class=\"print-header\">".concat(title, "</div>");
      header += "<div class=\"batch-meta\">\n        <strong>".concat(this.$t('Product'), ":</strong> ").concat(this.batch.product_name || '', " ").concat(this.batch.product_code ? '[' + this.batch.product_code + ']' : '', "<br>\n        <strong>").concat(this.$t('Warehouse'), ":</strong> ").concat(this.batch.warehouse_name || '', "<br>\n        <strong>").concat(this.$t('Mfg_Date'), ":</strong> ").concat(this.batch.mfg_date || '—', " &nbsp; \xB7 &nbsp;\n        <strong>").concat(this.$t('Expiry_Date'), ":</strong> ").concat(this.batch.expiry_date || '—', "<br>\n        <strong>").concat(this.$t('Current_Quantity') || 'Current Qty', ":</strong> ").concat(this.formatNumber(this.batch.qty), "\n      </div>");
      var html = '<table style="width:100%; border-collapse:collapse; font-size:11px;">';
      html += '<thead><tr>';
      ['Type', 'Date', 'Reference', 'Party', 'In', 'Out', 'Unit Value', 'Balance'].forEach(function (h) {
        html += "<th style=\"border:1px solid #ddd; padding:6px; background:#f5f5f5; text-align:left;\">".concat(h, "</th>");
      });
      html += '</tr></thead><tbody>';
      items.forEach(function (r) {
        html += '<tr>';
        html += "<td style=\"border:1px solid #ddd; padding:6px;\">".concat(_this3.typeLabel(r.type), "</td>");
        html += "<td style=\"border:1px solid #ddd; padding:6px;\">".concat(r.date || '—', "</td>");
        html += "<td style=\"border:1px solid #ddd; padding:6px;\">".concat(r.ref || '', "</td>");
        html += "<td style=\"border:1px solid #ddd; padding:6px;\">".concat(r.party_name || '', "</td>");
        html += "<td style=\"border:1px solid #ddd; padding:6px; text-align:right;\">".concat(r.qty_in ? '+' + _this3.formatNumber(r.qty_in) : '—', "</td>");
        html += "<td style=\"border:1px solid #ddd; padding:6px; text-align:right;\">".concat(r.qty_out ? '-' + _this3.formatNumber(r.qty_out) : '—', "</td>");
        html += "<td style=\"border:1px solid #ddd; padding:6px; text-align:right;\">".concat(r.unit_value !== null ? _this3.formatNumber(r.unit_value, _this3.priceDecimals) : '—', "</td>");
        html += "<td style=\"border:1px solid #ddd; padding:6px; text-align:right; font-weight:bold;\">".concat(_this3.formatNumber(r.running_balance), "</td>");
        html += '</tr>';
      });
      html += '</tbody></table>';
      var recon = "<div style=\"margin-top:14px; padding:10px; border:1px solid #e0e7ff; background:#f8faff;\">\n        <strong>".concat(this.$t('Reconciliation') || 'Reconciliation', "</strong><br>\n        ").concat(this.$t('Total_In') || 'Total In', ": ").concat(this.formatNumber(this.totals["in"]), " &nbsp;\n        ").concat(this.$t('Total_Out') || 'Total Out', ": ").concat(this.formatNumber(this.totals.out), " &nbsp;\n        ").concat(this.$t('Computed_Qty') || 'Computed Qty', ": ").concat(this.formatNumber(this.totals.computed_qty), " &nbsp;\n        ").concat(this.$t('Actual_Qty') || 'Actual Qty', ": ").concat(this.formatNumber(this.totals.actual_qty), "\n        <br>\n        <strong style=\"color:").concat(this.hasDrift ? '#991b1b' : '#166534', ";\">\n          ").concat(this.hasDrift ? (this.$t('Drift_Warning') || 'Ledger drift detected') + ': ' + this.formatNumber(this.totals.drift) : this.$t('Ledger_Balanced') || 'Ledger balanced', "\n        </strong>\n      </div>");
      var w = window.open('', '_blank');
      if (!w) {
        alert('Please allow popups to print');
        return;
      }
      var links = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(function (l) {
        return l.outerHTML;
      }).join('\n');
      var doc = w.document;
      doc.open();
      doc.write("<!doctype html>\n<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    <base href=\"".concat(window.location.origin, "/\" />\n    <title>").concat(title, "</title>\n    ").concat(links, "\n    <style>\n      @media print { body, body * { visibility: visible !important; } @page { size: A4; margin: 0.3cm; } }\n      body { margin: 0.3cm; font-family: Arial, sans-serif; }\n      .print-header { font-weight: 600; margin-bottom: 6px; font-size: 14px; }\n      .batch-meta { margin-bottom: 12px; font-size: 11px; line-height: 1.5; }\n    </style>\n  </head>\n  <body>\n    ").concat(header, "\n    ").concat(html, "\n    ").concat(recon, "\n  </body>\n</html>"));
      doc.close();
      w.focus();
      setTimeout(function () {
        w.print();
        w.close();
      }, 400);
    }
  },
  created: function created() {
    this.fetch();
  },
  watch: {
    '$route.params.id': function $routeParamsId() {
      this.isLoading = true;
      this.fetch();
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Batch_History_Report.vue?vue&type=template&id=44e528f1"
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Batch_History_Report.vue?vue&type=template&id=44e528f1 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("Batch_History") || "Batch History",
      folder: _vm.$t("Reports")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("div", [_c("div", {
    staticClass: "d-flex flex-wrap align-items-center mb-3"
  }, [_c("b-button", {
    staticClass: "btn-pill mr-2",
    attrs: {
      size: "sm",
      variant: "outline-secondary"
    },
    on: {
      click: function click($event) {
        return _vm.$router.push({
          name: "batch_register_report"
        });
      }
    }
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "arrow-left"
    }
  }), _vm._v(_vm._s(_vm.$t("back") || "Back") + "\n      ")], 1), _vm._v(" "), _c("h4", {
    staticClass: "m-0"
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Batch_History") || "Batch History") + ":\n        "), _c("span", {
    staticClass: "text-primary"
  }, [_vm._v(_vm._s(_vm.batch.batch_no || "—"))])]), _vm._v(" "), _c("div", {
    staticClass: "ml-auto"
  }, [_c("b-button", {
    staticClass: "btn-pill",
    attrs: {
      size: "sm",
      variant: "outline-secondary"
    },
    on: {
      click: function click($event) {
        return _vm.printTable();
      }
    }
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "printer"
    }
  }), _vm._v(_vm._s(_vm.$t("print")) + "\n        ")], 1)], 1)], 1), _vm._v(" "), _c("b-card", {
    staticClass: "mb-3"
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("div", [_c("strong", [_vm._v(_vm._s(_vm.$t("Product")) + ":")]), _vm._v(" " + _vm._s(_vm.batch.product_name) + "\n            "), _vm.batch.product_code ? _c("small", {
    staticClass: "text-muted"
  }, [_vm._v("[" + _vm._s(_vm.batch.product_code) + "]")]) : _vm._e()]), _vm._v(" "), _vm.batch.generic_name ? _c("div", {
    staticClass: "small text-muted"
  }, [_vm._v("\n            " + _vm._s(_vm.batch.generic_name) + "\n            "), _vm.batch.strength ? _c("span", [_vm._v(" · " + _vm._s(_vm.batch.strength))]) : _vm._e(), _vm._v(" "), _vm.batch.dosage_form ? _c("span", [_vm._v(" · " + _vm._s(_vm.batch.dosage_form))]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.batch.variant_name ? _c("div", {
    staticClass: "mt-1"
  }, [_c("span", {
    staticClass: "badge badge-pill",
    staticStyle: {
      background: "#ede9fe",
      color: "#6d28d9"
    }
  }, [_vm._v(_vm._s(_vm.batch.variant_name))])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("Warehouse")) + ":")]), _vm._v(" " + _vm._s(_vm.batch.warehouse_name))]), _vm._v(" "), _c("div", [_c("strong", [_vm._v(_vm._s(_vm.$t("Status")) + ":")]), _vm._v(" "), _c("span", {
    staticClass: "badge ml-1",
    "class": _vm.statusBadge(_vm.batch.status)
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Batch_Status_" + _vm.batch.status) || _vm.batch.status) + "\n            ")])])]), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("div", [_c("strong", [_vm._v(_vm._s(_vm.$t("Mfg_Date")) + ":")]), _vm._v(" " + _vm._s(_vm.batch.mfg_date || "—"))]), _vm._v(" "), _c("div", [_c("strong", [_vm._v(_vm._s(_vm.$t("Expiry_Date")) + ":")]), _vm._v(" "), _vm.batch.expiry_date ? _c("span", {
    staticClass: "ml-1",
    style: _vm.expiryPillStyle(_vm.batch.expiry_bucket)
  }, [_vm._v("\n              " + _vm._s(_vm.batch.expiry_date) + "\n            ")]) : _c("span", {
    staticClass: "text-muted ml-1"
  }, [_vm._v("—")]), _vm._v(" "), _vm.batch.expiry_date ? _c("small", {
    staticClass: "ml-2",
    "class": {
      "text-danger": _vm.batch.expiry_bucket === "expired",
      "text-warning": _vm.batch.expiry_bucket === "near",
      "text-success": _vm.batch.expiry_bucket === "valid"
    }
  }, [_vm.batch.expiry_bucket === "expired" ? _c("span", [_vm._v("\n                " + _vm._s(_vm.$t("Expired")) + " (" + _vm._s(Math.abs(_vm.batch.days_to_expiry)) + "d)\n              ")]) : _vm.batch.expiry_bucket === "near" ? _c("span", [_vm._v("\n                " + _vm._s(_vm.$t("Expires_in")) + " " + _vm._s(_vm.batch.days_to_expiry) + "d\n              ")]) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "mt-2 h4 mb-0"
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("Current_Quantity") || "Current Qty") + ":")]), _vm._v(" "), _c("span", {
    staticClass: "text-primary"
  }, [_vm._v(_vm._s(_vm.formatNumber(_vm.batch.qty)))])]), _vm._v(" "), _vm.batch.notes ? _c("div", {
    staticClass: "mt-2 small text-muted"
  }, [_vm._v(_vm._s(_vm.batch.notes))]) : _vm._e()])], 1)], 1), _vm._v(" "), _c("b-card", [_c("div", {
    staticClass: "d-flex flex-wrap align-items-end mb-3"
  }, [_c("h5", {
    staticClass: "m-0"
  }, [_vm._v(_vm._s(_vm.$t("Movements") || "Movements") + "\n          "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v("(" + _vm._s(_vm.filteredTransactions.length) + ")")])]), _vm._v(" "), _c("div", {
    staticClass: "ml-auto"
  }, [_c("b-form-select", {
    staticClass: "w-auto",
    attrs: {
      size: "sm"
    },
    model: {
      value: _vm.typeFilter,
      callback: function callback($$v) {
        _vm.typeFilter = $$v;
      },
      expression: "typeFilter"
    }
  }, [_c("option", {
    attrs: {
      value: "all"
    }
  }, [_vm._v(_vm._s(_vm.$t("All")))]), _vm._v(" "), _c("option", {
    attrs: {
      value: "in"
    }
  }, [_vm._v("↑ " + _vm._s(_vm.$t("In") || "In"))]), _vm._v(" "), _c("option", {
    attrs: {
      value: "out"
    }
  }, [_vm._v("↓ " + _vm._s(_vm.$t("Out") || "Out"))]), _vm._v(" "), _c("option", {
    attrs: {
      value: "purchase"
    }
  }, [_vm._v(_vm._s(_vm.$t("Purchase") || "Purchase"))]), _vm._v(" "), _c("option", {
    attrs: {
      value: "sale"
    }
  }, [_vm._v(_vm._s(_vm.$t("Sale") || "Sale"))]), _vm._v(" "), _c("option", {
    attrs: {
      value: "sale_return"
    }
  }, [_vm._v(_vm._s(_vm.$t("Sales_Return") || "Sales Return"))]), _vm._v(" "), _c("option", {
    attrs: {
      value: "purchase_return"
    }
  }, [_vm._v(_vm._s(_vm.$t("Purchase_Return") || "Purchase Return"))]), _vm._v(" "), _c("option", {
    attrs: {
      value: "adjustment"
    }
  }, [_vm._v(_vm._s(_vm.$t("Adjustment") || "Adjustment"))]), _vm._v(" "), _c("option", {
    attrs: {
      value: "transfer_in"
    }
  }, [_vm._v(_vm._s(_vm.$t("Transfer_In") || "Transfer In"))]), _vm._v(" "), _c("option", {
    attrs: {
      value: "transfer_out"
    }
  }, [_vm._v(_vm._s(_vm.$t("Transfer_Out") || "Transfer Out"))]), _vm._v(" "), _c("option", {
    attrs: {
      value: "damage"
    }
  }, [_vm._v(_vm._s(_vm.$t("Damage") || "Damage"))]), _vm._v(" "), _c("option", {
    attrs: {
      value: "quotation"
    }
  }, [_vm._v(_vm._s(_vm.$t("Quotation") || "Quotation"))])])], 1)]), _vm._v(" "), !_vm.filteredTransactions.length ? _c("div", {
    staticClass: "text-center py-4 text-muted"
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "info"
    }
  }), _vm._v("\n        " + _vm._s(_vm.$t("No_movements_recorded") || "No movements recorded for this batch yet.") + "\n      ")], 1) : _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-hover table-sm vgt-table mb-0"
  }, [_c("thead", [_c("tr", {
    staticStyle: {
      background: "#eef2ff"
    }
  }, [_c("th", {
    staticStyle: {
      color: "#3730a3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Type") || "Type"))]), _vm._v(" "), _c("th", {
    staticStyle: {
      color: "#3730a3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Date")))]), _vm._v(" "), _c("th", {
    staticStyle: {
      color: "#3730a3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Reference")))]), _vm._v(" "), _c("th", {
    staticStyle: {
      color: "#3730a3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Party") || "Party"))]), _vm._v(" "), _c("th", {
    staticStyle: {
      color: "#3730a3",
      "text-align": "right"
    }
  }, [_vm._v(_vm._s(_vm.$t("In") || "In"))]), _vm._v(" "), _c("th", {
    staticStyle: {
      color: "#3730a3",
      "text-align": "right"
    }
  }, [_vm._v(_vm._s(_vm.$t("Out") || "Out"))]), _vm._v(" "), _c("th", {
    staticStyle: {
      color: "#3730a3",
      "text-align": "right"
    }
  }, [_vm._v(_vm._s(_vm.$t("Unit_Value") || "Unit Value"))]), _vm._v(" "), _c("th", {
    staticStyle: {
      color: "#3730a3",
      "text-align": "right"
    }
  }, [_vm._v(_vm._s(_vm.$t("Balance") || "Balance"))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.filteredTransactions, function (t, idx) {
    return _c("tr", {
      key: idx
    }, [_c("td", [_c("span", {
      staticClass: "badge",
      "class": _vm.typeBadgeClass(t.type)
    }, [_c("i", {
      "class": _vm.typeIcon(t.type),
      staticStyle: {
        "margin-right": "3px"
      }
    }), _vm._v(_vm._s(_vm.typeLabel(t.type)) + "\n                ")])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(t.date || "—"))]), _vm._v(" "), _c("td", [_vm.sourceLink(t) ? _c("router-link", {
      staticClass: "text-primary font-weight-bold",
      attrs: {
        to: _vm.sourceLink(t)
      }
    }, [_vm._v(_vm._s(t.ref))]) : _c("span", [_vm._v(_vm._s(t.ref))])], 1), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "d-block"
    }, [_vm._v(_vm._s(t.party_name || "—"))]), _vm._v(" "), _c("small", {
      staticClass: "text-muted"
    }, [_vm._v(_vm._s(t.party_label))])]), _vm._v(" "), _c("td", {
      staticStyle: {
        "text-align": "right"
      }
    }, [t.qty_in ? _c("span", {
      staticClass: "text-success font-weight-bold"
    }, [_vm._v("+" + _vm._s(_vm.formatNumber(t.qty_in)))]) : t.type === "quotation" && t.reserved_qty ? _c("span", {
      staticClass: "text-muted",
      attrs: {
        title: _vm.$t("Quotation_Reserved") || "Quotation reserved (not yet sold)"
      }
    }, [_vm._v("\n                  (" + _vm._s(_vm.formatNumber(t.reserved_qty)) + ")\n                ")]) : _c("span", {
      staticClass: "text-muted"
    }, [_vm._v("—")])]), _vm._v(" "), _c("td", {
      staticStyle: {
        "text-align": "right"
      }
    }, [t.qty_out ? _c("span", {
      staticClass: "text-danger font-weight-bold"
    }, [_vm._v("-" + _vm._s(_vm.formatNumber(t.qty_out)))]) : _c("span", {
      staticClass: "text-muted"
    }, [_vm._v("—")])]), _vm._v(" "), _c("td", {
      staticStyle: {
        "text-align": "right"
      }
    }, [t.unit_value !== null ? _c("span", [_vm._v(_vm._s(_vm.currencySymbol) + " " + _vm._s(_vm.formatNumber(t.unit_value, _vm.priceDecimals)))]) : _c("span", {
      staticClass: "text-muted"
    }, [_vm._v("—")])]), _vm._v(" "), _c("td", {
      staticStyle: {
        "text-align": "right",
        "font-weight": "bold"
      }
    }, [_vm._v(_vm._s(_vm.formatNumber(t.running_balance)))])]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "mt-4 p-3",
    staticStyle: {
      background: "#f8faff",
      border: "1px solid #e0e7ff",
      "border-radius": "8px"
    }
  }, [_c("h6", {
    staticClass: "mb-3 text-primary"
  }, [_c("lucide-icon", {
    attrs: {
      name: "receipt-text"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Reconciliation") || "Reconciliation") + "\n        ")], 1), _vm._v(" "), _c("b-row", [_c("b-col", {
    staticClass: "text-center",
    attrs: {
      md: "3"
    }
  }, [_c("div", {
    staticClass: "small text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Total_In") || "Total In"))]), _vm._v(" "), _c("div", {
    staticClass: "h5 mb-0 text-success"
  }, [_vm._v("+ " + _vm._s(_vm.formatNumber(_vm.totals["in"])))])]), _vm._v(" "), _c("b-col", {
    staticClass: "text-center",
    attrs: {
      md: "3"
    }
  }, [_c("div", {
    staticClass: "small text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Total_Out") || "Total Out"))]), _vm._v(" "), _c("div", {
    staticClass: "h5 mb-0 text-danger"
  }, [_vm._v("- " + _vm._s(_vm.formatNumber(_vm.totals.out)))])]), _vm._v(" "), _c("b-col", {
    staticClass: "text-center",
    attrs: {
      md: "3"
    }
  }, [_c("div", {
    staticClass: "small text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Computed_Qty") || "Computed Qty"))]), _vm._v(" "), _c("div", {
    staticClass: "h5 mb-0"
  }, [_vm._v(_vm._s(_vm.formatNumber(_vm.totals.computed_qty)))])]), _vm._v(" "), _c("b-col", {
    staticClass: "text-center",
    attrs: {
      md: "3"
    }
  }, [_c("div", {
    staticClass: "small text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Actual_Qty") || "Actual Qty"))]), _vm._v(" "), _c("div", {
    staticClass: "h5 mb-0"
  }, [_vm._v(_vm._s(_vm.formatNumber(_vm.totals.actual_qty)))])])], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-3 p-2 text-center",
    style: {
      background: _vm.hasDrift ? "#fee2e2" : "#dcfce7",
      color: _vm.hasDrift ? "#991b1b" : "#166534",
      borderRadius: "6px",
      fontWeight: 600
    }
  }, [_vm.hasDrift ? _c("span", [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "alert-triangle"
    }
  }), _vm._v("\n            " + _vm._s(_vm.$t("Drift_Warning") || "Ledger drift detected") + ": " + _vm._s(_vm.formatNumber(_vm.totals.drift)) + "\n          ")], 1) : _c("span", [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "check"
    }
  }), _vm._v("\n            " + _vm._s(_vm.$t("Ledger_Balanced") || "Ledger balanced — actual qty matches sum of transactions.") + "\n          ")], 1)])], 1)])], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
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

/***/ "./resources/src/views/app/pages/reports/Batch_History_Report.vue"
/*!************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/Batch_History_Report.vue ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Batch_History_Report_vue_vue_type_template_id_44e528f1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Batch_History_Report.vue?vue&type=template&id=44e528f1 */ "./resources/src/views/app/pages/reports/Batch_History_Report.vue?vue&type=template&id=44e528f1");
/* harmony import */ var _Batch_History_Report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Batch_History_Report.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/reports/Batch_History_Report.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Batch_History_Report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Batch_History_Report_vue_vue_type_template_id_44e528f1__WEBPACK_IMPORTED_MODULE_0__.render,
  _Batch_History_Report_vue_vue_type_template_id_44e528f1__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/reports/Batch_History_Report.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/reports/Batch_History_Report.vue?vue&type=script&lang=js"
/*!************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/Batch_History_Report.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Batch_History_Report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Batch_History_Report.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Batch_History_Report.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Batch_History_Report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/reports/Batch_History_Report.vue?vue&type=template&id=44e528f1"
/*!******************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/Batch_History_Report.vue?vue&type=template&id=44e528f1 ***!
  \******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Batch_History_Report_vue_vue_type_template_id_44e528f1__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Batch_History_Report_vue_vue_type_template_id_44e528f1__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Batch_History_Report_vue_vue_type_template_id_44e528f1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Batch_History_Report.vue?vue&type=template&id=44e528f1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Batch_History_Report.vue?vue&type=template&id=44e528f1");


/***/ }

}]);