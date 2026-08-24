<template>
  <div class="main-content">
    <breadcumb :page="$t('RFID_Reconciliation') || 'RFID Reconciliation'" :folder="$t('Serial_Numbers')" />

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>

    <b-row v-if="!isLoading">
      <!-- Setup Panel -->
      <b-col md="4" class="mb-4">
        <b-card title="Scan Configuration">
          <b-form-group label="Choose Warehouse">
            <v-select
              v-model="warehouse_id"
              :reduce="label => label.value"
              :placeholder="$t('Choose_Warehouse')"
              :options="warehouses.map(w => ({ label: w.name, value: w.id }))"
              @input="onWarehouseChange"
            />
          </b-form-group>

          <b-form-group label="Scanned RFID EPCs (One per line / scan entry)">
            <b-form-textarea
              v-model="rawScans"
              rows="12"
              placeholder="Scan tags here or type EPC codes..."
              ref="scanTextarea"
              :disabled="!warehouse_id"
            />
          </b-form-group>

          <div class="mt-3 d-flex justify-content-between">
            <b-button size="sm" variant="outline-danger" @click="resetScan">Reset</b-button>
            <b-button size="sm" variant="warning" @click="simulatePerfectScan" :disabled="!warehouse_id">Simulate Scan</b-button>
            <b-button size="sm" variant="primary" @click="runReconciliation" :disabled="!warehouse_id || submitting">
              <span v-if="submitting" class="spinner spinner-primary small mr-1"></span>
              Analyze
            </b-button>
          </div>
        </b-card>
      </b-col>

      <!-- Analysis Results -->
      <b-col md="8" class="mb-4" v-if="reconciliation">
        <!-- Summary Cards -->
        <b-row class="mb-4">
          <b-col sm="6" lg="3" class="mb-2">
            <b-card class="text-center p-2 border-left-success">
              <h3 class="text-success">{{ reconciliation.summary.found_count }}</h3>
              <p class="text-muted mb-0">Found</p>
            </b-card>
          </b-col>
          <b-col sm="6" lg="3" class="mb-2">
            <b-card class="text-center p-2 border-left-warning">
              <h3 class="text-warning">{{ reconciliation.summary.missing_count }}</h3>
              <p class="text-muted mb-0">Missing</p>
            </b-card>
          </b-col>
          <b-col sm="6" lg="3" class="mb-2">
            <b-card class="text-center p-2 border-left-danger">
              <h3 class="text-danger">{{ reconciliation.summary.unexpected_count }}</h3>
              <p class="text-muted mb-0">Unexpected</p>
            </b-card>
          </b-col>
          <b-col sm="6" lg="3" class="mb-2">
            <b-card class="text-center p-2 border-left-dark">
              <h3 class="text-dark">{{ reconciliation.summary.unknown_count }}</h3>
              <p class="text-muted mb-0">Unknown Tags</p>
            </b-card>
          </b-col>
        </b-row>

        <b-card>
          <b-tabs content-class="mt-3">
            <!-- Tab: Found -->
            <b-tab title="Found" active>
              <div v-if="reconciliation.found.length === 0" class="text-center py-4 text-muted">
                No matching items scanned yet.
              </div>
              <b-table v-else :items="reconciliation.found" :fields="itemFields" striped responsive></b-table>
            </b-tab>

            <!-- Tab: Missing -->
            <b-tab title="Missing">
              <div v-if="reconciliation.missing.length === 0" class="text-center py-4 text-success">
                All expected items successfully found!
              </div>
              <b-table v-else :items="reconciliation.missing" :fields="itemFields" class="table-warning" responsive></b-table>
            </b-tab>

            <!-- Tab: Unexpected -->
            <b-tab title="Unexpected / Wrong Branch">
              <div v-if="reconciliation.unexpected.length === 0" class="text-center py-4 text-muted">
                No misplaced items scanned.
              </div>
              <b-table v-else :items="reconciliation.unexpected" :fields="unexpectedFields" class="table-danger" responsive></b-table>
            </b-tab>

            <!-- Tab: Unknown -->
            <b-tab title="Unknown Tags">
              <div v-if="reconciliation.unknown.length === 0" class="text-center py-4 text-muted">
                No unregistered tags scanned.
              </div>
              <b-table v-else :items="reconciliation.unknown" :fields="unknownFields" class="table-dark" responsive></b-table>
            </b-tab>
          </b-tabs>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import NProgress from "nprogress";

