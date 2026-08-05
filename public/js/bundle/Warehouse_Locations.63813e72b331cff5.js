"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Warehouse_Locations"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/warehouse_locations.vue?vue&type=script&lang=js"
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/warehouse_locations.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Warehouse Locations"
  },
  data: function data() {
    return {
      isLoading: true,
      SubmitProcessing: false,
      tableKey: 0,
      serverParams: {
        sort: {
          field: "id",
          type: "desc"
        },
        page: 1,
        perPage: 10
      },
      totalRows: 0,
      search: "",
      limit: "10",
      locations: [],
      warehouses: [],
      filters: {
        warehouse_id: ""
      },
      editmode: false,
      location: {
        id: "",
        warehouse_id: "",
        code: "",
        name: "",
        is_active: true,
        is_restricted: false
      }
    };
  },
  computed: {
    columns: function columns() {
      return [{
        label: this.$t("Warehouses"),
        field: "warehouse",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Rack_Location_Code"),
        field: "code",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Location_Name"),
        field: "name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Status"),
        field: "is_active",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Restricted"),
        field: "is_restricted",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Action"),
        field: "actions",
        html: true,
        sortable: false,
        tdClass: "text-left",
        thClass: "text-left"
      }];
    },
    warehouseOptions: function warehouseOptions() {
      var opts = [{
        value: "",
        text: this.$t("All")
      }];
      return opts.concat(this.warehouses.map(function (w) {
        return {
          value: w.id,
          text: w.name
        };
      }));
    },
    warehouseOptionsNoAll: function warehouseOptionsNoAll() {
      return this.warehouses.map(function (w) {
        return {
          value: w.id,
          text: w.name
        };
      });
    }
  },
  methods: {
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
    onWarehouseFilterChange: function onWarehouseFilterChange() {
      this.serverParams.page = 1;
      this.getLocations();
    },
    // ------------------- VGT remote events -------------------\\
    onPageChange: function onPageChange(params) {
      this.serverParams.page = params.currentPage;
      this.getLocations();
    },
    onPerPageChange: function onPerPageChange(params) {
      this.serverParams.perPage = params.currentPerPage;
      this.getLocations();
    },
    onSortChange: function onSortChange(params) {
      if (params && params.length) {
        this.serverParams.sort.field = params[0].field;
        this.serverParams.sort.type = params[0].type;
      }
      this.getLocations();
    },
    onSearch: function onSearch(params) {
      this.search = params.searchTerm;
      this.getLocations();
    },
    // ------------------- CRUD -------------------\\
    reset_Form: function reset_Form() {
      this.location = {
        id: "",
        warehouse_id: this.filters.warehouse_id || (this.warehouses[0] ? this.warehouses[0].id : ""),
        code: "",
        name: "",
        is_active: true,
        is_restricted: false
      };
    },
    New_Location: function New_Location() {
      this.editmode = false;
      this.reset_Form();
      this.$bvModal.show("New_Warehouse_Location");
    },
    Edit_Location: function Edit_Location(row) {
      this.editmode = true;
      this.location = {
        id: row.id,
        warehouse_id: row.warehouse_id,
        code: row.code,
        name: row.name,
        is_active: !!row.is_active,
        is_restricted: !!row.is_restricted
      };
      this.$bvModal.show("New_Warehouse_Location");
    },
    Submit_Location: function Submit_Location() {
      var _this = this;
      this.$refs.Create_Location.validate().then(function (success) {
        if (!success) return;
        _this.SubmitProcessing = true;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
        var wasNew = !_this.editmode;
        var newWarehouseId = _this.location.warehouse_id;
        var payload = {
          warehouse_id: _this.location.warehouse_id,
          code: _this.location.code,
          name: _this.location.name,
          is_active: _this.location.is_active,
          is_restricted: _this.location.is_restricted
        };
        var req = _this.editmode ? axios.put("warehouse_locations/" + _this.location.id, payload) : axios.post("warehouse_locations", payload);
        req.then(function () {
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
          _this.SubmitProcessing = false;
          _this.$bvModal.hide("New_Warehouse_Location");
          _this.makeToast("success", wasNew ? _this.$t("Successfully_Created") : _this.$t("Successfully_Updated"), _this.$t("Success"));
          if (wasNew) {
            // Jump to page 1 (new row sorts to top via id desc) and clear any
            // warehouse filter that would hide it, so the user sees their new
            // row immediately after saving.
            _this.serverParams.page = 1;
            if (_this.filters.warehouse_id && Number(_this.filters.warehouse_id) !== Number(newWarehouseId)) {
              _this.filters.warehouse_id = "";
            }
          }
          _this.refreshTable();
        })["catch"](function () {
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
          _this.SubmitProcessing = false;
          _this.makeToast("danger", _this.$t("InvalidData"), _this.$t("Failed"));
        });
      });
    },
    Remove_Location: function Remove_Location(id) {
      var _this2 = this;
      this.$swal({
        title: this.$t("Are_you_sure"),
        text: this.$t("You_wont_be_able_to_revert_this"),
        type: "warning",
        showCancelButton: true,
        confirmButtonText: this.$t("Yes_delete_it"),
        cancelButtonText: this.$t("No_cancel"),
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33"
      }).then(function (result) {
        if (!result.value) return;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
        axios["delete"]("warehouse_locations/" + id).then(function () {
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
          _this2.makeToast("success", _this2.$t("Deleted_in_successfully"), _this2.$t("Success"));
          _this2.refreshTable();
        })["catch"](function () {
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
          _this2.makeToast("danger", _this2.$t("InvalidData"), _this2.$t("Failed"));
        });
      });
    },
    // ------------------- Load list -------------------\\
    getLocations: function getLocations() {
      var _this3 = this;
      // Only show the full-page spinner on the very first load. Subsequent
      // refreshes keep the card mounted; we remount only the table itself
      // via tableKey so vue-good-table picks up the new rows reliably.
      var initial = this.isLoading;
      return axios.get("warehouse_locations", {
        params: {
          page: this.serverParams.page,
          limit: this.serverParams.perPage,
          SortField: this.serverParams.sort.field,
          SortType: this.serverParams.sort.type,
          search: this.search,
          warehouse_id: this.filters.warehouse_id || "",
          _t: Date.now()
        }
      }).then(function (response) {
        _this3.locations = response.data.locations || [];
        _this3.totalRows = response.data.totalRows || 0;
        _this3.warehouses = response.data.warehouses || [];
        if (initial) _this3.isLoading = false;
      })["catch"](function () {
        if (initial) {
          setTimeout(function () {
            _this3.isLoading = false;
          }, 400);
        }
      });
    },
    /** Re-fetch and force vue-good-table to remount so new/changed rows appear. */refreshTable: function refreshTable() {
      var _this4 = this;
      return this.getLocations()["finally"](function () {
        _this4.tableKey += 1;
      });
    }
  },
  created: function created() {
    if (this.$route && this.$route.query && this.$route.query.warehouse_id) {
      this.filters.warehouse_id = this.$route.query.warehouse_id;
    }
    this.getLocations();
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/warehouse_locations.vue?vue&type=template&id=9d5bc15a"
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/warehouse_locations.vue?vue&type=template&id=9d5bc15a ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("Warehouse_Locations"),
      folder: _vm.$t("Settings")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("b-card", {
    staticClass: "wrapper"
  }, [_c("b-row", {
    staticClass: "mb-3"
  }, [_c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Warehouses")
    }
  }, [_c("b-form-select", {
    attrs: {
      options: _vm.warehouseOptions
    },
    on: {
      change: _vm.onWarehouseFilterChange
    },
    model: {
      value: _vm.filters.warehouse_id,
      callback: function callback($$v) {
        _vm.$set(_vm.filters, "warehouse_id", $$v);
      },
      expression: "filters.warehouse_id"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "d-flex align-items-end justify-content-end",
    attrs: {
      md: "6"
    }
  }, [_c("b-button", {
    staticClass: "btn-rounded",
    attrs: {
      variant: "btn btn-primary btn-icon m-1"
    },
    on: {
      click: function click($event) {
        return _vm.New_Location();
      }
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "plus"
    }
  }), _vm._v("\n          " + _vm._s(_vm.$t("Add")) + "\n        ")], 1)], 1)], 1), _vm._v(" "), _c("vue-good-table", {
    key: _vm.tableKey,
    attrs: {
      mode: "remote",
      columns: _vm.columns,
      totalRows: _vm.totalRows,
      rows: _vm.locations,
      "search-options": {
        enabled: true,
        placeholder: _vm.$t("Search_this_table")
      },
      "pagination-options": {
        enabled: true,
        mode: "records",
        nextLabel: "next",
        prevLabel: "prev",
        perPage: _vm.serverParams.perPage,
        setCurrentPage: _vm.serverParams.page
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
        return [props.column.field === "is_active" ? _c("span", [_c("span", {
          staticClass: "badge",
          "class": props.row.is_active ? "badge-success" : "badge-danger"
        }, [_vm._v("\n            " + _vm._s(props.row.is_active ? _vm.$t("Active") : _vm.$t("Inactive")) + "\n          ")])]) : props.column.field === "is_restricted" ? _c("span", [_c("span", {
          staticClass: "badge",
          "class": props.row.is_restricted ? "badge-warning" : "badge-light"
        }, [_vm._v("\n            " + _vm._s(props.row.is_restricted ? _vm.$t("Restricted") : _vm.$t("Standard")) + "\n          ")])]) : props.column.field === "actions" ? _c("span", [_c("a", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          attrs: {
            title: "Edit"
          },
          on: {
            click: function click($event) {
              return _vm.Edit_Location(props.row);
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
          attrs: {
            title: "Delete"
          },
          on: {
            click: function click($event) {
              return _vm.Remove_Location(props.row.id);
            }
          }
        }, [_c("lucide-icon", {
          staticClass: "text-25 text-danger",
          attrs: {
            name: "x"
          }
        })], 1)]) : _vm._e()];
      }
    }], null, false, 1230859093)
  })], 1) : _vm._e(), _vm._v(" "), _c("validation-observer", {
    ref: "Create_Location"
  }, [_c("b-modal", {
    attrs: {
      "hide-footer": "",
      size: "lg",
      id: "New_Warehouse_Location",
      title: _vm.editmode ? _vm.$t("Edit") : _vm.$t("Add")
    }
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Submit_Location.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Warehouse",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Warehouse") + " " + "*"
          }
        }, [_c("b-form-select", {
          attrs: {
            options: _vm.warehouseOptionsNoAll,
            state: _vm.getValidationState(validationContext)
          },
          model: {
            value: _vm.location.warehouse_id,
            callback: function callback($$v) {
              _vm.$set(_vm.location, "warehouse_id", $$v);
            },
            expression: "location.warehouse_id"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Code",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Rack_Location_Code") + " " + "*"
          }
        }, [_c("b-form-input", {
          attrs: {
            placeholder: _vm.$t("Enter_Rack_Location_Code"),
            state: _vm.getValidationState(validationContext)
          },
          model: {
            value: _vm.location.code,
            callback: function callback($$v) {
              _vm.$set(_vm.location, "code", $$v);
            },
            expression: "location.code"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Location_Name")
    }
  }, [_c("b-form-input", {
    attrs: {
      placeholder: _vm.$t("Enter_Location_Name")
    },
    model: {
      value: _vm.location.name,
      callback: function callback($$v) {
        _vm.$set(_vm.location, "name", $$v);
      },
      expression: "location.name"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "d-flex align-items-center",
    attrs: {
      md: "6"
    }
  }, [_c("label", {
    staticClass: "switch switch-primary mr-3"
  }, [_c("span", [_vm._v(_vm._s(_vm.$t("Active")))])]), _vm._v(" "), _c("b-form-checkbox", {
    attrs: {
      "switch": ""
    },
    model: {
      value: _vm.location.is_active,
      callback: function callback($$v) {
        _vm.$set(_vm.location, "is_active", $$v);
      },
      expression: "location.is_active"
    }
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "d-flex align-items-center",
    attrs: {
      md: "6"
    }
  }, [_c("label", {
    staticClass: "switch switch-primary mr-3"
  }, [_c("span", [_vm._v(_vm._s(_vm.$t("Restricted") || "Restricted (safe / vault)"))])]), _vm._v(" "), _c("b-form-checkbox", {
    attrs: {
      "switch": ""
    },
    model: {
      value: _vm.location.is_restricted,
      callback: function callback($$v) {
        _vm.$set(_vm.location, "is_restricted", $$v);
      },
      expression: "location.is_restricted"
    }
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mt-3",
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
  }), _vm._v(" " + _vm._s(_vm.$t("submit")) + "\n            ")], 1), _vm._v(" "), _vm.SubmitProcessing ? _vm._m(0) : _vm._e()], 1)], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "typo__p"
  }, [_c("div", {
    staticClass: "spinner sm spinner-primary mt-3"
  })]);
}];
render._withStripped = true;


/***/ },

