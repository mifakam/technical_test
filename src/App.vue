<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script>
const Layout = () => import("@/core/Layout.vue");

export default {
  components: { Layout },
};
</script>
