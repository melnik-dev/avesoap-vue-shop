import { createApp } from 'vue'
import App from './App.vue'
import router from "./config/router";
import store from "./config/store";

import './css/index.css'

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
