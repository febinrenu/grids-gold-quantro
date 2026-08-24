<template>
  <div class="main-content">
    <breadcumb page="Alloy Calculator" :folder="$t('Settings')" />

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>

    <div v-else>
      <b-alert v-if="!canAccess" show variant="warning">
        You do not have permission to use the alloy calculator.
      </b-alert>

      <template v-else>
        <b-card no-body class="mb-4">
          <b-card-header class="font-weight-bold">Mix Calculator</b-card-header>
          <b-card-body>
            <p class="text-muted small">
              List the metal batches you're combining, then choose a target karat. The calculator
              tells you whether to add pure alloy metal (dilute) or pure gold (enrich), and how much.
            </p>

            <div v-for="(batch, index) in form.source_batches" :key="index" class="row align-items-end mb-2">
              <div class="col-md-5">
                <b-form-group :label="'Source Karat ' + (index + 1)">
                  <v-select
                    v-model="batch.karat_id"
                    :options="karatOptions"
                    :reduce="option => option.value"
                    placeholder="Choose karat"
                  />
                </b-form-group>
              </div>
              <div class="col-md-5">
                <b-form-group label="Weight (g)">
                  <b-form-input v-model="batch.weight" type="number" min="0.001" step="0.001" />
                </b-form-group>
              </div>
              <div class="col-md-2 mb-3">
                <b-button variant="outline-danger" size="sm" @click="removeBatch(index)" :disabled="form.source_batches.length <= 1">
                  <lucide-icon name="trash-2" />
                </b-button>
              </div>
            </div>
            <b-button variant="outline-secondary" size="sm" class="mb-4" @click="addBatch">
              + Add Source Batch
            </b-button>

            <b-row>
              <b-col md="4">
                <b-form-group label="Target Karat *">
                  <v-select
                    v-model="form.target_karat_id"
                    :options="karatOptions"
                    :reduce="option => option.value"
                    placeholder="Choose target karat"
                  />
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group label="Mode">
                  <v-select
                    v-model="form.mode"
                    :options="modeOptions"
                    :reduce="option => option.value"
                    :clearable="false"
                  />
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group label="Target Weight (optional)">
                  <b-form-input v-model="form.target_weight" type="number" min="0" step="0.001" placeholder="Assertion only" />
                </b-form-group>
              </b-col>
            </b-row>

            <div class="d-flex gap-2">
              <b-button variant="primary" @click="calculate" :disabled="calculating">
                <span v-if="calculating" class="spinner sm spinner-primary mr-2"></span>
                Calculate
              </b-button>
              <b-button variant="outline-primary" @click="saveCalculation" :disabled="!breakdown || saving">
                <span v-if="saving" class="spinner sm spinner-primary mr-2"></span>
                Save Calculation
              </b-button>
            </div>

            <b-card v-if="breakdown" no-body class="mt-4 bg-light">
              <b-card-body>
                <b-row>
                  <b-col md="4"><strong>Mode:</strong> {{ breakdown.mode }}</b-col>
                  <b-col md="4"><strong>Blended Purity:</strong> {{ breakdown.blended_purity_percentage }}%</b-col>
                  <b-col md="4"><strong>Target Purity:</strong> {{ breakdown.target_purity_percentage }}%</b-col>
                </b-row>
                <hr>
                <b-row>
                  <b-col md="4"><strong>Add:</strong> {{ breakdown.added_metal_weight }} g ({{ breakdown.added_metal_type || 'none' }})</b-col>
                  <b-col md="4"><strong>Resulting Weight:</strong> {{ breakdown.resulting_weight }} g</b-col>
                  <b-col md="4"><strong>Resulting Fine Weight:</strong> {{ breakdown.resulting_fine_weight }} g</b-col>
                </b-row>
              </b-card-body>
            </b-card>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-header class="d-flex justify-content-between align-items-center flex-wrap gap-2">
            <span class="font-weight-bold">Saved Calculations</span>
            <b-button size="sm" variant="outline-primary" @click="loadCalculations" :disabled="loadingList">
              <lucide-icon name="refresh-cw" class="mr-1" /> Refresh
            </b-button>
          </b-card-header>
          <b-card-body>
            <div v-if="loadingList" class="text-center py-4">
              <div class="spinner spinner-primary mr-3"></div>
            </div>
            <div v-else-if="!calculations.length" class="text-muted small">No calculations saved yet.</div>
            <div v-else class="table-responsive">
              <table class="table table-sm table-hover mb-0">
                <thead>
                  <tr>
                    <th>Target Karat</th>
                    <th>Mode</th>
                    <th class="text-right">Added</th>
                    <th class="text-right">Resulting Weight</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="calc in calculations" :key="calc.id">
                    <td>{{ (calc.target_karat && calc.target_karat.name) || calc.target_karat_id }}</td>
                    <td>{{ calc.mode }}</td>
                    <td class="text-right">{{ calc.added_metal_weight }} g ({{ calc.added_metal_type || '—' }})</td>
                    <td class="text-right">{{ calc.resulting_weight }} g</td>
                    <td><b-badge :variant="calc.status === 'applied' ? 'success' : 'secondary'">{{ calc.status }}</b-badge></td>
                    <td class="text-right">
                      <b-button
                        v-if="calc.status !== 'applied'"
                        size="sm"
                        variant="outline-success"
                        @click="openApply(calc)"
                      >
                        Apply
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

    <b-modal v-model="showApplyModal" title="Apply to Gold Ledger" @ok="applyCalculation" :ok-disabled="!applyAccountId || applying">
      <p class="text-muted small">
        Posts the added metal into the selected ledger account's balance.
      </p>
      <b-form-group label="Gold Ledger Account *">
        <v-select
          v-model="applyAccountId"
          :options="ledgerAccountOptions"
          :reduce="option => option.value"
          placeholder="Choose account"
        />
      </b-form-group>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NProgress from "nprogress";

