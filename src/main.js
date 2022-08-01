import { createApp } from "vue";
import App from "./App.vue";
import Widget from "./components/ui/Widget.vue";
import WidgetTitle from "./components/ui/WidgetTitle.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import router from "./router.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);
app.component("widget", Widget);
app.component("widget-title", WidgetTitle);
app.component("base-button", BaseButton);
app.use(router);

app.mount("#app");
