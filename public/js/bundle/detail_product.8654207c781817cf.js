(self["webpackChunk"] = self["webpackChunk"] || []).push([["detail_product"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/PricingPreview.vue?vue&type=script&lang=js"
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/PricingPreview.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PricingPreview",
  props: {
    productId: {
      type: [Number, String],
      "default": null
    },
    productData: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    warehouseId: {
      type: [Number, String],
      "default": null
    },
    overrides: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    currencySymbol: {
      type: String,
      "default": ""
    },
    priceDecimals: {
      type: Number,
      "default": 2
    },
    debounceMs: {
      type: Number,
      "default": 350
    }
  },
  data: function data() {
    return {
      loading: false,
      preview: null,
      errorMessage: "",
      previewTimer: null,
      requestSequence: 0
    };
  },
  computed: {
    normalizedProductId: function normalizedProductId() {
      var direct = this.toNullableInteger(this.productId);
      if (direct !== null) {
        return direct;
      }
      return this.toNullableInteger(this.productData && this.productData.id);
    },
    normalizedWarehouseId: function normalizedWarehouseId() {
      return this.toNullableInteger(this.warehouseId);
    },
    normalizedProductPayload: function normalizedProductPayload() {
      var product = this.productData || {};
      return {
        id: this.normalizedProductId,
        is_jewelry_item: !!product.is_jewelry_item,
        jewelry_item_type: product.jewelry_item_type || "",
        metal_type_id: this.toNullableInteger(product.metal_type_id),
        karat_id: this.toNullableInteger(product.karat_id),
        jewelry_gross_weight: this.toNullableNumber(product.jewelry_gross_weight),
        jewelry_net_weight: this.toNullableNumber(product.jewelry_net_weight),
        jewelry_metal_weight: this.toNullableNumber(product.jewelry_metal_weight),
        jewelry_weight_uom: product.jewelry_weight_uom || "g",
        making_charge_type: product.making_charge_type || "",
        making_charge_value: this.toNullableNumber(product.making_charge_value),
        wastage_type: product.wastage_type || "",
        wastage_value: this.toNullableNumber(product.wastage_value),
        TaxNet: this.toNullableNumber(product.TaxNet),
        tax_method: product.tax_method || null,
        discount: this.toNullableNumber(product.discount),
        discount_method: product.discount_method || null,
        item_stones: this.normalizeStoneRows(product.item_stones)
      };
    },
    hasDraftProductData: function hasDraftProductData() {
      var payload = this.normalizedProductPayload;
      return payload.is_jewelry_item || payload.metal_type_id !== null || payload.karat_id !== null || payload.jewelry_metal_weight !== null || payload.jewelry_gross_weight !== null || payload.item_stones.length > 0;
    },
    canFetchPreview: function canFetchPreview() {
      if (this.normalizedProductPayload.is_jewelry_item || this.hasDraftProductData) {
        return !!this.normalizedProductPayload.metal_type_id && !!this.normalizedProductPayload.karat_id;
      }
      return this.normalizedProductId !== null;
    },
    emptyStateMessage: function emptyStateMessage() {
      if (!this.hasDraftProductData && this.normalizedProductId !== null) {
        return "";
      }
      if (!this.hasDraftProductData && this.normalizedProductId === null) {
        return "Enable Jewelry Item to begin a live pricing preview.";
      }
      if (!this.normalizedProductPayload.metal_type_id) {
        return "Select a metal type to preview pricing.";
      }
      if (!this.normalizedProductPayload.karat_id) {
        return "Select a karat to preview pricing.";
      }
      return "";
    },
    requestPayload: function requestPayload() {
      var payload = {
        warehouse_id: this.normalizedWarehouseId,
        overrides: this.normalizeOverrides(this.overrides || {})
      };
      if (this.normalizedProductId !== null) {
        payload.product_id = this.normalizedProductId;
      }
      if (this.hasDraftProductData) {
        payload.product = this.normalizedProductPayload;
      }
      return payload;
    },
    requestSignature: function requestSignature() {
      return JSON.stringify(this.requestPayload);
    },
    rateMissingWarning: function rateMissingWarning() {
      if (!this.preview) {
        return false;
      }
      var rateId = this.preview.gold_rate_id;
      var rateValue = Number(this.preview.gold_rate || 0);
      return !rateId && rateValue <= 0 && !!this.normalizedProductPayload.metal_type_id && !!this.normalizedProductPayload.karat_id;
    },
    // The backend reports which metal it actually priced (metal_type_name),
    // so this always matches the selected metal — never hardcoded to gold.
    metalRateLabel: function metalRateLabel() {
      var name = this.preview && this.preview.metal_type_name;
      return name ? "".concat(name, " Rate") : "Metal Rate";
    }
  },
  watch: {
    requestSignature: {
      immediate: true,
      handler: function handler() {
        this.schedulePreview();
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.previewTimer) {
      clearTimeout(this.previewTimer);
      this.previewTimer = null;
    }
  },
  methods: {
    schedulePreview: function schedulePreview() {
      var _this = this;
      if (this.previewTimer) {
        clearTimeout(this.previewTimer);
      }
      if (!this.canFetchPreview) {
        this.loading = false;
        this.errorMessage = "";
        this.preview = null;
        return;
      }
      this.previewTimer = setTimeout(function () {
        _this.fetchPreview();
      }, this.debounceMs);
    },
    fetchPreview: function fetchPreview() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var sequence, response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              sequence = ++_this2.requestSequence;
              _this2.loading = true;
              _this2.errorMessage = "";
              _context.p = 1;
              _context.n = 2;
              return axios.post("pricing/preview", _this2.requestPayload, {
                meta: {
                  skipErrorRedirect: true
                }
              });
            case 2:
              response = _context.v;
              if (!(sequence !== _this2.requestSequence)) {
                _context.n = 3;
                break;
              }
              return _context.a(2);
            case 3:
              _this2.preview = response && response.data && response.data.data ? response.data.data : null;
              _context.n = 6;
              break;
            case 4:
              _context.p = 4;
              _t = _context.v;
              if (!(sequence !== _this2.requestSequence)) {
                _context.n = 5;
                break;
              }
              return _context.a(2);
            case 5:
              _this2.preview = null;
              _this2.errorMessage = _this2.extractErrorMessage(_t);
            case 6:
              _context.p = 6;
              if (sequence === _this2.requestSequence) {
                _this2.loading = false;
              }
              return _context.f(6);
            case 7:
              return _context.a(2);
          }
        }, _callee, null, [[1, 4, 6, 7]]);
      }))();
    },
    normalizeOverrides: function normalizeOverrides() {
      var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var cleaned = {};
      Object.keys(overrides).forEach(function (key) {
        var value = overrides[key];
        if (value === "" || value === null || typeof value === "undefined") {
          return;
        }
        cleaned[key] = value;
      });
      return cleaned;
    },
    normalizeStoneRows: function normalizeStoneRows(stones) {
      var _this3 = this;
      if (!Array.isArray(stones)) {
        return [];
      }
      return stones.map(function (stone) {
        return {
          stone_type_id: _this3.toNullableInteger(stone && stone.stone_type_id),
          quantity: _this3.toNullableNumber(stone && stone.quantity),
          unit_cost_amount: _this3.toNullableNumber(stone && stone.unit_cost_amount),
          total_cost_amount: _this3.toNullableNumber(stone && stone.total_cost_amount),
          carat_value: _this3.toNullableNumber(stone && stone.carat_value)
        };
      });
    },
    toNullableInteger: function toNullableInteger(value) {
      if (value === "" || value === null || typeof value === "undefined") {
        return null;
      }
      var parsed = Number.parseInt(value, 10);
      return Number.isFinite(parsed) ? parsed : null;
    },
    toNullableNumber: function toNullableNumber(value) {
      if (value === "" || value === null || typeof value === "undefined") {
        return null;
      }
      var parsed = Number(value);
      return Number.isFinite(parsed) ? parsed : null;
    },
    formatMoney: function formatMoney(value) {
      var amount = this.toNullableNumber(value) || 0;
      var formatted = amount.toFixed(this.priceDecimals);
      return this.currencySymbol ? "".concat(this.currencySymbol, " ").concat(formatted) : formatted;
    },
    formatWeight: function formatWeight(value) {
      var amount = this.toNullableNumber(value) || 0;
      return "".concat(amount.toFixed(3), " ").concat(this.normalizedProductPayload.jewelry_weight_uom || "g");
    },
    makingChargeTypeLabel: function makingChargeTypeLabel(type) {
      var labels = {
        fixed: "Fixed",
        per_gram: "Per Gram",
        percentage: "Percentage",
        manual: "Manual",
        formula: "Formula"
      };
      return labels[type] || type;
    },
    formatDate: function formatDate(value) {
      if (!value) {
        return "—";
      }
      var parsed = new Date(value);
      if (Number.isNaN(parsed.getTime())) {
        return value;
      }
      return parsed.toLocaleString();
    },
    extractErrorMessage: function extractErrorMessage(error) {
      var payload = error && error.response && error.response.data ? error.response.data : error;
      if (payload && payload.errors && _typeof(payload.errors) === "object") {
        var firstErrorGroup = Object.values(payload.errors)[0];
        if (Array.isArray(firstErrorGroup) && firstErrorGroup.length) {
          return firstErrorGroup[0];
        }
        if (typeof firstErrorGroup === "string") {
          return firstErrorGroup;
        }
      }
      if (payload && payload.message) {
        return payload.message;
      }
      if (typeof payload === "string" && payload.trim() !== "") {
        return payload;
      }
      return "Unable to generate a pricing preview right now.";
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Detail_Product.vue?vue&type=script&lang=js"
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Detail_Product.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_barcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-barcode */ "./node_modules/vue-barcode/index.js");
/* harmony import */ var vue_barcode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_barcode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_PricingPreview_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PricingPreview.vue */ "./resources/src/views/app/components/PricingPreview.vue");
/* harmony import */ var _utils_priceFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/priceFormat */ "./resources/src/utils/priceFormat.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Detail Product"
  },
  components: {
    barcode: (vue_barcode__WEBPACK_IMPORTED_MODULE_0___default()),
    PricingPreview: _components_PricingPreview_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      len: 8,
      isLoading: true,
      product: {},
      roles: {},
      variants: [],
      activeImageIndex: 0,
      price_format_key: null,
      // Pharmacy: per-product batch list (loaded on demand for batch-tracked products).
      batches: [],
      batchesLoading: false,
      expiryWarningDays: 90
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["currentUser"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)("config", ["getThemeMode"])), {}, {
    // Monetary precision (2 or 3) driven by the "Enable 3 Decimal Pricing" setting.
    priceDecimals: function priceDecimals() {
      return (0,_utils_priceFormat__WEBPACK_IMPORTED_MODULE_3__.getPriceDecimals)({
        store: this.$store
      });
    },
    isDarkMode: function isDarkMode() {
      return !!(this.getThemeMode && this.getThemeMode.dark);
    },
    // Single source of color truth for the page. Every style object below
    // pulls from here, so flipping dark mode flips the whole page.
    pdTheme: function pdTheme() {
      return this.isDarkMode ? {
        pageBg: 'linear-gradient(135deg, #1a1a1a 0%, #202020 100%)',
        cardBg: '#202020',
        cardBorder: '#292929',
        cardShadow: '0 2px 12px rgba(0,0,0,0.4)',
        cardHeaderBg: 'linear-gradient(180deg, #292929 0%, #202020 100%)',
        cardHeaderText: '#d8d8d8',
        keyColor: 'rgba(216,216,216,0.7)',
        valueColor: '#d8d8d8',
        labelColor: 'rgba(216,216,216,0.7)',
        mutedColor: 'rgba(216,216,216,0.5)',
        dashedBorder: '#292929',
        tableHeaderBg: '#292929',
        tableHeaderText: 'rgba(216,216,216,0.8)',
        tableHeaderRule: '#292929',
        tableRowRule: '#292929',
        tableCellText: '#d8d8d8',
        codeBg: '#292929',
        codeText: '#a78bfa',
        noteBg: '#292929',
        noteText: 'rgba(216,216,216,0.85)',
        warehouseCardBg: 'linear-gradient(135deg, rgba(14,165,233,0.12) 0%, rgba(14,165,233,0.05) 100%)',
        warehouseCardBorder: 'rgba(14,165,233,0.35)',
        warehouseLabel: 'rgba(216,216,216,0.7)',
        warehouseValue: '#bae6fd',
        warehouseUnit: 'rgba(216,216,216,0.6)',
        galleryFrameBg: '#292929',
        galleryFrameBorder: '#292929',
        thumbInnerBg: '#292929',
        backBtnBg: 'transparent',
        backBtnColor: '#d8d8d8',
        backBtnBorder: 'rgba(216,216,216,0.25)',
        backBtnHoverBg: 'rgba(216,216,216,0.08)',
        backBtnHoverFg: '#a78bfa'
      } : {
        pageBg: 'linear-gradient(135deg, #f8f9fc 0%, #eef2f7 100%)',
        cardBg: '#ffffff',
        cardBorder: '#eef2f7',
        cardShadow: '0 2px 12px rgba(15,23,42,0.06)',
        cardHeaderBg: 'linear-gradient(180deg, #fafbff 0%, #ffffff 100%)',
        cardHeaderText: '#1e293b',
        keyColor: '#64748b',
        valueColor: '#0f172a',
        labelColor: '#64748b',
        mutedColor: '#94a3b8',
        dashedBorder: '#e5e7eb',
        tableHeaderBg: '#f8fafc',
        tableHeaderText: '#64748b',
        tableHeaderRule: '#e5e7eb',
        tableRowRule: '#f1f5f9',
        tableCellText: '#1e293b',
        codeBg: '#f1f5f9',
        codeText: '#4f46e5',
        noteBg: '#f8fafc',
        noteText: '#475569',
        warehouseCardBg: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
        warehouseCardBorder: '#bae6fd',
        warehouseLabel: '#64748b',
        warehouseValue: '#0c4a6e',
        warehouseUnit: '#64748b',
        galleryFrameBg: '#f8fafc',
        galleryFrameBorder: '#e5e7eb',
        thumbInnerBg: '#fff',
        backBtnBg: 'transparent',
        backBtnColor: '#475569',
        backBtnBorder: '#cbd5e1',
        backBtnHoverBg: '#fff',
        backBtnHoverFg: '#4f46e5'
      };
    },
    rootStyle: function rootStyle() {
      return {
        background: this.pdTheme.pageBg,
        padding: '24px',
        borderRadius: '12px',
        minHeight: '100vh'
      };
    },
    cardStyle: function cardStyle() {
      return {
        background: this.pdTheme.cardBg,
        borderRadius: '14px',
        boxShadow: this.pdTheme.cardShadow,
        border: "1px solid ".concat(this.pdTheme.cardBorder),
        marginBottom: '20px',
        overflow: 'hidden'
      };
    },
    cardHeaderStyle: function cardHeaderStyle() {
      return {
        padding: '16px 20px',
        borderBottom: "1px solid ".concat(this.pdTheme.cardBorder),
        fontSize: '15px',
        fontWeight: '700',
        color: this.pdTheme.cardHeaderText,
        display: 'flex',
        alignItems: 'center',
        background: this.pdTheme.cardHeaderBg
      };
    },
    infoGrid: function infoGrid() {
      return {
        display: 'grid',
        gridTemplateColumns: '1fr',
        rowGap: '0'
      };
    },
    infoRow: function infoRow() {
      return {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 4px',
        borderBottom: "1px dashed ".concat(this.pdTheme.dashedBorder),
        flexWrap: 'wrap',
        gap: '8px'
      };
    },
    infoKey: function infoKey() {
      return {
        fontSize: '13px',
        color: this.pdTheme.keyColor,
        fontWeight: '500'
      };
    },
    infoVal: function infoVal() {
      return {
        fontSize: '14px',
        color: this.pdTheme.valueColor,
        fontWeight: '600',
        textAlign: 'right'
      };
    },
    tableStyle: function tableStyle() {
      return {
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: '0',
        fontSize: '14px'
      };
    },
    thStyle: function thStyle() {
      return {
        padding: '10px 12px',
        textAlign: 'left',
        color: this.pdTheme.tableHeaderText,
        fontWeight: '700',
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        borderBottom: "2px solid ".concat(this.pdTheme.tableHeaderRule),
        background: this.pdTheme.tableHeaderBg
      };
    },
    tdStyle: function tdStyle() {
      return {
        padding: '12px',
        borderBottom: "1px solid ".concat(this.pdTheme.tableRowRule),
        color: this.pdTheme.tableCellText
      };
    },
    trHover: function trHover() {
      return {
        transition: 'background 0.2s'
      };
    },
    codeStyle: function codeStyle() {
      return {
        background: this.pdTheme.codeBg,
        color: this.pdTheme.codeText,
        padding: '2px 8px',
        borderRadius: '6px',
        fontSize: '12px',
        fontFamily: "'Courier New', monospace",
        fontWeight: '600'
      };
    },
    statLabelStyle: function statLabelStyle() {
      return {
        fontSize: '11px',
        color: this.pdTheme.labelColor,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        fontWeight: '600'
      };
    },
    statValueStyle: function statValueStyle() {
      return {
        fontSize: '16px',
        color: this.pdTheme.valueColor,
        fontWeight: '700',
        marginTop: '2px'
      };
    },
    printBtnStyle: function printBtnStyle() {
      return {
        background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '10px',
        fontWeight: '600',
        fontSize: '14px',
        cursor: 'pointer',
        boxShadow: '0 4px 10px rgba(79,70,229,0.25)',
        transition: 'all 0.2s',
        display: 'inline-flex',
        alignItems: 'center'
      };
    },
    backBtnStyle: function backBtnStyle() {
      return {
        background: this.pdTheme.backBtnBg,
        color: this.pdTheme.backBtnColor,
        border: "1px solid ".concat(this.pdTheme.backBtnBorder),
        padding: '10px 18px',
        borderRadius: '10px',
        fontWeight: '600',
        fontSize: '14px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        display: 'inline-flex',
        alignItems: 'center'
      };
    },
    categoriesLine: function categoriesLine() {
      var p = this.product;
      if (!p || _typeof(p) !== "object") return "";
      if (Array.isArray(p.categories) && p.categories.length) {
        return p.categories.map(function (c) {
          return c && c.name;
        }).filter(Boolean).join(", ");
      }
      return p.category || "";
    },
    subcategoriesLine: function subcategoriesLine() {
      var p = this.product;
      if (!p || _typeof(p) !== "object") return "";
      if (Array.isArray(p.subcategories) && p.subcategories.length) {
        return p.subcategories.map(function (s) {
          return s && s.name;
        }).filter(Boolean).join(", ");
      }
      return p.sub_category || "";
    },
    productImages: function productImages() {
      var p = this.product;
      if (!p || _typeof(p) !== "object") return [];
      if (Array.isArray(p.images) && p.images.length) {
        return p.images.filter(Boolean);
      }
      if (typeof p.image === "string" && p.image.trim() !== "") {
        return p.image.split(",").map(function (s) {
          return s.trim();
        }).filter(Boolean);
      }
      return [];
    },
    activeImage: function activeImage() {
      var imgs = this.productImages;
      if (!imgs.length) return this.product.image || 'no-image.png';
      return imgs[Math.min(this.activeImageIndex, imgs.length - 1)];
    },
    totalStock: function totalStock() {
      if (!this.product || !Array.isArray(this.product.CountQTY)) return 0;
      return this.product.CountQTY.reduce(function (sum, w) {
        return sum + (parseFloat(w.qte) || 0);
      }, 0);
    },
    isJewelryItem: function isJewelryItem() {
      return !!(this.product && this.product.is_jewelry_item);
    },
    jewelryStoneLines: function jewelryStoneLines() {
      return Array.isArray(this.product && this.product.item_stones) ? this.product.item_stones : [];
    },
    jewelryStoneTotal: function jewelryStoneTotal() {
      return this.jewelryStoneLines.reduce(function (sum, stone) {
        return sum + (Number(stone.total_cost_amount) || 0);
      }, 0);
    },
    batchesTotalQty: function batchesTotalQty() {
      if (!Array.isArray(this.batches)) return 0;
      return this.batches.reduce(function (sum, b) {
        return sum + (Number(b.qty) || 0);
      }, 0);
    },
    batchesExpiredCount: function batchesExpiredCount() {
      return (this.batches || []).filter(function (b) {
        return b.expiry_bucket === 'expired';
      }).length;
    },
    batchesNearExpiryCount: function batchesNearExpiryCount() {
      return (this.batches || []).filter(function (b) {
        return b.expiry_bucket === 'near';
      }).length;
    },
    hasAnyVariant: function hasAnyVariant() {
      return (this.batches || []).some(function (b) {
        return !!b.variant_name;
      });
    }
  }),
  methods: {
    goBack: function goBack() {
      this.$router.go(-1);
    },
    onImgError: function onImgError(e) {
      e.target.src = this.$imgUrl('products', 'no-image.png');
    },
    heroBadge: function heroBadge(bg) {
      return {
        background: bg,
        color: '#fff',
        padding: '4px 12px',
        borderRadius: '999px',
        fontSize: '12px',
        fontWeight: '600',
        display: 'inline-flex',
        alignItems: 'center'
      };
    },
    statCardStyle: function statCardStyle(accent, bg) {
      return {
        background: this.pdTheme.cardBg,
        border: "1px solid ".concat(this.pdTheme.cardBorder),
        borderLeft: "4px solid ".concat(accent),
        borderRadius: '12px',
        padding: '14px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        boxShadow: this.isDarkMode ? '0 2px 8px rgba(0,0,0,0.3)' : '0 2px 8px rgba(15,23,42,0.04)'
      };
    },
    statIconStyle: function statIconStyle(color) {
      return {
        width: '44px',
        height: '44px',
        borderRadius: '12px',
        background: color + '1a',
        color: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        flexShrink: 0
      };
    },
    infoValAccent: function infoValAccent(color) {
      return {
        fontSize: '14px',
        color: color,
        fontWeight: '700',
        textAlign: 'right'
      };
    },
    onBackBtnHover: function onBackBtnHover(e, isHover) {
      var t = this.pdTheme;
      e.currentTarget.style.background = isHover ? t.backBtnHoverBg : t.backBtnBg;
      e.currentTarget.style.color = isHover ? t.backBtnHoverFg : t.backBtnColor;
    },
    pillStyle: function pillStyle(color) {
      return {
        background: color + '15',
        color: color,
        padding: '4px 10px',
        borderRadius: '999px',
        fontSize: '12px',
        fontWeight: '700',
        display: 'inline-block'
      };
    },
    formatNumber: function formatNumber(number, dec) {
      if (number === null || number === undefined) number = 0;
      var value = (typeof number === "string" ? number : number.toString()).split(".");
      if (dec <= 0) return value[0];
      var formated = value[1] || "";
      if (formated.length > dec) return "".concat(value[0], ".").concat(formated.substr(0, dec));
      while (formated.length < dec) formated += "0";
      return "".concat(value[0], ".").concat(formated);
    },
    formatPriceDisplay: function formatPriceDisplay(number, dec) {
      try {
        // Money formatter: always honour the configured price precision (2 or 3).
        var decimals = this.priceDecimals;
        var key = this.price_format_key || (0,_utils_priceFormat__WEBPACK_IMPORTED_MODULE_3__.getPriceFormatSetting)({
          store: this.$store
        });
        if (key) this.price_format_key = key;
        return (0,_utils_priceFormat__WEBPACK_IMPORTED_MODULE_3__.formatPriceDisplay)(number, decimals, key);
      } catch (e) {
        return this.formatNumber(number, dec);
      }
    },
    formatPriceWithSymbol: function formatPriceWithSymbol(symbol, number, dec) {
      var safeSymbol = symbol || "";
      var value = this.formatPriceDisplay(number, dec);
      return safeSymbol ? "".concat(safeSymbol, " ").concat(value) : value;
    },
    print_product: function print_product() {
      var el = document.getElementById('print_product');
      if (!el) return;
      var win = window.open('', '_blank', 'fullscreen=yes,titlebar=yes,scrollbars=yes');
      if (!win) {
        alert('Please allow pop-ups to print this page.');
        return;
      }
      var title = this.product && this.product.name ? "".concat(this.product.name, " \u2014 ").concat(this.product.code || '') : document.title;
      var html = "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    <title>".concat(title, "</title>\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" />\n    <style>\n      html, body { margin: 0; padding: 0; background: #fff; color: #0f172a; font-family: 'Segoe UI', Arial, sans-serif; -webkit-print-color-adjust: exact; print-color-adjust: exact; }\n      body { padding: 20px; }\n      table { page-break-inside: auto; }\n      tr    { page-break-inside: avoid; page-break-after: auto; }\n      img   { max-width: 100%; height: auto; }\n      @page { margin: 10mm; }\n      @media print {\n        body { padding: 0; }\n      }\n    </style>\n  </head>\n  <body>").concat(el.innerHTML, "</body>\n</html>");
      win.document.open();
      win.document.write(html);
      win.document.close();
      var doPrint = function doPrint() {
        try {
          win.focus();
          // Close after the print dialog returns (or user cancels)
          var closeAfter = function closeAfter() {
            try {
              win.close();
            } catch (e) {}
          };
          if (typeof win.onafterprint !== 'undefined') {
            win.onafterprint = closeAfter;
          }
          win.print();
          // Safety fallback in browsers that don't fire afterprint reliably
          setTimeout(closeAfter, 1500);
        } catch (e) {
          try {
            win.close();
          } catch (_) {}
        }
      };

      // Wait for images and stylesheet to load so content is visible before printing
      var waitForImages = function waitForImages() {
        var imgs = Array.from(win.document.images || []);
        if (!imgs.length) return Promise.resolve();
        return Promise.all(imgs.map(function (img) {
          if (img.complete) return Promise.resolve();
          return new Promise(function (res) {
            img.addEventListener('load', res, {
              once: true
            });
            img.addEventListener('error', res, {
              once: true
            });
          });
        }));
      };
      if (win.document.readyState === 'complete') {
        waitForImages().then(doPrint);
      } else {
        win.addEventListener('load', function () {
          return waitForImages().then(doPrint);
        });
      }
    },
    showDetails: function showDetails() {
      var _this = this;
      var id = this.$route.params.id;
      axios.get("get_product_detail_api/".concat(id)).then(function (response) {
        _this.product = response.data;
        _this.isLoading = false;
        if (_this.product && _this.product.is_batch_tracked) {
          _this.loadBatches();
        }
      })["catch"](function () {
        setTimeout(function () {
          _this.isLoading = false;
        }, 500);
      });
    },
    loadBatches: function loadBatches() {
      var _this2 = this;
      var id = this.$route.params.id;
      if (!id) return;
      this.batchesLoading = true;
      axios.get('product_batches', {
        params: {
          product_id: id,
          limit: 200,
          SortField: 'expiry_date',
          SortType: 'asc'
        }
      }).then(function (response) {
        var data = response && response.data ? response.data : {};
        _this2.batches = Array.isArray(data.batches) ? data.batches : [];
        if (Number.isFinite(Number(data.expiry_warning_days))) {
          _this2.expiryWarningDays = Number(data.expiry_warning_days);
        }
      })["catch"](function () {
        _this2.batches = [];
      }).then(function () {
        _this2.batchesLoading = false;
      });
    },
    batchExpiryStyle: function batchExpiryStyle(bucket) {
      var styles = {
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
      var palette = styles[bucket] || {
        background: '#f3f4f6',
        color: '#6b7280'
      };
      return _objectSpread({
        display: 'inline-block',
        padding: '3px 10px',
        borderRadius: '999px',
        fontSize: '12px',
        fontWeight: '700'
      }, palette);
    },
    batchStatusStyle: function batchStatusStyle(status) {
      var palette = {
        active: {
          background: '#dcfce7',
          color: '#166534'
        },
        quarantined: {
          background: '#fef3c7',
          color: '#92400e'
        },
        expired: {
          background: '#fee2e2',
          color: '#991b1b'
        },
        written_off: {
          background: '#fecaca',
          color: '#7f1d1d'
        }
      };
      var c = palette[String(status || '').toLowerCase()] || {
        background: '#e5e7eb',
        color: '#374151'
      };
      return _objectSpread({
        display: 'inline-block',
        padding: '3px 10px',
        borderRadius: '6px',
        fontSize: '11px',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '0.3px'
      }, c);
    }
  },
  created: function created() {
    this.showDetails();
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/PricingPreview.vue?vue&type=template&id=72967f59&scoped=true"
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/PricingPreview.vue?vue&type=template&id=72967f59&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "pricing-preview-card"
  }, [_c("div", {
    staticClass: "pricing-preview-card__header"
  }, [_vm._m(0), _vm._v(" "), _c("b-badge", {
    attrs: {
      variant: _vm.loading ? "warning" : "light",
      pill: ""
    }
  }, [_vm._v("\n      " + _vm._s(_vm.loading ? "Updating…" : "Auto refresh") + "\n    ")])], 1), _vm._v(" "), _vm.emptyStateMessage ? _c("b-alert", {
    staticClass: "mb-0 pricing-preview-card__alert",
    attrs: {
      show: "",
      variant: "light"
    }
  }, [_vm._v("\n    " + _vm._s(_vm.emptyStateMessage) + "\n  ")]) : [_vm.errorMessage ? _c("b-alert", {
    staticClass: "mb-3 pricing-preview-card__alert",
    attrs: {
      show: "",
      variant: "danger"
    }
  }, [_vm._v("\n      " + _vm._s(_vm.errorMessage) + "\n    ")]) : _vm._e(), _vm._v(" "), _vm.rateMissingWarning ? _c("b-alert", {
    staticClass: "mb-3 pricing-preview-card__alert",
    attrs: {
      show: "",
      variant: "warning"
    }
  }, [_vm._v("\n      No active " + _vm._s(_vm.metalRateLabel.toLowerCase()) + " was found for the selected metal and karat. The preview is using a 0.00 rate until one is configured.\n    ")]) : _vm._e(), _vm._v(" "), !_vm.preview && _vm.loading ? _c("div", {
    staticClass: "pricing-preview-card__loading text-center py-4"
  }, [_c("b-spinner", {
    staticClass: "mr-2",
    attrs: {
      small: ""
    }
  }), _vm._v(" "), _c("span", [_vm._v("Calculating pricing preview…")])], 1) : _vm.preview ? _c("div", {
    staticClass: "pricing-preview-card__body"
  }, [_c("div", {
    staticClass: "pricing-preview-grid"
  }, [_c("div", {
    staticClass: "pricing-preview-row"
  }, [_c("span", {
    staticClass: "pricing-preview-row__label"
  }, [_vm._v(_vm._s(_vm.metalRateLabel))]), _vm._v(" "), _c("span", {
    staticClass: "pricing-preview-row__value"
  }, [_vm._v(_vm._s(_vm.formatMoney(_vm.preview.gold_rate)))])]), _vm._v(" "), _c("div", {
    staticClass: "pricing-preview-row"
  }, [_c("span", {
    staticClass: "pricing-preview-row__label"
  }, [_vm._v("Effective Date")]), _vm._v(" "), _c("span", {
    staticClass: "pricing-preview-row__value"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.preview.gold_rate_effective_at)))])]), _vm._v(" "), _c("div", {
    staticClass: "pricing-preview-row"
  }, [_c("span", {
    staticClass: "pricing-preview-row__label"
  }, [_vm._v("Metal Weight")]), _vm._v(" "), _c("span", {
    staticClass: "pricing-preview-row__value"
  }, [_vm._v(_vm._s(_vm.formatWeight(_vm.preview.metal_weight)))])]), _vm._v(" "), _c("div", {
    staticClass: "pricing-preview-row"
  }, [_c("span", {
    staticClass: "pricing-preview-row__label"
  }, [_vm._v("Metal Value")]), _vm._v(" "), _c("span", {
    staticClass: "pricing-preview-row__value"
  }, [_vm._v(_vm._s(_vm.formatMoney(_vm.preview.metal_value)))])]), _vm._v(" "), _c("div", {
    staticClass: "pricing-preview-row"
  }, [_c("span", {
    staticClass: "pricing-preview-row__label"
  }, [_vm._v("\n            Making Charge\n            "), _vm.preview.making_charge_type ? _c("small", {
    staticClass: "pricing-preview-row__method"
  }, [_vm._v("(" + _vm._s(_vm.makingChargeTypeLabel(_vm.preview.making_charge_type)) + ")")]) : _vm._e()]), _vm._v(" "), _c("span", {
    staticClass: "pricing-preview-row__value"
  }, [_vm._v(_vm._s(_vm.formatMoney(_vm.preview.making_charge)))])]), _vm._v(" "), _c("div", {
    staticClass: "pricing-preview-row"
  }, [_c("span", {
    staticClass: "pricing-preview-row__label"
  }, [_vm._v("Wastage")]), _vm._v(" "), _c("span", {
    staticClass: "pricing-preview-row__value"
  }, [_vm._v(_vm._s(_vm.formatMoney(_vm.preview.wastage)))])]), _vm._v(" "), _c("div", {
    staticClass: "pricing-preview-row"
  }, [_c("span", {
    staticClass: "pricing-preview-row__label"
  }, [_vm._v("Stone Value")]), _vm._v(" "), _c("span", {
    staticClass: "pricing-preview-row__value"
  }, [_vm._v(_vm._s(_vm.formatMoney(_vm.preview.stone_value)))])]), _vm._v(" "), _c("div", {
    staticClass: "pricing-preview-row"
  }, [_c("span", {
    staticClass: "pricing-preview-row__label"
  }, [_vm._v("Labor")]), _vm._v(" "), _c("span", {
    staticClass: "pricing-preview-row__value"
  }, [_vm._v(_vm._s(_vm.formatMoney(_vm.preview.labor)))])]), _vm._v(" "), _c("div", {
    staticClass: "pricing-preview-row"
  }, [_c("span", {
    staticClass: "pricing-preview-row__label"
  }, [_vm._v("Markup")]), _vm._v(" "), _c("span", {
    staticClass: "pricing-preview-row__value"
  }, [_vm._v(_vm._s(_vm.formatMoney(_vm.preview.markup)))])]), _vm._v(" "), _c("div", {
    staticClass: "pricing-preview-row"
  }, [_c("span", {
    staticClass: "pricing-preview-row__label"
  }, [_vm._v("Discount")]), _vm._v(" "), _c("span", {
    staticClass: "pricing-preview-row__value"
  }, [_vm._v(_vm._s(_vm.formatMoney(_vm.preview.discount)))])]), _vm._v(" "), _c("div", {
    staticClass: "pricing-preview-row"
  }, [_c("span", {
    staticClass: "pricing-preview-row__label"
  }, [_vm._v("Tax")]), _vm._v(" "), _c("span", {
    staticClass: "pricing-preview-row__value"
  }, [_vm._v(_vm._s(_vm.formatMoney(_vm.preview.tax)))])]), _vm._v(" "), _c("div", {
    staticClass: "pricing-preview-row pricing-preview-row--base"
  }, [_c("span", {
    staticClass: "pricing-preview-row__label"
  }, [_vm._v("Base Jewelry Value")]), _vm._v(" "), _c("span", {
    staticClass: "pricing-preview-row__value"
  }, [_vm._v(_vm._s(_vm.formatMoney(_vm.preview.base_value)))])])]), _vm._v(" "), _c("div", {
    staticClass: "pricing-preview-total mt-3"
  }, [_c("span", {
    staticClass: "pricing-preview-total__label"
  }, [_vm._v("Final Price")]), _vm._v(" "), _c("span", {
    staticClass: "pricing-preview-total__value"
  }, [_vm._v(_vm._s(_vm.formatMoney(_vm.preview.selling_price)))])])]) : _vm._e()]], 2);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("h5", {
    staticClass: "pricing-preview-card__title mb-1"
  }, [_vm._v("Live Pricing Preview")]), _vm._v(" "), _c("p", {
    staticClass: "pricing-preview-card__subtitle mb-0 text-muted"
  }, [_vm._v("\n        Uses the shared jewelry pricing endpoint so the form preview stays aligned with saved sales pricing.\n      ")])]);
}];
render._withStripped = true;


