"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["marketing_dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/dashboard.vue?vue&type=script&lang=js"
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/dashboard.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Marketing Dashboard"
  },
  data: function data() {
    return {
      isLoading: true,
      stats: {
        total_campaigns: 0,
        total_messages: 0,
        total_emails: 0,
        total_whatsapp: 0,
        total_sms: 0,
        failed_messages: 0,
        by_status: {},
        by_type: {},
        monthly: [],
        recent: []
      }
    };
  },
  computed: {
    statCards: function statCards() {
      return [{
        label: "Total_Campaigns",
        value: this.stats.total_campaigns,
        icon: "megaphone",
        color: "primary"
      }, {
        label: "Total_Messages_Sent",
        value: this.stats.total_messages,
        icon: "send",
        color: "success"
      }, {
        label: "Total_Emails_Sent",
        value: this.stats.total_emails,
        icon: "mail",
        color: "info"
      }, {
        label: "Total_WhatsApp_Sent",
        value: this.stats.total_whatsapp,
        icon: "message-circle",
        color: "teal"
      }, {
        label: "Total_SMS_Sent",
        value: this.stats.total_sms,
        icon: "message-square",
        color: "warning"
      }, {
        label: "Failed_Messages",
        value: this.stats.failed_messages,
        icon: "alert-triangle",
        color: "danger"
      }];
    },
    statusList: function statusList() {
      var o = this.stats.by_status || {};
      return Object.keys(o).map(function (k) {
        return {
          key: k,
          value: o[k]
        };
      });
    },
    maxMonthly: function maxMonthly() {
      var max = 1;
      (this.stats.monthly || []).forEach(function (m) {
        max = Math.max(max, m.sms, m.email, m.whatsapp);
      });
      return max;
    }
  },
  methods: {
    format_label: function format_label(v) {
      return v ? String(v).replace(/_/g, " ") : "-";
    },
    status_class: function status_class(s) {
      var map = {
        draft: "badge-outline-secondary",
        scheduled: "badge-outline-primary",
        sending: "badge-outline-warning",
        sent: "badge-outline-success",
        failed: "badge-outline-danger",
        cancelled: "badge-outline-dark"
      };
      return map[s] || "badge-outline-secondary";
    },
    barStyle: function barStyle(v) {
      var h = Math.round(v / this.maxMonthly * 100);
      return {
        height: Math.max(2, h) + "%"
      };
    },
    View_Details: function View_Details(id) {
      this.$router.push({
        name: "marketing_campaign_details",
        params: {
          id: id
        }
      });
    },
    Get_Dashboard: function Get_Dashboard() {
      var _this = this;
      axios.get("marketing/dashboard").then(function (_ref) {
        var data = _ref.data;
        _this.stats = data;
        _this.isLoading = false;
      })["catch"](function () {
        setTimeout(function () {
          _this.isLoading = false;
        }, 500);
      });
    }
  },
  created: function created() {
    this.Get_Dashboard();
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/dashboard.vue?vue&type=template&id=25772a9e&scoped=true"
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/dashboard.vue?vue&type=template&id=25772a9e&scoped=true ***!
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
    staticClass: "main-content"
  }, [_c("breadcumb", {
    attrs: {
      page: _vm.$t("Marketing_Dashboard"),
      folder: _vm.$t("Marketing_Management")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("div", [_c("b-row", _vm._l(_vm.statCards, function (card) {
    return _c("b-col", {
      key: card.label,
      staticClass: "mb-4",
      attrs: {
        md: "3",
        sm: "6"
      }
    }, [_c("b-card", {
      staticClass: "mkt-stat",
      "class": "mkt-stat--" + card.color
    }, [_c("div", {
      staticClass: "mkt-stat__icon"
    }, [_c("lucide-icon", {
      attrs: {
        name: card.icon,
        size: "26"
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "mkt-stat__value"
    }, [_vm._v(_vm._s(card.value))]), _vm._v(" "), _c("div", {
      staticClass: "mkt-stat__label"
    }, [_vm._v(_vm._s(_vm.$t(card.label)))])])], 1);
  }), 1), _vm._v(" "), _c("b-row", [_c("b-col", {
    staticClass: "mb-4",
    attrs: {
      md: "8"
    }
  }, [_c("b-card", {
    attrs: {
      title: _vm.$t("Marketing_Statistics")
    }
  }, [_c("div", {
    staticClass: "mkt-chart"
  }, _vm._l(_vm.stats.monthly, function (m) {
    return _c("div", {
      key: m.label,
      staticClass: "mkt-chart__col"
    }, [_c("div", {
      staticClass: "mkt-chart__bars"
    }, [_c("div", {
      staticClass: "mkt-chart__bar bg-primary",
      style: _vm.barStyle(m.sms),
      attrs: {
        title: "SMS: " + m.sms
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "mkt-chart__bar bg-success",
      style: _vm.barStyle(m.email),
      attrs: {
        title: "Email: " + m.email
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "mkt-chart__bar bg-info",
      style: _vm.barStyle(m.whatsapp),
      attrs: {
        title: "WhatsApp: " + m.whatsapp
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "mkt-chart__label"
    }, [_vm._v(_vm._s(m.label))])]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "mkt-legend"
  }, [_c("span", [_c("i", {
    staticClass: "dot bg-primary"
  }), _vm._v(" " + _vm._s(_vm.$t("SMS")))]), _vm._v(" "), _c("span", [_c("i", {
    staticClass: "dot bg-success"
  }), _vm._v(" " + _vm._s(_vm.$t("Email")))]), _vm._v(" "), _c("span", [_c("i", {
    staticClass: "dot bg-info"
  }), _vm._v(" " + _vm._s(_vm.$t("WhatsApp")))])])])], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-4",
    attrs: {
      md: "4"
    }
  }, [_c("b-card", {
    attrs: {
      title: _vm.$t("Campaigns_By_Status")
    }
  }, [_vm.statusList.length === 0 ? _c("div", {
    staticClass: "text-muted text-center p-3"
  }, [_vm._v(_vm._s(_vm.$t("No_Campaigns")))]) : _vm._e(), _vm._v(" "), _c("ul", {
    staticClass: "list-unstyled mkt-statuslist"
  }, _vm._l(_vm.statusList, function (s) {
    return _c("li", {
      key: s.key
    }, [_c("span", {
      staticClass: "badge",
      "class": _vm.status_class(s.key)
    }, [_vm._v(_vm._s(_vm.format_label(s.key)))]), _vm._v(" "), _c("span", {
      staticClass: "float-right font-weight-bold"
    }, [_vm._v(_vm._s(s.value))])]);
  }), 0)])], 1)], 1), _vm._v(" "), _c("b-card", {
    attrs: {
      title: _vm.$t("Recent_Campaign_Activity")
    }
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-hover"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.$t("Campaign_Title")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.$t("Type")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.$t("Status")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.$t("Total_Recipients")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.$t("Sent")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.$t("Failed")))])])]), _vm._v(" "), _c("tbody", [_vm.stats.recent && _vm.stats.recent.length === 0 ? _c("tr", [_c("td", {
    staticClass: "text-center text-muted",
    attrs: {
      colspan: "6"
    }
  }, [_vm._v(_vm._s(_vm.$t("No_Campaigns")))])]) : _vm._e(), _vm._v(" "), _vm._l(_vm.stats.recent, function (c) {
    return _c("tr", {
      key: c.id,
      staticClass: "cursor-pointer",
      on: {
        click: function click($event) {
          return _vm.View_Details(c.id);
        }
      }
    }, [_c("td", {
      staticClass: "text-primary font-weight-bold"
    }, [_vm._v(_vm._s(c.title))]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "badge badge-outline-info"
    }, [_vm._v(_vm._s(_vm.format_label(c.type)))])]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "badge",
      "class": _vm.status_class(c.status)
    }, [_vm._v(_vm._s(_vm.format_label(c.status)))])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(c.total_recipients))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(c.sent_count))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(c.failed_count))])]);
  })], 2)])])])], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/dashboard.vue?vue&type=style&index=0&id=25772a9e&scoped=true&lang=css"
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/dashboard.vue?vue&type=style&index=0&id=25772a9e&scoped=true&lang=css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.mkt-stat[data-v-25772a9e] { text-align: center; border-radius: 10px;\n}\n.mkt-stat__icon[data-v-25772a9e] { display: inline-flex; align-items: center; justify-content: center; width: 52px; height: 52px; border-radius: 50%; margin-bottom: 8px; color: #fff;\n}\n.mkt-stat__value[data-v-25772a9e] { font-size: 1.6rem; font-weight: 700;\n}\n.mkt-stat__label[data-v-25772a9e] { color: #8a94a6; font-size: 0.85rem;\n}\n.mkt-stat--primary .mkt-stat__icon[data-v-25772a9e] { background: #663cdc;\n}\n.mkt-stat--success .mkt-stat__icon[data-v-25772a9e] { background: #21b573;\n}\n.mkt-stat--info .mkt-stat__icon[data-v-25772a9e] { background: #2196f3;\n}\n.mkt-stat--teal .mkt-stat__icon[data-v-25772a9e] { background: #1eb7a8;\n}\n.mkt-stat--warning .mkt-stat__icon[data-v-25772a9e] { background: #f7b731;\n}\n.mkt-stat--danger .mkt-stat__icon[data-v-25772a9e] { background: #f3556d;\n}\n.mkt-chart[data-v-25772a9e] { display: flex; align-items: flex-end; height: 220px; gap: 14px; padding: 10px 0;\n}\n.mkt-chart__col[data-v-25772a9e] { flex: 1; display: flex; flex-direction: column; align-items: center; height: 100%;\n}\n.mkt-chart__bars[data-v-25772a9e] { flex: 1; display: flex; align-items: flex-end; gap: 3px; width: 100%; justify-content: center;\n}\n.mkt-chart__bar[data-v-25772a9e] { width: 14px; border-radius: 3px 3px 0 0; transition: height .3s;\n}\n.mkt-chart__label[data-v-25772a9e] { font-size: 0.75rem; color: #8a94a6; margin-top: 6px;\n}\n.mkt-legend[data-v-25772a9e] { display: flex; gap: 18px; justify-content: center; margin-top: 10px; font-size: 0.8rem; color: #8a94a6;\n}\n.mkt-legend .dot[data-v-25772a9e] { display: inline-block; width: 10px; height: 10px; border-radius: 50%; margin-right: 4px;\n}\n.mkt-statuslist li[data-v-25772a9e] { padding: 7px 0; border-bottom: 1px solid #f0f0f0;\n}\r\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/dashboard.vue?vue&type=style&index=0&id=25772a9e&scoped=true&lang=css"
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/dashboard.vue?vue&type=style&index=0&id=25772a9e&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_25772a9e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=style&index=0&id=25772a9e&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/dashboard.vue?vue&type=style&index=0&id=25772a9e&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_25772a9e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_25772a9e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/views/app/pages/marketing/dashboard.vue"
/*!***************************************************************!*\
  !*** ./resources/src/views/app/pages/marketing/dashboard.vue ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dashboard_vue_vue_type_template_id_25772a9e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=25772a9e&scoped=true */ "./resources/src/views/app/pages/marketing/dashboard.vue?vue&type=template&id=25772a9e&scoped=true");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/marketing/dashboard.vue?vue&type=script&lang=js");
