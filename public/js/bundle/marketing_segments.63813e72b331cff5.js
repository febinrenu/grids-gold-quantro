"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["marketing_segments"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/segments.vue?vue&type=script&lang=js"
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/segments.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Customer Segments"
  },
  data: function data() {
    return {
      isLoading: true,
      SubmitProcessing: false,
      serverParams: {
        sort: {
          field: "id",
          type: "desc"
        },
        page: 1,
        perPage: 10
      },
      totalRows: "",
      search: "",
      limit: "10",
      editmode: false,
      segments: [],
      previewCount: null,
      segment: this.empty_segment()
    };
  },
  computed: {
    columns: function columns() {
      return [{
        label: this.$t("Segment_Name"),
        field: "name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Type"),
        field: "all_customers",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Matching_Customers"),
        field: "customers_count",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Action"),
        field: "actions",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }];
    }
  },
  methods: {
    empty_segment: function empty_segment() {
      return {
        id: "",
        name: "",
        description: "",
        all_customers: false,
        filters: {
          city: "",
          last_purchase_from: "",
          last_purchase_to: "",
          total_purchases_min: "",
          total_purchases_max: "",
          total_spent_min: "",
          total_spent_max: ""
        }
      };
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
    },
    onAllChange: function onAllChange() {
      this.previewCount = null;
    },
    updateParams: function updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    onPageChange: function onPageChange(_ref2) {
      var currentPage = _ref2.currentPage;
      if (this.serverParams.page !== currentPage) {
        this.updateParams({
          page: currentPage
        });
        this.Get_Segments(currentPage);
      }
    },
    onPerPageChange: function onPerPageChange(_ref3) {
      var currentPerPage = _ref3.currentPerPage;
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({
          page: 1,
          perPage: currentPerPage
        });
        this.Get_Segments(1);
      }
    },
    onSortChange: function onSortChange(params) {
      this.updateParams({
        sort: {
          type: params[0].type,
          field: params[0].field
        }
      });
      this.Get_Segments(this.serverParams.page);
    },
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Segments(this.serverParams.page);
    },
    New_Segment: function New_Segment() {
      this.segment = this.empty_segment();
      this.previewCount = null;
      this.editmode = false;
      this.$bvModal.show("New_Segment");
    },
    Edit_Segment: function Edit_Segment(row) {
      this.segment = _objectSpread(_objectSpread(_objectSpread({}, this.empty_segment()), row), {}, {
        filters: Object.assign(this.empty_segment().filters, row.filters || {})
      });
      this.previewCount = null;
      this.editmode = true;
      this.$bvModal.show("New_Segment");
    },
    Preview_Segment: function Preview_Segment() {
      var _this = this;
      axios.post("marketing/segments/preview", {
        all_customers: this.segment.all_customers ? 1 : 0,
        filters: this.segment.filters
      }).then(function (_ref4) {
        var data = _ref4.data;
        _this.previewCount = data.count;
      })["catch"](function () {
        _this.makeToast("danger", _this.$t("InvalidData"), _this.$t("Failed"));
      });
    },
    Get_Segments: function Get_Segments(page) {
      var _this2 = this;
      this.serverParams.page = page;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("marketing/segments?page=" + page + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&limit=" + this.limit).then(function (response) {
        _this2.totalRows = response.data.totalRows;
        _this2.segments = response.data.segments;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this2.isLoading = false;
      })["catch"](function () {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        setTimeout(function () {
          _this2.isLoading = false;
        }, 500);
      });
    },
    Submit_Segment: function Submit_Segment() {
      var _this3 = this;
      this.$refs.Segment_Form.validate().then(function (success) {
        if (!success) {
          _this3.makeToast("danger", _this3.$t("Please_fill_the_form_correctly"), _this3.$t("Failed"));
          return;
        }
        _this3.SubmitProcessing = true;
        var payload = {
          name: _this3.segment.name,
          description: _this3.segment.description,
          all_customers: _this3.segment.all_customers ? 1 : 0,
          filters: _this3.segment.filters
        };
        var req = _this3.editmode ? axios.put("marketing/segments/" + _this3.segment.id, payload) : axios.post("marketing/segments", payload);
        req.then(function () {
          _this3.SubmitProcessing = false;
          _this3.$bvModal.hide("New_Segment");
          _this3.makeToast("success", _this3.$t(_this3.editmode ? "Updated_in_successfully" : "Created_in_successfully"), _this3.$t("Success"));
          _this3.Get_Segments(_this3.serverParams.page);
        })["catch"](function () {
          _this3.SubmitProcessing = false;
          _this3.makeToast("danger", _this3.$t("InvalidData"), _this3.$t("Failed"));
        });
      });
    },
    Remove_Segment: function Remove_Segment(id) {
      var _this4 = this;
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
          axios["delete"]("marketing/segments/" + id).then(function () {
            _this4.$swal(_this4.$t("Delete_Deleted"), _this4.$t("Deleted_in_successfully"), "success");
            _this4.Get_Segments(_this4.serverParams.page);
          })["catch"](function () {
            _this4.$swal(_this4.$t("Delete_Failed"), _this4.$t("Delete_Therewassomethingwronge"), "warning");
          });
        }
      });
    }
  },
  created: function created() {
    this.Get_Segments(1);
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/segments.vue?vue&type=template&id=7f6306f4"
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/segments.vue?vue&type=template&id=7f6306f4 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("Customer_Segments"),
      folder: _vm.$t("Marketing_Management")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("b-card", {
    staticClass: "wrapper"
  }, [_c("vue-good-table", {
    attrs: {
      mode: "remote",
      columns: _vm.columns,
      totalRows: _vm.totalRows,
      rows: _vm.segments,
      "search-options": {
        enabled: true,
        placeholder: _vm.$t("Search_this_table")
      },
      "pagination-options": {
        enabled: true,
        mode: "records",
        nextLabel: "next",
        prevLabel: "prev"
      },
      styleClass: "table-hover tableOne vgt-table"
    },
    on: {
      "on-page-change": _vm.onPageChange,
      "on-per-page-change": _vm.onPerPageChange,
      "on-sort-change": _vm.onSortChange,
      "on-search": _vm.onSearch
    },
    scopedSlots: _vm._u([{
      key: "table-row",
      fn: function fn(props) {
        return [props.column.field == "all_customers" ? _c("span", [_c("span", {
          staticClass: "badge",
          "class": props.row.all_customers ? "badge-outline-success" : "badge-outline-secondary"
        }, [_vm._v("\n            " + _vm._s(props.row.all_customers ? _vm.$t("All_Customers") : _vm.$t("Specific_Segment")) + "\n          ")])]) : props.column.field == "actions" ? _c("span", [_c("a", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "cursor-pointer",
          attrs: {
            title: "Edit"
          },
          on: {
            click: function click($event) {
              return _vm.Edit_Segment(props.row);
            }
          }
        }, [_c("lucide-icon", {
          staticClass: "text-25 text-success",
          attrs: {
            name: "pencil"
          }
        })], 1), _vm._v(" "), _c("a", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "cursor-pointer",
          attrs: {
            title: _vm.$t("Delete")
          },
          on: {
            click: function click($event) {
              return _vm.Remove_Segment(props.row.id);
            }
          }
        }, [_c("lucide-icon", {
          staticClass: "text-25 text-danger",
          attrs: {
            name: "x"
          }
        })], 1)]) : _vm._e()];
      }
    }], null, false, 3417843264)
  }, [_c("div", {
    staticClass: "mt-2 mb-3",
    attrs: {
      slot: "table-actions"
    },
    slot: "table-actions"
  }, [_c("b-button", {
    staticClass: "btn-rounded",
    attrs: {
      variant: "btn btn-primary btn-icon m-1"
    },
    on: {
      click: function click($event) {
        return _vm.New_Segment();
      }
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "plus"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("New_Segment")) + "\n        ")], 1)], 1)])], 1) : _vm._e(), _vm._v(" "), _c("validation-observer", {
    ref: "Segment_Form"
  }, [_c("b-modal", {
    attrs: {
      "hide-footer": "",
      size: "lg",
      id: "New_Segment",
      title: _vm.editmode ? _vm.$t("Edit_Segment") : _vm.$t("New_Segment")
    }
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Submit_Segment.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "name",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Segment_Name") + " *"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext)
          },
          model: {
            value: _vm.segment.name,
            callback: function callback($$v) {
              _vm.$set(_vm.segment, "name", $$v);
            },
            expression: "segment.name"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Description")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.segment.description,
      callback: function callback($$v) {
        _vm.$set(_vm.segment, "description", $$v);
      },
      expression: "segment.description"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-checkbox", {
    on: {
      change: _vm.onAllChange
    },
    model: {
      value: _vm.segment.all_customers,
      callback: function callback($$v) {
        _vm.$set(_vm.segment, "all_customers", $$v);
      },
      expression: "segment.all_customers"
    }
  }, [_vm._v(_vm._s(_vm.$t("All_Customers")))]), _vm._v(" "), _c("hr")], 1), _vm._v(" "), !_vm.segment.all_customers ? [_c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("City")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.segment.filters.city,
      callback: function callback($$v) {
        _vm.$set(_vm.segment.filters, "city", $$v);
      },
      expression: "segment.filters.city"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Last_Purchase_From")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "date"
    },
    model: {
      value: _vm.segment.filters.last_purchase_from,
      callback: function callback($$v) {
        _vm.$set(_vm.segment.filters, "last_purchase_from", $$v);
      },
      expression: "segment.filters.last_purchase_from"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Last_Purchase_To")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "date"
    },
    model: {
      value: _vm.segment.filters.last_purchase_to,
      callback: function callback($$v) {
        _vm.$set(_vm.segment.filters, "last_purchase_to", $$v);
      },
      expression: "segment.filters.last_purchase_to"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Total_Purchases_Min")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "number",
      min: "0"
    },
    model: {
      value: _vm.segment.filters.total_purchases_min,
      callback: function callback($$v) {
        _vm.$set(_vm.segment.filters, "total_purchases_min", $$v);
      },
      expression: "segment.filters.total_purchases_min"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Total_Purchases_Max")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "number",
      min: "0"
    },
    model: {
      value: _vm.segment.filters.total_purchases_max,
      callback: function callback($$v) {
        _vm.$set(_vm.segment.filters, "total_purchases_max", $$v);
      },
      expression: "segment.filters.total_purchases_max"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Total_Spent_Min")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "number",
      min: "0"
    },
    model: {
      value: _vm.segment.filters.total_spent_min,
      callback: function callback($$v) {
        _vm.$set(_vm.segment.filters, "total_spent_min", $$v);
      },
      expression: "segment.filters.total_spent_min"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Total_Spent_Max")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "number",
      min: "0"
    },
    model: {
      value: _vm.segment.filters.total_spent_max,
      callback: function callback($$v) {
        _vm.$set(_vm.segment.filters, "total_spent_max", $$v);
      },
      expression: "segment.filters.total_spent_max"
    }
  })], 1)], 1)] : _vm._e(), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "12"
    }
  }, [_c("b-button", {
    attrs: {
      size: "sm",
      variant: "outline-info"
    },
    on: {
      click: function click($event) {
        return _vm.Preview_Segment();
      }
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "search"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Preview_Segment")) + "\n            ")], 1), _vm._v(" "), _vm.previewCount !== null ? _c("span", {
    staticClass: "ml-2 font-weight-bold text-info"
  }, [_vm._v("\n              " + _vm._s(_vm.previewCount) + " " + _vm._s(_vm.$t("Matching_Customers")) + "\n            ")]) : _vm._e()], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-button", {
    attrs: {
      variant: "primary",
      type: "submit",
      disabled: _vm.SubmitProcessing
    }
  }, [_c("lucide-icon", {
    staticClass: "me-2 font-weight-bold",
    attrs: {
      name: "check"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Save_Segment")) + "\n            ")], 1), _vm._v(" "), _vm.SubmitProcessing ? _c("div", {
    staticClass: "spinner sm spinner-primary mt-3"
  }) : _vm._e()], 1)], 2)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./resources/src/views/app/pages/marketing/segments.vue"
