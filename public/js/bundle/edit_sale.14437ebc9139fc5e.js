"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["edit_sale"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/edit_sale.vue?vue&type=script&lang=js"
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/edit_sale.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
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
    title: "Edit Sale"
  },
  data: function data() {
    return {
      focused: false,
      timer: null,
      search_input: '',
      product_filter: [],
      isLoading: true,
      SubmitProcessing: false,
      Submit_Processing_detail: false,
      warehouses: [],
      clients: [],
      sales_agents: [],
      products: [],
      details: [],
      detail: {},
      sales: [],
      showPointsSection: false,
      // Points / loyalty state
      selectedClientPoints: 0,
      initialClientPoints: 0,
      points_to_convert: 0,
      discount_from_points: 0,
      used_points: 0,
      clientIsEligible: false,
      pointsConverted: false,
      point_to_amount_rate: 0,
      sale: {
        id: "",
        date: "",
        statut: "",
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
      total: 0,
      GrandTotal: 0,
      product: {
        id: "",
        code: "",
        stock: "",
        quantity: 1,
        discount: "",
        DiscountNet: "",
        discount_Method: "",
        sale_unit_id: "",
        no_unit: "",
        name: "",
        unitSale: "",
        Net_price: "",
        Total_price: "",
        Unit_price: "",
        subtotal: "",
        product_id: "",
        detail_id: "",
        taxe: "",
        tax_percent: "",
        tax_method: "",
        product_variant_id: "",
        del: "",
        etat: "",
        is_imei: "",
        imei_number: "",
        // Batch override (optional on edit): if empty on save backend auto-FEFOs.
        is_batch_tracked: false,
        batches: [],
        available_batches: [],
        batches_loading: false
      }
    };
  },
  watch: {
    // Recalculate totals whenever discount type changes (fixed / percentage)
    'sale.discount_Method': function saleDiscount_Method(newVal, oldVal) {
      this.Calcul_Total();
    }
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["currentUserPermissions", "currentUser"])), {}, {
    // Simple validity check for points_to_convert (same behavior as create_sale)
    pointsInputValid: function pointsInputValid() {
      var max = Number(this.selectedClientPoints) || 0;
      var val = Number(this.points_to_convert);
      return Number.isInteger(val) && val >= 1 && val <= max;
    },
    // Batch validation is only triggered when the user has added/prefilled batches
    // for a tracked line. Empty = backend auto-FEFO path is acceptable.
    hasBatchValidationErrors: function hasBatchValidationErrors() {
      if (!Array.isArray(this.details)) return false;
      var _iterator = _createForOfIteratorHelper(this.details),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var d = _step.value;
          if (!d || !d.is_batch_tracked) continue;
          var batches = Array.isArray(d.batches) ? d.batches : [];
          if (batches.length === 0) continue; // empty = FEFO fallback, no error
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
          if (batches.length === 0) continue;
          var label = d.name || d.code || "";
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
    }
  }),
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
    //--- Submit Validate Update Sale
    Submit_Sale: function Submit_Sale() {
      var _this = this;
      this.$refs.edit_sale.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else if (Number(_this.GrandTotal) < 0) {
          var msg = _this.$t ? "".concat(_this.$t('pos.Total_Payable'), " ").concat(_this.$t('cannot_be_negative') || 'cannot be negative') : 'Total Payable cannot be negative';
          _this.makeToast('warning', msg, _this.$t ? _this.$t('Warning') : 'Warning');
          return;
        } else {
          _this.Update_Sale();
        }
      });
    },
    //---Submit Validation Update Detail
    submit_Update_Detail: function submit_Update_Detail() {
      var _this2 = this;
      this.$refs.Update_Detail.validate().then(function (success) {
        if (!success) {
          return;
        } else {
          _this2.Update_Detail();
        }
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
    //---------------------------- Show Modal Update Detail Product
    Modal_Updat_Detail: function Modal_Updat_Detail(detail) {
      var _this3 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      this.detail = {};
      this.detail.name = detail.name;
      this.detail.detail_id = detail.detail_id;
      this.detail.Unit_price = detail.Unit_price;
      this.detail.tax_method = detail.tax_method;
      this.detail.discount_Method = detail.discount_Method;
      this.detail.discount = detail.discount;
      this.detail.quantity = detail.quantity;
      this.detail.tax_percent = detail.tax_percent;
      this.detail.is_imei = detail.is_imei;
      this.detail.imei_number = detail.imei_number;
      setTimeout(function () {
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        _this3.$bvModal.show("form_Update_Detail");
      }, 1000);
    },
    //---------------------------- Submit Update Detail Product
    Update_Detail: function Update_Detail() {
      var _this4 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      this.Submit_Processing_detail = true;
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id === this.detail.detail_id) {
          this.details[i].tax_percent = this.detail.tax_percent;
          this.details[i].Unit_price = this.detail.Unit_price;
          this.details[i].quantity = this.detail.quantity;
          this.details[i].tax_method = this.detail.tax_method;
          this.details[i].discount_Method = this.detail.discount_Method;
          this.details[i].discount = this.detail.discount;
          this.details[i].imei_number = this.detail.imei_number;
          if (this.details[i].discount_Method == "2") {
            //Fixed
            this.details[i].DiscountNet = this.detail.discount;
          } else {
            //Percentage %
            this.details[i].DiscountNet = parseFloat(this.detail.Unit_price * this.details[i].discount / 100);
          }
          if (this.details[i].tax_method == "1") {
            //Exclusive
            this.details[i].Net_price = parseFloat(this.detail.Unit_price - this.details[i].DiscountNet);
            this.details[i].taxe = parseFloat(this.detail.tax_percent * (this.detail.Unit_price - this.details[i].DiscountNet) / 100);
          } else {
            //Inclusive
            this.details[i].taxe = parseFloat((this.detail.Unit_price - this.details[i].DiscountNet) * (this.detail.tax_percent / 100));
            this.details[i].Net_price = parseFloat(this.detail.Unit_price - this.details[i].taxe - this.details[i].DiscountNet);
          }
          this.$forceUpdate();
        }
      }
      this.Calcul_Total();
      setTimeout(function () {
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        _this4.Submit_Processing_detail = false;
        _this4.$bvModal.hide("form_Update_Detail");
      }, 1000);
    },
    //--------------------------- Multi-Pack Selling helpers ---------------------------\\
    getSelectedPack: function getSelectedPack(detail) {
      if (!detail || !detail.packs || !detail.product_pack_id) return null;
      return detail.packs.find(function (p) {
        return String(p.id) === String(detail.product_pack_id);
      }) || null;
    },
    // Recompute a line's DiscountNet / Net_price / taxe from its current Unit_price.
    recompute_line: function recompute_line(detail) {
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
    // Default pack restores the base (retail) price; other packs use their fixed price.
    applyPackPrice: function applyPackPrice(detail) {
      var pack = this.getSelectedPack(detail);
      if (!pack || pack.is_default) {
        detail.product_pack_id = pack ? pack.id : null;
        detail.pack_multiplier = 1;
        detail.pack_name = pack ? pack.name : null;
        if (detail.retail_unit_price !== undefined && detail.retail_unit_price !== null && detail.retail_unit_price !== '') {
          detail.Unit_price = parseFloat(detail.retail_unit_price) || 0;
        }
        this.recompute_line(detail);
        return;
      }
      detail.pack_multiplier = pack.multiplier;
      detail.pack_name = pack.name;
      detail.Unit_price = parseFloat(pack.price) || 0;
      this.recompute_line(detail);
    },
    onChangePack: function onChangePack(detail) {
      this.applyPackPrice(detail);
      this.$forceUpdate();
      this.Calcul_Total();
    },
    // Search Products
    search: function search() {
      var _this5 = this;
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      if (this.search_input.length < 2) {
        return this.product_filter = [];
      }
      if (this.sale.warehouse_id != "" && this.sale.warehouse_id != null) {
        this.timer = setTimeout(function () {
          var barcode = _this5.search_input.trim();
          var weight = null;
          // Check if the barcode is from a weighing scale (13 digits)
          if (barcode.length === 13 && !isNaN(barcode)) {
            // Find the product by product code
            var product = _this5.products.find(function (prod) {
              return prod.code === barcode;
            });
            if (product) {
              _this5.SearchProduct(product, weight);
              return;
            } else {
              var productCode = barcode.substring(0, 7); // First 7 digits → Product Code
              var _weight = parseFloat(barcode.substring(7, 12)) / 1000; // Convert weight (grams to kg)
              var _product = _this5.products.find(function (prod) {
                return prod.code === productCode;
              });
              if (_product) {
                _product.quantity = _weight; // Assign weight to product
                _this5.SearchProduct(_product, _weight);
                return;
              }
            }
            _this5.makeToast("danger", "Invalid product code scanned", _this5.$t("Error"));
            _this5.search_input = '';
            _this5.$refs.product_autocomplete.value = "";
            _this5.product_filter = [];
          }
          // else{
          //   //  No product found - Display Error Alert
          //   this.makeToast("danger", "Invalid product code scanned", this.$t("Error"));
          //   this.search_input= '';
          //   this.$refs.product_autocomplete.value = "";
          //   this.product_filter = [];

          // }

          // Regular product search (for non-weighing scale barcodes)
          var product_filter = _this5.products.filter(function (product) {
            return product.code === _this5.search_input || product.barcode.includes(_this5.search_input);
          });
          if (product_filter.length === 1) {
            _this5.SearchProduct(product_filter[0], weight);
          } else {
            _this5.product_filter = _this5.products.filter(function (product) {
              return product.name.toLowerCase().includes(_this5.search_input.toLowerCase()) || product.code.toLowerCase().includes(_this5.search_input.toLowerCase()) || product.barcode.toLowerCase().includes(_this5.search_input.toLowerCase());
            });
          }
        }, 800);
      } else {
        this.makeToast("warning", this.$t("SelectWarehouse"), this.$t("Warning"));
      }
    },
    //-------------- get Result Value Search Product
    getResultValue: function getResultValue(result) {
      return result.code + " " + "(" + result.name + ")";
    },
    //-------------- Submit Search Product
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
        } else {
          this.product.code = result.code;
          this.product.no_unit = 1;
          this.product.stock = result.qte_sale;

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
      // Refresh available batches for existing batch-tracked lines since batches
      // are warehouse-scoped.
      if (Array.isArray(this.details)) {
        var _iterator5 = _createForOfIteratorHelper(this.details),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var d = _step5.value;
            if (d && d.is_batch_tracked) {
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
    //------------------------------------ Get Products By Warehouse -------------------------\\
    Get_Products_By_Warehouse: function Get_Products_By_Warehouse(id) {
      var _this6 = this;
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      axios.get("get_Products_by_warehouse/" + id + "?stock=" + 1 + "&is_sale=" + 1 + "&product_service=" + 1 + "&product_combo=" + 1).then(function (response) {
        _this6.products = response.data;
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
    // Called after GetElements — normalizes prefilled batch rows coming from the
    // edit endpoint and loads the available pool for each batch-tracked line.
    prefillBatchesForTrackedDetails: function prefillBatchesForTrackedDetails() {
      if (!Array.isArray(this.details)) return;
      var _iterator6 = _createForOfIteratorHelper(this.details),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var d = _step6.value;
          if (!d || !d.is_batch_tracked) continue;
          var prefilled = Array.isArray(d.batches) ? d.batches : [];
          var normalized = prefilled.map(function (b) {
            return {
              product_batch_id: Number(b.product_batch_id) || null,
              batch_no: b.batch_no || "",
              expiry_date: b.expiry_date || null,
              qty_available: 0,
              // will be filled in by fetch_batches_for_detail
              qty: Number(b.qty) || 0
            };
          });
          this.$set(d, "batches", normalized);
          this.$set(d, "available_batches", []);
          this.$set(d, "batches_loading", false);
          this.fetch_batches_for_detail(d);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    },
    fetch_batches_for_detail: function fetch_batches_for_detail(detail) {
      var _this7 = this;
      if (!detail || !detail.is_batch_tracked) return;
      var wid = this.sale && this.sale.warehouse_id;
      if (!wid || !detail.product_id) return;
      var variantSeg = detail.product_variant_id != null && detail.product_variant_id !== "" ? detail.product_variant_id : 0;
      this.$set(detail, "batches_loading", true);
      // Snapshot the prefilled batches before we rebuild availability.
      var existing = Array.isArray(detail.batches) ? detail.batches.slice() : [];
      var existingQtyById = {};
      var _iterator7 = _createForOfIteratorHelper(existing),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var b = _step7.value;
          if (b && b.product_batch_id != null) {
            existingQtyById[b.product_batch_id] = (existingQtyById[b.product_batch_id] || 0) + (Number(b.qty) || 0);
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      axios.get("batches_for_sale/".concat(detail.product_id, "/").concat(wid, "/").concat(variantSeg)).then(function (response) {
        var apiList = response.data && Array.isArray(response.data.batches) ? response.data.batches : [];
        // Merge: ProductBatch.qty on the server already reflects the CURRENT state
        // (post-consumption for this sale, if completed). To let the user keep
        // editing their allocation we add the prefilled qty back onto each batch
        // that was already assigned to this detail. Backend reversal before
        // re-apply keeps everything consistent on save.
        var merged = apiList.map(function (ab) {
          return {
            id: ab.id,
            batch_no: ab.batch_no,
            expiry_date: ab.expiry_date,
            mfg_date: ab.mfg_date,
            qty_available: (Number(ab.qty_available) || 0) + (existingQtyById[ab.id] || 0),
            unit_cost: ab.unit_cost,
            status: ab.status
          };
        });
        // Also surface any prefilled batches that no longer appear as "available"
        // (e.g. the batch was fully consumed elsewhere). Their effective available
        // is the prefilled qty itself — editing them down still works.
        var _iterator8 = _createForOfIteratorHelper(existing),
          _step8;
        try {
          var _loop = function _loop() {
            var b = _step8.value;
            if (b && b.product_batch_id != null && !merged.some(function (m) {
              return m.id === b.product_batch_id;
            })) {
              merged.push({
                id: b.product_batch_id,
                batch_no: b.batch_no || "",
                expiry_date: b.expiry_date || null,
                mfg_date: b.mfg_date || null,
                qty_available: existingQtyById[b.product_batch_id] || 0,
                status: b.status || "active"
              });
            }
          };
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
        _this7.$set(detail, "available_batches", merged);
        // Rebuild each prefilled batch row with the fresh availability number.
        var rebuilt = existing.map(function (b) {
          var match = merged.find(function (m) {
            return m.id === b.product_batch_id;
          });
          return {
            product_batch_id: b.product_batch_id,
            batch_no: match ? match.batch_no : b.batch_no || "",
            expiry_date: match ? match.expiry_date : b.expiry_date || null,
            qty_available: match ? Number(match.qty_available) || 0 : Number(b.qty_available) || 0,
            qty: Number(b.qty) || 0
          };
        });
        _this7.$set(detail, "batches", rebuilt);
        _this7.$set(detail, "batches_loading", false);
      })["catch"](function () {
        _this7.$set(detail, "available_batches", []);
        _this7.$set(detail, "batches_loading", false);
      });
    },
    add_batch_to_detail: function add_batch_to_detail(detail) {
      if (!Array.isArray(detail.batches)) this.$set(detail, "batches", []);
      var used = this.batch_total_qty(detail);
      var remaining = Math.max(0, (Number(detail.quantity) || 0) - used);
      detail.batches.push({
        product_batch_id: null,
        batch_no: "",
        expiry_date: null,
        qty_available: 0,
        qty: remaining
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
    batch_over_allocates: function batch_over_allocates(detail) {
      if (!detail || !detail.is_batch_tracked) return false;
      if (!Array.isArray(detail.batches)) return false;
      var _iterator9 = _createForOfIteratorHelper(detail.batches),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var b = _step9.value;
          var q = Number(b.qty) || 0;
          var avail = Number(b.qty_available) || 0;
          if (q > avail) return true;
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      return false;
    },
    // Serial / IMEI: a serialized line must have exactly quantity-many serials selected.
    serialCountMismatch: function serialCountMismatch(detail) {
      if (!detail || !detail.is_imei) return false;
      var count = Array.isArray(detail.serial_numbers) ? detail.serial_numbers.length : 0;
      return count !== Math.round(Number(detail.quantity) || 0);
    },
    batch_duplicates: function batch_duplicates(detail) {
      if (!detail || !detail.is_batch_tracked) return false;
      if (!Array.isArray(detail.batches)) return false;
      var seen = {};
      var _iterator0 = _createForOfIteratorHelper(detail.batches),
        _step0;
      try {
        for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
          var b = _step0.value;
          if (!b.product_batch_id) continue;
          if (seen[b.product_batch_id]) return true;
          seen[b.product_batch_id] = true;
        }
      } catch (err) {
        _iterator0.e(err);
      } finally {
        _iterator0.f();
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
    //-----------------------------------Verified QTY ------------------------------\\
    Verified_Qty: function Verified_Qty(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id === id) {
          if (isNaN(detail.quantity)) {
            this.details[i].quantity = detail.qte_copy;
          }
          if (detail.etat == "new" && detail.quantity > detail.stock) {
            this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
            this.details[i].quantity = detail.stock;
          } else if (detail.etat == "current" && detail.quantity > detail.stock + detail.qte_copy) {
            this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
            this.details[i].quantity = detail.qte_copy;
          } else {
            this.details[i].quantity = detail.quantity;
          }
        }
      }
      this.$forceUpdate();
      this.Calcul_Total();
    },
    //-----------------------------------increment QTY ------------------------------\\
    increment: function increment(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id == id) {
          if (detail.etat == "new" && detail.quantity + 1 > detail.stock) {
            this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
          } else if (detail.etat == "current" && detail.quantity + 1 > detail.stock + detail.qte_copy) {
            this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
          } else {
            this.formatNumber(this.details[i].quantity++, 2);
          }
        }
      }
      this.$forceUpdate();
      this.Calcul_Total();
    },
    //-----------------------------------decrement QTY ------------------------------\\
    decrement: function decrement(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id == id) {
          if (detail.quantity - 1 > 0) {
            if (detail.etat == "new" && detail.quantity - 1 > detail.stock) {
              this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
            } else if (detail.etat == "current" && detail.quantity - 1 > detail.stock + detail.qte_copy) {
              this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
            } else {
              this.formatNumber(this.details[i].quantity--, 2);
            }
          }
        }
      }
      this.$forceUpdate();
      this.Calcul_Total();
    },
    //---------- keyup OrderTax
    keyup_OrderTax: function keyup_OrderTax() {
      if (isNaN(this.sale.tax_rate)) {
        this.sale.tax_rate = 0;
      } else if (this.sale.tax_rate == '') {
        this.sale.tax_rate = 0;
        this.Calcul_Total();
      } else {
        this.Calcul_Total();
      }
    },
    //---------- keyup Discount
    keyup_Discount: function keyup_Discount() {
      if (isNaN(this.sale.discount)) {
        this.sale.discount = 0;
      } else if (this.sale.discount == '') {
        this.sale.discount = 0;
        this.Calcul_Total();
      } else {
        this.Calcul_Total();
      }
    },
    // Calculate discount amount for current sale (for display in summary card)
    getCurrentSaleDiscountAmount: function getCurrentSaleDiscountAmount() {
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
    // Handle manual input for points to convert (keep it within [0, available])
    onPointsToConvertInput: function onPointsToConvertInput() {
      var max = Number(this.selectedClientPoints) || 0;
      var val = Number(this.points_to_convert);
      if (!Number.isFinite(val)) val = 0;
      if (val < 0) val = 0;
      val = Math.floor(val);
      if (val > max) {
        this.makeToast && this.makeToast("warning", this.$t ? this.$t("Entered_points_exceed_available") : "Entered points exceed available", this.$t ? this.$t("Warning") : "Warning");
        val = max;
      }
      this.points_to_convert = val;
    },
    // Convert / unconvert points to discount (same behavior as create_sale)
    convertPointsToDiscount: function convertPointsToDiscount() {
      var _this8 = this;
      if (this.pointsConverted) {
        // We are UN-converting points for this sale.
        // Increase the visible available points by the amount that was used on this sale,
        // to reflect the rollback that will happen on save.
        var prevUsed = Number(this.used_points || 0);
        if (prevUsed > 0) {
          var currentAvail = Number(this.selectedClientPoints || 0);
          this.selectedClientPoints = currentAvail + prevUsed;
          this.initialClientPoints = this.selectedClientPoints;
        }

        // Reset conversion - sale.discount remains unchanged (it only contains manual discount)
        this.discount_from_points = 0;
        this.used_points = 0;
        this.points_to_convert = 0;
        this.pointsConverted = false;
      } else {
        var maxPoints = Number(this.selectedClientPoints) || 0;
        var pts = Number(this.points_to_convert);
        if (!Number.isFinite(pts) || pts <= 0) {
          this.makeToast && this.makeToast("warning", this.$t ? this.$t("Please_enter_points_to_convert") : "Please enter points to convert", this.$t ? this.$t("Warning") : "Warning");
          return;
        }
        if (pts > maxPoints) {
          this.makeToast && this.makeToast("warning", this.$t ? this.$t("Entered_points_exceed_available") : "Entered points exceed available", this.$t ? this.$t("Warning") : "Warning");
          this.points_to_convert = maxPoints;
          pts = maxPoints;
          this.$nextTick && this.$nextTick(function () {
            var r = _this8.$refs && _this8.$refs.pointsInput;
            if (r && r.$el) {
              try {
                r.$el.value = String(_this8.points_to_convert);
              } catch (e) {}
            }
          });
        }
        var discount = parseFloat((pts * this.point_to_amount_rate).toFixed(2));
        this.discount_from_points = discount;
        // Don't merge points into sale.discount - keep them separate so input shows only manual discount
        this.used_points = pts;
        // ensure input reflects final used points
        this.points_to_convert = pts;
        this.$nextTick && this.$nextTick(function () {
          var r = _this8.$refs && _this8.$refs.pointsInput;
          if (r && r.$el) {
            try {
              r.$el.value = String(_this8.points_to_convert);
            } catch (e) {}
          }
        });
        this.pointsConverted = true;
        // reduce available points display until saved
        var baseAvail = Number(this.initialClientPoints || this.selectedClientPoints) || 0;
        this.selectedClientPoints = Math.max(0, baseAvail - pts);
      }
      this.Calcul_Total(); // Recalculate grand total
    },
    //---------- keyup Shipping
    keyup_Shipping: function keyup_Shipping() {
      if (isNaN(this.sale.shipping)) {
        this.sale.shipping = 0;
      } else if (this.sale.shipping == '') {
        this.sale.shipping = 0;
        this.Calcul_Total();
      } else {
        this.Calcul_Total();
      }
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
    Calcul_Total: function Calcul_Total() {
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
    },
    //-----------------------------------Delete Detail Product ------------------------------\\
    delete_Product_Detail: function delete_Product_Detail(id) {
      for (var i = 0; i < this.details.length; i++) {
        if (id === this.details[i].detail_id) {
          this.details.splice(i, 1);
          this.Calcul_Total();
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
          if (this.details[i].quantity == "" || this.details[i].quantity === 0) {
            count += 1;
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
    //--------------------------------- Update Sale -------------------------\\
    Update_Sale: function Update_Sale() {
      var _this9 = this;
      if (this.verifiedForm()) {
        if (Number(this.GrandTotal) < 0) {
          var msg = this.$t ? "".concat(this.$t('pos.Total_Payable'), " ").concat(this.$t('cannot_be_negative') || 'cannot be negative') : 'Total Payable cannot be negative';
          this.makeToast('warning', msg, this.$t ? this.$t('Warning') : 'Warning');
          return;
        }
        // Batch validation (only enforced when completed and the user has
        // touched the optional override). Empty batches => backend auto-FEFO.
        if (this.sale.statut === 'completed' && this.hasBatchValidationErrors) {
          this.makeToast('warning', this.firstBatchErrorMessage, this.$t('Warning') || 'Warning');
          return;
        }
        // Serial / IMEI validation (only enforced when completed).
        if (this.sale.statut === 'completed') {
          var badSerial = this.details.find(function (d) {
            return _this9.serialCountMismatch(d);
          });
          if (badSerial) {
            this.makeToast('warning', "".concat(this.$t('Serials_Count_Mismatch'), " (").concat(badSerial.name, ")"), this.$t('Warning') || 'Warning');
            return;
          }
        }
        this.SubmitProcessing = true;
        // Start the progress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
        var id = this.$route.params.id;
        var detailsPayload = this.details.map(function (d) {
          var out = Object.assign({}, d, {
            price_type: d.price_type || 'retail'
          });
          delete out.available_batches;
          delete out.batches_loading;
          if (d.is_batch_tracked && Array.isArray(d.batches) && d.batches.length > 0) {
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
        axios.put("sales/".concat(id), {
          date: this.sale.date,
          client_id: this.sale.client_id,
          GrandTotal: this.GrandTotal,
          warehouse_id: this.sale.warehouse_id,
          sales_agent_id: this.sale.sales_agent_id || null,
          statut: this.sale.statut,
          notes: this.sale.notes,
          tax_rate: this.sale.tax_rate ? this.sale.tax_rate : 0,
          TaxNet: this.sale.TaxNet ? this.sale.TaxNet : 0,
          discount: this.sale.discount ? this.sale.discount : 0,
          // Ensure order-level discount method is sent when editing
          discount_Method: String(this.sale.discount_Method || '2'),
          shipping: this.sale.shipping ? this.sale.shipping : 0,
          details: detailsPayload,
          discount_from_points: this.discount_from_points,
          used_points: this.used_points
        }).then(function (response) {
          _this9.makeToast("success", _this9.$t("Successfully_Updated"), _this9.$t("Success"));
          nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
          _this9.SubmitProcessing = false;
          _this9.$router.push({
            name: "index_sales"
          });
        })["catch"](function (error) {
          nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
          _this9.makeToast("danger", _this9.$t("InvalidData"), _this9.$t("Failed"));
          _this9.SubmitProcessing = false;
        });
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
      var _this0 = this;
      var wid = this.sale && this.sale.warehouse_id ? this.sale.warehouse_id : null;
      var url = wid ? "/show_product_data/".concat(product_id, "/").concat(variant_id, "/").concat(wid) : "/show_product_data/".concat(product_id, "/").concat(variant_id);
      axios.get(url).then(function (response) {
        _this0.product.del = 0;
        _this0.product.id = 0;
        _this0.product.etat = "new";
        _this0.product.discount = response.data.discount;
        _this0.product.DiscountNet = response.data.DiscountNet;
        _this0.product.discount_Method = response.data.discount_method;
        _this0.product.product_id = response.data.id;
        _this0.product.name = response.data.name;
        _this0.product.product_type = response.data.product_type;
        _this0.product.Net_price = response.data.Net_price;
        _this0.product.Unit_price = response.data.Unit_price;
        _this0.product.Unit_price_wholesale = response.data.Unit_price_wholesale;
        _this0.product.wholesale_Net_price = response.data.wholesale_Net_price;
        _this0.product.min_price = response.data.min_price;
        // baselines for toggle
        _this0.product.retail_unit_price = response.data.Unit_price;
        _this0.product.wholesale_unit_price = response.data.Unit_price_wholesale;
        _this0.product.price_type = 'retail';
        _this0.product.taxe = response.data.tax_price;
        _this0.product.tax_method = response.data.tax_method;
        _this0.product.tax_percent = response.data.tax_percent;
        _this0.product.unitSale = response.data.unitSale;
        _this0.product.sale_unit_id = response.data.sale_unit_id;
        _this0.product.is_imei = response.data.is_imei;
        _this0.product.imei_number = '';
        _this0.$set(_this0.product, 'serial_numbers', []);
        _this0.product.warehouse_location = response.data.warehouse_location ? response.data.warehouse_location.name ? "".concat(response.data.warehouse_location.code, " - ").concat(response.data.warehouse_location.name) : response.data.warehouse_location.code : null;
        _this0.product.is_batch_tracked = !!response.data.is_batch_tracked;
        _this0.product.batches = [];
        _this0.product.available_batches = [];
        _this0.product.batches_loading = false;

        // Multi-Pack Selling: attach available packs and pre-select the default.
        var packs = response.data.packs || [];
        var defPack = packs.find(function (p) {
          return p.is_default;
        }) || null;
        _this0.$set(_this0.product, "packs", packs);
        _this0.$set(_this0.product, "product_pack_id", defPack ? defPack.id : null);
        _this0.$set(_this0.product, "pack_multiplier", 1);
        _this0.$set(_this0.product, "pack_name", defPack ? defPack.name : null);

        // ensure min price respected on default
        if (_this0.product.Net_price < (_this0.product.min_price || 0)) {
          _this0.product.price_type = 'retail';
        }
        _this0.add_product();
        _this0.Calcul_Total();
        if (_this0.product.is_batch_tracked) {
          var last = _this0.details[_this0.details.length - 1];
          if (last) {
            _this0.fetch_batches_for_detail(last);
          }
        }
      });
    },
    //--------------------------------------- Get Elements ------------------------------\\
    GetElements: function GetElements() {
      var _this1 = this;
      var id = this.$route.params.id;
      axios.get("sales/".concat(id, "/edit")).then(function (response) {
        var rawSale = response.data.sale || {};

        // Normalize discount method coming from backend:
        // 1 / '1' / 'percent' / 'percentage'  => '1'
        // 2 / '2' / 'fixed'                   => '2'
        // null/undefined                      => '2' (fixed by default)
        var methodRaw = rawSale.discount_Method;
        var normalizedMethod = '2';
        if (methodRaw !== undefined && methodRaw !== null) {
          var dm = String(methodRaw).toLowerCase().trim();
          if (dm === '1' || dm === 'percent' || dm === 'percentage') {
            normalizedMethod = '1';
          } else if (dm === '2' || dm === 'fixed') {
            normalizedMethod = '2';
          }
        }
        _this1.sale = _objectSpread(_objectSpread({}, rawSale), {}, {
          discount_Method: normalizedMethod
        });

        // Prefill serials from the legacy imei_number text so the picker shows them pre-selected.
        _this1.details = (response.data.details || []).map(function (d) {
          if (!Array.isArray(d.serial_numbers)) {
            d.serial_numbers = d.is_imei && d.imei_number ? String(d.imei_number).split(/[\r\n,;\t]+/).map(function (s) {
              return s.trim();
            }).filter(function (s) {
              return s !== "";
            }) : [];
          }
          // Multi-Pack Selling: safe defaults so legacy lines behave as base unit.
          if (!Array.isArray(d.packs)) d.packs = [];
          if (d.product_pack_id === undefined) d.product_pack_id = null;
          if (d.pack_multiplier === undefined || d.pack_multiplier === null) d.pack_multiplier = 1;
          if (d.pack_name === undefined) d.pack_name = null;
          return d;
        });
        _this1.clients = response.data.clients;
        _this1.warehouses = response.data.warehouses;
        _this1.sales_agents = response.data.sales_agents || [];
        _this1.point_to_amount_rate = response.data.point_to_amount_rate;
        _this1.discount_from_points = response.data.discount_from_points || 0;
        _this1.used_points = _this1.sale.used_points > 0 ? _this1.sale.used_points : 0;

        // Fetch current loyalty points for this client to drive the points UI
        if (_this1.sale.client_id) {
          axios.get("/get_points_client/".concat(_this1.sale.client_id)).then(function (res) {
            var data = res.data || {};
            if (data.is_royalty_eligible || _this1.discount_from_points > 0 || _this1.used_points > 0) {
              _this1.selectedClientPoints = Number(data.points || 0);
              _this1.initialClientPoints = Number(data.points || 0);
              _this1.clientIsEligible = _this1.selectedClientPoints > 0;
            } else {
              _this1.selectedClientPoints = 0;
              _this1.initialClientPoints = 0;
              _this1.clientIsEligible = false;
            }
            // Show section if client has points OR this sale already used points/discount_from_points
            _this1.showPointsSection = _this1.clientIsEligible && _this1.selectedClientPoints > 0 || _this1.used_points && _this1.used_points > 0 || _this1.discount_from_points && _this1.discount_from_points > 0;
            // If sale already has discount_from_points, treat as converted
            if (_this1.discount_from_points > 0 && _this1.used_points > 0) {
              _this1.pointsConverted = true;
              _this1.points_to_convert = _this1.used_points;
            }
          })["catch"](function () {
            // On failure, just keep points UI hidden by default
            _this1.selectedClientPoints = 0;
            _this1.initialClientPoints = 0;
            _this1.clientIsEligible = false;
            _this1.showPointsSection = _this1.used_points && _this1.used_points > 0 || _this1.discount_from_points && _this1.discount_from_points > 0;
          })["finally"](function () {
            _this1.Get_Products_By_Warehouse(_this1.sale.warehouse_id);
            _this1.prefillBatchesForTrackedDetails();
            _this1.Calcul_Total();
            _this1.isLoading = false;
          });
        } else {
          // No client id, just proceed with existing data
          _this1.showPointsSection = _this1.used_points && _this1.used_points > 0 || _this1.discount_from_points && _this1.discount_from_points > 0;
          _this1.Get_Products_By_Warehouse(_this1.sale.warehouse_id);
          _this1.prefillBatchesForTrackedDetails();
          _this1.Calcul_Total();
          _this1.isLoading = false;
        }
      })["catch"](function (response) {
        setTimeout(function () {
          _this1.isLoading = false;
        }, 500);
      });
    }
  },
  //----------------------------- Created function-------------------
  created: function created() {
    this.GetElements();
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/edit_sale.vue?vue&type=template&id=2551574c"
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/edit_sale.vue?vue&type=template&id=2551574c ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("EditSale"),
      folder: _vm.$t("ListSales")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("validation-observer", {
    ref: "edit_sale"
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
        }, [_c("v-select", {
          "class": {
            "is-invalid": !!errors.length
          },
          attrs: {
            state: errors[0] ? false : valid ? true : null,
            disabled: "",
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
          model: {
            value: _vm.sale.client_id,
            callback: function callback($$v) {
              _vm.$set(_vm.sale, "client_id", $$v);
            },
            expression: "sale.client_id"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(errors[0]))])], 1);
      }
    }], null, false, 1360849133)
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
  }, [_c("i", {
    staticClass: "fa fa-trash"
  })])])]), _vm._v(" "), _c("tbody", [_vm.details.length <= 0 ? _c("tr", [_c("td", {
    attrs: {
      colspan: "9"
    }
  }, [_vm._v(_vm._s(_vm.$t("NodataAvailable")))])]) : _vm._e(), _vm._v(" "), _vm._l(_vm.details, function (detail) {
    return [_c("tr", {
      key: "d-" + detail.detail_id,
      "class": {
        row_deleted: detail.del === 1 || detail.no_unit === 0 && detail.product_type != "is_service"
      }
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
    }), _vm._v(_vm._s(_vm.$t("Batches") || "Batches") + "\n                            ")], 1)]) : _vm._e()]), _vm._v(" "), _c("td", [_vm._v("\n                          " + _vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.formatNumber(detail.Net_price, 3)) + "\n                          "), detail.packs && detail.packs.length ? _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: detail.product_pack_id,
        expression: "detail.product_pack_id"
      }],
      staticClass: "form-control form-control-sm mt-1",
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
        domProps: {
          value: pack.id
        }
      }, [_vm._v("\n                              " + _vm._s(pack.name) + " (×" + _vm._s(pack.multiplier) + ")\n                            ")]);
    }), 0) : _vm._e()]), _vm._v(" "), _c("td", [detail.product_type == "is_service" ? _c("span", {
      staticClass: "badge badge-warning"
    }, [_vm._v("----")]) : _c("span", {
      staticClass: "badge badge-warning"
    }, [_vm._v(_vm._s(detail.stock) + " " + _vm._s(detail.unitSale))])]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "quantity"
    }, [_c("b-input-group", [_c("b-input-group-prepend", [_c("span", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: detail.no_unit !== 0 || detail.product_type == "is_service",
        expression: "detail.no_unit !== 0 || detail.product_type == 'is_service'"
      }],
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
        max: detail.stock,
        disabled: detail.del === 1 || detail.no_unit === 0 && detail.product_type != "is_service"
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
      directives: [{
        name: "show",
        rawName: "v-show",
        value: detail.no_unit !== 0 || detail.product_type == "is_service",
        expression: "detail.no_unit !== 0 || detail.product_type == 'is_service'"
      }],
      staticClass: "btn btn-primary btn-sm",
      on: {
        click: function click($event) {
          return _vm.increment(detail, detail.detail_id);
        }
      }
    }, [_vm._v("+")])])], 1)], 1)]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.formatNumber(detail.DiscountNet * detail.quantity, 2)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.formatNumber(detail.taxe * detail.quantity, 2)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.currentUser.currency) + " " + _vm._s(detail.subtotal.toFixed(2)))]), _vm._v(" "), _c("td", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: detail.no_unit !== 0 || detail.product_type == "is_service",
        expression: "detail.no_unit !== 0 || detail.product_type == 'is_service'"
      }]
    }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("edit_product_sale") ? _c("lucide-icon", {
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
    }), _vm._v("\n                              " + _vm._s(_vm.$t("Leave_Empty_For_Auto_FEFO") || 'Leave empty to auto-allocate oldest-expiring batches first (FEFO), or click "Add" to override.') + "\n                            ")], 1) : _c("table", {
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
              label: ab.batch_no + (ab.expiry_date ? " · " + (_vm.$t("Exp") || "Exp") + " " + ab.expiry_date : "") + " · " + ab.qty_available,
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
    }), 0)]), _vm._v(" "), detail.available_batches && detail.available_batches.length && (detail.batches || []).length > 0 && _vm.batch_qty_mismatch(detail) ? _c("div", {
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
        "fetch-params": {
          product_id: detail.product_id,
          warehouse_id: _vm.sale.warehouse_id,
          product_variant_id: detail.product_variant_id || null,
          include_sale_id: _vm.sale.id
        }
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
  }, [_vm._v(_vm._s(_vm.$t("Discount")))]), _vm._v(" "), _c("td", [String(_vm.sale.discount_Method || "2") === "1" ? [_vm._v("\n                          " + _vm._s(_vm.formatNumber(_vm.sale.discount, 2)) + "% (" + _vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.getCurrentSaleDiscountAmount().toFixed(2)) + ")\n                        ")] : [_vm._v("\n                          " + _vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.getCurrentSaleDiscountAmount().toFixed(2)) + "\n                        ")]], 2)]), _vm._v(" "), _vm.discount_from_points && _vm.discount_from_points > 0 ? _c("tr", [_c("td", {
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
  })], 1) : _vm._e(), _vm._v(" "), _vm.showPointsSection && _vm.currentUserPermissions && _vm.currentUserPermissions.includes("edit_tax_discount_shipping_sale") ? _c("b-col", {
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
  }, [_vm._v("\n                    Total available:\n                    "), _c("strong", [_vm._v(_vm._s(_vm.selectedClientPoints))]), _vm._v(" pts\n                  ")])], 1), _vm._v(" "), _c("div", {
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
  }, [!_vm.pointsConverted ? [_vm._v("Convert")] : [_vm._v("Unconvert")]], 2), _vm._v(" "), !_vm.pointsConverted && _vm.points_to_convert && !_vm.pointsInputValid ? _c("small", {
    staticClass: "warn"
  }, [_vm._v("\n                    Enter a value from 1 to your available points.\n                  ")]) : _vm._e(), _vm._v(" "), !_vm.pointsConverted && _vm.pointsInputValid ? _c("small", {
    staticClass: "ok"
  }, [_vm._v("\n                    Looks good.\n                  ")]) : _vm._e()], 1), _vm._v(" "), _vm.discount_from_points > 0 ? _c("div", {
    staticClass: "result mt-2"
  }, [_vm._v("\n                  ✅ Discount of\n                  "), _c("strong", [_vm._v(_vm._s(_vm.discount_from_points))]), _vm._v("\n                  " + _vm._s(_vm.currentUser.currency) + "\n                  will be applied\n                ")]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("edit_tax_discount_shipping_sale") ? _c("b-col", {
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
          model: {
            value: _vm.sale.statut,
            callback: function callback($$v) {
              _vm.$set(_vm.sale, "statut", $$v);
            },
            expression: "sale.statut"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(errors[0]))])], 1);
      }
    }], null, false, 255606126)
  })], 1), _vm._v(" "), _c("b-col", {
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
    staticClass: "alert alert-warning mt-2",
    staticStyle: {
      "font-size": "13px",
      "font-weight": "600"
    }
  }, [_c("lucide-icon", {
    staticClass: "me-1",
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
      disabled: _vm.SubmitProcessing || _vm.sale.statut === "completed" && _vm.hasBatchValidationErrors
    },
    on: {
      click: _vm.Submit_Sale
    }
  }, [_c("lucide-icon", {
    staticClass: "me-2 font-weight-bold",
    attrs: {
      name: "check"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("submit")))], 1), _vm._v(" "), _vm.SubmitProcessing ? _vm._m(0) : _vm._e()], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _c("validation-observer", {
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
              _vm.$set(_vm.detail, "Unit_price", _vm._n($$v));
            },
            expression: "detail.Unit_price"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "Price-feedback"
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
      name: "Tax Method",
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
              _vm.$set(_vm.detail, "tax_percent", _vm._n($$v));
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
      fn: function fn(_ref6) {
        var valid = _ref6.valid,
          errors = _ref6.errors;
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
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", [_c("b-button", {
    attrs: {
      variant: "primary",
      type: "submit",
      disabled: _vm.Submit_Processing_detail
    }
  }, [_c("lucide-icon", {
    staticClass: "me-2 font-weight-bold",
    attrs: {
      name: "check"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("submit")))], 1), _vm._v(" "), _vm.Submit_Processing_detail ? _vm._m(1) : _vm._e()], 1)], 1)], 1)], 1)], 1)], 1)], 1);
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
}];
render._withStripped = true;


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/edit_sale.vue?vue&type=style&index=0&id=2551574c&lang=css"
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/edit_sale.vue?vue&type=style&index=0&id=2551574c&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.input-with-icon {\n  display: flex;\n  align-items: center;\n}\n.scan-icon {\n  width: 50px; /* Adjust size as needed */\n  height: 50px;\n  margin-right: 8px; /* Adjust spacing as needed */\n  cursor: pointer;\n}  \n\n\n\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/edit_sale.vue?vue&type=style&index=0&id=2551574c&lang=css"
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/edit_sale.vue?vue&type=style&index=0&id=2551574c&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_sale_vue_vue_type_style_index_0_id_2551574c_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit_sale.vue?vue&type=style&index=0&id=2551574c&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/edit_sale.vue?vue&type=style&index=0&id=2551574c&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_sale_vue_vue_type_style_index_0_id_2551574c_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_sale_vue_vue_type_style_index_0_id_2551574c_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/views/app/pages/sales/edit_sale.vue"
/*!***********************************************************!*\
  !*** ./resources/src/views/app/pages/sales/edit_sale.vue ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_sale_vue_vue_type_template_id_2551574c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit_sale.vue?vue&type=template&id=2551574c */ "./resources/src/views/app/pages/sales/edit_sale.vue?vue&type=template&id=2551574c");