/***/ "./resources/src/views/app/pages/settings/warehouse_locations.vue"
/*!************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/warehouse_locations.vue ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _warehouse_locations_vue_vue_type_template_id_9d5bc15a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warehouse_locations.vue?vue&type=template&id=9d5bc15a */ "./resources/src/views/app/pages/settings/warehouse_locations.vue?vue&type=template&id=9d5bc15a");
/* harmony import */ var _warehouse_locations_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warehouse_locations.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/settings/warehouse_locations.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _warehouse_locations_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _warehouse_locations_vue_vue_type_template_id_9d5bc15a__WEBPACK_IMPORTED_MODULE_0__.render,
  _warehouse_locations_vue_vue_type_template_id_9d5bc15a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/settings/warehouse_locations.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/settings/warehouse_locations.vue?vue&type=script&lang=js"
/*!************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/warehouse_locations.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_warehouse_locations_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./warehouse_locations.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/warehouse_locations.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_warehouse_locations_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/settings/warehouse_locations.vue?vue&type=template&id=9d5bc15a"
/*!******************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/warehouse_locations.vue?vue&type=template&id=9d5bc15a ***!
  \******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_warehouse_locations_vue_vue_type_template_id_9d5bc15a__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_warehouse_locations_vue_vue_type_template_id_9d5bc15a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_warehouse_locations_vue_vue_type_template_id_9d5bc15a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./warehouse_locations.vue?vue&type=template&id=9d5bc15a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/warehouse_locations.vue?vue&type=template&id=9d5bc15a");


/***/ }

}]);