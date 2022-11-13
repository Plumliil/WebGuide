import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./route";
import store from "./store";

console.log("store", store.state);

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
