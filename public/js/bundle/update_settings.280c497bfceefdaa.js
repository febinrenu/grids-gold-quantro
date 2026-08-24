"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["update_settings"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/update_settings.vue?vue&type=script&lang=js"
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/update_settings.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Update Settings"
  },
  data: function data() {
    return {
      isLoading: true,
      SubmitProcessing: false,
      currentVersion: "",
      latestVersion: "",
      latestInfo: null,
      checking: false,
      lastChecked: null,
      preflightLoading: false,
      preflight: null,
      canUpdate: false,
      updating: false,
      updateFailed: false,
      updatePercent: 0,
      updateStep: "idle",
      progressTimer: null,
      changelog: [],
      updateHistory: []
    };
  },
  computed: {
    hasUpdate: function hasUpdate() {
      if (!this.latestVersion || !this.currentVersion) return false;
      return this.versionCompare(this.latestVersion, this.currentVersion) > 0;
    },
    statusBannerClass: function statusBannerClass() {
      if (this.updating) return "status-updating";
      if (this.updateFailed) return "status-failed";
      if (this.hasUpdate) return "status-available";
      return "status-current";
    },
    statusIconClass: function statusIconClass() {
      if (this.updating) return "icon-updating";
      if (this.updateFailed) return "icon-failed";
      if (this.hasUpdate) return "icon-available";
      return "icon-current";
    },
    statusIcon: function statusIcon() {
      if (this.updating) return "loader";
      if (this.updateFailed) return "x";
      if (this.hasUpdate) return "download";
      return "check";
    },
    statusTitle: function statusTitle() {
      if (this.updating) return this.$t("Updating_Application");
      if (this.updateFailed) return this.$t("Update_Failed");
      if (this.hasUpdate) return this.$t("Update_Available");
      return this.$t("System_Up_to_Date");
    },
    statusDescription: function statusDescription() {
      if (this.updating) return this.$t("Please_wait_update_in_progress");
      if (this.updateFailed) return this.$t("Update_failed_rolled_back");
      if (this.hasUpdate) return this.$t("Version") + " " + this.latestVersion + " " + this.$t("is_ready_to_install");
      return this.$t("You_already_have_the_latest_version");
    },
    statusBadgeClass: function statusBadgeClass() {
      if (this.updating) return "badge-updating";
      if (this.updateFailed) return "badge-danger";
      if (this.hasUpdate) return "badge-warning";
      return "badge-success";
    },
    statusLabel: function statusLabel() {
      if (this.updating) return this.$t("Updating");
      if (this.updateFailed) return this.$t("Failed");
      if (this.hasUpdate) return this.$t("Update_Available");
      return this.$t("Up_to_Date");
    },
    lastCheckedText: function lastCheckedText() {
      if (!this.lastChecked) return "";
      var now = Date.now();
      var diff = Math.floor((now - this.lastChecked) / 1000);
      if (diff < 10) return this.$t("Last_checked_just_now");
      if (diff < 60) return this.$t("Last_checked") + " " + diff + "s " + this.$t("ago");
      if (diff < 3600) return this.$t("Last_checked") + " " + Math.floor(diff / 60) + "m " + this.$t("ago");
      return this.$t("Last_checked") + " " + Math.floor(diff / 3600) + "h " + this.$t("ago");
    },
    preflightItems: function preflightItems() {
      if (!this.preflight) return [];
      var items = [];
      if (this.preflight.permissions) {
        Object.keys(this.preflight.permissions).forEach(function (k) {
          var p = this.preflight.permissions[k];
          items.push({
            label: k.replace(/_/g, " ") + " writable",
            ok: p.writable
          });
        }.bind(this));
      }
      if (this.preflight.network) {
        items.push({
          label: "Update server reachable",
          ok: this.preflight.network.ok
        });
      }
      if (this.preflight.disk) {
        var free = this.preflight.disk.storage_free || 0;
        items.push({
          label: "Disk space (" + this.formatBytes(free) + " free)",
          ok: free > 200 * 1024 * 1024
        });
      }
      return items;
    },
    updateSteps: function updateSteps() {
      return [{
        key: "starting",
        label: this.$t("Preparing"),
        description: this.$t("Initializing_update"),
        threshold: 0
      }, {
        key: "database_backup_created",
        label: this.$t("Backup"),
        description: this.$t("Creating_backup"),
        threshold: 10
      }, {
        key: "download_complete",
        label: this.$t("Download"),
        description: this.$t("Downloading_package"),
        threshold: 35
      }, {
        key: "extracted",
        label: this.$t("Verify"),
        description: this.$t("Verifying_integrity"),
        threshold: 50
      }, {
        key: "deployment_completed",
        label: this.$t("Install"),
        description: this.$t("Deploying_files"),
        threshold: 70
      }, {
        key: "migrations_completed",
        label: this.$t("Migrate"),
        description: this.$t("Database_migrations"),
        threshold: 85
      }, {
        key: "completed",
        label: this.$t("Done"),
        description: this.$t("Finalizing"),
        threshold: 100
      }];
    },
    currentStepLabel: function currentStepLabel() {
      var step = this.updateStep;
      var found = this.updateSteps.find(function (s) {
        return s.key === step;
      });
      return found ? found.label : step;
    }
  },
  methods: {
    versionCompare: function versionCompare(a, b) {
      var pa = String(a).split(".").map(Number);
      var pb = String(b).split(".").map(Number);
      for (var i = 0; i < Math.max(pa.length, pb.length); i++) {
        var na = pa[i] || 0;
        var nb = pb[i] || 0;
        if (na > nb) return 1;
        if (na < nb) return -1;
      }
      return 0;
    },
    formatBytes: function formatBytes(bytes) {
      if (!bytes || bytes === 0) return "0 B";
      var k = 1024;
      var sizes = ["B", "KB", "MB", "GB"];
      var i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
    },
    stepClass: function stepClass(step, index) {
      if (this.isStepComplete(step)) return "step-complete";
      if (this.isStepActive(step)) return "step-active";
      return "step-pending";
    },
    isStepComplete: function isStepComplete(step) {
      return this.updatePercent > step.threshold;
    },
    isStepActive: function isStepActive(step) {
      var idx = this.updateSteps.indexOf(step);
      var prevThreshold = idx > 0 ? this.updateSteps[idx - 1].threshold : -1;
      return this.updatePercent > prevThreshold && this.updatePercent <= step.threshold;
    },
    checkForUpdates: function checkForUpdates() {
      var self = this;
      self.checking = true;
      axios.get("get_version_info").then(function (response) {
        var data = response.data;
        if (data && _typeof(data) === "object") {
          self.currentVersion = data.current_version || self.currentVersion;
          self.latestVersion = data.latest_version || "";
          self.latestInfo = data.latest_info || null;
          self.changelog = data.changelog || [];
          self.updateHistory = data.update_history || [];
        } else if (typeof data === "string" && data) {
          self.latestVersion = data;
        }
        self.lastChecked = Date.now();
      })["catch"](function () {
        self.makeToast("danger", self.$t("Failed_to_check_updates"), self.$t("Failed"));
      })["finally"](function () {
        self.checking = false;
      });
    },
    run_preflight: function run_preflight() {
      var self = this;
      self.preflightLoading = true;
      axios.get("update/preflight").then(function (res) {
        self.preflight = res.data;
        self.canUpdate = !!(res.data && res.data.ok);
      })["catch"](function () {
        self.preflight = null;
        self.canUpdate = false;
      })["finally"](function () {
        self.preflightLoading = false;
      });
    },
    confirmUpdate: function confirmUpdate() {
      var self = this;
      this.$swal({
        title: this.$t("Are_you_sure"),
        text: this.$t("Update_confirmation_text"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: this.$t("Yes_update"),
        cancelButtonText: this.$t("Cancel"),
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33"
      }).then(function (result) {
        if (result.isConfirmed || result.value) {
          self.Update_system();
        }
      })["catch"](function () {
        // SweetAlert2 may not be available, run directly
        self.Update_system();
      });
    },
    //------------------------ Update ---------------------------\\
    Update_system: function Update_system() {
      var self = this;
      self.SubmitProcessing = true;
      self.updating = true;
      self.updateFailed = false;
      self.updatePercent = 0;
      self.updateStep = "starting";
      this.startProgressPolling();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.post("one_click_update").then(function (response) {
        self.SubmitProcessing = false;
        self.updating = false;
        self.stopProgressPolling();
        self.updatePercent = 100;
        self.updateStep = "completed";
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        self.makeToast("success", self.$t("Successfully_Updated"), self.$t("Success"));
        Fire.$emit("Event_update");
        setTimeout(function () {
          self.checkForUpdates();
        }, 2000);
      })["catch"](function (error) {
        self.SubmitProcessing = false;
        self.updateFailed = true;
        self.stopProgressPolling();
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        var msg = self.$t("InvalidData");
        if (error && error.response && error.response.data) {
          msg = error.response.data.message || msg;
        }
        self.makeToast("danger", msg, self.$t("Failed"));
        setTimeout(function () {
          self.updating = false;
          self.updateFailed = false;
        }, 5000);
      });
    },
    startProgressPolling: function startProgressPolling() {
      var self = this;
      if (this.progressTimer) return;
      this.progressTimer = setInterval(function () {
        axios.get("update/progress").then(function (res) {
          if (res && res.data) {
            self.updatePercent = res.data.percent || 0;
            self.updateStep = res.data.step || "running";
            if (self.updatePercent >= 100) {
              self.stopProgressPolling();
            }
          }
        })["catch"](function () {});
      }, 1500);
    },
    stopProgressPolling: function stopProgressPolling() {
      if (this.progressTimer) {
        clearInterval(this.progressTimer);
        this.progressTimer = null;
      }
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    }
  },
  //----------------------------- Created function-------------------
  created: function created() {
    this.checkForUpdates();
    this.run_preflight();
    var self = this;
    Fire.$on("Event_update", function () {
      self.checkForUpdates();
    });

    // Refresh "last checked" text every 30s
    this._lastCheckedTimer = setInterval(function () {
      self.$forceUpdate();
    }, 30000);
  },
  mounted: function mounted() {
    this.isLoading = false;
  },
  beforeDestroy: function beforeDestroy() {
    this.stopProgressPolling();
    if (this._lastCheckedTimer) {
      clearInterval(this._lastCheckedTimer);
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/update_settings.vue?vue&type=template&id=29aa1b6c&scoped=true"
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/update_settings.vue?vue&type=template&id=29aa1b6c&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("update_settings"),
      folder: _vm.$t("Settings")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "card update-card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("span", [_vm._v(_vm._s(_vm.$t("Update_Log")))])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "alert alert-danger"
  }, [_vm._v(_vm._s(_vm.$t("Note_update")))]), _vm._v(" "), _c("b-tabs", {
    attrs: {
      "active-nav-item-class": "nav nav-tabs",
      "content-class": "mt-3"
    }
  }, [_c("b-tab", {
    attrs: {
      title: _vm.$t("Automatic_Update"),
      active: ""
    }
  }, [_c("div", {
    staticClass: "row mt-3"
  }, [_c("div", {
    staticClass: "col-lg-8 col-md-12 mb-4"
  }, [_c("div", {
    staticClass: "card inner-card"
  }, [_c("div", {
    staticClass: "card-body p-4"
  }, [_c("div", {
    staticClass: "status-banner",
    "class": _vm.statusBannerClass
  }, [_c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("div", {
    staticClass: "status-icon-wrapper",
    "class": _vm.statusIconClass
  }, [_c("lucide-icon", {
    "class": {
      "spin-icon": _vm.updating
    },
    attrs: {
      name: _vm.statusIcon
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "ml-3"
  }, [_c("h5", {
    staticClass: "mb-1 font-weight-bold"
  }, [_vm._v(_vm._s(_vm.statusTitle))]), _vm._v(" "), _c("p", {
    staticClass: "mb-0 small opacity-80"
  }, [_vm._v(_vm._s(_vm.statusDescription))])])]), _vm._v(" "), _c("span", {
    staticClass: "badge status-badge",
    "class": _vm.statusBadgeClass
  }, [_vm._v("\n                        " + _vm._s(_vm.statusLabel) + "\n                      ")])]), _vm._v(" "), _c("div", {
    staticClass: "version-comparison mt-4"
  }, [_c("div", {
    staticClass: "row align-items-center"
  }, [_c("div", {
    staticClass: "col-md-5"
  }, [_c("div", {
    staticClass: "version-box current"
  }, [_c("div", {
    staticClass: "version-label text-muted small text-uppercase mb-1"
  }, [_vm._v("\n                              " + _vm._s(_vm.$t("Installed_Version")) + "\n                            ")]), _vm._v(" "), _c("div", {
    staticClass: "version-number"
  }, [_c("span", {
    staticClass: "h3 font-weight-bold mb-0"
  }, [_vm._v("v" + _vm._s(_vm.currentVersion))])]), _vm._v(" "), _c("div", {
    staticClass: "text-muted small mt-1"
  }, [_vm._v("\n                              " + _vm._s(_vm.$t("Currently_Running")) + "\n                            ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 text-center py-3"
  }, [_c("div", {
    staticClass: "version-arrow",
    "class": {
      "has-update": _vm.hasUpdate
    }
  }, [_c("lucide-icon", {
    staticStyle: {
      "font-size": "1.5rem"
    },
    attrs: {
      name: "arrow-right"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-5"
  }, [_c("div", {
    staticClass: "version-box latest",
    "class": {
      highlight: _vm.hasUpdate
    }
  }, [_c("div", {
    staticClass: "version-label text-muted small text-uppercase mb-1"
  }, [_vm._v("\n                              " + _vm._s(_vm.$t("Latest_Version")) + "\n                            ")]), _vm._v(" "), _c("div", {
    staticClass: "version-number"
  }, [_c("span", {
    staticClass: "h3 font-weight-bold mb-0"
  }, [_vm._v("\n                                " + _vm._s(_vm.latestVersion ? "v" + _vm.latestVersion : "—") + "\n                              ")])]), _vm._v(" "), _c("div", {
    staticClass: "small mt-1",
    "class": _vm.hasUpdate ? "text-warning" : "text-success"
  }, [_vm._v("\n                              " + _vm._s(_vm.hasUpdate ? _vm.$t("New_Version_Available") : _vm.$t("You_are_up_to_date")) + "\n                            ")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center justify-content-between mt-4 pt-3 border-top flex-wrap",
    staticStyle: {
      gap: "10px"
    }
  }, [_c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("button", {
    staticClass: "btn btn-outline-secondary btn-sm d-flex align-items-center",
    attrs: {
      disabled: _vm.checking
    },
    on: {
      click: _vm.checkForUpdates
    }
  }, [_vm.checking ? _c("span", {
    staticClass: "spinner-border spinner-border-sm mr-2"
  }) : _c("lucide-icon", {
    staticClass: "mr-2",
    attrs: {
      name: "repeat"
    }
  }), _vm._v("\n                          " + _vm._s(_vm.$t("Check_for_Updates")) + "\n                        ")], 1), _vm._v(" "), _vm.lastChecked ? _c("span", {
    staticClass: "text-muted small ml-3"
  }, [_vm._v("\n                          " + _vm._s(_vm.lastCheckedText) + "\n                        ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center"
  }, [_vm.hasUpdate && !_vm.updating ? _c("button", {
    staticClass: "btn btn-primary d-flex align-items-center",
    attrs: {
      disabled: _vm.SubmitProcessing || !_vm.canUpdate
    },
    on: {
      click: _vm.confirmUpdate
    }
  }, [_vm.SubmitProcessing ? _c("span", {
    staticClass: "spinner-border spinner-border-sm mr-2",
    attrs: {
      role: "status",
      "aria-hidden": "true"
    }
  }) : _c("lucide-icon", {
    staticClass: "mr-2",
    attrs: {
      name: "arrow-up-circle"
    }
  }), _vm._v("\n                          " + _vm._s(_vm.$t("Update_Now")) + " — v" + _vm._s(_vm.latestVersion) + "\n                        ")], 1) : _vm._e()])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-4 col-md-12 mb-4"
  }, [_c("div", {
    staticClass: "card inner-card h-100"
  }, [_c("div", {
    staticClass: "card-body p-4"
  }, [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between mb-3"
  }, [_c("h6", {
    staticClass: "font-weight-bold mb-0"
  }, [_vm._v(_vm._s(_vm.$t("System_Checks")))]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-link btn-sm p-0",
    attrs: {
      disabled: _vm.preflightLoading
    },
    on: {
      click: _vm.run_preflight
    }
  }, [_vm.preflightLoading ? _c("span", {
    staticClass: "spinner-border spinner-border-sm"
  }) : _c("lucide-icon", {
    attrs: {
      name: "repeat"
    }
  })], 1)]), _vm._v(" "), _vm.preflight ? _c("div", {
    staticClass: "preflight-checks"
  }, _vm._l(_vm.preflightItems, function (check, key) {
    return _c("div", {
      key: key,
      staticClass: "check-item"
    }, [_c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("span", {
      staticClass: "check-dot",
      "class": check.ok ? "bg-success" : "bg-danger"
    }), _vm._v(" "), _c("span", {
      staticClass: "small"
    }, [_vm._v(_vm._s(check.label))])])]);
  }), 0) : _c("div", {
    staticClass: "text-muted small text-center py-4"
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Run_checks_to_verify_readiness")) + "\n                    ")]), _vm._v(" "), _vm.preflight ? _c("div", {
    staticClass: "mt-3 pt-3 border-top"
  }, [_c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("span", {
    staticClass: "check-dot",
    "class": _vm.canUpdate ? "bg-success" : "bg-danger"
  }), _vm._v(" "), _c("span", {
    staticClass: "small font-weight-bold"
  }, [_vm._v("\n                          " + _vm._s(_vm.canUpdate ? _vm.$t("All_checks_passed") : _vm.$t("Some_checks_failed")) + "\n                        ")])])]) : _vm._e()])])]), _vm._v(" "), _vm.updating ? _c("div", {
    staticClass: "col-12 mb-4"
  }, [_c("div", {
    staticClass: "card inner-card"
  }, [_c("div", {
    staticClass: "card-body p-4"
  }, [_c("h6", {
    staticClass: "font-weight-bold mb-3"
  }, [_vm._v(_vm._s(_vm.$t("Update_Progress")))]), _vm._v(" "), _c("div", {
    staticClass: "step-tracker"
  }, _vm._l(_vm.updateSteps, function (step, index) {
    return _c("div", {
      key: step.key,
      staticClass: "step-item",
      "class": _vm.stepClass(step, index)
    }, [_c("div", {
      staticClass: "step-indicator"
    }, [_c("div", {
      staticClass: "step-circle"
    }, [_vm.isStepComplete(step) ? _c("span", {
      staticClass: "step-check"
    }, [_vm._v("✓")]) : _vm.isStepActive(step) ? _c("span", {
      staticClass: "spinner-border spinner-border-sm"
    }) : _c("span", {
      staticClass: "step-number"
    }, [_vm._v(_vm._s(index + 1))])]), _vm._v(" "), index < _vm.updateSteps.length - 1 ? _c("div", {
      staticClass: "step-line",
      "class": {
        active: _vm.isStepComplete(step)
      }
    }) : _vm._e()]), _vm._v(" "), _c("div", {
      staticClass: "step-content mt-2"
    }, [_c("div", {
      staticClass: "small font-weight-bold"
    }, [_vm._v(_vm._s(step.label))]), _vm._v(" "), _c("div", {
      staticClass: "text-muted",
      staticStyle: {
        "font-size": "0.7rem"
      }
    }, [_vm._v(_vm._s(step.description))])])]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "mt-4"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between mb-1"
  }, [_c("span", {
    staticClass: "small text-muted"
  }, [_vm._v(_vm._s(_vm.currentStepLabel))]), _vm._v(" "), _c("span", {
    staticClass: "small font-weight-bold"
  }, [_vm._v(_vm._s(_vm.updatePercent) + "%")])]), _vm._v(" "), _c("div", {
    staticClass: "progress",
    staticStyle: {
      height: "6px",
      "border-radius": "3px"
    }
  }, [_c("div", {
    staticClass: "progress-bar progress-bar-animated",
    "class": _vm.updateFailed ? "bg-danger" : "bg-primary",
    style: {
      width: _vm.updatePercent + "%"
    },
    attrs: {
      role: "progressbar",
      "aria-valuenow": _vm.updatePercent,
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])])])]) : _vm._e(), _vm._v(" "), _vm.changelog && _vm.changelog.length ? _c("div", {
    staticClass: "col-lg-8 col-md-12 mb-4"
  }, [_c("div", {
    staticClass: "card inner-card"
  }, [_c("div", {
    staticClass: "card-body p-4"
  }, [_c("h6", {
    staticClass: "font-weight-bold mb-3"
  }, [_c("lucide-icon", {
    staticClass: "mr-2",
    attrs: {
      name: "clipboard-list"
    }
  }), _vm._v("\n                      " + _vm._s(_vm.$t("Release_Notes")) + "\n                    ")], 1), _vm._v(" "), _c("div", {
    staticClass: "changelog-list"
  }, _vm._l(_vm.changelog, function (entry, idx) {
    return _c("div", {
      key: idx,
      staticClass: "changelog-entry",
      "class": {
        "border-bottom pb-3 mb-3": idx < _vm.changelog.length - 1
      }
    }, [_c("div", {
      staticClass: "d-flex align-items-center mb-2"
    }, [_c("span", {
      staticClass: "badge badge-pill mr-2",
      "class": entry.version === _vm.latestVersion ? "badge-primary" : "badge-light"
    }, [_vm._v("\n                            v" + _vm._s(entry.version) + "\n                          ")]), _vm._v(" "), entry.date ? _c("span", {
      staticClass: "text-muted small"
    }, [_vm._v(_vm._s(entry.date))]) : _vm._e()]), _vm._v(" "), _c("ul", {
      staticClass: "changelog-items mb-0 pl-3"
    }, _vm._l(entry.items, function (item, i) {
      return _c("li", {
        key: i,
        staticClass: "small mb-1"
      }, [_c("span", {
        staticClass: "changelog-tag mr-1",
        "class": "tag-" + (item.type || "misc")
      }, [_vm._v("\n                              " + _vm._s((item.type || "misc").toUpperCase()) + "\n                            ")]), _vm._v("\n                            " + _vm._s(item.text) + "\n                          ")]);
    }), 0)]);
  }), 0)])])]) : _vm._e(), _vm._v(" "), _vm.updateHistory && _vm.updateHistory.length ? _c("div", {
    staticClass: "col-md-12 mb-4",
    "class": _vm.changelog && _vm.changelog.length ? "col-lg-4" : "col-lg-12"
  }, [_c("div", {
    staticClass: "card inner-card"
  }, [_c("div", {
    staticClass: "card-body p-4"
  }, [_c("h6", {
    staticClass: "font-weight-bold mb-3"
  }, [_c("lucide-icon", {
    staticClass: "mr-2",
    attrs: {
      name: "clock"
    }
  }), _vm._v("\n                      " + _vm._s(_vm.$t("Update_History")) + "\n                    ")], 1), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-sm table-borderless mb-0"
  }, [_c("thead", [_c("tr", {
    staticClass: "text-muted small text-uppercase"
  }, [_c("th", [_vm._v(_vm._s(_vm.$t("Version")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.$t("Status")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.$t("Date")))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.updateHistory, function (h, idx) {
    return _c("tr", {
      key: idx
    }, [_c("td", {
      staticClass: "font-weight-bold"
    }, [_vm._v("v" + _vm._s(h.version))]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "badge badge-pill",
      "class": h.status === "success" ? "badge-success" : "badge-danger"
    }, [_vm._v("\n                                " + _vm._s(h.status) + "\n                              ")])]), _vm._v(" "), _c("td", {
      staticClass: "text-muted small"
    }, [_vm._v(_vm._s(h.time))])]);
  }), 0)])])])])]) : _vm._e()])]), _vm._v(" "), _c("b-tab", {
    attrs: {
      title: _vm.$t("Manual_Update")
    }
  }, [_c("div", {
    staticClass: "col-md-12 mt-3"
  }, [_c("h5", [_vm._v("Please follow these steps, To Update your application")]), _vm._v(" "), _c("div", {
    staticClass: "allert alert-danger"
  }, [_vm._v("Note 1: If you have made any changes in the code manually then your changes will be lost.")]), _vm._v(" "), _c("div", {
    staticClass: "allert alert-danger"
  }, [_vm._v('Note 2: only admin or user who has permission "system_setting" he can upgrade the system')]), _vm._v(" "), _c("ul", [_c("li", [_c("strong", [_vm._v("Step 1 : ")]), _vm._v("Take back up of your database,  Go to "), _c("a", {
    attrs: {
      href: "/app/settings/Backup"
    }
  }, [_vm._v("Backup")]), _vm._v(" Click on Generate Backup ,\n                  You will find it in "), _c("strong", [_vm._v("/storage/app/public/backup")]), _vm._v("  and save it to your pc To restore it if there is an error ,\n                  or Go to your PhpMyAdmin and export your database then and save it to your pc To restore it if there is an error\n                ")]), _vm._v(" "), _c("li", [_c("strong", [_vm._v("Step 2 : ")]), _vm._v(" Take back up of your files before updating.\n                ")]), _vm._v(" "), _c("li", [_c("strong", [_vm._v("Step 3 : ")]), _vm._v("  Download the latest version from your codecanyon and Extract it .\n                ")]), _vm._v(" "), _c("li", [_c("strong", [_vm._v("Step 4 : ")]), _vm._v("  Make sure to remove the previous files , "), _c("strong", [_vm._v("except")]), _vm._v(" the following :\n                  "), _c("ul", [_c("li", [_vm._v("file   : "), _c("strong", [_vm._v(".env")])]), _vm._v(" "), _c("li", [_vm._v("Folder : "), _c("strong", [_vm._v("storage")])]), _vm._v(" "), _c("li", [_vm._v("Folder : "), _c("strong", [_vm._v("images folder in public : /public/images")])])])]), _vm._v(" "), _c("li", [_c("strong", [_vm._v("Step 5 : ")]), _vm._v(" Re-upload the files and folders from the new update , "), _c("strong", [_vm._v("except")]), _vm._v(" the following :\n                  "), _c("ul", [_c("li", [_vm._v("file   : "), _c("strong", [_vm._v(".env")])]), _vm._v(" "), _c("li", [_vm._v("Folder : "), _c("strong", [_vm._v("storage")])]), _vm._v(" "), _c("li", [_vm._v("Folder : "), _c("strong", [_vm._v("images folder in public : /public/images")])])])]), _vm._v(" "), _c("li", [_c("strong", [_vm._v("Step 6 : ")]), _vm._v("Visit  http://your_app/update to update your database\n                ")]), _vm._v(" "), _c("li", [_c("strong", [_vm._v("Step 7 : ")]), _vm._v(" Hard Clear your cache browser\n                ")]), _vm._v(" "), _c("li", [_c("strong", [_vm._v("Step 8 : ")]), _vm._v(" You are done! Enjoy the updated application\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "allert alert-danger"
  }, [_vm._v("Note: If any pages are not loading or blank, make sure you cleared your browser cache.")])])])], 1)], 1)])]) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/update_settings.vue?vue&type=style&index=0&id=29aa1b6c&scoped=true&lang=css"
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/update_settings.vue?vue&type=style&index=0&id=29aa1b6c&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n/* ============================================\n   UPDATE SETTINGS - MODERN UI\n   ============================================ */\n.update-card[data-v-29aa1b6c] {\n  border-radius: 12px;\n}\n.inner-card[data-v-29aa1b6c] {\n  border: none;\n  border-radius: 10px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  transition: box-shadow 0.2s ease;\n}\n.inner-card[data-v-29aa1b6c]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04);\n}\n\n/* Status Banner */\n.status-banner[data-v-29aa1b6c] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-radius: 10px;\n  transition: all 0.3s ease;\n}\n.status-current[data-v-29aa1b6c] {\n  background: rgba(16, 185, 129, 0.08);\n}\n.status-available[data-v-29aa1b6c] {\n  background: rgba(245, 158, 11, 0.08);\n}\n.status-updating[data-v-29aa1b6c] {\n  background: rgba(59, 130, 246, 0.08);\n}\n.status-failed[data-v-29aa1b6c] {\n  background: rgba(239, 68, 68, 0.08);\n}\n.status-icon-wrapper[data-v-29aa1b6c] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n}\n.icon-current[data-v-29aa1b6c] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #10b981;\n}\n.icon-available[data-v-29aa1b6c] {\n  background: rgba(245, 158, 11, 0.15);\n  color: #f59e0b;\n}\n.icon-updating[data-v-29aa1b6c] {\n  background: rgba(59, 130, 246, 0.15);\n  color: #3b82f6;\n}\n.icon-failed[data-v-29aa1b6c] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #ef4444;\n}\n.status-badge[data-v-29aa1b6c] {\n  font-size: 0.75rem;\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n}\n.badge-updating[data-v-29aa1b6c] {\n  background: rgba(59, 130, 246, 0.15);\n  color: #3b82f6;\n}\n\n/* Version Comparison */\n.version-box[data-v-29aa1b6c] {\n  padding: 20px;\n  border-radius: 10px;\n  background: #f8fafc;\n  text-align: center;\n  transition: all 0.3s ease;\n  border: 1px solid transparent;\n}\n.version-box.highlight[data-v-29aa1b6c] {\n  background: rgba(245, 158, 11, 0.06);\n  border-color: rgba(245, 158, 11, 0.2);\n}\n.version-arrow[data-v-29aa1b6c] {\n  color: #cbd5e1;\n  transition: color 0.3s ease;\n}\n.version-arrow.has-update[data-v-29aa1b6c] {\n  color: #f59e0b;\n}\n\n/* Preflight Checks */\n.check-item[data-v-29aa1b6c] {\n  padding: 8px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.04);\n}\n.check-item[data-v-29aa1b6c]:last-child {\n  border-bottom: none;\n}\n.check-dot[data-v-29aa1b6c] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 10px;\n  flex-shrink: 0;\n}\n\n/* Step Tracker */\n.step-tracker[data-v-29aa1b6c] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 10px;\n}\n.step-item[data-v-29aa1b6c] {\n  flex: 1;\n  text-align: center;\n  position: relative;\n}\n.step-indicator[data-v-29aa1b6c] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.step-circle[data-v-29aa1b6c] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: #f1f5f9;\n  color: #94a3b8;\n  border: 2px solid #e2e8f0;\n  transition: all 0.3s ease;\n  z-index: 1;\n  flex-shrink: 0;\n}\n.step-line[data-v-29aa1b6c] {\n  flex: 1;\n  height: 2px;\n  background: #e2e8f0;\n  margin: 0 -2px;\n  transition: background 0.4s ease;\n}\n.step-line.active[data-v-29aa1b6c] {\n  background: #3b82f6;\n}\n.step-complete .step-circle[data-v-29aa1b6c] {\n  background: #3b82f6;\n  border-color: #3b82f6;\n  color: #fff;\n}\n.step-active .step-circle[data-v-29aa1b6c] {\n  border-color: #3b82f6;\n  color: #3b82f6;\n  background: rgba(59, 130, 246, 0.08);\n}\n.step-check[data-v-29aa1b6c] {\n  font-size: 0.85rem;\n}\n\n/* Changelog */\n.changelog-items[data-v-29aa1b6c] {\n  list-style: none;\n}\n.changelog-items li[data-v-29aa1b6c] {\n  position: relative;\n  padding-left: 4px;\n}\n.changelog-tag[data-v-29aa1b6c] {\n  display: inline-block;\n  font-size: 0.6rem;\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  vertical-align: middle;\n}\n.tag-fix[data-v-29aa1b6c] { background: rgba(239, 68, 68, 0.1); color: #ef4444;\n}\n.tag-feature[data-v-29aa1b6c] { background: rgba(16, 185, 129, 0.1); color: #10b981;\n}\n.tag-improvement[data-v-29aa1b6c] { background: rgba(59, 130, 246, 0.1); color: #3b82f6;\n}\n.tag-misc[data-v-29aa1b6c] { background: rgba(107, 114, 128, 0.1); color: #6b7280;\n}\n\n/* Spin Animation */\n@keyframes spin-29aa1b6c {\nfrom { transform: rotate(0deg);\n}\nto { transform: rotate(360deg);\n}\n}\n.spin-icon[data-v-29aa1b6c] {\n  animation: spin-29aa1b6c 1.2s linear infinite;\n  display: inline-block;\n}\n\n/* Dark Mode */\n.dark-mode .inner-card[data-v-29aa1b6c],\n[data-theme=\"dark\"] .inner-card[data-v-29aa1b6c] {\n  background: #1e293b;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n.dark-mode .inner-card[data-v-29aa1b6c]:hover,\n[data-theme=\"dark\"] .inner-card[data-v-29aa1b6c]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n}\n.dark-mode .version-box[data-v-29aa1b6c],\n[data-theme=\"dark\"] .version-box[data-v-29aa1b6c] {\n  background: #0f172a;\n}\n.dark-mode .version-box.highlight[data-v-29aa1b6c],\n[data-theme=\"dark\"] .version-box.highlight[data-v-29aa1b6c] {\n  background: rgba(245, 158, 11, 0.08);\n  border-color: rgba(245, 158, 11, 0.25);\n}\n.dark-mode .step-circle[data-v-29aa1b6c],\n[data-theme=\"dark\"] .step-circle[data-v-29aa1b6c] {\n  background: #334155;\n  border-color: #475569;\n  color: #94a3b8;\n}\n.dark-mode .step-line[data-v-29aa1b6c],\n[data-theme=\"dark\"] .step-line[data-v-29aa1b6c] {\n  background: #334155;\n}\n.dark-mode .check-item[data-v-29aa1b6c],\n[data-theme=\"dark\"] .check-item[data-v-29aa1b6c] {\n  border-color: rgba(255, 255, 255, 0.06);\n}\n.dark-mode .status-banner h5[data-v-29aa1b6c],\n[data-theme=\"dark\"] .status-banner h5[data-v-29aa1b6c] {\n  color: #f1f5f9;\n}\n\n/* Responsive */\n@media (max-width: 768px) {\n.status-banner[data-v-29aa1b6c] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n}\n.version-arrow[data-v-29aa1b6c] {\n    transform: rotate(90deg);\n}\n.step-tracker[data-v-29aa1b6c] {\n    flex-wrap: wrap;\n    gap: 8px;\n}\n.step-item[data-v-29aa1b6c] {\n    flex: 0 0 calc(25% - 6px);\n}\n.step-line[data-v-29aa1b6c] {\n    display: none;\n}\n}\n@media (max-width: 576px) {\n.step-item[data-v-29aa1b6c] {\n    flex: 0 0 calc(33.33% - 6px);\n}\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/update_settings.vue?vue&type=style&index=0&id=29aa1b6c&scoped=true&lang=css"
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/update_settings.vue?vue&type=style&index=0&id=29aa1b6c&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_update_settings_vue_vue_type_style_index_0_id_29aa1b6c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./update_settings.vue?vue&type=style&index=0&id=29aa1b6c&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/update_settings.vue?vue&type=style&index=0&id=29aa1b6c&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_update_settings_vue_vue_type_style_index_0_id_29aa1b6c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_update_settings_vue_vue_type_style_index_0_id_29aa1b6c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/views/app/pages/settings/update_settings.vue"
/*!********************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/update_settings.vue ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _update_settings_vue_vue_type_template_id_29aa1b6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update_settings.vue?vue&type=template&id=29aa1b6c&scoped=true */ "./resources/src/views/app/pages/settings/update_settings.vue?vue&type=template&id=29aa1b6c&scoped=true");
/* harmony import */ var _update_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update_settings.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/settings/update_settings.vue?vue&type=script&lang=js");
/* harmony import */ var _update_settings_vue_vue_type_style_index_0_id_29aa1b6c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update_settings.vue?vue&type=style&index=0&id=29aa1b6c&scoped=true&lang=css */ "./resources/src/views/app/pages/settings/update_settings.vue?vue&type=style&index=0&id=29aa1b6c&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _update_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _update_settings_vue_vue_type_template_id_29aa1b6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _update_settings_vue_vue_type_template_id_29aa1b6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "29aa1b6c",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/settings/update_settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/settings/update_settings.vue?vue&type=script&lang=js"
/*!********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/update_settings.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_update_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./update_settings.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/update_settings.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_update_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/settings/update_settings.vue?vue&type=template&id=29aa1b6c&scoped=true"
/*!**************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/update_settings.vue?vue&type=template&id=29aa1b6c&scoped=true ***!
  \**************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_update_settings_vue_vue_type_template_id_29aa1b6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_update_settings_vue_vue_type_template_id_29aa1b6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_update_settings_vue_vue_type_template_id_29aa1b6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./update_settings.vue?vue&type=template&id=29aa1b6c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/update_settings.vue?vue&type=template&id=29aa1b6c&scoped=true");


/***/ },

/***/ "./resources/src/views/app/pages/settings/update_settings.vue?vue&type=style&index=0&id=29aa1b6c&scoped=true&lang=css"
/*!****************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/update_settings.vue?vue&type=style&index=0&id=29aa1b6c&scoped=true&lang=css ***!
  \****************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_update_settings_vue_vue_type_style_index_0_id_29aa1b6c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./update_settings.vue?vue&type=style&index=0&id=29aa1b6c&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/update_settings.vue?vue&type=style&index=0&id=29aa1b6c&scoped=true&lang=css");


/***/ }

}]);