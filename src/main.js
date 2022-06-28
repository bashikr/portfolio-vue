import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
library.add(fab);
createApp(App).component("fa", FontAwesomeIcon).mount("#app");
