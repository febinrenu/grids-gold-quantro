"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["detail_adjustment"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/adjustment/Detail_Adjustment.vue?vue&type=script&lang=js"
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/adjustment/Detail_Adjustment.vue?vue&type=script&lang=js ***!
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
    title: "Adjustment Detail"
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["currentUserPermissions"])), {}, {
    // Quantity precision (2 or 3) driven by the "Enable 3 Decimal Pricing" setting.
    // Adjustments have no money — this controls how fractional quantities display.
    priceDecimals: function priceDecimals() {
      return (0,_utils_priceFormat__WEBPACK_IMPORTED_MODULE_2__.getPriceDecimals)({
        store: this.$store
      });
    },
    totalAdd: function totalAdd() {
      var sum = (this.details || []).filter(function (d) {
        return d.type === "add";
      }).reduce(function (acc, d) {
        return acc + (Number(d.quantity) || 0);
      }, 0);
      return this.formatNumber(sum, this.priceDecimals);
    },
    totalSub: function totalSub() {
      var sum = (this.details || []).filter(function (d) {
        return d.type === "sub";
      }).reduce(function (acc, d) {
        return acc + (Number(d.quantity) || 0);
      }, 0);
      return this.formatNumber(sum, this.priceDecimals);
    },
    netChange: function netChange() {
      var sum = (this.details || []).reduce(function (acc, d) {
        var q = Number(d.quantity) || 0;
        return d.type === "add" ? acc + q : acc - q;
      }, 0);
      return this.formatNumber(sum, this.priceDecimals);
    }
  }),
  data: function data() {
    return {
      isLoading: true,
      adjustment: {},
      details: []
    };
  },
  methods: {
    formatNumber: function formatNumber(number, dec) {
      if (number === null || number === undefined || number === "") return "0";
      var n = Number(number);
      if (Number.isNaN(n)) return "0";
      return Number.isInteger(n) && (dec === undefined || dec === 0) ? n.toString() : n.toFixed(dec || 2);
    },
    expiry_pill_style: function expiry_pill_style(dateStr) {
      var base = {
        display: "inline-block",
        padding: "2px 8px",
        borderRadius: "10px",
        fontSize: "11px",
        fontWeight: "600"
      };
      if (!dateStr) return Object.assign({}, base, {
        background: "#f3f4f6",
        color: "#6b7280"
      });
      var today = new Date();
      today.setHours(0, 0, 0, 0);
      var exp = new Date(dateStr);
      if (isNaN(exp.getTime())) return Object.assign({}, base, {
        background: "#f3f4f6",
        color: "#6b7280"
      });
      exp.setHours(0, 0, 0, 0);
      var diffDays = Math.round((exp - today) / (1000 * 60 * 60 * 24));
      if (diffDays < 0) return Object.assign({}, base, {
        background: "#fee2e2",
        color: "#991b1b"
      });
      if (diffDays <= 30) return Object.assign({}, base, {
        background: "#fef3c7",
        color: "#92400e"
      });
      return Object.assign({}, base, {
        background: "#dcfce7",
        color: "#166534"
      });
    },
    fetch: function fetch() {
      var _this = this;
      var id = this.$route.params.id;
      if (!id) return;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("adjustments/detail/".concat(id)).then(function (response) {
        var data = response.data || {};
        _this.adjustment = data.adjustment || {};
        _this.details = data.details || [];
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this.isLoading = false;
      })["catch"](function () {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        setTimeout(function () {
          _this.isLoading = false;
        }, 500);
      });
    },
    downloadPdf: function downloadPdf() {
      var _this2 = this;
      var id = this.$route.params.id;
      if (!id) return;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("adjustment_pdf/".concat(id), {
        responseType: "blob",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Adjustment_".concat(_this2.adjustment.Ref || id, ".pdf"));
        document.body.appendChild(link);
        link.click();
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        }, 500);
      })["catch"](function () {
        return setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        }, 500);
      });
    },
    printTable: function printTable() {
      var _this3 = this;
      var title = "".concat(this.$t('AdjustmentDetail') || 'Adjustment Detail', " \u2014 ").concat(this.adjustment.Ref || '');
      var items = this.details || [];
      var header = "<div class=\"print-header\">".concat(title, "</div>");
      header += "<div class=\"meta\">\n        <strong>".concat(this.$t('Reference') || 'Reference', ":</strong> ").concat(this.adjustment.Ref || '', "<br>\n        <strong>").concat(this.$t('date') || 'Date', ":</strong> ").concat(this.adjustment.date || '', "<br>\n        <strong>").concat(this.$t('warehouse') || 'Warehouse', ":</strong> ").concat(this.adjustment.warehouse || '', "<br>\n        ").concat(this.adjustment.note ? '<strong>' + (this.$t('Note') || 'Note') + ':</strong> ' + this.adjustment.note : '', "\n      </div>");
      var html = '<table style="width:100%; border-collapse:collapse; font-size:11px;">';
      html += '<thead><tr>';
      ["Code", "Product", "Qty", "Type"].forEach(function (h) {
        html += "<th style=\"border:1px solid #ddd; padding:6px; background:#f5f5f5; text-align:left;\">".concat(h, "</th>");
      });
      html += "</tr></thead><tbody>";
      items.forEach(function (d) {
        html += "<tr>";
        html += "<td style=\"border:1px solid #ddd; padding:6px;\">".concat(d.code || "", "</td>");
        html += "<td style=\"border:1px solid #ddd; padding:6px;\">".concat(d.name || "", "</td>");
        html += "<td style=\"border:1px solid #ddd; padding:6px; text-align:right;\">".concat(_this3.formatNumber(d.quantity, _this3.priceDecimals), " ").concat(d.unit || "", "</td>");
        html += "<td style=\"border:1px solid #ddd; padding:6px;\">".concat(d.type === "add" ? _this3.$t("Addition") || "Addition" : _this3.$t("Subtraction") || "Subtraction", "</td>");
        html += "</tr>";
      });
      html += "</tbody></table>";
      var w = window.open("", "_blank");
      if (!w) {
        alert("Please allow popups to print");
        return;
      }
      var links = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(function (l) {
        return l.outerHTML;
      }).join("\n");
      var doc = w.document;
      doc.open();
      doc.write("<!doctype html>\n<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    <base href=\"".concat(window.location.origin, "/\" />\n    <title>").concat(title, "</title>\n    ").concat(links, "\n    <style>\n      @media print { body, body * { visibility: visible !important; } @page { size: A4; margin: 0.3cm; } }\n      body { margin: 0.3cm; font-family: Arial, sans-serif; }\n      .print-header { font-weight: 600; margin-bottom: 6px; font-size: 14px; }\n      .meta { margin-bottom: 12px; font-size: 11px; line-height: 1.5; }\n    </style>\n  </head>\n  <body>\n    ").concat(header, "\n    ").concat(html, "\n  </body>\n</html>"));
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
    "$route.params.id": function $routeParamsId() {
      this.isLoading = true;
      this.fetch();
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/adjustment/Detail_Adjustment.vue?vue&type=template&id=4f7c72d6"
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/adjustment/Detail_Adjustment.vue?vue&type=template&id=4f7c72d6 ***!
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
      page: _vm.$t("AdjustmentDetail") || "Adjustment Detail",
      folder: _vm.$t("ListAdjustments") || "Adjustments"
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
          name: "index_adjustment"
        });
      }
    }
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "arrow-left"
    }
  }), _vm._v(_vm._s(_vm.$t("back") || "Back") + "\n      ")], 1), _vm._v(" "), _c("div", {
    staticClass: "ml-auto"
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("adjustment_edit") ? _c("b-button", {
    staticClass: "btn-pill mr-2",
    attrs: {
      size: "sm",
      variant: "outline-success",
      to: {
        name: "edit_adjustment",
        params: {
          id: _vm.$route.params.id
        }
      }
    }
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "pencil"
    }
  }), _vm._v(_vm._s(_vm.$t("Edit") || "Edit") + "\n        ")], 1) : _vm._e(), _vm._v(" "), _c("b-button", {
    staticClass: "btn-pill mr-2",
    attrs: {
      size: "sm",
      variant: "outline-primary"
    },
    on: {
      click: function click($event) {
        return _vm.downloadPdf();
      }
    }
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "file-text"
    }
  }), _vm._v("PDF\n        ")], 1), _vm._v(" "), _c("b-button", {
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
  }), _vm._v(_vm._s(_vm.$t("print") || "Print") + "\n        ")], 1)], 1)], 1), _vm._v(" "), _c("b-card", {
    staticClass: "mb-3"
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("div", {
    staticClass: "text-muted small text-uppercase"
  }, [_vm._v(_vm._s(_vm.$t("Reference") || "Reference"))]), _vm._v(" "), _c("div", {
    staticClass: "h4 mb-0 text-primary"
  }, [_vm._v(_vm._s(_vm.adjustment.Ref || "—"))])]), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("div", {
    staticClass: "text-muted small text-uppercase"
  }, [_vm._v(_vm._s(_vm.$t("date") || "Date"))]), _vm._v(" "), _c("div", {
    staticClass: "h6 mb-0"
  }, [_vm._v(_vm._s(_vm.adjustment.date || "—"))])]), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("div", {
    staticClass: "text-muted small text-uppercase"
  }, [_vm._v(_vm._s(_vm.$t("warehouse") || "Warehouse"))]), _vm._v(" "), _c("div", {
    staticClass: "h6 mb-0"
  }, [_c("lucide-icon", {
    staticStyle: {
      color: "#0ea5e9",
      "margin-right": "4px"
    },
    attrs: {
      name: "store"
    }
  }), _vm._v(_vm._s(_vm.adjustment.warehouse || "—") + "\n          ")], 1)])], 1), _vm._v(" "), _vm.adjustment.created_by || _vm.adjustment.note ? _c("hr") : _vm._e(), _vm._v(" "), _vm.adjustment.created_by || _vm.adjustment.note ? _c("b-row", [_vm.adjustment.created_by ? _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("div", {
    staticClass: "text-muted small text-uppercase"
  }, [_vm._v(_vm._s(_vm.$t("Created_by") || "Created by"))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.adjustment.created_by))])]) : _vm._e(), _vm._v(" "), _vm.adjustment.note ? _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("div", {
    staticClass: "text-muted small text-uppercase"
  }, [_vm._v(_vm._s(_vm.$t("Note") || "Note"))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.adjustment.note))])]) : _vm._e()], 1) : _vm._e()], 1), _vm._v(" "), _c("b-row", {
    staticClass: "mb-3"
  }, [_c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-card", {
    staticClass: "p-3 text-center",
    attrs: {
      "no-body": ""
    }
  }, [_c("div", {
    staticClass: "small text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Items") || "Items"))]), _vm._v(" "), _c("div", {
    staticClass: "h3 mb-0"
  }, [_vm._v(_vm._s(_vm.details.length))])])], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-card", {
    staticClass: "p-3 text-center",
    staticStyle: {
      background: "linear-gradient(180deg,#f0fdf4 0%,#ffffff 100%)",
      "border-color": "#bbf7d0"
    },
    attrs: {
      "no-body": ""
    }
  }, [_c("div", {
    staticClass: "small text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Addition") || "Additions"))]), _vm._v(" "), _c("div", {
    staticClass: "h3 mb-0 text-success"
  }, [_vm._v("+ " + _vm._s(_vm.totalAdd))])])], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-card", {
    staticClass: "p-3 text-center",
    staticStyle: {
      background: "linear-gradient(180deg,#fef2f2 0%,#ffffff 100%)",
      "border-color": "#fecaca"
    },
    attrs: {
      "no-body": ""
    }
  }, [_c("div", {
    staticClass: "small text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Subtraction") || "Subtractions"))]), _vm._v(" "), _c("div", {
    staticClass: "h3 mb-0 text-danger"
  }, [_vm._v("- " + _vm._s(_vm.totalSub))])])], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-card", {
    staticClass: "p-3 text-center",
    attrs: {
      "no-body": ""
    }
  }, [_c("div", {
    staticClass: "small text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Net_Change") || "Net Change"))]), _vm._v(" "), _c("div", {
    staticClass: "h3 mb-0",
    "class": _vm.netChange >= 0 ? "text-success" : "text-danger"
  }, [_vm._v("\n            " + _vm._s(_vm.netChange >= 0 ? "+" : "") + _vm._s(_vm.netChange) + "\n          ")])])], 1)], 1), _vm._v(" "), _c("b-card", [_c("h5", {
    staticClass: "mb-3"
  }, [_vm._v(_vm._s(_vm.$t("Products") || "Products"))]), _vm._v(" "), !_vm.details.length ? _c("div", {
    staticClass: "text-center py-4 text-muted"
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "info"
    }
  }), _vm._v(_vm._s(_vm.$t("NodataAvailable") || "No data available") + "\n      ")], 1) : _c("div", {
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
  }, [_vm._v(_vm._s(_vm.$t("CodeProduct") || "Code"))]), _vm._v(" "), _c("th", {
    staticStyle: {
      color: "#3730a3"
    }
  }, [_vm._v(_vm._s(_vm.$t("ProductName") || "Product"))]), _vm._v(" "), _c("th", {
    staticStyle: {
      color: "#3730a3",
      "text-align": "right"
    }
  }, [_vm._v(_vm._s(_vm.$t("Quantity") || "Quantity"))]), _vm._v(" "), _c("th", {
    staticStyle: {
      color: "#3730a3",
      "text-align": "center"
    }
  }, [_vm._v(_vm._s(_vm.$t("type") || "Type"))])])]), _vm._v(" "), _c("tbody", [_vm._l(_vm.details, function (detail, idx) {
    return [_c("tr", {
      key: "r-" + idx
    }, [_c("td", [_vm._v(_vm._s(detail.code))]), _vm._v(" "), _c("td", [_vm._v("\n                  " + _vm._s(detail.name) + "\n                  "), detail.is_batch_tracked ? _c("span", {
      staticClass: "badge ml-1",
      staticStyle: {
        background: "#eef2ff",
        color: "#4f46e5",
        "font-weight": "600",
        "letter-spacing": "0.3px"
      }
    }, [_c("lucide-icon", {
      staticStyle: {
        "margin-right": "3px"
      },
      attrs: {
        name: "package"
      }
    }), _vm._v(_vm._s(_vm.$t("Batches") || "Batches") + "\n                  ")], 1) : _vm._e()]), _vm._v(" "), _c("td", {
      staticStyle: {
        "text-align": "right",
        "font-weight": "600"
      }
    }, [_vm._v("\n                  " + _vm._s(_vm.formatNumber(detail.quantity, _vm.priceDecimals)) + " " + _vm._s(detail.unit) + "\n                ")]), _vm._v(" "), _c("td", {
      staticStyle: {
        "text-align": "center"
      }
    }, [detail.type === "add" ? _c("span", {
      staticClass: "badge badge-success"
    }, [_c("lucide-icon", {
      staticStyle: {
        "margin-right": "3px"
      },
      attrs: {
        name: "plus"
      }
    }), _vm._v(_vm._s(_vm.$t("Addition") || "Addition") + "\n                  ")], 1) : _c("span", {
      staticClass: "badge badge-danger"
    }, [_c("lucide-icon", {
      staticStyle: {
        "margin-right": "3px"
      },
      attrs: {
        name: "trash-2"
      }
    }), _vm._v(_vm._s(_vm.$t("Subtraction") || "Subtraction") + "\n                  ")], 1)])]), _vm._v(" "), detail.is_batch_tracked && (detail.batches || []).length ? _c("tr", {
      key: "b-" + idx,
      staticStyle: {
        background: "#ffffff"
      }
    }, [_c("td", {
      staticStyle: {
        padding: "0",
        "border-top": "0"
      },
      attrs: {
        colspan: "4"
      }
    }, [_c("div", {
      staticStyle: {
        margin: "6px 4px 12px 4px",
        border: "1px solid #e0e7ff",
        "border-radius": "8px",
        overflow: "hidden",
        background: "#f8faff"
      }
    }, [_c("div", {
      staticStyle: {
        display: "flex",
        "align-items": "center",
        "justify-content": "space-between",
        padding: "6px 12px",
        background: "#4f46e5",
        color: "#fff"
      }
    }, [_c("div", {
      staticStyle: {
        display: "flex",
        "align-items": "center",
        gap: "8px"
      }
    }, [_c("lucide-icon", {
      attrs: {
        name: "package"
      }
    }), _vm._v(" "), _c("span", {
      staticStyle: {
        "font-size": "12px",
        "font-weight": "700",
        "text-transform": "uppercase",
        "letter-spacing": "0.3px"
      }
    }, [_vm._v(_vm._s(_vm.$t("Batches") || "Batches"))])], 1), _vm._v(" "), _c("span", {
      staticStyle: {
        "font-size": "11px",
        "font-weight": "600",
        background: "rgba(255,255,255,0.22)",
        padding: "1px 8px",
        "border-radius": "10px"
      }
    }, [_vm._v("\n                        " + _vm._s(detail.batches.length) + " " + _vm._s(_vm.$t("items") || "items") + "\n                      ")])]), _vm._v(" "), _c("table", {
      staticStyle: {
        width: "100%",
        "border-collapse": "collapse",
        "font-size": "12px"
      }
    }, [_c("thead", [_c("tr", {
      staticStyle: {
        background: "#eef2ff"
      }
    }, [_c("th", {
      staticStyle: {
        padding: "6px 10px",
        "text-align": "left",
        color: "#3730a3",
        "font-weight": "700",
        "text-transform": "uppercase",
        "font-size": "10px",
        "letter-spacing": "0.3px"
      }
    }, [_vm._v(_vm._s(_vm.$t("Batch_No") || "Batch No"))]), _vm._v(" "), _c("th", {
      staticStyle: {
        padding: "6px 10px",
        "text-align": "left",
        color: "#3730a3",
        "font-weight": "700",
        "text-transform": "uppercase",
        "font-size": "10px",
        "letter-spacing": "0.3px"
      }
    }, [_vm._v(_vm._s(_vm.$t("Mfg_Date") || "Mfg Date"))]), _vm._v(" "), _c("th", {
      staticStyle: {
        padding: "6px 10px",
        "text-align": "left",
        color: "#3730a3",
        "font-weight": "700",
        "text-transform": "uppercase",
        "font-size": "10px",
        "letter-spacing": "0.3px"
      }
    }, [_vm._v(_vm._s(_vm.$t("Expiry_Date") || "Expiry Date"))]), _vm._v(" "), _c("th", {
      staticStyle: {
        padding: "6px 10px",
        "text-align": "center",
        color: "#3730a3",
        "font-weight": "700",
        "text-transform": "uppercase",
        "font-size": "10px",
        "letter-spacing": "0.3px"
      }
    }, [_vm._v(_vm._s(_vm.$t("Direction") || "Direction"))]), _vm._v(" "), _c("th", {
      staticStyle: {
        padding: "6px 10px",
        "text-align": "right",
        color: "#3730a3",
        "font-weight": "700",
        "text-transform": "uppercase",
        "font-size": "10px",
        "letter-spacing": "0.3px"
      }
    }, [_vm._v(_vm._s(_vm.$t("Quantity") || "Quantity"))])])]), _vm._v(" "), _c("tbody", _vm._l(detail.batches, function (b, bIdx) {
      return _c("tr", {
        key: "ab-" + idx + "-" + bIdx,
        style: {
          background: bIdx % 2 === 1 ? "#f8faff" : "#ffffff",
          borderTop: "1px solid #e0e7ff"
        }
      }, [_c("td", {
        staticStyle: {
          padding: "6px 10px",
          "font-weight": "600",
          color: "#1f2937"
        }
      }, [b.batch_no ? _c("span", [_vm._v(_vm._s(b.batch_no))]) : _c("span", {
        staticStyle: {
          color: "#9ca3af",
          "font-style": "italic"
        }
      }, [_vm._v("—")])]), _vm._v(" "), _c("td", {
        staticStyle: {
          padding: "6px 10px",
          color: "#374151"
        }
      }, [b.mfg_date ? _c("span", [_vm._v(_vm._s(b.mfg_date))]) : _c("span", {
        staticStyle: {
          color: "#9ca3af"
        }
      }, [_vm._v("—")])]), _vm._v(" "), _c("td", {
        staticStyle: {
          padding: "6px 10px"
        }
      }, [b.expiry_date ? _c("span", {
        style: _vm.expiry_pill_style(b.expiry_date)
      }, [_vm._v(_vm._s(b.expiry_date))]) : _c("span", {
        staticStyle: {
          color: "#9ca3af"
        }
      }, [_vm._v("—")])]), _vm._v(" "), _c("td", {
        staticStyle: {
          padding: "6px 10px",
          "text-align": "center"
        }
      }, [b.direction === "in" ? _c("span", {
        staticClass: "badge badge-success",
        staticStyle: {
          "font-size": "10px"
        }
      }, [_vm._v("\n                              ↑ " + _vm._s(_vm.$t("In") || "In") + "\n                            ")]) : _c("span", {
        staticClass: "badge badge-danger",
        staticStyle: {
          "font-size": "10px"
        }
      }, [_vm._v("\n                              ↓ " + _vm._s(_vm.$t("Out") || "Out") + "\n                            ")])]), _vm._v(" "), _c("td", {
        staticStyle: {
          padding: "6px 10px",
          "text-align": "right",
          color: "#1f2937",
          "font-weight": "600"
        }
      }, [_vm._v("\n                            " + _vm._s(_vm.formatNumber(b.qty, _vm.priceDecimals)) + " " + _vm._s(detail.unit) + "\n                          ")])]);
    }), 0)])])])]) : _vm._e()];
  })], 2)])])])], 1) : _vm._e()], 1);
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