export default {
  metaInfo: { title: "RFID Reconciliation" },
  data() {
    return {
      isLoading: true,
      submitting: false,
      warehouse_id: null,
      warehouses: [],
      rawScans: "",
      reconciliation: null,
      itemFields: [
        { key: "epc", label: "EPC Code" },
        { key: "serial_number", label: "Serial Number" },
        { key: "product_name", label: "Product Name" },
        { key: "karat", label: "Karat Purity" },
        { key: "gross_weight", label: "Gross Weight (g)" }
      ],
      unexpectedFields: [
        { key: "epc", label: "EPC Code" },
        { key: "serial_number", label: "Serial Number" },
        { key: "product_name", label: "Product Name" },
        { key: "error", label: "System Note", tdClass: "text-danger font-weight-bold" }
      ],
      unknownFields: [
        { key: "epc", label: "EPC Code" },
        { key: "error", label: "Validation Status", tdClass: "text-danger font-weight-bold" }
      ]
    };
  },
  methods: {
    loadWarehouses() {
      axios.get("serial_numbers")
        .then(response => {
          if (response.data.warehouses) {
            this.warehouses = response.data.warehouses;
          }
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    onWarehouseChange() {
      this.reconciliation = null;
      this.$nextTick(() => {
        if (this.$refs.scanTextarea) {
          this.$refs.scanTextarea.focus();
        }
      });
    },
    resetScan() {
      this.rawScans = "";
      this.reconciliation = null;
    },
    simulatePerfectScan() {
      if (!this.warehouse_id) return;
      NProgress.start();
      // Fetch active tags for expected serials in this warehouse
      axios.get("serial_numbers", {
        params: {
          warehouse_id: this.warehouse_id,
          status: "available",
          limit: 100
        }
      })
      .then(response => {
        const serialIds = response.data.serials.map(s => s.id);
        if (serialIds.length === 0) {
          this.makeToast("warning", "No available serialized stock found in this warehouse to simulate.");
          NProgress.done();
          return;
        }

        // Look up active RFID tags for these serials
        axios.get("rfid-tags", {
          params: {
            status: "active",
            limit: 200
          }
        })
        .then(res => {
          // Filter to only match our warehouse serials
          const tags = res.data.data.filter(t => serialIds.includes(t.product_serial_id));
          if (tags.length === 0) {
            this.makeToast("warning", "No active RFID tags assigned to the available items in this warehouse.");
          } else {
            this.rawScans = tags.map(t => t.epc_number).join("\n");
            this.makeToast("success", `Loaded ${tags.length} active tag codes into input area.`);
          }
          NProgress.done();
        })
        .catch(() => {
          NProgress.done();
        });
      })
      .catch(() => {
        NProgress.done();
      });
    },
    runReconciliation() {
      if (!this.warehouse_id) return;
      const lines = this.rawScans.split("\n")
        .map(line => line.trim())
        .filter(line => line.length > 0);

      this.submitting = true;
      NProgress.start();

      axios.post("rfid/reconcile", {
        warehouse_id: this.warehouse_id,
        epcs: lines
      })
      .then(response => {
        this.reconciliation = response.data;
        this.submitting = false;
        NProgress.done();
        this.makeToast("success", "Reconciliation analysis complete!");
      })
      .catch(error => {
        this.submitting = false;
        NProgress.done();
        const msg = error.response && error.response.data && error.response.data.message 
          ? error.response.data.message 
          : "Failed to reconcile scans.";
        this.makeToast("danger", msg);
      });
    },
    makeToast(variant, msg, title) {
      this.$bvToast.toast(msg, {
        title: title || "RFID Reconciliation",
        variant: variant,
        solid: true
      });
    }
  },
  created() {
    this.loadWarehouses();
  }
};
</script>

<style scoped>
.border-left-success {
  border-left: 5px solid #28a745 !important;
}
.border-left-warning {
  border-left: 5px solid #ffc107 !important;
}
.border-left-danger {
  border-left: 5px solid #dc3545 !important;
}
.border-left-dark {
  border-left: 5px solid #343a40 !important;
}
</style>
