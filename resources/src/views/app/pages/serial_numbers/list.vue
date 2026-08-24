<template>
  <div class="main-content">
    <breadcumb :page="$t('Serial_Management')" :folder="$t('Serial_Numbers')" />

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>
    <b-card class="wrapper" v-if="!isLoading">
      <vue-good-table
        mode="remote"
        :columns="columns"
        :totalRows="totalRows"
        :rows="serials"
        @on-page-change="onPageChange"
        @on-per-page-change="onPerPageChange"
        @on-sort-change="onSortChange"
        @on-search="onSearch"
        :search-options="{ placeholder: $t('Search_this_table'), enabled: true }"
        :pagination-options="{ enabled: true, mode: 'records', nextLabel: 'next', prevLabel: 'prev' }"
        styleClass="tableOne table-hover vgt-table mt-3"
      >
        <div slot="table-actions" class="mt-2 mb-3" style="display:flex; gap:10px; flex-wrap:wrap;">
          <b-form-group :label="$t('warehouse')" style="min-width:200px;">
            <v-select
              @input="loadOnFilter"
              v-model="warehouse_id"
              :reduce="label => label.value"
              :placeholder="$t('Choose_Warehouse')"
              :options="warehouses.map(w => ({ label: w.name, value: w.id }))"
            />
          </b-form-group>
          <b-form-group :label="$t('Serial_Status')" style="min-width:200px;">
            <v-select
              @input="loadOnFilter"
              v-model="status"
              :reduce="label => label.value"
              :placeholder="$t('Serial_Status')"
              :options="statusOptions"
            />
          </b-form-group>
        </div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'status'">
            <span class="badge" :class="statusBadge(props.row.status)">{{ statusLabel(props.row.status) }}</span>
          </span>
          <span v-else-if="props.column.field == 'actions'">
            <router-link :title="$t('History')" :to="'/app/serial_numbers/detail/' + props.row.id">
              <b-button size="sm" variant="primary"><lucide-icon name="history" /> {{ $t('History') || 'History' }}</b-button>
            </router-link>
            <b-button size="sm" variant="info" class="ml-1" @click="openRfidModal(props.row)">
              <lucide-icon name="tag" /> RFID
            </b-button>
          </span>
          <span v-else>{{ props.formattedRow[props.column.field] }}</span>
        </template>
      </vue-good-table>
    </b-card>

    <!-- RFID Assignment Modal -->
    <b-modal id="rfid-modal" title="RFID Tag Assignment" hide-footer size="md" v-model="rfidModalOpen">
      <div v-if="selectedSerial">
        <div class="mb-3 p-3 bg-light rounded">
          <strong>Product:</strong> {{ selectedSerial.product_name }} <br/>
          <strong>Serial:</strong> {{ selectedSerial.serial_number }} <br/>
          <strong>Branch:</strong> {{ selectedSerial.warehouse_name }}
        </div>

        <div v-if="activeTagLoading" class="text-center my-3">
          <div class="spinner spinner-primary small"></div>
        </div>

        <div v-else>
          <div v-if="activeEpc" class="alert alert-success d-flex justify-content-between align-items-center mb-3">
            <span><strong>Active RFID Tag:</strong> <code>{{ activeEpc }}</code></span>
            <b-button size="sm" variant="danger" @click="unassignRfid">Unassign</b-button>
          </div>
          <div v-else class="alert alert-warning mb-3">
            No active RFID tag assigned to this item.
          </div>

          <b-form @submit.prevent="assignRfid">
            <b-form-group label="RFID EPC Code (Scan or Type)">
              <b-form-input
                v-model="rfidForm.epc_number"
                required
                placeholder="Enter EPC Code (e.g. E28011052...)"
                ref="epcInput"
                autofocus
              />
            </b-form-group>

            <div class="text-right mt-3">
              <b-button size="sm" variant="secondary" class="mr-2" @click="rfidModalOpen = false">Close</b-button>
              <b-button size="sm" variant="success" type="submit" :disabled="submittingRfid">
                <span v-if="submittingRfid" class="spinner spinner-primary small mr-1"></span>
                Assign Tag
              </b-button>
            </div>
          </b-form>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import NProgress from "nprogress";

