export default function loadPlugins(Vue, options, props) {
  let { plugins = [] } = props;

  if (plugins.length)
    for (let index = 0; index < plugins.length; index++) {
      import(`@/plugins/${plugins[index]}.plugin`)?.then((module) => {
        module?.default(Vue, options);
      });
    }
}
