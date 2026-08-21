"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["KitchenDisplay"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/kitchen/KitchenDisplay.vue?vue&type=script&lang=js"
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/kitchen/KitchenDisplay.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Kitchen Display"
  },
  data: function data() {
    return {
      isLoading: true,
      refreshing: false,
      grouped: {
        pending: [],
        preparing: [],
        completed: [],
        on_hold: []
      },
      search: "",
      dateFrom: null,
      dateTo: null,
      busyId: null,
      autoRefresh: true,
      pollTimer: null,
      clockTimer: null,
      nowTs: Date.now(),
      lastLatestId: 0,
      firstLoadDone: false,
      detailsOpen: false,
      selected: null,
      assignChoice: null,
      assignBusy: false,
      staff: [],
      warehouses: []
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["currentUser", "currentUserPermissions"])), {}, {
    canManage: function canManage() {
      return this.currentUserPermissions && this.currentUserPermissions.includes("kitchen_display_manage");
    },
    today: function today() {
      try {
        return new Date(this.nowTs).toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric"
        });
      } catch (e) {
        return "";
      }
    },
    columns: function columns() {
      return [{
        key: "pending",
        label: this.$t("PendingOrders") || "Pending",
        icon: "clock"
      }, {
        key: "preparing",
        label: this.$t("PreparingOrders") || "Preparing",
        icon: "chef-hat"
      }, {
        key: "completed",
        label: this.$t("CompletedOrders") || "Completed",
        icon: "check-circle"
      }, {
        key: "on_hold",
        label: this.$t("OnHoldOrders") || "On Hold",
        icon: "pause"
      }];
    },
    staffOptions: function staffOptions() {
      var _this = this;
      var opts = [{
        value: null,
        text: this.$t("Unassigned") || "—"
      }];
      this.staff.forEach(function (u) {
        opts.push({
          value: u.id,
          text: _this.staffName(u)
        });
      });
      return opts;
    }
  }),
  mounted: function mounted() {
    var _this2 = this;
    this.fetch();
    this.loadStaff();
    this.loadWarehouses();
    this.toggleAutoRefresh();
    this.clockTimer = setInterval(function () {
      _this2.nowTs = Date.now();
    }, 30000);
  },
  beforeDestroy: function beforeDestroy() {
    this.stopPolling();
    if (this.clockTimer) clearInterval(this.clockTimer);
  },
  methods: {
    _params: function _params() {
      return {
        q: this.search || "",
        from: this.toDateStr(this.dateFrom),
        to: this.toDateStr(this.dateTo)
      };
    },
    toDateStr: function toDateStr(d) {
      if (!d) return "";
      var dt = d instanceof Date ? d : new Date(d);
      if (isNaN(dt.getTime())) return "";
      var y = dt.getFullYear();
      var m = ("0" + (dt.getMonth() + 1)).slice(-2);
      var day = ("0" + dt.getDate()).slice(-2);
      return y + "-" + m + "-" + day;
    },
    shortTime: function shortTime(s) {
      if (!s) return "";
      var dt = new Date(s.replace(" ", "T"));
      if (isNaN(dt.getTime())) return s;
      return dt.toLocaleString();
    },
    elapsed: function elapsed(order) {
      var raw = order.sent_at || order.created_at;
      if (!raw) return "";
      var dt = new Date(String(raw).replace(" ", "T"));
      if (isNaN(dt.getTime())) return "";
      var mins = Math.max(0, Math.floor((this.nowTs - dt.getTime()) / 60000));
      if (mins < 1) return this.$t("Now") || "now";
      if (mins < 60) return mins + "m";
      var h = Math.floor(mins / 60);
      var m = mins % 60;
      return h + "h" + (m ? " " + m + "m" : "");
    },
    formatQty: function formatQty(n) {
      var num = Number(n || 0);
      return Number.isInteger(num) ? String(num) : num.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
    },
    statusLabel: function statusLabel(s) {
      return {
        pending: this.$t("PendingOrders") || "Pending",
        preparing: this.$t("PreparingOrders") || "Preparing",
        completed: this.$t("CompletedOrders") || "Completed",
        on_hold: this.$t("OnHoldOrders") || "On Hold"
      }[s] || s;
    },
    statusVariant: function statusVariant(s) {
      return {
        pending: "secondary",
        preparing: "primary",
        completed: "success",
        on_hold: "warning"
      }[s] || "secondary";
    },
    staffName: function staffName(u) {
      var name = ((u.firstname || "") + " " + (u.lastname || "")).trim();
      return name || u.username || u.email;
    },
    fetch: function fetch() {
      var _arguments = arguments,
        _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var showSpinner, resp, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              showSpinner = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : false;
              if (showSpinner) _this3.refreshing = true;
              if (!_this3.firstLoadDone) _this3.isLoading = true;
              _context.p = 1;
              _context.n = 2;
              return axios.get("/kitchen/orders", {
                params: _this3._params(),
                validateStatus: function validateStatus() {
                  return true;
                }
              });
            case 2:
              resp = _context.v;
              if (resp && resp.status < 400 && resp.data && resp.data.grouped) {
                _this3.grouped = resp.data.grouped;
                if (Array.isArray(resp.data.warehouses) && resp.data.warehouses.length) {
                  _this3.warehouses = resp.data.warehouses;
                }
              }
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
            case 4:
              _context.p = 4;
              _this3.isLoading = false;
              _this3.refreshing = false;
              _this3.firstLoadDone = true;
              return _context.f(4);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3, 4, 5]]);
      }))();
    },
    loadStaff: function loadStaff() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var resp, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return axios.get("/users_list_for_select", {
                validateStatus: function validateStatus() {
                  return true;
                }
              });
            case 1:
              resp = _context2.v;
              if (resp && resp.data && resp.data.users) _this4.staff = resp.data.users;
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t2 = _context2.v;
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }))();
    },
    loadWarehouses: function loadWarehouses() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var resp, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return axios.get("/kitchen/warehouses", {
                validateStatus: function validateStatus() {
                  return true;
                }
              });
            case 1:
              resp = _context3.v;
              if (resp && resp.data && resp.data.warehouses) _this5.warehouses = resp.data.warehouses;
              _context3.n = 3;
              break;
            case 2:
              _context3.p = 2;
              _t3 = _context3.v;
            case 3:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 2]]);
      }))();
    },
    dispatchToWarehouse: function dispatchToWarehouse(order, warehouseId) {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var resp, wh, _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              if (warehouseId) {
                _context4.n = 1;
                break;
              }
              return _context4.a(2);
            case 1:
              _this6.busyId = order.id;
              _context4.p = 2;
              _context4.n = 3;
              return axios.patch("/kitchen/orders/" + order.id + "/dispatch", {
                dispatched_warehouse_id: warehouseId
              }, {
                validateStatus: function validateStatus() {
                  return true;
                }
              });
            case 3:
              resp = _context4.v;
              if (!(resp && resp.status < 400)) {
                _context4.n = 5;
                break;
              }
              _context4.n = 4;
              return _this6.fetch(false);
            case 4:
              wh = _this6.warehouses.find(function (w) {
                return String(w.id) === String(warehouseId);
              });
              if (_this6.$bvToast) {
                _this6.$bvToast.toast((_this6.$t("SentToWarehouse") || "Sent to") + " " + (wh ? wh.name : ""), {
                  title: _this6.$t("Success") || "Success",
                  variant: "success",
                  solid: true
                });
              }
              _context4.n = 6;
              break;
            case 5:
              _this6.toastError(resp);
            case 6:
              _context4.n = 8;
              break;
            case 7:
              _context4.p = 7;
              _t4 = _context4.v;
              _this6.toastError(null);
            case 8:
              _context4.p = 8;
              _this6.busyId = null;
              return _context4.f(8);
            case 9:
              return _context4.a(2);
          }
        }, _callee4, null, [[2, 7, 8, 9]]);
      }))();
    },
    reload: function reload() {
      this.fetch(true);
    },
    clearFilters: function clearFilters() {
      this.search = "";
      this.dateFrom = null;
      this.dateTo = null;
      this.fetch(true);
    },
    toggleAutoRefresh: function toggleAutoRefresh() {
      this.stopPolling();
      if (this.autoRefresh) {
        this.pollTimer = setInterval(this.poll, 4000);
      }
    },
    stopPolling: function stopPolling() {
      if (this.pollTimer) {
        clearInterval(this.pollTimer);
        this.pollTimer = null;
      }
    },
    poll: function poll() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var resp, latest, _t5;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _context5.p = 0;
              _context5.n = 1;
              return axios.get("/kitchen/orders/poll", {
                validateStatus: function validateStatus() {
                  return true;
                }
              });
            case 1:
              resp = _context5.v;
              if (!(!resp || resp.status >= 400 || !resp.data)) {
                _context5.n = 2;
                break;
              }
              return _context5.a(2);
            case 2:
              latest = Number(resp.data.latest_id || 0);
              _context5.n = 3;
              return _this7.fetch(false);
            case 3:
              if (_this7.lastLatestId && latest > _this7.lastLatestId) {
                _this7.notifyNewOrder(latest - _this7.lastLatestId);
              }
              _this7.lastLatestId = latest || _this7.lastLatestId;
              _context5.n = 5;
              break;
            case 4:
              _context5.p = 4;
              _t5 = _context5.v;
            case 5:
              return _context5.a(2);
          }
        }, _callee5, null, [[0, 4]]);
      }))();
    },
    notifyNewOrder: function notifyNewOrder(count) {
      if (this.$bvToast) {
        this.$bvToast.toast((this.$t("NewKitchenOrders") || "New kitchen order(s)") + (count > 1 ? " (" + count + ")" : ""), {
          title: this.$t("Kitchen") || "Kitchen",
          variant: "info",
          solid: true,
          autoHideDelay: 4000
        });
      }
      this.playSound();
    },
    playSound: function playSound() {
      try {
        var AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        var ctx = new AudioCtx();
        var osc = ctx.createOscillator();
        var gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = 880;
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        osc.start();
        osc.stop(ctx.currentTime + 0.18);
      } catch (e) {
        /* audio not available */
      }
    },
    setStatus: function setStatus(order, status) {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var resp, _t6;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              _this8.busyId = order.id;
              _context6.p = 1;
              _context6.n = 2;
              return axios.patch("/kitchen/orders/" + order.id + "/status", {
                status: status
              }, {
                validateStatus: function validateStatus() {
                  return true;
                }
              });
            case 2:
              resp = _context6.v;
              if (!(resp && resp.status < 400)) {
                _context6.n = 4;
                break;
              }
              _context6.n = 3;
              return _this8.fetch(false);
            case 3:
              if (_this8.$bvToast) {
                _this8.$bvToast.toast(_this8.$t("Successfully_Updated") || "Updated", {
                  title: _this8.$t("Success") || "Success",
                  variant: "success",
                  solid: true
                });
              }
              _context6.n = 5;
              break;
            case 4:
              _this8.toastError(resp);
            case 5:
              _context6.n = 7;
              break;
            case 6:
              _context6.p = 6;
              _t6 = _context6.v;
              _this8.toastError(null);
            case 7:
              _context6.p = 7;
              _this8.busyId = null;
              return _context6.f(7);
            case 8:
              return _context6.a(2);
          }
        }, _callee6, null, [[1, 6, 7, 8]]);
      }))();
    },
    openDetails: function openDetails(order) {
      this.selected = order;
      this.assignChoice = order.assigned_to || null;
      this.detailsOpen = true;
    },
    saveAssignment: function saveAssignment() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var resp, _t7;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              if (_this9.selected) {
                _context7.n = 1;
                break;
              }
              return _context7.a(2);
            case 1:
              _this9.assignBusy = true;
              _context7.p = 2;
              _context7.n = 3;
              return axios.patch("/kitchen/orders/" + _this9.selected.id + "/assign", {
                assigned_to: _this9.assignChoice
              }, {
                validateStatus: function validateStatus() {
                  return true;
                }
              });
            case 3:
              resp = _context7.v;
              if (!(resp && resp.status < 400)) {
                _context7.n = 5;
                break;
              }
              _context7.n = 4;
              return _this9.fetch(false);
            case 4:
              if (resp.data && resp.data.order) _this9.selected = resp.data.order;
              if (_this9.$bvToast) {
                _this9.$bvToast.toast(_this9.$t("Successfully_Updated") || "Updated", {
                  title: _this9.$t("Success") || "Success",
                  variant: "success",
                  solid: true
                });
              }
              _context7.n = 6;
              break;
            case 5:
              _this9.toastError(resp);
            case 6:
              _context7.n = 8;
              break;
            case 7:
              _context7.p = 7;
              _t7 = _context7.v;
              _this9.toastError(null);
            case 8:
              _context7.p = 8;
              _this9.assignBusy = false;
              return _context7.f(8);
            case 9:
              return _context7.a(2);
          }
        }, _callee7, null, [[2, 7, 8, 9]]);
      }))();
    },
    toastError: function toastError(resp) {
      var msg = resp && resp.data && (resp.data.error || resp.data.message) || this.$t("Network_error") || "Error";
      if (this.$bvToast) {
        this.$bvToast.toast(String(msg), {
          title: this.$t("Failed") || "Failed",
          variant: "danger",
          solid: true
        });
      }
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/kitchen/KitchenDisplay.vue?vue&type=template&id=cdf509f4&scoped=true"
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/kitchen/KitchenDisplay.vue?vue&type=template&id=cdf509f4&scoped=true ***!
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
    staticClass: "main-content kitchen-page"
  }, [_c("div", {
    staticClass: "kitchen-header"
  }, [_c("div", {
    staticClass: "kh-title"
  }, [_c("div", {
    staticClass: "kh-icon"
  }, [_c("lucide-icon", {
    attrs: {
      name: "chef-hat",
      size: 26
    }
  })], 1), _vm._v(" "), _c("div", [_c("h1", [_vm._v(_vm._s(_vm.$t("KitchenDisplay") || "Kitchen Display"))]), _vm._v(" "), _c("p", {
    staticClass: "kh-sub"
  }, [_vm._v(_vm._s(_vm.$t("Kitchen") || "Kitchen") + " · " + _vm._s(_vm.today))])])]), _vm._v(" "), _c("div", {
    staticClass: "kh-tools"
  }, [_c("div", {
    staticClass: "live-pill",
    "class": {
      on: _vm.autoRefresh
    }
  }, [_c("span", {
    staticClass: "dot"
  }), _vm._v("\n        " + _vm._s(_vm.autoRefresh ? _vm.$t("Live") || "Live" : _vm.$t("Paused") || "Paused") + "\n      ")]), _vm._v(" "), _c("b-button", {
    staticClass: "kh-btn",
    attrs: {
      size: "sm",
      variant: "light"
    },
    on: {
      click: function click($event) {
        _vm.autoRefresh = !_vm.autoRefresh;
        _vm.toggleAutoRefresh();
      }
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: _vm.autoRefresh ? "pause" : "play",
      size: 15
    }
  })], 1), _vm._v(" "), _c("b-button", {
    staticClass: "kh-btn",
    attrs: {
      size: "sm",
      variant: "light",
      disabled: _vm.refreshing
    },
    on: {
      click: function click($event) {
        return _vm.fetch(true);
      }
    }
  }, [_c("lucide-icon", {
    "class": {
      spin: _vm.refreshing
    },
    attrs: {
      name: "rotate-cw",
      size: 15
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-md-inline ml-1"
  }, [_vm._v(_vm._s(_vm.$t("Refresh") || "Refresh"))])], 1)], 1)]), _vm._v(" "), _c("div", {
    staticClass: "kitchen-stats"
  }, _vm._l(_vm.columns, function (col) {
    return _c("div", {
      key: "stat-" + col.key,
      staticClass: "stat-chip",
      "class": "sc-" + col.key
    }, [_c("div", {
      staticClass: "sc-ic"
    }, [_c("lucide-icon", {
      attrs: {
        name: col.icon,
        size: 18
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "sc-meta"
    }, [_c("span", {
      staticClass: "sc-count"
    }, [_vm._v(_vm._s((_vm.grouped[col.key] || []).length))]), _vm._v(" "), _c("span", {
      staticClass: "sc-label"
    }, [_vm._v(_vm._s(col.label))])])]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "kitchen-toolbar"
  }, [_c("div", {
    staticClass: "kt-search"
  }, [_c("lucide-icon", {
    staticClass: "kt-search-ic",
    attrs: {
      name: "search",
      size: 16
    }
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search,
      expression: "search"
    }],
    attrs: {
      placeholder: _vm.$t("Search") || "Search"
    },
    domProps: {
      value: _vm.search
    },
    on: {
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.reload.apply(null, arguments);
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.search = $event.target.value;
      }
    }
  })], 1), _vm._v(" "), _c("b-form-datepicker", {
    staticClass: "kt-date",
    attrs: {
      placeholder: _vm.$t("From") || "From",
      "reset-button": "",
      size: "sm"
    },
    on: {
      input: _vm.reload
    },
    model: {
      value: _vm.dateFrom,
      callback: function callback($$v) {
        _vm.dateFrom = $$v;
      },
      expression: "dateFrom"
    }
  }), _vm._v(" "), _c("b-form-datepicker", {
    staticClass: "kt-date",
    attrs: {
      placeholder: _vm.$t("To") || "To",
      "reset-button": "",
      size: "sm"
    },
    on: {
      input: _vm.reload
    },
    model: {
      value: _vm.dateTo,
      callback: function callback($$v) {
        _vm.dateTo = $$v;
      },
      expression: "dateTo"
    }
  }), _vm._v(" "), _c("b-button", {
    staticClass: "kt-clear",
    attrs: {
      size: "sm",
      variant: "outline-secondary"
    },
    on: {
      click: _vm.clearFilters
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "x",
      size: 15
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Clear") || "Clear") + "\n    ")], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "kitchen-board"
  }, _vm._l(_vm.columns, function (col) {
    return _c("div", {
      key: col.key,
      staticClass: "kitchen-column",
      "class": "kc-" + col.key
    }, [_c("div", {
      staticClass: "kitchen-column-header",
      "class": "kch-" + col.key
    }, [_c("span", {
      staticClass: "kch-left"
    }, [_c("lucide-icon", {
      attrs: {
        name: col.icon,
        size: 16
      }
    }), _vm._v("\n          " + _vm._s(col.label) + "\n        ")], 1), _vm._v(" "), _c("span", {
      staticClass: "kch-count"
    }, [_vm._v(_vm._s((_vm.grouped[col.key] || []).length))])]), _vm._v(" "), _c("div", {
      staticClass: "kitchen-column-body"
    }, [_vm.isLoading && !_vm.firstLoadDone ? _vm._l(2, function (n) {
      return _c("div", {
        key: "sk-" + col.key + "-" + n,
        staticClass: "skeleton-card"
      }, [_c("div", {
        staticClass: "sk-line w60"
      }), _vm._v(" "), _c("div", {
        staticClass: "sk-line w40"
      }), _vm._v(" "), _c("div", {
        staticClass: "sk-line w80"
      }), _vm._v(" "), _c("div", {
        staticClass: "sk-line w70"
      })]);
    }) : !(_vm.grouped[col.key] || []).length ? _c("div", {
      staticClass: "empty-state"
    }, [_c("lucide-icon", {
      attrs: {
        name: "inbox",
        size: 26
      }
    }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("NoOrders") || "No orders"))])], 1) : _c("transition-group", {
      attrs: {
        name: "ticket",
        tag: "div"
      }
    }, _vm._l(_vm.grouped[col.key] || [], function (order) {
      return _c("div", {
        key: order.id,
        staticClass: "kitchen-ticket"
      }, [_vm.busyId === order.id ? _c("div", {
        staticClass: "ticket-busy"
      }, [_c("span", {
        staticClass: "spinner-border spinner-border-sm"
      })]) : _vm._e(), _vm._v(" "), _c("div", {
        staticClass: "ticket-top"
      }, [_c("strong", {
        staticClass: "ticket-ref"
      }, [_vm._v(_vm._s(order.ref || "#" + order.sale_id))]), _vm._v(" "), _c("span", {
        staticClass: "ticket-time",
        attrs: {
          title: order.created_at
        }
      }, [_c("lucide-icon", {
        attrs: {
          name: "clock",
          size: 12
        }
      }), _vm._v(" " + _vm._s(_vm.elapsed(order)) + "\n              ")], 1)]), _vm._v(" "), _c("div", {
        staticClass: "ticket-customer"
      }, [_c("lucide-icon", {
        staticClass: "ic",
        attrs: {
          name: "user",
          size: 13
        }
      }), _vm._v("\n              " + _vm._s(order.customer_name || _vm.$t("Walkin_Customer") || "Walk-in Customer") + "\n            ")], 1), _vm._v(" "), _c("ul", {
        staticClass: "ticket-items"
      }, _vm._l(order.items, function (item) {
        return _c("li", {
          key: item.id
        }, [_c("span", {
          staticClass: "qty"
        }, [_vm._v(_vm._s(_vm.formatQty(item.quantity))), item.unit ? _c("small", [_vm._v(" " + _vm._s(item.unit))]) : _vm._e()]), _vm._v(" "), _c("span", {
          staticClass: "nm"
        }, [_vm._v(_vm._s(item.name))])]);
      }), 0), _vm._v(" "), order.instructions ? _c("div", {
        staticClass: "ticket-note"
      }, [_c("lucide-icon", {
        staticClass: "ic",
        attrs: {
          name: "sticky-note",
          size: 13
        }
      }), _vm._v(" "), _c("span", [_vm._v(_vm._s(order.instructions))])], 1) : _vm._e(), _vm._v(" "), order.assigned_name ? _c("div", {
        staticClass: "ticket-staff"
      }, [_c("lucide-icon", {
        staticClass: "ic",
        attrs: {
          name: "chef-hat",
          size: 13
        }
      }), _vm._v("\n              " + _vm._s(order.assigned_name) + "\n            ")], 1) : _vm._e(), _vm._v(" "), col.key === "completed" ? _c("div", {
        staticClass: "ticket-dispatch"
      }, [order.dispatched_warehouse_id ? _c("div", {
        staticClass: "dispatch-badge"
      }, [_c("lucide-icon", {
        attrs: {
          name: "warehouse",
          size: 13
        }
      }), _vm._v("\n                " + _vm._s(_vm.$t("SentToWarehouse") || "Sent to") + " " + _vm._s(order.dispatched_warehouse_name) + "\n              ")], 1) : _vm._e(), _vm._v(" "), _vm.canManage ? _c("select", {
        staticClass: "dispatch-select",
        attrs: {
          disabled: _vm.busyId === order.id
        },
        domProps: {
          value: order.dispatched_warehouse_id || ""
        },
        on: {
          change: function change($event) {
            return _vm.dispatchToWarehouse(order, $event.target.value);
          }
        }
      }, [_c("option", {
        attrs: {
          value: "",
          disabled: ""
        }
      }, [_vm._v("\n                  " + _vm._s(order.dispatched_warehouse_id ? _vm.$t("ChangeWarehouse") || "Change warehouse…" : _vm.$t("SendToWarehouse") || "Send to warehouse…") + "\n                ")]), _vm._v(" "), _vm._l(_vm.warehouses, function (w) {
        return _c("option", {
          key: w.id,
          domProps: {
            value: w.id
          }
        }, [_vm._v(_vm._s(w.name))]);
      })], 2) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("div", {
        staticClass: "ticket-actions"
      }, [_vm.canManage ? [col.key === "pending" || col.key === "on_hold" ? _c("button", {
        staticClass: "t-btn t-primary",
        attrs: {
          disabled: _vm.busyId === order.id
        },
        on: {
          click: function click($event) {
            return _vm.setStatus(order, "preparing");
          }
        }
      }, [_c("lucide-icon", {
        attrs: {
          name: "play",
          size: 13
        }
      }), _vm._v(" " + _vm._s(_vm.$t("StartPreparation") || "Start") + "\n                ")], 1) : _vm._e(), _vm._v(" "), col.key === "preparing" ? _c("button", {
        staticClass: "t-btn t-success",
        attrs: {
          disabled: _vm.busyId === order.id
        },
        on: {
          click: function click($event) {
            return _vm.setStatus(order, "completed");
          }
        }
      }, [_c("lucide-icon", {
        attrs: {
          name: "check-circle",
          size: 13
        }
      }), _vm._v(" " + _vm._s(_vm.$t("MarkCompleted") || "Complete") + "\n                ")], 1) : _vm._e(), _vm._v(" "), col.key === "pending" || col.key === "preparing" ? _c("button", {
        staticClass: "t-btn t-warning",
        attrs: {
          disabled: _vm.busyId === order.id
        },
        on: {
          click: function click($event) {
            return _vm.setStatus(order, "on_hold");
          }
        }
      }, [_c("lucide-icon", {
        attrs: {
          name: "pause",
          size: 13
        }
      }), _vm._v(" " + _vm._s(_vm.$t("PutOnHold") || "Hold") + "\n                ")], 1) : _vm._e(), _vm._v(" "), col.key === "completed" ? _c("button", {
        staticClass: "t-btn t-ghost",
        attrs: {
          disabled: _vm.busyId === order.id
        },
        on: {
          click: function click($event) {
            return _vm.setStatus(order, "preparing");
          }
        }
      }, [_c("lucide-icon", {
        attrs: {
          name: "rotate-cw",
          size: 13
        }
      }), _vm._v(" " + _vm._s(_vm.$t("Reopen") || "Reopen") + "\n                ")], 1) : _vm._e()] : _vm._e(), _vm._v(" "), _c("button", {
        staticClass: "t-btn t-ghost t-icon",
        attrs: {
          title: _vm.$t("Details") || "Details"
        },
        on: {
          click: function click($event) {
            return _vm.openDetails(order);
          }
        }
      }, [_c("lucide-icon", {
        attrs: {
          name: "eye",
          size: 14
        }
      })], 1)], 2)]);
    }), 0)], 2)]);
  }), 0), _vm._v(" "), _c("b-modal", {
    attrs: {
      title: _vm.$t("OrderDetails") || "Order Details",
      "hide-footer": "",
      size: "lg",
      centered: ""
    },
    model: {
      value: _vm.detailsOpen,
      callback: function callback($$v) {
        _vm.detailsOpen = $$v;
      },
      expression: "detailsOpen"
    }
  }, [_vm.selected ? _c("div", {
    staticClass: "km-details"
  }, [_c("div", {
    staticClass: "km-grid"
  }, [_c("div", {
    staticClass: "km-cell"
  }, [_c("span", {
    staticClass: "km-k"
  }, [_vm._v(_vm._s(_vm.$t("Order") || "Order"))]), _vm._v(" "), _c("span", {
    staticClass: "km-v"
  }, [_vm._v(_vm._s(_vm.selected.ref || "#" + _vm.selected.sale_id))])]), _vm._v(" "), _c("div", {
    staticClass: "km-cell"
  }, [_c("span", {
    staticClass: "km-k"
  }, [_vm._v(_vm._s(_vm.$t("Status") || "Status"))]), _vm._v(" "), _c("b-badge", {
    staticClass: "km-badge",
    attrs: {
      variant: _vm.statusVariant(_vm.selected.status)
    }
  }, [_vm._v(_vm._s(_vm.statusLabel(_vm.selected.status)))])], 1), _vm._v(" "), _c("div", {
    staticClass: "km-cell"
  }, [_c("span", {
    staticClass: "km-k"
  }, [_vm._v(_vm._s(_vm.$t("Customer") || "Customer"))]), _vm._v(" "), _c("span", {
    staticClass: "km-v"
  }, [_vm._v(_vm._s(_vm.selected.customer_name || _vm.$t("Walkin_Customer") || "Walk-in Customer"))])]), _vm._v(" "), _c("div", {
    staticClass: "km-cell"
  }, [_c("span", {
    staticClass: "km-k"
  }, [_vm._v(_vm._s(_vm.$t("Date") || "Date"))]), _vm._v(" "), _c("span", {
    staticClass: "km-v"
  }, [_vm._v(_vm._s(_vm.selected.created_at))])]), _vm._v(" "), _vm.selected.dispatched_warehouse_id ? _c("div", {
    staticClass: "km-cell"
  }, [_c("span", {
    staticClass: "km-k"
  }, [_vm._v(_vm._s(_vm.$t("SentToWarehouse") || "Sent to"))]), _vm._v(" "), _c("span", {
    staticClass: "km-v"
  }, [_c("lucide-icon", {
    attrs: {
      name: "warehouse",
      size: 14
    }
  }), _vm._v(" " + _vm._s(_vm.selected.dispatched_warehouse_name) + "\n          ")], 1)]) : _vm._e()]), _vm._v(" "), _c("b-table-simple", {
    staticClass: "km-table mt-3",
    attrs: {
      small: "",
      responsive: ""
    }
  }, [_c("b-thead", [_c("b-tr", [_c("b-th", [_vm._v(_vm._s(_vm.$t("Product") || "Product"))]), _vm._v(" "), _c("b-th", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t("Quantity") || "Quantity"))])], 1)], 1), _vm._v(" "), _c("b-tbody", _vm._l(_vm.selected.items, function (item) {
    return _c("b-tr", {
      key: item.id
    }, [_c("b-td", [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c("b-td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.formatQty(item.quantity))), item.unit ? _c("span", [_vm._v(" " + _vm._s(item.unit))]) : _vm._e()])], 1);
  }), 1)], 1), _vm._v(" "), _vm.selected.instructions ? _c("div", {
    staticClass: "km-note"
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("SpecialInstructions") || "Special Instructions"))]), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.selected.instructions))])]) : _vm._e(), _vm._v(" "), _vm.canManage ? _c("div", {
    staticClass: "km-assign"
  }, [_c("label", [_vm._v(_vm._s(_vm.$t("AssignedStaff") || "Assigned Staff"))]), _vm._v(" "), _c("div", {
    staticClass: "d-flex"
  }, [_c("b-form-select", {
    staticClass: "mr-2",
    attrs: {
      options: _vm.staffOptions
    },
    model: {
      value: _vm.assignChoice,
      callback: function callback($$v) {
        _vm.assignChoice = $$v;
      },
      expression: "assignChoice"
    }
  }), _vm._v(" "), _c("b-button", {
    attrs: {
      variant: "primary",
      disabled: _vm.assignBusy
    },
    on: {
      click: _vm.saveAssignment
    }
  }, [_vm.assignBusy ? _c("span", {
    staticClass: "spinner-border spinner-border-sm"
  }) : _c("span", [_vm._v(_vm._s(_vm.$t("Save") || "Save"))])])], 1)]) : _vm._e()], 1) : _vm._e()])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/kitchen/KitchenDisplay.vue?vue&type=style&index=0&id=cdf509f4&scoped=true&lang=css"
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/kitchen/KitchenDisplay.vue?vue&type=style&index=0&id=cdf509f4&scoped=true&lang=css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.kitchen-page[data-v-cdf509f4] {\n  --kc-pending: #64748b;\n  --kc-preparing: #3b82f6;\n  --kc-completed: #22c55e;\n  --kc-on_hold: #f59e0b;\n}\n\n/* ---------- Header ---------- */\n.kitchen-header[data-v-cdf509f4] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 18px;\n}\n.kh-title[data-v-cdf509f4] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.kh-icon[data-v-cdf509f4] {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background: linear-gradient(135deg, #6366f1, #8b5cf6);\n  box-shadow: 0 8px 20px -6px rgba(99, 102, 241, 0.6);\n}\n.kh-title h1[data-v-cdf509f4] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0;\n  line-height: 1.1;\n}\n.kh-sub[data-v-cdf509f4] {\n  margin: 2px 0 0;\n  color: #94a3b8;\n  font-size: 0.82rem;\n}\n.kh-tools[data-v-cdf509f4] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.kh-btn[data-v-cdf509f4] {\n  border-radius: 10px !important;\n  display: inline-flex;\n  align-items: center;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);\n}\n.live-pill[data-v-cdf509f4] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 5px 12px;\n  border-radius: 999px;\n  background: #f1f5f9;\n  color: #94a3b8;\n}\n.live-pill.on[data-v-cdf509f4] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #16a34a;\n}\n.live-pill .dot[data-v-cdf509f4] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: currentColor;\n}\n.live-pill.on .dot[data-v-cdf509f4] {\n  animation: pulse-cdf509f4 1.4s infinite;\n}\n@keyframes pulse-cdf509f4 {\n0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5);\n}\n70% { box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);\n}\n100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);\n}\n}\n\n/* ---------- Stat chips ---------- */\n.kitchen-stats[data-v-cdf509f4] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.stat-chip[data-v-cdf509f4] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #fff;\n  border: 1px solid #eef2f7;\n  border-radius: 14px;\n  padding: 12px 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.sc-ic[data-v-cdf509f4] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n}\n.sc-pending .sc-ic[data-v-cdf509f4] { background: var(--kc-pending);\n}\n.sc-preparing .sc-ic[data-v-cdf509f4] { background: var(--kc-preparing);\n}\n.sc-completed .sc-ic[data-v-cdf509f4] { background: var(--kc-completed);\n}\n.sc-on_hold .sc-ic[data-v-cdf509f4] { background: var(--kc-on_hold);\n}\n.sc-meta[data-v-cdf509f4] { display: flex; flex-direction: column; line-height: 1.1;\n}\n.sc-count[data-v-cdf509f4] { font-size: 1.4rem; font-weight: 700;\n}\n.sc-label[data-v-cdf509f4] { font-size: 0.78rem; color: #94a3b8;\n}\n\n/* ---------- Toolbar ---------- */\n.kitchen-toolbar[data-v-cdf509f4] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 18px;\n}\n.kt-search[data-v-cdf509f4] {\n  position: relative;\n  flex: 1 1 240px;\n  max-width: 320px;\n}\n.kt-search-ic[data-v-cdf509f4] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n}\n.kt-search input[data-v-cdf509f4] {\n  width: 100%;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 8px 12px 8px 34px;\n  font-size: 0.88rem;\n  outline: none;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.kt-search input[data-v-cdf509f4]:focus {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);\n}\n.kt-date[data-v-cdf509f4] { max-width: 190px;\n}\n.kt-clear[data-v-cdf509f4] { border-radius: 10px !important;\n}\n\n/* ---------- Board ---------- */\n.kitchen-board[data-v-cdf509f4] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(240px, 1fr));\n  gap: 16px;\n}\n@media (max-width: 1100px) {\n.kitchen-board[data-v-cdf509f4] { grid-template-columns: repeat(2, minmax(240px, 1fr));\n}\n.kitchen-stats[data-v-cdf509f4] { grid-template-columns: repeat(2, 1fr);\n}\n}\n@media (max-width: 600px) {\n.kitchen-board[data-v-cdf509f4] { grid-template-columns: 1fr;\n}\n.kitchen-stats[data-v-cdf509f4] { grid-template-columns: 1fr 1fr;\n}\n}\n.kitchen-column[data-v-cdf509f4] {\n  background: #f8fafc;\n  border: 1px solid #eef2f7;\n  border-radius: 16px;\n  padding: 10px;\n  min-height: 220px;\n  display: flex;\n  flex-direction: column;\n}\n.kitchen-column-header[data-v-cdf509f4] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 600;\n  font-size: 0.9rem;\n  padding: 9px 12px;\n  border-radius: 11px;\n  color: #fff;\n  margin-bottom: 12px;\n}\n.kch-left[data-v-cdf509f4] { display: inline-flex; align-items: center; gap: 7px;\n}\n.kch-count[data-v-cdf509f4] {\n  background: rgba(255, 255, 255, 0.28);\n  border-radius: 999px;\n  font-size: 0.75rem;\n  min-width: 22px;\n  text-align: center;\n  padding: 1px 7px;\n}\n.kch-pending[data-v-cdf509f4] { background: var(--kc-pending);\n}\n.kch-preparing[data-v-cdf509f4] { background: var(--kc-preparing);\n}\n.kch-completed[data-v-cdf509f4] { background: var(--kc-completed);\n}\n.kch-on_hold[data-v-cdf509f4] { background: var(--kc-on_hold);\n}\n.kitchen-column-body[data-v-cdf509f4] {\n  flex: 1;\n  overflow-y: auto;\n  max-height: calc(100vh - 360px);\n  padding-right: 2px;\n}\n\n/* ---------- Ticket card ---------- */\n.kitchen-ticket[data-v-cdf509f4] {\n  position: relative;\n  background: #fff;\n  border: 1px solid #eef2f7;\n  border-left: 4px solid #cbd5e1;\n  border-radius: 12px;\n  padding: 12px 14px;\n  margin-bottom: 12px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.kitchen-ticket[data-v-cdf509f4]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 24px -12px rgba(15, 23, 42, 0.35);\n}\n.kc-pending .kitchen-ticket[data-v-cdf509f4] { border-left-color: var(--kc-pending);\n}\n.kc-preparing .kitchen-ticket[data-v-cdf509f4] { border-left-color: var(--kc-preparing);\n}\n.kc-completed .kitchen-ticket[data-v-cdf509f4] { border-left-color: var(--kc-completed);\n}\n.kc-on_hold .kitchen-ticket[data-v-cdf509f4] { border-left-color: var(--kc-on_hold);\n}\n.ticket-busy[data-v-cdf509f4] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.7);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 3;\n  color: #6366f1;\n}\n.ticket-top[data-v-cdf509f4] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.ticket-ref[data-v-cdf509f4] { font-size: 0.98rem; font-weight: 700; color: #1e293b;\n}\n.ticket-time[data-v-cdf509f4] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 0.72rem;\n  color: #94a3b8;\n  background: #f1f5f9;\n  border-radius: 999px;\n  padding: 2px 8px;\n}\n.ticket-customer[data-v-cdf509f4] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.85rem;\n  color: #475569;\n  margin: 6px 0;\n}\n.ticket-items[data-v-cdf509f4] {\n  list-style: none;\n  padding: 0;\n  margin: 8px 0;\n  border-top: 1px dashed #eef2f7;\n  padding-top: 8px;\n}\n.ticket-items li[data-v-cdf509f4] {\n  display: flex;\n  gap: 8px;\n  font-size: 0.86rem;\n  padding: 3px 0;\n  color: #334155;\n}\n.ticket-items .qty[data-v-cdf509f4] {\n  font-weight: 700;\n  color: #6366f1;\n  min-width: 46px;\n}\n.ticket-items .qty small[data-v-cdf509f4] { font-weight: 600; color: #94a3b8;\n}\n.ticket-note[data-v-cdf509f4] {\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  background: #fffbeb;\n  border: 1px solid #fef3c7;\n  color: #92400e;\n  border-radius: 8px;\n  padding: 6px 9px;\n  font-size: 0.8rem;\n  margin: 6px 0;\n}\n.ticket-staff[data-v-cdf509f4] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.78rem;\n  color: #6366f1;\n  background: #eef2ff;\n  border-radius: 999px;\n  padding: 3px 10px;\n  margin-bottom: 4px;\n}\n.ic[data-v-cdf509f4] { vertical-align: middle; opacity: 0.85;\n}\n\n/* ---------- Dispatch to warehouse ---------- */\n.ticket-dispatch[data-v-cdf509f4] {\n  margin-top: 8px;\n  padding-top: 8px;\n  border-top: 1px dashed #eef2f7;\n}\n.dispatch-badge[data-v-cdf509f4] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #16a34a;\n  background: rgba(34, 197, 94, 0.12);\n  border-radius: 999px;\n  padding: 4px 11px;\n  margin-bottom: 6px;\n}\n.dispatch-select[data-v-cdf509f4] {\n  width: 100%;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 6px 9px;\n  font-size: 0.8rem;\n  color: #475569;\n  background: #fff;\n  outline: none;\n  cursor: pointer;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.dispatch-select[data-v-cdf509f4]:focus {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);\n}\n.dispatch-select[data-v-cdf509f4]:disabled { opacity: 0.6; cursor: not-allowed;\n}\n\n/* ---------- Ticket actions ---------- */\n.ticket-actions[data-v-cdf509f4] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 10px;\n}\n.t-btn[data-v-cdf509f4] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  padding: 6px 10px;\n  cursor: pointer;\n  transition: filter 0.15s, transform 0.1s;\n}\n.t-btn[data-v-cdf509f4]:active { transform: scale(0.96);\n}\n.t-btn[data-v-cdf509f4]:disabled { opacity: 0.55; cursor: not-allowed;\n}\n.t-primary[data-v-cdf509f4] { background: var(--kc-preparing); color: #fff;\n}\n.t-success[data-v-cdf509f4] { background: var(--kc-completed); color: #fff;\n}\n.t-warning[data-v-cdf509f4] { background: var(--kc-on_hold); color: #fff;\n}\n.t-ghost[data-v-cdf509f4] { background: #f1f5f9; color: #475569;\n}\n.t-btn[data-v-cdf509f4]:not(:disabled):hover { filter: brightness(0.94);\n}\n.t-icon[data-v-cdf509f4] { padding: 6px 8px; margin-left: auto;\n}\n\n/* ---------- Empty + skeleton ---------- */\n.empty-state[data-v-cdf509f4] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  color: #cbd5e1;\n  padding: 30px 0;\n  font-size: 0.85rem;\n}\n.skeleton-card[data-v-cdf509f4] {\n  background: #fff;\n  border: 1px solid #eef2f7;\n  border-radius: 12px;\n  padding: 14px;\n  margin-bottom: 12px;\n}\n.sk-line[data-v-cdf509f4] {\n  height: 10px;\n  border-radius: 6px;\n  margin-bottom: 9px;\n  background: linear-gradient(90deg, #eef2f7 25%, #f8fafc 37%, #eef2f7 63%);\n  background-size: 400% 100%;\n  animation: shimmer-cdf509f4 1.3s ease infinite;\n}\n.sk-line.w40[data-v-cdf509f4] { width: 40%;\n}\n.sk-line.w60[data-v-cdf509f4] { width: 60%;\n}\n.sk-line.w70[data-v-cdf509f4] { width: 70%;\n}\n.sk-line.w80[data-v-cdf509f4] { width: 80%;\n}\n@keyframes shimmer-cdf509f4 {\n0% { background-position: 100% 0;\n}\n100% { background-position: -100% 0;\n}\n}\n\n/* ---------- Transition ---------- */\n.ticket-enter-active[data-v-cdf509f4],\n.ticket-leave-active[data-v-cdf509f4] { transition: all 0.25s ease;\n}\n.ticket-enter[data-v-cdf509f4] { opacity: 0; transform: translateY(-6px);\n}\n.ticket-leave-to[data-v-cdf509f4] { opacity: 0; transform: scale(0.96);\n}\n.spin[data-v-cdf509f4] { animation: spinRot-cdf509f4 0.8s linear infinite;\n}\n@keyframes spinRot-cdf509f4 {\nto { transform: rotate(360deg);\n}\n}\n\n/* ---------- Details modal ---------- */\n.km-grid[data-v-cdf509f4] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.km-cell[data-v-cdf509f4] { display: flex; flex-direction: column; gap: 3px;\n}\n.km-k[data-v-cdf509f4] { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.04em; color: #94a3b8;\n}\n.km-v[data-v-cdf509f4] { font-weight: 600; color: #1e293b;\n}\n.km-badge[data-v-cdf509f4] { width: -moz-fit-content; width: fit-content;\n}\n.km-note[data-v-cdf509f4] {\n  background: #fffbeb;\n  border: 1px solid #fef3c7;\n  border-radius: 8px;\n  padding: 10px 12px;\n  margin-top: 8px;\n}\n.km-note p[data-v-cdf509f4] { margin: 4px 0 0; color: #92400e;\n}\n.km-assign[data-v-cdf509f4] { margin-top: 16px;\n}\n.km-assign label[data-v-cdf509f4] { font-weight: 600; font-size: 0.85rem; margin-bottom: 5px; display: block;\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/kitchen/KitchenDisplay.vue?vue&type=style&index=0&id=cdf509f4&scoped=true&lang=css"
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/kitchen/KitchenDisplay.vue?vue&type=style&index=0&id=cdf509f4&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KitchenDisplay_vue_vue_type_style_index_0_id_cdf509f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KitchenDisplay.vue?vue&type=style&index=0&id=cdf509f4&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/kitchen/KitchenDisplay.vue?vue&type=style&index=0&id=cdf509f4&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KitchenDisplay_vue_vue_type_style_index_0_id_cdf509f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KitchenDisplay_vue_vue_type_style_index_0_id_cdf509f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/views/app/pages/kitchen/KitchenDisplay.vue"
/*!******************************************************************!*\
  !*** ./resources/src/views/app/pages/kitchen/KitchenDisplay.vue ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _KitchenDisplay_vue_vue_type_template_id_cdf509f4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KitchenDisplay.vue?vue&type=template&id=cdf509f4&scoped=true */ "./resources/src/views/app/pages/kitchen/KitchenDisplay.vue?vue&type=template&id=cdf509f4&scoped=true");
