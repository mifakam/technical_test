<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
const defaultLayout = "default";

export default {
  name: "LayoutCore",
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout;
      return () => import(`@/layouts/${layout}.layout.vue`);
    },
  },
};
</script>