/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Detail_Product.vue?vue&type=template&id=97219482&scoped=true"
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Detail_Product.vue?vue&type=template&id=97219482&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "main-content"
  }, [_c("breadcumb", {
    attrs: {
      page: _vm.$t("ProductDetails"),
      folder: _vm.$t("Products")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("div", {
    staticClass: "pd-root",
    style: _vm.rootStyle
  }, [_c("div", {
    staticClass: "pd-actions",
    style: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      marginBottom: "16px",
      gap: "10px"
    }
  }, [_c("button", {
    style: _vm.backBtnStyle,
    on: {
      click: _vm.goBack,
      mouseover: function mouseover($event) {
        return _vm.onBackBtnHover($event, true);
      },
      mouseleave: function mouseleave($event) {
        return _vm.onBackBtnHover($event, false);
      }
    }
  }, [_c("lucide-icon", {
    style: {
      marginRight: "6px"
    },
    attrs: {
      name: "arrow-left"
    }
  }), _vm._v("\n        " + _vm._s(_vm.$t("back") || "Back") + "\n      ")], 1), _vm._v(" "), _c("button", {
    style: _vm.printBtnStyle,
    attrs: {
      onmouseover: "this.style.transform='translateY(-1px)'; this.style.boxShadow='0 6px 16px rgba(79,70,229,0.35)'",
      onmouseout: "this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 10px rgba(79,70,229,0.25)'"
    },
    on: {
      click: function click($event) {
        return _vm.print_product();
      }
    }
  }, [_c("lucide-icon", {
    style: {
      marginRight: "6px"
    },
    attrs: {
      name: "receipt"
    }
  }), _vm._v("\n        " + _vm._s(_vm.$t("print")) + "\n      ")], 1)]), _vm._v(" "), _c("div", {
    attrs: {
      id: "print_product"
    }
  }, [_c("div", {
    staticClass: "pd-hero",
    style: {
      background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
      borderRadius: "16px",
      padding: "28px",
      color: "#fff",
      marginBottom: "24px",
      boxShadow: "0 10px 30px rgba(79,70,229,0.25)",
      position: "relative",
      overflow: "hidden"
    }
  }, [_c("div", {
    style: {
      position: "absolute",
      right: "-60px",
      top: "-60px",
      width: "220px",
      height: "220px",
      borderRadius: "50%",
      background: "rgba(255,255,255,0.08)"
    }
  }), _vm._v(" "), _c("div", {
    style: {
      position: "absolute",
      right: "40px",
      bottom: "-80px",
      width: "180px",
      height: "180px",
      borderRadius: "50%",
      background: "rgba(255,255,255,0.06)"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "pd-hero-row",
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "24px",
      position: "relative",
      zIndex: 1
    }
  }, [_c("div", {
    staticClass: "pd-hero-img",
    style: {
      width: "140px",
      height: "140px",
      borderRadius: "14px",
      background: _vm.pdTheme.galleryFrameBg,
      border: "1px solid ".concat(_vm.pdTheme.galleryFrameBorder),
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      boxShadow: "0 6px 20px rgba(0,0,0,0.15)"
    }
  }, [_c("img", {
    staticClass: "pd-hero-img__el",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    attrs: {
      src: _vm.$imgUrl("products", _vm.productImages[0] || _vm.product.image || "no-image.png"),
      alt: _vm.product.name
    },
    on: {
      error: _vm.onImgError
    }
  })]), _vm._v(" "), _c("div", {
    style: {
      flex: "1",
      minWidth: "240px"
    }
  }, [_c("div", {
    style: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      marginBottom: "10px"
    }
  }, [_c("span", {
    style: _vm.heroBadge("rgba(255,255,255,0.2)")
  }, [_vm._v(_vm._s(_vm.product.type_name))]), _vm._v(" "), _vm.product.code ? _c("span", {
    style: _vm.heroBadge("rgba(16,185,129,0.85)")
  }, [_c("lucide-icon", {
    style: {
      marginRight: "4px"
    },
    attrs: {
      name: "code"
    }
  }), _vm._v(_vm._s(_vm.product.code) + "\n              ")], 1) : _vm._e(), _vm._v(" "), _vm.product.brand && _vm.product.brand !== "N/D" ? _c("span", {
    style: _vm.heroBadge("rgba(245,158,11,0.9)")
  }, [_vm._v("\n                " + _vm._s(_vm.product.brand) + "\n              ")]) : _vm._e()]), _vm._v(" "), _c("h1", {
    staticClass: "pd-hero-title",
    style: {
      margin: "0 0 10px 0",
      fontSize: "28px",
      fontWeight: "700",
      lineHeight: "1.2"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.product.name) + "\n            ")]), _vm._v(" "), _c("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "16px",
      fontSize: "14px",
      opacity: "0.95"
    }
  }, [_vm.categoriesLine ? _c("span", [_c("lucide-icon", {
    style: {
      marginRight: "4px"
    },
    attrs: {
      name: "folder"
    }
  }), _vm._v(_vm._s(_vm.categoriesLine) + "\n              ")], 1) : _vm._e(), _vm._v(" "), _vm.subcategoriesLine ? _c("span", [_c("lucide-icon", {
    style: {
      marginRight: "4px"
    },
    attrs: {
      name: "rows-2"
    }
  }), _vm._v(_vm._s(_vm.subcategoriesLine) + "\n              ")], 1) : _vm._e(), _vm._v(" "), _vm.product.unit && _vm.product.unit !== "----" ? _c("span", [_c("lucide-icon", {
    style: {
      marginRight: "4px"
    },
    attrs: {
      name: "ruler"
    }
  }), _vm._v(_vm._s(_vm.product.unit) + "\n              ")], 1) : _vm._e()])]), _vm._v(" "), _vm.product.type != "is_variant" ? _c("div", {
    staticClass: "pd-hero-price",
    style: {
      background: "rgba(255,255,255,0.15)",
      padding: "16px 22px",
      borderRadius: "12px",
      textAlign: "center",
      backdropFilter: "blur(6px)",
      minWidth: "160px"
    }
  }, [_c("div", {
    style: {
      fontSize: "12px",
      opacity: "0.8",
      textTransform: "uppercase",
      letterSpacing: "1px"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Price")) + "\n            ")]), _vm._v(" "), _c("div", {
    style: {
      fontSize: "24px",
      fontWeight: "700",
      marginTop: "4px"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.formatPriceWithSymbol(_vm.currentUser && _vm.currentUser.currency, _vm.product.price, 2)) + "\n            ")])]) : _vm._e()])]), _vm._v(" "), _vm.product.type != "is_variant" ? _c("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "16px",
      marginBottom: "24px"
    }
  }, [_vm.product.type == "is_single" || _vm.product.type == "is_combo" ? _c("div", {
    style: _vm.statCardStyle("#4f46e5", "#eef2ff")
  }, [_c("div", {
    style: _vm.statIconStyle("#4f46e5")
  }, [_c("lucide-icon", {
    attrs: {
      name: "wallet"
    }
  })], 1), _vm._v(" "), _c("div", [_c("div", {
    style: _vm.statLabelStyle
  }, [_vm._v(_vm._s(_vm.$t("Cost")))]), _vm._v(" "), _c("div", {
    style: _vm.statValueStyle
  }, [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser && _vm.currentUser.currency, _vm.product.cost, 2)))])])]) : _vm._e(), _vm._v(" "), _c("div", {
    style: _vm.statCardStyle("#10b981", "#ecfdf5")
  }, [_c("div", {
    style: _vm.statIconStyle("#10b981")
  }, [_c("lucide-icon", {
    attrs: {
      name: "tag"
    }
  })], 1), _vm._v(" "), _c("div", [_c("div", {
    style: _vm.statLabelStyle
  }, [_vm._v(_vm._s(_vm.$t("Price")))]), _vm._v(" "), _c("div", {
    style: _vm.statValueStyle
  }, [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser && _vm.currentUser.currency, _vm.product.price, 2)))])])]), _vm._v(" "), _c("div", {
    style: _vm.statCardStyle("#f59e0b", "#fffbeb")
  }, [_c("div", {
    style: _vm.statIconStyle("#f59e0b")
  }, [_c("lucide-icon", {
    attrs: {
      name: "store"
    }
  })], 1), _vm._v(" "), _c("div", [_c("div", {
    style: _vm.statLabelStyle
  }, [_vm._v(_vm._s(_vm.$t("Wholesale_Price")))]), _vm._v(" "), _c("div", {
    style: _vm.statValueStyle
  }, [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser && _vm.currentUser.currency, _vm.product.wholesale_price, 2)))])])]), _vm._v(" "), _c("div", {
    style: _vm.statCardStyle("#ef4444", "#fef2f2")
  }, [_c("div", {
    style: _vm.statIconStyle("#ef4444")
  }, [_c("lucide-icon", {
    attrs: {
      name: "chevron-down"
    }
  })], 1), _vm._v(" "), _c("div", [_c("div", {
    style: _vm.statLabelStyle
  }, [_vm._v(_vm._s(_vm.$t("MinPrice")))]), _vm._v(" "), _c("div", {
    style: _vm.statValueStyle
  }, [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser && _vm.currentUser.currency, _vm.product.min_price, 2)))])])]), _vm._v(" "), _vm.product.type != "is_service" ? _c("div", {
    style: _vm.statCardStyle("#0ea5e9", "#f0f9ff")
  }, [_c("div", {
    style: _vm.statIconStyle("#0ea5e9")
  }, [_c("lucide-icon", {
    attrs: {
      name: "bell"
    }
  })], 1), _vm._v(" "), _c("div", [_c("div", {
    style: _vm.statLabelStyle
  }, [_vm._v(_vm._s(_vm.$t("StockAlert")))]), _vm._v(" "), _c("div", {
    style: _vm.statValueStyle
  }, [_vm._v(_vm._s(_vm.formatNumber(_vm.product.stock_alert, 2)))])])]) : _vm._e(), _vm._v(" "), _vm.product.points ? _c("div", {
    style: _vm.statCardStyle("#8b5cf6", "#f5f3ff")
  }, [_c("div", {
    style: _vm.statIconStyle("#8b5cf6")
  }, [_c("lucide-icon", {
    attrs: {
      name: "medal"
    }
  })], 1), _vm._v(" "), _c("div", [_c("div", {
    style: _vm.statLabelStyle
  }, [_vm._v(_vm._s(_vm.$t("Points") || "Points"))]), _vm._v(" "), _c("div", {
    style: _vm.statValueStyle
  }, [_vm._v(_vm._s(_vm.product.points))])])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "pd-main-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1fr)",
      gap: "24px",
      marginBottom: "24px"
    }
  }, [_c("div", [_vm.product.type != "is_variant" && _vm.product.code ? _c("div", {
    style: _vm.cardStyle
  }, [_c("div", {
    style: _vm.cardHeaderStyle
  }, [_c("lucide-icon", {
    style: {
      marginRight: "8px",
      color: "#4f46e5"
    },
    attrs: {
      name: "barcode"
    }
  }), _vm._v("\n              " + _vm._s(_vm.$t("Barcode") || "Barcode") + "\n            ")], 1), _vm._v(" "), _c("div", {
    style: {
      padding: "20px",
      textAlign: "center"
    }
  }, [_c("barcode", {
    staticClass: "barcode",
    attrs: {
      format: _vm.product.Type_barcode,
      value: _vm.product.code,
      textmargin: "0",
      fontoptions: "bold"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c("div", {
    style: _vm.cardStyle
  }, [_c("div", {
    style: _vm.cardHeaderStyle
  }, [_c("lucide-icon", {
    style: {
      marginRight: "8px",
      color: "#4f46e5"
    },
    attrs: {
      name: "info"
    }
  }), _vm._v("\n              " + _vm._s(_vm.$t("ProductDetails")) + "\n            ")], 1), _vm._v(" "), _c("div", {
    style: {
      padding: "8px 20px 20px 20px"
    }
  }, [_c("div", {
    staticClass: "pd-info-grid",
    style: _vm.infoGrid
  }, [_c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v(_vm._s(_vm.$t("type")))]), _c("span", {
    style: _vm.infoVal
  }, [_vm._v(_vm._s(_vm.product.type_name))])]), _vm._v(" "), _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v(_vm._s(_vm.$t("CodeProduct")))]), _c("span", {
    style: _vm.infoVal
  }, [_vm._v(_vm._s(_vm.product.code))])]), _vm._v(" "), _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v(_vm._s(_vm.$t("ProductName")))]), _c("span", {
    style: _vm.infoVal
  }, [_vm._v(_vm._s(_vm.product.name))])]), _vm._v(" "), _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v(_vm._s(_vm.$t("Categorie")))]), _c("span", {
    style: _vm.infoVal
  }, [_vm._v(_vm._s(_vm.categoriesLine || "—"))])]), _vm._v(" "), _vm.subcategoriesLine ? _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v(_vm._s(_vm.$t("SubCategory")))]), _c("span", {
    style: _vm.infoVal
  }, [_vm._v(_vm._s(_vm.subcategoriesLine))])]) : _vm._e(), _vm._v(" "), _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v(_vm._s(_vm.$t("Brand")))]), _c("span", {
    style: _vm.infoVal
  }, [_vm._v(_vm._s(_vm.product.brand))])]), _vm._v(" "), _vm.product.type == "is_single" || _vm.product.type == "is_combo" ? _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v(_vm._s(_vm.$t("Cost")))]), _vm._v(" "), _c("span", {
    style: _vm.infoValAccent("#4f46e5")
  }, [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser && _vm.currentUser.currency, _vm.product.cost, 2)))])]) : _vm._e(), _vm._v(" "), _vm.product.type != "is_variant" ? _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v(_vm._s(_vm.$t("Price")))]), _vm._v(" "), _c("span", {
    style: _vm.infoValAccent("#10b981")
  }, [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser && _vm.currentUser.currency, _vm.product.price, 2)))])]) : _vm._e(), _vm._v(" "), _vm.product.type != "is_variant" ? _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v(_vm._s(_vm.$t("Wholesale_Price")))]), _vm._v(" "), _c("span", {
    style: _vm.infoValAccent("#f59e0b")
  }, [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser && _vm.currentUser.currency, _vm.product.wholesale_price, 2)))])]) : _vm._e(), _vm._v(" "), _vm.product.type != "is_variant" ? _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v(_vm._s(_vm.$t("MinPrice")))]), _vm._v(" "), _c("span", {
    style: _vm.infoValAccent("#ef4444")
  }, [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser && _vm.currentUser.currency, _vm.product.min_price, 2)))])]) : _vm._e(), _vm._v(" "), _vm.product.type != "is_service" ? _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v(_vm._s(_vm.$t("Unit")))]), _vm._v(" "), _c("span", {
    style: _vm.infoVal
  }, [_vm._v(_vm._s(_vm.product.unit))])]) : _vm._e(), _vm._v(" "), _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v(_vm._s(_vm.$t("Tax")))]), _vm._v(" "), _c("span", {
    style: _vm.infoVal
  }, [_vm._v(_vm._s(_vm.formatNumber(_vm.product.taxe, 2)) + " %")])]), _vm._v(" "), _vm.product.taxe != "0.00" ? _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v(_vm._s(_vm.$t("TaxMethod")))]), _vm._v(" "), _c("span", {
    style: _objectSpread(_objectSpread({}, _vm.infoVal), _vm.pillStyle(_vm.product.tax_method === "Exclusive" ? "#0ea5e9" : "#8b5cf6"))
  }, [_vm._v(_vm._s(_vm.product.tax_method))])]) : _vm._e(), _vm._v(" "), _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v(_vm._s(_vm.$t("Discount")))]), _vm._v(" "), _c("span", {
    style: _objectSpread(_objectSpread({}, _vm.infoVal), _vm.pillStyle("#ef4444"))
  }, [_vm._v(_vm._s(_vm.product.discount))])]), _vm._v(" "), _vm.product.type != "is_service" ? _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v(_vm._s(_vm.$t("StockAlert")))]), _vm._v(" "), _c("span", {
    style: _objectSpread(_objectSpread({}, _vm.infoVal), _vm.pillStyle("#f59e0b"))
  }, [_vm._v(_vm._s(_vm.formatNumber(_vm.product.stock_alert, 2)))])]) : _vm._e(), _vm._v(" "), _vm.product.type != "is_service" && _vm.product.weight ? _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v(_vm._s(_vm.$t("Weight")))]), _vm._v(" "), _c("span", {
    style: _vm.infoVal
  }, [_vm._v(_vm._s(_vm.formatNumber(_vm.product.weight, 2)))])]) : _vm._e(), _vm._v(" "), _vm.product.points ? _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v(_vm._s(_vm.$t("Points") || "Points"))]), _vm._v(" "), _c("span", {
    style: _objectSpread(_objectSpread({}, _vm.infoVal), _vm.pillStyle("#8b5cf6"))
  }, [_vm._v(_vm._s(_vm.product.points))])]) : _vm._e(), _vm._v(" "), _vm.product.Type_barcode ? _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v(_vm._s(_vm.$t("BarcodeSymbology") || "Barcode Type"))]), _vm._v(" "), _c("span", {
    style: _vm.infoVal
  }, [_vm._v(_vm._s(_vm.product.Type_barcode))])]) : _vm._e()])])]), _vm._v(" "), _vm.isJewelryItem ? _c("div", {
    style: _vm.cardStyle
  }, [_c("div", {
    style: _vm.cardHeaderStyle
  }, [_c("lucide-icon", {
    style: {
      marginRight: "8px",
      color: "#f59e0b"
    },
    attrs: {
      name: "tag"
    }
  }), _vm._v("\n              Jewelry Specification\n            ")], 1), _vm._v(" "), _c("div", {
    style: {
      padding: "8px 20px 20px 20px"
    }
  }, [_c("div", {
    staticClass: "pd-info-grid",
    style: _vm.infoGrid
  }, [_c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v("Jewelry Item Type")]), _c("span", {
    style: _vm.infoVal
  }, [_vm._v(_vm._s(_vm.product.jewelry_item_type || "—"))])]), _vm._v(" "), _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v("Metal Type")]), _c("span", {
    style: _vm.infoVal
  }, [_vm._v(_vm._s(_vm.product.metal_type || "—"))])]), _vm._v(" "), _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v("Karat")]), _c("span", {
    style: _vm.infoVal
  }, [_vm._v(_vm._s(_vm.product.karat || "—"))])]), _vm._v(" "), _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v("Gross Weight")]), _c("span", {
    style: _vm.infoVal
  }, [_vm._v(_vm._s(_vm.product.jewelry_gross_weight_display || "—"))])]), _vm._v(" "), _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v("Net Weight")]), _c("span", {
    style: _vm.infoVal
  }, [_vm._v(_vm._s(_vm.product.jewelry_net_weight_display || "—"))])]), _vm._v(" "), _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v("Metal Weight")]), _c("span", {
    style: _vm.infoVal
  }, [_vm._v(_vm._s(_vm.product.jewelry_metal_weight_display || "—"))])]), _vm._v(" "), _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v("Hallmark Reference")]), _c("span", {
    style: _vm.infoVal
  }, [_vm._v(_vm._s(_vm.product.hallmark_reference || "—"))])]), _vm._v(" "), _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v("Certificate Number")]), _c("span", {
    style: _vm.infoVal
  }, [_vm._v(_vm._s(_vm.product.certificate_number || "—"))])]), _vm._v(" "), _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v("Making Charge")]), _c("span", {
    style: _vm.infoVal
  }, [_vm._v(_vm._s(_vm.product.making_charge_type || "—")), _vm.product.making_charge_value !== null && _vm.product.making_charge_value !== "" ? _c("span", [_vm._v(" • " + _vm._s(_vm.formatPriceWithSymbol(_vm.currentUser && _vm.currentUser.currency, _vm.product.making_charge_value, 2)))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v("Wastage")]), _c("span", {
    style: _vm.infoVal
  }, [_vm._v(_vm._s(_vm.product.wastage_type || "—")), _vm.product.wastage_value !== null && _vm.product.wastage_value !== "" ? _c("span", [_vm._v(" • " + _vm._s(_vm.product.wastage_value))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v("Stone Value")]), _c("span", {
    style: _vm.infoValAccent("#7c3aed")
  }, [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser && _vm.currentUser.currency, _vm.jewelryStoneTotal, 2)))])])])])]) : _vm._e(), _vm._v(" "), _vm.isJewelryItem ? _c("div", {
    style: _vm.cardStyle
  }, [_c("div", {
    style: _vm.cardHeaderStyle
  }, [_c("lucide-icon", {
    style: {
      marginRight: "8px",
      color: "#7c3aed"
    },
    attrs: {
      name: "sparkles"
    }
  }), _vm._v("\n              Stones & Certificates\n            ")], 1), _vm._v(" "), _c("div", {
    style: {
      padding: "20px"
    }
  }, [!_vm.jewelryStoneLines.length ? _c("div", {
    staticClass: "text-muted small"
  }, [_vm._v("No stone rows were recorded for this jewelry item.")]) : _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    style: _vm.tableStyle
  }, [_c("thead", [_c("tr", [_c("th", {
    style: _vm.thStyle
  }, [_vm._v("Stone")]), _vm._v(" "), _c("th", {
    style: _vm.thStyle
  }, [_vm._v("Qty")]), _vm._v(" "), _c("th", {
    style: _vm.thStyle
  }, [_vm._v("Carat")]), _vm._v(" "), _c("th", {
    style: _vm.thStyle
  }, [_vm._v("Color")]), _vm._v(" "), _c("th", {
    style: _vm.thStyle
  }, [_vm._v("Clarity")]), _vm._v(" "), _c("th", {
    style: _vm.thStyle
  }, [_vm._v("Certificate")]), _vm._v(" "), _c("th", {
    style: _objectSpread(_objectSpread({}, _vm.thStyle), {}, {
      textAlign: "right"
    })
  }, [_vm._v("Total Cost")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.jewelryStoneLines, function (stone, idx) {
    return _c("tr", {
      key: stone.id || idx,
      style: _vm.trHover
    }, [_c("td", {
      style: _vm.tdStyle
    }, [_vm._v(_vm._s(stone.stone_type_name || stone.stone_name || "—"))]), _vm._v(" "), _c("td", {
      style: _vm.tdStyle
    }, [_vm._v(_vm._s(stone.quantity || 0))]), _vm._v(" "), _c("td", {
      style: _vm.tdStyle
    }, [_vm._v(_vm._s(stone.carat_value || "—"))]), _vm._v(" "), _c("td", {
      style: _vm.tdStyle
    }, [_vm._v(_vm._s(stone.color || "—"))]), _vm._v(" "), _c("td", {
      style: _vm.tdStyle
    }, [_vm._v(_vm._s(stone.clarity || "—"))]), _vm._v(" "), _c("td", {
      style: _vm.tdStyle
    }, [_vm._v(_vm._s(stone.certificate_number || "—"))]), _vm._v(" "), _c("td", {
      style: _objectSpread(_objectSpread({}, _vm.tdStyle), {}, {
        textAlign: "right"
      })
    }, [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser && _vm.currentUser.currency, stone.total_cost_amount || 0, 2)))])]);
  }), 0)])])])]) : _vm._e(), _vm._v(" "), _vm.isJewelryItem ? _c("div", {
    style: _vm.cardStyle
  }, [_c("div", {
    style: _vm.cardHeaderStyle
  }, [_c("lucide-icon", {
    style: {
      marginRight: "8px",
      color: "#0ea5e9"
    },
    attrs: {
      name: "history"
    }
  }), _vm._v("\n              Movement History\n            ")], 1), _vm._v(" "), _c("div", {
    style: {
      padding: "20px"
    }
  }, [!(_vm.product.movement_history && _vm.product.movement_history.length) ? _c("div", {
    staticClass: "text-muted small"
  }, [_vm._v("No inventory movements recorded yet for this item.")]) : _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    style: _vm.tableStyle
  }, [_c("thead", [_c("tr", [_c("th", {
    style: _vm.thStyle
  }, [_vm._v("Date")]), _vm._v(" "), _c("th", {
    style: _vm.thStyle
  }, [_vm._v("Type")]), _vm._v(" "), _c("th", {
    style: _vm.thStyle
  }, [_vm._v("Warehouse")]), _vm._v(" "), _c("th", {
    style: _vm.thStyle
  }, [_vm._v("Location")]), _vm._v(" "), _c("th", {
    style: _objectSpread(_objectSpread({}, _vm.thStyle), {}, {
      textAlign: "right"
    })
  }, [_vm._v("Qty Δ")]), _vm._v(" "), _c("th", {
    style: _objectSpread(_objectSpread({}, _vm.thStyle), {}, {
      textAlign: "right"
    })
  }, [_vm._v("Weight Δ")]), _vm._v(" "), _c("th", {
    style: _vm.thStyle
  }, [_vm._v("User")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.product.movement_history, function (m) {
    return _c("tr", {
      key: m.id,
      style: _vm.trHover
    }, [_c("td", {
      style: _vm.tdStyle
    }, [_vm._v(_vm._s(m.date))]), _vm._v(" "), _c("td", {
      style: _vm.tdStyle
    }, [_vm._v(_vm._s(m.movement_type))]), _vm._v(" "), _c("td", {
      style: _vm.tdStyle
    }, [_vm._v(_vm._s(m.warehouse || "—"))]), _vm._v(" "), _c("td", {
      style: _vm.tdStyle
    }, [_vm._v(_vm._s(m.location || "—"))]), _vm._v(" "), _c("td", {
      style: _objectSpread(_objectSpread({}, _vm.tdStyle), {}, {
        textAlign: "right"
      })
    }, [_vm._v(_vm._s(m.quantity_delta))]), _vm._v(" "), _c("td", {
      style: _objectSpread(_objectSpread({}, _vm.tdStyle), {}, {
        textAlign: "right"
      })
    }, [_vm._v(_vm._s(m.weight_delta !== null ? m.weight_delta : "—"))]), _vm._v(" "), _c("td", {
      style: _vm.tdStyle
    }, [_vm._v(_vm._s(m.user || "—"))])]);
  }), 0)])])])]) : _vm._e(), _vm._v(" "), _vm.isJewelryItem ? _c("div", {
    style: _vm.cardStyle
  }, [_c("div", {
    style: _vm.cardHeaderStyle
  }, [_c("lucide-icon", {
    style: {
      marginRight: "8px",
      color: "#f59e0b"
    },
    attrs: {
      name: "shopping-cart"
    }
  }), _vm._v("\n              Purchase History\n            ")], 1), _vm._v(" "), _c("div", {
    style: {
      padding: "20px"
    }
  }, [!(_vm.product.purchase_history && _vm.product.purchase_history.length) ? _c("div", {
    staticClass: "text-muted small"
  }, [_vm._v("No purchase records found for this item.")]) : _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    style: _vm.tableStyle
  }, [_c("thead", [_c("tr", [_c("th", {
    style: _vm.thStyle
  }, [_vm._v("Ref")]), _vm._v(" "), _c("th", {
    style: _vm.thStyle
  }, [_vm._v("Date")]), _vm._v(" "), _c("th", {
    style: _vm.thStyle
  }, [_vm._v("Supplier")]), _vm._v(" "), _c("th", {
    style: _objectSpread(_objectSpread({}, _vm.thStyle), {}, {
      textAlign: "right"
    })
  }, [_vm._v("Qty")]), _vm._v(" "), _c("th", {
    style: _objectSpread(_objectSpread({}, _vm.thStyle), {}, {
      textAlign: "right"
    })
  }, [_vm._v("Total")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.product.purchase_history, function (p) {
    return _c("tr", {
      key: "pur-" + p.id,
      style: _vm.trHover
    }, [_c("td", {
      style: _vm.tdStyle
    }, [_vm._v(_vm._s(p.ref || "—"))]), _vm._v(" "), _c("td", {
      style: _vm.tdStyle
    }, [_vm._v(_vm._s(p.date))]), _vm._v(" "), _c("td", {
      style: _vm.tdStyle
    }, [_vm._v(_vm._s(p.provider || "—"))]), _vm._v(" "), _c("td", {
      style: _objectSpread(_objectSpread({}, _vm.tdStyle), {}, {
        textAlign: "right"
      })
    }, [_vm._v(_vm._s(p.quantity))]), _vm._v(" "), _c("td", {
      style: _objectSpread(_objectSpread({}, _vm.tdStyle), {}, {
        textAlign: "right"
      })
    }, [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser && _vm.currentUser.currency, p.total || 0, 2)))])]);
  }), 0)])])])]) : _vm._e(), _vm._v(" "), _vm.isJewelryItem ? _c("div", {
    style: _vm.cardStyle
  }, [_c("div", {
    style: _vm.cardHeaderStyle
  }, [_c("lucide-icon", {
    style: {
      marginRight: "8px",
      color: "#ef4444"
    },
    attrs: {
      name: "receipt"
    }
  }), _vm._v("\n              Sales History\n            ")], 1), _vm._v(" "), _c("div", {
    style: {
      padding: "20px"
    }
  }, [!(_vm.product.sales_history && _vm.product.sales_history.length) ? _c("div", {
    staticClass: "text-muted small"
  }, [_vm._v("No sales records found for this item.")]) : _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    style: _vm.tableStyle
  }, [_c("thead", [_c("tr", [_c("th", {
    style: _vm.thStyle
  }, [_vm._v("Ref")]), _vm._v(" "), _c("th", {
    style: _vm.thStyle
  }, [_vm._v("Date")]), _vm._v(" "), _c("th", {
    style: _vm.thStyle
  }, [_vm._v("Client")]), _vm._v(" "), _c("th", {
    style: _objectSpread(_objectSpread({}, _vm.thStyle), {}, {
      textAlign: "right"
    })
  }, [_vm._v("Qty")]), _vm._v(" "), _c("th", {
    style: _objectSpread(_objectSpread({}, _vm.thStyle), {}, {
      textAlign: "right"
    })
  }, [_vm._v("Total")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.product.sales_history, function (s) {
    return _c("tr", {
      key: "sale-" + s.id,
      style: _vm.trHover
    }, [_c("td", {
      style: _vm.tdStyle
    }, [_vm._v(_vm._s(s.ref || "—"))]), _vm._v(" "), _c("td", {
      style: _vm.tdStyle
    }, [_vm._v(_vm._s(s.date))]), _vm._v(" "), _c("td", {
      style: _vm.tdStyle
    }, [_vm._v(_vm._s(s.client || "—"))]), _vm._v(" "), _c("td", {
      style: _objectSpread(_objectSpread({}, _vm.tdStyle), {}, {
        textAlign: "right"
      })
    }, [_vm._v(_vm._s(s.quantity))]), _vm._v(" "), _c("td", {
      style: _objectSpread(_objectSpread({}, _vm.tdStyle), {}, {
        textAlign: "right"
      })
    }, [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser && _vm.currentUser.currency, s.total || 0, 2)))])]);
  }), 0)])])])]) : _vm._e(), _vm._v(" "), _vm.isJewelryItem ? _c("div", {
    style: _vm.cardStyle
  }, [_c("div", {
    style: _vm.cardHeaderStyle
  }, [_c("lucide-icon", {
    style: {
      marginRight: "8px",
      color: "#10b981"
    },
    attrs: {
      name: "calculator"
    }
  }), _vm._v("\n              Current Price & Rate Used\n            ")], 1), _vm._v(" "), _c("div", {
    style: {
      padding: "20px"
    }
  }, [_c("PricingPreview", {
    attrs: {
      "product-id": _vm.product.id,
      "product-data": _vm.product,
      "currency-symbol": _vm.currentUser && _vm.currentUser.currency || "",
      "price-decimals": _vm.priceDecimals
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.product.warranty_period || _vm.product.warranty_terms || _vm.product.has_guarantee ? _c("div", {
    style: _vm.cardStyle
  }, [_c("div", {
    style: _vm.cardHeaderStyle
  }, [_c("lucide-icon", {
    style: {
      marginRight: "8px",
      color: "#0ea5e9"
    },
    attrs: {
      name: "shield"
    }
  }), _vm._v("\n              " + _vm._s(_vm.$t("Warranty") || "Warranty & Guarantee") + "\n            ")], 1), _vm._v(" "), _c("div", {
    style: {
      padding: "8px 20px 20px 20px"
    }
  }, [_c("div", {
    staticClass: "pd-info-grid",
    style: _vm.infoGrid
  }, [_vm.product.warranty_period !== null && _vm.product.warranty_period ? _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v(_vm._s(_vm.$t("Warranty_Period")))]), _vm._v(" "), _c("span", {
    style: _objectSpread(_objectSpread({}, _vm.infoVal), _vm.pillStyle("#0ea5e9"))
  }, [_vm._v("\n                    " + _vm._s(_vm.product.warranty_period) + " " + _vm._s(_vm.$t(_vm.product.warranty_unit)) + "\n                  ")])]) : _vm._e(), _vm._v(" "), _vm.product.warranty_terms ? _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v(_vm._s(_vm.$t("WarrantyTerms")))]), _vm._v(" "), _c("span", {
    style: _vm.infoVal
  }, [_vm._v(_vm._s(_vm.product.warranty_terms))])]) : _vm._e(), _vm._v(" "), _vm.product.has_guarantee ? _c("div", {
    style: _vm.infoRow
  }, [_c("span", {
    style: _vm.infoKey
  }, [_vm._v(_vm._s(_vm.$t("Guarantee_Period")))]), _vm._v(" "), _c("span", {
    style: _objectSpread(_objectSpread({}, _vm.infoVal), _vm.pillStyle("#10b981"))
  }, [_vm._v("\n                    " + _vm._s(_vm.product.guarantee_period) + " " + _vm._s(_vm.$t(_vm.product.guarantee_unit)) + "\n                  ")])]) : _vm._e()])])]) : _vm._e(), _vm._v(" "), _vm.product.note ? _c("div", {
    style: _vm.cardStyle
  }, [_c("div", {
    style: _vm.cardHeaderStyle
  }, [_c("lucide-icon", {
    style: {
      marginRight: "8px",
      color: "#8b5cf6"
    },
    attrs: {
      name: "file-pen"
    }
  }), _vm._v("\n              " + _vm._s(_vm.$t("Note") || "Note") + "\n            ")], 1), _vm._v(" "), _c("div", {
    style: {
      padding: "20px",
      color: _vm.pdTheme.noteText,
      lineHeight: "1.6",
      whiteSpace: "pre-wrap",
      background: _vm.pdTheme.noteBg,
      margin: "0 20px 20px 20px",
      borderRadius: "10px",
      borderLeft: "4px solid #8b5cf6"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.product.note) + "\n            ")])]) : _vm._e()]), _vm._v(" "), _c("div", [_c("div", {
    style: _vm.cardStyle
  }, [_c("div", {
    style: _vm.cardHeaderStyle
  }, [_c("lucide-icon", {
    style: {
      marginRight: "8px",
      color: "#10b981"
    },
    attrs: {
      name: "image"
    }
  }), _vm._v("\n              " + _vm._s(_vm.$t("Images") || "Gallery") + "\n              "), _vm.productImages.length ? _c("span", {
    style: {
      marginLeft: "8px",
      background: "#10b981",
      color: "#fff",
      fontSize: "11px",
      padding: "2px 8px",
      borderRadius: "999px"
    }
  }, [_vm._v(_vm._s(_vm.productImages.length))]) : _vm._e()], 1), _vm._v(" "), _c("div", {
    style: {
      padding: "20px"
    }
  }, [_c("div", {
    staticClass: "pd-gallery-stage",
    style: {
      width: "100%",
      height: "320px",
      borderRadius: "12px",
      overflow: "hidden",
      background: _vm.pdTheme.galleryFrameBg,
      border: "1px solid ".concat(_vm.pdTheme.galleryFrameBorder),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "12px"
    }
  }, [_c("img", {
    staticClass: "pd-gallery-stage__img",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    attrs: {
      src: _vm.$imgUrl("products", _vm.activeImage),
      alt: _vm.product.name
    },
    on: {
      error: _vm.onImgError
    }
  })]), _vm._v(" "), _vm.productImages.length > 1 ? _c("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(64px, 1fr))",
      gap: "8px"
    }
  }, _vm._l(_vm.productImages, function (img, idx) {
    return _c("div", {
      key: idx,
      staticClass: "pd-gallery-thumb",
      style: {
        width: "100%",
        paddingTop: "100%",
        position: "relative",
        borderRadius: "8px",
        overflow: "hidden",
        cursor: "pointer",
        border: _vm.activeImageIndex === idx ? "2px solid #4f46e5" : "2px solid transparent",
        boxShadow: _vm.activeImageIndex === idx ? "0 2px 8px rgba(79,70,229,0.25)" : "0 1px 3px rgba(0,0,0,0.05)",
        transition: "all 0.2s"
      },
      on: {
        click: function click($event) {
          _vm.activeImageIndex = idx;
        }
      }
    }, [_c("img", {
      staticClass: "pd-gallery-thumb__img",
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        background: _vm.pdTheme.thumbInnerBg
      },
      attrs: {
        src: _vm.$imgUrl("products", img)
      },
      on: {
        error: _vm.onImgError
      }
    })]);
  }), 0) : _vm._e()])])])]), _vm._v(" "), _vm.product.type == "is_combo" && _vm.product.products_combo_data && _vm.product.products_combo_data.length ? _c("div", {
    style: _vm.cardStyle
  }, [_c("div", {
    style: _vm.cardHeaderStyle
  }, [_c("lucide-icon", {
    style: {
      marginRight: "8px",
      color: "#f59e0b"
    },
    attrs: {
      name: "receipt-text"
    }
  }), _vm._v("\n          " + _vm._s(_vm.$t("Combined_Products") || "Combined Products") + "\n        ")], 1), _vm._v(" "), _c("div", {
    style: {
      padding: "8px 20px 20px 20px",
      overflowX: "auto"
    }
  }, [_c("table", {
    style: _vm.tableStyle
  }, [_c("thead", [_c("tr", [_c("th", {
    style: _vm.thStyle
  }, [_vm._v(_vm._s(_vm.$t("Product_Code") || "Product Code"))]), _vm._v(" "), _c("th", {
    style: _vm.thStyle
  }, [_vm._v(_vm._s(_vm.$t("Product_Name") || "Product Name"))]), _vm._v(" "), _c("th", {
    style: _objectSpread(_objectSpread({}, _vm.thStyle), {}, {
      textAlign: "right"
    })
  }, [_vm._v(_vm._s(_vm.$t("Quantity")))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.product.products_combo_data, function (pc, i) {
    return _c("tr", {
      key: i,
      style: _vm.trHover
    }, [_c("td", {
      style: _vm.tdStyle
    }, [_c("code", {
      style: _vm.codeStyle
    }, [_vm._v(_vm._s(pc.code))])]), _vm._v(" "), _c("td", {
      style: _vm.tdStyle
    }, [_vm._v(_vm._s(pc.name))]), _vm._v(" "), _c("td", {
      style: _objectSpread(_objectSpread({}, _vm.tdStyle), {}, {
        textAlign: "right",
        fontWeight: "600"
      })
    }, [_vm._v(_vm._s(pc.quantity))])]);
  }), 0)])])]) : _vm._e(), _vm._v(" "), _vm.product.type == "is_variant" && _vm.product.products_variants_data && _vm.product.products_variants_data.length ? _c("div", {
    style: _vm.cardStyle
  }, [_c("div", {
    style: _vm.cardHeaderStyle
  }, [_c("lucide-icon", {
    style: {
      marginRight: "8px",
      color: "#7c3aed"
    },
    attrs: {
      name: "columns-2"
    }
  }), _vm._v("\n          " + _vm._s(_vm.$t("Variants") || "Variants") + "\n        ")], 1), _vm._v(" "), _c("div", {
    style: {
      padding: "8px 20px 20px 20px",
      overflowX: "auto"
    }
  }, [_c("table", {
    style: _vm.tableStyle
  }, [_c("thead", [_c("tr", [_c("th", {
    style: _vm.thStyle
  }, [_vm._v(_vm._s(_vm.$t("Variant_code")))]), _vm._v(" "), _c("th", {
    style: _vm.thStyle
  }, [_vm._v(_vm._s(_vm.$t("Variant_Name")))]), _vm._v(" "), _c("th", {
    style: _objectSpread(_objectSpread({}, _vm.thStyle), {}, {
      textAlign: "right"
    })
  }, [_vm._v(_vm._s(_vm.$t("Variant_cost")))]), _vm._v(" "), _c("th", {
    style: _objectSpread(_objectSpread({}, _vm.thStyle), {}, {
      textAlign: "right"
    })
  }, [_vm._v(_vm._s(_vm.$t("Variant_price")))]), _vm._v(" "), _c("th", {
    style: _objectSpread(_objectSpread({}, _vm.thStyle), {}, {
      textAlign: "right"
    })
  }, [_vm._v(_vm._s(_vm.$t("Wholesale_Price")))]), _vm._v(" "), _c("th", {
    style: _objectSpread(_objectSpread({}, _vm.thStyle), {}, {
      textAlign: "right"
    })
  }, [_vm._v(_vm._s(_vm.$t("Min_Selling_Price")))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.product.products_variants_data, function (v, i) {
    return _c("tr", {
      key: i,
      style: _vm.trHover
    }, [_c("td", {
      style: _vm.tdStyle
    }, [_c("code", {
      style: _vm.codeStyle
    }, [_vm._v(_vm._s(v.code))])]), _vm._v(" "), _c("td", {
      style: _vm.tdStyle
    }, [_vm._v(_vm._s(v.name))]), _vm._v(" "), _c("td", {
      style: _objectSpread(_objectSpread({}, _vm.tdStyle), {}, {
        textAlign: "right",
        color: "#4f46e5"
      })
    }, [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser && _vm.currentUser.currency, v.cost, 2)))]), _vm._v(" "), _c("td", {
      style: _objectSpread(_objectSpread({}, _vm.tdStyle), {}, {
        textAlign: "right",
        color: "#10b981",
        fontWeight: "600"
      })
    }, [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser && _vm.currentUser.currency, v.price, 2)))]), _vm._v(" "), _c("td", {
      style: _objectSpread(_objectSpread({}, _vm.tdStyle), {}, {
        textAlign: "right",
        color: "#f59e0b"
      })
    }, [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser && _vm.currentUser.currency, v.wholesale, 2)))]), _vm._v(" "), _c("td", {
      style: _objectSpread(_objectSpread({}, _vm.tdStyle), {}, {
        textAlign: "right",
        color: "#ef4444"
      })
    }, [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser && _vm.currentUser.currency, v.min_price, 2)))])]);
  }), 0)])])]) : _vm._e(), _vm._v(" "), _vm.product.type == "is_single" && _vm.product.CountQTY && _vm.product.CountQTY.length ? _c("div", {
    style: _vm.cardStyle
  }, [_c("div", {
    staticClass: "pd-card-header",
    style: _vm.cardHeaderStyle
  }, [_c("lucide-icon", {
    style: {
      marginRight: "8px",
      color: "#0ea5e9"
    },
    attrs: {
      name: "database"
    }
  }), _vm._v("\n          " + _vm._s(_vm.$t("Warehouse_Stock") || "Warehouse Stock") + "\n          "), _c("span", {
    style: {
      marginLeft: "auto",
      background: "#0ea5e9",
      color: "#fff",
      fontSize: "12px",
      padding: "2px 10px",
      borderRadius: "999px",
      fontWeight: "600"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Total") || "Total") + ": " + _vm._s(_vm.formatNumber(_vm.totalStock, 2)) + " " + _vm._s(_vm.product.unit) + "\n          ")])], 1), _vm._v(" "), _c("div", {
    style: {
      padding: "20px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "12px"
    }
  }, _vm._l(_vm.product.CountQTY, function (w, i) {
    return _c("div", {
      key: i,
      style: {
        background: _vm.pdTheme.warehouseCardBg,
        border: "1px solid ".concat(_vm.pdTheme.warehouseCardBorder),
        borderRadius: "12px",
        padding: "14px 16px",
        display: "flex",
        alignItems: "center",
        gap: "12px"
      }
    }, [_c("div", {
      style: {
        width: "40px",
        height: "40px",
        borderRadius: "10px",
        background: "#0ea5e9",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "18px",
        flexShrink: 0
      }
    }, [_c("lucide-icon", {
      attrs: {
        name: "store"
      }
    })], 1), _vm._v(" "), _c("div", {
      style: {
        flex: 1
      }
    }, [_c("div", {
      style: {
        fontSize: "12px",
        color: _vm.pdTheme.warehouseLabel,
        fontWeight: "600",
        textTransform: "uppercase"
      }
    }, [_vm._v(_vm._s(w.mag))]), _vm._v(" "), _c("div", {
      style: {
        fontSize: "18px",
        fontWeight: "700",
        color: _vm.pdTheme.warehouseValue
      }
    }, [_vm._v("\n                " + _vm._s(_vm.formatNumber(w.qte || 0, 2)) + "\n                "), _c("span", {
      style: {
        fontSize: "12px",
        color: _vm.pdTheme.warehouseUnit,
        fontWeight: "500"
      }
    }, [_vm._v(_vm._s(_vm.product.unit))])])])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.product.type == "is_variant" && _vm.product.CountQTY_variants && _vm.product.CountQTY_variants.length ? _c("div", {
    style: _vm.cardStyle
  }, [_c("div", {
    style: _vm.cardHeaderStyle
  }, [_c("lucide-icon", {
    style: {
      marginRight: "8px",
      color: "#0ea5e9"
    },
    attrs: {
      name: "database"
    }
  }), _vm._v("\n          " + _vm._s(_vm.$t("Warehouse_Variants_Stock") || "Warehouse Variants Stock") + "\n        ")], 1), _vm._v(" "), _c("div", {
    style: {
      padding: "8px 20px 20px 20px",
      overflowX: "auto"
    }
  }, [_c("table", {
    style: _vm.tableStyle
  }, [_c("thead", [_c("tr", [_c("th", {
    style: _vm.thStyle
  }, [_vm._v(_vm._s(_vm.$t("warehouse")))]), _vm._v(" "), _c("th", {
    style: _vm.thStyle
  }, [_vm._v(_vm._s(_vm.$t("Variant")))]), _vm._v(" "), _c("th", {
    style: _objectSpread(_objectSpread({}, _vm.thStyle), {}, {
      textAlign: "right"
    })
  }, [_vm._v(_vm._s(_vm.$t("Quantity")))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.product.CountQTY_variants, function (w, i) {
    return _c("tr", {
      key: i,
      style: _vm.trHover
    }, [_c("td", {
      style: _vm.tdStyle
    }, [_c("lucide-icon", {
      style: {
        color: "#0ea5e9",
        marginRight: "6px"
      },
      attrs: {
        name: "store"
      }
    }), _vm._v(_vm._s(w.mag) + "\n                ")], 1), _vm._v(" "), _c("td", {
      style: _vm.tdStyle
    }, [_c("span", {
      style: _vm.pillStyle("#7c3aed")
    }, [_vm._v(_vm._s(w.variant))])]), _vm._v(" "), _c("td", {
      style: _objectSpread(_objectSpread({}, _vm.tdStyle), {}, {
        textAlign: "right",
        fontWeight: "700",
        color: _vm.pdTheme.warehouseValue
      })
    }, [_vm._v("\n                  " + _vm._s(_vm.formatNumber(w.qte || 0, 2)) + " " + _vm._s(_vm.product.unit) + "\n                ")])]);
  }), 0)])])]) : _vm._e(), _vm._v(" "), _vm.product.is_batch_tracked ? _c("div", {
    style: _vm.cardStyle
  }, [_c("div", {
    staticClass: "pd-card-header",
    style: _vm.cardHeaderStyle
  }, [_c("lucide-icon", {
    style: {
      marginRight: "8px",
      color: "#4f46e5"
    },
    attrs: {
      name: "package"
    }
  }), _vm._v("\n          " + _vm._s(_vm.$t("Batches") || "Batches") + "\n          "), _c("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      flexWrap: "wrap"
    }
  }, [_c("span", {
    style: {
      background: "#4f46e5",
      color: "#fff",
      fontSize: "12px",
      padding: "2px 10px",
      borderRadius: "999px",
      fontWeight: "600"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.batches.length) + " " + _vm._s(_vm.$t("items") || "items") + "\n            ")]), _vm._v(" "), _vm.batches.length ? _c("span", {
    style: {
      background: "#0ea5e9",
      color: "#fff",
      fontSize: "12px",
      padding: "2px 10px",
      borderRadius: "999px",
      fontWeight: "600"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Total") || "Total") + ": " + _vm._s(_vm.formatNumber(_vm.batchesTotalQty, 2)) + " " + _vm._s(_vm.product.unit) + "\n            ")]) : _vm._e(), _vm._v(" "), _vm.batchesExpiredCount > 0 ? _c("span", {
    style: {
      background: "#ef4444",
      color: "#fff",
      fontSize: "12px",
      padding: "2px 10px",
      borderRadius: "999px",
      fontWeight: "600"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.batchesExpiredCount) + " " + _vm._s(_vm.$t("Expired") || "Expired") + "\n            ")]) : _vm._e(), _vm._v(" "), _vm.batchesNearExpiryCount > 0 ? _c("span", {
    style: {
      background: "#f59e0b",
      color: "#fff",
      fontSize: "12px",
      padding: "2px 10px",
      borderRadius: "999px",
      fontWeight: "600"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.batchesNearExpiryCount) + " " + _vm._s(_vm.$t("Near_Expiry") || "Near Expiry") + "\n            ")]) : _vm._e()])], 1), _vm._v(" "), _vm.batchesLoading ? _c("div", {
    style: {
      padding: "24px",
      textAlign: "center",
      color: _vm.pdTheme.keyColor
    }
  }, [_c("div", {
    staticClass: "spinner spinner-primary",
    style: {
      display: "inline-block",
      marginRight: "10px"
    }
  }), _vm._v("\n          " + _vm._s(_vm.$t("Loading") || "Loading...") + "\n        ")]) : !_vm.batches.length ? _c("div", {
    style: {
      padding: "24px",
      textAlign: "center",
      color: _vm.pdTheme.keyColor,
      fontStyle: "italic"
    }
  }, [_c("lucide-icon", {
    style: {
      marginRight: "6px"
    },
    attrs: {
      name: "info"
    }
  }), _vm._v("\n          " + _vm._s(_vm.$t("No_Batches_Available") || "No batches recorded for this product yet.") + "\n        ")], 1) : _c("div", {
    style: {
      padding: "8px 20px 20px 20px",
      overflowX: "auto"
    }
  }, [_c("table", {
    style: _vm.tableStyle
  }, [_c("thead", [_c("tr", [_c("th", {
    style: _vm.thStyle
  }, [_vm._v(_vm._s(_vm.$t("Batch_No") || "Batch No"))]), _vm._v(" "), _vm.hasAnyVariant ? _c("th", {
    style: _vm.thStyle
  }, [_vm._v(_vm._s(_vm.$t("Variant") || "Variant"))]) : _vm._e(), _vm._v(" "), _c("th", {
    style: _vm.thStyle
  }, [_vm._v(_vm._s(_vm.$t("warehouse") || "Warehouse"))]), _vm._v(" "), _c("th", {
    style: _vm.thStyle
  }, [_vm._v(_vm._s(_vm.$t("Mfg_Date") || "Mfg Date"))]), _vm._v(" "), _c("th", {
    style: _vm.thStyle
  }, [_vm._v(_vm._s(_vm.$t("Expiry_Date") || "Expiry Date"))]), _vm._v(" "), _c("th", {
    style: _objectSpread(_objectSpread({}, _vm.thStyle), {}, {
      textAlign: "right"
    })
  }, [_vm._v(_vm._s(_vm.$t("Quantity") || "Quantity"))]), _vm._v(" "), _c("th", {
    style: _objectSpread(_objectSpread({}, _vm.thStyle), {}, {
      textAlign: "right"
    })
  }, [_vm._v(_vm._s(_vm.$t("Cost") || "Cost"))]), _vm._v(" "), _c("th", {
    style: _objectSpread(_objectSpread({}, _vm.thStyle), {}, {
      textAlign: "center"
    })
  }, [_vm._v(_vm._s(_vm.$t("Status") || "Status"))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.batches, function (b) {
    return _c("tr", {
      key: b.id,
      style: _vm.trHover
    }, [_c("td", {
      style: _objectSpread(_objectSpread({}, _vm.tdStyle), {}, {
        fontWeight: "700",
        color: _vm.pdTheme.tableCellText
      })
    }, [_vm._v("\n                  " + _vm._s(b.batch_no || "—") + "\n                ")]), _vm._v(" "), _vm.hasAnyVariant ? _c("td", {
      style: _vm.tdStyle
    }, [b.variant_name ? _c("span", {
      style: _vm.pillStyle("#7c3aed")
    }, [_vm._v(_vm._s(b.variant_name))]) : _c("span", {
      style: {
        color: _vm.pdTheme.mutedColor
      }
    }, [_vm._v("—")])]) : _vm._e(), _vm._v(" "), _c("td", {
      style: _vm.tdStyle
    }, [_c("lucide-icon", {
      style: {
        color: "#0ea5e9",
        marginRight: "6px"
      },
      attrs: {
        name: "store"
      }
    }), _vm._v(_vm._s(b.warehouse_name || "—") + "\n                ")], 1), _vm._v(" "), _c("td", {
      style: _vm.tdStyle
    }, [b.mfg_date ? _c("span", [_vm._v(_vm._s(b.mfg_date))]) : _c("span", {
      style: {
        color: _vm.pdTheme.mutedColor
      }
    }, [_vm._v("—")])]), _vm._v(" "), _c("td", {
      style: _vm.tdStyle
    }, [b.expiry_date ? _c("span", {
      style: _vm.batchExpiryStyle(b.expiry_bucket)
    }, [_vm._v(_vm._s(b.expiry_date))]) : _c("span", {
      style: {
        color: _vm.pdTheme.mutedColor
      }
    }, [_vm._v("—")]), _vm._v(" "), b.expiry_date && Number.isFinite(b.days_to_expiry) ? _c("div", {
      style: {
        fontSize: "11px",
        color: _vm.pdTheme.keyColor,
        marginTop: "2px"
      }
    }, [b.days_to_expiry < 0 ? [_vm._v("\n                      " + _vm._s(_vm.$t("Expired") || "Expired") + " " + _vm._s(Math.abs(b.days_to_expiry)) + " " + _vm._s(_vm.$t("Days") || "days") + "\n                    ")] : [_vm._v("\n                      " + _vm._s(_vm.$t("Expires_in") || "Expires in") + " " + _vm._s(b.days_to_expiry) + " " + _vm._s(_vm.$t("Days") || "days") + "\n                    ")]], 2) : _vm._e()]), _vm._v(" "), _c("td", {
      style: _objectSpread(_objectSpread({}, _vm.tdStyle), {}, {
        textAlign: "right",
        fontWeight: "700",
        color: _vm.pdTheme.warehouseValue
      })
    }, [_vm._v("\n                  " + _vm._s(_vm.formatNumber(b.qty || 0, 2)) + " " + _vm._s(_vm.product.unit) + "\n                ")]), _vm._v(" "), _c("td", {
      style: _objectSpread(_objectSpread({}, _vm.tdStyle), {}, {
        textAlign: "right",
        color: _vm.isDarkMode ? "#a78bfa" : "#4f46e5",
        fontWeight: "600"
      })
    }, [b.unit_cost != null ? _c("span", [_vm._v(_vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.formatPriceDisplay(b.unit_cost, 2)))]) : _c("span", {
      style: {
        color: _vm.pdTheme.mutedColor
      }
    }, [_vm._v("—")])]), _vm._v(" "), _c("td", {
      style: _objectSpread(_objectSpread({}, _vm.tdStyle), {}, {
        textAlign: "center"
      })
    }, [_c("span", {
      style: _vm.batchStatusStyle(b.status)
    }, [_vm._v(_vm._s(b.status || "active"))])])]);
  }), 0)])])]) : _vm._e()])]) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./resources/src/utils/priceFormat.js"
/*!********************************************!*\
  !*** ./resources/src/utils/priceFormat.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/PricingPreview.vue?vue&type=style&index=0&id=72967f59&scoped=true&lang=css"
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/PricingPreview.vue?vue&type=style&index=0&id=72967f59&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.pricing-preview-card[data-v-72967f59] {\r\n  border: 1px solid #e5e7eb;\r\n  border-radius: 14px;\r\n  background: #fff;\r\n  padding: 1rem;\n}\n.pricing-preview-card__header[data-v-72967f59] {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n  gap: 1rem;\r\n  margin-bottom: 1rem;\n}\n.pricing-preview-card__title[data-v-72967f59] {\r\n  font-size: 1rem;\r\n  font-weight: 700;\r\n  color: #0f172a;\n}\n.pricing-preview-card__subtitle[data-v-72967f59] {\r\n  font-size: 0.875rem;\r\n  line-height: 1.5;\n}\n.pricing-preview-card__alert[data-v-72967f59] {\r\n  border-radius: 12px;\n}\n.pricing-preview-grid[data-v-72967f59] {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  gap: 0.75rem;\n}\n.pricing-preview-row[data-v-72967f59] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 1rem;\r\n  padding: 0.75rem 0.9rem;\r\n  border: 1px solid #eef2f7;\r\n  border-radius: 12px;\r\n  background: #f8fafc;\n}\n.pricing-preview-row--base[data-v-72967f59] {\r\n  grid-column: 1 / -1;\n}\n.pricing-preview-row__label[data-v-72967f59] {\r\n  color: #475569;\r\n  font-size: 0.9rem;\n}\n.pricing-preview-row__value[data-v-72967f59] {\r\n  color: #0f172a;\r\n  font-weight: 600;\r\n  text-align: right;\n}\n.pricing-preview-total[data-v-72967f59] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 1rem;\r\n  padding: 1rem 1.1rem;\r\n  border-radius: 14px;\r\n  background: linear-gradient(135deg, #eef2ff 0%, #f5f3ff 100%);\r\n  border: 1px solid rgba(99, 102, 241, 0.15);\n}\n.pricing-preview-total__label[data-v-72967f59] {\r\n  color: #4338ca;\r\n  font-weight: 700;\n}\n.pricing-preview-total__value[data-v-72967f59] {\r\n  color: #312e81;\r\n  font-size: 1.1rem;\r\n  font-weight: 800;\n}\nbody.dark-theme .pricing-preview-card[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-card[data-v-72967f59] {\r\n  border-color: rgba(214, 177, 122, 0.16);\r\n  background:\r\n    radial-gradient(circle at top right, rgba(214, 177, 122, 0.08), transparent 38%),\r\n    linear-gradient(180deg, rgba(27, 23, 19, 0.96) 0%, rgba(18, 15, 13, 0.98) 100%);\r\n  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.22);\n}\nbody.dark-theme .pricing-preview-card__title[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-card__title[data-v-72967f59] {\r\n  color: #fbf5ea;\n}\nbody.dark-theme .pricing-preview-card__subtitle[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-card__subtitle[data-v-72967f59] {\r\n  color: #bcae9a !important;\n}\nbody.dark-theme .pricing-preview-card .badge-light[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-card .badge-light[data-v-72967f59] {\r\n  background: rgba(214, 177, 122, 0.14) !important;\r\n  color: #f0d5a4 !important;\r\n  border: 1px solid rgba(214, 177, 122, 0.18);\n}\nbody.dark-theme .pricing-preview-card .badge-warning[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-card .badge-warning[data-v-72967f59] {\r\n  background: rgba(245, 158, 11, 0.16) !important;\r\n  color: #f7d18d !important;\r\n  border: 1px solid rgba(245, 158, 11, 0.18);\n}\nbody.dark-theme .pricing-preview-card__alert[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-card__alert[data-v-72967f59] {\r\n  border-color: rgba(214, 177, 122, 0.14);\n}\nbody.dark-theme .pricing-preview-card__alert.alert-light[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-card__alert.alert-light[data-v-72967f59] {\r\n  background: rgba(34, 28, 24, 0.92) !important;\r\n  color: #e8dfd0 !important;\n}\nbody.dark-theme .pricing-preview-card__alert.alert-warning[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-card__alert.alert-warning[data-v-72967f59] {\r\n  background: rgba(82, 56, 25, 0.35) !important;\r\n  color: #f4deaf !important;\r\n  border-color: rgba(214, 177, 122, 0.22) !important;\n}\nbody.dark-theme .pricing-preview-card__alert.alert-danger[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-card__alert.alert-danger[data-v-72967f59] {\r\n  background: rgba(98, 41, 35, 0.34) !important;\r\n  color: #f2c0b8 !important;\r\n  border-color: rgba(209, 123, 112, 0.22) !important;\n}\nbody.dark-theme .pricing-preview-row[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-row[data-v-72967f59] {\r\n  background: rgba(36, 30, 24, 0.88);\r\n  border-color: rgba(214, 177, 122, 0.12);\n}\nbody.dark-theme .pricing-preview-row__label[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-row__label[data-v-72967f59] {\r\n  color: #cdbfa9;\n}\nbody.dark-theme .pricing-preview-row__method[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-row__method[data-v-72967f59] {\r\n  color: #a8957b;\n}\nbody.dark-theme .pricing-preview-row__value[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-row__value[data-v-72967f59] {\r\n  color: #fbf5ea;\n}\nbody.dark-theme .pricing-preview-row--base[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-row--base[data-v-72967f59] {\r\n  background: rgba(43, 35, 28, 0.94);\n}\nbody.dark-theme .pricing-preview-total[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-total[data-v-72967f59] {\r\n  background: linear-gradient(135deg, rgba(214, 177, 122, 0.16) 0%, rgba(69, 51, 31, 0.68) 100%);\r\n  border-color: rgba(214, 177, 122, 0.2);\n}\nbody.dark-theme .pricing-preview-total__label[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-total__label[data-v-72967f59] {\r\n  color: #f0d5a4;\n}\nbody.dark-theme .pricing-preview-total__value[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-total__value[data-v-72967f59] {\r\n  color: #fbf5ea;\n}\n@media (max-width: 767.98px) {\n.pricing-preview-card__header[data-v-72967f59],\r\n  .pricing-preview-row[data-v-72967f59],\r\n  .pricing-preview-total[data-v-72967f59] {\r\n    flex-direction: column;\r\n    align-items: flex-start;\n}\n.pricing-preview-grid[data-v-72967f59] {\r\n    grid-template-columns: 1fr;\n}\n.pricing-preview-row__value[data-v-72967f59],\r\n  .pricing-preview-total__value[data-v-72967f59] {\r\n    text-align: left;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Detail_Product.vue?vue&type=style&index=0&id=97219482&scoped=true&lang=css"
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Detail_Product.vue?vue&type=style&index=0&id=97219482&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n/* Stack gallery under details on tablet and below */\n@media (max-width: 992px) {\n.pd-main-grid[data-v-97219482] {\r\n    grid-template-columns: 1fr !important;\r\n    gap: 16px !important;\n}\n}\r\n\r\n/* Mobile / phone */\n@media (max-width: 768px) {\n.pd-root[data-v-97219482] {\r\n    padding: 12px !important;\r\n    border-radius: 8px !important;\n}\n.pd-actions[data-v-97219482] {\r\n    flex-wrap: wrap !important;\r\n    justify-content: stretch !important;\r\n    gap: 8px !important;\n}\n.pd-actions > button[data-v-97219482] {\r\n    flex: 1 1 auto !important;\r\n    justify-content: center !important;\r\n    padding: 10px 14px !important;\r\n    font-size: 13px !important;\n}\n.pd-hero[data-v-97219482] {\r\n    padding: 18px !important;\r\n    border-radius: 12px !important;\n}\n.pd-hero-row[data-v-97219482] {\r\n    gap: 14px !important;\n}\n.pd-hero-img[data-v-97219482] {\r\n    width: 96px !important;\r\n    height: 96px !important;\r\n    border-radius: 10px !important;\n}\n.pd-hero-title[data-v-97219482] {\r\n    font-size: 20px !important;\n}\n.pd-hero-price[data-v-97219482] {\r\n    width: 100% !important;\r\n    min-width: 0 !important;\r\n    padding: 12px 16px !important;\n}\r\n\r\n  /* Stack info rows label-above-value on phones */\n.pd-info-grid > div[data-v-97219482] {\r\n    flex-direction: column !important;\r\n    align-items: flex-start !important;\r\n    gap: 4px !important;\r\n    padding: 10px 4px !important;\n}\n.pd-info-grid > div > span[data-v-97219482]:last-child {\r\n    text-align: left !important;\n}\r\n\r\n  /* Card headers with badges should wrap */\n.pd-card-header[data-v-97219482] {\r\n    flex-wrap: wrap !important;\r\n    gap: 6px !important;\r\n    padding: 12px 14px !important;\r\n    font-size: 14px !important;\n}\n.pd-card-header > div[data-v-97219482] {\r\n    margin-left: 0 !important;\r\n    width: 100% !important;\r\n    justify-content: flex-start !important;\n}\n}\n.pd-hero-img[data-v-97219482],\r\n.pd-gallery-stage[data-v-97219482],\r\n.pd-gallery-thumb[data-v-97219482] {\r\n  position: relative;\r\n  isolation: isolate;\n}\n.pd-hero-img[data-v-97219482]::after,\r\n.pd-gallery-stage[data-v-97219482]::after,\r\n.pd-gallery-thumb[data-v-97219482]::after {\r\n  content: '';\r\n  position: absolute;\r\n  inset: 0;\r\n  pointer-events: none;\r\n  background:\r\n    radial-gradient(circle at 24% 20%, rgba(255, 255, 255, 0.34), transparent 28%),\r\n    linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0));\n}\n.pd-hero-img__el[data-v-97219482],\r\n.pd-gallery-stage__img[data-v-97219482],\r\n.pd-gallery-thumb__img[data-v-97219482] {\r\n  position: relative;\r\n  z-index: 1;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\n}\r\n\r\n/* Extra-small phones */\n@media (max-width: 480px) {\n.pd-root[data-v-97219482] {\r\n    padding: 8px !important;\n}\n.pd-hero[data-v-97219482] {\r\n    padding: 14px !important;\n}\n.pd-hero-img[data-v-97219482] {\r\n    width: 80px !important;\r\n    height: 80px !important;\n}\n.pd-hero-title[data-v-97219482] {\r\n    font-size: 18px !important;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

"use strict";


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

/***/ "./node_modules/jsbarcode/bin/JsBarcode.js"
/*!*************************************************!*\
  !*** ./node_modules/jsbarcode/bin/JsBarcode.js ***!
  \*************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var _barcodes = __webpack_require__(/*! ./barcodes/ */ "./node_modules/jsbarcode/bin/barcodes/index.js");

var _barcodes2 = _interopRequireDefault(_barcodes);

var _merge = __webpack_require__(/*! ./help/merge.js */ "./node_modules/jsbarcode/bin/help/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _linearizeEncodings = __webpack_require__(/*! ./help/linearizeEncodings.js */ "./node_modules/jsbarcode/bin/help/linearizeEncodings.js");

var _linearizeEncodings2 = _interopRequireDefault(_linearizeEncodings);

var _fixOptions = __webpack_require__(/*! ./help/fixOptions.js */ "./node_modules/jsbarcode/bin/help/fixOptions.js");

var _fixOptions2 = _interopRequireDefault(_fixOptions);

var _getRenderProperties = __webpack_require__(/*! ./help/getRenderProperties.js */ "./node_modules/jsbarcode/bin/help/getRenderProperties.js");

var _getRenderProperties2 = _interopRequireDefault(_getRenderProperties);

var _optionsFromStrings = __webpack_require__(/*! ./help/optionsFromStrings.js */ "./node_modules/jsbarcode/bin/help/optionsFromStrings.js");

var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);

var _ErrorHandler = __webpack_require__(/*! ./exceptions/ErrorHandler.js */ "./node_modules/jsbarcode/bin/exceptions/ErrorHandler.js");

var _ErrorHandler2 = _interopRequireDefault(_ErrorHandler);

var _exceptions = __webpack_require__(/*! ./exceptions/exceptions.js */ "./node_modules/jsbarcode/bin/exceptions/exceptions.js");

var _defaults = __webpack_require__(/*! ./options/defaults.js */ "./node_modules/jsbarcode/bin/options/defaults.js");

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The protype of the object returned from the JsBarcode() call


// Help functions
var API = function API() {};

// The first call of the library API
// Will return an object with all barcodes calls and the data that is used
// by the renderers


// Default values


// Exceptions
// Import all the barcodes
var JsBarcode = function JsBarcode(element, text, options) {
	var api = new API();

	if (typeof element === "undefined") {
		throw Error("No element to render on was provided.");
	}

	// Variables that will be pased through the API calls
	api._renderProperties = (0, _getRenderProperties2.default)(element);
	api._encodings = [];
	api._options = _defaults2.default;
	api._errorHandler = new _ErrorHandler2.default(api);

	// If text is set, use the simple syntax (render the barcode directly)
	if (typeof text !== "undefined") {
		options = options || {};

		if (!options.format) {
			options.format = autoSelectBarcode();
		}

		api.options(options)[options.format](text, options).render();
	}

	return api;
};

// To make tests work TODO: remove
JsBarcode.getModule = function (name) {
	return _barcodes2.default[name];
};

// Register all barcodes
for (var name in _barcodes2.default) {
	if (_barcodes2.default.hasOwnProperty(name)) {
		// Security check if the propery is a prototype property
		registerBarcode(_barcodes2.default, name);
	}
}
function registerBarcode(barcodes, name) {
	API.prototype[name] = API.prototype[name.toUpperCase()] = API.prototype[name.toLowerCase()] = function (text, options) {
		var api = this;
		return api._errorHandler.wrapBarcodeCall(function () {
			// Ensure text is options.text
			options.text = typeof options.text === 'undefined' ? undefined : '' + options.text;

			var newOptions = (0, _merge2.default)(api._options, options);
			newOptions = (0, _optionsFromStrings2.default)(newOptions);
			var Encoder = barcodes[name];
			var encoded = encode(text, Encoder, newOptions);
			api._encodings.push(encoded);

			return api;
		});
	};
}

// encode() handles the Encoder call and builds the binary string to be rendered
function encode(text, Encoder, options) {
	// Ensure that text is a string
	text = "" + text;

	var encoder = new Encoder(text, options);

	// If the input is not valid for the encoder, throw error.
	// If the valid callback option is set, call it instead of throwing error
	if (!encoder.valid()) {
		throw new _exceptions.InvalidInputException(encoder.constructor.name, text);
	}

	// Make a request for the binary data (and other infromation) that should be rendered
	var encoded = encoder.encode();

	// Encodings can be nestled like [[1-1, 1-2], 2, [3-1, 3-2]
	// Convert to [1-1, 1-2, 2, 3-1, 3-2]
	encoded = (0, _linearizeEncodings2.default)(encoded);

	// Merge
	for (var i = 0; i < encoded.length; i++) {
		encoded[i].options = (0, _merge2.default)(options, encoded[i].options);
	}

	return encoded;
}

function autoSelectBarcode() {
	// If CODE128 exists. Use it
	if (_barcodes2.default["CODE128"]) {
		return "CODE128";
	}

	// Else, take the first (probably only) barcode
	return Object.keys(_barcodes2.default)[0];
}

// Sets global encoder options
// Added to the api by the JsBarcode function
API.prototype.options = function (options) {
	this._options = (0, _merge2.default)(this._options, options);
	return this;
};

// Will create a blank space (usually in between barcodes)
API.prototype.blank = function (size) {
	var zeroes = new Array(size + 1).join("0");
	this._encodings.push({ data: zeroes });
	return this;
};

// Initialize JsBarcode on all HTML elements defined.
API.prototype.init = function () {
	// Should do nothing if no elements where found
	if (!this._renderProperties) {
		return;
	}

	// Make sure renderProperies is an array
	if (!Array.isArray(this._renderProperties)) {
		this._renderProperties = [this._renderProperties];
	}

	var renderProperty;
	for (var i in this._renderProperties) {
		renderProperty = this._renderProperties[i];
		var options = (0, _merge2.default)(this._options, renderProperty.options);

		if (options.format == "auto") {
			options.format = autoSelectBarcode();
		}

		this._errorHandler.wrapBarcodeCall(function () {
			var text = options.value;
			var Encoder = _barcodes2.default[options.format.toUpperCase()];
			var encoded = encode(text, Encoder, options);

			render(renderProperty, encoded, options);
		});
	}
};

// The render API call. Calls the real render function.
API.prototype.render = function () {
	if (!this._renderProperties) {
		throw new _exceptions.NoElementException();
	}

	if (Array.isArray(this._renderProperties)) {
		for (var i = 0; i < this._renderProperties.length; i++) {
			render(this._renderProperties[i], this._encodings, this._options);
		}
	} else {
		render(this._renderProperties, this._encodings, this._options);
	}

	return this;
};

API.prototype._defaults = _defaults2.default;

// Prepares the encodings and calls the renderer
function render(renderProperties, encodings, options) {
	encodings = (0, _linearizeEncodings2.default)(encodings);

	for (var i = 0; i < encodings.length; i++) {
		encodings[i].options = (0, _merge2.default)(options, encodings[i].options);
		(0, _fixOptions2.default)(encodings[i].options);
	}

	(0, _fixOptions2.default)(options);

	var Renderer = renderProperties.renderer;
	var renderer = new Renderer(renderProperties.element, encodings, options);
	renderer.render();

	if (renderProperties.afterRender) {
		renderProperties.afterRender();
	}
}

// Export to browser
if (typeof window !== "undefined") {
	window.JsBarcode = JsBarcode;
}

// Export to jQuery
/*global jQuery */
if (typeof jQuery !== 'undefined') {
	jQuery.fn.JsBarcode = function (content, options) {
		var elementArray = [];
		jQuery(this).each(function () {
			elementArray.push(this);
		});
		return JsBarcode(elementArray, content, options);
	};
}

// Export to commonJS
module.exports = JsBarcode;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/Barcode.js"
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/Barcode.js ***!
  \********************************************************/
(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Barcode = function Barcode(data, options) {
	_classCallCheck(this, Barcode);

	this.data = data;
	this.text = options.text || data;
	this.options = options;
};

exports["default"] = Barcode;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js"
/*!****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js ***!
  \****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is the master class,
// it does require the start code to be included in the string
var CODE128 = function (_Barcode) {
	_inherits(CODE128, _Barcode);

	function CODE128(data, options) {
		_classCallCheck(this, CODE128);

		// Get array of ascii codes from data
		var _this = _possibleConstructorReturn(this, (CODE128.__proto__ || Object.getPrototypeOf(CODE128)).call(this, data.substring(1), options));

		_this.bytes = data.split('').map(function (char) {
			return char.charCodeAt(0);
		});
		return _this;
	}

	_createClass(CODE128, [{
		key: 'valid',
		value: function valid() {
			// ASCII value ranges 0-127, 200-211
			return (/^[\x00-\x7F\xC8-\xD3]+$/.test(this.data)
			);
		}

		// The public encoding function

	}, {
		key: 'encode',
		value: function encode() {
			var bytes = this.bytes;
			// Remove the start code from the bytes and set its index
			var startIndex = bytes.shift() - 105;
			// Get start set by index
			var startSet = _constants.SET_BY_CODE[startIndex];

			if (startSet === undefined) {
				throw new RangeError('The encoding does not start with a start character.');
			}

			if (this.shouldEncodeAsEan128() === true) {
				bytes.unshift(_constants.FNC1);
			}

			// Start encode with the right type
			var encodingResult = CODE128.next(bytes, 1, startSet);

			return {
				text: this.text === this.data ? this.text.replace(/[^\x20-\x7E]/g, '') : this.text,
				data:
				// Add the start bits
				CODE128.getBar(startIndex) +
				// Add the encoded bits
				encodingResult.result +
				// Add the checksum
				CODE128.getBar((encodingResult.checksum + startIndex) % _constants.MODULO) +
				// Add the end bits
				CODE128.getBar(_constants.STOP)
			};
		}

		// GS1-128/EAN-128

	}, {
		key: 'shouldEncodeAsEan128',
		value: function shouldEncodeAsEan128() {
			var isEAN128 = this.options.ean128 || false;
			if (typeof isEAN128 === 'string') {
				isEAN128 = isEAN128.toLowerCase() === 'true';
			}
			return isEAN128;
		}

		// Get a bar symbol by index

	}], [{
		key: 'getBar',
		value: function getBar(index) {
			return _constants.BARS[index] ? _constants.BARS[index].toString() : '';
		}

		// Correct an index by a set and shift it from the bytes array

	}, {
		key: 'correctIndex',
		value: function correctIndex(bytes, set) {
			if (set === _constants.SET_A) {
				var charCode = bytes.shift();
				return charCode < 32 ? charCode + 64 : charCode - 32;
			} else if (set === _constants.SET_B) {
				return bytes.shift() - 32;
			} else {
				return (bytes.shift() - 48) * 10 + bytes.shift() - 48;
			}
		}
	}, {
		key: 'next',
		value: function next(bytes, pos, set) {
			if (!bytes.length) {
				return { result: '', checksum: 0 };
			}

			var nextCode = void 0,
			    index = void 0;

			// Special characters
			if (bytes[0] >= 200) {
				index = bytes.shift() - 105;
				var nextSet = _constants.SWAP[index];

				// Swap to other set
				if (nextSet !== undefined) {
					nextCode = CODE128.next(bytes, pos + 1, nextSet);
				}
				// Continue on current set but encode a special character
				else {
						// Shift
						if ((set === _constants.SET_A || set === _constants.SET_B) && index === _constants.SHIFT) {
							// Convert the next character so that is encoded correctly
							bytes[0] = set === _constants.SET_A ? bytes[0] > 95 ? bytes[0] - 96 : bytes[0] : bytes[0] < 32 ? bytes[0] + 96 : bytes[0];
						}
						nextCode = CODE128.next(bytes, pos + 1, set);
					}
			}
			// Continue encoding
			else {
					index = CODE128.correctIndex(bytes, set);
					nextCode = CODE128.next(bytes, pos + 1, set);
				}

			// Get the correct binary encoding and calculate the weight
			var enc = CODE128.getBar(index);
			var weight = index * pos;

			return {
				result: enc + nextCode.result,
				checksum: weight + nextCode.checksum
			};
		}
	}]);

	return CODE128;
}(_Barcode3.default);

exports["default"] = CODE128;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128A.js"
/*!*****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128A.js ***!
  \*****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(/*! ./CODE128.js */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js");

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128A = function (_CODE) {
	_inherits(CODE128A, _CODE);

	function CODE128A(string, options) {
		_classCallCheck(this, CODE128A);

		return _possibleConstructorReturn(this, (CODE128A.__proto__ || Object.getPrototypeOf(CODE128A)).call(this, _constants.A_START_CHAR + string, options));
	}

	_createClass(CODE128A, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + _constants.A_CHARS + '+$').test(this.data);
		}
	}]);

	return CODE128A;
}(_CODE3.default);

exports["default"] = CODE128A;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128B.js"
/*!*****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128B.js ***!
  \*****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(/*! ./CODE128.js */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js");

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128B = function (_CODE) {
	_inherits(CODE128B, _CODE);

	function CODE128B(string, options) {
		_classCallCheck(this, CODE128B);

		return _possibleConstructorReturn(this, (CODE128B.__proto__ || Object.getPrototypeOf(CODE128B)).call(this, _constants.B_START_CHAR + string, options));
	}

	_createClass(CODE128B, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + _constants.B_CHARS + '+$').test(this.data);
		}
	}]);

	return CODE128B;
}(_CODE3.default);

exports["default"] = CODE128B;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128C.js"
/*!*****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128C.js ***!
  \*****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(/*! ./CODE128.js */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js");

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128C = function (_CODE) {
	_inherits(CODE128C, _CODE);

	function CODE128C(string, options) {
		_classCallCheck(this, CODE128C);

		return _possibleConstructorReturn(this, (CODE128C.__proto__ || Object.getPrototypeOf(CODE128C)).call(this, _constants.C_START_CHAR + string, options));
	}

	_createClass(CODE128C, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + _constants.C_CHARS + '+$').test(this.data);
		}
	}]);

	return CODE128C;
}(_CODE3.default);

