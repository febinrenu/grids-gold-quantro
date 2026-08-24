<template>
  <div class="main-content">
    <breadcumb page="Consignment Settlements" :folder="$t('Settings')" />

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>

    <div v-else>
      <b-alert v-if="!canAccess" show variant="warning">
        You do not have permission to view consignment settlements.
      </b-alert>

      <template v-else>
        <b-alert show variant="secondary" class="mb-4">
          These rows are created automatically whenever a memo, consignment, or customer-owned
          product sells — see the product's Ownership Type. Rep commission is handled separately
          and already runs on every sale.
        </b-alert>

        <b-card no-body>
          <b-card-header class="d-flex justify-content-between align-items-center flex-wrap gap-2">
            <span class="font-weight-bold">Settlements</span>
            <div class="d-flex align-items-center gap-2">
              <v-select
                v-model="statusFilter"
                :options="statusOptions"
                :reduce="option => option.value"
                placeholder="All statuses"
                style="min-width: 180px;"
                @input="loadSettlements"
              />
              <b-button size="sm" variant="outline-primary" @click="loadSettlements" :disabled="loadingList">
                <lucide-icon name="refresh-cw" class="mr-1" /> Refresh
              </b-button>
            </div>
          </b-card-header>
          <b-card-body>
            <div v-if="loadingList" class="text-center py-4">
              <div class="spinner spinner-primary mr-3"></div>
            </div>
            <div v-else-if="!settlements.length" class="text-muted small">No settlements found.</div>
            <div v-else class="table-responsive">
              <table class="table table-sm table-hover mb-0">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Ownership Type</th>
                    <th>Sale</th>
                    <th class="text-right">Qty</th>
                    <th class="text-right">Unit Cost</th>
                    <th class="text-right">Total Owed</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in settlements" :key="row.id">
                    <td>{{ (row.product && row.product.name) || ('#' + row.product_id) }}</td>
                    <td><b-badge variant="light">{{ row.ownership_type }}</b-badge></td>
                    <td>{{ (row.sale && row.sale.Ref) || ('#' + row.sale_id) }}</td>
                    <td class="text-right">{{ row.quantity }}</td>
                    <td class="text-right">{{ formatMoney(row.unit_cost) }}</td>
                    <td class="text-right">{{ formatMoney(row.total_owed) }}</td>
                    <td><b-badge :variant="statusVariant(row.status)">{{ row.status }}</b-badge></td>
                    <td class="text-right">
                      <b-button
                        v-if="row.status === 'pending'"
                        size="sm"
                        variant="outline-success"
                        :disabled="settlingId === row.id"
                        @click="settle(row)"
                      >
                        <span v-if="settlingId === row.id" class="spinner sm spinner-primary mr-1"></span>
                        Mark Settled
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
    title: "Consignment Settlements"
  },
  data() {
    return {
      isLoading: true,
      loadingList: false,
      settlements: [],
      statusFilter: "",
      settlingId: null,
      statusOptions: [
        { label: "All statuses", value: "" },
        { label: "Pending", value: "pending" },
        { label: "Settled", value: "settled" },
        { label: "Cancelled", value: "cancelled" }
      ]
    };
  },
  computed: {
    ...mapGetters(["currentUserPermissions", "currentUser"]),
    canAccess() {
      return Array.isArray(this.currentUserPermissions)
        && this.currentUserPermissions.includes("consignment_settlements");
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
      return { pending: "warning", settled: "success", cancelled: "secondary" }[status] || "secondary";
    },
    formatMoney(value) {
      const amount = Number(value || 0).toFixed(2);
      const symbol = (this.currentUser && this.currentUser.currency) || "";
      return symbol ? `${symbol} ${amount}` : amount;
    },
    async loadSettlements() {
      this.loadingList = true;
      NProgress.start();
      try {
        const params = { limit: -1 };
        if (this.statusFilter) params.status = this.statusFilter;
        const response = await axios.get("consignment-settlements", { params, meta: { skipErrorRedirect: true } });
        this.settlements = (response && response.data && response.data.data) || [];
      } catch (error) {
        this.makeToast("danger", this.errorMessage(error, "Unable to load settlements."), this.$t("Failed") || "Failed");
      } finally {
        this.loadingList = false;
        NProgress.done();
      }
    },
    async settle(row) {
      this.settlingId = row.id;
      try {
        await axios.post(`consignment-settlements/${row.id}/settle`, {}, { meta: { skipErrorRedirect: true } });
        this.makeToast("success", "Marked as settled.", this.$t("Success") || "Success");
        await this.loadSettlements();
      } catch (error) {
        this.makeToast("danger", this.errorMessage(error, "Unable to mark this settlement as settled."), this.$t("Failed") || "Failed");
      } finally {
        this.settlingId = null;
      }
    }
  },
  async created() {
    if (!this.canAccess) {
      this.isLoading = false;
      return;
    }
    try {
      await this.loadSettlements();
    } finally {
      this.isLoading = false;
    }
  }
};
</script>
