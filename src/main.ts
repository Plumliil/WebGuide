import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./route";
import store from "./store";
import axios from "axios";
console.log("store", store.state);

axios.defaults.baseURL = "http://localhost:3000";
// axios.interceptors.request.use((config) => {
//   config.params = { ...config.params, icode: "xxxxxxxx" };
//   return config;
// });


const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