exports["default"] = CODE128C;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128_AUTO.js"
/*!*********************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128_AUTO.js ***!
  \*********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _CODE2 = __webpack_require__(/*! ./CODE128 */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js");

var _CODE3 = _interopRequireDefault(_CODE2);

var _auto = __webpack_require__(/*! ./auto */ "./node_modules/jsbarcode/bin/barcodes/CODE128/auto.js");

var _auto2 = _interopRequireDefault(_auto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128AUTO = function (_CODE) {
	_inherits(CODE128AUTO, _CODE);

	function CODE128AUTO(data, options) {
		_classCallCheck(this, CODE128AUTO);

		// ASCII value ranges 0-127, 200-211
		if (/^[\x00-\x7F\xC8-\xD3]+$/.test(data)) {
			var _this = _possibleConstructorReturn(this, (CODE128AUTO.__proto__ || Object.getPrototypeOf(CODE128AUTO)).call(this, (0, _auto2.default)(data), options));
		} else {
			var _this = _possibleConstructorReturn(this, (CODE128AUTO.__proto__ || Object.getPrototypeOf(CODE128AUTO)).call(this, data, options));
		}
		return _possibleConstructorReturn(_this);
	}

	return CODE128AUTO;
}(_CODE3.default);

exports["default"] = CODE128AUTO;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/auto.js"
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/auto.js ***!
  \*************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js");

// Match Set functions
var matchSetALength = function matchSetALength(string) {
	return string.match(new RegExp('^' + _constants.A_CHARS + '*'))[0].length;
};
var matchSetBLength = function matchSetBLength(string) {
	return string.match(new RegExp('^' + _constants.B_CHARS + '*'))[0].length;
};
var matchSetC = function matchSetC(string) {
	return string.match(new RegExp('^' + _constants.C_CHARS + '*'))[0];
};

// CODE128A or CODE128B
function autoSelectFromAB(string, isA) {
	var ranges = isA ? _constants.A_CHARS : _constants.B_CHARS;
	var untilC = string.match(new RegExp('^(' + ranges + '+?)(([0-9]{2}){2,})([^0-9]|$)'));

	if (untilC) {
		return untilC[1] + String.fromCharCode(204) + autoSelectFromC(string.substring(untilC[1].length));
	}

	var chars = string.match(new RegExp('^' + ranges + '+'))[0];

	if (chars.length === string.length) {
		return string;
	}

	return chars + String.fromCharCode(isA ? 205 : 206) + autoSelectFromAB(string.substring(chars.length), !isA);
}

// CODE128C
function autoSelectFromC(string) {
	var cMatch = matchSetC(string);
	var length = cMatch.length;

	if (length === string.length) {
		return string;
	}

	string = string.substring(length);

	// Select A/B depending on the longest match
	var isA = matchSetALength(string) >= matchSetBLength(string);
	return cMatch + String.fromCharCode(isA ? 206 : 205) + autoSelectFromAB(string, isA);
}

// Detect Code Set (A, B or C) and format the string

exports["default"] = function (string) {
	var newString = void 0;
	var cLength = matchSetC(string).length;

	// Select 128C if the string start with enough digits
	if (cLength >= 2) {
		newString = _constants.C_START_CHAR + autoSelectFromC(string);
	} else {
		// Select A/B depending on the longest match
		var isA = matchSetALength(string) > matchSetBLength(string);
		newString = (isA ? _constants.A_START_CHAR : _constants.B_START_CHAR) + autoSelectFromAB(string, isA);
	}

	return newString.replace(/[\xCD\xCE]([^])[\xCD\xCE]/, // Any sequence between 205 and 206 characters
	function (match, char) {
		return String.fromCharCode(203) + char;
	});
};

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js"
/*!******************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js ***!
  \******************************************************************/
(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _SET_BY_CODE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// constants for internal usage
var SET_A = exports.SET_A = 0;
var SET_B = exports.SET_B = 1;
var SET_C = exports.SET_C = 2;

// Special characters
var SHIFT = exports.SHIFT = 98;
var START_A = exports.START_A = 103;
var START_B = exports.START_B = 104;
var START_C = exports.START_C = 105;
var MODULO = exports.MODULO = 103;
var STOP = exports.STOP = 106;
var FNC1 = exports.FNC1 = 207;

// Get set by start code
var SET_BY_CODE = exports.SET_BY_CODE = (_SET_BY_CODE = {}, _defineProperty(_SET_BY_CODE, START_A, SET_A), _defineProperty(_SET_BY_CODE, START_B, SET_B), _defineProperty(_SET_BY_CODE, START_C, SET_C), _SET_BY_CODE);

// Get next set by code
var SWAP = exports.SWAP = {
	101: SET_A,
	100: SET_B,
	99: SET_C
};

var A_START_CHAR = exports.A_START_CHAR = String.fromCharCode(208); // START_A + 105
var B_START_CHAR = exports.B_START_CHAR = String.fromCharCode(209); // START_B + 105
var C_START_CHAR = exports.C_START_CHAR = String.fromCharCode(210); // START_C + 105

// 128A (Code Set A)
// ASCII characters 00 to 95 (0–9, A–Z and control codes), special characters, and FNC 1–4
var A_CHARS = exports.A_CHARS = "[\x00-\x5F\xC8-\xCF]";

// 128B (Code Set B)
// ASCII characters 32 to 127 (0–9, A–Z, a–z), special characters, and FNC 1–4
var B_CHARS = exports.B_CHARS = "[\x20-\x7F\xC8-\xCF]";

// 128C (Code Set C)
// 00–99 (encodes two digits with a single code point) and FNC1
var C_CHARS = exports.C_CHARS = "(\xCF*[0-9]{2}\xCF*)";

// CODE128 includes 107 symbols:
// 103 data symbols, 3 start symbols (A, B and C), and 1 stop symbol (the last one)
// Each symbol consist of three black bars (1) and three white spaces (0).
var BARS = exports.BARS = [11011001100, 11001101100, 11001100110, 10010011000, 10010001100, 10001001100, 10011001000, 10011000100, 10001100100, 11001001000, 11001000100, 11000100100, 10110011100, 10011011100, 10011001110, 10111001100, 10011101100, 10011100110, 11001110010, 11001011100, 11001001110, 11011100100, 11001110100, 11101101110, 11101001100, 11100101100, 11100100110, 11101100100, 11100110100, 11100110010, 11011011000, 11011000110, 11000110110, 10100011000, 10001011000, 10001000110, 10110001000, 10001101000, 10001100010, 11010001000, 11000101000, 11000100010, 10110111000, 10110001110, 10001101110, 10111011000, 10111000110, 10001110110, 11101110110, 11010001110, 11000101110, 11011101000, 11011100010, 11011101110, 11101011000, 11101000110, 11100010110, 11101101000, 11101100010, 11100011010, 11101111010, 11001000010, 11110001010, 10100110000, 10100001100, 10010110000, 10010000110, 10000101100, 10000100110, 10110010000, 10110000100, 10011010000, 10011000010, 10000110100, 10000110010, 11000010010, 11001010000, 11110111010, 11000010100, 10001111010, 10100111100, 10010111100, 10010011110, 10111100100, 10011110100, 10011110010, 11110100100, 11110010100, 11110010010, 11011011110, 11011110110, 11110110110, 10101111000, 10100011110, 10001011110, 10111101000, 10111100010, 11110101000, 11110100010, 10111011110, 10111101110, 11101011110, 11110101110, 11010000100, 11010010000, 11010011100, 1100011101011];

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/index.js"
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/index.js ***!
  \**************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CODE128C = exports.CODE128B = exports.CODE128A = exports.CODE128 = undefined;

var _CODE128_AUTO = __webpack_require__(/*! ./CODE128_AUTO.js */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128_AUTO.js");

var _CODE128_AUTO2 = _interopRequireDefault(_CODE128_AUTO);

var _CODE128A = __webpack_require__(/*! ./CODE128A.js */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128A.js");

var _CODE128A2 = _interopRequireDefault(_CODE128A);

var _CODE128B = __webpack_require__(/*! ./CODE128B.js */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128B.js");

var _CODE128B2 = _interopRequireDefault(_CODE128B);

var _CODE128C = __webpack_require__(/*! ./CODE128C.js */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128C.js");

var _CODE128C2 = _interopRequireDefault(_CODE128C);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CODE128 = _CODE128_AUTO2.default;
exports.CODE128A = _CODE128A2.default;
exports.CODE128B = _CODE128B2.default;
exports.CODE128C = _CODE128C2.default;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE39/index.js"
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE39/index.js ***!
  \*************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.CODE39 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Code_39#Encoding

var CODE39 = function (_Barcode) {
	_inherits(CODE39, _Barcode);

	function CODE39(data, options) {
		_classCallCheck(this, CODE39);

		data = data.toUpperCase();

		// Calculate mod43 checksum if enabled
		if (options.mod43) {
			data += getCharacter(mod43checksum(data));
		}

		return _possibleConstructorReturn(this, (CODE39.__proto__ || Object.getPrototypeOf(CODE39)).call(this, data, options));
	}

	_createClass(CODE39, [{
		key: "encode",
		value: function encode() {
			// First character is always a *
			var result = getEncoding("*");

			// Take every character and add the binary representation to the result
			for (var i = 0; i < this.data.length; i++) {
				result += getEncoding(this.data[i]) + "0";
			}

			// Last character is always a *
			result += getEncoding("*");

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/) !== -1;
		}
	}]);

	return CODE39;
}(_Barcode3.default);

// All characters. The position in the array is the (checksum) value


var characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", ".", " ", "$", "/", "+", "%", "*"];

// The decimal representation of the characters, is converted to the
// corresponding binary with the getEncoding function
var encodings = [20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770];

// Get the binary representation of a character by converting the encodings
// from decimal to binary
function getEncoding(character) {
	return getBinary(characterValue(character));
}

function getBinary(characterValue) {
	return encodings[characterValue].toString(2);
}

function getCharacter(characterValue) {
	return characters[characterValue];
}

function characterValue(character) {
	return characters.indexOf(character);
}

function mod43checksum(data) {
	var checksum = 0;
	for (var i = 0; i < data.length; i++) {
		checksum += characterValue(data[i]);
	}

	checksum = checksum % 43;
	return checksum;
}

exports.CODE39 = CODE39;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE93/CODE93.js"
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE93/CODE93.js ***!
  \**************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/CODE93/constants.js");

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Code_93#Detailed_outline

var CODE93 = function (_Barcode) {
	_inherits(CODE93, _Barcode);

	function CODE93(data, options) {
		_classCallCheck(this, CODE93);

		return _possibleConstructorReturn(this, (CODE93.__proto__ || Object.getPrototypeOf(CODE93)).call(this, data, options));
	}

	_createClass(CODE93, [{
		key: 'valid',
		value: function valid() {
			return (/^[0-9A-Z\-. $/+%]+$/.test(this.data)
			);
		}
	}, {
		key: 'encode',
		value: function encode() {
			var symbols = this.data.split('').flatMap(function (c) {
				return _constants.MULTI_SYMBOLS[c] || c;
			});
			var encoded = symbols.map(function (s) {
				return CODE93.getEncoding(s);
			}).join('');

			// Compute checksum symbols
			var csumC = CODE93.checksum(symbols, 20);
			var csumK = CODE93.checksum(symbols.concat(csumC), 15);

			return {
				text: this.text,
				data:
				// Add the start bits
				CODE93.getEncoding('\xff') +
				// Add the encoded bits
				encoded +
				// Add the checksum
				CODE93.getEncoding(csumC) + CODE93.getEncoding(csumK) +
				// Add the stop bits
				CODE93.getEncoding('\xff') +
				// Add the termination bit
				'1'
			};
		}

		// Get the binary encoding of a symbol

	}], [{
		key: 'getEncoding',
		value: function getEncoding(symbol) {
			return _constants.BINARIES[CODE93.symbolValue(symbol)];
		}

		// Get the symbol for a symbol value

	}, {
		key: 'getSymbol',
		value: function getSymbol(symbolValue) {
			return _constants.SYMBOLS[symbolValue];
		}

		// Get the symbol value of a symbol

	}, {
		key: 'symbolValue',
		value: function symbolValue(symbol) {
			return _constants.SYMBOLS.indexOf(symbol);
		}

		// Calculate a checksum symbol

	}, {
		key: 'checksum',
		value: function checksum(symbols, maxWeight) {
			var csum = symbols.slice().reverse().reduce(function (sum, symbol, idx) {
				var weight = idx % maxWeight + 1;
				return sum + CODE93.symbolValue(symbol) * weight;
			}, 0);

			return CODE93.getSymbol(csum % 47);
		}
	}]);

	return CODE93;
}(_Barcode3.default);

exports["default"] = CODE93;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE93/CODE93FullASCII.js"
/*!***********************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE93/CODE93FullASCII.js ***!
  \***********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(/*! ./CODE93.js */ "./node_modules/jsbarcode/bin/barcodes/CODE93/CODE93.js");

var _CODE3 = _interopRequireDefault(_CODE2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation
// https://en.wikipedia.org/wiki/Code_93#Full_ASCII_Code_93

var CODE93FullASCII = function (_CODE) {
	_inherits(CODE93FullASCII, _CODE);

	function CODE93FullASCII(data, options) {
		_classCallCheck(this, CODE93FullASCII);

		return _possibleConstructorReturn(this, (CODE93FullASCII.__proto__ || Object.getPrototypeOf(CODE93FullASCII)).call(this, data, options));
	}

	_createClass(CODE93FullASCII, [{
		key: 'valid',
		value: function valid() {
			return (/^[\x00-\x7f]+$/.test(this.data)
			);
		}
	}]);

	return CODE93FullASCII;
}(_CODE3.default);

exports["default"] = CODE93FullASCII;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE93/constants.js"
/*!*****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE93/constants.js ***!
  \*****************************************************************/
(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
// The position in the array is the (checksum) value
var SYMBOLS = exports.SYMBOLS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-', '.', ' ', '$', '/', '+', '%',
// Only used for csum and multi-symbols character encodings
'($)', '(%)', '(/)', '(+)',
// Start/Stop
'\xff'];

// Order matches SYMBOLS array
var BINARIES = exports.BINARIES = ['100010100', '101001000', '101000100', '101000010', '100101000', '100100100', '100100010', '101010000', '100010010', '100001010', '110101000', '110100100', '110100010', '110010100', '110010010', '110001010', '101101000', '101100100', '101100010', '100110100', '100011010', '101011000', '101001100', '101000110', '100101100', '100010110', '110110100', '110110010', '110101100', '110100110', '110010110', '110011010', '101101100', '101100110', '100110110', '100111010', '100101110', '111010100', '111010010', '111001010', '101101110', '101110110', '110101110', '100100110', '111011010', '111010110', '100110010', '101011110'];

// Multi-symbol characters (Full ASCII Code 93)
var MULTI_SYMBOLS = exports.MULTI_SYMBOLS = {
	'\x00': ['(%)', 'U'],
	'\x01': ['($)', 'A'],
	'\x02': ['($)', 'B'],
	'\x03': ['($)', 'C'],
	'\x04': ['($)', 'D'],
	'\x05': ['($)', 'E'],
	'\x06': ['($)', 'F'],
	'\x07': ['($)', 'G'],
	'\x08': ['($)', 'H'],
	'\x09': ['($)', 'I'],
	'\x0a': ['($)', 'J'],
	'\x0b': ['($)', 'K'],
	'\x0c': ['($)', 'L'],
	'\x0d': ['($)', 'M'],
	'\x0e': ['($)', 'N'],
	'\x0f': ['($)', 'O'],
	'\x10': ['($)', 'P'],
	'\x11': ['($)', 'Q'],
	'\x12': ['($)', 'R'],
	'\x13': ['($)', 'S'],
	'\x14': ['($)', 'T'],
	'\x15': ['($)', 'U'],
	'\x16': ['($)', 'V'],
	'\x17': ['($)', 'W'],
	'\x18': ['($)', 'X'],
	'\x19': ['($)', 'Y'],
	'\x1a': ['($)', 'Z'],
	'\x1b': ['(%)', 'A'],
	'\x1c': ['(%)', 'B'],
	'\x1d': ['(%)', 'C'],
	'\x1e': ['(%)', 'D'],
	'\x1f': ['(%)', 'E'],
	'!': ['(/)', 'A'],
	'"': ['(/)', 'B'],
	'#': ['(/)', 'C'],
	'&': ['(/)', 'F'],
	'\'': ['(/)', 'G'],
	'(': ['(/)', 'H'],
	')': ['(/)', 'I'],
	'*': ['(/)', 'J'],
	',': ['(/)', 'L'],
	':': ['(/)', 'Z'],
	';': ['(%)', 'F'],
	'<': ['(%)', 'G'],
	'=': ['(%)', 'H'],
	'>': ['(%)', 'I'],
	'?': ['(%)', 'J'],
	'@': ['(%)', 'V'],
	'[': ['(%)', 'K'],
	'\\': ['(%)', 'L'],
	']': ['(%)', 'M'],
	'^': ['(%)', 'N'],
	'_': ['(%)', 'O'],
	'`': ['(%)', 'W'],
	'a': ['(+)', 'A'],
	'b': ['(+)', 'B'],
	'c': ['(+)', 'C'],
	'd': ['(+)', 'D'],
	'e': ['(+)', 'E'],
	'f': ['(+)', 'F'],
	'g': ['(+)', 'G'],
	'h': ['(+)', 'H'],
	'i': ['(+)', 'I'],
	'j': ['(+)', 'J'],
	'k': ['(+)', 'K'],
	'l': ['(+)', 'L'],
	'm': ['(+)', 'M'],
	'n': ['(+)', 'N'],
	'o': ['(+)', 'O'],
	'p': ['(+)', 'P'],
	'q': ['(+)', 'Q'],
	'r': ['(+)', 'R'],
	's': ['(+)', 'S'],
	't': ['(+)', 'T'],
	'u': ['(+)', 'U'],
	'v': ['(+)', 'V'],
	'w': ['(+)', 'W'],
	'x': ['(+)', 'X'],
	'y': ['(+)', 'Y'],
	'z': ['(+)', 'Z'],
	'{': ['(%)', 'P'],
	'|': ['(%)', 'Q'],
	'}': ['(%)', 'R'],
	'~': ['(%)', 'S'],
	'\x7f': ['(%)', 'T']
};

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE93/index.js"
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE93/index.js ***!
  \*************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CODE93FullASCII = exports.CODE93 = undefined;

var _CODE = __webpack_require__(/*! ./CODE93.js */ "./node_modules/jsbarcode/bin/barcodes/CODE93/CODE93.js");

var _CODE2 = _interopRequireDefault(_CODE);

var _CODE93FullASCII = __webpack_require__(/*! ./CODE93FullASCII.js */ "./node_modules/jsbarcode/bin/barcodes/CODE93/CODE93FullASCII.js");

var _CODE93FullASCII2 = _interopRequireDefault(_CODE93FullASCII);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CODE93 = _CODE2.default;
exports.CODE93FullASCII = _CODE93FullASCII2.default;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js"
/*!************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js ***!
  \************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js");

var _encoder = __webpack_require__(/*! ./encoder */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Base class for EAN8 & EAN13
var EAN = function (_Barcode) {
	_inherits(EAN, _Barcode);

	function EAN(data, options) {
		_classCallCheck(this, EAN);

		// Make sure the font is not bigger than the space between the guard bars
		var _this = _possibleConstructorReturn(this, (EAN.__proto__ || Object.getPrototypeOf(EAN)).call(this, data, options));

		_this.fontSize = !options.flat && options.fontSize > options.width * 10 ? options.width * 10 : options.fontSize;

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	_createClass(EAN, [{
		key: 'encode',
		value: function encode() {
			return this.options.flat ? this.encodeFlat() : this.encodeGuarded();
		}
	}, {
		key: 'leftText',
		value: function leftText(from, to) {
			return this.text.substr(from, to);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode(data, structure) {
			return (0, _encoder2.default)(data, structure);
		}
	}, {
		key: 'rightText',
		value: function rightText(from, to) {
			return this.text.substr(from, to);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode(data, structure) {
			return (0, _encoder2.default)(data, structure);
		}
	}, {
		key: 'encodeGuarded',
		value: function encodeGuarded() {
			var textOptions = { fontSize: this.fontSize };
			var guardOptions = { height: this.guardHeight };

			return [{ data: _constants.SIDE_BIN, options: guardOptions }, { data: this.leftEncode(), text: this.leftText(), options: textOptions }, { data: _constants.MIDDLE_BIN, options: guardOptions }, { data: this.rightEncode(), text: this.rightText(), options: textOptions }, { data: _constants.SIDE_BIN, options: guardOptions }];
		}
	}, {
		key: 'encodeFlat',
		value: function encodeFlat() {
			var data = [_constants.SIDE_BIN, this.leftEncode(), _constants.MIDDLE_BIN, this.rightEncode(), _constants.SIDE_BIN];

			return {
				data: data.join(''),
				text: this.text
			};
		}
	}]);

	return EAN;
}(_Barcode3.default);

exports["default"] = EAN;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN13.js"
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN13.js ***!
  \**************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js");

var _EAN2 = __webpack_require__(/*! ./EAN */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js");

var _EAN3 = _interopRequireDefault(_EAN2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Binary_encoding_of_data_digits_into_EAN-13_barcode

// Calculate the checksum digit
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Calculation_of_checksum_digit
var checksum = function checksum(number) {
	var res = number.substr(0, 12).split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a * 3 : sum + a;
	}, 0);

	return (10 - res % 10) % 10;
};

var EAN13 = function (_EAN) {
	_inherits(EAN13, _EAN);

	function EAN13(data, options) {
		_classCallCheck(this, EAN13);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{12}$/) !== -1) {
			data += checksum(data);
		}

		// Adds a last character to the end of the barcode
		var _this = _possibleConstructorReturn(this, (EAN13.__proto__ || Object.getPrototypeOf(EAN13)).call(this, data, options));

		_this.lastChar = options.lastChar;
		return _this;
	}

	_createClass(EAN13, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{13}$/) !== -1 && +this.data[12] === checksum(this.data);
		}
	}, {
		key: 'leftText',
		value: function leftText() {
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'leftText', this).call(this, 1, 6);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode() {
			var data = this.data.substr(1, 6);
			var structure = _constants.EAN13_STRUCTURE[this.data[0]];
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'leftEncode', this).call(this, data, structure);
		}
	}, {
		key: 'rightText',
		value: function rightText() {
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'rightText', this).call(this, 7, 6);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode() {
			var data = this.data.substr(7, 6);
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'rightEncode', this).call(this, data, 'RRRRRR');
		}

		// The "standard" way of printing EAN13 barcodes with guard bars

	}, {
		key: 'encodeGuarded',
		value: function encodeGuarded() {
			var data = _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'encodeGuarded', this).call(this);

			// Extend data with left digit & last character
			if (this.options.displayValue) {
				data.unshift({
					data: '000000000000',
					text: this.text.substr(0, 1),
					options: { textAlign: 'left', fontSize: this.fontSize }
				});

				if (this.options.lastChar) {
					data.push({
						data: '00'
					});
					data.push({
						data: '00000',
						text: this.options.lastChar,
						options: { fontSize: this.fontSize }
					});
				}
			}

			return data;
		}
	}]);

	return EAN13;
}(_EAN3.default);

