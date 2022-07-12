import loadComponents from "./component";
import loadPlugins from "./plugin";

export default class Core {
  constructor(props) {
    this.props = props;
    this.Vue = props?.Vue;
    this.init();
  }

  init() {
    this.Vue.use(this.install());
  }

  install() {
    return {
      _props: this.props,
      // The install method will be called with the Vue constructor as
      // the first argument, along with possible options
      install(Vue, options) {
        loadComponents(Vue, options, this._props);
        loadPlugins(Vue, options, this._props);
      },
    };
  }
}