/* harmony import */ var _KitchenDisplay_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KitchenDisplay.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/kitchen/KitchenDisplay.vue?vue&type=script&lang=js");
/* harmony import */ var _KitchenDisplay_vue_vue_type_style_index_0_id_cdf509f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KitchenDisplay.vue?vue&type=style&index=0&id=cdf509f4&scoped=true&lang=css */ "./resources/src/views/app/pages/kitchen/KitchenDisplay.vue?vue&type=style&index=0&id=cdf509f4&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _KitchenDisplay_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _KitchenDisplay_vue_vue_type_template_id_cdf509f4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _KitchenDisplay_vue_vue_type_template_id_cdf509f4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "cdf509f4",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/kitchen/KitchenDisplay.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/kitchen/KitchenDisplay.vue?vue&type=script&lang=js"
/*!******************************************************************************************!*\
  !*** ./resources/src/views/app/pages/kitchen/KitchenDisplay.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KitchenDisplay_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KitchenDisplay.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/kitchen/KitchenDisplay.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KitchenDisplay_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/kitchen/KitchenDisplay.vue?vue&type=template&id=cdf509f4&scoped=true"
/*!************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/kitchen/KitchenDisplay.vue?vue&type=template&id=cdf509f4&scoped=true ***!
  \************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KitchenDisplay_vue_vue_type_template_id_cdf509f4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KitchenDisplay_vue_vue_type_template_id_cdf509f4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KitchenDisplay_vue_vue_type_template_id_cdf509f4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KitchenDisplay.vue?vue&type=template&id=cdf509f4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/kitchen/KitchenDisplay.vue?vue&type=template&id=cdf509f4&scoped=true");


/***/ },

/***/ "./resources/src/views/app/pages/kitchen/KitchenDisplay.vue?vue&type=style&index=0&id=cdf509f4&scoped=true&lang=css"
/*!**************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/kitchen/KitchenDisplay.vue?vue&type=style&index=0&id=cdf509f4&scoped=true&lang=css ***!
  \**************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KitchenDisplay_vue_vue_type_style_index_0_id_cdf509f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KitchenDisplay.vue?vue&type=style&index=0&id=cdf509f4&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/kitchen/KitchenDisplay.vue?vue&type=style&index=0&id=cdf509f4&scoped=true&lang=css");


/***/ }

}]);