exports["default"] = EAN13;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN2.js"
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN2.js ***!
  \*************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js");

var _encoder = __webpack_require__(/*! ./encoder */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/EAN_2#Encoding

var EAN2 = function (_Barcode) {
	_inherits(EAN2, _Barcode);

	function EAN2(data, options) {
		_classCallCheck(this, EAN2);

		return _possibleConstructorReturn(this, (EAN2.__proto__ || Object.getPrototypeOf(EAN2)).call(this, data, options));
	}

	_createClass(EAN2, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{2}$/) !== -1;
		}
	}, {
		key: 'encode',
		value: function encode() {
			// Choose the structure based on the number mod 4
			var structure = _constants.EAN2_STRUCTURE[parseInt(this.data) % 4];
			return {
				// Start bits + Encode the two digits with 01 in between
				data: '1011' + (0, _encoder2.default)(this.data, structure, '01'),
				text: this.text
			};
		}
	}]);

	return EAN2;
}(_Barcode3.default);

exports["default"] = EAN2;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN5.js"
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN5.js ***!
  \*************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js");

var _encoder = __webpack_require__(/*! ./encoder */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/EAN_5#Encoding

var checksum = function checksum(data) {
	var result = data.split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a * 9 : sum + a * 3;
	}, 0);
	return result % 10;
};

