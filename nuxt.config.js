import build from "./config/build";
import buildModules from "./config/build-modules";
import head from "./config/head";
import modules from "./config/modules";

export default {
  build,
  buildModules,
  components: true,
  css: ["~/assets/styles/main.scss"],
  head,
  modules,
  srcDir: "./src",
};
