<template>
  <div class="pricing-preview-card">
    <div class="pricing-preview-card__header">
      <div>
        <h5 class="pricing-preview-card__title mb-1">Live Pricing Preview</h5>
        <p class="pricing-preview-card__subtitle mb-0 text-muted">
          Uses the shared jewelry pricing endpoint so the form preview stays aligned with saved sales pricing.
        </p>
      </div>
      <b-badge :variant="loading ? 'warning' : 'light'" pill>
        {{ loading ? 'Updating…' : 'Auto refresh' }}
      </b-badge>
    </div>

    <b-alert v-if="emptyStateMessage" show variant="light" class="mb-0 pricing-preview-card__alert">
      {{ emptyStateMessage }}
    </b-alert>

    <template v-else>
      <b-alert v-if="errorMessage" show variant="danger" class="mb-3 pricing-preview-card__alert">
        {{ errorMessage }}
      </b-alert>

      <b-alert v-if="rateMissingWarning" show variant="warning" class="mb-3 pricing-preview-card__alert">
        No active gold rate was found for the selected metal and karat. The preview is using a 0.00 rate until one is configured.
      </b-alert>

      <div v-if="!preview && loading" class="pricing-preview-card__loading text-center py-4">
        <b-spinner small class="mr-2"></b-spinner>
        <span>Calculating pricing preview…</span>
      </div>

      <div v-else-if="preview" class="pricing-preview-card__body">
        <div class="pricing-preview-grid">
          <div class="pricing-preview-row">
            <span class="pricing-preview-row__label">Gold Rate</span>
            <span class="pricing-preview-row__value">{{ formatMoney(preview.gold_rate) }}</span>
          </div>
          <div class="pricing-preview-row">
            <span class="pricing-preview-row__label">Effective Date</span>
            <span class="pricing-preview-row__value">{{ formatDate(preview.gold_rate_effective_at) }}</span>
          </div>
          <div class="pricing-preview-row">
            <span class="pricing-preview-row__label">Metal Weight</span>
            <span class="pricing-preview-row__value">{{ formatWeight(preview.metal_weight) }}</span>
          </div>
          <div class="pricing-preview-row">
            <span class="pricing-preview-row__label">Metal Value</span>
            <span class="pricing-preview-row__value">{{ formatMoney(preview.metal_value) }}</span>
          </div>
          <div class="pricing-preview-row">
            <span class="pricing-preview-row__label">
              Making Charge
              <small v-if="preview.making_charge_type" class="pricing-preview-row__method">({{ makingChargeTypeLabel(preview.making_charge_type) }})</small>
            </span>
            <span class="pricing-preview-row__value">{{ formatMoney(preview.making_charge) }}</span>
          </div>
          <div class="pricing-preview-row">
            <span class="pricing-preview-row__label">Wastage</span>
            <span class="pricing-preview-row__value">{{ formatMoney(preview.wastage) }}</span>
          </div>
          <div class="pricing-preview-row">
            <span class="pricing-preview-row__label">Stone Value</span>
            <span class="pricing-preview-row__value">{{ formatMoney(preview.stone_value) }}</span>
          </div>
          <div class="pricing-preview-row">
            <span class="pricing-preview-row__label">Labor</span>
            <span class="pricing-preview-row__value">{{ formatMoney(preview.labor) }}</span>
          </div>
          <div class="pricing-preview-row">
            <span class="pricing-preview-row__label">Markup</span>
            <span class="pricing-preview-row__value">{{ formatMoney(preview.markup) }}</span>
          </div>
          <div class="pricing-preview-row">
            <span class="pricing-preview-row__label">Discount</span>
            <span class="pricing-preview-row__value">{{ formatMoney(preview.discount) }}</span>
          </div>
          <div class="pricing-preview-row">
            <span class="pricing-preview-row__label">Tax</span>
            <span class="pricing-preview-row__value">{{ formatMoney(preview.tax) }}</span>
          </div>
          <div class="pricing-preview-row pricing-preview-row--base">
            <span class="pricing-preview-row__label">Base Jewelry Value</span>
            <span class="pricing-preview-row__value">{{ formatMoney(preview.base_value) }}</span>
          </div>
        </div>

        <div class="pricing-preview-total mt-3">
          <span class="pricing-preview-total__label">Final Price</span>
          <span class="pricing-preview-total__value">{{ formatMoney(preview.selling_price) }}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "PricingPreview",
  props: {
    productId: {
      type: [Number, String],
      default: null
    },
    productData: {
      type: Object,
      default: () => ({})
    },
    warehouseId: {
      type: [Number, String],
      default: null
    },
    overrides: {
      type: Object,
      default: () => ({})
    },
    currencySymbol: {
      type: String,
      default: ""
    },
    priceDecimals: {
      type: Number,
      default: 2
    },
    debounceMs: {
      type: Number,
      default: 350
    }
  },
  data() {
    return {
      loading: false,
      preview: null,
      errorMessage: "",
      previewTimer: null,
      requestSequence: 0
    };
  },
  computed: {
    normalizedProductId() {
      const direct = this.toNullableInteger(this.productId);
      if (direct !== null) {
        return direct;
      }
      return this.toNullableInteger(this.productData && this.productData.id);
    },
    normalizedWarehouseId() {
      return this.toNullableInteger(this.warehouseId);
    },
    normalizedProductPayload() {
      const product = this.productData || {};
      return {
        id: this.normalizedProductId,
        is_jewelry_item: !!product.is_jewelry_item,
        jewelry_item_type: product.jewelry_item_type || "",
        metal_type_id: this.toNullableInteger(product.metal_type_id),
        karat_id: this.toNullableInteger(product.karat_id),
        jewelry_gross_weight: this.toNullableNumber(product.jewelry_gross_weight),
        jewelry_net_weight: this.toNullableNumber(product.jewelry_net_weight),
        jewelry_metal_weight: this.toNullableNumber(product.jewelry_metal_weight),
        jewelry_weight_uom: product.jewelry_weight_uom || "g",
        making_charge_type: product.making_charge_type || "",
        making_charge_value: this.toNullableNumber(product.making_charge_value),
        wastage_type: product.wastage_type || "",
        wastage_value: this.toNullableNumber(product.wastage_value),
        TaxNet: this.toNullableNumber(product.TaxNet),
        tax_method: product.tax_method || null,
        discount: this.toNullableNumber(product.discount),
        discount_method: product.discount_method || null,
        item_stones: this.normalizeStoneRows(product.item_stones)
      };
    },
    hasDraftProductData() {
      const payload = this.normalizedProductPayload;
      return payload.is_jewelry_item
        || payload.metal_type_id !== null
        || payload.karat_id !== null
        || payload.jewelry_metal_weight !== null
        || payload.jewelry_gross_weight !== null
        || payload.item_stones.length > 0;
    },
    canFetchPreview() {
      if (this.normalizedProductPayload.is_jewelry_item || this.hasDraftProductData) {
        return !!this.normalizedProductPayload.metal_type_id && !!this.normalizedProductPayload.karat_id;
      }
      return this.normalizedProductId !== null;
    },
    emptyStateMessage() {
      if (!this.hasDraftProductData && this.normalizedProductId !== null) {
        return "";
      }

      if (!this.hasDraftProductData && this.normalizedProductId === null) {
        return "Enable Jewelry Item to begin a live pricing preview.";
      }

      if (!this.normalizedProductPayload.metal_type_id) {
        return "Select a metal type to preview pricing.";
      }

      if (!this.normalizedProductPayload.karat_id) {
        return "Select a karat to preview pricing.";
      }

      return "";
    },
    requestPayload() {
      const payload = {
        warehouse_id: this.normalizedWarehouseId,
        overrides: this.normalizeOverrides(this.overrides || {})
      };

      if (this.normalizedProductId !== null) {
        payload.product_id = this.normalizedProductId;
      }

      if (this.hasDraftProductData) {
        payload.product = this.normalizedProductPayload;
      }

      return payload;
    },
    requestSignature() {
      return JSON.stringify(this.requestPayload);
    },
    rateMissingWarning() {
      if (!this.preview) {
        return false;
      }

      const rateId = this.preview.gold_rate_id;
      const rateValue = Number(this.preview.gold_rate || 0);
      return !rateId && rateValue <= 0 && !!this.normalizedProductPayload.metal_type_id && !!this.normalizedProductPayload.karat_id;
    }
  },
  watch: {
    requestSignature: {
      immediate: true,
      handler() {
        this.schedulePreview();
      }
    }
  },
  beforeDestroy() {
    if (this.previewTimer) {
      clearTimeout(this.previewTimer);
      this.previewTimer = null;
    }
  },
  methods: {
    schedulePreview() {
      if (this.previewTimer) {
        clearTimeout(this.previewTimer);
      }

      if (!this.canFetchPreview) {
        this.loading = false;
        this.errorMessage = "";
        this.preview = null;
        return;
      }

      this.previewTimer = setTimeout(() => {
        this.fetchPreview();
      }, this.debounceMs);
    },
    async fetchPreview() {
      const sequence = ++this.requestSequence;
      this.loading = true;
      this.errorMessage = "";

      try {
        const response = await axios.post("pricing/preview", this.requestPayload, {
          meta: { skipErrorRedirect: true }
        });

        if (sequence !== this.requestSequence) {
          return;
        }

        this.preview = response && response.data && response.data.data ? response.data.data : null;
      } catch (error) {
        if (sequence !== this.requestSequence) {
          return;
        }

        this.preview = null;
        this.errorMessage = this.extractErrorMessage(error);
      } finally {
        if (sequence === this.requestSequence) {
          this.loading = false;
        }
      }
    },
    normalizeOverrides(overrides = {}) {
      const cleaned = {};
      Object.keys(overrides).forEach(key => {
        const value = overrides[key];
        if (value === "" || value === null || typeof value === "undefined") {
          return;
        }
        cleaned[key] = value;
      });
      return cleaned;
    },
    normalizeStoneRows(stones) {
      if (!Array.isArray(stones)) {
        return [];
      }

      return stones.map(stone => ({
        stone_type_id: this.toNullableInteger(stone && stone.stone_type_id),
        quantity: this.toNullableNumber(stone && stone.quantity),
        unit_cost_amount: this.toNullableNumber(stone && stone.unit_cost_amount),
        total_cost_amount: this.toNullableNumber(stone && stone.total_cost_amount),
        carat_value: this.toNullableNumber(stone && stone.carat_value)
      }));
    },
    toNullableInteger(value) {
      if (value === "" || value === null || typeof value === "undefined") {
        return null;
      }

      const parsed = Number.parseInt(value, 10);
      return Number.isFinite(parsed) ? parsed : null;
    },
    toNullableNumber(value) {
      if (value === "" || value === null || typeof value === "undefined") {
        return null;
      }

      const parsed = Number(value);
      return Number.isFinite(parsed) ? parsed : null;
    },
    formatMoney(value) {
      const amount = this.toNullableNumber(value) || 0;
      const formatted = amount.toFixed(this.priceDecimals);
      return this.currencySymbol ? `${this.currencySymbol} ${formatted}` : formatted;
    },
    formatWeight(value) {
      const amount = this.toNullableNumber(value) || 0;
      return `${amount.toFixed(3)} ${this.normalizedProductPayload.jewelry_weight_uom || "g"}`;
    },
    makingChargeTypeLabel(type) {
      const labels = {
        fixed: "Fixed",
        per_gram: "Per Gram",
        percentage: "Percentage",
        manual: "Manual",
        formula: "Formula"
      };
      return labels[type] || type;
    },
    formatDate(value) {
      if (!value) {
        return "—";
      }

      const parsed = new Date(value);
      if (Number.isNaN(parsed.getTime())) {
        return value;
      }

      return parsed.toLocaleString();
    },
    extractErrorMessage(error) {
      const payload = error && error.response && error.response.data
        ? error.response.data
        : error;

      if (payload && payload.errors && typeof payload.errors === "object") {
        const firstErrorGroup = Object.values(payload.errors)[0];
        if (Array.isArray(firstErrorGroup) && firstErrorGroup.length) {
          return firstErrorGroup[0];
        }
        if (typeof firstErrorGroup === "string") {
          return firstErrorGroup;
        }
      }

      if (payload && payload.message) {
        return payload.message;
      }

      if (typeof payload === "string" && payload.trim() !== "") {
        return payload;
      }

      return "Unable to generate a pricing preview right now.";
    }
  }
};
</script>

