<template>
  <div class="main-content">
    <breadcumb page="Diamond Price Rates" :folder="$t('Settings')" />

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>

    <div v-else>
      <b-alert v-if="!canAccess" show variant="warning">
        You do not have permission to view diamond price rates.
      </b-alert>

      <template v-else>
        <b-card no-body class="mb-4">
          <b-card-header class="font-weight-bold">Add a Rate</b-card-header>
          <b-card-body>
            <b-row>
              <b-col md="2">
                <b-form-group label="Shape *">
                  <v-select v-model="form.shape" :options="shapeOptions" :reduce="option => option.value" />
                </b-form-group>
              </b-col>
              <b-col md="2">
                <b-form-group label="Color Grade *">
                  <v-select v-model="form.color_grade" :options="colorOptions" :reduce="option => option.value" />
                </b-form-group>
              </b-col>
              <b-col md="2">
                <b-form-group label="Clarity Grade *">
                  <v-select v-model="form.clarity_grade" :options="clarityOptions" :reduce="option => option.value" />
                </b-form-group>
              </b-col>
              <b-col md="2">
                <b-form-group label="Carat Min *">
                  <b-form-input v-model="form.carat_min" type="number" min="0" step="0.01" />
                </b-form-group>
              </b-col>
              <b-col md="2">
                <b-form-group label="Carat Max *">
                  <b-form-input v-model="form.carat_max" type="number" min="0" step="0.01" />
                </b-form-group>
              </b-col>
              <b-col md="2">
                <b-form-group label="Price / Carat *">
                  <b-form-input v-model="form.price_per_carat" type="number" min="0" step="0.01" />
                </b-form-group>
              </b-col>
              <b-col md="3">
                <b-form-group label="Currency *">
                  <v-select
                    v-model="form.currency_id"
                    :options="currencyOptions"
                    :reduce="option => option.value"
                  />
                </b-form-group>
              </b-col>
            </b-row>
            <div class="d-flex justify-content-end">
              <b-button variant="primary" @click="submitRate" :disabled="submitting">
                <span v-if="submitting" class="spinner sm spinner-primary mr-2"></span>
                Save Rate
              </b-button>
            </div>
          </b-card-body>
        </b-card>

        <b-card no-body class="mb-4">
          <b-card-header class="font-weight-bold">Quick Lookup</b-card-header>
          <b-card-body>
            <b-row class="align-items-end">
              <b-col md="2">
                <b-form-group label="Shape">
                  <v-select v-model="lookup.shape" :options="shapeOptions" :reduce="option => option.value" />
                </b-form-group>
              </b-col>
              <b-col md="2">
                <b-form-group label="Color">
                  <v-select v-model="lookup.color_grade" :options="colorOptions" :reduce="option => option.value" />
                </b-form-group>
              </b-col>
              <b-col md="2">
                <b-form-group label="Clarity">
                  <v-select v-model="lookup.clarity_grade" :options="clarityOptions" :reduce="option => option.value" />
                </b-form-group>
              </b-col>
              <b-col md="2">
                <b-form-group label="Carat">
                  <b-form-input v-model="lookup.carat" type="number" min="0" step="0.01" />
                </b-form-group>
              </b-col>
              <b-col md="2" class="mb-3">
                <b-button variant="outline-primary" @click="lookupPrice" :disabled="lookingUp">
                  <span v-if="lookingUp" class="spinner sm spinner-primary mr-2"></span>
                  Lookup
                </b-button>
              </b-col>
              <b-col md="2" class="mb-3">
                <strong v-if="lookupResult">{{ formatMoney(lookupResult.price_per_carat) }} / ct</strong>
                <span v-else-if="lookupTried" class="text-muted small">No match found.</span>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-header class="d-flex justify-content-between align-items-center flex-wrap gap-2">
            <span class="font-weight-bold">Rate Matrix</span>
            <b-button size="sm" variant="outline-primary" @click="loadRates" :disabled="loadingList">
              <lucide-icon name="refresh-cw" class="mr-1" /> Refresh
            </b-button>
          </b-card-header>
          <b-card-body>
            <div v-if="loadingList" class="text-center py-4">
              <div class="spinner spinner-primary mr-3"></div>
            </div>
            <div v-else-if="!rates.length" class="text-muted small">No diamond price rates entered yet.</div>
            <div v-else class="table-responsive">
              <table class="table table-sm table-striped mb-0">
                <thead>
                  <tr>
                    <th>Shape</th>
                    <th>Color</th>
                    <th>Clarity</th>
                    <th>Carat Range</th>
                    <th class="text-right">Price / Carat</th>
                    <th>Source</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in rates" :key="row.id">
                    <td>{{ row.shape }}</td>
                    <td>{{ row.color_grade }}</td>
                    <td>{{ row.clarity_grade }}</td>
                    <td>{{ row.carat_min }} – {{ row.carat_max }}</td>
                    <td class="text-right">{{ formatMoney(row.price_per_carat) }}</td>
                    <td><b-badge :variant="row.rate_source === 'api' ? 'info' : 'light'">{{ row.rate_source }}</b-badge></td>
                    <td><b-badge :variant="row.status === 'active' ? 'success' : 'secondary'">{{ row.status }}</b-badge></td>
                    <td class="text-right">
                      <b-button size="sm" variant="outline-danger" @click="deleteRate(row)">
                        <lucide-icon name="trash-2" />
                      </b-button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-card-body>
        </b-card>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NProgress from "nprogress";

