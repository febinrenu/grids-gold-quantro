"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["store_transfer"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/transfers/create_transfer.vue?vue&type=script&lang=js"
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/transfers/create_transfer.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _utils_priceFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/priceFormat */ "./resources/src/utils/priceFormat.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
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
    title: "Create Transfer"
  },
  data: function data() {
    return {
      focused: false,
      timer: null,
      search_input: '',
      product_filter: [],
      isLoading: true,
      SubmitProcessing: false,
      details: [],
      detail: {
        quantity: "",
        discount: "",
        Unit_cost: "",
        discount_Method: "",
        tax_percent: "",
        tax_method: ""
      },
      warehouses: [],
      to_warehouses: [],
      from_warehouse_locations: [],
      to_warehouse_locations: [],
      products: [],
      units: [],
      symbol: "",
      transfer: {
        id: "",
        from_warehouse: "",
        to_warehouse: "",
        from_warehouse_location: "",
        to_warehouse_location: "",
        statut: "completed",
        notes: "",
        date: new Date().toISOString().slice(0, 10),
        items: 0,
        tax_rate: 0,
        TaxNet: 0,
        shipping: 0,
        discount: 0
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
        name: "",
        unitPurchase: "",
        purchase_unit_id: "",
        fix_stock: "",
        fix_cost: "",
        Net_cost: "",
        Unit_cost: "",
        Total_cost: "",
        subtotal: "",
        product_id: "",
        detail_id: "",
        taxe: "",
        tax_percent: "",
        tax_method: "",
        product_variant_id: "",
        is_batch_tracked: false,
        batches: [],
        available_batches: [],
        batches_loading: false
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["currentUser"])), {}, {
    // Monetary precision (2 or 3) driven by the "Enable 3 Decimal Pricing" setting.
    priceDecimals: function priceDecimals() {
      return (0,_utils_priceFormat__WEBPACK_IMPORTED_MODULE_1__.getPriceDecimals)({
        store: this.$store
      });
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
          var seen = new Set();
          var _iterator2 = _createForOfIteratorHelper(batches),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var b = _step2.value;
              if (!b.product_batch_id) return true;
              var q = Number(b.qty);
              if (!(q > 0)) return true;
              if (q > (Number(b.qty_available) || 0) + 0.01) return true;
              if (seen.has(b.product_batch_id)) return true;
              seen.add(b.product_batch_id);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          var total = Math.round(batches.reduce(function (s, b) {
            return s + (Number(b.qty) || 0);
          }, 0) * 10000) / 10000;
          var target = Math.round((Number(d.quantity) || 0) * 10000) / 10000;
          if (Math.abs(total - target) > 0.01) return true;
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
          var seen = new Set();
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
              if (q > (Number(b.qty_available) || 0) + 0.01) {
                return (this.$t("Batch_Qty_Exceeds_Available") || "Batch quantity exceeds available stock for") + " " + label;
              }
              if (seen.has(b.product_batch_id)) {
                return (this.$t("Duplicate_Batch_Selected") || "The same batch is selected twice for") + " " + label;
              }
              seen.add(b.product_batch_id);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          var total = Math.round(batches.reduce(function (s, b) {
            return s + (Number(b.qty) || 0);
          }, 0) * 10000) / 10000;
          var target = Math.round((Number(d.quantity) || 0) * 10000) / 10000;
          if (Math.abs(total - target) > 0.01) {
            return (this.$t("Total_batch_qty_mismatch") || "Total batch quantity does not match the line quantity") + " (" + total + " / " + target + ") — " + label;
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
  watch: {
    "details": {
      deep: true,
      handler: function handler(details) {
        if (!Array.isArray(details)) return;
        var _iterator5 = _createForOfIteratorHelper(details),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var d = _step5.value;
            if (!d || !d.is_batch_tracked) continue;
            var batches = Array.isArray(d.batches) ? d.batches : [];
            if (batches.length !== 1) continue;
            var b = batches[0];
            var lineQty = Number(d.quantity);
            var batchQty = Number(b.qty);
            if (Number.isFinite(lineQty) && lineQty > 0 && batchQty !== lineQty) {
              this.$set(b, "qty", lineQty);
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    }
  },
  methods: {
    handleFocus: function handleFocus() {
      this.focused = true;
    },
    handleBlur: function handleBlur() {
      this.focused = false;
    },
    showModal: function showModal() {
      this.$bvModal.show('open_scan');
    },
    onScan: function onScan(decodedText, decodedResult) {
      var code = decodedText;
      this.search_input = code;
      this.search();
      this.$bvModal.hide('open_scan');
    },
    //------------- Submit Validation Create Transfer
    Submit_Transfer: function Submit_Transfer() {
      var _this = this;
      this.$refs.Create_transfer.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else {
          _this.Create_Transfer();
        }
      });
    },
    //---Submit Validation Update Detail
    submit_Update_Detail: function submit_Update_Detail() {
      var _this2 = this;
      this.$refs.Update_Detail_transfer.validate().then(function (success) {
        if (!success) {
          return;
        } else {
          _this2.Update_Detail();
        }
      });
    },
    //---------------------- get_units ------------------------------\\
    get_units: function get_units(value) {
      var _this3 = this;
      axios.get("get_units?id=" + value).then(function (_ref) {
        var data = _ref.data;
        return _this3.units = data;
      });
    },
    //------ Show Modal Update Detail Product
    Modal_Updat_Detail: function Modal_Updat_Detail(detail) {
      this.detail = {};
      this.detail.name = detail.name;
      this.get_units(detail.product_id);
      this.detail.detail_id = detail.detail_id;
      this.detail.purchase_unit_id = detail.purchase_unit_id;
      this.detail.Unit_cost = detail.Unit_cost;
      this.detail.tax_method = detail.tax_method;
      this.detail.fix_cost = detail.fix_cost;
      this.detail.fix_stock = detail.fix_stock;
      this.detail.stock = detail.stock;
      this.detail.discount_Method = detail.discount_Method;
      this.detail.discount = detail.discount;
      this.detail.quantity = detail.quantity;
      this.detail.tax_percent = detail.tax_percent;
      this.$bvModal.show("form_Update_Detail");
    },
    //------ Submit Update Detail Product
    Update_Detail: function Update_Detail() {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id === this.detail.detail_id) {
          // this.convert_unit();
          for (var k = 0; k < this.units.length; k++) {
            if (this.units[k].id == this.detail.purchase_unit_id) {
              if (this.units[k].operator == '/') {
                this.details[i].stock = this.detail.fix_stock * this.units[k].operator_value;
                this.details[i].unitPurchase = this.units[k].ShortName;
              } else {
                this.details[i].stock = this.detail.fix_stock / this.units[k].operator_value;
                this.details[i].unitPurchase = this.units[k].ShortName;
              }
            }
          }
          if (this.details[i].stock < this.details[i].quantity) {
            this.details[i].quantity = this.details[i].stock;
          } else {
            this.details[i].quantity = 1;
          }
          this.details[i].Unit_cost = this.detail.Unit_cost;
          this.details[i].tax_percent = this.detail.tax_percent;
          this.details[i].tax_method = this.detail.tax_method;
          this.details[i].discount_Method = this.detail.discount_Method;
          this.details[i].discount = this.detail.discount;
          this.details[i].purchase_unit_id = this.detail.purchase_unit_id;
          if (this.details[i].discount_Method == "2") {
            //Fixed
            this.details[i].DiscountNet = this.details[i].discount;
          } else {
            //Percentage %
            this.details[i].DiscountNet = parseFloat(this.details[i].Unit_cost * this.details[i].discount / 100);
          }
          if (this.details[i].tax_method == "1") {
            //Exclusive
            this.details[i].Net_cost = parseFloat(this.details[i].Unit_cost - this.details[i].DiscountNet);
            this.details[i].taxe = parseFloat(this.details[i].tax_percent * (this.details[i].Unit_cost - this.details[i].DiscountNet) / 100);
          } else {
            //Inclusive
            this.details[i].taxe = parseFloat((this.details[i].Unit_cost - this.details[i].DiscountNet) * (this.details[i].tax_percent / 100));
            this.details[i].Net_cost = parseFloat(this.details[i].Unit_cost - this.details[i].taxe - this.details[i].DiscountNet);
          }
          this.$forceUpdate();
        }
      }
      this.Calcul_Total();
      this.$bvModal.hide("form_Update_Detail");
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
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
    // Search Products
    search: function search() {
      var _this4 = this;
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      if (this.search_input.length < 2) {
        return this.product_filter = [];
      }
      if (this.transfer.from_warehouse != "" && this.transfer.from_warehouse != null) {
        this.timer = setTimeout(function () {
          var product_filter = _this4.products.filter(function (product) {
            return product.code === _this4.search_input || product.barcode.includes(_this4.search_input);
          });
          if (product_filter.length === 1) {
            _this4.SearchProduct(product_filter[0]);
          } else {
            _this4.product_filter = _this4.products.filter(function (product) {
              return product.name.toLowerCase().includes(_this4.search_input.toLowerCase()) || product.code.toLowerCase().includes(_this4.search_input.toLowerCase()) || product.barcode.toLowerCase().includes(_this4.search_input.toLowerCase());
            });

            // Check if product_filter is empty and show alert
            if (_this4.product_filter.length <= 0) {
              _this4.makeToast("warning", "Product Not Found", "Warning");
            }
          }
        }, 800);
      } else {
        this.makeToast("warning", this.$t("SelectWarehouse"), this.$t("Warning"));
      }
    },
    //-------------------- get Result Value Search Product
    getResultValue: function getResultValue(result) {
      return result.code + " " + "(" + result.name + ")";
    },
    //--------------------  Submit Search Product
    SearchProduct: function SearchProduct(result) {
      this.product = {};
      if (this.details.length > 0 && this.details.some(function (detail) {
        return detail.code === result.code;
      })) {
        this.makeToast("warning", this.$t("AlreadyAdd"), this.$t("Warning"));
      } else {
        this.product.code = result.code;
        this.product.stock = result.qte_purchase;
        this.product.fix_stock = result.qte;
        if (result.qte_purchase < 1) {
          this.product.quantity = result.qte_purchase;
        } else {
          this.product.quantity = 1;
        }
        this.product.product_variant_id = result.product_variant_id;
        this.Get_Product_Details(result.id, result.product_variant_id);
      }
      this.search_input = '';
      this.$refs.product_autocomplete.value = "";
      this.product_filter = [];
    },
    //-----------------------------------------Calcul Total ------------------------------\\
    Calcul_Total: function Calcul_Total() {
      this.total = 0;
      for (var index = 0; index < this.details.length; index++) {
        var tax = this.details[index].taxe * this.details[index].quantity;
        this.details[index].subtotal = parseFloat(this.details[index].quantity * this.details[index].Net_cost + tax);
        this.total = parseFloat(this.total + this.details[index].subtotal);
      }
      var total_without_discount = parseFloat(this.total - this.transfer.discount);
      this.transfer.TaxNet = parseFloat(total_without_discount * this.transfer.tax_rate / 100);
      this.GrandTotal = parseFloat(total_without_discount + this.transfer.TaxNet + this.transfer.shipping);
      var grand_total = this.GrandTotal.toFixed(this.priceDecimals);
      this.GrandTotal = parseFloat(grand_total);
    },
    //---------- keyup OrderTax
    keyup_OrderTax: function keyup_OrderTax() {
      if (isNaN(this.transfer.tax_rate)) {
        this.transfer.tax_rate = 0;
      } else if (this.transfer.tax_rate == '') {
        this.transfer.tax_rate = 0;
        this.Calcul_Total();
      } else {
        this.Calcul_Total();
      }
    },
    //---------- keyup Discount
    keyup_Discount: function keyup_Discount() {
      if (isNaN(this.transfer.discount)) {
        this.transfer.discount = 0;
      } else if (this.transfer.discount == '') {
        this.transfer.discount = 0;
        this.Calcul_Total();
      } else {
        this.Calcul_Total();
      }
    },
    //---------- keyup Shipping
    keyup_Shipping: function keyup_Shipping() {
      if (isNaN(this.transfer.shipping)) {
        this.transfer.shipping = 0;
      } else if (this.transfer.shipping == '') {
        this.transfer.shipping = 0;
        this.Calcul_Total();
      } else {
        this.Calcul_Total();
      }
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
    //-----------------------------------Verified Form ------------------------------\\
    verifiedForm: function verifiedForm() {
      if (this.details.length <= 0) {
        this.makeToast("warning", this.$t("AddProductToList"), this.$t("Warning"));
        return false;
      } else if (this.transfer.from_warehouse === this.transfer.to_warehouse && (!this.transfer.from_warehouse_location || !this.transfer.to_warehouse_location || this.transfer.from_warehouse_location === this.transfer.to_warehouse_location)) {
        // Same warehouse is only allowed as a location-to-location move
        // (e.g. safe -> showroom) with two distinct locations selected.
        this.makeToast("warning", this.$t("WarehouseIdentical"), this.$t("Warning"));
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
        }
        if (this.hasBatchValidationErrors) {
          this.makeToast("danger", this.firstBatchErrorMessage || this.$t("Total_batch_qty_mismatch") || "Batch quantities are invalid", this.$t("Failed") || "Failed");
          return false;
        }
        return true;
      }
    },
    //-------------------------------- Create Transfer ----------------------\\
    Create_Transfer: function Create_Transfer() {
      var _this5 = this;
      if (this.verifiedForm()) {
        this.SubmitProcessing = true;
        // Start the progress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_2___default().start();
        nprogress__WEBPACK_IMPORTED_MODULE_2___default().set(0.1);
        axios.post("transfers", {
          transfer: this.transfer,
          details: this.buildSubmitDetails(),
          GrandTotal: this.GrandTotal
        }).then(function (response) {
          // Complete the animation of theprogress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_2___default().done();
          _this5.SubmitProcessing = false;
          _this5.$router.push({
            name: "index_transfer"
          });
          _this5.makeToast("success", _this5.$t("Successfully_Created"), _this5.$t("Success"));
        })["catch"](function (error) {
          // Complete the animation of theprogress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_2___default().done();
          _this5.makeToast("danger", _this5.$t("InvalidData"), _this5.$t("Failed"));
          _this5.SubmitProcessing = false;
        });
      }
    },
    //-------------------------------- Get Last Detail Id -------------------------\\
    Last_Detail_id: function Last_Detail_id() {
      this.product.detail_id = 0;
      var len = this.details.length;
      this.product.detail_id = this.details[len - 1].detail_id + 1;
    },
    //----------------------------------------- Add Detail of Transfer -------------------------\\
    add_Detail: function add_Detail() {
      if (this.details.length > 0) {
        this.Last_Detail_id();
      } else if (this.details.length === 0) {
        this.product.detail_id = 1;
      }
      this.details.push(this.product);
    },
    //----------------------------------------- Batch handling -------------------------\\
    fetch_batches_for_detail: function fetch_batches_for_detail(detail) {
      var _this6 = this;
      if (!detail) return;
      if (!("batches_loading" in detail)) this.$set(detail, "batches_loading", false);
      if (!("available_batches" in detail)) this.$set(detail, "available_batches", []);
      if (!Array.isArray(detail.batches)) this.$set(detail, "batches", []);
      if (!detail.is_batch_tracked) {
        this.$set(detail, "batches_loading", false);
        return;
      }
      var wid = this.transfer && this.transfer.from_warehouse;
      var productId = detail.product_id || detail.id;
      if (!wid || !productId) {
        this.$set(detail, "batches_loading", false);
        return;
      }
      var variantSeg = detail.product_variant_id != null && detail.product_variant_id !== "" ? detail.product_variant_id : 0;
      // Existing batch picks already debited the source — add their qty back to
      // qty_available so the user can re-edit allocations without false over-allocation.
      var existingQtyById = {};
      var _iterator6 = _createForOfIteratorHelper(Array.isArray(detail.batches) ? detail.batches : []),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var b = _step6.value;
          if (b && b.product_batch_id != null) {
            existingQtyById[b.product_batch_id] = (existingQtyById[b.product_batch_id] || 0) + (Number(b.qty) || 0);
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      this.$set(detail, "batches_loading", true);
      axios.get("batches_for_transfer/".concat(productId, "/").concat(wid, "/").concat(variantSeg), {
        timeout: 15000
      }).then(function (response) {
        var list = response && response.data && Array.isArray(response.data.batches) ? response.data.batches.map(function (ab) {
          return _objectSpread(_objectSpread({}, ab), {}, {
            qty_available: (Number(ab.qty_available) || 0) + (existingQtyById[ab.id] || 0)
          });
        }) : [];
        _this6.$set(detail, "available_batches", list);
        if (Array.isArray(detail.batches)) {
          var _iterator7 = _createForOfIteratorHelper(detail.batches),
            _step7;
          try {
            var _loop = function _loop() {
              var b = _step7.value;
              if (b && b.product_batch_id != null) {
                var ab = list.find(function (x) {
                  return x.id === b.product_batch_id;
                });
                _this6.$set(b, "qty_available", ab ? Number(ab.qty_available) || 0 : existingQtyById[b.product_batch_id] || 0);
              }
            };
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        }
      })["catch"](function () {
        _this6.$set(detail, "available_batches", []);
      }).then(function () {
        _this6.$set(detail, "batches_loading", false);
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
      var ab = list.find(function (x) {
        return x.id === batchId;
      });
      this.$set(row, "product_batch_id", ab ? ab.id : null);
      this.$set(row, "batch_no", ab ? ab.batch_no : "");
      this.$set(row, "expiry_date", ab ? ab.expiry_date : null);
      this.$set(row, "qty_available", ab ? Number(ab.qty_available) || 0 : 0);
    },
    on_batch_qty_input: function on_batch_qty_input(b, val) {
      var num = parseFloat(String(val).replace(",", "."));
      this.$set(b, "qty", Number.isFinite(num) ? num : 0);
    },
    batch_total_qty: function batch_total_qty(detail) {
      if (!detail || !Array.isArray(detail.batches)) return 0;
      return detail.batches.reduce(function (sum, b) {
        return sum + (Number(b.qty) || 0);
      }, 0);
    },
    batch_qty_mismatch: function batch_qty_mismatch(detail) {
      if (!detail || !detail.is_batch_tracked) return false;
      if (!Array.isArray(detail.batches) || detail.batches.length === 0) return false;
      var total = this.batch_total_qty(detail);
      var target = Number(detail.quantity) || 0;
      return Math.abs(total - target) > 0.01;
    },
    expiry_pill_style: function expiry_pill_style(dateStr) {
      var base = {
        display: "inline-block",
        padding: "2px 8px",
        fontSize: "11px",
        fontWeight: "600",
        borderRadius: "10px"
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
    buildSubmitDetails: function buildSubmitDetails() {
      return (this.details || []).map(function (d) {
        var out = Object.assign({}, d);
        delete out.available_batches;
        delete out.batches_loading;
        if (d.is_batch_tracked && Array.isArray(d.batches)) {
          out.batches = d.batches.filter(function (b) {
            return b && b.product_batch_id && Number(b.qty) > 0;
          }).map(function (b) {
            return {
              product_batch_id: Number(b.product_batch_id),
              qty: Number(b.qty) || 0
            };
          });
        } else {
          delete out.batches;
        }
        return out;
      });
    },
    //-----------------------------------Verified QTY ------------------------------\\
    Verified_Qty: function Verified_Qty(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id === id) {
          if (isNaN(detail.quantity)) {
            this.details[i].quantity = detail.stock;
          }
          if (detail.quantity > detail.stock) {
            this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
            this.details[i].quantity = detail.stock;
          } else {
            this.details[i].quantity = detail.quantity;
          }
        }
      }
      this.Calcul_Total();
      this.$forceUpdate();
    },
    //-----------------------------------increment QTY ------------------------------\\
    increment: function increment(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id == id) {
          if (detail.quantity + 1 > detail.stock) {
            this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
          } else {
            this.formatNumber(this.details[i].quantity++, 2);
          }
        }
      }
      this.Calcul_Total();
      this.$forceUpdate();
    },
    //-----------------------------------decrement QTY ------------------------------\\
    decrement: function decrement(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id === id) {
          if (detail.quantity - 1 >= 1) {
            if (detail.quantity - 1 > detail.stock) {
              this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
            } else {
              this.formatNumber(this.details[i].quantity--, 2);
            }
          }
        }
      }
      this.Calcul_Total();
      this.$forceUpdate();
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
    //------------------------------------ Get Products By Warehouse -------------------------\\
    Get_Products_By_Warehouse: function Get_Products_By_Warehouse(id) {
      var _this7 = this;
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_2___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_2___default().set(0.1);
      axios.get("get_Products_by_warehouse/" + id + "?stock=" + 1 + "&product_service=" + 0 + "&product_combo=" + 1).then(function (response) {
        _this7.products = response.data;
        nprogress__WEBPACK_IMPORTED_MODULE_2___default().done();
      })["catch"](function (error) {});
    },
    //---------------------------------Get Product Details ------------------------\\
    Get_Product_Details: function Get_Product_Details(product_id, variant_id) {
      var _this8 = this;
      var wid = this.transfer && this.transfer.from_warehouse ? this.transfer.from_warehouse : null;
      var url = wid ? "/show_product_data/".concat(product_id, "/").concat(variant_id, "/").concat(wid) : "/show_product_data/".concat(product_id, "/").concat(variant_id);
      axios.get(url).then(function (response) {
        _this8.product.discount = response.data.discount;
        _this8.product.DiscountNet = response.data.DiscountNet;
        _this8.product.discount_Method = response.data.discount_method;
        _this8.product.product_id = response.data.id;
        _this8.product.name = response.data.name;
        _this8.product.Net_cost = response.data.Net_cost;
        _this8.product.Unit_cost = response.data.Unit_cost;
        _this8.product.taxe = response.data.tax_cost;
        _this8.product.tax_method = response.data.tax_method;
        _this8.product.tax_percent = response.data.tax_percent;
        _this8.product.unitPurchase = response.data.unitPurchase;
        _this8.product.fix_cost = response.data.fix_cost;
        _this8.product.purchase_unit_id = response.data.purchase_unit_id;
        _this8.product.warehouse_location = response.data.warehouse_location ? response.data.warehouse_location.name ? "".concat(response.data.warehouse_location.code, " - ").concat(response.data.warehouse_location.name) : response.data.warehouse_location.code : null;
        _this8.$set(_this8.product, "is_batch_tracked", !!response.data.is_batch_tracked);
        _this8.$set(_this8.product, "batches", []);
        _this8.$set(_this8.product, "available_batches", []);
        _this8.$set(_this8.product, "batches_loading", false);
        _this8.add_Detail();
        _this8.Calcul_Total();
        if (_this8.product.is_batch_tracked) {
          var last = _this8.details[_this8.details.length - 1];
          if (last) _this8.fetch_batches_for_detail(last);
        }
      });
    },
    //---------------------- Event Select From Warehouse ------------------------------\\
    Selected_From_Warehouse: function Selected_From_Warehouse(value) {
      var _this9 = this;
      this.search_input = '';
      this.product_filter = [];
      this.Get_Products_By_Warehouse(value);

      // Pharmacy: source warehouse changed → refetch available batches per cart line.
      if (Array.isArray(this.details)) {
        var _iterator8 = _createForOfIteratorHelper(this.details),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var d = _step8.value;
            if (d && d.is_batch_tracked) {
              this.$set(d, "batches", []);
              this.fetch_batches_for_detail(d);
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }
      this.transfer.from_warehouse_location = "";
      this.from_warehouse_locations = [];
      if (value) {
        axios.get("warehouse_locations/by_warehouse/" + value).then(function (_ref3) {
          var data = _ref3.data;
          _this9.from_warehouse_locations = data.warehouse_locations || data || [];
        })["catch"](function () {
          _this9.from_warehouse_locations = [];
        });
      }
    },
    //-------------------------------------- Destination warehouse changed ----------------------\\
    Selected_To_Warehouse: function Selected_To_Warehouse(value) {
      var _this0 = this;
      this.transfer.to_warehouse_location = "";
      this.to_warehouse_locations = [];
      if (value) {
        axios.get("warehouse_locations/by_warehouse/" + value).then(function (_ref4) {
          var data = _ref4.data;
          _this0.to_warehouse_locations = data.warehouse_locations || data || [];
        })["catch"](function () {
          _this0.to_warehouse_locations = [];
        });
      }
    },
    //-------------------------------------- Get Elements Create Transfer----------------------\\
    Get_Elements: function Get_Elements() {
      var _this1 = this;
      axios.get("transfers/create").then(function (response) {
        _this1.warehouses = response.data.warehouses;
        _this1.to_warehouses = response.data.to_warehouses;
        _this1.isLoading = false;
      })["catch"](function (response) {
        setTimeout(function () {
          _this1.isLoading = false;
        }, 500);
      });
    }
  },
  //----------------------------- Created function-------------------
  created: function created() {
    this.Get_Elements();
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/transfers/create_transfer.vue?vue&type=template&id=4f06e01a"
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/transfers/create_transfer.vue?vue&type=template&id=4f06e01a ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("Create_Transfer"),
      folder: _vm.$t("ListTransfers")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("validation-observer", {
    ref: "Create_transfer"
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Submit_Transfer.apply(null, arguments);
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
            value: _vm.transfer.date,
            callback: function callback($$v) {
              _vm.$set(_vm.transfer, "date", $$v);
            },
            expression: "transfer.date"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "OrderTax-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 3120178706)
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "From Warehouse",
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
            label: _vm.$t("FromWarehouse") + " " + "*"
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
            input: _vm.Selected_From_Warehouse
          },
          model: {
            value: _vm.transfer.from_warehouse,
            callback: function callback($$v) {
              _vm.$set(_vm.transfer, "from_warehouse", $$v);
            },
            expression: "transfer.from_warehouse"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(errors[0]))])], 1);
      }
    }], null, false, 196005589)
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "To Warehouse",
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
            label: _vm.$t("ToWarehouse") + " " + "*"
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
            options: _vm.to_warehouses.map(function (to_warehouses) {
              return {
                label: to_warehouses.name,
                value: to_warehouses.id
              };
            })
          },
          on: {
            input: _vm.Selected_To_Warehouse
          },
          model: {
            value: _vm.transfer.to_warehouse,
            callback: function callback($$v) {
              _vm.$set(_vm.transfer, "to_warehouse", $$v);
            },
            expression: "transfer.to_warehouse"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(errors[0]))])], 1);
      }
    }], null, false, 2511527808)
  })], 1), _vm._v(" "), _vm.from_warehouse_locations.length ? _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("FromLocation") || "From Location"
    }
  }, [_c("v-select", {
    attrs: {
      reduce: function reduce(label) {
        return label.value;
      },
      placeholder: _vm.$t("Choose_Location") || "Choose Location",
      options: _vm.from_warehouse_locations.map(function (l) {
        return {
          label: l.name,
          value: l.id
        };
      })
    },
    model: {
      value: _vm.transfer.from_warehouse_location,
      callback: function callback($$v) {
        _vm.$set(_vm.transfer, "from_warehouse_location", $$v);
      },
      expression: "transfer.from_warehouse_location"
    }
  })], 1)], 1) : _vm._e(), _vm._v(" "), _vm.to_warehouse_locations.length ? _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("ToLocation") || "To Location"
    }
  }, [_c("v-select", {
    attrs: {
      reduce: function reduce(label) {
        return label.value;
      },
      placeholder: _vm.$t("Choose_Location") || "Choose Location",
      options: _vm.to_warehouse_locations.map(function (l) {
        return {
          label: l.name,
          value: l.id
        };
      })
    },
    model: {
      value: _vm.transfer.to_warehouse_location,
      callback: function callback($$v) {
        _vm.$set(_vm.transfer, "to_warehouse_location", $$v);
      },
      expression: "transfer.to_warehouse_location"
    }
  })], 1)], 1) : _vm._e(), _vm._v(" "), _c("b-col", {
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
  }, [_c("div", {
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
  }, [_vm._v(_vm._s(_vm.$t("Net_Unit_Cost")))]), _vm._v(" "), _c("th", {
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
      key: "r-" + detail.detail_id
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
    }), _vm._v(_vm._s(_vm.$t("Batches")) + "\n                            ")], 1)]) : _vm._e()]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.formatNumber(detail.Net_cost, _vm.priceDecimals)))]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "badge badge-outline-warning"
    }, [_vm._v(_vm._s(detail.stock) + " " + _vm._s(detail.unitPurchase))])]), _vm._v(" "), _c("td", [_c("div", {
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
    }, [_vm._v("+")])])], 1)], 1)]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.formatNumber(detail.DiscountNet * detail.quantity, _vm.priceDecimals)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.formatNumber(detail.taxe * detail.quantity, _vm.priceDecimals)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.currentUser.currency) + " " + _vm._s(detail.subtotal.toFixed(_vm.priceDecimals)))]), _vm._v(" "), _c("td", [_c("lucide-icon", {
      staticClass: "text-25 text-success cursor-pointer",
      attrs: {
        name: "pencil"
      },
      on: {
        click: function click($event) {
          return _vm.Modal_Updat_Detail(detail);
        }
      }
    }), _vm._v(" "), _c("lucide-icon", {
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
      key: "b-" + detail.detail_id,
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
        overflow: "visible",
        background: "#f8faff"
      }
    }, [_c("div", {
      staticStyle: {
        display: "flex",
        "align-items": "center",
        "justify-content": "space-between",
        padding: "8px 14px",
        background: "#4f46e5",
        color: "#fff",
        "font-size": "12px",
        "font-weight": "700",
        "text-transform": "uppercase",
        "letter-spacing": "0.3px",
        "border-radius": "10px 10px 0 0"
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
    }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Batches")))]), _vm._v(" "), _c("span", {
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
    }, [_vm._v("\n                                    · " + _vm._s(_vm.$t("Total") || "Total") + ": " + _vm._s(_vm.formatNumber(_vm.batch_total_qty(detail), 2)) + " / " + _vm._s(_vm.formatNumber(Number(detail.quantity) || 0, 2)) + "\n                                  ")]) : _vm._e()])], 1), _vm._v(" "), _c("button", {
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
    }), _vm._v("\n                              " + _vm._s(_vm.$t("No_Batches_Available") || "No available batches for this product in the source warehouse") + "\n                            ")], 1) : !detail.batches || detail.batches.length === 0 ? _c("div", {
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
    }), _vm._v("\n                              " + _vm._s(_vm.$t("Click_Add_To_Pick_Batch") || 'Click "Add" to pick a batch (or leave empty to auto-allocate FEFO)') + "\n                            ")], 1) : _c("table", {
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
        key: "tb-" + detail.detail_id + "-" + bIdx,
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
          options: (detail.available_batches || []).map(function (ab) {
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
    }), 0)]), _vm._v(" "), detail.batches && detail.batches.length && _vm.batch_qty_mismatch(detail) ? _c("div", {
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
    }), _vm._v("\n                              " + _vm._s(_vm.$t("Total_batch_qty_mismatch") || "Total batch quantity does not match the line quantity") + "\n                              (" + _vm._s(_vm.formatNumber(_vm.batch_total_qty(detail), 2)) + " / " + _vm._s(_vm.formatNumber(Number(detail.quantity) || 0, 2)) + ")\n                            ")], 1) : _vm._e()])])]) : _vm._e()];
  })], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "offset-md-9 col-md-3 mt-4"
  }, [_c("table", {
    staticClass: "table table-striped table-sm"
  }, [_c("tbody", [_c("tr", [_c("td", {
    staticClass: "bold"
  }, [_vm._v(_vm._s(_vm.$t("OrderTax")))]), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.transfer.TaxNet.toFixed(_vm.priceDecimals)) + " (" + _vm._s(_vm.formatNumber(_vm.transfer.tax_rate, 2)) + " %)")])])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "bold"
  }, [_vm._v(_vm._s(_vm.$t("Discount")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.transfer.discount.toFixed(_vm.priceDecimals)))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "bold"
  }, [_vm._v(_vm._s(_vm.$t("Shipping")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.transfer.shipping.toFixed(_vm.priceDecimals)))])]), _vm._v(" "), _c("tr", [_c("td", [_c("span", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t("Total")))])]), _vm._v(" "), _c("td", [_c("span", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.GrandTotal.toFixed(_vm.priceDecimals)))])])])])])]), _vm._v(" "), _c("b-col", {
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
            value: _vm.transfer.tax_rate,
            callback: function callback($$v) {
              _vm.$set(_vm.transfer, "tax_rate", _vm._n($$v));
            },
            expression: "transfer.tax_rate"
          }
        })], 1), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "OrderTax-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 907389170)
  })], 1), _vm._v(" "), _c("b-col", {
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
        }, [_c("b-input-group", {
          attrs: {
            append: _vm.currentUser.currency
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
            value: _vm.transfer.discount,
            callback: function callback($$v) {
              _vm.$set(_vm.transfer, "discount", _vm._n($$v));
            },
            expression: "transfer.discount"
          }
        })], 1), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "Discount-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 3103063445)
  })], 1), _vm._v(" "), _c("b-col", {
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
            value: _vm.transfer.shipping,
            callback: function callback($$v) {
              _vm.$set(_vm.transfer, "shipping", _vm._n($$v));
            },
            expression: "transfer.shipping"
          }
        })], 1), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "Shipping-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 1389454933)
  })], 1), _vm._v(" "), _c("b-col", {
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
      fn: function fn(_ref3) {
        var valid = _ref3.valid,
          errors = _ref3.errors;
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
              label: "Completed",
              value: "completed"
            }, {
              label: "Sent",
              value: "sent"
            }, {
              label: "Pending",
              value: "pending"
            }]
          },
          model: {
            value: _vm.transfer.statut,
            callback: function callback($$v) {
              _vm.$set(_vm.transfer, "statut", $$v);
            },
            expression: "transfer.statut"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(errors[0]))])], 1);
      }
    }], null, false, 524404404)
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
      value: _vm.transfer.notes,
      expression: "transfer.notes"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "4",
      placeholder: _vm.$t("Afewwords")
    },
    domProps: {
      value: _vm.transfer.notes
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.transfer, "notes", $event.target.value);
      }
    }
  })])], 1), _vm._v(" "), _vm.hasBatchValidationErrors ? _c("b-col", {
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
      disabled: _vm.SubmitProcessing || _vm.hasBatchValidationErrors
    },
    on: {
      click: _vm.Submit_Transfer
    }
  }, [_c("lucide-icon", {
    staticClass: "me-2 font-weight-bold",
    attrs: {
      name: "check"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("submit")))], 1), _vm._v(" "), _vm.SubmitProcessing ? _vm._m(0) : _vm._e()], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _c("validation-observer", {
    ref: "Update_Detail_transfer"
  }, [_c("b-modal", {
    attrs: {
      "hide-footer": "",
      size: "md",
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
      lg: "12",
      md: "12",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Product Cost",
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
            label: _vm.$t("ProductCost") + " " + "*",
            id: "cost-input"
          }
        }, [_c("b-form-input", {
          attrs: {
            label: "Product Cost",
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "cost-feedback"
          },
          model: {
            value: _vm.detail.Unit_cost,
            callback: function callback($$v) {
              _vm.$set(_vm.detail, "Unit_cost", _vm._n($$v));
            },
            expression: "detail.Unit_cost"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "cost-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "12",
      md: "12",
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
      fn: function fn(_ref4) {
        var valid = _ref4.valid,
          errors = _ref4.errors;
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
      lg: "12",
      md: "12",
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
      lg: "12",
      md: "12",
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
      fn: function fn(_ref5) {
        var valid = _ref5.valid,
          errors = _ref5.errors;
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
      lg: "12",
      md: "12",
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
      lg: "12",
      md: "12",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Unit Purchase",
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
            label: _vm.$t("UnitPurchase") + " " + "*"
          }
        }, [_c("v-select", {
          "class": {
            "is-invalid": !!errors.length
          },
          attrs: {
            state: errors[0] ? false : valid ? true : null,
            placeholder: _vm.$t("Choose_Unit_Purchase"),
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
            value: _vm.detail.purchase_unit_id,
            callback: function callback($$v) {
              _vm.$set(_vm.detail, "purchase_unit_id", $$v);
            },
            expression: "detail.purchase_unit_id"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(errors[0]))])], 1);
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", [_c("b-button", {
    attrs: {
      variant: "primary",
      type: "submit"
    }
  }, [_vm._v(_vm._s(_vm.$t("submit")))])], 1)], 1)], 1)], 1)], 1)], 1)], 1);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/transfers/create_transfer.vue?vue&type=style&index=0&id=4f06e01a&lang=css"
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/transfers/create_transfer.vue?vue&type=style&index=0&id=4f06e01a&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.input-with-icon {\n  display: flex;\n  align-items: center;\n}\n.scan-icon {\n  width: 50px; /* Adjust size as needed */\n  height: 50px;\n  margin-right: 8px; /* Adjust spacing as needed */\n  cursor: pointer;\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/transfers/create_transfer.vue?vue&type=style&index=0&id=4f06e01a&lang=css"
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/transfers/create_transfer.vue?vue&type=style&index=0&id=4f06e01a&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_transfer_vue_vue_type_style_index_0_id_4f06e01a_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create_transfer.vue?vue&type=style&index=0&id=4f06e01a&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/transfers/create_transfer.vue?vue&type=style&index=0&id=4f06e01a&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_transfer_vue_vue_type_style_index_0_id_4f06e01a_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_transfer_vue_vue_type_style_index_0_id_4f06e01a_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/views/app/pages/transfers/create_transfer.vue"
/*!*********************************************************************!*\
  !*** ./resources/src/views/app/pages/transfers/create_transfer.vue ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_transfer_vue_vue_type_template_id_4f06e01a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_transfer.vue?vue&type=template&id=4f06e01a */ "./resources/src/views/app/pages/transfers/create_transfer.vue?vue&type=template&id=4f06e01a");
