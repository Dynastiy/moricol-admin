import Vue from 'vue'
import PrimeVue from 'primevue/config';

Vue.use(PrimeVue);

// Components 

// Chart 
import Chart from 'primevue/chart';
Vue.component('BarChart', Chart);

// InputText
import InputText from 'primevue/inputtext';
Vue.component('InputText', InputText);

export default PrimeVue
