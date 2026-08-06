"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["import_purchases"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchases/import_purchases.vue?vue&type=script&lang=js"
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchases/import_purchases.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_priceFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/priceFormat */ "./resources/src/utils/priceFormat.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Import Purchase"
  },
  data: function data() {
    return {
      isLoading: true,
      SubmitProcessing: false,
      warehouses: [],
      suppliers: [],
      import_products: null,
      previewRows: [],
      previewSubtotal: 0,
      previewLoading: false,
      previewError: "",
      dropzoneHover: false,
      purchase: {
        id: "",
        date: new Date().toISOString().slice(0, 10),
        statut: "received",
        notes: "",
        supplier_id: "",
        warehouse_id: "",
        tax_rate: 0,
        TaxNet: 0,
        shipping: 0,
        discount: 0
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["currentUserPermissions", "currentUser"])), {}, {
    // Monetary precision (2 or 3) driven by the "Enable 3 Decimal Pricing" setting.
    priceDecimals: function priceDecimals() {
      return (0,_utils_priceFormat__WEBPACK_IMPORTED_MODULE_2__.getPriceDecimals)({
        store: this.$store
      });
    },
    // Hero
    heroStyle: function heroStyle() {
      return {
        background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #ec4899 100%)",
        borderRadius: "14px",
        padding: "22px 26px",
        color: "#fff",
        marginBottom: "20px",
        boxShadow: "0 10px 25px rgba(79, 70, 229, 0.25)"
      };
    },
    heroInnerStyle: function heroInnerStyle() {
      return {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px"
      };
    },
    heroLeftStyle: function heroLeftStyle() {
      return {
        display: "flex",
        alignItems: "center",
        gap: "16px",
        flex: "1 1 auto",
        minWidth: "260px"
      };
    },
    heroRightStyle: function heroRightStyle() {
      return {
        display: "flex",
        alignItems: "center",
        gap: "10px"
      };
    },
    heroIconCircleStyle: function heroIconCircleStyle() {
      return {
        width: "56px",
        height: "56px",
        borderRadius: "14px",
        background: "rgba(255,255,255,0.18)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      };
    },
    heroIconStyle: function heroIconStyle() {
      return {
        fontSize: "26px",
        color: "#fff"
      };
    },
    heroTitleStyle: function heroTitleStyle() {
      return {
        fontSize: "22px",
        fontWeight: "700",
        lineHeight: "1.2"
      };
    },
    heroSubtitleStyle: function heroSubtitleStyle() {
      return {
        fontSize: "13px",
        opacity: "0.9",
        marginTop: "4px",
        maxWidth: "560px"
      };
    },
    downloadBtnStyle: function downloadBtnStyle() {
      return {
        display: "inline-flex",
        alignItems: "center",
        padding: "9px 16px",
        borderRadius: "10px",
        background: "rgba(255,255,255,0.2)",
        color: "#fff",
        fontWeight: "600",
        fontSize: "13px",
        textDecoration: "none",
        border: "1px solid rgba(255,255,255,0.3)",
        transition: "background 0.2s"
      };
    },
    // Card
    cardStyle: function cardStyle() {
      return {
        background: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        overflow: "hidden",
        marginBottom: "16px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
      };
    },
    cardHeaderStyle: function cardHeaderStyle() {
      return {
        display: "flex",
        alignItems: "center",
        padding: "12px 18px",
        background: "linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)",
        borderBottom: "1px solid #e5e7eb",
        fontSize: "13px",
        fontWeight: "700",
        color: "#374151",
        textTransform: "uppercase",
        letterSpacing: "0.4px"
      };
    },
    // Dropzone
    dropzoneStyle: function dropzoneStyle() {
      var hover = this.dropzoneHover;
      return {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "28px 20px",
        border: "2px dashed ".concat(hover ? "#4f46e5" : "#cbd5e1"),
        borderRadius: "12px",
        background: hover ? "linear-gradient(135deg, #eef2ff 0%, #faf5ff 100%)" : "linear-gradient(135deg, #f8faff 0%, #ffffff 100%)",
        cursor: "pointer",
        transition: "all 0.2s ease",
        minHeight: "150px",
        margin: "0"
      };
    },
    dropzoneIconStyle: function dropzoneIconStyle() {
      return {
        width: "58px",
        height: "58px",
        borderRadius: "14px",
        background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
        boxShadow: "0 6px 14px rgba(79, 70, 229, 0.35)"
      };
    },
    clearFileBtnStyle: function clearFileBtnStyle() {
      return {
        marginTop: "10px",
        padding: "4px 12px",
        fontSize: "12px",
        background: "#fef2f2",
        color: "#b91c1c",
        border: "1px solid #fecaca",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "600"
      };
    },
    // Preview header
    previewHeaderStyle: function previewHeaderStyle() {
      return {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 16px",
        background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
        color: "#fff",
        fontSize: "13px",
        fontWeight: "700",
        borderRadius: "10px 10px 0 0"
      };
    },
    previewBadgeStyle: function previewBadgeStyle() {
      return {
        fontSize: "11px",
        fontWeight: "600",
        background: "rgba(255,255,255,0.22)",
        padding: "2px 10px",
        borderRadius: "10px",
        marginLeft: "4px"
      };
    },
    previewTableWrapStyle: function previewTableWrapStyle() {
      return {
        border: "1px solid #e0e7ff",
        borderTop: "none",
        borderRadius: "0 0 10px 10px",
        overflow: "hidden",
        background: "#ffffff"
      };
    },
    previewTableStyle: function previewTableStyle() {
      return {
        width: "100%",
        borderCollapse: "collapse",
        fontSize: "13px"
      };
    },
    codeStyle: function codeStyle() {
      return {
        fontFamily: "monospace",
        fontSize: "12px",
        background: "#f3f4f6",
        color: "#3730a3",
        padding: "2px 8px",
        borderRadius: "5px",
        fontWeight: "600"
      };
    },
    rowNumBadgeStyle: function rowNumBadgeStyle() {
      return {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "24px",
        height: "24px",
        borderRadius: "6px",
        background: "#eef2ff",
        color: "#4f46e5",
        fontSize: "11px",
        fontWeight: "700"
      };
    },
    tfootRowStyle: function tfootRowStyle() {
      return {
        background: "linear-gradient(135deg, #eef2ff 0%, #faf5ff 100%)",
        borderTop: "2px solid #c7d2fe"
      };
    },
    tfootLabelStyle: function tfootLabelStyle() {
      return {
        padding: "12px 14px",
        textAlign: "right",
        fontWeight: "700",
        fontSize: "13px",
        color: "#374151",
        textTransform: "uppercase",
        letterSpacing: "0.3px"
      };
    },
    tfootValueStyle: function tfootValueStyle() {
      return {
        padding: "12px 14px",
        textAlign: "right",
        fontWeight: "700",
        fontSize: "15px",
        color: "#4f46e5"
      };
    },
    // Empty hint
    emptyHintStyle: function emptyHintStyle() {
      return {
        marginTop: "16px",
        padding: "14px 18px",
        background: "linear-gradient(135deg, #f8faff 0%, #ffffff 100%)",
        border: "1px dashed #c7d2fe",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        gap: "12px"
      };
    },
    // Submit bar
    submitBarStyle: function submitBarStyle() {
      return {
        display: "flex",
        alignItems: "center",
        gap: "14px",
        padding: "14px 18px",
        background: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        marginTop: "4px"
      };
    },
    submitBtnStyle: function submitBtnStyle() {
      return {
        padding: "9px 22px",
        fontWeight: "600",
        background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
        border: "none",
        borderRadius: "10px",
        color: "#fff",
        boxShadow: "0 4px 10px rgba(79, 70, 229, 0.3)"
      };
    },
    // ---- Batch UI styles ----
    batchPillStyle: function batchPillStyle() {
      return {
        display: "inline-flex",
        alignItems: "center",
        marginTop: "4px",
        padding: "1px 7px",
        background: "#eef2ff",
        color: "#4f46e5",
        fontSize: "10px",
        fontWeight: "700",
        borderRadius: "10px",
        textTransform: "uppercase",
        letterSpacing: "0.3px"
      };
    },
    batchPanelStyle: function batchPanelStyle() {
      return {
        margin: "6px 10px 12px 10px",
        border: "1px solid #e0e7ff",
        borderRadius: "8px",
        overflow: "hidden",
        background: "linear-gradient(180deg, #f8faff 0%, #ffffff 100%)"
      };
    },
    batchPanelHeaderStyle: function batchPanelHeaderStyle() {
      return {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 12px",
        background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
        color: "#fff",
        fontSize: "12px",
        fontWeight: "700",
        textTransform: "uppercase",
        letterSpacing: "0.3px"
      };
    },
    batchCountBadgeStyle: function batchCountBadgeStyle() {
      return {
        fontSize: "10px",
        fontWeight: "600",
        background: "rgba(255,255,255,0.22)",
        padding: "1px 8px",
        borderRadius: "10px"
      };
    },
    addBatchBtnStyle: function addBatchBtnStyle() {
      return {
        padding: "4px 10px",
        fontSize: "11px",
        fontWeight: "600",
        background: "#ffffff",
        color: "#4f46e5",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center"
      };
    },
    batchEmptyStyle: function batchEmptyStyle() {
      return {
        padding: "12px 14px",
        textAlign: "center",
        fontSize: "12px",
        color: "#6b7280",
        background: "#ffffff"
      };
    },
    batchThStyle: function batchThStyle() {
      return {
        padding: "7px 10px",
        textAlign: "left",
        color: "#3730a3",
        fontWeight: "700",
        textTransform: "uppercase",
        fontSize: "10px",
        letterSpacing: "0.3px"
      };
    },
    batchThRightStyle: function batchThRightStyle() {
      return {
        padding: "7px 10px",
        textAlign: "right",
        color: "#3730a3",
        fontWeight: "700",
        textTransform: "uppercase",
        fontSize: "10px",
        letterSpacing: "0.3px"
      };
    },
    batchTdStyle: function batchTdStyle() {
      return {
        padding: "6px 8px",
        verticalAlign: "middle"
      };
    },
    batchInputStyle: function batchInputStyle() {
      return {
        fontSize: "12px",
        padding: "5px 8px",
        height: "30px",
        borderRadius: "6px"
      };
    },
    removeBatchBtnStyle: function removeBatchBtnStyle() {
      return {
        width: "26px",
        height: "26px",
        padding: "0",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fef2f2",
        color: "#b91c1c",
        border: "1px solid #fecaca",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "12px"
      };
    },
    batchWarnStyle: function batchWarnStyle() {
      return {
        padding: "8px 12px",
        background: "#fef3c7",
        color: "#92400e",
        fontSize: "12px",
        fontWeight: "600",
        borderTop: "1px solid #fde68a",
        display: "flex",
        alignItems: "center"
      };
    },
    globalBatchWarnStyle: function globalBatchWarnStyle() {
      return {
        marginTop: "12px",
        padding: "10px 14px",
        background: "#fef3c7",
        color: "#92400e",
        border: "1px solid #fde68a",
        borderRadius: "10px",
        fontSize: "13px",
        fontWeight: "600",
        display: "flex",
        alignItems: "center"
      };
    },
    // ---- Batch validation ----
    hasBatchValidationErrors: function hasBatchValidationErrors() {
      if (!Array.isArray(this.previewRows)) return false;
      var _iterator = _createForOfIteratorHelper(this.previewRows),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var row = _step.value;
          if (!row.is_batch_tracked) continue;
          var batches = Array.isArray(row.batches) ? row.batches : [];
          if (batches.length === 0) return true;
          if (this.batchQtyMismatch(row)) return true;
          var _iterator2 = _createForOfIteratorHelper(batches),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var b = _step2.value;
              if (!b.batch_no || String(b.batch_no).trim() === "") return true;
              var q = Number(b.qty);
              if (!(q > 0)) return true;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return false;
    },
    firstBatchErrorDetail: function firstBatchErrorDetail() {
      if (!Array.isArray(this.previewRows)) return "";
      var _iterator3 = _createForOfIteratorHelper(this.previewRows),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var row = _step3.value;
          if (!row.is_batch_tracked) continue;
          var batches = Array.isArray(row.batches) ? row.batches : [];
          if (batches.length === 0) {
            return (this.$t("Batch_Required_For_Item") || "Add at least one batch for") + " " + row.name;
          }
          var _iterator4 = _createForOfIteratorHelper(batches),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var b = _step4.value;
              if (!b.batch_no || String(b.batch_no).trim() === "") {
                return (this.$t("Batch_No_Required_For") || "Batch No is required for") + " " + row.name;
              }
              var q = Number(b.qty);
              if (!(q > 0)) {
                return (this.$t("Batch_Qty_Required_For") || "Batch quantity must be greater than 0 for") + " " + row.name;
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          if (this.batchQtyMismatch(row)) {
            return (this.$t("Total_batch_qty_mismatch") || "Total batch quantity does not match the line quantity") + " — " + row.name;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return "";
    }
  }),
  methods: {
    previewThStyle: function previewThStyle(align, width) {
      return {
        padding: "11px 14px",
        textAlign: align,
        fontSize: "11px",
        fontWeight: "700",
        textTransform: "uppercase",
        letterSpacing: "0.4px",
        color: "#374151",
        background: "#f9fafb",
        borderBottom: "1px solid #e5e7eb",
        width: width ? width + "px" : undefined
      };
    },
    previewTdStyle: function previewTdStyle(align, strong, accent) {
      var base = {
        padding: "10px 14px",
        textAlign: align,
        fontSize: "13px",
        color: accent ? "#4f46e5" : "#1f2937",
        verticalAlign: "middle"
      };
      if (strong || accent) base.fontWeight = "600";
      return base;
    },
    previewStatusStyle: function previewStatusStyle(kind) {
      if (kind === "loading") {
        return {
          marginTop: "16px",
          padding: "12px 16px",
          background: "#eef2ff",
          border: "1px solid #c7d2fe",
          borderRadius: "10px",
          color: "#3730a3",
          fontWeight: "600",
          fontSize: "13px",
          display: "flex",
          alignItems: "center"
        };
      }
      return {
        marginTop: "16px",
        padding: "12px 16px",
        background: "#fef2f2",
        border: "1px solid #fecaca",
        borderRadius: "10px",
        color: "#991b1b",
        fontWeight: "600",
        fontSize: "13px",
        display: "flex",
        alignItems: "center"
      };
    },
    //------------------------------ File handlers -------------------------\\
    onFileSelected: function onFileSelected(e) {
      var file = e.target.files[0];
      if (!file) return;
      this.handleFile(file);
    },
    onDragOver: function onDragOver() {
      this.dropzoneHover = true;
    },
    onDragLeave: function onDragLeave() {
      this.dropzoneHover = false;
    },
    onDrop: function onDrop(e) {
      this.dropzoneHover = false;
      var file = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
      if (!file) return;
      this.handleFile(file);
    },
    handleFile: function handleFile(file) {
      var name = file.name || "";
      var ext = name.split(".").pop().toLowerCase();
      if (ext !== "csv") {
        this.previewError = this.$t("field_must_be_in_csv_format") || "File must be in CSV format";
        this.import_products = null;
        this.previewRows = [];
        this.previewSubtotal = 0;
        return;
      }
      this.import_products = file;
      this.previewError = "";
      this.fetchPreview();
    },
    clearFile: function clearFile() {
      this.import_products = null;
      this.previewRows = [];
      this.previewSubtotal = 0;
      this.previewError = "";
      var input = document.getElementById("csv-file-input");
      if (input) input.value = "";
    },
    formatBytes: function formatBytes(bytes) {
      if (!bytes && bytes !== 0) return "";
      if (bytes < 1024) return bytes + " B";
      if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
      return (bytes / (1024 * 1024)).toFixed(2) + " MB";
    },
    //------------------------------ Batch handling -------------------------\\
    add_batch: function add_batch(row) {
      if (!Array.isArray(row.batches)) {
        this.$set(row, "batches", []);
      }
      row.batches.push({
        batch_no: "",
        expiry_date: null,
        mfg_date: null,
        qty: "",
        unit_cost: ""
      });
    },
    remove_batch: function remove_batch(row, idx) {
      if (Array.isArray(row.batches)) {
        row.batches.splice(idx, 1);
      }
    },
    batchTotalQty: function batchTotalQty(row) {
      if (!Array.isArray(row.batches)) return 0;
      return row.batches.reduce(function (sum, b) {
        var n = Number(b.qty);
        return sum + (Number.isFinite(n) ? n : 0);
      }, 0);
    },
    batchQtyMismatch: function batchQtyMismatch(row) {
      var rowQty = Number(row.qty) || 0;
      var total = this.batchTotalQty(row);
      return Math.abs(total - rowQty) > 0.0001;
    },
    onBatchNumberInput: function onBatchNumberInput(batchRow, field, raw) {
      var s = raw == null ? "" : String(raw);
      s = s.replace(",", ".");
      s = s.replace(/[^0-9.]/g, "");
      var firstDot = s.indexOf(".");
      if (firstDot !== -1) {
        s = s.slice(0, firstDot + 1) + s.slice(firstDot + 1).replace(/\./g, "");
      }
      this.$set(batchRow, field, s);
    },
    //------------------------------ Preview CSV -------------------------\\
    fetchPreview: function fetchPreview() {
      var _this = this;
      if (!this.import_products) return;
      this.previewLoading = true;
      this.previewRows = [];
      this.previewSubtotal = 0;
      this.previewError = "";
      var formData = new FormData();
      formData.append("products", this.import_products);
      axios.post("preview_import_purchases", formData).then(function (response) {
        _this.previewLoading = false;
        var d = response.data || {};
        if (d.status === false) {
          _this.previewError = d.msg || _this.$t("CSV_Parse_Failed") || "Failed to parse CSV";
          return;
        }
        var rows = Array.isArray(d.rows) ? d.rows : [];
        _this.previewRows = rows.map(function (r) {
          return Object.assign({}, r, {
            batches: []
          });
        });
        _this.previewSubtotal = Number(d.subtotal) || 0;
        if (!_this.previewRows.length) {
          _this.previewError = _this.$t("CSV_No_Valid_Rows") || "No valid rows were found in the CSV file";
        }
      })["catch"](function (error) {
        _this.previewLoading = false;
        var msg = error && error.response && error.response.data && error.response.data.msg || _this.$t("CSV_Parse_Failed") || "Failed to parse CSV";
        _this.previewError = msg;
      });
    },
    //--- Submit Validate Create Purchase
    Submit_Purchase: function Submit_Purchase() {
      var _this2 = this;
      this.$refs.create_purchase.validate().then(function (success) {
        if (!success) {
          _this2.makeToast("danger", _this2.$t("Please_fill_the_form_correctly"), _this2.$t("Failed"));
          return;
        }
        if (!_this2.import_products) {
          _this2.makeToast("danger", _this2.$t("field_must_be_in_csv_format"), _this2.$t("Failed"));
          return;
        }
        if (!_this2.previewRows.length) {
          _this2.makeToast("danger", _this2.$t("CSV_No_Valid_Rows") || "No valid rows were found in the CSV file", _this2.$t("Failed"));
          return;
        }
        _this2.Create_Purchase();
      });
    },
    //---Validate State Fields
    getValidationState: function getValidationState(_ref) {
      var dirty = _ref.dirty,
        validated = _ref.validated,
        _ref$valid = _ref.valid,
        valid = _ref$valid === void 0 ? null : _ref$valid;
      return dirty || validated ? valid : null;
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    //------------------------------Formetted Numbers -------------------------\\
    formatNumber: function formatNumber(number, dec) {
      var value = (typeof number === "string" ? number : number == null ? "0" : number.toString()).split(".");
      if (dec <= 0) return value[0];
      var formated = value[1] || "";
      if (formated.length > dec) return "".concat(value[0], ".").concat(formated.substr(0, dec));
      while (formated.length < dec) formated += "0";
      return "".concat(value[0], ".").concat(formated);
    },
    //---------- keyup OrderTax
    keyup_OrderTax: function keyup_OrderTax() {
      if (isNaN(this.purchase.tax_rate) || this.purchase.tax_rate == "") {
        this.purchase.tax_rate = 0;
      }
    },
    //---------- keyup Discount
    keyup_Discount: function keyup_Discount() {
      if (isNaN(this.purchase.discount) || this.purchase.discount == "") {
        this.purchase.discount = 0;
      }
    },
    //---------- keyup Shipping
    keyup_Shipping: function keyup_Shipping() {
      if (isNaN(this.purchase.shipping) || this.purchase.shipping == "") {
        this.purchase.shipping = 0;
      }
    },
    //--------------------------------- Create Purchase -------------------------\\
    Create_Purchase: function Create_Purchase() {
      var _this3 = this;
      this.SubmitProcessing = true;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      var data = new FormData();
      data.append("date", this.purchase.date);
      data.append("supplier_id", this.purchase.supplier_id);
      data.append("warehouse_id", this.purchase.warehouse_id);
      data.append("statut", this.purchase.statut);
      data.append("notes", this.purchase.notes);
      data.append("tax_rate", this.purchase.tax_rate);
      data.append("discount", this.purchase.discount);
      data.append("shipping", this.purchase.shipping);
      data.append("products", this.import_products);

      // Include batches keyed by productcode for batch-tracked products.
      var batchesByCode = {};
      var _iterator5 = _createForOfIteratorHelper(this.previewRows),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var row = _step5.value;
          if (!row.is_batch_tracked) continue;
          var cleaned = (row.batches || []).filter(function (b) {
            return b && b.batch_no && String(b.batch_no).trim() !== "" && Number(b.qty) > 0;
          }).map(function (b) {
            return {
              batch_no: String(b.batch_no).trim(),
              expiry_date: b.expiry_date || null,
              mfg_date: b.mfg_date || null,
              qty: Number(b.qty),
              unit_cost: b.unit_cost === "" || b.unit_cost == null ? null : Number(b.unit_cost)
            };
          });
          if (cleaned.length) {
            batchesByCode[row.code] = cleaned;
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      data.append("batches_by_code", JSON.stringify(batchesByCode));
      axios.post("store_import_purchases", data).then(function (response) {
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        _this3.makeToast("success", _this3.$t("Successfully_Imported"), _this3.$t("Success"));
        _this3.SubmitProcessing = false;
        _this3.$router.push({
          name: "index_purchases"
        });
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        _this3.makeToast("danger", "An error occurred while processing the CSV file.", _this3.$t("Failed"));
        _this3.SubmitProcessing = false;
      });
    },
    //---------------------------------------Get Elements Purchase ------------------------------\\
    GetElements: function GetElements() {
      var _this4 = this;
      axios.get("get_import_purchases").then(function (response) {
        _this4.suppliers = response.data.suppliers;
        _this4.warehouses = response.data.warehouses;
        _this4.isLoading = false;
      })["catch"](function () {
        setTimeout(function () {
          _this4.isLoading = false;
        }, 500);
      });
    }
  },
  created: function created() {
    this.GetElements();
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchases/import_purchases.vue?vue&type=template&id=4167371c&scoped=true"
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchases/import_purchases.vue?vue&type=template&id=4167371c&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("Import_Purchases"),
      folder: _vm.$t("ListPurchases")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("validation-observer", {
    ref: "create_purchase"
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Submit_Purchase.apply(null, arguments);
      }
    }
  }, [_c("div", {
    style: _vm.heroStyle
  }, [_c("div", {
    style: _vm.heroInnerStyle
  }, [_c("div", {
    style: _vm.heroLeftStyle
  }, [_c("div", {
    style: _vm.heroIconCircleStyle
  }, [_c("lucide-icon", {
    style: _vm.heroIconStyle,
    attrs: {
      name: "file-up"
    }
  })], 1), _vm._v(" "), _c("div", [_c("div", {
    style: _vm.heroTitleStyle
  }, [_vm._v(_vm._s(_vm.$t("Import_Purchases")))]), _vm._v(" "), _c("div", {
    style: _vm.heroSubtitleStyle
  }, [_vm._v("\n                " + _vm._s(_vm.$t("Import_Purchase_Sub") || "Upload a CSV file with product codes and quantities to create a purchase in bulk.") + "\n              ")])])]), _vm._v(" "), _c("div", {
    style: _vm.heroRightStyle
  }, [_c("a", {
    style: _vm.downloadBtnStyle,
    attrs: {
      href: "/import/exemples/import_purchases.csv",
      download: ""
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "download"
    }
  }), _vm._v(" "), _c("span", {
    staticStyle: {
      "margin-left": "6px"
    }
  }, [_vm._v(_vm._s(_vm.$t("Download_exemple")))])], 1)])])]), _vm._v(" "), _c("b-row", [_c("b-col", {
    attrs: {
      lg: "5",
      md: "12",
      sm: "12"
    }
  }, [_c("div", {
    style: _vm.cardStyle
  }, [_c("div", {
    style: _vm.cardHeaderStyle
  }, [_c("lucide-icon", {
    staticStyle: {
      "font-size": "16px",
      "margin-right": "8px"
    },
    attrs: {
      name: "receipt"
    }
  }), _vm._v("\n              " + _vm._s(_vm.$t("PurchaseDetails") || "Purchase Details") + "\n            ")], 1), _vm._v(" "), _c("div", {
    staticStyle: {
      padding: "20px"
    }
  }, [_c("b-row", [_c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "date",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("date") + " *"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            type: "date"
          },
          model: {
            value: _vm.purchase.date,
            callback: function callback($$v) {
              _vm.$set(_vm.purchase, "date", $$v);
            },
            expression: "purchase.date"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 1611319421)
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Supplier",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var valid = _ref.valid,
          errors = _ref.errors;
        return _c("b-form-group", {
          attrs: {
            label: _vm.$t("Supplier") + " *"
          }
        }, [_c("v-select", {
          "class": {
            "is-invalid": !!errors.length
          },
          attrs: {
            state: errors[0] ? false : valid ? true : null,
            reduce: function reduce(label) {
              return label.value;
            },
            placeholder: _vm.$t("Choose_Supplier"),
            options: _vm.suppliers.map(function (s) {
              return {
                label: s.name,
                value: s.id
              };
            })
          },
          model: {
            value: _vm.purchase.supplier_id,
            callback: function callback($$v) {
              _vm.$set(_vm.purchase, "supplier_id", $$v);
            },
            expression: "purchase.supplier_id"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(errors[0]))])], 1);
      }
    }], null, false, 4209417)
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "warehouse",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref2) {
        var valid = _ref2.valid,
          errors = _ref2.errors;
        return _c("b-form-group", {
          attrs: {
            label: _vm.$t("warehouse") + " *"
          }
        }, [_c("v-select", {
          "class": {
            "is-invalid": !!errors.length
          },
          attrs: {
            state: errors[0] ? false : valid ? true : null,
            reduce: function reduce(label) {
              return label.value;
            },
            placeholder: _vm.$t("Choose_Warehouse"),
            options: _vm.warehouses.map(function (w) {
              return {
                label: w.name,
                value: w.id
              };
            })
          },
          model: {
            value: _vm.purchase.warehouse_id,
            callback: function callback($$v) {
              _vm.$set(_vm.purchase, "warehouse_id", $$v);
            },
            expression: "purchase.warehouse_id"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(errors[0]))])], 1);
      }
    }], null, false, 1387530221)
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Status",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref3) {
        var valid = _ref3.valid,
          errors = _ref3.errors;
        return _c("b-form-group", {
          attrs: {
            label: _vm.$t("Status") + " *"
          }
        }, [_c("v-select", {
          "class": {
            "is-invalid": !!errors.length
          },
          attrs: {
            state: errors[0] ? false : valid ? true : null,
            reduce: function reduce(label) {
              return label.value;
            },
            placeholder: _vm.$t("Choose_Status"),
            options: [{
              label: "received",
              value: "received"
            }, {
              label: "pending",
              value: "pending"
            }, {
              label: "ordered",
              value: "ordered"
            }]
          },
          model: {
            value: _vm.purchase.statut,
            callback: function callback($$v) {
              _vm.$set(_vm.purchase, "statut", $$v);
            },
            expression: "purchase.statut"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(errors[0]))])], 1);
      }
    }], null, false, 1236899413)
  })], 1), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("edit_tax_discount_shipping_purchase") ? _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "6"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Order Tax",
      rules: {
        regex: /^\d*\.?\d*$/
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("OrderTax")
          }
        }, [_c("b-input-group", {
          attrs: {
            append: "%"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext)
          },
          on: {
            keyup: function keyup($event) {
              return _vm.keyup_OrderTax();
            }
          },
          model: {
            value: _vm.purchase.tax_rate,
            callback: function callback($$v) {
              _vm.$set(_vm.purchase, "tax_rate", _vm._n($$v));
            },
            expression: "purchase.tax_rate"
          }
        })], 1), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 2401063698)
  })], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("edit_tax_discount_shipping_purchase") ? _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "6"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Discount",
      rules: {
        regex: /^\d*\.?\d*$/
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Discount")
          }
        }, [_c("b-input-group", {
          attrs: {
            append: _vm.currentUser.currency
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext)
          },
          on: {
            keyup: function keyup($event) {
              return _vm.keyup_Discount();
            }
          },
          model: {
            value: _vm.purchase.discount,
            callback: function callback($$v) {
              _vm.$set(_vm.purchase, "discount", _vm._n($$v));
            },
            expression: "purchase.discount"
          }
        })], 1), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 1528323307)
  })], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("edit_tax_discount_shipping_purchase") ? _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Shipping",
      rules: {
        regex: /^\d*\.?\d*$/
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Shipping")
          }
        }, [_c("b-input-group", {
          attrs: {
            append: _vm.currentUser.currency
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext)
          },
          on: {
            keyup: function keyup($event) {
              return _vm.keyup_Shipping();
            }
          },
          model: {
            value: _vm.purchase.shipping,
            callback: function callback($$v) {
              _vm.$set(_vm.purchase, "shipping", _vm._n($$v));
            },
            expression: "purchase.shipping"
          }
        })], 1), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 3953352772)
  })], 1) : _vm._e(), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Note")
    }
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.purchase.notes,
      expression: "purchase.notes"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "3",
      placeholder: _vm.$t("Afewwords")
    },
    domProps: {
      value: _vm.purchase.notes
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.purchase, "notes", $event.target.value);
      }
    }
  })])], 1)], 1)], 1)])]), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "7",
      md: "12",
      sm: "12"
    }
  }, [_c("div", {
    style: _vm.cardStyle
  }, [_c("div", {
    style: _vm.cardHeaderStyle
  }, [_c("lucide-icon", {
    staticStyle: {
      "font-size": "16px",
      "margin-right": "8px"
    },
    attrs: {
      name: "clipboard-list"
    }
  }), _vm._v("\n              " + _vm._s(_vm.$t("CSV_Import") || "CSV Import") + "\n            ")], 1), _vm._v(" "), _c("div", {
    staticStyle: {
      padding: "20px"
    }
  }, [_c("label", {
    style: _vm.dropzoneStyle,
    attrs: {
      "for": "csv-file-input"
    },
    on: {
      dragover: function dragover($event) {
        $event.preventDefault();
        return _vm.onDragOver.apply(null, arguments);
      },
      dragleave: function dragleave($event) {
        $event.preventDefault();
        return _vm.onDragLeave.apply(null, arguments);
      },
      drop: function drop($event) {
        $event.preventDefault();
        return _vm.onDrop.apply(null, arguments);
      }
    }
  }, [_c("input", {
    staticStyle: {
      display: "none"
    },
    attrs: {
      id: "csv-file-input",
      type: "file",
      accept: ".csv,text/csv"
    },
    on: {
      change: _vm.onFileSelected
    }
  }), _vm._v(" "), _c("div", {
    staticStyle: {
      display: "flex",
      "flex-direction": "column",
      "align-items": "center",
      gap: "10px"
    }
  }, [_c("div", {
    style: _vm.dropzoneIconStyle
  }, [!_vm.import_products ? _c("lucide-icon", {
    attrs: {
      name: "cloud-sun"
    }
  }) : _c("lucide-icon", {
    attrs: {
      name: "file-text"
    }
  })], 1), _vm._v(" "), !_vm.import_products ? _c("div", [_c("div", {
    staticStyle: {
      "font-size": "15px",
      "font-weight": "600",
      color: "#1f2937"
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Click_Or_Drop_CSV") || "Click to browse or drop your CSV file here") + "\n                    ")]), _vm._v(" "), _c("div", {
    staticStyle: {
      "font-size": "12px",
      color: "#6b7280",
      "margin-top": "4px"
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Accepted_Format_CSV") || "Only .csv files are supported · semicolon (;) separator") + "\n                    ")])]) : _c("div", {
    staticStyle: {
      "text-align": "center"
    }
  }, [_c("div", {
    staticStyle: {
      "font-size": "14px",
      "font-weight": "600",
      color: "#1f2937"
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.import_products.name) + "\n                    ")]), _vm._v(" "), _c("div", {
    staticStyle: {
      "font-size": "12px",
      color: "#6b7280",
      "margin-top": "2px"
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.formatBytes(_vm.import_products.size)) + "\n                    ")]), _vm._v(" "), _c("button", {
    style: _vm.clearFileBtnStyle,
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.clearFile.apply(null, arguments);
      }
    }
  }, [_c("lucide-icon", {
    staticStyle: {
      "margin-right": "4px"
    },
    attrs: {
      name: "x"
    }
  }), _vm._v("\n                      " + _vm._s(_vm.$t("Remove") || "Remove") + "\n                    ")], 1)])])]), _vm._v(" "), _vm.previewLoading ? _c("div", {
    style: _vm.previewStatusStyle("loading")
  }, [_c("div", {
    staticClass: "spinner sm spinner-primary",
    staticStyle: {
      display: "inline-block",
      "margin-right": "10px"
    }
  }), _vm._v("\n                " + _vm._s(_vm.$t("Parsing_CSV") || "Parsing and validating CSV...") + "\n              ")]) : _vm._e(), _vm._v(" "), _vm.previewError ? _c("div", {
    style: _vm.previewStatusStyle("error")
  }, [_c("lucide-icon", {
    staticStyle: {
      "margin-right": "8px",
      "font-weight": "bold"
    },
    attrs: {
      name: "x"
    }
  }), _vm._v("\n                " + _vm._s(_vm.previewError) + "\n              ")], 1) : _vm._e(), _vm._v(" "), _vm.previewRows.length ? _c("div", {
    staticStyle: {
      "margin-top": "20px"
    }
  }, [_c("div", {
    style: _vm.previewHeaderStyle
  }, [_c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center",
      gap: "8px"
    }
  }, [_c("lucide-icon", {
    staticStyle: {
      "font-size": "18px"
    },
    attrs: {
      name: "check"
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Preview") || "Preview"))]), _vm._v(" "), _c("span", {
    style: _vm.previewBadgeStyle
  }, [_vm._v("\n                      " + _vm._s(_vm.previewRows.length) + " " + _vm._s(_vm.$t("items") || "items") + "\n                    ")])], 1), _vm._v(" "), _c("div", {
    staticStyle: {
      "font-size": "12px",
      opacity: "0.92"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Review_Before_Submit") || "Review the items below before submitting") + "\n                  ")])]), _vm._v(" "), _c("div", {
    style: _vm.previewTableWrapStyle
  }, [_c("table", {
    style: _vm.previewTableStyle
  }, [_c("thead", [_c("tr", [_c("th", {
    style: _vm.previewThStyle("left", 40)
  }, [_vm._v("#")]), _vm._v(" "), _c("th", {
    style: _vm.previewThStyle("left")
  }, [_vm._v(_vm._s(_vm.$t("Code") || "Code"))]), _vm._v(" "), _c("th", {
    style: _vm.previewThStyle("left")
  }, [_vm._v(_vm._s(_vm.$t("product_name") || _vm.$t("Product_Name") || "Product"))]), _vm._v(" "), _c("th", {
    style: _vm.previewThStyle("right")
  }, [_vm._v(_vm._s(_vm.$t("Quantity")))]), _vm._v(" "), _c("th", {
    style: _vm.previewThStyle("right")
  }, [_vm._v(_vm._s(_vm.$t("Cost")))]), _vm._v(" "), _c("th", {
    style: _vm.previewThStyle("right")
  }, [_vm._v(_vm._s(_vm.$t("Subtotal") || "Subtotal"))])])]), _vm._v(" "), _c("tbody", [_vm._l(_vm.previewRows, function (row, idx) {
    return [_c("tr", {
      key: "prv-" + idx,
      style: {
        background: idx % 2 === 1 ? "#f9fafb" : "#ffffff",
        borderTop: "1px solid #e5e7eb"
      }
    }, [_c("td", {
      style: _vm.previewTdStyle("left")
    }, [_c("span", {
      style: _vm.rowNumBadgeStyle
    }, [_vm._v(_vm._s(idx + 1))])]), _vm._v(" "), _c("td", {
      style: _vm.previewTdStyle("left")
    }, [_c("code", {
      style: _vm.codeStyle
    }, [_vm._v(_vm._s(row.code))]), _vm._v(" "), row.is_batch_tracked ? _c("div", {
      style: _vm.batchPillStyle
    }, [_c("lucide-icon", {
      staticStyle: {
        "margin-right": "3px"
      },
      attrs: {
        name: "package"
      }
    }), _vm._v("\n                              " + _vm._s(_vm.$t("Batches") || "Batches") + "\n                            ")], 1) : _vm._e()]), _vm._v(" "), _c("td", {
      style: _vm.previewTdStyle("left", true)
    }, [_vm._v("\n                            " + _vm._s(row.name) + "\n                          ")]), _vm._v(" "), _c("td", {
      style: _vm.previewTdStyle("right")
    }, [_vm._v("\n                            " + _vm._s(_vm.formatNumber(row.qty, 2)) + " "), _c("span", {
      staticStyle: {
        color: "#9ca3af",
        "font-size": "11px"
      }
    }, [_vm._v(_vm._s(row.unit))])]), _vm._v(" "), _c("td", {
      style: _vm.previewTdStyle("right")
    }, [_vm._v("\n                            " + _vm._s(_vm.formatNumber(row.cost, _vm.priceDecimals)) + "\n                          ")]), _vm._v(" "), _c("td", {
      style: _vm.previewTdStyle("right", false, true)
    }, [_vm._v("\n                            " + _vm._s(_vm.formatNumber(row.total, _vm.priceDecimals)) + "\n                          ")])]), _vm._v(" "), row.is_batch_tracked ? _c("tr", {
      key: "batch-" + idx
    }, [_c("td", {
      staticStyle: {
        padding: "0",
        background: "#ffffff"
      },
      attrs: {
        colspan: "6"
      }
    }, [_c("div", {
      style: _vm.batchPanelStyle
    }, [_c("div", {
      style: _vm.batchPanelHeaderStyle
    }, [_c("div", {
      staticStyle: {
        display: "flex",
        "align-items": "center",
        gap: "8px"
      }
    }, [_c("lucide-icon", {
      staticStyle: {
        "font-size": "14px"
      },
      attrs: {
        name: "package"
      }
    }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Batches") || "Batches"))]), _vm._v(" "), _c("span", {
      style: _vm.batchCountBadgeStyle
    }, [_vm._v("\n                                    " + _vm._s((row.batches || []).length) + " " + _vm._s(_vm.$t("items") || "items") + "\n                                  ")])], 1), _vm._v(" "), _c("button", {
      style: _vm.addBatchBtnStyle,
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.add_batch(row);
        }
      }
    }, [_c("lucide-icon", {
      staticStyle: {
        "margin-right": "4px"
      },
      attrs: {
        name: "plus"
      }
    }), _vm._v("\n                                  " + _vm._s(_vm.$t("Add") || "Add") + "\n                                ")], 1)]), _vm._v(" "), !row.batches || row.batches.length === 0 ? _c("div", {
      style: _vm.batchEmptyStyle
    }, [_c("lucide-icon", {
      staticStyle: {
        "margin-right": "6px"
      },
      attrs: {
        name: "info"
      }
    }), _vm._v("\n                                " + _vm._s(_vm.$t("Click_Add_To_Start") || 'Click "Add" to create a batch') + "\n                              ")], 1) : _c("table", {
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
      style: _vm.batchThStyle
    }, [_vm._v(_vm._s(_vm.$t("Batch_No")) + " *")]), _vm._v(" "), _c("th", {
      style: _vm.batchThStyle
    }, [_vm._v(_vm._s(_vm.$t("Mfg_Date")))]), _vm._v(" "), _c("th", {
      style: _vm.batchThStyle
    }, [_vm._v(_vm._s(_vm.$t("Expiry_Date")))]), _vm._v(" "), _c("th", {
      style: _vm.batchThRightStyle
    }, [_vm._v(_vm._s(_vm.$t("Quantity")) + " *")]), _vm._v(" "), _c("th", {
      style: _vm.batchThRightStyle
    }, [_vm._v(_vm._s(_vm.$t("Cost")))]), _vm._v(" "), _c("th", {
      staticStyle: {
        width: "40px"
      },
      style: _vm.batchThStyle
    })])]), _vm._v(" "), _c("tbody", _vm._l(row.batches, function (b, bIdx) {
      return _c("tr", {
        key: "b-" + idx + "-" + bIdx,
        style: {
          background: bIdx % 2 === 1 ? "#f8faff" : "#ffffff",
          borderTop: "1px solid #e0e7ff"
        }
      }, [_c("td", {
        style: _vm.batchTdStyle
      }, [_c("b-form-input", {
        style: _vm.batchInputStyle,
        attrs: {
          size: "sm",
          type: "text",
          placeholder: _vm.$t("Batch_No")
        },
        model: {
          value: b.batch_no,
          callback: function callback($$v) {
            _vm.$set(b, "batch_no", $$v);
          },
          expression: "b.batch_no"
        }
      })], 1), _vm._v(" "), _c("td", {
        style: _vm.batchTdStyle
      }, [_c("b-form-input", {
        style: _vm.batchInputStyle,
        attrs: {
          size: "sm",
          type: "date"
        },
        model: {
          value: b.mfg_date,
          callback: function callback($$v) {
            _vm.$set(b, "mfg_date", $$v);
          },
          expression: "b.mfg_date"
        }
      })], 1), _vm._v(" "), _c("td", {
        style: _vm.batchTdStyle
      }, [_c("b-form-input", {
        style: _vm.batchInputStyle,
        attrs: {
          size: "sm",
          type: "date"
        },
        model: {
          value: b.expiry_date,
          callback: function callback($$v) {
            _vm.$set(b, "expiry_date", $$v);
          },
          expression: "b.expiry_date"
        }
      })], 1), _vm._v(" "), _c("td", {
        style: _vm.batchTdStyle
      }, [_c("b-form-input", {
        style: [_vm.batchInputStyle, {
          textAlign: "right"
        }],
        attrs: {
          size: "sm",
          type: "text",
          inputmode: "decimal",
          lang: "en",
          pattern: "[0-9]*[.,]?[0-9]*",
          value: b.qty,
          placeholder: "0"
        },
        on: {
          input: function input(val) {
            return _vm.onBatchNumberInput(b, "qty", val);
          }
        }
      })], 1), _vm._v(" "), _c("td", {
        style: _vm.batchTdStyle
      }, [_c("b-form-input", {
        style: [_vm.batchInputStyle, {
          textAlign: "right"
        }],
        attrs: {
          size: "sm",
          type: "text",
          inputmode: "decimal",
          lang: "en",
          pattern: "[0-9]*[.,]?[0-9]*",
          value: b.unit_cost,
          placeholder: String(row.cost)
        },
        on: {
          input: function input(val) {
            return _vm.onBatchNumberInput(b, "unit_cost", val);
          }
        }
      })], 1), _vm._v(" "), _c("td", {
        staticStyle: {
          "text-align": "center"
        },
        style: _vm.batchTdStyle
      }, [_c("button", {
        style: _vm.removeBatchBtnStyle,
        attrs: {
          type: "button",
          title: _vm.$t("Del") || "Remove"
        },
        on: {
          click: function click($event) {
            return _vm.remove_batch(row, bIdx);
          }
        }
      }, [_c("lucide-icon", {
        attrs: {
          name: "x"
        }
      })], 1)])]);
    }), 0)]), _vm._v(" "), _vm.batchQtyMismatch(row) ? _c("div", {
      style: _vm.batchWarnStyle
    }, [_c("lucide-icon", {
      staticStyle: {
        "margin-right": "6px"
      },
      attrs: {
        name: "info"
      }
    }), _vm._v("\n                                " + _vm._s(_vm.$t("Total_batch_qty_mismatch") || "Total batch quantity does not match the line quantity") + "\n                                (" + _vm._s(_vm.formatNumber(_vm.batchTotalQty(row), 2)) + " / " + _vm._s(_vm.formatNumber(row.qty, 2)) + ")\n                              ")], 1) : _vm._e()])])]) : _vm._e()];
  })], 2), _vm._v(" "), _c("tfoot", [_c("tr", {
    style: _vm.tfootRowStyle
  }, [_c("td", {
    style: _vm.tfootLabelStyle,
    attrs: {
      colspan: 5
    }
  }, [_vm._v("\n                          " + _vm._s(_vm.$t("Subtotal") || "Subtotal") + "\n                        ")]), _vm._v(" "), _c("td", {
    style: _vm.tfootValueStyle
  }, [_vm._v("\n                          " + _vm._s(_vm.formatNumber(_vm.previewSubtotal, _vm.priceDecimals)) + "\n                        ")])])])])]), _vm._v(" "), _vm.hasBatchValidationErrors ? _c("div", {
    style: _vm.globalBatchWarnStyle
  }, [_c("lucide-icon", {
    staticStyle: {
      "margin-right": "6px",
      "font-size": "16px"
    },
    attrs: {
      name: "info"
    }
  }), _vm._v("\n                  " + _vm._s(_vm.firstBatchErrorDetail) + "\n                ")], 1) : _vm._e()]) : _vm._e(), _vm._v(" "), !_vm.import_products && !_vm.previewLoading && !_vm.previewError ? _c("div", {
    style: _vm.emptyHintStyle
  }, [_c("lucide-icon", {
    staticStyle: {
      "font-size": "22px",
      color: "#4f46e5"
    },
    attrs: {
      name: "info"
    }
  }), _vm._v(" "), _c("div", [_c("div", {
    staticStyle: {
      "font-weight": "600",
      color: "#1f2937",
      "margin-bottom": "2px"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("CSV_Format_Hint_Title") || "Expected CSV format") + "\n                  ")]), _vm._v(" "), _c("div", {
    staticStyle: {
      "font-size": "12px",
      color: "#6b7280"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("CSV_Format_Hint_Body") || "Columns: productcode;qty — use the example file as a reference.") + "\n                  ")])])], 1) : _vm._e()])]), _vm._v(" "), _c("div", {
    style: _vm.submitBarStyle
  }, [_c("div", {
    staticStyle: {
      flex: "1"
    }
  }, [_vm.previewRows.length ? _c("div", {
    staticStyle: {
      "font-size": "13px",
      color: "#6b7280"
    }
  }, [_c("strong", {
    staticStyle: {
      color: "#1f2937"
    }
  }, [_vm._v(_vm._s(_vm.previewRows.length))]), _vm._v("\n                " + _vm._s(_vm.$t("items_ready") || "items ready to import") + " ·\n                "), _c("strong", {
    staticStyle: {
      color: "#4f46e5"
    }
  }, [_vm._v(_vm._s(_vm.formatNumber(_vm.previewSubtotal, _vm.priceDecimals)))])]) : _c("div", {
    staticStyle: {
      "font-size": "13px",
      color: "#6b7280"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t("Upload_CSV_To_Preview") || "Upload a CSV file to preview items before submitting") + "\n              ")])]), _vm._v(" "), _c("b-button", {
    style: _vm.submitBtnStyle,
    attrs: {
      variant: "primary",
      disabled: _vm.SubmitProcessing || !_vm.previewRows.length || _vm.hasBatchValidationErrors
    },
    on: {
      click: _vm.Submit_Purchase
    }
  }, [_c("lucide-icon", {
    staticStyle: {
      "margin-right": "6px"
    },
    attrs: {
      name: "check"
    }
  }), _vm._v("\n              " + _vm._s(_vm.$t("submit")) + "\n            ")], 1), _vm._v(" "), _vm.SubmitProcessing ? _c("div", {
    staticClass: "spinner sm spinner-primary",
    staticStyle: {
      "margin-left": "10px"
    }
  }) : _vm._e()], 1)])], 1)], 1)], 1) : _vm._e()], 1);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchases/import_purchases.vue?vue&type=style&index=0&id=4167371c&scoped=true&lang=css"
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchases/import_purchases.vue?vue&type=style&index=0&id=4167371c&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.main-content[data-v-4167371c] {\r\n  width: 100%;\n}\r\n\r\n/* Make v-select and form controls feel consistent */\n[data-v-4167371c] .vs__dropdown-toggle {\r\n  border-radius: 8px;\r\n  border: 1px solid #e5e7eb;\r\n  padding: 3px 4px;\r\n  min-height: 38px;\n}\n[data-v-4167371c] .form-control {\r\n  border-radius: 8px;\r\n  border: 1px solid #e5e7eb;\n}\n[data-v-4167371c] .form-control:focus {\r\n  border-color: #7c3aed;\r\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.12);\n}\n[data-v-4167371c] .input-group-text {\r\n  border-radius: 0 8px 8px 0;\r\n  background: #f9fafb;\r\n  border-color: #e5e7eb;\n}\n[data-v-4167371c] .form-group label {\r\n  font-weight: 600;\r\n  font-size: 13px;\r\n  color: #374151;\r\n  margin-bottom: 6px;\n}\r\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchases/import_purchases.vue?vue&type=style&index=0&id=4167371c&scoped=true&lang=css"
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchases/import_purchases.vue?vue&type=style&index=0&id=4167371c&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_import_purchases_vue_vue_type_style_index_0_id_4167371c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./import_purchases.vue?vue&type=style&index=0&id=4167371c&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchases/import_purchases.vue?vue&type=style&index=0&id=4167371c&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_import_purchases_vue_vue_type_style_index_0_id_4167371c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_import_purchases_vue_vue_type_style_index_0_id_4167371c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/views/app/pages/purchases/import_purchases.vue"
/*!**********************************************************************!*\
  !*** ./resources/src/views/app/pages/purchases/import_purchases.vue ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _import_purchases_vue_vue_type_template_id_4167371c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import_purchases.vue?vue&type=template&id=4167371c&scoped=true */ "./resources/src/views/app/pages/purchases/import_purchases.vue?vue&type=template&id=4167371c&scoped=true");
