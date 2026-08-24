<template>
  <div class="main-content">
    <breadcumb page="Weighing Scale" :folder="$t('Settings')" />

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>

    <div v-else>
      <b-alert v-if="!canAccess" show variant="warning">
        You do not have permission to view scale readings.
      </b-alert>

      <template v-else>
        <b-alert v-if="!scaleEnabled" show variant="info" class="mb-4">
          Live scale capture isn't enabled yet. Turn it on and set a bridge URL in
          <router-link to="/app/settings/system_settings">Settings → Jewelry</router-link>.
          You can still log readings manually below.
        </b-alert>

        <b-card no-body class="mb-4">
          <b-card-header class="font-weight-bold">Record a Reading</b-card-header>
          <b-card-body>
            <b-row class="align-items-end">
              <b-col md="3">
                <b-form-group label="Product">
                  <v-select
                    v-model="form.product_id"
                    :options="productOptions"
                    :reduce="option => option.value"
                    placeholder="Optional"
                  />
                </b-form-group>
              </b-col>
              <b-col md="3">
                <b-form-group label="Context">
                  <v-select
                    v-model="form.context"
                    :options="contextOptions"
                    :reduce="option => option.value"
                    placeholder="Optional"
                  />
                </b-form-group>
              </b-col>
              <b-col md="3">
                <b-form-group label="Weight (g) — manual entry">
                  <b-form-input v-model="form.weight_grams" type="number" min="0" step="0.001" />
                </b-form-group>
              </b-col>
              <b-col md="3" class="mb-3 d-flex gap-2">
                <b-button variant="primary" @click="captureLive" :disabled="!scaleEnabled || capturing" class="mr-2">
                  <span v-if="capturing" class="spinner sm spinner-primary mr-2"></span>
                  Capture Live
                </b-button>
                <b-button variant="outline-primary" @click="recordManual" :disabled="!form.weight_grams || recording">
                  <span v-if="recording" class="spinner sm spinner-primary mr-2"></span>
                  Log Manually
                </b-button>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-header class="d-flex justify-content-between align-items-center flex-wrap gap-2">
            <span class="font-weight-bold">Recent Readings</span>
            <b-button size="sm" variant="outline-primary" @click="loadReadings" :disabled="loadingList">
              <lucide-icon name="refresh-cw" class="mr-1" /> Refresh
            </b-button>
          </b-card-header>
          <b-card-body>
            <div v-if="loadingList" class="text-center py-4">
              <div class="spinner spinner-primary mr-3"></div>
            </div>
            <div v-else-if="!readings.length" class="text-muted small">No readings recorded yet.</div>
            <div v-else class="table-responsive">
              <table class="table table-sm table-striped mb-0">
                <thead>
                  <tr>
                    <th class="text-right">Weight</th>
                    <th>Context</th>
                    <th>Product</th>
                    <th>Captured At</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="reading in readings" :key="reading.id">
                    <td class="text-right">{{ Number(reading.weight_grams).toFixed(3) }} g</td>
                    <td>{{ reading.context || '—' }}</td>
                    <td>{{ productName(reading.product_id) }}</td>
                    <td>{{ formatDateTime(reading.captured_at) }}</td>
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

export default {
  metaInfo: {
    title: "Weighing Scale"
  },
  data() {
    return {
      isLoading: true,
      loadingList: false,
      capturing: false,
      recording: false,
      scaleEnabled: false,
      products: [],
      readings: [],
      form: this.blankForm(),
      contextOptions: [
        { label: "Before Polish", value: "before_polish" },
        { label: "After Polish", value: "after_polish" },
        { label: "Inventory Check", value: "inventory_check" },
        { label: "Sale", value: "sale" },
        { label: "Purchase", value: "purchase" }
      ]
    };
  },
  computed: {
    ...mapGetters(["currentUserPermissions"]),
    canAccess() {
      return Array.isArray(this.currentUserPermissions)
        && this.currentUserPermissions.includes("scale_readings");
    },
    productOptions() {
      return (this.products || []).map(product => ({ label: product.name, value: product.id }));
    }
  },
  methods: {
    blankForm() {
      return { product_id: "", context: "", weight_grams: "" };
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
    productName(productId) {
      if (!productId) return "—";
      const product = (this.products || []).find(p => String(p.id) === String(productId));
      return product ? product.name : ("#" + productId);
    },
    formatDateTime(value) {
      if (!value) return "—";
      const parsed = new Date(value);
      if (Number.isNaN(parsed.getTime())) return value;
      return parsed.toLocaleString();
    },
    async loadSettingFlag() {
      try {
        const response = await axios.get("get_Settings_data_api", { meta: { skipErrorRedirect: true } });
        const setting = (response && response.data && response.data.settings) || {};
        this.scaleEnabled = !!setting.scale_integration_enabled;
      } catch (error) {
        this.scaleEnabled = false;
      }
    },
    async loadProducts() {
      try {
        const response = await axios.get("products", { params: { limit: 200 }, meta: { skipErrorRedirect: true } });
        this.products = (response && response.data && response.data.data) || [];
      } catch (error) {
        // Non-fatal: product picker just stays empty.
      }
    },
    async loadReadings() {
      this.loadingList = true;
      NProgress.start();
      try {
        const response = await axios.get("scale-readings", { params: { limit: -1 }, meta: { skipErrorRedirect: true } });
        this.readings = (response && response.data && response.data.data) || [];
      } catch (error) {
        this.makeToast("danger", this.errorMessage(error, "Unable to load scale readings."), this.$t("Failed") || "Failed");
      } finally {
        this.loadingList = false;
        NProgress.done();
      }
    },
    async captureLive() {
      this.capturing = true;
      try {
        await axios.post("scale-readings/capture", {
          product_id: this.form.product_id || null,
          context: this.form.context || null
        }, { meta: { skipErrorRedirect: true } });
        this.makeToast("success", "Weight captured from the scale.", this.$t("Success") || "Success");
        this.form = this.blankForm();
        await this.loadReadings();
      } catch (error) {
        this.makeToast("danger", this.errorMessage(error, "Unable to capture a live reading."), this.$t("Failed") || "Failed");
      } finally {
        this.capturing = false;
      }
    },
    async recordManual() {
      if (!this.form.weight_grams) return;
      this.recording = true;
      try {
        await axios.post("scale-readings", {
          product_id: this.form.product_id || null,
          context: this.form.context || null,
          weight_grams: this.form.weight_grams
        }, { meta: { skipErrorRedirect: true } });
        this.makeToast("success", "Reading logged.", this.$t("Success") || "Success");
        this.form = this.blankForm();
        await this.loadReadings();
      } catch (error) {
        this.makeToast("danger", this.errorMessage(error, "Unable to log the reading."), this.$t("Failed") || "Failed");
      } finally {
        this.recording = false;
      }
    }
  },
  async created() {
    if (!this.canAccess) {
      this.isLoading = false;
      return;
    }
    try {
      await Promise.all([this.loadSettingFlag(), this.loadProducts(), this.loadReadings()]);
    } finally {
      this.isLoading = false;
    }
  }
};
</script>
