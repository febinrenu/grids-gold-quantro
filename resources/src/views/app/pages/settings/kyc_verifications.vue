<template>
  <div class="main-content">
    <breadcumb page="KYC Verifications" :folder="$t('Settings')" />

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>

    <div v-else>
      <b-alert v-if="!canAccess" show variant="warning">
        You do not have permission to view KYC verifications.
      </b-alert>

      <template v-else>
        <b-card no-body class="mb-4">
          <b-card-header class="font-weight-bold">Add a Verification Record</b-card-header>
          <b-card-body>
            <b-row>
              <b-col md="3">
                <b-form-group label="Customer *">
                  <v-select
                    v-model="form.client_id"
                    :options="clientOptions"
                    :reduce="option => option.value"
                    placeholder="Choose customer"
                  />
                </b-form-group>
              </b-col>
              <b-col md="3">
                <b-form-group label="Verification Type">
                  <v-select
                    v-model="form.verification_type"
                    :options="typeOptions"
                    :reduce="option => option.value"
                  />
                </b-form-group>
              </b-col>
              <b-col md="3">
                <b-form-group label="Document Type">
                  <b-form-input v-model="form.document_type" placeholder="passport, national_id..." />
                </b-form-group>
              </b-col>
              <b-col md="3">
                <b-form-group label="Document Number">
                  <b-form-input v-model="form.document_number" />
                </b-form-group>
              </b-col>
              <b-col md="3">
                <b-form-group label="ID Expiry Date">
                  <b-form-input v-model="form.id_expiry_date" type="date" />
                </b-form-group>
              </b-col>
              <b-col md="3">
                <b-form-group label="Risk Level">
                  <v-select v-model="form.risk_level" :options="riskOptions" :reduce="option => option.value" />
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group label="Notes">
                  <b-form-input v-model="form.notes" />
                </b-form-group>
              </b-col>
            </b-row>
            <div class="d-flex justify-content-end">
              <b-button variant="primary" @click="submitVerification" :disabled="submitting">
                <span v-if="submitting" class="spinner sm spinner-primary mr-2"></span>
                Save
              </b-button>
            </div>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-header class="d-flex justify-content-between align-items-center flex-wrap gap-2">
            <span class="font-weight-bold">Verification Records</span>
            <b-button size="sm" variant="outline-primary" @click="loadVerifications" :disabled="loadingList">
              <lucide-icon name="refresh-cw" class="mr-1" /> Refresh
            </b-button>
          </b-card-header>
          <b-card-body>
            <div v-if="loadingList" class="text-center py-4">
              <div class="spinner spinner-primary mr-3"></div>
            </div>
            <div v-else-if="!verifications.length" class="text-muted small">No verification records yet.</div>
            <div v-else class="table-responsive">
              <table class="table table-sm table-hover mb-0">
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Type</th>
                    <th>Document</th>
                    <th>Risk</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in verifications" :key="row.id">
                    <td>{{ (row.client && (row.client.name || [row.client.firstname, row.client.lastname].filter(Boolean).join(' '))) || ('#' + row.client_id) }}</td>
                    <td>{{ row.verification_type }}</td>
                    <td>{{ row.document_type || '—' }} {{ row.document_number ? '(' + row.document_number + ')' : '' }}</td>
                    <td><b-badge :variant="riskVariant(row.risk_level)">{{ row.risk_level }}</b-badge></td>
                    <td><b-badge :variant="statusVariant(row.status)">{{ row.status }}</b-badge></td>
                    <td class="text-right">
                      <b-button
                        v-if="row.status === 'pending'"
                        size="sm"
                        variant="outline-success"
                        class="mr-1"
                        :disabled="updatingId === row.id"
                        @click="updateStatus(row, 'verified')"
                      >
                        Verify
                      </b-button>
                      <b-button
                        v-if="row.status === 'pending'"
                        size="sm"
                        variant="outline-danger"
                        :disabled="updatingId === row.id"
                        @click="updateStatus(row, 'rejected')"
                      >
                        Reject
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
    title: "KYC Verifications"
  },
  data() {
    return {
      isLoading: true,
      loadingList: false,
      submitting: false,
      updatingId: null,
      clients: [],
      verifications: [],
      form: this.blankForm(),
      typeOptions: [
        { label: "ID Document", value: "id_document" },
        { label: "Address Proof", value: "address_proof" },
        { label: "Enhanced Due Diligence", value: "enhanced_due_diligence" }
      ],
      riskOptions: [
        { label: "Low", value: "low" },
        { label: "Medium", value: "medium" },
        { label: "High", value: "high" }
      ]
    };
  },
  computed: {
    ...mapGetters(["currentUserPermissions"]),
    canAccess() {
      return Array.isArray(this.currentUserPermissions)
        && this.currentUserPermissions.includes("kyc_verifications");
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
        verification_type: "id_document",
        document_type: "",
        document_number: "",
        id_expiry_date: "",
        risk_level: "low",
        notes: ""
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
    riskVariant(risk) {
      return { low: "success", medium: "warning", high: "danger" }[risk] || "secondary";
    },
    statusVariant(status) {
      return { pending: "warning", verified: "success", rejected: "danger", expired: "secondary" }[status] || "secondary";
    },
    async loadClients() {
      try {
        const response = await axios.get("clients", { params: { limit: -1 }, meta: { skipErrorRedirect: true } });
        this.clients = (response && response.data && response.data.data) || [];
      } catch (error) {
        // Non-fatal: the customer picker just stays empty.
      }
    },
    async loadVerifications() {
      this.loadingList = true;
      NProgress.start();
      try {
        const response = await axios.get("kyc-verifications", { params: { limit: -1 }, meta: { skipErrorRedirect: true } });
        this.verifications = (response && response.data && response.data.data) || [];
      } catch (error) {
        this.makeToast("danger", this.errorMessage(error, "Unable to load KYC verifications."), this.$t("Failed") || "Failed");
      } finally {
        this.loadingList = false;
        NProgress.done();
      }
    },
    async submitVerification() {
      if (!this.form.client_id) {
        this.makeToast("danger", "Please choose a customer.", this.$t("Failed") || "Failed");
        return;
      }
      this.submitting = true;
      try {
        await axios.post("kyc-verifications", this.form, { meta: { skipErrorRedirect: true } });
        this.makeToast("success", "Verification record saved.", this.$t("Success") || "Success");
        this.form = this.blankForm();
        await this.loadVerifications();
      } catch (error) {
        this.makeToast("danger", this.errorMessage(error, "Unable to save the verification record."), this.$t("Failed") || "Failed");
      } finally {
        this.submitting = false;
      }
    },
    async updateStatus(row, status) {
      this.updatingId = row.id;
      try {
        await axios.put(`kyc-verifications/${row.id}`, { status }, { meta: { skipErrorRedirect: true } });
        this.makeToast("success", "Status updated.", this.$t("Success") || "Success");
        await this.loadVerifications();
      } catch (error) {
        this.makeToast("danger", this.errorMessage(error, "Unable to update the status."), this.$t("Failed") || "Failed");
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
      await Promise.all([this.loadClients(), this.loadVerifications()]);
    } finally {
      this.isLoading = false;
    }
  }
};
</script>