export default {
  metaInfo: {
    title: "Alloy Calculator"
  },
  data() {
    return {
      isLoading: true,
      loadingList: false,
      calculating: false,
      saving: false,
      applying: false,
      karats: [],
      ledgerAccounts: [],
      calculations: [],
      breakdown: null,
      form: this.blankForm(),
      modeOptions: [
        { label: "Auto", value: "auto" },
        { label: "Dilute (add alloy)", value: "dilute" },
        { label: "Enrich (add pure gold)", value: "enrich" }
      ],
      showApplyModal: false,
      applyingCalc: null,
      applyAccountId: ""
    };
  },
  computed: {
    ...mapGetters(["currentUserPermissions"]),
    canAccess() {
      return Array.isArray(this.currentUserPermissions)
        && this.currentUserPermissions.includes("alloy_mix_calculations");
    },
    karatOptions() {
      return (this.karats || []).map(karat => ({ label: karat.name, value: karat.id }));
    },
    ledgerAccountOptions() {
      return (this.ledgerAccounts || []).map(account => ({ label: account.name, value: account.id }));
    }
  },
  methods: {
    blankForm() {
      return {
        source_batches: [{ karat_id: "", weight: "" }],
        target_karat_id: "",
        mode: "auto",
        target_weight: ""
      };
    },
    addBatch() {
      this.form.source_batches.push({ karat_id: "", weight: "" });
    },
    removeBatch(index) {
      this.form.source_batches.splice(index, 1);
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
    buildPayload() {
      return {
        source_batches: this.form.source_batches
          .filter(b => b.karat_id && b.weight)
          .map(b => ({ karat_id: b.karat_id, weight: Number(b.weight) })),
        target_karat_id: this.form.target_karat_id,
        mode: this.form.mode || "auto",
        target_weight: this.form.target_weight ? Number(this.form.target_weight) : null
      };
    },
    async loadOptions() {
      try {
        const response = await axios.get("gold-rates/options", { meta: { skipErrorRedirect: true } });
        const payload = (response && response.data && response.data.data) || {};
        this.karats = payload.karats || [];
      } catch (error) {
        // Non-fatal: karat dropdowns just stay empty.
      }
      try {
        const response = await axios.get("gold-ledger-accounts", { params: { limit: -1 }, meta: { skipErrorRedirect: true } });
        this.ledgerAccounts = (response && response.data && response.data.data) || [];
      } catch (error) {
        // Non-fatal: apply flow just won't have accounts to pick from.
      }
    },
    async loadCalculations() {
      this.loadingList = true;
      NProgress.start();
      try {
        const response = await axios.get("alloy-mix-calculations", { params: { limit: -1 }, meta: { skipErrorRedirect: true } });
        this.calculations = (response && response.data && response.data.data) || [];
      } catch (error) {
        this.makeToast("danger", this.errorMessage(error, "Unable to load saved calculations."), this.$t("Failed") || "Failed");
      } finally {
        this.loadingList = false;
        NProgress.done();
      }
    },
    async calculate() {
      const payload = this.buildPayload();
      if (!payload.source_batches.length || !payload.target_karat_id) {
        this.makeToast("danger", "Please add at least one source batch and choose a target karat.", this.$t("Failed") || "Failed");
        return;
      }
      this.calculating = true;
      NProgress.start();
      try {
        const response = await axios.post("alloy-mix-calculations/preview", payload, { meta: { skipErrorRedirect: true } });
        this.breakdown = (response && response.data && response.data.data) || null;
      } catch (error) {
        this.breakdown = null;
        this.makeToast("danger", this.errorMessage(error, "Unable to calculate the mix."), this.$t("Failed") || "Failed");
      } finally {
        this.calculating = false;
        NProgress.done();
      }
    },
    async saveCalculation() {
      const payload = this.buildPayload();
      this.saving = true;
      try {
        await axios.post("alloy-mix-calculations", payload, { meta: { skipErrorRedirect: true } });
        this.makeToast("success", "Calculation saved.", this.$t("Success") || "Success");
        await this.loadCalculations();
      } catch (error) {
        this.makeToast("danger", this.errorMessage(error, "Unable to save the calculation."), this.$t("Failed") || "Failed");
      } finally {
        this.saving = false;
      }
    },
    openApply(calc) {
      this.applyingCalc = calc;
      this.applyAccountId = "";
      this.showApplyModal = true;
    },
    async applyCalculation(bvModalEvt) {
      if (bvModalEvt) bvModalEvt.preventDefault();
      if (!this.applyingCalc || !this.applyAccountId) return;
      this.applying = true;
      try {
        await axios.post(`alloy-mix-calculations/${this.applyingCalc.id}/apply`, {
          gold_ledger_account_id: this.applyAccountId
        }, { meta: { skipErrorRedirect: true } });
        this.makeToast("success", "Applied to the gold ledger.", this.$t("Success") || "Success");
        this.showApplyModal = false;
        await this.loadCalculations();
      } catch (error) {
        this.makeToast("danger", this.errorMessage(error, "Unable to apply this calculation."), this.$t("Failed") || "Failed");
      } finally {
        this.applying = false;
      }
    }
  },
  async created() {
    if (!this.canAccess) {
      this.isLoading = false;
      return;
    }
    try {
      await Promise.all([this.loadOptions(), this.loadCalculations()]);
    } finally {
      this.isLoading = false;
    }
  }
};
</script>
