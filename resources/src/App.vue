<template>
  <div>
    <!-- Initial app loader: shown immediately after refresh until core data is ready -->
    <div v-if="!Loading" class="initial-loader-overlay">
      <div class="initial-loader-dots">
        <span></span><span></span><span></span>
      </div>
    </div>

    <router-view v-if="Loading" class="app-fade-in"></router-view>

    <!-- Global offline sync fullscreen loader -->
    <div v-if="globalSyncActive" class="global-sync-overlay">
      <div class="global-sync-card">
        <div class="global-sync-spinner"></div>
        <h3 class="global-sync-title">
          {{ $t ? ($t('pos.Syncing_offline_sales') || 'Syncing offline sales') : 'Syncing offline sales' }}
        </h3>
        <p class="global-sync-subtitle">
          {{ $t ? ($t('pos.Syncing_offline_sales_help') || 'Please wait while your offline sales are being synchronized.') : 'Please wait while your offline sales are being synchronized.' }}
        </p>
      </div>
    </div>

    <customizer v-if="show_language && !isPosPage && getCustomizeButtonVisible"></customizer>

    <!-- Global limit-reached modal -->
    <div v-if="limitReachedVisible" class="limit-reached-overlay" @click.self="limitReachedVisible = false">
      <div class="limit-reached-card">
        <div class="limit-reached-icon">
          <svg width="32" height="32" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 9v4m0 4h.01M5.07 19h13.86c1.5 0 2.47-1.6 1.73-2.88L13.73 4.24c-.74-1.28-2.72-1.28-3.46 0L3.34 16.12C2.6 17.4 3.57 19 5.07 19z"/></svg>
        </div>
        <h3 class="limit-reached-title">Plan Limit Reached</h3>
        <p class="limit-reached-message">{{ limitReachedMessage }}</p>
        <div class="limit-reached-actions">
          <button class="limit-reached-btn-upgrade" @click="goToUpgrade">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 19V5m-7 7 7-7 7 7"/></svg>
            Upgrade Plan
          </button>
          <button class="limit-reached-btn-dismiss" @click="limitReachedVisible = false">Dismiss</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      Loading:false,
      globalSyncActive: false,
      limitReachedVisible: false,
      limitReachedMessage: '',
    };
  },
  computed: {
    
    ...mapGetters("config", ["getThemeMode", "getCustomizeButtonVisible"]),
    ...mapGetters(["isAuthenticated","show_language","currentUser"]),
    themeName() {
      return this.getThemeMode.dark ? "dark-theme" : "light-theme";
    },
    rtl() {
      return this.getThemeMode.rtl ? "rtl" : " ";
    },

    isPosPage() {
      const p = String(this.$route.path || '');
      return p === '/app/pos' || p.startsWith('/app/pos_') || p.startsWith('/app/pos/');
    },
    titleTemplate() {
      return `%s | ${this.currentUser?.page_title_suffix || window.__pageTitleSuffix || "Ultimate Inventory With POS"}`;
    }
  },

  metaInfo() {
    return {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: window.__appName || "Stocky",
      titleTemplate: this.titleTemplate,

      bodyAttrs: {
        class: ["theme-luxury", this.themeName, "text-left"]
      },
      htmlAttrs: {
        dir: this.rtl
      },
      
    };
  },

  beforeDestroy() {
    // Clean up listeners
    try {
      if (typeof window !== 'undefined' && window.Fire && window.Fire.$off) {
        window.Fire.$off('offline-sync:start', this.onGlobalSyncStart);
        window.Fire.$off('offline-sync:end', this.onGlobalSyncEnd);
        window.Fire.$off('offline-sync:auto-result', this.onGlobalSyncResult);
        window.Fire.$off('show-limit-reached', this.showLimitReached);
      }
    } catch (e) {}
  },
  methods:{
    ...mapActions([
      "refreshUserPermissions",
    ]),
    async initializeApp() {
      try {
        // Ensure initial permissions and user info are fetched
        await this.refreshUserPermissions(this.$i18n);
      } catch (e) {
        // ignore; guards/interceptors will handle routing on auth errors
      } finally {
        this.Loading = true;
        // Signal that the app rendered initial route and is allowed to hide loader when no pending requests
        if (window) {
          window.__appReadyToHideLoader = true;
          if (typeof window.__hideInitialLoaderIfDone === 'function') {
            window.__hideInitialLoaderIfDone();
          }
        }
      }
    },
    showLimitReached(message) {
      this.limitReachedMessage = message;
      this.limitReachedVisible = true;
    },
    goToUpgrade() {
      this.limitReachedVisible = false;
      this.$router.push('/app/billing/change-plan').catch(() => {});
    },
    onGlobalSyncStart() {
      this.globalSyncActive = true;
    },
    onGlobalSyncEnd() {
      this.globalSyncActive = false;
    },
    onGlobalSyncResult(payload) {
      try {
        const syncedCount = Number(payload && payload.syncedCount || 0);
        const lastError = payload && payload.lastError;
        // If at least one offline sale was synced successfully and there is no error,
        // reload the current page to reflect updated data everywhere – except when
        // the user is on the POS screen with a potentially active cart. In that
        // case, POS itself will decide if/when to reload via its own confirmation
        // flow to avoid disrupting an in‑progress checkout.
        if (syncedCount > 0 && !lastError) {
          const isPosRoute = this.$route &&
            (this.$route.name === 'pos' ||
             String(this.$route.path || '').includes('/app/pos'));
          if (!isPosRoute) {
            if (typeof window !== 'undefined' && window.location && typeof window.location.reload === 'function') {
              window.location.reload();
            }
          }
        }
      } catch (e) {}
    },
  },

  beforeMount() {
    // Replace timeout with awaited initialization
    this.initializeApp();
  },
  
  mounted() {
    // Listen for global offline sync start/end/result events
    try {
      if (typeof window !== 'undefined' && window.Fire && window.Fire.$on) {
        window.Fire.$on('offline-sync:start', this.onGlobalSyncStart);
        window.Fire.$on('offline-sync:end', this.onGlobalSyncEnd);
        window.Fire.$on('offline-sync:auto-result', this.onGlobalSyncResult);
        window.Fire.$on('show-limit-reached', this.showLimitReached);
      }
    } catch (e) {}
  },
};
</script>
<style scoped>
.initial-loader-overlay {
  position: fixed;
  inset: 0;
  background:
    radial-gradient(circle at top, rgba(180, 136, 82, 0.12), transparent 42%),
    linear-gradient(180deg, var(--lux-bg-alt, #f0e7d9), var(--lux-bg, #f5efe4));
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.global-sync-overlay {
  position: fixed;
  inset: 0;
  background: rgba(20, 16, 12, 0.48);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(10px);
}

.initial-loader-dots {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 1rem 1.15rem;
  border-radius: 999px;
  background: rgba(255, 251, 245, 0.72);
  border: 1px solid rgba(96, 74, 48, 0.12);
  box-shadow: 0 18px 38px rgba(58, 36, 16, 0.08);
}

.initial-loader-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--lux-accent, #b48852), var(--lux-accent-strong, #8b622f));
  display: inline-block;
  animation: initial-loader-dots 1.2s ease-in-out infinite;
}

.initial-loader-dots span:nth-child(1) { animation-delay: 0s; }
.initial-loader-dots span:nth-child(2) { animation-delay: 0.15s; }
.initial-loader-dots span:nth-child(3) { animation-delay: 0.3s; }

@keyframes initial-loader-dots {
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40%           { transform: scale(1);   opacity: 1;   }
}

.app-fade-in {
  animation: app-fade-in 0.5s ease-out both;
}

@keyframes app-fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.global-sync-card {
  background: linear-gradient(160deg, rgba(255, 252, 246, 0.94), rgba(247, 239, 225, 0.92));
  border-radius: 24px;
  padding: 28px 34px;
  box-shadow: 0 26px 60px rgba(58, 36, 16, 0.18);
  border: 1px solid rgba(96, 74, 48, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 360px;
  width: 92%;
  text-align: center;
  color: var(--lux-text, #2f261d);
}

.global-sync-spinner {
  width: 42px;
  height: 42px;
  border-radius: 999px;
  border: 3px solid rgba(96, 74, 48, 0.18);
  border-top-color: var(--lux-accent, #b48852);
  animation: global-sync-spin 0.9s linear infinite;
  margin-bottom: 18px;
}

.global-sync-title {
  font-family: 'Source Serif 4', Georgia, serif;
  font-size: 1.18rem;
  font-weight: 600;
  color: var(--lux-heading, #1e170f);
  margin: 0 0 8px;
}

.global-sync-subtitle {
  font-size: 0.9rem;
  color: var(--lux-muted, #746555);
  line-height: 1.6;
  margin: 0;
}

body.dark-theme .global-sync-card {
  background: linear-gradient(160deg, rgba(31, 27, 24, 0.96), rgba(22, 18, 15, 0.96));
  border-color: rgba(230, 214, 185, 0.1);
  color: var(--lux-text, #e8dfd0);
}

body.dark-theme .global-sync-title {
  color: var(--lux-heading, #fbf5ea);
}

body.dark-theme .global-sync-subtitle {
  color: var(--lux-muted, #b8aa95);
}

body.dark-theme .global-sync-spinner {
  border-color: rgba(230, 214, 185, 0.16);
}

@keyframes global-sync-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.limit-reached-overlay {
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(10px);
}

.limit-reached-card {
  background: linear-gradient(160deg, rgba(255, 252, 246, 0.96), rgba(247, 239, 225, 0.94));
  border-radius: 26px;
  max-width: 500px;
  width: 92%;
  padding: 2.4rem;
  text-align: center;
  box-shadow: 0 28px 64px rgba(58, 36, 16, 0.2);
  border: 1px solid rgba(96, 74, 48, 0.12);
}

.limit-reached-icon {
  width: 68px;
  height: 68px;
  border-radius: 22px;
  background: rgba(180, 136, 82, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
}

.limit-reached-title {
  font-family: 'Source Serif 4', Georgia, serif;
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--lux-heading, #1e170f);
  margin: 0 0 0.5rem;
}

.limit-reached-message {
  color: var(--lux-muted, #746555);
  font-size: 0.92rem;
  line-height: 1.6;
  margin: 0 0 1.5rem;
}

.limit-reached-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
}

.limit-reached-btn-upgrade {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.78rem 1.45rem;
  background: linear-gradient(135deg, var(--lux-accent, #b48852), var(--lux-accent-strong, #8b622f));
  color: var(--lux-accent-contrast, #fff9ef);
  border: none;
  border-radius: 14px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: transform 0.2s ease, filter 0.2s ease;
}

.limit-reached-btn-upgrade:hover {
  filter: brightness(1.03);
  transform: translateY(-1px);
}

.limit-reached-btn-dismiss {
  padding: 0.78rem 1.45rem;
  background: rgba(255, 251, 245, 0.84);
  color: var(--lux-text, #2f261d);
  border: 1px solid rgba(96, 74, 48, 0.12);
  border-radius: 14px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;
}

.limit-reached-btn-dismiss:hover {
  background: rgba(180, 136, 82, 0.08);
  transform: translateY(-1px);
}

body.dark-theme .limit-reached-card {
  background: linear-gradient(160deg, rgba(31, 27, 24, 0.98), rgba(22, 18, 15, 0.98));
  border-color: rgba(230, 214, 185, 0.1);
}

body.dark-theme .limit-reached-btn-dismiss {
  background: rgba(35, 29, 24, 0.82);
  border-color: rgba(230, 214, 185, 0.1);
  color: var(--lux-text, #e8dfd0);
}
</style>
