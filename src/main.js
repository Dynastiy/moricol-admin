import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/css/style.css";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

Vue.config.productionTip = false;

// Plugins
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import { Icon } from "@iconify/vue2";

Vue.component("i-icon", Icon);


import VueToast from 'vue-toast-notification';
// Import one of the available themes

// import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-bootstrap.css';

Vue.use(VueToast);

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

import vSelect from "vue-select";

Vue.component("v-select", vSelect);
import "vue-select/dist/vue-select.css";

import $request from "@/https/axios"
Vue.prototype.$request = $request

import toastify from "toastify-js";
import "toastify-js/src/toastify.css"
Vue.prototype.$toastify = toastify

import { VueEditor } from "vue2-editor";
Vue.component("v-editor", VueEditor);

import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('ApexChart', VueApexCharts)

// Plugins
import filter from '@/plugins/filter'
import primevue from '@/plugins/primevue'
import sweetalert from '@/plugins/sweetalert'
import veeValidate from '@/plugins/vee-validate'

import VueHead from 'vue-head'
Vue.use(VueHead)

new Vue({
  router,
  store,
  filter,
  primevue, 
  sweetalert,
  veeValidate,
  render: (h) => h(App),
}).$mount("#app");
