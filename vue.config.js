const isProd = process.env.NODE_ENV === "production";

module.exports = {
  publicPath: isProd ? "/public/" : "/",
  transpileDependencies: ["vuetify"],
  // Is the source map generated for the production environment build?
  productionSourceMap: false,

  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  },
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    proxy: {
      "/app": {
        target: "http://192.168.5.62:8080",
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
