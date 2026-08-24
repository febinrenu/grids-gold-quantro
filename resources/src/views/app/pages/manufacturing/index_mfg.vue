<template>
  <div class="main-content">
    <breadcumb :page="'Manufacturing Orders'" :folder="'Manufacturing'"/>

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>
    <div v-else>
      <div class="card mb-4 p-3 d-flex flex-row justify-content-between align-items-center">
        <h4 class="m-0">Manufacturing Orders</h4>
      </div>

      <b-card>
        <b-table
          :items="orders"
          :fields="fields"
          striped
          hover
          responsive
        >
          <template #cell(actions)="data">
            <b-button
              size="sm"
              variant="primary"
              :to="{ name: 'ManufacturingOrderDetails', params: { id: data.item.id } }"
            >
              <lucide-icon name="eye" class="mr-1" style="width: 14px; height: 14px;" />
              View Detail
            </b-button>
          </template>

          <template #cell(status)="data">
            <b-badge :variant="getStatusBadge(data.item.status)">
              {{ data.item.status.toUpperCase() }}
            </b-badge>
          </template>
        </b-table>
      </b-card>
    </div>
  </div>
</template>

<script>
import NProgress from "nprogress";

export default {
  data() {
    return {
      isLoading: true,
      orders: [],
      fields: [
        { key: 'manufacturing_number', label: 'Order Number', sortable: true },
        { key: 'planned_gold_weight', label: 'Gold Weight (g)', sortable: true },
        { key: 'planned_quantity', label: 'Planned Qty', sortable: true },
        { key: 'completed_quantity', label: 'Completed Qty', sortable: true },
        { key: 'order_date', label: 'Order Date', sortable: true },
        { key: 'status', label: 'Status', sortable: true },
        { key: 'actions', label: 'Actions' }
      ]
    };
  },

  methods: {
    fetchOrders() {
      NProgress.start();
      axios
        .get('manufacturing-orders')
        .then(response => {
          // Standard apiResource index response could be wrapped in data
          this.orders = response.data.data || response.data;
          this.isLoading = false;
          NProgress.done();
        })
        .catch(error => {
          this.isLoading = false;
          NProgress.done();
        });
    },

    getStatusBadge(status) {
      switch (status) {
        case 'completed': return 'success';
        case 'in_progress': return 'warning';
        case 'draft': return 'secondary';
        default: return 'info';
      }
    }
  },

  created() {
    this.fetchOrders();
  }
};
</script>