<style scoped>
.pricing-preview-card {
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  background: #fff;
  padding: 1rem;
}

.pricing-preview-card__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.pricing-preview-card__title {
  font-size: 1rem;
  font-weight: 700;
  color: #0f172a;
}

.pricing-preview-card__subtitle {
  font-size: 0.875rem;
  line-height: 1.5;
}

.pricing-preview-card__alert {
  border-radius: 12px;
}

.pricing-preview-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}

.pricing-preview-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.75rem 0.9rem;
  border: 1px solid #eef2f7;
  border-radius: 12px;
  background: #f8fafc;
}

.pricing-preview-row--base {
  grid-column: 1 / -1;
}

.pricing-preview-row__label {
  color: #475569;
  font-size: 0.9rem;
}

.pricing-preview-row__value {
  color: #0f172a;
  font-weight: 600;
  text-align: right;
}

.pricing-preview-total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.1rem;
  border-radius: 14px;
  background: linear-gradient(135deg, #eef2ff 0%, #f5f3ff 100%);
  border: 1px solid rgba(99, 102, 241, 0.15);
}

.pricing-preview-total__label {
  color: #4338ca;
  font-weight: 700;
}

.pricing-preview-total__value {
  color: #312e81;
  font-size: 1.1rem;
  font-weight: 800;
}