var EAN5 = function (_Barcode) {
	_inherits(EAN5, _Barcode);

	function EAN5(data, options) {
		_classCallCheck(this, EAN5);

		return _possibleConstructorReturn(this, (EAN5.__proto__ || Object.getPrototypeOf(EAN5)).call(this, data, options));
	}

	_createClass(EAN5, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{5}$/) !== -1;
		}
	}, {
		key: 'encode',
		value: function encode() {
			var structure = _constants.EAN5_STRUCTURE[checksum(this.data)];
			return {
				data: '1011' + (0, _encoder2.default)(this.data, structure, '01'),
				text: this.text
			};
		}
	}]);

	return EAN5;
}(_Barcode3.default);

exports["default"] = EAN5;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN8.js"
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN8.js ***!
  \*************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EAN2 = __webpack_require__(/*! ./EAN */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js");

var _EAN3 = _interopRequireDefault(_EAN2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// http://www.barcodeisland.com/ean8.phtml

// Calculate the checksum digit
var checksum = function checksum(number) {
	var res = number.substr(0, 7).split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a : sum + a * 3;
	}, 0);

	return (10 - res % 10) % 10;
};

var EAN8 = function (_EAN) {
	_inherits(EAN8, _EAN);

	function EAN8(data, options) {
		_classCallCheck(this, EAN8);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{7}$/) !== -1) {
			data += checksum(data);
		}

		return _possibleConstructorReturn(this, (EAN8.__proto__ || Object.getPrototypeOf(EAN8)).call(this, data, options));
	}

	_createClass(EAN8, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{8}$/) !== -1 && +this.data[7] === checksum(this.data);
		}
	}, {
		key: 'leftText',
		value: function leftText() {
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'leftText', this).call(this, 0, 4);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode() {
			var data = this.data.substr(0, 4);
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'leftEncode', this).call(this, data, 'LLLL');
		}
	}, {
		key: 'rightText',
		value: function rightText() {
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'rightText', this).call(this, 4, 4);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode() {
			var data = this.data.substr(4, 4);
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'rightEncode', this).call(this, data, 'RRRR');
		}
	}]);

	return EAN8;
}(_EAN3.default);

