"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["support_tickets_list"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/TicketsList.vue?vue&type=script&lang=js"
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/TicketsList.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Support Tickets"
  },
  data: function data() {
    return {
      isLoading: true,
      serverParams: {
        page: 1,
        perPage: 10
      },
      limit: "10",
      search: "",
      Filter_status: "",
      tickets: [],
      totalRows: 0,
      stats: {
        open: 0,
        pending: 0,
        resolved: 0,
        closed: 0
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["currentUserPermissions", "currentUser"])), {}, {
    statCards: function statCards() {
      return [{
        key: "open",
        status: "open",
        labelKey: "stat_open",
        icon: "inbox",
        color: "primary"
      }, {
        key: "pending",
        status: "pending",
        labelKey: "stat_pending",
        icon: "clock",
        color: "warning"
      }, {
        key: "resolved",
        status: "resolved",
        labelKey: "stat_resolved",
        icon: "check-circle",
        color: "success"
      }, {
        key: "closed",
        status: "closed",
        labelKey: "stat_closed",
        icon: "archive",
        color: "muted"
      }];
    },
    statusFilters: function statusFilters() {
      return [{
        value: "open",
        labelKey: "status_open",
        color: "primary"
      }, {
        value: "pending",
        labelKey: "status_pending",
        color: "warning"
      }, {
        value: "resolved",
        labelKey: "status_resolved",
        color: "success"
      }, {
        value: "closed",
        labelKey: "status_closed",
        color: "muted"
      }];
    },
    columns: function columns() {
      return [{
        label: this.$t("ticket_number"),
        field: "ticket_number",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("subject"),
        field: "subject",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("category"),
        field: "category",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("priority"),
        field: "priority",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("status"),
        field: "status",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("last_activity"),
        field: "last_reply_at",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Action"),
        field: "actions",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }];
    }
  }),
  methods: {
    setFilter: function setFilter(status) {
      if (this.Filter_status === status) return;
      this.Filter_status = status;
      this.Get_Tickets(1);
    },
    formatDateTime: function formatDateTime(value) {
      if (!value) return "";
      var d = new Date(value);
      if (isNaN(d.getTime())) return value;
      var p = function p(n) {
        return String(n).padStart(2, "0");
      };
      return "".concat(d.getFullYear(), "-").concat(p(d.getMonth() + 1), "-").concat(p(d.getDate()), " ").concat(p(d.getHours()), ":").concat(p(d.getMinutes()));
    },
    onPageChange: function onPageChange(_ref) {
      var currentPage = _ref.currentPage;
      if (this.serverParams.page !== currentPage) {
        this.serverParams.page = currentPage;
        this.Get_Tickets(currentPage);
      }
    },
    onPerPageChange: function onPerPageChange(_ref2) {
      var currentPerPage = _ref2.currentPerPage;
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.serverParams.page = 1;
        this.Get_Tickets(1);
      }
    },
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Tickets(1);
    },
    Get_Tickets: function Get_Tickets(page) {
      var _this = this;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      this.serverParams.page = page;
      axios.get("support/tickets?page=" + page + "&status=" + encodeURIComponent(this.Filter_status || "") + "&search=" + encodeURIComponent(this.search || "") + "&limit=" + this.limit).then(function (response) {
        _this.tickets = response.data.tickets;
        _this.totalRows = response.data.totalRows;
        _this.stats = response.data.stats;
        _this.isLoading = false;
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
      })["catch"](function () {
        _this.isLoading = false;
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
      });
    }
  },
  created: function created() {
    this.Get_Tickets(1);
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/TicketsList.vue?vue&type=template&id=7a587d10&scoped=true"
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/TicketsList.vue?vue&type=template&id=7a587d10&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "main-content tickets-page"
  }, [_c("breadcumb", {
    attrs: {
      page: _vm.$t("my_tickets"),
      folder: _vm.$t("support_center")
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "tk-hero mb-4"
  }, [_c("div", {
    staticClass: "tk-hero__text"
  }, [_c("div", {
    staticClass: "tk-hero__icon"
  }, [_c("lucide-icon", {
    attrs: {
      name: "life-buoy"
    }
  })], 1), _vm._v(" "), _c("div", [_c("h1", {
    staticClass: "tk-hero__title"
  }, [_vm._v(_vm._s(_vm.$t("my_tickets")))]), _vm._v(" "), _c("p", {
    staticClass: "tk-hero__subtitle"
  }, [_vm._v(_vm._s(_vm.$t("support_subtitle")))])])]), _vm._v(" "), _c("router-link", {
    staticClass: "tk-hero__btn",
    attrs: {
      to: "/app/support/tickets/create"
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "plus"
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("new_ticket")))])], 1)], 1), _vm._v(" "), _c("b-row", {
    staticClass: "mb-4"
  }, _vm._l(_vm.statCards, function (card) {
    return _c("b-col", {
      key: card.key,
      staticClass: "mb-3",
      attrs: {
        xl: "3",
        md: "6"
      }
    }, [_c("div", {
      staticClass: "tk-stat",
      "class": ["tk-stat--" + card.color, {
        "tk-stat--active": _vm.Filter_status === card.status
      }],
      on: {
        click: function click($event) {
          return _vm.setFilter(card.status);
        }
      }
    }, [_c("div", {
      staticClass: "tk-stat__icon"
    }, [_c("lucide-icon", {
      attrs: {
        name: card.icon
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "tk-stat__body"
    }, [_c("span", {
      staticClass: "tk-stat__value"
    }, [_vm._v(_vm._s(_vm.stats[card.key]))]), _vm._v(" "), _c("span", {
      staticClass: "tk-stat__label"
    }, [_vm._v(_vm._s(_vm.$t(card.labelKey)))])])])]);
  }), 1), _vm._v(" "), _c("div", {
    staticClass: "tk-card"
  }, [_c("div", {
    staticClass: "tk-card__head"
  }, [_c("div", {
    staticClass: "tk-filters"
  }, [_c("button", {
    staticClass: "tk-chip",
    "class": {
      "tk-chip--active": _vm.Filter_status === ""
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.setFilter("");
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("all")))]), _vm._v(" "), _vm._l(_vm.statusFilters, function (f) {
    return _c("button", {
      key: f.value,
      staticClass: "tk-chip",
      "class": ["tk-chip--" + f.color, {
        "tk-chip--active": _vm.Filter_status === f.value
      }],
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.setFilter(f.value);
        }
      }
    }, [_vm._v(_vm._s(_vm.$t(f.labelKey)))]);
  })], 2)]), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "tk-loading"
  }, [_c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  })]) : _c("div", {
    staticClass: "tk-table"
  }, [_c("vue-good-table", {
    attrs: {
      mode: "remote",
      columns: _vm.columns,
      totalRows: _vm.totalRows,
      rows: _vm.tickets,
      "search-options": {
        enabled: true,
        placeholder: _vm.$t("search_tickets")
      },
      "pagination-options": {
        enabled: true,
        mode: "records",
        nextLabel: "next",
        prevLabel: "prev"
      },
      styleClass: "tableOne table-hover vgt-table"
    },
    on: {
      "on-page-change": _vm.onPageChange,
      "on-per-page-change": _vm.onPerPageChange,
      "on-search": _vm.onSearch
    },
    scopedSlots: _vm._u([{
      key: "table-row",
      fn: function fn(props) {
        return [props.column.field == "ticket_number" ? _c("span", [_c("router-link", {
          staticClass: "tk-ref",
          attrs: {
            to: "/app/support/tickets/" + props.row.id
          }
        }, [_vm._v("\n              " + _vm._s(props.row.ticket_number) + "\n            ")]), _vm._v(" "), props.row.tenant_unread ? _c("b-badge", {
          staticClass: "ml-1 tk-pill",
          attrs: {
            variant: "danger"
          }
        }, [_vm._v(_vm._s(_vm.$t("new_reply")))]) : _vm._e()], 1) : props.column.field == "subject" ? _c("span", [_c("router-link", {
          staticClass: "tk-subject",
          attrs: {
            to: "/app/support/tickets/" + props.row.id
          }
        }, [_vm._v("\n              " + _vm._s(props.row.subject) + "\n            ")])], 1) : props.column.field == "category" ? _c("span", [_c("span", {
          staticClass: "tk-cat"
        }, [_vm._v(_vm._s(_vm.$t("cat_" + props.row.category)))])]) : props.column.field == "priority" ? _c("span", [_c("span", {
          staticClass: "tk-tag",
          "class": "tk-tag--pri-" + props.row.priority
        }, [_c("i", {
          staticClass: "tk-dot"
        }), _vm._v(_vm._s(_vm.$t("pri_" + props.row.priority)) + "\n            ")])]) : props.column.field == "status" ? _c("span", [_c("span", {
          staticClass: "tk-tag",
          "class": "tk-tag--status-" + props.row.status
        }, [_c("i", {
          staticClass: "tk-dot"
        }), _vm._v(_vm._s(_vm.$t("status_" + props.row.status)) + "\n            ")])]) : props.column.field == "last_reply_at" ? _c("span", [_c("span", {
          staticClass: "tk-date"
        }, [_vm._v(_vm._s(_vm.formatDateTime(props.row.last_reply_at || props.row.created_at)))])]) : props.column.field == "actions" ? _c("span", [_c("router-link", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "tk-action",
          attrs: {
            title: _vm.$t("view"),
            to: "/app/support/tickets/" + props.row.id
          }
        }, [_c("lucide-icon", {
          attrs: {
            name: "eye"
          }
        })], 1)], 1) : _vm._e()];
      }
    }])
  }, [_c("template", {
    slot: "emptystate"
  }, [_c("div", {
    staticClass: "tk-empty"
  }, [_c("div", {
    staticClass: "tk-empty__icon"
  }, [_c("lucide-icon", {
    attrs: {
      name: "inbox"
    }
  })], 1), _vm._v(" "), _c("h5", {
    staticClass: "tk-empty__title"
  }, [_vm._v(_vm._s(_vm.$t("no_tickets_yet")))]), _vm._v(" "), _c("p", {
    staticClass: "tk-empty__desc"
  }, [_vm._v(_vm._s(_vm.$t("no_tickets_desc")))]), _vm._v(" "), _c("router-link", {
    staticClass: "tk-hero__btn tk-hero__btn--sm mt-2",
    attrs: {
      to: "/app/support/tickets/create"
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "plus"
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("new_ticket")))])], 1)], 1)])], 2)], 1)])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/TicketsList.vue?vue&type=style&index=0&id=7a587d10&scoped=true&lang=css"
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/TicketsList.vue?vue&type=style&index=0&id=7a587d10&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.tickets-page[data-v-7a587d10] {\n  --tk-primary: #5e72e4;\n  --tk-warning: #fb6340;\n  --tk-success: #2dce89;\n  --tk-muted: #8898aa;\n}\n\n/* Hero header */\n.tk-hero[data-v-7a587d10] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  padding: 26px 30px;\n  border-radius: 18px;\n  background: linear-gradient(120deg, #4254e8 0%, #6a3df0 60%, #8a4ff0 100%);\n  box-shadow: 0 12px 30px rgba(80, 70, 220, 0.28);\n  color: #fff;\n}\n.tk-hero__text[data-v-7a587d10] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n}\n.tk-hero__icon[data-v-7a587d10] {\n  width: 56px;\n  height: 56px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.18);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.tk-hero__icon[data-v-7a587d10] svg { width: 28px; height: 28px;\n}\n.tk-hero__title[data-v-7a587d10] {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 1.2;\n  color: #fff;\n}\n.tk-hero__subtitle[data-v-7a587d10] {\n  margin: 4px 0 0;\n  font-size: 13.5px;\n  color: rgba(255, 255, 255, 0.82);\n}\n.tk-hero__btn[data-v-7a587d10] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 20px;\n  border-radius: 11px;\n  background: #fff;\n  color: #4a37d6;\n  font-weight: 600;\n  font-size: 14px;\n  text-decoration: none;\n  transition: transform 0.18s ease, box-shadow 0.18s ease;\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);\n}\n.tk-hero__btn[data-v-7a587d10]:hover {\n  transform: translateY(-2px);\n  color: #4a37d6;\n  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.18);\n}\n.tk-hero__btn[data-v-7a587d10] svg { width: 18px; height: 18px;\n}\n.tk-hero__btn--sm[data-v-7a587d10] { padding: 9px 16px; font-size: 13px;\n}\n\n/* Stat cards */\n.tk-stat[data-v-7a587d10] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 16px;\n  background: #fff;\n  border: 1px solid #edf0f5;\n  box-shadow: 0 4px 14px rgba(20, 30, 70, 0.05);\n  cursor: pointer;\n  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;\n  position: relative;\n  overflow: hidden;\n}\n.tk-stat[data-v-7a587d10]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 26px rgba(20, 30, 70, 0.12);\n}\n.tk-stat--active[data-v-7a587d10] {\n  border-color: currentColor;\n  box-shadow: 0 12px 26px rgba(20, 30, 70, 0.14);\n}\n.tk-stat__icon[data-v-7a587d10] {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.tk-stat__icon[data-v-7a587d10] svg { width: 24px; height: 24px;\n}\n.tk-stat__body[data-v-7a587d10] { display: flex; flex-direction: column; line-height: 1.1;\n}\n.tk-stat__value[data-v-7a587d10] { font-size: 26px; font-weight: 700; color: #2b3553;\n}\n.tk-stat__label[data-v-7a587d10] { font-size: 13px; color: #8a94a6; margin-top: 2px;\n}\n.tk-stat--primary[data-v-7a587d10] { color: var(--tk-primary);\n}\n.tk-stat--primary .tk-stat__icon[data-v-7a587d10] { background: rgba(94, 114, 228, 0.12); color: var(--tk-primary);\n}\n.tk-stat--warning[data-v-7a587d10] { color: var(--tk-warning);\n}\n.tk-stat--warning .tk-stat__icon[data-v-7a587d10] { background: rgba(251, 99, 64, 0.12); color: var(--tk-warning);\n}\n.tk-stat--success[data-v-7a587d10] { color: var(--tk-success);\n}\n.tk-stat--success .tk-stat__icon[data-v-7a587d10] { background: rgba(45, 206, 137, 0.12); color: var(--tk-success);\n}\n.tk-stat--muted[data-v-7a587d10] { color: var(--tk-muted);\n}\n.tk-stat--muted .tk-stat__icon[data-v-7a587d10] { background: rgba(136, 152, 170, 0.14); color: var(--tk-muted);\n}\n\n/* Table card */\n.tk-card[data-v-7a587d10] {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #edf0f5;\n  box-shadow: 0 4px 14px rgba(20, 30, 70, 0.05);\n  overflow: hidden;\n}\n.tk-card__head[data-v-7a587d10] {\n  padding: 16px 20px;\n  border-bottom: 1px solid #f0f2f7;\n}\n.tk-filters[data-v-7a587d10] { display: flex; flex-wrap: wrap; gap: 8px;\n}\n.tk-chip[data-v-7a587d10] {\n  border: 1px solid #e2e6ef;\n  background: #f7f8fc;\n  color: #5b6478;\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.tk-chip[data-v-7a587d10]:hover { background: #eef0f7;\n}\n.tk-chip--active[data-v-7a587d10] { color: #fff; border-color: transparent; background: var(--tk-primary);\n}\n.tk-chip--active.tk-chip--warning[data-v-7a587d10] { background: var(--tk-warning);\n}\n.tk-chip--active.tk-chip--success[data-v-7a587d10] { background: var(--tk-success);\n}\n.tk-chip--active.tk-chip--muted[data-v-7a587d10] { background: var(--tk-muted);\n}\n.tk-loading[data-v-7a587d10] { padding: 60px 0; display: flex; justify-content: center;\n}\n.tk-table[data-v-7a587d10] { padding: 6px 12px 12px;\n}\n\n/* Cell styling */\n.tk-ref[data-v-7a587d10] { font-weight: 700; color: var(--tk-primary); text-decoration: none;\n}\n.tk-ref[data-v-7a587d10]:hover { text-decoration: underline;\n}\n.tk-subject[data-v-7a587d10] { color: #2b3553; font-weight: 500; text-decoration: none;\n}\n.tk-subject[data-v-7a587d10]:hover { color: var(--tk-primary);\n}\n.tk-cat[data-v-7a587d10] { color: #5b6478; font-size: 13px;\n}\n.tk-date[data-v-7a587d10] { color: #8a94a6; font-size: 13px;\n}\n.tk-pill[data-v-7a587d10] { font-weight: 600; border-radius: 12px;\n}\n.tk-tag[data-v-7a587d10] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 11px;\n  border-radius: 20px;\n  font-size: 12.5px;\n  font-weight: 600;\n}\n.tk-dot[data-v-7a587d10] { width: 7px; height: 7px; border-radius: 50%; background: currentColor; display: inline-block;\n}\n.tk-tag--status-open[data-v-7a587d10] { background: rgba(245, 54, 92, 0.12); color: #f5365c;\n}\n.tk-tag--status-pending[data-v-7a587d10] { background: rgba(251, 99, 64, 0.12); color: #fb6340;\n}\n.tk-tag--status-resolved[data-v-7a587d10] { background: rgba(45, 206, 137, 0.12); color: #2dce89;\n}\n.tk-tag--status-closed[data-v-7a587d10] { background: rgba(136, 152, 170, 0.14); color: #8898aa;\n}\n.tk-tag--pri-urgent[data-v-7a587d10] { background: rgba(245, 54, 92, 0.12); color: #f5365c;\n}\n.tk-tag--pri-high[data-v-7a587d10] { background: rgba(251, 99, 64, 0.12); color: #fb6340;\n}\n.tk-tag--pri-medium[data-v-7a587d10] { background: rgba(17, 205, 239, 0.12); color: #11cdef;\n}\n.tk-tag--pri-low[data-v-7a587d10] { background: rgba(45, 206, 137, 0.12); color: #2dce89;\n}\n.tk-action[data-v-7a587d10] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  background: rgba(94, 114, 228, 0.1);\n  color: var(--tk-primary);\n  transition: all 0.15s ease;\n}\n.tk-action[data-v-7a587d10]:hover { background: var(--tk-primary); color: #fff;\n}\n.tk-action[data-v-7a587d10] svg { width: 18px; height: 18px;\n}\n\n/* Empty state */\n.tk-empty[data-v-7a587d10] { text-align: center; padding: 50px 20px;\n}\n.tk-empty__icon[data-v-7a587d10] {\n  width: 72px;\n  height: 72px;\n  margin: 0 auto 16px;\n  border-radius: 50%;\n  background: rgba(94, 114, 228, 0.1);\n  color: var(--tk-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tk-empty__icon[data-v-7a587d10] svg { width: 34px; height: 34px;\n}\n.tk-empty__title[data-v-7a587d10] { color: #2b3553; font-weight: 600; margin-bottom: 6px;\n}\n.tk-empty__desc[data-v-7a587d10] { color: #8a94a6; font-size: 14px; margin-bottom: 0;\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/TicketsList.vue?vue&type=style&index=0&id=7a587d10&scoped=true&lang=css"
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/TicketsList.vue?vue&type=style&index=0&id=7a587d10&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketsList_vue_vue_type_style_index_0_id_7a587d10_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TicketsList.vue?vue&type=style&index=0&id=7a587d10&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/TicketsList.vue?vue&type=style&index=0&id=7a587d10&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketsList_vue_vue_type_style_index_0_id_7a587d10_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketsList_vue_vue_type_style_index_0_id_7a587d10_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/views/app/pages/support/TicketsList.vue"
/*!***************************************************************!*\
  !*** ./resources/src/views/app/pages/support/TicketsList.vue ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TicketsList_vue_vue_type_template_id_7a587d10_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TicketsList.vue?vue&type=template&id=7a587d10&scoped=true */ "./resources/src/views/app/pages/support/TicketsList.vue?vue&type=template&id=7a587d10&scoped=true");
