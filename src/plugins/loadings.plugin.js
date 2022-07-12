import eventBus from "@/core/event";

const loadings = {
  show({ key = "" }) {
    eventBus.emit("show", { key });
    return this;
  },
  hide({ key = "" }) {
    eventBus.emit("hide", { key });
    return this;
  },

  onShow(fn) {
    eventBus.on("show", fn);
    return this;
  },
  onHide(fn) {
    eventBus.on("hide", fn);
    return this;
  },

  destroy(fn) {
    eventBus.off("show", fn);
    eventBus.off("hide", fn);

    return this;
  },
};

export default function (Vue) {
  Vue.prototype.$loadings = loadings;
}

export { loadings };
