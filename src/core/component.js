// eslint-disable
export default function loadComponents(Vue, options, props) {
  let { components = false } = props;
  if (typeof components == "boolean" && components)
    registerAll(Vue, options, props);
  if (!!components && components.constructor == Array)
    registerList(Vue, options, props);
  if (!!components && components.constructor == Object)
    registerExceptions(Vue, options, props);
}

function registerAll(Vue) {
  const components = getComponents();

  if (components) {
    components.keys().forEach((filePath) => {
      // Get component config
      const component = components(filePath);

      // Gets the file name regardless of folder depth
      const fileName = getFileName(filePath);

      registerComponnet(Vue, fileName, component);
    });
  }
}

// eslint-disable
function registerList(Vue, options, props) {
  let { components: list } = props;
  const components = getComponents();

  if (components && list?.length) {
    components.keys().forEach((filePath) => {
      // Get component config
      const component = components(filePath);

      // Gets the file name regardless of folder depth
      const fileName = getFileName(filePath);

      if (list.includes(fileName)) registerComponnet(Vue, fileName, component);
    });
  }
}

// eslint-disable
function registerExceptions(Vue, options, props) {
  let list = props?.components?.ignore;
  const components = getComponents();

  if (components) {
    components.keys().forEach((filePath) => {
      // Get component config
      const component = components(filePath);

      // Gets the file name regardless of folder depth
      const fileName = getFileName(filePath);

      if (list.includes(fileName)) return;
      else registerComponnet(Vue, fileName, component);
    });
  }
}

const getComponents = () =>
  require.context(
    // The relative path of the components folder
    "@/common/components/",
    // Whether or not to look in subfolders
    true,
    // The regular expression used to match base component filenames
    /\w+\.(vue|js)$/,
    // optional, 'sync' | 'eager' | 'weak' | 'lazy' | 'lazy-once', default 'sync'\
    // "sync"
    "lazy-once"
  );

const getFileName = (filePath) =>
  filePath
    .split("/")
    .pop()
    .replace(/\.\w+$/, "")
    ?.split(".")?.[0];

const registerComponnet = (Vue, fileName, component) =>
  Vue.component(
    fileName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    () => component.default || component
    // () => import(`${filePath}`)
  );