exports["default"] = EAN8;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js"
/*!************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js ***!
  \************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.checksum = checksum;

var _encoder = __webpack_require__(/*! ./encoder */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#Encoding

var UPC = function (_Barcode) {
	_inherits(UPC, _Barcode);

	function UPC(data, options) {
		_classCallCheck(this, UPC);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{11}$/) !== -1) {
			data += checksum(data);
		}

		var _this = _possibleConstructorReturn(this, (UPC.__proto__ || Object.getPrototypeOf(UPC)).call(this, data, options));

		_this.displayValue = options.displayValue;

		// Make sure the font is not bigger than the space between the guard bars
		if (options.fontSize > options.width * 10) {
			_this.fontSize = options.width * 10;
		} else {
			_this.fontSize = options.fontSize;
		}

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	_createClass(UPC, [{
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9]{12}$/) !== -1 && this.data[11] == checksum(this.data);
		}
	}, {
		key: "encode",
		value: function encode() {
			if (this.options.flat) {
				return this.flatEncoding();
			} else {
				return this.guardedEncoding();
			}
		}
	}, {
		key: "flatEncoding",
		value: function flatEncoding() {
			var result = "";

			result += "101";
			result += (0, _encoder2.default)(this.data.substr(0, 6), "LLLLLL");
			result += "01010";
			result += (0, _encoder2.default)(this.data.substr(6, 6), "RRRRRR");
			result += "101";

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "guardedEncoding",
		value: function guardedEncoding() {
			var result = [];

			// Add the first digit
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text.substr(0, 1),
					options: { textAlign: "left", fontSize: this.fontSize }
				});
			}

			// Add the guard bars
			result.push({
				data: "101" + (0, _encoder2.default)(this.data[0], "L"),
				options: { height: this.guardHeight }
			});

			// Add the left side
			result.push({
				data: (0, _encoder2.default)(this.data.substr(1, 5), "LLLLL"),
				text: this.text.substr(1, 5),
				options: { fontSize: this.fontSize }
			});

			// Add the middle bits
			result.push({
				data: "01010",
				options: { height: this.guardHeight }
			});

			// Add the right side
			result.push({
				data: (0, _encoder2.default)(this.data.substr(6, 5), "RRRRR"),
				text: this.text.substr(6, 5),
				options: { fontSize: this.fontSize }
			});

			// Add the end bits
			result.push({
				data: (0, _encoder2.default)(this.data[11], "R") + "101",
				options: { height: this.guardHeight }
			});

			// Add the last digit
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text.substr(11, 1),
					options: { textAlign: "right", fontSize: this.fontSize }
				});
			}

			return result;
		}
	}]);

	return UPC;
}(_Barcode3.default);

// Calulate the checksum digit
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Calculation_of_checksum_digit


function checksum(number) {
	var result = 0;

	var i;
	for (i = 1; i < 11; i += 2) {
		result += parseInt(number[i]);
	}
	for (i = 0; i < 11; i += 2) {
		result += parseInt(number[i]) * 3;
	}

	return (10 - result % 10) % 10;
}

exports["default"] = UPC;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPCE.js"
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPCE.js ***!
  \*************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _encoder = __webpack_require__(/*! ./encoder */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

var _UPC = __webpack_require__(/*! ./UPC.js */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#Encoding
//
// UPC-E documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#UPC-E

var EXPANSIONS = ["XX00000XXX", "XX10000XXX", "XX20000XXX", "XXX00000XX", "XXXX00000X", "XXXXX00005", "XXXXX00006", "XXXXX00007", "XXXXX00008", "XXXXX00009"];

var PARITIES = [["EEEOOO", "OOOEEE"], ["EEOEOO", "OOEOEE"], ["EEOOEO", "OOEEOE"], ["EEOOOE", "OOEEEO"], ["EOEEOO", "OEOOEE"], ["EOOEEO", "OEEOOE"], ["EOOOEE", "OEEEOO"], ["EOEOEO", "OEOEOE"], ["EOEOOE", "OEOEEO"], ["EOOEOE", "OEEOEO"]];

var UPCE = function (_Barcode) {
	_inherits(UPCE, _Barcode);

	function UPCE(data, options) {
		_classCallCheck(this, UPCE);

		var _this = _possibleConstructorReturn(this, (UPCE.__proto__ || Object.getPrototypeOf(UPCE)).call(this, data, options));
		// Code may be 6 or 8 digits;
		// A 7 digit code is ambiguous as to whether the extra digit
		// is a UPC-A check or number system digit.


		_this.isValid = false;
		if (data.search(/^[0-9]{6}$/) !== -1) {
			_this.middleDigits = data;
			_this.upcA = expandToUPCA(data, "0");
			_this.text = options.text || '' + _this.upcA[0] + data + _this.upcA[_this.upcA.length - 1];
			_this.isValid = true;
		} else if (data.search(/^[01][0-9]{7}$/) !== -1) {
			_this.middleDigits = data.substring(1, data.length - 1);
			_this.upcA = expandToUPCA(_this.middleDigits, data[0]);

			if (_this.upcA[_this.upcA.length - 1] === data[data.length - 1]) {
				_this.isValid = true;
			} else {
				// checksum mismatch
				return _possibleConstructorReturn(_this);
			}
		} else {
			return _possibleConstructorReturn(_this);
		}

		_this.displayValue = options.displayValue;

		// Make sure the font is not bigger than the space between the guard bars
		if (options.fontSize > options.width * 10) {
			_this.fontSize = options.width * 10;
		} else {
			_this.fontSize = options.fontSize;
		}

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	_createClass(UPCE, [{
		key: 'valid',
		value: function valid() {
			return this.isValid;
		}
	}, {
		key: 'encode',
		value: function encode() {
			if (this.options.flat) {
				return this.flatEncoding();
			} else {
				return this.guardedEncoding();
			}
		}
	}, {
		key: 'flatEncoding',
		value: function flatEncoding() {
			var result = "";

			result += "101";
			result += this.encodeMiddleDigits();
			result += "010101";

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: 'guardedEncoding',
		value: function guardedEncoding() {
			var result = [];

			// Add the UPC-A number system digit beneath the quiet zone
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text[0],
					options: { textAlign: "left", fontSize: this.fontSize }
				});
			}

			// Add the guard bars
			result.push({
				data: "101",
				options: { height: this.guardHeight }
			});

			// Add the 6 UPC-E digits
			result.push({
				data: this.encodeMiddleDigits(),
				text: this.text.substring(1, 7),
				options: { fontSize: this.fontSize }
			});

			// Add the end bits
			result.push({
				data: "010101",
				options: { height: this.guardHeight }
			});

			// Add the UPC-A check digit beneath the quiet zone
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text[7],
					options: { textAlign: "right", fontSize: this.fontSize }
				});
			}

			return result;
		}
	}, {
		key: 'encodeMiddleDigits',
		value: function encodeMiddleDigits() {
			var numberSystem = this.upcA[0];
			var checkDigit = this.upcA[this.upcA.length - 1];
			var parity = PARITIES[parseInt(checkDigit)][parseInt(numberSystem)];
			return (0, _encoder2.default)(this.middleDigits, parity);
		}
	}]);

	return UPCE;
}(_Barcode3.default);

function expandToUPCA(middleDigits, numberSystem) {
	var lastUpcE = parseInt(middleDigits[middleDigits.length - 1]);
	var expansion = EXPANSIONS[lastUpcE];

	var result = "";
	var digitIndex = 0;
	for (var i = 0; i < expansion.length; i++) {
		var c = expansion[i];
		if (c === 'X') {
			result += middleDigits[digitIndex++];
		} else {
			result += c;
		}
	}

	result = '' + numberSystem + result;
	return '' + result + (0, _UPC.checksum)(result);
}

exports["default"] = UPCE;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js"
/*!******************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js ***!
  \******************************************************************/
