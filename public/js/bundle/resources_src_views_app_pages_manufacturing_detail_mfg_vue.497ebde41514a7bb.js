"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_views_app_pages_manufacturing_detail_mfg_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/manufacturing/detail_mfg.vue?vue&type=script&lang=js"
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/manufacturing/detail_mfg.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isLoading: true,
      order: {},
      stages: [],
      employees: []
    };
  },
  methods: {
    fetchDetails: function fetchDetails() {
      var _this = this;
      var id = this.$route.params.id;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      axios.get('manufacturing-orders/' + id).then(function (response) {
        _this.order = response.data.data || response.data;

        // Fetch stages
        return axios.get('manufacturing-orders/' + id + '/stages');
      }).then(function (response) {
        _this.stages = response.data;

        // Fetch employees for select dropdown
        return axios.get('employees?limit=-1');
      }).then(function (response) {
        // Standard resource lists return data array or straight array
        var rawList = response.data.data || response.data;
        _this.employees = rawList.map(function (e) {
          return {
            id: e.id,
            name: (e.firstname + ' ' + e.lastname).trim() || e.username
          };
        });
        _this.isLoading = false;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (error) {
        _this.isLoading = false;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      });
    },
    assignWorker: function assignWorker(stage) {
      var _this2 = this;
      var id = this.$route.params.id;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      axios.post("manufacturing-orders/".concat(id, "/stages/").concat(stage.id, "/assign"), {
        employee_id: stage.assigned_employee_id
      }).then(function (response) {
        _this2.makeToast('success', 'Worker successfully assigned.', 'Success');
        _this2.fetchDetails();
      })["catch"](function (error) {
        var _error$response;
        _this2.makeToast('danger', ((_error$response = error.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || 'Assignment failed.', 'Error');
        _this2.fetchDetails();
      });
    },
    updateStageStatus: function updateStageStatus(stage, status) {
      var _this3 = this;
      var id = this.$route.params.id;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      axios.post("manufacturing-orders/".concat(id, "/stages/").concat(stage.id, "/status"), {
        status: status
      }).then(function (response) {
        _this3.makeToast('success', "Stage updated to ".concat(status, "."), 'Success');
        _this3.fetchDetails();
      })["catch"](function (error) {
        var _error$response2;
        _this3.makeToast('danger', ((_error$response2 = error.response) === null || _error$response2 === void 0 || (_error$response2 = _error$response2.data) === null || _error$response2 === void 0 ? void 0 : _error$response2.message) || 'Failed to update status.', 'Error');
        _this3.fetchDetails();
      });
    },
    startTimer: function startTimer(stage) {
      var _this4 = this;
      var id = this.$route.params.id;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      axios.post("manufacturing-orders/".concat(id, "/stages/").concat(stage.id, "/timer/start")).then(function (response) {
        _this4.makeToast('success', 'Timer started.', 'Success');
        _this4.fetchDetails();
      })["catch"](function (error) {
        var _error$response3;
        _this4.makeToast('danger', ((_error$response3 = error.response) === null || _error$response3 === void 0 || (_error$response3 = _error$response3.data) === null || _error$response3 === void 0 ? void 0 : _error$response3.message) || 'Failed to start timer.', 'Error');
        _this4.fetchDetails();
      });
    },
    stopTimer: function stopTimer(stage) {
      var _this5 = this;
      var id = this.$route.params.id;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      axios.post("manufacturing-orders/".concat(id, "/stages/").concat(stage.id, "/timer/stop")).then(function (response) {
        _this5.makeToast('success', 'Timer stopped and labor cost calculated.', 'Success');
        _this5.fetchDetails();
      })["catch"](function (error) {
        var _error$response4;
        _this5.makeToast('danger', ((_error$response4 = error.response) === null || _error$response4 === void 0 || (_error$response4 = _error$response4.data) === null || _error$response4 === void 0 ? void 0 : _error$response4.message) || 'Failed to stop timer.', 'Error');
        _this5.fetchDetails();
      });
    },
    hasActiveTimer: function hasActiveTimer(stage) {
      if (!stage.time_logs) return false;
      return stage.time_logs.some(function (log) {
        return log.ended_at === null;
      });
    },
    getStatusBadge: function getStatusBadge(status) {
      switch (status) {
        case 'completed':
          return 'success';
        case 'in_progress':
          return 'warning';
        case 'rejected':
          return 'danger';
        case 'pending':
          return 'secondary';
        case 'draft':
          return 'secondary';
        default:
          return 'info';
      }
    },
    formatDateTime: function formatDateTime(dateTimeStr) {
      if (!dateTimeStr) return '';
      var d = new Date(dateTimeStr);
      return d.toLocaleString();
    },
    formatDuration: function formatDuration(seconds) {
      if (!seconds) return '0s';
      var h = Math.floor(seconds / 3600);
      var m = Math.floor(seconds % 3600 / 60);
      var s = seconds % 60;
      var res = '';
      if (h > 0) res += h + 'h ';
      if (m > 0) res += m + 'm ';
      if (s > 0 || res === '') res += s + 's';
      return res.trim();
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
    this.fetchDetails();
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/manufacturing/detail_mfg.vue?vue&type=template&id=49902464&scoped=true"
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/manufacturing/detail_mfg.vue?vue&type=template&id=49902464&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: "Manufacturing Order Details",
      folder: "Manufacturing"
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _c("div", [_c("b-row", {
    staticClass: "mb-4"
  }, [_c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-button", {
    attrs: {
      variant: "secondary",
      to: {
        name: "ManufacturingOrders"
      }
    }
  }, [_c("lucide-icon", {
    staticClass: "mr-1",
    staticStyle: {
      width: "16px",
      height: "16px"
    },
    attrs: {
      name: "chevron-left"
    }
  }), _vm._v("\n          Back to List\n        ")], 1)], 1)], 1), _vm._v(" "), _c("b-row", {
    staticClass: "mb-4"
  }, [_c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-card", {
    attrs: {
      title: "Order: " + _vm.order.manufacturing_number
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "3",
      sm: "6"
    }
  }, [_c("strong", [_vm._v("Product:")]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.order.product ? _vm.order.product.name : "N/A"))])]), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3",
      sm: "6"
    }
  }, [_c("strong", [_vm._v("Planned Quantity:")]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.order.planned_quantity))])]), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3",
      sm: "6"
    }
  }, [_c("strong", [_vm._v("Order Date:")]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.order.order_date))])]), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3",
      sm: "6"
    }
  }, [_c("strong", [_vm._v("Overall Status:")]), _vm._v(" "), _c("div", [_c("b-badge", {
    attrs: {
      variant: _vm.getStatusBadge(_vm.order.status)
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.order.status.toUpperCase()) + "\n                ")])], 1)])], 1)], 1)], 1)], 1), _vm._v(" "), _c("h4", {
    staticClass: "mb-3"
  }, [_vm._v("Production Stages Timeline")]), _vm._v(" "), _c("b-row", [_c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("div", {
    staticClass: "stages-timeline"
  }, _vm._l(_vm.stages, function (stage) {
    return _c("b-card", {
      key: stage.id,
      staticClass: "mb-3 shadow-sm border-left-info"
    }, [_c("b-row", {
      staticClass: "align-items-center"
    }, [_c("b-col", {
      attrs: {
        md: "3",
        sm: "12"
      }
    }, [_c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("span", {
      staticClass: "badge badge-primary badge-pill mr-2",
      staticStyle: {
        "font-size": "1.1rem",
        width: "30px",
        height: "30px",
        display: "inline-flex",
        "align-items": "center",
        "justify-content": "center"
      }
    }, [_vm._v("\n                    " + _vm._s(stage.sequence) + "\n                  ")]), _vm._v(" "), _c("h5", {
      staticClass: "m-0 font-weight-bold text-dark"
    }, [_vm._v(_vm._s(stage.stage_name))])]), _vm._v(" "), _c("div", {
      staticClass: "text-muted mt-1 small"
    }, [_vm._v("\n                  Status:\n                  "), _c("b-badge", {
      attrs: {
        variant: _vm.getStatusBadge(stage.status)
      }
    }, [_vm._v("\n                    " + _vm._s(stage.status.toUpperCase()) + "\n                  ")])], 1)]), _vm._v(" "), _c("b-col", {
      staticClass: "mt-2 mt-md-0",
      attrs: {
        md: "3",
        sm: "12"
      }
    }, [_c("label", {
      staticClass: "small text-muted m-0 d-block"
    }, [_vm._v("Assigned Worker")]), _vm._v(" "), _c("b-form-select", {
      staticClass: "mt-1",
      attrs: {
        options: _vm.employees,
        "value-field": "id",
        "text-field": "name",
        disabled: stage.status === "completed"
      },
      on: {
        change: function change($event) {
          return _vm.assignWorker(stage);
        }
      },
      scopedSlots: _vm._u([{
        key: "first",
        fn: function fn() {
          return [_c("b-form-select-option", {
            attrs: {
              value: null
            }
          }, [_vm._v("-- Unassigned --")])];
        },
        proxy: true
      }], null, true),
      model: {
        value: stage.assigned_employee_id,
        callback: function callback($$v) {
          _vm.$set(stage, "assigned_employee_id", $$v);
        },
        expression: "stage.assigned_employee_id"
      }
    })], 1), _vm._v(" "), _c("b-col", {
      staticClass: "mt-2 mt-md-0 text-md-center",
      attrs: {
        md: "3",
        sm: "12"
      }
    }, [_c("label", {
      staticClass: "small text-muted m-0 d-block"
    }, [_vm._v("Stage Actions")]), _vm._v(" "), _c("div", {
      staticClass: "d-flex justify-content-md-center gap-2 mt-1"
    }, [stage.status === "pending" || stage.status === "rejected" ? _c("b-button", {
      attrs: {
        variant: "warning",
        size: "sm"
      },
      on: {
        click: function click($event) {
          return _vm.updateStageStatus(stage, "in_progress");
        }
      }
    }, [_vm._v("\n                    Start Stage\n                  ")]) : _vm._e(), _vm._v(" "), stage.status === "in_progress" ? _c("b-button", {
      attrs: {
        variant: "success",
        size: "sm"
      },
      on: {
        click: function click($event) {
          return _vm.updateStageStatus(stage, "completed");
        }
      }
    }, [_vm._v("\n                    Complete\n                  ")]) : _vm._e(), _vm._v(" "), stage.status === "in_progress" ? _c("b-button", {
      attrs: {
        variant: "danger",
        size: "sm"
      },
      on: {
        click: function click($event) {
          return _vm.updateStageStatus(stage, "rejected");
        }
      }
    }, [_vm._v("\n                    Reject\n                  ")]) : _vm._e(), _vm._v(" "), stage.status === "completed" ? _c("span", {
      staticClass: "text-success small font-weight-bold"
    }, [_c("lucide-icon", {
      staticClass: "mr-1",
      attrs: {
        name: "check"
      }
    }), _vm._v("Completed\n                  ")], 1) : _vm._e()], 1)]), _vm._v(" "), _c("b-col", {
      staticClass: "mt-2 mt-md-0 text-right",
      attrs: {
        md: "3",
        sm: "12"
      }
    }, [stage.status === "in_progress" && stage.assigned_employee_id ? _c("div", [_c("label", {
      staticClass: "small text-muted m-0 d-block"
    }, [_vm._v("Worker Timer")]), _vm._v(" "), _c("div", {
      staticClass: "mt-1"
    }, [!_vm.hasActiveTimer(stage) ? _c("b-button", {
      attrs: {
        variant: "outline-primary",
        size: "sm"
      },
      on: {
        click: function click($event) {
          return _vm.startTimer(stage);
        }
      }
    }, [_c("lucide-icon", {
      staticClass: "mr-1",
      staticStyle: {
        width: "12px",
        height: "12px"
      },
      attrs: {
        name: "play"
      }
    }), _vm._v("\n                      Start Timer\n                    ")], 1) : _c("b-button", {
      attrs: {
        variant: "danger",
        size: "sm"
      },
      on: {
        click: function click($event) {
          return _vm.stopTimer(stage);
        }
      }
    }, [_c("lucide-icon", {
      staticClass: "mr-1",
      staticStyle: {
        width: "12px",
        height: "12px"
      },
      attrs: {
        name: "square"
      }
    }), _vm._v("\n                      Stop Timer\n                    ")], 1)], 1)]) : _vm._e()])], 1), _vm._v(" "), stage.time_logs && stage.time_logs.length > 0 ? _c("div", {
      staticClass: "mt-3 border-top pt-2"
    }, [_c("h6", {
      staticClass: "text-muted small font-weight-bold mb-2"
    }, [_vm._v("Stage Time Logs & Labor Cost")]), _vm._v(" "), _c("table", {
      staticClass: "table table-sm table-borderless m-0 small"
    }, [_c("thead", [_c("tr", {
      staticClass: "text-muted border-bottom"
    }, [_c("th", [_vm._v("Worker")]), _vm._v(" "), _c("th", [_vm._v("Started At")]), _vm._v(" "), _c("th", [_vm._v("Ended At")]), _vm._v(" "), _c("th", [_vm._v("Duration")]), _vm._v(" "), _c("th", {
      staticClass: "text-right"
    }, [_vm._v("Labor Cost")])])]), _vm._v(" "), _c("tbody", _vm._l(stage.time_logs, function (log) {
      return _c("tr", {
        key: log.id
      }, [_c("td", [_vm._v(_vm._s(log.employee ? log.employee.firstname + " " + log.employee.lastname : "Unknown"))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatDateTime(log.started_at)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(log.ended_at ? _vm.formatDateTime(log.ended_at) : "RUNNING..."))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(log.duration_seconds ? _vm.formatDuration(log.duration_seconds) : "-"))]), _vm._v(" "), _c("td", {
        staticClass: "text-right font-weight-bold text-dark"
      }, [_vm._v("\n                      " + _vm._s(log.labor_cost != null ? "$" + log.labor_cost : "-") + "\n                    ")])]);
    }), 0)])]) : _vm._e()], 1);
  }), 1)])], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/manufacturing/detail_mfg.vue?vue&type=style&index=0&id=49902464&scoped=true&lang=css"
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/manufacturing/detail_mfg.vue?vue&type=style&index=0&id=49902464&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.stages-timeline[data-v-49902464] {\r\n  display: flex;\r\n  flex-direction: column;\n}\n.gap-2[data-v-49902464] {\r\n  gap: 0.5rem;\n}\r\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/manufacturing/detail_mfg.vue?vue&type=style&index=0&id=49902464&scoped=true&lang=css"
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/manufacturing/detail_mfg.vue?vue&type=style&index=0&id=49902464&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_mfg_vue_vue_type_style_index_0_id_49902464_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detail_mfg.vue?vue&type=style&index=0&id=49902464&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/manufacturing/detail_mfg.vue?vue&type=style&index=0&id=49902464&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_mfg_vue_vue_type_style_index_0_id_49902464_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_mfg_vue_vue_type_style_index_0_id_49902464_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/views/app/pages/manufacturing/detail_mfg.vue"
/*!********************************************************************!*\
  !*** ./resources/src/views/app/pages/manufacturing/detail_mfg.vue ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _detail_mfg_vue_vue_type_template_id_49902464_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail_mfg.vue?vue&type=template&id=49902464&scoped=true */ "./resources/src/views/app/pages/manufacturing/detail_mfg.vue?vue&type=template&id=49902464&scoped=true");
