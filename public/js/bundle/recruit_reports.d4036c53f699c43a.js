"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["recruit_reports"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/recruit/reports.vue?vue&type=script&lang=js"
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/recruit/reports.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Recruit Reports"
  },
  data: function data() {
    return {
      isLoading: true,
      period: "6months",
      funnel: {},
      by_job: [],
      by_source: {},
      monthly_trend: [],
      avg_time_to_hire: 0,
      by_category: [],
      stages: ["applied", "screening", "shortlisted", "interview", "offered", "hired", "rejected"]
    };
  },
  computed: {
    funnelMax: function funnelMax() {
      var vals = Object.values(this.funnel || {});
      var max = vals.length ? Math.max.apply(Math, vals) : 0;
      return max > 0 ? max : 1;
    },
    sourceMax: function sourceMax() {
      var vals = Object.values(this.by_source || {});
      var max = vals.length ? Math.max.apply(Math, vals) : 0;
      return max > 0 ? max : 1;
    }
  },
  methods: {
    format_label: function format_label(v) {
      return v ? String(v).replace(/_/g, " ") : "-";
    },
    Get_Reports: function Get_Reports() {
      var _this = this;
      this.isLoading = true;
      axios.get("recruit/reports?period=" + this.period).then(function (_ref) {
        var data = _ref.data;
        _this.funnel = data.funnel || {};
        _this.by_job = data.by_job || [];
        _this.by_source = data.by_source || {};
        _this.monthly_trend = data.monthly_trend || [];
        _this.avg_time_to_hire = data.avg_time_to_hire || 0;
        _this.by_category = data.by_category || [];
        _this.isLoading = false;
      })["catch"](function () {
        _this.isLoading = false;
      });
    }
  },
  created: function created() {
    this.Get_Reports();
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/recruit/reports.vue?vue&type=template&id=00b3eca1"
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/recruit/reports.vue?vue&type=template&id=00b3eca1 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("Reports"),
      folder: _vm.$t("Recruit")
    }
  }), _vm._v(" "), _c("b-row", {
    staticClass: "mb-3"
  }, [_c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Period")
    }
  }, [_c("b-form-select", {
    on: {
      change: function change($event) {
        return _vm.Get_Reports();
      }
    },
    model: {
      value: _vm.period,
      callback: function callback($$v) {
        _vm.period = $$v;
      },
      expression: "period"
    }
  }, [_c("b-form-select-option", {
    attrs: {
      value: "1month"
    }
  }, [_vm._v(_vm._s(_vm.$t("Last_Month")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "3months"
    }
  }, [_vm._v(_vm._s(_vm.$t("Last_3_Months")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "6months"
    }
  }, [_vm._v(_vm._s(_vm.$t("Last_6_Months")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "1year"
    }
  }, [_vm._v(_vm._s(_vm.$t("Last_Year")))])], 1)], 1)], 1)], 1), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("div", [_c("b-row", [_c("b-col", {
    staticClass: "mb-4",
    attrs: {
      md: "6"
    }
  }, [_c("b-card", {
    staticClass: "h-100",
    attrs: {
      header: _vm.$t("Hiring_Funnel")
    }
  }, _vm._l(_vm.stages, function (s) {
    return _c("div", {
      key: s,
      staticClass: "mb-3"
    }, [_c("div", {
      staticClass: "d-flex justify-content-between mb-1"
    }, [_c("span", [_vm._v(_vm._s(_vm.format_label(s)))]), _vm._v(" "), _c("span", {
      staticClass: "text-muted"
    }, [_vm._v(_vm._s(_vm.funnel[s] || 0))])]), _vm._v(" "), _c("b-progress", {
      attrs: {
        max: _vm.funnelMax,
        height: "8px"
      }
    }, [_c("b-progress-bar", {
      attrs: {
        value: _vm.funnel[s] || 0,
        variant: "primary"
      }
    })], 1)], 1);
  }), 0)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-4",
    attrs: {
      md: "6"
    }
  }, [_c("b-card", {
    staticClass: "h-100 text-center",
    attrs: {
      header: _vm.$t("Average_Time_To_Hire")
    }
  }, [_c("div", {
    staticClass: "py-4"
  }, [_c("p", {
    staticClass: "display-4 text-primary mb-0"
  }, [_vm._v(_vm._s(_vm.avg_time_to_hire))]), _vm._v(" "), _c("p", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Days")))])])])], 1)], 1), _vm._v(" "), _c("b-row", [_c("b-col", {
    staticClass: "mb-4",
    attrs: {
      md: "6"
    }
  }, [_c("b-card", {
    staticClass: "h-100",
    attrs: {
      header: _vm.$t("Applications_By_Job")
    }
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.$t("Job")))]), _c("th", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t("Applications")))])])]), _vm._v(" "), _c("tbody", [_vm.by_job.length === 0 ? _c("tr", [_c("td", {
    staticClass: "text-center text-muted",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v(_vm._s(_vm.$t("No_data")))])]) : _vm._e(), _vm._v(" "), _vm._l(_vm.by_job, function (r) {
    return _c("tr", {
      key: r.job_id
    }, [_c("td", [_vm._v(_vm._s(r.job ? r.job.title : "-"))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(r.count))])]);
  })], 2)])])])], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-4",
    attrs: {
      md: "6"
    }
  }, [_c("b-card", {
    staticClass: "h-100",
    attrs: {
      header: _vm.$t("Candidates_By_Source")
    }
  }, [_vm._l(_vm.by_source, function (count, src) {
    return _c("div", {
      key: src,
      staticClass: "mb-3"
    }, [_c("div", {
      staticClass: "d-flex justify-content-between mb-1"
    }, [_c("span", [_vm._v(_vm._s(_vm.format_label(src)))]), _vm._v(" "), _c("span", {
      staticClass: "text-muted"
    }, [_vm._v(_vm._s(count))])]), _vm._v(" "), _c("b-progress", {
      attrs: {
        max: _vm.sourceMax,
        height: "8px"
      }
    }, [_c("b-progress-bar", {
      attrs: {
        value: count,
        variant: "info"
      }
    })], 1)], 1);
  }), _vm._v(" "), Object.keys(_vm.by_source).length === 0 ? _c("p", {
    staticClass: "text-center text-muted"
  }, [_vm._v(_vm._s(_vm.$t("No_data")))]) : _vm._e()], 2)], 1)], 1), _vm._v(" "), _c("b-row", [_c("b-col", {
    staticClass: "mb-4",
    attrs: {
      md: "12"
    }
  }, [_c("b-card", {
    attrs: {
      header: _vm.$t("Monthly_Trend")
    }
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.$t("Month")))]), _vm._v(" "), _c("th", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t("Total")))]), _vm._v(" "), _c("th", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t("Hired")))]), _vm._v(" "), _c("th", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t("Rejected")))])])]), _vm._v(" "), _c("tbody", [_vm.monthly_trend.length === 0 ? _c("tr", [_c("td", {
    staticClass: "text-center text-muted",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v(_vm._s(_vm.$t("No_data")))])]) : _vm._e(), _vm._v(" "), _vm._l(_vm.monthly_trend, function (m) {
    return _c("tr", {
      key: m.month
    }, [_c("td", [_vm._v(_vm._s(m.month))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(m.total))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(m.hired))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(m.rejected))])]);
  })], 2)])])])], 1)], 1)], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./resources/src/views/app/pages/recruit/reports.vue"
