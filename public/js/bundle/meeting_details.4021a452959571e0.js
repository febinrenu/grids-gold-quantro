"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["meeting_details"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/meeting/details.vue?vue&type=script&lang=js"
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/meeting/details.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Meeting Details"
  },
  data: function data() {
    return {
      isLoading: true,
      SubmitProcessing: false,
      SavingAttendance: false,
      SendingInvites: false,
      UploadingFile: false,
      meeting: null,
      attachmentFile: null,
      statuses: ["scheduled", "ongoing", "completed", "cancelled"],
      attendances: ["pending", "present", "absent", "late"],
      note_editmode: false,
      note: this.empty_note()
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["currentUserPermissions"])), {}, {
    canEdit: function canEdit() {
      return this.currentUserPermissions && this.currentUserPermissions.includes("meeting");
    },
    canManageAttendance: function canManageAttendance() {
      return this.currentUserPermissions && this.currentUserPermissions.includes("meeting_attendance");
    },
    participantOptions: function participantOptions() {
      var _this = this;
      if (!this.meeting || !this.meeting.participants) return [];
      return this.meeting.participants.map(function (p) {
        return {
          label: _this.user_name(p.user),
          value: p.user_id
        };
      });
    }
  }),
  methods: {
    empty_note: function empty_note() {
      return {
        id: "",
        meeting_id: "",
        type: "note",
        content: "",
        assigned_to: "",
        due_date: "",
        status: "open"
      };
    },
    format_label: function format_label(v) {
      return v ? String(v).replace(/_/g, " ") : "-";
    },
    format_datetime: function format_datetime(v) {
      if (!v) return "-";
      return String(v).replace("T", " ").substring(0, 16);
    },
    short_time: function short_time(t) {
      return t ? String(t).substring(0, 5) : "";
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
    user_name: function user_name(u) {
      if (!u) return "-";
      var n = ((u.firstname || "") + " " + (u.lastname || "")).trim();
      return n || u.username || "-";
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
    invite_class: function invite_class(s) {
      var map = {
        invited: "badge-outline-secondary",
        accepted: "badge-outline-success",
        declined: "badge-outline-danger",
        tentative: "badge-outline-warning"
      };
      return map[s] || "badge-outline-secondary";
    },
    attend_class: function attend_class(s) {
      var map = {
        pending: "badge-outline-secondary",
        present: "badge-outline-success",
        absent: "badge-outline-danger",
        late: "badge-outline-warning"
      };
      return map[s] || "badge-outline-secondary";
    },
    note_type_class: function note_type_class(t) {
      var map = {
        note: "badge-outline-info",
        decision: "badge-outline-success",
        action_item: "badge-outline-warning"
      };
      return map[t] || "badge-outline-secondary";
    },
    note_status_class: function note_status_class(s) {
      var map = {
        open: "badge-outline-secondary",
        in_progress: "badge-outline-info",
        done: "badge-outline-success"
      };
      return map[s] || "badge-outline-secondary";
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
    Get_Meeting: function Get_Meeting() {
      var _this2 = this;
      var id = this.$route.params.id;
      axios.get("meeting/meetings/" + id).then(function (_ref2) {
        var data = _ref2.data;
        _this2.meeting = data.meeting;
        _this2.isLoading = false;
      })["catch"](function () {
        _this2.isLoading = false;
        _this2.makeToast("danger", _this2.$t("InvalidData"), _this2.$t("Failed"));
      });
    },
    Change_Status: function Change_Status(status) {
      var _this3 = this;
      axios.put("meeting/meetings/" + this.meeting.id + "/status", {
        status: status
      }).then(function () {
        _this3.makeToast("success", _this3.$t("Updated_in_successfully"), _this3.$t("Success"));
        _this3.Get_Meeting();
      })["catch"](function () {
        _this3.makeToast("danger", _this3.$t("InvalidData"), _this3.$t("Failed"));
      });
    },
    Send_Invitations: function Send_Invitations() {
      var _this4 = this;
      this.SendingInvites = true;
      axios.post("meeting/meetings/" + this.meeting.id + "/invitations").then(function () {
        _this4.SendingInvites = false;
        _this4.makeToast("success", _this4.$t("Invitations_Sent"), _this4.$t("Success"));
        _this4.Get_Meeting();
      })["catch"](function () {
        _this4.SendingInvites = false;
        _this4.makeToast("danger", _this4.$t("InvalidData"), _this4.$t("Failed"));
      });
    },
    Save_Attendance: function Save_Attendance() {
      var _this5 = this;
      if (!this.meeting.participants || this.meeting.participants.length === 0) {
        this.makeToast("warning", this.$t("No_data"), this.$t("Failed"));
        return;
      }
      this.SavingAttendance = true;
      var attendance = this.meeting.participants.map(function (p) {
        return {
          id: p.id,
          attendance_status: p.attendance_status
        };
      });
      axios.post("meeting/meetings/" + this.meeting.id + "/attendance", {
        attendance: attendance
      }).then(function () {
        _this5.SavingAttendance = false;
        _this5.makeToast("success", _this5.$t("Updated_in_successfully"), _this5.$t("Success"));
        _this5.Get_Meeting();
      })["catch"](function () {
        _this5.SavingAttendance = false;
        _this5.makeToast("danger", _this5.$t("InvalidData"), _this5.$t("Failed"));
      });
    },
    Upload_Attachment: function Upload_Attachment() {
      var _this6 = this;
      if (!this.attachmentFile) return;
      this.UploadingFile = true;
      var form = new FormData();
      form.append("meeting_id", this.meeting.id);
      form.append("file", this.attachmentFile);
      axios.post("meeting/attachments", form, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function () {
        _this6.UploadingFile = false;
        _this6.attachmentFile = null;
        _this6.makeToast("success", _this6.$t("Created_in_successfully"), _this6.$t("Success"));
        _this6.Get_Meeting();
      })["catch"](function () {
        _this6.UploadingFile = false;
        _this6.makeToast("danger", _this6.$t("InvalidData"), _this6.$t("Failed"));
      });
    },
    Remove_Attachment: function Remove_Attachment(id) {
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
          axios["delete"]("meeting/attachments/" + id).then(function () {
            _this7.makeToast("success", _this7.$t("Deleted_in_successfully"), _this7.$t("Success"));
            _this7.Get_Meeting();
          });
        }
      });
    },
    New_Note: function New_Note() {
      this.note = this.empty_note();
      this.note.meeting_id = this.meeting.id;
      this.note_editmode = false;
      this.$bvModal.show("Note_Modal");
    },
    Edit_Note: function Edit_Note(n) {
      this.note = _objectSpread(_objectSpread({}, this.empty_note()), n);
      if (this.note.due_date) this.note.due_date = String(this.note.due_date).substring(0, 10);
      this.note_editmode = true;
      this.$bvModal.show("Note_Modal");
    },
    Submit_Note: function Submit_Note() {
      var _this8 = this;
      this.$refs.Create_Note.validate().then(function (success) {
        if (!success) return;
        _this8.SubmitProcessing = true;
        var req = _this8.note_editmode ? axios.put("meeting/notes/" + _this8.note.id, _this8.note) : axios.post("meeting/notes", _this8.note);
        req.then(function () {
          _this8.SubmitProcessing = false;
          _this8.$bvModal.hide("Note_Modal");
          _this8.makeToast("success", _this8.$t("Created_in_successfully"), _this8.$t("Success"));
          _this8.Get_Meeting();
        })["catch"](function () {
          _this8.SubmitProcessing = false;
          _this8.makeToast("danger", _this8.$t("InvalidData"), _this8.$t("Failed"));
        });
      });
    },
    Remove_Note: function Remove_Note(id) {
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
          axios["delete"]("meeting/notes/" + id).then(function () {
            _this9.makeToast("success", _this9.$t("Deleted_in_successfully"), _this9.$t("Success"));
            _this9.Get_Meeting();
          });
        }
      });
    }
  },
  created: function created() {
    this.Get_Meeting();
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/meeting/details.vue?vue&type=template&id=0bbcc321&scoped=true"
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/meeting/details.vue?vue&type=template&id=0bbcc321&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("Meeting_Details"),
      folder: _vm.$t("Meeting_Management")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading && _vm.meeting ? _c("div", [_c("b-card", {
    staticClass: "mb-3"
  }, [_c("div", {
    staticClass: "d-flex flex-wrap justify-content-between align-items-start"
  }, [_c("div", [_c("h4", {
    staticClass: "mb-1"
  }, [_vm._v(_vm._s(_vm.meeting.title))]), _vm._v(" "), _c("div", {
    staticClass: "text-muted mb-2"
  }, [_c("lucide-icon", {
    attrs: {
      name: "calendar",
      size: "15"
    }
  }), _vm._v(" " + _vm._s(_vm.meeting.meeting_date) + "\n            "), _c("lucide-icon", {
    staticClass: "ml-2",
    attrs: {
      name: "clock",
      size: "15"
    }
  }), _vm._v(" " + _vm._s(_vm.short_time(_vm.meeting.start_time))), _vm.meeting.end_time ? _c("span", [_vm._v(" - " + _vm._s(_vm.short_time(_vm.meeting.end_time)))]) : _vm._e(), _vm._v(" "), _c("span", {
    staticClass: "badge ml-2",
    "class": _vm.status_class(_vm.meeting.status)
  }, [_vm._v(_vm._s(_vm.format_label(_vm.meeting.status)))]), _vm._v(" "), _c("span", {
    staticClass: "badge badge-outline-info ml-1"
  }, [_vm._v(_vm._s(_vm.format_label(_vm.meeting.type)))])], 1), _vm._v(" "), _vm.meeting.type === "physical" && _vm.meeting.location ? _c("div", {
    staticClass: "text-muted"
  }, [_c("lucide-icon", {
    attrs: {
      name: "map-pin",
      size: "15"
    }
  }), _vm._v(" " + _vm._s(_vm.meeting.location) + "\n          ")], 1) : _vm._e(), _vm._v(" "), _vm.meeting.type === "online" ? _c("div", {
    staticClass: "text-muted"
  }, [_c("lucide-icon", {
    attrs: {
      name: "link",
      size: "15"
    }
  }), _vm._v(" " + _vm._s(_vm.meeting.meeting_link || "-") + "\n            "), _vm.meeting.platform ? _c("span", {
    staticClass: "badge badge-outline-secondary ml-1"
  }, [_vm._v(_vm._s(_vm.platform_label(_vm.meeting.platform)))]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "text-muted mt-1"
  }, [_c("lucide-icon", {
    attrs: {
      name: "user",
      size: "15"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Organizer")) + ": " + _vm._s(_vm.user_name(_vm.meeting.organizer)) + "\n          ")], 1)]), _vm._v(" "), _c("div", {
    staticClass: "text-right"
  }, [_vm.meeting.type === "online" && _vm.meeting.meeting_link ? _c("a", {
    staticClass: "btn btn-info btn-sm m-1",
    attrs: {
      href: _vm.meeting.meeting_link,
      target: "_blank",
      rel: "noopener"
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "video",
      size: "15"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Join_Meeting")) + "\n          ")], 1) : _vm._e(), _vm._v(" "), _vm.canEdit ? _c("b-button", {
    staticClass: "m-1",
    attrs: {
      variant: "outline-primary",
      size: "sm",
      disabled: _vm.SendingInvites
    },
    on: {
      click: function click($event) {
        return _vm.Send_Invitations();
      }
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "send",
      size: "15"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Send_Invitations")) + "\n          ")], 1) : _vm._e(), _vm._v(" "), _vm.canEdit ? _c("b-dropdown", {
    staticClass: "m-1",
    attrs: {
      text: _vm.$t("Status"),
      variant: "outline-secondary",
      size: "sm"
    }
  }, _vm._l(_vm.statuses, function (s) {
    return _c("b-dropdown-item", {
      key: s,
      on: {
        click: function click($event) {
          return _vm.Change_Status(s);
        }
      }
    }, [_vm._v(_vm._s(_vm.format_label(s)))]);
  }), 1) : _vm._e()], 1)]), _vm._v(" "), _vm.meeting.agenda || _vm.meeting.description ? _c("hr") : _vm._e(), _vm._v(" "), _vm.meeting.agenda ? _c("div", {
    staticClass: "mb-2"
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("Agenda")) + ":")]), _vm._v(" "), _c("div", {
    staticClass: "text-muted",
    staticStyle: {
      "white-space": "pre-line"
    }
  }, [_vm._v(_vm._s(_vm.meeting.agenda))])]) : _vm._e(), _vm._v(" "), _vm.meeting.description ? _c("div", [_c("strong", [_vm._v(_vm._s(_vm.$t("Description")) + ":")]), _vm._v(" "), _c("div", {
    staticClass: "text-muted",
    staticStyle: {
      "white-space": "pre-line"
    }
  }, [_vm._v(_vm._s(_vm.meeting.description))])]) : _vm._e()]), _vm._v(" "), _c("b-row", [_c("b-col", {
    attrs: {
      lg: "6"
    }
  }, [_c("b-card", {
    staticClass: "mb-3"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center mb-3"
  }, [_c("h6", {
    staticClass: "mb-0"
  }, [_c("lucide-icon", {
    attrs: {
      name: "users",
      size: "16"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Participants")) + " & " + _vm._s(_vm.$t("Attendance")))], 1), _vm._v(" "), _vm.canManageAttendance ? _c("b-button", {
    attrs: {
      variant: "primary",
      size: "sm",
      disabled: _vm.SavingAttendance
    },
    on: {
      click: function click($event) {
        return _vm.Save_Attendance();
      }
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "check",
      size: "14"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Save_Attendance")) + "\n            ")], 1) : _vm._e()], 1), _vm._v(" "), !_vm.meeting.participants || _vm.meeting.participants.length === 0 ? _c("div", {
    staticClass: "text-muted text-center py-3"
  }, [_vm._v("\n            " + _vm._s(_vm.$t("No_data")) + "\n          ")]) : _c("table", {
    staticClass: "table table-sm"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.$t("Participant")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.$t("Invitation_Status")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.$t("Attendance_Status")))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.meeting.participants, function (p) {
    return _c("tr", {
      key: p.id
    }, [_c("td", [_vm._v("\n                  " + _vm._s(_vm.user_name(p.user)) + "\n                  "), p.is_notified ? _c("lucide-icon", {
      directives: [{
        name: "b-tooltip",
        rawName: "v-b-tooltip.hover",
        modifiers: {
          hover: true
        }
      }],
      staticClass: "text-success",
      attrs: {
        name: "bell",
        size: "12",
        title: _vm.$t("Invitations_Sent")
      }
    }) : _vm._e()], 1), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "badge",
      "class": _vm.invite_class(p.invitation_status)
    }, [_vm._v(_vm._s(_vm.format_label(p.invitation_status)))])]), _vm._v(" "), _c("td", [_vm.canManageAttendance ? _c("b-form-select", {
      staticStyle: {
        "max-width": "130px"
      },
      attrs: {
        size: "sm"
      },
      model: {
        value: p.attendance_status,
        callback: function callback($$v) {
          _vm.$set(p, "attendance_status", $$v);
        },
        expression: "p.attendance_status"
      }
    }, _vm._l(_vm.attendances, function (a) {
      return _c("b-form-select-option", {
        key: a,
        attrs: {
          value: a
        }
      }, [_vm._v(_vm._s(_vm.format_label(a)))]);
    }), 1) : _c("span", {
      staticClass: "badge",
      "class": _vm.attend_class(p.attendance_status)
    }, [_vm._v(_vm._s(_vm.format_label(p.attendance_status)))])], 1)]);
  }), 0)])]), _vm._v(" "), _c("b-card", {
    staticClass: "mb-3"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center mb-3"
  }, [_c("h6", {
    staticClass: "mb-0"
  }, [_c("lucide-icon", {
    attrs: {
      name: "paperclip",
      size: "16"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Attachments")))], 1)]), _vm._v(" "), _vm.canEdit ? _c("div", {
    staticClass: "mb-3"
  }, [_c("b-form-file", {
    attrs: {
      placeholder: _vm.$t("Upload_Attachment"),
      size: "sm"
    },
    model: {
      value: _vm.attachmentFile,
      callback: function callback($$v) {
        _vm.attachmentFile = $$v;
      },
      expression: "attachmentFile"
    }
  }), _vm._v(" "), _c("b-button", {
    staticClass: "mt-2",
    attrs: {
      variant: "outline-primary",
      size: "sm",
      disabled: !_vm.attachmentFile || _vm.UploadingFile
    },
    on: {
      click: function click($event) {
        return _vm.Upload_Attachment();
      }
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "upload",
      size: "14"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Upload_Attachment")) + "\n            ")], 1)], 1) : _vm._e(), _vm._v(" "), !_vm.meeting.attachments || _vm.meeting.attachments.length === 0 ? _c("div", {
    staticClass: "text-muted text-center py-3"
  }, [_vm._v("\n            " + _vm._s(_vm.$t("No_data")) + "\n          ")]) : _c("ul", {
    staticClass: "list-unstyled mb-0"
  }, _vm._l(_vm.meeting.attachments, function (f) {
    return _c("li", {
      key: f.id,
      staticClass: "d-flex justify-content-between align-items-center py-1 border-bottom"
    }, [_c("a", {
      attrs: {
        href: "/" + f.file_path,
        target: "_blank",
        rel: "noopener"
      }
    }, [_c("lucide-icon", {
      attrs: {
        name: "file",
        size: "14"
      }
    }), _vm._v(" " + _vm._s(f.file_name) + "\n              ")], 1), _vm._v(" "), _vm.canEdit ? _c("a", {
      staticClass: "cursor-pointer text-danger",
      on: {
        click: function click($event) {
          return _vm.Remove_Attachment(f.id);
        }
      }
    }, [_c("lucide-icon", {
      attrs: {
        name: "x",
        size: "16"
      }
    })], 1) : _vm._e()]);
  }), 0)])], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6"
    }
  }, [_c("b-card", {
    staticClass: "mb-3"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center mb-3"
  }, [_c("h6", {
    staticClass: "mb-0"
  }, [_c("lucide-icon", {
    attrs: {
      name: "file-text",
      size: "16"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Notes_And_Minutes")))], 1), _vm._v(" "), _vm.canEdit ? _c("b-button", {
    attrs: {
      variant: "primary",
      size: "sm"
    },
    on: {
      click: function click($event) {
        return _vm.New_Note();
      }
    }
  }, [_c("lucide-icon", {
    attrs: {
      name: "plus",
      size: "14"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Add_Note")) + "\n            ")], 1) : _vm._e()], 1), _vm._v(" "), !_vm.meeting.notes || _vm.meeting.notes.length === 0 ? _c("div", {
    staticClass: "text-muted text-center py-3"
  }, [_vm._v("\n            " + _vm._s(_vm.$t("No_data")) + "\n          ")]) : _vm._e(), _vm._v(" "), _vm._l(_vm.meeting.notes, function (n) {
    return _c("div", {
      key: n.id,
      staticClass: "note-item mb-2 p-2 border rounded"
    }, [_c("div", {
      staticClass: "d-flex justify-content-between"
    }, [_c("span", {
      staticClass: "badge",
      "class": _vm.note_type_class(n.type)
    }, [_vm._v(_vm._s(_vm.format_label(n.type)))]), _vm._v(" "), _vm.canEdit ? _c("span", [_c("a", {
      staticClass: "cursor-pointer text-success mr-1",
      on: {
        click: function click($event) {
          return _vm.Edit_Note(n);
        }
      }
    }, [_c("lucide-icon", {
      attrs: {
        name: "pencil",
        size: "14"
      }
    })], 1), _vm._v(" "), _c("a", {
      staticClass: "cursor-pointer text-danger",
      on: {
        click: function click($event) {
          return _vm.Remove_Note(n.id);
        }
      }
    }, [_c("lucide-icon", {
      attrs: {
        name: "x",
        size: "15"
      }
    })], 1)]) : _vm._e()]), _vm._v(" "), _c("div", {
      staticClass: "mt-1",
      staticStyle: {
        "white-space": "pre-line"
      }
    }, [_vm._v(_vm._s(n.content))]), _vm._v(" "), n.type === "action_item" ? _c("div", {
      staticClass: "text-muted small mt-1"
    }, [n.assignee ? _c("span", [_c("lucide-icon", {
      attrs: {
        name: "user",
        size: "12"
      }
    }), _vm._v(" " + _vm._s(_vm.user_name(n.assignee)))], 1) : _vm._e(), _vm._v(" "), n.due_date ? _c("span", {
      staticClass: "ml-2"
    }, [_c("lucide-icon", {
      attrs: {
        name: "calendar",
        size: "12"
      }
    }), _vm._v(" " + _vm._s(n.due_date))], 1) : _vm._e(), _vm._v(" "), _c("span", {
      staticClass: "badge ml-2",
      "class": _vm.note_status_class(n.status)
    }, [_vm._v(_vm._s(_vm.format_label(n.status)))])]) : _vm._e()]);
  })], 2), _vm._v(" "), _c("b-card", {
    staticClass: "mb-3"
  }, [_c("h6", {
    staticClass: "mb-3"
  }, [_c("lucide-icon", {
    attrs: {
      name: "history",
      size: "16"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("Activity_Log")))], 1), _vm._v(" "), !_vm.meeting.logs || _vm.meeting.logs.length === 0 ? _c("div", {
    staticClass: "text-muted text-center py-3"
  }, [_vm._v("\n            " + _vm._s(_vm.$t("No_data")) + "\n          ")]) : _c("ul", {
    staticClass: "list-unstyled mb-0 activity-log"
  }, _vm._l(_vm.meeting.logs, function (l) {
    return _c("li", {
      key: l.id,
      staticClass: "py-1"
    }, [_c("span", {
      staticClass: "dot"
    }), _vm._v(" "), _c("span", [_vm._v(_vm._s(l.description || _vm.format_label(l.action)))]), _vm._v(" "), _c("span", {
      staticClass: "text-muted small d-block ml-3"
    }, [_vm._v(_vm._s(_vm.user_name(l.user)) + " · " + _vm._s(_vm.format_datetime(l.created_at)))])]);
  }), 0)])], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _c("validation-observer", {
    ref: "Create_Note"
  }, [_c("b-modal", {
    attrs: {
      "hide-footer": "",
      size: "md",
      id: "Note_Modal",
      title: _vm.note_editmode ? _vm.$t("Edit") : _vm.$t("Add_Note")
    }
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Submit_Note.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Type")
    }
  }, [_c("b-form-select", {
    model: {
      value: _vm.note.type,
      callback: function callback($$v) {
        _vm.$set(_vm.note, "type", $$v);
      },
      expression: "note.type"
    }
  }, [_c("b-form-select-option", {
    attrs: {
      value: "note"
    }
  }, [_vm._v(_vm._s(_vm.$t("Note")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "decision"
    }
  }, [_vm._v(_vm._s(_vm.$t("Decision")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "action_item"
    }
  }, [_vm._v(_vm._s(_vm.$t("Action_Item")))])], 1)], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "content",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Content") + " *"
          }
        }, [_c("b-form-textarea", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            rows: "3"
          },
          model: {
            value: _vm.note.content,
            callback: function callback($$v) {
              _vm.$set(_vm.note, "content", $$v);
            },
            expression: "note.content"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _vm.note.type === "action_item" ? [_c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Assigned_To")
    }
  }, [_c("v-select", {
    attrs: {
      reduce: function reduce(o) {
        return o.value;
      },
      options: _vm.participantOptions
    },
    model: {
      value: _vm.note.assigned_to,
      callback: function callback($$v) {
        _vm.$set(_vm.note, "assigned_to", $$v);
      },
      expression: "note.assigned_to"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Due_Date")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "date"
    },
    model: {
      value: _vm.note.due_date,
      callback: function callback($$v) {
        _vm.$set(_vm.note, "due_date", $$v);
      },
      expression: "note.due_date"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Status")
    }
  }, [_c("b-form-select", {
    model: {
      value: _vm.note.status,
      callback: function callback($$v) {
        _vm.$set(_vm.note, "status", $$v);
      },
      expression: "note.status"
    }
  }, [_c("b-form-select-option", {
    attrs: {
      value: "open"
    }
  }, [_vm._v(_vm._s(_vm.$t("Open")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "in_progress"
    }
  }, [_vm._v(_vm._s(_vm.$t("In_Progress")))]), _vm._v(" "), _c("b-form-select-option", {
    attrs: {
      value: "done"
    }
  }, [_vm._v(_vm._s(_vm.$t("Done")))])], 1)], 1)], 1)] : _vm._e(), _vm._v(" "), _c("b-col", {
    staticClass: "mt-2",
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
    attrs: {
      name: "check"
    }
  }), _vm._v(" " + _vm._s(_vm.$t("submit")) + "\n            ")], 1)], 1)], 2)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/meeting/details.vue?vue&type=style&index=0&id=0bbcc321&scoped=true&lang=css"
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/meeting/details.vue?vue&type=style&index=0&id=0bbcc321&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.note-item[data-v-0bbcc321] { background: #fafbfe;\n}\nbody.dark-theme .note-item[data-v-0bbcc321] { background: #1e1e2d; border-color: #2b2b40 !important;\n}\n.activity-log li[data-v-0bbcc321] { position: relative; padding-left: 16px;\n}\n.activity-log .dot[data-v-0bbcc321] {\n  position: absolute; left: 0; top: 7px; width: 8px; height: 8px;\n  border-radius: 50%; background: #4361ee;\n}\n.cursor-pointer[data-v-0bbcc321] { cursor: pointer;\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/meeting/details.vue?vue&type=style&index=0&id=0bbcc321&scoped=true&lang=css"
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/meeting/details.vue?vue&type=style&index=0&id=0bbcc321&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_id_0bbcc321_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./details.vue?vue&type=style&index=0&id=0bbcc321&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/meeting/details.vue?vue&type=style&index=0&id=0bbcc321&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_id_0bbcc321_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_id_0bbcc321_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/views/app/pages/meeting/details.vue"
/*!***********************************************************!*\
  !*** ./resources/src/views/app/pages/meeting/details.vue ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _details_vue_vue_type_template_id_0bbcc321_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.vue?vue&type=template&id=0bbcc321&scoped=true */ "./resources/src/views/app/pages/meeting/details.vue?vue&type=template&id=0bbcc321&scoped=true");
/* harmony import */ var _details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/meeting/details.vue?vue&type=script&lang=js");
/* harmony import */ var _details_vue_vue_type_style_index_0_id_0bbcc321_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details.vue?vue&type=style&index=0&id=0bbcc321&scoped=true&lang=css */ "./resources/src/views/app/pages/meeting/details.vue?vue&type=style&index=0&id=0bbcc321&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _details_vue_vue_type_template_id_0bbcc321_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _details_vue_vue_type_template_id_0bbcc321_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0bbcc321",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/meeting/details.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/meeting/details.vue?vue&type=script&lang=js"
/*!***********************************************************************************!*\
  !*** ./resources/src/views/app/pages/meeting/details.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./details.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/meeting/details.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/meeting/details.vue?vue&type=template&id=0bbcc321&scoped=true"
/*!*****************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/meeting/details.vue?vue&type=template&id=0bbcc321&scoped=true ***!
  \*****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_0bbcc321_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_0bbcc321_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_0bbcc321_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./details.vue?vue&type=template&id=0bbcc321&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/meeting/details.vue?vue&type=template&id=0bbcc321&scoped=true");


/***/ },

/***/ "./resources/src/views/app/pages/meeting/details.vue?vue&type=style&index=0&id=0bbcc321&scoped=true&lang=css"
/*!*******************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/meeting/details.vue?vue&type=style&index=0&id=0bbcc321&scoped=true&lang=css ***!
  \*******************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_id_0bbcc321_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./details.vue?vue&type=style&index=0&id=0bbcc321&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/meeting/details.vue?vue&type=style&index=0&id=0bbcc321&scoped=true&lang=css");


/***/ }

}]);