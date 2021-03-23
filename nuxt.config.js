import build from "./config/build";
import buildModules from "./config/build-modules";
import head from "./config/head";

export default {
  build,
  buildModules,
  components: true,
  css: ["~/assets/styles/main.scss"],
  head,
  srcDir: "./src",
};
