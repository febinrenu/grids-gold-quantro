const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',

  // Scope Tailwind to the storefront only — admin stays on Bootstrap 4.
  content: [
    './resources/views/store/**/*.blade.php',
    './resources/views/layouts/store.blade.php',
    './resources/src/storefront.js',
    './resources/src/storefront/**/*.js',
  ],

  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '1.5rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1320px',
      },
    },

    extend: {
      colors: {
        bg: {
          base: 'rgb(var(--color-bg-base) / <alpha-value>)',
          surface: 'rgb(var(--color-bg-surface) / <alpha-value>)',
          elevated: 'rgb(var(--color-bg-elevated) / <alpha-value>)',
          muted: 'rgb(var(--color-bg-muted) / <alpha-value>)',
        },
        line: {
          subtle: 'rgb(var(--color-border-subtle) / <alpha-value>)',
          strong: 'rgb(var(--color-border-strong) / <alpha-value>)',
        },
        fg: {
          primary: 'rgb(var(--color-fg-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-fg-secondary) / <alpha-value>)',
          muted: 'rgb(var(--color-fg-muted) / <alpha-value>)',
        },
        accent: {
          400: 'rgb(var(--color-accent-400) / <alpha-value>)',
          500: 'rgb(var(--color-accent-500) / <alpha-value>)',
          600: 'rgb(var(--color-accent-600) / <alpha-value>)',
        },
        success: 'rgb(var(--color-success) / <alpha-value>)',
        warning: 'rgb(var(--color-warning) / <alpha-value>)',
        danger: 'rgb(var(--color-danger)  / <alpha-value>)',
        info: 'rgb(var(--color-info)    / <alpha-value>)',

        'badge-deal': 'rgb(var(--color-badge-deal)   / <alpha-value>)',
        'badge-new': 'rgb(var(--color-badge-new)    / <alpha-value>)',
        'badge-refurb': 'rgb(var(--color-badge-refurb) / <alpha-value>)',

        // Theme: Lumiere
        'lm-primary': '#C8B084',
        'lm-secondary': '#EAE6DF',
        'lm-bg': '#FDFCF9',
        'lm-surface': '#FFFFFF',
        'lm-text': '#1A1A1A',
        'lm-border': '#EAE6DF',

        // Theme: Obsidian
        'ob-primary': '#B08D5B',
        'ob-secondary': '#1E1E1E',
        'ob-bg': '#0A0A0A',
        'ob-surface': '#121212',
        'ob-text': '#F5F5F5',
        'ob-border': '#333333',

        // Theme: Radiance
        'rad-bg': '#0B0F19',
        'rad-surface': '#131B2C',
        'rad-textMuted': '#94A3B8',
        'rad-text': '#F8FAFC',
        'rad-accent1': '#F59E0B',
        'rad-accent2': '#10B981',
        'rad-accent3': '#3B82F6',
        'rad-border': '#E5E7EB',

        // Theme: Vintage
        'vt-bg': '#F4ECE0',
        'vt-surface': '#FAF6F0',
        'vt-primary': '#8B5A2B',
        'vt-secondary': '#D2B48C',
        'vt-text': '#3E2723',
        'vt-border': '#D7CCC8',

        // Theme: Minimal
        'mn-bg': '#FFFFFF',
        'mn-text': '#000000',
        'mn-muted': '#9CA3AF',
        'mn-border': '#E5E7EB',

        // Theme: Nova
        'nv-bg': '#0F172A',
        'nv-surface': '#1E293B',
        'nv-primary': '#3B82F6',
        'nv-secondary': '#64748B',
        'nv-accent': '#14B8A6',
        'nv-text': '#F8FAFC',
        'nv-border': '#334155',

        // Theme: Velvet
        'vv-bg': '#31102A',
        'vv-surface': '#4A1940',
        'vv-primary': '#FFC107',
        'vv-secondary': '#E91E63',
        'vv-text': '#FFFFFF',
        'vv-textMuted': '#F8BBD0',
        'vv-border': '#880E4F',

        // Theme: Prism
        'pr-bg': '#F3F4F6',
        'pr-primary': '#8A4FFF',
        'pr-secondary': '#FF007F',
        'pr-tertiary': '#00F0FF',
        'pr-text': '#111827',
        'pr-textMuted': '#4B5563',
        'pr-border': '#D1D5DB',
      },

      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },

      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
      },

      borderRadius: {
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },

      boxShadow: {
        sm: '0 1px 2px rgba(0,0,0,0.4)',
        md: '0 4px 12px rgba(0,0,0,0.45)',
        lg: '0 12px 32px rgba(0,0,0,0.55)',
        glow: '0 0 0 3px var(--color-accent-glow)',
        edge: '0 0 0 1px rgba(255,255,255,0.04)',
      },

      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },

      transitionDuration: {
        fast: '120ms',
        base: '180ms',
        slow: '280ms',
      },

      ringColor: {
        DEFAULT: 'rgb(var(--color-accent-500) / 0.5)',
      },

      ringOffsetColor: {
        DEFAULT: 'rgb(var(--color-bg-base))',
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms')({ strategy: 'class' }),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],

};
