<template>
  <v-app id="default-layout">
    <v-main>
      <slot />
    </v-main>
    <toast />
  </v-app>
</template>

<script>
const toast = () => import("@/common/components/toast.component");

export default {
  name: "defaultLayout",
  components: {
    toast,
  },
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  margin: 0;
}
#default-layout {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
