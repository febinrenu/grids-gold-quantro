"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["realestate_categories"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/realestate/categories.vue?vue&type=script&lang=js"
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/realestate/categories.vue?vue&type=script&lang=js ***!
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
    title: "Property Categories"
  },
  data: function data() {
    return {
      isLoading: true,
      saving: false,
      editMode: false,
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
      categories: [],
      imageFile: null,
      imagePreview: null,
      form: {
        id: null,
        name: "",
        description: ""
      }
    };
  },
  computed: {
    columns: function columns() {
      return [{
        label: this.$t("Image"),
        field: "image",
        sortable: false,
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Name"),
        field: "name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Properties"),
        field: "properties_count",
        sortable: false,
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
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    updateParams: function updateParams(p) {
      this.serverParams = Object.assign({}, this.serverParams, p);
    },
    onPageChange: function onPageChange(_ref) {
      var currentPage = _ref.currentPage;
      if (this.serverParams.page !== currentPage) {
        this.updateParams({
          page: currentPage
        });
        this.Get_Categories(currentPage);
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
        this.Get_Categories(1);
      }
    },
    onSortChange: function onSortChange(params) {
      this.updateParams({
        sort: {
          type: params[0].type,
          field: params[0].field
        }
      });
      this.Get_Categories(this.serverParams.page);
    },
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Categories(this.serverParams.page);
    },
    onImageChange: function onImageChange(e) {
      var f = e.target.files[0];
      if (!f) return;
      this.imageFile = f;
      this.imagePreview = URL.createObjectURL(f);
    },
    New_Category: function New_Category() {
      this.editMode = false;
      this.form = {
        id: null,
        name: "",
        description: ""
      };
      this.imageFile = null;
      this.imagePreview = null;
      this.$bvModal.show("categoryModal");
    },
    Edit_Category: function Edit_Category(row) {
      this.editMode = true;
      this.form = {
        id: row.id,
        name: row.name,
        description: row.description || ""
      };
      this.imageFile = null;
      this.imagePreview = row.image ? "/" + row.image : null;
      this.$bvModal.show("categoryModal");
    },
    Get_Categories: function Get_Categories(page) {
      var _this = this;
      this.serverParams.page = page || 1;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("realestate/categories?page=" + this.serverParams.page + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&limit=" + this.limit).then(function (res) {
        _this.totalRows = res.data.totalRows;
        _this.categories = res.data.categories;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this.isLoading = false;
      })["catch"](function () {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        setTimeout(function () {
          _this.isLoading = false;
        }, 500);
      });
    },
    save: function save() {
      var _this2 = this;
      if (!this.form.name) {
        this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        return;
      }
      this.saving = true;
      var fd = new FormData();
      fd.append("name", this.form.name);
      if (this.form.description) fd.append("description", this.form.description);
      if (this.imageFile) fd.append("image_file", this.imageFile);
      var url = this.editMode ? "realestate/categories/" + this.form.id : "realestate/categories";
      axios.post(url, fd, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function () {
        _this2.saving = false;
        _this2.$bvModal.hide("categoryModal");
        _this2.makeToast("success", _this2.$t("Created_in_successfully"), _this2.$t("Success"));
        _this2.Get_Categories(_this2.serverParams.page);
      })["catch"](function () {
        _this2.saving = false;
        _this2.makeToast("danger", _this2.$t("InvalidData"), _this2.$t("Failed"));
      });
    },
    Remove_Category: function Remove_Category(id) {
      var _this3 = this;
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
          axios["delete"]("realestate/categories/" + id).then(function () {
            _this3.$swal(_this3.$t("Delete_Deleted"), _this3.$t("Deleted_in_successfully"), "success");
            _this3.Get_Categories(_this3.serverParams.page);
          })["catch"](function () {
            _this3.$swal(_this3.$t("Delete_Failed"), _this3.$t("Delete_Therewassomethingwronge"), "warning");
          });
        }
      });
    }
  },
  created: function created() {
    this.Get_Categories(1);
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/realestate/categories.vue?vue&type=template&id=7c5ba458"
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/realestate/categories.vue?vue&type=template&id=7c5ba458 ***!
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
      page: _vm.$t("Property_Categories"),
      folder: _vm.$t("Real_Estate")
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
      rows: _vm.categories,
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
        return [props.column.field == "image" ? _c("span", [props.row.image ? _c("img", {
          staticClass: "rounded",
          staticStyle: {
            width: "48px",
            height: "38px",
            "object-fit": "cover"
          },
          attrs: {
            src: "/" + props.row.image
          }
        }) : _c("span", {
          staticClass: "text-muted"
        }, [_vm._v("—")])]) : props.column.field == "properties_count" ? _c("span", [_c("span", {
          staticClass: "badge badge-outline-info"
        }, [_vm._v(_vm._s(props.row.properties_count))])]) : props.column.field == "actions" ? _c("span", [_c("a", {
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
              return _vm.Edit_Category(props.row);
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
              return _vm.Remove_Category(props.row.id);
            }
          }
        }, [_c("lucide-icon", {
          staticClass: "text-25 text-danger",
          attrs: {
            name: "x"
          }
        })], 1)]) : _vm._e()];
      }
    }], null, false, 1013577563)
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
        return _vm.New_Category();
      }
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "plus"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Add_Category")) + "\n        ")], 1)], 1)])], 1) : _vm._e(), _vm._v(" "), _c("b-modal", {
    attrs: {
      id: "categoryModal",
      title: _vm.editMode ? _vm.$t("Edit_Category") : _vm.$t("Add_Category"),
      "hide-footer": ""
    }
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.save.apply(null, arguments);
      }
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Name") + " *"
    }
  }, [_c("b-form-input", {
    attrs: {
      required: ""
    },
    model: {
      value: _vm.form.name,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "name", $$v);
      },
      expression: "form.name"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("Description")
    }
  }, [_c("b-form-textarea", {
    attrs: {
      rows: "3"
    },
    model: {
      value: _vm.form.description,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "description", $$v);
      },
      expression: "form.description"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("Image")
    }
  }, [_vm.imagePreview ? _c("div", {
    staticClass: "mb-2"
  }, [_c("img", {
    staticClass: "img-fluid rounded",
    staticStyle: {
      "max-height": "120px"
    },
    attrs: {
      src: _vm.imagePreview
    }
  })]) : _vm._e(), _vm._v(" "), _c("b-form-file", {
    attrs: {
      accept: "image/*",
      placeholder: _vm.$t("Choose_file")
    },
    on: {
      change: _vm.onImageChange
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "text-right"
  }, [_c("b-button", {
    attrs: {
      variant: "outline-secondary"
    },
    on: {
      click: function click($event) {
        return _vm.$bvModal.hide("categoryModal");
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("Cancel")))]), _vm._v(" "), _c("b-button", {
    attrs: {
      variant: "primary",
      type: "submit",
      disabled: _vm.saving
    }
  }, [_vm._v(_vm._s(_vm.editMode ? _vm.$t("Update") : _vm.$t("Save")))])], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./resources/src/views/app/pages/realestate/categories.vue"
/*!*****************************************************************!*\
  !*** ./resources/src/views/app/pages/realestate/categories.vue ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _categories_vue_vue_type_template_id_7c5ba458__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.vue?vue&type=template&id=7c5ba458 */ "./resources/src/views/app/pages/realestate/categories.vue?vue&type=template&id=7c5ba458");
/* harmony import */ var _categories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/realestate/categories.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _categories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _categories_vue_vue_type_template_id_7c5ba458__WEBPACK_IMPORTED_MODULE_0__.render,
  _categories_vue_vue_type_template_id_7c5ba458__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/realestate/categories.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/realestate/categories.vue?vue&type=script&lang=js"
/*!*****************************************************************************************!*\
  !*** ./resources/src/views/app/pages/realestate/categories.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_categories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./categories.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/realestate/categories.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_categories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/realestate/categories.vue?vue&type=template&id=7c5ba458"
/*!***********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/realestate/categories.vue?vue&type=template&id=7c5ba458 ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_categories_vue_vue_type_template_id_7c5ba458__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_categories_vue_vue_type_template_id_7c5ba458__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_categories_vue_vue_type_template_id_7c5ba458__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./categories.vue?vue&type=template&id=7c5ba458 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/realestate/categories.vue?vue&type=template&id=7c5ba458");


/***/ }

}]);