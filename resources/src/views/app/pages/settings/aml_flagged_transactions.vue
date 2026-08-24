<template>
  <div class="main-content">
    <breadcumb page="AML Flagged Transactions" :folder="$t('Settings')" />

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>

    <div v-else>
      <b-alert v-if="!canAccess" show variant="warning">
        You do not have permission to view AML flagged transactions.
      </b-alert>

      <template v-else>
        <b-alert show variant="secondary" class="mb-4">
          Sales are flagged here automatically when they cross the cash-transaction threshold
          configured in Settings → Jewelry → AML/KYC.
        </b-alert>

        <b-card no-body>
          <b-card-header class="d-flex justify-content-between align-items-center flex-wrap gap-2">
            <span class="font-weight-bold">Flagged Transactions</span>
            <div class="d-flex align-items-center gap-2">
              <v-select
                v-model="statusFilter"
                :options="statusOptions"
                :reduce="option => option.value"
                placeholder="All statuses"
                style="min-width: 180px;"
                @input="loadFlagged"
              />
              <b-button size="sm" variant="outline-primary" @click="loadFlagged" :disabled="loadingList">
                <lucide-icon name="refresh-cw" class="mr-1" /> Refresh
              </b-button>
            </div>
          </b-card-header>
          <b-card-body>
            <div v-if="loadingList" class="text-center py-4">
              <div class="spinner spinner-primary mr-3"></div>
            </div>
            <div v-else-if="!flagged.length" class="text-muted small">No flagged transactions.</div>
            <div v-else class="table-responsive">
              <table class="table table-sm table-hover mb-0">
                <thead>
                  <tr>
                    <th>Sale</th>
                    <th>Customer</th>
                    <th class="text-right">Amount</th>
                    <th class="text-right">Threshold</th>
                    <th>Reason</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in flagged" :key="row.id">
                    <td>{{ (row.sale && row.sale.Ref) || ('#' + row.sale_id) }}</td>
                    <td>{{ (row.client && (row.client.name || [row.client.firstname, row.client.lastname].filter(Boolean).join(' '))) || ('#' + row.client_id) }}</td>
                    <td class="text-right">{{ formatMoney(row.transaction_amount) }}</td>
                    <td class="text-right">{{ formatMoney(row.threshold_amount) }}</td>
                    <td>{{ row.flag_reason }}</td>
                    <td><b-badge :variant="statusVariant(row.review_status)">{{ row.review_status }}</b-badge></td>
                    <td class="text-right">
                      <b-button
                        v-if="row.review_status === 'pending'"
                        size="sm"
                        variant="outline-success"
                        class="mr-1"
                        :disabled="updatingId === row.id"
                        @click="review(row, 'cleared')"
                      >
                        Clear
                      </b-button>
                      <b-button
                        v-if="row.review_status === 'pending'"
                        size="sm"
                        variant="outline-danger"
                        :disabled="updatingId === row.id"
                        @click="review(row, 'reported')"
                      >
                        Report
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

export default {
  metaInfo: {
    title: "AML Flagged Transactions"
  },
  data() {
    return {
      isLoading: true,
      loadingList: false,
      updatingId: null,
      flagged: [],
      statusFilter: "",
      statusOptions: [
        { label: "All statuses", value: "" },
        { label: "Pending", value: "pending" },
        { label: "Cleared", value: "cleared" },
        { label: "Reported", value: "reported" }
      ]
    };
  },
  computed: {
    ...mapGetters(["currentUserPermissions", "currentUser"]),
    canAccess() {
      return Array.isArray(this.currentUserPermissions)
        && this.currentUserPermissions.includes("aml_flagged_transactions");
    }
  },
  methods: {
    makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, { title, variant, solid: true });
    },
    errorMessage(error, fallback) {
      const payload = error && error.response && error.response.data;
      return (payload && payload.message) || fallback;
    },
    statusVariant(status) {
      return { pending: "warning", cleared: "success", reported: "danger" }[status] || "secondary";
    },
    formatMoney(value) {
      const amount = Number(value || 0).toFixed(2);
      const symbol = (this.currentUser && this.currentUser.currency) || "";
      return symbol ? `${symbol} ${amount}` : amount;
    },
    async loadFlagged() {
      this.loadingList = true;
      NProgress.start();
      try {
        const params = { limit: -1 };
        if (this.statusFilter) params.review_status = this.statusFilter;
        const response = await axios.get("aml-flagged-transactions", { params, meta: { skipErrorRedirect: true } });
        this.flagged = (response && response.data && response.data.data) || [];
      } catch (error) {
        this.makeToast("danger", this.errorMessage(error, "Unable to load flagged transactions."), this.$t("Failed") || "Failed");
      } finally {
        this.loadingList = false;
        NProgress.done();
      }
    },
    async review(row, status) {
      this.updatingId = row.id;
      try {
        await axios.put(`aml-flagged-transactions/${row.id}`, { review_status: status }, { meta: { skipErrorRedirect: true } });
        this.makeToast("success", "Transaction updated.", this.$t("Success") || "Success");
        await this.loadFlagged();
      } catch (error) {
        this.makeToast("danger", this.errorMessage(error, "Unable to update this transaction."), this.$t("Failed") || "Failed");
      } finally {
        this.updatingId = null;
      }
    }
  },
  async created() {
    if (!this.canAccess) {
      this.isLoading = false;
      return;
    }
    try {
      await this.loadFlagged();
    } finally {
      this.isLoading = false;
    }
  }
};
</script>
