"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["marketing_campaign_details"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/campaign_details.vue?vue&type=script&lang=js"
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/campaign_details.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Campaign Details"
  },
  data: function data() {
    return {
      isLoading: true,
      campaign: null,
      recipients: [],
      recipientStats: {}
    };
  },
  computed: {
    canEdit: function canEdit() {
      return this.campaign && ["draft", "scheduled", "failed", "cancelled"].includes(this.campaign.status);
    },
    canSend: function canSend() {
      return this.campaign && ["draft", "scheduled", "failed"].includes(this.campaign.status);
    }
  },
  methods: {
    format_label: function format_label(v) {
      return v ? String(v).replace(/_/g, " ") : "-";
    },
    type_label: function type_label(t) {
      var map = {
        sms: "SMS",
        email: "Email",
        whatsapp: "WhatsApp"
      };
      return map[t] || t;
    },
    short_dt: function short_dt(d) {
      return d ? String(d).replace("T", " ").substring(0, 16) : "-";
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
    recipient_class: function recipient_class(s) {
      var map = {
        pending: "badge-outline-warning",
        sent: "badge-outline-success",
        delivered: "badge-outline-success",
        failed: "badge-outline-danger",
        skipped: "badge-outline-secondary"
      };
      return map[s] || "badge-outline-secondary";
    },
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    Edit_Campaign: function Edit_Campaign() {
      this.$router.push({
        name: "marketing_edit_campaign",
        params: {
          id: this.campaign.id
        }
      });
    },
    Send_Campaign: function Send_Campaign() {
      var _this = this;
      this.$swal({
        title: this.$t("Send_Campaign"),
        text: this.$t("Send_Now") + " ?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: this.$t("Send_Now")
      }).then(function (result) {
        if (result.value) {
          axios.post("marketing/campaigns/" + _this.campaign.id + "/send").then(function () {
            _this.makeToast("success", _this.$t("Created_in_successfully"), _this.$t("Success"));
            _this.Get_Campaign();
          })["catch"](function () {
            _this.makeToast("danger", _this.$t("InvalidData"), _this.$t("Failed"));
          });
        }
      });
    },
    Get_Campaign: function Get_Campaign() {
      var _this2 = this;
      axios.get("marketing/campaigns/" + this.$route.params.id).then(function (_ref) {
        var data = _ref.data;
        _this2.campaign = data.campaign;
        _this2.recipients = data.recipients || [];
        _this2.recipientStats = data.recipient_stats || {};
        _this2.isLoading = false;
      })["catch"](function () {
        _this2.makeToast("danger", _this2.$t("InvalidData"), _this2.$t("Failed"));
        _this2.isLoading = false;
      });
    }
  },
  created: function created() {
    this.Get_Campaign();
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/campaign_details.vue?vue&type=template&id=01f21f79&scoped=true"
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/campaign_details.vue?vue&type=template&id=01f21f79&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("Campaign_Details"),
      folder: _vm.$t("Marketing_Management")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading && _vm.campaign ? _c("div", [_c("b-row", [_c("b-col", {
    attrs: {
      md: "8"
    }
  }, [_c("b-card", [_c("div", {
    staticClass: "d-flex justify-content-between align-items-start mb-3"
  }, [_c("div", [_c("h4", {
    staticClass: "mb-1"
  }, [_vm._v(_vm._s(_vm.campaign.title))]), _vm._v(" "), _c("span", {
    staticClass: "badge badge-outline-info mr-1"
  }, [_vm._v(_vm._s(_vm.type_label(_vm.campaign.type)))]), _vm._v(" "), _c("span", {
    staticClass: "badge",
    "class": _vm.status_class(_vm.campaign.status)
  }, [_vm._v(_vm._s(_vm.format_label(_vm.campaign.status)))])]), _vm._v(" "), _c("div", [_vm.canSend ? _c("b-button", {
    attrs: {
      size: "sm",
      variant: "info"
    },
    on: {
      click: function click($event) {
        return _vm.Send_Campaign();
      }
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "send"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Send_Now")) + "\n              ")], 1) : _vm._e(), _vm._v(" "), _vm.canEdit ? _c("b-button", {
    attrs: {
      size: "sm",
      variant: "success"
    },
    on: {
      click: function click($event) {
        return _vm.Edit_Campaign();
      }
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "pencil"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Edit")) + "\n              ")], 1) : _vm._e()], 1)]), _vm._v(" "), _vm.campaign.description ? _c("p", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.campaign.description))]) : _vm._e(), _vm._v(" "), _vm.campaign.type === "email" && _vm.campaign.subject ? _c("b-row", {
    staticClass: "mb-2"
  }, [_c("b-col", {
    staticClass: "font-weight-bold",
    attrs: {
      md: "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Email_Subject")))]), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "9"
    }
  }, [_vm._v(_vm._s(_vm.campaign.subject))])], 1) : _vm._e(), _vm._v(" "), _c("b-row", {
    staticClass: "mb-2"
  }, [_c("b-col", {
    staticClass: "font-weight-bold",
    attrs: {
      md: "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Message_Content")))]), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "9"
    }
  }, [_c("pre", {
    staticClass: "mkt-msg"
  }, [_vm._v(_vm._s(_vm.campaign.message_content))])])], 1), _vm._v(" "), _vm.campaign.attachment ? _c("b-row", {
    staticClass: "mb-2"
  }, [_c("b-col", {
    staticClass: "font-weight-bold",
    attrs: {
      md: "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Upload_Attachment")))]), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "9"
    }
  }, [_c("a", {
    attrs: {
      href: "/" + _vm.campaign.attachment,
      target: "_blank"
    }
  }, [_vm._v(_vm._s(_vm.campaign.attachment))])])], 1) : _vm._e(), _vm._v(" "), _c("b-row", {
    staticClass: "mb-2"
  }, [_c("b-col", {
    staticClass: "font-weight-bold",
    attrs: {
      md: "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Scheduled_At")))]), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "9"
    }
  }, [_vm._v(_vm._s(_vm.campaign.send_immediately ? _vm.$t("Send_Immediately") : _vm.short_dt(_vm.campaign.scheduled_at)))])], 1), _vm._v(" "), _vm.campaign.segment ? _c("b-row", {
    staticClass: "mb-2"
  }, [_c("b-col", {
    staticClass: "font-weight-bold",
    attrs: {
      md: "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Segment")))]), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "9"
    }
  }, [_vm._v(_vm._s(_vm.campaign.segment.name))])], 1) : _vm._e()], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-card", {
    attrs: {
      title: _vm.$t("Delivery_Status")
    }
  }, [_c("ul", {
    staticClass: "list-unstyled mkt-stats"
  }, [_c("li", [_c("span", [_vm._v(_vm._s(_vm.$t("Total_Recipients")))]), _c("strong", [_vm._v(_vm._s(_vm.campaign.total_recipients))])]), _vm._v(" "), _c("li", [_c("span", {
    staticClass: "text-success"
  }, [_vm._v(_vm._s(_vm.$t("Sent")))]), _c("strong", [_vm._v(_vm._s(_vm.campaign.sent_count))])]), _vm._v(" "), _c("li", [_c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.$t("Failed")))]), _c("strong", [_vm._v(_vm._s(_vm.campaign.failed_count))])]), _vm._v(" "), _c("li", [_c("span", {
    staticClass: "text-warning"
  }, [_vm._v(_vm._s(_vm.$t("Pending")))]), _c("strong", [_vm._v(_vm._s(_vm.campaign.pending_count))])])])])], 1)], 1), _vm._v(" "), _c("b-card", {
    attrs: {
      title: _vm.$t("Recipients")
    }
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-hover"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.$t("Name") || "Name"))]), _vm._v(" "), _vm.campaign.type === "email" ? _c("th", [_vm._v(_vm._s(_vm.$t("Email")))]) : _c("th", [_vm._v(_vm._s(_vm.$t("Phone") || "Phone"))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.$t("Status")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.$t("Sent")))])])]), _vm._v(" "), _c("tbody", [_vm.recipients.length === 0 ? _c("tr", [_c("td", {
    staticClass: "text-center text-muted",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("-")])]) : _vm._e(), _vm._v(" "), _vm._l(_vm.recipients, function (r) {
    return _c("tr", {
      key: r.id
    }, [_c("td", [_vm._v(_vm._s(r.name))]), _vm._v(" "), _vm.campaign.type === "email" ? _c("td", [_vm._v(_vm._s(r.email))]) : _c("td", [_vm._v(_vm._s(r.phone))]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "badge",
      "class": _vm.recipient_class(r.status)
    }, [_vm._v(_vm._s(_vm.format_label(r.status)))]), _vm._v(" "), r.error_message ? _c("small", {
      staticClass: "text-danger d-block"
    }, [_vm._v(_vm._s(r.error_message))]) : _vm._e()]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.short_dt(r.sent_at)))])]);
  })], 2)])])])], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/campaign_details.vue?vue&type=style&index=0&id=01f21f79&scoped=true&lang=css"
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/campaign_details.vue?vue&type=style&index=0&id=01f21f79&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.mkt-msg[data-v-01f21f79] { white-space: pre-wrap; background: #f7f8fa; padding: 10px; border-radius: 6px; font-family: inherit;\n}\n.mkt-stats li[data-v-01f21f79] { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f0f0f0;\n}\r\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/campaign_details.vue?vue&type=style&index=0&id=01f21f79&scoped=true&lang=css"
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/campaign_details.vue?vue&type=style&index=0&id=01f21f79&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_campaign_details_vue_vue_type_style_index_0_id_01f21f79_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./campaign_details.vue?vue&type=style&index=0&id=01f21f79&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/campaign_details.vue?vue&type=style&index=0&id=01f21f79&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_campaign_details_vue_vue_type_style_index_0_id_01f21f79_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_campaign_details_vue_vue_type_style_index_0_id_01f21f79_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/views/app/pages/marketing/campaign_details.vue"
/*!**********************************************************************!*\
  !*** ./resources/src/views/app/pages/marketing/campaign_details.vue ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _campaign_details_vue_vue_type_template_id_01f21f79_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./campaign_details.vue?vue&type=template&id=01f21f79&scoped=true */ "./resources/src/views/app/pages/marketing/campaign_details.vue?vue&type=template&id=01f21f79&scoped=true");
