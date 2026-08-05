"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["recruit_candidates"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/recruit/candidates.vue?vue&type=script&lang=js"
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/recruit/candidates.vue?vue&type=script&lang=js ***!
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
    title: "Candidates"
  },
  data: function data() {
    return {
      isLoading: true,
      SubmitProcessing: false,
      serverParams: {
        columnFilters: {},
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
      source_filter: "",
      sources: ["website", "referral", "linkedin", "job_board", "agency", "walk_in", "other"],
      editmode: false,
      candidates: [],
      resumeFile: null,
      photoFile: null,
      candidate: this.empty_candidate()
    };
  },
  computed: {
    columns: function columns() {
      return [{
        label: this.$t("Name"),
        field: "full_name",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Email"),
        field: "email",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Phone"),
        field: "phone",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Source"),
        field: "source",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Applications"),
        field: "applications_count",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
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
    empty_candidate: function empty_candidate() {
      return {
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        source: "website",
        current_position: "",
        current_company: "",
        current_salary: "",
        expected_salary: "",
        experience_years: "",
        city: "",
        country: "",
        linkedin_url: "",
        portfolio_url: "",
        skills: "",
        notes: ""
      };
    },
    format_label: function format_label(v) {
      return v ? v.replace(/_/g, " ") : "-";
    },
    onResumeChange: function onResumeChange(e) {
      this.resumeFile = e.target.files[0];
    },
    onPhotoChange: function onPhotoChange(e) {
      this.photoFile = e.target.files[0];
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
        this.Get_Candidates(currentPage);
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
        this.Get_Candidates(1);
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
      this.Get_Candidates(this.serverParams.page);
    },
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Candidates(this.serverParams.page);
    },
    getValidationState: function getValidationState(_ref4) {
      var dirty = _ref4.dirty,
        validated = _ref4.validated,
        _ref4$valid = _ref4.valid,
        valid = _ref4$valid === void 0 ? null : _ref4$valid;
      return dirty || validated ? valid : null;
    },
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    build_form_data: function build_form_data() {
      var _this2 = this;
      var fd = new FormData();
      Object.keys(this.candidate).forEach(function (key) {
        if (key === "id") return;
        var val = _this2.candidate[key];
        if (val !== null && val !== undefined && val !== "") fd.append(key, val);
      });
      if (this.resumeFile) fd.append("resume", this.resumeFile);
      if (this.photoFile) fd.append("photo", this.photoFile);
      return fd;
    },
    Submit_Candidate: function Submit_Candidate() {
      var _this3 = this;
      this.$refs.Create_Candidate.validate().then(function (success) {
        if (!success) {
          _this3.makeToast("danger", _this3.$t("Please_fill_the_form_correctly"), _this3.$t("Failed"));
        } else {
          if (!_this3.editmode) _this3.Create_Candidate();else _this3.Update_Candidate();
        }
      });
    },
    New_Candidate: function New_Candidate() {
      this.reset_Form();
      this.editmode = false;
      this.$bvModal.show("New_Candidate");
    },
    Edit_Candidate: function Edit_Candidate(candidate) {
      this.reset_Form();
      this.candidate = _objectSpread(_objectSpread({}, this.empty_candidate()), candidate);
      this.editmode = true;
      this.$bvModal.show("New_Candidate");
    },
    Get_Candidates: function Get_Candidates(page) {
      var _this4 = this;
      this.serverParams.page = page;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("recruit/candidates?page=" + page + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&source=" + this.source_filter + "&limit=" + this.limit).then(function (response) {
        _this4.totalRows = response.data.totalRows;
        _this4.candidates = response.data.candidates;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this4.isLoading = false;
      })["catch"](function () {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        setTimeout(function () {
          _this4.isLoading = false;
        }, 500);
      });
    },
    Create_Candidate: function Create_Candidate() {
      var _this5 = this;
      this.SubmitProcessing = true;
      axios.post("recruit/candidates", this.build_form_data()).then(function () {
        _this5.SubmitProcessing = false;
        Fire.$emit("Event_Candidate");
        _this5.makeToast("success", _this5.$t("Created_in_successfully"), _this5.$t("Success"));
      })["catch"](function () {
        _this5.SubmitProcessing = false;
        _this5.makeToast("danger", _this5.$t("InvalidData"), _this5.$t("Failed"));
      });
    },
    Update_Candidate: function Update_Candidate() {
      var _this6 = this;
      this.SubmitProcessing = true;
      var fd = this.build_form_data();
      fd.append("_method", "PUT");
      axios.post("recruit/candidates/" + this.candidate.id, fd).then(function () {
        _this6.SubmitProcessing = false;
        Fire.$emit("Event_Candidate");
        _this6.makeToast("success", _this6.$t("Updated_in_successfully"), _this6.$t("Success"));
      })["catch"](function () {
        _this6.SubmitProcessing = false;
        _this6.makeToast("danger", _this6.$t("InvalidData"), _this6.$t("Failed"));
      });
    },
    reset_Form: function reset_Form() {
      this.candidate = this.empty_candidate();
      this.resumeFile = null;
      this.photoFile = null;
    },
    Remove_Candidate: function Remove_Candidate(id) {
      var _this7 = this;
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
          axios["delete"]("recruit/candidates/" + id).then(function () {
            _this7.$swal(_this7.$t("Delete_Deleted"), _this7.$t("Deleted_in_successfully"), "success");
            Fire.$emit("Event_Candidate");
          })["catch"](function () {
            _this7.$swal(_this7.$t("Delete_Failed"), _this7.$t("Delete_Therewassomethingwronge"), "warning");
          });
        }
      });
    },
    delete_by_selected: function delete_by_selected() {
      var _this8 = this;
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
          axios.post("recruit/candidates/delete/by_selection", {
            selectedIds: _this8.selectedIds
          }).then(function () {
            _this8.$swal(_this8.$t("Delete_Deleted"), _this8.$t("Deleted_in_successfully"), "success");
            Fire.$emit("Event_Candidate");
          })["catch"](function () {
            _this8.$swal(_this8.$t("Delete_Failed"), _this8.$t("Delete_Therewassomethingwronge"), "warning");
          });
        }
      });
    }
  },
  created: function created() {
    var _this9 = this;
    this.Get_Candidates(1);
    Fire.$on("Event_Candidate", function () {
      setTimeout(function () {
        _this9.Get_Candidates(_this9.serverParams.page);
        _this9.$bvModal.hide("New_Candidate");
      }, 500);
    });
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/recruit/candidates.vue?vue&type=template&id=e06d8c44"
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/recruit/candidates.vue?vue&type=template&id=e06d8c44 ***!
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
      page: _vm.$t("Candidates"),
      folder: _vm.$t("Recruit")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("b-card", {
    staticClass: "wrapper"
  }, [_c("b-row", {
    staticClass: "mb-3"
  }, [_c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Source")
    }
  }, [_c("b-form-select", {
    on: {
      change: function change($event) {
        return _vm.Get_Candidates(1);
      }
    },
    model: {
      value: _vm.source_filter,
      callback: function callback($$v) {
        _vm.source_filter = $$v;
      },
      expression: "source_filter"
    }
  }, [_c("b-form-select-option", {
    attrs: {
      value: ""
    }
  }, [_vm._v(_vm._s(_vm.$t("All")))]), _vm._v(" "), _vm._l(_vm.sources, function (s) {
    return _c("b-form-select-option", {
      key: s,
      attrs: {
        value: s
      }
    }, [_vm._v(_vm._s(_vm.format_label(s)))]);
  })], 2)], 1)], 1)], 1), _vm._v(" "), _c("vue-good-table", {
    attrs: {
      mode: "remote",
      columns: _vm.columns,
      totalRows: _vm.totalRows,
      rows: _vm.candidates,
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
        return [props.column.field == "full_name" ? _c("span", [_vm._v("\n          " + _vm._s(props.row.first_name) + " " + _vm._s(props.row.last_name) + "\n        ")]) : props.column.field == "source" ? _c("span", [_c("span", {
          staticClass: "badge badge-outline-info"
        }, [_vm._v(_vm._s(_vm.format_label(props.row.source)))])]) : props.column.field == "actions" ? _c("span", [_c("a", {
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
              return _vm.Edit_Candidate(props.row);
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
            title: "Delete"
          },
          on: {
            click: function click($event) {
              return _vm.Remove_Candidate(props.row.id);
            }
          }
        }, [_c("lucide-icon", {
          staticClass: "text-25 text-danger",
          attrs: {
            name: "x"
          }
        })], 1)]) : _vm._e()];
      }
    }], null, false, 2496498958)
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
        return _vm.New_Candidate();
      }
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "plus"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Add")) + "\n        ")], 1)], 1)])], 1) : _vm._e(), _vm._v(" "), _c("validation-observer", {
    ref: "Create_Candidate"
  }, [_c("b-modal", {
    attrs: {
      "hide-footer": "",
      size: "lg",
      id: "New_Candidate",
      title: _vm.editmode ? _vm.$t("Edit") : _vm.$t("Add")
    }
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Submit_Candidate.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "first_name",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("First_Name") + " *"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext)
          },
          model: {
            value: _vm.candidate.first_name,
            callback: function callback($$v) {
              _vm.$set(_vm.candidate, "first_name", $$v);
            },
            expression: "candidate.first_name"
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
      name: "last_name",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Last_Name") + " *"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext)
          },
          model: {
            value: _vm.candidate.last_name,
            callback: function callback($$v) {
              _vm.$set(_vm.candidate, "last_name", $$v);
            },
            expression: "candidate.last_name"
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
      name: "email",
      rules: {
        required: true,
        email: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Email") + " *"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext)
          },
          model: {
            value: _vm.candidate.email,
            callback: function callback($$v) {
              _vm.$set(_vm.candidate, "email", $$v);
            },
            expression: "candidate.email"
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
      label: _vm.$t("Phone")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.candidate.phone,
      callback: function callback($$v) {
        _vm.$set(_vm.candidate, "phone", $$v);
      },
      expression: "candidate.phone"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Source")
    }
  }, [_c("b-form-select", {
    model: {
      value: _vm.candidate.source,
      callback: function callback($$v) {
        _vm.$set(_vm.candidate, "source", $$v);
      },
      expression: "candidate.source"
    }
  }, _vm._l(_vm.sources, function (s) {
    return _c("b-form-select-option", {
      key: s,
      attrs: {
        value: s
      }
    }, [_vm._v(_vm._s(_vm.format_label(s)))]);
  }), 1)], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Current_Position")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.candidate.current_position,
      callback: function callback($$v) {
        _vm.$set(_vm.candidate, "current_position", $$v);
      },
      expression: "candidate.current_position"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Experience_Years")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "number",
      min: "0"
    },
    model: {
      value: _vm.candidate.experience_years,
      callback: function callback($$v) {
        _vm.$set(_vm.candidate, "experience_years", $$v);
      },
      expression: "candidate.experience_years"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Current_Company")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.candidate.current_company,
      callback: function callback($$v) {
        _vm.$set(_vm.candidate, "current_company", $$v);
      },
      expression: "candidate.current_company"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Current_Salary")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "number"
    },
    model: {
      value: _vm.candidate.current_salary,
      callback: function callback($$v) {
        _vm.$set(_vm.candidate, "current_salary", $$v);
      },
      expression: "candidate.current_salary"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Expected_Salary")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "number"
    },
    model: {
      value: _vm.candidate.expected_salary,
      callback: function callback($$v) {
        _vm.$set(_vm.candidate, "expected_salary", $$v);
      },
      expression: "candidate.expected_salary"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("City")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.candidate.city,
      callback: function callback($$v) {
        _vm.$set(_vm.candidate, "city", $$v);
      },
      expression: "candidate.city"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Country")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.candidate.country,
      callback: function callback($$v) {
        _vm.$set(_vm.candidate, "country", $$v);
      },
      expression: "candidate.country"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("LinkedIn_URL")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.candidate.linkedin_url,
      callback: function callback($$v) {
        _vm.$set(_vm.candidate, "linkedin_url", $$v);
      },
      expression: "candidate.linkedin_url"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Portfolio_URL")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.candidate.portfolio_url,
      callback: function callback($$v) {
        _vm.$set(_vm.candidate, "portfolio_url", $$v);
      },
      expression: "candidate.portfolio_url"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Resume")
    }
  }, [_c("b-form-file", {
    attrs: {
      accept: ".pdf,.doc,.docx",
      placeholder: _vm.$t("Choose_a_file")
    },
    on: {
      change: _vm.onResumeChange
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Photo")
    }
  }, [_c("b-form-file", {
    attrs: {
      accept: "image/*",
      placeholder: _vm.$t("Choose_a_file")
    },
    on: {
      change: _vm.onPhotoChange
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Skills")
    }
  }, [_c("b-form-textarea", {
    attrs: {
      rows: "2"
    },
    model: {
      value: _vm.candidate.skills,
      callback: function callback($$v) {
        _vm.$set(_vm.candidate, "skills", $$v);
      },
      expression: "candidate.skills"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Notes")
    }
  }, [_c("b-form-textarea", {
    attrs: {
      rows: "2"
    },
    model: {
      value: _vm.candidate.notes,
      callback: function callback($$v) {
        _vm.$set(_vm.candidate, "notes", $$v);
      },
      expression: "candidate.notes"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
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

/***/ "./resources/src/views/app/pages/recruit/candidates.vue"
/*!**************************************************************!*\
  !*** ./resources/src/views/app/pages/recruit/candidates.vue ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _candidates_vue_vue_type_template_id_e06d8c44__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./candidates.vue?vue&type=template&id=e06d8c44 */ "./resources/src/views/app/pages/recruit/candidates.vue?vue&type=template&id=e06d8c44");
/* harmony import */ var _candidates_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./candidates.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/recruit/candidates.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _candidates_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _candidates_vue_vue_type_template_id_e06d8c44__WEBPACK_IMPORTED_MODULE_0__.render,
  _candidates_vue_vue_type_template_id_e06d8c44__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/recruit/candidates.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/recruit/candidates.vue?vue&type=script&lang=js"
/*!**************************************************************************************!*\
  !*** ./resources/src/views/app/pages/recruit/candidates.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_candidates_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./candidates.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/recruit/candidates.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_candidates_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/recruit/candidates.vue?vue&type=template&id=e06d8c44"
/*!********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/recruit/candidates.vue?vue&type=template&id=e06d8c44 ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_candidates_vue_vue_type_template_id_e06d8c44__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_candidates_vue_vue_type_template_id_e06d8c44__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_candidates_vue_vue_type_template_id_e06d8c44__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./candidates.vue?vue&type=template&id=e06d8c44 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/recruit/candidates.vue?vue&type=template&id=e06d8c44");


/***/ }

}]);