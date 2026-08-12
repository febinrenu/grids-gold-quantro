"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["realestate_property_form"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/realestate/property_form.vue?vue&type=script&lang=js"
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/realestate/property_form.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Property Form"
  },
  data: function data() {
    return {
      isLoading: true,
      saving: false,
      submitted: false,
      editMode: false,
      id: null,
      categories: [],
      amenityInput: "",
      featuredFile: null,
      featuredPreview: null,
      newGalleryFiles: [],
      galleryPreviews: [],
      existingGallery: [],
      form: {
        title: "",
        property_category_id: null,
        description: "",
        purpose: "sale",
        status: "available",
        featured: false,
        price: "",
        area: "",
        area_unit: "m²",
        bedrooms: "",
        bathrooms: "",
        garage: "",
        address: "",
        city: "",
        region: "",
        latitude: "",
        longitude: "",
        amenities: [],
        agent_name: "",
        agent_phone: "",
        agent_email: "",
        agent_whatsapp: "",
        seo_title: "",
        seo_description: "",
        seo_keywords: ""
      }
    };
  },
  methods: {
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    addAmenity: function addAmenity() {
      var v = (this.amenityInput || "").trim();
      if (v && !this.form.amenities.includes(v)) this.form.amenities.push(v);
      this.amenityInput = "";
    },
    removeAmenity: function removeAmenity(i) {
      this.form.amenities.splice(i, 1);
    },
    onFeaturedChange: function onFeaturedChange(e) {
      var f = e.target.files[0];
      if (!f) return;
      this.featuredFile = f;
      this.featuredPreview = URL.createObjectURL(f);
    },
    onGalleryChange: function onGalleryChange(e) {
      var _this = this;
      var files = Array.from(e.target.files || []);
      files.forEach(function (f) {
        _this.newGalleryFiles.push(f);
        _this.galleryPreviews.push(URL.createObjectURL(f));
      });
    },
    removeExisting: function removeExisting(i) {
      this.existingGallery.splice(i, 1);
    },
    removeNew: function removeNew(i) {
      this.newGalleryFiles.splice(i, 1);
      this.galleryPreviews.splice(i, 1);
    },
    Get_Categories: function Get_Categories() {
      var _this2 = this;
      return axios.get("realestate/categories_all").then(function (res) {
        _this2.categories = res.data.categories;
      })["catch"](function () {});
    },
    Get_Property: function Get_Property() {
      var _this3 = this;
      return axios.get("realestate/properties/" + this.id).then(function (res) {
        var p = res.data.property;
        _this3.form.title = p.title;
        _this3.form.property_category_id = p.property_category_id;
        _this3.form.description = p.description || "";
        _this3.form.purpose = p.purpose || "sale";
        _this3.form.status = p.status || "available";
        _this3.form.featured = !!p.featured;
        _this3.form.price = p.price;
        _this3.form.area = p.area;
        _this3.form.area_unit = p.area_unit || "m²";
        _this3.form.bedrooms = p.bedrooms;
        _this3.form.bathrooms = p.bathrooms;
        _this3.form.garage = p.garage;
        _this3.form.address = p.address || "";
        _this3.form.city = p.city || "";
        _this3.form.region = p.region || "";
        _this3.form.latitude = p.latitude;
        _this3.form.longitude = p.longitude;
        _this3.form.amenities = Array.isArray(p.amenities) ? p.amenities : [];
        _this3.form.agent_name = p.agent_name || "";
        _this3.form.agent_phone = p.agent_phone || "";
        _this3.form.agent_email = p.agent_email || "";
        _this3.form.agent_whatsapp = p.agent_whatsapp || "";
        _this3.form.seo_title = p.seo_title || "";
        _this3.form.seo_description = p.seo_description || "";
        _this3.form.seo_keywords = p.seo_keywords || "";
        _this3.existingGallery = Array.isArray(p.gallery) ? p.gallery.slice() : [];
        if (p.featured_image) _this3.featuredPreview = "/" + p.featured_image;
      });
    },
    buildFormData: function buildFormData() {
      var fd = new FormData();
      var f = this.form;
      var scalar = ["title", "property_category_id", "description", "purpose", "status", "price", "area", "area_unit", "bedrooms", "bathrooms", "garage", "address", "city", "region", "latitude", "longitude", "agent_name", "agent_phone", "agent_email", "agent_whatsapp", "seo_title", "seo_description", "seo_keywords"];
      scalar.forEach(function (k) {
        if (f[k] !== null && f[k] !== undefined && f[k] !== "") fd.append(k, f[k]);
      });
      fd.append("featured", f.featured ? 1 : 0);
      fd.append("amenities", JSON.stringify(f.amenities || []));
      fd.append("gallery_existing", JSON.stringify(this.existingGallery || []));
      if (this.featuredFile) fd.append("featured_image_file", this.featuredFile);
      this.newGalleryFiles.forEach(function (file) {
        return fd.append("gallery_files[]", file);
      });
      return fd;
    },
    submit: function submit() {
      var _this4 = this;
      this.submitted = true;
      if (!this.form.title) {
        this.makeToast("danger", this.$t("Please_fill_the_form_correctly"), this.$t("Failed"));
        return;
      }
      this.saving = true;
      var fd = this.buildFormData();
      var url = this.editMode ? "realestate/properties/" + this.id : "realestate/properties";
      axios.post(url, fd, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function () {
        _this4.makeToast("success", _this4.$t("Created_in_successfully"), _this4.$t("Success"));
        _this4.$router.push({
          name: "realestate_properties"
        });
      })["catch"](function (err) {
        _this4.saving = false;
        var msg = err.response && err.response.data && err.response.data.message ? err.response.data.message : _this4.$t("InvalidData");
        _this4.makeToast("danger", msg, _this4.$t("Failed"));
      });
    }
  },
  created: function created() {
    var _this5 = this;
    this.id = this.$route.params.id || null;
    this.editMode = !!this.id;
    var tasks = [this.Get_Categories()];
    if (this.editMode) tasks.push(this.Get_Property());
    Promise.all(tasks)["finally"](function () {
      _this5.isLoading = false;
    });
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/realestate/property_form.vue?vue&type=template&id=7fd0d966"
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/realestate/property_form.vue?vue&type=template&id=7fd0d966 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.editMode ? _vm.$t("Edit_Property") : _vm.$t("Add_Property"),
      folder: _vm.$t("Real_Estate")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      lg: "8"
    }
  }, [_c("b-card", {
    staticClass: "wrapper mb-3"
  }, [_c("h5", {
    staticClass: "mb-3"
  }, [_vm._v(_vm._s(_vm.$t("Property_Information")))]), _vm._v(" "), _c("b-row", [_c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Property_Title") + " *"
    }
  }, [_c("b-form-input", {
    attrs: {
      state: _vm.submitted ? !!_vm.form.title : null,
      required: ""
    },
    model: {
      value: _vm.form.title,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "title", $$v);
      },
      expression: "form.title"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Property_Type")
    }
  }, [_c("v-select", {
    attrs: {
      reduce: function reduce(o) {
        return o.value;
      },
      options: _vm.categories.map(function (c) {
        return {
          label: c.name,
          value: c.id
        };
      }),
      placeholder: _vm.$t("Select")
    },
    model: {
      value: _vm.form.property_category_id,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "property_category_id", $$v);
      },
      expression: "form.property_category_id"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "3"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Purpose")
    }
  }, [_c("b-form-select", {
    model: {
      value: _vm.form.purpose,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "purpose", $$v);
      },
      expression: "form.purpose"
    }
  }, [_c("b-form-select-option", {
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
    model: {
      value: _vm.form.status,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "status", $$v);
      },
      expression: "form.status"
    }
  }, [_c("b-form-select-option", {
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
  }, [_vm._v(_vm._s(_vm.$t("Rented")))])], 1)], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Description")
    }
  }, [_c("b-form-textarea", {
    attrs: {
      rows: "5"
    },
    model: {
      value: _vm.form.description,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "description", $$v);
      },
      expression: "form.description"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c("b-card", {
    staticClass: "wrapper mb-3"
  }, [_c("h5", {
    staticClass: "mb-3"
  }, [_vm._v(_vm._s(_vm.$t("Specifications")))]), _vm._v(" "), _c("b-row", [_c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Price")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "number",
      step: "0.01",
      min: "0"
    },
    model: {
      value: _vm.form.price,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "price", $$v);
      },
      expression: "form.price"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Area")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "number",
      step: "0.01",
      min: "0"
    },
    model: {
      value: _vm.form.area,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "area", $$v);
      },
      expression: "form.area"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Area_Unit")
    }
  }, [_c("b-form-input", {
    attrs: {
      placeholder: "m²"
    },
    model: {
      value: _vm.form.area_unit,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "area_unit", $$v);
      },
      expression: "form.area_unit"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Bedrooms")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "number",
      min: "0"
    },
    model: {
      value: _vm.form.bedrooms,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "bedrooms", $$v);
      },
      expression: "form.bedrooms"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Bathrooms")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "number",
      min: "0"
    },
    model: {
      value: _vm.form.bathrooms,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "bathrooms", $$v);
      },
      expression: "form.bathrooms"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Garage")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "number",
      min: "0"
    },
    model: {
      value: _vm.form.garage,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "garage", $$v);
      },
      expression: "form.garage"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c("b-card", {
    staticClass: "wrapper mb-3"
  }, [_c("h5", {
    staticClass: "mb-3"
  }, [_vm._v(_vm._s(_vm.$t("Location")))]), _vm._v(" "), _c("b-row", [_c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Address")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.form.address,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "address", $$v);
      },
      expression: "form.address"
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
      value: _vm.form.city,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "city", $$v);
      },
      expression: "form.city"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Region")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.form.region,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "region", $$v);
      },
      expression: "form.region"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Latitude")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.form.latitude,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "latitude", $$v);
      },
      expression: "form.latitude"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Longitude")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.form.longitude,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "longitude", $$v);
      },
      expression: "form.longitude"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c("b-card", {
    staticClass: "wrapper mb-3"
  }, [_c("h5", {
    staticClass: "mb-3"
  }, [_vm._v(_vm._s(_vm.$t("Features_Amenities")))]), _vm._v(" "), _c("div", {
    staticClass: "d-flex flex-wrap mb-2"
  }, _vm._l(_vm.form.amenities, function (a, i) {
    return _c("span", {
      key: i,
      staticClass: "badge badge-primary p-2 m-1 d-inline-flex align-items-center"
    }, [_vm._v("\n              " + _vm._s(a) + "\n              "), _c("a", {
      staticClass: "text-white ml-2 cursor-pointer",
      on: {
        click: function click($event) {
          return _vm.removeAmenity(i);
        }
      }
    }, [_vm._v("×")])]);
  }), 0), _vm._v(" "), _c("b-input-group", [_c("b-form-input", {
    attrs: {
      placeholder: _vm.$t("Add_Amenity")
    },
    on: {
      keydown: function keydown($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        $event.preventDefault();
        return _vm.addAmenity.apply(null, arguments);
      }
    },
    model: {
      value: _vm.amenityInput,
      callback: function callback($$v) {
        _vm.amenityInput = $$v;
      },
      expression: "amenityInput"
    }
  }), _vm._v(" "), _c("b-input-group-append", [_c("b-button", {
    attrs: {
      variant: "primary"
    },
    on: {
      click: _vm.addAmenity
    }
  }, [_vm._v(_vm._s(_vm.$t("Add")))])], 1)], 1)], 1), _vm._v(" "), _c("b-card", {
    staticClass: "wrapper mb-3"
  }, [_c("h5", {
    staticClass: "mb-3"
  }, [_vm._v(_vm._s(_vm.$t("SEO")))]), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("SEO_Title")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.form.seo_title,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "seo_title", $$v);
      },
      expression: "form.seo_title"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("SEO_Description")
    }
  }, [_c("b-form-textarea", {
    attrs: {
      rows: "2"
    },
    model: {
      value: _vm.form.seo_description,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "seo_description", $$v);
      },
      expression: "form.seo_description"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("SEO_Keywords")
    }
  }, [_c("b-form-input", {
    attrs: {
      placeholder: _vm.$t("Comma_separated")
    },
    model: {
      value: _vm.form.seo_keywords,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "seo_keywords", $$v);
      },
      expression: "form.seo_keywords"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "4"
    }
  }, [_c("b-card", {
    staticClass: "wrapper mb-3"
  }, [_c("h5", {
    staticClass: "mb-3"
  }, [_vm._v(_vm._s(_vm.$t("Featured_Image")))]), _vm._v(" "), _vm.featuredPreview ? _c("div", {
    staticClass: "mb-2"
  }, [_c("img", {
    staticClass: "img-fluid rounded",
    staticStyle: {
      "max-height": "180px"
    },
    attrs: {
      src: _vm.featuredPreview
    }
  })]) : _vm._e(), _vm._v(" "), _c("b-form-file", {
    attrs: {
      accept: "image/*",
      placeholder: _vm.$t("Choose_file")
    },
    on: {
      change: _vm.onFeaturedChange
    }
  })], 1), _vm._v(" "), _c("b-card", {
    staticClass: "wrapper mb-3"
  }, [_c("h5", {
    staticClass: "mb-3"
  }, [_vm._v(_vm._s(_vm.$t("Gallery")))]), _vm._v(" "), _c("div", {
    staticClass: "d-flex flex-wrap mb-2"
  }, [_vm._l(_vm.existingGallery, function (g, i) {
    return _c("div", {
      key: "e" + i,
      staticClass: "position-relative m-1"
    }, [_c("img", {
      staticClass: "rounded",
      staticStyle: {
        width: "80px",
        height: "62px",
        "object-fit": "cover"
      },
      attrs: {
        src: "/" + g
      }
    }), _vm._v(" "), _c("a", {
      staticClass: "badge badge-danger position-absolute cursor-pointer",
      staticStyle: {
        top: "-6px",
        right: "-6px"
      },
      on: {
        click: function click($event) {
          return _vm.removeExisting(i);
        }
      }
    }, [_vm._v("×")])]);
  }), _vm._v(" "), _vm._l(_vm.galleryPreviews, function (g, i) {
    return _c("div", {
      key: "n" + i,
      staticClass: "position-relative m-1"
    }, [_c("img", {
      staticClass: "rounded",
      staticStyle: {
        width: "80px",
        height: "62px",
        "object-fit": "cover"
      },
      attrs: {
        src: g
      }
    }), _vm._v(" "), _c("a", {
      staticClass: "badge badge-danger position-absolute cursor-pointer",
      staticStyle: {
        top: "-6px",
        right: "-6px"
      },
      on: {
        click: function click($event) {
          return _vm.removeNew(i);
        }
      }
    }, [_vm._v("×")])]);
  })], 2), _vm._v(" "), _c("b-form-file", {
    attrs: {
      accept: "image/*",
      multiple: "",
      placeholder: _vm.$t("Choose_files")
    },
    on: {
      change: _vm.onGalleryChange
    }
  })], 1), _vm._v(" "), _c("b-card", {
    staticClass: "wrapper mb-3"
  }, [_c("b-form-checkbox", {
    attrs: {
      "switch": ""
    },
    model: {
      value: _vm.form.featured,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "featured", $$v);
      },
      expression: "form.featured"
    }
  }, [_vm._v(_vm._s(_vm.$t("Mark_as_Featured")))])], 1), _vm._v(" "), _c("b-card", {
    staticClass: "wrapper mb-3"
  }, [_c("h5", {
    staticClass: "mb-3"
  }, [_vm._v(_vm._s(_vm.$t("Agent_Information")))]), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("Agent_Name")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.form.agent_name,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "agent_name", $$v);
      },
      expression: "form.agent_name"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("Phone")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.form.agent_phone,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "agent_phone", $$v);
      },
      expression: "form.agent_phone"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("Email")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.form.agent_email,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "agent_email", $$v);
      },
      expression: "form.agent_email"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("WhatsApp")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.form.agent_whatsapp,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "agent_whatsapp", $$v);
      },
      expression: "form.agent_whatsapp"
    }
  })], 1)], 1), _vm._v(" "), _c("b-card", {
    staticClass: "wrapper mb-3"
  }, [_c("b-button", {
    attrs: {
      type: "submit",
      variant: "primary",
      block: "",
      disabled: _vm.saving
    }
  }, [_vm.saving ? _c("span", {
    staticClass: "spinner-border spinner-border-sm mr-1"
  }) : _vm._e(), _vm._v("\n            " + _vm._s(_vm.editMode ? _vm.$t("Update") : _vm.$t("Save")) + "\n          ")]), _vm._v(" "), _c("b-button", {
    attrs: {
      variant: "outline-secondary",
      block: ""
    },
    on: {
      click: function click($event) {
        return _vm.$router.push({
          name: "realestate_properties"
        });
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("Cancel")))])], 1)], 1)], 1)], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./resources/src/views/app/pages/realestate/property_form.vue"
/*!********************************************************************!*\
  !*** ./resources/src/views/app/pages/realestate/property_form.vue ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _property_form_vue_vue_type_template_id_7fd0d966__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property_form.vue?vue&type=template&id=7fd0d966 */ "./resources/src/views/app/pages/realestate/property_form.vue?vue&type=template&id=7fd0d966");
/* harmony import */ var _property_form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property_form.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/realestate/property_form.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _property_form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _property_form_vue_vue_type_template_id_7fd0d966__WEBPACK_IMPORTED_MODULE_0__.render,
  _property_form_vue_vue_type_template_id_7fd0d966__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/realestate/property_form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/realestate/property_form.vue?vue&type=script&lang=js"
/*!********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/realestate/property_form.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_property_form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./property_form.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/realestate/property_form.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_property_form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/realestate/property_form.vue?vue&type=template&id=7fd0d966"
/*!**************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/realestate/property_form.vue?vue&type=template&id=7fd0d966 ***!
  \**************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_property_form_vue_vue_type_template_id_7fd0d966__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_property_form_vue_vue_type_template_id_7fd0d966__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_property_form_vue_vue_type_template_id_7fd0d966__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./property_form.vue?vue&type=template&id=7fd0d966 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/realestate/property_form.vue?vue&type=template&id=7fd0d966");


/***/ }

}]);