/* harmony import */ var _TicketsList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TicketsList.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/support/TicketsList.vue?vue&type=script&lang=js");
/* harmony import */ var _TicketsList_vue_vue_type_style_index_0_id_7a587d10_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TicketsList.vue?vue&type=style&index=0&id=7a587d10&scoped=true&lang=css */ "./resources/src/views/app/pages/support/TicketsList.vue?vue&type=style&index=0&id=7a587d10&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TicketsList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TicketsList_vue_vue_type_template_id_7a587d10_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _TicketsList_vue_vue_type_template_id_7a587d10_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7a587d10",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/support/TicketsList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/support/TicketsList.vue?vue&type=script&lang=js"
/*!***************************************************************************************!*\
  !*** ./resources/src/views/app/pages/support/TicketsList.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketsList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TicketsList.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/TicketsList.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketsList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/support/TicketsList.vue?vue&type=template&id=7a587d10&scoped=true"
/*!*********************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/support/TicketsList.vue?vue&type=template&id=7a587d10&scoped=true ***!
  \*********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketsList_vue_vue_type_template_id_7a587d10_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketsList_vue_vue_type_template_id_7a587d10_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketsList_vue_vue_type_template_id_7a587d10_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TicketsList.vue?vue&type=template&id=7a587d10&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/TicketsList.vue?vue&type=template&id=7a587d10&scoped=true");


/***/ },

/***/ "./resources/src/views/app/pages/support/TicketsList.vue?vue&type=style&index=0&id=7a587d10&scoped=true&lang=css"
/*!***********************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/support/TicketsList.vue?vue&type=style&index=0&id=7a587d10&scoped=true&lang=css ***!
  \***********************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketsList_vue_vue_type_style_index_0_id_7a587d10_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TicketsList.vue?vue&type=style&index=0&id=7a587d10&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/TicketsList.vue?vue&type=style&index=0&id=7a587d10&scoped=true&lang=css");


/***/ }

}]);