/*!**************************************************************!*\
  !*** ./resources/src/views/app/pages/marketing/segments.vue ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _segments_vue_vue_type_template_id_7f6306f4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segments.vue?vue&type=template&id=7f6306f4 */ "./resources/src/views/app/pages/marketing/segments.vue?vue&type=template&id=7f6306f4");
/* harmony import */ var _segments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segments.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/marketing/segments.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _segments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _segments_vue_vue_type_template_id_7f6306f4__WEBPACK_IMPORTED_MODULE_0__.render,
  _segments_vue_vue_type_template_id_7f6306f4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/marketing/segments.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/marketing/segments.vue?vue&type=script&lang=js"
/*!**************************************************************************************!*\
  !*** ./resources/src/views/app/pages/marketing/segments.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_segments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./segments.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/segments.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_segments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/marketing/segments.vue?vue&type=template&id=7f6306f4"
/*!********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/marketing/segments.vue?vue&type=template&id=7f6306f4 ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_segments_vue_vue_type_template_id_7f6306f4__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_segments_vue_vue_type_template_id_7f6306f4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_segments_vue_vue_type_template_id_7f6306f4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./segments.vue?vue&type=template&id=7f6306f4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/marketing/segments.vue?vue&type=template&id=7f6306f4");


/***/ }

}]);