/***/ "./resources/src/views/app/pages/adjustment/Detail_Adjustment.vue"
/*!************************************************************************!*\
  !*** ./resources/src/views/app/pages/adjustment/Detail_Adjustment.vue ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Detail_Adjustment_vue_vue_type_template_id_4f7c72d6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Detail_Adjustment.vue?vue&type=template&id=4f7c72d6 */ "./resources/src/views/app/pages/adjustment/Detail_Adjustment.vue?vue&type=template&id=4f7c72d6");
/* harmony import */ var _Detail_Adjustment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Detail_Adjustment.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/adjustment/Detail_Adjustment.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Detail_Adjustment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Detail_Adjustment_vue_vue_type_template_id_4f7c72d6__WEBPACK_IMPORTED_MODULE_0__.render,
  _Detail_Adjustment_vue_vue_type_template_id_4f7c72d6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/adjustment/Detail_Adjustment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/adjustment/Detail_Adjustment.vue?vue&type=script&lang=js"
/*!************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/adjustment/Detail_Adjustment.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_Adjustment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Detail_Adjustment.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/adjustment/Detail_Adjustment.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_Adjustment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/adjustment/Detail_Adjustment.vue?vue&type=template&id=4f7c72d6"
/*!******************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/adjustment/Detail_Adjustment.vue?vue&type=template&id=4f7c72d6 ***!
  \******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_Adjustment_vue_vue_type_template_id_4f7c72d6__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_Adjustment_vue_vue_type_template_id_4f7c72d6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_Adjustment_vue_vue_type_template_id_4f7c72d6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Detail_Adjustment.vue?vue&type=template&id=4f7c72d6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/adjustment/Detail_Adjustment.vue?vue&type=template&id=4f7c72d6");


/***/ }

}]);