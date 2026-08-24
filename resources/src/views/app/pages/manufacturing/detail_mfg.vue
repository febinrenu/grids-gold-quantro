<template>
  <div class="main-content">
    <breadcumb :page="'Manufacturing Order Details'" :folder="'Manufacturing'"/>

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>
    <div v-else>
      <!-- Back Button -->
      <b-row class="mb-4">
        <b-col md="12">
          <b-button variant="secondary" :to="{ name: 'ManufacturingOrders' }">
            <lucide-icon name="chevron-left" class="mr-1" style="width: 16px; height: 16px;" />
            Back to List
          </b-button>
        </b-col>
      </b-row>

      <!-- Order Metadata -->
      <b-row class="mb-4">
        <b-col md="12">
          <b-card :title="'Order: ' + order.manufacturing_number">
            <b-row>
              <b-col md="3" sm="6">
                <strong>Product:</strong>
                <div>{{ order.product ? order.product.name : 'N/A' }}</div>
              </b-col>
              <b-col md="3" sm="6">
                <strong>Planned Quantity:</strong>
                <div>{{ order.planned_quantity }}</div>
              </b-col>
              <b-col md="3" sm="6">
                <strong>Order Date:</strong>
                <div>{{ order.order_date }}</div>
              </b-col>
              <b-col md="3" sm="6">
                <strong>Overall Status:</strong>
                <div>
                  <b-badge :variant="getStatusBadge(order.status)">
                    {{ order.status.toUpperCase() }}
                  </b-badge>
                </div>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>

      <!-- Stages Timeline -->
      <h4 class="mb-3">Production Stages Timeline</h4>
      <b-row>
        <b-col md="12">
          <div class="stages-timeline">
            <b-card v-for="stage in stages" :key="stage.id" class="mb-3 shadow-sm border-left-info">
              <b-row class="align-items-center">
                <!-- Sequence & Name -->
                <b-col md="3" sm="12">
                  <div class="d-flex align-items-center">
                    <span class="badge badge-primary badge-pill mr-2" style="font-size: 1.1rem; width: 30px; height: 30px; display: inline-flex; align-items: center; justify-content: center;">
                      {{ stage.sequence }}
                    </span>
                    <h5 class="m-0 font-weight-bold text-dark">{{ stage.stage_name }}</h5>
                  </div>
                  <div class="text-muted mt-1 small">
                    Status:
                    <b-badge :variant="getStatusBadge(stage.status)">
                      {{ stage.status.toUpperCase() }}
                    </b-badge>
                  </div>
                </b-col>

                <!-- Worker Assignment -->
                <b-col md="3" sm="12" class="mt-2 mt-md-0">
                  <label class="small text-muted m-0 d-block">Assigned Worker</label>
                  <b-form-select
                    v-model="stage.assigned_employee_id"
                    :options="employees"
                    value-field="id"
                    text-field="name"
                    @change="assignWorker(stage)"
                    :disabled="stage.status === 'completed'"
                    class="mt-1"
                  >
                    <template #first>
                      <b-form-select-option :value="null">-- Unassigned --</b-form-select-option>
                    </template>
                  </b-form-select>
                </b-col>

                <!-- Status Update Controls -->
                <b-col md="3" sm="12" class="mt-2 mt-md-0 text-md-center">
                  <label class="small text-muted m-0 d-block">Stage Actions</label>
                  <div class="d-flex justify-content-md-center gap-2 mt-1">
                    <b-button
                      v-if="stage.status === 'pending' || stage.status === 'rejected'"
                      variant="warning"
                      size="sm"
                      @click="updateStageStatus(stage, 'in_progress')"
                    >
                      Start Stage
                    </b-button>
                    <b-button
                      v-if="stage.status === 'in_progress'"
                      variant="success"
                      size="sm"
                      @click="updateStageStatus(stage, 'completed')"
                    >
                      Complete
                    </b-button>
                    <b-button
                      v-if="stage.status === 'in_progress'"
                      variant="danger"
                      size="sm"
                      @click="updateStageStatus(stage, 'rejected')"
                    >
                      Reject
                    </b-button>
                    <span v-if="stage.status === 'completed'" class="text-success small font-weight-bold">
                      <lucide-icon name="check" class="mr-1" />Completed
                    </span>
                  </div>
                </b-col>

                <!-- Timer Controls -->
                <b-col md="3" sm="12" class="mt-2 mt-md-0 text-right">
                  <div v-if="stage.status === 'in_progress' && stage.assigned_employee_id">
                    <label class="small text-muted m-0 d-block">Worker Timer</label>
                    <div class="mt-1">
                      <b-button
                        v-if="!hasActiveTimer(stage)"
                        variant="outline-primary"
                        size="sm"
                        @click="startTimer(stage)"
                      >
                        <lucide-icon name="play" class="mr-1" style="width: 12px; height: 12px;" />
                        Start Timer
                      </b-button>
                      <b-button
                        v-else
                        variant="danger"
                        size="sm"
                        @click="stopTimer(stage)"
                      >
                        <lucide-icon name="square" class="mr-1" style="width: 12px; height: 12px;" />
                        Stop Timer
                      </b-button>
                    </div>
                  </div>
                </b-col>
              </b-row>

              <!-- Completed Time Logs / Labor Cost Summary -->
              <div v-if="stage.time_logs && stage.time_logs.length > 0" class="mt-3 border-top pt-2">
                <h6 class="text-muted small font-weight-bold mb-2">Stage Time Logs & Labor Cost</h6>
                <table class="table table-sm table-borderless m-0 small">
                  <thead>
                    <tr class="text-muted border-bottom">
                      <th>Worker</th>
                      <th>Started At</th>
                      <th>Ended At</th>
                      <th>Duration</th>
                      <th class="text-right">Labor Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="log in stage.time_logs" :key="log.id">
                      <td>{{ log.employee ? log.employee.firstname + ' ' + log.employee.lastname : 'Unknown' }}</td>
                      <td>{{ formatDateTime(log.started_at) }}</td>
                      <td>{{ log.ended_at ? formatDateTime(log.ended_at) : 'RUNNING...' }}</td>
                      <td>{{ log.duration_seconds ? formatDuration(log.duration_seconds) : '-' }}</td>
                      <td class="text-right font-weight-bold text-dark">
                        {{ log.labor_cost != null ? '$' + log.labor_cost : '-' }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import NProgress from "nprogress";

export default {
  data() {
    return {
      isLoading: true,
      order: {},
      stages: [],
      employees: []
    };
  },

  methods: {
    fetchDetails() {
      const id = this.$route.params.id;
      NProgress.start();

      axios.get('manufacturing-orders/' + id)
        .then(response => {
          this.order = response.data.data || response.data;

          // Fetch stages
          return axios.get('manufacturing-orders/' + id + '/stages');
        })
        .then(response => {
          this.stages = response.data;

          // Fetch employees for select dropdown
          return axios.get('employees?limit=-1');
        })
        .then(response => {
          // Standard resource lists return data array or straight array
          const rawList = response.data.data || response.data;
          this.employees = rawList.map(e => ({
            id: e.id,
            name: (e.firstname + ' ' + e.lastname).trim() || e.username
          }));

          this.isLoading = false;
          NProgress.done();
        })
        .catch(error => {
          this.isLoading = false;
          NProgress.done();
        });
    },

    assignWorker(stage) {
      const id = this.$route.params.id;
      NProgress.start();
      axios.post(`manufacturing-orders/${id}/stages/${stage.id}/assign`, {
        employee_id: stage.assigned_employee_id
      })
        .then(response => {
          this.makeToast('success', 'Worker successfully assigned.', 'Success');
          this.fetchDetails();
        })
        .catch(error => {
          this.makeToast('danger', error.response?.data?.message || 'Assignment failed.', 'Error');
          this.fetchDetails();
        });
    },

    updateStageStatus(stage, status) {
      const id = this.$route.params.id;
      NProgress.start();
      axios.post(`manufacturing-orders/${id}/stages/${stage.id}/status`, {
        status: status
      })
        .then(response => {
          this.makeToast('success', `Stage updated to ${status}.`, 'Success');
          this.fetchDetails();
        })
        .catch(error => {
          this.makeToast('danger', error.response?.data?.message || 'Failed to update status.', 'Error');
          this.fetchDetails();
        });
    },

    startTimer(stage) {
      const id = this.$route.params.id;
      NProgress.start();
      axios.post(`manufacturing-orders/${id}/stages/${stage.id}/timer/start`)
        .then(response => {
          this.makeToast('success', 'Timer started.', 'Success');
          this.fetchDetails();
        })
        .catch(error => {
          this.makeToast('danger', error.response?.data?.message || 'Failed to start timer.', 'Error');
          this.fetchDetails();
        });
    },

    stopTimer(stage) {
      const id = this.$route.params.id;
      NProgress.start();
      axios.post(`manufacturing-orders/${id}/stages/${stage.id}/timer/stop`)
        .then(response => {
          this.makeToast('success', 'Timer stopped and labor cost calculated.', 'Success');
          this.fetchDetails();
        })
        .catch(error => {
          this.makeToast('danger', error.response?.data?.message || 'Failed to stop timer.', 'Error');
          this.fetchDetails();
        });
    },

    hasActiveTimer(stage) {
      if (!stage.time_logs) return false;
      return stage.time_logs.some(log => log.ended_at === null);
    },

    getStatusBadge(status) {
      switch (status) {
        case 'completed': return 'success';
        case 'in_progress': return 'warning';
        case 'rejected': return 'danger';
        case 'pending': return 'secondary';
        case 'draft': return 'secondary';
        default: return 'info';
      }
    },

    formatDateTime(dateTimeStr) {
      if (!dateTimeStr) return '';
      const d = new Date(dateTimeStr);
      return d.toLocaleString();
    },

    formatDuration(seconds) {
      if (!seconds) return '0s';
      const h = Math.floor(seconds / 3600);
      const m = Math.floor((seconds % 3600) / 60);
      const s = seconds % 60;
      let res = '';
      if (h > 0) res += h + 'h ';
      if (m > 0) res += m + 'm ';
      if (s > 0 || res === '') res += s + 's';
      return res.trim();
    },

    makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    }
  },

  created() {
    this.fetchDetails();
  }
};
</script>

<style scoped>
.stages-timeline {
  display: flex;
  flex-direction: column;
}
.gap-2 {
  gap: 0.5rem;
}
</style>
