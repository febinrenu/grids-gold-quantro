"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["meeting_meetings"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/meeting/meetings.vue?vue&type=script&lang=js"
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/meeting/meetings.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
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
    title: "Meetings"
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
      type_filter: "",
      date_from: "",
      date_to: "",
      types: ["physical", "online"],
      statuses: ["scheduled", "ongoing", "completed", "cancelled"],
      platforms: ["zoom", "google_meet", "teams", "other"],
      editmode: false,
      meetings: [],
      users: [],
      meeting: this.empty_meeting()
    };
  },
  computed: {
    columns: function columns() {
      return [{
        label: this.$t("Meeting_Title"),
        field: "title",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Meeting_Date"),
        field: "datetime",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Meeting_Type"),
        field: "type",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Organizer"),
        field: "organizer",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Participants"),
        field: "participants_count",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Status"),
        field: "status",
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
    empty_meeting: function empty_meeting() {
      return {
        id: "",
        title: "",
        description: "",
        agenda: "",
        meeting_date: "",
        start_time: "",
        end_time: "",
        location: "",
        type: "physical",
        status: "scheduled",
        platform: null,
        meeting_link: "",
        reminder_minutes: 30,
        organizer_id: "",
        participants: []
      };
    },
    format_label: function format_label(v) {
      return v ? String(v).replace(/_/g, " ") : "-";
    },
    platform_label: function platform_label(p) {
      var map = {
        zoom: "Zoom",
        google_meet: "Google Meet",
        teams: "Microsoft Teams",
        other: "Other"
      };
      return map[p] || p;
    },
    short_time: function short_time(t) {
      return t ? String(t).substring(0, 5) : "";
    },
    status_class: function status_class(s) {
      var map = {
        scheduled: "badge-outline-primary",
        ongoing: "badge-outline-warning",
        completed: "badge-outline-success",
        cancelled: "badge-outline-danger"
      };
      return map[s] || "badge-outline-secondary";
    },
    user_name: function user_name(u) {
      if (!u) return "-";
      var n = ((u.firstname || "") + " " + (u.lastname || "")).trim();
      return n || u.username || "-";
    },
    user_label: function user_label(u) {
      var n = ((u.firstname || "") + " " + (u.lastname || "")).trim();
      return (n || u.username) + (u.email ? " (" + u.email + ")" : "");
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
        this.Get_Meetings(currentPage);
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
        this.Get_Meetings(1);
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
      this.Get_Meetings(this.serverParams.page);
    },
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Meetings(this.serverParams.page);
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
    View_Details: function View_Details(id) {
      this.$router.push({
        name: "meeting_details",
        params: {
          id: id
        }
      });
    },
    Submit_Meeting: function Submit_Meeting() {
      var _this2 = this;
      this.$refs.Create_Meeting.validate().then(function (success) {
        if (!success) {
          _this2.makeToast("danger", _this2.$t("Please_fill_the_form_correctly"), _this2.$t("Failed"));
        } else {
          if (!_this2.editmode) _this2.Create_Meeting();else _this2.Update_Meeting();
        }
      });
    },
    New_Meeting: function New_Meeting() {
      this.reset_Form();
      this.editmode = false;
      this.Get_FormData();
      this.$bvModal.show("New_Meeting");
    },
    Edit_Meeting: function Edit_Meeting(meeting) {
      var _this3 = this;
      this.reset_Form();
      this.Get_FormData();
      // Fetch the full meeting (with participants) first so the form opens
      // already populated and a quick save cannot wipe the participant list.
      axios.get("meeting/meetings/" + meeting.id).then(function (_ref5) {
        var data = _ref5.data;
        var m = data.meeting;
        _this3.meeting = _objectSpread(_objectSpread(_objectSpread({}, _this3.empty_meeting()), m), {}, {
          meeting_date: m.meeting_date ? String(m.meeting_date).substring(0, 10) : "",
          start_time: _this3.short_time(m.start_time),
          end_time: _this3.short_time(m.end_time),
          participants: (m.participants || []).map(function (p) {
            return p.user_id;
          })
        });
        _this3.editmode = true;
        _this3.$bvModal.show("New_Meeting");
      })["catch"](function () {
        _this3.makeToast("danger", _this3.$t("InvalidData"), _this3.$t("Failed"));
      });
    },
    Get_FormData: function Get_FormData() {
      var _this4 = this;
      axios.get("users_list_for_select").then(function (_ref6) {
        var data = _ref6.data;
        return _this4.users = data.users || [];
      });
    },
    Get_Meetings: function Get_Meetings(page) {
      var _this5 = this;
      this.serverParams.page = page;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("meeting/meetings?page=" + page + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&status=" + this.status_filter + "&type=" + this.type_filter + "&date_from=" + this.date_from + "&date_to=" + this.date_to + "&limit=" + this.limit).then(function (response) {
        _this5.totalRows = response.data.totalRows;
        _this5.meetings = response.data.meetings;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this5.isLoading = false;
      })["catch"](function () {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        setTimeout(function () {
          _this5.isLoading = false;
        }, 500);
      });
    },
    Create_Meeting: function Create_Meeting() {
      var _this6 = this;
      this.SubmitProcessing = true;
      axios.post("meeting/meetings", this.meeting).then(function () {
        _this6.SubmitProcessing = false;
        Fire.$emit("Event_Meeting");
        _this6.makeToast("success", _this6.$t("Created_in_successfully"), _this6.$t("Success"));
      })["catch"](function () {
        _this6.SubmitProcessing = false;
        _this6.makeToast("danger", _this6.$t("InvalidData"), _this6.$t("Failed"));
      });
    },
    Update_Meeting: function Update_Meeting() {
      var _this7 = this;
      this.SubmitProcessing = true;
      axios.put("meeting/meetings/" + this.meeting.id, this.meeting).then(function () {
        _this7.SubmitProcessing = false;
        Fire.$emit("Event_Meeting");
        _this7.makeToast("success", _this7.$t("Updated_in_successfully"), _this7.$t("Success"));
      })["catch"](function () {
        _this7.SubmitProcessing = false;
        _this7.makeToast("danger", _this7.$t("InvalidData"), _this7.$t("Failed"));
      });
    },
    reset_Form: function reset_Form() {
      this.meeting = this.empty_meeting();
    },
    Remove_Meeting: function Remove_Meeting(id) {
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
          axios["delete"]("meeting/meetings/" + id).then(function () {
            _this8.$swal(_this8.$t("Delete_Deleted"), _this8.$t("Deleted_in_successfully"), "success");
            Fire.$emit("Event_Meeting");
          })["catch"](function () {
            _this8.$swal(_this8.$t("Delete_Failed"), _this8.$t("Delete_Therewassomethingwronge"), "warning");
          });
        }
      });
    },
    delete_by_selected: function delete_by_selected() {
      var _this9 = this;
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
          axios.post("meeting/meetings/delete/by_selection", {
            selectedIds: _this9.selectedIds
          }).then(function () {
            _this9.$swal(_this9.$t("Delete_Deleted"), _this9.$t("Deleted_in_successfully"), "success");
            Fire.$emit("Event_Meeting");
          })["catch"](function () {
            _this9.$swal(_this9.$t("Delete_Failed"), _this9.$t("Delete_Therewassomethingwronge"), "warning");
          });
        }
      });
    }
  },
  created: function created() {
    var _this0 = this;
    this.Get_Meetings(1);
    Fire.$on("Event_Meeting", function () {
      setTimeout(function () {
        _this0.Get_Meetings(_this0.serverParams.page);
        _this0.$bvModal.hide("New_Meeting");
      }, 500);
    });
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/meeting/meetings.vue?vue&type=template&id=8a42046e"
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/meeting/meetings.vue?vue&type=template&id=8a42046e ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("Meetings"),
      folder: _vm.$t("Meeting_Management")
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
      label: _vm.$t("Status")
    }
  }, [_c("b-form-select", {
    on: {
      change: function change($event) {
        return _vm.Get_Meetings(1);
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
  }, [_vm._v(_vm._s(_vm.$t("All")))]), _vm._v(" "), _vm._l(_vm.statuses, function (s) {
    return _c("b-form-select-option", {
      key: s,
      attrs: {
        value: s
      }
    }, [_vm._v(_vm._s(_vm.format_label(s)))]);
  })], 2)], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Meeting_Type")
    }
  }, [_c("b-form-select", {
    on: {
      change: function change($event) {
        return _vm.Get_Meetings(1);
      }
    },
    model: {
      value: _vm.type_filter,
      callback: function callback($$v) {
        _vm.type_filter = $$v;
      },
      expression: "type_filter"
    }
  }, [_c("b-form-select-option", {
    attrs: {
      value: ""
    }
  }, [_vm._v(_vm._s(_vm.$t("All")))]), _vm._v(" "), _vm._l(_vm.types, function (t) {
    return _c("b-form-select-option", {
      key: t,
      attrs: {
        value: t
      }
    }, [_vm._v(_vm._s(_vm.format_label(t)))]);
  })], 2)], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Date_From") || "Date From"
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "date"
    },
    on: {
      change: function change($event) {
        return _vm.Get_Meetings(1);
      }
    },
    model: {
      value: _vm.date_from,
      callback: function callback($$v) {
        _vm.date_from = $$v;
      },
      expression: "date_from"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Date_To") || "Date To"
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "date"
    },
    on: {
      change: function change($event) {
        return _vm.Get_Meetings(1);
      }
    },
    model: {
      value: _vm.date_to,
      callback: function callback($$v) {
        _vm.date_to = $$v;
      },
      expression: "date_to"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("vue-good-table", {
    attrs: {
      mode: "remote",
      columns: _vm.columns,
      totalRows: _vm.totalRows,
      rows: _vm.meetings,
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
        return [props.column.field == "title" ? _c("span", [_c("a", {
          staticClass: "cursor-pointer text-primary font-weight-bold",
          on: {
            click: function click($event) {
              return _vm.View_Details(props.row.id);
            }
          }
        }, [_vm._v(_vm._s(props.row.title))])]) : props.column.field == "datetime" ? _c("span", [_vm._v("\n          " + _vm._s(props.row.meeting_date) + " " + _vm._s(_vm.short_time(props.row.start_time)) + "\n        ")]) : props.column.field == "type" ? _c("span", [_c("span", {
          staticClass: "badge badge-outline-info"
        }, [_vm._v(_vm._s(_vm.format_label(props.row.type)))])]) : props.column.field == "organizer" ? _c("span", [_vm._v("\n          " + _vm._s(_vm.user_name(props.row.organizer)) + "\n        ")]) : props.column.field == "participants_count" ? _c("span", [_c("span", {
          staticClass: "badge badge-outline-secondary"
        }, [_vm._v(_vm._s(props.row.participants_count))])]) : props.column.field == "status" ? _c("span", [_c("span", {
          staticClass: "badge",
          "class": _vm.status_class(props.row.status)
        }, [_vm._v(_vm._s(_vm.format_label(props.row.status)))])]) : props.column.field == "actions" ? _c("span", [props.row.type === "online" && props.row.meeting_link ? _c("a", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "cursor-pointer",
          attrs: {
            href: props.row.meeting_link,
            target: "_blank",
            rel: "noopener",
            title: _vm.$t("Join_Meeting")
          }
        }, [_c("lucide-icon", {
          staticClass: "text-25 text-info",
          attrs: {
            name: "video"
          }
        })], 1) : _vm._e(), _vm._v(" "), _c("a", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "cursor-pointer",
          attrs: {
            title: _vm.$t("View_Details")
          },
          on: {
            click: function click($event) {
              return _vm.View_Details(props.row.id);
            }
          }
        }, [_c("lucide-icon", {
          staticClass: "text-25 text-primary",
          attrs: {
            name: "eye"
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
            title: "Edit"
          },
          on: {
            click: function click($event) {
              return _vm.Edit_Meeting(props.row);
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
              return _vm.Remove_Meeting(props.row.id);
            }
          }
        }, [_c("lucide-icon", {
          staticClass: "text-25 text-danger",
          attrs: {
            name: "x"
          }
        })], 1)]) : _vm._e()];
      }
    }], null, false, 3666980479)
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
        return _vm.New_Meeting();
      }
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "plus"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("New_Meeting")) + "\n        ")], 1)], 1)])], 1) : _vm._e(), _vm._v(" "), _c("validation-observer", {
    ref: "Create_Meeting"
  }, [_c("b-modal", {
    attrs: {
      "hide-footer": "",
      size: "lg",
      id: "New_Meeting",
      title: _vm.editmode ? _vm.$t("Edit") : _vm.$t("New_Meeting")
    }
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Submit_Meeting.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "12"
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
            label: _vm.$t("Meeting_Title") + " *"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext)
          },
          model: {
            value: _vm.meeting.title,
            callback: function callback($$v) {
              _vm.$set(_vm.meeting, "title", $$v);
            },
            expression: "meeting.title"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "meeting_date",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Meeting_Date") + " *"
          }
        }, [_c("b-form-input", {
          attrs: {
            type: "date",
            state: _vm.getValidationState(validationContext)
          },
          model: {
            value: _vm.meeting.meeting_date,
            callback: function callback($$v) {
              _vm.$set(_vm.meeting, "meeting_date", $$v);
            },
            expression: "meeting.meeting_date"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "start_time",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Start_Time") + " *"
          }
        }, [_c("b-form-input", {
          attrs: {
            type: "time",
            state: _vm.getValidationState(validationContext)
          },
          model: {
            value: _vm.meeting.start_time,
            callback: function callback($$v) {
              _vm.$set(_vm.meeting, "start_time", $$v);
            },
            expression: "meeting.start_time"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("End_Time")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "time"
    },
    model: {
      value: _vm.meeting.end_time,
      callback: function callback($$v) {
        _vm.$set(_vm.meeting, "end_time", $$v);
      },
      expression: "meeting.end_time"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Meeting_Type") + " *"
    }
  }, [_c("b-form-select", {
    model: {
      value: _vm.meeting.type,
      callback: function callback($$v) {
        _vm.$set(_vm.meeting, "type", $$v);
      },
      expression: "meeting.type"
    }
  }, _vm._l(_vm.types, function (t) {
    return _c("b-form-select-option", {
      key: t,
      attrs: {
        value: t
      }
    }, [_vm._v(_vm._s(_vm.format_label(t)))]);
  }), 1)], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Status")
    }
  }, [_c("b-form-select", {
    model: {
      value: _vm.meeting.status,
      callback: function callback($$v) {
        _vm.$set(_vm.meeting, "status", $$v);
      },
      expression: "meeting.status"
    }
  }, _vm._l(_vm.statuses, function (s) {
    return _c("b-form-select-option", {
      key: s,
      attrs: {
        value: s
      }
    }, [_vm._v(_vm._s(_vm.format_label(s)))]);
  }), 1)], 1)], 1), _vm._v(" "), _vm.meeting.type === "physical" ? _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Meeting_Location")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.meeting.location,
      callback: function callback($$v) {
        _vm.$set(_vm.meeting, "location", $$v);
      },
      expression: "meeting.location"
    }
  })], 1)], 1) : _vm._e(), _vm._v(" "), _vm.meeting.type === "online" ? [_c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Platform")
    }
  }, [_c("b-form-select", {
    model: {
      value: _vm.meeting.platform,
      callback: function callback($$v) {
        _vm.$set(_vm.meeting, "platform", $$v);
      },
      expression: "meeting.platform"
    }
  }, [_c("b-form-select-option", {
    attrs: {
      value: null
    }
  }, [_vm._v("-")]), _vm._v(" "), _vm._l(_vm.platforms, function (p) {
    return _c("b-form-select-option", {
      key: p,
      attrs: {
        value: p
      }
    }, [_vm._v(_vm._s(_vm.platform_label(p)))]);
  })], 2)], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "8"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Meeting_Link")
    }
  }, [_c("b-form-input", {
    attrs: {
      placeholder: "https://"
    },
    model: {
      value: _vm.meeting.meeting_link,
      callback: function callback($$v) {
        _vm.$set(_vm.meeting, "meeting_link", $$v);
      },
      expression: "meeting.meeting_link"
    }
  })], 1)], 1)] : _vm._e(), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Organizer")
    }
  }, [_c("v-select", {
    attrs: {
      reduce: function reduce(o) {
        return o.value;
      },
      placeholder: _vm.$t("Organizer"),
      options: _vm.users.map(function (u) {
        return {
          label: _vm.user_label(u),
          value: u.id
        };
      })
    },
    model: {
      value: _vm.meeting.organizer_id,
      callback: function callback($$v) {
        _vm.$set(_vm.meeting, "organizer_id", $$v);
      },
      expression: "meeting.organizer_id"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Reminder_Minutes")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "number",
      min: "0"
    },
    model: {
      value: _vm.meeting.reminder_minutes,
      callback: function callback($$v) {
        _vm.$set(_vm.meeting, "reminder_minutes", $$v);
      },
      expression: "meeting.reminder_minutes"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Select_Participants")
    }
  }, [_c("v-select", {
    attrs: {
      multiple: "",
      reduce: function reduce(o) {
        return o.value;
      },
      placeholder: _vm.$t("Add_Participants"),
      options: _vm.users.map(function (u) {
        return {
          label: _vm.user_label(u),
          value: u.id
        };
      })
    },
    model: {
      value: _vm.meeting.participants,
      callback: function callback($$v) {
        _vm.$set(_vm.meeting, "participants", $$v);
      },
      expression: "meeting.participants"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Agenda")
    }
  }, [_c("b-form-textarea", {
    attrs: {
      rows: "2"
    },
    model: {
      value: _vm.meeting.agenda,
      callback: function callback($$v) {
        _vm.$set(_vm.meeting, "agenda", $$v);
      },
      expression: "meeting.agenda"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Description")
    }
  }, [_c("b-form-textarea", {
    attrs: {
      rows: "2"
    },
    model: {
      value: _vm.meeting.description,
      callback: function callback($$v) {
        _vm.$set(_vm.meeting, "description", $$v);
      },
      expression: "meeting.description"
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
  }), _vm._v(" " + _vm._s(_vm.$t("submit")) + "\n            ")], 1), _vm._v(" "), _vm.SubmitProcessing ? _vm._m(0) : _vm._e()], 1)], 2)], 1)], 1)], 1)], 1);
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

