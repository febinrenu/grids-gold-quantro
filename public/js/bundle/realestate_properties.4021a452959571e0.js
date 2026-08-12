"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["realestate_properties"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/realestate/properties.vue?vue&type=script&lang=js"
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/realestate/properties.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Properties"
  },
  data: function data() {
    return {
      isLoading: true,
      serverParams: {
        sort: {
          field: "id",
          type: "desc"
        },
        page: 1,
        perPage: 10
      },
      selectedIds: [],
      totalRows: "",
      search: "",
      limit: "10",
      category_filter: "",
      purpose_filter: "",
      status_filter: "",
      categories: [],
      properties: []
    };
  },
  computed: {
    columns: function columns() {
      return [{
        label: this.$t("Image"),
        field: "featured_image",
        sortable: false,
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Property_Title"),
        field: "title",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Property_Type"),
        field: "category",
        sortable: false,
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Purpose"),
        field: "purpose",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Price"),
        field: "price",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Featured"),
        field: "featured",
        sortable: false,
        tdClass: "text-center",
        thClass: "text-center"
      }, {
        label: this.$t("Status"),
        field: "status",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Action"),
        field: "actions",
        sortable: false,
        tdClass: "text-left",
        thClass: "text-left"
      }];
    }
  },
  methods: {
    format_price: function format_price(v) {
      return new Intl.NumberFormat().format(Number(v || 0));
    },
    status_label: function status_label(s) {
      var map = {
        available: this.$t("Available"),
        sold: this.$t("Sold"),
        rented: this.$t("Rented")
      };
      return map[s] || s;
    },
    status_class: function status_class(s) {
      var map = {
        available: "badge-outline-success",
        sold: "badge-outline-danger",
        rented: "badge-outline-warning"
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
    updateParams: function updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    onPageChange: function onPageChange(_ref) {
      var currentPage = _ref.currentPage;
      if (this.serverParams.page !== currentPage) {
        this.updateParams({
          page: currentPage
        });
        this.Get_Properties(currentPage);
      }
    },
    onPerPageChange: function onPerPageChange(_ref2) {
      var currentPerPage = _ref2.currentPerPage;
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({
          page: 1,
          perPage: currentPerPage
        });
        this.Get_Properties(1);
      }
    },
    selectionChanged: function selectionChanged(_ref3) {
      var _this = this;
      var selectedRows = _ref3.selectedRows;
      this.selectedIds = [];
      selectedRows.forEach(function (row) {
        return _this.selectedIds.push(row.id);
      });
    },
    onSortChange: function onSortChange(params) {
      this.updateParams({
        sort: {
          type: params[0].type,
          field: params[0].field
        }
      });
      this.Get_Properties(this.serverParams.page);
    },
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Properties(this.serverParams.page);
    },
    New_Property: function New_Property() {
      this.$router.push({
        name: "realestate_create_property"
      });
    },
    Edit_Property: function Edit_Property(id) {
      this.$router.push({
        name: "realestate_edit_property",
        params: {
          id: id
        }
      });
    },
    Get_Categories: function Get_Categories() {
      var _this2 = this;
      axios.get("realestate/categories_all").then(function (res) {
        _this2.categories = res.data.categories;
      })["catch"](function () {});
    },
    Get_Properties: function Get_Properties(page) {
      var _this3 = this;
      this.serverParams.page = page;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("realestate/properties?page=" + page + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&category=" + this.category_filter + "&purpose=" + this.purpose_filter + "&status=" + this.status_filter + "&limit=" + this.limit).then(function (response) {
        _this3.totalRows = response.data.totalRows;
        _this3.properties = response.data.properties;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this3.isLoading = false;
      })["catch"](function () {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        setTimeout(function () {
          _this3.isLoading = false;
        }, 500);
      });
    },
    Remove_Property: function Remove_Property(id) {
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
          axios["delete"]("realestate/properties/" + id).then(function () {
            _this4.$swal(_this4.$t("Delete_Deleted"), _this4.$t("Deleted_in_successfully"), "success");
            _this4.Get_Properties(_this4.serverParams.page);
          })["catch"](function () {
            _this4.$swal(_this4.$t("Delete_Failed"), _this4.$t("Delete_Therewassomethingwronge"), "warning");
          });
        }
      });
    },
    delete_by_selected: function delete_by_selected() {
      var _this5 = this;
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
          axios.post("realestate/properties/delete/by_selection", {
            selectedIds: _this5.selectedIds
          }).then(function () {
            _this5.$swal(_this5.$t("Delete_Deleted"), _this5.$t("Deleted_in_successfully"), "success");
            _this5.Get_Properties(_this5.serverParams.page);
          })["catch"](function () {
            _this5.$swal(_this5.$t("Delete_Failed"), _this5.$t("Delete_Therewassomethingwronge"), "warning");
          });
        }
      });
    }
  },
  created: function created() {
    this.Get_Categories();
    this.Get_Properties(1);
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/realestate/properties.vue?vue&type=template&id=17bddd2a"
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/realestate/properties.vue?vue&type=template&id=17bddd2a ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("Properties"),
      folder: _vm.$t("Real_Estate")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("b-card", {
    staticClass: "wrapper"
  }, [_c("b-row", {
    staticClass: "mb-3"
  }, [_c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Property_Type")
    }
  }, [_c("b-form-select", {
    on: {
      change: function change($event) {
        return _vm.Get_Properties(1);
      }
    },
    model: {
      value: _vm.category_filter,
      callback: function callback($$v) {
        _vm.category_filter = $$v;
      },
      expression: "category_filter"
    }
  }, [_c("b-form-select-option", {
    attrs: {
      value: ""
    }
  }, [_vm._v(_vm._s(_vm.$t("All")))]), _vm._v(" "), _vm._l(_vm.categories, function (c) {
    return _c("b-form-select-option", {
      key: c.id,
      attrs: {
        value: c.id
      }
    }, [_vm._v(_vm._s(c.name))]);
  })], 2)], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Purpose")
    }
  }, [_c("b-form-select", {
    on: {
      change: function change($event) {
        return _vm.Get_Properties(1);
      }
    },
    model: {
      value: _vm.purpose_filter,
      callback: function callback($$v) {
        _vm.purpose_filter = $$v;
      },
      expression: "purpose_filter"
    }
  }, [_c("b-form-select-option", {
    attrs: {
      value: ""
    }
  }, [_vm._v(_vm._s(_vm.$t("All")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "sale"
    }
  }, [_vm._v(_vm._s(_vm.$t("For_Sale")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "rent"
    }
  }, [_vm._v(_vm._s(_vm.$t("For_Rent")))])], 1)], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Status")
    }
  }, [_c("b-form-select", {
    on: {
      change: function change($event) {
        return _vm.Get_Properties(1);
      }
    },
    model: {
      value: _vm.status_filter,
      callback: function callback($$v) {
        _vm.status_filter = $$v;
      },
      expression: "status_filter"
    }
  }, [_c("b-form-select-option", {
    attrs: {
      value: ""
    }
  }, [_vm._v(_vm._s(_vm.$t("All")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "available"
    }
  }, [_vm._v(_vm._s(_vm.$t("Available")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "sold"
    }
  }, [_vm._v(_vm._s(_vm.$t("Sold")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "rented"
    }
  }, [_vm._v(_vm._s(_vm.$t("Rented")))])], 1)], 1)], 1)], 1), _vm._v(" "), _c("vue-good-table", {
    attrs: {
      mode: "remote",
      columns: _vm.columns,
      totalRows: _vm.totalRows,
      rows: _vm.properties,
      "search-options": {
        enabled: true,
        placeholder: _vm.$t("Search_this_table")
      },
      "select-options": {
        enabled: true,
        clearSelectionText: ""
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
      "on-search": _vm.onSearch,
      "on-selected-rows-change": _vm.selectionChanged
    },
    scopedSlots: _vm._u([{
      key: "table-row",
      fn: function fn(props) {
        return [props.column.field == "featured_image" ? _c("span", [props.row.featured_image ? _c("img", {
          staticClass: "rounded",
          staticStyle: {
            width: "54px",
            height: "42px",
            "object-fit": "cover"
          },
          attrs: {
            src: "/" + props.row.featured_image
          }
        }) : _c("span", {
          staticClass: "text-muted"
        }, [_vm._v("—")])]) : props.column.field == "title" ? _c("span", [_c("a", {
          staticClass: "cursor-pointer text-primary font-weight-bold",
          on: {
            click: function click($event) {
              return _vm.Edit_Property(props.row.id);
            }
          }
        }, [_vm._v(_vm._s(props.row.title))]), _vm._v(" "), _c("div", {
          staticClass: "text-small text-muted"
        }, [_vm._v(_vm._s([props.row.city, props.row.region].filter(Boolean).join(", ")))])]) : props.column.field == "category" ? _c("span", [_vm._v("\n          " + _vm._s(props.row.category ? props.row.category.name : "—") + "\n        ")]) : props.column.field == "purpose" ? _c("span", [_c("span", {
          staticClass: "badge",
          "class": props.row.purpose === "rent" ? "badge-outline-info" : "badge-outline-primary"
        }, [_vm._v("\n            " + _vm._s(props.row.purpose === "rent" ? _vm.$t("For_Rent") : _vm.$t("For_Sale")) + "\n          ")])]) : props.column.field == "price" ? _c("span", [_vm._v("\n          " + _vm._s(_vm.format_price(props.row.price)) + "\n        ")]) : props.column.field == "featured" ? _c("span", [props.row.featured ? _c("lucide-icon", {
          staticClass: "text-warning",
          attrs: {
            name: "star"
          }
        }) : _c("span", {
          staticClass: "text-muted"
        }, [_vm._v("—")])], 1) : props.column.field == "status" ? _c("span", [_c("span", {
          staticClass: "badge",
          "class": _vm.status_class(props.row.status)
        }, [_vm._v(_vm._s(_vm.status_label(props.row.status)))])]) : props.column.field == "actions" ? _c("span", [_c("a", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "cursor-pointer",
          attrs: {
            title: _vm.$t("Edit")
          },
          on: {
            click: function click($event) {
              return _vm.Edit_Property(props.row.id);
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
              return _vm.Remove_Property(props.row.id);
            }
          }
        }, [_c("lucide-icon", {
          staticClass: "text-25 text-danger",
          attrs: {
            name: "x"
          }
        })], 1)]) : _vm._e()];
      }
    }], null, false, 560581796)
  }, [_c("div", {
    attrs: {
      slot: "selected-row-actions"
    },
    slot: "selected-row-actions"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    on: {
      click: function click($event) {
        return _vm.delete_by_selected();
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("Del")))])]), _vm._v(" "), _c("div", {
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
        return _vm.New_Property();
      }
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "plus"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Add_Property")) + "\n        ")], 1)], 1)])], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./resources/src/views/app/pages/realestate/properties.vue"
/*!*****************************************************************!*\
  !*** ./resources/src/views/app/pages/realestate/properties.vue ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _properties_vue_vue_type_template_id_17bddd2a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./properties.vue?vue&type=template&id=17bddd2a */ "./resources/src/views/app/pages/realestate/properties.vue?vue&type=template&id=17bddd2a");
/* harmony import */ var _properties_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/realestate/properties.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _properties_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _properties_vue_vue_type_template_id_17bddd2a__WEBPACK_IMPORTED_MODULE_0__.render,
  _properties_vue_vue_type_template_id_17bddd2a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/realestate/properties.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/realestate/properties.vue?vue&type=script&lang=js"
/*!*****************************************************************************************!*\
  !*** ./resources/src/views/app/pages/realestate/properties.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_properties_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./properties.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/realestate/properties.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_properties_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/realestate/properties.vue?vue&type=template&id=17bddd2a"
/*!***********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/realestate/properties.vue?vue&type=template&id=17bddd2a ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_properties_vue_vue_type_template_id_17bddd2a__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_properties_vue_vue_type_template_id_17bddd2a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_properties_vue_vue_type_template_id_17bddd2a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./properties.vue?vue&type=template&id=17bddd2a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/realestate/properties.vue?vue&type=template&id=17bddd2a");


/***/ }

}]);