import buildModules from "./config/build-modules";
import head from "./config/head";

export default {
  buildModules,
  components: true,
  head,
  css: ["~/assets/styles/main.scss"],
  srcDir: "./src",
};