/***/ "./resources/src/views/app/pages/meeting/meetings.vue"
/*!************************************************************!*\
  !*** ./resources/src/views/app/pages/meeting/meetings.vue ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _meetings_vue_vue_type_template_id_8a42046e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meetings.vue?vue&type=template&id=8a42046e */ "./resources/src/views/app/pages/meeting/meetings.vue?vue&type=template&id=8a42046e");
/* harmony import */ var _meetings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meetings.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/meeting/meetings.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _meetings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _meetings_vue_vue_type_template_id_8a42046e__WEBPACK_IMPORTED_MODULE_0__.render,
  _meetings_vue_vue_type_template_id_8a42046e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/meeting/meetings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/meeting/meetings.vue?vue&type=script&lang=js"
/*!************************************************************************************!*\
  !*** ./resources/src/views/app/pages/meeting/meetings.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_meetings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./meetings.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/meeting/meetings.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_meetings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/meeting/meetings.vue?vue&type=template&id=8a42046e"
/*!******************************************************************************************!*\
  !*** ./resources/src/views/app/pages/meeting/meetings.vue?vue&type=template&id=8a42046e ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_meetings_vue_vue_type_template_id_8a42046e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_meetings_vue_vue_type_template_id_8a42046e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_meetings_vue_vue_type_template_id_8a42046e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./meetings.vue?vue&type=template&id=8a42046e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/meeting/meetings.vue?vue&type=template&id=8a42046e");


/***/ }

}]);