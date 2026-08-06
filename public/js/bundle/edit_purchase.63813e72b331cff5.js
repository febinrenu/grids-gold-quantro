"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["edit_purchase"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchases/edit_purchase.vue?vue&type=script&lang=js"
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchases/edit_purchase.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
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
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Edit Purchase"
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
      // ——— Inline styles for batches section ———
      batchThStyle: {
        padding: '8px 10px',
        background: '#f1f5f9',
        borderBottom: '1px solid #e2e8f0',
        fontSize: '10px',
        fontWeight: '700',
        color: '#475569',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        textAlign: 'left'
      },
      batchTdStyle: {
        padding: '6px 10px',
        borderBottom: '1px solid #f1f5f9',
        verticalAlign: 'middle'
      },
      batchInputStyle: {
        height: '30px',
        fontSize: '12px',
        padding: '4px 8px'
      },
      warehouses: [],
      suppliers: [],
      products: [],
      details: [],
      detail: {},
      purchases: [],
      purchase: {
        id: "",
        statut: "",
        date: "",
        notes: "",
        supplier_id: "",
        warehouse_id: "",
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
        no_unit: "",
        unitPurchase: "",
        purchase_unit_id: "",
        Net_cost: "",
        Total_cost: "",
        Unit_cost: "",
        subtotal: "",
        product_id: "",
        detail_id: "",
        taxe: "",
        tax_percent: "",
        tax_method: "",
        product_variant_id: "",
        del: "",
        is_imei: "",
        imei_number: ""
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
    // Only validate lines that are visible & not marked for deletion
    activeBatchTrackedDetails: function activeBatchTrackedDetails() {
      if (!Array.isArray(this.details)) return [];
      return this.details.filter(function (d) {
        return d && d.is_batch_tracked && d.no_unit !== 0 && d.del !== 1;
      });
    },
    // True if any batch-tracked line has missing batches or a qty mismatch
    hasBatchValidationErrors: function hasBatchValidationErrors() {
      var _this = this;
      return this.activeBatchTrackedDetails.some(function (d) {
        if (!Array.isArray(d.batches) || d.batches.length === 0) return true;
        return _this.batchQtyMismatch(d);
      });
    },
    // First detail that failed batch validation — used for the banner
    firstBatchErrorDetail: function firstBatchErrorDetail() {
      var _this2 = this;
      return this.activeBatchTrackedDetails.find(function (d) {
        if (!Array.isArray(d.batches) || d.batches.length === 0) return true;
        return _this2.batchQtyMismatch(d);
      }) || null;
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
    //--- Submit Validate Update Purchase
    Submit_Purchase: function Submit_Purchase() {
      var _this3 = this;
      // Block submission when any active batch-tracked line has missing
      // batches or batch quantities that don't sum to the line quantity.
      if (this.hasBatchValidationErrors) {
        var d = this.firstBatchErrorDetail;
        var missing = d && (!Array.isArray(d.batches) || d.batches.length === 0);
        var msg = missing ? "".concat(this.$t('Batch_Required_For_Item') || 'Add at least one batch for', ": ").concat(d ? d.name : '') : this.$t('Batch_Qty_Mismatch');
        this.makeToast("danger", msg, this.$t("Failed"));
        return;
      }
      // Block when a serialized line's serial count != quantity (received only).
      if (this.purchase.statut === 'received') {
        var badSerial = this.details.find(function (d) {
          return _this3.serialCountMismatch(d);
        });
        if (badSerial) {
          this.makeToast("danger", "".concat(this.$t('Serials_Count_Mismatch'), " (").concat(badSerial.name, ")"), this.$t("Failed"));
          return;
        }
      }
      this.$refs.edit_purchase.validate().then(function (success) {
        if (!success) {
          _this3.makeToast("danger", _this3.$t("Please_fill_the_form_correctly"), _this3.$t("Failed"));
        } else {
          _this3.Update_Purchase();
        }
      });
    },
    //---Submit Validation Update Detail
    submit_Update_Detail: function submit_Update_Detail() {
      var _this4 = this;
      this.$refs.Update_Detail_purchase.validate().then(function (success) {
        if (!success) {
          return;
        } else {
          _this4.Update_Detail();
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
    //------  Show Modal Update Detail Product
    Modal_Updat_Detail: function Modal_Updat_Detail(detail) {
      var _this5 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      this.detail = {};
      this.detail.name = detail.name;
      this.detail.detail_id = detail.detail_id;
      this.detail.Unit_cost = detail.Unit_cost;
      this.detail.tax_method = detail.tax_method;
      this.detail.discount_Method = detail.discount_Method;
      this.detail.discount = detail.discount;
      this.detail.quantity = detail.quantity;
      this.detail.tax_percent = detail.tax_percent;
      this.detail.is_imei = detail.is_imei;
      this.detail.imei_number = detail.imei_number;
      setTimeout(function () {
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        _this5.$bvModal.show("form_Update_Detail");
      }, 1000);
    },
    //------ Submit Detail Product
    Update_Detail: function Update_Detail() {
      var _this6 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      this.Submit_Processing_detail = true;
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id === this.detail.detail_id) {
          this.details[i].tax_percent = this.detail.tax_percent;
          this.details[i].Unit_cost = this.detail.Unit_cost;
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
            this.details[i].DiscountNet = parseFloat(this.detail.Unit_cost * this.details[i].discount / 100);
          }
          if (this.details[i].tax_method == "1") {
            //Exclusive
            this.details[i].Net_cost = parseFloat(this.detail.Unit_cost - this.details[i].DiscountNet);
            this.details[i].taxe = parseFloat(this.detail.tax_percent * (this.detail.Unit_cost - this.details[i].DiscountNet) / 100);
          } else {
            //Inclusive
            this.details[i].taxe = parseFloat((this.detail.Unit_cost - this.details[i].DiscountNet) * (this.detail.tax_percent / 100));
            this.details[i].Net_cost = parseFloat(this.detail.Unit_cost - this.details[i].taxe - this.details[i].DiscountNet);
          }
          this.$forceUpdate();
        }
      }
      this.Calcul_Total();
      setTimeout(function () {
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        _this6.Submit_Processing_detail = false;
        _this6.$bvModal.hide("form_Update_Detail");
      }, 1000);
    },
    // Search Products
    search: function search() {
      var _this7 = this;
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      if (this.search_input.length < 2) {
        return this.product_filter = [];
      }
      if (this.purchase.warehouse_id != "" && this.purchase.warehouse_id != null) {
        this.timer = setTimeout(function () {
          var product_filter = _this7.products.filter(function (product) {
            return product.code === _this7.search_input || product.barcode.includes(_this7.search_input);
          });
          if (product_filter.length === 1) {
            _this7.SearchProduct(product_filter[0]);
          } else {
            _this7.product_filter = _this7.products.filter(function (product) {
              return product.name.toLowerCase().includes(_this7.search_input.toLowerCase()) || product.code.toLowerCase().includes(_this7.search_input.toLowerCase()) || product.barcode.toLowerCase().includes(_this7.search_input.toLowerCase());
            });

            // Check if product_filter is empty and show alert
            if (_this7.product_filter.length <= 0) {
              _this7.makeToast("warning", "Product Not Found", "Warning");
            }
          }
        }, 800);
      } else {
        this.makeToast("warning", this.$t("SelectWarehouse"), this.$t("Warning"));
      }
    },
    //------  get Result Value Search Products
    getResultValue: function getResultValue(result) {
      return result.code + " " + "(" + result.name + ")";
    },
    //------  Submit Search Products
    SearchProduct: function SearchProduct(result) {
      this.product = {};
      if (this.details.length > 0 && this.details.some(function (detail) {
        return detail.code === result.code;
      })) {
        this.makeToast("warning", this.$t("AlreadyAdd"), this.$t("Warning"));
      } else {
        this.product.code = result.code;
        this.product.quantity = 1;
        this.product.no_unit = 1;
        this.product.stock = result.qte_purchase;
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
    },
    //------------------------------------ Get Products By Warehouse -------------------------\\
    Get_Products_By_Warehouse: function Get_Products_By_Warehouse(id) {
      var _this8 = this;
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      axios.get("get_Products_by_warehouse/" + id + "?stock=" + 0 + "&product_service=" + 0).then(function (response) {
        _this8.products = response.data;
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
      })["catch"](function (error) {});
    },
    //----------------------------------------- Add Product -------------------------\\
    add_product: function add_product() {
      if (this.details.length > 0) {
        this.Last_Detail_id();
      } else if (this.details.length === 0) {
        this.product.detail_id = 1;
      }
      this.details.push(this.product);
    },
    //----------------------------------------- Batch helpers (pharmacy) ------------\\
    add_batch: function add_batch(detail) {
      if (!detail.batches) this.$set(detail, 'batches', []);
      detail.batches.push({
        batch_no: '',
        expiry_date: '',
        mfg_date: '',
        qty: detail.batches.length === 0 ? Number(detail.quantity) || 0 : 0,
        unit_cost: Number(detail.Unit_cost) || 0
      });
    },
    // Locale-proof decimal input: allow digits + one separator, accept both "." and ","
    onBatchNumberInput: function onBatchNumberInput(batchRow, field, raw) {
      var s = (raw == null ? '' : String(raw)).replace(',', '.');
      s = s.replace(/[^0-9.]/g, '');
      var firstDot = s.indexOf('.');
      if (firstDot !== -1) {
        s = s.slice(0, firstDot + 1) + s.slice(firstDot + 1).replace(/\./g, '');
      }
      this.$set(batchRow, field, s);
    },
    remove_batch: function remove_batch(detail, idx) {
      if (!detail.batches) return;
      detail.batches.splice(idx, 1);
    },
    batchTotalQty: function batchTotalQty(detail) {
      if (!detail || !Array.isArray(detail.batches)) return 0;
      return detail.batches.reduce(function (s, b) {
        return s + (Number(b.qty) || 0);
      }, 0);
    },
    batchQtyMismatch: function batchQtyMismatch(detail) {
      if (!detail || !detail.is_batch_tracked) return false;
      if (!Array.isArray(detail.batches) || detail.batches.length === 0) return false;
      return Math.abs(this.batchTotalQty(detail) - (Number(detail.quantity) || 0)) > 0.0001;
    },
    //----------------------------------------- Serial helpers ---------------------\\
    serialCountMismatch: function serialCountMismatch(detail) {
      if (!detail || !detail.is_imei) return false;
      var count = Array.isArray(detail.serial_numbers) ? detail.serial_numbers.length : 0;
      return count !== Math.round(Number(detail.quantity) || 0);
    },
    //-----------------------------------Verified QTY ------------------------------\\
    Verified_Qty: function Verified_Qty(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id == id) {
          if (isNaN(detail.quantity)) {
            this.details[i].quantity = 1;
          }
          this.Calcul_Total();
          this.$forceUpdate();
        }
      }
    },
    //-----------------------------------increment QTY ------------------------------\\
    increment: function increment(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id == id) {
          this.formatNumber(this.details[i].quantity++, 2);
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
            this.formatNumber(this.details[i].quantity--, 2);
          }
        }
      }
      this.$forceUpdate();
      this.Calcul_Total();
    },
    //---------- keyup OrderTax
    keyup_OrderTax: function keyup_OrderTax() {
      if (isNaN(this.purchase.tax_rate)) {
        this.purchase.tax_rate = 0;
      } else if (this.purchase.tax_rate == '') {
        this.purchase.tax_rate = 0;
        this.Calcul_Total();
      } else {
        this.Calcul_Total();
      }
    },
    //---------- keyup Discount
    keyup_Discount: function keyup_Discount() {
      if (isNaN(this.purchase.discount)) {
        this.purchase.discount = 0;
      } else if (this.purchase.discount == '') {
        this.purchase.discount = 0;
        this.Calcul_Total();
      } else {
        this.Calcul_Total();
      }
    },
    //---------- keyup Shipping
    keyup_Shipping: function keyup_Shipping() {
      if (isNaN(this.purchase.shipping)) {
        this.purchase.shipping = 0;
      } else if (this.purchase.shipping == '') {
        this.purchase.shipping = 0;
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
        this.details[i].subtotal = parseFloat(this.details[i].quantity * this.details[i].Net_cost + tax);
        this.total = parseFloat(this.total + this.details[i].subtotal);
      }
      var total_without_discount = parseFloat(this.total - this.purchase.discount);
      this.purchase.TaxNet = parseFloat(total_without_discount * this.purchase.tax_rate / 100);
      this.GrandTotal = parseFloat(total_without_discount + this.purchase.TaxNet + this.purchase.shipping);
      var grand_total = this.GrandTotal.toFixed(this.priceDecimals);
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
    //-----------------------------------Verified Detail Qty If Null ------------------------------\\
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
    //--------------------------------- Update Purchase -------------------------\\
    Update_Purchase: function Update_Purchase() {
      var _this9 = this;
      if (this.verifiedForm()) {
        this.SubmitProcessing = true;
        // Start the progress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
        var id = this.$route.params.id;
        axios.put("purchases/".concat(id), {
          date: this.purchase.date,
          supplier_id: this.purchase.supplier_id,
          warehouse_id: this.purchase.warehouse_id,
          statut: this.purchase.statut,
          notes: this.purchase.notes,
          tax_rate: this.purchase.tax_rate ? this.purchase.tax_rate : 0,
          TaxNet: this.purchase.TaxNet ? this.purchase.TaxNet : 0,
          discount: this.purchase.discount ? this.purchase.discount : 0,
          shipping: this.purchase.shipping ? this.purchase.shipping : 0,
          GrandTotal: this.GrandTotal,
          details: this.details
        }).then(function (response) {
          // Complete the animation of theprogress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
          _this9.makeToast("success", _this9.$t("Successfully_Updated"), _this9.$t("Success"));
          _this9.SubmitProcessing = false;
          _this9.$router.push({
            name: "index_purchases"
          });
        })["catch"](function (error) {
          // Complete the animation of theprogress bar.
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
    //---------------------------------get Product Details ------------------------\\
    Get_Product_Details: function Get_Product_Details(product_id, variant_id) {
      var _this0 = this;
      var wid = this.purchase && this.purchase.warehouse_id ? this.purchase.warehouse_id : null;
      var url = wid ? "/show_product_data/".concat(product_id, "/").concat(variant_id, "/").concat(wid) : "/show_product_data/".concat(product_id, "/").concat(variant_id);
      axios.get(url).then(function (response) {
        _this0.product.del = 0;
        _this0.product.id = 0;
        _this0.product.discount = response.data.discount;
        _this0.product.DiscountNet = response.data.DiscountNet;
        _this0.product.discount_Method = response.data.discount_method;
        _this0.product.product_id = response.data.id;
        _this0.product.name = response.data.name;
        _this0.product.Net_cost = response.data.Net_cost;
        _this0.product.Unit_cost = response.data.Unit_cost;
        _this0.product.taxe = response.data.tax_cost;
        _this0.product.tax_method = response.data.tax_method;
        _this0.product.tax_percent = response.data.tax_percent;
        _this0.product.unitPurchase = response.data.unitPurchase;
        _this0.product.purchase_unit_id = response.data.purchase_unit_id;
        _this0.product.is_imei = response.data.is_imei;
        _this0.product.imei_number = '';
        _this0.$set(_this0.product, 'serial_numbers', []);
        _this0.product.is_batch_tracked = !!response.data.is_batch_tracked;
        _this0.$set(_this0.product, 'batches', []);
        _this0.product.warehouse_location = response.data.warehouse_location ? response.data.warehouse_location.name ? "".concat(response.data.warehouse_location.code, " - ").concat(response.data.warehouse_location.name) : response.data.warehouse_location.code : null;
        _this0.add_product();
        _this0.Calcul_Total();
      });
    },
    //---------------------------------------Get Elements Purchase ------------------------------\\
    GetElements: function GetElements() {
      var _this1 = this;
      var id = this.$route.params.id;
      axios.get("purchases/".concat(id, "/edit")).then(function (response) {
        _this1.purchase = response.data.purchase;
        // Prefill serials from the legacy imei_number text so the entry field shows them.
        _this1.details = (response.data.details || []).map(function (d) {
          if (!Array.isArray(d.serial_numbers)) {
            d.serial_numbers = d.is_imei && d.imei_number ? String(d.imei_number).split(/[\r\n,;\t]+/).map(function (s) {
              return s.trim();
            }).filter(function (s) {
              return s !== "";
            }) : [];
          }
          return d;
        });
        _this1.suppliers = response.data.suppliers;
        _this1.warehouses = response.data.warehouses;
        _this1.Get_Products_By_Warehouse(_this1.purchase.warehouse_id);
        _this1.Calcul_Total();
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
    this.GetElements();
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchases/edit_purchase.vue?vue&type=template&id=3d16a80c"
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchases/edit_purchase.vue?vue&type=template&id=3d16a80c ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
      page: _vm.$t("EditPurchase"),
      folder: _vm.$t("ListPurchases")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("validation-observer", {
    ref: "edit_purchase"
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Submit_Purchase.apply(null, arguments);
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
            value: _vm.purchase.date,
            callback: function callback($$v) {
              _vm.$set(_vm.purchase, "date", $$v);
            },
            expression: "purchase.date"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "OrderTax-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 485926546)
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
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
            label: _vm.$t("Supplier") + " " + "*"
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
            options: _vm.suppliers.map(function (suppliers) {
              return {
                label: suppliers.name,
                value: suppliers.id
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
    }], null, false, 700424982)
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
            value: _vm.purchase.warehouse_id,
            callback: function callback($$v) {
              _vm.$set(_vm.purchase, "warehouse_id", $$v);
            },
            expression: "purchase.warehouse_id"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(errors[0]))])], 1);
      }
    }], null, false, 923239089)
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
      key: "detail-" + detail.detail_id,
      "class": {
        row_deleted: detail.del === 1 || detail.no_unit === 0
      }
    }, [_c("td", [_vm._v(_vm._s(detail.detail_id))]), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s(detail.code))]), _vm._v(" "), _c("br"), _vm._v(" "), _c("span", {
      staticClass: "badge badge-success"
    }, [_vm._v(_vm._s(detail.name))]), _vm._v(" "), detail.warehouse_location ? _c("div", {
      staticClass: "text-muted mt-1",
      staticStyle: {
        "font-size": "12px"
      }
    }, [_vm._v("\n                            " + _vm._s(_vm.$t("Warehouse_Locations")) + ": "), _c("strong", [_vm._v(_vm._s(detail.warehouse_location))])]) : _vm._e(), _vm._v(" "), detail.is_batch_tracked ? _c("div", {
      staticClass: "text-info mt-1",
      staticStyle: {
        "font-size": "12px"
      }
    }, [_c("i", {
      staticClass: "fa fa-flask"
    }), _vm._v(" " + _vm._s(_vm.$t("Track_Batches_Expiry")) + "\n                          ")]) : _vm._e()]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.formatNumber(detail.Net_cost, _vm.priceDecimals)))]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "badge badge-outline-warning"
    }, [_vm._v(_vm._s(detail.stock) + " " + _vm._s(detail.unitPurchase))])]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "quantity"
    }, [_c("b-input-group", [_c("b-input-group-prepend", [_c("span", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: detail.no_unit !== 0,
        expression: "detail.no_unit !== 0"
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
        disabled: detail.del === 1 || detail.no_unit === 0
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
        value: detail.no_unit !== 0,
        expression: "detail.no_unit !== 0"
      }],
      staticClass: "btn btn-primary btn-sm",
      on: {
        click: function click($event) {
          return _vm.increment(detail, detail.detail_id);
        }
      }
    }, [_vm._v("+")])])], 1)], 1)]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.formatNumber(detail.DiscountNet * detail.quantity, 2)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.formatNumber(detail.taxe * detail.quantity, 2)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.currentUser.currency) + " " + _vm._s(detail.subtotal.toFixed(_vm.priceDecimals)))]), _vm._v(" "), _c("td", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: detail.no_unit !== 0,
        expression: "detail.no_unit !== 0"
      }]
    }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("edit_product_purchase") ? _c("lucide-icon", {
      staticClass: "text-25 text-success",
      attrs: {
        name: "pencil"
      },
      on: {
        click: function click($event) {
          return _vm.Modal_Updat_Detail(detail);
        }
      }
    }) : _vm._e(), _vm._v(" "), _c("lucide-icon", {
      staticClass: "text-25 text-danger",
      attrs: {
        name: "x"
      },
      on: {
        click: function click($event) {
          return _vm.delete_Product_Detail(detail.detail_id);
        }
      }
    })], 1)]), _vm._v(" "), detail.is_batch_tracked && detail.no_unit !== 0 && detail.del !== 1 ? _c("tr", {
      key: "batches-" + detail.detail_id,
      style: {
        background: "transparent"
      }
    }, [_c("td", {
      style: {
        padding: "0 8px 16px 8px",
        border: "none"
      },
      attrs: {
        colspan: "9"
      }
    }, [_c("div", {
      style: {
        background: "linear-gradient(135deg, #f0f9ff 0%, #eef2ff 100%)",
        border: "1px solid #e0e7ff",
        borderLeft: "4px solid #6366f1",
        borderRadius: "10px",
        padding: "14px 18px",
        boxShadow: "0 1px 3px rgba(15,23,42,0.04)"
      }
    }, [_c("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "12px",
        flexWrap: "wrap",
        gap: "8px"
      }
    }, [_c("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        flexWrap: "wrap"
      }
    }, [_c("div", {
      style: {
        width: "32px",
        height: "32px",
        borderRadius: "8px",
        background: "#6366f1",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 6px rgba(99,102,241,0.35)"
      }
    }, [_c("lucide-icon", {
      style: {
        fontSize: "16px"
      },
      attrs: {
        name: "receipt-text"
      }
    })], 1), _vm._v(" "), _c("div", [_c("div", {
      style: {
        fontSize: "14px",
        fontWeight: "700",
        color: "#1e293b",
        lineHeight: "1.1"
      }
    }, [_vm._v("\n                                    " + _vm._s(_vm.$t("Batches")) + "\n                                  ")]), _vm._v(" "), _c("div", {
      style: {
        fontSize: "11px",
        color: "#64748b",
        marginTop: "2px"
      }
    }, [_vm._v("\n                                    " + _vm._s((detail.batches || []).length) + " " + _vm._s(_vm.$t("items") || "items") + "\n                                    "), (detail.batches || []).length ? _c("span", {
      style: {
        marginLeft: "6px"
      }
    }, [_vm._v("\n                                      · " + _vm._s(_vm.$t("Total")) + ": "), _c("strong", {
      style: {
        color: "#0f172a"
      }
    }, [_vm._v(_vm._s(_vm.formatNumber(_vm.batchTotalQty(detail), 2)))]), _vm._v("\n                                      / " + _vm._s(_vm.formatNumber(detail.quantity || 0, 2)) + "\n                                    ")]) : _vm._e()])])]), _vm._v(" "), _c("button", {
      style: {
        background: "#6366f1",
        color: "#fff",
        border: "none",
        padding: "7px 14px",
        borderRadius: "8px",
        fontSize: "12px",
        fontWeight: "600",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        boxShadow: "0 2px 6px rgba(99,102,241,0.25)",
        transition: "all 0.2s"
      },
      attrs: {
        type: "button",
        onmouseover: "this.style.background='#4f46e5'; this.style.transform='translateY(-1px)'",
        onmouseout: "this.style.background='#6366f1'; this.style.transform='translateY(0)'"
      },
      on: {
        click: function click($event) {
          return _vm.add_batch(detail);
        }
      }
    }, [_c("lucide-icon", {
      attrs: {
        name: "plus"
      }
    }), _vm._v(" " + _vm._s(_vm.$t("Add")) + "\n                              ")], 1)]), _vm._v(" "), (detail.batches || []).length ? _c("div", {
      style: {
        background: "#ffffff",
        borderRadius: "8px",
        overflow: "hidden",
        border: "1px solid #e2e8f0"
      }
    }, [_c("table", {
      style: {
        width: "100%",
        marginBottom: "0",
        borderCollapse: "separate",
        borderSpacing: "0",
        fontSize: "12px"
      }
    }, [_c("thead", [_c("tr", [_c("th", {
      style: _vm.batchThStyle
    }, [_vm._v(_vm._s(_vm.$t("Batch_No")))]), _vm._v(" "), _c("th", {
      style: _vm.batchThStyle
    }, [_vm._v(_vm._s(_vm.$t("Expiry_Date")))]), _vm._v(" "), _c("th", {
      style: _vm.batchThStyle
    }, [_vm._v(_vm._s(_vm.$t("Mfg_Date")))]), _vm._v(" "), _c("th", {
      style: _objectSpread(_objectSpread({}, _vm.batchThStyle), {}, {
        textAlign: "right"
      })
    }, [_vm._v(_vm._s(_vm.$t("quantity")))]), _vm._v(" "), _c("th", {
      style: _objectSpread(_objectSpread({}, _vm.batchThStyle), {}, {
        textAlign: "right"
      })
    }, [_vm._v(_vm._s(_vm.$t("cost")))]), _vm._v(" "), _c("th", {
      style: _objectSpread(_objectSpread({}, _vm.batchThStyle), {}, {
        width: "40px",
        textAlign: "center"
      })
    })])]), _vm._v(" "), _c("tbody", _vm._l(detail.batches, function (b, bIdx) {
      return _c("tr", {
        key: "b-" + detail.detail_id + "-" + bIdx,
        style: {
          background: bIdx % 2 === 0 ? "#ffffff" : "#fafbff"
        }
      }, [_c("td", {
        style: _vm.batchTdStyle
      }, [_c("b-form-input", {
        style: _vm.batchInputStyle,
        attrs: {
          size: "sm",
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
          value: b.expiry_date,
          callback: function callback($$v) {
            _vm.$set(b, "expiry_date", $$v);
          },
          expression: "b.expiry_date"
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
        style: _objectSpread(_objectSpread({}, _vm.batchInputStyle), {}, {
          textAlign: "right",
          fontWeight: "600"
        }),
        attrs: {
          size: "sm",
          type: "text",
          inputmode: "decimal",
          lang: "en",
          pattern: "[0-9]*[.,]?[0-9]*",
          value: b.qty
        },
        on: {
          input: function input(val) {
            return _vm.onBatchNumberInput(b, "qty", val);
          }
        }
      })], 1), _vm._v(" "), _c("td", {
        style: _vm.batchTdStyle
      }, [_c("b-form-input", {
        style: _objectSpread(_objectSpread({}, _vm.batchInputStyle), {}, {
          textAlign: "right"
        }),
        attrs: {
          size: "sm",
          type: "text",
          inputmode: "decimal",
          lang: "en",
          pattern: "[0-9]*[.,]?[0-9]*",
          value: b.unit_cost
        },
        on: {
          input: function input(val) {
            return _vm.onBatchNumberInput(b, "unit_cost", val);
          }
        }
      })], 1), _vm._v(" "), _c("td", {
        style: _objectSpread(_objectSpread({}, _vm.batchTdStyle), {}, {
          textAlign: "center"
        })
      }, [_c("button", {
        style: {
          width: "28px",
          height: "28px",
          borderRadius: "6px",
          border: "1px solid #fecaca",
          background: "#fef2f2",
          color: "#dc2626",
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.2s"
        },
        attrs: {
          type: "button",
          onmouseover: "this.style.background='#dc2626'; this.style.color='#fff'; this.style.borderColor='#dc2626'",
          onmouseout: "this.style.background='#fef2f2'; this.style.color='#dc2626'; this.style.borderColor='#fecaca'"
        },
        on: {
          click: function click($event) {
            return _vm.remove_batch(detail, bIdx);
          }
        }
      }, [_c("lucide-icon", {
        attrs: {
          name: "x"
        }
      })], 1)])]);
    }), 0)])]) : _c("div", {
      style: {
        background: "#ffffff",
        border: "1px dashed #cbd5e1",
        borderRadius: "8px",
        padding: "24px 16px",
        textAlign: "center",
        color: "#64748b"
      }
    }, [_c("div", {
      style: {
        fontSize: "24px",
        marginBottom: "6px",
        opacity: "0.5"
      }
    }, [_c("lucide-icon", {
      attrs: {
        name: "inbox"
      }
    })], 1), _vm._v(" "), _c("div", {
      style: {
        fontSize: "13px",
        fontWeight: "500"
      }
    }, [_vm._v("\n                                " + _vm._s(_vm.$t("NodataAvailable")) + "\n                              ")]), _vm._v(" "), _c("div", {
      style: {
        fontSize: "11px",
        marginTop: "4px",
        opacity: "0.8"
      }
    }, [_vm._v("\n                                " + _vm._s(_vm.$t("Click_Add_To_Start") || 'Click "Add" to create a batch') + "\n                              ")])]), _vm._v(" "), _vm.batchQtyMismatch(detail) ? _c("div", {
      style: {
        marginTop: "10px",
        background: "#fef2f2",
        border: "1px solid #fecaca",
        borderLeft: "3px solid #dc2626",
        color: "#991b1b",
        padding: "8px 12px",
        borderRadius: "6px",
        fontSize: "12px",
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }
    }, [_c("lucide-icon", {
      style: {
        color: "#dc2626",
        fontSize: "14px"
      },
      attrs: {
        name: "alert-triangle"
      }
    }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Batch_Qty_Mismatch")))])], 1) : _vm._e()])])]) : _vm._e(), _vm._v(" "), detail.is_imei ? _c("tr", {
      key: "serials-" + detail.detail_id,
      style: {
        background: "transparent"
      }
    }, [_c("td", {
      style: {
        padding: "0 8px 16px 8px",
        border: "none"
      },
      attrs: {
        colspan: "9"
      }
    }, [_c("div", {
      style: {
        background: "#f8fafc",
        border: "1px solid #e2e8f0",
        borderLeft: "4px solid #0ea5e9",
        borderRadius: "10px",
        padding: "14px 18px"
      }
    }, [_c("serial-numbers-field", {
      attrs: {
        mode: "entry",
        "required-count": detail.quantity
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
    staticClass: "offset-md-9 col-md-3 mt-4"
  }, [_c("table", {
    staticClass: "table table-striped table-sm"
  }, [_c("tbody", [_c("tr", [_c("td", {
    staticClass: "bold"
  }, [_vm._v(_vm._s(_vm.$t("OrderTax")))]), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.purchase.TaxNet.toFixed(_vm.priceDecimals)) + " (" + _vm._s(_vm.formatNumber(_vm.purchase.tax_rate, 2)) + " %)")])])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "bold"
  }, [_vm._v(_vm._s(_vm.$t("Discount")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.purchase.discount.toFixed(_vm.priceDecimals)))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "bold"
  }, [_vm._v(_vm._s(_vm.$t("Shipping")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.purchase.shipping.toFixed(_vm.priceDecimals)))])]), _vm._v(" "), _c("tr", [_c("td", [_c("span", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t("Total")))])]), _vm._v(" "), _c("td", [_c("span", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.GrandTotal.toFixed(_vm.priceDecimals)))])])])])])]), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("edit_tax_discount_shipping_purchase") ? _c("b-col", {
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
            value: _vm.purchase.tax_rate,
            callback: function callback($$v) {
              _vm.$set(_vm.purchase, "tax_rate", _vm._n($$v));
            },
            expression: "purchase.tax_rate"
          }
        })], 1), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "OrderTax-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 2647717874)
  })], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("edit_tax_discount_shipping_purchase") ? _c("b-col", {
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
            value: _vm.purchase.discount,
            callback: function callback($$v) {
              _vm.$set(_vm.purchase, "discount", _vm._n($$v));
            },
            expression: "purchase.discount"
          }
        })], 1), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "Discount-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 98387733)
  })], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("edit_tax_discount_shipping_purchase") ? _c("b-col", {
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
            value: _vm.purchase.shipping,
            callback: function callback($$v) {
              _vm.$set(_vm.purchase, "shipping", _vm._n($$v));
            },
            expression: "purchase.shipping"
          }
        })], 1), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "Shipping-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 497113045)
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
    }], null, false, 3503637598)
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
      value: _vm.purchase.notes,
      expression: "purchase.notes"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "4",
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
  })])], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", [_c("b-button", {
    attrs: {
      variant: "primary",
      disabled: _vm.SubmitProcessing || _vm.hasBatchValidationErrors,
      title: _vm.hasBatchValidationErrors ? _vm.$t("Batch_Qty_Mismatch") : ""
    },
    on: {
      click: _vm.Submit_Purchase
    }
  }, [_c("lucide-icon", {
    staticClass: "me-2 font-weight-bold",
    attrs: {
      name: "check"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("submit")))], 1), _vm._v(" "), _vm.hasBatchValidationErrors ? _c("div", {
    staticClass: "text-danger mt-2",
    staticStyle: {
      "font-size": "13px"
    }
  }, [_c("lucide-icon", {
    staticStyle: {
      "vertical-align": "middle",
      "margin-right": "4px"
    },
    attrs: {
      name: "alert-triangle"
    }
  }), _vm._v(" "), _vm.firstBatchErrorDetail && (!_vm.firstBatchErrorDetail.batches || _vm.firstBatchErrorDetail.batches.length === 0) ? [_vm._v("\n                      " + _vm._s(_vm.$t("Batch_Required_For_Item") || "Add at least one batch for") + ": "), _c("strong", [_vm._v(_vm._s(_vm.firstBatchErrorDetail.name))])] : [_vm._v("\n                      " + _vm._s(_vm.$t("Batch_Qty_Mismatch")) + "\n                    ")]], 2) : _vm._e(), _vm._v(" "), _vm.SubmitProcessing ? _vm._m(0) : _vm._e()], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _c("validation-observer", {
    ref: "Update_Detail_purchase"
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchases/edit_purchase.vue?vue&type=style&index=0&id=3d16a80c&lang=css"
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchases/edit_purchase.vue?vue&type=style&index=0&id=3d16a80c&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchases/edit_purchase.vue?vue&type=style&index=0&id=3d16a80c&lang=css"
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchases/edit_purchase.vue?vue&type=style&index=0&id=3d16a80c&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_purchase_vue_vue_type_style_index_0_id_3d16a80c_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit_purchase.vue?vue&type=style&index=0&id=3d16a80c&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchases/edit_purchase.vue?vue&type=style&index=0&id=3d16a80c&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_purchase_vue_vue_type_style_index_0_id_3d16a80c_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_purchase_vue_vue_type_style_index_0_id_3d16a80c_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/views/app/pages/purchases/edit_purchase.vue"
/*!*******************************************************************!*\
  !*** ./resources/src/views/app/pages/purchases/edit_purchase.vue ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_purchase_vue_vue_type_template_id_3d16a80c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit_purchase.vue?vue&type=template&id=3d16a80c */ "./resources/src/views/app/pages/purchases/edit_purchase.vue?vue&type=template&id=3d16a80c");
/* harmony import */ var _edit_purchase_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit_purchase.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/purchases/edit_purchase.vue?vue&type=script&lang=js");
/* harmony import */ var _edit_purchase_vue_vue_type_style_index_0_id_3d16a80c_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit_purchase.vue?vue&type=style&index=0&id=3d16a80c&lang=css */ "./resources/src/views/app/pages/purchases/edit_purchase.vue?vue&type=style&index=0&id=3d16a80c&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _edit_purchase_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_purchase_vue_vue_type_template_id_3d16a80c__WEBPACK_IMPORTED_MODULE_0__.render,
  _edit_purchase_vue_vue_type_template_id_3d16a80c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/purchases/edit_purchase.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/purchases/edit_purchase.vue?vue&type=script&lang=js"
/*!*******************************************************************************************!*\
  !*** ./resources/src/views/app/pages/purchases/edit_purchase.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_purchase_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit_purchase.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchases/edit_purchase.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_purchase_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/purchases/edit_purchase.vue?vue&type=template&id=3d16a80c"
/*!*************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/purchases/edit_purchase.vue?vue&type=template&id=3d16a80c ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_purchase_vue_vue_type_template_id_3d16a80c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_purchase_vue_vue_type_template_id_3d16a80c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_purchase_vue_vue_type_template_id_3d16a80c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit_purchase.vue?vue&type=template&id=3d16a80c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchases/edit_purchase.vue?vue&type=template&id=3d16a80c");


/***/ },

/***/ "./resources/src/views/app/pages/purchases/edit_purchase.vue?vue&type=style&index=0&id=3d16a80c&lang=css"
/*!***************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/purchases/edit_purchase.vue?vue&type=style&index=0&id=3d16a80c&lang=css ***!
  \***************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_purchase_vue_vue_type_style_index_0_id_3d16a80c_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit_purchase.vue?vue&type=style&index=0&id=3d16a80c&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchases/edit_purchase.vue?vue&type=style&index=0&id=3d16a80c&lang=css");


/***/ }

}]);