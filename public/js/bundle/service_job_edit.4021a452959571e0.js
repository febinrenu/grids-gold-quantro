"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["service_job_edit"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceJobForm.vue?vue&type=script&lang=js"
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceJobForm.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ServiceJobForm',
  data: function data() {
    return {
      isLoading: true,
      isEdit: false,
      SubmitProcessing: false,
      creatingQuotation: false,
      activeTab: 0,
      currencySymbol: '$',
      form: {
        client_id: null,
        technician_id: null,
        service_item: '',
        job_type: '',
        status: 'pending',
        scheduled_date: '',
        scheduled_end_date: '',
        notes: '',
        device_brand: '',
        device_model: '',
        device_serial: '',
        device_imei: '',
        device_color: '',
        device_password: '',
        accessories: [],
        condition_on_arrival: '',
        reported_issue: '',
        diagnosis: '',
        diagnostic_fee: 0,
        quote_amount: 0,
        quote_valid_until: '',
        warranty_days: 30,
        parent_job_id: null,
        items: []
      },
      jobMeta: null,
      totals: {
        total_amount: 0,
        paid_amount: 0,
        balance_due: 0
      },
      clients: [],
      technicians: [],
      warehouses: [],
      paymentMethods: [],
      checklistCategories: [],
      checklistItems: [],
      checklistState: {},
      selectedWarehouseId: null,
      warehouseProducts: [],
      productPick: null,
      photos: [],
      photoFiles: null,
      photoStage: 'intake',
      photoCaption: '',
      photoUploading: false,
      previewPhoto: null,
      payments: [],
      paymentModalShow: false,
      paymentModalTitle: '',
      paymentEditingId: null,
      paymentSaving: false,
      paymentForm: {
        date: new Date().toISOString().slice(0, 10),
        montant: 0,
        payment_kind: 'payment',
        payment_method_id: null,
        notes: ''
      },
      approveBy: '',
      statusOptions: [{
        value: 'pending',
        text: 'Pending'
      }, {
        value: 'intake',
        text: 'Intake'
      }, {
        value: 'diagnostic',
        text: 'Diagnostic'
      }, {
        value: 'quoted',
        text: 'Quoted'
      }, {
        value: 'approved',
        text: 'Approved'
      }, {
        value: 'in_progress',
        text: 'In Progress'
      }, {
        value: 'ready',
        text: 'Ready for Pickup'
      }, {
        value: 'delivered',
        text: 'Delivered'
      }, {
        value: 'declined',
        text: 'Declined'
      }, {
        value: 'cancelled',
        text: 'Cancelled'
      }, {
        value: 'completed',
        text: 'Completed'
      }],
      accessoryOptions: ['Charger', 'Cable', 'Case', 'SIM card', 'Memory card', 'Headphones', 'Box'],
      photoStageOptions: [{
        value: 'intake',
        text: 'Intake'
      }, {
        value: 'before',
        text: 'Before repair'
      }, {
        value: 'after',
        text: 'After repair'
      }, {
        value: 'delivery',
        text: 'Delivery'
      }],
      paymentKindOptions: [{
        value: 'deposit',
        text: 'Deposit'
      }, {
        value: 'payment',
        text: 'Payment'
      }, {
        value: 'refund',
        text: 'Refund'
      }]
    };
  },
  computed: {
    jobId: function jobId() {
      return this.$route.params.id ? Number(this.$route.params.id) : null;
    },
    itemsSubtotal: function itemsSubtotal() {
      return this.form.items.reduce(function (s, r) {
        return s + Number(r.total || 0);
      }, 0);
    },
    grandTotal: function grandTotal() {
      var fallback = Number(this.form.quote_amount) || 0;
      var items = this.itemsSubtotal;
      var base = items > 0 ? items : fallback;
      return base + (Number(this.form.diagnostic_fee) || 0);
    },
    canMarkDelivered: function canMarkDelivered() {
      // Allow delivery when:
      //  - balance is settled (paid in full or no charge), AND
      //  - the job exists and is not already delivered.
      // The previous "paid_amount > 0" guard wrongly hid the button for free / warranty repairs.
      if (!this.jobMeta || this.jobMeta.status === 'delivered') return false;
      return Number(this.totals.balance_due || 0) <= 0.0001;
    },
    paidPercent: function paidPercent() {
      var total = Number(this.totals.total_amount || 0);
      var paid = Number(this.totals.paid_amount || 0);
      if (total <= 0) return paid > 0 ? 100 : 0;
      return Math.min(100, Math.max(0, Math.round(paid / total * 100)));
    }
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return _this.bootstrap();
          case 1:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  watch: {
    // The same component is reused for /create and /edit/:id — when the route changes
    // (e.g. after creating a job we redirect to its edit URL), Vue won't fire mounted again.
    '$route': function $route(to, from) {
      if (to.path !== from.path || to.params.id !== from.params.id) {
        this.bootstrap();
      }
    }
  },
  methods: {
    bootstrap: function bootstrap() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get, catData;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _this2.isLoading = true;
              _this2.isEdit = !!_this2.jobId;
              // Reset form state for create mode (route changes from edit→create or to a different id)
              if (!_this2.isEdit) {
                _this2.form.items = [];
                _this2.payments = [];
                _this2.photos = [];
                _this2.jobMeta = null;
              }
              _context2.n = 1;
              return _this2.loadMeta();
            case 1:
              _context2.n = 2;
              return axios.get('service_checklist/categories');
            case 2:
              _yield$axios$get = _context2.v;
              catData = _yield$axios$get.data;
              _this2.checklistCategories = catData.categories || [];
              _context2.n = 3;
              return _this2.loadChecklist();
            case 3:
              _context2.n = 4;
              return _this2.loadJobIfNeeded();
            case 4:
              _this2.isLoading = false;
            case 5:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    loadMeta: function loadMeta() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$axios$get2, data;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return axios.get('service_jobs/create');
            case 1:
              _yield$axios$get2 = _context3.v;
              data = _yield$axios$get2.data;
              _this3.clients = (data.clients || []).map(function (c) {
                return {
                  id: c.id,
                  name: c.name
                };
              });
              _this3.technicians = (data.technicians || []).map(function (t) {
                return {
                  id: t.id,
                  full_name: t.name || "#".concat(t.id)
                };
              });
              _this3.warehouses = data.warehouses || [];
              _this3.paymentMethods = data.payment_methods || [];
            case 2:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    loadChecklist: function loadChecklist() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var _yield$axios$get3, data;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return axios.get('service_checklist/items');
            case 1:
              _yield$axios$get3 = _context4.v;
              data = _yield$axios$get3.data;
              _this4.checklistItems = (data.items || []).map(function (item) {
                var cat = _this4.checklistCategories.find(function (c) {
                  return c.id === item.category_id;
                });
                return {
                  id: item.id,
                  name: item.name,
                  category_id: item.category_id,
                  category_name: cat ? cat.name : null
                };
              });
              if (!_this4.isEdit) {
                _this4.checklistItems.forEach(function (it) {
                  _this4.$set(_this4.checklistState, it.id, false);
                });
              }
            case 2:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    loadJobIfNeeded: function loadJobIfNeeded() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var _yield$axios$get4, data, job, firstWithWh;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              if (_this5.jobId) {
                _context5.n = 1;
                break;
              }
              return _context5.a(2);
            case 1:
              _context5.n = 2;
              return axios.get("service_jobs/".concat(_this5.jobId));
            case 2:
              _yield$axios$get4 = _context5.v;
              data = _yield$axios$get4.data;
              job = data.job || {};
              _this5.jobMeta = job;
              _this5.form.client_id = job.client_id || null;
              _this5.form.technician_id = job.technician_id || null;
              _this5.form.service_item = job.service_item || '';
              _this5.form.job_type = job.job_type || '';
              _this5.form.status = job.status || 'pending';
              _this5.form.scheduled_date = job.scheduled_date ? String(job.scheduled_date).slice(0, 16).replace(' ', 'T') : '';
              _this5.form.scheduled_end_date = job.scheduled_end_date ? String(job.scheduled_end_date).slice(0, 16).replace(' ', 'T') : '';
              _this5.form.notes = job.notes || '';
              _this5.form.device_brand = job.device_brand || '';
              _this5.form.device_model = job.device_model || '';
              _this5.form.device_serial = job.device_serial || '';
              _this5.form.device_imei = job.device_imei || '';
              _this5.form.device_color = job.device_color || '';
              _this5.form.device_password = job.device_password || '';
              _this5.form.accessories = Array.isArray(job.accessories) ? job.accessories : [];
              _this5.form.condition_on_arrival = job.condition_on_arrival || '';
              _this5.form.reported_issue = job.reported_issue || '';
              _this5.form.diagnosis = job.diagnosis || '';
              _this5.form.diagnostic_fee = Number(job.diagnostic_fee) || 0;
              _this5.form.quote_amount = Number(job.quote_amount) || 0;
              _this5.form.quote_valid_until = job.quote_valid_until || '';
              _this5.form.warranty_days = Number(job.warranty_days) || 30;
              (data.checklist || []).forEach(function (row) {
                if (row.item_id) _this5.$set(_this5.checklistState, row.item_id, !!row.is_completed);
              });
              _this5.form.items = (data.items || []).map(function (it) {
                return {
                  id: it.id,
                  type: it.type || 'part',
                  product_id: it.product_id,
                  product_variant_id: it.product_variant_id,
                  warehouse_id: it.warehouse_id,
                  description: it.description,
                  quantity: Number(it.quantity) || 1,
                  unit_price: Number(it.unit_price) || 0,
                  discount: Number(it.discount) || 0,
                  discount_method: it.discount_method || '1',
                  tax_rate: Number(it.tax_rate) || 0,
                  tax_method: it.tax_method || '1',
                  total: Number(it.total) || 0,
                  notes: it.notes || ''
                };
              });

              // pick warehouse from first item if any
              firstWithWh = _this5.form.items.find(function (i) {
                return i.warehouse_id;
              });
              if (!firstWithWh) {
                _context5.n = 3;
                break;
              }
              _this5.selectedWarehouseId = firstWithWh.warehouse_id;
              _context5.n = 3;
              return _this5.loadWarehouseProducts();
            case 3:
              _this5.payments = data.payments || [];
              _this5.photos = data.photos || [];
              _this5.totals = {
                total_amount: Number(job.total_amount) || 0,
                paid_amount: Number(job.paid_amount) || 0,
                balance_due: Number(job.balance_due) || 0
              };
            case 4:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    /* ---------- Items / parts ---------- */onWarehouseChange: function onWarehouseChange() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              _this6.warehouseProducts = [];
              _this6.productPick = null;
              if (!_this6.selectedWarehouseId) {
                _context6.n = 1;
                break;
              }
              _context6.n = 1;
              return _this6.loadWarehouseProducts();
            case 1:
              return _context6.a(2);
          }
        }, _callee6);
      }))();
    },
    loadWarehouseProducts: function loadWarehouseProducts() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var _yield$axios$get5, data, _t;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              _context7.p = 0;
              _context7.n = 1;
              return axios.get("get_Products_by_warehouse/".concat(_this7.selectedWarehouseId, "?stock=1&is_sale=1&product_service=1&product_combo=0"));
            case 1:
              _yield$axios$get5 = _context7.v;
              data = _yield$axios$get5.data;
              _this7.warehouseProducts = (data || []).map(function (p) {
                return {
                  id: p.id,
                  product_variant_id: p.product_variant_id,
                  name: p.name,
                  code: p.code,
                  qte_sale: p.qte_sale,
                  price: p.Net_price || p.price || 0
                };
              });
              _context7.n = 3;
              break;
            case 2:
              _context7.p = 2;
              _t = _context7.v;
              _this7.warehouseProducts = [];
            case 3:
              return _context7.a(2);
          }
        }, _callee7, null, [[0, 2]]);
      }))();
    },
    onPickProduct: function onPickProduct(p) {
      if (!p) return;
      var row = {
        type: 'part',
        product_id: p.id,
        product_variant_id: p.product_variant_id || null,
        warehouse_id: this.selectedWarehouseId,
        description: p.name,
        quantity: 1,
        unit_price: Number(p.price) || 0,
        discount: 0,
        discount_method: '1',
        tax_rate: 0,
        tax_method: '1',
        total: 0,
        notes: ''
      };
      this.recomputeRow(row);
      this.form.items.push(row);
      this.productPick = null;
    },
    addLaborLine: function addLaborLine() {
      var row = {
        type: 'labor',
        product_id: null,
        product_variant_id: null,
        warehouse_id: null,
        description: 'Labor',
        quantity: 1,
        unit_price: 0,
        discount: 0,
        discount_method: '1',
        tax_rate: 0,
        tax_method: '1',
        total: 0,
        notes: ''
      };
      this.form.items.push(row);
    },
    addOtherLine: function addOtherLine() {
      var row = {
        type: 'other',
        product_id: null,
        product_variant_id: null,
        warehouse_id: null,
        description: '',
        quantity: 1,
        unit_price: 0,
        discount: 0,
        discount_method: '1',
        tax_rate: 0,
        tax_method: '1',
        total: 0,
        notes: ''
      };
      this.form.items.push(row);
    },
    removeItem: function removeItem(idx) {
      this.form.items.splice(idx, 1);
    },
    recomputeRow: function recomputeRow(row) {
      var qty = Number(row.quantity) || 0;
      var price = Number(row.unit_price) || 0;
      var disc = Number(row.discount) || 0;
      var tax = Number(row.tax_rate) || 0;
      var subtotal = qty * price;
      var discValue = row.discount_method === '2' ? subtotal * disc / 100 : disc;
      var afterDisc = Math.max(0, subtotal - discValue);
      var taxValue = afterDisc * tax / 100;
      row.total = Number((afterDisc + taxValue).toFixed(2));
    },
    /* ---------- Checklist ---------- */buildChecklistPayload: function buildChecklistPayload() {
      var _this8 = this;
      return this.checklistItems.map(function (item) {
        return {
          category_id: item.category_id,
          category_name: item.category_name || '',
          item_id: item.id,
          item_name: item.name,
          is_completed: !!_this8.checklistState[item.id]
        };
      });
    },
    /* ---------- Submit job ---------- */submit: function submit() {
      var _this9 = this;
      this.$refs.Create_Service_Job.validate().then(function (success) {
        if (!success) {
          _this9.makeToast('danger', _this9.$t('Please_fill_the_form_correctly'), _this9.$t('Failed'));
        } else {
          _this9.Submit_Service_Job();
        }
      });
    },
    Submit_Service_Job: function Submit_Service_Job() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var payload, _yield$axios$post, data, _t2;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              _this0.SubmitProcessing = true;
              payload = _objectSpread(_objectSpread({}, _this0.form), {}, {
                checklist: _this0.buildChecklistPayload(),
                items: _this0.form.items.map(function (it) {
                  return {
                    type: it.type,
                    product_id: it.product_id,
                    product_variant_id: it.product_variant_id,
                    warehouse_id: it.warehouse_id,
                    description: it.description,
                    quantity: it.quantity,
                    unit_price: it.unit_price,
                    discount: it.discount,
                    discount_method: it.discount_method,
                    tax_rate: it.tax_rate,
                    tax_method: it.tax_method,
                    notes: it.notes
                  };
                })
              });
              _context8.p = 1;
              if (!_this0.isEdit) {
                _context8.n = 4;
                break;
              }
              _context8.n = 2;
              return axios.put("service_jobs/".concat(_this0.jobId), payload);
            case 2:
              _this0.makeToast('success', _this0.$t('Successfully_Updated'), _this0.$t('Success'));
              _context8.n = 3;
              return _this0.loadJobIfNeeded();
            case 3:
              _context8.n = 6;
              break;
            case 4:
              _context8.n = 5;
              return axios.post('service_jobs', payload);
            case 5:
              _yield$axios$post = _context8.v;
              data = _yield$axios$post.data;
              _this0.makeToast('success', _this0.$t('Successfully_Created'), _this0.$t('Success'));
              if (data && data.id) {
                _this0.$router.replace({
                  name: 'service_job_edit',
                  params: {
                    id: data.id
                  }
                });
              } else {
                _this0.$router.push({
                  name: 'service_jobs_index'
                });
              }
            case 6:
              _context8.n = 8;
              break;
            case 7:
              _context8.p = 7;
              _t2 = _context8.v;
              _this0.makeToast('danger', _this0.$t('InvalidData'), _this0.$t('Failed'));
            case 8:
              _context8.p = 8;
              _this0.SubmitProcessing = false;
              return _context8.f(8);
            case 9:
              return _context8.a(2);
          }
        }, _callee8, null, [[1, 7, 8, 9]]);
      }))();
    },
    /* ---------- Quote actions ---------- */approveQuote: function approveQuote() {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        var _t3;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.p = _context9.n) {
            case 0:
              _context9.p = 0;
              _context9.n = 1;
              return axios.post("service_jobs/".concat(_this1.jobId, "/approve_quote"), {
                approved_by: _this1.approveBy || null
              });
            case 1:
              _this1.makeToast('success', _this1.$t('Quote_Approved') || 'Quote approved', _this1.$t('Success'));
              _context9.n = 2;
              return _this1.loadJobIfNeeded();
            case 2:
              _context9.n = 4;
              break;
            case 3:
              _context9.p = 3;
              _t3 = _context9.v;
              _this1.makeToast('danger', _this1.$t('Operation_Failed') || 'Operation failed', _this1.$t('Failed'));
            case 4:
              return _context9.a(2);
          }
        }, _callee9, null, [[0, 3]]);
      }))();
    },
    declineQuote: function declineQuote() {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
        var _t4;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.p = _context0.n) {
            case 0:
              _context0.p = 0;
              _context0.n = 1;
              return axios.post("service_jobs/".concat(_this10.jobId, "/decline_quote"));
            case 1:
              _this10.makeToast('success', _this10.$t('Quote_Declined') || 'Quote declined', _this10.$t('Success'));
              _context0.n = 2;
              return _this10.loadJobIfNeeded();
            case 2:
              _context0.n = 4;
              break;
            case 3:
              _context0.p = 3;
              _t4 = _context0.v;
              _this10.makeToast('danger', _this10.$t('Operation_Failed') || 'Operation failed', _this10.$t('Failed'));
            case 4:
              return _context0.a(2);
          }
        }, _callee0, null, [[0, 3]]);
      }))();
    },
    markDelivered: function markDelivered() {
      var _this11 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
        var msg, _t5;
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.p = _context1.n) {
            case 0:
              _context1.p = 0;
              _context1.n = 1;
              return axios.post("service_jobs/".concat(_this11.jobId, "/mark_delivered"));
            case 1:
              _this11.makeToast('success', _this11.$t('Successfully_Updated'), _this11.$t('Success'));
              _context1.n = 2;
              return _this11.loadJobIfNeeded();
            case 2:
              _context1.n = 4;
              break;
            case 3:
              _context1.p = 3;
              _t5 = _context1.v;
              msg = _t5.response && _t5.response.data && _t5.response.data.message;
              _this11.makeToast('danger', msg || _this11.$t('Operation_Failed') || 'Operation failed', _this11.$t('Failed'));
            case 4:
              return _context1.a(2);
          }
        }, _callee1, null, [[0, 3]]);
      }))();
    },
    /* ---------- Send to Quotations ---------- */sendToQuotations: function sendToQuotations() {
      var _this12 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
        var _yield$axios$post2, data, msg, _msg, _t6;
        return _regenerator().w(function (_context10) {
          while (1) switch (_context10.p = _context10.n) {
            case 0:
              if (_this12.jobId) {
                _context10.n = 1;
                break;
              }
              return _context10.a(2);
            case 1:
              _this12.creatingQuotation = true;
              _context10.p = 2;
              _context10.n = 3;
              return axios.post("service_jobs/".concat(_this12.jobId, "/create_quotation"));
            case 3:
              _yield$axios$post2 = _context10.v;
              data = _yield$axios$post2.data;
              if (_this12.jobMeta) {
                _this12.jobMeta = _objectSpread(_objectSpread({}, _this12.jobMeta), {}, {
                  quotation_id: data.quotation_id,
                  quotation_ref: data.Ref
                });
              } else {
                _this12.jobMeta = {
                  quotation_id: data.quotation_id,
                  quotation_ref: data.Ref
                };
              }
              msg = data.duplicate ? "Already linked to quotation ".concat(data.Ref, ".") : "Quotation ".concat(data.Ref, " created.");
              _this12.makeToast('success', msg, _this12.$t('Success'));
              _context10.n = 5;
              break;
            case 4:
              _context10.p = 4;
              _t6 = _context10.v;
              _msg = _t6.response && _t6.response.data && _t6.response.data.message || 'Could not create quotation.';
              _this12.makeToast('danger', _msg, _this12.$t('Failed'));
            case 5:
              _context10.p = 5;
              _this12.creatingQuotation = false;
              return _context10.f(5);
            case 6:
              return _context10.a(2);
          }
        }, _callee10, null, [[2, 4, 5, 6]]);
      }))();
    },
    /* ---------- Quote PDF ---------- */downloadQuotePdf: function downloadQuotePdf() {
      var _this13 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
        var response, url, link, _t7;
        return _regenerator().w(function (_context11) {
          while (1) switch (_context11.p = _context11.n) {
            case 0:
              _context11.p = 0;
              _context11.n = 1;
              return axios.get("service_quote_pdf/".concat(_this13.jobId), {
                responseType: 'blob'
              });
            case 1:
              response = _context11.v;
              url = window.URL.createObjectURL(new Blob([response.data]));
              link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', "Service_Quote_".concat(_this13.jobId, ".pdf"));
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              window.URL.revokeObjectURL(url);
              _context11.n = 3;
              break;
            case 2:
              _context11.p = 2;
              _t7 = _context11.v;
              _this13.makeToast('danger', _this13.$t('Operation_Failed') || 'Operation failed', _this13.$t('Failed'));
            case 3:
              return _context11.a(2);
          }
        }, _callee11, null, [[0, 2]]);
      }))();
    },
    /* ---------- Photos ---------- */uploadPhotos: function uploadPhotos() {
      var _this14 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12() {
        var fd, files, _t8;
        return _regenerator().w(function (_context12) {
          while (1) switch (_context12.p = _context12.n) {
            case 0:
              if (!(!_this14.photoFiles || _this14.photoFiles.length === 0)) {
                _context12.n = 1;
                break;
              }
              return _context12.a(2);
            case 1:
              _this14.photoUploading = true;
              _context12.p = 2;
              fd = new FormData();
              fd.append('stage', _this14.photoStage);
              if (_this14.photoCaption) fd.append('caption', _this14.photoCaption);
              files = Array.isArray(_this14.photoFiles) ? _this14.photoFiles : [_this14.photoFiles];
              files.forEach(function (f) {
                return fd.append('photos[]', f);
              });
              // Don't set Content-Type explicitly — axios/browser must add the multipart boundary.
              _context12.n = 3;
              return axios.post("service_jobs/".concat(_this14.jobId, "/photos"), fd);
            case 3:
              _this14.photoFiles = null;
              _this14.photoCaption = '';
              _context12.n = 4;
              return _this14.refreshPhotos();
            case 4:
              _this14.makeToast('success', _this14.$t('Successfully_Created'), _this14.$t('Success'));
              _context12.n = 6;
              break;
            case 5:
              _context12.p = 5;
              _t8 = _context12.v;
              _this14.makeToast('danger', _this14.$t('Upload_failed') || 'Upload failed', _this14.$t('Failed'));
            case 6:
              _context12.p = 6;
              _this14.photoUploading = false;
              return _context12.f(6);
            case 7:
              return _context12.a(2);
          }
        }, _callee12, null, [[2, 5, 6, 7]]);
      }))();
    },
    refreshPhotos: function refreshPhotos() {
      var _this15 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13() {
        var _yield$axios$get6, data;
        return _regenerator().w(function (_context13) {
          while (1) switch (_context13.n) {
            case 0:
              _context13.n = 1;
              return axios.get("service_jobs/".concat(_this15.jobId, "/photos"));
            case 1:
              _yield$axios$get6 = _context13.v;
              data = _yield$axios$get6.data;
              _this15.photos = data.photos || [];
            case 2:
              return _context13.a(2);
          }
        }, _callee13);
      }))();
    },
    deletePhoto: function deletePhoto(ph) {
      var _this16 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14() {
        var ok;
        return _regenerator().w(function (_context14) {
          while (1) switch (_context14.n) {
            case 0:
              _context14.n = 1;
              return _this16.$swal({
                title: _this16.$t('Are_you_sure'),
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: _this16.$t('Yes_delete')
              });
            case 1:
              ok = _context14.v;
              if (ok.value) {
                _context14.n = 2;
                break;
              }
              return _context14.a(2);
            case 2:
              _context14.n = 3;
              return axios["delete"]("service_jobs/".concat(_this16.jobId, "/photos/").concat(ph.id));
            case 3:
              _context14.n = 4;
              return _this16.refreshPhotos();
            case 4:
              return _context14.a(2);
          }
        }, _callee14);
      }))();
    },
    /* ---------- Payments ---------- */openPaymentModal: function openPaymentModal() {
      var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (p) {
        this.paymentModalTitle = this.$t('Edit_Payment') || 'Edit Payment';
        this.paymentEditingId = p.id;
        this.paymentForm = {
          date: p.date || new Date().toISOString().slice(0, 10),
          montant: Number(p.montant) || 0,
          payment_kind: p.payment_kind || 'payment',
          payment_method_id: p.payment_method_id || null,
          notes: p.notes || ''
        };
      } else {
        this.paymentModalTitle = this.$t('Add_Payment') || 'Add Payment';
        this.paymentEditingId = null;
        this.paymentForm = {
          date: new Date().toISOString().slice(0, 10),
          montant: this.totals.balance_due > 0 ? this.totals.balance_due : 0,
          payment_kind: 'payment',
          payment_method_id: null,
          notes: ''
        };
      }
      this.paymentModalShow = true;
    },
    submitPayment: function submitPayment() {
      var _this17 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15() {
        var _t9;
        return _regenerator().w(function (_context15) {
          while (1) switch (_context15.p = _context15.n) {
            case 0:
              _this17.paymentSaving = true;
              _context15.p = 1;
              if (!_this17.paymentEditingId) {
                _context15.n = 3;
                break;
              }
              _context15.n = 2;
              return axios.put("service_jobs/".concat(_this17.jobId, "/payments/").concat(_this17.paymentEditingId), _this17.paymentForm);
            case 2:
              _context15.n = 4;
              break;
            case 3:
              _context15.n = 4;
              return axios.post("service_jobs/".concat(_this17.jobId, "/payments"), _this17.paymentForm);
            case 4:
              _this17.paymentModalShow = false;
              _context15.n = 5;
              return _this17.loadJobIfNeeded();
            case 5:
              _this17.makeToast('success', _this17.$t('Successfully_Created'), _this17.$t('Success'));
              _context15.n = 7;
              break;
            case 6:
              _context15.p = 6;
              _t9 = _context15.v;
              _this17.makeToast('danger', _this17.$t('InvalidData'), _this17.$t('Failed'));
            case 7:
              _context15.p = 7;
              _this17.paymentSaving = false;
              return _context15.f(7);
            case 8:
              return _context15.a(2);
          }
        }, _callee15, null, [[1, 6, 7, 8]]);
      }))();
    },
    deletePayment: function deletePayment(p) {
      var _this18 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16() {
        var ok;
        return _regenerator().w(function (_context16) {
          while (1) switch (_context16.n) {
            case 0:
              _context16.n = 1;
              return _this18.$swal({
                title: _this18.$t('Are_you_sure'),
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: _this18.$t('Yes_delete')
              });
            case 1:
              ok = _context16.v;
              if (ok.value) {
                _context16.n = 2;
                break;
              }
              return _context16.a(2);
            case 2:
              _context16.n = 3;
              return axios["delete"]("service_jobs/".concat(_this18.jobId, "/payments/").concat(p.id));
            case 3:
              _context16.n = 4;
              return _this18.loadJobIfNeeded();
            case 4:
              return _context16.a(2);
          }
        }, _callee16);
      }))();
    },
    /* ---------- Helpers ---------- */statusBadgeClass: function statusBadgeClass(s) {
      var map = {
        delivered: 'badge-outline-success',
        ready: 'badge-outline-success',
        approved: 'badge-outline-primary',
        in_progress: 'badge-outline-primary',
        quoted: 'badge-outline-info',
        diagnostic: 'badge-outline-info',
        intake: 'badge-outline-info',
        declined: 'badge-outline-danger',
        cancelled: 'badge-outline-danger'
      };
      return map[s] || 'badge-outline-secondary';
    },
    statusLabel: function statusLabel(s) {
      return s ? s.replace('_', ' ') : '';
    },
    paymentBadgeClass: function paymentBadgeClass(s) {
      if (s === 'paid') return 'badge-outline-success';
      if (s === 'partial') return 'badge-outline-warning';
      return 'badge-outline-danger';
    },
    kindIcon: function kindIcon(kind) {
      if (kind === 'deposit') return 'piggy-bank';
      if (kind === 'refund') return 'rotate-ccw';
      return 'banknote';
    },
    formatNumber: function formatNumber(n) {
      var v = Number(n) || 0;
      return v.toFixed(2);
    },
    formatDate: function formatDate(d) {
      if (!d) return '';
      try {
        return new Date(d).toLocaleString();
      } catch (e) {
        return d;
      }
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
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceJobForm.vue?vue&type=template&id=01a72a83&scoped=true"
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceJobForm.vue?vue&type=template&id=01a72a83&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.isEdit ? _vm.$t("Edit_Service_Job") : _vm.$t("Create_Service_Job"),
      folder: _vm.$t("Service_Maintenance")
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("router-link", {
    staticClass: "btn btn-light back-btn",
    attrs: {
      to: "/app/service/jobs"
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "arrow-left"
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Back_to_Service_Jobs") || "Back to Service Jobs"))])], 1)], 1), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_vm.isEdit && _vm.jobMeta ? _c("div", {
    staticClass: "repair-summary mb-3"
  }, [_c("div", {
    staticClass: "rs-block"
  }, [_c("div", {
    staticClass: "rs-label"
  }, [_vm._v(_vm._s(_vm.$t("Reference")))]), _vm._v(" "), _c("div", {
    staticClass: "rs-value"
  }, [_vm._v(_vm._s(_vm.jobMeta.Ref))])]), _vm._v(" "), _c("div", {
    staticClass: "rs-block"
  }, [_c("div", {
    staticClass: "rs-label"
  }, [_vm._v(_vm._s(_vm.$t("Status")))]), _vm._v(" "), _c("div", {
    staticClass: "rs-value"
  }, [_c("span", {
    staticClass: "badge",
    "class": _vm.statusBadgeClass(_vm.jobMeta.status)
  }, [_vm._v("\n              " + _vm._s(_vm.$t(_vm.statusLabel(_vm.jobMeta.status)) || _vm.jobMeta.status) + "\n            ")])])]), _vm._v(" "), _c("div", {
    staticClass: "rs-block"
  }, [_c("div", {
    staticClass: "rs-label"
  }, [_vm._v(_vm._s(_vm.$t("Total")))]), _vm._v(" "), _c("div", {
    staticClass: "rs-value"
  }, [_vm._v(_vm._s(_vm.currencySymbol) + _vm._s(_vm.formatNumber(_vm.totals.total_amount)))])]), _vm._v(" "), _c("div", {
    staticClass: "rs-block"
  }, [_c("div", {
    staticClass: "rs-label"
  }, [_vm._v(_vm._s(_vm.$t("Paid")))]), _vm._v(" "), _c("div", {
    staticClass: "rs-value text-success"
  }, [_vm._v(_vm._s(_vm.currencySymbol) + _vm._s(_vm.formatNumber(_vm.totals.paid_amount)))])]), _vm._v(" "), _c("div", {
    staticClass: "rs-block"
  }, [_c("div", {
    staticClass: "rs-label"
  }, [_vm._v(_vm._s(_vm.$t("Balance_Due") || "Balance Due"))]), _vm._v(" "), _c("div", {
    staticClass: "rs-value",
    "class": _vm.totals.balance_due > 0 ? "text-danger" : "text-success"
  }, [_vm._v("\n            " + _vm._s(_vm.currencySymbol) + _vm._s(_vm.formatNumber(_vm.totals.balance_due)) + "\n          ")])]), _vm._v(" "), _c("div", {
    staticClass: "rs-block"
  }, [_c("div", {
    staticClass: "rs-label"
  }, [_vm._v(_vm._s(_vm.$t("Payment_Status") || "Payment"))]), _vm._v(" "), _c("div", {
    staticClass: "rs-value"
  }, [_c("span", {
    staticClass: "badge",
    "class": _vm.paymentBadgeClass(_vm.jobMeta.payment_status)
  }, [_vm._v("\n              " + _vm._s(_vm.$t(_vm.jobMeta.payment_status || "unpaid")) + "\n            ")])])])]) : _vm._e(), _vm._v(" "), _c("validation-observer", {
    ref: "Create_Service_Job"
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      }
    }
  }, [_c("b-tabs", {
    attrs: {
      "content-class": "mt-3",
      pills: ""
    },
    model: {
      value: _vm.activeTab,
      callback: function callback($$v) {
        _vm.activeTab = $$v;
      },
      expression: "activeTab"
    }
  }, [_c("b-tab", {
    attrs: {
      title: _vm.$t("Intake") || "Intake",
      active: ""
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "4"
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
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Customer") + " *"
          }
        }, [_c("v-select", {
          "class": {
            "is-invalid": validationContext.errors.length > 0
          },
          attrs: {
            reduce: function reduce(c) {
              return c.id;
            },
            options: _vm.clients,
            label: "name",
            placeholder: _vm.$t("Choose_Customer")
          },
          model: {
            value: _vm.form.client_id,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "client_id", $$v);
            },
            expression: "form.client_id"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Technician")
    }
  }, [_c("v-select", {
    attrs: {
      reduce: function reduce(t) {
        return t.id;
      },
      options: _vm.technicians,
      label: "full_name",
      placeholder: _vm.$t("Choose_Technician")
    },
    model: {
      value: _vm.form.technician_id,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "technician_id", $$v);
      },
      expression: "form.technician_id"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Service Item",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Service_Item") + " *"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            placeholder: _vm.$t("Service_Item")
          },
          model: {
            value: _vm.form.service_item,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "service_item", $$v);
            },
            expression: "form.service_item"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Job_Type")
    }
  }, [_c("b-form-input", {
    attrs: {
      placeholder: _vm.$t("Job_Type")
    },
    model: {
      value: _vm.form.job_type,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "job_type", $$v);
      },
      expression: "form.job_type"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Status")
    }
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.statusOptions
    },
    model: {
      value: _vm.form.status,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "status", $$v);
      },
      expression: "form.status"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Scheduled_Date")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "datetime-local"
    },
    model: {
      value: _vm.form.scheduled_date,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "scheduled_date", $$v);
      },
      expression: "form.scheduled_date"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("End_Time")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "datetime-local"
    },
    model: {
      value: _vm.form.scheduled_end_date,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "scheduled_end_date", $$v);
      },
      expression: "form.scheduled_end_date"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("h5", {
    staticClass: "mt-4 mb-2"
  }, [_vm._v(_vm._s(_vm.$t("Device_Information") || "Device Information"))]), _vm._v(" "), _c("b-row", [_c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Brand") || "Brand"
    }
  }, [_c("b-form-input", {
    attrs: {
      placeholder: "Apple, Samsung..."
    },
    model: {
      value: _vm.form.device_brand,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "device_brand", $$v);
      },
      expression: "form.device_brand"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Model") || "Model"
    }
  }, [_c("b-form-input", {
    attrs: {
      placeholder: "iPhone 13, Galaxy S22..."
    },
    model: {
      value: _vm.form.device_model,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "device_model", $$v);
      },
      expression: "form.device_model"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Color") || "Color"
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.form.device_color,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "device_color", $$v);
      },
      expression: "form.device_color"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Serial_Number") || "Serial Number"
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.form.device_serial,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "device_serial", $$v);
      },
      expression: "form.device_serial"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("IMEI") || "IMEI"
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.form.device_imei,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "device_imei", $$v);
      },
      expression: "form.device_imei"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Unlock_Code") || "Unlock Code"
    }
  }, [_c("b-form-input", {
    attrs: {
      placeholder: _vm.$t("PIN_pattern_password")
    },
    model: {
      value: _vm.form.device_password,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "device_password", $$v);
      },
      expression: "form.device_password"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Accessories_Received") || "Accessories Received"
    }
  }, [_c("div", [_c("b-form-checkbox-group", {
    attrs: {
      options: _vm.accessoryOptions,
      stacked: "",
      switches: ""
    },
    model: {
      value: _vm.form.accessories,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "accessories", $$v);
      },
      expression: "form.accessories"
    }
  })], 1)])], 1)], 1), _vm._v(" "), _c("b-row", [_c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Condition_On_Arrival") || "Condition on Arrival"
    }
  }, [_c("b-form-textarea", {
    attrs: {
      rows: "3",
      placeholder: _vm.$t("Pre_existing_damage_scratches_etc")
    },
    model: {
      value: _vm.form.condition_on_arrival,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "condition_on_arrival", $$v);
      },
      expression: "form.condition_on_arrival"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Reported_Issue") || "Reported Issue (customer words)"
    }
  }, [_c("b-form-textarea", {
    attrs: {
      rows: "3",
      placeholder: _vm.$t("What_the_customer_said")
    },
    model: {
      value: _vm.form.reported_issue,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "reported_issue", $$v);
      },
      expression: "form.reported_issue"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
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
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c("b-tab", {
    attrs: {
      title: _vm.$t("Diagnostic") || "Diagnostic"
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "9"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Diagnosis") || "Diagnosis (technician findings)"
    }
  }, [_c("b-form-textarea", {
    attrs: {
      rows: "4",
      placeholder: _vm.$t("What_the_technician_found")
    },
    model: {
      value: _vm.form.diagnosis,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "diagnosis", $$v);
      },
      expression: "form.diagnosis"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Diagnostic_Fee") || "Diagnostic Fee"
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "number",
      step: "0.01",
      min: "0"
    },
    model: {
      value: _vm.form.diagnostic_fee,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "diagnostic_fee", _vm._n($$v));
      },
      expression: "form.diagnostic_fee"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("h5", {
    staticClass: "mt-3 mb-2"
  }, [_vm._v(_vm._s(_vm.$t("Checklist")))]), _vm._v(" "), _c("b-row", [_vm.checklistItems.length === 0 ? _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("p", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("No_checklist_items_defined")))])]) : _vm._e(), _vm._v(" "), _vm._l(_vm.checklistItems, function (item) {
    return _c("b-col", {
      key: item.id,
      staticClass: "mt-2 mb-2",
      attrs: {
        md: "4"
      }
    }, [_c("label", {
      staticClass: "switch switch-primary mr-3"
    }, [_vm._v("\n                    " + _vm._s(item.name) + "\n                    "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.checklistState[item.id],
        expression: "checklistState[item.id]"
      }],
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: Array.isArray(_vm.checklistState[item.id]) ? _vm._i(_vm.checklistState[item.id], null) > -1 : _vm.checklistState[item.id]
      },
      on: {
        change: function change($event) {
          var $$a = _vm.checklistState[item.id],
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(_vm.checklistState, item.id, $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(_vm.checklistState, item.id, $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(_vm.checklistState, item.id, $$c);
          }
        }
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "slider"
    })])]);
  })], 2)], 1), _vm._v(" "), _c("b-tab", {
    attrs: {
      title: _vm.$t("Quote") || "Quote"
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Quote_Amount") || "Quote Amount (manual)"
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "number",
      step: "0.01",
      min: "0"
    },
    model: {
      value: _vm.form.quote_amount,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "quote_amount", _vm._n($$v));
      },
      expression: "form.quote_amount"
    }
  }), _vm._v(" "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Leave_blank_to_use_line_items") || "Leave blank to use line items total"))])], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Valid_Until") || "Valid Until"
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "date"
    },
    model: {
      value: _vm.form.quote_valid_until,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "quote_valid_until", $$v);
      },
      expression: "form.quote_valid_until"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Warranty_Days") || "Warranty (days)"
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "number",
      min: "0",
      max: "3650"
    },
    model: {
      value: _vm.form.warranty_days,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "warranty_days", _vm._n($$v));
      },
      expression: "form.warranty_days"
    }
  })], 1)], 1), _vm._v(" "), _vm.isEdit && _vm.jobMeta && _vm.jobMeta.parent_job_id ? _c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Warranty_Claim_For") || "Warranty claim for"
    }
  }, [_c("div", {
    staticClass: "form-control-plaintext"
  }, [_c("lucide-icon", {
    staticClass: "text-success mr-1",
    attrs: {
      name: "shield-check"
    }
  }), _vm._v("\n                      Job #" + _vm._s(_vm.jobMeta.parent_job_id) + "\n                    ")], 1)])], 1) : _vm._e()], 1), _vm._v(" "), _vm.isEdit ? _c("div", {
    staticClass: "mt-3 mb-2"
  }, [_c("b-button", {
    staticClass: "mr-2",
    attrs: {
      size: "sm",
      variant: "outline-warning"
    },
    on: {
      click: _vm.downloadQuotePdf
    }
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "file-down"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Download_Quote_PDF") || "Download Quote PDF") + "\n                ")], 1), _vm._v(" "), _vm.jobMeta && _vm.jobMeta.quotation_id ? [_c("router-link", {
    staticClass: "btn btn-sm btn-outline-success",
    attrs: {
      to: "/app/quotations/detail/".concat(_vm.jobMeta.quotation_id)
    }
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "check"
    }
  }), _vm._v(" Linked to " + _vm._s(_vm.jobMeta.quotation_ref || "Quotation #" + _vm.jobMeta.quotation_id) + "\n                  ")], 1)] : _c("b-button", {
    attrs: {
      size: "sm",
      variant: "outline-primary",
      disabled: _vm.creatingQuotation
    },
    on: {
      click: _vm.sendToQuotations
    }
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "send"
    }
  }), _vm._v(" " + _vm._s(_vm.creatingQuotation ? "Sending..." : "Send to Quotations") + "\n                ")], 1)], 2) : _vm._e(), _vm._v(" "), _vm.isEdit && _vm.jobMeta ? _c("div", {
    staticClass: "quote-status-box mt-3"
  }, [_vm.jobMeta.quote_approved_at ? [_c("lucide-icon", {
    staticClass: "text-success mr-2",
    attrs: {
      name: "check"
    }
  }), _vm._v(" "), _c("strong", [_vm._v(_vm._s(_vm.$t("Quote_Approved") || "Quote approved"))]), _vm._v("\n                  " + _vm._s(_vm.$t("on") || "on") + " " + _vm._s(_vm.formatDate(_vm.jobMeta.quote_approved_at)) + "\n                  "), _vm.jobMeta.quote_approved_by ? _c("span", [_vm._v(" " + _vm._s(_vm.$t("by") || "by") + " " + _vm._s(_vm.jobMeta.quote_approved_by))]) : _vm._e()] : _vm.jobMeta.status === "declined" ? [_c("lucide-icon", {
    staticClass: "text-danger mr-2",
    attrs: {
      name: "x"
    }
  }), _vm._v(" "), _c("strong", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.$t("Quote_Declined") || "Quote declined"))])] : [_c("div", [_c("lucide-icon", {
    staticClass: "text-warning mr-2",
    attrs: {
      name: "info"
    }
  }), _vm._v("\n                    " + _vm._s(_vm.$t("Quote_Awaiting_Approval") || "Awaiting customer approval") + "\n                  ")], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_c("b-form-input", {
    staticClass: "d-inline-block w-auto mr-2",
    attrs: {
      placeholder: _vm.$t("Customer_signature_name") || "Customer signature/name",
      size: "sm"
    },
    model: {
      value: _vm.approveBy,
      callback: function callback($$v) {
        _vm.approveBy = $$v;
      },
      expression: "approveBy"
    }
  }), _vm._v(" "), _c("b-button", {
    attrs: {
      size: "sm",
      variant: "success"
    },
    on: {
      click: _vm.approveQuote
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "check"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Approve_Quote") || "Approve") + "\n                    ")], 1), _vm._v(" "), _c("b-button", {
    attrs: {
      size: "sm",
      variant: "outline-danger"
    },
    on: {
      click: _vm.declineQuote
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "x"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Decline") || "Decline") + "\n                    ")], 1)], 1)]], 2) : _vm._e()], 1), _vm._v(" "), _c("b-tab", {
    attrs: {
      title: _vm.$t("Parts_Labor") || "Parts & Labor"
    }
  }, [_c("b-row", {
    staticClass: "mb-3"
  }, [_c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Warehouse") + " *"
    }
  }, [_c("v-select", {
    attrs: {
      reduce: function reduce(w) {
        return w.id;
      },
      options: _vm.warehouses,
      label: "name",
      placeholder: _vm.$t("Choose_Warehouse")
    },
    on: {
      input: _vm.onWarehouseChange
    },
    model: {
      value: _vm.selectedWarehouseId,
      callback: function callback($$v) {
        _vm.selectedWarehouseId = $$v;
      },
      expression: "selectedWarehouseId"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Add_Part_From_Stock") || "Add part from stock"
    }
  }, [_c("v-select", {
    attrs: {
      reduce: function reduce(p) {
        return p;
      },
      options: _vm.warehouseProducts,
      label: "name",
      placeholder: _vm.$t("Search_product"),
      disabled: !_vm.selectedWarehouseId
    },
    on: {
      input: _vm.onPickProduct
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref) {
        var name = _ref.name,
          code = _ref.code,
          qte_sale = _ref.qte_sale;
        return [_c("span", [_vm._v(_vm._s(name) + " "), _c("small", {
          staticClass: "text-muted"
        }, [_vm._v("(" + _vm._s(code) + " · stock: " + _vm._s(qte_sale) + ")")])])];
      }
    }]),
    model: {
      value: _vm.productPick,
      callback: function callback($$v) {
        _vm.productPick = $$v;
      },
      expression: "productPick"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between mb-2"
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_vm._v(_vm._s(_vm.$t("Line_Items") || "Line Items"))]), _vm._v(" "), _c("div", [_c("b-button", {
    attrs: {
      size: "sm",
      variant: "outline-primary"
    },
    on: {
      click: _vm.addLaborLine
    }
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "plus"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Add_Labor_Line") || "Add Labor") + "\n                  ")], 1), _vm._v(" "), _c("b-button", {
    staticClass: "ml-2",
    attrs: {
      size: "sm",
      variant: "outline-secondary"
    },
    on: {
      click: _vm.addOtherLine
    }
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "plus"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Add_Other_Line") || "Add Other") + "\n                  ")], 1)], 1)]), _vm._v(" "), _c("table", {
    staticClass: "table table-sm table-bordered repair-items-table"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticStyle: {
      width: "80px"
    }
  }, [_vm._v(_vm._s(_vm.$t("Type") || "Type"))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.$t("Description") || "Description"))]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "110px"
    }
  }, [_vm._v(_vm._s(_vm.$t("Qty") || "Qty"))]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "130px"
    }
  }, [_vm._v(_vm._s(_vm.$t("Unit_Price") || "Unit Price"))]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "120px"
    }
  }, [_vm._v(_vm._s(_vm.$t("Discount") || "Discount"))]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "110px"
    }
  }, [_vm._v(_vm._s(_vm.$t("Tax") || "Tax %"))]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "130px"
    }
  }, [_vm._v(_vm._s(_vm.$t("Total") || "Total"))]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "50px"
    }
  })])]), _vm._v(" "), _c("tbody", [_vm.form.items.length === 0 ? _c("tr", [_c("td", {
    staticClass: "text-center text-muted py-3",
    attrs: {
      colspan: "8"
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("No_items_added_yet") || "No items yet — pick a part above or add a labor line") + "\n                    ")])]) : _vm._e(), _vm._v(" "), _vm._l(_vm.form.items, function (row, idx) {
    return _c("tr", {
      key: idx
    }, [_c("td", [row.type === "part" ? _c("b-badge", {
      attrs: {
        variant: "info"
      }
    }, [_vm._v(_vm._s(_vm.$t("Part") || "Part"))]) : row.type === "labor" ? _c("b-badge", {
      attrs: {
        variant: "primary"
      }
    }, [_vm._v(_vm._s(_vm.$t("Labor") || "Labor"))]) : _c("b-badge", {
      attrs: {
        variant: "secondary"
      }
    }, [_vm._v(_vm._s(_vm.$t("Other") || "Other"))])], 1), _vm._v(" "), _c("td", [_c("b-form-input", {
      attrs: {
        size: "sm"
      },
      model: {
        value: row.description,
        callback: function callback($$v) {
          _vm.$set(row, "description", $$v);
        },
        expression: "row.description"
      }
    })], 1), _vm._v(" "), _c("td", [_c("b-form-input", {
      attrs: {
        type: "number",
        min: "0",
        step: "0.01",
        size: "sm"
      },
      on: {
        input: function input($event) {
          return _vm.recomputeRow(row);
        }
      },
      model: {
        value: row.quantity,
        callback: function callback($$v) {
          _vm.$set(row, "quantity", _vm._n($$v));
        },
        expression: "row.quantity"
      }
    })], 1), _vm._v(" "), _c("td", [_c("b-form-input", {
      attrs: {
        type: "number",
        min: "0",
        step: "0.01",
        size: "sm"
      },
      on: {
        input: function input($event) {
          return _vm.recomputeRow(row);
        }
      },
      model: {
        value: row.unit_price,
        callback: function callback($$v) {
          _vm.$set(row, "unit_price", _vm._n($$v));
        },
        expression: "row.unit_price"
      }
    })], 1), _vm._v(" "), _c("td", [_c("b-input-group", {
      attrs: {
        size: "sm"
      }
    }, [_c("b-form-input", {
      attrs: {
        type: "number",
        min: "0",
        step: "0.01"
      },
      on: {
        input: function input($event) {
          return _vm.recomputeRow(row);
        }
      },
      model: {
        value: row.discount,
        callback: function callback($$v) {
          _vm.$set(row, "discount", _vm._n($$v));
        },
        expression: "row.discount"
      }
    }), _vm._v(" "), _c("b-input-group-append", [_c("b-form-select", {
      attrs: {
        options: [{
          value: "1",
          text: "$"
        }, {
          value: "2",
          text: "%"
        }]
      },
      on: {
        change: function change($event) {
          return _vm.recomputeRow(row);
        }
      },
      model: {
        value: row.discount_method,
        callback: function callback($$v) {
          _vm.$set(row, "discount_method", $$v);
        },
        expression: "row.discount_method"
      }
    })], 1)], 1)], 1), _vm._v(" "), _c("td", [_c("b-form-input", {
      attrs: {
        type: "number",
        min: "0",
        step: "0.01",
        size: "sm"
      },
      on: {
        input: function input($event) {
          return _vm.recomputeRow(row);
        }
      },
      model: {
        value: row.tax_rate,
        callback: function callback($$v) {
          _vm.$set(row, "tax_rate", _vm._n($$v));
        },
        expression: "row.tax_rate"
      }
    })], 1), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_c("strong", [_vm._v(_vm._s(_vm.currencySymbol) + _vm._s(_vm.formatNumber(row.total)))])]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("button", {
      staticClass: "btn btn-sm btn-outline-danger",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.removeItem(idx);
        }
      }
    }, [_c("lucide-icon", {
      attrs: {
        name: "x"
      }
    })], 1)])]);
  })], 2), _vm._v(" "), _c("tfoot", [_c("tr", [_c("td", {
    staticClass: "text-right",
    attrs: {
      colspan: "6"
    }
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("Items_Subtotal") || "Items Subtotal"))])]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_c("strong", [_vm._v(_vm._s(_vm.currencySymbol) + _vm._s(_vm.formatNumber(_vm.itemsSubtotal)))])]), _vm._v(" "), _c("td")]), _vm._v(" "), _vm.form.diagnostic_fee > 0 ? _c("tr", [_c("td", {
    staticClass: "text-right",
    attrs: {
      colspan: "6"
    }
  }, [_vm._v(_vm._s(_vm.$t("Diagnostic_Fee") || "Diagnostic Fee"))]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.currencySymbol) + _vm._s(_vm.formatNumber(_vm.form.diagnostic_fee)))]), _vm._v(" "), _c("td")]) : _vm._e(), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-right",
    attrs: {
      colspan: "6"
    }
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("Grand_Total") || "Grand Total"))])]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_c("strong", {
    staticClass: "text-primary"
  }, [_vm._v(_vm._s(_vm.currencySymbol) + _vm._s(_vm.formatNumber(_vm.grandTotal)))])]), _vm._v(" "), _c("td")])])])], 1), _vm._v(" "), _c("b-tab", {
    attrs: {
      title: _vm.$t("Photos") || "Photos",
      disabled: !_vm.isEdit
    }
  }, [!_vm.isEdit ? _c("div", {
    staticClass: "text-muted text-center py-4"
  }, [_vm._v("\n                " + _vm._s(_vm.$t("Save_job_first_to_upload_photos") || "Save the job first to upload photos.") + "\n              ")]) : _c("div", [_c("b-row", {
    staticClass: "mb-3"
  }, [_c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Stage") || "Stage"
    }
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.photoStageOptions
    },
    model: {
      value: _vm.photoStage,
      callback: function callback($$v) {
        _vm.photoStage = $$v;
      },
      expression: "photoStage"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Caption") || "Caption"
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.photoCaption,
      callback: function callback($$v) {
        _vm.photoCaption = $$v;
      },
      expression: "photoCaption"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "d-flex align-items-end",
    attrs: {
      md: "3"
    }
  }, [_c("b-form-file", {
    staticClass: "mb-3",
    attrs: {
      multiple: "",
      accept: "image/*",
      placeholder: _vm.$t("Choose_files") || "Choose photos..."
    },
    model: {
      value: _vm.photoFiles,
      callback: function callback($$v) {
        _vm.photoFiles = $$v;
      },
      expression: "photoFiles"
    }
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-button", {
    attrs: {
      variant: "primary",
      disabled: !_vm.photoFiles || _vm.photoFiles.length === 0 || _vm.photoUploading
    },
    on: {
      click: _vm.uploadPhotos
    }
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "upload"
    }
  }), _vm._v(" " + _vm._s(_vm.photoUploading ? _vm.$t("Uploading") || "Uploading..." : _vm.$t("Upload") || "Upload") + "\n                    ")], 1)], 1)], 1), _vm._v(" "), _vm.photos.length === 0 ? _c("div", {
    staticClass: "text-muted text-center py-3"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("No_photos_yet") || "No photos yet") + "\n                ")]) : _c("div", {
    staticClass: "photo-grid"
  }, _vm._l(_vm.photos, function (ph) {
    return _c("div", {
      key: ph.id,
      staticClass: "photo-tile"
    }, [_c("img", {
      attrs: {
        src: ph.url,
        alt: ph.original_name
      },
      on: {
        click: function click($event) {
          _vm.previewPhoto = ph;
        }
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "photo-meta"
    }, [_c("span", {
      staticClass: "badge badge-outline-info"
    }, [_vm._v(_vm._s(_vm.$t(ph.stage) || ph.stage))]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-sm btn-link text-danger p-0",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.deletePhoto(ph);
        }
      }
    }, [_c("lucide-icon", {
      attrs: {
        name: "x"
      }
    })], 1)]), _vm._v(" "), ph.caption ? _c("small", {
      staticClass: "text-muted d-block"
    }, [_vm._v(_vm._s(ph.caption))]) : _vm._e()]);
  }), 0), _vm._v(" "), _vm.previewPhoto ? _c("b-modal", {
    attrs: {
      visible: !!_vm.previewPhoto,
      "hide-footer": "",
      size: "lg"
    },
    on: {
      hidden: function hidden($event) {
        _vm.previewPhoto = null;
      }
    }
  }, [_c("img", {
    staticClass: "img-fluid",
    attrs: {
      src: _vm.previewPhoto.url
    }
  })]) : _vm._e()], 1)]), _vm._v(" "), _c("b-tab", {
    attrs: {
      title: _vm.$t("Payments") || "Payments",
      disabled: !_vm.isEdit
    }
  }, [!_vm.isEdit ? _c("div", {
    staticClass: "text-muted text-center py-4"
  }, [_vm._v("\n                " + _vm._s(_vm.$t("Save_job_first_to_record_payments") || "Save the job first to record payments.") + "\n              ")]) : _c("div", [_c("b-row", {
    staticClass: "pay-stats mb-4"
  }, [_c("b-col", {
    staticClass: "mb-2",
    attrs: {
      md: "4"
    }
  }, [_c("div", {
    staticClass: "pay-stat pay-stat--total"
  }, [_c("div", {
    staticClass: "pay-stat__icon"
  }, [_c("lucide-icon", {
    attrs: {
      name: "receipt"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "pay-stat__body"
  }, [_c("div", {
    staticClass: "pay-stat__label"
  }, [_vm._v(_vm._s(_vm.$t("Total")))]), _vm._v(" "), _c("div", {
    staticClass: "pay-stat__value"
  }, [_vm._v(_vm._s(_vm.currencySymbol) + _vm._s(_vm.formatNumber(_vm.totals.total_amount)))])])])]), _vm._v(" "), _c("b-col", {
    staticClass: "mb-2",
    attrs: {
      md: "4"
    }
  }, [_c("div", {
    staticClass: "pay-stat pay-stat--paid"
  }, [_c("div", {
    staticClass: "pay-stat__icon"
  }, [_c("lucide-icon", {
    attrs: {
      name: "check-circle"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "pay-stat__body"
  }, [_c("div", {
    staticClass: "pay-stat__label"
  }, [_vm._v(_vm._s(_vm.$t("Paid")))]), _vm._v(" "), _c("div", {
    staticClass: "pay-stat__value"
  }, [_vm._v(_vm._s(_vm.currencySymbol) + _vm._s(_vm.formatNumber(_vm.totals.paid_amount)))]), _vm._v(" "), _c("div", {
    staticClass: "pay-stat__sub"
  }, [_c("div", {
    staticClass: "pay-progress"
  }, [_c("div", {
    staticClass: "pay-progress__bar",
    style: {
      width: _vm.paidPercent + "%"
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "pay-progress__label"
  }, [_vm._v(_vm._s(_vm.paidPercent) + "%")])])])])]), _vm._v(" "), _c("b-col", {
    staticClass: "mb-2",
    attrs: {
      md: "4"
    }
  }, [_c("div", {
    staticClass: "pay-stat",
    "class": _vm.totals.balance_due > 0 ? "pay-stat--due" : "pay-stat--settled"
  }, [_c("div", {
    staticClass: "pay-stat__icon"
  }, [_c("lucide-icon", {
    attrs: {
      name: _vm.totals.balance_due > 0 ? "alert-circle" : "check"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "pay-stat__body"
  }, [_c("div", {
    staticClass: "pay-stat__label"
  }, [_vm._v(_vm._s(_vm.$t("Balance_Due") || "Balance Due"))]), _vm._v(" "), _c("div", {
    staticClass: "pay-stat__value"
  }, [_vm._v(_vm._s(_vm.currencySymbol) + _vm._s(_vm.formatNumber(_vm.totals.balance_due)))])])])])], 1), _vm._v(" "), _c("div", {
    staticClass: "pay-card"
  }, [_c("div", {
    staticClass: "pay-card__head"
  }, [_c("div", {
    staticClass: "pay-card__title"
  }, [_c("lucide-icon", {
    attrs: {
      name: "credit-card"
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Payments") || "Payments"))]), _vm._v(" "), _c("b-badge", {
    staticClass: "pay-card__count",
    attrs: {
      variant: "light"
    }
  }, [_vm._v(_vm._s(_vm.payments.length))])], 1), _vm._v(" "), _c("b-button", {
    staticClass: "pay-add-btn",
    attrs: {
      size: "sm",
      variant: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.openPaymentModal();
      }
    }
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "plus"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Add_Payment") || "Add Payment") + "\n                    ")], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "pay-table-wrap"
  }, [_c("table", {
    staticClass: "table pay-table mb-0"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.$t("Reference")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.$t("Date")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.$t("Kind") || "Kind"))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.$t("Method") || "Method"))]), _vm._v(" "), _c("th", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t("Amount") || "Amount"))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.$t("Notes")))]), _vm._v(" "), _c("th", {
    staticClass: "text-center",
    staticStyle: {
      width: "100px"
    }
  }, [_vm._v(_vm._s(_vm.$t("Actions") || ""))])])]), _vm._v(" "), _c("tbody", [_vm.payments.length === 0 ? _c("tr", [_c("td", {
    staticClass: "pay-empty",
    attrs: {
      colspan: "7"
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "inbox"
    }
  }), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.$t("No_payments_yet") || "No payments yet"))]), _vm._v(" "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Click_Add_Payment_to_record_one") || "Click “Add Payment” to record one."))])], 1)]) : _vm._e(), _vm._v(" "), _vm._l(_vm.payments, function (p) {
    return _c("tr", {
      key: p.id,
      staticClass: "pay-row"
    }, [_c("td", [_c("span", {
      staticClass: "pay-ref"
    }, [_vm._v(_vm._s(p.Ref))])]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "pay-date"
    }, [_c("lucide-icon", {
      attrs: {
        name: "calendar"
      }
    }), _vm._v(" "), _c("span", [_vm._v(_vm._s(p.date))])], 1)]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "pay-kind",
      "class": "pay-kind--" + (p.payment_kind || "payment")
    }, [_c("lucide-icon", {
      attrs: {
        name: _vm.kindIcon(p.payment_kind)
      }
    }), _vm._v("\n                              " + _vm._s(_vm.$t(p.payment_kind) || p.payment_kind) + "\n                            ")], 1)]), _vm._v(" "), _c("td", [p.payment_method ? _c("span", {
      staticClass: "pay-method"
    }, [_vm._v(_vm._s(p.payment_method))]) : _c("span", {
      staticClass: "text-muted"
    }, [_vm._v("—")])]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_c("span", {
      staticClass: "pay-amount",
      "class": p.payment_kind === "refund" ? "text-danger" : "text-dark"
    }, [_vm._v("\n                              " + _vm._s(p.payment_kind === "refund" ? "-" : "") + _vm._s(_vm.currencySymbol) + _vm._s(_vm.formatNumber(p.montant)) + "\n                            ")])]), _vm._v(" "), _c("td", [p.notes ? _c("span", {
      staticClass: "pay-notes",
      attrs: {
        title: p.notes
      }
    }, [_vm._v(_vm._s(p.notes))]) : _c("span", {
      staticClass: "text-muted"
    }, [_vm._v("—")])]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("b-button", {
      staticClass: "pay-action",
      attrs: {
        size: "sm",
        variant: "light",
        title: _vm.$t("Edit")
      },
      on: {
        click: function click($event) {
          return _vm.openPaymentModal(p);
        }
      }
    }, [_c("lucide-icon", {
      attrs: {
        name: "pencil"
      }
    })], 1), _vm._v(" "), _c("b-button", {
      staticClass: "pay-action pay-action--danger ml-1",
      attrs: {
        size: "sm",
        variant: "light",
        title: _vm.$t("Delete")
      },
      on: {
        click: function click($event) {
          return _vm.deletePayment(p);
        }
      }
    }, [_c("lucide-icon", {
      attrs: {
        name: "trash-2"
      }
    })], 1)], 1)]);
  })], 2)])])]), _vm._v(" "), _vm.canMarkDelivered ? _c("hr") : _vm._e(), _vm._v(" "), _vm.canMarkDelivered ? _c("div", {
    staticClass: "text-right"
  }, [_c("b-button", {
    attrs: {
      variant: "success"
    },
    on: {
      click: _vm.markDelivered
    }
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    attrs: {
      name: "check"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Mark_Delivered_Decrement_Stock") || "Mark Delivered (decrements stock + starts warranty)") + "\n                  ")], 1)], 1) : _vm.jobMeta && _vm.jobMeta.status === "delivered" ? _c("div", {
    staticClass: "text-right text-success"
  }, [_c("lucide-icon", {
    attrs: {
      name: "check"
    }
  }), _vm._v("\n                  " + _vm._s(_vm.$t("Delivered_On") || "Delivered on") + " " + _vm._s(_vm.formatDate(_vm.jobMeta.delivered_at)) + "\n                  "), _vm.jobMeta.warranty_expires_at ? _c("span", [_vm._v(" · " + _vm._s(_vm.$t("Warranty_until") || "Warranty until") + " " + _vm._s(_vm.formatDate(_vm.jobMeta.warranty_expires_at)))]) : _vm._e()], 1) : _vm._e()], 1), _vm._v(" "), _c("b-modal", {
    attrs: {
      title: _vm.paymentModalTitle,
      "hide-footer": ""
    },
    model: {
      value: _vm.paymentModalShow,
      callback: function callback($$v) {
        _vm.paymentModalShow = $$v;
      },
      expression: "paymentModalShow"
    }
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submitPayment.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Date") + " *"
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "date",
      required: ""
    },
    model: {
      value: _vm.paymentForm.date,
      callback: function callback($$v) {
        _vm.$set(_vm.paymentForm, "date", $$v);
      },
      expression: "paymentForm.date"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Amount") + " *"
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "number",
      step: "0.01",
      min: "0.01",
      required: ""
    },
    model: {
      value: _vm.paymentForm.montant,
      callback: function callback($$v) {
        _vm.$set(_vm.paymentForm, "montant", _vm._n($$v));
      },
      expression: "paymentForm.montant"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Payment_Kind") || "Kind"
    }
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.paymentKindOptions
    },
    model: {
      value: _vm.paymentForm.payment_kind,
      callback: function callback($$v) {
        _vm.$set(_vm.paymentForm, "payment_kind", $$v);
      },
      expression: "paymentForm.payment_kind"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Payment_Method") || "Method"
    }
  }, [_c("v-select", {
    attrs: {
      reduce: function reduce(m) {
        return m.id;
      },
      options: _vm.paymentMethods,
      label: "name",
      placeholder: _vm.$t("Choose_Payment_Method")
    },
    model: {
      value: _vm.paymentForm.payment_method_id,
      callback: function callback($$v) {
        _vm.$set(_vm.paymentForm, "payment_method_id", $$v);
      },
      expression: "paymentForm.payment_method_id"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Notes")
    }
  }, [_c("b-form-textarea", {
    attrs: {
      rows: "2"
    },
    model: {
      value: _vm.paymentForm.notes,
      callback: function callback($$v) {
        _vm.$set(_vm.paymentForm, "notes", $$v);
      },
      expression: "paymentForm.notes"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "text-right"
  }, [_c("b-button", {
    staticClass: "mr-2",
    attrs: {
      variant: "secondary"
    },
    on: {
      click: function click($event) {
        _vm.paymentModalShow = false;
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("Cancel")))]), _vm._v(" "), _c("b-button", {
    attrs: {
      type: "submit",
      variant: "primary",
      disabled: _vm.paymentSaving
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.paymentSaving ? _vm.$t("Saving") || "Saving..." : _vm.$t("Save") || "Save") + "\n                    ")])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-4 text-right"
  }, [_c("b-button", {
    staticClass: "mr-2",
    attrs: {
      variant: "secondary"
    },
    on: {
      click: function click($event) {
        return _vm.$router.back();
      }
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Cancel")) + "\n            ")]), _vm._v(" "), _c("b-button", {
    attrs: {
      variant: "primary",
      type: "submit",
      disabled: _vm.SubmitProcessing
    }
  }, [_vm._v("\n              " + _vm._s(_vm.SubmitProcessing ? _vm.$t("Saving") || "Saving..." : _vm.$t("Save")) + "\n            ")])], 1)], 1)], 1)], 1)])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceJobForm.vue?vue&type=style&index=0&id=01a72a83&scoped=true&lang=css"
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceJobForm.vue?vue&type=style&index=0&id=01a72a83&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.repair-summary[data-v-01a72a83] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 12px 16px;\n  background: #f6f8fb;\n  border-radius: 6px;\n}\n.rs-block[data-v-01a72a83] { min-width: 130px;\n}\n.rs-label[data-v-01a72a83] { font-size: 11px; text-transform: uppercase; color: #6b7280; letter-spacing: .04em;\n}\n.rs-value[data-v-01a72a83] { font-size: 16px; font-weight: 600;\n}\n.quote-status-box[data-v-01a72a83] {\n  background: #fafbfc;\n  border: 1px dashed #d8dde3;\n  border-radius: 6px;\n  padding: 12px;\n}\n.repair-items-table th[data-v-01a72a83] { font-size: 12px; text-transform: uppercase;\n}\n.repair-items-table tfoot td[data-v-01a72a83] { background: #fafbfc;\n}\n.photo-grid[data-v-01a72a83] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 12px;\n}\n.photo-tile[data-v-01a72a83] {\n  border: 1px solid #e7eaee;\n  border-radius: 6px;\n  padding: 6px;\n  background: #fff;\n}\n.photo-tile img[data-v-01a72a83] {\n  width: 100%;\n  height: 140px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  cursor: zoom-in;\n  border-radius: 4px;\n}\n.photo-meta[data-v-01a72a83] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 6px;\n}\n.back-btn[data-v-01a72a83] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  color: #475569;\n  font-weight: 500;\n  border-radius: 8px;\n  padding: 7px 14px;\n  transition: all .15s ease;\n}\n.back-btn[data-v-01a72a83]:hover {\n  background: #f1f5f9;\n  color: #6366f1;\n  border-color: #c7d2fe;\n}\n.back-btn svg[data-v-01a72a83] { width: 16px; height: 16px;\n}\n\n/* ===== Payments tab ===== */\n.pay-stats[data-v-01a72a83] { margin: 0 -8px;\n}\n.pay-stats > [class*=\"col-\"][data-v-01a72a83] { padding: 0 8px;\n}\n.pay-stat[data-v-01a72a83] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 18px;\n  background: #fff;\n  border: 1px solid #eef0f4;\n  border-radius: 10px;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n}\n.pay-stat[data-v-01a72a83]::before {\n  content: '';\n  position: absolute;\n  inset: 0 auto 0 0;\n  width: 4px;\n  background: #cbd5e1;\n}\n.pay-stat--total[data-v-01a72a83]::before { background: linear-gradient(180deg, #6366f1, #8b5cf6);\n}\n.pay-stat--paid[data-v-01a72a83]::before { background: linear-gradient(180deg, #10b981, #059669);\n}\n.pay-stat--due[data-v-01a72a83]::before { background: linear-gradient(180deg, #ef4444, #dc2626);\n}\n.pay-stat--settled[data-v-01a72a83]::before { background: linear-gradient(180deg, #10b981, #059669);\n}\n.pay-stat__icon[data-v-01a72a83] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 44px;\n  background: #f1f5f9;\n  color: #475569;\n}\n.pay-stat--total .pay-stat__icon[data-v-01a72a83] { background: #eef2ff; color: #6366f1;\n}\n.pay-stat--paid .pay-stat__icon[data-v-01a72a83] { background: #ecfdf5; color: #059669;\n}\n.pay-stat--due .pay-stat__icon[data-v-01a72a83] { background: #fef2f2; color: #dc2626;\n}\n.pay-stat--settled .pay-stat__icon[data-v-01a72a83] { background: #ecfdf5; color: #059669;\n}\n.pay-stat__body[data-v-01a72a83] { flex: 1; min-width: 0;\n}\n.pay-stat__label[data-v-01a72a83] {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: .06em;\n  color: #6b7280;\n  font-weight: 600;\n}\n.pay-stat__value[data-v-01a72a83] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-top: 2px;\n  line-height: 1.2;\n}\n.pay-stat__sub[data-v-01a72a83] {\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pay-progress[data-v-01a72a83] {\n  flex: 1;\n  height: 6px;\n  background: #e5e7eb;\n  border-radius: 999px;\n  overflow: hidden;\n}\n.pay-progress__bar[data-v-01a72a83] {\n  height: 100%;\n  background: linear-gradient(90deg, #34d399, #10b981);\n  transition: width .3s ease;\n}\n.pay-progress__label[data-v-01a72a83] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #059669;\n  min-width: 32px;\n  text-align: right;\n}\n.pay-card[data-v-01a72a83] {\n  background: #fff;\n  border: 1px solid #eef0f4;\n  border-radius: 10px;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n  overflow: hidden;\n}\n.pay-card__head[data-v-01a72a83] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  background: linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%);\n  border-bottom: 1px solid #eef0f4;\n}\n.pay-card__title[data-v-01a72a83] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #0f172a;\n}\n.pay-card__title svg[data-v-01a72a83] { color: #6366f1;\n}\n.pay-card__count[data-v-01a72a83] {\n  margin-left: 4px;\n  background: #fff !important;\n  color: #475569 !important;\n  border: 1px solid #e2e8f0;\n  font-weight: 600;\n}\n.pay-add-btn[data-v-01a72a83] {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 8px;\n  font-weight: 500;\n  padding: 6px 14px;\n}\n.pay-table-wrap[data-v-01a72a83] { overflow-x: auto;\n}\n.pay-table[data-v-01a72a83] { margin: 0;\n}\n.pay-table thead th[data-v-01a72a83] {\n  background: #fafbfc;\n  border-top: none;\n  border-bottom: 1px solid #eef0f4;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: .05em;\n  color: #64748b;\n  font-weight: 600;\n  padding: 12px 14px;\n}\n.pay-table tbody td[data-v-01a72a83] {\n  padding: 14px;\n  border-top: 1px solid #f1f5f9;\n  vertical-align: middle;\n  font-size: 13.5px;\n  color: #1f2937;\n}\n.pay-table .pay-row[data-v-01a72a83] { transition: background .15s ease;\n}\n.pay-table .pay-row[data-v-01a72a83]:hover { background: #fafbff;\n}\n.pay-ref[data-v-01a72a83] {\n  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;\n  font-size: 12.5px;\n  background: #f1f5f9;\n  color: #475569;\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-weight: 500;\n}\n.pay-date[data-v-01a72a83] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: #475569;\n}\n.pay-date svg[data-v-01a72a83] { width: 14px; height: 14px; color: #94a3b8;\n}\n.pay-kind[data-v-01a72a83] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1px solid transparent;\n}\n.pay-kind svg[data-v-01a72a83] { width: 14px; height: 14px;\n}\n.pay-kind--payment[data-v-01a72a83] { background: #ecfdf5; color: #059669; border-color: #a7f3d0;\n}\n.pay-kind--deposit[data-v-01a72a83] { background: #fffbeb; color: #b45309; border-color: #fde68a;\n}\n.pay-kind--refund[data-v-01a72a83] { background: #fef2f2; color: #dc2626; border-color: #fecaca;\n}\n.pay-method[data-v-01a72a83] {\n  display: inline-block;\n  padding: 4px 10px;\n  background: #eef2ff;\n  color: #4338ca;\n  border-radius: 6px;\n  font-size: 12.5px;\n  font-weight: 500;\n}\n.pay-amount[data-v-01a72a83] {\n  font-weight: 700;\n  font-size: 14px;\n  font-variant-numeric: tabular-nums;\n}\n.pay-notes[data-v-01a72a83] {\n  display: inline-block;\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  vertical-align: middle;\n  color: #64748b;\n}\n.pay-action[data-v-01a72a83] {\n  background: #f1f5f9 !important;\n  border: none !important;\n  color: #475569 !important;\n  border-radius: 6px;\n  padding: 6px 8px;\n  transition: all .15s ease;\n}\n.pay-action[data-v-01a72a83]:hover { background: #6366f1 !important; color: #fff !important;\n}\n.pay-action--danger[data-v-01a72a83]:hover { background: #ef4444 !important; color: #fff !important;\n}\n.pay-action svg[data-v-01a72a83] { width: 14px; height: 14px;\n}\n.pay-empty[data-v-01a72a83] {\n  text-align: center;\n  padding: 48px 16px !important;\n  color: #94a3b8;\n  background: #fafbfc;\n}\n.pay-empty svg[data-v-01a72a83] {\n  width: 40px;\n  height: 40px;\n  color: #cbd5e1;\n  margin-bottom: 8px;\n}\n.pay-empty div[data-v-01a72a83] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #64748b;\n  margin-bottom: 4px;\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceJobForm.vue?vue&type=style&index=0&id=01a72a83&scoped=true&lang=css"
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceJobForm.vue?vue&type=style&index=0&id=01a72a83&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceJobForm_vue_vue_type_style_index_0_id_01a72a83_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ServiceJobForm.vue?vue&type=style&index=0&id=01a72a83&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceJobForm.vue?vue&type=style&index=0&id=01a72a83&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceJobForm_vue_vue_type_style_index_0_id_01a72a83_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceJobForm_vue_vue_type_style_index_0_id_01a72a83_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/views/app/pages/service/ServiceJobForm.vue"
/*!******************************************************************!*\
  !*** ./resources/src/views/app/pages/service/ServiceJobForm.vue ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ServiceJobForm_vue_vue_type_template_id_01a72a83_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceJobForm.vue?vue&type=template&id=01a72a83&scoped=true */ "./resources/src/views/app/pages/service/ServiceJobForm.vue?vue&type=template&id=01a72a83&scoped=true");
