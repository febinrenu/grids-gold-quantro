"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["support_ticket_detail"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/TicketDetail.vue?vue&type=script&lang=js"
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/TicketDetail.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Support Ticket"
  },
  data: function data() {
    return {
      isLoading: true,
      sending: false,
      ticket: null,
      replyBody: "",
      replyFiles: [],
      pollTimer: null
    };
  },
  computed: {
    ticketId: function ticketId() {
      return this.$route.params.id;
    }
  },
  methods: {
    statusVariant: function statusVariant(s) {
      return {
        open: "danger",
        pending: "warning",
        resolved: "success",
        closed: "secondary"
      }[s] || "secondary";
    },
    priorityVariant: function priorityVariant(p) {
      return {
        urgent: "danger",
        high: "warning",
        medium: "info",
        low: "success"
      }[p] || "info";
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
    scrollToBottom: function scrollToBottom() {
      var _this = this;
      this.$nextTick(function () {
        var el = _this.$refs.thread;
        if (el) el.scrollTop = el.scrollHeight;
      });
    },
    fetchTicket: function fetchTicket() {
      var _this2 = this;
      var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (initial) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      }
      return axios.get("support/tickets/" + this.ticketId).then(function (response) {
        var prevCount = _this2.ticket && _this2.ticket.messages ? _this2.ticket.messages.length : 0;
        _this2.ticket = response.data.ticket;
        _this2.isLoading = false;
        if (initial || _this2.ticket.messages && _this2.ticket.messages.length !== prevCount) {
          _this2.scrollToBottom();
        }
        if (initial) nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function () {
        _this2.isLoading = false;
        if (initial) {
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
          _this2.$router.push("/app/support/tickets");
        }
      });
    },
    sendReply: function sendReply() {
      var _this3 = this;
      if (!this.replyBody) return;
      this.sending = true;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      var data = new FormData();
      data.append("message", this.replyBody);
      if (this.replyFiles && this.replyFiles.length) {
        this.replyFiles.forEach(function (f) {
          return data.append("attachments[]", f);
        });
      }
      axios.post("support/tickets/" + this.ticketId + "/reply", data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function () {
        _this3.replyBody = "";
        _this3.replyFiles = [];
        _this3.sending = false;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this3.makeToast("success", _this3.$t("reply_sent_success"), _this3.$t("Success"));
        _this3.fetchTicket();
      })["catch"](function () {
        _this3.sending = false;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this3.makeToast("danger", _this3.$t("please_fill_required"), _this3.$t("Failed"));
      });
    },
    startPolling: function startPolling() {
      var _this4 = this;
      this.stopPolling();
      // Near-real-time: refresh the thread every 12s while the tab is visible.
      this.pollTimer = setInterval(function () {
        if (typeof document !== "undefined" && document.hidden) return;
        _this4.fetchTicket();
      }, 12000);
    },
    stopPolling: function stopPolling() {
      if (this.pollTimer) {
        clearInterval(this.pollTimer);
        this.pollTimer = null;
      }
    },
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    }
  },
  created: function created() {
    var _this5 = this;
    this.fetchTicket(true).then(function () {
      return _this5.startPolling();
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.stopPolling();
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/TicketDetail.vue?vue&type=template&id=30501e8c&scoped=true"
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/TicketDetail.vue?vue&type=template&id=30501e8c&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.ticket ? _vm.ticket.ticket_number : _vm.$t("ticket"),
      folder: _vm.$t("support_center")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm.ticket ? _c("div", [_c("b-row", [_c("b-col", {
    attrs: {
      lg: "8",
      md: "12"
    }
  }, [_c("b-card", {
    attrs: {
      "no-body": ""
    }
  }, [_c("div", {
    staticClass: "card-header bg-transparent d-flex justify-content-between align-items-center flex-wrap"
  }, [_c("div", [_c("h5", {
    staticClass: "m-0"
  }, [_vm._v(_vm._s(_vm.ticket.subject))]), _vm._v(" "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v("\n                " + _vm._s(_vm.ticket.ticket_number) + " · " + _vm._s(_vm.$t("cat_" + _vm.ticket.category)) + " · " + _vm._s(_vm.$t("opened_on")) + " " + _vm._s(_vm.formatDateTime(_vm.ticket.created_at)) + "\n              ")])]), _vm._v(" "), _c("div", [_c("b-badge", {
    staticClass: "mr-1",
    attrs: {
      variant: _vm.priorityVariant(_vm.ticket.priority)
    }
  }, [_vm._v(_vm._s(_vm.$t("pri_" + _vm.ticket.priority)))]), _vm._v(" "), _c("b-badge", {
    attrs: {
      variant: _vm.statusVariant(_vm.ticket.status)
    }
  }, [_vm._v(_vm._s(_vm.$t("status_" + _vm.ticket.status)))])], 1)]), _vm._v(" "), _c("div", {
    ref: "thread",
    staticClass: "card-body st-thread"
  }, _vm._l(_vm.ticket.messages, function (m) {
    return _c("div", {
      key: m.id,
      staticClass: "st-row",
      "class": m.author_type === "tenant" ? "st-row-me" : "st-row-them"
    }, [_c("div", {
      staticClass: "st-bubble",
      "class": m.author_type === "tenant" ? "st-bubble-me" : "st-bubble-them"
    }, [_c("div", {
      staticClass: "st-bubble-head"
    }, [_c("span", {
      staticClass: "font-weight-bold"
    }, [_vm._v("\n                    " + _vm._s(m.author_type === "tenant" ? m.author_name || _vm.$t("you") : m.author_name || _vm.$t("support_team")) + "\n                  ")]), _vm._v(" "), _c("span", {
      staticClass: "st-time"
    }, [_vm._v(_vm._s(_vm.formatDateTime(m.created_at)))])]), _vm._v(" "), _c("div", {
      staticClass: "st-bubble-body"
    }, [_vm._v(_vm._s(m.body))]), _vm._v(" "), m.attachments && m.attachments.length ? _c("div", {
      staticClass: "st-files"
    }, [_vm._l(m.attachments, function (a) {
      return [a.is_image ? _c("a", {
        key: a.id,
        staticClass: "st-thumb",
        attrs: {
          href: a.url,
          target: "_blank"
        }
      }, [_c("img", {
        attrs: {
          src: a.url,
          alt: a.original_name
        }
      })]) : _c("a", {
        key: a.id,
        staticClass: "st-file-link",
        attrs: {
          href: a.url,
          target: "_blank"
        }
      }, [_c("lucide-icon", {
        attrs: {
          name: "paperclip"
        }
      }), _vm._v(" " + _vm._s(a.original_name) + "\n                    ")], 1)];
    })], 2) : _vm._e()])]);
  }), 0), _vm._v(" "), _vm.ticket.status !== "closed" ? _c("div", {
    staticClass: "card-footer bg-transparent"
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.sendReply.apply(null, arguments);
      }
    }
  }, [_c("b-form-textarea", {
    attrs: {
      rows: "3",
      placeholder: _vm.$t("write_reply")
    },
    model: {
      value: _vm.replyBody,
      callback: function callback($$v) {
        _vm.replyBody = $$v;
      },
      expression: "replyBody"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between align-items-center mt-2 flex-wrap"
  }, [_c("b-form-file", {
    staticClass: "st-reply-file",
    attrs: {
      multiple: "",
      size: "sm",
      placeholder: _vm.$t("attach_files"),
      accept: ".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.gif,.txt,.csv,.zip"
    },
    model: {
      value: _vm.replyFiles,
      callback: function callback($$v) {
        _vm.replyFiles = $$v;
      },
      expression: "replyFiles"
    }
  }), _vm._v(" "), _c("b-button", {
    attrs: {
      type: "submit",
      variant: "primary",
      size: "sm",
      disabled: _vm.sending || !_vm.replyBody
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "send"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("send_reply")) + "\n                ")], 1)], 1)], 1)], 1) : _c("div", {
    staticClass: "card-footer bg-transparent text-center text-muted"
  }, [_vm._v("\n            " + _vm._s(_vm.$t("status_closed")) + "\n          ")])])], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "4",
      md: "12"
    }
  }, [_c("b-card", [_c("ul", {
    staticClass: "list-unstyled st-meta m-0"
  }, [_c("li", [_c("span", [_vm._v(_vm._s(_vm.$t("status")))]), _c("b-badge", {
    attrs: {
      variant: _vm.statusVariant(_vm.ticket.status)
    }
  }, [_vm._v(_vm._s(_vm.$t("status_" + _vm.ticket.status)))])], 1), _vm._v(" "), _c("li", [_c("span", [_vm._v(_vm._s(_vm.$t("priority")))]), _c("b-badge", {
    attrs: {
      variant: _vm.priorityVariant(_vm.ticket.priority)
    }
  }, [_vm._v(_vm._s(_vm.$t("pri_" + _vm.ticket.priority)))])], 1), _vm._v(" "), _c("li", [_c("span", [_vm._v(_vm._s(_vm.$t("category")))]), _c("strong", [_vm._v(_vm._s(_vm.$t("cat_" + _vm.ticket.category)))])]), _vm._v(" "), _c("li", [_c("span", [_vm._v(_vm._s(_vm.$t("ticket_number")))]), _c("strong", [_vm._v(_vm._s(_vm.ticket.ticket_number))])]), _vm._v(" "), _c("li", [_c("span", [_vm._v(_vm._s(_vm.$t("opened_on")))]), _c("strong", [_vm._v(_vm._s(_vm.formatDateTime(_vm.ticket.created_at)))])])]), _vm._v(" "), _c("router-link", {
    staticClass: "btn btn-outline-secondary btn-block btn-sm mt-3",
    attrs: {
      to: "/app/support/tickets"
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "arrow-left"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("back_to_tickets")) + "\n          ")], 1)], 1)], 1)], 1)], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/TicketDetail.vue?vue&type=style&index=0&id=30501e8c&scoped=true&lang=css"
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/TicketDetail.vue?vue&type=style&index=0&id=30501e8c&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.st-thread[data-v-30501e8c] {\r\n  max-height: 55vh;\r\n  overflow-y: auto;\n}\n.st-row[data-v-30501e8c] {\r\n  display: flex;\r\n  margin-bottom: 14px;\n}\n.st-row-me[data-v-30501e8c] { justify-content: flex-end;\n}\n.st-row-them[data-v-30501e8c] { justify-content: flex-start;\n}\n.st-bubble[data-v-30501e8c] {\r\n  max-width: 78%;\r\n  padding: 10px 14px;\r\n  border-radius: 12px;\r\n  border: 1px solid #e5e7eb;\n}\n.st-bubble-me[data-v-30501e8c] { background: #eef2ff; border-color: #c7d2fe; border-bottom-right-radius: 2px;\n}\n.st-bubble-them[data-v-30501e8c] { background: #f8fafc; border-bottom-left-radius: 2px;\n}\n.st-bubble-head[data-v-30501e8c] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 12px;\r\n  margin-bottom: 4px;\r\n  font-size: 0.8rem;\n}\n.st-time[data-v-30501e8c] { color: #9ca3af; font-size: 0.72rem; white-space: nowrap;\n}\n.st-bubble-body[data-v-30501e8c] { white-space: pre-wrap; line-height: 1.5;\n}\n.st-files[data-v-30501e8c] { margin-top: 8px; display: flex; flex-wrap: wrap; gap: 8px;\n}\n.st-thumb img[data-v-30501e8c] { max-width: 120px; max-height: 120px; border-radius: 8px; border: 1px solid #e5e7eb;\n}\n.st-file-link[data-v-30501e8c] { display: inline-flex; align-items: center; gap: 4px; font-size: 0.85rem;\n}\n.st-meta li[data-v-30501e8c] { display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid #f1f5f9;\n}\n.st-meta li[data-v-30501e8c]:last-child { border-bottom: 0;\n}\n.st-meta li span[data-v-30501e8c] { color: #6b7280; font-size: 0.85rem;\n}\n.st-reply-file[data-v-30501e8c] { max-width: 320px; display: inline-block;\n}\r\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/TicketDetail.vue?vue&type=style&index=0&id=30501e8c&scoped=true&lang=css"
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/TicketDetail.vue?vue&type=style&index=0&id=30501e8c&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketDetail_vue_vue_type_style_index_0_id_30501e8c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TicketDetail.vue?vue&type=style&index=0&id=30501e8c&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/TicketDetail.vue?vue&type=style&index=0&id=30501e8c&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketDetail_vue_vue_type_style_index_0_id_30501e8c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketDetail_vue_vue_type_style_index_0_id_30501e8c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/views/app/pages/support/TicketDetail.vue"
/*!****************************************************************!*\
  !*** ./resources/src/views/app/pages/support/TicketDetail.vue ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TicketDetail_vue_vue_type_template_id_30501e8c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TicketDetail.vue?vue&type=template&id=30501e8c&scoped=true */ "./resources/src/views/app/pages/support/TicketDetail.vue?vue&type=template&id=30501e8c&scoped=true");
