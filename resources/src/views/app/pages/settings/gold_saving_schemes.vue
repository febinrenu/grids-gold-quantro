<template>
  <div class="main-content">
    <breadcumb page="Gold Saving Schemes" :folder="$t('Settings')" />

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>

    <div v-else>
      <b-alert v-if="!canAccess" show variant="warning">
        You do not have permission to view gold saving schemes.
      </b-alert>

      <template v-else>
        <b-card no-body class="mb-4">
          <b-card-header class="d-flex justify-content-between align-items-center">
            <span class="font-weight-bold">Enroll a New Scheme</span>
          </b-card-header>
          <b-card-body>
            <b-form @submit.prevent="submitScheme">
              <b-row>
                <b-col md="4">
                  <b-form-group label="Customer *">
                    <v-select
                      v-model="form.client_id"
                      :options="clientOptions"
                      :reduce="option => option.value"
                      placeholder="Choose customer"
                      :disabled="submitting"
                    />
                  </b-form-group>
                </b-col>
                <b-col md="4">
                  <b-form-group label="Scheme Name *">
                    <b-form-input v-model="form.scheme_name" placeholder="e.g. 11+1 Gold Plan" :disabled="submitting" />
                  </b-form-group>
                </b-col>
                <b-col md="4">
                  <b-form-group label="Duration (months) *">
                    <b-form-input v-model="form.duration_months" type="number" min="1" :disabled="submitting" />
                  </b-form-group>
                </b-col>
                <b-col md="4">
                  <b-form-group label="Monthly Installment">
                    <b-form-input v-model="form.monthly_installment_amount" type="number" min="0" step="0.01" :disabled="submitting" />
                  </b-form-group>
                </b-col>
                <b-col md="4">
                  <b-form-group label="Start Date *">
                    <b-form-input v-model="form.start_date" type="date" :disabled="submitting" />
                  </b-form-group>
                </b-col>
                <b-col md="4">
                  <b-form-group label="Bonus %">
                    <b-form-input v-model="form.bonus_percentage" type="number" min="0" step="0.01" :disabled="submitting" />
                  </b-form-group>
                </b-col>
              </b-row>
              <div class="d-flex justify-content-end">
                <b-button type="submit" variant="primary" :disabled="submitting">
                  <span v-if="submitting" class="spinner sm spinner-primary mr-2"></span>
                  Enroll Scheme
                </b-button>
              </div>
            </b-form>
          </b-card-body>
        </b-card>

        <b-card no-body class="mb-4">
          <b-card-header class="d-flex justify-content-between align-items-center flex-wrap gap-2">
            <span class="font-weight-bold">Schemes</span>
            <b-button size="sm" variant="outline-primary" @click="loadSchemes" :disabled="loadingSchemes">
              <lucide-icon name="refresh-cw" class="mr-1" /> Refresh
            </b-button>
          </b-card-header>
          <b-card-body>
            <div v-if="loadingSchemes" class="text-center py-4">
              <div class="spinner spinner-primary mr-3"></div>
            </div>
            <div v-else-if="!schemes.length" class="text-muted small">No schemes enrolled yet.</div>
            <div v-else class="table-responsive">
              <table class="table table-hover table-sm mb-0">
                <thead>
                  <tr>
                    <th>Scheme</th>
                    <th>Customer</th>
                    <th>Duration</th>
                    <th class="text-right">Deposited (Amount)</th>
                    <th class="text-right">Deposited (Weight)</th>
                    <th>Status</th>
                    <th>Start Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="scheme in schemes" :key="scheme.id">
                    <td>{{ scheme.scheme_name }}</td>
                    <td>{{ clientName(scheme.client_id) }}</td>
                    <td>{{ scheme.duration_months }} mo</td>
                    <td class="text-right">{{ formatMoney(scheme.total_deposited_amount) }}</td>
                    <td class="text-right">{{ Number(scheme.total_deposited_weight || 0).toFixed(3) }} g</td>
                    <td><b-badge :variant="statusVariant(scheme.status)">{{ scheme.status }}</b-badge></td>
                    <td>{{ scheme.start_date }}</td>
                    <td class="text-right">
                      <b-button size="sm" variant="outline-primary" @click="openDeposits(scheme)">
                        Deposits
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

    <b-modal v-model="showDepositsModal" size="lg" :title="activeScheme ? ('Deposits — ' + activeScheme.scheme_name) : 'Deposits'" hide-footer>
      <b-form @submit.prevent="submitDeposit" class="mb-4">
        <b-row>
          <b-col md="3">
            <b-form-group label="Date *">
              <b-form-input v-model="depositForm.deposit_date" type="date" :disabled="submittingDeposit" />
            </b-form-group>
          </b-col>
          <b-col md="3">
            <b-form-group label="Amount *">
              <b-form-input v-model="depositForm.amount" type="number" min="0.01" step="0.01" :disabled="submittingDeposit" />
            </b-form-group>
          </b-col>
          <b-col md="3">
            <b-form-group label="Payment Method">
              <b-form-input v-model="depositForm.payment_method" placeholder="cash, card..." :disabled="submittingDeposit" />
            </b-form-group>
          </b-col>
          <b-col md="3">
            <b-form-group label="Receipt #">
              <b-form-input v-model="depositForm.receipt_number" :disabled="submittingDeposit" />
            </b-form-group>
          </b-col>
        </b-row>
        <div class="d-flex justify-content-end">
          <b-button type="submit" variant="primary" size="sm" :disabled="submittingDeposit">
            <span v-if="submittingDeposit" class="spinner sm spinner-primary mr-2"></span>
            Record Deposit
          </b-button>
        </div>
      </b-form>

      <div v-if="loadingDeposits" class="text-center py-4">
        <div class="spinner spinner-primary mr-3"></div>
      </div>
      <div v-else-if="!deposits.length" class="text-muted small">No deposits recorded yet.</div>
      <div v-else class="table-responsive">
        <table class="table table-sm table-striped mb-0">
          <thead>
            <tr>
              <th>Date</th>
              <th class="text-right">Amount</th>
              <th class="text-right">Equivalent Weight</th>
              <th>Method</th>
              <th>Receipt</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="deposit in deposits" :key="deposit.id">
              <td>{{ deposit.deposit_date }}</td>
              <td class="text-right">{{ formatMoney(deposit.amount) }}</td>
              <td class="text-right">{{ deposit.equivalent_weight ? Number(deposit.equivalent_weight).toFixed(3) + ' g' : '—' }}</td>
              <td>{{ deposit.payment_method || '—' }}</td>
              <td>{{ deposit.receipt_number || '—' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NProgress from "nprogress";

export default {
  metaInfo: {
    title: "Gold Saving Schemes"
  },
  data() {
    return {
      isLoading: true,
      loadingSchemes: false,
      submitting: false,
      clients: [],
      schemes: [],
      form: this.blankForm(),
      showDepositsModal: false,
      activeScheme: null,
      deposits: [],
      loadingDeposits: false,
      submittingDeposit: false,
      depositForm: this.blankDepositForm()
    };
  },
  computed: {
    ...mapGetters(["currentUserPermissions", "currentUser"]),
    canAccess() {
      return Array.isArray(this.currentUserPermissions)
        && this.currentUserPermissions.includes("gold_saving_schemes");
    },
    clientOptions() {
      return (this.clients || []).map(client => ({
        label: [client.firstname, client.lastname].filter(Boolean).join(" ") || client.name || ("Client #" + client.id),
        value: client.id
      }));
    }
  },
  methods: {
    blankForm() {
      return {
        client_id: "",
        scheme_name: "",
        duration_months: "12",
        monthly_installment_amount: "",
        start_date: new Date().toISOString().slice(0, 10),
        bonus_percentage: "0"
      };
    },
    blankDepositForm() {
      return {
        deposit_date: new Date().toISOString().slice(0, 10),
        amount: "",
        payment_method: "",
        receipt_number: ""
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
    clientName(clientId) {
      const client = (this.clients || []).find(c => String(c.id) === String(clientId));
      if (!client) return "—";
      return [client.firstname, client.lastname].filter(Boolean).join(" ") || client.name || ("Client #" + clientId);
    },
    statusVariant(status) {
      return { active: "success", matured: "info", closed: "secondary", cancelled: "danger" }[status] || "secondary";
    },
    formatMoney(value) {
      const amount = Number(value || 0).toFixed(2);
      const symbol = (this.currentUser && this.currentUser.currency) || "";
      return symbol ? `${symbol} ${amount}` : amount;
    },
    async loadClients() {
      try {
        const response = await axios.get("clients", { params: { limit: -1 }, meta: { skipErrorRedirect: true } });
        this.clients = (response && response.data && response.data.data) || [];
      } catch (error) {
        // Non-fatal: the customer picker just stays empty.
      }
    },
    async loadSchemes() {
      this.loadingSchemes = true;
      NProgress.start();
      try {
        const response = await axios.get("gold-saving-schemes", { params: { limit: -1 }, meta: { skipErrorRedirect: true } });
        this.schemes = (response && response.data && response.data.data) || [];
      } catch (error) {
        this.makeToast("danger", this.errorMessage(error, "Unable to load gold saving schemes."), this.$t("Failed") || "Failed");
      } finally {
        this.loadingSchemes = false;
        NProgress.done();
      }
    },
    async submitScheme() {
      if (!this.form.client_id || !this.form.scheme_name || !this.form.duration_months || !this.form.start_date) {
        this.makeToast("danger", "Please fill in customer, scheme name, duration, and start date.", this.$t("Failed") || "Failed");
        return;
      }
      this.submitting = true;
      NProgress.start();
      try {
        await axios.post("gold-saving-schemes", this.form, { meta: { skipErrorRedirect: true } });
        this.makeToast("success", "Scheme enrolled successfully.", this.$t("Success") || "Success");
        this.form = this.blankForm();
        await this.loadSchemes();
      } catch (error) {
        this.makeToast("danger", this.errorMessage(error, "Unable to enroll the scheme."), this.$t("Failed") || "Failed");
      } finally {
        this.submitting = false;
        NProgress.done();
      }
    },
    async openDeposits(scheme) {
      this.activeScheme = scheme;
      this.showDepositsModal = true;
      this.depositForm = this.blankDepositForm();
      await this.loadDeposits();
    },
    async loadDeposits() {
      if (!this.activeScheme) return;
      this.loadingDeposits = true;
      try {
        const response = await axios.get("gold-saving-scheme-deposits", {
          params: { scheme_id: this.activeScheme.id, limit: -1 },
          meta: { skipErrorRedirect: true }
        });
        this.deposits = (response && response.data && response.data.data) || [];
      } catch (error) {
        this.makeToast("danger", this.errorMessage(error, "Unable to load deposits."), this.$t("Failed") || "Failed");
      } finally {
        this.loadingDeposits = false;
      }
    },
    async submitDeposit() {
      if (!this.activeScheme || !this.depositForm.deposit_date || !this.depositForm.amount) {
        this.makeToast("danger", "Please fill in the date and amount.", this.$t("Failed") || "Failed");
        return;
      }
      this.submittingDeposit = true;
      try {
        await axios.post("gold-saving-scheme-deposits", {
          scheme_id: this.activeScheme.id,
          ...this.depositForm
        }, { meta: { skipErrorRedirect: true } });
        this.makeToast("success", "Deposit recorded successfully.", this.$t("Success") || "Success");
        this.depositForm = this.blankDepositForm();
        await this.loadDeposits();
        await this.loadSchemes();
      } catch (error) {
        this.makeToast("danger", this.errorMessage(error, "Unable to record the deposit."), this.$t("Failed") || "Failed");
      } finally {
        this.submittingDeposit = false;
      }
    }
  },
  async created() {
    if (!this.canAccess) {
      this.isLoading = false;
      return;
    }
    try {
      await Promise.all([this.loadClients(), this.loadSchemes()]);
    } finally {
      this.isLoading = false;
    }
  }
};
</script>
