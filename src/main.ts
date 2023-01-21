import { createApp } from "vue";
import App from "./App.vue";

import mitt from "mitt";
import "@/assets/styles/app.scss";

const app = createApp(App);
const emitter = mitt();

app.provide("emitter", emitter);
app.mount("#app");