/* harmony import */ var _ServiceJobForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServiceJobForm.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/service/ServiceJobForm.vue?vue&type=script&lang=js");
/* harmony import */ var _ServiceJobForm_vue_vue_type_style_index_0_id_01a72a83_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ServiceJobForm.vue?vue&type=style&index=0&id=01a72a83&scoped=true&lang=css */ "./resources/src/views/app/pages/service/ServiceJobForm.vue?vue&type=style&index=0&id=01a72a83&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ServiceJobForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ServiceJobForm_vue_vue_type_template_id_01a72a83_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ServiceJobForm_vue_vue_type_template_id_01a72a83_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "01a72a83",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/service/ServiceJobForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/service/ServiceJobForm.vue?vue&type=script&lang=js"
/*!******************************************************************************************!*\
  !*** ./resources/src/views/app/pages/service/ServiceJobForm.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceJobForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ServiceJobForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceJobForm.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceJobForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/service/ServiceJobForm.vue?vue&type=template&id=01a72a83&scoped=true"
/*!************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/service/ServiceJobForm.vue?vue&type=template&id=01a72a83&scoped=true ***!
  \************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceJobForm_vue_vue_type_template_id_01a72a83_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceJobForm_vue_vue_type_template_id_01a72a83_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceJobForm_vue_vue_type_template_id_01a72a83_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ServiceJobForm.vue?vue&type=template&id=01a72a83&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceJobForm.vue?vue&type=template&id=01a72a83&scoped=true");


/***/ },

/***/ "./resources/src/views/app/pages/service/ServiceJobForm.vue?vue&type=style&index=0&id=01a72a83&scoped=true&lang=css"
/*!**************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/service/ServiceJobForm.vue?vue&type=style&index=0&id=01a72a83&scoped=true&lang=css ***!
  \**************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceJobForm_vue_vue_type_style_index_0_id_01a72a83_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ServiceJobForm.vue?vue&type=style&index=0&id=01a72a83&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceJobForm.vue?vue&type=style&index=0&id=01a72a83&scoped=true&lang=css");


/***/ }

}]);