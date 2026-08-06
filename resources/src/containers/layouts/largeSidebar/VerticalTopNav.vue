<template>
  <div class="vertical-top-nav luxury-header-shell">
    <div class="nav-left">
      <button @click="toggleSidebar" class="menu-toggle" type="button" aria-label="Toggle menu">
        <lucide-icon name="menu" />
      </button>

      <div class="header-context d-none d-lg-flex">
        <div class="header-context__copy">
          <span class="header-context__eyebrow">{{ headerContextEyebrow }}</span>
          <strong class="header-context__title">{{ headerContextTitle }}</strong>
        </div>
      </div>
    </div>

    <div class="nav-right">
      <router-link
        v-if="currentUserPermissions && currentUserPermissions.includes('Pos_view')"
        class="btn btn-primary btn-sm header-pos-btn"
        to="/app/pos"
      >
        <lucide-icon name="shopping-cart" />
        <span class="btn-text">POS</span>
      </router-link>

      <div class="header-actions-cluster">
        <button
          class="nav-icon-btn header-action-btn"
          @click="toggleDarkMode"
          :title="getThemeMode.dark ? 'Switch to light mode' : 'Switch to dark mode'"
          :aria-label="getThemeMode.dark ? 'Switch to light mode' : 'Switch to dark mode'"
          type="button"
        >
          <lucide-icon :name="getThemeMode.dark ? 'sun' : 'moon'" />
        </button>

        <button class="nav-icon-btn header-action-btn fullscreen-btn" @click="handleFullScreen" title="Fullscreen" aria-label="Toggle fullscreen" type="button">
          <lucide-icon name="maximize" />
        </button>

        <div class="dropdown header-dropdown header-language-dropdown" v-if="show_language">
          <b-dropdown id="lang-dd" right toggle-class="dropdown-toggle-no-caret header-action-btn" no-caret>
            <template slot="button-content">
              <lucide-icon name="globe" />
            </template>
            <vue-perfect-scrollbar
              :settings="{ suppressScrollX: true, wheelPropagation: false }"
              class="dropdown-scroll"
            >
              <div class="lang-menu">
                <a
                  v-for="lang in getAvailableLanguages"
                  :key="lang.locale"
                  @click="SetLocal(lang.locale)"
                  class="lang-item"
                >
                  <img :src="`/flags/${lang.flag}`" :alt="lang.name" class="flag-icon" />
                  <span>{{ lang.name }}</span>
                </a>
              </div>
            </vue-perfect-scrollbar>
          </b-dropdown>
        </div>

        <div class="dropdown header-dropdown">
          <b-dropdown id="notif-dd" right toggle-class="dropdown-toggle-no-caret header-action-btn header-notification-toggle" no-caret>
            <template slot="button-content">
              <span class="badge badge-primary" v-if="notifs_alert > 0">{{ notificationBadgeText }}</span>
              <lucide-icon name="bell" />
            </template>
            <vue-perfect-scrollbar
              :settings="{ suppressScrollX: true, wheelPropagation: false }"
              class="dropdown-scroll"
            >
              <div class="notification-item" v-if="notifs_alert > 0">
                <div class="notif-icon">
                  <lucide-icon class="text-primary" name="bell" />
                </div>
                <div class="notif-content" v-if="currentUserPermissions && currentUserPermissions.includes('Reports_quantity_alerts')">
                  <router-link tag="a" to="/app/reports/quantity_alerts">
                    <p>{{ notifs_alert }} {{ $t('ProductQuantityAlerts') }}</p>
                  </router-link>
                </div>
              </div>
            </vue-perfect-scrollbar>
          </b-dropdown>
        </div>

        <div class="dropdown header-dropdown">
          <b-dropdown id="user-dd" right toggle-class="user-dropdown-toggle header-avatar-toggle" no-caret variant="link">
            <template slot="button-content">
              <div class="user-avatar">
                <img v-if="currentUser && currentUser.avatar" :src="$imgUrl('avatar', currentUser.avatar)" alt="user" />
                <img v-else :src="$imgUrl('avatar', 'no_avatar.png')" alt="user" />
              </div>
            </template>
            <div class="user-dropdown-menu">
              <div class="dropdown-header">
                <lucide-icon class="mr-1" name="lock" />
                <span v-if="currentUser">{{ currentUser.username }}</span>
              </div>
              <router-link to="/app/profile" class="dropdown-item">
                {{ $t('profil') }}
              </router-link>
              <router-link
                v-if="currentUserPermissions && currentUserPermissions.includes('setting_system')"
                to="/app/settings/System_settings"
                class="dropdown-item"
              >
                {{ $t('Settings') }}
              </router-link>
              <a class="dropdown-item" href="#" @click.prevent="logoutUser">
                {{ $t('logout') }}
              </a>
            </div>
          </b-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Util from "./../../../utils";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "VerticalTopNav",

  computed: {
    ...mapGetters([
      "currentUser",
      "currentUserPermissions",
      "notifs_alert",
      "show_language",
      "getAvailableLanguages"
    ]),
    ...mapGetters("config", ["getThemeMode"]),
    headerContextEyebrow() {
      return (this.currentUser && (this.currentUser.company || this.currentUser.username)) || (window.__appName || 'Workspace');
    },
    headerContextTitle() {
      const raw = (this.$route && ((this.$route.meta && (this.$route.meta.title || this.$route.meta.pageTitle)) || this.$route.name)) || 'Operations Workspace';
      return String(raw)
        .replace(/[\-_]+/g, ' ')
        .replace(/\b\w/g, (m) => m.toUpperCase());
    },
    notificationBadgeText() {
      const count = Number(this.notifs_alert || 0);
      if (count <= 0) return '';
      return count > 9 ? '9+' : String(count);
    }
  },

  methods: {
    ...mapActions(["logout"]),
    ...mapActions("config", ["changeThemeMode"]),

    SetLocal(locale) {
      this.$i18n.locale = locale;
      this.$store.dispatch("setLanguage", locale);
      Fire.$emit("ChangeLanguage");
      window.location.reload();
    },

    handleFullScreen() {
      Util.toggleFullScreen();
    },

    toggleDarkMode() {
      this.changeThemeMode();
    },

    logoutUser() {
      this.logout();
    },

    toggleSidebar() {
      Fire.$emit("toggleVerticalSidebar");
    }
  }
};
</script>