export default {
  metaInfo: { title: "Serial Numbers" },
  data() {
    return {
      isLoading: true,
      serverParams: { sort: { field: "id", type: "desc" }, page: 1, perPage: 10 },
      limit: "10",
      search: "",
      totalRows: "",
      serials: [],
      warehouses: [],
      warehouse_id: "",
      status: "",
      rfidModalOpen: false,
      selectedSerial: null,
      activeTagLoading: false,
      activeEpc: null,
      submittingRfid: false,
      rfidForm: {
        epc_number: ""
      }
    };
  },
  computed: {
    statusOptions() {
      return [
        { label: this.$t("Status_available"), value: "available" },
        { label: this.$t("Status_sold"), value: "sold" },
        { label: this.$t("Status_returned_customer"), value: "returned_customer" },
        { label: this.$t("Status_returned_supplier"), value: "returned_supplier" },
        { label: this.$t("Status_damaged"), value: "damaged" },
        { label: this.$t("Status_reserved"), value: "reserved" }
      ];
    },
    columns() {
      return [
        { label: this.$t("Serial_Number"), field: "serial_number", tdClass: "text-left", thClass: "text-left" },
        { label: this.$t("Name_product"), field: "product_name", tdClass: "text-left", thClass: "text-left", sortable: false },
        { label: this.$t("warehouse"), field: "warehouse_name", tdClass: "text-left", thClass: "text-left", sortable: false },
        { label: this.$t("Serial_Status"), field: "status", tdClass: "text-left", thClass: "text-left" },
        { label: this.$t("Supplier"), field: "provider_name", tdClass: "text-left", thClass: "text-left", sortable: false },
        { label: this.$t("Customer"), field: "client_name", tdClass: "text-left", thClass: "text-left", sortable: false },
        { label: this.$t("Action"), field: "actions", tdClass: "text-left", thClass: "text-left", sortable: false }
      ];
    }
  },
  methods: {
    openRfidModal(serial) {
      this.selectedSerial = serial;
      this.activeEpc = null;
      this.rfidForm.epc_number = "";
      this.rfidModalOpen = true;
      this.activeTagLoading = true;

      // Fetch active tag for this serial
      axios.get("rfid-tags", {
        params: {
          product_serial_id: serial.id,
          status: "active",
          limit: 1
        }
      })
      .then(response => {
        if (response.data.data && response.data.data.length > 0) {
          this.activeEpc = response.data.data[0].epc_number;
        }
        this.activeTagLoading = false;
        this.$nextTick(() => {
          if (this.$refs.epcInput) {
            this.$refs.epcInput.focus();
          }
        });
      })
      .catch(() => {
        this.activeTagLoading = false;
      });
    },
    assignRfid() {
      if (!this.rfidForm.epc_number) return;
      this.submittingRfid = true;

      axios.post("rfid-tags/assign", {
        product_serial_id: this.selectedSerial.id,
        epc_number: this.rfidForm.epc_number
      })
      .then(response => {
        this.submittingRfid = false;
        if (response.data.success) {
          this.makeToast("success", response.data.message || "RFID Tag assigned successfully!");
          this.rfidModalOpen = false;
          this.loadItems(this.serverParams.page);
        } else {
          this.makeToast("danger", response.data.message || "Failed to assign RFID tag.");
        }
      })
      .catch(error => {
        this.submittingRfid = false;
        const msg = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : "Failed to assign RFID tag.";
        this.makeToast("danger", msg);
      });
    },
    unassignRfid() {
      this.activeTagLoading = true;
      axios.post("rfid-tags/unassign", {
        product_serial_id: this.selectedSerial.id
      })
      .then(response => {
        this.activeTagLoading = false;
        if (response.data.success) {
          this.makeToast("success", response.data.message || "RFID Tag unassigned successfully!");
          this.activeEpc = null;
          this.loadItems(this.serverParams.page);
        } else {
          this.makeToast("danger", response.data.message || "Failed to unassign RFID tag.");
        }
      })
      .catch(error => {
        this.activeTagLoading = false;
        const msg = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : "Failed to unassign RFID tag.";
        this.makeToast("danger", msg);
      });
    },
    makeToast(variant, msg, title) {
      this.$bvToast.toast(msg, {
        title: title || "RFID Tagging",
        variant: variant,
        solid: true
      });
    },
    statusLabel(s) {
      return this.$t("Status_" + s) || s;
    },
    statusBadge(s) {
      const map = {
        available: "badge-success",
        sold: "badge-primary",
        returned_customer: "badge-info",
        returned_supplier: "badge-warning",
        damaged: "badge-danger",
        reserved: "badge-secondary"
      };
      return map[s] || "badge-light";
    },
    updateParams(p) { this.serverParams = Object.assign({}, this.serverParams, p); },
    onPageChange({ currentPage }) {
      if (this.serverParams.page !== currentPage) {
        this.updateParams({ page: currentPage });
        this.loadItems(currentPage);
      }
    },
    onPerPageChange({ currentPerPage }) {
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({ page: 1, perPage: currentPerPage });
        this.loadItems(1);
      }
    },
    onSortChange(params) {
      this.updateParams({ sort: { type: params[0].type, field: params[0].field } });
      this.loadItems(this.serverParams.page);
    },
    onSearch(value) {
      this.search = value.searchTerm;
      this.loadItems(this.serverParams.page);
    },
    loadOnFilter() {
      this.loadItems(1);
    },
    loadItems(page) {
      NProgress.start();
      NProgress.set(0.1);
      axios
        .get("serial_numbers", {
          params: {
            page: page,
            SortField: this.serverParams.sort.field,
            SortType: this.serverParams.sort.type,
            search: this.search,
            status: this.status || "",
            warehouse_id: this.warehouse_id || "",
            limit: this.limit
          }
        })
        .then(response => {
          this.serials = response.data.serials;
          this.totalRows = response.data.totalRows;
          if (response.data.warehouses) this.warehouses = response.data.warehouses;
          NProgress.done();
          this.isLoading = false;
        })
        .catch(() => {
          NProgress.done();
          setTimeout(() => { this.isLoading = false; }, 500);
        });
    }
  },
  created() {
    this.loadItems(1);
  }
};
</script>