/* harmony import */ var _TicketDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TicketDetail.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/support/TicketDetail.vue?vue&type=script&lang=js");
/* harmony import */ var _TicketDetail_vue_vue_type_style_index_0_id_30501e8c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TicketDetail.vue?vue&type=style&index=0&id=30501e8c&scoped=true&lang=css */ "./resources/src/views/app/pages/support/TicketDetail.vue?vue&type=style&index=0&id=30501e8c&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TicketDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TicketDetail_vue_vue_type_template_id_30501e8c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _TicketDetail_vue_vue_type_template_id_30501e8c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "30501e8c",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/support/TicketDetail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/support/TicketDetail.vue?vue&type=script&lang=js"
/*!****************************************************************************************!*\
  !*** ./resources/src/views/app/pages/support/TicketDetail.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TicketDetail.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/TicketDetail.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/support/TicketDetail.vue?vue&type=template&id=30501e8c&scoped=true"
/*!**********************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/support/TicketDetail.vue?vue&type=template&id=30501e8c&scoped=true ***!
  \**********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketDetail_vue_vue_type_template_id_30501e8c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketDetail_vue_vue_type_template_id_30501e8c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketDetail_vue_vue_type_template_id_30501e8c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TicketDetail.vue?vue&type=template&id=30501e8c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/TicketDetail.vue?vue&type=template&id=30501e8c&scoped=true");


/***/ },

/***/ "./resources/src/views/app/pages/support/TicketDetail.vue?vue&type=style&index=0&id=30501e8c&scoped=true&lang=css"
/*!************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/support/TicketDetail.vue?vue&type=style&index=0&id=30501e8c&scoped=true&lang=css ***!
  \************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketDetail_vue_vue_type_style_index_0_id_30501e8c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TicketDetail.vue?vue&type=style&index=0&id=30501e8c&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/support/TicketDetail.vue?vue&type=style&index=0&id=30501e8c&scoped=true&lang=css");


/***/ }

}]);