const SHAPES = ["round", "princess", "cushion", "oval", "emerald", "pear", "asscher", "radiant", "marquise", "heart"];
const COLORS = ["D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
const CLARITIES = ["FL", "IF", "VVS1", "VVS2", "VS1", "VS2", "SI1", "SI2", "I1", "I2", "I3"];

export default {
  metaInfo: {
    title: "Diamond Price Rates"
  },
  data() {
    return {
      isLoading: true,
      loadingList: false,
      submitting: false,
      lookingUp: false,
      lookupTried: false,
      lookupResult: null,
      currencies: [],
      rates: [],
      form: this.blankForm(),
      lookup: { shape: "round", color_grade: "G", clarity_grade: "VS1", carat: "1" },
      shapeOptions: SHAPES.map(s => ({ label: s.charAt(0).toUpperCase() + s.slice(1), value: s })),
      colorOptions: COLORS.map(c => ({ label: c, value: c })),
      clarityOptions: CLARITIES.map(c => ({ label: c, value: c }))
    };
  },
  computed: {
    ...mapGetters(["currentUserPermissions", "currentUser"]),
    canAccess() {
      return Array.isArray(this.currentUserPermissions)
        && this.currentUserPermissions.includes("diamond_price_rates");
    },
    currencyOptions() {
      return (this.currencies || []).map(currency => ({
        label: [currency.code, currency.name].filter(Boolean).join(" - "),
        value: currency.id
      }));
    }
  },
  methods: {
    blankForm() {
      return {
        shape: "round",
        color_grade: "G",
        clarity_grade: "VS1",
        carat_min: "",
        carat_max: "",
        price_per_carat: "",
        currency_id: ""
      };
    },
    makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, { title, variant, solid: true });
    },
    errorMessage(error, fallback) {
      const payload = error && error.response && error.response.data;
      let message = (payload && payload.message) || fallback;
      if (payload && payload.errors) {
        const firstError = Object.values(payload.errors)[0];
        if (Array.isArray(firstError) && firstError.length) {
          message = firstError[0];
        }
      }
      return message;
    },
    formatMoney(value) {
      const amount = Number(value || 0).toFixed(2);
      const symbol = (this.currentUser && this.currentUser.currency) || "";
      return symbol ? `${symbol} ${amount}` : amount;
    },
    async loadCurrencies() {
      try {
        const response = await axios.get("gold-rates/options", { meta: { skipErrorRedirect: true } });
        const payload = (response && response.data && response.data.data) || {};
        this.currencies = payload.currencies || [];
        if (!this.form.currency_id && this.currencies.length) {
          this.form.currency_id = this.currencies[0].id;
        }
      } catch (error) {
        // Non-fatal: currency dropdown just stays empty.
      }
    },
    async loadRates() {
      this.loadingList = true;
      NProgress.start();
      try {
        const response = await axios.get("diamond-price-rates", { params: { limit: -1 }, meta: { skipErrorRedirect: true } });
        this.rates = (response && response.data && response.data.data) || [];
      } catch (error) {
        this.makeToast("danger", this.errorMessage(error, "Unable to load diamond price rates."), this.$t("Failed") || "Failed");
      } finally {
        this.loadingList = false;
        NProgress.done();
      }
    },
    async submitRate() {
      const { shape, color_grade, clarity_grade, carat_min, carat_max, price_per_carat, currency_id } = this.form;
      if (!shape || !color_grade || !clarity_grade || !carat_min || !carat_max || !price_per_carat || !currency_id) {
        this.makeToast("danger", "Please fill in every field.", this.$t("Failed") || "Failed");
        return;
      }
      this.submitting = true;
      try {
        await axios.post("diamond-price-rates", this.form, { meta: { skipErrorRedirect: true } });
        this.makeToast("success", "Diamond price rate saved.", this.$t("Success") || "Success");
        this.form = { ...this.blankForm(), currency_id: this.form.currency_id };
        await this.loadRates();
      } catch (error) {
        this.makeToast("danger", this.errorMessage(error, "Unable to save the rate."), this.$t("Failed") || "Failed");
      } finally {
        this.submitting = false;
      }
    },
    async lookupPrice() {
      this.lookingUp = true;
      this.lookupTried = true;
      this.lookupResult = null;
      try {
        const response = await axios.get("diamond-price-rates-current", { params: this.lookup, meta: { skipErrorRedirect: true } });
        this.lookupResult = (response && response.data && response.data.data) || null;
      } catch (error) {
        this.lookupResult = null;
      } finally {
        this.lookingUp = false;
      }
    },
    async deleteRate(row) {
      try {
        await axios.delete(`diamond-price-rates/${row.id}`, { meta: { skipErrorRedirect: true } });
        this.makeToast("success", "Rate deleted.", this.$t("Success") || "Success");
        await this.loadRates();
      } catch (error) {
        this.makeToast("danger", this.errorMessage(error, "Unable to delete this rate."), this.$t("Failed") || "Failed");
      }
    }
  },
  async created() {
    if (!this.canAccess) {
      this.isLoading = false;
      return;
    }
    try {
      await Promise.all([this.loadCurrencies(), this.loadRates()]);
    } finally {
      this.isLoading = false;
    }
  }
};
</script>