/* harmony import */ var _detail_mfg_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail_mfg.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/manufacturing/detail_mfg.vue?vue&type=script&lang=js");
/* harmony import */ var _detail_mfg_vue_vue_type_style_index_0_id_49902464_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail_mfg.vue?vue&type=style&index=0&id=49902464&scoped=true&lang=css */ "./resources/src/views/app/pages/manufacturing/detail_mfg.vue?vue&type=style&index=0&id=49902464&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detail_mfg_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_mfg_vue_vue_type_template_id_49902464_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _detail_mfg_vue_vue_type_template_id_49902464_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "49902464",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/manufacturing/detail_mfg.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/manufacturing/detail_mfg.vue?vue&type=script&lang=js"
/*!********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/manufacturing/detail_mfg.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_mfg_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detail_mfg.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/manufacturing/detail_mfg.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_mfg_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/manufacturing/detail_mfg.vue?vue&type=template&id=49902464&scoped=true"
/*!**************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/manufacturing/detail_mfg.vue?vue&type=template&id=49902464&scoped=true ***!
  \**************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_mfg_vue_vue_type_template_id_49902464_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_mfg_vue_vue_type_template_id_49902464_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_mfg_vue_vue_type_template_id_49902464_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detail_mfg.vue?vue&type=template&id=49902464&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/manufacturing/detail_mfg.vue?vue&type=template&id=49902464&scoped=true");


/***/ },

/***/ "./resources/src/views/app/pages/manufacturing/detail_mfg.vue?vue&type=style&index=0&id=49902464&scoped=true&lang=css"
/*!****************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/manufacturing/detail_mfg.vue?vue&type=style&index=0&id=49902464&scoped=true&lang=css ***!
  \****************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_mfg_vue_vue_type_style_index_0_id_49902464_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detail_mfg.vue?vue&type=style&index=0&id=49902464&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/manufacturing/detail_mfg.vue?vue&type=style&index=0&id=49902464&scoped=true&lang=css");


/***/ }

}]);