import Vue from "vue";
import core from "@/core";
import router from "./router";

// -------NOTE-------
// all properties can be a type of boolean or array or object
// example:
// components: true              register all components
// components: ["toast"]         register a list of component
// components: {
//   ignore: ["toast"],
// }                             register all components except ignore list

// -------Default values-------
// components: false,
// directives: false,
// filters: false,
// mixins: false,
// middleware: [],
// plugins: [],

export default new core({
  Vue,
  router,
  components: true,
  plugins: ["axios"],
});