/*!***********************************************************!*\
  !*** ./resources/src/views/app/pages/recruit/reports.vue ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reports_vue_vue_type_template_id_00b3eca1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports.vue?vue&type=template&id=00b3eca1 */ "./resources/src/views/app/pages/recruit/reports.vue?vue&type=template&id=00b3eca1");
/* harmony import */ var _reports_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/recruit/reports.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _reports_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _reports_vue_vue_type_template_id_00b3eca1__WEBPACK_IMPORTED_MODULE_0__.render,
  _reports_vue_vue_type_template_id_00b3eca1__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/recruit/reports.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/recruit/reports.vue?vue&type=script&lang=js"
/*!***********************************************************************************!*\
  !*** ./resources/src/views/app/pages/recruit/reports.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reports_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./reports.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/recruit/reports.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reports_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/recruit/reports.vue?vue&type=template&id=00b3eca1"
/*!*****************************************************************************************!*\
  !*** ./resources/src/views/app/pages/recruit/reports.vue?vue&type=template&id=00b3eca1 ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reports_vue_vue_type_template_id_00b3eca1__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reports_vue_vue_type_template_id_00b3eca1__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reports_vue_vue_type_template_id_00b3eca1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./reports.vue?vue&type=template&id=00b3eca1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/recruit/reports.vue?vue&type=template&id=00b3eca1");


/***/ }

}]);