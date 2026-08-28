"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_views_app_pages_manufacturing_index_mfg_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/manufacturing/index_mfg.vue?vue&type=script&lang=js"
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/manufacturing/index_mfg.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
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
      orders: [],
      fields: [{
        key: 'manufacturing_number',
        label: 'Order Number',
        sortable: true
      }, {
        key: 'planned_gold_weight',
        label: 'Gold Weight (g)',
        sortable: true
      }, {
        key: 'planned_quantity',
        label: 'Planned Qty',
        sortable: true
      }, {
        key: 'completed_quantity',
        label: 'Completed Qty',
        sortable: true
      }, {
        key: 'order_date',
        label: 'Order Date',
        sortable: true
      }, {
        key: 'status',
        label: 'Status',
        sortable: true
      }, {
        key: 'actions',
        label: 'Actions'
      }]
    };
  },
  methods: {
    fetchOrders: function fetchOrders() {
      var _this = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      axios.get('manufacturing-orders').then(function (response) {
        // Standard apiResource index response could be wrapped in data
        _this.orders = response.data.data || response.data;
        _this.isLoading = false;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (error) {
        _this.isLoading = false;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      });
    },
    getStatusBadge: function getStatusBadge(status) {
      switch (status) {
        case 'completed':
          return 'success';
        case 'in_progress':
          return 'warning';
        case 'draft':
          return 'secondary';
        default:
          return 'info';
      }
    }
  },
  created: function created() {
    this.fetchOrders();
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/manufacturing/index_mfg.vue?vue&type=template&id=9cb2dbba"
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/manufacturing/index_mfg.vue?vue&type=template&id=9cb2dbba ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: "Manufacturing Orders",
      folder: "Manufacturing"
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _c("div", [_vm._m(0), _vm._v(" "), _c("b-card", [_c("b-table", {
    attrs: {
      items: _vm.orders,
      fields: _vm.fields,
      striped: "",
      hover: "",
      responsive: ""
    },
    scopedSlots: _vm._u([{
      key: "cell(actions)",
      fn: function fn(data) {
        return [_c("b-button", {
          attrs: {
            size: "sm",
            variant: "primary",
            to: {
              name: "ManufacturingOrderDetails",
              params: {
                id: data.item.id
              }
            }
          }
        }, [_c("lucide-icon", {
          staticClass: "mr-1",
          staticStyle: {
            width: "14px",
            height: "14px"
          },
          attrs: {
            name: "eye"
          }
        }), _vm._v("\n            View Detail\n          ")], 1)];
      }
    }, {
      key: "cell(status)",
      fn: function fn(data) {
        return [_c("b-badge", {
          attrs: {
            variant: _vm.getStatusBadge(data.item.status)
          }
        }, [_vm._v("\n            " + _vm._s(data.item.status.toUpperCase()) + "\n          ")])];
      }
    }])
  })], 1)], 1)], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card mb-4 p-3 d-flex flex-row justify-content-between align-items-center"
  }, [_c("h4", {
    staticClass: "m-0"
  }, [_vm._v("Manufacturing Orders")])]);
}];
render._withStripped = true;


/***/ },

/***/ "./resources/src/views/app/pages/manufacturing/index_mfg.vue"
/*!*******************************************************************!*\
  !*** ./resources/src/views/app/pages/manufacturing/index_mfg.vue ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_mfg_vue_vue_type_template_id_9cb2dbba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_mfg.vue?vue&type=template&id=9cb2dbba */ "./resources/src/views/app/pages/manufacturing/index_mfg.vue?vue&type=template&id=9cb2dbba");
/* harmony import */ var _index_mfg_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_mfg.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/manufacturing/index_mfg.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_mfg_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_mfg_vue_vue_type_template_id_9cb2dbba__WEBPACK_IMPORTED_MODULE_0__.render,
  _index_mfg_vue_vue_type_template_id_9cb2dbba__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/manufacturing/index_mfg.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/manufacturing/index_mfg.vue?vue&type=script&lang=js"
/*!*******************************************************************************************!*\
  !*** ./resources/src/views/app/pages/manufacturing/index_mfg.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_mfg_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index_mfg.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/manufacturing/index_mfg.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_mfg_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/manufacturing/index_mfg.vue?vue&type=template&id=9cb2dbba"
/*!*************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/manufacturing/index_mfg.vue?vue&type=template&id=9cb2dbba ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_mfg_vue_vue_type_template_id_9cb2dbba__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_mfg_vue_vue_type_template_id_9cb2dbba__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_mfg_vue_vue_type_template_id_9cb2dbba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index_mfg.vue?vue&type=template&id=9cb2dbba */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/manufacturing/index_mfg.vue?vue&type=template&id=9cb2dbba");


/***/ }

}]);