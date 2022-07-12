<template>
  <v-app id="home-layout">
    <Header />
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script>
const Header = () => import("@/common/components/header.component");

export default {
  name: "home-layout",
  components: { Header },
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  margin: 0;
}
#home-layout {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
