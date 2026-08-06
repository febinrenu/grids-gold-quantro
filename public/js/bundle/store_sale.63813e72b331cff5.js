"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["store_sale"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/create_sale.vue?vue&type=script&lang=js"
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/create_sale.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    title: "Create Sale"
  },
  data: function data() {
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      focused: false,
      timer: null,
      search_input: '',
      product_filter: [],
      paymentProcessing: false,
      Submit_Processing_detail: false,
      SubmitProcessing: false,
      isLoading: true,
      // POS settings — only `allow_overselling` is consumed here, but we keep
      // the same shape as elsewhere for future-proofing. Default OFF preserves
      // the historical strict stock-check behavior for upgraded installs.
      pos_settings: {
        allow_overselling: false
      },
      warehouses: [],
      clients: [],
      accounts: [],
      client: {},
      products: [],
      details: [],
      detail: {
        detail_id: "",
        sale_unit_id: "",
        product_type: "",
        name: "",
        Unit_price: "",
        fix_price: "",
        fix_stock: "",
        stock: "",
        tax_method: "",
        discount_Method: "",
        discount: "",
        quantity: "",
        tax_percent: "",
        is_imei: "",
        imei_number: "",
        // modal price type and baselines for correct toggling
        price_type: 'retail',
        retail_unit_price: "",
        wholesale_unit_price: "",
        min_price: 0
      },
      sales: [],
      payment_methods: [],
      payment: {
        status: "pending",
        payment_method_id: "2",
        amount: "",
        received_amount: "",
        account_id: ""
      },
      selectedClientPoints: 0,
      initialClientPoints: 0,
      showPointsSection: false,
      points_to_convert: 0,
      discount_from_points: 0,
      used_points: 0,
      clientIsEligible: false,
      pointsConverted: false,
      point_to_amount_rate: 0,
      sale: {
        id: "",
        date: new Date().toISOString().slice(0, 10),
        statut: "completed",
        notes: "",
        client_id: "",
        warehouse_id: "",
        sales_agent_id: null,
        tax_rate: 0,
        TaxNet: 0,
        shipping: 0,
        discount: 0,
        discount_Method: "2" // "1" for percentage, "2" for fixed (default)
      },
      sales_agents: [],
      // Credit control
      selectedClientCreditLimit: 0,
      selectedClientNetBalance: 0
    }, "timer", null), "total", 0), "GrandTotal", 0), "units", []), "product", {
      id: "",
      product_type: "",
      code: "",
      stock: "",
      quantity: 1,
      discount: "",
      DiscountNet: "",
      discount_Method: "",
      name: "",
      sale_unit_id: "",
      fix_stock: "",
      fix_price: "",
      unitSale: "",
      Net_price: "",
      Unit_price: "",
      Unit_price_wholesale: "",
      // immutable baselines used when toggling price types
      retail_unit_price: "",
      wholesale_unit_price: "",
      wholesale_Net_price: "",
      min_price: 0,
      price_type: 'retail',
      Total_price: "",
      subtotal: "",
      product_id: "",
      detail_id: "",
      taxe: "",
      tax_percent: "",
      tax_method: "",
      product_variant_id: "",
      is_imei: "",
      imei_number: "",
      is_batch_tracked: false,
      batches: [],
      available_batches: [],
      batches_loading: false
    });
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["currentUserPermissions", "currentUser"])), {}, {
    pointsInputValid: function pointsInputValid() {
      var max = Number(this.selectedClientPoints) || 0;
      var val = Number(this.points_to_convert);
      return Number.isInteger(val) && val >= 1 && val <= max;
    },
    hasMinPriceViolation: function hasMinPriceViolation() {
      return this.details.some(function (d) {
        return (d.min_price || 0) > 0 && d.Net_price < d.min_price;
      });
    },
    // Serial / IMEI: a serialized line must have exactly quantity-many serials selected.
    hasSerialValidationErrors: function hasSerialValidationErrors() {
      var _this = this;
      if (!Array.isArray(this.details)) return false;
      return this.details.some(function (d) {
        return _this.serialCountMismatch(d);
      });
    },
    firstSerialErrorMessage: function firstSerialErrorMessage() {
      var _this2 = this;
      if (!Array.isArray(this.details)) return "";
      var d = this.details.find(function (x) {
        return _this2.serialCountMismatch(x);
      });
      if (!d) return "";
      return this.$t("Serials_Count_Mismatch") + " — " + (d.name || d.code || "");
    },
    hasBatchValidationErrors: function hasBatchValidationErrors() {
      if (!Array.isArray(this.details)) return false;
      var _iterator = _createForOfIteratorHelper(this.details),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var d = _step.value;
          if (!d || !d.is_batch_tracked) continue;
          var batches = Array.isArray(d.batches) ? d.batches : [];
          if (batches.length === 0) return true;
          var _iterator2 = _createForOfIteratorHelper(batches),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var b = _step2.value;
              if (!b.product_batch_id) return true;
              var q = Number(b.qty);
              if (!(q > 0)) return true;
              if (q > (Number(b.qty_available) || 0)) return true;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          if (this.batch_duplicates(d)) return true;
          if (this.batch_qty_mismatch(d)) return true;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return false;
    },
    firstBatchErrorMessage: function firstBatchErrorMessage() {
      if (!Array.isArray(this.details)) return "";
      var _iterator3 = _createForOfIteratorHelper(this.details),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var d = _step3.value;
          if (!d || !d.is_batch_tracked) continue;
          var batches = Array.isArray(d.batches) ? d.batches : [];
          var label = d.name || d.code || "";
          if (batches.length === 0) {
            return (this.$t("Select_Batch_Required_For") || "Select a batch for") + " " + label;
          }
          var _iterator4 = _createForOfIteratorHelper(batches),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var b = _step4.value;
              if (!b.product_batch_id) {
                return (this.$t("Select_Batch_Required_For") || "Select a batch for") + " " + label;
              }
              var q = Number(b.qty);
              if (!(q > 0)) {
                return (this.$t("Batch_Qty_Required_For") || "Batch quantity must be greater than 0 for") + " " + label;
              }
              if (q > (Number(b.qty_available) || 0)) {
                return (this.$t("Batch_Qty_Exceeds_Available") || "Batch quantity exceeds available stock for") + " " + label;
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          if (this.batch_duplicates(d)) {
            return (this.$t("Duplicate_Batch_Selected") || "The same batch is selected twice for") + " " + label;
          }
          if (this.batch_qty_mismatch(d)) {
            return (this.$t("Total_batch_qty_mismatch") || "Total batch quantity does not match the line quantity") + " — " + label;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return "";
    },
    // Overselling Control: when ON, all stock checks on this page are bypassed
    // (matches POS behavior). Default OFF preserves the strict check.
    isOversellingAllowed: function isOversellingAllowed() {
      return !!(this.pos_settings && this.pos_settings.allow_overselling);
    },
    // Disable modal submit if the edited detail would violate min price
    detailHasMinPriceViolation: function detailHasMinPriceViolation() {
      var unit = parseFloat(this.detail.Unit_price) || 0;
      var discount = parseFloat(this.detail.discount) || 0;
      var taxPercent = parseFloat(this.detail.tax_percent) || 0;
      var discountNet = this.detail.discount_Method == "2" ? discount : parseFloat(unit * discount / 100);
      var netPrice = 0;
      if (this.detail.tax_method == "1") {
        // Exclusive
        netPrice = parseFloat(unit - discountNet);
      } else {
        // Inclusive
        var taxe = parseFloat((unit - discountNet) * (taxPercent / 100));
        netPrice = parseFloat(unit - taxe - discountNet);
      }
      return (this.detail.min_price || 0) > 0 && netPrice < this.detail.min_price;
    }
  }),
  watch: {
    GrandTotal: function GrandTotal(val) {
      if (Number(val) < 0) {
        this.payment.status = 'pending';
      }
    },
    // Recalculate totals whenever discount type changes (fixed / percentage)
    'sale.discount_Method': function saleDiscount_Method(newVal, oldVal) {
      // Ensure totals reflect the new interpretation of sale.discount and discount_from_points
      this.CalculTotal();
    }
  },
  methods: {
    showModal: function showModal() {
      this.$bvModal.show('open_scan');
    },
    onScan: function onScan(decodedText, decodedResult) {
      var code = decodedText;
      this.search_input = code;
      this.search();
      this.$bvModal.hide('open_scan');
    },
    handleFocus: function handleFocus() {
      this.focused = true;
    },
    handleBlur: function handleBlur() {
      this.focused = false;
    },
    Selected_customer: function Selected_customer(selectedClientId) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var client, response, data, briefResponse, briefData, _t, _t2;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _this3.payment.payment_method_id = 2;
              _this3.savedPaymentMethods = [];
              _this3.selectedClientPoints = 0;
              _this3.initialClientPoints = 0;
              _this3.points_to_convert = 0;
              _this3.discount_from_points = 0;
              _this3.used_points = 0;
              _this3.clientIsEligible = false;
              _this3.pointsConverted = false; // 👈 Reset conversion state
              _this3.sale.discount = 0; // 👈 Reset applied discount
              _this3.sale.discount_Method = '2'; // Reset to fixed (default)
              client = _this3.clients.find(function (c) {
                return c.id === selectedClientId;
              });
              if (!client) {
                _context.n = 8;
                break;
              }
              _this3.client_name = client.name;
              _this3.selectedClientId = selectedClientId;

              // Fetch customer points
              _context.p = 1;
              _context.n = 2;
              return axios.get("/get_points_client/".concat(selectedClientId));
            case 2:
              response = _context.v;
              data = response.data;
              if (data.is_royalty_eligible) {
                _this3.selectedClientPoints = data.points;
                _this3.initialClientPoints = data.points;
                _this3.clientIsEligible = true;
              } else {
                _this3.selectedClientPoints = 0;
                _this3.initialClientPoints = 0;
                _this3.clientIsEligible = false;
              }
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              console.error('Error fetching client points:', _t);
            case 4:
              _context.p = 4;
              _context.n = 5;
              return axios.get("/clients/".concat(selectedClientId, "/brief"));
            case 5:
              briefResponse = _context.v;
              briefData = briefResponse.data;
              _this3.selectedClientCreditLimit = parseFloat(briefData.credit_limit || 0);
              _this3.selectedClientNetBalance = parseFloat(briefData.netBalance || 0);
              _context.n = 7;
              break;
            case 6:
              _context.p = 6;
              _t2 = _context.v;
              console.error('Error fetching client credit limit:', _t2);
              _this3.selectedClientCreditLimit = 0;
              _this3.selectedClientNetBalance = 0;
            case 7:
              _context.n = 9;
              break;
            case 8:
              _this3.selectedClientId = "";
              _this3.selectedClientCreditLimit = 0;
              _this3.selectedClientNetBalance = 0;
            case 9:
              // ✅ Recalculate totals after client change
              _this3.CalculTotal();
            case 10:
              return _context.a(2);
          }
        }, _callee, null, [[4, 6], [1, 3]]);
      }))();
    },
    convertPointsToDiscount: function convertPointsToDiscount() {
      var _this4 = this;
      if (this.pointsConverted) {
        // Reset conversion - sale.discount remains unchanged (it only contains manual discount)
        this.discount_from_points = 0;
        this.used_points = 0;
        this.points_to_convert = 0;
        this.pointsConverted = false;
        // restore available points display
        if (Number.isFinite(this.initialClientPoints)) {
          this.selectedClientPoints = Number(this.initialClientPoints) || 0;
        }
      } else {
        var maxPoints = Number(this.selectedClientPoints) || 0;
        var pts = Number(this.points_to_convert);
        if (!Number.isFinite(pts) || pts <= 0) {
          this.makeToast && this.makeToast('warning', this.$t ? this.$t('Please_enter_points_to_convert') : 'Please enter points to convert', this.$t ? this.$t('Warning') : 'Warning');
          return;
        }
        if (pts > maxPoints) {
          this.makeToast && this.makeToast('warning', this.$t ? this.$t('Entered_points_exceed_available') : 'Entered points exceed available', this.$t ? this.$t('Warning') : 'Warning');
          this.points_to_convert = maxPoints;
          pts = maxPoints;
          this.$nextTick && this.$nextTick(function () {
            var r = _this4.$refs && _this4.$refs.pointsInput;
            if (r && r.$el) {
              try {
                r.$el.value = String(_this4.points_to_convert);
              } catch (e) {}
            }
          });
        }
        var discount = parseFloat((pts * this.point_to_amount_rate).toFixed(2));
        this.discount_from_points = discount;
        // Don't merge points into sale.discount - keep them separate so input shows only manual discount
        // Points discount is stored in discount_from_points and applied separately in calculations
        this.used_points = pts;
        // ensure input reflects final used points
        this.points_to_convert = pts;
        this.$nextTick && this.$nextTick(function () {
          var r = _this4.$refs && _this4.$refs.pointsInput;
          if (r && r.$el) {
            try {
              r.$el.value = String(_this4.points_to_convert);
            } catch (e) {}
          }
        });
        this.pointsConverted = true;
        // reduce available points display until saved
        var baseAvail = Number(this.initialClientPoints || this.selectedClientPoints) || 0;
        this.selectedClientPoints = Math.max(0, baseAvail - pts);
      }
      this.CalculTotal(); // Recalculate grand total
    },
    onPointsToConvertInput: function onPointsToConvertInput() {
      var max = Number(this.selectedClientPoints) || 0;
      var val = Number(this.points_to_convert);
      if (!Number.isFinite(val)) val = 0;
      if (val < 0) val = 0;
      val = Math.floor(val);
      if (val > max) {
        // warn and clamp
        this.makeToast && this.makeToast('warning', this.$t ? this.$t('Entered_points_exceed_available') : 'Entered points exceed available', this.$t ? this.$t('Warning') : 'Warning');
        val = max;
      }
      this.points_to_convert = val;
    },
    //---------------------- Event Select Status ------------------------------\\
    Selected_Status: function Selected_Status(value) {
      if (value != "completed") {
        this.payment.status = 'pending';
      }
    },
    //---------------------- Event Select Payment Status ------------------------------\\
    Selected_PaymentStatus: function Selected_PaymentStatus(value) {
      if (value == "paid") {
        var payment_amount = this.GrandTotal.toFixed(2);
        this.payment.amount = this.formatNumber(payment_amount, 2);
        this.payment.received_amount = this.formatNumber(payment_amount, 2);
      } else {
        this.payment.amount = 0;
        this.payment.received_amount = 0;
      }
    },
    //---------- keyup paid Amount
    Verified_paidAmount: function Verified_paidAmount() {
      if (isNaN(this.payment.amount)) {
        this.payment.amount = 0;
      } else if (this.payment.amount > this.payment.received_amount) {
        this.makeToast("warning", this.$t("Paying_amount_is_greater_than_Received_amount"), this.$t("Warning"));
        this.payment.amount = 0;
      } else if (this.payment.amount > this.GrandTotal) {
        this.makeToast("warning", this.$t("Paying_amount_is_greater_than_Grand_Total"), this.$t("Warning"));
        this.payment.amount = 0;
      }
    },
    //---------- keyup Received Amount
    Verified_Received_Amount: function Verified_Received_Amount() {
      if (isNaN(this.payment.received_amount)) {
        this.payment.received_amount = 0;
      }
    },
    //--- Submit Validate Create Sale
    Submit_Sale: function Submit_Sale() {
      var _this5 = this;
      // hard block if any line violates min price
      if (this.hasMinPriceViolation) {
        this.makeToast('warning', this.$t('Price_below_min_not_allowed'), this.$t('Warning'));
        return;
      }
      this.$refs.create_sale.validate().then(function (success) {
        if (!success) {
          _this5.makeToast("danger", _this5.$t("Please_fill_the_form_correctly"), _this5.$t("Failed"));
        } else if (Number(_this5.GrandTotal) < 0) {
          var msg = _this5.$t ? "".concat(_this5.$t('pos.Total_Payable'), " ").concat(_this5.$t('cannot_be_negative') || 'cannot be negative') : 'Total Payable cannot be negative';
          _this5.makeToast('warning', msg, _this5.$t ? _this5.$t('Warning') : 'Warning');
          return;
        } else if (_this5.payment.amount > _this5.payment.received_amount) {
          _this5.makeToast("warning", _this5.$t("Paying_amount_is_greater_than_Received_amount"), _this5.$t("Warning"));
          _this5.payment.received_amount = 0;
        } else if (_this5.payment.amount > _this5.GrandTotal) {
          _this5.makeToast("warning", _this5.$t("Paying_amount_is_greater_than_Grand_Total"), _this5.$t("Warning"));
          _this5.payment.amount = 0;
        } else {
          // Credit Limit Validation (0 means no limit)
          // Only applies when this sale is adding new credit (paid amount < sale total)
          if (_this5.selectedClientId && _this5.selectedClientCreditLimit > 0) {
            var totalPaid = parseFloat(_this5.payment.amount || 0);
            var saleTotal = parseFloat(_this5.GrandTotal || 0);
            if (totalPaid < saleTotal) {
              var currentDue = parseFloat(_this5.selectedClientNetBalance || 0);
              var newSaleDue = saleTotal - totalPaid; // Remaining due from this sale
              var newTotalDue = currentDue + newSaleDue;
              if (newTotalDue > _this5.selectedClientCreditLimit) {
                var exceededAmount = newTotalDue - _this5.selectedClientCreditLimit;
                _this5.makeToast("danger", _this5.$t("Credit_Limit_Exceeded") + ": " + _this5.formatNumber(exceededAmount, 2) + " " + _this5.$t("exceeds_credit_limit_of") + " " + _this5.formatNumber(_this5.selectedClientCreditLimit, 2), _this5.$t("Warning"));
                return;
              }
            }
          }
          _this5.Create_Sale();
        }
      });
    },
    //---Submit Validation Update Detail
    submit_Update_Detail: function submit_Update_Detail() {
      var _this6 = this;
      this.$refs.Update_Detail.validate().then(function (success) {
        if (!success) {
          return;
        } else {
          // block if current edited detail violates min price
          if (_this6.detailHasMinPriceViolation) {
            _this6.makeToast('warning', _this6.$t('Price_below_min_not_allowed'), _this6.$t('Warning'));
            return;
          }
          _this6.Update_Detail();
        }
      });
    },
    //---Validate State Fields
    getValidationState: function getValidationState(_ref2) {
      var dirty = _ref2.dirty,
        validated = _ref2.validated,
        _ref2$valid = _ref2.valid,
        valid = _ref2$valid === void 0 ? null : _ref2$valid;
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
    //---------------------- get_units ------------------------------\\
    get_units: function get_units(value) {
      var _this7 = this;
      axios.get("get_units?id=" + value).then(function (_ref3) {
        var data = _ref3.data;
        return _this7.units = data;
      });
    },
    //------ Show Modal Update Detail Product
    Modal_Updat_Detail: function Modal_Updat_Detail(detail) {
      var _this8 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      this.get_units(detail.product_id);
      this.detail.detail_id = detail.detail_id;
      this.detail.sale_unit_id = detail.sale_unit_id;
      this.detail.product_type = detail.product_type;
      this.detail.name = detail.name;
      this.detail.Unit_price = detail.Unit_price;
      this.detail.fix_price = detail.fix_price;
      this.detail.fix_stock = detail.fix_stock;
      this.detail.stock = detail.stock;
      this.detail.tax_method = detail.tax_method;
      this.detail.discount_Method = detail.discount_Method;
      this.detail.discount = detail.discount;
      this.detail.quantity = detail.quantity;
      this.detail.tax_percent = detail.tax_percent;
      this.detail.is_imei = detail.is_imei;
      this.detail.imei_number = detail.imei_number;
      this.detail.min_price = detail.min_price || 0;
      // sync price type and baselines into modal detail
      this.detail.price_type = detail.price_type || 'retail';
      this.detail.retail_unit_price = detail.retail_unit_price !== undefined ? detail.retail_unit_price : detail.Unit_price;
      this.detail.wholesale_unit_price = detail.wholesale_unit_price !== undefined ? detail.wholesale_unit_price : detail.Unit_price_wholesale;
      setTimeout(function () {
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        _this8.$bvModal.show("form_Update_Detail");
      }, 1000);
    },
    //------ Submit Update Detail Product
    Update_Detail: function Update_Detail() {
      var _this9 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      this.Submit_Processing_detail = true;
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id === this.detail.detail_id) {
          // this.convert_unit();
          for (var k = 0; k < this.units.length; k++) {
            if (this.units[k].id == this.detail.sale_unit_id) {
              if (this.units[k].operator == '/') {
                this.details[i].stock = this.detail.fix_stock * this.units[k].operator_value;
                this.details[i].unitSale = this.units[k].ShortName;
              } else {
                this.details[i].stock = this.detail.fix_stock / this.units[k].operator_value;
                this.details[i].unitSale = this.units[k].ShortName;
              }
            }
          }

          // When overselling is allowed, do not cap quantity to the
          // recalculated stock after a unit change — preserve user intent.
          if (!this.isOversellingAllowed && this.details[i].stock < this.details[i].quantity) {
            this.details[i].quantity = this.details[i].stock;
          } else if (this.details[i].stock < this.details[i].quantity) {
            // overselling allowed: keep user quantity as-is
          } else {
            this.details[i].quantity = 1;
          }

          // persist selected price type from modal BEFORE adjusting baselines
          this.details[i].price_type = this.detail.price_type || this.details[i].price_type;
          this.details[i].Unit_price = this.detail.Unit_price;
          // update baseline for the selected price type
          if (this.details[i].price_type === 'wholesale') {
            this.details[i].wholesale_unit_price = this.detail.Unit_price;
          } else {
            this.details[i].retail_unit_price = this.detail.Unit_price;
          }
          this.details[i].tax_percent = this.detail.tax_percent;
          this.details[i].tax_method = this.detail.tax_method;
          this.details[i].discount_Method = this.detail.discount_Method;
          this.details[i].discount = this.detail.discount;
          this.details[i].sale_unit_id = this.detail.sale_unit_id;
          this.details[i].imei_number = this.detail.imei_number;
          this.details[i].product_type = this.detail.product_type;
          if (this.details[i].discount_Method == "2") {
            //Fixed
            this.details[i].DiscountNet = this.details[i].discount;
          } else {
            //Percentage %
            this.details[i].DiscountNet = parseFloat(this.details[i].Unit_price * this.details[i].discount / 100);
          }
          if (this.details[i].tax_method == "1") {
            //Exclusive
            this.details[i].Net_price = parseFloat(this.details[i].Unit_price - this.details[i].DiscountNet);
            this.details[i].taxe = parseFloat(this.details[i].tax_percent * (this.details[i].Unit_price - this.details[i].DiscountNet) / 100);
          } else {
            //Inclusive
            this.details[i].taxe = parseFloat((this.details[i].Unit_price - this.details[i].DiscountNet) * (this.details[i].tax_percent / 100));
            this.details[i].Net_price = parseFloat(this.details[i].Unit_price - this.details[i].taxe - this.details[i].DiscountNet);
          }

          // Validate against min price after any manual edit
          if (this.details[i].Net_price < (this.details[i].min_price || 0)) {
            this.makeToast('warning', this.$t('Price_below_min_not_allowed'), this.$t('Warning'));
            // revert to retail baseline
            this.details[i].price_type = 'retail';
            this.applyPriceType(this.details[i]);
          }
          this.$forceUpdate();
        }
      }
      this.CalculTotal();
      setTimeout(function () {
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        _this9.Submit_Processing_detail = false;
        _this9.$bvModal.hide("form_Update_Detail");
      }, 1000);
    },
    onChangeDetailPriceType: function onChangeDetailPriceType(newType) {
      if (newType) {
        this.detail.price_type = newType;
      }
      this.applyPriceType(this.detail);
    },
    // Search Products
    search: function search() {
      var _this0 = this;
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      if (this.search_input.length < 2) {
        return this.product_filter = [];
      }
      if (this.sale.warehouse_id != "" && this.sale.warehouse_id != null) {
        this.timer = setTimeout(function () {
          var barcode = _this0.search_input.trim();
          var weight = null;
          // Check if the barcode is from a weighing scale (13 digits)
          if (barcode.length === 13 && !isNaN(barcode)) {
            // Find the product by product code
            var product = _this0.products.find(function (prod) {
              return prod.code === barcode;
            });
            if (product) {
              _this0.SearchProduct(product, weight);
              return;
            } else {
              var productCode = barcode.substring(0, 7); // First 7 digits → Product Code
              var _weight = parseFloat(barcode.substring(7, 12)) / 1000; // Convert weight (grams to kg)
              var _product = _this0.products.find(function (prod) {
                return prod.code === productCode;
              });
              if (_product) {
                _product.quantity = _weight; // Assign weight to product
                _this0.SearchProduct(_product, _weight);
                return;
              }
            }
            _this0.makeToast("danger", "Invalid product code scanned", _this0.$t("Error"));
            _this0.search_input = '';
            _this0.$refs.product_autocomplete.value = "";
            _this0.product_filter = [];
          }
          // else{
          //   //  No product found - Display Error Alert
          //   this.makeToast("danger", "Invalid product code scanned", this.$t("Error"));
          //   this.search_input= '';
          //   this.$refs.product_autocomplete.value = "";
          //   this.product_filter = [];

          // }

          // Regular product search (for non-weighing scale barcodes)
          var product_filter = _this0.products.filter(function (product) {
            return product.code === _this0.search_input || product.barcode.includes(_this0.search_input);
          });
          if (product_filter.length === 1) {
            _this0.SearchProduct(product_filter[0], weight);
          } else {
            _this0.product_filter = _this0.products.filter(function (product) {
              return product.name.toLowerCase().includes(_this0.search_input.toLowerCase()) || product.code.toLowerCase().includes(_this0.search_input.toLowerCase()) || product.barcode.toLowerCase().includes(_this0.search_input.toLowerCase());
            });
          }
        }, 800);
      } else {
        this.makeToast("warning", this.$t("SelectWarehouse"), this.$t("Warning"));
      }
    },
    //------------------------- get Result Value Search Product
    getResultValue: function getResultValue(result) {
      return result.code + " " + "(" + result.name + ")";
    },
    //------------------------- Submit Search Product
    SearchProduct: function SearchProduct(result) {
      var weight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.product = {};
      if (this.details.length > 0 && this.details.some(function (detail) {
        return detail.code === result.code;
      })) {
        this.makeToast("warning", this.$t("AlreadyAdd"), this.$t("Warning"));
      } else {
        if (result.product_type == 'is_service') {
          this.product.quantity = 1;
          this.product.code = result.code;
          this.product.stock = '---';
          this.product.fix_stock = '---';
        } else {
          this.product.code = result.code;
          this.product.stock = result.qte_sale;
          this.product.fix_stock = result.qte;

          // Check if it's a weighing scale product
          if (weight !== null) {
            this.product.quantity = weight; // Assign extracted weight
          } else {
            this.product.quantity = result.qte_sale < 1 ? result.qte_sale : 1;
          }
        }
        this.product.product_variant_id = result.product_variant_id;
        this.Get_Product_Details(result.id, result.product_variant_id);
      }
      this.search_input = '';
      this.$refs.product_autocomplete.value = "";
      this.product_filter = [];
    },
    //---------------------- Event Select Warehouse ------------------------------\\
    Selected_Warehouse: function Selected_Warehouse(value) {
      this.search_input = '';
      this.product_filter = [];
      this.Get_Products_By_Warehouse(value);

      // Refresh batch availability on existing batch-tracked lines since it is warehouse-specific.
      if (Array.isArray(this.details)) {
        var _iterator5 = _createForOfIteratorHelper(this.details),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var d = _step5.value;
            if (d && d.is_batch_tracked) {
              this.$set(d, "batches", []);
              this.fetch_batches_for_detail(d);
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    },
    // ---------------- Quick Add Customer (like POS) ---------------- \\
    Quick_Add_Client: function Quick_Add_Client() {
      this.reset_Form_client();
      this.$bvModal.show("Quick_Add_Customer");
    },
    reset_Form_client: function reset_Form_client() {
      this.client = {
        id: "",
        name: "",
        email: "",
        phone: "",
        tax_number: "",
        country: "",
        city: "",
        adresse: "",
        is_royalty_eligible: false
      };
    },
    Submit_Quick_Add_Customer: function Submit_Quick_Add_Customer() {
      var _this1 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      this.SubmitProcessing = true;
      this.$refs.Quick_Add_Customer_Form && this.$refs.Quick_Add_Customer_Form.validate().then(function (success) {
        if (!success) {
          nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
          _this1.SubmitProcessing = false;
          _this1.makeToast("danger", _this1.$t("Please_fill_the_form_correctly"), _this1.$t("Failed"));
          return;
        }
        axios.post("clients", {
          name: _this1.client.name,
          email: _this1.client.email || "",
          phone: _this1.client.phone || "",
          tax_number: _this1.client.tax_number || "",
          country: _this1.client.country || "",
          city: _this1.client.city || "",
          adresse: _this1.client.adresse || "",
          is_royalty_eligible: _this1.client.is_royalty_eligible || false
        }).then(function (_ref4) {
          var data = _ref4.data;
          nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
          _this1.SubmitProcessing = false;
          var newClient = data;
          if (newClient && newClient.id) {
            _this1.clients.push({
              id: newClient.id,
              name: newClient.name,
              phone: newClient.phone || ""
            });
            _this1.selectedClientId = newClient.id;
            // Reuse existing selection logic (points, credit, etc.)
            _this1.Selected_customer(newClient.id);
          }
          _this1.makeToast("success", _this1.$t("Successfully_Created"), _this1.$t("Success"));
          _this1.$bvModal.hide("Quick_Add_Customer");
          _this1.reset_Form_client();
        })["catch"](function () {
          nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
          _this1.SubmitProcessing = false;
          _this1.makeToast("danger", _this1.$t("InvalidData"), _this1.$t("Failed"));
        });
      });
    },
    //------------------------------------ Get Products By Warehouse -------------------------\\
    Get_Products_By_Warehouse: function Get_Products_By_Warehouse(id) {
      var _this10 = this;
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      axios.get("get_Products_by_warehouse/" + id + "?stock=" + 1 + "&is_sale=" + 1 + "&product_service=" + 1 + "&product_combo=" + 1).then(function (response) {
        _this10.products = response.data;
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
      })["catch"](function (error) {});
    },
    //----------------------------------------- Add Product to order list -------------------------\\
    add_product: function add_product() {
      if (this.details.length > 0) {
        this.Last_Detail_id();
      } else if (this.details.length === 0) {
        this.product.detail_id = 1;
      }
      this.details.push(this.product);
    },
    //----------------------------------------- Batch handling -------------------------\\
    fetch_batches_for_detail: function fetch_batches_for_detail(detail) {
      var _this11 = this;
      if (!detail) return;
      // Ensure all batch-related fields are reactive on the detail (some are added post-push via
      // direct assignment, which in Vue 2 is non-reactive — $set fixes that).
      if (!("batches_loading" in detail)) this.$set(detail, "batches_loading", false);
      if (!("available_batches" in detail)) this.$set(detail, "available_batches", []);
      if (!Array.isArray(detail.batches)) this.$set(detail, "batches", []);
      if (!detail.is_batch_tracked) {
        this.$set(detail, "batches_loading", false);
        return;
      }
      var wid = this.sale && this.sale.warehouse_id;
      if (!wid || !detail.product_id) {
        // Can't fetch yet — make sure we're not stuck in loading.
        this.$set(detail, "batches_loading", false);
        return;
      }
      var variantSeg = detail.product_variant_id != null && detail.product_variant_id !== "" ? detail.product_variant_id : 0;
      this.$set(detail, "batches_loading", true);
      axios.get("batches_for_sale/".concat(detail.product_id, "/").concat(wid, "/").concat(variantSeg), {
        timeout: 15000
      }).then(function (response) {
        var list = response && response.data && Array.isArray(response.data.batches) ? response.data.batches : [];
        _this11.$set(detail, "available_batches", list);
        if (!Array.isArray(detail.batches)) _this11.$set(detail, "batches", []);
        // Seed a first empty batch row if we have availability and the row is empty.
        if (detail.batches.length === 0 && list.length > 0) {
          _this11.add_batch_to_detail(detail);
        }
      })["catch"](function () {
        _this11.$set(detail, "available_batches", []);
      }).then(function () {
        // finally-equivalent: always clear the loading flag, even if unexpected errors slip through.
        _this11.$set(detail, "batches_loading", false);
      });
    },
    add_batch_to_detail: function add_batch_to_detail(detail) {
      if (!Array.isArray(detail.batches)) this.$set(detail, "batches", []);
      detail.batches.push({
        product_batch_id: null,
        batch_no: "",
        expiry_date: null,
        qty_available: 0,
        qty: detail.batches.length === 0 ? Number(detail.quantity) || 0 : 0
      });
    },
    remove_batch_from_detail: function remove_batch_from_detail(detail, idx) {
      if (!Array.isArray(detail.batches)) return;
      detail.batches.splice(idx, 1);
    },
    on_batch_select: function on_batch_select(detail, idx, batchId) {
      var list = Array.isArray(detail.available_batches) ? detail.available_batches : [];
      var row = detail.batches[idx];
      if (!row) return;
      var picked = list.find(function (b) {
        return b.id === batchId;
      });
      row.product_batch_id = batchId || null;
      if (picked) {
        row.batch_no = picked.batch_no;
        row.expiry_date = picked.expiry_date;
        row.qty_available = Number(picked.qty_available) || 0;
      } else {
        row.batch_no = "";
        row.expiry_date = null;
        row.qty_available = 0;
      }
    },
    on_batch_qty_input: function on_batch_qty_input(batchRow, raw) {
      var s = raw == null ? "" : String(raw);
      s = s.replace(",", ".").replace(/[^0-9.]/g, "");
      var firstDot = s.indexOf(".");
      if (firstDot !== -1) {
        s = s.slice(0, firstDot + 1) + s.slice(firstDot + 1).replace(/\./g, "");
      }
      this.$set(batchRow, "qty", s);
    },
    batch_total_qty: function batch_total_qty(detail) {
      if (!detail || !Array.isArray(detail.batches)) return 0;
      return detail.batches.reduce(function (sum, b) {
        var n = Number(b.qty);
        return sum + (Number.isFinite(n) ? n : 0);
      }, 0);
    },
    batch_qty_mismatch: function batch_qty_mismatch(detail) {
      if (!detail || !detail.is_batch_tracked) return false;
      var lineQty = Number(detail.quantity) || 0;
      return Math.abs(this.batch_total_qty(detail) - lineQty) > 0.0001;
    },
    // Serial / IMEI: true when a serialized line's selected serial count != quantity.
    serialCountMismatch: function serialCountMismatch(detail) {
      if (!detail || !detail.is_imei) return false;
      var count = Array.isArray(detail.serial_numbers) ? detail.serial_numbers.length : 0;
      return count !== Math.round(Number(detail.quantity) || 0);
    },
    batch_over_allocates: function batch_over_allocates(detail) {
      if (!detail || !detail.is_batch_tracked) return false;
      if (!Array.isArray(detail.batches)) return false;
      var _iterator6 = _createForOfIteratorHelper(detail.batches),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var b = _step6.value;
          var q = Number(b.qty) || 0;
          var avail = Number(b.qty_available) || 0;
          if (q > avail) return true;
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      return false;
    },
    expiry_pill_style: function expiry_pill_style(dateStr) {
      var base = {
        display: "inline-block",
        padding: "2px 8px",
        fontSize: "11px",
        fontWeight: "600",
        borderRadius: "10px"
      };
      if (!dateStr) return Object.assign(base, {
        background: "#f3f4f6",
        color: "#6b7280"
      });
      var today = new Date();
      today.setHours(0, 0, 0, 0);
      var exp = new Date(dateStr);
      if (isNaN(exp.getTime())) return Object.assign(base, {
        background: "#f3f4f6",
        color: "#6b7280"
      });
      exp.setHours(0, 0, 0, 0);
      var diffDays = Math.round((exp - today) / (1000 * 60 * 60 * 24));
      if (diffDays < 0) return Object.assign(base, {
        background: "#fee2e2",
        color: "#991b1b"
      });
      if (diffDays <= 30) return Object.assign(base, {
        background: "#fef3c7",
        color: "#92400e"
      });
      return Object.assign(base, {
        background: "#dcfce7",
        color: "#166534"
      });
    },
    batch_duplicates: function batch_duplicates(detail) {
      if (!detail || !detail.is_batch_tracked) return false;
      if (!Array.isArray(detail.batches)) return false;
      var seen = {};
      var _iterator7 = _createForOfIteratorHelper(detail.batches),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var b = _step7.value;
          if (!b.product_batch_id) continue;
          if (seen[b.product_batch_id]) return true;
          seen[b.product_batch_id] = true;
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      return false;
    },
    //-----------------------------------Verified QTY ------------------------------\\
    Verified_Qty: function Verified_Qty(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id === id) {
          if (isNaN(detail.quantity)) {
            this.details[i].quantity = detail.stock;
          }

          // Stock cap skipped when overselling is allowed. For packs the cap is
          // in base units: quantity × pack_multiplier must fit available stock.
          var _mult = Number(detail.pack_multiplier) || 1;
          if (!this.isOversellingAllowed && detail.quantity * _mult > detail.stock) {
            this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
            this.details[i].quantity = _mult > 1 ? Math.floor(detail.stock / _mult) : detail.stock;
          } else {
            this.details[i].quantity = detail.quantity;
          }
        }
      }
      this.$forceUpdate();
      this.CalculTotal();
    },
    //-----------------------------------increment QTY ------------------------------\\
    increment: function increment(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id == id) {
          // Stock guard skipped when overselling is allowed. Packs consume
          // pack_multiplier base units per pack.
          if (!this.isOversellingAllowed && (detail.quantity + 1) * (Number(detail.pack_multiplier) || 1) > detail.stock) {
            this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
          } else {
            this.formatNumber(this.details[i].quantity++, 2);
          }
        }
      }
      this.$forceUpdate();
      this.CalculTotal();
    },
    //-----------------------------------decrement QTY ------------------------------\\
    decrement: function decrement(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id == id) {
          if (detail.quantity - 1 > 0) {
            // Stock guard skipped when overselling is allowed.
            if (!this.isOversellingAllowed && detail.quantity - 1 > detail.stock) {
              this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
            } else {
              this.formatNumber(this.details[i].quantity--, 2);
            }
          }
        }
      }
      this.$forceUpdate();
      this.CalculTotal();
    },
    //------------------------------Formetted Numbers -------------------------\\
    formatNumber: function formatNumber(number, dec) {
      var value = (typeof number === "string" ? number : number.toString()).split(".");
      if (dec <= 0) return value[0];
      var formated = value[1] || "";
      if (formated.length > dec) return "".concat(value[0], ".").concat(formated.substr(0, dec));
      while (formated.length < dec) formated += "0";
      return "".concat(value[0], ".").concat(formated);
    },
    //-----------------------------------------Calcul Total ------------------------------\\
    CalculTotal: function CalculTotal() {
      this.total = 0;
      for (var i = 0; i < this.details.length; i++) {
        var tax = this.details[i].taxe * this.details[i].quantity;
        this.details[i].subtotal = parseFloat(this.details[i].quantity * this.details[i].Net_price + tax);
        this.total = parseFloat(this.total + this.details[i].subtotal);
      }

      // Calculate discount based on type (backward compatible: default to fixed if not set)
      var discountMethod = String(this.sale.discount_Method || '2');
      var discountValue = Number(this.sale.discount || 0);
      var discountAmount = 0;
      if (discountMethod === '1') {
        // Percentage discount on subtotal
        var percentAmount = parseFloat((this.total * (discountValue / 100)).toFixed(2));
        // Points-based discount is always a fixed amount; apply it in addition, but never exceed remaining subtotal
        var remainingAfterPercent = Math.max(this.total - percentAmount, 0);
        var pointsAmount = parseFloat(Math.min(Number(this.discount_from_points || 0), remainingAfterPercent).toFixed(2));
        discountAmount = percentAmount + pointsAmount;
      } else {
        // Fixed discount: apply both manual discount and points discount separately
        var manualDiscount = parseFloat(Math.min(discountValue, this.total).toFixed(2));
        var remainingAfterManual = Math.max(this.total - manualDiscount, 0);
        var pointsDiscount = parseFloat(Math.min(Number(this.discount_from_points || 0), remainingAfterManual).toFixed(2));
        discountAmount = manualDiscount + pointsDiscount;
      }
      var total_without_discount = parseFloat((this.total - discountAmount).toFixed(2));
      this.sale.TaxNet = parseFloat(total_without_discount * this.sale.tax_rate / 100);
      this.GrandTotal = parseFloat(total_without_discount + this.sale.TaxNet + this.sale.shipping);
      var grand_total = this.GrandTotal.toFixed(2);
      this.GrandTotal = parseFloat(grand_total);
      if (this.payment.status == 'paid') {
        this.payment.amount = this.formatNumber(this.GrandTotal, 2);
      }
    },
    //-----------------------------------Delete Detail Product ------------------------------\\
    delete_Product_Detail: function delete_Product_Detail(id) {
      for (var i = 0; i < this.details.length; i++) {
        if (id === this.details[i].detail_id) {
          this.details.splice(i, 1);
          this.CalculTotal();
        }
      }
    },
    //-----------------------------------verified Order List ------------------------------\\
    verifiedForm: function verifiedForm() {
      if (this.details.length <= 0) {
        this.makeToast("warning", this.$t("AddProductToList"), this.$t("Warning"));
        return false;
      } else {
        var count = 0;
        for (var i = 0; i < this.details.length; i++) {
          // Empty/zero quantity is always invalid; the stock-exceeded branch
          // is skipped when overselling is allowed.
          var overStock = !this.isOversellingAllowed && this.details[i].quantity > this.details[i].stock;
          if (this.details[i].quantity == "" || this.details[i].quantity === 0 || overStock) {
            count += 1;
            if (overStock) {
              this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
              return false;
            }
          }
          // enforce min price per line
          if ((this.details[i].min_price || 0) > 0 && this.details[i].Net_price < this.details[i].min_price) {
            this.makeToast('warning', this.$t('Price_below_min_not_allowed'), this.$t('Warning'));
            return false;
          }
        }
        if (count > 0) {
          this.makeToast("warning", this.$t("AddQuantity"), this.$t("Warning"));
          return false;
        } else {
          return true;
        }
      }
    },
    //---------- keyup OrderTax
    keyup_OrderTax: function keyup_OrderTax() {
      if (isNaN(this.sale.tax_rate)) {
        this.sale.tax_rate = 0;
      } else if (this.sale.tax_rate == '') {
        this.sale.tax_rate = 0;
        this.CalculTotal();
      } else {
        this.CalculTotal();
      }
    },
    //---------- keyup Discount
    keyup_Discount: function keyup_Discount() {
      if (isNaN(this.sale.discount)) {
        this.sale.discount = 0;
      } else if (this.sale.discount == '') {
        this.sale.discount = 0;
        this.CalculTotal();
      } else {
        this.CalculTotal();
      }
    },
    // Calculate discount amount for current sale (for display in summary card)
    // Calculate manual discount amount only (excluding points) for display
    getManualDiscountAmount: function getManualDiscountAmount() {
      try {
        var discountMethod = String(this.sale.discount_Method || '2'); // Default to fixed for backward compatibility
        var discountValue = Number(this.sale.discount || 0);
        var subtotal = this.total || 0;
        if (discountMethod === '1') {
          // Percentage discount on subtotal (manual discount only, no points)
          return parseFloat((subtotal * (discountValue / 100)).toFixed(2));
        } else {
          // Fixed discount (manual discount only, no points)
          return parseFloat(Math.min(discountValue, subtotal).toFixed(2));
        }
      } catch (e) {
        return Number(this.sale.discount || 0);
      }
    },
    // Calculate total discount amount (includes both manual and points) for display
    getCurrentSaleDiscountAmount: function getCurrentSaleDiscountAmount() {
      try {
        var discountMethod = String(this.sale.discount_Method || '2'); // Default to fixed for backward compatibility
        var discountValue = Number(this.sale.discount || 0);
        var subtotal = this.total || 0;
        if (discountMethod === '1') {
          // Percentage discount on subtotal
          var percentAmount = parseFloat((subtotal * (discountValue / 100)).toFixed(2));
          // Points-based discount is always a fixed amount; add it for display
          var remainingAfterPercent = Math.max(subtotal - percentAmount, 0);
          var pointsAmount = parseFloat(Math.min(Number(this.discount_from_points || 0), remainingAfterPercent).toFixed(2));
          return percentAmount + pointsAmount;
        } else {
          // Fixed discount: apply both manual discount and points discount separately
          var manualDiscount = parseFloat(Math.min(discountValue, subtotal).toFixed(2));
          var remainingAfterManual = Math.max(subtotal - manualDiscount, 0);
          var pointsDiscount = parseFloat(Math.min(Number(this.discount_from_points || 0), remainingAfterManual).toFixed(2));
          return manualDiscount + pointsDiscount;
        }
      } catch (e) {
        return Number(this.sale.discount || 0);
      }
    },
    //---------- keyup Shipping
    keyup_Shipping: function keyup_Shipping() {
      if (isNaN(this.sale.shipping)) {
        this.sale.shipping = 0;
      } else if (this.sale.shipping == '') {
        this.sale.shipping = 0;
        this.CalculTotal();
      } else {
        this.CalculTotal();
      }
    },
    processPayment: function processPayment() {
      var _this12 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              return _context2.a(2, _this12.Create_Sale());
          }
        }, _callee2);
      }))();
    },
    //--------------------------------- Create Sale -------------------------\\
    Create_Sale: function Create_Sale() {
      var _this13 = this;
      if (this.verifiedForm()) {
        if (Number(this.GrandTotal) < 0) {
          var msg = this.$t ? "".concat(this.$t('pos.Total_Payable'), " ").concat(this.$t('cannot_be_negative') || 'cannot be negative') : 'Total Payable cannot be negative';
          this.makeToast('warning', msg, this.$t ? this.$t('Warning') : 'Warning');
          return;
        }

        // Batch validation for batch-tracked products (only enforced when completed).
        if (this.sale.statut === 'completed' && this.hasBatchValidationErrors) {
          this.makeToast('warning', this.firstBatchErrorMessage, this.$t('Warning') || 'Warning');
          return;
        }

        // Serial / IMEI validation (only enforced when completed).
        if (this.sale.statut === 'completed' && this.hasSerialValidationErrors) {
          this.makeToast('warning', this.firstSerialErrorMessage, this.$t('Warning') || 'Warning');
          return;
        }

        // Start the progress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
        {
          this.paymentProcessing = true;
          var detailsPayload = this.details.map(function (d) {
            var out = Object.assign({}, d);
            // Strip helper UI-only fields and pass clean batches
            delete out.available_batches;
            delete out.batches_loading;
            if (d.is_batch_tracked && Array.isArray(d.batches)) {
              out.batches = d.batches.filter(function (b) {
                return b && b.product_batch_id && Number(b.qty) > 0;
              }).map(function (b) {
                return {
                  product_batch_id: Number(b.product_batch_id),
                  qty: Number(b.qty),
                  unit_price: d.Unit_price
                };
              });
            } else {
              out.batches = [];
            }
            return out;
          });
          axios.post("sales", {
            date: this.sale.date,
            client_id: this.selectedClientId,
            warehouse_id: this.sale.warehouse_id,
            sales_agent_id: this.sale.sales_agent_id || null,
            statut: this.sale.statut,
            notes: this.sale.notes,
            tax_rate: this.sale.tax_rate ? this.sale.tax_rate : 0,
            TaxNet: this.sale.TaxNet ? this.sale.TaxNet : 0,
            discount: this.sale.discount ? this.sale.discount : 0,
            discount_Method: String(this.sale.discount_Method || '2'),
            // '1' = percent, '2' = fixed
            shipping: this.sale.shipping ? this.sale.shipping : 0,
            GrandTotal: this.GrandTotal,
            details: detailsPayload,
            payment: this.payment,
            amount: parseFloat(this.payment.amount).toFixed(2),
            received_amount: parseFloat(this.payment.received_amount).toFixed(2),
            change: parseFloat(this.payment.received_amount - this.payment.amount).toFixed(2),
            discount_from_points: this.discount_from_points,
            used_points: this.used_points
          }).then(function (response) {
            _this13.makeToast("success", _this13.$t("Successfully_Created"), _this13.$t("Success"));
            nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
            _this13.paymentProcessing = false;
            _this13.$router.push({
              name: "index_sales"
            });
          })["catch"](function (error) {
            nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
            _this13.paymentProcessing = false;
            _this13.makeToast("danger", _this13.$t("InvalidData"), _this13.$t("Failed"));
          });
        }
      }
    },
    //-------------------------------- Get Last Detail Id -------------------------\\
    Last_Detail_id: function Last_Detail_id() {
      this.product.detail_id = 0;
      var len = this.details.length;
      this.product.detail_id = this.details[len - 1].detail_id + 1;
    },
    //---------------------------------Get Product Details ------------------------\\
    Get_Product_Details: function Get_Product_Details(product_id, variant_id) {
      var _this14 = this;
      var wid = this.sale && this.sale.warehouse_id ? this.sale.warehouse_id : null;
      var url = wid ? "/show_product_data/".concat(product_id, "/").concat(variant_id, "/").concat(wid) : "/show_product_data/".concat(product_id, "/").concat(variant_id);
      axios.get(url).then(function (response) {
        _this14.product.discount = response.data.discount;
        _this14.product.DiscountNet = response.data.DiscountNet;
        _this14.product.discount_Method = response.data.discount_method;
        _this14.product.product_id = response.data.id;
        _this14.product.product_type = response.data.product_type;
        _this14.product.name = response.data.name;
        _this14.product.Net_price = response.data.Net_price;
        _this14.product.Unit_price = response.data.Unit_price;
        _this14.product.Unit_price_wholesale = response.data.Unit_price_wholesale;
        // store immutable baselines to allow correct toggling between price types
        _this14.product.retail_unit_price = response.data.Unit_price;
        _this14.product.wholesale_unit_price = response.data.Unit_price_wholesale;
        _this14.product.wholesale_Net_price = response.data.wholesale_Net_price;
        _this14.product.min_price = response.data.min_price;
        _this14.product.taxe = response.data.tax_price;
        _this14.product.tax_method = response.data.tax_method;
        _this14.product.tax_percent = response.data.tax_percent;
        _this14.product.unitSale = response.data.unitSale;
        _this14.product.fix_price = response.data.fix_price;
        _this14.product.sale_unit_id = response.data.sale_unit_id;
        _this14.product.is_imei = response.data.is_imei;
        _this14.product.imei_number = '';
        _this14.$set(_this14.product, "serial_numbers", []);
        _this14.product.warehouse_location = response.data.warehouse_location ? response.data.warehouse_location.name ? "".concat(response.data.warehouse_location.code, " - ").concat(response.data.warehouse_location.name) : response.data.warehouse_location.code : null;
        _this14.product.price_type = 'retail';
        _this14.applyPriceType(_this14.product);

        // Multi-Pack Selling: attach available packs and pre-select the default.
        var packs = response.data.packs || [];
        var defPack = packs.find(function (p) {
          return p.is_default;
        }) || null;
        _this14.$set(_this14.product, "packs", packs);
        _this14.$set(_this14.product, "product_pack_id", defPack ? defPack.id : null);
        _this14.$set(_this14.product, "pack_multiplier", 1);
        _this14.$set(_this14.product, "pack_name", defPack ? defPack.name : null);

        // ensure min price respected
        if (_this14.product.Net_price < (_this14.product.min_price || 0)) {
          _this14.product.price_type = 'retail';
          _this14.applyPriceType(_this14.product);
        }

        // Reset batch data for this product; will be hydrated after push if batch-tracked.
        // Use $set so Vue 2 tracks these fields reactively even though this.product was
        // reassigned to a bare {} in SearchProduct (direct assignment afterwards is non-reactive).
        _this14.$set(_this14.product, "is_batch_tracked", !!response.data.is_batch_tracked);
        _this14.$set(_this14.product, "batches", []);
        _this14.$set(_this14.product, "available_batches", []);
        _this14.$set(_this14.product, "batches_loading", false);
        _this14.add_product();
        _this14.CalculTotal();
        if (_this14.product.is_batch_tracked) {
          // Fetch available batches for the just-added line (last detail).
          var last = _this14.details[_this14.details.length - 1];
          if (last) {
            _this14.fetch_batches_for_detail(last);
          }
        }
      });
    },
    applyPriceType: function applyPriceType(prod) {
      // choose immutable baseline based on selected price type
      var selectedIsWholesale = prod.price_type === 'wholesale';
      var hasWholesaleBaseline = prod.wholesale_unit_price !== undefined && prod.wholesale_unit_price !== null && prod.wholesale_unit_price !== '';
      var hasRetailBaseline = prod.retail_unit_price !== undefined && prod.retail_unit_price !== null && prod.retail_unit_price !== '';
      if (selectedIsWholesale && hasWholesaleBaseline) {
        prod.Unit_price = parseFloat(prod.wholesale_unit_price);
      } else if (hasRetailBaseline) {
        prod.Unit_price = parseFloat(prod.retail_unit_price);
      }

      // Recompute discount/tax derived values based on Unit_price and method
      if (prod.discount_Method == "2") {
        prod.DiscountNet = parseFloat(prod.discount || 0);
      } else {
        prod.DiscountNet = parseFloat((parseFloat(prod.Unit_price) || 0) * (parseFloat(prod.discount) || 0) / 100);
      }
      var unitAfterDiscount = (parseFloat(prod.Unit_price) || 0) - (parseFloat(prod.DiscountNet) || 0);
      var taxPercent = parseFloat(prod.tax_percent) || 0;
      if (prod.tax_method == "1") {
        // Exclusive
        prod.Net_price = parseFloat(unitAfterDiscount);
        prod.taxe = parseFloat(taxPercent * unitAfterDiscount / 100);
      } else {
        // Inclusive
        prod.taxe = parseFloat(unitAfterDiscount * (taxPercent / 100));
        prod.Net_price = parseFloat((parseFloat(prod.Unit_price) || 0) - (parseFloat(prod.taxe) || 0) - (parseFloat(prod.DiscountNet) || 0));
      }
    },
    onChangePriceType: function onChangePriceType(detail, newType) {
      if (newType) {
        detail.price_type = newType;
      }
      // Multi-Pack Selling: a non-default pack fixes the price, ignoring retail/wholesale.
      var selPack = this.getSelectedPack(detail);
      if (selPack && !selPack.is_default) {
        this.applyPackPrice(detail);
        this.$forceUpdate();
        this.CalculTotal();
        return;
      }
      this.applyPriceType(detail);
      // enforce min price rule on change
      if (detail.Net_price < detail.min_price) {
        this.makeToast('warning', this.$t('Price_below_min_not_allowed'), this.$t('Warning'));
        // revert to retail if wholesale violates minimum
        detail.price_type = 'retail';
        this.applyPriceType(detail);
      }
      this.$forceUpdate();
      this.CalculTotal();
    },
    //--------------------------- Multi-Pack Selling helpers ---------------------------\\
    getSelectedPack: function getSelectedPack(detail) {
      if (!detail || !detail.packs || !detail.product_pack_id) return null;
      return detail.packs.find(function (p) {
        return String(p.id) === String(detail.product_pack_id);
      }) || null;
    },
    // Recompute a line's price from the selected pack. The default pack follows the
    // retail/wholesale baseline; any other pack uses its own fixed price. Always
    // keeps pack_multiplier / pack_name in sync for the backend stock math.
    applyPackPrice: function applyPackPrice(detail) {
      var pack = this.getSelectedPack(detail);
      if (!pack || pack.is_default) {
        detail.product_pack_id = pack ? pack.id : null;
        detail.pack_multiplier = 1;
        detail.pack_name = pack ? pack.name : null;
        this.applyPriceType(detail);
        return;
      }
      detail.pack_multiplier = pack.multiplier;
      detail.pack_name = pack.name;
      detail.Unit_price = parseFloat(pack.price) || 0;
      if (detail.discount_Method == "2") {
        detail.DiscountNet = parseFloat(detail.discount || 0);
      } else {
        detail.DiscountNet = parseFloat((parseFloat(detail.Unit_price) || 0) * (parseFloat(detail.discount) || 0) / 100);
      }
      var unitAfterDiscount = (parseFloat(detail.Unit_price) || 0) - (parseFloat(detail.DiscountNet) || 0);
      var taxPercent = parseFloat(detail.tax_percent) || 0;
      if (detail.tax_method == "1") {
        detail.Net_price = parseFloat(unitAfterDiscount);
        detail.taxe = parseFloat(taxPercent * unitAfterDiscount / 100);
      } else {
        detail.taxe = parseFloat(unitAfterDiscount * (taxPercent / 100));
        detail.Net_price = parseFloat((parseFloat(detail.Unit_price) || 0) - (parseFloat(detail.taxe) || 0) - (parseFloat(detail.DiscountNet) || 0));
      }
    },
    onChangePack: function onChangePack(detail) {
      this.applyPackPrice(detail);
      // Stock guard: a pack consumes pack_multiplier base units per pack.
      if (!this.isOversellingAllowed && detail.product_type !== 'is_service') {
        var mult = Number(detail.pack_multiplier) || 1;
        var avail = Number(detail.stock) || 0;
        if (mult > 1 && mult > avail) {
          // Not enough stock for even a single pack → revert to the default pack.
          this.makeToast('warning', this.$t('Pack_Stock_Insufficient') || 'Not enough stock for this pack', this.$t('Warning'));
          var def = (detail.packs || []).find(function (p) {
            return p.is_default;
          }) || null;
          detail.product_pack_id = def ? def.id : null;
          this.applyPackPrice(detail);
        } else if (mult > 1 && Number(detail.quantity) * mult > avail) {
          detail.quantity = Math.floor(avail / mult);
          this.makeToast('warning', this.$t('LowStock'), this.$t('Warning'));
        }
      }
      this.$forceUpdate();
      this.CalculTotal();
    },
    //---------------------------------------Get Elements ------------------------------\\
    GetElements: function GetElements() {
      var _this15 = this;
      axios.get("sales/create").then(function (response) {
        _this15.clients = response.data.clients;
        _this15.warehouses = response.data.warehouses;
        _this15.sales_agents = response.data.sales_agents || [];
        _this15.accounts = response.data.accounts;
        _this15.payment_methods = response.data.payment_methods;
        _this15.point_to_amount_rate = response.data.point_to_amount_rate;
        _this15.isLoading = false;
      })["catch"](function (response) {
        setTimeout(function () {
          _this15.isLoading = false;
        }, 500);
      });

      // Load POS settings to read the `allow_overselling` flag. Runs in parallel
      // with the main GetElements call. Failures are silent — page works as
      // before (strict stock checks) when the setting cannot be retrieved.
      axios.get("get_pos_Settings").then(function (response) {
        var ps = response && response.data && response.data.pos_settings;
        if (ps) {
          _this15.pos_settings = _objectSpread(_objectSpread({}, _this15.pos_settings), ps);
        }
      })["catch"](function () {/* ignore — fall back to default OFF */});
    }
  },
  //----------------------------- Created function-------------------
  created: function created() {
    this.GetElements();
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/create_sale.vue?vue&type=template&id=e1ed42cc"
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/create_sale.vue?vue&type=template&id=e1ed42cc ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("AddSale"),
      folder: _vm.$t("ListSales")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("validation-observer", {
    ref: "create_sale"
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Submit_Sale.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      lg: "12",
      md: "12",
      sm: "12"
    }
  }, [_c("b-card", [_c("b-row", [_c("b-modal", {
    attrs: {
      "hide-footer": "",
      id: "open_scan",
      size: "md",
      title: "Barcode Scanner"
    }
  }, [_c("qrcode-scanner", {
    staticStyle: {
      width: "100%",
      height: "calc(100vh - 56px)"
    },
    attrs: {
      qrbox: 250,
      fps: 10
    },
    on: {
      result: _vm.onScan
    }
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
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
            label: _vm.$t("date") + " " + "*"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "date-feedback",
            type: "date"
          },
          model: {
            value: _vm.sale.date,
            callback: function callback($$v) {
              _vm.$set(_vm.sale, "date", $$v);
            },
            expression: "sale.date"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "OrderTax-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 4059139714)
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Customer",
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
            label: _vm.$t("Customer") + " " + "*"
          }
        }, [_c("b-input-group", {
          staticClass: "category-input-group"
        }, [_c("v-select", {
          "class": {
            "is-invalid": !!errors.length
          },
          attrs: {
            state: errors[0] ? false : valid ? true : null,
            reduce: function reduce(label) {
              return label.value;
            },
            placeholder: _vm.$t("Choose_Customer"),
            options: _vm.clients.map(function (clients) {
              return {
                label: clients.name,
                value: clients.id
              };
            })
          },
          on: {
            input: _vm.Selected_customer
          },
          model: {
            value: _vm.selectedClientId,
            callback: function callback($$v) {
              _vm.selectedClientId = $$v;
            },
            expression: "selectedClientId"
          }
        }), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Customers_add") ? _c("b-input-group-append", [_c("b-button", {
          staticClass: "category-add-btn",
          attrs: {
            variant: "primary",
            title: _vm.$t("Quick_Add_Customer")
          },
          on: {
            click: _vm.Quick_Add_Client
          }
        }, [_c("lucide-icon", {
          attrs: {
            name: "plus"
          }
        })], 1)], 1) : _vm._e()], 1), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(errors[0]))])], 1);
      }
    }], null, false, 589495003)
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
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
            label: _vm.$t("warehouse") + " " + "*"
          }
        }, [_c("v-select", {
          "class": {
            "is-invalid": !!errors.length
          },
          attrs: {
            state: errors[0] ? false : valid ? true : null,
            disabled: _vm.details.length > 0,
            reduce: function reduce(label) {
              return label.value;
            },
            placeholder: _vm.$t("Choose_Warehouse"),
            options: _vm.warehouses.map(function (warehouses) {
              return {
                label: warehouses.name,
                value: warehouses.id
              };
            })
          },
          on: {
            input: _vm.Selected_Warehouse
          },
          model: {
            value: _vm.sale.warehouse_id,
            callback: function callback($$v) {
              _vm.$set(_vm.sale, "warehouse_id", $$v);
            },
            expression: "sale.warehouse_id"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(errors[0]))])], 1);
      }
    }], null, false, 1961133601)
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Sales Agent"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref3) {
        var valid = _ref3.valid,
          errors = _ref3.errors;
        return _c("b-form-group", {
          attrs: {
            label: _vm.$t("Sales_Agent")
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
            placeholder: _vm.$t("PleaseSelect"),
            options: _vm.sales_agents.map(function (ag) {
              return {
                label: ag.name,
                value: ag.id
              };
            })
          },
          model: {
            value: _vm.sale.sales_agent_id,
            callback: function callback($$v) {
              _vm.$set(_vm.sale, "sales_agent_id", $$v);
            },
            expression: "sale.sales_agent_id"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(errors[0]))])], 1);
      }
    }], null, false, 2662529287)
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-5",
    attrs: {
      md: "12"
    }
  }, [_c("h6", [_vm._v(_vm._s(_vm.$t("ProductName")))]), _vm._v(" "), _c("div", {
    staticClass: "autocomplete",
    attrs: {
      id: "autocomplete"
    }
  }, [_c("div", {
    staticClass: "input-with-icon"
  }, [_c("img", {
    staticClass: "scan-icon",
    attrs: {
      src: "/assets_setup/scan.png",
      alt: "Scan"
    },
    on: {
      click: _vm.showModal
    }
  }), _vm._v(" "), _c("input", {
    ref: "product_autocomplete",
    staticClass: "autocomplete-input",
    attrs: {
      placeholder: _vm.$t("Scan_Search_Product_by_Code_Name")
    },
    on: {
      input: function input(e) {
        return _vm.search_input = e.target.value;
      },
      keyup: function keyup($event) {
        return _vm.search(_vm.search_input);
      },
      focus: _vm.handleFocus,
      blur: _vm.handleBlur
    }
  })]), _vm._v(" "), _c("ul", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.focused,
      expression: "focused"
    }],
    staticClass: "autocomplete-result-list"
  }, _vm._l(_vm.product_filter, function (product_fil) {
    return _c("li", {
      staticClass: "autocomplete-result",
      on: {
        mousedown: function mousedown($event) {
          return _vm.SearchProduct(product_fil);
        }
      }
    }, [_vm._v(_vm._s(_vm.getResultValue(product_fil)))]);
  }), 0)])]), _vm._v(" "), _c("b-col", {
    staticClass: "mb-4",
    attrs: {
      md: "12"
    }
  }, [_c("h5", [_vm._v(_vm._s(_vm.$t("order_products")) + " *")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-hover"
  }, [_c("thead", {
    staticClass: "bg-gray-300"
  }, [_c("tr", [_c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("ProductName")))]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("Net_Unit_Price")))]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("CurrentStock")))]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("Qty")))]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("Discount")))]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("Tax")))]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("SubTotal")))]), _vm._v(" "), _c("th", {
    staticClass: "text-center",
    attrs: {
      scope: "col"
    }
  }, [_c("lucide-icon", {
    staticClass: "text-25",
    attrs: {
      name: "x"
    }
  })], 1)])]), _vm._v(" "), _c("tbody", [_vm.details.length <= 0 ? _c("tr", [_c("td", {
    attrs: {
      colspan: "9"
    }
  }, [_vm._v(_vm._s(_vm.$t("NodataAvailable")))])]) : _vm._e(), _vm._v(" "), _vm._l(_vm.details, function (detail) {
    return [_c("tr", {
      key: "row-" + detail.detail_id
    }, [_c("td", [_vm._v(_vm._s(detail.detail_id))]), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s(detail.code))]), _vm._v(" "), _c("br"), _vm._v(" "), _c("span", {
      staticClass: "badge badge-success"
    }, [_vm._v(_vm._s(detail.name))]), _vm._v(" "), detail.warehouse_location ? _c("div", {
      staticClass: "text-muted mt-1",
      staticStyle: {
        "font-size": "12px"
      }
    }, [_vm._v("\n                            " + _vm._s(_vm.$t("Warehouse_Locations")) + ": "), _c("strong", [_vm._v(_vm._s(detail.warehouse_location))])]) : _vm._e(), _vm._v(" "), detail.is_batch_tracked ? _c("div", {
      staticClass: "mt-1"
    }, [_c("span", {
      staticClass: "badge",
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
    }), _vm._v(_vm._s(_vm.$t("Batches") || "Batches") + "\n                            ")], 1)]) : _vm._e()]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("div", {
      staticClass: "mr-2"
    }, [_c("span", [_vm._v(_vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.formatNumber(detail.Net_price, 3)))]), _vm._v(" "), detail.min_price && detail.Net_price < detail.min_price ? _c("small", {
      staticClass: "text-danger d-block"
    }, [_vm._v(_vm._s(_vm.$t("Price_below_min_not_allowed")))]) : _vm._e()]), _vm._v(" "), _c("v-select", {
      staticClass: "ml-2",
      staticStyle: {
        "min-width": "160px"
      },
      attrs: {
        options: [{
          label: _vm.$t("Retail Price"),
          value: "retail"
        }, {
          label: _vm.$t("Wholesale Price"),
          value: "wholesale"
        }],
        reduce: function reduce(opt) {
          return opt.value;
        }
      },
      on: {
        input: function input(val) {
          return _vm.onChangePriceType(detail, val);
        }
      },
      model: {
        value: detail.price_type,
        callback: function callback($$v) {
          _vm.$set(detail, "price_type", $$v);
        },
        expression: "detail.price_type"
      }
    }), _vm._v(" "), detail.packs && detail.packs.length ? _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: detail.product_pack_id,
        expression: "detail.product_pack_id"
      }],
      staticClass: "form-control form-control-sm ml-2",
      staticStyle: {
        "min-width": "160px"
      },
      attrs: {
        title: _vm.$t("Pack")
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(detail, "product_pack_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.onChangePack(detail);
        }]
      }
    }, _vm._l(detail.packs, function (pack) {
      return _c("option", {
        key: "pk-" + detail.detail_id + "-" + pack.id,
        attrs: {
          disabled: !_vm.isOversellingAllowed && detail.product_type !== "is_service" && Number(pack.multiplier) > 1 && Number(pack.multiplier) > Number(detail.stock)
        },
        domProps: {
          value: pack.id
        }
      }, [_vm._v("\n                                " + _vm._s(pack.name) + " (×" + _vm._s(pack.multiplier) + ")"), !_vm.isOversellingAllowed && detail.product_type !== "is_service" && Number(pack.multiplier) > 1 && Number(pack.multiplier) > Number(detail.stock) ? [_vm._v(" — " + _vm._s(_vm.$t("Out_of_Stock") || "out of stock"))] : _vm._e()], 2);
    }), 0) : _vm._e()], 1)]), _vm._v(" "), _c("td", [detail.product_type == "is_service" ? _c("span", {
      staticClass: "badge badge-warning"
    }, [_vm._v("----")]) : _c("span", {
      staticClass: "badge badge-warning"
    }, [_vm._v(_vm._s(detail.stock) + " " + _vm._s(detail.unitSale))])]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "quantity"
    }, [_c("b-input-group", [_c("b-input-group-prepend", [_c("span", {
      staticClass: "btn btn-primary btn-sm",
      on: {
        click: function click($event) {
          return _vm.decrement(detail, detail.detail_id);
        }
      }
    }, [_vm._v("-")])]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: detail.quantity,
        expression: "detail.quantity",
        modifiers: {
          number: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        min: 0.0,
        max: detail.stock
      },
      domProps: {
        value: detail.quantity
      },
      on: {
        keyup: function keyup($event) {
          return _vm.Verified_Qty(detail, detail.detail_id);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(detail, "quantity", _vm._n($event.target.value));
        },
        blur: function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    }), _vm._v(" "), _c("b-input-group-append", [_c("span", {
      staticClass: "btn btn-primary btn-sm",
      on: {
        click: function click($event) {
          return _vm.increment(detail, detail.detail_id);
        }
      }
    }, [_vm._v("+")])])], 1)], 1)]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.formatNumber(detail.DiscountNet * detail.quantity, 2)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.formatNumber(detail.taxe * detail.quantity, 2)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.currentUser.currency) + " " + _vm._s(detail.subtotal.toFixed(2)))]), _vm._v(" "), _c("td", [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("edit_product_sale") ? _c("lucide-icon", {
      staticClass: "text-25 text-success cursor-pointer",
      attrs: {
        name: "pencil"
      },
      on: {
        click: function click($event) {
          return _vm.Modal_Updat_Detail(detail);
        }
      }
    }) : _vm._e(), _vm._v(" "), _c("lucide-icon", {
      staticClass: "text-25 text-danger cursor-pointer",
      attrs: {
        name: "x"
      },
      on: {
        click: function click($event) {
          return _vm.delete_Product_Detail(detail.detail_id);
        }
      }
    })], 1)]), _vm._v(" "), detail.is_batch_tracked ? _c("tr", {
      key: "batches-" + detail.detail_id,
      staticStyle: {
        background: "transparent"
      }
    }, [_c("td", {
      staticStyle: {
        padding: "0",
        "border-top": "0"
      },
      attrs: {
        colspan: "9"
      }
    }, [_c("div", {
      staticStyle: {
        margin: "6px 8px 14px 8px",
        border: "1px solid #e0e7ff",
        "border-radius": "10px",
        overflow: "hidden",
        background: "linear-gradient(180deg, #f8faff 0%, #ffffff 100%)"
      }
    }, [_c("div", {
      staticStyle: {
        display: "flex",
        "align-items": "center",
        "justify-content": "space-between",
        padding: "8px 14px",
        background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
        color: "#fff",
        "font-size": "12px",
        "font-weight": "700",
        "text-transform": "uppercase",
        "letter-spacing": "0.3px"
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
    }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Batches") || "Batches"))]), _vm._v(" "), _c("span", {
      staticStyle: {
        background: "rgba(255,255,255,0.22)",
        padding: "1px 8px",
        "border-radius": "10px",
        "font-size": "10px",
        "font-weight": "600"
      }
    }, [_vm._v("\n                                  " + _vm._s((detail.batches || []).length) + " " + _vm._s(_vm.$t("items") || "items") + "\n                                  "), (detail.batches || []).length ? _c("span", {
      staticStyle: {
        "margin-left": "4px"
      }
    }, [_vm._v("\n                                    · " + _vm._s(_vm.$t("Total")) + ": " + _vm._s(_vm.formatNumber(_vm.batch_total_qty(detail), 2)) + " / " + _vm._s(_vm.formatNumber(Number(detail.quantity) || 0, 2)) + "\n                                  ")]) : _vm._e()])], 1), _vm._v(" "), _c("button", {
      staticStyle: {
        padding: "4px 10px",
        "font-size": "11px",
        "font-weight": "600",
        background: "#ffffff",
        color: "#4f46e5",
        border: "none",
        "border-radius": "6px",
        cursor: "pointer",
        display: "inline-flex",
        "align-items": "center"
      },
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.add_batch_to_detail(detail);
        }
      }
    }, [_c("lucide-icon", {
      staticStyle: {
        "margin-right": "4px"
      },
      attrs: {
        name: "plus"
      }
    }), _vm._v(_vm._s(_vm.$t("Add") || "Add") + "\n                              ")], 1)]), _vm._v(" "), detail.batches_loading ? _c("div", {
      staticStyle: {
        padding: "10px 14px",
        "text-align": "center",
        color: "#6b7280",
        "font-size": "12px"
      }
    }, [_c("div", {
      staticClass: "spinner sm spinner-primary",
      staticStyle: {
        display: "inline-block",
        "margin-right": "8px"
      }
    }), _vm._v("\n                              " + _vm._s(_vm.$t("Loading") || "Loading...") + "\n                            ")]) : !(detail.available_batches && detail.available_batches.length) ? _c("div", {
      staticStyle: {
        padding: "12px 14px",
        "text-align": "center",
        color: "#b91c1c",
        "font-size": "12px",
        background: "#fef2f2"
      }
    }, [_c("lucide-icon", {
      staticStyle: {
        "margin-right": "6px"
      },
      attrs: {
        name: "info"
      }
    }), _vm._v("\n                              " + _vm._s(_vm.$t("No_Batches_Available") || "No available batches for this product in the selected warehouse") + "\n                            ")], 1) : !detail.batches || detail.batches.length === 0 ? _c("div", {
      staticStyle: {
        padding: "12px 14px",
        "text-align": "center",
        color: "#6b7280",
        "font-size": "12px"
      }
    }, [_c("lucide-icon", {
      staticStyle: {
        "margin-right": "6px"
      },
      attrs: {
        name: "info"
      }
    }), _vm._v("\n                              " + _vm._s(_vm.$t("Click_Add_To_Pick_Batch") || 'Click "Add" to pick a batch') + "\n                            ")], 1) : _c("table", {
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
        padding: "7px 10px",
        "text-align": "left",
        color: "#3730a3",
        "font-weight": "700",
        "text-transform": "uppercase",
        "font-size": "10px",
        "letter-spacing": "0.3px"
      }
    }, [_vm._v(_vm._s(_vm.$t("Batch_No")) + " *")]), _vm._v(" "), _c("th", {
      staticStyle: {
        padding: "7px 10px",
        "text-align": "left",
        color: "#3730a3",
        "font-weight": "700",
        "text-transform": "uppercase",
        "font-size": "10px",
        "letter-spacing": "0.3px"
      }
    }, [_vm._v(_vm._s(_vm.$t("Expiry_Date")))]), _vm._v(" "), _c("th", {
      staticStyle: {
        padding: "7px 10px",
        "text-align": "right",
        color: "#3730a3",
        "font-weight": "700",
        "text-transform": "uppercase",
        "font-size": "10px",
        "letter-spacing": "0.3px"
      }
    }, [_vm._v(_vm._s(_vm.$t("Available") || "Available"))]), _vm._v(" "), _c("th", {
      staticStyle: {
        padding: "7px 10px",
        "text-align": "right",
        color: "#3730a3",
        "font-weight": "700",
        "text-transform": "uppercase",
        "font-size": "10px",
        "letter-spacing": "0.3px"
      }
    }, [_vm._v(_vm._s(_vm.$t("Quantity")) + " *")]), _vm._v(" "), _c("th", {
      staticStyle: {
        padding: "7px 10px",
        width: "40px"
      }
    })])]), _vm._v(" "), _c("tbody", _vm._l(detail.batches, function (b, bIdx) {
      return _c("tr", {
        key: "b-" + detail.detail_id + "-" + bIdx,
        style: {
          background: bIdx % 2 === 1 ? "#f8faff" : "#ffffff",
          borderTop: "1px solid #e0e7ff"
        }
      }, [_c("td", {
        staticStyle: {
          padding: "6px 8px",
          "vertical-align": "middle",
          "min-width": "220px"
        }
      }, [_c("v-select", {
        staticStyle: {
          "font-size": "12px"
        },
        attrs: {
          value: b.product_batch_id,
          options: detail.available_batches.map(function (ab) {
            return {
              label: ab.batch_no + (ab.expiry_date ? " · " + _vm.$t("Exp") + " " + ab.expiry_date : "") + " · " + ab.qty_available,
              value: ab.id
            };
          }),
          reduce: function reduce(opt) {
            return opt.value;
          },
          placeholder: _vm.$t("Choose_Batch") || "Choose batch",
          "append-to-body": true
        },
        on: {
          input: function input(val) {
            return _vm.on_batch_select(detail, bIdx, val);
          }
        }
      })], 1), _vm._v(" "), _c("td", {
        staticStyle: {
          padding: "6px 8px",
          "vertical-align": "middle"
        }
      }, [b.expiry_date ? _c("span", {
        style: _vm.expiry_pill_style(b.expiry_date)
      }, [_vm._v("\n                                      " + _vm._s(b.expiry_date) + "\n                                    ")]) : _c("span", {
        staticStyle: {
          color: "#9ca3af"
        }
      }, [_vm._v("—")])]), _vm._v(" "), _c("td", {
        staticStyle: {
          padding: "6px 8px",
          "vertical-align": "middle",
          "text-align": "right",
          "font-weight": "600",
          color: "#3730a3"
        }
      }, [_vm._v("\n                                    " + _vm._s(_vm.formatNumber(Number(b.qty_available) || 0, 2)) + "\n                                  ")]), _vm._v(" "), _c("td", {
        staticStyle: {
          padding: "6px 8px",
          "vertical-align": "middle"
        }
      }, [_c("b-form-input", {
        style: {
          textAlign: "right",
          fontSize: "12px",
          padding: "5px 8px",
          height: "30px",
          borderRadius: "6px",
          borderColor: Number(b.qty) > (Number(b.qty_available) || 0) ? "#fca5a5" : undefined
        },
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
            return _vm.on_batch_qty_input(b, val);
          }
        }
      })], 1), _vm._v(" "), _c("td", {
        staticStyle: {
          padding: "6px 8px",
          "vertical-align": "middle",
          "text-align": "center"
        }
      }, [_c("button", {
        staticStyle: {
          width: "26px",
          height: "26px",
          padding: "0",
          display: "inline-flex",
          "align-items": "center",
          "justify-content": "center",
          background: "#fef2f2",
          color: "#b91c1c",
          border: "1px solid #fecaca",
          "border-radius": "6px",
          cursor: "pointer",
          "font-size": "12px"
        },
        attrs: {
          type: "button"
        },
        on: {
          click: function click($event) {
            return _vm.remove_batch_from_detail(detail, bIdx);
          }
        }
      }, [_c("lucide-icon", {
        attrs: {
          name: "x"
        }
      })], 1)])]);
    }), 0)]), _vm._v(" "), detail.available_batches && detail.available_batches.length && _vm.batch_qty_mismatch(detail) ? _c("div", {
      staticStyle: {
        padding: "8px 14px",
        background: "#fef3c7",
        color: "#92400e",
        "font-size": "12px",
        "font-weight": "600",
        "border-top": "1px solid #fde68a",
        display: "flex",
        "align-items": "center"
      }
    }, [_c("lucide-icon", {
      staticStyle: {
        "margin-right": "6px"
      },
      attrs: {
        name: "info"
      }
    }), _vm._v("\n                              " + _vm._s(_vm.$t("Total_batch_qty_mismatch") || "Total batch quantity does not match the line quantity") + "\n                              (" + _vm._s(_vm.formatNumber(_vm.batch_total_qty(detail), 2)) + " / " + _vm._s(_vm.formatNumber(Number(detail.quantity) || 0, 2)) + ")\n                            ")], 1) : _vm._e()])])]) : _vm._e(), _vm._v(" "), detail.is_imei ? _c("tr", {
      key: "serials-" + detail.detail_id,
      staticStyle: {
        background: "transparent"
      }
    }, [_c("td", {
      staticStyle: {
        padding: "0 8px 16px 8px",
        border: "none"
      },
      attrs: {
        colspan: "9"
      }
    }, [_c("div", {
      staticStyle: {
        background: "#f8fafc",
        border: "1px solid #e2e8f0",
        "border-left": "4px solid #0ea5e9",
        "border-radius": "10px",
        padding: "14px 18px"
      }
    }, [_c("serial-numbers-field", {
      attrs: {
        mode: "select",
        "required-count": detail.quantity,
        "product-id": detail.product_id,
        "product-variant-id": detail.product_variant_id,
        "warehouse-id": _vm.sale.warehouse_id
      },
      model: {
        value: detail.serial_numbers,
        callback: function callback($$v) {
          _vm.$set(detail, "serial_numbers", $$v);
        },
        expression: "detail.serial_numbers"
      }
    })], 1)])]) : _vm._e()];
  })], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "offset-md-8 col-md-4 mt-4"
  }, [_c("table", {
    staticClass: "table table-striped table-sm"
  }, [_c("tbody", [_c("tr", [_c("td", {
    staticClass: "bold"
  }, [_vm._v(_vm._s(_vm.$t("OrderTax")))]), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.sale.TaxNet.toFixed(2)) + " (" + _vm._s(_vm.formatNumber(_vm.sale.tax_rate, 2)) + " %)")])])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "bold"
  }, [_vm._v(_vm._s(_vm.$t("Discount")))]), _vm._v(" "), _c("td", [String(_vm.sale.discount_Method || "2") === "1" ? [_vm._v("\n                          " + _vm._s(_vm.formatNumber(_vm.sale.discount, 2)) + "% (" + _vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.getManualDiscountAmount().toFixed(2)) + ")\n                        ")] : [_vm._v("\n                          " + _vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.getManualDiscountAmount().toFixed(2)) + "\n                        ")]], 2)]), _vm._v(" "), _vm.discount_from_points && _vm.discount_from_points > 0 ? _c("tr", [_c("td", {
    staticClass: "bold"
  }, [_vm._v(_vm._s(_vm.$t("Discount_from_Points")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.discount_from_points.toFixed(2)))])]) : _vm._e(), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "bold"
  }, [_vm._v(_vm._s(_vm.$t("Shipping")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.sale.shipping.toFixed(2)))])]), _vm._v(" "), _c("tr", [_c("td", [_c("span", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t("Total")))])]), _vm._v(" "), _c("td", [_c("span", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.GrandTotal.toFixed(2)))])])])])])]), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("edit_tax_discount_shipping_sale") ? _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
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
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "OrderTax-feedback",
            label: "Order Tax"
          },
          on: {
            keyup: function keyup($event) {
              return _vm.keyup_OrderTax();
            }
          },
          model: {
            value: _vm.sale.tax_rate,
            callback: function callback($$v) {
              _vm.$set(_vm.sale, "tax_rate", _vm._n($$v));
            },
            expression: "sale.tax_rate"
          }
        })], 1), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "OrderTax-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 2557352802)
  })], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("edit_tax_discount_shipping_sale") ? _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
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
        }, [_c("div", {
          staticClass: "d-flex",
          staticStyle: {
            gap: "8px",
            "align-items": "center"
          }
        }, [_c("b-input-group", {
          staticClass: "flex-grow-1",
          attrs: {
            append: _vm.sale.discount_Method === "1" ? "%" : _vm.currentUser.currency
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "Discount-feedback",
            label: "Discount"
          },
          on: {
            keyup: function keyup($event) {
              return _vm.keyup_Discount();
            }
          },
          model: {
            value: _vm.sale.discount,
            callback: function callback($$v) {
              _vm.$set(_vm.sale, "discount", _vm._n($$v));
            },
            expression: "sale.discount"
          }
        })], 1), _vm._v(" "), _c("b-form-select", {
          staticStyle: {
            "max-width": "110px"
          },
          attrs: {
            options: [{
              text: "Fixed",
              value: "2"
            }, {
              text: "Percent %",
              value: "1"
            }]
          },
          model: {
            value: _vm.sale.discount_Method,
            callback: function callback($$v) {
              _vm.$set(_vm.sale, "discount_Method", $$v);
            },
            expression: "sale.discount_Method"
          }
        })], 1), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "Discount-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 1943372823)
  })], 1) : _vm._e(), _vm._v(" "), _vm.clientIsEligible && _vm.currentUserPermissions && _vm.currentUserPermissions.includes("edit_tax_discount_shipping_sale") ? _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
    }
  }, [_c("label", [_vm._v("Points to convert")]), _vm._v(" "), _c("div", {
    staticClass: "field mb-2"
  }, [_c("b-form-input", {
    ref: "pointsInput",
    attrs: {
      type: "text",
      min: "1",
      max: _vm.selectedClientPoints,
      step: "1",
      disabled: _vm.selectedClientPoints === 0 || _vm.pointsConverted,
      placeholder: "e.g., 200"
    },
    on: {
      input: _vm.onPointsToConvertInput
    },
    model: {
      value: _vm.points_to_convert,
      callback: function callback($$v) {
        _vm.points_to_convert = _vm._n($$v);
      },
      expression: "points_to_convert"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "hint mt-1"
  }, [_vm._v("Total available: "), _c("strong", [_vm._v(_vm._s(_vm.selectedClientPoints))]), _vm._v(" pts")])], 1), _vm._v(" "), _c("div", {
    staticClass: "actions d-flex align-items-center",
    staticStyle: {
      gap: "10px"
    }
  }, [_c("b-button", {
    attrs: {
      variant: _vm.pointsConverted ? "secondary" : "dark",
      disabled: !_vm.pointsConverted && (_vm.selectedClientPoints === 0 || !_vm.pointsInputValid)
    },
    on: {
      click: _vm.convertPointsToDiscount
    }
  }, [!_vm.pointsConverted ? [_vm._v("Convert")] : [_vm._v("Unconverted")]], 2), _vm._v(" "), !_vm.pointsConverted && _vm.points_to_convert && !_vm.pointsInputValid ? _c("small", {
    staticClass: "warn"
  }, [_vm._v("Enter a value from 1 to your available points.")]) : _vm._e(), _vm._v(" "), !_vm.pointsConverted && _vm.pointsInputValid ? _c("small", {
    staticClass: "ok"
  }, [_vm._v("Looks good.")]) : _vm._e()], 1), _vm._v(" "), _vm.discount_from_points > 0 ? _c("div", {
    staticClass: "result mt-2"
  }, [_vm._v("\n                  ✅ Discount of "), _c("strong", [_vm._v(_vm._s(_vm.discount_from_points))]), _vm._v(" " + _vm._s(_vm.currentUser.currency) + " will be applied\n                ")]) : _vm._e(), _vm._v(" "), _c("input", {
    attrs: {
      type: "hidden",
      name: "discount_from_points"
    },
    domProps: {
      value: _vm.discount_from_points
    }
  })]) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("edit_tax_discount_shipping_sale") ? _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
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
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "Shipping-feedback",
            label: "Shipping"
          },
          on: {
            keyup: function keyup($event) {
              return _vm.keyup_Shipping();
            }
          },
          model: {
            value: _vm.sale.shipping,
            callback: function callback($$v) {
              _vm.$set(_vm.sale, "shipping", _vm._n($$v));
            },
            expression: "sale.shipping"
          }
        })], 1), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "Shipping-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 1943903941)
  })], 1) : _vm._e(), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
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
      fn: function fn(_ref4) {
        var valid = _ref4.valid,
          errors = _ref4.errors;
        return _c("b-form-group", {
          attrs: {
            label: _vm.$t("Status") + " " + "*"
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
              label: "completed",
              value: "completed"
            }, {
              label: "Pending",
              value: "pending"
            }, {
              label: "ordered",
              value: "ordered"
            }]
          },
          on: {
            input: _vm.Selected_Status
          },
          model: {
            value: _vm.sale.statut,
            callback: function callback($$v) {
              _vm.$set(_vm.sale, "statut", $$v);
            },
            expression: "sale.statut"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(errors[0]))])], 1);
      }
    }], null, false, 2724976593)
  })], 1), _vm._v(" "), _vm.sale.statut == "completed" ? _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "PaymentStatus"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("PaymentStatus")
    }
  }, [_c("v-select", {
    attrs: {
      disabled: Number(_vm.GrandTotal) < 0,
      reduce: function reduce(label) {
        return label.value;
      },
      placeholder: _vm.$t("Choose_Status"),
      options: [{
        label: "Paid",
        value: "paid"
      }, {
        label: "partial",
        value: "partial"
      }, {
        label: "Pending",
        value: "pending"
      }]
    },
    on: {
      input: _vm.Selected_PaymentStatus
    },
    model: {
      value: _vm.payment.status,
      callback: function callback($$v) {
        _vm.$set(_vm.payment, "status", $$v);
      },
      expression: "payment.status"
    }
  })], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _vm.payment.status != "pending" && _vm.sale.statut == "completed" ? _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Payment choice",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref5) {
        var valid = _ref5.valid,
          errors = _ref5.errors;
        return _c("b-form-group", {
          attrs: {
            label: _vm.$t("Paymentchoice") + " " + "*"
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
            placeholder: _vm.$t("PleaseSelect"),
            options: _vm.payment_methods.map(function (payment_methods) {
              return {
                label: payment_methods.name,
                value: payment_methods.id
              };
            })
          },
          model: {
            value: _vm.payment.payment_method_id,
            callback: function callback($$v) {
              _vm.$set(_vm.payment, "payment_method_id", $$v);
            },
            expression: "payment.payment_method_id"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(errors[0]))])], 1);
      }
    }], null, false, 2953795484)
  })], 1) : _vm._e(), _vm._v(" "), _vm.payment.status != "pending" && _vm.sale.statut == "completed" ? _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Received Amount",
      rules: {
        required: true,
        regex: /^\d*\.?\d*$/
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Received_Amount") + " " + "*"
          }
        }, [_c("b-form-input", {
          attrs: {
            label: "Received_Amount",
            placeholder: _vm.$t("Received_Amount"),
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "Received_Amount-feedback"
          },
          on: {
            keyup: function keyup($event) {
              return _vm.Verified_Received_Amount(_vm.payment.received_amount);
            }
          },
          model: {
            value: _vm.payment.received_amount,
            callback: function callback($$v) {
              _vm.$set(_vm.payment, "received_amount", _vm._n($$v));
            },
            expression: "payment.received_amount"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "Received_Amount-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 4075423960)
  })], 1) : _vm._e(), _vm._v(" "), _vm.payment.status != "pending" && _vm.sale.statut == "completed" ? _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Amount",
      rules: {
        required: true,
        regex: /^\d*\.?\d*$/
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Paying_Amount") + " " + "*"
          }
        }, [_c("b-form-input", {
          attrs: {
            disabled: _vm.payment.status == "paid",
            label: "Amount",
            placeholder: _vm.$t("Paying_Amount"),
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "Amount-feedback"
          },
          on: {
            keyup: function keyup($event) {
              return _vm.Verified_paidAmount(_vm.payment.amount);
            }
          },
          model: {
            value: _vm.payment.amount,
            callback: function callback($$v) {
              _vm.$set(_vm.payment, "amount", _vm._n($$v));
            },
            expression: "payment.amount"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "Amount-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 1383817694)
  })], 1) : _vm._e(), _vm._v(" "), _vm.payment.status != "pending" && _vm.sale.statut == "completed" ? _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("label", [_vm._v(_vm._s(_vm.$t("Change")) + " :")]), _vm._v(" "), _c("p", {
    staticClass: "change_amount"
  }, [_vm._v(_vm._s(parseFloat(_vm.payment.received_amount - _vm.payment.amount).toFixed(2)))])]) : _vm._e(), _vm._v(" "), _vm.payment.status != "pending" && _vm.sale.statut == "completed" ? _c("b-col", {
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Account"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref6) {
        var valid = _ref6.valid,
          errors = _ref6.errors;
        return _c("b-form-group", {
          attrs: {
            label: _vm.$t("Account")
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
            placeholder: _vm.$t("Choose_Account"),
            options: _vm.accounts.map(function (accounts) {
              return {
                label: accounts.account_name,
                value: accounts.id
              };
            })
          },
          model: {
            value: _vm.payment.account_id,
            callback: function callback($$v) {
              _vm.$set(_vm.payment, "account_id", $$v);
            },
            expression: "payment.account_id"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(errors[0]))])], 1);
      }
    }], null, false, 3079558950)
  })], 1) : _vm._e(), _vm._v(" "), _c("b-col", {
    staticClass: "mt-3",
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
      value: _vm.sale.notes,
      expression: "sale.notes"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "4",
      placeholder: _vm.$t("Afewwords")
    },
    domProps: {
      value: _vm.sale.notes
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.sale, "notes", $event.target.value);
      }
    }
  })])], 1), _vm._v(" "), _vm.sale.statut === "completed" && _vm.hasBatchValidationErrors ? _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("div", {
    staticStyle: {
      padding: "10px 14px",
      background: "#fef3c7",
      color: "#92400e",
      border: "1px solid #fde68a",
      "border-radius": "10px",
      "font-size": "13px",
      "font-weight": "600",
      display: "flex",
      "align-items": "center",
      "margin-bottom": "14px"
    }
  }, [_c("lucide-icon", {
    staticStyle: {
      "margin-right": "8px",
      "font-size": "16px"
    },
    attrs: {
      name: "info"
    }
  }), _vm._v("\n                  " + _vm._s(_vm.firstBatchErrorMessage) + "\n                ")], 1)]) : _vm._e(), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", [_c("b-button", {
    attrs: {
      variant: "primary",
      disabled: _vm.paymentProcessing || _vm.hasMinPriceViolation || _vm.sale.statut === "completed" && _vm.hasBatchValidationErrors
    },
    on: {
      click: _vm.Submit_Sale
    }
  }, [_c("lucide-icon", {
    staticClass: "me-2 font-weight-bold",
    attrs: {
      name: "check"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("submit")))], 1), _vm._v(" "), _vm.paymentProcessing ? _vm._m(0) : _vm._e()], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _c("validation-observer", {
    ref: "Quick_Add_Customer_Form"
  }, [_c("b-modal", {
    attrs: {
      "hide-footer": "",
      size: "lg",
      id: "Quick_Add_Customer",
      title: _vm.$t("Quick_Add_Customer")
    }
  }, [_c("b-form", {
    staticClass: "quick-add-customer-form",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Submit_Quick_Add_Customer.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Name Customer",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("CustomerName") + " " + "*"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "name-feedback",
            label: "name",
            placeholder: _vm.$t("CustomerName")
          },
          model: {
            value: _vm.client.name,
            callback: function callback($$v) {
              _vm.$set(_vm.client, "name", $$v);
            },
            expression: "client.name"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "name-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Email")
    }
  }, [_c("b-form-input", {
    attrs: {
      label: "email",
      placeholder: _vm.$t("Email")
    },
    model: {
      value: _vm.client.email,
      callback: function callback($$v) {
        _vm.$set(_vm.client, "email", $$v);
      },
      expression: "client.email"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Phone")
    }
  }, [_c("b-form-input", {
    attrs: {
      label: "Phone",
      placeholder: _vm.$t("Phone")
    },
    model: {
      value: _vm.client.phone,
      callback: function callback($$v) {
        _vm.$set(_vm.client, "phone", $$v);
      },
      expression: "client.phone"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Country")
    }
  }, [_c("b-form-input", {
    attrs: {
      label: "Country",
      placeholder: _vm.$t("Country")
    },
    model: {
      value: _vm.client.country,
      callback: function callback($$v) {
        _vm.$set(_vm.client, "country", $$v);
      },
      expression: "client.country"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("City")
    }
  }, [_c("b-form-input", {
    attrs: {
      label: "City",
      placeholder: _vm.$t("City")
    },
    model: {
      value: _vm.client.city,
      callback: function callback($$v) {
        _vm.$set(_vm.client, "city", $$v);
      },
      expression: "client.city"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Tax_Number")
    }
  }, [_c("b-form-input", {
    attrs: {
      label: "Tax Number",
      placeholder: _vm.$t("Tax_Number")
    },
    model: {
      value: _vm.client.tax_number,
      callback: function callback($$v) {
        _vm.$set(_vm.client, "tax_number", $$v);
      },
      expression: "client.tax_number"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Adress")
    }
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.client.adresse,
      expression: "client.adresse"
    }],
    staticClass: "form-control",
    attrs: {
      label: "Adress",
      rows: "4",
      placeholder: _vm.$t("Adress")
    },
    domProps: {
      value: _vm.client.adresse
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.client, "adresse", $event.target.value);
      }
    }
  })])], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mt-4 mb-4",
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("div", {
    staticClass: "psx-form-check"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.client.is_royalty_eligible,
      expression: "client.is_royalty_eligible"
    }],
    staticClass: "psx-checkbox psx-form-check-input",
    attrs: {
      type: "checkbox",
      id: "is_royalty_eligible_quick"
    },
    domProps: {
      checked: Array.isArray(_vm.client.is_royalty_eligible) ? _vm._i(_vm.client.is_royalty_eligible, null) > -1 : _vm.client.is_royalty_eligible
    },
    on: {
      change: function change($event) {
        var $$a = _vm.client.is_royalty_eligible,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.client, "is_royalty_eligible", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.client, "is_royalty_eligible", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.client, "is_royalty_eligible", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "psx-form-check-label",
    attrs: {
      "for": "is_royalty_eligible_quick"
    }
  }, [_c("h5", [_vm._v(_vm._s(_vm.$t("Is_Royalty_Eligible")))])])])]), _vm._v(" "), _c("b-col", {
    staticClass: "mt-3",
    attrs: {
      md: "12"
    }
  }, [_c("b-button", {
    staticClass: "mr-2",
    attrs: {
      variant: "secondary"
    },
    on: {
      click: function click($event) {
        return _vm.$bvModal.hide("Quick_Add_Customer");
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("Cancel")))]), _vm._v(" "), _c("b-button", {
    attrs: {
      variant: "primary",
      type: "submit",
      disabled: _vm.SubmitProcessing
    }
  }, [_vm._v(_vm._s(_vm.$t("submit")))]), _vm._v(" "), _vm.SubmitProcessing ? _vm._m(1) : _vm._e()], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("validation-observer", {
    ref: "Update_Detail"
  }, [_c("b-modal", {
    attrs: {
      "hide-footer": "",
      size: "lg",
      id: "form_Update_Detail",
      title: _vm.detail.name
    }
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit_Update_Detail.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Product Price",
      rules: {
        required: true,
        regex: /^\d*\.?\d*$/
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("ProductPrice") + " " + "*",
            id: "Price-input"
          }
        }, [_c("b-form-input", {
          attrs: {
            label: "Product Price",
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "Price-feedback"
          },
          model: {
            value: _vm.detail.Unit_price,
            callback: function callback($$v) {
              _vm.$set(_vm.detail, "Unit_price", $$v);
            },
            expression: "detail.Unit_price"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "Price-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))]), _vm._v(" "), _vm.detailHasMinPriceViolation ? _c("small", {
          staticClass: "text-danger"
        }, [_vm._v(_vm._s(_vm.$t("Price_below_min_not_allowed")))]) : _vm._e()], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Price Type"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Price Type")
    }
  }, [_c("v-select", {
    attrs: {
      reduce: function reduce(opt) {
        return opt.value;
      },
      options: [{
        label: _vm.$t("Retail Price"),
        value: "retail"
      }, {
        label: _vm.$t("Wholesale Price"),
        value: "wholesale"
      }]
    },
    on: {
      input: function input(val) {
        return _vm.onChangeDetailPriceType(val);
      }
    },
    model: {
      value: _vm.detail.price_type,
      callback: function callback($$v) {
        _vm.$set(_vm.detail, "price_type", $$v);
      },
      expression: "detail.price_type"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Tax Method",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref7) {
        var valid = _ref7.valid,
          errors = _ref7.errors;
        return _c("b-form-group", {
          attrs: {
            label: _vm.$t("TaxMethod") + " " + "*"
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
            placeholder: _vm.$t("Choose_Method"),
            options: [{
              label: "Exclusive",
              value: "1"
            }, {
              label: "Inclusive",
              value: "2"
            }]
          },
          model: {
            value: _vm.detail.tax_method,
            callback: function callback($$v) {
              _vm.$set(_vm.detail, "tax_method", $$v);
            },
            expression: "detail.tax_method"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(errors[0]))])], 1);
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Order Tax",
      rules: {
        required: true,
        regex: /^\d*\.?\d*$/
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("OrderTax") + " " + "*"
          }
        }, [_c("b-input-group", {
          attrs: {
            append: "%"
          }
        }, [_c("b-form-input", {
          attrs: {
            label: "Order Tax",
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "OrderTax-feedback"
          },
          model: {
            value: _vm.detail.tax_percent,
            callback: function callback($$v) {
              _vm.$set(_vm.detail, "tax_percent", $$v);
            },
            expression: "detail.tax_percent"
          }
        })], 1), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "OrderTax-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Discount Method",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref8) {
        var valid = _ref8.valid,
          errors = _ref8.errors;
        return _c("b-form-group", {
          attrs: {
            label: _vm.$t("Discount_Method") + " " + "*"
          }
        }, [_c("v-select", {
          "class": {
            "is-invalid": !!errors.length
          },
          attrs: {
            reduce: function reduce(label) {
              return label.value;
            },
            placeholder: _vm.$t("Choose_Method"),
            state: errors[0] ? false : valid ? true : null,
            options: [{
              label: "Percent %",
              value: "1"
            }, {
              label: "Fixed",
              value: "2"
            }]
          },
          model: {
            value: _vm.detail.discount_Method,
            callback: function callback($$v) {
              _vm.$set(_vm.detail, "discount_Method", $$v);
            },
            expression: "detail.discount_Method"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(errors[0]))])], 1);
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Discount Rate",
      rules: {
        required: true,
        regex: /^\d*\.?\d*$/
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Discount") + " " + "*"
          }
        }, [_c("b-form-input", {
          attrs: {
            label: "Discount",
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "Discount-feedback"
          },
          model: {
            value: _vm.detail.discount,
            callback: function callback($$v) {
              _vm.$set(_vm.detail, "discount", _vm._n($$v));
            },
            expression: "detail.discount"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "Discount-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _vm.detail.product_type != "is_service" ? _c("b-col", {
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Unit Sale",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref9) {
        var valid = _ref9.valid,
          errors = _ref9.errors;
        return _c("b-form-group", {
          attrs: {
            label: _vm.$t("UnitSale") + " " + "*"
          }
        }, [_c("v-select", {
          "class": {
            "is-invalid": !!errors.length
          },
          attrs: {
            state: errors[0] ? false : valid ? true : null,
            placeholder: _vm.$t("Choose_Unit_Sale"),
            reduce: function reduce(label) {
              return label.value;
            },
            options: _vm.units.map(function (units) {
              return {
                label: units.name,
                value: units.id
              };
            })
          },
          model: {
            value: _vm.detail.sale_unit_id,
            callback: function callback($$v) {
              _vm.$set(_vm.detail, "sale_unit_id", $$v);
            },
            expression: "detail.sale_unit_id"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(errors[0]))])], 1);
      }
    }], null, false, 1636962053)
  })], 1) : _vm._e(), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", [_c("b-button", {
    attrs: {
      variant: "primary",
      type: "submit",
      disabled: _vm.Submit_Processing_detail || _vm.detailHasMinPriceViolation
    }
  }, [_c("lucide-icon", {
    staticClass: "me-2 font-weight-bold",
    attrs: {
      name: "check"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("submit")))], 1), _vm._v(" "), _vm.Submit_Processing_detail ? _vm._m(2) : _vm._e()], 1)], 1)], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "typo__p"
  }, [_c("div", {
    staticClass: "spinner sm spinner-primary mt-3"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "typo__p"
  }, [_c("div", {
    staticClass: "spinner sm spinner-primary mt-3"
  })]);
}, function () {
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/create_sale.vue?vue&type=style&index=0&id=e1ed42cc&lang=css"
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/create_sale.vue?vue&type=style&index=0&id=e1ed42cc&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.input-with-icon {\n  display: flex;\n  align-items: center;\n}\n.scan-icon {\n  width: 50px; /* Adjust size as needed */\n  height: 50px;\n  margin-right: 8px; /* Adjust spacing as needed */\n  cursor: pointer;\n}\n\n/* Points section helpers (lightweight, scoped to this page) */\n.hint { font-size: 13px; color: #6b7280;\n}\n.hint strong { color: #111827;\n}\n.warn { color: #b45309; font-size: 12px;\n}\n.ok { color: #065f46; font-size: 12px;\n}\n.result { font-size: 13px; color: #1e3a8a; background: #eef2ff; border: 1px dashed #c7d2fe; border-radius: 10px; padding: 8px 10px;\n}\n.table-responsive::after {\n  content: '';\n  display: block;\n  height: 150px; /* gives breathing space for last dropdown */\n}\n\n/* ===== v-select in input-group =====\n   A global rule (specificity 0,4,0) sets\n     .input-group:not(.input-group-sm):not(.input-group-lg) .btn { height: 42px }\n   which makes the quick-add button 42px and — via align-items: stretch —\n   drags the whole input-group to 42px, while the standalone warehouse\n   v-select beside it stays at its natural height. Override only the\n   button height (with !important to beat that 0,4,0 global selector)\n   so the customer select matches the warehouse select. */\n.input-group.category-input-group {\n  display: flex;\n  align-items: stretch;\n  flex-wrap: nowrap;\n}\n.input-group.category-input-group .v-select {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.input-group.category-input-group .v-select .vs__dropdown-toggle {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group.category-input-group .input-group-append {\n  align-items: stretch;\n}\n.input-group.category-input-group .category-add-btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  white-space: nowrap;\n  height: calc(1.5em + 0.7rem + 0px) !important;\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/create_sale.vue?vue&type=style&index=0&id=e1ed42cc&lang=css"
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/create_sale.vue?vue&type=style&index=0&id=e1ed42cc&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_sale_vue_vue_type_style_index_0_id_e1ed42cc_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create_sale.vue?vue&type=style&index=0&id=e1ed42cc&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/create_sale.vue?vue&type=style&index=0&id=e1ed42cc&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_sale_vue_vue_type_style_index_0_id_e1ed42cc_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_sale_vue_vue_type_style_index_0_id_e1ed42cc_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/views/app/pages/sales/create_sale.vue"
/*!*************************************************************!*\
  !*** ./resources/src/views/app/pages/sales/create_sale.vue ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_sale_vue_vue_type_template_id_e1ed42cc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_sale.vue?vue&type=template&id=e1ed42cc */ "./resources/src/views/app/pages/sales/create_sale.vue?vue&type=template&id=e1ed42cc");
/* harmony import */ var _create_sale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create_sale.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/sales/create_sale.vue?vue&type=script&lang=js");
/* harmony import */ var _create_sale_vue_vue_type_style_index_0_id_e1ed42cc_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create_sale.vue?vue&type=style&index=0&id=e1ed42cc&lang=css */ "./resources/src/views/app/pages/sales/create_sale.vue?vue&type=style&index=0&id=e1ed42cc&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_sale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_sale_vue_vue_type_template_id_e1ed42cc__WEBPACK_IMPORTED_MODULE_0__.render,
  _create_sale_vue_vue_type_template_id_e1ed42cc__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/sales/create_sale.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/sales/create_sale.vue?vue&type=script&lang=js"
/*!*************************************************************************************!*\
  !*** ./resources/src/views/app/pages/sales/create_sale.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_sale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create_sale.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/create_sale.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_sale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/sales/create_sale.vue?vue&type=template&id=e1ed42cc"
/*!*******************************************************************************************!*\
  !*** ./resources/src/views/app/pages/sales/create_sale.vue?vue&type=template&id=e1ed42cc ***!
  \*******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_sale_vue_vue_type_template_id_e1ed42cc__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_sale_vue_vue_type_template_id_e1ed42cc__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_sale_vue_vue_type_template_id_e1ed42cc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create_sale.vue?vue&type=template&id=e1ed42cc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/create_sale.vue?vue&type=template&id=e1ed42cc");


/***/ },

/***/ "./resources/src/views/app/pages/sales/create_sale.vue?vue&type=style&index=0&id=e1ed42cc&lang=css"
/*!*********************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/sales/create_sale.vue?vue&type=style&index=0&id=e1ed42cc&lang=css ***!
  \*********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_sale_vue_vue_type_style_index_0_id_e1ed42cc_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create_sale.vue?vue&type=style&index=0&id=e1ed42cc&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/create_sale.vue?vue&type=style&index=0&id=e1ed42cc&lang=css");


/***/ }

}]);