(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
// Standard start end and middle bits
var SIDE_BIN = exports.SIDE_BIN = '101';
var MIDDLE_BIN = exports.MIDDLE_BIN = '01010';

var BINARIES = exports.BINARIES = {
	'L': [// The L (left) type of encoding
	'0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'],
	'G': [// The G type of encoding
	'0100111', '0110011', '0011011', '0100001', '0011101', '0111001', '0000101', '0010001', '0001001', '0010111'],
	'R': [// The R (right) type of encoding
	'1110010', '1100110', '1101100', '1000010', '1011100', '1001110', '1010000', '1000100', '1001000', '1110100'],
	'O': [// The O (odd) encoding for UPC-E
	'0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'],
	'E': [// The E (even) encoding for UPC-E
	'0100111', '0110011', '0011011', '0100001', '0011101', '0111001', '0000101', '0010001', '0001001', '0010111']
};

// Define the EAN-2 structure
var EAN2_STRUCTURE = exports.EAN2_STRUCTURE = ['LL', 'LG', 'GL', 'GG'];

// Define the EAN-5 structure
var EAN5_STRUCTURE = exports.EAN5_STRUCTURE = ['GGLLL', 'GLGLL', 'GLLGL', 'GLLLG', 'LGGLL', 'LLGGL', 'LLLGG', 'LGLGL', 'LGLLG', 'LLGLG'];

// Define the EAN-13 structure
var EAN13_STRUCTURE = exports.EAN13_STRUCTURE = ['LLLLLL', 'LLGLGG', 'LLGGLG', 'LLGGGL', 'LGLLGG', 'LGGLLG', 'LGGGLL', 'LGLGLG', 'LGLGGL', 'LGGLGL'];

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js"
/*!****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js ***!
  \****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js");

// Encode data string
var encode = function encode(data, structure, separator) {
	var encoded = data.split('').map(function (val, idx) {
		return _constants.BINARIES[structure[idx]];
	}).map(function (val, idx) {
		return val ? val[data[idx]] : '';
	});

	if (separator) {
		var last = data.length - 1;
		encoded = encoded.map(function (val, idx) {
			return idx < last ? val + separator : val;
		});
	}

	return encoded.join('');
};

exports["default"] = encode;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/index.js"
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/index.js ***!
  \**************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UPCE = exports.UPC = exports.EAN2 = exports.EAN5 = exports.EAN8 = exports.EAN13 = undefined;

var _EAN = __webpack_require__(/*! ./EAN13.js */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN13.js");

var _EAN2 = _interopRequireDefault(_EAN);

var _EAN3 = __webpack_require__(/*! ./EAN8.js */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN8.js");

var _EAN4 = _interopRequireDefault(_EAN3);

var _EAN5 = __webpack_require__(/*! ./EAN5.js */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN5.js");

var _EAN6 = _interopRequireDefault(_EAN5);

var _EAN7 = __webpack_require__(/*! ./EAN2.js */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN2.js");

var _EAN8 = _interopRequireDefault(_EAN7);

var _UPC = __webpack_require__(/*! ./UPC.js */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js");

var _UPC2 = _interopRequireDefault(_UPC);

var _UPCE = __webpack_require__(/*! ./UPCE.js */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPCE.js");

var _UPCE2 = _interopRequireDefault(_UPCE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.EAN13 = _EAN2.default;
exports.EAN8 = _EAN4.default;
exports.EAN5 = _EAN6.default;
exports.EAN2 = _EAN8.default;
exports.UPC = _UPC2.default;
exports.UPCE = _UPCE2.default;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/GenericBarcode/index.js"
/*!*********************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/GenericBarcode/index.js ***!
  \*********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.GenericBarcode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GenericBarcode = function (_Barcode) {
	_inherits(GenericBarcode, _Barcode);

	function GenericBarcode(data, options) {
		_classCallCheck(this, GenericBarcode);

		return _possibleConstructorReturn(this, (GenericBarcode.__proto__ || Object.getPrototypeOf(GenericBarcode)).call(this, data, options)); // Sets this.data and this.text
	}

	// Return the corresponding binary numbers for the data provided


	_createClass(GenericBarcode, [{
		key: "encode",
		value: function encode() {
			return {
				data: "10101010101010101010101010101010101010101",
				text: this.text
			};
		}

		// Resturn true/false if the string provided is valid for this encoder

	}, {
		key: "valid",
		value: function valid() {
			return true;
		}
	}]);

	return GenericBarcode;
}(_Barcode3.default);

exports.GenericBarcode = GenericBarcode;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/ITF/ITF.js"
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/ITF/ITF.js ***!
  \********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/ITF/constants.js");

var _Barcode2 = __webpack_require__(/*! ../Barcode */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ITF = function (_Barcode) {
	_inherits(ITF, _Barcode);

	function ITF() {
		_classCallCheck(this, ITF);

		return _possibleConstructorReturn(this, (ITF.__proto__ || Object.getPrototypeOf(ITF)).apply(this, arguments));
	}

	_createClass(ITF, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^([0-9]{2})+$/) !== -1;
		}
	}, {
		key: 'encode',
		value: function encode() {
			var _this2 = this;

			// Calculate all the digit pairs
			var encoded = this.data.match(/.{2}/g).map(function (pair) {
				return _this2.encodePair(pair);
			}).join('');

			return {
				data: _constants.START_BIN + encoded + _constants.END_BIN,
				text: this.text
			};
		}

		// Calculate the data of a number pair

	}, {
		key: 'encodePair',
		value: function encodePair(pair) {
			var second = _constants.BINARIES[pair[1]];

			return _constants.BINARIES[pair[0]].split('').map(function (first, idx) {
				return (first === '1' ? '111' : '1') + (second[idx] === '1' ? '000' : '0');
			}).join('');
		}
	}]);

	return ITF;
}(_Barcode3.default);

exports["default"] = ITF;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/ITF/ITF14.js"
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/ITF/ITF14.js ***!
  \**********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ITF2 = __webpack_require__(/*! ./ITF */ "./node_modules/jsbarcode/bin/barcodes/ITF/ITF.js");

var _ITF3 = _interopRequireDefault(_ITF2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Calculate the checksum digit
var checksum = function checksum(data) {
	var res = data.substr(0, 13).split('').map(function (num) {
		return parseInt(num, 10);
	}).reduce(function (sum, n, idx) {
		return sum + n * (3 - idx % 2 * 2);
	}, 0);

	return Math.ceil(res / 10) * 10 - res;
};

var ITF14 = function (_ITF) {
	_inherits(ITF14, _ITF);

	function ITF14(data, options) {
		_classCallCheck(this, ITF14);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{13}$/) !== -1) {
			data += checksum(data);
		}
		return _possibleConstructorReturn(this, (ITF14.__proto__ || Object.getPrototypeOf(ITF14)).call(this, data, options));
	}

	_createClass(ITF14, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{14}$/) !== -1 && +this.data[13] === checksum(this.data);
		}
	}]);

	return ITF14;
}(_ITF3.default);

exports["default"] = ITF14;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/ITF/constants.js"
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/ITF/constants.js ***!
  \**************************************************************/
(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var START_BIN = exports.START_BIN = '1010';
var END_BIN = exports.END_BIN = '11101';

var BINARIES = exports.BINARIES = ['00110', '10001', '01001', '11000', '00101', '10100', '01100', '00011', '10010', '01010'];

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/ITF/index.js"
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/ITF/index.js ***!
  \**********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ITF14 = exports.ITF = undefined;

var _ITF = __webpack_require__(/*! ./ITF */ "./node_modules/jsbarcode/bin/barcodes/ITF/ITF.js");

var _ITF2 = _interopRequireDefault(_ITF);

var _ITF3 = __webpack_require__(/*! ./ITF14 */ "./node_modules/jsbarcode/bin/barcodes/ITF/ITF14.js");

var _ITF4 = _interopRequireDefault(_ITF3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ITF = _ITF2.default;
exports.ITF14 = _ITF4.default;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js"
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js ***!
  \********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation
// https://en.wikipedia.org/wiki/MSI_Barcode#Character_set_and_binary_lookup

var MSI = function (_Barcode) {
	_inherits(MSI, _Barcode);

	function MSI(data, options) {
		_classCallCheck(this, MSI);

		return _possibleConstructorReturn(this, (MSI.__proto__ || Object.getPrototypeOf(MSI)).call(this, data, options));
	}

	_createClass(MSI, [{
		key: "encode",
		value: function encode() {
			// Start bits
			var ret = "110";

			for (var i = 0; i < this.data.length; i++) {
				// Convert the character to binary (always 4 binary digits)
				var digit = parseInt(this.data[i]);
				var bin = digit.toString(2);
				bin = addZeroes(bin, 4 - bin.length);

				// Add 100 for every zero and 110 for every 1
				for (var b = 0; b < bin.length; b++) {
					ret += bin[b] == "0" ? "100" : "110";
				}
			}

			// End bits
			ret += "1001";

			return {
				data: ret,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9]+$/) !== -1;
		}
	}]);

	return MSI;
}(_Barcode3.default);

function addZeroes(number, n) {
	for (var i = 0; i < n; i++) {
		number = "0" + number;
	}
	return number;
}

exports["default"] = MSI;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI10.js"
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI10.js ***!
  \**********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _MSI2 = __webpack_require__(/*! ./MSI.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(/*! ./checksums.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI10 = function (_MSI) {
	_inherits(MSI10, _MSI);

	function MSI10(data, options) {
		_classCallCheck(this, MSI10);

		return _possibleConstructorReturn(this, (MSI10.__proto__ || Object.getPrototypeOf(MSI10)).call(this, data + (0, _checksums.mod10)(data), options));
	}

	return MSI10;
}(_MSI3.default);

exports["default"] = MSI10;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI1010.js"
/*!************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI1010.js ***!
  \************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _MSI2 = __webpack_require__(/*! ./MSI.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(/*! ./checksums.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI1010 = function (_MSI) {
	_inherits(MSI1010, _MSI);

	function MSI1010(data, options) {
		_classCallCheck(this, MSI1010);

		data += (0, _checksums.mod10)(data);
		data += (0, _checksums.mod10)(data);
		return _possibleConstructorReturn(this, (MSI1010.__proto__ || Object.getPrototypeOf(MSI1010)).call(this, data, options));
	}

	return MSI1010;
}(_MSI3.default);

exports["default"] = MSI1010;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI11.js"
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI11.js ***!
  \**********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _MSI2 = __webpack_require__(/*! ./MSI.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(/*! ./checksums.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI11 = function (_MSI) {
	_inherits(MSI11, _MSI);

	function MSI11(data, options) {
		_classCallCheck(this, MSI11);

		return _possibleConstructorReturn(this, (MSI11.__proto__ || Object.getPrototypeOf(MSI11)).call(this, data + (0, _checksums.mod11)(data), options));
	}

	return MSI11;
}(_MSI3.default);

exports["default"] = MSI11;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI1110.js"
/*!************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI1110.js ***!
  \************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _MSI2 = __webpack_require__(/*! ./MSI.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(/*! ./checksums.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI1110 = function (_MSI) {
	_inherits(MSI1110, _MSI);

	function MSI1110(data, options) {
		_classCallCheck(this, MSI1110);

		data += (0, _checksums.mod11)(data);
		data += (0, _checksums.mod10)(data);
		return _possibleConstructorReturn(this, (MSI1110.__proto__ || Object.getPrototypeOf(MSI1110)).call(this, data, options));
	}

	return MSI1110;
}(_MSI3.default);

exports["default"] = MSI1110;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js"
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js ***!
  \**************************************************************/
(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.mod10 = mod10;
exports.mod11 = mod11;
function mod10(number) {
	var sum = 0;
	for (var i = 0; i < number.length; i++) {
		var n = parseInt(number[i]);
		if ((i + number.length) % 2 === 0) {
			sum += n;
		} else {
			sum += n * 2 % 10 + Math.floor(n * 2 / 10);
		}
	}
	return (10 - sum % 10) % 10;
}

function mod11(number) {
	var sum = 0;
	var weights = [2, 3, 4, 5, 6, 7];
	for (var i = 0; i < number.length; i++) {
		var n = parseInt(number[number.length - 1 - i]);
		sum += weights[i % weights.length] * n;
	}
	return (11 - sum % 11) % 11;
}

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/MSI/index.js"
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/index.js ***!
  \**********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MSI1110 = exports.MSI1010 = exports.MSI11 = exports.MSI10 = exports.MSI = undefined;

var _MSI = __webpack_require__(/*! ./MSI.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

var _MSI2 = _interopRequireDefault(_MSI);

var _MSI3 = __webpack_require__(/*! ./MSI10.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI10.js");

var _MSI4 = _interopRequireDefault(_MSI3);

var _MSI5 = __webpack_require__(/*! ./MSI11.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI11.js");

var _MSI6 = _interopRequireDefault(_MSI5);

var _MSI7 = __webpack_require__(/*! ./MSI1010.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI1010.js");

var _MSI8 = _interopRequireDefault(_MSI7);

var _MSI9 = __webpack_require__(/*! ./MSI1110.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI1110.js");

var _MSI10 = _interopRequireDefault(_MSI9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.MSI = _MSI2.default;
exports.MSI10 = _MSI4.default;
exports.MSI11 = _MSI6.default;
exports.MSI1010 = _MSI8.default;
exports.MSI1110 = _MSI10.default;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/codabar/index.js"
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/codabar/index.js ***!
  \**************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.codabar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding specification:
// http://www.barcodeisland.com/codabar.phtml

var codabar = function (_Barcode) {
	_inherits(codabar, _Barcode);

	function codabar(data, options) {
		_classCallCheck(this, codabar);

		if (data.search(/^[0-9\-\$\:\.\+\/]+$/) === 0) {
			data = "A" + data + "A";
		}

		var _this = _possibleConstructorReturn(this, (codabar.__proto__ || Object.getPrototypeOf(codabar)).call(this, data.toUpperCase(), options));

		_this.text = _this.options.text || _this.text.replace(/[A-D]/g, '');
		return _this;
	}

	_createClass(codabar, [{
		key: "valid",
		value: function valid() {
			return this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/) !== -1;
		}
	}, {
		key: "encode",
		value: function encode() {
			var result = [];
			var encodings = this.getEncodings();
			for (var i = 0; i < this.data.length; i++) {
				result.push(encodings[this.data.charAt(i)]);
				// for all characters except the last, append a narrow-space ("0")
				if (i !== this.data.length - 1) {
					result.push("0");
				}
			}
			return {
				text: this.text,
				data: result.join('')
			};
		}
	}, {
		key: "getEncodings",
		value: function getEncodings() {
			return {
				"0": "101010011",
				"1": "101011001",
				"2": "101001011",
				"3": "110010101",
				"4": "101101001",
				"5": "110101001",
				"6": "100101011",
				"7": "100101101",
				"8": "100110101",
				"9": "110100101",
				"-": "101001101",
				"$": "101100101",
				":": "1101011011",
				"/": "1101101011",
				".": "1101101101",
				"+": "1011011011",
				"A": "1011001001",
				"B": "1001001011",
				"C": "1010010011",
				"D": "1010011001"
			};
		}
	}]);

	return codabar;
}(_Barcode3.default);

exports.codabar = codabar;

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/index.js"
/*!******************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/index.js ***!
  \******************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _CODE = __webpack_require__(/*! ./CODE39/ */ "./node_modules/jsbarcode/bin/barcodes/CODE39/index.js");

var _CODE2 = __webpack_require__(/*! ./CODE128/ */ "./node_modules/jsbarcode/bin/barcodes/CODE128/index.js");

var _EAN_UPC = __webpack_require__(/*! ./EAN_UPC/ */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/index.js");

var _ITF = __webpack_require__(/*! ./ITF/ */ "./node_modules/jsbarcode/bin/barcodes/ITF/index.js");

var _MSI = __webpack_require__(/*! ./MSI/ */ "./node_modules/jsbarcode/bin/barcodes/MSI/index.js");

var _pharmacode = __webpack_require__(/*! ./pharmacode/ */ "./node_modules/jsbarcode/bin/barcodes/pharmacode/index.js");

var _codabar = __webpack_require__(/*! ./codabar */ "./node_modules/jsbarcode/bin/barcodes/codabar/index.js");

var _CODE3 = __webpack_require__(/*! ./CODE93/ */ "./node_modules/jsbarcode/bin/barcodes/CODE93/index.js");

var _GenericBarcode = __webpack_require__(/*! ./GenericBarcode/ */ "./node_modules/jsbarcode/bin/barcodes/GenericBarcode/index.js");

exports["default"] = {
	CODE39: _CODE.CODE39,
	CODE128: _CODE2.CODE128, CODE128A: _CODE2.CODE128A, CODE128B: _CODE2.CODE128B, CODE128C: _CODE2.CODE128C,
	EAN13: _EAN_UPC.EAN13, EAN8: _EAN_UPC.EAN8, EAN5: _EAN_UPC.EAN5, EAN2: _EAN_UPC.EAN2, UPC: _EAN_UPC.UPC, UPCE: _EAN_UPC.UPCE,
	ITF14: _ITF.ITF14,
	ITF: _ITF.ITF,
	MSI: _MSI.MSI, MSI10: _MSI.MSI10, MSI11: _MSI.MSI11, MSI1010: _MSI.MSI1010, MSI1110: _MSI.MSI1110,
	pharmacode: _pharmacode.pharmacode,
	codabar: _codabar.codabar,
	CODE93: _CODE3.CODE93, CODE93FullASCII: _CODE3.CODE93FullASCII,
	GenericBarcode: _GenericBarcode.GenericBarcode
};

/***/ },

/***/ "./node_modules/jsbarcode/bin/barcodes/pharmacode/index.js"
/*!*****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/pharmacode/index.js ***!
  \*****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.pharmacode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation
// http://www.gomaro.ch/ftproot/Laetus_PHARMA-CODE.pdf

var pharmacode = function (_Barcode) {
	_inherits(pharmacode, _Barcode);

	function pharmacode(data, options) {
		_classCallCheck(this, pharmacode);

		var _this = _possibleConstructorReturn(this, (pharmacode.__proto__ || Object.getPrototypeOf(pharmacode)).call(this, data, options));

		_this.number = parseInt(data, 10);
		return _this;
	}

	_createClass(pharmacode, [{
		key: "encode",
		value: function encode() {
			var z = this.number;
			var result = "";

			// http://i.imgur.com/RMm4UDJ.png
			// (source: http://www.gomaro.ch/ftproot/Laetus_PHARMA-CODE.pdf, page: 34)
			while (!isNaN(z) && z != 0) {
				if (z % 2 === 0) {
					// Even
					result = "11100" + result;
					z = (z - 2) / 2;
				} else {
					// Odd
					result = "100" + result;
					z = (z - 1) / 2;
				}
			}

			// Remove the two last zeroes
			result = result.slice(0, -2);

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.number >= 3 && this.number <= 131070;
		}
	}]);

	return pharmacode;
}(_Barcode3.default);

exports.pharmacode = pharmacode;

/***/ },

/***/ "./node_modules/jsbarcode/bin/exceptions/ErrorHandler.js"
/*!***************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/exceptions/ErrorHandler.js ***!
  \***************************************************************/
(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*eslint no-console: 0 */

var ErrorHandler = function () {
	function ErrorHandler(api) {
		_classCallCheck(this, ErrorHandler);

		this.api = api;
	}

	_createClass(ErrorHandler, [{
		key: "handleCatch",
		value: function handleCatch(e) {
			// If babel supported extending of Error in a correct way instanceof would be used here
			if (e.name === "InvalidInputException") {
				if (this.api._options.valid !== this.api._defaults.valid) {
					this.api._options.valid(false);
				} else {
					throw e.message;
				}
			} else {
				throw e;
			}

			this.api.render = function () {};
		}
	}, {
		key: "wrapBarcodeCall",
		value: function wrapBarcodeCall(func) {
			try {
				var result = func.apply(undefined, arguments);
				this.api._options.valid(true);
				return result;
			} catch (e) {
				this.handleCatch(e);

				return this.api;
			}
		}
	}]);

	return ErrorHandler;
}();

exports["default"] = ErrorHandler;

/***/ },

/***/ "./node_modules/jsbarcode/bin/exceptions/exceptions.js"
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/exceptions/exceptions.js ***!
  \*************************************************************/
(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvalidInputException = function (_Error) {
	_inherits(InvalidInputException, _Error);

	function InvalidInputException(symbology, input) {
		_classCallCheck(this, InvalidInputException);

		var _this = _possibleConstructorReturn(this, (InvalidInputException.__proto__ || Object.getPrototypeOf(InvalidInputException)).call(this));

		_this.name = "InvalidInputException";

		_this.symbology = symbology;
		_this.input = input;

		_this.message = '"' + _this.input + '" is not a valid input for ' + _this.symbology;
		return _this;
	}

	return InvalidInputException;
}(Error);

var InvalidElementException = function (_Error2) {
	_inherits(InvalidElementException, _Error2);

	function InvalidElementException() {
		_classCallCheck(this, InvalidElementException);

		var _this2 = _possibleConstructorReturn(this, (InvalidElementException.__proto__ || Object.getPrototypeOf(InvalidElementException)).call(this));

		_this2.name = "InvalidElementException";
		_this2.message = "Not supported type to render on";
		return _this2;
	}

	return InvalidElementException;
}(Error);

var NoElementException = function (_Error3) {
	_inherits(NoElementException, _Error3);

	function NoElementException() {
		_classCallCheck(this, NoElementException);

		var _this3 = _possibleConstructorReturn(this, (NoElementException.__proto__ || Object.getPrototypeOf(NoElementException)).call(this));

		_this3.name = "NoElementException";
		_this3.message = "No element to render on.";
		return _this3;
	}

	return NoElementException;
}(Error);

exports.InvalidInputException = InvalidInputException;
exports.InvalidElementException = InvalidElementException;
exports.NoElementException = NoElementException;

/***/ },

/***/ "./node_modules/jsbarcode/bin/help/fixOptions.js"
/*!*******************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/fixOptions.js ***!
  \*******************************************************/
(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports["default"] = fixOptions;


function fixOptions(options) {
	// Fix the margins
	options.marginTop = options.marginTop || options.margin;
	options.marginBottom = options.marginBottom || options.margin;
	options.marginRight = options.marginRight || options.margin;
	options.marginLeft = options.marginLeft || options.margin;

	return options;
}

/***/ },

/***/ "./node_modules/jsbarcode/bin/help/getOptionsFromElement.js"
/*!******************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/getOptionsFromElement.js ***!
  \******************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _optionsFromStrings = __webpack_require__(/*! ./optionsFromStrings.js */ "./node_modules/jsbarcode/bin/help/optionsFromStrings.js");

var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);

var _defaults = __webpack_require__(/*! ../options/defaults.js */ "./node_modules/jsbarcode/bin/options/defaults.js");

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getOptionsFromElement(element) {
	var options = {};
	for (var property in _defaults2.default) {
		if (_defaults2.default.hasOwnProperty(property)) {
			// jsbarcode-*
			if (element.hasAttribute("jsbarcode-" + property.toLowerCase())) {
				options[property] = element.getAttribute("jsbarcode-" + property.toLowerCase());
			}

			// data-*
			if (element.hasAttribute("data-" + property.toLowerCase())) {
				options[property] = element.getAttribute("data-" + property.toLowerCase());
			}
		}
	}

	options["value"] = element.getAttribute("jsbarcode-value") || element.getAttribute("data-value");

	// Since all atributes are string they need to be converted to integers
	options = (0, _optionsFromStrings2.default)(options);

	return options;
}

exports["default"] = getOptionsFromElement;

/***/ },

/***/ "./node_modules/jsbarcode/bin/help/getRenderProperties.js"
/*!****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/getRenderProperties.js ***!
  \****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* global HTMLImageElement */
/* global HTMLCanvasElement */
/* global SVGElement */

var _getOptionsFromElement = __webpack_require__(/*! ./getOptionsFromElement.js */ "./node_modules/jsbarcode/bin/help/getOptionsFromElement.js");

var _getOptionsFromElement2 = _interopRequireDefault(_getOptionsFromElement);

var _renderers = __webpack_require__(/*! ../renderers */ "./node_modules/jsbarcode/bin/renderers/index.js");

var _renderers2 = _interopRequireDefault(_renderers);

var _exceptions = __webpack_require__(/*! ../exceptions/exceptions.js */ "./node_modules/jsbarcode/bin/exceptions/exceptions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Takes an element and returns an object with information about how
// it should be rendered
// This could also return an array with these objects
// {
//   element: The element that the renderer should draw on
//   renderer: The name of the renderer
//   afterRender (optional): If something has to done after the renderer
//     completed, calls afterRender (function)
//   options (optional): Options that can be defined in the element
// }

function getRenderProperties(element) {
	// If the element is a string, query select call again
	if (typeof element === "string") {
		return querySelectedRenderProperties(element);
	}
	// If element is array. Recursivly call with every object in the array
	else if (Array.isArray(element)) {
			var returnArray = [];
			for (var i = 0; i < element.length; i++) {
				returnArray.push(getRenderProperties(element[i]));
			}
			return returnArray;
		}
		// If element, render on canvas and set the uri as src
		else if (typeof HTMLCanvasElement !== 'undefined' && element instanceof HTMLImageElement) {
				return newCanvasRenderProperties(element);
			}
			// If SVG
			else if (element && element.nodeName && element.nodeName.toLowerCase() === 'svg' || typeof SVGElement !== 'undefined' && element instanceof SVGElement) {
					return {
						element: element,
						options: (0, _getOptionsFromElement2.default)(element),
						renderer: _renderers2.default.SVGRenderer
					};
				}
				// If canvas (in browser)
				else if (typeof HTMLCanvasElement !== 'undefined' && element instanceof HTMLCanvasElement) {
						return {
							element: element,
							options: (0, _getOptionsFromElement2.default)(element),
							renderer: _renderers2.default.CanvasRenderer
						};
					}
					// If canvas (in node)
					else if (element && element.getContext) {
							return {
								element: element,
								renderer: _renderers2.default.CanvasRenderer
							};
						} else if (element && (typeof element === "undefined" ? "undefined" : _typeof(element)) === 'object' && !element.nodeName) {
							return {
								element: element,
								renderer: _renderers2.default.ObjectRenderer
							};
						} else {
							throw new _exceptions.InvalidElementException();
						}
}

function querySelectedRenderProperties(string) {
	var selector = document.querySelectorAll(string);
	if (selector.length === 0) {
		return undefined;
	} else {
		var returnArray = [];
		for (var i = 0; i < selector.length; i++) {
			returnArray.push(getRenderProperties(selector[i]));
		}
		return returnArray;
	}
}

function newCanvasRenderProperties(imgElement) {
	var canvas = document.createElement('canvas');
	return {
		element: canvas,
		options: (0, _getOptionsFromElement2.default)(imgElement),
		renderer: _renderers2.default.CanvasRenderer,
		afterRender: function afterRender() {
			imgElement.setAttribute("src", canvas.toDataURL());
		}
	};
}

exports["default"] = getRenderProperties;

/***/ },