/* harmony import */ var _create_transfer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create_transfer.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/transfers/create_transfer.vue?vue&type=script&lang=js");
/* harmony import */ var _create_transfer_vue_vue_type_style_index_0_id_4f06e01a_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create_transfer.vue?vue&type=style&index=0&id=4f06e01a&lang=css */ "./resources/src/views/app/pages/transfers/create_transfer.vue?vue&type=style&index=0&id=4f06e01a&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_transfer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_transfer_vue_vue_type_template_id_4f06e01a__WEBPACK_IMPORTED_MODULE_0__.render,
  _create_transfer_vue_vue_type_template_id_4f06e01a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/transfers/create_transfer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/transfers/create_transfer.vue?vue&type=script&lang=js"
/*!*********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/transfers/create_transfer.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_transfer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create_transfer.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/transfers/create_transfer.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_transfer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/transfers/create_transfer.vue?vue&type=template&id=4f06e01a"
/*!***************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/transfers/create_transfer.vue?vue&type=template&id=4f06e01a ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_transfer_vue_vue_type_template_id_4f06e01a__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_transfer_vue_vue_type_template_id_4f06e01a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_transfer_vue_vue_type_template_id_4f06e01a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create_transfer.vue?vue&type=template&id=4f06e01a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/transfers/create_transfer.vue?vue&type=template&id=4f06e01a");


/***/ },

/***/ "./resources/src/views/app/pages/transfers/create_transfer.vue?vue&type=style&index=0&id=4f06e01a&lang=css"
/*!*****************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/transfers/create_transfer.vue?vue&type=style&index=0&id=4f06e01a&lang=css ***!
  \*****************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_transfer_vue_vue_type_style_index_0_id_4f06e01a_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create_transfer.vue?vue&type=style&index=0&id=4f06e01a&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/transfers/create_transfer.vue?vue&type=style&index=0&id=4f06e01a&lang=css");


/***/ }

}]);