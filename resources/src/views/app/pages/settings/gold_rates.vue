<template>
  <div class="main-content">
    <breadcumb page="Gold Rates" :folder="$t('Settings')" />

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>

    <div v-else>
      <b-alert v-if="!canViewRates" show variant="warning">
        You do not have permission to view gold rates.
      </b-alert>

      <template v-else>
        <b-row>
          <b-col lg="5" class="mb-4">
            <b-card no-body>
              <b-card-header class="d-flex justify-content-between align-items-center">
                <span class="font-weight-bold">Enter Today's Rate</span>
                <b-badge variant="light">Insert only</b-badge>
              </b-card-header>
              <b-card-body>
                <b-alert v-if="!canManageRates" show variant="info" class="mb-3">
                  You can view current and historical gold rates, but you do not have permission to add a new rate.
                </b-alert>

                <b-form @submit.prevent="submitRate">
                  <b-form-group label="Metal Type *">
                    <v-select
                      v-model="form.metal_type_id"
                      :options="metalTypeOptions"
                      :reduce="option => option.value"
                      placeholder="Choose metal type"
                      :disabled="!canManageRates || submitting"
                      @input="handleFormMetalTypeChange"
                    />
                  </b-form-group>

                  <b-form-group label="Karat *">
                    <v-select
                      v-model="form.karat_id"
                      :options="filteredFormKaratOptions"
                      :reduce="option => option.value"
                      placeholder="Choose karat"
                      :disabled="!canManageRates || submitting || !form.metal_type_id"
                    />
                  </b-form-group>

                  <b-form-group label="Warehouse Override">
                    <v-select
                      v-model="form.warehouse_id"
                      :options="warehouseOptions"
                      :reduce="option => option.value"
                      placeholder="Company-wide"
                      :disabled="!canManageRates || submitting"
                    />
                    <small class="text-muted">Leave blank to save a company-wide rate.</small>
                  </b-form-group>

                  <b-form-group label="Currency *">
                    <v-select
                      v-model="form.currency_id"
                      :options="currencyOptions"
                      :reduce="option => option.value"
                      placeholder="Choose currency"
                      :disabled="!canManageRates || submitting"
                    />
                  </b-form-group>

                  <b-row>
                    <b-col md="8">
                      <b-form-group label="Rate per Weight Unit *">
                        <b-form-input
                          v-model="form.rate_per_weight_unit"
                          type="number"
                          min="0"
                          step="0.01"
                          placeholder="0.00"
                          :disabled="!canManageRates || submitting"
                        />
                      </b-form-group>
                    </b-col>
                    <b-col md="4">
                      <b-form-group label="Weight Unit *">
                        <v-select
                          v-model="form.weight_uom"
                          :options="weightUnitOptions"
                          :reduce="option => option.value"
                          placeholder="Choose"
                          :disabled="!canManageRates || submitting"
                        />
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <div class="d-flex justify-content-end">
                    <b-button type="submit" variant="primary" :disabled="!canManageRates || submitting">
                      <span v-if="submitting" class="spinner sm spinner-primary mr-2"></span>
                      Save Rate
                    </b-button>
                  </div>
                </b-form>
              </b-card-body>
            </b-card>
          </b-col>

          <b-col lg="7" class="mb-4">
            <b-card no-body>
              <b-card-header class="d-flex justify-content-between align-items-center flex-wrap gap-2">
                <span class="font-weight-bold">Current Rates</span>
                <b-button size="sm" variant="outline-primary" @click="loadHistory" :disabled="loadingHistory">
                  <lucide-icon name="refresh-cw" class="mr-1" /> Refresh
                </b-button>
              </b-card-header>
              <b-card-body>
                <div v-if="loadingHistory" class="text-center py-4">
                  <div class="spinner spinner-primary mr-3"></div>
                </div>
                <div v-else-if="!currentRates.length" class="text-muted small">
                  No rates have been entered yet.
                </div>
                <div v-else class="table-responsive">
                  <table class="table table-hover table-sm mb-0">
                    <thead>
                      <tr>
                        <th>Metal</th>
                        <th>Karat</th>
                        <th>Scope</th>
                        <th class="text-right">Rate</th>
                        <th>Weight Unit</th>
                        <th>Effective At</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="row in currentRates" :key="row.group_key">
                        <td>{{ row.metal_type_name || '—' }}</td>
                        <td>{{ row.karat_name || '—' }}</td>
                        <td>{{ row.warehouse_name || 'Company-wide' }}</td>
                        <td class="text-right">{{ formatMoney(row.rate_per_weight_unit, row.currency_symbol) }}</td>
                        <td>{{ row.weight_uom || 'g' }}</td>
                        <td>{{ formatDateTime(row.effective_at) }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>

        <b-card no-body>
          <b-card-header class="d-flex justify-content-between align-items-center flex-wrap gap-2">
            <span class="font-weight-bold">Rate History</span>
            <div class="d-flex flex-wrap align-items-center gap-2 gold-rates-actions">
              <b-button size="sm" variant="primary" @click="loadHistory" :disabled="loadingHistory">Apply Filters</b-button>
              <b-button size="sm" variant="outline-secondary" @click="resetHistoryFilters" :disabled="loadingHistory">Reset</b-button>
            </div>
          </b-card-header>
          <b-card-body>
            <b-row>
              <b-col lg="3" md="6">
                <b-form-group label="Metal Type">
                  <v-select
                    v-model="historyFilters.metal_type_id"
                    :options="metalTypeOptions"
                    :reduce="option => option.value"
                    placeholder="All metals"
                    @input="handleHistoryMetalTypeChange"
                  />
                </b-form-group>
              </b-col>
              <b-col lg="3" md="6">
                <b-form-group label="Karat">
                  <v-select
                    v-model="historyFilters.karat_id"
                    :options="filteredHistoryKaratOptions"
                    :reduce="option => option.value"
                    placeholder="All karats"
                    :disabled="!historyFilters.metal_type_id && !!metalTypes.length"
                  />
                </b-form-group>
              </b-col>
              <b-col lg="2" md="6">
                <b-form-group label="Warehouse">
                  <v-select
                    v-model="historyFilters.warehouse_id"
                    :options="warehouseOptions"
                    :reduce="option => option.value"
                    placeholder="All scopes"
                  />
                </b-form-group>
              </b-col>
              <b-col lg="2" md="6">
                <b-form-group label="Start Date">
                  <b-form-input v-model="historyFilters.start_date" type="date" />
                </b-form-group>
              </b-col>
              <b-col lg="2" md="6">
                <b-form-group label="End Date">
                  <b-form-input v-model="historyFilters.end_date" type="date" />
                </b-form-group>
              </b-col>
            </b-row>

            <div v-if="loadingHistory" class="text-center py-4">
              <div class="spinner spinner-primary mr-3"></div>
            </div>
            <div v-else-if="!historyRows.length" class="text-muted small">
              No history rows matched the selected filters.
            </div>
            <div v-else class="table-responsive">
              <table class="table table-striped table-sm mb-0">
                <thead>
                  <tr>
                    <th>Metal</th>
                    <th>Karat</th>
                    <th>Scope</th>
                    <th>Currency</th>
                    <th class="text-right">Rate</th>
                    <th>Weight Unit</th>
                    <th>Status</th>
                    <th>Effective At</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in historyRows" :key="row.id">
                    <td>{{ row.metal_type_name || '—' }}</td>
                    <td>{{ row.karat_name || '—' }}</td>
                    <td>{{ row.warehouse_name || 'Company-wide' }}</td>
                    <td>{{ row.currency_code || row.currency_name || '—' }}</td>
                    <td class="text-right">{{ formatMoney(row.rate_per_weight_unit, row.currency_symbol) }}</td>
                    <td>{{ row.weight_uom || 'g' }}</td>
                    <td>
                      <b-badge :variant="row.status === 'active' ? 'success' : 'secondary'">{{ row.status || '—' }}</b-badge>
                    </td>
                    <td>{{ formatDateTime(row.effective_at) }}</td>
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
    title: "Gold Rates"
  },
  data() {
    return {
      isLoading: true,
      loadingHistory: false,
      submitting: false,
      metalTypes: [],
      karats: [],
      warehouses: [],
      currencies: [],
      historyRows: [],
      form: {
        metal_type_id: "",
        karat_id: "",
        warehouse_id: "",
        currency_id: "",
        rate_per_weight_unit: "",
        weight_uom: "g"
      },
      historyFilters: {
        metal_type_id: "",
        karat_id: "",
        warehouse_id: "",
        start_date: "",
        end_date: ""
      },
      weightUnitOptions: [
        { label: "Gram (g)", value: "g" },
        { label: "Milligram (mg)", value: "mg" },
        { label: "Kilogram (kg)", value: "kg" },
        { label: "Carat (ct)", value: "ct" },
        { label: "Ounce (oz)", value: "oz" }
      ]
    };
  },
  computed: {
    ...mapGetters(["currentUserPermissions", "currentUser"]),
    canViewRates() {
      return Array.isArray(this.currentUserPermissions)
        && this.currentUserPermissions.includes("gold_rates_view");
    },
    canManageRates() {
      return Array.isArray(this.currentUserPermissions)
        && this.currentUserPermissions.includes("gold_rates_manage");
    },
    metalTypeOptions() {
      return (this.metalTypes || []).map(type => ({ label: type.name, value: type.id }));
    },
    currencyOptions() {
      return (this.currencies || []).map(currency => ({
        label: [currency.code, currency.name].filter(Boolean).join(" - "),
        value: currency.id
      }));
    },
    warehouseOptions() {
      return (this.warehouses || []).map(warehouse => ({ label: warehouse.name, value: warehouse.id }));
    },
    filteredFormKaratOptions() {
      return this.filterKaratsByMetal(this.form.metal_type_id);
    },
    filteredHistoryKaratOptions() {
      return this.filterKaratsByMetal(this.historyFilters.metal_type_id);
    },
    currentRates() {
      const grouped = new Map();
      (this.historyRows || []).forEach(row => {
        const scopeKey = row.warehouse_id ? row.warehouse_id : "company";
        const key = `${row.metal_type_id || "metal"}-${row.karat_id || "karat"}-${scopeKey}`;
        if (!grouped.has(key)) {
          grouped.set(key, {
            ...row,
            group_key: key
          });
        }
      });
      return Array.from(grouped.values());
    }
  },
  methods: {
    makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title,
        variant,
        solid: true
      });
    },
    filterKaratsByMetal(metalTypeId) {
      const selectedMetalId = metalTypeId ? String(metalTypeId) : "";
      return (this.karats || [])
        .filter(karat => !selectedMetalId || String(karat.metal_type_id) === selectedMetalId)
        .map(karat => ({ label: karat.name, value: karat.id }));
    },
    handleFormMetalTypeChange() {
      const validKaratIds = this.filteredFormKaratOptions.map(option => String(option.value));
      if (!validKaratIds.includes(String(this.form.karat_id || ""))) {
        this.form.karat_id = "";
      }
    },
    handleHistoryMetalTypeChange() {
      const validKaratIds = this.filteredHistoryKaratOptions.map(option => String(option.value));
      if (!validKaratIds.includes(String(this.historyFilters.karat_id || ""))) {
        this.historyFilters.karat_id = "";
      }
    },
    normalizeHistoryRow(row = {}) {
      return {
        id: row.id,
        metal_type_id: row.metal_type_id || null,
        karat_id: row.karat_id || null,
        warehouse_id: row.warehouse_id || null,
        metal_type_name: row.metal_type_name || (row.metal_type && row.metal_type.name) || (row.metalType && row.metalType.name) || "",
        karat_name: row.karat_name || (row.karat && row.karat.name) || "",
        warehouse_name: row.warehouse_name || (row.warehouse && row.warehouse.name) || "",
        currency_name: row.currency_name || (row.currency && row.currency.name) || "",
        currency_code: row.currency_code || (row.currency && row.currency.code) || "",
        currency_symbol: row.currency_symbol || (row.currency && row.currency.symbol) || "",
        rate_per_weight_unit: Number(row.rate_per_weight_unit || 0),
        weight_uom: row.weight_uom || "g",
        status: row.status || "",
        effective_at: row.effective_at || null
      };
    },
    formatMoney(value, symbol = "") {
      const amount = Number(value || 0).toFixed(2);
      const safeSymbol = symbol || (this.currentUser && this.currentUser.currency) || "";
      return safeSymbol ? `${safeSymbol} ${amount}` : amount;
    },
    formatDateTime(value) {
      if (!value) return "—";
      const parsed = new Date(value);
      if (Number.isNaN(parsed.getTime())) return value;
      return parsed.toLocaleString();
    },
    resetForm() {
      this.form = {
        metal_type_id: "",
        karat_id: "",
        warehouse_id: "",
        currency_id: "",
        rate_per_weight_unit: "",
        weight_uom: "g"
      };
    },
    resetHistoryFilters() {
      this.historyFilters = {
        metal_type_id: "",
        karat_id: "",
        warehouse_id: "",
        start_date: "",
        end_date: ""
      };
      this.loadHistory();
    },
    async loadOptions() {
      const response = await axios.get("gold-rates/options", {
        meta: { skipErrorRedirect: true }
      });
      const payload = (response && response.data && response.data.data) || {};
      this.metalTypes = payload.metal_types || [];
      this.karats = payload.karats || [];
      this.warehouses = payload.warehouses || [];
      this.currencies = payload.currencies || [];
      if (!this.form.currency_id && this.currencies.length) {
        this.form.currency_id = this.currencies[0].id;
      }
    },
    async loadHistory() {
      this.loadingHistory = true;
      NProgress.start();
      NProgress.set(0.1);
      try {
        const params = {};
        ["metal_type_id", "karat_id", "warehouse_id", "start_date", "end_date"].forEach(key => {
          if (this.historyFilters[key] !== "" && this.historyFilters[key] !== null) {
            params[key] = this.historyFilters[key];
          }
        });

        const response = await axios.get("gold-rates", {
          params,
          meta: { skipErrorRedirect: true }
        });

        this.historyRows = ((response && response.data && response.data.data) || []).map(this.normalizeHistoryRow);
      } catch (error) {
        const message = (error && error.response && error.response.data && error.response.data.message) || "Unable to load gold-rate history.";
        this.makeToast("danger", message, this.$t("Failed") || "Failed");
      } finally {
        this.loadingHistory = false;
        NProgress.done();
      }
    },
    async submitRate() {
      if (!this.canManageRates) {
        return;
      }

      if (!this.form.metal_type_id || !this.form.karat_id || !this.form.currency_id || this.form.rate_per_weight_unit === "") {
        this.makeToast("danger", "Please fill in metal, karat, currency, and rate before saving.", this.$t("Failed") || "Failed");
        return;
      }

      this.submitting = true;
      NProgress.start();
      NProgress.set(0.1);
      try {
        await axios.post("gold-rates", {
          metal_type_id: this.form.metal_type_id,
          karat_id: this.form.karat_id,
          warehouse_id: this.form.warehouse_id || null,
          currency_id: this.form.currency_id,
          rate_per_weight_unit: this.form.rate_per_weight_unit,
          weight_uom: this.form.weight_uom || "g"
        }, {
          meta: { skipErrorRedirect: true }
        });

        this.makeToast("success", "Gold rate stored successfully.", this.$t("Success") || "Success");
        this.resetForm();
        await this.loadHistory();
      } catch (error) {
        const payload = error && error.response && error.response.data;
        let message = (payload && payload.message) || "Unable to save the gold rate.";
        if (payload && payload.errors) {
          const firstError = Object.values(payload.errors)[0];
          if (Array.isArray(firstError) && firstError.length) {
            message = firstError[0];
          }
        }
        this.makeToast("danger", message, this.$t("Failed") || "Failed");
      } finally {
        this.submitting = false;
        NProgress.done();
      }
    }
  },
  async created() {
    if (!this.canViewRates) {
      this.isLoading = false;
      return;
    }

    try {
      await this.loadOptions();
      await this.loadHistory();
    } finally {
      this.isLoading = false;
    }
  }
};
</script>

<style scoped>
.gold-rates-actions {
  gap: 0.5rem;
}
</style>
