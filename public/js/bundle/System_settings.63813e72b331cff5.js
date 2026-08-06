(self["webpackChunk"] = self["webpackChunk"] || []).push([["System_settings"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js"
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _utils_priceFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/priceFormat */ "./resources/src/utils/priceFormat.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mixins_posKeyboardShortcuts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../mixins/posKeyboardShortcuts */ "./resources/src/mixins/posKeyboardShortcuts.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_3___default())
  },
  metaInfo: {
    title: "System Settings"
  },
  data: function data() {
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      activeTab: 'general',
      isLoading: true,
      data: new FormData(),
      settings: [],
      currencies: [],
      clients: [],
      warehouses: [],
      sms_gateway: [],
      accounts: [],
      payment_methods: [],
      zones_array: [],
      languages: [],
      sidebarLayoutOptions: [{
        value: 'horizontal',
        text: 'Sidebar 1'
      }, {
        value: 'vertical',
        text: 'Sidebar 2'
      }],
      dateFormatOptions: [{
        label: 'DD/MM/YYYY',
        value: 'DD/MM/YYYY'
      }, {
        label: 'MM/DD/YYYY',
        value: 'MM/DD/YYYY'
      }, {
        label: 'YYYY-MM-DD',
        value: 'YYYY-MM-DD'
      }],
      dashboardDateRangeOptions: [{
        value: 'today',
        text: 'Today'
      }, {
        value: 'week',
        text: 'This Week'
      }, {
        value: 'month',
        text: 'This Month'
      }],
      dashboardFontSizeOptions: [{
        value: '',
        text: 'Default'
      }, {
        value: '12',
        text: '12px (Small)'
      }, {
        value: '14',
        text: '14px (Medium)'
      }, {
        value: '16',
        text: '16px (Large)'
      }, {
        value: '18',
        text: '18px (Extra large)'
      }],
      dashboardFontFamilyOptions: [{
        value: '',
        text: 'System default'
      }, {
        value: 'inherit',
        text: 'Inherit'
      }, {
        value: 'Arial, sans-serif',
        text: 'Arial'
      }, {
        value: 'Georgia, serif',
        text: 'Georgia'
      }, {
        value: '"Times New Roman", Times, serif',
        text: 'Times New Roman'
      }, {
        value: 'Verdana, Geneva, sans-serif',
        text: 'Verdana'
      }, {
        value: 'Tahoma, Geneva, sans-serif',
        text: 'Tahoma'
      }, {
        value: '"Segoe UI", Tahoma, sans-serif',
        text: 'Segoe UI'
      }, {
        value: 'system-ui, -apple-system, sans-serif',
        text: 'System UI'
      }],
      defaultDashboardSections: [{
        id: 'header',
        labelKey: 'Dashboard_Header'
      }, {
        id: 'stat_cards_1',
        labelKey: 'Dashboard_Stat_Cards_1'
      }, {
        id: 'stat_cards_2',
        labelKey: 'Dashboard_Stat_Cards_2'
      }, {
        id: 'chart_sales_purchases',
        labelKey: 'Dashboard_Chart_Sales_Purchases'
      }, {
        id: 'chart_top_selling',
        labelKey: 'Dashboard_Chart_Top_Selling'
      }, {
        id: 'sales_by_payment_stock_value',
        labelKey: 'Dashboard_Sales_By_Payment_Stock'
      }, {
        id: 'chart_payment_sent_received',
        labelKey: 'Dashboard_Chart_Payment_Sent_Received'
      }, {
        id: 'chart_top_customers',
        labelKey: 'Dashboard_Chart_Top_Customers'
      }, {
        id: 'table_stock_alert',
        labelKey: 'StockAlert'
      }, {
        id: 'table_top_selling_products',
        labelKey: 'Top_Selling_Products'
      }, {
        id: 'table_recent_sales',
        labelKey: 'Recent_Sales'
      }],
      dashboardSectionOrderList: [],
      // Invoice format options for POS printing
      invoiceFormatOptions: [{
        value: 'thermal',
        textKey: 'Invoice_Thermal'
      }, {
        value: 'a4',
        textKey: 'Invoice_A4'
      }],
      // Price format options for frontend display (POS, etc.)
      priceFormatOptions: [{
        label: "1,234.56 (thousand , decimal .)",
        value: "comma_dot"
      }, {
        label: "1.234,56 (thousand . decimal ,)",
        value: "dot_comma"
      }, {
        label: "1 234,56 (thousand space, decimal ,)",
        value: "space_comma"
      }],
      setting: {
        client_id: "",
        warehouse_id: "",
        default_account_id: "",
        default_payment_method_id: "",
        currency_id: "",
        email: "",
        logo: "",
        CompanyName: "",
        CompanyPhone: "",
        CompanyAdress: "",
        footer: "",
        developed_by: "",
        default_language: "",
        date_format: 'YYYY-MM-DD',
        // Optional price format for frontend display
        price_format: "",
        // When enabled, monetary values use 3 decimal places instead of 2
        enable_3_decimal_pricing: false,
        enable_kitchen_display: false,
        show_product_gtin: true,
        show_serial_tracking: false,
        enable_multi_pack_selling: false,
        sms_gateway: "",
        is_invoice_footer: '',
        invoice_footer: '',
        quotation_with_stock: '',
        show_language: '',
        point_to_amount_rate: '',
        default_tax: 0,
        default_dashboard_date_range: 'week',
        dashboard_section_order: null,
        dashboard_font_size: '',
        dashboard_font_family: '',
        dark_mode: false,
        rtl: false,
        debug_mode: false,
        offline_sync_enabled: true,
        sale_prefix: '',
        purchase_prefix: '',
        quotation_prefix: '',
        adjustment_prefix: '',
        transfer_prefix: '',
        sale_return_prefix: '',
        purchase_return_prefix: '',
        // ZATCA (Fatoorah)
        company_name_ar: '',
        vat_number: '',
        zatca_enabled: false,
        // Invoice format for POS printing ('thermal' or 'a4')
        invoice_format: 'thermal',
        // A4 invoice logo dimensions (pixels)
        invoice_logo_width: 180,
        invoice_logo_height: 60,
        // Security: inactivity auto-logout (minutes) - null means disabled
        session_timeout_minutes: null,
        // Optional cloud backup destination (local backup remains default)
        backup_cloud_enabled: false,
        backup_cloud_provider: null,
        backup_cloud_path: "",
        // S3-compatible
        backup_s3_bucket: "",
        backup_s3_region: "",
        backup_s3_access_key: "",
        backup_s3_secret_key: "",
        backup_s3_endpoint: "",
        backup_s3_path_style: false,
        // Google Drive
        backup_gdrive_folder_id: "",
        backup_gdrive_access_token: "",
        backup_gdrive_refresh_token: "",
        backup_gdrive_client_id: "",
        backup_gdrive_client_secret: "",
        // Dropbox
        backup_dropbox_path: "",
        backup_dropbox_access_token: "",
        // Flags (populated by API) to show if secrets are already saved (but hidden)
        backup_s3_has_secret_key: false,
        backup_gdrive_has_access_token: false,
        backup_gdrive_has_refresh_token: false,
        backup_gdrive_has_client_secret: false,
        backup_dropbox_has_access_token: false,
        // Pharmacy mode (batch & expiry tracking)
        pharmacy_mode_supported: true,
        pharmacy_mode: false,
        expiry_warning_days: 90,
        block_expired_sale: false,
        print_expiry_on_receipt: false,
        // Jewelry mode (gold / jewelry retail settings)
        jewelry_mode_supported: true,
        jewelry_mode: false,
        default_making_charge_type: "",
        default_making_charge_value: "",
        default_wastage_type: "",
        default_wastage_value: "",
        gold_rate_requires_approval: false,
        gold_rate_branch_override_enabled: true
      },
      // Custom Fields data
      customFieldsActiveTab: 0,
      customerFields: [],
      supplierFields: [],
      customFieldEditmode: false,
      customFieldSubmitProcessing: false,
      customField: {
        id: "",
        name: "",
        field_type: "",
        entity_type: "",
        is_required: false,
        default_value: "",
        sort_order: 0
      },
      calendarForm: {
        google_calendar_connected: false,
        google_calendar_connect_url: "",
        google_calendar_disconnect_url: "",
        google_calendar_client_id: "",
        google_calendar_client_secret: "",
        google_calendar_client_secret_set: false,
        google_calendar_redirect_uri: "",
        google_calendar_calendar_id: ""
      },
      calendarSaving: false,
      selectOptionsText: "",
      gateway: {
        stripe_key: "",
        stripe_secret: "",
        deleted: false
      },
      pos_settings: {
        note_customer: "",
        show_logo: "",
        logo_size: 60,
        show_store_name: "",
        show_reference: "",
        show_date: "",
        show_seller: "",
        show_note: "",
        show_barcode: "",
        show_discount: "",
        show_product_discount: 1,
        show_tax: 0,
        show_shipping: 0,
        show_phone: "",
        show_email: "",
        show_address: "",
        show_customer: "",
        show_Warehouse: "",
        is_printable: '',
        products_per_page: '',
        quick_add_customer: false,
        barcode_scanning_sound: false,
        show_product_images: false,
        show_stock_quantity: false,
        enable_hold_sales: false,
        enable_customer_points: false,
        show_categories: false,
        show_brands: false,
        allow_overselling: false,
        show_gold_rate_on_pos: false,
        allow_jewelry_price_override: false,
        jewelry_override_approval_threshold: "",
        receipt_layout: 1,
        show_paid: "",
        show_due: "",
        show_payments: "",
        show_zatca_qr: "",
        receipt_paper_size: 80,
        cash_drawer_auto_open: false,
        cash_drawer_printer_name: "",
        direct_network_printing: false,
        network_printer_ip: "",
        network_printer_port: 9100
      },
      enable_keyboard_shortcuts: false,
      logoSizeType: 'medium',
      // Track the selected logo size type
      sms_settings: {
        sms_gateway: [],
        default_sms_gateway: '',
        twilio: {
          TWILIO_SID: '',
          TWILIO_TOKEN: '',
          TWILIO_FROM: ''
        },
        termi: {
          TERMI_KEY: '',
          TERMI_SECRET: '',
          TERMI_SENDER: ''
        },
        infobip: {
          base_url: '',
          api_key: '',
          sender_from: ''
        },
        custom: {
          api_url: '',
          method: 'POST',
          content_type: 'json',
          sender: '',
          success_keyword: '',
          headers: {},
          payload: {}
        },
        customHeaderRows: [],
        customPayloadRows: []
      },
      appearance_settings: {
        logo: "",
        favicon: "",
        footer: "",
        app_name: "",
        page_title_suffix: "",
        developed_by: "",
        customize_button_visible: true,
        hide_site_name: false,
        login_hero_title: "",
        login_hero_subtitle: "",
        login_panel_title: "",
        login_panel_subtitle: ""
      },
      appearance_data: new FormData(),
      pwa_settings: {
        id: null,
        icon_192: "",
        icon_512: "",
        icon_192_url: "",
        icon_512_url: "",
        icon_192_exists: false,
        icon_512_exists: false
      },
      pwaSubmitting: false,
      mail_settings: {
        host: "",
        port: "",
        username: "",
        password: "",
        encryption: "",
        sender_name: "",
        sender_email: "",
        mail_mailer: ""
      },
      isTestingMail: false,
      backups: [],
      backupError: null,
      totalRows: 0,
      // Security tab
      securitySessions: [],
      securitySessionsLoading: false,
      securitySessionsActionLoading: false,
      sessionTimeoutCustom: null
    }, "customFieldsActiveTab", 0), "customerFields", []), "supplierFields", []), "customFieldsTableKey", 0), "customFieldEditmode", false), "customFieldSubmitProcessing", false), "customField", {
      id: "",
      name: "",
      field_type: "",
      entity_type: "",
      is_required: false,
      default_value: "",
      sort_order: 0
    }), "selectOptionsText", "");
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)("config", ["getThemeMode"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["currentUser", "getSidebarLayout", "getSideBarToggleProperties"])), {}, {
    isJewelryTenant: function isJewelryTenant() {
      if (typeof window === 'undefined' || !window.location) return false;
      var host = String(window.location.hostname || '').toLowerCase();
      return host.split('.')[0] === 'jewelry';
    },
    showKitchenDisplaySettings: function showKitchenDisplaySettings() {
      return !this.isJewelryTenant;
    },
    showPharmacySettings: function showPharmacySettings() {
      return !this.isJewelryTenant;
    },
    // List of POS keyboard shortcuts shown in the help modal
    posShortcutsList: function posShortcutsList() {
      return _mixins_posKeyboardShortcuts__WEBPACK_IMPORTED_MODULE_4__.POS_SHORTCUTS;
    },
    // Check if sidebar is open on mobile (for large sidebar layout)
    isSidebarOpenOnMobile: function isSidebarOpenOnMobile() {
      if (this.getSidebarLayout === 'vertical') {
        // For vertical sidebar, check if mobile sidebar is open
        return false; // Vertical sidebar uses different mechanism, adjust if needed
      }
      // For large sidebar layout, check if either sidebar is open
      var props = this.getSideBarToggleProperties;
      return props && (props.isSideNavOpen || props.isSecondarySideNavOpen);
    },
    // Backup destination selector (simple UI):
    // - local => no cloud upload, keep local
    // - cloud => upload to cloud, delete local after successful upload
    // - both  => upload to cloud, keep local
    jewelryMakingChargeOptions: function jewelryMakingChargeOptions() {
      return [{
        value: 'fixed',
        text: 'Fixed'
      }, {
        value: 'per_gram',
        text: 'Per Gram'
      }, {
        value: 'percentage',
        text: 'Percentage'
      }, {
        value: 'manual',
        text: 'Manual'
      }];
    },
    jewelryWastageOptions: function jewelryWastageOptions() {
      return [{
        value: 'percentage_of_weight',
        text: 'Percentage of Weight'
      }, {
        value: 'percentage_of_value',
        text: 'Percentage of Value'
      }, {
        value: 'fixed_value',
        text: 'Fixed Value'
      }];
    },
    backupDestination: {
      get: function get() {
        var cloudRaw = this.setting ? this.setting.backup_cloud_enabled : false;
        var cloud = cloudRaw === true || cloudRaw === 1 || cloudRaw === '1' || cloudRaw === 'true';
        return cloud ? 'cloud' : 'local';
      },
      set: function set(v) {
        if (!this.setting) return;
        this.setting.backup_cloud_enabled = v === 'cloud';
      }
    },
    // Sidebar layout (same source as the app customizer; persists via Vuex->localStorage)
    sidebarLayoutModel: {
      get: function get() {
        return this.getSidebarLayout || 'vertical';
      },
      set: function set(layout) {
        try {
          this.setSidebarLayout(layout);
        } catch (e) {}
      }
    },
    // Normalize POS receipt layout selection (1, 2, 3, 4, or 5) for demo preview
    currentReceiptLayout: function currentReceiptLayout() {
      var raw = this.pos_settings && this.pos_settings.receipt_layout != null ? this.pos_settings.receipt_layout : 1;
      var n = Number(raw) || 1;
      return [1, 2, 3, 4, 5].includes(n) ? n : 1;
    },
    // Security: map stored minutes <-> UI dropdown
    sessionTimeoutPreset: {
      get: function get() {
        var v = this.setting ? this.setting.session_timeout_minutes : null;
        var n = v === '' || v === null || typeof v === 'undefined' ? null : Number(v);
        if (!n || isNaN(n) || n < 1) return 'disabled';
        if ([15, 30, 60].includes(n)) return String(n);
        return 'custom';
      },
      set: function set(v) {
        if (!this.setting) return;
        if (v === 'disabled') {
          this.setting.session_timeout_minutes = null;
          return;
        }
        if (v === 'custom') {
          if (!this.sessionTimeoutCustom) {
            var current = Number(this.setting.session_timeout_minutes);
            this.sessionTimeoutCustom = !isNaN(current) && current > 0 ? current : 15;
          }
          this.setting.session_timeout_minutes = Number(this.sessionTimeoutCustom) || 15;
          return;
        }
        this.setting.session_timeout_minutes = Number(v);
      }
    },
    hasOtherSessions: function hasOtherSessions() {
      return (this.securitySessions || []).some(function (s) {
        return !s.is_current;
      });
    },
    securitySessionFields: function securitySessionFields() {
      return [{
        key: 'device',
        label: 'Device / Browser',
        tdClass: 'text-left',
        thClass: 'text-left'
      }, {
        key: 'ip_address',
        label: 'IP Address',
        tdClass: 'text-left',
        thClass: 'text-left'
      }, {
        key: 'login_at',
        label: 'Login date & time',
        tdClass: 'text-left',
        thClass: 'text-left'
      }, {
        key: 'last_activity_at',
        label: 'Last activity',
        tdClass: 'text-left',
        thClass: 'text-left'
      }, {
        key: 'actions',
        label: 'Action',
        tdClass: 'text-right',
        thClass: 'text-right'
      }];
    },
    backupColumns: function backupColumns() {
      return [{
        label: this.$t("date"),
        field: "date",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Filesize"),
        field: "size",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Action"),
        field: "actions",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }];
    },
    tabs: function tabs() {
      var _this = this;
      // Base tabs definition (kept for compatibility)
      var baseTabs = [{
        id: 'general',
        label: this.$t('General'),
        icon: 'settings',
        description: 'Company information and basic settings'
      }, {
        id: 'appearance',
        label: this.$t('Appearance_Settings'),
        icon: 'paintbrush',
        description: 'App branding, logos, and login page customization'
      }, {
        id: 'pwa',
        label: this.$t('PWA_Settings') || 'PWA Settings',
        icon: 'smartphone',
        description: this.$t('PWA_Settings_Help') || 'Manage the icons used when installing the app on a device.'
      }, {
        id: 'localization',
        label: this.$t('Localization'),
        icon: 'globe',
        description: 'Language, currency, and timezone settings'
      }, {
        id: 'features',
        label: this.$t('Feature_Toggles') || 'Feature Toggles',
        icon: 'toggle-right',
        description: this.$t('Feature_Toggles_Help') || 'Enable or disable optional modules and features.'
      }, {
        id: 'defaults',
        label: this.$t('Defaults'),
        icon: 'database-zap',
        description: 'Default customer, warehouse, and gateway settings'
      }, {
        id: 'dashboard',
        label: this.$t('Dashboard_Settings') || 'Dashboard Settings',
        icon: 'bar-chart',
        description: 'Choose your preferred dashboard layout and template'
      }, {
        id: 'tax',
        label: this.$t('Tax_Pricing'),
        icon: 'banknote',
        description: 'Tax rates and pricing configurations'
      }, {
        id: 'prefixes',
        label: this.$t('Prefixes'),
        icon: 'tag',
        description: 'Manage prefixes for sales and purchases reference numbers'
      }, {
        id: 'payment',
        label: this.$t('Payment_Gateway'),
        icon: 'credit-card',
        description: 'Stripe payment gateway configuration'
      }, {
        id: 'mail',
        label: this.$t('mail_settings'),
        icon: 'mail',
        description: 'SMTP mail server configuration'
      }, {
        id: 'sms',
        label: this.$t('sms_settings'),
        icon: 'message-square',
        description: 'SMS gateway and provider configurations'
      }, {
        id: 'pos',
        label: this.$t('POS_Receipt'),
        icon: 'calculator',
        description: 'POS receipt configuration'
      }, {
        id: 'pos_settings',
        label: this.$t('Pos_Settings'),
        icon: 'database-zap',
        description: 'POS functionality and display settings'
      }, {
        id: 'cash_drawer',
        label: this.$t('Cash_drawer'),
        icon: 'calculator',
        description: this.$t('Cash_Drawer_Auto_Open_Help')
      }, {
        id: 'direct_network_printing',
        label: this.$t('Direct_Network_Printing') || 'Direct Network Printing',
        icon: 'printer',
        description: this.$t('Direct_Network_Printing_Help') || 'Send receipts directly to a network printer (RAW / port 9100) without relying on the OS print dialog.'
      }, {
        id: 'zatca',
        label: 'ZATCA',
        icon: 'clipboard-list',
        description: 'ZATCA (Fatoorah) integration settings'
      }, {
        id: 'invoice',
        label: this.$t('Invoice'),
        icon: 'receipt',
        description: 'Invoice and quotation settings'
      }, {
        id: 'backup',
        label: this.$t('BackupDatabase'),
        icon: 'database-backup',
        description: 'Database backup and restore management'
      }, {
        id: 'security',
        label: this.$t('Security_Settings'),
        icon: 'shield-check',
        description: 'Session timeout and active login sessions'
      }, {
        id: 'system',
        label: this.$t('System'),
        icon: 'settings',
        description: 'System maintenance and cache management'
      }, {
        id: 'pharmacy',
        label: this.$t('Pharmacy_Settings'),
        icon: 'heart-pulse',
        description: this.$t('Pharmacy_Settings_Help') || 'Enable batch & expiry tracking for pharmacy inventory.'
      }, {
        id: 'jewelry',
        label: this.$t('Jewelry') || 'Jewelry',
        icon: 'tag',
        description: 'Enable jewelry mode, pricing defaults, and gold-rate approval controls.'
      }, {
        id: 'custom_fields',
        label: this.$t('CustomFields') || 'Custom Fields',
        icon: 'database-zap',
        description: 'Manage custom fields for customers and suppliers'
      }];

      // Hide the legacy "Tax & Pricing" tab now that its fields live under "Defaults"
      // and suppress pharmacy-only settings in the Jewelry tenant workspace.
      return baseTabs.filter(function (t) {
        return t.id !== 'tax' && (_this.showPharmacySettings || t.id !== 'pharmacy');
      });
    },
    customFieldsColumns: function customFieldsColumns() {
      return [{
        label: this.$t("FieldName") || "Field Name",
        field: "name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("FieldType") || "Field Type",
        field: "field_type",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Required") || "Required",
        field: "is_required",
        tdClass: "text-center",
        thClass: "text-center"
      }, {
        label: this.$t("Status") || "Status",
        field: "is_active",
        tdClass: "text-center",
        thClass: "text-center"
      }, {
        label: this.$t("Action") || "Action",
        field: "actions",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }];
    },
    fieldTypes: function fieldTypes() {
      return [{
        label: this.$t('Text') || 'Text',
        value: 'text'
      }, {
        label: this.$t('Number') || 'Number',
        value: 'number'
      }, {
        label: this.$t('Textarea') || 'Textarea',
        value: 'textarea'
      }, {
        label: this.$t('Date') || 'Date',
        value: 'date'
      }, {
        label: this.$t('Select') || 'Select',
        value: 'select'
      }, {
        label: this.$t('Checkbox') || 'Checkbox',
        value: 'checkbox'
      }];
    },
    direction: function direction() {
      if (this.$i18n.locale == "ar") {
        return "rtl";
      } else {
        return "ltr";
      }
    }
  }),
  watch: {
    logoSizeType: function logoSizeType(newVal) {
      // Watch for changes to logoSizeType and update logo_size accordingly
      this.onLogoSizeTypeChange(newVal);
    },
    activeTab: function activeTab(val) {
      if (val === 'security') {
        this.LoadSecuritySessions();
      }
      if (val === 'calendar') {
        this.Load_Calendar_Settings();
      }
      if (val === 'custom_fields') {
        this.Get_CustomFields();
      }
      // Persist last active tab for navigation within the same session
      // Note: This is separate from submitted_tab which is used after form submissions
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          window.localStorage.setItem('system_settings_active_tab', val);
        }
      } catch (e) {}
    },
    sessionTimeoutCustom: function sessionTimeoutCustom(val) {
      if (this.sessionTimeoutPreset === 'custom' && this.setting) {
        var n = Number(val);
        this.setting.session_timeout_minutes = !isNaN(n) && n > 0 ? n : 15;
      }
    }
  },
  methods: _objectSpread(_objectSpread({
    // ---------------- Security Settings ----------------
    formatDateTime: function formatDateTime(v) {
      try {
        if (!v) return '';
        var d = new Date(v);
        if (isNaN(d.getTime())) return String(v);
        return d.toLocaleString();
      } catch (e) {
        return String(v || '');
      }
    },
    LoadSecuritySessions: function LoadSecuritySessions() {
      var _this2 = this;
      if (this.securitySessionsLoading) return;
      this.securitySessionsLoading = true;
      axios.get("security/sessions").then(function (response) {
        _this2.securitySessions = response && response.data && response.data.sessions ? response.data.sessions : [];
      })["catch"](function (error) {
        var msg = error && error.response && error.response.data && (error.response.data.message || error.response.data.error) || _this2.$t("Failed");
        _this2.makeToast("danger", msg, _this2.$t("Failed"));
      })["finally"](function () {
        _this2.securitySessionsLoading = false;
      });
    },
    LogoutSession: function LogoutSession(tokenId) {
      var _this3 = this;
      if (!tokenId) return;
      if (this.securitySessionsActionLoading) return;
      this.securitySessionsActionLoading = true;
      axios["delete"]("security/sessions/".concat(encodeURIComponent(tokenId))).then(function () {
        _this3.makeToast("success", "Session logged out successfully.", _this3.$t("Success"));
        _this3.LoadSecuritySessions();
      })["catch"](function (error) {
        var msg = error && error.response && error.response.data && (error.response.data.message || error.response.data.error) || _this3.$t("Failed");
        _this3.makeToast("danger", msg, _this3.$t("Failed"));
      })["finally"](function () {
        _this3.securitySessionsActionLoading = false;
      });
    },
    LogoutAllOtherDevices: function LogoutAllOtherDevices() {
      var _this4 = this;
      if (this.securitySessionsActionLoading) return;
      this.securitySessionsActionLoading = true;
      axios.post("security/sessions/logout-other").then(function (response) {
        var revoked = response && response.data && typeof response.data.revoked !== "undefined" ? response.data.revoked : null;
        var msg = revoked === null ? "Logged out other devices." : "Logged out ".concat(revoked, " other device(s).");
        _this4.makeToast("success", msg, _this4.$t("Success"));
        _this4.LoadSecuritySessions();
      })["catch"](function (error) {
        var msg = error && error.response && error.response.data && (error.response.data.message || error.response.data.error) || _this4.$t("Failed");
        _this4.makeToast("danger", msg, _this4.$t("Failed"));
      })["finally"](function () {
        _this4.securitySessionsActionLoading = false;
      });
    },
    Load_Calendar_Settings: function Load_Calendar_Settings() {
      var _this5 = this;
      axios.get("settings/calendar").then(function (response) {
        var d = response && response.data;
        if (d) {
          _this5.calendarForm.google_calendar_connected = !!d.google_calendar_connected;
          _this5.calendarForm.google_calendar_connect_url = d.google_calendar_connect_url || "";
          _this5.calendarForm.google_calendar_disconnect_url = d.google_calendar_disconnect_url || "";
          _this5.calendarForm.google_calendar_client_id = d.google_calendar_client_id || "";
          _this5.calendarForm.google_calendar_client_secret = "";
          _this5.calendarForm.google_calendar_client_secret_set = !!d.google_calendar_client_secret_set;
          _this5.calendarForm.google_calendar_redirect_uri = d.google_calendar_redirect_uri || "";
          _this5.calendarForm.google_calendar_calendar_id = d.google_calendar_calendar_id || "";
        }
      })["catch"](function () {
        _this5.makeToast("danger", _this5.$t("Failed") || "Failed", _this5.$t("Failed"));
      });
    },
    Submit_Calendar_Settings: function Submit_Calendar_Settings() {
      var _this6 = this;
      if (this.calendarSaving) return;
      this.calendarSaving = true;
      axios.patch("settings/calendar", {
        google_calendar_client_id: this.calendarForm.google_calendar_client_id || null,
        google_calendar_client_secret: this.calendarForm.google_calendar_client_secret || null,
        google_calendar_redirect_uri: this.calendarForm.google_calendar_redirect_uri || null,
        google_calendar_calendar_id: this.calendarForm.google_calendar_calendar_id || null
      }).then(function () {
        _this6.makeToast("success", _this6.$t("Success") || "Saved", _this6.$t("Success"));
      })["catch"](function (error) {
        var msg = error && error.response && error.response.data && (error.response.data.message || error.response.data.errors) || _this6.$t("Failed");
        _this6.makeToast("danger", _typeof(msg) === "object" ? JSON.stringify(msg) : msg, _this6.$t("Failed"));
      })["finally"](function () {
        _this6.calendarSaving = false;
      });
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(["refreshUserPermissions", "setSidebarLayout"])), {}, {
    getActiveTabLabel: function getActiveTabLabel() {
      var _this7 = this;
      var tab = this.tabs.find(function (t) {
        return t.id === _this7.activeTab;
      });
      return tab ? tab.label : '';
    },
    // Handle logo size type change
    onLogoSizeTypeChange: function onLogoSizeTypeChange(value) {
      // value is already set to logoSizeType via v-model, but we use it to update logo_size
      // Update logo_size based on the selected type
      if (!this.pos_settings) return;
      var selectedValue = value || this.logoSizeType;
      if (selectedValue === 'small') {
        this.pos_settings.logo_size = 40;
      } else if (selectedValue === 'medium') {
        this.pos_settings.logo_size = 60;
      } else if (selectedValue === 'large') {
        this.pos_settings.logo_size = 80;
      }
      // If 'custom', don't change logo_size, let user input handle it
      // But ensure logo_size has a valid value if it's empty
      if (selectedValue === 'custom' && (!this.pos_settings.logo_size || this.pos_settings.logo_size === '')) {
        this.pos_settings.logo_size = 60; // Default to 60 if empty
      }
    },
    getActiveTabDescription: function getActiveTabDescription() {
      var _this8 = this;
      var tab = this.tabs.find(function (t) {
        return t.id === _this8.activeTab;
      });
      return tab ? tab.description : '';
    },
    SetLocal: function SetLocal(locale) {
      this.$i18n.locale = locale;
      this.$store.dispatch("setLanguage", locale);
      Fire.$emit("ChangeLanguage");
      window.location.reload();
    },
    //------------- A4 Invoice Logo Size: clamp inputs to safe ranges
    onInvoiceLogoWidthInput: function onInvoiceLogoWidthInput() {
      var v = parseInt(this.setting.invoice_logo_width, 10);
      if (isNaN(v)) v = 180;
      if (v < 20) v = 20;
      if (v > 600) v = 600;
      this.setting.invoice_logo_width = v;
    },
    onInvoiceLogoHeightInput: function onInvoiceLogoHeightInput() {
      var v = parseInt(this.setting.invoice_logo_height, 10);
      if (isNaN(v)) v = 60;
      if (v < 20) v = 20;
      if (v > 400) v = 400;
      this.setting.invoice_logo_height = v;
    },
    //------------- Submit General Settings (General tab only)
    Submit_General_Settings: function Submit_General_Settings() {
      var _this9 = this;
      // Validate only the General tab fields via its own observer
      if (this.$refs.generalObserver && this.$refs.generalObserver.validate) {
        this.$refs.generalObserver.validate().then(function (success) {
          if (!success) {
            _this9.makeToast("danger", _this9.$t("Please_fill_the_form_correctly"), _this9.$t("Failed"));
          } else {
            _this9.Update_Settings();
          }
        });
      } else {
        // Fallback: if observer is missing, still attempt to save
        this.Update_Settings();
      }
    },
    //------------- Submit Appearance Settings
    Submit_Appearance_Settings: function Submit_Appearance_Settings() {
      var _this0 = this;
      if (this.$refs.appearanceObserver && this.$refs.appearanceObserver.validate) {
        this.$refs.appearanceObserver.validate().then(function (success) {
          if (!success) {
            _this0.makeToast("danger", _this0.$t("Please_fill_the_form_correctly"), _this0.$t("Failed"));
          } else {
            _this0.Update_Appearance_Settings();
          }
        });
      } else {
        this.Update_Appearance_Settings();
      }
    },
    //------------- Submit POS Settings
    Submit_POS_Settings: function Submit_POS_Settings() {
      // POS Settings tabs don't have required fields, so skip validation
      this.Update_Pos_Settings();
    },
    //------ Toggle keyboard shortcuts (per-device, stored in localStorage)
    onToggleKeyboardShortcuts: function onToggleKeyboardShortcuts() {
      (0,_mixins_posKeyboardShortcuts__WEBPACK_IMPORTED_MODULE_4__.setPosShortcutsEnabled)(this.enable_keyboard_shortcuts);
    },
    // Print the live POS receipt demo using the same print CSS as real POS receipts
    printPosDemo: function printPosDemo() {
      try {
        var el = document.getElementById("pos-receipt-demo");
        if (!el) return;
        var divContents = el.innerHTML;
        var w = window.open("", "", "height=600,width=400");
        w.document.write('<html><head>');
        w.document.write('<link rel="stylesheet" href="/css/pos_print.css">');
        w.document.write("</head><body>");
        w.document.write(divContents);
        w.document.write("</body></html>");
        w.document.close();
        setTimeout(function () {
          w.print();
        }, 500);
      } catch (e) {
        // silently ignore print errors in settings preview
      }
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    getValidationState: function getValidationState(_ref2) {
      var dirty = _ref2.dirty,
        validated = _ref2.validated,
        _ref2$valid = _ref2.valid,
        valid = _ref2$valid === void 0 ? null : _ref2$valid;
      return dirty || validated ? valid : null;
    },
    //------------------------------ Event Upload Logo -------------------------------\\
    onFileSelected: function onFileSelected(e) {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var file;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              file = e.target.files[0];
              if (!file) {
                _context.n = 3;
                break;
              }
              if (file.type.match('image.*')) {
                _context.n = 1;
                break;
              }
              _this1.makeToast("danger", _this1.$t("Invalid_file_type"), _this1.$t("Failed"));
              e.target.value = '';
              _this1.setting.logo = "";
              return _context.a(2);
            case 1:
              if (!(file.size > 200 * 1024)) {
                _context.n = 2;
                break;
              }
              _this1.makeToast("danger", _this1.$t("File_size_must_be_less_than_200KB"), _this1.$t("Failed"));
              e.target.value = '';
              _this1.setting.logo = "";
              return _context.a(2);
            case 2:
              _this1.setting.logo = file;
              _context.n = 4;
              break;
            case 3:
              _this1.setting.logo = "";
            case 4:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    //------------------------------ Event Upload Appearance Logo -------------------------------\\
    onAppearanceLogoSelected: function onAppearanceLogoSelected(e) {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$_this10$$refs$, valid;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return _this10.$refs.AppearanceLogo.validate(e);
            case 1:
              _yield$_this10$$refs$ = _context2.v;
              valid = _yield$_this10$$refs$.valid;
              if (valid) {
                _this10.appearance_settings.logo = e.target.files[0];
              } else {
                _this10.appearance_settings.logo = "";
              }
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    //------------------------------ Event Upload Appearance Favicon -------------------------------\\
    onAppearanceFaviconSelected: function onAppearanceFaviconSelected(e) {
      var _this11 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$_this11$$refs$, valid;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return _this11.$refs.AppearanceFavicon.validate(e);
            case 1:
              _yield$_this11$$refs$ = _context3.v;
              valid = _yield$_this11$$refs$.valid;
              if (valid) {
                _this11.appearance_settings.favicon = e.target.files[0];
              } else {
                _this11.appearance_settings.favicon = "";
              }
            case 2:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    Selected_Time_Zone: function Selected_Time_Zone(value) {
      if (value === null) {
        this.setting.timezone = "";
      }
    },
    syncDashboardSectionOrderList: function syncDashboardSectionOrderList() {
      var order = [];
      try {
        var raw = this.setting.dashboard_section_order;
        if (raw && typeof raw === 'string') order = JSON.parse(raw);else if (Array.isArray(raw)) order = raw;
      } catch (e) {}
      var byId = {};
      this.defaultDashboardSections.forEach(function (s) {
        byId[s.id] = s;
      });
      var ordered = [];
      order.forEach(function (id) {
        if (byId[id]) {
          ordered.push({
            id: byId[id].id,
            labelKey: byId[id].labelKey
          });
          delete byId[id];
        }
      });
      Object.keys(byId).forEach(function (id) {
        return ordered.push(byId[id]);
      });
      this.dashboardSectionOrderList = ordered;
    },
    onDashboardSectionOrderChange: function onDashboardSectionOrderChange() {
      this.setting.dashboard_section_order = JSON.stringify(this.dashboardSectionOrderList.map(function (x) {
        return x.id;
      }));
    },
    resetDashboardSectionOrder: function resetDashboardSectionOrder() {
      this.dashboardSectionOrderList = this.defaultDashboardSections.map(function (s) {
        return {
          id: s.id,
          labelKey: s.labelKey
        };
      });
      this.setting.dashboard_section_order = JSON.stringify(this.dashboardSectionOrderList.map(function (x) {
        return x.id;
      }));
      this.$bvToast && this.$bvToast.toast(this.$t('Dashboard_order_reset') || 'Dashboard section order reset to default.', {
        title: this.$t('Success') || 'Success',
        variant: 'success'
      });
    },
    //---------------------------------- Update Settings ----------------\\
    Update_Settings: function Update_Settings() {
      var _this12 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      var self = this;
      self.data = new FormData(); // Reset FormData
      self.data.append("client", self.setting.client_id);
      self.data.append("warehouse", self.setting.warehouse_id);
      self.data.append("default_account", self.setting.default_account_id || "");
      self.data.append("default_payment_method", self.setting.default_payment_method_id || "");
      self.data.append("currency", self.setting.currency_id);
      self.data.append("email", self.setting.email);
      self.data.append("logo", self.setting.logo);
      self.data.append("CompanyName", self.setting.CompanyName);
      self.data.append("CompanyPhone", self.setting.CompanyPhone);
      self.data.append("CompanyAdress", self.setting.CompanyAdress);
      self.data.append("company_name_ar", self.setting.company_name_ar || '');
      self.data.append("vat_number", self.setting.vat_number || '');
      self.data.append("zatca_enabled", self.setting.zatca_enabled ? 1 : 0);
      self.data.append("footer", self.setting.footer);
      self.data.append("developed_by", self.setting.developed_by);
      self.data.append("default_language", self.setting.default_language);
      self.data.append("sms_gateway", self.setting.sms_gateway);
      self.data.append("is_invoice_footer", self.setting.is_invoice_footer);
      self.data.append("invoice_footer", self.setting.invoice_footer);
      self.data.append("invoice_format", self.setting.invoice_format || "thermal");
      self.data.append("invoice_logo_width", self.setting.invoice_logo_width || 180);
      self.data.append("invoice_logo_height", self.setting.invoice_logo_height || 60);
      self.data.append("quotation_with_stock", self.setting.quotation_with_stock);
      self.data.append("show_language", self.setting.show_language);
      self.data.append("timezone", self.setting.timezone);
      self.data.append("date_format", self.setting.date_format || 'YYYY-MM-DD');
      // Optional price format for frontend display (POS, etc.)
      self.data.append("price_format", self.setting.price_format || "");
      self.data.append("point_to_amount_rate", self.setting.point_to_amount_rate);
      self.data.append("default_tax", self.setting.default_tax || 0);
      self.data.append("default_dashboard_date_range", self.setting.default_dashboard_date_range || "week");
      self.data.append("dashboard_section_order", typeof self.setting.dashboard_section_order === 'string' ? self.setting.dashboard_section_order : JSON.stringify(self.setting.dashboard_section_order || []));
      self.data.append("dashboard_font_size", self.setting.dashboard_font_size || "");
      self.data.append("dashboard_font_family", self.setting.dashboard_font_family || "");
      self.data.append("dark_mode", self.setting.dark_mode ? 1 : 0);
      self.data.append("rtl", self.setting.rtl ? 1 : 0);
      self.data.append("debug_mode", self.setting.debug_mode ? 1 : 0);
      self.data.append("offline_sync_enabled", self.setting.offline_sync_enabled ? 1 : 0);
      self.data.append("enable_3_decimal_pricing", self.setting.enable_3_decimal_pricing ? 1 : 0);
      self.data.append("show_product_gtin", self.setting.show_product_gtin ? 1 : 0);
      self.data.append("show_serial_tracking", self.setting.show_serial_tracking ? 1 : 0);
      self.data.append("enable_multi_pack_selling", self.setting.enable_multi_pack_selling ? 1 : 0);
      self.data.append("enable_kitchen_display", self.setting.enable_kitchen_display ? 1 : 0);
      self.data.append("sale_prefix", self.setting.sale_prefix || '');
      self.data.append("purchase_prefix", self.setting.purchase_prefix || '');
      self.data.append("quotation_prefix", self.setting.quotation_prefix || '');
      self.data.append("adjustment_prefix", self.setting.adjustment_prefix || '');
      self.data.append("transfer_prefix", self.setting.transfer_prefix || '');
      self.data.append("sale_return_prefix", self.setting.sale_return_prefix || '');
      self.data.append("purchase_return_prefix", self.setting.purchase_return_prefix || '');
      // Security: inactivity auto-logout (minutes) - empty => disabled/null
      self.data.append("session_timeout_minutes", self.setting.session_timeout_minutes === null || typeof self.setting.session_timeout_minutes === "undefined" ? "" : self.setting.session_timeout_minutes);

      // Cloud backup destination settings (optional)
      self.data.append("backup_cloud_enabled", self.setting.backup_cloud_enabled ? 1 : 0);
      self.data.append("backup_cloud_provider", self.setting.backup_cloud_provider || "");
      self.data.append("backup_cloud_path", self.setting.backup_cloud_path || "");

      // S3-compatible
      self.data.append("backup_s3_bucket", self.setting.backup_s3_bucket || "");
      self.data.append("backup_s3_region", self.setting.backup_s3_region || "");
      self.data.append("backup_s3_access_key", self.setting.backup_s3_access_key || "");
      self.data.append("backup_s3_secret_key", self.setting.backup_s3_secret_key || "");
      self.data.append("backup_s3_endpoint", self.setting.backup_s3_endpoint || "");
      self.data.append("backup_s3_path_style", self.setting.backup_s3_path_style ? 1 : 0);

      // Google Drive
      self.data.append("backup_gdrive_folder_id", self.setting.backup_gdrive_folder_id || "");
      self.data.append("backup_gdrive_access_token", self.setting.backup_gdrive_access_token || "");
      self.data.append("backup_gdrive_refresh_token", self.setting.backup_gdrive_refresh_token || "");
      self.data.append("backup_gdrive_client_id", self.setting.backup_gdrive_client_id || "");
      self.data.append("backup_gdrive_client_secret", self.setting.backup_gdrive_client_secret || "");

      // Dropbox
      self.data.append("backup_dropbox_path", self.setting.backup_dropbox_path || "");
      self.data.append("backup_dropbox_access_token", self.setting.backup_dropbox_access_token || "");

      // Pharmacy mode (batch & expiry tracking)
      self.data.append("pharmacy_mode", self.setting.pharmacy_mode ? 1 : 0);
      self.data.append("expiry_warning_days", self.setting.expiry_warning_days != null && self.setting.expiry_warning_days !== "" ? self.setting.expiry_warning_days : 90);
      self.data.append("block_expired_sale", self.setting.block_expired_sale ? 1 : 0);
      self.data.append("print_expiry_on_receipt", self.setting.print_expiry_on_receipt ? 1 : 0);

      // Jewelry mode (gold / jewelry retail settings)
      self.data.append("jewelry_mode", self.setting.jewelry_mode ? 1 : 0);
      self.data.append("default_making_charge_type", self.setting.default_making_charge_type || "");
      self.data.append("default_making_charge_value", self.setting.default_making_charge_value != null && self.setting.default_making_charge_value !== "" ? self.setting.default_making_charge_value : "");
      self.data.append("default_wastage_type", self.setting.default_wastage_type || "");
      self.data.append("default_wastage_value", self.setting.default_wastage_value != null && self.setting.default_wastage_value !== "" ? self.setting.default_wastage_value : "");
      self.data.append("gold_rate_requires_approval", self.setting.gold_rate_requires_approval ? 1 : 0);
      self.data.append("gold_rate_branch_override_enabled", self.setting.gold_rate_branch_override_enabled ? 1 : 0);
      self.data.append("_method", "put");

      // Defaults tab field "How many items do you want to display in POS"
      // lives on pos_settings, not the global settings table. Persist it
      // alongside the general settings save so the Defaults tab actually
      // stores it.
      var posSettingsId = self.pos_settings && self.pos_settings.id;
      var productsPerPage = self.pos_settings && self.pos_settings.products_per_page;
      var posSidecar = posSettingsId ? axios.put("pos_settings/" + posSettingsId, {
        products_per_page: productsPerPage
      }) : Promise.resolve();
      axios.post("settings/" + self.setting.id, self.data).then(function (response) {
        posSidecar["catch"](function () {});
        Fire.$emit("Event_Setting");

        // Sync Vuex store with saved settings by directly setting the values
        if (self.setting.dark_mode !== undefined && self.setting.dark_mode !== null) {
          _this12.$store.state.config.themeMode.dark = self.setting.dark_mode;
        }
        if (self.setting.rtl !== undefined && self.setting.rtl !== null) {
          _this12.$store.state.config.themeMode.rtl = self.setting.rtl;
        }
        _this12.makeToast("success", _this12.$t("Successfully_Updated"), _this12.$t("Success"));
        // Update date_format in Vuex store and localStorage cache
        try {
          if (self.setting.date_format) {
            // Update Vuex store (primary source)
            _this12.$store.commit('setDateFormat', self.setting.date_format);
            // Also update localStorage as cache
            localStorage.setItem('app_date_format', self.setting.date_format);
          }
        } catch (e) {}

        // Cache price_format in localStorage for frontend-only display helpers (e.g., POS)
        try {
          if (self.setting.price_format) {
            (0,_utils_priceFormat__WEBPACK_IMPORTED_MODULE_2__.cachePriceFormat)(self.setting.price_format);
          }
        } catch (e) {}
        // Cache monetary precision (2 or 3) and sync the store so open views update
        try {
          var dec = self.setting.enable_3_decimal_pricing ? 3 : 2;
          (0,_utils_priceFormat__WEBPACK_IMPORTED_MODULE_2__.cachePriceDecimals)(dec);
          self.$store.commit('setPriceDecimals', dec);
        } catch (e) {}
        _this12.refreshUserPermissions();
        // Save the active tab so it can be restored after reload (must be before SetLocal which may reload)
        try {
          if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.setItem('system_settings_submitted_tab', _this12.activeTab);
          }
        } catch (e) {}
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this12.SetLocal(self.setting.default_language);
      })["catch"](function (error) {
        var msg = error && error.response && error.response.data && (error.response.data.message || error.response.data.error) || _this12.$t("InvalidData");
        _this12.makeToast("danger", msg, _this12.$t("Failed"));
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      });
    },
    //---------------------------------- Update Payment Gateway ----------------\\
    Update_Payment: function Update_Payment() {
      var _this13 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.post("payment_gateway", {
        stripe_key: this.gateway.stripe_key,
        stripe_secret: this.gateway.stripe_secret,
        deleted: this.gateway.deleted
      }).then(function (response) {
        Fire.$emit("Event_payment");
        _this13.makeToast("success", _this13.$t("Successfully_Updated"), _this13.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this13.makeToast("danger", _this13.$t("InvalidData"), _this13.$t("Failed"));
      });
    },
    //---------------------------------- GET Payment_Gateway ----------------\\
    Get_Payment_Gateway: function Get_Payment_Gateway() {
      var _this14 = this;
      axios.get("get_payment_gateway_ws").then(function (response) {
        _this14.gateway = response.data.gateway;
      })["catch"](function (error) {
        // Silently fail if payment gateway endpoint doesn't exist
      });
    },
    //---------------------------------- Update_Pos_Settings ----------------\\
    Update_Pos_Settings: function Update_Pos_Settings() {
      var _this15 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.put("pos_settings/" + this.pos_settings.id, {
        note_customer: this.pos_settings.note_customer,
        show_logo: this.pos_settings.show_logo,
        logo_size: this.pos_settings.logo_size,
        show_store_name: this.pos_settings.show_store_name,
        show_reference: this.pos_settings.show_reference,
        show_date: this.pos_settings.show_date,
        show_seller: this.pos_settings.show_seller,
        show_note: this.pos_settings.show_note,
        show_barcode: this.pos_settings.show_barcode,
        show_discount: this.pos_settings.show_discount,
        show_product_discount: this.pos_settings.show_product_discount,
        show_tax: this.pos_settings.show_tax,
        show_shipping: this.pos_settings.show_shipping,
        show_phone: this.pos_settings.show_phone,
        show_email: this.pos_settings.show_email,
        show_address: this.pos_settings.show_address,
        show_customer: this.pos_settings.show_customer,
        show_Warehouse: this.pos_settings.show_Warehouse,
        is_printable: this.pos_settings.is_printable,
        products_per_page: this.pos_settings.products_per_page,
        quick_add_customer: this.pos_settings.quick_add_customer,
        barcode_scanning_sound: this.pos_settings.barcode_scanning_sound,
        show_product_images: this.pos_settings.show_product_images,
        show_stock_quantity: this.pos_settings.show_stock_quantity,
        enable_hold_sales: this.pos_settings.enable_hold_sales,
        enable_customer_points: this.pos_settings.enable_customer_points,
        show_categories: this.pos_settings.show_categories,
        show_brands: this.pos_settings.show_brands,
        allow_overselling: this.pos_settings.allow_overselling ? 1 : 0,
        show_gold_rate_on_pos: this.pos_settings.show_gold_rate_on_pos ? 1 : 0,
        allow_jewelry_price_override: this.pos_settings.allow_jewelry_price_override ? 1 : 0,
        jewelry_override_approval_threshold: this.pos_settings.jewelry_override_approval_threshold !== '' && this.pos_settings.jewelry_override_approval_threshold != null ? Number(this.pos_settings.jewelry_override_approval_threshold) : null,
        show_paid: this.pos_settings.show_paid,
        show_due: this.pos_settings.show_due,
        show_payments: this.pos_settings.show_payments,
        show_zatca_qr: this.pos_settings.show_zatca_qr,
        receipt_paper_size: this.pos_settings.receipt_paper_size,
        receipt_layout: this.pos_settings.receipt_layout,
        cash_drawer_auto_open: this.pos_settings.cash_drawer_auto_open ? 1 : 0,
        cash_drawer_printer_name: this.pos_settings.cash_drawer_printer_name || null,
        direct_network_printing: this.pos_settings.direct_network_printing ? 1 : 0,
        network_printer_ip: (this.pos_settings.network_printer_ip || "").toString().trim() || null,
        network_printer_port: this.pos_settings.network_printer_port ? Number(this.pos_settings.network_printer_port) : null,
        invoice_format: this.setting.invoice_format || "thermal"
      }).then(function (response) {
        Fire.$emit("Event_Pos_Settings");
        // Save the active tab so it can be restored after reload
        try {
          if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.setItem('system_settings_submitted_tab', _this15.activeTab);
          }
        } catch (e) {}
        _this15.makeToast("success", _this15.$t("Successfully_Updated"), _this15.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this15.makeToast("danger", _this15.$t("InvalidData"), _this15.$t("Failed"));
      });
    },
    //---------------------------------- Get_pos_Settings ----------------\\
    Get_Pos_Settings: function Get_Pos_Settings() {
      var _this16 = this;
      axios.get("get_pos_Settings").then(function (response) {
        _this16.pos_settings = _objectSpread(_objectSpread({}, _this16.pos_settings), response.data.pos_settings || {});
        // Ensure show_tax and show_shipping have default values if not present
        if (_this16.pos_settings.show_tax === undefined || _this16.pos_settings.show_tax === null || _this16.pos_settings.show_tax === '') {
          _this16.pos_settings.show_tax = _this16.pos_settings.show_discount || 0;
        }
        if (_this16.pos_settings.show_shipping === undefined || _this16.pos_settings.show_shipping === null || _this16.pos_settings.show_shipping === '') {
          _this16.pos_settings.show_shipping = _this16.pos_settings.show_discount || 0;
        }
        // Ensure logo_size has a default value if not present
        if (_this16.pos_settings.logo_size === undefined || _this16.pos_settings.logo_size === null || _this16.pos_settings.logo_size === '') {
          _this16.pos_settings.logo_size = 60;
        }
        // Set logoSizeType based on logo_size value
        var size = Number(_this16.pos_settings.logo_size);
        if (size === 40) {
          _this16.logoSizeType = 'small';
        } else if (size === 60) {
          _this16.logoSizeType = 'medium';
        } else if (size === 80) {
          _this16.logoSizeType = 'large';
        } else {
          _this16.logoSizeType = 'custom';
        }
      })["catch"](function (error) {
        // Silently fail if POS settings endpoint doesn't exist
      });
    },
    //---------------------------------- Update_Default_SMS ----------------\\
    Update_Default_SMS: function Update_Default_SMS() {
      var _this17 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.put("update_Default_SMS", {
        default_sms_gateway: this.sms_settings.default_sms_gateway
      }).then(function (response) {
        // Save the active tab so it can be restored after reload
        try {
          if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.setItem('system_settings_submitted_tab', _this17.activeTab);
          }
        } catch (e) {}
        _this17.makeToast("success", _this17.$t("Successfully_Updated"), _this17.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this17.makeToast("danger", _this17.$t("InvalidData"), _this17.$t("Failed"));
      });
    },
    //---------------------------------- Update_Termi_SMS ----------------\\
    Update_Termi_SMS: function Update_Termi_SMS() {
      var _this18 = this;
      if (this.$refs.smsObserver && this.$refs.smsObserver.validate) {
        this.$refs.smsObserver.validate().then(function (success) {
          if (!success) {
            _this18.makeToast("danger", _this18.$t("Please_fill_the_form_correctly"), _this18.$t("Failed"));
            return;
          }
          _this18.submitTermiSMS();
        });
      } else {
        this.submitTermiSMS();
      }
    },
    submitTermiSMS: function submitTermiSMS() {
      var _this19 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.post("update_termi_config", {
        TERMI_KEY: this.sms_settings.termi.TERMI_KEY,
        TERMI_SECRET: this.sms_settings.termi.TERMI_SECRET,
        TERMI_SENDER: this.sms_settings.termi.TERMI_SENDER
      }).then(function (response) {
        Fire.$emit("Event_sms");
        // Save the active tab so it can be restored after reload
        try {
          if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.setItem('system_settings_submitted_tab', _this19.activeTab);
          }
        } catch (e) {}
        _this19.makeToast("success", _this19.$t("Successfully_Updated"), _this19.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this19.makeToast("danger", _this19.$t("InvalidData"), _this19.$t("Failed"));
      });
    },
    //---------------------------------- Update_Twilio_SMS ----------------\\
    Update_Twilio_SMS: function Update_Twilio_SMS() {
      var _this20 = this;
      if (this.$refs.smsObserver && this.$refs.smsObserver.validate) {
        this.$refs.smsObserver.validate().then(function (success) {
          if (!success) {
            _this20.makeToast("danger", _this20.$t("Please_fill_the_form_correctly"), _this20.$t("Failed"));
            return;
          }
          _this20.submitTwilioSMS();
        });
      } else {
        this.submitTwilioSMS();
      }
    },
    submitTwilioSMS: function submitTwilioSMS() {
      var _this21 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.post("update_twilio_config", {
        TWILIO_SID: this.sms_settings.twilio.TWILIO_SID,
        TWILIO_TOKEN: this.sms_settings.twilio.TWILIO_TOKEN,
        TWILIO_FROM: this.sms_settings.twilio.TWILIO_FROM
      }).then(function (response) {
        Fire.$emit("Event_sms");
        // Save the active tab so it can be restored after reload
        try {
          if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.setItem('system_settings_submitted_tab', _this21.activeTab);
          }
        } catch (e) {}
        _this21.makeToast("success", _this21.$t("Successfully_Updated"), _this21.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this21.makeToast("danger", _this21.$t("InvalidData"), _this21.$t("Failed"));
      });
    },
    //---------------------------------- Update_Infobip_SMS ----------------\\
    Update_Infobip_SMS: function Update_Infobip_SMS() {
      var _this22 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.post("update_infobip_config", {
        base_url: this.sms_settings.infobip.base_url,
        api_key: this.sms_settings.infobip.api_key,
        sender_from: this.sms_settings.infobip.sender_from
      }).then(function (response) {
        Fire.$emit("Event_sms");
        // Save the active tab so it can be restored after reload
        try {
          if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.setItem('system_settings_submitted_tab', _this22.activeTab);
          }
        } catch (e) {}
        _this22.makeToast("success", _this22.$t("Successfully_Updated"), _this22.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this22.makeToast("danger", _this22.$t("InvalidData"), _this22.$t("Failed"));
      });
    },
    //---------------------------------- Get_SMS_Settings ----------------\\
    Get_SMS_Settings: function Get_SMS_Settings() {
      var _this23 = this;
      axios.get("get_sms_config").then(function (response) {
        _this23.sms_settings.twilio = response.data.twilio || _this23.sms_settings.twilio;
        _this23.sms_settings.termi = response.data.termi || _this23.sms_settings.termi;
        _this23.sms_settings.infobip = response.data.infobip || _this23.sms_settings.infobip;
        _this23.sms_settings.sms_gateway = response.data.sms_gateway || [];
        _this23.sms_settings.default_sms_gateway = response.data.default_sms_gateway || '';
        var c = response.data.custom || {};
        _this23.sms_settings.custom = {
          api_url: c.api_url || '',
          method: c.method || 'POST',
          content_type: c.content_type || 'json',
          sender: c.sender || '',
          success_keyword: c.success_keyword || '',
          headers: c.headers || {},
          payload: c.payload || {}
        };
        _this23.sms_settings.customHeaderRows = _this23.sms_objectToRows(_this23.sms_settings.custom.headers);
        _this23.sms_settings.customPayloadRows = _this23.sms_objectToRows(_this23.sms_settings.custom.payload);
      })["catch"](function (error) {
        // Silently fail if SMS settings endpoint doesn't exist
      });
    },
    //---------------------------------- Custom SMS helpers ----------------\\
    sms_addHeaderRow: function sms_addHeaderRow() {
      this.sms_settings.customHeaderRows.push({
        key: '',
        value: ''
      });
    },
    sms_removeHeaderRow: function sms_removeHeaderRow(idx) {
      this.sms_settings.customHeaderRows.splice(idx, 1);
    },
    sms_addPayloadRow: function sms_addPayloadRow() {
      this.sms_settings.customPayloadRows.push({
        key: '',
        value: ''
      });
    },
    sms_removePayloadRow: function sms_removePayloadRow(idx) {
      this.sms_settings.customPayloadRows.splice(idx, 1);
    },
    sms_rowsToObject: function sms_rowsToObject(rows) {
      var obj = {};
      (rows || []).forEach(function (r) {
        var key = (r.key || '').trim();
        if (key !== '') {
          obj[key] = r.value || '';
        }
      });
      return obj;
    },
    sms_objectToRows: function sms_objectToRows(obj) {
      if (!obj || _typeof(obj) !== 'object') return [];
      return Object.keys(obj).map(function (k) {
        return {
          key: k,
          value: obj[k]
        };
      });
    },
    //---------------------------------- Update_Custom_SMS ----------------\\
    Update_Custom_SMS: function Update_Custom_SMS() {
      var _this24 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.post("update_custom_config", {
        api_url: this.sms_settings.custom.api_url,
        method: this.sms_settings.custom.method,
        content_type: this.sms_settings.custom.content_type,
        sender: this.sms_settings.custom.sender,
        success_keyword: this.sms_settings.custom.success_keyword,
        headers: this.sms_rowsToObject(this.sms_settings.customHeaderRows),
        payload: this.sms_rowsToObject(this.sms_settings.customPayloadRows)
      }).then(function (response) {
        Fire.$emit("Event_sms");
        try {
          if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.setItem('system_settings_submitted_tab', _this24.activeTab);
          }
        } catch (e) {}
        _this24.makeToast("success", _this24.$t("Successfully_Updated"), _this24.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this24.makeToast("danger", _this24.$t("InvalidData"), _this24.$t("Failed"));
      });
    },
    //---------------------------------- Update_Appearance_Settings ----------------\\
    Update_Appearance_Settings: function Update_Appearance_Settings() {
      var _this25 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      var self = this;
      self.appearance_data = new FormData();
      self.appearance_data.append("favicon", self.appearance_settings.favicon);
      self.appearance_data.append("logo", self.appearance_settings.logo);
      self.appearance_data.append("app_name", self.appearance_settings.app_name);
      self.appearance_data.append("page_title_suffix", self.appearance_settings.page_title_suffix);
      self.appearance_data.append("developed_by", self.appearance_settings.developed_by);
      self.appearance_data.append("footer", self.appearance_settings.footer);
      self.appearance_data.append("customize_button_visible", self.appearance_settings.customize_button_visible ? "1" : "0");
      self.appearance_data.append("hide_site_name", self.appearance_settings.hide_site_name ? "1" : "0");
      self.appearance_data.append("login_hero_title", self.appearance_settings.login_hero_title || "");
      self.appearance_data.append("login_hero_subtitle", self.appearance_settings.login_hero_subtitle || "");
      self.appearance_data.append("login_panel_title", self.appearance_settings.login_panel_title || "");
      self.appearance_data.append("login_panel_subtitle", self.appearance_settings.login_panel_subtitle || "");
      self.appearance_data.append("_method", "put");
      axios.post("update_appearance_settings/" + self.appearance_settings.id, self.appearance_data).then(function (response) {
        Fire.$emit("Event_Appearance_Setting");
        _this25.makeToast("success", _this25.$t("Successfully_Updated"), _this25.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        // Reload the page to reflect appearance changes
        setTimeout(function () {
          window.location.reload();
        }, 500);
      })["catch"](function (error) {
        _this25.makeToast("danger", _this25.$t("InvalidData"), _this25.$t("Failed"));
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      });
    },
    //---------------------------------- Get_Appearance_Settings ----------------\\
    Get_Appearance_Settings: function Get_Appearance_Settings() {
      var _this26 = this;
      axios.get("get_appearance_settings").then(function (response) {
        _this26.appearance_settings = response.data.settings || _this26.appearance_settings;
      })["catch"](function (error) {
        // Silently fail if appearance settings endpoint doesn't exist
      });
    },
    //---------------------------------- PWA Settings ----------------\\
    Get_Pwa_Settings: function Get_Pwa_Settings() {
      var _this27 = this;
      axios.get("get_pwa_settings").then(function (response) {
        var data = response.data && response.data.settings || {};
        _this27.pwa_settings.id = data.id || null;
        _this27.pwa_settings.icon_192_url = data.icon_192_url || "";
        _this27.pwa_settings.icon_512_url = data.icon_512_url || "";
        _this27.pwa_settings.icon_192_exists = !!data.icon_192_exists;
        _this27.pwa_settings.icon_512_exists = !!data.icon_512_exists;
      })["catch"](function () {
        // Silently fail
      });
    },
    onPwaIcon192Selected: function onPwaIcon192Selected(e) {
      var _this28 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var file, _yield$_this28$$refs$, valid, _t;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              file = e.target.files[0];
              if (file) {
                _context4.n = 1;
                break;
              }
              _this28.pwa_settings.icon_192 = "";
              return _context4.a(2);
            case 1:
              _context4.p = 1;
              _context4.n = 2;
              return _this28.$refs.PwaIcon192.validate(e);
            case 2:
              _yield$_this28$$refs$ = _context4.v;
              valid = _yield$_this28$$refs$.valid;
              _this28.pwa_settings.icon_192 = valid ? file : "";
              _context4.n = 4;
              break;
            case 3:
              _context4.p = 3;
              _t = _context4.v;
              _this28.pwa_settings.icon_192 = file;
            case 4:
              return _context4.a(2);
          }
        }, _callee4, null, [[1, 3]]);
      }))();
    },
    onPwaIcon512Selected: function onPwaIcon512Selected(e) {
      var _this29 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var file, _yield$_this29$$refs$, valid, _t2;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              file = e.target.files[0];
              if (file) {
                _context5.n = 1;
                break;
              }
              _this29.pwa_settings.icon_512 = "";
              return _context5.a(2);
            case 1:
              _context5.p = 1;
              _context5.n = 2;
              return _this29.$refs.PwaIcon512.validate(e);
            case 2:
              _yield$_this29$$refs$ = _context5.v;
              valid = _yield$_this29$$refs$.valid;
              _this29.pwa_settings.icon_512 = valid ? file : "";
              _context5.n = 4;
              break;
            case 3:
              _context5.p = 3;
              _t2 = _context5.v;
              _this29.pwa_settings.icon_512 = file;
            case 4:
              return _context5.a(2);
          }
        }, _callee5, null, [[1, 3]]);
      }))();
    },
    Submit_Pwa_Settings: function Submit_Pwa_Settings() {
      var _this30 = this;
      if (!this.pwa_settings.icon_192 && !this.pwa_settings.icon_512) {
        this.makeToast("warning", this.$t("PWA_Pick_At_Least_One") || "Please select at least one icon to upload.", this.$t("Failed"));
        return;
      }
      this.pwaSubmitting = true;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      var formData = new FormData();
      if (this.pwa_settings.icon_192) formData.append("icon_192", this.pwa_settings.icon_192);
      if (this.pwa_settings.icon_512) formData.append("icon_512", this.pwa_settings.icon_512);
      axios.post("update_pwa_settings", formData).then(function () {
        _this30.makeToast("success", _this30.$t("Successfully_Updated"), _this30.$t("Success"));
        _this30.pwa_settings.icon_192 = "";
        _this30.pwa_settings.icon_512 = "";
        _this30.Get_Pwa_Settings();
      })["catch"](function () {
        _this30.makeToast("danger", _this30.$t("InvalidData"), _this30.$t("Failed"));
      })["finally"](function () {
        _this30.pwaSubmitting = false;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      });
    },
    //---------------------------------- Update_Mail_Settings ----------------\\
    Update_Mail_Settings: function Update_Mail_Settings() {
      var _this31 = this;
      if (this.$refs.mailObserver && this.$refs.mailObserver.validate) {
        this.$refs.mailObserver.validate().then(function (success) {
          if (!success) {
            _this31.makeToast("danger", _this31.$t("Please_fill_the_form_correctly"), _this31.$t("Failed"));
            return;
          }
          _this31.submitMailSettings();
        });
      } else {
        this.submitMailSettings();
      }
    },
    submitMailSettings: function submitMailSettings() {
      var _this32 = this;
      var silent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      return axios.put("update_config_mail/" + this.mail_settings.id, {
        mail_mailer: this.mail_settings.mail_mailer,
        host: this.mail_settings.host,
        port: this.mail_settings.port,
        sender_name: this.mail_settings.sender_name,
        sender_email: this.mail_settings.sender_email,
        username: this.mail_settings.username,
        password: this.mail_settings.password,
        encryption: this.mail_settings.encryption
      }).then(function (response) {
        Fire.$emit("Event_Smtp");
        // Save the active tab so it can be restored after reload
        try {
          if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.setItem('system_settings_submitted_tab', _this32.activeTab);
          }
        } catch (e) {}
        if (!silent) {
          _this32.makeToast("success", _this32.$t("Successfully_Updated"), _this32.$t("Success"));
        }
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        return response;
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        if (!silent) {
          _this32.makeToast("danger", _this32.$t("InvalidData"), _this32.$t("Failed"));
        }
        throw error;
      });
    },
    //---------------------------------- Get_Mail_Settings ----------------\\
    Get_Mail_Settings: function Get_Mail_Settings() {
      var _this33 = this;
      axios.get("get_config_mail").then(function (response) {
        _this33.mail_settings = response.data.server || _this33.mail_settings;
      })["catch"](function (error) {
        // Silently fail if mail settings endpoint doesn't exist
      });
    },
    //---------------------------------- Test_Mail_Settings ----------------\\
    Test_Mail_Settings: function Test_Mail_Settings() {
      var _this34 = this;
      if (this.isTestingMail) return;

      // First validate the form
      if (this.$refs.mailObserver && this.$refs.mailObserver.validate) {
        this.$refs.mailObserver.validate().then(function (success) {
          if (!success) {
            _this34.makeToast("danger", _this34.$t("Please_fill_the_form_correctly"), _this34.$t("Failed"));
            return;
          }

          // Save first, then test
          _this34.isTestingMail = true;
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);

          // Save settings first (silently, without showing success toast)
          _this34.submitMailSettings(true).then(function () {
            // After saving, test the mail
            return axios.post("test_config_mail");
          }).then(function (response) {
            var msg = response.data && (response.data.message || response.data.msg) || _this34.$t("Successfully_Updated");
            _this34.makeToast("success", msg, _this34.$t("Success"));
          })["catch"](function (error) {
            var msg = error.response && error.response.data && (error.response.data.message || error.response.data.errors) || _this34.$t("InvalidData");
            _this34.makeToast("danger", msg, _this34.$t("Failed"));
          })["finally"](function () {
            _this34.isTestingMail = false;
            nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
          });
        });
      } else {
        // Fallback if validation observer is not available
        this.isTestingMail = true;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
        this.submitMailSettings(true).then(function () {
          return axios.post("test_config_mail");
        }).then(function (response) {
          var msg = response.data && (response.data.message || response.data.msg) || _this34.$t("Successfully_Updated");
          _this34.makeToast("success", msg, _this34.$t("Success"));
        })["catch"](function (error) {
          var msg = error.response && error.response.data && (error.response.data.message || error.response.data.errors) || _this34.$t("InvalidData");
          _this34.makeToast("danger", msg, _this34.$t("Failed"));
        })["finally"](function () {
          _this34.isTestingMail = false;
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        });
      }
    },
    //---------------------------------- Generate Backup --------------------\\
    GenerateBackup: function GenerateBackup() {
      var _this35 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("generate_new_backup").then(function (response) {
        Fire.$emit("Generate_Backup");

        // Check if backup was successful
        if (response.data && response.data.success === false) {
          // Backup generation failed
          var errorMsg = response.data.error || response.data.message || _this35.$t("Failed_to_generate_backup") || "Failed to generate backup";

          // Check if it's a mysqldump not found error
          if (errorMsg.includes('mysqldump') && errorMsg.includes('not found')) {
            _this35.backupError = true;
          }
          _this35.makeToast("danger", errorMsg, _this35.$t("Failed"));
        } else {
          // Clear any previous errors on success
          _this35.backupError = null;
          // Backup successful
          var message = _this35.$t("Backup_generated_successfully") || "Backup generated successfully";
          _this35.makeToast("success", message, _this35.$t("Success"));
        }
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        }, 500);
      })["catch"](function (error) {
        // Handle error response
        var errorMsg = _this35.$t("Failed_to_generate_backup") || "Failed to generate backup";
        if (error.response && error.response.data) {
          if (error.response.data.error) {
            errorMsg = error.response.data.error;
          } else if (error.response.data.message) {
            errorMsg = error.response.data.message;
          }
        } else if (error.message) {
          errorMsg = error.message;
        }

        // Check if it's a mysqldump not found error
        if (errorMsg.includes('mysqldump') && errorMsg.includes('not found')) {
          _this35.backupError = true;
        }
        _this35.makeToast("danger", errorMsg, _this35.$t("Failed"));
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        }, 500);
      });
    },
    //----------------------------------------  Get All backups -------------------------\\
    Get_Backups: function Get_Backups() {
      var _this36 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("get_backup").then(function (response) {
        _this36.backups = response.data.backups || [];
        _this36.totalRows = response.data.totalRows || 0;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (response) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        // Silently fail if backup endpoint doesn't exist
      });
    },
    //--------------------------------- Delete Backup --------------------\\
    DeleteBackup: function DeleteBackup(date) {
      var _this37 = this;
      this.$swal({
        title: this.$t("Delete_Title"),
        text: this.$t("Delete_Text"),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Delete_cancelButtonText"),
        confirmButtonText: this.$t("Delete_confirmButtonText")
      }).then(function (result) {
        if (result.value) {
          axios["delete"]("delete_backup/" + date).then(function () {
            _this37.$swal(_this37.$t("Delete_Deleted"), _this37.$t("Deleted_in_successfully"), "success");
            Fire.$emit("Delete_Backup");
          })["catch"](function () {
            _this37.$swal(_this37.$t("Delete_Failed"), _this37.$t("Delete_Therewassomethingwronge"), "warning");
          });
        }
      });
    },
    //---------------------------------- Clear_Cache ----------------\\
    Clear_Cache: function Clear_Cache() {
      var _this38 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("clear_cache").then(function (response) {
        _this38.makeToast("success", _this38.$t("Cache_cleared_successfully"), _this38.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this38.makeToast("danger", _this38.$t("Failed_to_clear_cache"), _this38.$t("Failed"));
      });
    },
    //---------------------------------- Get SETTINGS ----------------\\
    Get_Settings: function Get_Settings() {
      var _this39 = this;
      axios.get("get_Settings_data_api", {
        params: {
          include_secrets: 1
        }
      }).then(function (response) {
        // Merge to preserve default keys/reactivity for newly added settings fields
        _this39.setting = _objectSpread(_objectSpread({}, _this39.setting), response.data.settings || {});
        _this39.syncDashboardSectionOrderList();
        // Update date_format in Vuex store and localStorage cache
        try {
          if (_this39.setting.date_format) {
            // Update Vuex store (primary source from database)
            _this39.$store.commit('setDateFormat', _this39.setting.date_format);
            // Also update localStorage as cache
            localStorage.setItem('app_date_format', _this39.setting.date_format);
          }
        } catch (e) {}
        // Cache price_format in localStorage for frontend-only display helpers (e.g., POS)
        try {
          if (_this39.setting.price_format) {
            (0,_utils_priceFormat__WEBPACK_IMPORTED_MODULE_2__.cachePriceFormat)(_this39.setting.price_format);
          }
        } catch (e) {}
        // Cache monetary precision (2 or 3) and sync the store
        try {
          var dec = _this39.setting.enable_3_decimal_pricing ? 3 : 2;
          (0,_utils_priceFormat__WEBPACK_IMPORTED_MODULE_2__.cachePriceDecimals)(dec);
          _this39.$store.commit('setPriceDecimals', dec);
        } catch (e) {}
        // If current timeout is a custom value, keep it in the custom input
        try {
          var stm = Number(_this39.setting.session_timeout_minutes);
          if (!isNaN(stm) && stm > 0 && ![15, 30, 60].includes(stm)) {
            _this39.sessionTimeoutCustom = stm;
          }
        } catch (e) {}

        // Sync dark_mode and rtl with Vuex store if they exist in settings
        // If not in settings, use current Vuex store values
        if (_this39.setting.dark_mode !== undefined && _this39.setting.dark_mode !== null) {
          // Sync Vuex store with backend setting by directly setting the value
          if (_this39.getThemeMode.dark !== _this39.setting.dark_mode) {
            _this39.$store.state.config.themeMode.dark = _this39.setting.dark_mode;
          }
        } else {
          // If not in backend, initialize from Vuex store
          _this39.setting.dark_mode = _this39.getThemeMode.dark || false;
        }
        if (_this39.setting.rtl !== undefined && _this39.setting.rtl !== null) {
          // Sync Vuex store with backend setting by directly setting the value
          if (_this39.getThemeMode.rtl !== _this39.setting.rtl) {
            _this39.$store.state.config.themeMode.rtl = _this39.setting.rtl;
          }
        } else {
          // If not in backend, initialize from Vuex store
          _this39.setting.rtl = _this39.getThemeMode.rtl || false;
        }
        _this39.currencies = response.data.currencies;
        _this39.clients = response.data.clients;
        _this39.warehouses = response.data.warehouses;
        _this39.sms_gateway = response.data.sms_gateway;
        _this39.accounts = response.data.accounts || [];
        _this39.payment_methods = response.data.payment_methods || [];
        _this39.zones_array = response.data.zones_array;
        _this39.languages = response.data.languages;
        _this39.isLoading = false;
      })["catch"](function (error) {
        setTimeout(function () {
          _this39.isLoading = false;
        }, 500);
      });
    },
    //----------------------------------- Custom Fields Methods -------------------------------\\
    Get_CustomFields: function Get_CustomFields() {
      var _this40 = this;
      // Get customer fields
      var customerPromise = axios.get("custom-fields?entity_type=client").then(function (response) {
        _this40.customerFields = response.data.custom_fields || [];
      })["catch"](function (error) {
        console.error('Error loading customer fields:', error);
        // Return resolved promise even on error to allow Promise.all to complete
        return Promise.resolve();
      });

      // Get supplier fields
      var supplierPromise = axios.get("custom-fields?entity_type=provider").then(function (response) {
        _this40.supplierFields = response.data.custom_fields || [];
      })["catch"](function (error) {
        console.error('Error loading supplier fields:', error);
        // Return resolved promise even on error to allow Promise.all to complete
        return Promise.resolve();
      });

      // Return promise that resolves when both requests complete (even if one fails)
      return Promise.all([customerPromise, supplierPromise]);
    },
    New_CustomField: function New_CustomField(entityType) {
      var _this41 = this;
      this.reset_CustomField_Form();
      this.customField.entity_type = entityType;
      this.customFieldEditmode = false;
      setTimeout(function () {
        _this41.$bvModal.show("New_CustomField");
      }, 500);
    },
    Edit_CustomField: function Edit_CustomField(customField) {
      var _this42 = this;
      this.reset_CustomField_Form();
      this.customField = {
        id: customField.id,
        name: customField.name,
        field_type: customField.field_type,
        entity_type: customField.entity_type,
        is_required: customField.is_required,
        is_active: customField.is_active !== undefined ? customField.is_active : true,
        default_value: customField.default_value || "",
        sort_order: customField.sort_order || 0
      };

      // Handle select options
      if (customField.field_type === 'select' && customField.default_value) {
        var options = Array.isArray(customField.default_value) ? customField.default_value : JSON.parse(customField.default_value || '[]');
        this.selectOptionsText = options.join('\n');
      } else {
        this.selectOptionsText = "";
      }
      this.customFieldEditmode = true;
      setTimeout(function () {
        _this42.$bvModal.show("Edit_CustomField");
      }, 500);
    },
    Submit_CustomField: function Submit_CustomField() {
      var _this43 = this;
      this.$refs.Create_CustomField.validate().then(function (success) {
        if (!success) {
          _this43.makeToast("danger", _this43.$t("Please_fill_the_form_correctly"), _this43.$t("Failed"));
          return;
        }
        _this43.customFieldSubmitProcessing = true;
        var payload = {
          name: _this43.customField.name,
          field_type: _this43.customField.field_type,
          entity_type: _this43.customField.entity_type,
          is_required: _this43.customField.is_required,
          is_active: _this43.customField.is_active !== undefined ? _this43.customField.is_active : true,
          default_value: _this43.customField.default_value || null,
          sort_order: _this43.customField.sort_order || 0
        };

        // Handle select options
        if (_this43.customField.field_type === 'select') {
          var options = _this43.selectOptionsText.split('\n').map(function (opt) {
            return opt.trim();
          }).filter(function (opt) {
            return opt.length > 0;
          });
          payload.default_value = JSON.stringify(options);
        }
        var url = _this43.customFieldEditmode ? "custom-fields/".concat(_this43.customField.id) : "custom-fields";
        var method = _this43.customFieldEditmode ? "put" : "post";
        axios[method](url, payload).then(function (response) {
          _this43.makeToast("success", _this43.customFieldEditmode ? _this43.$t("Successfully_Updated") : _this43.$t("Successfully_Created"), _this43.$t("Success"));
          _this43.customFieldSubmitProcessing = false;
          _this43.$bvModal.hide(_this43.customFieldEditmode ? "Edit_CustomField" : "New_CustomField");
          _this43.Get_CustomFields().then(function () {
            // Force table re-render after data is refreshed
            _this43.$nextTick(function () {
              _this43.customFieldsTableKey += 1;
            });
          });
        })["catch"](function (error) {
          _this43.customFieldSubmitProcessing = false;
          _this43.makeToast("danger", _this43.$t("InvalidData"), _this43.$t("Failed"));
        });
      });
    },
    Delete_CustomField: function Delete_CustomField(id) {
      var _this44 = this;
      this.$swal({
        title: this.$t("Delete_Title"),
        text: this.$t("Delete_Text"),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Delete_cancelButtonText"),
        confirmButtonText: this.$t("Delete_confirmButtonText")
      }).then(function (result) {
        if (result.value) {
          axios["delete"]("custom-fields/" + id).then(function (response) {
            _this44.makeToast("success", _this44.$t("Deleted_in_successfully"), _this44.$t("Success"));
            // Remove the item from local arrays immediately (optimistic update)
            _this44.customerFields = _this44.customerFields.filter(function (field) {
              return field.id !== id;
            });
            _this44.supplierFields = _this44.supplierFields.filter(function (field) {
              return field.id !== id;
            });
            // Refresh the data from server to ensure consistency
            _this44.Get_CustomFields().then(function () {
              // Force table re-render after data is refreshed
              _this44.$nextTick(function () {
                _this44.customFieldsTableKey += 1;
              });
            });
          })["catch"](function (error) {
            _this44.makeToast("danger", _this44.$t("InvalidData"), _this44.$t("Failed"));
          });
        }
      });
    },
    reset_CustomField_Form: function reset_CustomField_Form() {
      this.customField = {
        id: "",
        name: "",
        field_type: "",
        entity_type: "",
        is_required: false,
        is_active: true,
        default_value: "",
        sort_order: 0
      };
      this.selectOptionsText = "";
      this.customFieldEditmode = false;
    },
    onFieldTypeChange: function onFieldTypeChange() {
      if (this.customField.field_type !== 'select') {
        this.selectOptionsText = "";
      }
      if (this.customField.field_type === 'checkbox') {
        this.customField.default_value = "";
      }
    },
    updateSelectOptions: function updateSelectOptions() {
      // This is handled in Submit_CustomField
    },
    getFieldTypeLabel: function getFieldTypeLabel(type) {
      var field = this.fieldTypes.find(function (f) {
        return f.value === type;
      });
      return field ? field.label : type;
    }
  }),
  //end Methods

  //----------------------------- Created function-------------------

  created: function created() {
    var _this45 = this;
    // Determine which tab to show first (before loading data)
    // If route has ?tab=pos or ?tab=pos_settings, open that tab by default
    if (this.$route && this.$route.query && this.$route.query.tab) {
      var tabId = this.$route.query.tab;
      if (this.tabs && this.tabs.some(function (t) {
        return t.id === tabId;
      })) {
        this.activeTab = tabId;
        // Clear submission flag when explicitly navigating to a tab
        try {
          if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.removeItem('system_settings_submitted_tab');
          }
        } catch (e) {}
      }
    } else {
      // Check if we're returning after a form submission
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          var submittedTab = window.localStorage.getItem('system_settings_submitted_tab');
          if (submittedTab) {
            // Valid tab IDs that can be restored
            var validTabs = ['general', 'appearance', 'pwa', 'localization', 'defaults', 'dashboard', 'prefixes', 'payment', 'mail', 'sms', 'pos', 'pos_settings', 'zatca', 'invoice', 'backup', 'security', 'system', 'jewelry'];
            if (validTabs.includes(submittedTab)) {
              // Restore the tab that was active when form was submitted
              this.activeTab = submittedTab;
              // Clear the submission flag after restoring
              window.localStorage.removeItem('system_settings_submitted_tab');
            } else {
              // Invalid tab, clear it
              window.localStorage.removeItem('system_settings_submitted_tab');
              this.activeTab = 'general';
            }
          } else {
            // Default to 'general' when coming from other pages (no route tab, no submitted tab)
            this.activeTab = 'general';
          }
        } else {
          // Default to 'general' if localStorage is not available
          this.activeTab = 'general';
        }
      } catch (e) {
        // Default to 'general' on error
        this.activeTab = 'general';
      }
    }

    // Hydrate keyboard shortcuts toggle from localStorage (per-device setting)
    this.enable_keyboard_shortcuts = (0,_mixins_posKeyboardShortcuts__WEBPACK_IMPORTED_MODULE_4__.posShortcutsEnabled)();

    // Always load data regardless of which tab is active
    this.Get_Settings();
    this.syncDashboardSectionOrderList();
    this.Get_Payment_Gateway();
    this.Get_Pos_Settings();
    this.Get_SMS_Settings();
    this.Get_Appearance_Settings();
    this.Get_Pwa_Settings();
    this.Get_Mail_Settings();
    this.Get_Backups();
    Fire.$on("Event_Setting", function () {
      _this45.Get_Settings();
    });
    Fire.$on("Event_payment", function () {
      _this45.Get_Payment_Gateway();
    });
    Fire.$on("Event_Pos_Settings", function () {
      _this45.Get_Pos_Settings();
    });
    Fire.$on("Event_sms", function () {
      _this45.Get_SMS_Settings();
    });
    Fire.$on("Event_Appearance_Setting", function () {
      _this45.Get_Appearance_Settings();
    });
    Fire.$on("Event_Smtp", function () {
      _this45.Get_Mail_Settings();
    });
    Fire.$on("Generate_Backup", function () {
      setTimeout(function () {
        _this45.Get_Backups();
      }, 500);
    });
    Fire.$on("Delete_Backup", function () {
      setTimeout(function () {
        _this45.Get_Backups();
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      }, 500);
    });
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4&scoped=true"
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0;}}function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r);}function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r);}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n;}var render=function render(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"main-content"},[_c("breadcumb",{attrs:{page:_vm.$t("SystemSettings"),folder:_vm.$t("Settings")}}),_vm._v(" "),_vm.isLoading?_c("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):_vm._e(),_vm._v(" "),!_vm.isLoading?_c("div",[_c("b-card",{staticClass:"settings-container",attrs:{"no-body":""}},[_c("b-row",{attrs:{"no-gutters":""}},[_c("b-col",{staticClass:"d-md-none mobile-tab-selector","class":{"sidebar-open":_vm.isSidebarOpenOnMobile},attrs:{cols:"12"}},[_c("b-form-select",{staticClass:"mobile-tab-select",attrs:{options:_vm.tabs.map(function(tab){return{value:tab.id,text:tab.label};}),size:"lg"},model:{value:_vm.activeTab,callback:function callback($$v){_vm.activeTab=$$v;},expression:"activeTab"}})],1),_vm._v(" "),_c("b-col",{staticClass:"settings-sidebar d-none d-md-block",attrs:{cols:"12",md:"3"}},[_c("div",{staticClass:"settings-tabs-nav"},[_c("div",{staticClass:"settings-header"},[_c("h5",{staticClass:"mb-0"},[_vm._v(_vm._s(_vm.$t("SystemSettings")))])]),_vm._v(" "),_c("nav",{staticClass:"settings-nav"},_vm._l(_vm.tabs,function(tab){return _c("button",{key:tab.id,"class":["settings-nav-item",{active:_vm.activeTab===tab.id}],attrs:{type:"button"},on:{click:function click($event){_vm.activeTab=tab.id;}}},[_c("lucide-icon",{attrs:{name:tab.icon}}),_vm._v(" "),_c("span",[_vm._v(_vm._s(tab.label))])],1);}),0)])]),_vm._v(" "),_c("b-col",{staticClass:"settings-content",attrs:{cols:"12",md:"9"}},[_c("div",{staticClass:"settings-content-wrapper"},[_c("div",{staticClass:"settings-content-header"},[_c("h4",{staticClass:"mb-0"},[_vm._v(_vm._s(_vm.getActiveTabLabel()))]),_vm._v(" "),_c("p",{staticClass:"text-muted mb-0"},[_vm._v(_vm._s(_vm.getActiveTabDescription()))])]),_vm._v(" "),_c("div",{staticClass:"settings-content-body"},[_vm.activeTab==="general"?_c("div",{staticClass:"tab-content"},[_c("validation-observer",{ref:"generalObserver"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"Company Name",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("CompanyName")+" "+"*"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"Company-feedback",placeholder:_vm.$t("CompanyName")},model:{value:_vm.setting.CompanyName,callback:function callback($$v){_vm.$set(_vm.setting,"CompanyName",$$v);},expression:"setting.CompanyName"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"Company-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,261751878)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"Company Phone",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("CompanyPhone")+" "+"*"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"Phone-feedback",placeholder:_vm.$t("CompanyPhone")},model:{value:_vm.setting.CompanyPhone,callback:function callback($$v){_vm.$set(_vm.setting,"CompanyPhone",$$v);},expression:"setting.CompanyPhone"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"Phone-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,3761040285)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"Email",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("DefaultEmail")+" "+"*"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"Email-feedback",placeholder:_vm.$t("DefaultEmail")},model:{value:_vm.setting.email,callback:function callback($$v){_vm.$set(_vm.setting,"email",$$v);},expression:"setting.email"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"Email-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,3474835978)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("ChangeLogo")}},[_c("input",{staticClass:"form-control",attrs:{type:"file",accept:"image/*"},on:{change:_vm.onFileSelected}}),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-1"},[_vm._v("Max file size: 200KB")])])],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"12",md:"12",sm:"12"}},[_c("validation-provider",{attrs:{name:"Adress",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("Adress")+" "+"*"}},[_c("textarea",{directives:[{name:"model",rawName:"v-model",value:_vm.setting.CompanyAdress,expression:"setting.CompanyAdress"}],staticClass:"form-control",attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"Adress-feedback",placeholder:_vm.$t("Afewwords"),rows:"3"},domProps:{value:_vm.setting.CompanyAdress},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.setting,"CompanyAdress",$event.target.value);}}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"Adress-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,2578883557)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"footer",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("footer")+" "+"*"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"footer-feedback"},model:{value:_vm.setting.footer,callback:function callback($$v){_vm.$set(_vm.setting,"footer",$$v);},expression:"setting.footer"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"footer-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,4134237762)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"developed by",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("developed_by")+" "+"*"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"developed_by-feedback"},model:{value:_vm.setting.developed_by,callback:function callback($$v){_vm.$set(_vm.setting,"developed_by",$$v);},expression:"setting.developed_by"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"developed_by-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,2560948866)})],1)],1),_vm._v(" "),_c("b-row",{staticClass:"mt-4"},[_c("b-col",{staticClass:"d-flex justify-content-end",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:function click($event){return _vm.Submit_General_Settings();}}},[_vm._v("\n"+_vm._s(_vm.$t("submit"))+"\n                        ")])],1)],1)],1)],1):_vm._e(),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="appearance",expression:"activeTab === 'appearance'"}],staticClass:"tab-content"},[_c("div",{staticClass:"mb-4"},[_c("h5",{staticClass:"mb-3"},[_vm._v(_vm._s(_vm.$t("Appearance_Settings")))]),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"App Name",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("app_name")+" *"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"app-name-feedback"},model:{value:_vm.appearance_settings.app_name,callback:function callback($$v){_vm.$set(_vm.appearance_settings,"app_name",$$v);},expression:"appearance_settings.app_name"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"app-name-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,839005243)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"Page Title Suffix",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("page_title_suffix")+" *"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"page-title-feedback"},model:{value:_vm.appearance_settings.page_title_suffix,callback:function callback($$v){_vm.$set(_vm.appearance_settings,"page_title_suffix",$$v);},expression:"appearance_settings.page_title_suffix"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"page-title-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,1351427163)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{ref:"AppearanceLogo",attrs:{name:"Logo",rules:"mimes:image/*|size:200"},scopedSlots:_vm._u([{key:"default",fn:function fn(_ref){var validate=_ref.validate,valid=_ref.valid,errors=_ref.errors;return _c("b-form-group",{attrs:{label:_vm.$t("ChangeLogo")}},[_c("input",{staticClass:"form-control","class":{"is-invalid":!!errors.length},attrs:{state:errors[0]?false:valid?true:null,type:"file"},on:{change:_vm.onAppearanceLogoSelected}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"AppearanceLogo-feedback"}},[_vm._v(_vm._s(errors[0]))])],1);}}],null,false,1032366109)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{ref:"AppearanceFavicon",attrs:{name:"Favicon",rules:"mimes:image/*|size:100"},scopedSlots:_vm._u([{key:"default",fn:function fn(_ref2){var validate=_ref2.validate,valid=_ref2.valid,errors=_ref2.errors;return _c("b-form-group",{attrs:{label:_vm.$t("ChangeFavicon")}},[_c("input",{staticClass:"form-control","class":{"is-invalid":!!errors.length},attrs:{state:errors[0]?false:valid?true:null,type:"file"},on:{change:_vm.onAppearanceFaviconSelected}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"AppearanceFavicon-feedback"}},[_vm._v(_vm._s(errors[0]))])],1);}}],null,false,3067286732)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"developed by",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("developed_by")+" "+"*"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"appearance-developed_by-feedback"},model:{value:_vm.appearance_settings.developed_by,callback:function callback($$v){_vm.$set(_vm.appearance_settings,"developed_by",$$v);},expression:"appearance_settings.developed_by"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"appearance-developed_by-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,4262986384)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"footer",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("footer")+" "+"*"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"appearance-footer-feedback"},model:{value:_vm.appearance_settings.footer,callback:function callback($$v){_vm.$set(_vm.appearance_settings,"footer",$$v);},expression:"appearance_settings.footer"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"appearance-footer-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,3819795728)})],1)],1)],1),_vm._v(" "),_c("hr",{staticClass:"my-4"}),_vm._v(" "),_c("div",{staticClass:"mb-4"},[_c("h5",{staticClass:"mb-3"},[_vm._v("Customize Button")]),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"12"}},[_c("div",{staticClass:"d-flex align-items-center justify-content-between customize-toggle-row"},[_c("div",[_c("div",{staticClass:"customize-toggle-title"},[_vm._v("Show the floating Customize button")]),_vm._v(" "),_c("div",{staticClass:"customize-toggle-hint"},[_vm._v("\n                                When enabled, a Customize button appears at the bottom-right of every page so users can quickly change theme, layout, primary color and language.\n                              ")])]),_vm._v(" "),_c("label",{staticClass:"switch switch-primary ml-3 mb-0"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.appearance_settings.customize_button_visible,expression:"appearance_settings.customize_button_visible"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.appearance_settings.customize_button_visible)?_vm._i(_vm.appearance_settings.customize_button_visible,null)>-1:_vm.appearance_settings.customize_button_visible},on:{change:function change($event){var $$a=_vm.appearance_settings.customize_button_visible,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.appearance_settings,"customize_button_visible",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.appearance_settings,"customize_button_visible",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.appearance_settings,"customize_button_visible",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])])]),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"12"}},[_c("div",{staticClass:"d-flex align-items-center justify-content-between customize-toggle-row"},[_c("div",[_c("div",{staticClass:"customize-toggle-title"},[_vm._v(_vm._s(_vm.$t("hide_site_name")))]),_vm._v(" "),_c("div",{staticClass:"customize-toggle-hint"},[_vm._v("\n                                "+_vm._s(_vm.$t("hide_site_name_hint"))+"\n                              ")])]),_vm._v(" "),_c("label",{staticClass:"switch switch-primary ml-3 mb-0"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.appearance_settings.hide_site_name,expression:"appearance_settings.hide_site_name"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.appearance_settings.hide_site_name)?_vm._i(_vm.appearance_settings.hide_site_name,null)>-1:_vm.appearance_settings.hide_site_name},on:{change:function change($event){var $$a=_vm.appearance_settings.hide_site_name,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.appearance_settings,"hide_site_name",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.appearance_settings,"hide_site_name",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.appearance_settings,"hide_site_name",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])])])],1)],1),_vm._v(" "),_c("hr",{staticClass:"my-4"}),_vm._v(" "),_c("div",{staticClass:"mb-4"},[_c("h5",{staticClass:"mb-3"},[_vm._v(_vm._s(_vm.$t("Appearance_Settings"))+" - Login Page")]),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Login hero title"}},[_c("b-form-input",{model:{value:_vm.appearance_settings.login_hero_title,callback:function callback($$v){_vm.$set(_vm.appearance_settings,"login_hero_title",$$v);},expression:"appearance_settings.login_hero_title"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Login hero subtitle"}},[_c("b-form-input",{model:{value:_vm.appearance_settings.login_hero_subtitle,callback:function callback($$v){_vm.$set(_vm.appearance_settings,"login_hero_subtitle",$$v);},expression:"appearance_settings.login_hero_subtitle"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Login panel title"}},[_c("b-form-input",{model:{value:_vm.appearance_settings.login_panel_title,callback:function callback($$v){_vm.$set(_vm.appearance_settings,"login_panel_title",$$v);},expression:"appearance_settings.login_panel_title"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Login panel subtitle"}},[_c("b-form-input",{model:{value:_vm.appearance_settings.login_panel_subtitle,callback:function callback($$v){_vm.$set(_vm.appearance_settings,"login_panel_subtitle",$$v);},expression:"appearance_settings.login_panel_subtitle"}})],1)],1)],1)],1),_vm._v(" "),_c("b-row",{staticClass:"mt-4"},[_c("b-col",{staticClass:"d-flex justify-content-end",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:function click($event){return _vm.Submit_Appearance_Settings();}}},[_vm._v("\n"+_vm._s(_vm.$t("submit"))+"\n                        ")])],1)],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="pwa",expression:"activeTab === 'pwa'"}],staticClass:"tab-content"},[_c("div",{staticClass:"mb-4"},[_c("h5",{staticClass:"mb-3"},[_vm._v(_vm._s(_vm.$t("PWA_Icons")||"PWA Icons"))]),_vm._v(" "),_c("p",{staticClass:"text-muted mb-3"},[_vm._v(_vm._s(_vm.$t("PWA_Icons_Help")||"These icons are used by the installable PWAs (Admin, Portal, Online Store, Customer Display) on home screens and app launchers. Upload square PNG images; non-square images will be center-cropped."))]),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{ref:"PwaIcon192",attrs:{name:"PWA Icon 192",rules:"mimes:image/*|size:1024"},scopedSlots:_vm._u([{key:"default",fn:function fn(_ref3){var valid=_ref3.valid,errors=_ref3.errors;return _c("b-form-group",{attrs:{label:_vm.$t("PWA_Icon_192")||"App icon (192 x 192)"}},[_vm.pwa_settings.icon_192_url?_c("div",{staticClass:"d-flex align-items-center mb-2"},[_c("img",{staticStyle:{width:"64px",height:"64px","border-radius":"8px",border:"1px solid #e2e8f0","object-fit":"cover"},attrs:{src:_vm.pwa_settings.icon_192_url,alt:"PWA 192"}}),_vm._v(" "),_c("small",{staticClass:"text-muted ml-2"},[_vm._v(_vm._s(_vm.$t("Current_Icon")||"Current icon"))])]):_vm._e(),_vm._v(" "),_c("input",{staticClass:"form-control","class":{"is-invalid":!!errors.length},attrs:{state:errors[0]?false:valid?true:null,type:"file",accept:"image/*"},on:{change:_vm.onPwaIcon192Selected}}),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-1"},[_vm._v(_vm._s(_vm.$t("PWA_Icon_192_Hint")||"PNG recommended. 192x192. Max 1MB."))]),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"PwaIcon192-feedback"}},[_vm._v(_vm._s(errors[0]))])],1);}}],null,false,1415435697)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{ref:"PwaIcon512",attrs:{name:"PWA Icon 512",rules:"mimes:image/*|size:2048"},scopedSlots:_vm._u([{key:"default",fn:function fn(_ref4){var valid=_ref4.valid,errors=_ref4.errors;return _c("b-form-group",{attrs:{label:_vm.$t("PWA_Icon_512")||"App icon (512 x 512)"}},[_vm.pwa_settings.icon_512_url?_c("div",{staticClass:"d-flex align-items-center mb-2"},[_c("img",{staticStyle:{width:"96px",height:"96px","border-radius":"12px",border:"1px solid #e2e8f0","object-fit":"cover"},attrs:{src:_vm.pwa_settings.icon_512_url,alt:"PWA 512"}}),_vm._v(" "),_c("small",{staticClass:"text-muted ml-2"},[_vm._v(_vm._s(_vm.$t("Current_Icon")||"Current icon"))])]):_vm._e(),_vm._v(" "),_c("input",{staticClass:"form-control","class":{"is-invalid":!!errors.length},attrs:{state:errors[0]?false:valid?true:null,type:"file",accept:"image/*"},on:{change:_vm.onPwaIcon512Selected}}),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-1"},[_vm._v(_vm._s(_vm.$t("PWA_Icon_512_Hint")||"PNG recommended. 512x512. Max 2MB."))]),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"PwaIcon512-feedback"}},[_vm._v(_vm._s(errors[0]))])],1);}}],null,false,1006572421)})],1)],1)],1),_vm._v(" "),_c("b-row",{staticClass:"mt-4"},[_c("b-col",{staticClass:"d-flex justify-content-end",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary",size:"lg",disabled:_vm.pwaSubmitting},on:{click:function click($event){return _vm.Submit_Pwa_Settings();}}},[_vm._v("\n                          "+_vm._s(_vm.pwaSubmitting?_vm.$t("Saving")||"Saving...":_vm.$t("submit"))+"\n                        ")])],1)],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="localization",expression:"activeTab === 'localization'"}],staticClass:"tab-content"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("DefaultCurrency")}},[_c("v-select",{attrs:{reduce:function reduce(label){return label.value;},placeholder:_vm.$t("Choose_Currency"),options:_vm.currencies.map(function(currencies){return{label:currencies.name,value:currencies.id};}),clearable:false},model:{value:_vm.setting.currency_id,callback:function callback($$v){_vm.$set(_vm.setting,"currency_id",$$v);},expression:"setting.currency_id"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("DefaultLanguage")}},[_c("v-select",{attrs:{reduce:function reduce(label){return label.value;},placeholder:_vm.$t("DefaultLanguage"),options:_vm.languages.map(function(languages){return{label:languages.name,value:languages.locale};})},model:{value:_vm.setting.default_language,callback:function callback($$v){_vm.$set(_vm.setting,"default_language",$$v);},expression:"setting.default_language"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Time_Zone")}},[_c("v-select",{attrs:{placeholder:_vm.$t("Time_Zone"),reduce:function reduce(label){return label.value;},options:_vm.zones_array.map(function(zones_array){return{label:zones_array.label,value:zones_array.zone};})},on:{input:_vm.Selected_Time_Zone},model:{value:_vm.setting.timezone,callback:function callback($$v){_vm.$set(_vm.setting,"timezone",$$v);},expression:"setting.timezone"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Date_Format")||"Date Format"}},[_c("v-select",{attrs:{reduce:function reduce(label){return label.value;},placeholder:_vm.$t("Date_Format")||"Choose Date Format",options:_vm.dateFormatOptions,clearable:false},model:{value:_vm.setting.date_format,callback:function callback($$v){_vm.$set(_vm.setting,"date_format",$$v);},expression:"setting.date_format"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Price_Format")}},[_c("b-form-select",{attrs:{options:_vm.priceFormatOptions,"value-field":"value","text-field":"label"},model:{value:_vm.setting.price_format,callback:function callback($$v){_vm.$set(_vm.setting,"price_format",$$v);},expression:"setting.price_format"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Show_Languages")}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                            "+_vm._s(_vm.$t("Show_Languages"))+"\n                            "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.setting.show_language,expression:"setting.show_language"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.setting.show_language)?_vm._i(_vm.setting.show_language,null)>-1:_vm.setting.show_language},on:{change:function change($event){var $$a=_vm.setting.show_language,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.setting,"show_language",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.setting,"show_language",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.setting,"show_language",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])])],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Sidebar Layout"}},[_c("b-form-select",{attrs:{options:_vm.sidebarLayoutOptions},model:{value:_vm.sidebarLayoutModel,callback:function callback($$v){_vm.sidebarLayoutModel=$$v;},expression:"sidebarLayoutModel"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("DarkMode")||"Dark Mode"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                            "+_vm._s(_vm.$t("DarkMode")||"Dark Mode")+"\n                            "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.setting.dark_mode,expression:"setting.dark_mode"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.setting.dark_mode)?_vm._i(_vm.setting.dark_mode,null)>-1:_vm.setting.dark_mode},on:{change:function change($event){var $$a=_vm.setting.dark_mode,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.setting,"dark_mode",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.setting,"dark_mode",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.setting,"dark_mode",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])])],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("RTL")||"RTL (Right-to-Left)"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                            "+_vm._s(_vm.$t("RTL")||"RTL (Right-to-Left)")+"\n                            "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.setting.rtl,expression:"setting.rtl"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.setting.rtl)?_vm._i(_vm.setting.rtl,null)>-1:_vm.setting.rtl},on:{change:function change($event){var $$a=_vm.setting.rtl,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.setting,"rtl",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.setting,"rtl",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.setting,"rtl",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])])],1)],1),_vm._v(" "),_c("b-row",{staticClass:"mt-4"},[_c("b-col",{staticClass:"d-flex justify-content-end",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:function click($event){return _vm.Submit_General_Settings();}}},[_vm._v("\n"+_vm._s(_vm.$t("submit"))+"\n                        ")])],1)],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="features",expression:"activeTab === 'features'"}],staticClass:"tab-content"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Enable_3_Decimal_Pricing")||"Enable 3 Decimal Pricing"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                            "+_vm._s(_vm.$t("Enable_3_Decimal_Pricing")||"Enable 3 Decimal Pricing")+"\n                            "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.setting.enable_3_decimal_pricing,expression:"setting.enable_3_decimal_pricing"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.setting.enable_3_decimal_pricing)?_vm._i(_vm.setting.enable_3_decimal_pricing,null)>-1:_vm.setting.enable_3_decimal_pricing},on:{change:function change($event){var $$a=_vm.setting.enable_3_decimal_pricing,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.setting,"enable_3_decimal_pricing",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.setting,"enable_3_decimal_pricing",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.setting,"enable_3_decimal_pricing",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("p",{staticClass:"text-muted small mt-2 mb-0"},[_vm._v("\n                            "+_vm._s(_vm.$t("Enable_3_Decimal_Pricing_Help")||"When enabled, prices, costs, discounts, taxes and POS totals support up to 3 decimal places (e.g. 0.066) instead of being rounded to 2.")+"\n                          ")])])],1),_vm._v(" "),_vm.showKitchenDisplaySettings?_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("EnableKitchenDisplay")||"Enable Kitchen Display"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                            "+_vm._s(_vm.$t("EnableKitchenDisplay")||"Enable Kitchen Display")+"\n                            "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.setting.enable_kitchen_display,expression:"setting.enable_kitchen_display"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.setting.enable_kitchen_display)?_vm._i(_vm.setting.enable_kitchen_display,null)>-1:_vm.setting.enable_kitchen_display},on:{change:function change($event){var $$a=_vm.setting.enable_kitchen_display,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.setting,"enable_kitchen_display",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.setting,"enable_kitchen_display",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.setting,"enable_kitchen_display",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("p",{staticClass:"text-muted small mt-2 mb-0"},[_vm._v("\n                            "+_vm._s(_vm.$t("EnableKitchenDisplay_Help")||"When enabled, the POS shows kitchen routing options (Send to Kitchen / Save Without Sending / Send Later) and the Kitchen Display page becomes available to staff.")+"\n                          ")])])],1):_vm._e(),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Show_Product_GTIN")||"Show Barcode (GTIN, UPC, EAN, ISBN)"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                            "+_vm._s(_vm.$t("Show_Product_GTIN")||"Show Barcode (GTIN, UPC, EAN, ISBN)")+"\n                            "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.setting.show_product_gtin,expression:"setting.show_product_gtin"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.setting.show_product_gtin)?_vm._i(_vm.setting.show_product_gtin,null)>-1:_vm.setting.show_product_gtin},on:{change:function change($event){var $$a=_vm.setting.show_product_gtin,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.setting,"show_product_gtin",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.setting,"show_product_gtin",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.setting,"show_product_gtin",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("p",{staticClass:"text-muted small mt-2 mb-0"},[_vm._v("\n                            "+_vm._s(_vm.$t("Show_Product_GTIN_Help")||"When enabled, the Barcode (GTIN / UPC / EAN / ISBN) field is shown on the product create form. Turn off to hide it.")+"\n                          ")])])],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Serial_Numbers")||"Serial Numbers / IMEI"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                            "+_vm._s(_vm.$t("Track_Serial_IMEI")||"Track Serial Number / IMEI")+"\n                            "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.setting.show_serial_tracking,expression:"setting.show_serial_tracking"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.setting.show_serial_tracking)?_vm._i(_vm.setting.show_serial_tracking,null)>-1:_vm.setting.show_serial_tracking},on:{change:function change($event){var $$a=_vm.setting.show_serial_tracking,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.setting,"show_serial_tracking",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.setting,"show_serial_tracking",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.setting,"show_serial_tracking",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("p",{staticClass:"text-muted small mt-2 mb-0"},[_vm._v("\n                            "+_vm._s(_vm.$t("Track_Serial_IMEI_Hint")||"When enabled, products can opt in to per-unit serial / IMEI tracking, captured at purchase and selected at sale.")+"\n                          ")])])],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Multi_Pack_Selling")||"Multi-Pack Selling"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                            "+_vm._s(_vm.$t("Enable_Multi_Pack_Selling")||"Enable Multi-Pack Selling")+"\n                            "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.setting.enable_multi_pack_selling,expression:"setting.enable_multi_pack_selling"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.setting.enable_multi_pack_selling)?_vm._i(_vm.setting.enable_multi_pack_selling,null)>-1:_vm.setting.enable_multi_pack_selling},on:{change:function change($event){var $$a=_vm.setting.enable_multi_pack_selling,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.setting,"enable_multi_pack_selling",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.setting,"enable_multi_pack_selling",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.setting,"enable_multi_pack_selling",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("p",{staticClass:"text-muted small mt-2 mb-0"},[_vm._v("\n                            "+_vm._s(_vm.$t("Enable_Multi_Pack_Selling_Hint")||"When enabled, products can be sold in multiple quantity packs (e.g. single, 6-pack, case) each with its own price, while inventory stays in one base unit.")+"\n                          ")])])],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Offline_Sync")||"Offline Sync"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                            "+_vm._s(_vm.$t("Offline_Sync")||"Offline Sync")+"\n                            "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.setting.offline_sync_enabled,expression:"setting.offline_sync_enabled"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.setting.offline_sync_enabled)?_vm._i(_vm.setting.offline_sync_enabled,null)>-1:_vm.setting.offline_sync_enabled},on:{change:function change($event){var $$a=_vm.setting.offline_sync_enabled,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.setting,"offline_sync_enabled",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.setting,"offline_sync_enabled",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.setting,"offline_sync_enabled",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("p",{staticClass:"text-muted small mt-2 mb-0"},[_vm._v("\n                            "+_vm._s(_vm.$t("Offline_Sync_Help")||"When enabled, the POS can keep selling without internet and sync sales once back online. When disabled, the POS requires an active connection.")+"\n                          ")])])],1)],1),_vm._v(" "),_c("b-row",{staticClass:"mt-4"},[_c("b-col",{staticClass:"d-flex justify-content-end",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:function click($event){return _vm.Submit_General_Settings();}}},[_vm._v("\n"+_vm._s(_vm.$t("submit"))+"\n                        ")])],1)],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="defaults",expression:"activeTab === 'defaults'"}],staticClass:"tab-content"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("DefaultCustomer")}},[_c("v-select",{attrs:{reduce:function reduce(label){return label.value;},placeholder:_vm.$t("Choose_Customer"),options:_vm.clients.map(function(clients){return{label:clients.name,value:clients.id};})},model:{value:_vm.setting.client_id,callback:function callback($$v){_vm.$set(_vm.setting,"client_id",$$v);},expression:"setting.client_id"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("DefaultWarehouse")}},[_c("v-select",{attrs:{reduce:function reduce(label){return label.value;},placeholder:_vm.$t("Choose_Warehouse"),options:_vm.warehouses.map(function(warehouses){return{label:warehouses.name,value:warehouses.id};})},model:{value:_vm.setting.warehouse_id,callback:function callback($$v){_vm.$set(_vm.setting,"warehouse_id",$$v);},expression:"setting.warehouse_id"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Default_SMS_Gateway")}},[_c("v-select",{attrs:{reduce:function reduce(label){return label.value;},placeholder:_vm.$t("Choose_SMS_Gateway"),options:_vm.sms_gateway.map(function(sms_gateway){return{label:sms_gateway.title,value:sms_gateway.id};})},model:{value:_vm.setting.sms_gateway,callback:function callback($$v){_vm.$set(_vm.setting,"sms_gateway",$$v);},expression:"setting.sms_gateway"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Default_Account")}},[_c("v-select",{attrs:{reduce:function reduce(label){return label.value;},placeholder:_vm.$t("Choose_Account"),options:_vm.accounts.map(function(acc){return{label:(acc.account_name||"")+(acc.account_num?" ("+acc.account_num+")":""),value:acc.id};})},model:{value:_vm.setting.default_account_id,callback:function callback($$v){_vm.$set(_vm.setting,"default_account_id",$$v);},expression:"setting.default_account_id"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Default_Payment_Method")}},[_c("v-select",{attrs:{reduce:function reduce(label){return label.value;},placeholder:_vm.$t("Choose_Payment_Method"),options:_vm.payment_methods.map(function(pm){return{label:pm.name,value:pm.id};})},model:{value:_vm.setting.default_payment_method_id,callback:function callback($$v){_vm.$set(_vm.setting,"default_payment_method_id",$$v);},expression:"setting.default_payment_method_id"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"products_per_page",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("How_many_items_do_you_want_to_display_in_POS")}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"products_per_page-feedback",label:"How many items do you want to display in POS.",placeholder:"How many items do you want to display in POS.",type:"text"},model:{value:_vm.pos_settings.products_per_page,callback:function callback($$v){_vm.$set(_vm.pos_settings,"products_per_page",$$v);},expression:"pos_settings.products_per_page"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"products_per_page-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,3746662830)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"Default Tax",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("Default_Tax")+" (%)"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"default-tax-feedback",placeholder:"0.00",type:"number",step:"0.01",min:"0"},model:{value:_vm.setting.default_tax,callback:function callback($$v){_vm.$set(_vm.setting,"default_tax",_vm._n($$v));},expression:"setting.default_tax"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"default-tax-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,3058746822)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"Point To Amount Rate",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:"Point To Amount Rate * (Example: 1 Point = 0.10$)"}},[_c("b-input-group",{attrs:{append:_vm.currentUser.currency}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"point-to-amount-feedback",placeholder:"Example: 1 Point = 0.10$"},model:{value:_vm.setting.point_to_amount_rate,callback:function callback($$v){_vm.$set(_vm.setting,"point_to_amount_rate",_vm._n($$v));},expression:"setting.point_to_amount_rate"}})],1),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"point-to-amount-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,3512265242)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"12",md:"12",sm:"12"}},[_c("b-form-group",[_c("b-form-checkbox",{attrs:{"switch":""},model:{value:_vm.setting.quotation_with_stock,callback:function callback($$v){_vm.$set(_vm.setting,"quotation_with_stock",$$v);},expression:"setting.quotation_with_stock"}},[_vm._v(_vm._s(_vm.$t("Create_Quotation_with_Stock")))])],1)],1)],1),_vm._v(" "),_c("b-row",{staticClass:"mt-4"},[_c("b-col",{staticClass:"d-flex justify-content-end",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:function click($event){return _vm.Submit_General_Settings();}}},[_vm._v("\n"+_vm._s(_vm.$t("submit"))+"\n                        ")])],1)],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="dashboard",expression:"activeTab === 'dashboard'"}],staticClass:"tab-content dashboard-settings-tab"},[_c("b-row",[_c("b-col",{staticClass:"mb-4",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Default_Dashboard_Date_Range")}},[_c("b-form-select",{staticClass:"form-control",attrs:{options:_vm.dashboardDateRangeOptions},model:{value:_vm.setting.default_dashboard_date_range,callback:function callback($$v){_vm.$set(_vm.setting,"default_dashboard_date_range",$$v);},expression:"setting.default_dashboard_date_range"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v(_vm._s(_vm.$t("Default_Dashboard_Date_Range_Help")||"Initial date range when opening the dashboard."))])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-4",attrs:{lg:"3",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Dashboard_Font_Size")||"Dashboard font size"}},[_c("b-form-select",{staticClass:"form-control",attrs:{options:_vm.dashboardFontSizeOptions},model:{value:_vm.setting.dashboard_font_size,callback:function callback($$v){_vm.$set(_vm.setting,"dashboard_font_size",$$v);},expression:"setting.dashboard_font_size"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-4",attrs:{lg:"3",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Dashboard_Font_Family")||"Dashboard font family"}},[_c("b-form-select",{staticClass:"form-control",attrs:{options:_vm.dashboardFontFamilyOptions},model:{value:_vm.setting.dashboard_font_family,callback:function callback($$v){_vm.$set(_vm.setting,"dashboard_font_family",$$v);},expression:"setting.dashboard_font_family"}})],1)],1)],1),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"12"}},[_c("div",{staticClass:"dashboard-settings-card p-4 rounded"},[_c("div",{staticClass:"d-flex flex-wrap align-items-center justify-content-between mb-3"},[_c("div",[_c("h5",{staticClass:"mb-1 font-weight-bold"},[_vm._v(_vm._s(_vm.$t("Default_Dashboard_Widget_Order")||"Default dashboard widget order"))]),_vm._v(" "),_c("p",{staticClass:"text-muted small mb-0"},[_vm._v(_vm._s(_vm.$t("Dashboard_Widget_Order_Help")||"Drag and drop to reorder sections on the default dashboard."))])]),_vm._v(" "),_c("b-button",{staticClass:"mt-2 mt-md-0",attrs:{variant:"outline-secondary",size:"sm"},on:{click:_vm.resetDashboardSectionOrder}},[_c("lucide-icon",{staticClass:"mr-1",attrs:{name:"refresh-cw"}}),_vm._v(_vm._s(_vm.$t("Reset_to_Default")||"Reset to default")+"\n                            ")],1)],1),_vm._v(" "),_c("draggable",{staticClass:"list-unstyled dashboard-widget-order-list",attrs:{handle:".drag-handle",animation:220,"ghost-class":"dashboard-widget-order-ghost","chosen-class":"dashboard-widget-order-chosen","drag-class":"dashboard-widget-order-drag","force-fallback":true,tag:"ul"},on:{end:_vm.onDashboardSectionOrderChange},model:{value:_vm.dashboardSectionOrderList,callback:function callback($$v){_vm.dashboardSectionOrderList=$$v;},expression:"dashboardSectionOrderList"}},_vm._l(_vm.dashboardSectionOrderList,function(item,index){return _c("li",{key:item.id,staticClass:"dashboard-widget-order-item"},[_c("span",{staticClass:"drag-handle",attrs:{title:_vm.$t("Drag_to_reorder")||"Drag to reorder"}},[_c("lucide-icon",{attrs:{name:"grip-vertical"}})],1),_vm._v(" "),_c("span",{staticClass:"widget-order-number"},[_vm._v(_vm._s(index+1))]),_vm._v(" "),_c("span",{staticClass:"widget-order-label"},[_vm._v(_vm._s(_vm.$t(item.labelKey)||item.labelKey))])]);}),0)],1)])],1),_vm._v(" "),_c("b-row",{staticClass:"mt-4"},[_c("b-col",{staticClass:"d-flex justify-content-end",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:function click($event){return _vm.Submit_General_Settings();}}},[_vm._v("\n                          "+_vm._s(_vm.$t("submit"))+"\n                        ")])],1)],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="prefixes",expression:"activeTab === 'prefixes'"}],staticClass:"tab-content"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Sale Prefix"}},[_c("b-form-input",{attrs:{placeholder:"SL",maxlength:"10"},model:{value:_vm.setting.sale_prefix,callback:function callback($$v){_vm.$set(_vm.setting,"sale_prefix",$$v);},expression:"setting.sale_prefix"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v("Example: SL (will be prepended to sale reference numbers like SL_0001)")])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Purchase Prefix"}},[_c("b-form-input",{attrs:{placeholder:"PR",maxlength:"10"},model:{value:_vm.setting.purchase_prefix,callback:function callback($$v){_vm.$set(_vm.setting,"purchase_prefix",$$v);},expression:"setting.purchase_prefix"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v("Example: PR (will be prepended to purchase reference numbers like PR_0001)")])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Quotation Prefix"}},[_c("b-form-input",{attrs:{placeholder:"QT",maxlength:"10"},model:{value:_vm.setting.quotation_prefix,callback:function callback($$v){_vm.$set(_vm.setting,"quotation_prefix",$$v);},expression:"setting.quotation_prefix"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v("Example: QT (will be prepended to quotation reference numbers like QT_0001)")])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Adjustment Prefix"}},[_c("b-form-input",{attrs:{placeholder:"AD",maxlength:"10"},model:{value:_vm.setting.adjustment_prefix,callback:function callback($$v){_vm.$set(_vm.setting,"adjustment_prefix",$$v);},expression:"setting.adjustment_prefix"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v("Example: AD (will be prepended to adjustment reference numbers like AD_0001)")])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Transfer Prefix"}},[_c("b-form-input",{attrs:{placeholder:"TR",maxlength:"10"},model:{value:_vm.setting.transfer_prefix,callback:function callback($$v){_vm.$set(_vm.setting,"transfer_prefix",$$v);},expression:"setting.transfer_prefix"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v("Example: TR (will be prepended to transfer reference numbers like TR_0001)")])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Sale Return Prefix"}},[_c("b-form-input",{attrs:{placeholder:"RT",maxlength:"10"},model:{value:_vm.setting.sale_return_prefix,callback:function callback($$v){_vm.$set(_vm.setting,"sale_return_prefix",$$v);},expression:"setting.sale_return_prefix"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v("Example: RT (will be prepended to sale return reference numbers like RT_0001)")])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Purchase Return Prefix"}},[_c("b-form-input",{attrs:{placeholder:"RT",maxlength:"10"},model:{value:_vm.setting.purchase_return_prefix,callback:function callback($$v){_vm.$set(_vm.setting,"purchase_return_prefix",$$v);},expression:"setting.purchase_return_prefix"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v("Example: RT (will be prepended to purchase return reference numbers like RT_0001)")])],1)],1)],1),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"12"}},[_c("div",{staticClass:"alert alert-info"},[_c("strong",[_vm._v("Note:")]),_vm._v(" If a prefix is empty, the system will use the default prefix (SL for sales, PR for purchases, QT for quotations, AD for adjustments, TR for transfers, RT for returns). \n                          Prefixes only apply to newly created records.\n                        ")])])],1),_vm._v(" "),_c("b-row",{staticClass:"mt-4"},[_c("b-col",{staticClass:"d-flex justify-content-end",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:function click($event){return _vm.Submit_General_Settings();}}},[_vm._v("\n"+_vm._s(_vm.$t("submit"))+"\n                        ")])],1)],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="mail",expression:"activeTab === 'mail'"}],staticClass:"tab-content"},[_c("validation-observer",{ref:"mailObserver"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"MAIL_MAILER",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:"MAIL_MAILER *"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"MAIL_MAILER-feedback",placeholder:"MAIL_MAILER"},model:{value:_vm.mail_settings.mail_mailer,callback:function callback($$v){_vm.$set(_vm.mail_settings,"mail_mailer",$$v);},expression:"mail_settings.mail_mailer"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"MAIL_MAILER-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))]),_vm._v(" "),_c("small",{staticClass:"text-danger"},[_vm._v('Supported: "smtp", "sendmail", "mailgun", "ses","postmark", "log"')])],1)];}}],null,false,2402562240)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"HOST",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:"MAIL_HOST *"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"HOST-feedback",placeholder:"MAIL_HOST"},model:{value:_vm.mail_settings.host,callback:function callback($$v){_vm.$set(_vm.mail_settings,"host",$$v);},expression:"mail_settings.host"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"HOST-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,2729954723)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"PORT",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:"MAIL_PORT *"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"PORT-feedback",placeholder:"MAIL_PORT"},model:{value:_vm.mail_settings.port,callback:function callback($$v){_vm.$set(_vm.mail_settings,"port",$$v);},expression:"mail_settings.port"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"PORT-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,2883512410)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"sender",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:"Sender Name *"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"sender-feedback",placeholder:"Sender Name"},model:{value:_vm.mail_settings.sender_name,callback:function callback($$v){_vm.$set(_vm.mail_settings,"sender_name",$$v);},expression:"mail_settings.sender_name"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"sender-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,4141202032)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"sender_email",rules:{required:true,email:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:"Sender Email *"}},[_c("b-form-input",{attrs:{type:"email",state:_vm.getValidationState(validationContext),"aria-describedby":"sender_email-feedback",placeholder:"Sender Email"},model:{value:_vm.mail_settings.sender_email,callback:function callback($$v){_vm.$set(_vm.mail_settings,"sender_email",$$v);},expression:"mail_settings.sender_email"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"sender_email-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,4069127577)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"Username",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:"MAIL_USERNAME *"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"Username-feedback",placeholder:"MAIL_USERNAME"},model:{value:_vm.mail_settings.username,callback:function callback($$v){_vm.$set(_vm.mail_settings,"username",$$v);},expression:"mail_settings.username"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"Username-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,2392933365)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"Password",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:"MAIL_PASSWORD *"}},[_c("b-form-input",{attrs:{type:"password",state:_vm.getValidationState(validationContext),"aria-describedby":"Password-feedback",placeholder:"MAIL_PASSWORD"},model:{value:_vm.mail_settings.password,callback:function callback($$v){_vm.$set(_vm.mail_settings,"password",$$v);},expression:"mail_settings.password"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"Password-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,3853334093)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"encryption",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:"MAIL_ENCRYPTION *"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"encryption-feedback",placeholder:"MAIL_ENCRYPTION"},model:{value:_vm.mail_settings.encryption,callback:function callback($$v){_vm.$set(_vm.mail_settings,"encryption",$$v);},expression:"mail_settings.encryption"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"encryption-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,1824051788)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"12",md:"12",sm:"12"}},[_c("b-form-group",{staticClass:"d-flex align-items-center gap-2"},[_c("b-button",{attrs:{variant:"primary"},on:{click:function click($event){return _vm.Update_Mail_Settings();}}},[_vm._v("\n                            "+_vm._s(_vm.$t("submit"))+"\n                          ")]),_vm._v(" "),_c("b-button",{attrs:{variant:"outline-secondary",disabled:_vm.isTestingMail},on:{click:function click($event){return _vm.Test_Mail_Settings();}}},[!_vm.isTestingMail?_c("span",[_vm._v("\n                              Save & Test Mail\n                            ")]):_c("span",[_vm._v("\n                              "+_vm._s(_vm.$t("Loading"))+"...\n                            ")])])],1)],1)],1)],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="payment",expression:"activeTab === 'payment'"}],staticClass:"tab-content"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"STRIPE_KEY"}},[_c("b-form-input",{attrs:{type:"password",placeholder:_vm.$t("LeaveBlank")},model:{value:_vm.gateway.stripe_key,callback:function callback($$v){_vm.$set(_vm.gateway,"stripe_key",$$v);},expression:"gateway.stripe_key"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v(_vm._s(_vm.$t("LeaveBlank"))+" "+_vm._s(_vm.$t("to_keep_current_value")))])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"STRIPE_SECRET"}},[_c("b-form-input",{attrs:{type:"password",placeholder:_vm.$t("LeaveBlank")},model:{value:_vm.gateway.stripe_secret,callback:function callback($$v){_vm.$set(_vm.gateway,"stripe_secret",$$v);},expression:"gateway.stripe_secret"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v(_vm._s(_vm.$t("LeaveBlank"))+" "+_vm._s(_vm.$t("to_keep_current_value")))])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"12",md:"12",sm:"12"}},[_c("b-form-group",[_c("b-form-checkbox",{attrs:{"switch":""},model:{value:_vm.gateway.deleted,callback:function callback($$v){_vm.$set(_vm.gateway,"deleted",$$v);},expression:"gateway.deleted"}},[_vm._v("\n                            "+_vm._s(_vm.$t("Remove_Stripe_Key_Secret"))+"\n                          ")]),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-1"},[_vm._v(_vm._s(_vm.$t("Enable_to_remove_stored_credentials")))])],1)],1)],1),_vm._v(" "),_c("b-row",{staticClass:"mt-4"},[_c("b-col",{staticClass:"d-flex justify-content-end",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:function click($event){return _vm.Update_Payment();}}},[_vm._v("\n"+_vm._s(_vm.$t("submit"))+"\n                        ")])],1)],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="sms",expression:"activeTab === 'sms'"}],staticClass:"tab-content"},[_c("div",{staticClass:"sms-section mb-4"},[_c("h5",{staticClass:"mb-3"},[_vm._v(_vm._s(_vm.$t("Default_SMS_Gateway")))]),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Default_SMS_Gateway")}},[_c("v-select",{attrs:{reduce:function reduce(label){return label.value;},placeholder:_vm.$t("Choose_SMS_Gateway"),options:_vm.sms_settings.sms_gateway.map(function(gateway){return{label:gateway.title,value:gateway.id};})},model:{value:_vm.sms_settings.default_sms_gateway,callback:function callback($$v){_vm.$set(_vm.sms_settings,"default_sms_gateway",$$v);},expression:"sms_settings.default_sms_gateway"}})],1)],1)],1),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary"},on:{click:function click($event){return _vm.Update_Default_SMS();}}},[_vm._v("\n                            "+_vm._s(_vm.$t("submit"))+"\n                          ")])],1)],1)],1),_vm._v(" "),_c("hr",{staticClass:"my-4"}),_vm._v(" "),_c("div",{staticClass:"sms-section mb-4"},[_c("h5",{staticClass:"mb-3"},[_vm._v("Termii")]),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"TERMI_KEY",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:"Termii KEY *"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"TERMI_KEY-feedback"},model:{value:_vm.sms_settings.termi.TERMI_KEY,callback:function callback($$v){_vm.$set(_vm.sms_settings.termi,"TERMI_KEY",$$v);},expression:"sms_settings.termi.TERMI_KEY"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"TERMI_KEY-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,3697070093)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"TERMI_SECRET",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:"Termii SECRET *"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"TERMI_SECRET-feedback"},model:{value:_vm.sms_settings.termi.TERMI_SECRET,callback:function callback($$v){_vm.$set(_vm.sms_settings.termi,"TERMI_SECRET",$$v);},expression:"sms_settings.termi.TERMI_SECRET"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"TERMI_SECRET-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,3777322093)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"TERMI_SENDER",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:"Termii Sender *"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"TERMI_SENDER-feedback"},model:{value:_vm.sms_settings.termi.TERMI_SENDER,callback:function callback($$v){_vm.$set(_vm.sms_settings.termi,"TERMI_SENDER",$$v);},expression:"sms_settings.termi.TERMI_SENDER"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"TERMI_SENDER-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,1072914253)})],1)],1),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary"},on:{click:function click($event){return _vm.Update_Termi_SMS();}}},[_vm._v("\n                            "+_vm._s(_vm.$t("submit"))+"\n                          ")])],1)],1)],1),_vm._v(" "),_c("hr",{staticClass:"my-4"}),_vm._v(" "),_c("div",{staticClass:"sms-section mb-4"},[_c("h5",{staticClass:"mb-3"},[_vm._v("TWILIO SMS")]),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"TWILIO_SID",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:"TWILIO SID *"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"TWILIO_SID-feedback"},model:{value:_vm.sms_settings.twilio.TWILIO_SID,callback:function callback($$v){_vm.$set(_vm.sms_settings.twilio,"TWILIO_SID",$$v);},expression:"sms_settings.twilio.TWILIO_SID"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"TWILIO_SID-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,2416046467)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"TWILIO TOKEN *"}},[_c("b-form-input",{attrs:{placeholder:_vm.$t("LeaveBlank")},model:{value:_vm.sms_settings.twilio.TWILIO_TOKEN,callback:function callback($$v){_vm.$set(_vm.sms_settings.twilio,"TWILIO_TOKEN",$$v);},expression:"sms_settings.twilio.TWILIO_TOKEN"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v(_vm._s(_vm.$t("LeaveBlank"))+" "+_vm._s(_vm.$t("to_keep_current_value")))])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"TWILIO_FROM",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:"TWILIO FROM *"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"TWILIO_FROM-feedback"},model:{value:_vm.sms_settings.twilio.TWILIO_FROM,callback:function callback($$v){_vm.$set(_vm.sms_settings.twilio,"TWILIO_FROM",$$v);},expression:"sms_settings.twilio.TWILIO_FROM"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"TWILIO_FROM-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,3720590339)})],1)],1),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary"},on:{click:function click($event){return _vm.Update_Twilio_SMS();}}},[_vm._v("\n                            "+_vm._s(_vm.$t("submit"))+"\n                          ")])],1)],1)],1),_vm._v(" "),_c("hr",{staticClass:"my-4"}),_vm._v(" "),_c("div",{staticClass:"sms-section mb-4"},[_c("h5",{staticClass:"mb-3"},[_vm._v("InfoBip")]),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"BASE URL"}},[_c("b-form-input",{model:{value:_vm.sms_settings.infobip.base_url,callback:function callback($$v){_vm.$set(_vm.sms_settings.infobip,"base_url",$$v);},expression:"sms_settings.infobip.base_url"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"API KEY"}},[_c("b-form-input",{model:{value:_vm.sms_settings.infobip.api_key,callback:function callback($$v){_vm.$set(_vm.sms_settings.infobip,"api_key",$$v);},expression:"sms_settings.infobip.api_key"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"SMS sender number Or Name"}},[_c("b-form-input",{model:{value:_vm.sms_settings.infobip.sender_from,callback:function callback($$v){_vm.$set(_vm.sms_settings.infobip,"sender_from",$$v);},expression:"sms_settings.infobip.sender_from"}})],1)],1)],1),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary"},on:{click:function click($event){return _vm.Update_Infobip_SMS();}}},[_vm._v("\n                            "+_vm._s(_vm.$t("submit"))+"\n                          ")])],1)],1),_vm._v(" "),_c("b-row",{staticClass:"mt-3"},[_c("b-col",{attrs:{lg:"12"}},[_c("div",{staticClass:"info-box p-3 bg-light rounded"},[_c("p",{staticClass:"mb-2"},[_c("strong",[_vm._v("BASE_URL :")]),_vm._v(" The Infobip data center used for API traffic.")]),_vm._v(" "),_c("p",{staticClass:"mb-2"},[_c("strong",[_vm._v("API_KEY :")]),_vm._v(" Authentication method. See API documentation")]),_vm._v(" "),_c("p",{staticClass:"mb-2"},[_c("strong",[_vm._v("SMS sender number Or Name :")]),_vm._v(" displayed on recipient's device as message sender.")]),_vm._v(" "),_c("p",{staticClass:"mb-0"},[_c("strong",[_vm._v("API Reference:")]),_vm._v(" "),_c("a",{attrs:{href:"https://www.infobip.com/docs/api",target:"_blank"}},[_vm._v("https://www.infobip.com/docs/api")])])])])],1)],1),_vm._v(" "),_c("div",{staticClass:"sms-section mb-4"},[_c("h5",{staticClass:"mb-3"},[_vm._v(_vm._s(_vm.$t("Custom_SMS_Gateway")))]),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"8",md:"8",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Custom_SMS_Api_Url")+" *"}},[_c("b-form-input",{attrs:{placeholder:"https://api.provider.com/sms/send"},model:{value:_vm.sms_settings.custom.api_url,callback:function callback($$v){_vm.$set(_vm.sms_settings.custom,"api_url",$$v);},expression:"sms_settings.custom.api_url"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Custom_SMS_Method")}},[_c("v-select",{attrs:{clearable:false,options:["POST","GET","PUT"]},model:{value:_vm.sms_settings.custom.method,callback:function callback($$v){_vm.$set(_vm.sms_settings.custom,"method",$$v);},expression:"sms_settings.custom.method"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Custom_SMS_Content_Type")}},[_c("v-select",{attrs:{clearable:false,options:["json","form"]},model:{value:_vm.sms_settings.custom.content_type,callback:function callback($$v){_vm.$set(_vm.sms_settings.custom,"content_type",$$v);},expression:"sms_settings.custom.content_type"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Custom_SMS_Sender")}},[_c("b-form-input",{attrs:{placeholder:"Sender ID or phone"},model:{value:_vm.sms_settings.custom.sender,callback:function callback($$v){_vm.$set(_vm.sms_settings.custom,"sender",$$v);},expression:"sms_settings.custom.sender"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Custom_SMS_Success_Keyword")}},[_c("b-form-input",{attrs:{placeholder:"e.g. success"},model:{value:_vm.sms_settings.custom.success_keyword,callback:function callback($$v){_vm.$set(_vm.sms_settings.custom,"success_keyword",$$v);},expression:"sms_settings.custom.success_keyword"}})],1)],1),_vm._v(" "),_c("b-col",{attrs:{md:"12"}},[_c("label",{staticClass:"font-weight-bold mt-2"},[_vm._v(_vm._s(_vm.$t("Custom_SMS_Headers")))]),_vm._v(" "),_vm._l(_vm.sms_settings.customHeaderRows,function(row,idx){return _c("b-row",{key:"sys-h-"+idx,staticClass:"align-items-center"},[_c("b-col",{staticClass:"mb-2",attrs:{lg:"5",md:"5",sm:"12"}},[_c("b-form-input",{attrs:{placeholder:"Header name (e.g. Authorization)"},model:{value:row.key,callback:function callback($$v){_vm.$set(row,"key",$$v);},expression:"row.key"}})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-2",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-input",{attrs:{placeholder:"Header value (e.g. Bearer xxx)"},model:{value:row.value,callback:function callback($$v){_vm.$set(row,"value",$$v);},expression:"row.value"}})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-2",attrs:{lg:"1",md:"1",sm:"12"}},[_c("b-button",{attrs:{variant:"outline-danger",size:"sm"},on:{click:function click($event){return _vm.sms_removeHeaderRow(idx);}}},[_c("lucide-icon",{attrs:{name:"x"}})],1)],1)],1);}),_vm._v(" "),_c("b-button",{staticClass:"mb-3",attrs:{variant:"outline-primary",size:"sm"},on:{click:_vm.sms_addHeaderRow}},[_c("lucide-icon",{attrs:{name:"plus"}}),_vm._v(" "+_vm._s(_vm.$t("Custom_SMS_Add_Header"))+"\n                          ")],1)],2),_vm._v(" "),_c("b-col",{attrs:{md:"12"}},[_c("label",{staticClass:"font-weight-bold mt-2"},[_vm._v(_vm._s(_vm.$t("Custom_SMS_Payload")))]),_vm._v(" "),_c("p",{staticClass:"text-muted small"},[_vm._v(_vm._s(_vm.$t("Custom_SMS_Payload_Hint")))]),_vm._v(" "),_vm._l(_vm.sms_settings.customPayloadRows,function(row,idx){return _c("b-row",{key:"sys-p-"+idx,staticClass:"align-items-center"},[_c("b-col",{staticClass:"mb-2",attrs:{lg:"5",md:"5",sm:"12"}},[_c("b-form-input",{attrs:{placeholder:"Field name (e.g. to)"},model:{value:row.key,callback:function callback($$v){_vm.$set(row,"key",$$v);},expression:"row.key"}})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-2",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-input",{attrs:{placeholder:"Value (e.g. {phone})"},model:{value:row.value,callback:function callback($$v){_vm.$set(row,"value",$$v);},expression:"row.value"}})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-2",attrs:{lg:"1",md:"1",sm:"12"}},[_c("b-button",{attrs:{variant:"outline-danger",size:"sm"},on:{click:function click($event){return _vm.sms_removePayloadRow(idx);}}},[_c("lucide-icon",{attrs:{name:"x"}})],1)],1)],1);}),_vm._v(" "),_c("b-button",{staticClass:"mb-3",attrs:{variant:"outline-primary",size:"sm"},on:{click:_vm.sms_addPayloadRow}},[_c("lucide-icon",{attrs:{name:"plus"}}),_vm._v(" "+_vm._s(_vm.$t("Custom_SMS_Add_Field"))+"\n                          ")],1)],2)],1),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary"},on:{click:function click($event){return _vm.Update_Custom_SMS();}}},[_vm._v("\n                            "+_vm._s(_vm.$t("submit"))+"\n                          ")])],1)],1),_vm._v(" "),_c("b-row",{staticClass:"mt-3"},[_c("b-col",{attrs:{lg:"12"}},[_c("div",{staticClass:"info-box p-3 bg-light rounded"},[_c("p",{staticClass:"mb-0"},[_c("strong",[_vm._v(_vm._s(_vm.$t("Custom_SMS_Placeholders"))+":")]),_vm._v(" "),_c("code",[_vm._v("{phone}")]),_vm._v(", "),_c("code",[_vm._v("{message}")]),_vm._v(", "),_c("code",[_vm._v("{sender}")])])])])],1)],1)]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="pos",expression:"activeTab === 'pos'"}],staticClass:"tab-content"},[_c("b-row",[_c("b-col",{staticClass:"mb-4",attrs:{cols:"12"}},[_c("b-alert",{staticClass:"mb-0",attrs:{show:"",variant:"info"}},[_vm._v("\n                      POS receipt configuration – choose a layout and toggle what appears on the printed receipt.\n                    ")])],1)],1),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-2",attrs:{lg:"12",md:"12",sm:"12"}},[_c("b-form-group",{attrs:{label:"POS receipt layout"}},[_c("b-form-radio-group",{attrs:{options:[{value:1,text:"Layout 1 - Standard"},{value:2,text:"Layout 2 - Compact"},{value:3,text:"Layout 3 - Detailed"},{value:4,text:"Layout 4 - Bilingual (AR+EN)"},{value:5,text:"Layout 5 - Minimal"}],buttons:"","button-variant":"outline-primary",size:"sm"},model:{value:_vm.pos_settings.receipt_layout,callback:function callback($$v){_vm.$set(_vm.pos_settings,"receipt_layout",$$v);},expression:"pos_settings.receipt_layout"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"12",md:"12",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("POS_receipt_layout_default")}},[_c("b-form-select",{attrs:{options:[{value:1,text:_vm.$t("Layout_1_Standard")},{value:2,text:_vm.$t("Layout_2_Compact")},{value:3,text:_vm.$t("Layout_3_Detailed")},{value:4,text:_vm.$t("Layout_4_Bilingual")},{value:5,text:_vm.$t("Layout_5_Minimal")}]},model:{value:_vm.pos_settings.receipt_layout,callback:function callback($$v){_vm.$set(_vm.pos_settings,"receipt_layout",$$v);},expression:"pos_settings.receipt_layout"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-4",attrs:{lg:"12",md:"12",sm:"12"}},[_c("b-card",[_c("div",{staticClass:"d-flex justify-content-between align-items-center mb-2"},[_c("h6",{staticClass:"mb-0"},[_vm._v("Receipt preview")]),_vm._v(" "),_c("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:_vm.printPosDemo}},[_c("lucide-icon",{staticClass:"mr-1",attrs:{name:"receipt"}}),_vm._v(" Print demo receipt\n                        ")],1)],1),_vm._v(" "),_c("div",{staticClass:"pos-receipt-demo",attrs:{id:"pos-receipt-demo"}},[_vm.currentReceiptLayout===1?_c("div",{staticClass:"receipt-layout-1"},[_c("div",{staticClass:"info text-center mb-2"},[_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_logo!==0,expression:"pos_settings.show_logo !== 0"}],staticClass:"invoice_logo mb-1"},[_c("div",{staticClass:"demo-logo-circle"},[_vm._v("LOGO")])]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_store_name!==0,expression:"pos_settings.show_store_name !== 0"}]},[_vm._v("Demo Store")]),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_reference!==0,expression:"pos_settings.show_reference !== 0"}]},[_vm._v("Ref: REF-12345")]),_c("br",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_reference!==0,expression:"pos_settings.show_reference !== 0"}]}),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_address,expression:"pos_settings.show_address"}]},[_vm._v("123 Demo Street")]),_c("br",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_address,expression:"pos_settings.show_address"}]}),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_phone,expression:"pos_settings.show_phone"}]},[_vm._v("+123 456 789")]),_c("br",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_phone,expression:"pos_settings.show_phone"}]}),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_email,expression:"pos_settings.show_email"}]},[_vm._v("demo@example.com")]),_vm._v(" "),_c("div",{staticClass:"mt-2"},[_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_date!==0,expression:"pos_settings.show_date !== 0"}]},[_vm._v("Date: 2025-12-10 12:34")]),_c("br"),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_seller!==0,expression:"pos_settings.show_seller !== 0"}]},[_vm._v("Seller: John Doe")]),_c("br"),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_customer,expression:"pos_settings.show_customer"}]},[_vm._v("Customer: Jane Smith")]),_c("br"),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_Warehouse,expression:"pos_settings.show_Warehouse"}]},[_vm._v("Warehouse: Main Store")])])]),_vm._v(" "),_c("table",{staticClass:"table_data w-100 mb-2",staticStyle:{"font-size":"11px"}},[_c("tbody",[_c("tr",[_c("td",{attrs:{colspan:"3"}},[_vm._v("\n                                  Demo Product A"),_c("br"),_vm._v(" "),_c("small",[_vm._v("2 x 10.00")]),_vm._v(" "),_c("br",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_product_discount!==0,expression:"pos_settings.show_product_discount !== 0"}]}),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_product_discount!==0,expression:"pos_settings.show_product_discount !== 0"}],staticStyle:{color:"#888","font-style":"italic"}},[_vm._v("Discount: -2.00")])]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("20.00")])]),_vm._v(" "),_c("tr",[_c("td",{attrs:{colspan:"3"}},[_vm._v("\n                                  Demo Product B"),_c("br"),_vm._v(" "),_c("small",[_vm._v("1 x 5.00")])]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("5.00")])])])]),_vm._v(" "),_c("table",{staticClass:"table_data w-100",staticStyle:{"font-size":"11px"}},[_c("tbody",[_c("tr",[_c("td",{staticClass:"total"},[_vm._v("Total")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("25.00")])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_paid!==0,expression:"pos_settings.show_paid !== 0"}]},[_c("td",{staticClass:"total"},[_vm._v("Paid")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("20.00")])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_due!==0,expression:"pos_settings.show_due !== 0"}]},[_c("td",{staticClass:"total"},[_vm._v("Due")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("5.00")])])])]),_vm._v(" "),_c("table",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_payments!==0,expression:"pos_settings.show_payments !== 0"}],staticClass:"table_data w-100 mt-1",staticStyle:{"font-size":"11px"}},[_c("thead",[_c("tr",[_c("th",{staticStyle:{"text-align":"left"}},[_vm._v("Pay By")]),_vm._v(" "),_c("th",{staticStyle:{"text-align":"right"}},[_vm._v("Amount")]),_vm._v(" "),_c("th",{staticStyle:{"text-align":"right"}},[_vm._v("Change")])])]),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",[_vm._v("Cash")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("20.00")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("0.00")])])])]),_vm._v(" "),_c("p",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_note,expression:"pos_settings.show_note"}],staticClass:"mt-2 mb-0 text-center",staticStyle:{"white-space":"pre-line"}},[_c("small",[_c("strong",[_vm._v(_vm._s(_vm.pos_settings.note_customer||"Thank you for your purchase!"))])])]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_zatca_qr!==0,expression:"pos_settings.show_zatca_qr !== 0"}],staticClass:"mt-2 text-center"},[_c("div",{staticClass:"zatca-qr"},[_c("div",{staticClass:"zatca-qr-title"},[_vm._v("ZATCA")]),_vm._v(" "),_c("div",{staticClass:"demo-qr-box"})])])]):_vm.currentReceiptLayout===2?_c("div",{staticClass:"receipt-layout-2"},[_c("div",{staticClass:"info text-center mb-2"},[_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_logo!==0,expression:"pos_settings.show_logo !== 0"}],staticClass:"demo-logo-circle small mb-1"},[_vm._v("\n                              LOGO\n                            ")]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_store_name!==0,expression:"pos_settings.show_store_name !== 0"}]},[_vm._v("Demo Store")]),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_reference!==0,expression:"pos_settings.show_reference !== 0"}]},[_vm._v("Ref: REF-12345")]),_c("br",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_reference!==0,expression:"pos_settings.show_reference !== 0"}]}),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_address,expression:"pos_settings.show_address"}]},[_vm._v("123 Demo Street")]),_c("br",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_address,expression:"pos_settings.show_address"}]}),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_phone,expression:"pos_settings.show_phone"}]},[_vm._v("+123 456 789")]),_c("br",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_phone,expression:"pos_settings.show_phone"}]}),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_email,expression:"pos_settings.show_email"}]},[_vm._v("demo@example.com")]),_vm._v(" "),_c("div",{staticClass:"mt-1"},[_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_date!==0,expression:"pos_settings.show_date !== 0"}]},[_vm._v("Date: 2025-12-10 12:34")]),_c("br"),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_seller!==0,expression:"pos_settings.show_seller !== 0"}]},[_vm._v("Seller: John Doe")]),_c("br"),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_customer,expression:"pos_settings.show_customer"}]},[_vm._v("Customer: Jane Smith")]),_c("br"),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_Warehouse,expression:"pos_settings.show_Warehouse"}]},[_vm._v("Warehouse: Main Store")])])]),_vm._v(" "),_c("table",{staticClass:"table_data w-100 mb-2",staticStyle:{"font-size":"11px"}},[_c("thead",[_c("tr",[_c("th",{staticStyle:{"text-align":"left"}},[_vm._v("Item")]),_vm._v(" "),_c("th",{staticStyle:{"text-align":"center"}},[_vm._v("Qty")]),_vm._v(" "),_c("th",{staticStyle:{"text-align":"right"}},[_vm._v("Price")]),_vm._v(" "),_c("th",{staticStyle:{"text-align":"right"}},[_vm._v("Total")])])]),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",[_vm._v("Demo A")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"center"}},[_vm._v("2")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("10.00")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("20.00")])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_product_discount!==0,expression:"pos_settings.show_product_discount !== 0"}]},[_c("td",{staticStyle:{color:"#888","font-style":"italic","font-size":"10px","padding-left":"8px"},attrs:{colspan:"4"}},[_vm._v("Discount: -2.00")])]),_vm._v(" "),_c("tr",[_c("td",[_vm._v("Demo B")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"center"}},[_vm._v("1")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("5.00")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("5.00")])])])]),_vm._v(" "),_c("table",{staticClass:"table_data w-100",staticStyle:{"font-size":"11px"}},[_c("tbody",[_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_tax,expression:"pos_settings.show_tax"}]},[_c("td",{staticClass:"total"},[_vm._v("Tax")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("1.25")])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_discount,expression:"pos_settings.show_discount"}]},[_c("td",{staticClass:"total"},[_vm._v("Discount")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("0.00")])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_shipping,expression:"pos_settings.show_shipping"}]},[_c("td",{staticClass:"total"},[_vm._v("Shipping")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("1.25")])]),_vm._v(" "),_c("tr",[_c("td",{staticClass:"total"},[_vm._v("Total")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("25.00")])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_paid!==0,expression:"pos_settings.show_paid !== 0"}]},[_c("td",{staticClass:"total"},[_vm._v("Paid")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("20.00")])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_due!==0,expression:"pos_settings.show_due !== 0"}]},[_c("td",{staticClass:"total"},[_vm._v("Due")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("5.00")])])])]),_vm._v(" "),_c("table",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_payments!==0,expression:"pos_settings.show_payments !== 0"}],staticClass:"table_data w-100 mt-1",staticStyle:{"font-size":"11px"}},[_c("thead",[_c("tr",[_c("th",{staticStyle:{"text-align":"left"}},[_vm._v("Pay By")]),_vm._v(" "),_c("th",{staticStyle:{"text-align":"right"}},[_vm._v("Amount")]),_vm._v(" "),_c("th",{staticStyle:{"text-align":"right"}},[_vm._v("Change")])])]),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",[_vm._v("Cash")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("20.00")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("0.00")])])])]),_vm._v(" "),_c("p",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_note,expression:"pos_settings.show_note"}],staticClass:"mt-2 mb-0 text-center",staticStyle:{"white-space":"pre-line"}},[_c("small",[_c("strong",[_vm._v(_vm._s(_vm.pos_settings.note_customer||"Thank you for your purchase!"))])])]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_zatca_qr!==0,expression:"pos_settings.show_zatca_qr !== 0"}],staticClass:"mt-2 text-center"},[_c("div",{staticClass:"zatca-qr"},[_c("div",{staticClass:"zatca-qr-title"},[_vm._v("ZATCA")]),_vm._v(" "),_c("div",{staticClass:"demo-qr-box"})])])]):_vm.currentReceiptLayout===3?_c("div",{staticClass:"receipt-layout-3"},[_c("div",{staticClass:"info mb-2"},[_c("div",{staticClass:"d-flex justify-content-between"},[_c("div",[_c("strong",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_store_name!==0,expression:"pos_settings.show_store_name !== 0"}]},[_vm._v("Demo Store")]),_c("br"),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_reference!==0,expression:"pos_settings.show_reference !== 0"}]},[_vm._v("Ref: REF-12345")]),_c("br",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_reference!==0,expression:"pos_settings.show_reference !== 0"}]}),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_address,expression:"pos_settings.show_address"}]},[_vm._v("123 Demo Street")]),_c("br"),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_phone,expression:"pos_settings.show_phone"}]},[_vm._v("+123 456 789")])]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_logo!==0,expression:"pos_settings.show_logo !== 0"}],staticClass:"demo-logo-rect"},[_vm._v("LOGO")])]),_vm._v(" "),_c("div",{staticClass:"mt-2",staticStyle:{"font-size":"11px"}},[_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_date!==0,expression:"pos_settings.show_date !== 0"}]},[_vm._v("Date: 2025-12-10 12:34")]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_seller!==0,expression:"pos_settings.show_seller !== 0"}]},[_vm._v("Seller: John Doe")]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_customer,expression:"pos_settings.show_customer"}]},[_vm._v("Customer: Jane Smith")]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_Warehouse,expression:"pos_settings.show_Warehouse"}]},[_vm._v("Warehouse: Main Store")])])]),_vm._v(" "),_c("table",{staticClass:"table_data w-100 mb-2",staticStyle:{"font-size":"11px"}},[_c("tbody",[_c("tr",[_c("td",[_c("strong",[_vm._v("Demo Product A")]),_c("br"),_vm._v(" "),_c("small",[_vm._v("2 x 10.00")]),_vm._v(" "),_c("br",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_product_discount!==0,expression:"pos_settings.show_product_discount !== 0"}]}),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_product_discount!==0,expression:"pos_settings.show_product_discount !== 0"}],staticStyle:{color:"#888","font-style":"italic"}},[_vm._v("Discount: -2.00")])]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("20.00")])]),_vm._v(" "),_c("tr",[_c("td",[_c("strong",[_vm._v("Demo Product B")]),_c("br"),_vm._v(" "),_c("small",[_vm._v("1 x 5.00")])]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("5.00")])])])]),_vm._v(" "),_c("table",{staticClass:"table_data w-100",staticStyle:{"font-size":"11px"}},[_c("tbody",[_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_tax,expression:"pos_settings.show_tax"}]},[_c("td",{staticClass:"total"},[_vm._v("Tax")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("1.25")])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_discount,expression:"pos_settings.show_discount"}]},[_c("td",{staticClass:"total"},[_vm._v("Discount")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("0.00")])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_shipping,expression:"pos_settings.show_shipping"}]},[_c("td",{staticClass:"total"},[_vm._v("Shipping")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("1.25")])]),_vm._v(" "),_c("tr",[_c("td",{staticClass:"total"},[_vm._v("Total")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("26.25")])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_paid!==0,expression:"pos_settings.show_paid !== 0"}]},[_c("td",{staticClass:"total"},[_vm._v("Paid")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("25.00")])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_due!==0,expression:"pos_settings.show_due !== 0"}]},[_c("td",{staticClass:"total"},[_vm._v("Due")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("1.25")])])])]),_vm._v(" "),_c("table",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_payments!==0,expression:"pos_settings.show_payments !== 0"}],staticClass:"table_data w-100 mt-1",staticStyle:{"font-size":"11px"}},[_c("thead",[_c("tr",[_c("th",{staticStyle:{"text-align":"left"}},[_vm._v("Pay By")]),_vm._v(" "),_c("th",{staticStyle:{"text-align":"right"}},[_vm._v("Amount")]),_vm._v(" "),_c("th",{staticStyle:{"text-align":"right"}},[_vm._v("Change")])])]),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",[_vm._v("Cash")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("25.00")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("0.00")])])])]),_vm._v(" "),_c("p",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_note,expression:"pos_settings.show_note"}],staticClass:"mt-2 mb-0 text-center",staticStyle:{"white-space":"pre-line"}},[_c("small",[_c("strong",[_vm._v(_vm._s(_vm.pos_settings.note_customer||"Thank you for your purchase!"))])])]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_zatca_qr!==0,expression:"pos_settings.show_zatca_qr !== 0"}],staticClass:"mt-2 text-center"},[_c("div",{staticClass:"zatca-qr"},[_c("div",{staticClass:"zatca-qr-title"},[_vm._v("ZATCA")]),_vm._v(" "),_c("div",{staticClass:"demo-qr-box"})])])]):_vm.currentReceiptLayout===4?_c("div",{staticClass:"receipt-layout-4"},[_c("div",{staticClass:"info text-center mb-2"},[_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_logo!==0,expression:"pos_settings.show_logo !== 0"}],staticClass:"invoice_logo mb-1"},[_c("div",{staticClass:"demo-logo-circle"},[_vm._v("LOGO")])]),_vm._v(" "),_c("div",[_c("strong",{staticStyle:{"font-size":"13px"}},[_vm._v("متجر تجريبي")]),_c("br"),_vm._v(" "),_c("strong",{staticStyle:{"font-size":"12px"}},[_vm._v("Demo Store")])]),_vm._v(" "),_c("div",{staticStyle:{"font-size":"10px","margin-top":"2px"}},[_vm._v("123 Demo Street")]),_vm._v(" "),_c("div",{staticStyle:{"font-size":"10px"}},[_vm._v("+123 456 789")]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_email,expression:"pos_settings.show_email"}],staticStyle:{"font-size":"10px"}},[_vm._v("demo@example.com")]),_vm._v(" "),_vm.setting.vat_number?_c("div",{staticStyle:{"font-size":"11px","font-weight":"bold","margin-top":"4px"}},[_vm._v("\n                              الرقم الضريبي / TRN : "+_vm._s(_vm.setting.vat_number)+"\n                            ")]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"mt-2 mb-2",staticStyle:{"border-top":"1px dashed #000","border-bottom":"1px dashed #000",padding:"4px 0"}},[_c("strong",[_vm._v("فاتورة ضريبية مبسطة")]),_c("br"),_vm._v(" "),_c("strong",[_vm._v("Simplified Tax Invoice")])])]),_vm._v(" "),_c("div",{staticStyle:{"font-size":"10px"}},[_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_reference!==0,expression:"pos_settings.show_reference !== 0"}],staticStyle:{display:"flex","justify-content":"space-between"}},[_c("span",[_vm._v("Invoice No")]),_vm._v(" "),_c("span",[_vm._v("REF-12345")]),_vm._v(" "),_c("span",[_vm._v("رقم الفاتورة")])]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_date!==0,expression:"pos_settings.show_date !== 0"}],staticStyle:{display:"flex","justify-content":"space-between"}},[_c("span",[_vm._v("Date")]),_vm._v(" "),_c("span",[_vm._v("2025-12-10 12:34")]),_vm._v(" "),_c("span",[_vm._v("تاريخ")])]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_seller!==0,expression:"pos_settings.show_seller !== 0"}],staticStyle:{display:"flex","justify-content":"space-between"}},[_c("span",[_vm._v("Seller")]),_vm._v(" "),_c("span",[_vm._v("John Doe")]),_vm._v(" "),_c("span",[_vm._v("البائع")])]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_customer,expression:"pos_settings.show_customer"}],staticStyle:{display:"flex","justify-content":"space-between"}},[_c("span",[_vm._v("Customer")]),_vm._v(" "),_c("span",[_vm._v("Jane Smith")]),_vm._v(" "),_c("span",[_vm._v("العميل")])]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_Warehouse,expression:"pos_settings.show_Warehouse"}],staticStyle:{display:"flex","justify-content":"space-between"}},[_c("span",[_vm._v("Warehouse")]),_vm._v(" "),_c("span",[_vm._v("Main Store")]),_vm._v(" "),_c("span",[_vm._v("المستودع")])])]),_vm._v(" "),_c("table",{staticStyle:{width:"100%","margin-top":"8px","font-size":"10px","border-top":"1px dashed #000"}},[_c("thead",[_c("tr",[_c("th",{staticStyle:{"text-align":"left",padding:"4px 0"}},[_vm._v("Product"),_c("br"),_vm._v("المنتج")]),_vm._v(" "),_c("th",{staticStyle:{"text-align":"center",padding:"4px 0"}},[_vm._v("Qty"),_c("br"),_vm._v("كمية")]),_vm._v(" "),_c("th",{staticStyle:{"text-align":"center",padding:"4px 0"}},[_vm._v("Rate"),_c("br"),_vm._v("معدل")]),_vm._v(" "),_c("th",{staticStyle:{"text-align":"right",padding:"4px 0"}},[_vm._v("Amount"),_c("br"),_vm._v("مجموع")])])]),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",[_vm._v("Demo Product A")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"center"}},[_vm._v("2")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"center"}},[_vm._v("10.00")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("20.00")])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_product_discount!==0,expression:"pos_settings.show_product_discount !== 0"}],staticStyle:{"border-bottom":"1px dashed #eee"}},[_c("td",{staticStyle:{color:"#888","font-style":"italic","font-size":"9px",padding:"0 0 2px 4px"},attrs:{colspan:"4"}},[_vm._v("Discount / تخفيض: -2.00")])]),_vm._v(" "),_c("tr",{staticStyle:{"border-bottom":"1px dashed #eee"}},[_c("td",[_vm._v("Demo Product B")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"center"}},[_vm._v("1")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"center"}},[_vm._v("5.00")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("5.00")])])])]),_vm._v(" "),_c("table",{staticStyle:{width:"100%","font-size":"10px","border-top":"1px dashed #000","margin-top":"4px"}},[_c("colgroup",[_c("col",{staticStyle:{width:"35%"}}),_c("col",{staticStyle:{width:"5%"}}),_c("col",{staticStyle:{width:"25%"}}),_c("col",{staticStyle:{width:"35%"}})]),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",{staticClass:"total",staticStyle:{"text-align":"left"}},[_vm._v("Sub Total")]),_vm._v(" "),_c("td",{staticClass:"total"},[_vm._v(":")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"center"}},[_vm._v("25.00")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("المجموع الفرعي")])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_tax,expression:"pos_settings.show_tax"}]},[_c("td",{staticClass:"total",staticStyle:{"text-align":"left"}},[_vm._v("VAT @ Total")]),_vm._v(" "),_c("td",{staticClass:"total"},[_vm._v(":")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"center"}},[_vm._v("1.25")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("قيمة الضريبة")])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_discount,expression:"pos_settings.show_discount"}]},[_c("td",{staticClass:"total",staticStyle:{"text-align":"left"}},[_vm._v("Discount")]),_vm._v(" "),_c("td",{staticClass:"total"},[_vm._v(":")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"center"}},[_vm._v("0.00")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("تخفيض")])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_shipping,expression:"pos_settings.show_shipping"}]},[_c("td",{staticClass:"total",staticStyle:{"text-align":"left"}},[_vm._v("Shipping")]),_vm._v(" "),_c("td",{staticClass:"total"},[_vm._v(":")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"center"}},[_vm._v("1.25")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("الشحن")])])])]),_vm._v(" "),_c("table",{staticStyle:{width:"100%","font-size":"10px","font-weight":"bold","border-top":"1px dashed #000","border-bottom":"1px dashed #000","margin-top":"4px",padding:"4px 0"}},[_c("colgroup",[_c("col",{staticStyle:{width:"35%"}}),_c("col",{staticStyle:{width:"5%"}}),_c("col",{staticStyle:{width:"25%"}}),_c("col",{staticStyle:{width:"35%"}})]),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",{staticStyle:{"text-align":"left"}},[_vm._v("Grand Total")]),_vm._v(" "),_c("td",[_vm._v(":")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"center"}},[_vm._v("26.25")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("المبلغ الإجمالي")])])])]),_vm._v(" "),_c("table",{staticStyle:{width:"100%","font-size":"10px","margin-top":"4px"}},[_c("colgroup",[_c("col",{staticStyle:{width:"35%"}}),_c("col",{staticStyle:{width:"5%"}}),_c("col",{staticStyle:{width:"25%"}}),_c("col",{staticStyle:{width:"35%"}})]),_vm._v(" "),_c("tbody",[_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_paid!==0,expression:"pos_settings.show_paid !== 0"}]},[_c("td",{staticStyle:{"text-align":"left"}},[_c("strong",[_vm._v("Paid Amount")])]),_vm._v(" "),_c("td",[_c("strong",[_vm._v(":")])]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"center"}},[_vm._v("25.00")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_c("strong",[_vm._v("المبلغ المدفوع")])])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_due!==0,expression:"pos_settings.show_due !== 0"}]},[_c("td",{staticStyle:{"text-align":"left"}},[_c("strong",[_vm._v("Balance")])]),_vm._v(" "),_c("td",[_c("strong",[_vm._v(":")])]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"center"}},[_vm._v("1.25")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_c("strong",[_vm._v("الرصيد")])])])])]),_vm._v(" "),_c("table",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_payments!==0,expression:"pos_settings.show_payments !== 0"}],staticStyle:{"font-size":"10px",width:"100%","margin-top":"4px"}},[_c("thead",[_c("tr",{staticStyle:{background:"#eee"}},[_c("th",{staticStyle:{"text-align":"left"}},[_vm._v("Paid By / طريقة الدفع:")]),_vm._v(" "),_c("th",{staticStyle:{"text-align":"center"}},[_vm._v("Amount / المبلغ:")]),_vm._v(" "),_c("th",{staticStyle:{"text-align":"right"}},[_vm._v("Change / الباقي:")])])]),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",{staticStyle:{"text-align":"left"}},[_vm._v("Cash")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"center"}},[_vm._v("25.00")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("0.00")])])])]),_vm._v(" "),_c("p",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_note,expression:"pos_settings.show_note"}],staticClass:"mt-2 mb-0 text-center",staticStyle:{"white-space":"pre-line"}},[_c("small",[_c("strong",[_vm._v(_vm._s(_vm.pos_settings.note_customer||"Thank you for your purchase!"))])])]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_zatca_qr!==0,expression:"pos_settings.show_zatca_qr !== 0"}],staticClass:"mt-2 text-center"},[_c("div",{staticClass:"zatca-qr"},[_c("div",{staticClass:"zatca-qr-title"},[_vm._v("ZATCA")]),_vm._v(" "),_c("div",{staticClass:"demo-qr-box"})])])]):_c("div",{staticClass:"receipt-layout-5"},[_c("div",{staticClass:"info text-center mb-3"},[_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_logo!==0,expression:"pos_settings.show_logo !== 0"}],staticClass:"invoice_logo mb-2"},[_c("div",{staticClass:"demo-logo-circle small"},[_vm._v("LOGO")])]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_store_name!==0,expression:"pos_settings.show_store_name !== 0"}],staticClass:"minimal-store-name"},[_vm._v("DEMO STORE")]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_address||_vm.pos_settings.show_phone,expression:"pos_settings.show_address || pos_settings.show_phone"}],staticClass:"minimal-contact"},[_c("span",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_address,expression:"pos_settings.show_address"}]},[_vm._v("123 Demo Street")]),_vm._v(" "),_c("span",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_address&&_vm.pos_settings.show_phone,expression:"pos_settings.show_address && pos_settings.show_phone"}]},[_vm._v(" · ")]),_vm._v(" "),_c("span",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_phone,expression:"pos_settings.show_phone"}]},[_vm._v("+123 456 789")])]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_email,expression:"pos_settings.show_email"}],staticClass:"minimal-contact"},[_vm._v("demo@example.com")])]),_vm._v(" "),_c("div",{staticClass:"minimal-divider"}),_vm._v(" "),_c("div",{staticClass:"minimal-meta"},[_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_reference!==0,expression:"pos_settings.show_reference !== 0"}],staticClass:"minimal-meta-row"},[_c("span",[_vm._v("Ref")]),_c("span",[_vm._v("REF-12345")])]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_date!==0,expression:"pos_settings.show_date !== 0"}],staticClass:"minimal-meta-row"},[_c("span",[_vm._v("Date")]),_c("span",[_vm._v("2025-12-10 12:34")])]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_seller!==0,expression:"pos_settings.show_seller !== 0"}],staticClass:"minimal-meta-row"},[_c("span",[_vm._v("Seller")]),_c("span",[_vm._v("John Doe")])]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_customer,expression:"pos_settings.show_customer"}],staticClass:"minimal-meta-row"},[_c("span",[_vm._v("Customer")]),_c("span",[_vm._v("Jane Smith")])]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_Warehouse,expression:"pos_settings.show_Warehouse"}],staticClass:"minimal-meta-row"},[_c("span",[_vm._v("Warehouse")]),_c("span",[_vm._v("Main Store")])])]),_vm._v(" "),_c("div",{staticClass:"minimal-divider"}),_vm._v(" "),_c("table",{staticClass:"minimal-items"},[_c("tbody",[_c("tr",[_c("td",[_c("div",{staticClass:"minimal-item-name"},[_vm._v("Demo Product A")]),_vm._v(" "),_c("div",{staticClass:"minimal-item-qty"},[_vm._v("2 × 10.00")]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_product_discount!==0,expression:"pos_settings.show_product_discount !== 0"}],staticClass:"minimal-item-discount"},[_vm._v("Discount −2.00")])]),_vm._v(" "),_c("td",{staticClass:"minimal-item-total"},[_vm._v("20.00")])]),_vm._v(" "),_c("tr",[_c("td",[_c("div",{staticClass:"minimal-item-name"},[_vm._v("Demo Product B")]),_vm._v(" "),_c("div",{staticClass:"minimal-item-qty"},[_vm._v("1 × 5.00")])]),_vm._v(" "),_c("td",{staticClass:"minimal-item-total"},[_vm._v("5.00")])])])]),_vm._v(" "),_c("div",{staticClass:"minimal-divider"}),_vm._v(" "),_c("table",{staticClass:"minimal-totals"},[_c("tbody",[_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_tax,expression:"pos_settings.show_tax"}]},[_c("td",[_vm._v("Tax")]),_vm._v(" "),_c("td",[_vm._v("1.25")])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_discount,expression:"pos_settings.show_discount"}]},[_c("td",[_vm._v("Discount")]),_vm._v(" "),_c("td",[_vm._v("0.00")])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_shipping,expression:"pos_settings.show_shipping"}]},[_c("td",[_vm._v("Shipping")]),_vm._v(" "),_c("td",[_vm._v("1.25")])]),_vm._v(" "),_c("tr",{staticClass:"minimal-grand"},[_c("td",[_vm._v("Total")]),_vm._v(" "),_c("td",[_vm._v("25.00")])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_paid!==0,expression:"pos_settings.show_paid !== 0"}]},[_c("td",[_vm._v("Paid")]),_vm._v(" "),_c("td",[_vm._v("20.00")])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_due!==0,expression:"pos_settings.show_due !== 0"}]},[_c("td",[_vm._v("Due")]),_vm._v(" "),_c("td",[_vm._v("5.00")])])])]),_vm._v(" "),_c("table",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_payments!==0,expression:"pos_settings.show_payments !== 0"}],staticClass:"minimal-payments"},[_c("thead",[_c("tr",[_c("th",[_vm._v("Pay By")]),_vm._v(" "),_c("th",[_vm._v("Amount")]),_vm._v(" "),_c("th",[_vm._v("Change")])])]),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",[_vm._v("Cash")]),_vm._v(" "),_c("td",[_vm._v("20.00")]),_vm._v(" "),_c("td",[_vm._v("0.00")])])])]),_vm._v(" "),_c("p",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_note,expression:"pos_settings.show_note"}],staticClass:"minimal-note",staticStyle:{"white-space":"pre-line"}},[_vm._v("\n                            "+_vm._s(_vm.pos_settings.note_customer||"Thank you for your purchase!")+"\n                          ")]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_zatca_qr!==0,expression:"pos_settings.show_zatca_qr !== 0"}],staticClass:"mt-2 text-center"},[_c("div",{staticClass:"zatca-qr"},[_c("div",{staticClass:"zatca-qr-title"},[_vm._v("ZATCA")]),_vm._v(" "),_c("div",{staticClass:"demo-qr-box"})])])])])])],1),_vm._v(" "),_c("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[_c("validation-provider",{attrs:{name:"note",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("Note_to_customer")+" "+"*"}},[_c("textarea",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.note_customer,expression:"pos_settings.note_customer"}],staticClass:"form-control",attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"note-feedback",placeholder:_vm.$t("Note_to_customer"),rows:"4"},domProps:{value:_vm.pos_settings.note_customer},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.pos_settings,"note_customer",$event.target.value);}}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"note-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,3154351576)})],1),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Logo"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_logo,expression:"pos_settings.show_logo"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_logo)?_vm._i(_vm.pos_settings.show_logo,null)>-1:_vm.pos_settings.show_logo},on:{change:function change($event){var $$a=_vm.pos_settings.show_logo,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_logo",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_logo",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_logo",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Store_Name"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_store_name,expression:"pos_settings.show_store_name"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_store_name)?_vm._i(_vm.pos_settings.show_store_name,null)>-1:_vm.pos_settings.show_store_name},on:{change:function change($event){var $$a=_vm.pos_settings.show_store_name,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_store_name",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_store_name",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_store_name",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Reference"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_reference,expression:"pos_settings.show_reference"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_reference)?_vm._i(_vm.pos_settings.show_reference,null)>-1:_vm.pos_settings.show_reference},on:{change:function change($event){var $$a=_vm.pos_settings.show_reference,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_reference",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_reference",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_reference",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Date"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_date,expression:"pos_settings.show_date"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_date)?_vm._i(_vm.pos_settings.show_date,null)>-1:_vm.pos_settings.show_date},on:{change:function change($event){var $$a=_vm.pos_settings.show_date,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_date",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_date",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_date",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Seller"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_seller,expression:"pos_settings.show_seller"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_seller)?_vm._i(_vm.pos_settings.show_seller,null)>-1:_vm.pos_settings.show_seller},on:{change:function change($event){var $$a=_vm.pos_settings.show_seller,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_seller",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_seller",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_seller",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Phone"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_phone,expression:"pos_settings.show_phone"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_phone)?_vm._i(_vm.pos_settings.show_phone,null)>-1:_vm.pos_settings.show_phone},on:{change:function change($event){var $$a=_vm.pos_settings.show_phone,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_phone",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_phone",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_phone",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Address"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_address,expression:"pos_settings.show_address"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_address)?_vm._i(_vm.pos_settings.show_address,null)>-1:_vm.pos_settings.show_address},on:{change:function change($event){var $$a=_vm.pos_settings.show_address,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_address",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_address",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_address",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Email"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_email,expression:"pos_settings.show_email"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_email)?_vm._i(_vm.pos_settings.show_email,null)>-1:_vm.pos_settings.show_email},on:{change:function change($event){var $$a=_vm.pos_settings.show_email,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_email",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_email",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_email",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Customer"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_customer,expression:"pos_settings.show_customer"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_customer)?_vm._i(_vm.pos_settings.show_customer,null)>-1:_vm.pos_settings.show_customer},on:{change:function change($event){var $$a=_vm.pos_settings.show_customer,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_customer",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_customer",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_customer",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Warehouse"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_Warehouse,expression:"pos_settings.show_Warehouse"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_Warehouse)?_vm._i(_vm.pos_settings.show_Warehouse,null)>-1:_vm.pos_settings.show_Warehouse},on:{change:function change($event){var $$a=_vm.pos_settings.show_Warehouse,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_Warehouse",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_Warehouse",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_Warehouse",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Tax"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_tax,expression:"pos_settings.show_tax"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_tax)?_vm._i(_vm.pos_settings.show_tax,null)>-1:_vm.pos_settings.show_tax},on:{change:function change($event){var $$a=_vm.pos_settings.show_tax,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_tax",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_tax",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_tax",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Discount"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_discount,expression:"pos_settings.show_discount"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_discount)?_vm._i(_vm.pos_settings.show_discount,null)>-1:_vm.pos_settings.show_discount},on:{change:function change($event){var $$a=_vm.pos_settings.show_discount,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_discount",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_discount",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_discount",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Product_Discount"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_product_discount,expression:"pos_settings.show_product_discount"}],attrs:{type:"checkbox","true-value":1,"false-value":0},domProps:{checked:Array.isArray(_vm.pos_settings.show_product_discount)?_vm._i(_vm.pos_settings.show_product_discount,null)>-1:_vm._q(_vm.pos_settings.show_product_discount,1)},on:{change:function change($event){var $$a=_vm.pos_settings.show_product_discount,$$el=$event.target,$$c=$$el.checked?1:0;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_product_discount",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_product_discount",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_product_discount",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Shipping"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_shipping,expression:"pos_settings.show_shipping"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_shipping)?_vm._i(_vm.pos_settings.show_shipping,null)>-1:_vm.pos_settings.show_shipping},on:{change:function change($event){var $$a=_vm.pos_settings.show_shipping,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_shipping",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_shipping",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_shipping",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_barcode"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_barcode,expression:"pos_settings.show_barcode"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_barcode)?_vm._i(_vm.pos_settings.show_barcode,null)>-1:_vm.pos_settings.show_barcode},on:{change:function change($event){var $$a=_vm.pos_settings.show_barcode,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_barcode",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_barcode",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_barcode",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Note_to_customer"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_note,expression:"pos_settings.show_note"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_note)?_vm._i(_vm.pos_settings.show_note,null)>-1:_vm.pos_settings.show_note},on:{change:function change($event){var $$a=_vm.pos_settings.show_note,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_note",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_note",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_note",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Paid_Line"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_paid,expression:"pos_settings.show_paid"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_paid)?_vm._i(_vm.pos_settings.show_paid,null)>-1:_vm.pos_settings.show_paid},on:{change:function change($event){var $$a=_vm.pos_settings.show_paid,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_paid",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_paid",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_paid",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Due_Line"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_due,expression:"pos_settings.show_due"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_due)?_vm._i(_vm.pos_settings.show_due,null)>-1:_vm.pos_settings.show_due},on:{change:function change($event){var $$a=_vm.pos_settings.show_due,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_due",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_due",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_due",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Payments_Table"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_payments,expression:"pos_settings.show_payments"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_payments)?_vm._i(_vm.pos_settings.show_payments,null)>-1:_vm.pos_settings.show_payments},on:{change:function change($event){var $$a=_vm.pos_settings.show_payments,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_payments",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_payments",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_payments",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_ZATCA_QR"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_zatca_qr,expression:"pos_settings.show_zatca_qr"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_zatca_qr)?_vm._i(_vm.pos_settings.show_zatca_qr,null)>-1:_vm.pos_settings.show_zatca_qr},on:{change:function change($event){var $$a=_vm.pos_settings.show_zatca_qr,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_zatca_qr",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_zatca_qr",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_zatca_qr",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])])],1),_vm._v(" "),_c("b-row",{staticClass:"mt-4"},[_c("b-col",{staticClass:"mb-3",attrs:{md:"12"}},[_c("hr",{staticClass:"my-4"}),_vm._v(" "),_c("h6",{staticClass:"mb-3"},[_vm._v(_vm._s(_vm.$t("Receipt_Settings")))])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:_vm.$t("Receipt_Paper_Size")}},[_c("b-form-select",{attrs:{options:[{value:58,text:_vm.$t("Paper_58mm")},{value:80,text:_vm.$t("Paper_80mm")},{value:88,text:_vm.$t("Paper_88mm")}]},model:{value:_vm.pos_settings.receipt_paper_size,callback:function callback($$v){_vm.$set(_vm.pos_settings,"receipt_paper_size",$$v);},expression:"pos_settings.receipt_paper_size"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:_vm.$t("Logo_Size")}},[_c("b-form-select",{attrs:{options:[{value:"small",text:_vm.$t("Small")+" (40px)"},{value:"medium",text:_vm.$t("Medium")+" (60px)"},{value:"large",text:_vm.$t("Large")+" (80px)"},{value:"custom",text:_vm.$t("Custom")}]},model:{value:_vm.logoSizeType,callback:function callback($$v){_vm.logoSizeType=$$v;},expression:"logoSizeType"}})],1)],1),_vm._v(" "),_vm.logoSizeType==="custom"?_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:_vm.$t("Custom_Logo_Size")+" (px)"}},[_c("b-form-input",{attrs:{type:"number",placeholder:"Enter size in pixels",min:"20",max:"200"},model:{value:_vm.pos_settings.logo_size,callback:function callback($$v){_vm.$set(_vm.pos_settings,"logo_size",$$v);},expression:"pos_settings.logo_size"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v(_vm._s(_vm.$t("Logo_Size_Description")))])],1)],1):_vm._e()],1),_vm._v(" "),_c("b-row",{staticClass:"mt-4"},[_c("b-col",{staticClass:"d-flex justify-content-end",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:function click($event){return _vm.Submit_POS_Settings();}}},[_vm._v("\n"+_vm._s(_vm.$t("submit"))+"\n                        ")])],1)],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="pos_settings",expression:"activeTab === 'pos_settings'"}],staticClass:"tab-content"},[_c("b-row",[_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Quick_Add_Customer"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.quick_add_customer,expression:"pos_settings.quick_add_customer"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.quick_add_customer)?_vm._i(_vm.pos_settings.quick_add_customer,null)>-1:_vm.pos_settings.quick_add_customer},on:{change:function change($event){var $$a=_vm.pos_settings.quick_add_customer,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"quick_add_customer",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"quick_add_customer",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"quick_add_customer",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-2"},[_vm._v(_vm._s(_vm.$t("Enable_Quick_Add_Customer_popup_in_POS")))])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Barcode_Scanning_Sound"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.barcode_scanning_sound,expression:"pos_settings.barcode_scanning_sound"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.barcode_scanning_sound)?_vm._i(_vm.pos_settings.barcode_scanning_sound,null)>-1:_vm.pos_settings.barcode_scanning_sound},on:{change:function change($event){var $$a=_vm.pos_settings.barcode_scanning_sound,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"barcode_scanning_sound",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"barcode_scanning_sound",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"barcode_scanning_sound",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-2"},[_vm._v(_vm._s(_vm.$t("Enable_sound_when_scanning_barcodes_in_POS")))])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Product_Images_in_POS"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_product_images,expression:"pos_settings.show_product_images"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_product_images)?_vm._i(_vm.pos_settings.show_product_images,null)>-1:_vm.pos_settings.show_product_images},on:{change:function change($event){var $$a=_vm.pos_settings.show_product_images,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_product_images",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_product_images",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_product_images",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-2"},[_vm._v(_vm._s(_vm.$t("Show_hide_product_images_in_POS_product_listing")))])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Stock_Quantity_in_POS"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_stock_quantity,expression:"pos_settings.show_stock_quantity"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_stock_quantity)?_vm._i(_vm.pos_settings.show_stock_quantity,null)>-1:_vm.pos_settings.show_stock_quantity},on:{change:function change($event){var $$a=_vm.pos_settings.show_stock_quantity,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_stock_quantity",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_stock_quantity",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_stock_quantity",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-2"},[_vm._v(_vm._s(_vm.$t("Show_hide_stock_quantity_in_POS")))])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Enable_Print_Invoice"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.is_printable,expression:"pos_settings.is_printable"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.is_printable)?_vm._i(_vm.pos_settings.is_printable,null)>-1:_vm.pos_settings.is_printable},on:{change:function change($event){var $$a=_vm.pos_settings.is_printable,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"is_printable",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"is_printable",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"is_printable",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-2"},[_vm._v(_vm._s(_vm.$t("Enable_Print_Invoice_help")))])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Enable_Hold_Sales"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.enable_hold_sales,expression:"pos_settings.enable_hold_sales"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.enable_hold_sales)?_vm._i(_vm.pos_settings.enable_hold_sales,null)>-1:_vm.pos_settings.enable_hold_sales},on:{change:function change($event){var $$a=_vm.pos_settings.enable_hold_sales,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"enable_hold_sales",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"enable_hold_sales",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"enable_hold_sales",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-2"},[_vm._v(_vm._s(_vm.$t("Enable_disable_Hold_Sales_feature_in_POS")))])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Enable_Customer_Points_in_POS"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.enable_customer_points,expression:"pos_settings.enable_customer_points"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.enable_customer_points)?_vm._i(_vm.pos_settings.enable_customer_points,null)>-1:_vm.pos_settings.enable_customer_points},on:{change:function change($event){var $$a=_vm.pos_settings.enable_customer_points,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"enable_customer_points",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"enable_customer_points",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"enable_customer_points",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-2"},[_vm._v(_vm._s(_vm.$t("Enable_disable_customer_points_system_in_POS")))])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Categories_in_POS"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_categories,expression:"pos_settings.show_categories"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_categories)?_vm._i(_vm.pos_settings.show_categories,null)>-1:_vm.pos_settings.show_categories},on:{change:function change($event){var $$a=_vm.pos_settings.show_categories,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_categories",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_categories",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_categories",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-2"},[_vm._v(_vm._s(_vm.$t("Show_hide_categories_in_POS")))])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Brands_in_POS"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_brands,expression:"pos_settings.show_brands"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_brands)?_vm._i(_vm.pos_settings.show_brands,null)>-1:_vm.pos_settings.show_brands},on:{change:function change($event){var $$a=_vm.pos_settings.show_brands,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_brands",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_brands",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_brands",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-2"},[_vm._v(_vm._s(_vm.$t("Show_hide_brands_in_POS")))])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Allow_Overselling")||"Allow Overselling")+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.allow_overselling,expression:"pos_settings.allow_overselling"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.allow_overselling)?_vm._i(_vm.pos_settings.allow_overselling,null)>-1:_vm.pos_settings.allow_overselling},on:{change:function change($event){var $$a=_vm.pos_settings.allow_overselling,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"allow_overselling",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"allow_overselling",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"allow_overselling",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-2"},[_vm._v("\n                          "+_vm._s(_vm.$t("Allow_Overselling_Help")||"When enabled, the POS allows selling products even when stock is zero or negative. Stock can go negative after the sale.")+"\n                        ")])]),_vm._v(" "),_c("b-col",{staticClass:"mt-4 mb-2",attrs:{md:"12"}},[_c("hr",{staticClass:"my-4"}),_vm._v(" "),_c("h6",{staticClass:"mb-3"},[_vm._v("Jewelry POS Settings")]),_vm._v(" "),_c("b-alert",{staticClass:"small mb-0",attrs:{show:"",variant:"light"}},[_vm._v("\n                          These settings are only used when jewelry mode is enabled and a jewelry item is being sold in POS.\n                        ")])],1),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          Show Gold Rate on POS\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_gold_rate_on_pos,expression:"pos_settings.show_gold_rate_on_pos"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_gold_rate_on_pos)?_vm._i(_vm.pos_settings.show_gold_rate_on_pos,null)>-1:_vm.pos_settings.show_gold_rate_on_pos},on:{change:function change($event){var $$a=_vm.pos_settings.show_gold_rate_on_pos,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_gold_rate_on_pos",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_gold_rate_on_pos",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_gold_rate_on_pos",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-2"},[_vm._v("Display the live gold-rate line inside jewelry pricing previews on the POS screen.")])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          Allow Jewelry Price Override\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.allow_jewelry_price_override,expression:"pos_settings.allow_jewelry_price_override"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.allow_jewelry_price_override)?_vm._i(_vm.pos_settings.allow_jewelry_price_override,null)>-1:_vm.pos_settings.allow_jewelry_price_override},on:{change:function change($event){var $$a=_vm.pos_settings.allow_jewelry_price_override,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"allow_jewelry_price_override",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"allow_jewelry_price_override",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"allow_jewelry_price_override",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-2"},[_vm._v("Permit manual price overrides for jewelry items during sale creation.")])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("b-form-group",{attrs:{label:"Override Approval Threshold"}},[_c("b-form-input",{attrs:{type:"number",min:"0",step:"0.01",placeholder:"0.00",disabled:!_vm.pos_settings.allow_jewelry_price_override},model:{value:_vm.pos_settings.jewelry_override_approval_threshold,callback:function callback($$v){_vm.$set(_vm.pos_settings,"jewelry_override_approval_threshold",$$v);},expression:"pos_settings.jewelry_override_approval_threshold"}}),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-2"},[_vm._v("Overrides above this amount require an approver.")])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Enable_Keyboard_Shortcuts")||"Enable Keyboard Shortcuts")+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.enable_keyboard_shortcuts,expression:"enable_keyboard_shortcuts"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.enable_keyboard_shortcuts)?_vm._i(_vm.enable_keyboard_shortcuts,null)>-1:_vm.enable_keyboard_shortcuts},on:{change:[function($event){var $$a=_vm.enable_keyboard_shortcuts,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.enable_keyboard_shortcuts=$$a.concat([$$v]));}else{$$i>-1&&(_vm.enable_keyboard_shortcuts=$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.enable_keyboard_shortcuts=$$c;}},_vm.onToggleKeyboardShortcuts]}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-2"},[_vm._v("\n                          "+_vm._s(_vm.$t("Enable_Keyboard_Shortcuts_Help")||"Per-device setting. In the POS press Shift + ? at any time to view shortcuts.")+"\n                          "),_c("a",{staticClass:"ml-1",attrs:{href:"#"},on:{click:function click($event){$event.preventDefault();return _vm.$bvModal.show("pos-shortcuts-guide");}}},[_c("lucide-icon",{attrs:{name:"info"}}),_vm._v("\n                            "+_vm._s(_vm.$t("View_Shortcuts")||"View shortcuts")+"\n                          ")],1)])]),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"12",md:"12",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Invoice_Format")}},[_c("b-form-radio-group",{attrs:{options:_vm.invoiceFormatOptions.map(function(opt){return{value:opt.value,text:_vm.$t(opt.textKey)};}),buttons:"","button-variant":"outline-primary",size:"sm"},model:{value:_vm.setting.invoice_format,callback:function callback($$v){_vm.$set(_vm.setting,"invoice_format",$$v);},expression:"setting.invoice_format"}}),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-1"},[_vm._v("\n                            "+_vm._s(_vm.$t("Invoice_Format_help"))+"\n                          ")])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mt-4 mb-2",attrs:{md:"12"}},[_c("hr",{staticClass:"my-4"}),_vm._v(" "),_c("h6",{staticClass:"mb-3"},[_vm._v(_vm._s(_vm.$t("Cash_Drawer_Settings")))]),_vm._v(" "),_c("b-alert",{staticClass:"small",attrs:{show:"",variant:"light"}},[_vm._v("\n                          "+_vm._s(_vm.$t("Cash_Drawer_Auto_Open_Help"))+"\n                        ")])],1),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"6"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Cash_Drawer_Auto_Open"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.cash_drawer_auto_open,expression:"pos_settings.cash_drawer_auto_open"}],attrs:{type:"checkbox","true-value":true,"false-value":false},domProps:{checked:Array.isArray(_vm.pos_settings.cash_drawer_auto_open)?_vm._i(_vm.pos_settings.cash_drawer_auto_open,null)>-1:_vm.pos_settings.cash_drawer_auto_open},on:{change:function change($event){var $$a=_vm.pos_settings.cash_drawer_auto_open,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"cash_drawer_auto_open",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"cash_drawer_auto_open",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"cash_drawer_auto_open",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:_vm.$t("Cash_Drawer_Printer_Name")}},[_c("b-form-input",{attrs:{placeholder:_vm.$t("Leave_blank_for_default_receipt_printer"),maxlength:"192"},model:{value:_vm.pos_settings.cash_drawer_printer_name,callback:function callback($$v){_vm.$set(_vm.pos_settings,"cash_drawer_printer_name",$$v);},expression:"pos_settings.cash_drawer_printer_name"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v(_vm._s(_vm.$t("Cash_Drawer_Printer_Name_Help")))])],1)],1)],1),_vm._v(" "),_c("b-row",{staticClass:"mt-4"},[_c("b-col",{staticClass:"d-flex justify-content-end",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:function click($event){return _vm.Submit_POS_Settings();}}},[_vm._v("\n                          "+_vm._s(_vm.$t("submit"))+"\n                        ")])],1)],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="cash_drawer",expression:"activeTab === 'cash_drawer'"}],staticClass:"tab-content"},[_c("b-row",[_c("b-col",{staticClass:"mb-4",attrs:{cols:"12"}},[_c("b-alert",{staticClass:"small",attrs:{show:"",variant:"light"}},[_vm._v("\n                          "+_vm._s(_vm.$t("Cash_Drawer_Auto_Open_Help"))+"\n                        ")])],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Cash_Drawer_Auto_Open"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.cash_drawer_auto_open,expression:"pos_settings.cash_drawer_auto_open"}],attrs:{type:"checkbox","true-value":true,"false-value":false},domProps:{checked:Array.isArray(_vm.pos_settings.cash_drawer_auto_open)?_vm._i(_vm.pos_settings.cash_drawer_auto_open,null)>-1:_vm.pos_settings.cash_drawer_auto_open},on:{change:function change($event){var $$a=_vm.pos_settings.cash_drawer_auto_open,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"cash_drawer_auto_open",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"cash_drawer_auto_open",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"cash_drawer_auto_open",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:_vm.$t("Cash_Drawer_Printer_Name")}},[_c("b-form-input",{attrs:{placeholder:_vm.$t("Leave_blank_for_default_receipt_printer"),maxlength:"192"},model:{value:_vm.pos_settings.cash_drawer_printer_name,callback:function callback($$v){_vm.$set(_vm.pos_settings,"cash_drawer_printer_name",$$v);},expression:"pos_settings.cash_drawer_printer_name"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v(_vm._s(_vm.$t("Cash_Drawer_Printer_Name_Help")))])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mt-4",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:function click($event){return _vm.Submit_POS_Settings();}}},[_vm._v("\n                          "+_vm._s(_vm.$t("submit"))+"\n                        ")])],1)],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="direct_network_printing",expression:"activeTab === 'direct_network_printing'"}],staticClass:"tab-content"},[_c("b-row",[_c("b-col",{staticClass:"mb-4",attrs:{cols:"12"}},[_c("b-alert",{staticClass:"small",attrs:{show:"",variant:"light"}},[_vm._v("\n                          "+_vm._s(_vm.$t("Direct_Network_Printing_Help")||"Send receipts directly to a network thermal printer over RAW/JetDirect (default port 9100). Leave this OFF to keep using the existing browser/OS print flow.")+"\n                        ")])],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Enable_Direct_Network_Printing")||"Enable Direct Network Printing")+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.direct_network_printing,expression:"pos_settings.direct_network_printing"}],attrs:{type:"checkbox","true-value":true,"false-value":false},domProps:{checked:Array.isArray(_vm.pos_settings.direct_network_printing)?_vm._i(_vm.pos_settings.direct_network_printing,null)>-1:_vm.pos_settings.direct_network_printing},on:{change:function change($event){var $$a=_vm.pos_settings.direct_network_printing,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"direct_network_printing",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"direct_network_printing",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"direct_network_printing",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-2"},[_vm._v("\n                          "+_vm._s(_vm.$t("Enable_Direct_Network_Printing_Hint")||"When disabled, existing printing behavior is unchanged.")+"\n                        ")])]),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}}),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:_vm.$t("Network_Printer_IP")||"Network Printer IP Address"}},[_c("b-form-input",{attrs:{placeholder:"192.168.1.100",maxlength:"64",disabled:!_vm.pos_settings.direct_network_printing},model:{value:_vm.pos_settings.network_printer_ip,callback:function callback($$v){_vm.$set(_vm.pos_settings,"network_printer_ip",$$v);},expression:"pos_settings.network_printer_ip"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v(_vm._s(_vm.$t("Network_Printer_IP_Help")||"IPv4/IPv6 address or hostname of the printer on your local network."))])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:_vm.$t("Network_Printer_Port")||"Network Printer Port"}},[_c("b-form-input",{attrs:{type:"number",min:"1",max:"65535",placeholder:"9100",disabled:!_vm.pos_settings.direct_network_printing},model:{value:_vm.pos_settings.network_printer_port,callback:function callback($$v){_vm.$set(_vm.pos_settings,"network_printer_port",_vm._n($$v));},expression:"pos_settings.network_printer_port"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v(_vm._s(_vm.$t("Network_Printer_Port_Help")||"Default RAW / JetDirect port is 9100."))])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mt-4",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:function click($event){return _vm.Submit_POS_Settings();}}},[_vm._v("\n                          "+_vm._s(_vm.$t("submit"))+"\n                        ")])],1)],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="zatca",expression:"activeTab === 'zatca'"}],staticClass:"tab-content"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("CompanyNameArabic")}},[_c("b-form-input",{attrs:{placeholder:_vm.$t("Optional")},model:{value:_vm.setting.company_name_ar,callback:function callback($$v){_vm.$set(_vm.setting,"company_name_ar",$$v);},expression:"setting.company_name_ar"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("VAT_Number")}},[_c("b-form-input",{model:{value:_vm.setting.vat_number,callback:function callback($$v){_vm.$set(_vm.setting,"vat_number",$$v);},expression:"setting.vat_number"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"12",md:"12",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("ZATCA_Enabled")}},[_c("b-form-checkbox",{attrs:{"switch":""},model:{value:_vm.setting.zatca_enabled,callback:function callback($$v){_vm.$set(_vm.setting,"zatca_enabled",$$v);},expression:"setting.zatca_enabled"}},[_vm._v(_vm._s(_vm.$t("Enable_ZATCA_QR_on_Sales_Receipts")))])],1)],1)],1),_vm._v(" "),_c("b-row",{staticClass:"mt-4"},[_c("b-col",{staticClass:"d-flex justify-content-end",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:function click($event){return _vm.Submit_General_Settings();}}},[_vm._v("\n"+_vm._s(_vm.$t("submit"))+"\n                        ")])],1)],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="invoice",expression:"activeTab === 'invoice'"}],staticClass:"tab-content"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"12",md:"12",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Invoice_Format")}},[_c("b-form-radio-group",{attrs:{options:_vm.invoiceFormatOptions.map(function(opt){return{value:opt.value,text:_vm.$t(opt.textKey)};}),buttons:"","button-variant":"outline-primary",size:"sm"},model:{value:_vm.setting.invoice_format,callback:function callback($$v){_vm.$set(_vm.setting,"invoice_format",$$v);},expression:"setting.invoice_format"}}),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-1"},[_vm._v("\n                            "+_vm._s(_vm.$t("Invoice_Format_help"))+"\n                          ")])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"12",md:"12",sm:"12"}},[_c("b-card",{staticClass:"mb-0",attrs:{"no-body":""}},[_c("b-card-body",[_c("div",{staticClass:"d-flex justify-content-between align-items-center mb-3"},[_c("h5",{staticClass:"mb-0"},[_vm._v(_vm._s(_vm.$t("A4_Invoice_Logo_Size")))])]),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mb-3"},[_vm._v("\n                              "+_vm._s(_vm.$t("A4_Invoice_Logo_Size_help"))+"\n                            ")]),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Logo_Width")+" (px)"}},[_c("b-input-group",{attrs:{append:"px"}},[_c("b-form-input",{attrs:{type:"number",min:"20",max:"600",step:"1"},on:{input:_vm.onInvoiceLogoWidthInput},model:{value:_vm.setting.invoice_logo_width,callback:function callback($$v){_vm.$set(_vm.setting,"invoice_logo_width",_vm._n($$v));},expression:"setting.invoice_logo_width"}})],1),_vm._v(" "),_c("b-form-input",{staticClass:"mt-2",attrs:{type:"range",min:"20",max:"600",step:"1"},model:{value:_vm.setting.invoice_logo_width,callback:function callback($$v){_vm.$set(_vm.setting,"invoice_logo_width",_vm._n($$v));},expression:"setting.invoice_logo_width"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Logo_Height")+" (px)"}},[_c("b-input-group",{attrs:{append:"px"}},[_c("b-form-input",{attrs:{type:"number",min:"20",max:"400",step:"1"},on:{input:_vm.onInvoiceLogoHeightInput},model:{value:_vm.setting.invoice_logo_height,callback:function callback($$v){_vm.$set(_vm.setting,"invoice_logo_height",_vm._n($$v));},expression:"setting.invoice_logo_height"}})],1),_vm._v(" "),_c("b-form-input",{staticClass:"mt-2",attrs:{type:"range",min:"20",max:"400",step:"1"},model:{value:_vm.setting.invoice_logo_height,callback:function callback($$v){_vm.$set(_vm.setting,"invoice_logo_height",_vm._n($$v));},expression:"setting.invoice_logo_height"}})],1)],1)],1),_vm._v(" "),_vm.setting.logo?_c("b-row",[_c("b-col",{attrs:{cols:"12"}},[_c("div",{staticClass:"text-muted small mb-2"},[_vm._v(_vm._s(_vm.$t("Preview")))]),_vm._v(" "),_c("div",{staticClass:"invoice-logo-preview-box"},[_c("img",{style:{maxWidth:(_vm.setting.invoice_logo_width||180)+"px",maxHeight:(_vm.setting.invoice_logo_height||60)+"px",width:"auto",height:"auto",objectFit:"contain"},attrs:{src:_vm.$imgUrl("settings",_vm.setting.logo),alt:"Logo preview"}})])])],1):_vm._e()],1)],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"12",md:"12",sm:"12"}},[_c("b-form-group",[_c("b-form-checkbox",{attrs:{"switch":""},model:{value:_vm.setting.is_invoice_footer,callback:function callback($$v){_vm.$set(_vm.setting,"is_invoice_footer",$$v);},expression:"setting.is_invoice_footer"}},[_vm._v(_vm._s(_vm.$t("invoice_footer")))])],1)],1),_vm._v(" "),_vm.setting.is_invoice_footer?_c("b-col",{staticClass:"mb-3",attrs:{lg:"12",md:"12",sm:"12"}},[_c("validation-provider",{attrs:{name:"invoice_footer",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("invoice_footer")+" "+"*"}},[_c("textarea",{directives:[{name:"model",rawName:"v-model",value:_vm.setting.invoice_footer,expression:"setting.invoice_footer"}],staticClass:"form-control",attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"invoice_footer-feedback invoice_footer-help",placeholder:_vm.$t("invoice_footer"),rows:"4"},domProps:{value:_vm.setting.invoice_footer},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.setting,"invoice_footer",$event.target.value);}}}),_vm._v(" "),_c("b-form-text",{attrs:{id:"invoice_footer-help"}},[_vm._v(_vm._s(_vm.$t("invoice_footer_a4_help")||"This footer is only used on the Invoice A4 PDF."))]),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"invoice_footer-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,4205794814)})],1):_vm._e()],1),_vm._v(" "),_c("b-row",{staticClass:"mt-4"},[_c("b-col",{staticClass:"d-flex justify-content-end",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:function click($event){return _vm.Submit_General_Settings();}}},[_vm._v("\n"+_vm._s(_vm.$t("submit"))+"\n                        ")])],1)],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="backup",expression:"activeTab === 'backup'"}],staticClass:"tab-content"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"12",md:"12",sm:"12"}},[_vm.backupDestination==="local"?_c("b-alert",{staticClass:"mb-3",attrs:{show:"",variant:"warning"}},[_c("strong",[_vm._v(_vm._s(_vm.$t("You_will_find_your_backup_on")))]),_vm._v(" "),_c("code",[_vm._v("/storage/app/public/backup")]),_vm._v(" "+_vm._s(_vm.$t("and_save_it_to_your_pc"))+"\n                        ")]):_c("b-alert",{staticClass:"mb-3",attrs:{show:"",variant:"info"}},[_vm._v("\n                          Cloud: backups will be uploaded to the selected provider after they are generated locally.\n                        ")]),_vm._v(" "),_vm.backupDestination==="cloud"?_c("small",{staticClass:"text-muted d-block"},[_vm._v("Note: the list below shows local backups.")]):_vm._e()],1)],1),_vm._v(" "),_c("b-row",{staticClass:"mb-4"},[_c("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[_c("b-card",{staticClass:"mb-0",attrs:{"no-body":""}},[_c("b-card-body",[_c("div",{staticClass:"d-flex justify-content-between align-items-center mb-3"},[_c("h5",{staticClass:"mb-0"},[_vm._v("Backup destination")])]),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Destination"}},[_c("b-form-radio-group",{attrs:{options:[{value:"local",text:"Local only"},{value:"cloud",text:"Cloud (upload after local backup)"}],stacked:""},model:{value:_vm.backupDestination,callback:function callback($$v){_vm.backupDestination=$$v;},expression:"backupDestination"}}),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-1"},[_vm._v("\n                                    Local backups path: "),_c("code",[_vm._v("/storage/app/public/backup")]),_vm._v(".\n                                  ")])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_vm.backupDestination==="cloud"?_c("b-form-group",{attrs:{label:"Cloud path / folder (optional)"}},[_c("b-form-input",{attrs:{placeholder:"e.g. StockyBackups/"},model:{value:_vm.setting.backup_cloud_path,callback:function callback($$v){_vm.$set(_vm.setting,"backup_cloud_path",$$v);},expression:"setting.backup_cloud_path"}})],1):_vm._e()],1)],1),_vm._v(" "),_vm.backupDestination==="cloud"?_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Cloud provider"}},[_c("b-form-select",{attrs:{options:[{value:null,text:"Select provider"},{value:"google_drive",text:"Google Drive"},{value:"dropbox",text:"Dropbox"},{value:"s3",text:"S3-compatible (AWS/MinIO/etc.)"}]},model:{value:_vm.setting.backup_cloud_provider,callback:function callback($$v){_vm.$set(_vm.setting,"backup_cloud_provider",$$v);},expression:"setting.backup_cloud_provider"}}),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-1"},[_vm._v("\n                                    Cloud upload runs after the backup is generated locally.\n                                  ")])],1)],1)],1):_vm._e(),_vm._v(" "),_vm.backupDestination==="cloud"&&_vm.setting.backup_cloud_provider==="s3"?_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Bucket"}},[_c("b-form-input",{attrs:{placeholder:"Bucket name"},model:{value:_vm.setting.backup_s3_bucket,callback:function callback($$v){_vm.$set(_vm.setting,"backup_s3_bucket",$$v);},expression:"setting.backup_s3_bucket"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Region"}},[_c("b-form-input",{attrs:{placeholder:"e.g. us-east-1"},model:{value:_vm.setting.backup_s3_region,callback:function callback($$v){_vm.$set(_vm.setting,"backup_s3_region",$$v);},expression:"setting.backup_s3_region"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Access key"}},[_c("b-form-input",{attrs:{placeholder:"Access key"},model:{value:_vm.setting.backup_s3_access_key,callback:function callback($$v){_vm.$set(_vm.setting,"backup_s3_access_key",$$v);},expression:"setting.backup_s3_access_key"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Secret key (leave blank to keep current)"}},[_c("b-form-input",{attrs:{type:"text",placeholder:"Secret key"},model:{value:_vm.setting.backup_s3_secret_key,callback:function callback($$v){_vm.$set(_vm.setting,"backup_s3_secret_key",$$v);},expression:"setting.backup_s3_secret_key"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Endpoint (optional for MinIO)"}},[_c("b-form-input",{attrs:{placeholder:"e.g. https://minio.example.com"},model:{value:_vm.setting.backup_s3_endpoint,callback:function callback($$v){_vm.$set(_vm.setting,"backup_s3_endpoint",$$v);},expression:"setting.backup_s3_endpoint"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Path-style URLs (MinIO often requires this)"}},[_c("b-form-checkbox",{attrs:{"switch":""},model:{value:_vm.setting.backup_s3_path_style,callback:function callback($$v){_vm.$set(_vm.setting,"backup_s3_path_style",$$v);},expression:"setting.backup_s3_path_style"}},[_vm._v("Enable")])],1)],1)],1):_vm._e(),_vm._v(" "),_vm.backupDestination==="cloud"&&_vm.setting.backup_cloud_provider==="google_drive"?_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Folder ID (optional)"}},[_c("b-form-input",{attrs:{placeholder:"Google Drive folder id"},model:{value:_vm.setting.backup_gdrive_folder_id,callback:function callback($$v){_vm.$set(_vm.setting,"backup_gdrive_folder_id",$$v);},expression:"setting.backup_gdrive_folder_id"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Access token (optional, short-lived)"}},[_c("b-form-input",{attrs:{type:"text",placeholder:"Bearer token"},model:{value:_vm.setting.backup_gdrive_access_token,callback:function callback($$v){_vm.$set(_vm.setting,"backup_gdrive_access_token",$$v);},expression:"setting.backup_gdrive_access_token"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Refresh token (recommended)"}},[_c("b-form-input",{attrs:{type:"text",placeholder:"Refresh token"},model:{value:_vm.setting.backup_gdrive_refresh_token,callback:function callback($$v){_vm.$set(_vm.setting,"backup_gdrive_refresh_token",$$v);},expression:"setting.backup_gdrive_refresh_token"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Client ID"}},[_c("b-form-input",{attrs:{placeholder:"OAuth client id"},model:{value:_vm.setting.backup_gdrive_client_id,callback:function callback($$v){_vm.$set(_vm.setting,"backup_gdrive_client_id",$$v);},expression:"setting.backup_gdrive_client_id"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Client secret (leave blank to keep current)"}},[_c("b-form-input",{attrs:{type:"text",placeholder:"OAuth client secret"},model:{value:_vm.setting.backup_gdrive_client_secret,callback:function callback($$v){_vm.$set(_vm.setting,"backup_gdrive_client_secret",$$v);},expression:"setting.backup_gdrive_client_secret"}})],1)],1)],1):_vm._e(),_vm._v(" "),_vm.backupDestination==="cloud"&&_vm.setting.backup_cloud_provider==="dropbox"?_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Dropbox folder path (optional)"}},[_c("b-form-input",{attrs:{placeholder:"e.g. /StockyBackups"},model:{value:_vm.setting.backup_dropbox_path,callback:function callback($$v){_vm.$set(_vm.setting,"backup_dropbox_path",$$v);},expression:"setting.backup_dropbox_path"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Access token (leave blank to keep current)"}},[_c("b-form-input",{attrs:{type:"text",placeholder:"Dropbox token"},model:{value:_vm.setting.backup_dropbox_access_token,callback:function callback($$v){_vm.$set(_vm.setting,"backup_dropbox_access_token",$$v);},expression:"setting.backup_dropbox_access_token"}})],1)],1)],1):_vm._e(),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-end"},[_c("b-button",{attrs:{variant:"primary"},on:{click:function click($event){return _vm.Submit_General_Settings();}}},[_vm._v("\n                                Save backup settings\n                              ")])],1)],1)],1)],1)],1),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"12",md:"12",sm:"12"}},[_c("div",{staticClass:"d-flex justify-content-between align-items-center mb-3"},[_c("h5",{staticClass:"mb-0"},[_vm._v(_vm._s(_vm.$t("BackupDatabase")))]),_vm._v(" "),_c("b-button",{staticClass:"btn-generate-backup",attrs:{variant:"primary"},on:{click:function click($event){return _vm.GenerateBackup();}}},[_c("lucide-icon",{staticClass:"me-2",attrs:{name:"plus"}}),_vm._v(_vm._s(_vm.$t("GenerateBackup"))+"\n                          ")],1)],1),_vm._v(" "),_vm.backupError?_c("b-alert",{staticClass:"mb-3",attrs:{show:"",variant:"danger",dismissible:""},on:{dismissed:function dismissed($event){_vm.backupError=null;}}},[_c("h6",{staticClass:"alert-heading"},[_vm._v("Backup Configuration Required")]),_vm._v(" "),_c("p",{staticClass:"mb-2"},[_c("strong",[_vm._v("mysqldump not found.")]),_vm._v(" Please configure DUMP_PATH in your .env file.")]),_vm._v(" "),_c("p",{staticClass:"mb-2"},[_c("strong",[_vm._v("For Laragon on Windows:")])]),_vm._v(" "),_c("ol",{staticClass:"mb-2 pl-3"},[_c("li",[_vm._v("Open your "),_c("code",[_vm._v(".env")]),_vm._v(" file in the project root")]),_vm._v(" "),_c("li",[_vm._v("Find your MySQL version folder in "),_c("code",[_vm._v("C:\\laragon\\bin\\mysql\\")])]),_vm._v(" "),_c("li",[_vm._v("Add this line (replace with your actual version):")])]),_vm._v(" "),_c("pre",{staticClass:"bg-light p-2 mb-2"},[_c("code",[_vm._v('DUMP_PATH="C:\\\\laragon\\\\bin\\\\mysql\\\\mysql-8.0.30\\\\bin\\\\mysqldump.exe"')])]),_vm._v(" "),_c("p",{staticClass:"mb-0"},[_vm._v("Or use forward slashes: "),_c("code",[_vm._v('DUMP_PATH="C:/laragon/bin/mysql/mysql-8.0.30/bin/mysqldump.exe"')])]),_vm._v(" "),_c("p",{staticClass:"mb-0 mt-2"},[_c("small",[_vm._v("After updating .env, run: "),_c("code",[_vm._v("php artisan config:clear")])])])]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"backup-table-wrapper"},[_vm.backups.length>0?_c("vue-good-table",{attrs:{mode:"remote",columns:_vm.backupColumns,totalRows:_vm.totalRows,rows:_vm.backups,styleClass:"table-hover tableOne vgt-table"},scopedSlots:_vm._u([{key:"table-row",fn:function fn(props){return[props.column.field=="actions"?_c("span",[_c("b-button",{staticClass:"btn-delete-backup",attrs:{variant:"danger",size:"sm"},on:{click:function click($event){return _vm.DeleteBackup(props.row.date);}}},[_c("lucide-icon",{attrs:{name:"x"}})],1)],1):_vm._e()];}}],null,false,3573732367)}):_c("div",{staticClass:"text-center py-5 text-muted"},[_c("lucide-icon",{staticClass:"text-50 mb-3 d-block",attrs:{name:"database-backup"}}),_vm._v(" "),_c("p",[_vm._v(_vm._s(_vm.$t("No_backups_found")))]),_vm._v(" "),_c("p",{staticClass:"small"},[_vm._v(_vm._s(_vm.$t("Click_Generate_Backup_to_create_your_first_backup")))])],1)],1)],1)],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="security",expression:"activeTab === 'security'"}],staticClass:"tab-content"},[_c("b-row",[_c("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[_c("div",{staticClass:"system-actions-card"},[_c("div",{staticClass:"d-flex justify-content-between align-items-center mb-2"},[_c("div",[_c("h5",{staticClass:"mb-1"},[_vm._v("Login Device Management")]),_vm._v(" "),_c("p",{staticClass:"text-muted mb-0"},[_vm._v("\n                                Active login sessions for your user (per device / browser).\n                              ")])]),_vm._v(" "),_c("div",{staticClass:"d-flex"},[_c("b-button",{staticClass:"mr-2",attrs:{variant:"outline-primary",disabled:_vm.securitySessionsLoading||_vm.securitySessionsActionLoading},on:{click:function click($event){return _vm.LoadSecuritySessions();}}},[_vm._v("\n                                Refresh\n                              ")]),_vm._v(" "),_c("b-button",{attrs:{variant:"danger",disabled:_vm.securitySessionsLoading||_vm.securitySessionsActionLoading||!_vm.hasOtherSessions},on:{click:function click($event){return _vm.LogoutAllOtherDevices();}}},[_vm._v("\n                                Logout All Other Devices\n                              ")])],1)]),_vm._v(" "),_vm.securitySessionsLoading?_c("div",{staticClass:"py-4 text-center text-muted"},[_c("div",{staticClass:"spinner spinner-primary mr-3"})]):_c("b-table",{staticClass:"mt-3",attrs:{items:_vm.securitySessions,fields:_vm.securitySessionFields,responsive:"sm",small:"","show-empty":"","empty-text":"No active sessions found."},scopedSlots:_vm._u([{key:"cell(device)",fn:function fn(row){return[_c("div",{staticClass:"d-flex align-items-center"},[_c("span",[_vm._v(_vm._s(row.item.device))]),_vm._v(" "),row.item.is_current?_c("b-badge",{staticClass:"ms-2",attrs:{variant:"success"}},[_vm._v("Current")]):_vm._e()],1)];}},{key:"cell(ip_address)",fn:function fn(row){return[_c("span",[_vm._v(_vm._s(row.item.ip_address||"-"))])];}},{key:"cell(login_at)",fn:function fn(row){return[_c("span",[_vm._v(_vm._s(_vm.formatDateTime(row.item.login_at)))])];}},{key:"cell(last_activity_at)",fn:function fn(row){return[_c("span",[_vm._v(_vm._s(row.item.last_activity_at?_vm.formatDateTime(row.item.last_activity_at):"-"))])];}},{key:"cell(actions)",fn:function fn(row){return[_c("b-button",{attrs:{size:"sm",variant:"danger",disabled:_vm.securitySessionsLoading||_vm.securitySessionsActionLoading||row.item.is_current},on:{click:function click($event){return _vm.LogoutSession(row.item.token_id);}}},[_vm._v("\n                                Logout\n                              ")])];}}],null,false,752624946)})],1)])],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="system",expression:"activeTab === 'system'"}],staticClass:"tab-content"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("div",{staticClass:"system-actions-card"},[_c("h5",{staticClass:"mb-3"},[_vm._v(_vm._s(_vm.$t("DebugMode")||"Debug Mode"))]),_vm._v(" "),_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                            "+_vm._s(_vm.$t("DebugMode")||"Debug Mode")+"\n                            "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.setting.debug_mode,expression:"setting.debug_mode"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.setting.debug_mode)?_vm._i(_vm.setting.debug_mode,null)>-1:_vm.setting.debug_mode},on:{change:function change($event){var $$a=_vm.setting.debug_mode,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.setting,"debug_mode",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.setting,"debug_mode",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.setting,"debug_mode",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("div",{staticClass:"mt-3"},[_c("b-button",{attrs:{variant:"primary"},on:{click:function click($event){return _vm.Submit_General_Settings();}}},[_vm._v("\n                              "+_vm._s(_vm.$t("submit"))+"\n                            ")])],1)])]),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("div",{staticClass:"system-actions-card"},[_c("h5",{staticClass:"mb-3"},[_vm._v(_vm._s(_vm.$t("Clear_Cache")))]),_vm._v(" "),_c("b-button",{staticClass:"action-btn-system",attrs:{variant:"primary"},on:{click:function click($event){return _vm.Clear_Cache();}}},[_c("lucide-icon",{staticClass:"me-2",attrs:{name:"refresh-cw"}}),_vm._v(_vm._s(_vm.$t("Clear_Cache"))+"\n                          ")],1)],1)])],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="pharmacy"&&_vm.showPharmacySettings,expression:"activeTab === 'pharmacy' && showPharmacySettings"}],staticClass:"tab-content"},[_vm.setting.pharmacy_mode_supported===false?_c("b-alert",{attrs:{show:"",variant:"warning"}},[_vm._v("\n                      "+_vm._s(_vm.$t("Pharmacy_Settings_Migration_Missing")||"Pharmacy mode columns not found on the settings table. Run the pharmacy migration to enable these options.")+"\n                    ")]):_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"12",md:"12",sm:"12"}},[_c("div",{staticClass:"system-actions-card"},[_c("h5",{staticClass:"mb-2"},[_vm._v(_vm._s(_vm.$t("Pharmacy_Mode")))]),_vm._v(" "),_c("p",{staticClass:"text-muted small"},[_vm._v("\n                            "+_vm._s(_vm.$t("Track_Batches_Expiry_Help"))+"\n                          ")]),_vm._v(" "),_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                            "+_vm._s(_vm.$t("Track_Batches_Expiry"))+"\n                            "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.setting.pharmacy_mode,expression:"setting.pharmacy_mode"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.setting.pharmacy_mode)?_vm._i(_vm.setting.pharmacy_mode,null)>-1:_vm.setting.pharmacy_mode},on:{change:function change($event){var $$a=_vm.setting.pharmacy_mode,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.setting,"pharmacy_mode",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.setting,"pharmacy_mode",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.setting,"pharmacy_mode",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])])]),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Expiry_Warning_Days")}},[_c("b-form-input",{attrs:{type:"number",min:"0",max:"3650",disabled:!_vm.setting.pharmacy_mode},model:{value:_vm.setting.expiry_warning_days,callback:function callback($$v){_vm.$set(_vm.setting,"expiry_warning_days",_vm._n($$v));},expression:"setting.expiry_warning_days"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v(_vm._s(_vm.$t("Expiry_Warning_Days_Help")||"Batches expiring within this number of days are flagged as near-expiry."))])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("div",{staticClass:"system-actions-card"},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                            "+_vm._s(_vm.$t("Block_Expired_Sale"))+"\n                            "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.setting.block_expired_sale,expression:"setting.block_expired_sale"}],attrs:{type:"checkbox",disabled:!_vm.setting.pharmacy_mode},domProps:{checked:Array.isArray(_vm.setting.block_expired_sale)?_vm._i(_vm.setting.block_expired_sale,null)>-1:_vm.setting.block_expired_sale},on:{change:function change($event){var $$a=_vm.setting.block_expired_sale,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.setting,"block_expired_sale",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.setting,"block_expired_sale",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.setting,"block_expired_sale",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("p",{staticClass:"text-muted small mt-2 mb-0"},[_vm._v("\n                            "+_vm._s(_vm.$t("Block_Expired_Sale_Help")||"Prevent POS / sale from accepting batches with an expiry date in the past.")+"\n                          ")])])]),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("div",{staticClass:"system-actions-card"},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                            "+_vm._s(_vm.$t("Print_Expiry_On_Receipt"))+"\n                            "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.setting.print_expiry_on_receipt,expression:"setting.print_expiry_on_receipt"}],attrs:{type:"checkbox",disabled:!_vm.setting.pharmacy_mode},domProps:{checked:Array.isArray(_vm.setting.print_expiry_on_receipt)?_vm._i(_vm.setting.print_expiry_on_receipt,null)>-1:_vm.setting.print_expiry_on_receipt},on:{change:function change($event){var $$a=_vm.setting.print_expiry_on_receipt,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.setting,"print_expiry_on_receipt",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.setting,"print_expiry_on_receipt",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.setting,"print_expiry_on_receipt",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("p",{staticClass:"text-muted small mt-2 mb-0"},[_vm._v("\n                            "+_vm._s(_vm.$t("Print_Expiry_On_Receipt_Help")||"Include batch number and expiry date next to each line on POS receipts.")+"\n                          ")])])]),_vm._v(" "),_c("b-col",{staticClass:"mt-2",attrs:{lg:"12",md:"12",sm:"12"}},[_c("b-button",{attrs:{variant:"primary"},on:{click:function click($event){return _vm.Update_Settings();}}},[_c("lucide-icon",{staticClass:"me-2",attrs:{name:"check"}}),_vm._v(" "+_vm._s(_vm.$t("submit"))+"\n                        ")],1)],1)],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="jewelry",expression:"activeTab === 'jewelry'"}],staticClass:"tab-content"},[_vm.setting.jewelry_mode_supported===false?_c("b-alert",{attrs:{show:"",variant:"warning"}},[_vm._v("\n                      Jewelry mode columns were not found on the settings table. Run the jewelry settings migration to enable these options.\n                    ")]):_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"12",md:"12",sm:"12"}},[_c("div",{staticClass:"system-actions-card"},[_c("h5",{staticClass:"mb-2"},[_vm._v("Jewelry Mode")]),_vm._v(" "),_c("p",{staticClass:"text-muted small"},[_vm._v("Enable jewelry-specific product fields, pricing defaults, and gold-rate workflows for this tenant.")]),_vm._v(" "),_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                            Enable Jewelry Mode\n                            "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.setting.jewelry_mode,expression:"setting.jewelry_mode"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.setting.jewelry_mode)?_vm._i(_vm.setting.jewelry_mode,null)>-1:_vm.setting.jewelry_mode},on:{change:function change($event){var $$a=_vm.setting.jewelry_mode,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.setting,"jewelry_mode",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.setting,"jewelry_mode",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.setting,"jewelry_mode",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])])]),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Default Making Charge Type"}},[_c("b-form-select",{attrs:{options:[{value:"",text:"Choose default type"}].concat(_toConsumableArray(_vm.jewelryMakingChargeOptions)),disabled:!_vm.setting.jewelry_mode},model:{value:_vm.setting.default_making_charge_type,callback:function callback($$v){_vm.$set(_vm.setting,"default_making_charge_type",$$v);},expression:"setting.default_making_charge_type"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Default Making Charge Value"}},[_c("b-form-input",{attrs:{type:"number",min:"0",step:"0.01",placeholder:"0.00",disabled:!_vm.setting.jewelry_mode},model:{value:_vm.setting.default_making_charge_value,callback:function callback($$v){_vm.$set(_vm.setting,"default_making_charge_value",$$v);},expression:"setting.default_making_charge_value"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Default Wastage Type"}},[_c("b-form-select",{attrs:{options:[{value:"",text:"Choose default type"}].concat(_toConsumableArray(_vm.jewelryWastageOptions)),disabled:!_vm.setting.jewelry_mode},model:{value:_vm.setting.default_wastage_type,callback:function callback($$v){_vm.$set(_vm.setting,"default_wastage_type",$$v);},expression:"setting.default_wastage_type"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Default Wastage Value"}},[_c("b-form-input",{attrs:{type:"number",min:"0",step:"0.001",placeholder:"0.000",disabled:!_vm.setting.jewelry_mode},model:{value:_vm.setting.default_wastage_value,callback:function callback($$v){_vm.$set(_vm.setting,"default_wastage_value",$$v);},expression:"setting.default_wastage_value"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"12",md:"12",sm:"12"}},[_c("div",{staticClass:"system-actions-card"},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                            Gold Rate Requires Approval\n                            "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.setting.gold_rate_requires_approval,expression:"setting.gold_rate_requires_approval"}],attrs:{type:"checkbox",disabled:!_vm.setting.jewelry_mode},domProps:{checked:Array.isArray(_vm.setting.gold_rate_requires_approval)?_vm._i(_vm.setting.gold_rate_requires_approval,null)>-1:_vm.setting.gold_rate_requires_approval},on:{change:function change($event){var $$a=_vm.setting.gold_rate_requires_approval,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.setting,"gold_rate_requires_approval",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.setting,"gold_rate_requires_approval",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.setting,"gold_rate_requires_approval",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("p",{staticClass:"text-muted small mt-2 mb-0"},[_vm._v("When enabled, a second authorized user must approve gold-rate changes.")])])]),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"12",md:"12",sm:"12"}},[_c("div",{staticClass:"system-actions-card"},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                            Branch Gold Rate Override\n                            "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.setting.gold_rate_branch_override_enabled,expression:"setting.gold_rate_branch_override_enabled"}],attrs:{type:"checkbox",disabled:!_vm.setting.jewelry_mode},domProps:{checked:Array.isArray(_vm.setting.gold_rate_branch_override_enabled)?_vm._i(_vm.setting.gold_rate_branch_override_enabled,null)>-1:_vm.setting.gold_rate_branch_override_enabled},on:{change:function change($event){var $$a=_vm.setting.gold_rate_branch_override_enabled,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.setting,"gold_rate_branch_override_enabled",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.setting,"gold_rate_branch_override_enabled",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.setting,"gold_rate_branch_override_enabled",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("p",{staticClass:"text-muted small mt-2 mb-0"},[_vm._v("When enabled, a branch-specific gold rate takes precedence over the company-wide rate. When disabled, the company-wide rate is always used.")])])]),_vm._v(" "),_c("b-col",{staticClass:"mt-2",attrs:{lg:"12",md:"12",sm:"12"}},[_c("b-button",{attrs:{variant:"primary"},on:{click:function click($event){return _vm.Update_Settings();}}},[_c("lucide-icon",{staticClass:"me-2",attrs:{name:"check"}}),_vm._v(" "+_vm._s(_vm.$t("submit"))+"\n                        ")],1)],1)],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="custom_fields",expression:"activeTab === 'custom_fields'"}],staticClass:"tab-content"},[_c("b-tabs",{attrs:{"content-class":"mt-3"},model:{value:_vm.customFieldsActiveTab,callback:function callback($$v){_vm.customFieldsActiveTab=$$v;},expression:"customFieldsActiveTab"}},[_c("b-tab",{attrs:{title:_vm.$t("Customers")}},[_c("div",{staticClass:"d-flex justify-content-between align-items-center mb-3"},[_c("h5",[_vm._v(_vm._s(_vm.$t("CustomerCustomFields")||"Customer Custom Fields"))]),_vm._v(" "),_c("b-button",{attrs:{variant:"primary"},on:{click:function click($event){return _vm.New_CustomField("client");}}},[_c("lucide-icon",{attrs:{name:"plus"}}),_vm._v(" "+_vm._s(_vm.$t("Add"))+"\n                          ")],1)],1),_vm._v(" "),_c("vue-good-table",{key:"customer-fields-"+_vm.customFieldsTableKey,attrs:{columns:_vm.customFieldsColumns,rows:_vm.customerFields,rtl:_vm.direction,"sort-options":{enabled:true,initialSortBy:{field:"sort_order",type:"asc"}},"search-options":{enabled:true,placeholder:_vm.$t("SearchThisTable")},"pagination-options":{enabled:true,mode:"records",perPage:10},styleClass:"tableOne vgt-table"},scopedSlots:_vm._u([{key:"table-row",fn:function fn(props){return[props.column.field=="field_type"?_c("span",[_vm._v("\n                              "+_vm._s(_vm.getFieldTypeLabel(props.row.field_type))+"\n                            ")]):props.column.field=="is_required"?_c("span",[_c("b-badge",{attrs:{variant:props.row.is_required?"success":"secondary"}},[_vm._v("\n                                "+_vm._s(props.row.is_required?_vm.$t("Required"):_vm.$t("Optional"))+"\n                              ")])],1):props.column.field=="is_active"?_c("span",[_c("b-badge",{attrs:{variant:props.row.is_active?"success":"danger"}},[_vm._v("\n                                "+_vm._s(props.row.is_active?_vm.$t("Enabled"):_vm.$t("Disabled"))+"\n                              ")])],1):props.column.field=="actions"?_c("span",[_c("b-button",{staticClass:"mr-2",attrs:{variant:"outline-primary",size:"sm"},on:{click:function click($event){return _vm.Edit_CustomField(props.row);}}},[_c("lucide-icon",{attrs:{name:"pencil"}})],1),_vm._v(" "),_c("b-button",{attrs:{variant:"outline-danger",size:"sm"},on:{click:function click($event){return _vm.Delete_CustomField(props.row.id);}}},[_c("lucide-icon",{attrs:{name:"x"}})],1)],1):_c("span",[_vm._v("\n                              "+_vm._s(props.formattedRow[props.column.field])+"\n                            ")])];}}],null,false,3572138496)})],1),_vm._v(" "),_c("b-tab",{attrs:{title:_vm.$t("Suppliers")}},[_c("div",{staticClass:"d-flex justify-content-between align-items-center mb-3"},[_c("h5",[_vm._v(_vm._s(_vm.$t("SupplierCustomFields")||"Supplier Custom Fields"))]),_vm._v(" "),_c("b-button",{attrs:{variant:"primary"},on:{click:function click($event){return _vm.New_CustomField("provider");}}},[_c("lucide-icon",{attrs:{name:"plus"}}),_vm._v(" "+_vm._s(_vm.$t("Add"))+"\n                          ")],1)],1),_vm._v(" "),_c("vue-good-table",{key:"supplier-fields-"+_vm.customFieldsTableKey,attrs:{columns:_vm.customFieldsColumns,rows:_vm.supplierFields,rtl:_vm.direction,"sort-options":{enabled:true,initialSortBy:{field:"sort_order",type:"asc"}},"search-options":{enabled:true,placeholder:_vm.$t("SearchThisTable")},"pagination-options":{enabled:true,mode:"records",perPage:10},styleClass:"tableOne vgt-table"},scopedSlots:_vm._u([{key:"table-row",fn:function fn(props){return[props.column.field=="field_type"?_c("span",[_vm._v("\n                              "+_vm._s(_vm.getFieldTypeLabel(props.row.field_type))+"\n                            ")]):props.column.field=="is_required"?_c("span",[_c("b-badge",{attrs:{variant:props.row.is_required?"success":"secondary"}},[_vm._v("\n                                "+_vm._s(props.row.is_required?_vm.$t("Required"):_vm.$t("Optional"))+"\n                              ")])],1):props.column.field=="is_active"?_c("span",[_c("b-badge",{attrs:{variant:props.row.is_active?"success":"danger"}},[_vm._v("\n                                "+_vm._s(props.row.is_active?_vm.$t("Enabled"):_vm.$t("Disabled"))+"\n                              ")])],1):props.column.field=="actions"?_c("span",[_c("b-button",{staticClass:"mr-2",attrs:{variant:"outline-primary",size:"sm"},on:{click:function click($event){return _vm.Edit_CustomField(props.row);}}},[_c("lucide-icon",{attrs:{name:"pencil"}})],1),_vm._v(" "),_c("b-button",{attrs:{variant:"outline-danger",size:"sm"},on:{click:function click($event){return _vm.Delete_CustomField(props.row.id);}}},[_c("lucide-icon",{attrs:{name:"x"}})],1)],1):_c("span",[_vm._v("\n                              "+_vm._s(props.formattedRow[props.column.field])+"\n                            ")])];}}],null,false,3572138496)})],1)],1),_vm._v(" "),_c("validation-observer",{ref:"Create_CustomField"},[_c("b-modal",{attrs:{"hide-footer":"",size:"lg",id:_vm.customFieldEditmode?"Edit_CustomField":"New_CustomField",title:_vm.customFieldEditmode?_vm.$t("Edit"):_vm.$t("Add")}},[_c("b-form",{on:{submit:function submit($event){$event.preventDefault();return _vm.Submit_CustomField.apply(null,arguments);}}},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{md:"12",sm:"12"}},[_c("validation-provider",{attrs:{name:"Field Name",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("FieldName")+" "+"*"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"name-feedback",placeholder:_vm.$t("FieldName")},model:{value:_vm.customField.name,callback:function callback($$v){_vm.$set(_vm.customField,"name",$$v);},expression:"customField.name"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"name-feedback"}},[_vm._v("\n                                    "+_vm._s(validationContext.errors[0])+"\n                                  ")])],1)];}}],null,false,4243657286)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"Field Type",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("FieldType")+" "+"*"}},[_c("v-select",{"class":{"is-invalid":!!validationContext.errors[0]},attrs:{state:validationContext.errors[0]?false:validationContext.valid?true:null,reduce:function reduce(label){return label.value;},options:_vm.fieldTypes,placeholder:_vm.$t("PleaseSelect")},on:{input:_vm.onFieldTypeChange},model:{value:_vm.customField.field_type,callback:function callback($$v){_vm.$set(_vm.customField,"field_type",$$v);},expression:"customField.field_type"}}),_vm._v(" "),_c("b-form-invalid-feedback",[_vm._v("\n                                    "+_vm._s(validationContext.errors[0])+"\n                                  ")])],1)];}}],null,false,1160883493)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Required")}},[_c("b-form-checkbox",{attrs:{"switch":""},model:{value:_vm.customField.is_required,callback:function callback($$v){_vm.$set(_vm.customField,"is_required",$$v);},expression:"customField.is_required"}},[_vm._v("\n                                  "+_vm._s(_vm.customField.is_required?_vm.$t("Required"):_vm.$t("Optional"))+"\n                                ")])],1)],1),_vm._v(" "),_vm.customField.field_type==="select"?_c("b-col",{staticClass:"mb-3",attrs:{md:"12",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("SelectOptions")}},[_c("b-form-textarea",{attrs:{placeholder:_vm.$t("EnterOptionsOnePerLine")||"Enter options, one per line",rows:"4"},on:{blur:_vm.updateSelectOptions},model:{value:_vm.selectOptionsText,callback:function callback($$v){_vm.selectOptionsText=$$v;},expression:"selectOptionsText"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v(_vm._s(_vm.$t("EnterOptionsOnePerLine")||"Enter options, one per line"))])],1)],1):_vm.customField.field_type!=="select"&&_vm.customField.field_type?_c("b-col",{staticClass:"mb-3",attrs:{md:"12",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("DefaultValue")}},[_vm.customField.field_type==="text"||_vm.customField.field_type==="number"?_c("b-form-input",{attrs:{type:_vm.customField.field_type==="number"?"number":"text",placeholder:_vm.$t("DefaultValue")},model:{value:_vm.customField.default_value,callback:function callback($$v){_vm.$set(_vm.customField,"default_value",$$v);},expression:"customField.default_value"}}):_vm.customField.field_type==="textarea"?_c("b-form-textarea",{attrs:{placeholder:_vm.$t("DefaultValue"),rows:"3"},model:{value:_vm.customField.default_value,callback:function callback($$v){_vm.$set(_vm.customField,"default_value",$$v);},expression:"customField.default_value"}}):_vm.customField.field_type==="date"?_c("b-form-datepicker",{attrs:{placeholder:_vm.$t("DefaultValue")},model:{value:_vm.customField.default_value,callback:function callback($$v){_vm.$set(_vm.customField,"default_value",$$v);},expression:"customField.default_value"}}):_vm._e()],1)],1):_vm._e(),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Status")}},[_c("b-form-checkbox",{attrs:{"switch":""},model:{value:_vm.customField.is_active,callback:function callback($$v){_vm.$set(_vm.customField,"is_active",$$v);},expression:"customField.is_active"}},[_vm._v("\n                                  "+_vm._s(_vm.customField.is_active?_vm.$t("Enabled"):_vm.$t("Disabled"))+"\n                                ")])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mt-3",attrs:{md:"12"}},[_c("b-button",{attrs:{variant:"primary",type:"submit",disabled:_vm.customFieldSubmitProcessing}},[_c("lucide-icon",{staticClass:"me-2 font-weight-bold",attrs:{name:"check"}}),_vm._v(" "+_vm._s(_vm.$t("submit"))+"\n                              ")],1),_vm._v(" "),_c("b-button",{staticClass:"ml-2",attrs:{variant:"secondary"},on:{click:_vm.reset_CustomField_Form}},[_vm._v("\n                                "+_vm._s(_vm.$t("Cancel"))+"\n                              ")]),_vm._v(" "),_vm.customFieldSubmitProcessing?_vm._m(0):_vm._e()],1)],1)],1)],1)],1)],1)])]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="calendar",expression:"activeTab === 'calendar'"}],staticClass:"tab-content"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"12"}},[_c("p",{staticClass:"text-muted"},[_vm._v("\n                          "+_vm._s(_vm.$t("Google_Calendar_Booking_Description")||"When a booking is confirmed, an event is created in your Google Calendar with date/time, service, customer details, and reminders. Enter your Google API credentials below and connect your account.")+"\n                        ")])]),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Client_ID")||"Client ID"}},[_c("b-form-input",{attrs:{placeholder:"xxxxx.apps.googleusercontent.com",type:"text",autocomplete:"off"},model:{value:_vm.calendarForm.google_calendar_client_id,callback:function callback($$v){_vm.$set(_vm.calendarForm,"google_calendar_client_id",$$v);},expression:"calendarForm.google_calendar_client_id"}}),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-1"},[_vm._v(_vm._s(_vm.$t("Google_Calendar_Client_ID_Help")||"From Google Cloud Console → APIs & Services → Credentials."))])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Client_Secret")||"Client Secret"}},[_c("b-form-input",{attrs:{placeholder:_vm.calendarForm.google_calendar_client_secret_set?"********":"",type:"password",autocomplete:"new-password"},model:{value:_vm.calendarForm.google_calendar_client_secret,callback:function callback($$v){_vm.$set(_vm.calendarForm,"google_calendar_client_secret",$$v);},expression:"calendarForm.google_calendar_client_secret"}}),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-1"},[_vm._v(_vm._s(_vm.$t("Google_Calendar_Client_Secret_Help")||"Leave blank to keep existing secret."))])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Redirect_URI")||"Redirect URI"}},[_c("b-form-input",{attrs:{placeholder:"https://yourdomain.com/google-calendar/callback",type:"url"},model:{value:_vm.calendarForm.google_calendar_redirect_uri,callback:function callback($$v){_vm.$set(_vm.calendarForm,"google_calendar_redirect_uri",$$v);},expression:"calendarForm.google_calendar_redirect_uri"}}),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-1"},[_vm._v(_vm._s(_vm.$t("Google_Calendar_Redirect_URI_Help")||"Must match the URI configured in Google Cloud Console. Leave blank to use default."))])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Status")||"Status"}},[_vm.calendarForm.google_calendar_connected?_c("span",{staticClass:"text-success"},[_c("lucide-icon",{attrs:{name:"check"}}),_vm._v(" "+_vm._s(_vm.$t("Connected")||"Connected")+"\n                          ")],1):_c("span",{staticClass:"text-muted"},[_vm._v(_vm._s(_vm.$t("Not_connected")||"Not connected"))]),_vm._v(" "),_c("div",{staticClass:"mt-2"},[!_vm.calendarForm.google_calendar_connected?_c("a",{staticClass:"btn btn-sm btn-outline-primary",attrs:{href:_vm.calendarForm.google_calendar_connect_url}},[_vm._v("\n                              "+_vm._s(_vm.$t("Connect_Google_Calendar")||"Connect Google Calendar")+"\n                            ")]):_c("a",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{href:_vm.calendarForm.google_calendar_disconnect_url}},[_vm._v("\n                              "+_vm._s(_vm.$t("Disconnect")||"Disconnect")+"\n                            ")])])])],1),_vm._v(" "),_vm.calendarForm.google_calendar_connected?_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Calendar_ID")||"Calendar ID"}},[_c("b-form-input",{attrs:{placeholder:"primary"},model:{value:_vm.calendarForm.google_calendar_calendar_id,callback:function callback($$v){_vm.$set(_vm.calendarForm,"google_calendar_calendar_id",$$v);},expression:"calendarForm.google_calendar_calendar_id"}}),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-1"},[_vm._v(_vm._s(_vm.$t("Leave_primary_for_default")||'Leave as "primary" for your main calendar.'))])],1)],1):_vm._e(),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary",disabled:_vm.calendarSaving},on:{click:function click($event){return _vm.Submit_Calendar_Settings();}}},[_vm.calendarSaving?_c("span",{staticClass:"spinner-border spinner-border-sm mr-2"}):_vm._e(),_vm._v(" "),_c("lucide-icon",{attrs:{name:"check"}}),_vm._v(" "+_vm._s(_vm.$t("Save"))+"\n                        ")],1)],1)],1)],1)])],1)],1),_vm._v(" "),_c("b-modal",{attrs:{id:"pos-shortcuts-guide",title:_vm.$t("POS_Keyboard_Shortcuts")||"POS Keyboard Shortcuts",size:"md","ok-only":"","ok-title":_vm.$t("Close")||"Close","ok-variant":"secondary"}},[_c("p",{staticClass:"text-muted small mb-3"},[_vm._v("\n            "+_vm._s(_vm.$t("Shortcuts_Guide_Intro")||"These shortcuts are available on the POS screen when “Enable Keyboard Shortcuts” is ON. They are ignored while typing in form fields (except F-keys and Esc).")+"\n          ")]),_vm._v(" "),_c("table",{staticClass:"table table-sm table-striped mb-0"},[_c("thead",[_c("tr",[_c("th",{staticStyle:{width:"45%"}},[_vm._v(_vm._s(_vm.$t("Shortcut")||"Shortcut"))]),_vm._v(" "),_c("th",[_vm._v(_vm._s(_vm.$t("Action")||"Action"))])])]),_vm._v(" "),_c("tbody",_vm._l(_vm.posShortcutsList,function(s){return _c("tr",{key:s.id},[_c("td",[_c("kbd",[_vm._v(_vm._s(s.keys))])]),_vm._v(" "),_c("td",[_vm._v(_vm._s(_vm.$t(s.descriptionKey)||s.descriptionFallback))])]);}),0)])])],1):_vm._e()],1);};var staticRenderFns=[function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"typo__p"},[_c("div",{staticClass:"spinner sm spinner-primary mt-3"})]);}];render._withStripped=true;

/***/ },

/***/ "./resources/src/mixins/posKeyboardShortcuts.js"
/*!******************************************************!*\
  !*** ./resources/src/mixins/posKeyboardShortcuts.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   POS_SHORTCUTS: () => (/* binding */ POS_SHORTCUTS),
/* harmony export */   POS_SHORTCUTS_STORAGE_KEY: () => (/* binding */ POS_SHORTCUTS_STORAGE_KEY),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   posShortcutsEnabled: () => (/* binding */ posShortcutsEnabled),
/* harmony export */   setPosShortcutsEnabled: () => (/* binding */ setPosShortcutsEnabled)
/* harmony export */ });
/**
 * POS Keyboard Shortcuts Mixin
 * --------------------------------------------------------------------
 * Adds optional keyboard shortcuts to the POS screen WITHOUT modifying
 * any existing logic. The mixin only invokes methods that already exist
 * on the host component (pos.vue). It is fully opt-in: the listener does
 * nothing unless the user enables shortcuts in POS Settings.
 *
 * Persistence: per-device localStorage key `pos_keyboard_shortcuts_enabled`
 * (no backend / database changes). Default = OFF, so existing installs
 * see no behavior change after upgrade.
 *
 * Safety guarantees:
 *   - Listener is attached on mounted() and removed on beforeDestroy().
 *   - Events are ignored when focus is inside an input/textarea/select
 *     or a contenteditable element, so existing @keyup handlers on the
 *     tax / discount / shipping / search inputs keep working unchanged.
 *   - Only calls host methods that exist; missing methods are skipped.
 */

var POS_SHORTCUTS_STORAGE_KEY = "pos_keyboard_shortcuts_enabled";
function posShortcutsEnabled() {
  try {
    // Tri-state: missing key → default ON (so new devices get shortcuts
    // without a settings detour). "1" / "0" still respect an explicit
    // user choice from the POS Settings toggle.
    var v = localStorage.getItem(POS_SHORTCUTS_STORAGE_KEY);
    if (v === null) return true;
    return v === "1";
  } catch (e) {
    return true;
  }
}
function setPosShortcutsEnabled(value) {
  try {
    localStorage.setItem(POS_SHORTCUTS_STORAGE_KEY, value ? "1" : "0");
  } catch (e) {
    /* ignore storage errors */
  }
}

// Shortcut definitions used both by the listener and the help modal.
// Each entry: { id, keys (display), match(event), action(vm) }
var POS_SHORTCUTS = [{
  id: "search",
  keys: "F2",
  descriptionKey: "Shortcut_Focus_Search",
  descriptionFallback: "Focus product search",
  match: function match(e) {
    return e.key === "F2";
  },
  action: function action(vm) {
    // The live class on the modern POS shell input is
    // `.pos-shell-search-input`; the previous `.search-input` selector
    // never matched, so F2 silently did nothing. Keep `.search-input`
    // as a fallback for any older skin.
    var el = document.querySelector(".pos-shell-search-input") || document.querySelector(".search-input");
    if (el && typeof el.focus === "function") {
      el.focus();
      if (typeof el.select === "function") el.select();
    }
  }
}, {
  id: "payment",
  keys: "F4",
  descriptionKey: "Shortcut_Open_Payment",
  descriptionFallback: "Open payment modal",
  match: function match(e) {
    return e.key === "F4";
  },
  action: function action(vm) {
    if (typeof vm.openModernPaymentModal === "function" && vm.details && vm.details.length) {
      vm.openModernPaymentModal();
    }
  }
}, {
  id: "hold",
  keys: "F6",
  descriptionKey: "Shortcut_Hold_Sale",
  descriptionFallback: "Hold sale (draft)",
  match: function match(e) {
    return e.key === "F6";
  },
  action: function action(vm) {
    if (typeof vm.Submit_Draft === "function") vm.Submit_Draft();
  }
}, {
  id: "recall",
  keys: "F7",
  descriptionKey: "Shortcut_Recall_Sale",
  descriptionFallback: "Recall held sales",
  match: function match(e) {
    return e.key === "F7";
  },
  action: function action(vm) {
    if (typeof vm.loadDraftSale === "function") vm.loadDraftSale();
  }
}, {
  id: "customer",
  keys: "F8",
  descriptionKey: "Shortcut_Quick_Customer",
  descriptionFallback: "Quick add customer",
  match: function match(e) {
    return e.key === "F8";
  },
  action: function action(vm) {
    if (typeof vm.Quick_Add_Client === "function") vm.Quick_Add_Client();
  }
}, {
  id: "print",
  keys: "F9",
  descriptionKey: "Shortcut_Print_Receipt",
  descriptionFallback: "Print last receipt",
  match: function match(e) {
    return e.key === "F9";
  },
  action: function action(vm) {
    // Prefer the host's "print last receipt" helper which re-opens the
    // receipt modal for the most recent sale id. `print_pos()` alone
    // requires the receipt modal's #invoice-POS element to already be
    // in the DOM and silently returns otherwise — so it appeared
    // broken once the modal was dismissed.
    if (typeof vm.print_last_receipt === "function") {
      vm.print_last_receipt();
    } else if (typeof vm.print_pos === "function") {
      vm.print_pos();
    }
  }
}, {
  id: "clear",
  keys: "Esc",
  descriptionKey: "Shortcut_Clear_Cart",
  descriptionFallback: "Clear cart (with confirmation)",
  match: function match(e) {
    return e.key === "Escape";
  },
  action: function action(vm) {
    if (!vm.details || !vm.details.length) return;
    // Prefer the confirmation flow; only fall back to direct reset for
    // hosts that haven't wired up the modal.
    if (typeof vm.confirmClearCart === "function") {
      vm.confirmClearCart();
    } else if (typeof vm.Reset_Pos === "function") {
      vm.Reset_Pos();
    }
  }
}, {
  id: "inc",
  keys: "Ctrl + ArrowUp",
  descriptionKey: "Shortcut_Increase_Last",
  descriptionFallback: "Increase quantity of last item in cart",
  match: function match(e) {
    return e.ctrlKey && e.key === "ArrowUp";
  },
  action: function action(vm) {
    if (!vm.details || !vm.details.length) return;
    var last = vm.details[vm.details.length - 1];
    if (last && typeof vm.increment === "function") vm.increment(last.detail_id);
  }
}, {
  id: "dec",
  keys: "Ctrl + ArrowDown",
  descriptionKey: "Shortcut_Decrease_Last",
  descriptionFallback: "Decrease quantity of last item in cart",
  match: function match(e) {
    return e.ctrlKey && e.key === "ArrowDown";
  },
  action: function action(vm) {
    if (!vm.details || !vm.details.length) return;
    var last = vm.details[vm.details.length - 1];
    if (last && typeof vm.decrement === "function") vm.decrement(last, last.detail_id);
  }
}, {
  id: "remove",
  keys: "Ctrl + Delete",
  descriptionKey: "Shortcut_Remove_Last",
  descriptionFallback: "Remove last item from cart",
  match: function match(e) {
    return e.ctrlKey && e.key === "Delete";
  },
  action: function action(vm) {
    if (!vm.details || !vm.details.length) return;
    var last = vm.details[vm.details.length - 1];
    if (last && typeof vm.delete_Product_Detail === "function") {
      vm.delete_Product_Detail(last.detail_id);
    }
  }
}, {
  id: "help",
  keys: "Shift + ?",
  descriptionKey: "Shortcut_Show_Help",
  descriptionFallback: "Show this shortcuts help",
  match: function match(e) {
    return e.shiftKey && (e.key === "?" || e.key === "/");
  },
  action: function action(vm) {
    if (vm.$bvModal && typeof vm.$bvModal.show === "function") {
      vm.$bvModal.show("pos-keyboard-shortcuts-help");
    }
  }
}];
function isTypingTarget(target) {
  if (!target) return false;
  var tag = (target.tagName || "").toUpperCase();
  if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
  if (target.isContentEditable) return true;
  return false;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    var _this = this;
    // Stored directly on the instance (not in data) to avoid Vue 2's
    // reactivity warning for keys prefixed with "_".
    this._posShortcutsHandler = null;
    var handler = function handler(e) {
      // Opt-in: do nothing unless the cashier explicitly enabled shortcuts.
      if (!posShortcutsEnabled()) return;

      // When any Bootstrap modal is open (payment modal, confirmation
      // modals, etc.) let the modal own the keyboard. We attach with
      // `capture: true`, so calling preventDefault here would block the
      // modal's own Esc-to-close behaviour AND still fire the cart-clear
      // shortcut — exactly the bug where pressing Esc from inside the
      // open payment modal was wiping the cart. Returning early defers
      // to the modal naturally.
      try {
        if (typeof document !== "undefined" && document.body && document.body.classList.contains("modal-open")) {
          return;
        }
      } catch (e2) {/* ignore */}

      // Never hijack typing in form fields — preserves existing
      // @keyup handlers on tax / discount / shipping / search inputs.
      // Exception: Escape and F-keys are still handled even from inputs
      // because cashiers expect them to work globally.
      var fromInput = isTypingTarget(e.target);
      var isFunctionKey = /^F[0-9]{1,2}$/.test(e.key) || e.key === "Escape";
      if (fromInput && !isFunctionKey) return;
      for (var _i = 0, _POS_SHORTCUTS = POS_SHORTCUTS; _i < _POS_SHORTCUTS.length; _i++) {
        var shortcut = _POS_SHORTCUTS[_i];
        if (shortcut.match(e)) {
          e.preventDefault();
          e.stopPropagation();
          try {
            shortcut.action(_this);
          } catch (err) {
            // Never let a shortcut error break the POS page.
            // eslint-disable-next-line no-console
            console.warn("[POS shortcut] action failed:", shortcut.id, err);
          }
          return;
        }
      }
    };
    this._posShortcutsHandler = handler;
    try {
      window.addEventListener("keydown", handler, true);
    } catch (e) {
      /* ignore */
    }
  },
  beforeDestroy: function beforeDestroy() {
    try {
      if (this._posShortcutsHandler) {
        window.removeEventListener("keydown", this._posShortcutsHandler, true);
        this._posShortcutsHandler = null;
      }
    } catch (e) {
      /* ignore */
    }
  }
});

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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=style&index=0&id=7bd1aea4&scoped=true&lang=css"
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=style&index=0&id=7bd1aea4&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.settings-container[data-v-7bd1aea4] {\r\n  border-radius: 0.5rem;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\r\n  overflow: hidden;\n}\r\n\r\n/* A4 invoice logo live preview */\n.invoice-logo-preview-box[data-v-7bd1aea4] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 16px;\r\n  background: #f9fafb;\r\n  border: 1px dashed #d1d5db;\r\n  border-radius: 6px;\r\n  min-height: 80px;\n}\n.customize-toggle-row[data-v-7bd1aea4] {\r\n  padding: 14px 18px;\r\n  border: 1px solid #e5e7eb;\r\n  border-radius: 10px;\r\n  background: #fafafa;\n}\n.customize-toggle-title[data-v-7bd1aea4] {\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  color: #1f2937;\r\n  margin-bottom: 4px;\n}\n.customize-toggle-hint[data-v-7bd1aea4] {\r\n  font-size: 12px;\r\n  color: #6b7280;\r\n  max-width: 680px;\n}\r\n\r\n/* Left Sidebar - Vertical Tabs */\n.settings-sidebar[data-v-7bd1aea4] {\r\n  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);\r\n  border-right: 1px solid #e9ecef;\r\n  min-height: 600px;\n}\n.settings-tabs-nav[data-v-7bd1aea4] {\r\n  padding: 0;\n}\n.settings-header[data-v-7bd1aea4] {\r\n  padding: 1.5rem;\r\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n  color: #ffffff;\r\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.settings-header h5[data-v-7bd1aea4] {\r\n  color: #ffffff;\r\n  font-weight: 600;\r\n  margin: 0;\n}\n.settings-nav[data-v-7bd1aea4] {\r\n  padding: 1rem 0;\r\n  display: flex;\r\n  flex-direction: column;\n}\n.settings-nav-item[data-v-7bd1aea4] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.75rem;\r\n  padding: 0.875rem 1.5rem;\r\n  border: none;\r\n  background: transparent;\r\n  color: #495057;\r\n  font-size: 0.9375rem;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n  text-align: left;\r\n  width: 100%;\r\n  position: relative;\r\n  border-left: 3px solid transparent;\n}\n.settings-nav-item i[data-v-7bd1aea4] {\r\n  font-size: 1.125rem;\r\n  width: 20px;\r\n  text-align: center;\n}\n.settings-nav-item[data-v-7bd1aea4]:hover {\r\n  background: rgba(102, 126, 234, 0.08);\r\n  color: #667eea;\r\n  border-left-color: #667eea;\n}\n.settings-nav-item.active[data-v-7bd1aea4] {\r\n  background: linear-gradient(90deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.1) 100%);\r\n  color: #667eea;\r\n  border-left-color: #667eea;\r\n  font-weight: 600;\n}\n.settings-nav-item.active[data-v-7bd1aea4]::before {\r\n  content: '';\r\n  position: absolute;\r\n  right: 0;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 8px solid transparent;\r\n  border-bottom: 8px solid transparent;\r\n  border-right: 8px solid #ffffff;\n}\r\n\r\n/* Right Content Panel */\n.settings-content[data-v-7bd1aea4] {\r\n  background: #ffffff;\n}\n.settings-content-wrapper[data-v-7bd1aea4] {\r\n  padding: 2rem;\r\n  min-height: 600px;\n}\n.settings-content-header[data-v-7bd1aea4] {\r\n  margin-bottom: 2rem;\r\n  padding-bottom: 1rem;\r\n  border-bottom: 2px solid #e9ecef;\n}\n.settings-content-header h4[data-v-7bd1aea4] {\r\n  color: #2c3e50;\r\n  font-weight: 600;\r\n  margin-bottom: 0.5rem;\n}\n.settings-content-header p[data-v-7bd1aea4] {\r\n  font-size: 0.875rem;\r\n  margin: 0;\n}\n.settings-content-body[data-v-7bd1aea4] {\r\n  position: relative;\n}\n.tab-content[data-v-7bd1aea4] {\r\n  animation: fadeIn-7bd1aea4 0.3s ease-in;\n}\n@keyframes fadeIn-7bd1aea4 {\nfrom {\r\n    opacity: 0;\r\n    transform: translateY(10px);\n}\nto {\r\n    opacity: 1;\r\n    transform: translateY(0);\n}\n}\r\n\r\n/* Form Styling */\n.tab-content .form-group[data-v-7bd1aea4] {\r\n  margin-bottom: 1.5rem;\n}\n.tab-content label[data-v-7bd1aea4] {\r\n  font-weight: 600;\r\n  color: #495057;\r\n  margin-bottom: 0.5rem;\r\n  font-size: 0.875rem;\n}\n.tab-content .form-control[data-v-7bd1aea4],\r\n.tab-content .vs__dropdown-toggle[data-v-7bd1aea4] {\r\n  border-radius: 0.375rem;\r\n  border: 1px solid #ced4da;\r\n  transition: all 0.3s ease;\n}\n.tab-content .form-control[data-v-7bd1aea4]:focus,\r\n.tab-content .vs__dropdown-toggle[data-v-7bd1aea4]:focus {\r\n  border-color: #667eea;\r\n  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);\n}\r\n\r\n/* System Actions Card */\n.system-actions-card[data-v-7bd1aea4] {\r\n  background: #f8f9fa;\r\n  border-radius: 0.5rem;\r\n  padding: 2rem;\r\n  border: 1px solid #e9ecef;\n}\n.system-actions-card h5[data-v-7bd1aea4] {\r\n  color: #2c3e50;\r\n  font-weight: 600;\n}\n.action-btn-system[data-v-7bd1aea4] {\r\n  padding: 0.75rem 2rem;\r\n  font-weight: 500;\r\n  border-radius: 0.375rem;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  transition: all 0.3s ease;\n}\n.action-btn-system[data-v-7bd1aea4]:hover {\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\r\n\r\n/* Footer Submit Button */\n.settings-footer[data-v-7bd1aea4] {\r\n  margin-top: 2.5rem;\r\n  padding-top: 2rem;\r\n  border-top: 2px solid #e9ecef;\r\n  display: flex;\r\n  justify-content: flex-end;\n}\n.submit-btn[data-v-7bd1aea4] {\r\n  padding: 0.75rem 2.5rem;\r\n  font-weight: 600;\r\n  border-radius: 0.375rem;\r\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n  border: none;\r\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);\r\n  transition: all 0.3s ease;\n}\n.submit-btn[data-v-7bd1aea4]:hover {\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.5);\n}\n.submit-btn[data-v-7bd1aea4]:active {\r\n  transform: translateY(0);\n}\r\n\r\n/* Custom Checkbox Switch Styling */\n.custom-switch[data-v-7bd1aea4] {\r\n  padding-left: 2.5rem;\n}\r\n\r\n/* Mobile Tab Selector */\n.mobile-tab-selector[data-v-7bd1aea4] {\r\n  padding: 1rem;\r\n  background: #ffffff;\r\n  border-bottom: 1px solid #e9ecef;\r\n  position: relative;\r\n  z-index: 1000;\n}\r\n\r\n/* Hide mobile tab selector when sidebar is open on mobile */\n@media (max-width: 767.98px) {\n.mobile-tab-selector.sidebar-open[data-v-7bd1aea4] {\r\n    display: none !important;\n}\n}\n.mobile-tab-select[data-v-7bd1aea4] {\r\n  width: 100%;\r\n  padding: 0.75rem 1rem;\r\n  padding-right: 2.5rem;\r\n  border: 1px solid #ced4da;\r\n  border-radius: 0.375rem;\r\n  font-size: 0.9375rem;\r\n  font-weight: 500;\r\n  background: #ffffff;\r\n  color: #495057;\r\n  cursor: pointer;\r\n  min-height: 48px;\r\n  -webkit-appearance: menulist;\r\n  -moz-appearance: menulist;\r\n  appearance: menulist;\r\n  text-align: left;\r\n  direction: ltr;\n}\n.mobile-tab-select[data-v-7bd1aea4]:focus {\r\n  border-color: #667eea;\r\n  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);\r\n  outline: none;\n}\r\n\r\n/* Ensure dropdown options display fully */\n.mobile-tab-select option[data-v-7bd1aea4] {\r\n  padding: 0.75rem 1rem;\r\n  font-size: 0.9375rem;\r\n  white-space: normal;\r\n  word-wrap: break-word;\r\n  overflow-wrap: break-word;\r\n  height: auto;\r\n  line-height: 1.5;\r\n  display: block;\r\n  text-align: left;\r\n  direction: ltr;\r\n  min-height: 44px;\n}\r\n\r\n/* Fix for Bootstrap select dropdown */\n.mobile-tab-selector .custom-select[data-v-7bd1aea4],\r\n.mobile-tab-selector select[data-v-7bd1aea4] {\r\n  background-image: none;\r\n  background-position: right 0.75rem center;\r\n  background-repeat: no-repeat;\r\n  background-size: 8px 10px;\r\n  padding-right: 2.5rem;\n}\r\n\r\n/* Ensure the select wrapper doesn't constrain the dropdown */\n.mobile-tab-selector[data-v-7bd1aea4] {\r\n  overflow: visible !important;\n}\n.mobile-tab-selector *[data-v-7bd1aea4] {\r\n  overflow: visible !important;\n}\r\n\r\n/* Fix for mobile browsers that might clip the dropdown */\n@media (max-width: 767.98px) {\n.mobile-tab-selector[data-v-7bd1aea4] {\r\n    position: relative;\r\n    z-index: 1050;\n}\n.mobile-tab-select[data-v-7bd1aea4] {\r\n    position: relative;\r\n    z-index: 1051;\n}\r\n  \r\n  /* Ensure dropdown menu appears above other content */\n.mobile-tab-select[data-v-7bd1aea4]:focus {\r\n    z-index: 1052;\n}\n}\r\n\r\n/* Responsive Design */\n@media (max-width: 991.98px) {\n.settings-sidebar[data-v-7bd1aea4] {\r\n    border-right: none;\r\n    border-bottom: 1px solid #e9ecef;\r\n    min-height: auto;\n}\n.settings-content-wrapper[data-v-7bd1aea4] {\r\n    padding: 1.5rem;\n}\n.settings-content-header[data-v-7bd1aea4] {\r\n    margin-bottom: 1.5rem;\r\n    padding-bottom: 0.75rem;\n}\n.settings-content-header h4[data-v-7bd1aea4] {\r\n    font-size: 1.25rem;\n}\n.settings-content-header p[data-v-7bd1aea4] {\r\n    font-size: 0.8125rem;\n}\n}\n@media (max-width: 767.98px) {\n.settings-container[data-v-7bd1aea4] {\r\n    margin: 0 -15px;\n}\n.settings-content-wrapper[data-v-7bd1aea4] {\r\n    padding: 1rem;\n}\n.settings-content-header[data-v-7bd1aea4] {\r\n    margin-bottom: 1rem;\r\n    padding-bottom: 0.5rem;\n}\n.settings-content-header h4[data-v-7bd1aea4] {\r\n    font-size: 1.125rem;\n}\n.settings-footer[data-v-7bd1aea4] {\r\n    flex-direction: column;\r\n    gap: 1rem;\n}\n.submit-btn[data-v-7bd1aea4] {\r\n    width: 100%;\n}\n.settings-tabs-nav[data-v-7bd1aea4] {\r\n    max-height: none;\n}\n.settings-header[data-v-7bd1aea4] {\r\n    padding: 1rem;\n}\n.settings-header h5[data-v-7bd1aea4] {\r\n    font-size: 1rem;\n}\n}\n@media (max-width: 575.98px) {\n.settings-content-wrapper[data-v-7bd1aea4] {\r\n    padding: 0.75rem;\n}\n.settings-content-header h4[data-v-7bd1aea4] {\r\n    font-size: 1rem;\n}\n.mobile-tab-selector[data-v-7bd1aea4] {\r\n    padding: 0.75rem;\r\n    position: sticky !important;\r\n    top: 0;\r\n    z-index: unset !important;\r\n    background: #ffffff;\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n    overflow: visible !important;\n}\n.mobile-tab-select[data-v-7bd1aea4] {\r\n    font-size: 0.875rem;\r\n    padding: 0.625rem 0.875rem;\r\n    min-height: 44px;\r\n    width: 100%;\n}\n.mobile-tab-select option[data-v-7bd1aea4] {\r\n    padding: 0.625rem 0.875rem;\r\n    font-size: 0.875rem;\r\n    white-space: normal;\r\n    word-wrap: break-word;\r\n    overflow-wrap: break-word;\r\n    max-width: 100%;\n}\r\n\r\n  /* Make form elements more mobile-friendly */\n.tab-content .form-group[data-v-7bd1aea4] {\r\n    margin-bottom: 1rem;\n}\n.tab-content label[data-v-7bd1aea4] {\r\n    font-size: 0.8125rem;\n}\r\n\r\n  /* Adjust card padding on mobile */\n.system-actions-card[data-v-7bd1aea4] {\r\n    padding: 1.5rem;\n}\r\n\r\n  /* Make tables responsive on mobile */\n.tab-content .vgt-table[data-v-7bd1aea4] {\r\n    font-size: 0.8125rem;\n}\r\n\r\n  /* Stack form columns on mobile */\n.tab-content .row > [class*=\"col-\"][data-v-7bd1aea4] {\r\n    margin-bottom: 1rem;\n}\r\n\r\n  /* Adjust button sizes on mobile */\n.tab-content .btn[data-v-7bd1aea4] {\r\n    font-size: 0.875rem;\r\n    padding: 0.5rem 1rem;\n}\n}\r\n\r\n/* Custom Scrollbar for Sidebar */\n.settings-nav[data-v-7bd1aea4]::-webkit-scrollbar {\r\n  height: 4px;\n}\n.settings-nav[data-v-7bd1aea4]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\n}\n.settings-nav[data-v-7bd1aea4]::-webkit-scrollbar-thumb {\r\n  background: #667eea;\r\n  border-radius: 2px;\n}\n.settings-nav[data-v-7bd1aea4]::-webkit-scrollbar-thumb:hover {\r\n  background: #764ba2;\n}\n.pos-receipt-demo[data-v-7bd1aea4] {\r\n  /* Approximate 88mm receipt width at 96dpi: ~332px */\r\n  width: 330px;\r\n  max-width: 100%;\r\n  margin: 0 auto;\r\n  background: #ffffff;\r\n  padding: 10px;\r\n  border: 1px dashed #dee2e6;\r\n  font-size: 11px;\n}\n.pos-receipt-demo .info[data-v-7bd1aea4] {\r\n  text-align: center;\n}\n.pos-receipt-demo .table_data[data-v-7bd1aea4] {\r\n  width: 100%;\n}\r\n\r\n/* Layout 5 specific styles (Minimal) */\n.receipt-layout-5[data-v-7bd1aea4] {\r\n  width: 240px;\r\n  max-width: 100%;\r\n  margin: 0 auto;\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;\r\n  font-size: 11px;\r\n  line-height: 1.4;\r\n  color: #111;\r\n  letter-spacing: 0.2px;\n}\n.receipt-layout-5 .minimal-store-name[data-v-7bd1aea4] {\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n  letter-spacing: 1.5px;\r\n  text-transform: uppercase;\r\n  margin-top: 2px;\n}\n.receipt-layout-5 .minimal-contact[data-v-7bd1aea4] {\r\n  font-size: 10px;\r\n  color: #555;\r\n  margin-top: 2px;\n}\n.receipt-layout-5 .minimal-divider[data-v-7bd1aea4] {\r\n  border-top: 1px solid #111;\r\n  margin: 6px 0;\n}\n.receipt-layout-5 .minimal-meta[data-v-7bd1aea4] {\r\n  font-size: 10px;\n}\n.receipt-layout-5 .minimal-meta-row[data-v-7bd1aea4] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 1px 0;\n}\n.receipt-layout-5 .minimal-meta-row span[data-v-7bd1aea4]:first-child {\r\n  color: #666;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.5px;\r\n  font-size: 9px;\n}\n.receipt-layout-5 .minimal-items[data-v-7bd1aea4] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  font-size: 10px;\n}\n.receipt-layout-5 .minimal-items td[data-v-7bd1aea4] {\r\n  padding: 3px 0;\r\n  vertical-align: top;\n}\n.receipt-layout-5 .minimal-item-name[data-v-7bd1aea4] {\r\n  font-weight: 500;\n}\n.receipt-layout-5 .minimal-item-qty[data-v-7bd1aea4] {\r\n  color: #777;\r\n  font-size: 9px;\r\n  margin-top: 1px;\n}\n.receipt-layout-5 .minimal-item-discount[data-v-7bd1aea4] {\r\n  color: #999;\r\n  font-size: 9px;\r\n  font-style: italic;\r\n  margin-top: 1px;\r\n  letter-spacing: 0.3px;\n}\n.receipt-layout-5 .minimal-item-total[data-v-7bd1aea4] {\r\n  text-align: right;\r\n  white-space: nowrap;\n}\n.receipt-layout-5 .minimal-totals[data-v-7bd1aea4] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  font-size: 10px;\n}\n.receipt-layout-5 .minimal-totals td[data-v-7bd1aea4] {\r\n  padding: 2px 0;\n}\n.receipt-layout-5 .minimal-totals td[data-v-7bd1aea4]:last-child {\r\n  text-align: right;\n}\n.receipt-layout-5 .minimal-totals td[data-v-7bd1aea4]:first-child {\r\n  color: #666;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.5px;\r\n  font-size: 9px;\n}\n.receipt-layout-5 .minimal-grand td[data-v-7bd1aea4] {\r\n  font-size: 12px !important;\r\n  font-weight: 700;\r\n  color: #111 !important;\r\n  letter-spacing: 0.5px !important;\r\n  padding-top: 6px;\r\n  border-top: 1px solid #111;\r\n  text-transform: none !important;\n}\n.receipt-layout-5 .minimal-payments[data-v-7bd1aea4] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  font-size: 10px;\r\n  margin-top: 6px;\n}\n.receipt-layout-5 .minimal-payments th[data-v-7bd1aea4] {\r\n  font-weight: 500;\r\n  color: #666;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.5px;\r\n  font-size: 9px;\r\n  padding: 3px 0;\r\n  border-top: 1px solid #eee;\r\n  border-bottom: 1px solid #eee;\n}\n.receipt-layout-5 .minimal-payments th[data-v-7bd1aea4]:nth-child(2),\r\n.receipt-layout-5 .minimal-payments td[data-v-7bd1aea4]:nth-child(2) {\r\n  text-align: center;\n}\n.receipt-layout-5 .minimal-payments th[data-v-7bd1aea4]:nth-child(3),\r\n.receipt-layout-5 .minimal-payments td[data-v-7bd1aea4]:nth-child(3) {\r\n  text-align: right;\n}\n.receipt-layout-5 .minimal-payments td[data-v-7bd1aea4] {\r\n  padding: 2px 0;\n}\n.receipt-layout-5 .minimal-note[data-v-7bd1aea4] {\r\n  text-align: center;\r\n  font-size: 10px;\r\n  color: #555;\r\n  margin: 8px 0 0;\r\n  font-style: italic;\n}\r\n\r\n/* Responsive styles for POS receipt layout controls and preview (System Settings -> POS tab) */\n@media (max-width: 768px) {\r\n  /* Make layout radio buttons responsive */\n.tab-content .form-group[data-v-7bd1aea4] {\r\n    width: 100%;\n}\n.tab-content .btn-group-toggle.btn-group[data-v-7bd1aea4] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    width: 100%;\n}\n.tab-content .btn-group-toggle.btn-group .btn[data-v-7bd1aea4] {\r\n    flex: 1;\r\n    min-width: 0;\r\n    font-size: 0.875rem;\r\n    padding: 0.25rem 0.5rem;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\n}\n.pos-receipt-demo[data-v-7bd1aea4] {\r\n    width: 100%;\r\n    padding: 12px;\r\n    font-size: 10px;\n}\n.pos-receipt-demo .table_data[data-v-7bd1aea4] {\r\n    font-size: 10px !important;\n}\n}\n@media (max-width: 480px) {\r\n  /* Stack layout buttons vertically on small screens */\n.tab-content .btn-group-toggle.btn-group[data-v-7bd1aea4] {\r\n    flex-direction: column;\n}\n.tab-content .btn-group-toggle.btn-group .btn[data-v-7bd1aea4] {\r\n    width: 100%;\r\n    margin-bottom: 4px;\r\n    border-radius: 0.25rem !important;\r\n    font-size: 0.8rem;\r\n    padding: 0.375rem 0.5rem;\r\n    white-space: normal;\r\n    word-wrap: break-word;\n}\n.tab-content .btn-group-toggle.btn-group .btn[data-v-7bd1aea4]:last-child {\r\n    margin-bottom: 0;\n}\n.pos-receipt-demo[data-v-7bd1aea4] {\r\n    padding: 8px;\r\n    font-size: 9px;\n}\n.pos-receipt-demo .table_data[data-v-7bd1aea4] {\r\n    font-size: 9px !important;\n}\n.pos-receipt-demo small[data-v-7bd1aea4] {\r\n    word-wrap: break-word;\r\n    overflow-wrap: break-word;\n}\n}\n@media (max-width: 360px) {\n.pos-receipt-demo[data-v-7bd1aea4] {\r\n    font-size: 8px;\r\n    padding: 6px;\n}\n.pos-receipt-demo .table_data[data-v-7bd1aea4] {\r\n    font-size: 8px !important;\n}\n.pos-receipt-demo td[data-v-7bd1aea4],\r\n  .pos-receipt-demo th[data-v-7bd1aea4] {\r\n    padding: 2px 4px;\n}\n}\r\n\r\n/* Backup Tab Styles */\n.backup-table-wrapper[data-v-7bd1aea4] {\r\n  background: #ffffff;\r\n  border-radius: 0.5rem;\r\n  overflow: hidden;\r\n  border: 1px solid #e9ecef;\n}\n.btn-generate-backup[data-v-7bd1aea4] {\r\n  padding: 0.625rem 1.5rem;\r\n  font-weight: 500;\r\n  border-radius: 0.375rem;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  transition: all 0.3s ease;\n}\n.btn-generate-backup[data-v-7bd1aea4]:hover {\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.btn-delete-backup[data-v-7bd1aea4] {\r\n  padding: 0.375rem 0.75rem;\r\n  border-radius: 0.375rem;\n}\n.btn-delete-backup[data-v-7bd1aea4]:hover {\r\n  transform: scale(1.05);\n}\r\n\r\n/* Dashboard Settings tab */\n.dashboard-settings-tab .dashboard-settings-card[data-v-7bd1aea4] {\r\n  background: #f8f9fa;\r\n  border: 1px solid #e9ecef;\n}\n.dashboard-widget-order-list[data-v-7bd1aea4] {\r\n  margin: 0;\r\n  padding: 0;\r\n  max-width: 560px;\n}\n.dashboard-widget-order-item[data-v-7bd1aea4] {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0.65rem 0.9rem;\r\n  margin-bottom: 0.5rem;\r\n  background: #fff;\r\n  border: 1px solid #e9ecef;\r\n  border-radius: 0.5rem;\r\n  list-style: none;\r\n  cursor: default;\r\n  transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.dashboard-widget-order-item[data-v-7bd1aea4]:hover {\r\n  background: #fff;\r\n  border-color: #dee2e6;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\r\n\r\n/* Ghost: placeholder left in the list while dragging */\n.dashboard-widget-order-ghost[data-v-7bd1aea4] {\r\n  opacity: 0.45;\r\n  background: #e9ecef !important;\r\n  border: 2px dashed #adb5bd !important;\r\n  border-radius: 0.5rem;\n}\n.dashboard-widget-order-ghost .widget-order-number[data-v-7bd1aea4],\r\n.dashboard-widget-order-ghost .widget-order-label[data-v-7bd1aea4] {\r\n  opacity: 0.8;\n}\r\n\r\n/* Chosen: item when first picked up (still in list) */\n.dashboard-widget-order-chosen[data-v-7bd1aea4] {\r\n  background: #f0f4ff !important;\r\n  border-color: #8b9dc3 !important;\r\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\r\n\r\n/* Drag: the element that follows the cursor */\n.dashboard-widget-order-drag[data-v-7bd1aea4] {\r\n  opacity: 1;\r\n  background: #fff !important;\r\n  border: 2px solid #8B5CF6 !important;\r\n  box-shadow: 0 8px 24px rgba(139, 92, 246, 0.25) !important;\r\n  border-radius: 0.5rem;\r\n  cursor: grabbing !important;\n}\n.dashboard-widget-order-drag .drag-handle[data-v-7bd1aea4] {\r\n  cursor: grabbing !important;\r\n  color: #8B5CF6;\n}\n.drag-handle[data-v-7bd1aea4] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 32px;\r\n  height: 32px;\r\n  margin-right: 0.75rem;\r\n  color: #6c757d;\r\n  cursor: grab;\r\n  border-radius: 0.375rem;\r\n  transition: background 0.15s ease, color 0.15s ease;\r\n  flex-shrink: 0;\n}\n.drag-handle[data-v-7bd1aea4]:hover {\r\n  background: #e9ecef;\r\n  color: #495057;\n}\n.drag-handle[data-v-7bd1aea4]:active {\r\n  cursor: grabbing;\n}\n.drag-handle .lucide-icon[data-v-7bd1aea4] {\r\n  width: 1.1rem;\r\n  height: 1.1rem;\n}\n.widget-order-number[data-v-7bd1aea4] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-width: 1.75rem;\r\n  height: 1.75rem;\r\n  margin-right: 0.75rem;\r\n  padding: 0 0.35rem;\r\n  font-size: 0.8125rem;\r\n  font-weight: 700;\r\n  color: #6c757d;\r\n  background: #e9ecef;\r\n  border-radius: 0.375rem;\r\n  flex-shrink: 0;\n}\n.dashboard-widget-order-chosen .widget-order-number[data-v-7bd1aea4],\r\n.dashboard-widget-order-drag .widget-order-number[data-v-7bd1aea4] {\r\n  background: #8B5CF6;\r\n  color: #fff;\n}\n.widget-order-label[data-v-7bd1aea4] {\r\n  flex: 1;\r\n  font-weight: 500;\r\n  color: #212529;\r\n  font-size: 0.9375rem;\n}\r\n\r\n/* ============================================================\r\n   Luxury settings refresh\r\n   ============================================================ */\n.settings-container[data-v-7bd1aea4] {\r\n  border-radius: 28px !important;\r\n  overflow: hidden;\r\n  border: 1px solid var(--lux-border) !important;\r\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, var(--lux-panel) 100%);\r\n  box-shadow: var(--lux-shadow-md) !important;\r\n  backdrop-filter: blur(18px);\r\n  -webkit-backdrop-filter: blur(18px);\n}\n.settings-sidebar[data-v-7bd1aea4] {\r\n  background: linear-gradient(180deg, var(--lux-panel-muted) 0%, rgba(255, 255, 255, 0.02) 100%) !important;\r\n  border-right: 1px solid var(--lux-border) !important;\n}\n.settings-tabs-nav[data-v-7bd1aea4] {\r\n  position: sticky;\r\n  top: 0;\n}\n.settings-header[data-v-7bd1aea4] {\r\n  padding: 1.4rem 1.35rem !important;\r\n  background:\r\n    radial-gradient(circle at top right, rgba(214, 177, 122, 0.26), transparent 45%),\r\n    linear-gradient(135deg, rgba(30, 23, 16, 0.92) 0%, rgba(91, 63, 33, 0.92) 100%) !important;\r\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.settings-header h5[data-v-7bd1aea4] {\r\n  font-family: 'Source Serif 4', Georgia, serif;\r\n  font-size: 1.35rem;\r\n  letter-spacing: -0.03em;\n}\n.settings-nav[data-v-7bd1aea4] {\r\n  padding: 1rem;\r\n  gap: 0.45rem;\r\n  max-height: calc(100vh - 250px);\r\n  overflow: auto;\n}\n.settings-nav-item[data-v-7bd1aea4] {\r\n  margin: 0;\r\n  padding: 0.9rem 1rem;\r\n  border: 1px solid transparent;\r\n  border-radius: 18px;\r\n  background: transparent;\r\n  color: var(--lux-muted-strong);\n}\n.settings-nav-item svg[data-v-7bd1aea4],\r\n.settings-nav-item i[data-v-7bd1aea4] {\r\n  width: 1.1rem;\r\n  height: 1.1rem;\r\n  color: var(--lux-accent-strong);\r\n  flex-shrink: 0;\n}\n.settings-nav-item[data-v-7bd1aea4]:hover {\r\n  background: linear-gradient(135deg, var(--lux-accent-soft), rgba(255, 255, 255, 0.02));\r\n  color: var(--lux-heading);\r\n  border-color: rgba(180, 136, 82, 0.18);\r\n  box-shadow: 0 10px 20px rgba(58, 36, 16, 0.12);\r\n  transform: translateX(3px);\n}\n.settings-nav-item.active[data-v-7bd1aea4] {\r\n  background: linear-gradient(135deg, rgba(214, 177, 122, 0.18), rgba(255, 255, 255, 0.02));\r\n  color: var(--lux-heading);\r\n  border-left-color: transparent;\r\n  border-color: rgba(180, 136, 82, 0.24);\r\n  box-shadow: 0 14px 26px rgba(58, 36, 16, 0.14);\n}\n.settings-nav-item.active[data-v-7bd1aea4]::before {\r\n  display: none;\n}\n.settings-content[data-v-7bd1aea4] {\r\n  background: transparent !important;\n}\n.settings-content-wrapper[data-v-7bd1aea4] {\r\n  padding: 1.5rem !important;\r\n  min-height: 680px;\r\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.01) 0%, rgba(0, 0, 0, 0) 100%);\n}\n.settings-content-header[data-v-7bd1aea4] {\r\n  margin-bottom: 1.5rem;\r\n  padding: 1.35rem 1.4rem;\r\n  border: 1px solid var(--lux-border);\r\n  border-radius: 24px;\r\n  background: linear-gradient(135deg, var(--lux-panel-strong), var(--lux-panel-muted));\r\n  box-shadow: var(--lux-shadow-sm);\n}\n.settings-content-header h4[data-v-7bd1aea4] {\r\n  font-family: 'Source Serif 4', Georgia, serif;\r\n  font-size: 1.8rem;\r\n  color: var(--lux-heading);\n}\n.settings-content-header p[data-v-7bd1aea4] {\r\n  color: var(--lux-muted) !important;\r\n  font-size: 0.93rem;\n}\n.settings-content-body[data-v-7bd1aea4] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.25rem;\n}\n.tab-content[data-v-7bd1aea4] {\r\n  padding: 1.35rem 1.4rem;\r\n  border-radius: 24px;\r\n  border: 1px solid var(--lux-border);\r\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), var(--lux-panel));\r\n  box-shadow: var(--lux-shadow-xs);\n}\n.tab-content h5[data-v-7bd1aea4] {\r\n  font-family: 'Source Serif 4', Georgia, serif;\r\n  font-size: 1.2rem;\r\n  color: var(--lux-heading);\n}\n.tab-content hr[data-v-7bd1aea4] {\r\n  border-color: var(--lux-border) !important;\r\n  opacity: 1;\n}\n.tab-content label[data-v-7bd1aea4] {\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.08em;\r\n  font-size: 0.72rem;\r\n  font-weight: 700;\r\n  color: var(--lux-muted-strong);\n}\n.tab-content .form-control[data-v-7bd1aea4],\r\n.tab-content textarea[data-v-7bd1aea4],\r\n.tab-content .custom-select[data-v-7bd1aea4],\r\n.mobile-tab-select[data-v-7bd1aea4],[data-v-7bd1aea4] .vs__dropdown-toggle {\r\n  background: var(--lux-panel-strong) !important;\r\n  border: 1px solid var(--lux-border) !important;\r\n  border-radius: 16px !important;\r\n  color: var(--lux-text) !important;\r\n  min-height: 48px;\r\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);\n}\n.tab-content textarea.form-control[data-v-7bd1aea4] {\r\n  min-height: 110px;\r\n  padding-top: 0.85rem;\n}\n.tab-content .form-control[data-v-7bd1aea4]::-moz-placeholder {\r\n  color: var(--lux-muted) !important;\n}\n.tab-content .form-control[data-v-7bd1aea4]::placeholder,\r\n.mobile-tab-select[data-v-7bd1aea4] {\r\n  color: var(--lux-muted) !important;\n}\n.tab-content .form-control[data-v-7bd1aea4]:focus,\r\n.mobile-tab-select[data-v-7bd1aea4]:focus,[data-v-7bd1aea4] .vs__dropdown-toggle:focus-within {\r\n  border-color: rgba(180, 136, 82, 0.34) !important;\r\n  box-shadow: var(--lux-ring) !important;\n}\n[data-v-7bd1aea4] .vs__dropdown-menu {\r\n  background: var(--lux-panel) !important;\r\n  border: 1px solid var(--lux-border) !important;\r\n  border-radius: 16px !important;\r\n  box-shadow: var(--lux-shadow-md) !important;\n}\n[data-v-7bd1aea4] .vs__selected,[data-v-7bd1aea4] .vs__search,[data-v-7bd1aea4] .vs__dropdown-option {\r\n  color: var(--lux-text) !important;\n}\n[data-v-7bd1aea4] .vs__open-indicator,[data-v-7bd1aea4] .vs__clear {\r\n  fill: var(--lux-muted-strong) !important;\n}\n[data-v-7bd1aea4] .vs__dropdown-option--highlight,[data-v-7bd1aea4] .vs__dropdown-option--selected {\r\n  background: var(--lux-accent-soft) !important;\r\n  color: var(--lux-heading) !important;\n}\n.customize-toggle-row[data-v-7bd1aea4],\r\n.system-actions-card[data-v-7bd1aea4],\r\n.backup-table-wrapper[data-v-7bd1aea4],\r\n.dashboard-settings-tab .dashboard-settings-card[data-v-7bd1aea4] {\r\n  border-radius: 20px !important;\r\n  border: 1px solid var(--lux-border) !important;\r\n  background: linear-gradient(180deg, var(--lux-panel-strong), var(--lux-panel-muted)) !important;\r\n  box-shadow: var(--lux-shadow-xs);\n}\n.customize-toggle-title[data-v-7bd1aea4] {\r\n  color: var(--lux-heading) !important;\r\n  font-family: 'Source Serif 4', Georgia, serif;\r\n  font-size: 1.04rem;\n}\n.customize-toggle-hint[data-v-7bd1aea4] {\r\n  color: var(--lux-muted) !important;\r\n  font-size: 0.84rem;\r\n  line-height: 1.7;\n}\n.customize-toggle-row .slider[data-v-7bd1aea4] {\r\n  background: var(--lux-panel-contrast) !important;\n}\n.customize-toggle-row input:checked + .slider[data-v-7bd1aea4] {\r\n  background: linear-gradient(135deg, var(--lux-accent) 0%, var(--lux-accent-strong) 100%) !important;\n}\n.tab-content .btn-primary[data-v-7bd1aea4],\r\n.submit-btn[data-v-7bd1aea4],\r\n.btn-generate-backup[data-v-7bd1aea4] {\r\n  background: linear-gradient(135deg, var(--lux-accent) 0%, var(--lux-accent-strong) 100%) !important;\r\n  border: 0 !important;\r\n  color: var(--lux-accent-contrast) !important;\r\n  border-radius: 16px !important;\r\n  box-shadow: 0 16px 28px rgba(139, 98, 47, 0.24) !important;\r\n  font-weight: 700 !important;\n}\n.tab-content .btn-primary[data-v-7bd1aea4]:hover,\r\n.submit-btn[data-v-7bd1aea4]:hover,\r\n.btn-generate-backup[data-v-7bd1aea4]:hover {\r\n  transform: translateY(-1px);\r\n  filter: brightness(1.03);\n}\n.tab-content .btn-outline-secondary[data-v-7bd1aea4],\r\n.tab-content .btn-outline-primary[data-v-7bd1aea4],\r\n.tab-content .btn-outline-danger[data-v-7bd1aea4],\r\n.btn-delete-backup[data-v-7bd1aea4] {\r\n  border-radius: 14px !important;\r\n  border-color: var(--lux-border-strong) !important;\r\n  background: transparent !important;\r\n  color: var(--lux-text) !important;\n}\n.mobile-tab-selector[data-v-7bd1aea4] {\r\n  padding: 1rem !important;\r\n  background: transparent !important;\r\n  border-bottom: 0 !important;\n}\n.mobile-tab-select[data-v-7bd1aea4] {\r\n  background: linear-gradient(180deg, var(--lux-panel-strong), var(--lux-panel)) !important;\n}\n.dashboard-widget-order-item[data-v-7bd1aea4] {\r\n  background: var(--lux-panel-strong) !important;\r\n  border: 1px solid var(--lux-border) !important;\r\n  border-radius: 18px !important;\r\n  box-shadow: var(--lux-shadow-xs);\n}\n.dashboard-widget-order-item[data-v-7bd1aea4]:hover {\r\n  border-color: var(--lux-border-strong) !important;\r\n  box-shadow: var(--lux-shadow-sm);\r\n  transform: translateY(-1px);\n}\n.dashboard-widget-order-ghost[data-v-7bd1aea4] {\r\n  background: var(--lux-panel-muted) !important;\r\n  border: 2px dashed rgba(180, 136, 82, 0.28) !important;\n}\n.dashboard-widget-order-chosen[data-v-7bd1aea4] {\r\n  background: var(--lux-accent-soft) !important;\r\n  border-color: rgba(180, 136, 82, 0.3) !important;\n}\n.dashboard-widget-order-drag[data-v-7bd1aea4] {\r\n  background: var(--lux-panel-strong) !important;\r\n  border: 2px solid var(--lux-accent) !important;\r\n  box-shadow: var(--lux-shadow-md) !important;\n}\n.drag-handle[data-v-7bd1aea4] {\r\n  background: var(--lux-accent-faint);\r\n  color: var(--lux-accent-strong);\r\n  border-radius: 12px;\n}\n.drag-handle[data-v-7bd1aea4]:hover {\r\n  background: var(--lux-accent-soft);\r\n  color: var(--lux-heading);\n}\n.widget-order-number[data-v-7bd1aea4] {\r\n  background: var(--lux-panel-contrast);\r\n  color: var(--lux-muted-strong);\n}\n.dashboard-widget-order-chosen .widget-order-number[data-v-7bd1aea4],\r\n.dashboard-widget-order-drag .widget-order-number[data-v-7bd1aea4] {\r\n  background: linear-gradient(135deg, var(--lux-accent) 0%, var(--lux-accent-strong) 100%);\r\n  color: var(--lux-accent-contrast);\n}\n.widget-order-label[data-v-7bd1aea4] {\r\n  color: var(--lux-text);\n}\n.invoice-logo-preview-box[data-v-7bd1aea4] {\r\n  background: linear-gradient(180deg, var(--lux-panel-strong), var(--lux-panel));\r\n  border: 1px dashed var(--lux-border-strong);\r\n  border-radius: 18px;\n}\n.tab-content .invalid-feedback[data-v-7bd1aea4],\r\n.text-muted[data-v-7bd1aea4],\r\nsmall.text-muted[data-v-7bd1aea4] {\r\n  color: var(--lux-muted) !important;\n}\n@media (max-width: 991.98px) {\n.settings-nav[data-v-7bd1aea4] {\r\n    max-height: none;\n}\n.settings-content-wrapper[data-v-7bd1aea4] {\r\n    padding: 1.1rem !important;\n}\n}\n@media (max-width: 767.98px) {\n.settings-container[data-v-7bd1aea4] {\r\n    border-radius: 22px !important;\n}\n.settings-content-header h4[data-v-7bd1aea4] {\r\n    font-size: 1.35rem;\n}\n.tab-content[data-v-7bd1aea4] {\r\n    padding: 1rem;\n}\n.settings-nav-item[data-v-7bd1aea4] {\r\n    padding: 0.8rem 0.9rem;\n}\n}\n.settings-container.settings-container[data-v-7bd1aea4],\r\n.settings-sidebar.settings-sidebar[data-v-7bd1aea4] {\r\n  border-color: var(--lux-border) !important;\n}\n.settings-sidebar.settings-sidebar[data-v-7bd1aea4] {\r\n  background-color: var(--lux-panel-muted) !important;\r\n  background-image: linear-gradient(180deg, var(--lux-panel-muted) 0%, rgba(255, 255, 255, 0.02) 100%) !important;\n}\n.settings-sidebar .settings-header[data-v-7bd1aea4] {\r\n  background-color: rgba(36, 27, 17, 0.96) !important;\r\n  background-image:\r\n    radial-gradient(circle at top right, rgba(214, 177, 122, 0.26), transparent 45%),\r\n    linear-gradient(135deg, rgba(36, 27, 17, 0.96) 0%, rgba(112, 79, 43, 0.96) 100%) !important;\n}\n.settings-sidebar .settings-nav-item[data-v-7bd1aea4]:hover,\r\n.settings-sidebar .settings-nav-item.active[data-v-7bd1aea4] {\r\n  background-color: rgba(214, 177, 122, 0.12) !important;\r\n  background-image: linear-gradient(135deg, rgba(214, 177, 122, 0.16), rgba(255, 255, 255, 0.01)) !important;\r\n  color: var(--lux-heading) !important;\n}\n.settings-sidebar .settings-nav-item.active svg[data-v-7bd1aea4],\r\n.settings-sidebar .settings-nav-item.active i[data-v-7bd1aea4],\r\n.settings-sidebar .settings-nav-item:hover svg[data-v-7bd1aea4],\r\n.settings-sidebar .settings-nav-item:hover i[data-v-7bd1aea4] {\r\n  color: var(--lux-accent-strong) !important;\n}\r\n", ""]);
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

/***/ "./node_modules/sortablejs/modular/sortable.esm.js"
/*!*********************************************************!*\
  !*** ./node_modules/sortablejs/modular/sortable.esm.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiDrag: () => (/* binding */ MultiDragPlugin),
/* harmony export */   Sortable: () => (/* binding */ Sortable),
/* harmony export */   Swap: () => (/* binding */ SwapPlugin),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**!
 * Sortable 1.10.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var version = "1.10.2";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !!
    /*@__PURE__*/
    navigator.userAgent.match(pattern);
  }
}

var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

var captureMode = {
  capture: false,
  passive: false
};

function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}

function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}

function matches(
/**HTMLElement*/
el,
/**String*/
selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));

  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }

  return false;
}

function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}

function closest(
/**HTMLElement*/
el,
/**String*/
selector,
/**HTMLElement*/
ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;

    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }

      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }

  return null;
}

var R_SPACE = /\s+/g;

function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}

function css(el, prop, val) {
  var style = el && el.style;

  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }

      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }

      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}

function matrix(el, selfOnly) {
  var appliedTransforms = '';

  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');

      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */

    } while (!selfOnly && (el = el.parentNode));
  }

  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */

  return matrixFn && new matrixFn(appliedTransforms);
}

function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
        i = 0,
        n = list.length;

    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }

    return list;
  }

  return [];
}

function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;

  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */


function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;

  if (el !== window && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }

  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11

    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */

      } while (container = container.parentNode);
    }
  }

  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
        scaleX = elMatrix && elMatrix.a,
        scaleY = elMatrix && elMatrix.d;

    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }

  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */


function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
      elSideVal = getRect(el)[elSide];
  /* jshint boss:true */

  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
        visible = void 0;

    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }

    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }

  return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */


function getChild(el, childNum, options) {
  var currentChild = 0,
      i = 0,
      children = el.children;

  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && children[i] !== Sortable.dragged && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }

      currentChild++;
    }

    i++;
  }

  return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */


function lastChild(el, selector) {
  var last = el.lastElementChild;

  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }

  return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */


function index(el, selector) {
  var index = 0;

  if (!el || !el.parentNode) {
    return -1;
  }
  /* jshint boss:true */


  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }

  return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */


function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
      offsetTop = 0,
      winScroller = getWindowScrollingElement();

  if (el) {
    do {
      var elMatrix = matrix(el),
          scaleX = elMatrix.a,
          scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }

  return [offsetLeft, offsetTop];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */


function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }

  return -1;
}

function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;

  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);

      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */

  } while (elem = elem.parentNode);

  return getWindowScrollingElement();
}

function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }

  return dst;
}

function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}

var _throttleTimeout;

function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
          _this = this;

      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }

      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}

function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}

function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}

function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;

  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}

function setRect(el, rect) {
  css(el, 'position', 'absolute');
  css(el, 'top', rect.top);
  css(el, 'left', rect.left);
  css(el, 'width', rect.width);
  css(el, 'height', rect.height);
}

function unsetRect(el) {
  css(el, 'position', '');
  css(el, 'top', '');
  css(el, 'left', '');
  css(el, 'width', '');
  css(el, 'height', '');
}

var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
      animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });

        var fromRect = _objectSpread({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);

          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }

        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;

      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }

      var animating = false,
          animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
            target = state.target,
            fromRect = target.fromRect,
            toRect = getRect(target),
            prevFromRect = target.prevFromRect,
            prevToRect = target.prevToRect,
            animatingRect = state.rect,
            targetMatrix = matrix(target, true);

        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }

        target.toRect = toRect;

        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        } // if fromRect != toRect: animate


        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;

          if (!time) {
            time = _this.options.animation;
          }

          _this.animate(target, animatingRect, toRect, time);
        }

        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);

      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }

      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d,
            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}

function repaint(target) {
  return target.offsetWidth;
}

function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }

    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;

    this.eventCanceled = false;

    evt.cancel = function () {
      _this.eventCanceled = true;
    };

    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread({
          sortable: sortable
        }, evt));
      } // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined


      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized; // Add default options from plugin

      _extends(defaults, initialized.defaults);
    });

    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);

      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;

      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
      rootEl = _ref.rootEl,
      name = _ref.name,
      targetEl = _ref.targetEl,
      cloneEl = _ref.cloneEl,
      toEl = _ref.toEl,
      fromEl = _ref.fromEl,
      oldIndex = _ref.oldIndex,
      newIndex = _ref.newIndex,
      oldDraggableIndex = _ref.oldDraggableIndex,
      newDraggableIndex = _ref.newDraggableIndex,
      originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
      options = sortable.options,
      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }

  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

  var allEventProperties = _objectSpread({}, extraEventProperties, PluginManager.getEventProperties(name, sortable));

  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }

  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }

  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      originalEvent = _ref.evt,
      data = _objectWithoutProperties(_ref, ["evt"]);

  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};

function _dispatchEvent(info) {
  dispatchEvent(_objectSpread({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}

var dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    oldIndex,
    newIndex,
    oldDraggableIndex,
    newDraggableIndex,
    activeGroup,
    putSortable,
    awaitingDragStarted = false,
    ignoreNextClick = false,
    sortables = [],
    tapEvt,
    touchEvt,
    lastDx,
    lastDy,
    tapDistanceLeft,
    tapDistanceTop,
    moved,
    lastTarget,
    lastDirection,
    pastFirstInvertThresh = false,
    isCircumstantialInvert = false,
    targetMoveDistance,
    // For positioning ghost absolutely
ghostRelativeParent,
    ghostRelativeParentInitialScroll = [],
    // (left, top)
_silent = false,
    savedInputChecked = [];
/** @const */

var documentExists = typeof document !== 'undefined',
    PositionGhostAbsolutely = IOS,
    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
    // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
    supportCssPointerEvents = function () {
  if (!documentExists) return; // false when <= IE11

  if (IE11OrLess) {
    return false;
  }

  var el = document.createElement('x');
  el.style.cssText = 'pointer-events:auto';
  return el.style.pointerEvents === 'auto';
}(),
    _detectDirection = function _detectDirection(el, options) {
  var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

  if (elCSS.display === 'flex') {
    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
  }

  if (elCSS.display === 'grid') {
    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
  }

  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
    var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
  }

  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
},
    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
},

/**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */
_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
  var ret;
  sortables.some(function (sortable) {
    if (lastChild(sortable)) return;
    var rect = getRect(sortable),
        threshold = sortable[expando].options.emptyInsertThreshold,
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

    if (threshold && insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
},
    _prepareGroup = function _prepareGroup(options) {
  function toFn(value, pull) {
    return function (to, from, dragEl, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

      if (value == null && (pull || sameGroup)) {
        // Default pull value
        // Default pull and put value if same group
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === 'clone') {
        return value;
      } else if (typeof value === 'function') {
        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }

  var group = {};
  var originalGroup = options.group;

  if (!originalGroup || _typeof(originalGroup) != 'object') {
    originalGroup = {
      name: originalGroup
    };
  }

  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
},
    _hideGhostForTarget = function _hideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', 'none');
  }
},
    _unhideGhostForTarget = function _unhideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', '');
  }
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


if (documentExists) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}

var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;

    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

    if (nearest) {
      // Create imitation event
      var event = {};

      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }

      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;

      nearest[expando]._onDragOver(event);
    }
  }
};

var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */


function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }

  this.el = el; // root element

  this.options = options = _extends({}, options); // Export instance

  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults); // Set default options

  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }

  _prepareGroup(options); // Bind all private methods


  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  } // Setup drag mode


  this.nativeDraggable = options.forceFallback ? false : supportDraggable;

  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  } // Bind events


  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }

  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }

  sortables.push(this.el); // Restore sorting

  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

  _extends(this, AnimationStateManager());
}

Sortable.prototype =
/** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(
  /** Event|TouchEvent */
  evt) {
    if (!evt.cancelable) return;

    var _this = this,
        el = this.el,
        options = this.options,
        preventOnFilter = options.preventOnFilter,
        type = evt.type,
        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
        target = (touch || evt).target,
        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
        filter = options.filter;

    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


    if (dragEl) {
      return;
    }

    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    } // cancel dnd if original target is content editable


    if (originalTarget.isContentEditable) {
      return;
    }

    target = closest(target, options.draggable, el, false);

    if (target && target.animated) {
      return;
    }

    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    } // Get the index of the dragged element within its parent


    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable); // Check filter

    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });

        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);

        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });

          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });

      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }

    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    } // Prepare `dragstart`


    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(
  /** Event */
  evt,
  /** Touch */
  touch,
  /** HTMLElement */
  target) {
    var _this = this,
        el = _this.el,
        options = _this.options,
        ownerDocument = el.ownerDocument,
        dragStartFn;

    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';

      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });

        if (Sortable.eventCanceled) {
          _this._onDrop();

          return;
        } // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove


        _this._disableDelayedDragEvents();

        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        } // Bind the events: dragstart/dragend


        _this._triggerDragStart(evt, touch); // Drag start event


        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        }); // Chosen item


        toggleClass(dragEl, options.chosenClass, true);
      }; // Disable "draggable"


      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }

      pluginEvent('delayStart', this, {
        evt: evt
      }); // Delay is impossible for native DnD in Edge or IE

      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();

          return;
        } // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag


        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
  /** TouchEvent|PointerEvent **/
  e) {
    var touch = e.touches ? e.touches[0] : e;

    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);

    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(
  /** Event */
  evt,
  /** Touch */
  touch) {
    touch = touch || evt.pointerType == 'touch' && evt;

    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }

    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {

    awaitingDragStarted = false;

    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });

      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }

      var options = this.options; // Apply effect

      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost(); // Drag start event

      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;

      _hideGhostForTarget();

      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;

      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }

      dragEl.parentNode[expando]._isOutsideThisEl(target);

      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });

            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }

          target = parent; // store last element
        }
        /* jshint boss:true */
        while (parent = parent.parentNode);
      }

      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(
  /**TouchEvent*/
  evt) {
    if (tapEvt) {
      var options = this.options,
          fallbackTolerance = options.fallbackTolerance,
          fallbackOffset = options.fallbackOffset,
          touch = evt.touches ? evt.touches[0] : evt,
          ghostMatrix = ghostEl && matrix(ghostEl, true),
          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }

        this._onDragStart(evt, true);
      }

      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }

        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }

      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
          options = this.options; // Position absolutely

      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;

        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }

        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }

        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }

      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl); // Set transform-origin

      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart(
  /**Event*/
  evt,
  /**boolean*/
  fallback) {
    var _this = this;

    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });

    if (Sortable.eventCanceled) {
      this._onDrop();

      return;
    }

    pluginEvent('setupClone', this);

    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';

      this._hideClone();

      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    } // #1143: IFrame support workaround


    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;

      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }

      _this._hideClone();

      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);

      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }

      on(document, 'drop', _this); // #1276 fix:

      css(dragEl, 'transform', 'translateZ(0)');
    }

    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;

    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(
  /**Event*/
  evt) {
    var el = this.el,
        target = evt.target,
        dragRect,
        targetRect,
        revert,
        options = this.options,
        group = options.group,
        activeSortable = Sortable.active,
        isOwner = activeGroup === group,
        canSort = options.sort,
        fromSortable = putSortable || activeSortable,
        vertical,
        _this = this,
        completedFired = false;

    if (_silent) return;

    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    } // Capture animation state


    function capture() {
      dragOverEvent('dragOverAnimationCapture');

      _this.captureAnimationState();

      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    } // Return invocation when dragEl is inserted (or completed)


    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }

        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }

        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        } // Animation


        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }

        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });

        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      } // Null lastTarget if it is not inside a previously swapped element


      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      } // no bubbling and not fallback


      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


        !insertion && nearestEmptyInsertDetectEvent(evt);
      }

      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    } // Call when dragEl has been inserted


    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);

      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }

    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }

    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;

    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }

    ignoreNextClick = false;

    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;

      if (revert) {
        parentEl = rootEl; // actualization

        capture();

        this._hideClone();

        dragOverEvent('revert');

        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }

        return completed(true);
      }

      var elLastChild = lastChild(el, options.draggable);

      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        } // assign target only if condition is true


        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }

        if (target) {
          targetRect = getRect(target);
        }

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          el.appendChild(dragEl);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
            targetBeforeFirstSwap,
            differentLevel = dragEl.parentNode !== el,
            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
            side1 = vertical ? 'top' : 'left',
            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }

        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;

        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);

          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        } // If dragEl is already beside target: Do not insert


        if (direction === 0 || sibling === target) {
          return completed(false);
        }

        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
            after = false;
        after = direction === 1;

        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }

          _silent = true;
          setTimeout(_unsilent, 30);
          capture();

          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          } // Undo chrome's scroll adjustment (has no effect on other browsers)


          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }

          parentEl = dragEl.parentNode; // actualization
          // must be done before animation

          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }

          changed();
          return completed(true);
        }
      }

      if (el.contains(dragEl)) {
        return completed(false);
      }
    }

    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop(
  /**Event*/
  evt) {
    var el = this.el,
        options = this.options; // Get the index of the dragged element within its parent

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);

    if (Sortable.eventCanceled) {
      this._nulling();

      return;
    }

    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);

    _cancelNextTick(this.cloneId);

    _cancelNextTick(this._dragStartId); // Unbind events


    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }

    this._offMoveEvents();

    this._offUpEvents();

    if (Safari) {
      css(document.body, 'user-select', '');
    }

    css(dragEl, 'transform', '');

    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }

      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }

      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }

        _disableDraggable(dragEl);

        dragEl.style['will-change'] = ''; // Remove classes
        // ghostClass is added in dragStarted

        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }

        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });

        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            }); // Remove event


            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            }); // drag from one list and drop into another


            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }

          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });

              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }

        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }

          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          }); // Save sorting


          this.save();
        }
      }
    }

    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(
  /**Event*/
  evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);

        break;

      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);

          _globalDragOver(evt);
        }

        break;

      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },

  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
        el,
        children = this.el.children,
        i = 0,
        n = children.length,
        options = this.options;

    for (; i < n; i++) {
      el = children[i];

      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }

    return order;
  },

  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order) {
    var items = {},
        rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];

      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
  },

  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },

  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },

  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;

    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);

      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }

      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },

  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);

    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    } // Remove draggable attributes


    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });

    this._onDrop();

    this._disableDelayedDragEvents();

    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');

      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }

      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();

      return;
    }

    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return; // show clone at dragEl or original position

      if (rootEl.contains(dragEl) && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }

      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }

      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};

function _globalDragOver(
/**Event*/
evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }

  evt.cancelable && evt.preventDefault();
}

function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
      sortable = fromEl[expando],
      onMoveFn = sortable.options.onMove,
      retVal; // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }

  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);

  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }

  return retVal;
}

function _disableDraggable(el) {
  el.draggable = false;
}

function _unsilent() {
  _silent = false;
}

function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}

function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
      targetLength = vertical ? targetRect.height : targetRect.width,
      targetS1 = vertical ? targetRect.top : targetRect.left,
      targetS2 = vertical ? targetRect.bottom : targetRect.right,
      invert = false;

  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }

      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }

  invert = invert || invertSwap;

  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }

  return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */


function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */


function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;

  while (i--) {
    sum += str.charCodeAt(i);
  }

  return sum.toString(36);
}

function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;

  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}

function _nextTick(fn) {
  return setTimeout(fn, 0);
}

function _cancelNextTick(id) {
  return clearTimeout(id);
} // Fixed #973:


if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
} // Export utils


Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */

Sortable.get = function (element) {
  return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */


Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }

    if (plugin.utils) Sortable.utils = _objectSpread({}, Sortable.utils, plugin.utils);
    PluginManager.mount(plugin);
  });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */


Sortable.create = function (el, options) {
  return new Sortable(el, options);
}; // Export


Sortable.version = version;

var autoScrolls = [],
    scrollEl,
    scrollRootEl,
    scrolling = false,
    lastAutoScrollX,
    lastAutoScrollY,
    touchEvt$1,
    pointerElemChangedInterval;

function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    }; // Bind all private methods

    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }

  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;

      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;

      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }

      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;

      var x = (evt.touches ? evt.touches[0] : evt).clientX,
          y = (evt.touches ? evt.touches[0] : evt).clientY,
          elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt; // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good

      if (fallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

        var ogElemScroller = getParentAutoScrollElement(elem, true);

        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }

            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }

        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}

function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}

function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}

var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
      y = (evt.touches ? evt.touches[0] : evt).clientY,
      sens = options.scrollSensitivity,
      speed = options.scrollSpeed,
      winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
      scrollCustomFn; // New scroll root, set scrollEl

  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;

    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }

  var layersOut = 0;
  var currentParent = scrollEl;

  do {
    var el = currentParent,
        rect = getRect(el),
        top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right,
        width = rect.width,
        height = rect.height,
        canScrollX = void 0,
        canScrollY = void 0,
        scrollWidth = el.scrollWidth,
        scrollHeight = el.scrollHeight,
        elCSS = css(el),
        scrollPosX = el.scrollLeft,
        scrollPosY = el.scrollTop;

    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }

    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }

    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);

      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */

        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

          }

          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }

          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }

    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      dragEl = _ref.dragEl,
      activeSortable = _ref.activeSortable,
      dispatchSortableEvent = _ref.dispatchSortableEvent,
      hideGhostForTarget = _ref.hideGhostForTarget,
      unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();

  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};

function Revert() {}

Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
        putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();

    if (putSortable) {
      putSortable.captureAnimationState();
    }

    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }

    this.sortable.animateAll();

    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};

_extends(Revert, {
  pluginName: 'revertOnSpill'
});

function Remove() {}

Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
        putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};

_extends(Remove, {
  pluginName: 'removeOnSpill'
});

var lastSwapEl;

function SwapPlugin() {
  function Swap() {
    this.defaults = {
      swapClass: 'sortable-swap-highlight'
    };
  }

  Swap.prototype = {
    dragStart: function dragStart(_ref) {
      var dragEl = _ref.dragEl;
      lastSwapEl = dragEl;
    },
    dragOverValid: function dragOverValid(_ref2) {
      var completed = _ref2.completed,
          target = _ref2.target,
          onMove = _ref2.onMove,
          activeSortable = _ref2.activeSortable,
          changed = _ref2.changed,
          cancel = _ref2.cancel;
      if (!activeSortable.options.swap) return;
      var el = this.sortable.el,
          options = this.options;

      if (target && target !== el) {
        var prevSwapEl = lastSwapEl;

        if (onMove(target) !== false) {
          toggleClass(target, options.swapClass, true);
          lastSwapEl = target;
        } else {
          lastSwapEl = null;
        }

        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
          toggleClass(prevSwapEl, options.swapClass, false);
        }
      }

      changed();
      completed(true);
      cancel();
    },
    drop: function drop(_ref3) {
      var activeSortable = _ref3.activeSortable,
          putSortable = _ref3.putSortable,
          dragEl = _ref3.dragEl;
      var toSortable = putSortable || this.sortable;
      var options = this.options;
      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);

      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
        if (dragEl !== lastSwapEl) {
          toSortable.captureAnimationState();
          if (toSortable !== activeSortable) activeSortable.captureAnimationState();
          swapNodes(dragEl, lastSwapEl);
          toSortable.animateAll();
          if (toSortable !== activeSortable) activeSortable.animateAll();
        }
      }
    },
    nulling: function nulling() {
      lastSwapEl = null;
    }
  };
  return _extends(Swap, {
    pluginName: 'swap',
    eventProperties: function eventProperties() {
      return {
        swapItem: lastSwapEl
      };
    }
  });
}

function swapNodes(n1, n2) {
  var p1 = n1.parentNode,
      p2 = n2.parentNode,
      i1,
      i2;
  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
  i1 = index(n1);
  i2 = index(n2);

  if (p1.isEqualNode(p2) && i1 < i2) {
    i2++;
  }

  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}

var multiDragElements = [],
    multiDragClones = [],
    lastMultiDragSelect,
    // for selection with modifier key down (SHIFT)
multiDragSortable,
    initialFolding = false,
    // Initial multi-drag fold when drag started
folding = false,
    // Folding any other time
dragStarted = false,
    dragEl$1,
    clonesFromRect,
    clonesHidden;

function MultiDragPlugin() {
  function MultiDrag(sortable) {
    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }

    if (sortable.options.supportPointer) {
      on(document, 'pointerup', this._deselectMultiDrag);
    } else {
      on(document, 'mouseup', this._deselectMultiDrag);
      on(document, 'touchend', this._deselectMultiDrag);
    }

    on(document, 'keydown', this._checkKeyDown);
    on(document, 'keyup', this._checkKeyUp);
    this.defaults = {
      selectedClass: 'sortable-selected',
      multiDragKey: null,
      setData: function setData(dataTransfer, dragEl) {
        var data = '';

        if (multiDragElements.length && multiDragSortable === sortable) {
          multiDragElements.forEach(function (multiDragElement, i) {
            data += (!i ? '' : ', ') + multiDragElement.textContent;
          });
        } else {
          data = dragEl.textContent;
        }

        dataTransfer.setData('Text', data);
      }
    };
  }

  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(_ref) {
      var dragged = _ref.dragEl;
      dragEl$1 = dragged;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
    },
    setupClone: function setupClone(_ref2) {
      var sortable = _ref2.sortable,
          cancel = _ref2.cancel;
      if (!this.isMultiDrag) return;

      for (var i = 0; i < multiDragElements.length; i++) {
        multiDragClones.push(clone(multiDragElements[i]));
        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
        multiDragClones[i].draggable = false;
        multiDragClones[i].style['will-change'] = '';
        toggleClass(multiDragClones[i], this.options.selectedClass, false);
        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
      }

      sortable._hideClone();

      cancel();
    },
    clone: function clone(_ref3) {
      var sortable = _ref3.sortable,
          rootEl = _ref3.rootEl,
          dispatchSortableEvent = _ref3.dispatchSortableEvent,
          cancel = _ref3.cancel;
      if (!this.isMultiDrag) return;

      if (!this.options.removeCloneOnHide) {
        if (multiDragElements.length && multiDragSortable === sortable) {
          insertMultiDragClones(true, rootEl);
          dispatchSortableEvent('clone');
          cancel();
        }
      }
    },
    showClone: function showClone(_ref4) {
      var cloneNowShown = _ref4.cloneNowShown,
          rootEl = _ref4.rootEl,
          cancel = _ref4.cancel;
      if (!this.isMultiDrag) return;
      insertMultiDragClones(false, rootEl);
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', '');
      });
      cloneNowShown();
      clonesHidden = false;
      cancel();
    },
    hideClone: function hideClone(_ref5) {
      var _this = this;

      var sortable = _ref5.sortable,
          cloneNowHidden = _ref5.cloneNowHidden,
          cancel = _ref5.cancel;
      if (!this.isMultiDrag) return;
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', 'none');

        if (_this.options.removeCloneOnHide && clone.parentNode) {
          clone.parentNode.removeChild(clone);
        }
      });
      cloneNowHidden();
      clonesHidden = true;
      cancel();
    },
    dragStartGlobal: function dragStartGlobal(_ref6) {
      var sortable = _ref6.sortable;

      if (!this.isMultiDrag && multiDragSortable) {
        multiDragSortable.multiDrag._deselectMultiDrag();
      }

      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.sortableIndex = index(multiDragElement);
      }); // Sort multi-drag elements

      multiDragElements = multiDragElements.sort(function (a, b) {
        return a.sortableIndex - b.sortableIndex;
      });
      dragStarted = true;
    },
    dragStarted: function dragStarted(_ref7) {
      var _this2 = this;

      var sortable = _ref7.sortable;
      if (!this.isMultiDrag) return;

      if (this.options.sort) {
        // Capture rects,
        // hide multi drag elements (by positioning them absolute),
        // set multi drag elements rects to dragRect,
        // show multi drag elements,
        // animate to rects,
        // unset rects & remove from DOM
        sortable.captureAnimationState();

        if (this.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            css(multiDragElement, 'position', 'absolute');
          });
          var dragRect = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRect);
          });
          folding = true;
          initialFolding = true;
        }
      }

      sortable.animateAll(function () {
        folding = false;
        initialFolding = false;

        if (_this2.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
        } // Remove all auxiliary multidrag items from el, if sorting enabled


        if (_this2.options.sort) {
          removeMultiDragElements();
        }
      });
    },
    dragOver: function dragOver(_ref8) {
      var target = _ref8.target,
          completed = _ref8.completed,
          cancel = _ref8.cancel;

      if (folding && ~multiDragElements.indexOf(target)) {
        completed(false);
        cancel();
      }
    },
    revert: function revert(_ref9) {
      var fromSortable = _ref9.fromSortable,
          rootEl = _ref9.rootEl,
          sortable = _ref9.sortable,
          dragRect = _ref9.dragRect;

      if (multiDragElements.length > 1) {
        // Setup unfold animation
        multiDragElements.forEach(function (multiDragElement) {
          sortable.addAnimationState({
            target: multiDragElement,
            rect: folding ? getRect(multiDragElement) : dragRect
          });
          unsetRect(multiDragElement);
          multiDragElement.fromRect = dragRect;
          fromSortable.removeAnimationState(multiDragElement);
        });
        folding = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref10) {
      var sortable = _ref10.sortable,
          isOwner = _ref10.isOwner,
          insertion = _ref10.insertion,
          activeSortable = _ref10.activeSortable,
          parentEl = _ref10.parentEl,
          putSortable = _ref10.putSortable;
      var options = this.options;

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        }

        initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location

        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable

            parentEl.appendChild(multiDragElement);
          });
          folding = true;
        } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out


        if (!isOwner) {
          // Only remove if not folding (folding will remove them anyways)
          if (!folding) {
            removeMultiDragElements();
          }

          if (multiDragElements.length > 1) {
            var clonesHiddenBefore = clonesHidden;

            activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden


            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
              multiDragClones.forEach(function (clone) {
                activeSortable.addAnimationState({
                  target: clone,
                  rect: clonesFromRect
                });
                clone.fromRect = clonesFromRect;
                clone.thisAnimationDuration = null;
              });
            }
          } else {
            activeSortable._showClone(sortable);
          }
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
      var dragRect = _ref11.dragRect,
          isOwner = _ref11.isOwner,
          activeSortable = _ref11.activeSortable;
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.thisAnimationDuration = null;
      });

      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
        clonesFromRect = _extends({}, dragRect);
        var dragMatrix = matrix(dragEl$1, true);
        clonesFromRect.top -= dragMatrix.f;
        clonesFromRect.left -= dragMatrix.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (folding) {
        folding = false;
        removeMultiDragElements();
      }
    },
    drop: function drop(_ref12) {
      var evt = _ref12.originalEvent,
          rootEl = _ref12.rootEl,
          parentEl = _ref12.parentEl,
          sortable = _ref12.sortable,
          dispatchSortableEvent = _ref12.dispatchSortableEvent,
          oldIndex = _ref12.oldIndex,
          putSortable = _ref12.putSortable;
      var toSortable = putSortable || this.sortable;
      if (!evt) return;
      var options = this.options,
          children = parentEl.children; // Multi-drag selection

      if (!dragStarted) {
        if (options.multiDragKey && !this.multiDragKeyDown) {
          this._deselectMultiDrag();
        }

        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));

        if (!~multiDragElements.indexOf(dragEl$1)) {
          multiDragElements.push(dragEl$1);
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'select',
            targetEl: dragEl$1,
            originalEvt: evt
          }); // Modifier activated, select from last to dragEl

          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
            var lastIndex = index(lastMultiDragSelect),
                currentIndex = index(dragEl$1);

            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
              // Must include lastMultiDragSelect (select it), in case modified selection from no selection
              // (but previous selection existed)
              var n, i;

              if (currentIndex > lastIndex) {
                i = lastIndex;
                n = currentIndex;
              } else {
                i = currentIndex;
                n = lastIndex + 1;
              }

              for (; i < n; i++) {
                if (~multiDragElements.indexOf(children[i])) continue;
                toggleClass(children[i], options.selectedClass, true);
                multiDragElements.push(children[i]);
                dispatchEvent({
                  sortable: sortable,
                  rootEl: rootEl,
                  name: 'select',
                  targetEl: children[i],
                  originalEvt: evt
                });
              }
            }
          } else {
            lastMultiDragSelect = dragEl$1;
          }

          multiDragSortable = toSortable;
        } else {
          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
          lastMultiDragSelect = null;
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'deselect',
            targetEl: dragEl$1,
            originalEvt: evt
          });
        }
      } // Multi-drag drop


      if (dragStarted && this.isMultiDrag) {
        // Do not "unfold" after around dragEl if reverted
        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
          var dragRect = getRect(dragEl$1),
              multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
          if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
          toSortable.captureAnimationState();

          if (!initialFolding) {
            if (options.animation) {
              dragEl$1.fromRect = dragRect;
              multiDragElements.forEach(function (multiDragElement) {
                multiDragElement.thisAnimationDuration = null;

                if (multiDragElement !== dragEl$1) {
                  var rect = folding ? getRect(multiDragElement) : dragRect;
                  multiDragElement.fromRect = rect; // Prepare unfold animation

                  toSortable.addAnimationState({
                    target: multiDragElement,
                    rect: rect
                  });
                }
              });
            } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
            // properly they must all be removed


            removeMultiDragElements();
            multiDragElements.forEach(function (multiDragElement) {
              if (children[multiDragIndex]) {
                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
              } else {
                parentEl.appendChild(multiDragElement);
              }

              multiDragIndex++;
            }); // If initial folding is done, the elements may have changed position because they are now
            // unfolding around dragEl, even though dragEl may not have his index changed, so update event
            // must be fired here as Sortable will not.

            if (oldIndex === index(dragEl$1)) {
              var update = false;
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                  update = true;
                  return;
                }
              });

              if (update) {
                dispatchSortableEvent('update');
              }
            }
          } // Must be done after capturing individual rects (scroll bar)


          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
          toSortable.animateAll();
        }

        multiDragSortable = toSortable;
      } // Remove clones if necessary


      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        multiDragClones.forEach(function (clone) {
          clone.parentNode && clone.parentNode.removeChild(clone);
        });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = dragStarted = false;
      multiDragClones.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();

      off(document, 'pointerup', this._deselectMultiDrag);
      off(document, 'mouseup', this._deselectMultiDrag);
      off(document, 'touchend', this._deselectMultiDrag);
      off(document, 'keydown', this._checkKeyDown);
      off(document, 'keyup', this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(evt) {
      if (typeof dragStarted !== "undefined" && dragStarted) return; // Only deselect if selection is in this sortable

      if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable

      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click

      if (evt && evt.button !== 0) return;

      while (multiDragElements.length) {
        var el = multiDragElements[0];
        toggleClass(el, this.options.selectedClass, false);
        multiDragElements.shift();
        dispatchEvent({
          sortable: this.sortable,
          rootEl: this.sortable.el,
          name: 'deselect',
          targetEl: el,
          originalEvt: evt
        });
      }
    },
    _checkKeyDown: function _checkKeyDown(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = true;
      }
    },
    _checkKeyUp: function _checkKeyUp(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = false;
      }
    }
  };
  return _extends(MultiDrag, {
    // Static methods & properties
    pluginName: 'multiDrag',
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function select(el) {
        var sortable = el.parentNode[expando];
        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;

        if (multiDragSortable && multiDragSortable !== sortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();

          multiDragSortable = sortable;
        }

        toggleClass(el, sortable.options.selectedClass, true);
        multiDragElements.push(el);
      },

      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function deselect(el) {
        var sortable = el.parentNode[expando],
            index = multiDragElements.indexOf(el);
        if (!sortable || !sortable.options.multiDrag || !~index) return;
        toggleClass(el, sortable.options.selectedClass, false);
        multiDragElements.splice(index, 1);
      }
    },
    eventProperties: function eventProperties() {
      var _this3 = this;

      var oldIndicies = [],
          newIndicies = [];
      multiDragElements.forEach(function (multiDragElement) {
        oldIndicies.push({
          multiDragElement: multiDragElement,
          index: multiDragElement.sortableIndex
        }); // multiDragElements will already be sorted if folding

        var newIndex;

        if (folding && multiDragElement !== dragEl$1) {
          newIndex = -1;
        } else if (folding) {
          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
        } else {
          newIndex = index(multiDragElement);
        }

        newIndicies.push({
          multiDragElement: multiDragElement,
          index: newIndex
        });
      });
      return {
        items: _toConsumableArray(multiDragElements),
        clones: [].concat(multiDragClones),
        oldIndicies: oldIndicies,
        newIndicies: newIndicies
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(key) {
        key = key.toLowerCase();

        if (key === 'ctrl') {
          key = 'Control';
        } else if (key.length > 1) {
          key = key.charAt(0).toUpperCase() + key.substr(1);
        }

        return key;
      }
    }
  });
}

function insertMultiDragElements(clonesInserted, rootEl) {
  multiDragElements.forEach(function (multiDragElement, i) {
    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(multiDragElement, target);
    } else {
      rootEl.appendChild(multiDragElement);
    }
  });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */


function insertMultiDragClones(elementsInserted, rootEl) {
  multiDragClones.forEach(function (clone, i) {
    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(clone, target);
    } else {
      rootEl.appendChild(clone);
    }
  });
}

function removeMultiDragElements() {
  multiDragElements.forEach(function (multiDragElement) {
    if (multiDragElement === dragEl$1) return;
    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
  });
}

Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sortable);



/***/ },

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=style&index=0&id=7bd1aea4&scoped=true&lang=css"
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=style&index=0&id=7bd1aea4&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_style_index_0_id_7bd1aea4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./system_settings.vue?vue&type=style&index=0&id=7bd1aea4&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=style&index=0&id=7bd1aea4&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_style_index_0_id_7bd1aea4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_style_index_0_id_7bd1aea4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/views/app/pages/settings/system_settings.vue"
/*!********************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/system_settings.vue ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _system_settings_vue_vue_type_template_id_7bd1aea4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system_settings.vue?vue&type=template&id=7bd1aea4&scoped=true */ "./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4&scoped=true");
/* harmony import */ var _system_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system_settings.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js");
/* harmony import */ var _system_settings_vue_vue_type_style_index_0_id_7bd1aea4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./system_settings.vue?vue&type=style&index=0&id=7bd1aea4&scoped=true&lang=css */ "./resources/src/views/app/pages/settings/system_settings.vue?vue&type=style&index=0&id=7bd1aea4&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _system_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _system_settings_vue_vue_type_template_id_7bd1aea4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _system_settings_vue_vue_type_template_id_7bd1aea4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7bd1aea4",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/settings/system_settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js"
/*!********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./system_settings.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4&scoped=true"
/*!**************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4&scoped=true ***!
  \**************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_template_id_7bd1aea4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_template_id_7bd1aea4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_template_id_7bd1aea4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./system_settings.vue?vue&type=template&id=7bd1aea4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4&scoped=true");


/***/ },

/***/ "./resources/src/views/app/pages/settings/system_settings.vue?vue&type=style&index=0&id=7bd1aea4&scoped=true&lang=css"
/*!****************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/system_settings.vue?vue&type=style&index=0&id=7bd1aea4&scoped=true&lang=css ***!
  \****************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_style_index_0_id_7bd1aea4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./system_settings.vue?vue&type=style&index=0&id=7bd1aea4&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=style&index=0&id=7bd1aea4&scoped=true&lang=css");


/***/ },

/***/ "./node_modules/vuedraggable/dist/vuedraggable.umd.js"
/*!************************************************************!*\
  !*** ./node_modules/vuedraggable/dist/vuedraggable.umd.js ***!
  \************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js"));
	else // removed by dead control flow
{}
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE_a352__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_688__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_688__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_688__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_688__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_688__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_688__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_688__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_688__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_688__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_688__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_688__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_688__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_688__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_688__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_688__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_688__(__nested_webpack_require_688__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "01f9":
/***/ (function(module, exports, __nested_webpack_require_4164__) {

"use strict";

var LIBRARY = __nested_webpack_require_4164__("2d00");
var $export = __nested_webpack_require_4164__("5ca1");
var redefine = __nested_webpack_require_4164__("2aba");
var hide = __nested_webpack_require_4164__("32e9");
var Iterators = __nested_webpack_require_4164__("84f2");
var $iterCreate = __nested_webpack_require_4164__("41a0");
var setToStringTag = __nested_webpack_require_4164__("7f20");
var getPrototypeOf = __nested_webpack_require_4164__("38fd");
var ITERATOR = __nested_webpack_require_4164__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "02f4":
/***/ (function(module, exports, __nested_webpack_require_7070__) {

var toInteger = __nested_webpack_require_7070__("4588");
var defined = __nested_webpack_require_7070__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "0390":
/***/ (function(module, exports, __nested_webpack_require_7783__) {

"use strict";

var at = __nested_webpack_require_7783__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __nested_webpack_require_8134__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __nested_webpack_require_8134__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __nested_webpack_require_8593__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __nested_webpack_require_8593__("ce10");
var enumBugKeys = __nested_webpack_require_8593__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __nested_webpack_require_8892__) {

var dP = __nested_webpack_require_8892__("86cc");
var anObject = __nested_webpack_require_8892__("cb7c");
var getKeys = __nested_webpack_require_8892__("0d58");

module.exports = __nested_webpack_require_8892__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __nested_webpack_require_9392__) {

"use strict";

__nested_webpack_require_9392__("b0c5");
var redefine = __nested_webpack_require_9392__("2aba");
var hide = __nested_webpack_require_9392__("32e9");
var fails = __nested_webpack_require_9392__("79e5");
var defined = __nested_webpack_require_9392__("be13");
var wks = __nested_webpack_require_9392__("2b4c");
var regexpExec = __nested_webpack_require_9392__("520a");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __nested_webpack_require_12849__) {

var isObject = __nested_webpack_require_12849__("d3f4");
var document = __nested_webpack_require_12849__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __nested_webpack_require_13233__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __nested_webpack_require_13233__("2d95");
var TAG = __nested_webpack_require_13233__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __nested_webpack_require_14160__) {

var global = __nested_webpack_require_14160__("7726");
var hide = __nested_webpack_require_14160__("32e9");
var has = __nested_webpack_require_14160__("69a8");
var SRC = __nested_webpack_require_14160__("ca5a")('src');
var $toString = __nested_webpack_require_14160__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__nested_webpack_require_14160__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __nested_webpack_require_15334__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __nested_webpack_require_15334__("cb7c");
var dPs = __nested_webpack_require_15334__("1495");
var enumBugKeys = __nested_webpack_require_15334__("e11e");
var IE_PROTO = __nested_webpack_require_15334__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __nested_webpack_require_15334__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __nested_webpack_require_15334__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __nested_webpack_require_16945__) {

var store = __nested_webpack_require_16945__("5537")('wks');
var uid = __nested_webpack_require_16945__("ca5a");
var Symbol = __nested_webpack_require_16945__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2fdb":
/***/ (function(module, exports, __nested_webpack_require_17667__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __nested_webpack_require_17667__("5ca1");
var context = __nested_webpack_require_17667__("d2c8");
var INCLUDES = 'includes';

$export($export.P + $export.F * __nested_webpack_require_17667__("5147")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __nested_webpack_require_18235__) {

var dP = __nested_webpack_require_18235__("86cc");
var createDesc = __nested_webpack_require_18235__("4630");
module.exports = __nested_webpack_require_18235__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __nested_webpack_require_18611__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __nested_webpack_require_18611__("69a8");
var toObject = __nested_webpack_require_18611__("4bf8");
var IE_PROTO = __nested_webpack_require_18611__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __nested_webpack_require_19205__) {

"use strict";

var create = __nested_webpack_require_19205__("2aeb");
var descriptor = __nested_webpack_require_19205__("4630");
var setToStringTag = __nested_webpack_require_19205__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__nested_webpack_require_19205__("32e9")(IteratorPrototype, __nested_webpack_require_19205__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "456d":
/***/ (function(module, exports, __nested_webpack_require_19831__) {

// 19.1.2.14 Object.keys(O)
var toObject = __nested_webpack_require_19831__("4bf8");
var $keys = __nested_webpack_require_19831__("0d58");

__nested_webpack_require_19831__("5eda")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __nested_webpack_require_20609__) {

// 7.1.13 ToObject(argument)
var defined = __nested_webpack_require_20609__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "5147":
/***/ (function(module, exports, __nested_webpack_require_20831__) {

var MATCH = __nested_webpack_require_20831__("2b4c")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __nested_webpack_require_21176__) {

"use strict";


var regexpFlags = __nested_webpack_require_21176__("0bfb");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __nested_webpack_require_23109__) {

var core = __nested_webpack_require_23109__("8378");
var global = __nested_webpack_require_23109__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __nested_webpack_require_23109__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __nested_webpack_require_23642__) {

var global = __nested_webpack_require_23642__("7726");
var core = __nested_webpack_require_23642__("8378");
var hide = __nested_webpack_require_23642__("32e9");
var redefine = __nested_webpack_require_23642__("2aba");
var ctx = __nested_webpack_require_23642__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5eda":
/***/ (function(module, exports, __nested_webpack_require_25367__) {

// most Object methods by ES6 should accept primitives
var $export = __nested_webpack_require_25367__("5ca1");
var core = __nested_webpack_require_25367__("8378");
var fails = __nested_webpack_require_25367__("79e5");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __nested_webpack_require_25845__) {

"use strict";


var classof = __nested_webpack_require_25845__("23c6");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __nested_webpack_require_26551__) {

var shared = __nested_webpack_require_26551__("5537")('keys');
var uid = __nested_webpack_require_26551__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __nested_webpack_require_26811__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __nested_webpack_require_26811__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "6762":
/***/ (function(module, exports, __nested_webpack_require_27194__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __nested_webpack_require_27194__("5ca1");
var $includes = __nested_webpack_require_27194__("c366")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__nested_webpack_require_27194__("9c6c")('includes');


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __nested_webpack_require_27659__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __nested_webpack_require_27659__("626a");
var defined = __nested_webpack_require_27659__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __nested_webpack_require_28155__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __nested_webpack_require_28155__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "7333":
/***/ (function(module, exports, __nested_webpack_require_28898__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __nested_webpack_require_28898__("0d58");
var gOPS = __nested_webpack_require_28898__("2621");
var pIE = __nested_webpack_require_28898__("52a7");
var toObject = __nested_webpack_require_28898__("4bf8");
var IObject = __nested_webpack_require_28898__("626a");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __nested_webpack_require_28898__("79e5")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __nested_webpack_require_30635__) {

var toInteger = __nested_webpack_require_30635__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __nested_webpack_require_31112__) {

var def = __nested_webpack_require_31112__("86cc").f;
var has = __nested_webpack_require_31112__("69a8");
var TAG = __nested_webpack_require_31112__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __nested_webpack_require_31751__) {

var anObject = __nested_webpack_require_31751__("cb7c");
var IE8_DOM_DEFINE = __nested_webpack_require_31751__("c69a");
var toPrimitive = __nested_webpack_require_31751__("6a99");
var dP = Object.defineProperty;

exports.f = __nested_webpack_require_31751__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __nested_webpack_require_32441__) {

// optional / simple context binding
var aFunction = __nested_webpack_require_32441__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __nested_webpack_require_33048__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __nested_webpack_require_33048__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __nested_webpack_require_33048__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __nested_webpack_require_33448__) {

// 7.1.15 ToLength
var toInteger = __nested_webpack_require_33448__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __nested_webpack_require_33750__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__nested_webpack_require_33750__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a352":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_a352__;

/***/ }),

/***/ "a481":
/***/ (function(module, exports, __nested_webpack_require_34139__) {

"use strict";


var anObject = __nested_webpack_require_34139__("cb7c");
var toObject = __nested_webpack_require_34139__("4bf8");
var toLength = __nested_webpack_require_34139__("9def");
var toInteger = __nested_webpack_require_34139__("4588");
var advanceStringIndex = __nested_webpack_require_34139__("0390");
var regExpExec = __nested_webpack_require_34139__("5f1b");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__nested_webpack_require_34139__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __nested_webpack_require_38885__) {

// 7.2.8 IsRegExp(argument)
var isObject = __nested_webpack_require_38885__("d3f4");
var cof = __nested_webpack_require_38885__("2d95");
var MATCH = __nested_webpack_require_38885__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __nested_webpack_require_39282__) {

var $iterators = __nested_webpack_require_39282__("cadf");
var getKeys = __nested_webpack_require_39282__("0d58");
var redefine = __nested_webpack_require_39282__("2aba");
var global = __nested_webpack_require_39282__("7726");
var hide = __nested_webpack_require_39282__("32e9");
var Iterators = __nested_webpack_require_39282__("84f2");
var wks = __nested_webpack_require_39282__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "b0c5":
/***/ (function(module, exports, __nested_webpack_require_41209__) {

"use strict";

var regexpExec = __nested_webpack_require_41209__("520a");
__nested_webpack_require_41209__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __nested_webpack_require_41706__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __nested_webpack_require_41706__("6821");
var toLength = __nested_webpack_require_41706__("9def");
var toAbsoluteIndex = __nested_webpack_require_41706__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c649":
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_42729__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __nested_webpack_require_42729__.d(__nested_webpack_exports__, "c", function() { return insertNodeAt; });
/* harmony export (binding) */ __nested_webpack_require_42729__.d(__nested_webpack_exports__, "a", function() { return camelize; });
/* harmony export (binding) */ __nested_webpack_require_42729__.d(__nested_webpack_exports__, "b", function() { return console; });
/* harmony export (binding) */ __nested_webpack_require_42729__.d(__nested_webpack_exports__, "d", function() { return removeNode; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_42729__("a481");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_42729__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);


function getConsole() {
  if (typeof window !== "undefined") {
    return window.console;
  }

  return global.console;
}

var console = getConsole();

function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

var regex = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(regex, function (_, c) {
    return c ? c.toUpperCase() : "";
  });
});

function removeNode(node) {
  if (node.parentElement !== null) {
    node.parentElement.removeChild(node);
  }
}

function insertNodeAt(fatherNode, node, position) {
  var refNode = position === 0 ? fatherNode.children[0] : fatherNode.children[position - 1].nextSibling;
  fatherNode.insertBefore(node, refNode);
}


/* WEBPACK VAR INJECTION */}.call(this, __nested_webpack_require_42729__("c8ba")))

/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __nested_webpack_require_44512__) {

module.exports = !__nested_webpack_require_44512__("9e1e") && !__nested_webpack_require_44512__("79e5")(function () {
  return Object.defineProperty(__nested_webpack_require_44512__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __nested_webpack_require_45568__) {

"use strict";

var addToUnscopables = __nested_webpack_require_45568__("9c6c");
var step = __nested_webpack_require_45568__("d53b");
var Iterators = __nested_webpack_require_45568__("84f2");
var toIObject = __nested_webpack_require_45568__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __nested_webpack_require_45568__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __nested_webpack_require_46777__) {

var isObject = __nested_webpack_require_46777__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __nested_webpack_require_47019__) {

var has = __nested_webpack_require_47019__("69a8");
var toIObject = __nested_webpack_require_47019__("6821");
var arrayIndexOf = __nested_webpack_require_47019__("c366")(false);
var IE_PROTO = __nested_webpack_require_47019__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d2c8":
/***/ (function(module, exports, __nested_webpack_require_47655__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __nested_webpack_require_47655__("aae3");
var defined = __nested_webpack_require_47655__("be13");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "f559":
/***/ (function(module, exports, __nested_webpack_require_48796__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __nested_webpack_require_48796__("5ca1");
var toLength = __nested_webpack_require_48796__("9def");
var context = __nested_webpack_require_48796__("d2c8");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __nested_webpack_require_48796__("5147")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f751":
/***/ (function(module, exports, __nested_webpack_require_50913__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __nested_webpack_require_50913__("5ca1");

$export($export.S + $export.F, 'Object', { assign: __nested_webpack_require_50913__("7333") });


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __nested_webpack_require_51166__) {

module.exports = __nested_webpack_require_51166__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __nested_webpack_require_51344__) {

var document = __nested_webpack_require_51344__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_51548__) {

"use strict";
// ESM COMPAT FLAG
__nested_webpack_require_51548__.r(__nested_webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __nested_webpack_require_51548__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __nested_webpack_require_51548__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __nested_webpack_require_51548__("f751");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __nested_webpack_require_51548__("f559");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __nested_webpack_require_51548__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __nested_webpack_require_51548__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __nested_webpack_require_51548__("456d");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __nested_webpack_require_51548__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __nested_webpack_require_51548__("2fdb");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: external {"commonjs":"sortablejs","commonjs2":"sortablejs","amd":"sortablejs","root":"Sortable"}
var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_ = __nested_webpack_require_51548__("a352");
var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default = /*#__PURE__*/__nested_webpack_require_51548__.n(external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_);

// EXTERNAL MODULE: ./src/util/helper.js
var helper = __nested_webpack_require_51548__("c649");

// CONCATENATED MODULE: ./src/vuedraggable.js












function buildAttribute(object, propName, value) {
  if (value === undefined) {
    return object;
  }

  object = object || {};
  object[propName] = value;
  return object;
}

function computeVmIndex(vnodes, element) {
  return vnodes.map(function (elt) {
    return elt.elm;
  }).indexOf(element);
}

function _computeIndexes(slots, children, isTransition, footerOffset) {
  if (!slots) {
    return [];
  }

  var elmFromNodes = slots.map(function (elt) {
    return elt.elm;
  });
  var footerIndex = children.length - footerOffset;

  var rawIndexes = _toConsumableArray(children).map(function (elt, idx) {
    return idx >= footerIndex ? elmFromNodes.length : elmFromNodes.indexOf(elt);
  });

  return isTransition ? rawIndexes.filter(function (ind) {
    return ind !== -1;
  }) : rawIndexes;
}

function emit(evtName, evtData) {
  var _this = this;

  this.$nextTick(function () {
    return _this.$emit(evtName.toLowerCase(), evtData);
  });
}

function delegateAndEmit(evtName) {
  var _this2 = this;

  return function (evtData) {
    if (_this2.realList !== null) {
      _this2["onDrag" + evtName](evtData);
    }

    emit.call(_this2, evtName, evtData);
  };
}

function isTransitionName(name) {
  return ["transition-group", "TransitionGroup"].includes(name);
}

function vuedraggable_isTransition(slots) {
  if (!slots || slots.length !== 1) {
    return false;
  }

  var _slots = _slicedToArray(slots, 1),
      componentOptions = _slots[0].componentOptions;

  if (!componentOptions) {
    return false;
  }

  return isTransitionName(componentOptions.tag);
}

function getSlot(slot, scopedSlot, key) {
  return slot[key] || (scopedSlot[key] ? scopedSlot[key]() : undefined);
}

function computeChildrenAndOffsets(children, slot, scopedSlot) {
  var headerOffset = 0;
  var footerOffset = 0;
  var header = getSlot(slot, scopedSlot, "header");

  if (header) {
    headerOffset = header.length;
    children = children ? [].concat(_toConsumableArray(header), _toConsumableArray(children)) : _toConsumableArray(header);
  }

  var footer = getSlot(slot, scopedSlot, "footer");

  if (footer) {
    footerOffset = footer.length;
    children = children ? [].concat(_toConsumableArray(children), _toConsumableArray(footer)) : _toConsumableArray(footer);
  }

  return {
    children: children,
    headerOffset: headerOffset,
    footerOffset: footerOffset
  };
}

function getComponentAttributes($attrs, componentData) {
  var attributes = null;

  var update = function update(name, value) {
    attributes = buildAttribute(attributes, name, value);
  };

  var attrs = Object.keys($attrs).filter(function (key) {
    return key === "id" || key.startsWith("data-");
  }).reduce(function (res, key) {
    res[key] = $attrs[key];
    return res;
  }, {});
  update("attrs", attrs);

  if (!componentData) {
    return attributes;
  }

  var on = componentData.on,
      props = componentData.props,
      componentDataAttrs = componentData.attrs;
  update("on", on);
  update("props", props);
  Object.assign(attributes.attrs, componentDataAttrs);
  return attributes;
}

var eventsListened = ["Start", "Add", "Remove", "Update", "End"];
var eventsToEmit = ["Choose", "Unchoose", "Sort", "Filter", "Clone"];
var readonlyProperties = ["Move"].concat(eventsListened, eventsToEmit).map(function (evt) {
  return "on" + evt;
});
var draggingElement = null;
var props = {
  options: Object,
  list: {
    type: Array,
    required: false,
    default: null
  },
  value: {
    type: Array,
    required: false,
    default: null
  },
  noTransitionOnDrag: {
    type: Boolean,
    default: false
  },
  clone: {
    type: Function,
    default: function _default(original) {
      return original;
    }
  },
  element: {
    type: String,
    default: "div"
  },
  tag: {
    type: String,
    default: null
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: false,
    default: null
  }
};
var draggableComponent = {
  name: "draggable",
  inheritAttrs: false,
  props: props,
  data: function data() {
    return {
      transitionMode: false,
      noneFunctionalComponentMode: false
    };
  },
  render: function render(h) {
    var slots = this.$slots.default;
    this.transitionMode = vuedraggable_isTransition(slots);

    var _computeChildrenAndOf = computeChildrenAndOffsets(slots, this.$slots, this.$scopedSlots),
        children = _computeChildrenAndOf.children,
        headerOffset = _computeChildrenAndOf.headerOffset,
        footerOffset = _computeChildrenAndOf.footerOffset;

    this.headerOffset = headerOffset;
    this.footerOffset = footerOffset;
    var attributes = getComponentAttributes(this.$attrs, this.componentData);
    return h(this.getTag(), attributes, children);
  },
  created: function created() {
    if (this.list !== null && this.value !== null) {
      helper["b" /* console */].error("Value and list props are mutually exclusive! Please set one or another.");
    }

    if (this.element !== "div") {
      helper["b" /* console */].warn("Element props is deprecated please use tag props instead. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#element-props");
    }

    if (this.options !== undefined) {
      helper["b" /* console */].warn("Options props is deprecated, add sortable options directly as vue.draggable item, or use v-bind. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#options-props");
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.noneFunctionalComponentMode = this.getTag().toLowerCase() !== this.$el.nodeName.toLowerCase() && !this.getIsFunctional();

    if (this.noneFunctionalComponentMode && this.transitionMode) {
      throw new Error("Transition-group inside component is not supported. Please alter tag value or remove transition-group. Current tag value: ".concat(this.getTag()));
    }

    var optionsAdded = {};
    eventsListened.forEach(function (elt) {
      optionsAdded["on" + elt] = delegateAndEmit.call(_this3, elt);
    });
    eventsToEmit.forEach(function (elt) {
      optionsAdded["on" + elt] = emit.bind(_this3, elt);
    });
    var attributes = Object.keys(this.$attrs).reduce(function (res, key) {
      res[Object(helper["a" /* camelize */])(key)] = _this3.$attrs[key];
      return res;
    }, {});
    var options = Object.assign({}, this.options, attributes, optionsAdded, {
      onMove: function onMove(evt, originalEvent) {
        return _this3.onDragMove(evt, originalEvent);
      }
    });
    !("draggable" in options) && (options.draggable = ">*");
    this._sortable = new external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default.a(this.rootContainer, options);
    this.computeIndexes();
  },
  beforeDestroy: function beforeDestroy() {
    if (this._sortable !== undefined) this._sortable.destroy();
  },
  computed: {
    rootContainer: function rootContainer() {
      return this.transitionMode ? this.$el.children[0] : this.$el;
    },
    realList: function realList() {
      return this.list ? this.list : this.value;
    }
  },
  watch: {
    options: {
      handler: function handler(newOptionValue) {
        this.updateOptions(newOptionValue);
      },
      deep: true
    },
    $attrs: {
      handler: function handler(newOptionValue) {
        this.updateOptions(newOptionValue);
      },
      deep: true
    },
    realList: function realList() {
      this.computeIndexes();
    }
  },
  methods: {
    getIsFunctional: function getIsFunctional() {
      var fnOptions = this._vnode.fnOptions;
      return fnOptions && fnOptions.functional;
    },
    getTag: function getTag() {
      return this.tag || this.element;
    },
    updateOptions: function updateOptions(newOptionValue) {
      for (var property in newOptionValue) {
        var value = Object(helper["a" /* camelize */])(property);

        if (readonlyProperties.indexOf(value) === -1) {
          this._sortable.option(value, newOptionValue[property]);
        }
      }
    },
    getChildrenNodes: function getChildrenNodes() {
      if (this.noneFunctionalComponentMode) {
        return this.$children[0].$slots.default;
      }

      var rawNodes = this.$slots.default;
      return this.transitionMode ? rawNodes[0].child.$slots.default : rawNodes;
    },
    computeIndexes: function computeIndexes() {
      var _this4 = this;

      this.$nextTick(function () {
        _this4.visibleIndexes = _computeIndexes(_this4.getChildrenNodes(), _this4.rootContainer.children, _this4.transitionMode, _this4.footerOffset);
      });
    },
    getUnderlyingVm: function getUnderlyingVm(htmlElt) {
      var index = computeVmIndex(this.getChildrenNodes() || [], htmlElt);

      if (index === -1) {
        //Edge case during move callback: related element might be
        //an element different from collection
        return null;
      }

      var element = this.realList[index];
      return {
        index: index,
        element: element
      };
    },
    getUnderlyingPotencialDraggableComponent: function getUnderlyingPotencialDraggableComponent(_ref) {
      var vue = _ref.__vue__;

      if (!vue || !vue.$options || !isTransitionName(vue.$options._componentTag)) {
        if (!("realList" in vue) && vue.$children.length === 1 && "realList" in vue.$children[0]) return vue.$children[0];
        return vue;
      }

      return vue.$parent;
    },
    emitChanges: function emitChanges(evt) {
      var _this5 = this;

      this.$nextTick(function () {
        _this5.$emit("change", evt);
      });
    },
    alterList: function alterList(onList) {
      if (this.list) {
        onList(this.list);
        return;
      }

      var newList = _toConsumableArray(this.value);

      onList(newList);
      this.$emit("input", newList);
    },
    spliceList: function spliceList() {
      var _arguments = arguments;

      var spliceList = function spliceList(list) {
        return list.splice.apply(list, _toConsumableArray(_arguments));
      };

      this.alterList(spliceList);
    },
    updatePosition: function updatePosition(oldIndex, newIndex) {
      var updatePosition = function updatePosition(list) {
        return list.splice(newIndex, 0, list.splice(oldIndex, 1)[0]);
      };

      this.alterList(updatePosition);
    },
    getRelatedContextFromMoveEvent: function getRelatedContextFromMoveEvent(_ref2) {
      var to = _ref2.to,
          related = _ref2.related;
      var component = this.getUnderlyingPotencialDraggableComponent(to);

      if (!component) {
        return {
          component: component
        };
      }

      var list = component.realList;
      var context = {
        list: list,
        component: component
      };

      if (to !== related && list && component.getUnderlyingVm) {
        var destination = component.getUnderlyingVm(related);

        if (destination) {
          return Object.assign(destination, context);
        }
      }

      return context;
    },
    getVmIndex: function getVmIndex(domIndex) {
      var indexes = this.visibleIndexes;
      var numberIndexes = indexes.length;
      return domIndex > numberIndexes - 1 ? numberIndexes : indexes[domIndex];
    },
    getComponent: function getComponent() {
      return this.$slots.default[0].componentInstance;
    },
    resetTransitionData: function resetTransitionData(index) {
      if (!this.noTransitionOnDrag || !this.transitionMode) {
        return;
      }

      var nodes = this.getChildrenNodes();
      nodes[index].data = null;
      var transitionContainer = this.getComponent();
      transitionContainer.children = [];
      transitionContainer.kept = undefined;
    },
    onDragStart: function onDragStart(evt) {
      this.context = this.getUnderlyingVm(evt.item);
      evt.item._underlying_vm_ = this.clone(this.context.element);
      draggingElement = evt.item;
    },
    onDragAdd: function onDragAdd(evt) {
      var element = evt.item._underlying_vm_;

      if (element === undefined) {
        return;
      }

      Object(helper["d" /* removeNode */])(evt.item);
      var newIndex = this.getVmIndex(evt.newIndex);
      this.spliceList(newIndex, 0, element);
      this.computeIndexes();
      var added = {
        element: element,
        newIndex: newIndex
      };
      this.emitChanges({
        added: added
      });
    },
    onDragRemove: function onDragRemove(evt) {
      Object(helper["c" /* insertNodeAt */])(this.rootContainer, evt.item, evt.oldIndex);

      if (evt.pullMode === "clone") {
        Object(helper["d" /* removeNode */])(evt.clone);
        return;
      }

      var oldIndex = this.context.index;
      this.spliceList(oldIndex, 1);
      var removed = {
        element: this.context.element,
        oldIndex: oldIndex
      };
      this.resetTransitionData(oldIndex);
      this.emitChanges({
        removed: removed
      });
    },
    onDragUpdate: function onDragUpdate(evt) {
      Object(helper["d" /* removeNode */])(evt.item);
      Object(helper["c" /* insertNodeAt */])(evt.from, evt.item, evt.oldIndex);
      var oldIndex = this.context.index;
      var newIndex = this.getVmIndex(evt.newIndex);
      this.updatePosition(oldIndex, newIndex);
      var moved = {
        element: this.context.element,
        oldIndex: oldIndex,
        newIndex: newIndex
      };
      this.emitChanges({
        moved: moved
      });
    },
    updateProperty: function updateProperty(evt, propertyName) {
      evt.hasOwnProperty(propertyName) && (evt[propertyName] += this.headerOffset);
    },
    computeFutureIndex: function computeFutureIndex(relatedContext, evt) {
      if (!relatedContext.element) {
        return 0;
      }

      var domChildren = _toConsumableArray(evt.to.children).filter(function (el) {
        return el.style["display"] !== "none";
      });

      var currentDOMIndex = domChildren.indexOf(evt.related);
      var currentIndex = relatedContext.component.getVmIndex(currentDOMIndex);
      var draggedInList = domChildren.indexOf(draggingElement) !== -1;
      return draggedInList || !evt.willInsertAfter ? currentIndex : currentIndex + 1;
    },
    onDragMove: function onDragMove(evt, originalEvent) {
      var onMove = this.move;

      if (!onMove || !this.realList) {
        return true;
      }

      var relatedContext = this.getRelatedContextFromMoveEvent(evt);
      var draggedContext = this.context;
      var futureIndex = this.computeFutureIndex(relatedContext, evt);
      Object.assign(draggedContext, {
        futureIndex: futureIndex
      });
      var sendEvt = Object.assign({}, evt, {
        relatedContext: relatedContext,
        draggedContext: draggedContext
      });
      return onMove(sendEvt, originalEvent);
    },
    onDragEnd: function onDragEnd() {
      this.computeIndexes();
      draggingElement = null;
    }
  }
};

if (typeof window !== "undefined" && "Vue" in window) {
  window.Vue.component("draggable", draggableComponent);
}

/* harmony default export */ var vuedraggable = (draggableComponent);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __nested_webpack_exports__["default"] = (vuedraggable);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vuedraggable.umd.js.map

/***/ }

}]);