/***/ "./node_modules/jsbarcode/bin/help/linearizeEncodings.js"
/*!***************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/linearizeEncodings.js ***!
  \***************************************************************/
(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports["default"] = linearizeEncodings;

// Encodings can be nestled like [[1-1, 1-2], 2, [3-1, 3-2]
// Convert to [1-1, 1-2, 2, 3-1, 3-2]

function linearizeEncodings(encodings) {
	var linearEncodings = [];
	function nextLevel(encoded) {
		if (Array.isArray(encoded)) {
			for (var i = 0; i < encoded.length; i++) {
				nextLevel(encoded[i]);
			}
		} else {
			encoded.text = encoded.text || "";
			encoded.data = encoded.data || "";
			linearEncodings.push(encoded);
		}
	}
	nextLevel(encodings);

	return linearEncodings;
}

/***/ },

/***/ "./node_modules/jsbarcode/bin/help/merge.js"
/*!**************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/merge.js ***!
  \**************************************************/
(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = function (old, replaceObj) {
  return _extends({}, old, replaceObj);
};

/***/ },

/***/ "./node_modules/jsbarcode/bin/help/optionsFromStrings.js"
/*!***************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/optionsFromStrings.js ***!
  \***************************************************************/
(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports["default"] = optionsFromStrings;

// Convert string to integers/booleans where it should be

function optionsFromStrings(options) {
	var intOptions = ["width", "height", "textMargin", "fontSize", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight"];

	for (var intOption in intOptions) {
		if (intOptions.hasOwnProperty(intOption)) {
			intOption = intOptions[intOption];
			if (typeof options[intOption] === "string") {
				options[intOption] = parseInt(options[intOption], 10);
			}
		}
	}

	if (typeof options["displayValue"] === "string") {
		options["displayValue"] = options["displayValue"] != "false";
	}

	return options;
}

/***/ },

/***/ "./node_modules/jsbarcode/bin/options/defaults.js"
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/options/defaults.js ***!
  \********************************************************/
(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var defaults = {
	width: 2,
	height: 100,
	format: "auto",
	displayValue: true,
	fontOptions: "",
	font: "monospace",
	text: undefined,
	textAlign: "center",
	textPosition: "bottom",
	textMargin: 2,
	fontSize: 20,
	background: "#ffffff",
	lineColor: "#000000",
	margin: 10,
	marginTop: undefined,
	marginBottom: undefined,
	marginLeft: undefined,
	marginRight: undefined,
	valid: function valid() {}
};

exports["default"] = defaults;

/***/ },

/***/ "./node_modules/jsbarcode/bin/renderers/canvas.js"
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/canvas.js ***!
  \********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _merge = __webpack_require__(/*! ../help/merge.js */ "./node_modules/jsbarcode/bin/help/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _shared = __webpack_require__(/*! ./shared.js */ "./node_modules/jsbarcode/bin/renderers/shared.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasRenderer = function () {
	function CanvasRenderer(canvas, encodings, options) {
		_classCallCheck(this, CanvasRenderer);

		this.canvas = canvas;
		this.encodings = encodings;
		this.options = options;
	}

	_createClass(CanvasRenderer, [{
		key: "render",
		value: function render() {
			// Abort if the browser does not support HTML5 canvas
			if (!this.canvas.getContext) {
				throw new Error('The browser does not support canvas.');
			}

			this.prepareCanvas();
			for (var i = 0; i < this.encodings.length; i++) {
				var encodingOptions = (0, _merge2.default)(this.options, this.encodings[i].options);

				this.drawCanvasBarcode(encodingOptions, this.encodings[i]);
				this.drawCanvasText(encodingOptions, this.encodings[i]);

				this.moveCanvasDrawing(this.encodings[i]);
			}

			this.restoreCanvas();
		}
	}, {
		key: "prepareCanvas",
		value: function prepareCanvas() {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			ctx.save();

			(0, _shared.calculateEncodingAttributes)(this.encodings, this.options, ctx);
			var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
			var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);

			this.canvas.width = totalWidth + this.options.marginLeft + this.options.marginRight;

			this.canvas.height = maxHeight;

			// Paint the canvas
			ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			if (this.options.background) {
				ctx.fillStyle = this.options.background;
				ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
			}

			ctx.translate(this.options.marginLeft, 0);
		}
	}, {
		key: "drawCanvasBarcode",
		value: function drawCanvasBarcode(options, encoding) {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			var binary = encoding.data;

			// Creates the barcode out of the encoded binary
			var yFrom;
			if (options.textPosition == "top") {
				yFrom = options.marginTop + options.fontSize + options.textMargin;
			} else {
				yFrom = options.marginTop;
			}

			ctx.fillStyle = options.lineColor;

			for (var b = 0; b < binary.length; b++) {
				var x = b * options.width + encoding.barcodePadding;

				if (binary[b] === "1") {
					ctx.fillRect(x, yFrom, options.width, options.height);
				} else if (binary[b]) {
					ctx.fillRect(x, yFrom, options.width, options.height * binary[b]);
				}
			}
		}
	}, {
		key: "drawCanvasText",
		value: function drawCanvasText(options, encoding) {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			var font = options.fontOptions + " " + options.fontSize + "px " + options.font;

			// Draw the text if displayValue is set
			if (options.displayValue) {
				var x, y;

				if (options.textPosition == "top") {
					y = options.marginTop + options.fontSize - options.textMargin;
				} else {
					y = options.height + options.textMargin + options.marginTop + options.fontSize;
				}

				ctx.font = font;

				// Draw the text in the correct X depending on the textAlign option
				if (options.textAlign == "left" || encoding.barcodePadding > 0) {
					x = 0;
					ctx.textAlign = 'left';
				} else if (options.textAlign == "right") {
					x = encoding.width - 1;
					ctx.textAlign = 'right';
				}
				// In all other cases, center the text
				else {
						x = encoding.width / 2;
						ctx.textAlign = 'center';
					}

				ctx.fillText(encoding.text, x, y);
			}
		}
	}, {
		key: "moveCanvasDrawing",
		value: function moveCanvasDrawing(encoding) {
			var ctx = this.canvas.getContext("2d");

			ctx.translate(encoding.width, 0);
		}
	}, {
		key: "restoreCanvas",
		value: function restoreCanvas() {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			ctx.restore();
		}
	}]);

	return CanvasRenderer;
}();

exports["default"] = CanvasRenderer;

/***/ },

/***/ "./node_modules/jsbarcode/bin/renderers/index.js"
/*!*******************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/index.js ***!
  \*******************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _canvas = __webpack_require__(/*! ./canvas.js */ "./node_modules/jsbarcode/bin/renderers/canvas.js");

var _canvas2 = _interopRequireDefault(_canvas);

var _svg = __webpack_require__(/*! ./svg.js */ "./node_modules/jsbarcode/bin/renderers/svg.js");

var _svg2 = _interopRequireDefault(_svg);

var _object = __webpack_require__(/*! ./object.js */ "./node_modules/jsbarcode/bin/renderers/object.js");

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports["default"] = { CanvasRenderer: _canvas2.default, SVGRenderer: _svg2.default, ObjectRenderer: _object2.default };

/***/ },

/***/ "./node_modules/jsbarcode/bin/renderers/object.js"
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/object.js ***!
  \********************************************************/
(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectRenderer = function () {
	function ObjectRenderer(object, encodings, options) {
		_classCallCheck(this, ObjectRenderer);

		this.object = object;
		this.encodings = encodings;
		this.options = options;
	}

	_createClass(ObjectRenderer, [{
		key: "render",
		value: function render() {
			this.object.encodings = this.encodings;
		}
	}]);

	return ObjectRenderer;
}();

exports["default"] = ObjectRenderer;

/***/ },

/***/ "./node_modules/jsbarcode/bin/renderers/shared.js"
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/shared.js ***!
  \********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.getTotalWidthOfEncodings = exports.calculateEncodingAttributes = exports.getBarcodePadding = exports.getEncodingHeight = exports.getMaximumHeightOfEncodings = undefined;

var _merge = __webpack_require__(/*! ../help/merge.js */ "./node_modules/jsbarcode/bin/help/merge.js");

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getEncodingHeight(encoding, options) {
	return options.height + (options.displayValue && encoding.text.length > 0 ? options.fontSize + options.textMargin : 0) + options.marginTop + options.marginBottom;
}

function getBarcodePadding(textWidth, barcodeWidth, options) {
	if (options.displayValue && barcodeWidth < textWidth) {
		if (options.textAlign == "center") {
			return Math.floor((textWidth - barcodeWidth) / 2);
		} else if (options.textAlign == "left") {
			return 0;
		} else if (options.textAlign == "right") {
			return Math.floor(textWidth - barcodeWidth);
		}
	}
	return 0;
}

function calculateEncodingAttributes(encodings, barcodeOptions, context) {
	for (var i = 0; i < encodings.length; i++) {
		var encoding = encodings[i];
		var options = (0, _merge2.default)(barcodeOptions, encoding.options);

		// Calculate the width of the encoding
		var textWidth;
		if (options.displayValue) {
			textWidth = messureText(encoding.text, options, context);
		} else {
			textWidth = 0;
		}

		var barcodeWidth = encoding.data.length * options.width;
		encoding.width = Math.ceil(Math.max(textWidth, barcodeWidth));

		encoding.height = getEncodingHeight(encoding, options);

		encoding.barcodePadding = getBarcodePadding(textWidth, barcodeWidth, options);
	}
}

function getTotalWidthOfEncodings(encodings) {
	var totalWidth = 0;
	for (var i = 0; i < encodings.length; i++) {
		totalWidth += encodings[i].width;
	}
	return totalWidth;
}

function getMaximumHeightOfEncodings(encodings) {
	var maxHeight = 0;
	for (var i = 0; i < encodings.length; i++) {
		if (encodings[i].height > maxHeight) {
			maxHeight = encodings[i].height;
		}
	}
	return maxHeight;
}

function messureText(string, options, context) {
	var ctx;

	if (context) {
		ctx = context;
	} else if (typeof document !== "undefined") {
		ctx = document.createElement("canvas").getContext("2d");
	} else {
		// If the text cannot be messured we will return 0.
		// This will make some barcode with big text render incorrectly
		return 0;
	}
	ctx.font = options.fontOptions + " " + options.fontSize + "px " + options.font;

	// Calculate the width of the encoding
	var measureTextResult = ctx.measureText(string);
	if (!measureTextResult) {
		// Some implementations don't implement measureText and return undefined.
		// If the text cannot be measured we will return 0.
		// This will make some barcode with big text render incorrectly
		return 0;
	}
	var size = measureTextResult.width;
	return size;
}

exports.getMaximumHeightOfEncodings = getMaximumHeightOfEncodings;
exports.getEncodingHeight = getEncodingHeight;
exports.getBarcodePadding = getBarcodePadding;
exports.calculateEncodingAttributes = calculateEncodingAttributes;
exports.getTotalWidthOfEncodings = getTotalWidthOfEncodings;

/***/ },

/***/ "./node_modules/jsbarcode/bin/renderers/svg.js"
/*!*****************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/svg.js ***!
  \*****************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _merge = __webpack_require__(/*! ../help/merge.js */ "./node_modules/jsbarcode/bin/help/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _shared = __webpack_require__(/*! ./shared.js */ "./node_modules/jsbarcode/bin/renderers/shared.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var svgns = "http://www.w3.org/2000/svg";

var SVGRenderer = function () {
	function SVGRenderer(svg, encodings, options) {
		_classCallCheck(this, SVGRenderer);

		this.svg = svg;
		this.encodings = encodings;
		this.options = options;
		this.document = options.xmlDocument || document;
	}

	_createClass(SVGRenderer, [{
		key: "render",
		value: function render() {
			var currentX = this.options.marginLeft;

			this.prepareSVG();
			for (var i = 0; i < this.encodings.length; i++) {
				var encoding = this.encodings[i];
				var encodingOptions = (0, _merge2.default)(this.options, encoding.options);

				var group = this.createGroup(currentX, encodingOptions.marginTop, this.svg);

				this.setGroupOptions(group, encodingOptions);

				this.drawSvgBarcode(group, encodingOptions, encoding);
				this.drawSVGText(group, encodingOptions, encoding);

				currentX += encoding.width;
			}
		}
	}, {
		key: "prepareSVG",
		value: function prepareSVG() {
			// Clear the SVG
			while (this.svg.firstChild) {
				this.svg.removeChild(this.svg.firstChild);
			}

			(0, _shared.calculateEncodingAttributes)(this.encodings, this.options);
			var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
			var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);

			var width = totalWidth + this.options.marginLeft + this.options.marginRight;
			this.setSvgAttributes(width, maxHeight);

			if (this.options.background) {
				this.drawRect(0, 0, width, maxHeight, this.svg).setAttribute("style", "fill:" + this.options.background + ";");
			}
		}
	}, {
		key: "drawSvgBarcode",
		value: function drawSvgBarcode(parent, options, encoding) {
			var binary = encoding.data;

			// Creates the barcode out of the encoded binary
			var yFrom;
			if (options.textPosition == "top") {
				yFrom = options.fontSize + options.textMargin;
			} else {
				yFrom = 0;
			}

			var barWidth = 0;
			var x = 0;
			for (var b = 0; b < binary.length; b++) {
				x = b * options.width + encoding.barcodePadding;

				if (binary[b] === "1") {
					barWidth++;
				} else if (barWidth > 0) {
					this.drawRect(x - options.width * barWidth, yFrom, options.width * barWidth, options.height, parent);
					barWidth = 0;
				}
			}

			// Last draw is needed since the barcode ends with 1
			if (barWidth > 0) {
				this.drawRect(x - options.width * (barWidth - 1), yFrom, options.width * barWidth, options.height, parent);
			}
		}
	}, {
		key: "drawSVGText",
		value: function drawSVGText(parent, options, encoding) {
			var textElem = this.document.createElementNS(svgns, 'text');

			// Draw the text if displayValue is set
			if (options.displayValue) {
				var x, y;

				textElem.setAttribute("style", "font:" + options.fontOptions + " " + options.fontSize + "px " + options.font);

				if (options.textPosition == "top") {
					y = options.fontSize - options.textMargin;
				} else {
					y = options.height + options.textMargin + options.fontSize;
				}

				// Draw the text in the correct X depending on the textAlign option
				if (options.textAlign == "left" || encoding.barcodePadding > 0) {
					x = 0;
					textElem.setAttribute("text-anchor", "start");
				} else if (options.textAlign == "right") {
					x = encoding.width - 1;
					textElem.setAttribute("text-anchor", "end");
				}
				// In all other cases, center the text
				else {
						x = encoding.width / 2;
						textElem.setAttribute("text-anchor", "middle");
					}

				textElem.setAttribute("x", x);
				textElem.setAttribute("y", y);

				textElem.appendChild(this.document.createTextNode(encoding.text));

				parent.appendChild(textElem);
			}
		}
	}, {
		key: "setSvgAttributes",
		value: function setSvgAttributes(width, height) {
			var svg = this.svg;
			svg.setAttribute("width", width + "px");
			svg.setAttribute("height", height + "px");
			svg.setAttribute("x", "0px");
			svg.setAttribute("y", "0px");
			svg.setAttribute("viewBox", "0 0 " + width + " " + height);

			svg.setAttribute("xmlns", svgns);
			svg.setAttribute("version", "1.1");

			svg.setAttribute("style", "transform: translate(0,0)");
		}
	}, {
		key: "createGroup",
		value: function createGroup(x, y, parent) {
			var group = this.document.createElementNS(svgns, 'g');
			group.setAttribute("transform", "translate(" + x + ", " + y + ")");

			parent.appendChild(group);

			return group;
		}
	}, {
		key: "setGroupOptions",
		value: function setGroupOptions(group, options) {
			group.setAttribute("style", "fill:" + options.lineColor + ";");
		}
	}, {
		key: "drawRect",
		value: function drawRect(x, y, width, height, parent) {
			var rect = this.document.createElementNS(svgns, 'rect');

			rect.setAttribute("x", x);
			rect.setAttribute("y", y);
			rect.setAttribute("width", width);
			rect.setAttribute("height", height);

			parent.appendChild(rect);

			return rect;
		}
	}]);

	return SVGRenderer;
}();

exports["default"] = SVGRenderer;

/***/ },

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/PricingPreview.vue?vue&type=style&index=0&id=72967f59&scoped=true&lang=css"
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/PricingPreview.vue?vue&type=style&index=0&id=72967f59&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingPreview_vue_vue_type_style_index_0_id_72967f59_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PricingPreview.vue?vue&type=style&index=0&id=72967f59&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/PricingPreview.vue?vue&type=style&index=0&id=72967f59&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingPreview_vue_vue_type_style_index_0_id_72967f59_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingPreview_vue_vue_type_style_index_0_id_72967f59_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ },

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Detail_Product.vue?vue&type=style&index=0&id=97219482&scoped=true&lang=css"
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Detail_Product.vue?vue&type=style&index=0&id=97219482&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_Product_vue_vue_type_style_index_0_id_97219482_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Detail_Product.vue?vue&type=style&index=0&id=97219482&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Detail_Product.vue?vue&type=style&index=0&id=97219482&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_Product_vue_vue_type_style_index_0_id_97219482_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_Product_vue_vue_type_style_index_0_id_97219482_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


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

/***/ "./node_modules/vue-barcode/index.js"
/*!*******************************************!*\
  !*** ./node_modules/vue-barcode/index.js ***!
  \*******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var JsBarcode = __webpack_require__(/*! jsbarcode */ "./node_modules/jsbarcode/bin/JsBarcode.js");

var VueBarcode = {
   render: function (createElement) {
    return createElement('div', [
      createElement(this.elementTag, {
        style: { display: this.valid ? undefined : 'none' },
        'class': ['vue-barcode-element']
      }),
      createElement('div', {
        style: { display: this.valid ? 'none' : undefined }
      }, this.$slots.default),
    ]);
  },
  props: {
    value: [String, Number],
    format: [String],
    width: [String, Number],
    height: [String, Number],
    displayValue: {
      type:  [String, Boolean],
      default: true
    },
    text: [String, Number],
    fontOptions : [String],
    font: [String],
    textAlign: [String],
    textPosition: [String],
    textMargin: [String, Number],
    fontSize: [String, Number],
    background: [String],
    lineColor: [String],
    margin: [String, Number],
    marginTop: [String, Number],
    marginBottom: [String, Number],
    marginLeft: [String, Number],
    marginRight: [String, Number],
    flat: [Boolean],
    ean128: [String, Boolean],
    elementTag: {
      type: String,
      default: 'svg',
      validator: function (value) {
          return ['canvas', 'svg', 'img'].indexOf(value) !== -1
      }
    }
  },
  mounted: function(){
    this.$watch('$props', render, { deep: true, immediate: true });
    render.call(this);
  },
  data: function(){
    return {valid: true};
  }
};

function render(){
  var that = this;

  var settings = {
    format: this.format,
    width: this.width,
    height: this.height,
    displayValue: this.displayValue,
    text: this.text,
    fontOptions: this.fontOptions,
    font: this.font,
    textAlign: this.textAlign,
    textPosition: this.textPosition,
    textMargin: this.textMargin,
    fontSize: this.fontSize,
    background: this.background,
    lineColor: this.lineColor,
    margin: this.margin,
    marginTop: this.marginTop,
    marginBottom: this.marginBottom,
    marginLeft: this.marginLeft,
    marginRight: this.marginRight,
    flat: this.flat,
    ean128: this.ean128,
    valid: function (valid) {
      that.valid = valid;
    },
    elementTag: this.elementTag
  };

  removeUndefinedProps(settings);

  JsBarcode(this.$el.querySelector('.vue-barcode-element'), String(this.value), settings);
}

function removeUndefinedProps(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop) && obj[prop] === undefined) {
      delete obj[prop];
    }
  }
}

module.exports = VueBarcode;


/***/ },

/***/ "./resources/src/views/app/components/PricingPreview.vue"
/*!***************************************************************!*\
  !*** ./resources/src/views/app/components/PricingPreview.vue ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PricingPreview_vue_vue_type_template_id_72967f59_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PricingPreview.vue?vue&type=template&id=72967f59&scoped=true */ "./resources/src/views/app/components/PricingPreview.vue?vue&type=template&id=72967f59&scoped=true");
/* harmony import */ var _PricingPreview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PricingPreview.vue?vue&type=script&lang=js */ "./resources/src/views/app/components/PricingPreview.vue?vue&type=script&lang=js");
/* harmony import */ var _PricingPreview_vue_vue_type_style_index_0_id_72967f59_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PricingPreview.vue?vue&type=style&index=0&id=72967f59&scoped=true&lang=css */ "./resources/src/views/app/components/PricingPreview.vue?vue&type=style&index=0&id=72967f59&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PricingPreview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PricingPreview_vue_vue_type_template_id_72967f59_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _PricingPreview_vue_vue_type_template_id_72967f59_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "72967f59",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/components/PricingPreview.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/products/Detail_Product.vue"
/*!*******************************************************************!*\
  !*** ./resources/src/views/app/pages/products/Detail_Product.vue ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Detail_Product_vue_vue_type_template_id_97219482_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Detail_Product.vue?vue&type=template&id=97219482&scoped=true */ "./resources/src/views/app/pages/products/Detail_Product.vue?vue&type=template&id=97219482&scoped=true");
/* harmony import */ var _Detail_Product_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Detail_Product.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/products/Detail_Product.vue?vue&type=script&lang=js");
/* harmony import */ var _Detail_Product_vue_vue_type_style_index_0_id_97219482_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Detail_Product.vue?vue&type=style&index=0&id=97219482&scoped=true&lang=css */ "./resources/src/views/app/pages/products/Detail_Product.vue?vue&type=style&index=0&id=97219482&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Detail_Product_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Detail_Product_vue_vue_type_template_id_97219482_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Detail_Product_vue_vue_type_template_id_97219482_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "97219482",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/products/Detail_Product.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/components/PricingPreview.vue?vue&type=script&lang=js"
/*!***************************************************************************************!*\
  !*** ./resources/src/views/app/components/PricingPreview.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingPreview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PricingPreview.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/PricingPreview.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingPreview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/products/Detail_Product.vue?vue&type=script&lang=js"
/*!*******************************************************************************************!*\
  !*** ./resources/src/views/app/pages/products/Detail_Product.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_Product_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Detail_Product.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Detail_Product.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_Product_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/components/PricingPreview.vue?vue&type=template&id=72967f59&scoped=true"
/*!*********************************************************************************************************!*\
  !*** ./resources/src/views/app/components/PricingPreview.vue?vue&type=template&id=72967f59&scoped=true ***!
  \*********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingPreview_vue_vue_type_template_id_72967f59_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingPreview_vue_vue_type_template_id_72967f59_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingPreview_vue_vue_type_template_id_72967f59_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PricingPreview.vue?vue&type=template&id=72967f59&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/PricingPreview.vue?vue&type=template&id=72967f59&scoped=true");


/***/ },

/***/ "./resources/src/views/app/pages/products/Detail_Product.vue?vue&type=template&id=97219482&scoped=true"
/*!*************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/products/Detail_Product.vue?vue&type=template&id=97219482&scoped=true ***!
  \*************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_Product_vue_vue_type_template_id_97219482_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_Product_vue_vue_type_template_id_97219482_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_Product_vue_vue_type_template_id_97219482_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Detail_Product.vue?vue&type=template&id=97219482&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Detail_Product.vue?vue&type=template&id=97219482&scoped=true");


/***/ },

/***/ "./resources/src/views/app/components/PricingPreview.vue?vue&type=style&index=0&id=72967f59&scoped=true&lang=css"
/*!***********************************************************************************************************************!*\
  !*** ./resources/src/views/app/components/PricingPreview.vue?vue&type=style&index=0&id=72967f59&scoped=true&lang=css ***!
  \***********************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingPreview_vue_vue_type_style_index_0_id_72967f59_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PricingPreview.vue?vue&type=style&index=0&id=72967f59&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/PricingPreview.vue?vue&type=style&index=0&id=72967f59&scoped=true&lang=css");


/***/ },

/***/ "./resources/src/views/app/pages/products/Detail_Product.vue?vue&type=style&index=0&id=97219482&scoped=true&lang=css"
/*!***************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/products/Detail_Product.vue?vue&type=style&index=0&id=97219482&scoped=true&lang=css ***!
  \***************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_Product_vue_vue_type_style_index_0_id_97219482_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Detail_Product.vue?vue&type=style&index=0&id=97219482&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Detail_Product.vue?vue&type=style&index=0&id=97219482&scoped=true&lang=css");


/***/ }

}]);