body.dark-theme .pricing-preview-card,
body.theme-luxury.dark-theme .pricing-preview-card {
  border-color: rgba(214, 177, 122, 0.16);
  background:
    radial-gradient(circle at top right, rgba(214, 177, 122, 0.08), transparent 38%),
    linear-gradient(180deg, rgba(27, 23, 19, 0.96) 0%, rgba(18, 15, 13, 0.98) 100%);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.22);
}

body.dark-theme .pricing-preview-card__title,
body.theme-luxury.dark-theme .pricing-preview-card__title {
  color: #fbf5ea;
}

body.dark-theme .pricing-preview-card__subtitle,
body.theme-luxury.dark-theme .pricing-preview-card__subtitle {
  color: #bcae9a !important;
}

body.dark-theme .pricing-preview-card .badge-light,
body.theme-luxury.dark-theme .pricing-preview-card .badge-light {
  background: rgba(214, 177, 122, 0.14) !important;
  color: #f0d5a4 !important;
  border: 1px solid rgba(214, 177, 122, 0.18);
}

body.dark-theme .pricing-preview-card .badge-warning,
body.theme-luxury.dark-theme .pricing-preview-card .badge-warning {
  background: rgba(245, 158, 11, 0.16) !important;
  color: #f7d18d !important;
  border: 1px solid rgba(245, 158, 11, 0.18);
}