/* harmony import */ var _dashboard_vue_vue_type_style_index_0_id_25772a9e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.vue?vue&type=style&index=0&id=25772a9e&scoped=true&lang=css */ "./resources/src/views/app/pages/marketing/dashboard.vue?vue&type=style&index=0&id=25772a9e&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _dashboard_vue_vue_type_template_id_25772a9e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _dashboard_vue_vue_type_template_id_25772a9e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "25772a9e",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/marketing/dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/marketing/dashboard.vue?vue&type=script&lang=js"
/*!***************************************************************************************!*\
  !*** ./resources/src/views/app/pages/marketing/dashboard.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/dashboard.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/marketing/dashboard.vue?vue&type=template&id=25772a9e&scoped=true"
/*!*********************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/marketing/dashboard.vue?vue&type=template&id=25772a9e&scoped=true ***!
  \*********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_25772a9e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_25772a9e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_25772a9e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=template&id=25772a9e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/dashboard.vue?vue&type=template&id=25772a9e&scoped=true");


/***/ },

/***/ "./resources/src/views/app/pages/marketing/dashboard.vue?vue&type=style&index=0&id=25772a9e&scoped=true&lang=css"
/*!***********************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/marketing/dashboard.vue?vue&type=style&index=0&id=25772a9e&scoped=true&lang=css ***!
  \***********************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_25772a9e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=style&index=0&id=25772a9e&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/dashboard.vue?vue&type=style&index=0&id=25772a9e&scoped=true&lang=css");


/***/ }

}]);