/* harmony import */ var _campaign_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campaign_details.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/marketing/campaign_details.vue?vue&type=script&lang=js");
/* harmony import */ var _campaign_details_vue_vue_type_style_index_0_id_01f21f79_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./campaign_details.vue?vue&type=style&index=0&id=01f21f79&scoped=true&lang=css */ "./resources/src/views/app/pages/marketing/campaign_details.vue?vue&type=style&index=0&id=01f21f79&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _campaign_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _campaign_details_vue_vue_type_template_id_01f21f79_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _campaign_details_vue_vue_type_template_id_01f21f79_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "01f21f79",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/marketing/campaign_details.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/marketing/campaign_details.vue?vue&type=script&lang=js"
/*!**********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/marketing/campaign_details.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_campaign_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./campaign_details.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/campaign_details.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_campaign_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/marketing/campaign_details.vue?vue&type=template&id=01f21f79&scoped=true"
/*!****************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/marketing/campaign_details.vue?vue&type=template&id=01f21f79&scoped=true ***!
  \****************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_campaign_details_vue_vue_type_template_id_01f21f79_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_campaign_details_vue_vue_type_template_id_01f21f79_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_campaign_details_vue_vue_type_template_id_01f21f79_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./campaign_details.vue?vue&type=template&id=01f21f79&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/campaign_details.vue?vue&type=template&id=01f21f79&scoped=true");


/***/ },

/***/ "./resources/src/views/app/pages/marketing/campaign_details.vue?vue&type=style&index=0&id=01f21f79&scoped=true&lang=css"
/*!******************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/marketing/campaign_details.vue?vue&type=style&index=0&id=01f21f79&scoped=true&lang=css ***!
  \******************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_campaign_details_vue_vue_type_style_index_0_id_01f21f79_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./campaign_details.vue?vue&type=style&index=0&id=01f21f79&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/campaign_details.vue?vue&type=style&index=0&id=01f21f79&scoped=true&lang=css");


/***/ }

}]);