/* harmony import */ var _import_purchases_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import_purchases.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/purchases/import_purchases.vue?vue&type=script&lang=js");
/* harmony import */ var _import_purchases_vue_vue_type_style_index_0_id_4167371c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import_purchases.vue?vue&type=style&index=0&id=4167371c&scoped=true&lang=css */ "./resources/src/views/app/pages/purchases/import_purchases.vue?vue&type=style&index=0&id=4167371c&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _import_purchases_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _import_purchases_vue_vue_type_template_id_4167371c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _import_purchases_vue_vue_type_template_id_4167371c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4167371c",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/purchases/import_purchases.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/purchases/import_purchases.vue?vue&type=script&lang=js"
/*!**********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/purchases/import_purchases.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_import_purchases_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./import_purchases.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchases/import_purchases.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_import_purchases_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/purchases/import_purchases.vue?vue&type=template&id=4167371c&scoped=true"
/*!****************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/purchases/import_purchases.vue?vue&type=template&id=4167371c&scoped=true ***!
  \****************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_import_purchases_vue_vue_type_template_id_4167371c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_import_purchases_vue_vue_type_template_id_4167371c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_import_purchases_vue_vue_type_template_id_4167371c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./import_purchases.vue?vue&type=template&id=4167371c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchases/import_purchases.vue?vue&type=template&id=4167371c&scoped=true");


/***/ },

/***/ "./resources/src/views/app/pages/purchases/import_purchases.vue?vue&type=style&index=0&id=4167371c&scoped=true&lang=css"
/*!******************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/purchases/import_purchases.vue?vue&type=style&index=0&id=4167371c&scoped=true&lang=css ***!
  \******************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_import_purchases_vue_vue_type_style_index_0_id_4167371c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./import_purchases.vue?vue&type=style&index=0&id=4167371c&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchases/import_purchases.vue?vue&type=style&index=0&id=4167371c&scoped=true&lang=css");


/***/ }

}]);