<style scoped>
.nav-left,
.nav-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-left {
  flex: 1 1 auto;
  min-width: 0;
}

.header-context {
  min-width: 0;
  margin-left: 0;
}

.header-context__copy {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.header-context__eyebrow {
  color: var(--lux-accent-strong, #8b622f);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.header-context__title {
  color: var(--lux-heading, #1e170f);
  font-family: 'Source Serif 4', Georgia, serif;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: -0.03em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.header-actions-cluster {
  display: flex;
  align-items: center;
  gap: 10px;
}

.menu-toggle {
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
}

.btn-text {
  font-weight: 700;
}

.nav-icon-btn,
.user-dropdown-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.user-dropdown-toggle {
  padding: 0;
  background: transparent;
  border: none;
}

.user-avatar {
  width: 44px;
  height: 44px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.22s ease, opacity 0.22s ease;
  border-radius: 16px;
}

.user-avatar:hover {
  transform: translateY(-1px);
  opacity: 0.92;
}

.user-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
}

.dropdown-scroll {
  max-height: 320px;
  overflow-y: auto;
}

.lang-menu,
.user-dropdown-menu {
  padding: 0.55rem;
}

.lang-item,
.dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.8rem 0.95rem;
  border-radius: 14px;
  text-decoration: none;
  transition: transform 0.2s ease, background 0.2s ease;
}

.lang-item:hover,
.dropdown-item:hover {
  transform: translateX(2px);
}

.flag-icon {
  width: 22px;
  height: 22px;
  border-radius: 999px;
  object-fit: cover;
}

.notification-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 1rem;
}

.notif-icon {
  font-size: 1.2rem;
  line-height: 1;
  flex-shrink: 0;
}

.notif-content {
  flex: 1;
}

.notif-content p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.55;
}

.notif-content a {
  text-decoration: none;
  display: block;
}

.dropdown-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.95rem 1rem 0.7rem;
  font-weight: 700;
}

@media (max-width: 768px) {
  .fullscreen-btn {
    display: none !important;
  }

  .btn-text {
    display: none;
  }

  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 14px;
  }
}
</style>
