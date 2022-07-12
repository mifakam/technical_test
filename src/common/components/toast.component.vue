<template>
  <div class="toast">
    <div
      v-for="(toast, index) in toasts"
      :key="index"
      :class="{
        toast__content: true,
        'toast__content--success': toast.color == 'success',
        'toast__content--error': toast.color == 'error',
        'toast__content--warning': toast.color == 'warning',
      }"
    >
      {{ toast.message }}
    </div>
  </div>
</template>

<script>
export default {
  name:'toastComponent',
  data: () => ({
    toasts: [],
  }),

  created() {
    this.$toast.onMessage(this.onMessage);
  },

  beforeUnmount() {
    this.$toast.destroy(this.onMessage);
  },

  methods: {
    onMessage({ message = "", color = "" }) {
      let id = Math.random()
        .toString(16)
        .slice(2);

      let toast = {
        id,
        message,
        color,
      };
      this.toasts.push(toast);
      setTimeout(() => {
        this.toasts = this.toasts.filter((item) => item.id != id);
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
.toast {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;

  &__content {
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: 0.0178571429em;
    line-height: 1.25rem;
    text-align: right;

    margin: 8px;
    padding: 14px 16px;
    max-width: 672px;
    min-height: 48px;
    min-width: 300px;

    color: #fff;
    background-color: #333;
    border-radius: 4px;
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14),
      0 9px 46px 8px rgba(0, 0, 0, 0.12);

    transition-duration: 0.15s;
    transition-property: all;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);

    &--success {
      background-color: #4caf50;
    }
    &--error {
      background-color: #d32f2f;
    }
    &--warning {
      background-color: #f57c00;
    }
  }
}
</style>
