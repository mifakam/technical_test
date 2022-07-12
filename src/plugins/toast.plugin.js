import eventBus from "@/core/event";

const toast = {
  showMessage({ message = "", color = "" }) {
    eventBus.emit("showMessage", { message, color });

    return this;
  },

  onMessage(fn) {
    eventBus.on("showMessage", fn);

    return this;
  },

  destroy(fn) {
    eventBus.off("showMessage", fn);

    return this;
  },
};

export default function (Vue) {
  Vue.prototype.$toast = toast;
}

export { toast };