/* harmony import */ var _edit_sale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit_sale.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/sales/edit_sale.vue?vue&type=script&lang=js");
/* harmony import */ var _edit_sale_vue_vue_type_style_index_0_id_2551574c_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit_sale.vue?vue&type=style&index=0&id=2551574c&lang=css */ "./resources/src/views/app/pages/sales/edit_sale.vue?vue&type=style&index=0&id=2551574c&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _edit_sale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_sale_vue_vue_type_template_id_2551574c__WEBPACK_IMPORTED_MODULE_0__.render,
  _edit_sale_vue_vue_type_template_id_2551574c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/sales/edit_sale.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/sales/edit_sale.vue?vue&type=script&lang=js"
/*!***********************************************************************************!*\
  !*** ./resources/src/views/app/pages/sales/edit_sale.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_sale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit_sale.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/edit_sale.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_sale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/sales/edit_sale.vue?vue&type=template&id=2551574c"
/*!*****************************************************************************************!*\
  !*** ./resources/src/views/app/pages/sales/edit_sale.vue?vue&type=template&id=2551574c ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_sale_vue_vue_type_template_id_2551574c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_sale_vue_vue_type_template_id_2551574c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_sale_vue_vue_type_template_id_2551574c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit_sale.vue?vue&type=template&id=2551574c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/edit_sale.vue?vue&type=template&id=2551574c");


/***/ },

/***/ "./resources/src/views/app/pages/sales/edit_sale.vue?vue&type=style&index=0&id=2551574c&lang=css"
/*!*******************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/sales/edit_sale.vue?vue&type=style&index=0&id=2551574c&lang=css ***!
  \*******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_sale_vue_vue_type_style_index_0_id_2551574c_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit_sale.vue?vue&type=style&index=0&id=2551574c&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/edit_sale.vue?vue&type=style&index=0&id=2551574c&lang=css");


/***/ }

}]);