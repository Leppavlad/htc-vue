import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "simplebar";
import "simplebar/dist/simplebar.css";

import BaseButton from "./components/UI/BaseButton";
import BaseSpinner from "./components/UI/BaseSpinner";
import BaseModal from "./components/UI/BaseModal";
import BaseForm from "./components/UI/BaseForm";
import BaseCheckbox from "./components/UI/BaseCheckbox";

const app = createApp(App);

app.component("base-button", BaseButton);
app.component("base-spinner", BaseSpinner);
app.component("base-modal", BaseModal);
app.component("base-form", BaseForm);
app.component("base-checkbox", BaseCheckbox);

app.use(router);
app.use(store);
app.mount("#app");
