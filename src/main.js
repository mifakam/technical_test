import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import core from "@/core.config";

import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  core,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
