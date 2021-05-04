import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import BaseButton from "./components/UI/BaseButton";
import BaseSpinner from "./components/UI/BaseSpinner";

const app = createApp(App);

app.component("base-button", BaseButton);
app.component("base-spinner", BaseSpinner);

app.use(router);
app.use(store);
app.mount("#app");