body.dark-theme .pricing-preview-card__alert,
body.theme-luxury.dark-theme .pricing-preview-card__alert {
  border-color: rgba(214, 177, 122, 0.14);
}

body.dark-theme .pricing-preview-card__alert.alert-light,
body.theme-luxury.dark-theme .pricing-preview-card__alert.alert-light {
  background: rgba(34, 28, 24, 0.92) !important;
  color: #e8dfd0 !important;
}

body.dark-theme .pricing-preview-card__alert.alert-warning,
body.theme-luxury.dark-theme .pricing-preview-card__alert.alert-warning {
  background: rgba(82, 56, 25, 0.35) !important;
  color: #f4deaf !important;
  border-color: rgba(214, 177, 122, 0.22) !important;
}

body.dark-theme .pricing-preview-card__alert.alert-danger,
body.theme-luxury.dark-theme .pricing-preview-card__alert.alert-danger {
  background: rgba(98, 41, 35, 0.34) !important;
  color: #f2c0b8 !important;
  border-color: rgba(209, 123, 112, 0.22) !important;
}

body.dark-theme .pricing-preview-row,
body.theme-luxury.dark-theme .pricing-preview-row {
  background: rgba(36, 30, 24, 0.88);
  border-color: rgba(214, 177, 122, 0.12);
}

body.dark-theme .pricing-preview-row__label,
body.theme-luxury.dark-theme .pricing-preview-row__label {
  color: #cdbfa9;
}

body.dark-theme .pricing-preview-row__method,
body.theme-luxury.dark-theme .pricing-preview-row__method {
  color: #a8957b;
}

body.dark-theme .pricing-preview-row__value,
body.theme-luxury.dark-theme .pricing-preview-row__value {
  color: #fbf5ea;
}

body.dark-theme .pricing-preview-row--base,
body.theme-luxury.dark-theme .pricing-preview-row--base {
  background: rgba(43, 35, 28, 0.94);
}

body.dark-theme .pricing-preview-total,
body.theme-luxury.dark-theme .pricing-preview-total {
  background: linear-gradient(135deg, rgba(214, 177, 122, 0.16) 0%, rgba(69, 51, 31, 0.68) 100%);
  border-color: rgba(214, 177, 122, 0.2);
}

body.dark-theme .pricing-preview-total__label,
body.theme-luxury.dark-theme .pricing-preview-total__label {
  color: #f0d5a4;
}

body.dark-theme .pricing-preview-total__value,
body.theme-luxury.dark-theme .pricing-preview-total__value {
  color: #fbf5ea;
}

@media (max-width: 767.98px) {
  .pricing-preview-card__header,
  .pricing-preview-row,
  .pricing-preview-total {
    flex-direction: column;
    align-items: flex-start;
  }

  .pricing-preview-grid {
    grid-template-columns: 1fr;
  }

  .pricing-preview-row__value,
  .pricing-preview-total__value {
    text-align: left;
  }
}
</style>
