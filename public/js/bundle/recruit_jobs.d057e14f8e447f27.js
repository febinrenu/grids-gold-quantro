"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["recruit_jobs"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/recruit/jobs.vue?vue&type=script&lang=js"
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/recruit/jobs.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
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
    title: "Jobs"
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
      status_filter: "",
      editmode: false,
      jobs: [],
      categories: [],
      job: this.empty_job()
    };
  },
  computed: {
    columns: function columns() {
      return [{
        label: this.$t("Job_Title"),
        field: "title",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Category"),
        field: "category",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Job_Type"),
        field: "job_type",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Location"),
        field: "location",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Status"),
        field: "status",
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
    empty_job: function empty_job() {
      return {
        id: "",
        title: "",
        category_id: "",
        job_type: "full_time",
        experience_level: "entry",
        status: "draft",
        location: "",
        vacancies: 1,
        deadline: "",
        salary_min: "",
        salary_max: "",
        currency: "USD",
        description: "",
        requirements: "",
        benefits: ""
      };
    },
    format_label: function format_label(v) {
      return v ? v.replace(/_/g, " ") : "-";
    },
    status_class: function status_class(s) {
      var map = {
        open: "badge-outline-success",
        draft: "badge-outline-warning",
        on_hold: "badge-outline-info",
        closed: "badge-outline-secondary"
      };
      return map[s] || "badge-outline-secondary";
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
        this.Get_Jobs(currentPage);
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
        this.Get_Jobs(1);
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
      this.Get_Jobs(this.serverParams.page);
    },
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Jobs(this.serverParams.page);
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
    Submit_Job: function Submit_Job() {
      var _this2 = this;
      this.$refs.Create_Job.validate().then(function (success) {
        if (!success) {
          _this2.makeToast("danger", _this2.$t("Please_fill_the_form_correctly"), _this2.$t("Failed"));
        } else {
          if (!_this2.editmode) _this2.Create_Job();else _this2.Update_Job();
        }
      });
    },
    New_Job: function New_Job() {
      this.reset_Form();
      this.editmode = false;
      this.Get_Categories();
      this.$bvModal.show("New_Job");
    },
    Edit_Job: function Edit_Job(job) {
      this.reset_Form();
      this.Get_Categories();
      this.job = _objectSpread(_objectSpread({}, this.empty_job()), job);
      this.editmode = true;
      this.$bvModal.show("New_Job");
    },
    Get_Categories: function Get_Categories() {
      var _this3 = this;
      axios.get("recruit/categories_all").then(function (_ref5) {
        var data = _ref5.data;
        return _this3.categories = data;
      });
    },
    Get_Jobs: function Get_Jobs(page) {
      var _this4 = this;
      this.serverParams.page = page;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("recruit/jobs?page=" + page + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&status=" + this.status_filter + "&limit=" + this.limit).then(function (response) {
        _this4.totalRows = response.data.totalRows;
        _this4.jobs = response.data.jobs;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this4.isLoading = false;
      })["catch"](function () {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        setTimeout(function () {
          _this4.isLoading = false;
        }, 500);
      });
    },
    Create_Job: function Create_Job() {
      var _this5 = this;
      this.SubmitProcessing = true;
      axios.post("recruit/jobs", this.job).then(function () {
        _this5.SubmitProcessing = false;
        Fire.$emit("Event_Job");
        _this5.makeToast("success", _this5.$t("Created_in_successfully"), _this5.$t("Success"));
      })["catch"](function () {
        _this5.SubmitProcessing = false;
        _this5.makeToast("danger", _this5.$t("InvalidData"), _this5.$t("Failed"));
      });
    },
    Update_Job: function Update_Job() {
      var _this6 = this;
      this.SubmitProcessing = true;
      axios.put("recruit/jobs/" + this.job.id, this.job).then(function () {
        _this6.SubmitProcessing = false;
        Fire.$emit("Event_Job");
        _this6.makeToast("success", _this6.$t("Updated_in_successfully"), _this6.$t("Success"));
      })["catch"](function () {
        _this6.SubmitProcessing = false;
        _this6.makeToast("danger", _this6.$t("InvalidData"), _this6.$t("Failed"));
      });
    },
    reset_Form: function reset_Form() {
      this.job = this.empty_job();
    },
    Remove_Job: function Remove_Job(id) {
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
          axios["delete"]("recruit/jobs/" + id).then(function () {
            _this7.$swal(_this7.$t("Delete_Deleted"), _this7.$t("Deleted_in_successfully"), "success");
            Fire.$emit("Event_Job");
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
          axios.post("recruit/jobs/delete/by_selection", {
            selectedIds: _this8.selectedIds
          }).then(function () {
            _this8.$swal(_this8.$t("Delete_Deleted"), _this8.$t("Deleted_in_successfully"), "success");
            Fire.$emit("Event_Job");
          })["catch"](function () {
            _this8.$swal(_this8.$t("Delete_Failed"), _this8.$t("Delete_Therewassomethingwronge"), "warning");
          });
        }
      });
    }
  },
  created: function created() {
    var _this9 = this;
    this.Get_Jobs(1);
    Fire.$on("Event_Job", function () {
      setTimeout(function () {
        _this9.Get_Jobs(_this9.serverParams.page);
        _this9.$bvModal.hide("New_Job");
      }, 500);
    });
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/recruit/jobs.vue?vue&type=template&id=86ec8f38"
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/recruit/jobs.vue?vue&type=template&id=86ec8f38 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("Jobs"),
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
      label: _vm.$t("Status")
    }
  }, [_c("b-form-select", {
    on: {
      change: function change($event) {
        return _vm.Get_Jobs(1);
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
      value: "draft"
    }
  }, [_vm._v(_vm._s(_vm.$t("Draft")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "open"
    }
  }, [_vm._v(_vm._s(_vm.$t("Open")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "on_hold"
    }
  }, [_vm._v(_vm._s(_vm.$t("On_Hold")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "closed"
    }
  }, [_vm._v(_vm._s(_vm.$t("Closed")))])], 1)], 1)], 1)], 1), _vm._v(" "), _c("vue-good-table", {
    attrs: {
      mode: "remote",
      columns: _vm.columns,
      totalRows: _vm.totalRows,
      rows: _vm.jobs,
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
        return [props.column.field == "job_type" ? _c("span", [_c("span", {
          staticClass: "badge badge-outline-info"
        }, [_vm._v(_vm._s(_vm.format_label(props.row.job_type)))])]) : props.column.field == "status" ? _c("span", [_c("span", {
          staticClass: "badge",
          "class": _vm.status_class(props.row.status)
        }, [_vm._v(_vm._s(_vm.format_label(props.row.status)))])]) : props.column.field == "category" ? _c("span", [_vm._v("\n          " + _vm._s(props.row.category ? props.row.category.name : "-") + "\n        ")]) : props.column.field == "actions" ? _c("span", [_c("a", {
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
              return _vm.Edit_Job(props.row);
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
              return _vm.Remove_Job(props.row.id);
            }
          }
        }, [_c("lucide-icon", {
          staticClass: "text-25 text-danger",
          attrs: {
            name: "x"
          }
        })], 1)]) : _vm._e()];
      }
    }], null, false, 3149201378)
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
        return _vm.New_Job();
      }
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "plus"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Add")) + "\n        ")], 1)], 1)])], 1) : _vm._e(), _vm._v(" "), _c("validation-observer", {
    ref: "Create_Job"
  }, [_c("b-modal", {
    attrs: {
      "hide-footer": "",
      size: "lg",
      id: "New_Job",
      title: _vm.editmode ? _vm.$t("Edit") : _vm.$t("Add")
    }
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Submit_Job.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "title",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Job_Title") + " *"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext)
          },
          model: {
            value: _vm.job.title,
            callback: function callback($$v) {
              _vm.$set(_vm.job, "title", $$v);
            },
            expression: "job.title"
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
      label: _vm.$t("Category")
    }
  }, [_c("v-select", {
    attrs: {
      reduce: function reduce(label) {
        return label.value;
      },
      placeholder: _vm.$t("Choose_Category"),
      options: _vm.categories.map(function (c) {
        return {
          label: c.name,
          value: c.id
        };
      })
    },
    model: {
      value: _vm.job.category_id,
      callback: function callback($$v) {
        _vm.$set(_vm.job, "category_id", $$v);
      },
      expression: "job.category_id"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Job_Type") + " *"
    }
  }, [_c("b-form-select", {
    model: {
      value: _vm.job.job_type,
      callback: function callback($$v) {
        _vm.$set(_vm.job, "job_type", $$v);
      },
      expression: "job.job_type"
    }
  }, [_c("b-form-select-option", {
    attrs: {
      value: "full_time"
    }
  }, [_vm._v(_vm._s(_vm.$t("Full_Time")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "part_time"
    }
  }, [_vm._v(_vm._s(_vm.$t("Part_Time")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "contract"
    }
  }, [_vm._v(_vm._s(_vm.$t("Contract")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "internship"
    }
  }, [_vm._v(_vm._s(_vm.$t("Internship")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "remote"
    }
  }, [_vm._v(_vm._s(_vm.$t("Remote")))])], 1)], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Experience_Level")
    }
  }, [_c("b-form-select", {
    model: {
      value: _vm.job.experience_level,
      callback: function callback($$v) {
        _vm.$set(_vm.job, "experience_level", $$v);
      },
      expression: "job.experience_level"
    }
  }, [_c("b-form-select-option", {
    attrs: {
      value: "entry"
    }
  }, [_vm._v(_vm._s(_vm.$t("Entry")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "mid"
    }
  }, [_vm._v(_vm._s(_vm.$t("Mid")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "senior"
    }
  }, [_vm._v(_vm._s(_vm.$t("Senior")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "lead"
    }
  }, [_vm._v(_vm._s(_vm.$t("Lead")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "manager"
    }
  }, [_vm._v(_vm._s(_vm.$t("Manager")))])], 1)], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Status")
    }
  }, [_c("b-form-select", {
    model: {
      value: _vm.job.status,
      callback: function callback($$v) {
        _vm.$set(_vm.job, "status", $$v);
      },
      expression: "job.status"
    }
  }, [_c("b-form-select-option", {
    attrs: {
      value: "draft"
    }
  }, [_vm._v(_vm._s(_vm.$t("Draft")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "open"
    }
  }, [_vm._v(_vm._s(_vm.$t("Open")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "on_hold"
    }
  }, [_vm._v(_vm._s(_vm.$t("On_Hold")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "closed"
    }
  }, [_vm._v(_vm._s(_vm.$t("Closed")))])], 1)], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Location")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.job.location,
      callback: function callback($$v) {
        _vm.$set(_vm.job, "location", $$v);
      },
      expression: "job.location"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Vacancies")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "number",
      min: "1"
    },
    model: {
      value: _vm.job.vacancies,
      callback: function callback($$v) {
        _vm.$set(_vm.job, "vacancies", $$v);
      },
      expression: "job.vacancies"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Deadline")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "date"
    },
    model: {
      value: _vm.job.deadline,
      callback: function callback($$v) {
        _vm.$set(_vm.job, "deadline", $$v);
      },
      expression: "job.deadline"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Salary_Min")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "number"
    },
    model: {
      value: _vm.job.salary_min,
      callback: function callback($$v) {
        _vm.$set(_vm.job, "salary_min", $$v);
      },
      expression: "job.salary_min"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Salary_Max")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "number"
    },
    model: {
      value: _vm.job.salary_max,
      callback: function callback($$v) {
        _vm.$set(_vm.job, "salary_max", $$v);
      },
      expression: "job.salary_max"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Currency")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.job.currency,
      callback: function callback($$v) {
        _vm.$set(_vm.job, "currency", $$v);
      },
      expression: "job.currency"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "description",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Description") + " *"
          }
        }, [_c("b-form-textarea", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            rows: "3"
          },
          model: {
            value: _vm.job.description,
            callback: function callback($$v) {
              _vm.$set(_vm.job, "description", $$v);
            },
            expression: "job.description"
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
      label: _vm.$t("Requirements")
    }
  }, [_c("b-form-textarea", {
    attrs: {
      rows: "3"
    },
    model: {
      value: _vm.job.requirements,
      callback: function callback($$v) {
        _vm.$set(_vm.job, "requirements", $$v);
      },
      expression: "job.requirements"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Benefits")
    }
  }, [_c("b-form-textarea", {
    attrs: {
      rows: "3"
    },
    model: {
      value: _vm.job.benefits,
      callback: function callback($$v) {
        _vm.$set(_vm.job, "benefits", $$v);
      },
      expression: "job.benefits"
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

/***/ "./resources/src/views/app/pages/recruit/jobs.vue"
/*!********************************************************!*\
  !*** ./resources/src/views/app/pages/recruit/jobs.vue ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jobs_vue_vue_type_template_id_86ec8f38__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jobs.vue?vue&type=template&id=86ec8f38 */ "./resources/src/views/app/pages/recruit/jobs.vue?vue&type=template&id=86ec8f38");
/* harmony import */ var _jobs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jobs.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/recruit/jobs.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _jobs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _jobs_vue_vue_type_template_id_86ec8f38__WEBPACK_IMPORTED_MODULE_0__.render,
  _jobs_vue_vue_type_template_id_86ec8f38__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/recruit/jobs.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/recruit/jobs.vue?vue&type=script&lang=js"
/*!********************************************************************************!*\
  !*** ./resources/src/views/app/pages/recruit/jobs.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_jobs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./jobs.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/recruit/jobs.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_jobs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/recruit/jobs.vue?vue&type=template&id=86ec8f38"
/*!**************************************************************************************!*\
  !*** ./resources/src/views/app/pages/recruit/jobs.vue?vue&type=template&id=86ec8f38 ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_jobs_vue_vue_type_template_id_86ec8f38__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_jobs_vue_vue_type_template_id_86ec8f38__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_jobs_vue_vue_type_template_id_86ec8f38__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./jobs.vue?vue&type=template&id=86ec8f38 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/recruit/jobs.vue?vue&type=template&id=86ec8f38");


/***/ }

}]);