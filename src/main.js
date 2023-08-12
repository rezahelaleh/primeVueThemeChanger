// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext'


const app = createApp(App)

app.component('InputText', InputText)

app.use(router).use(PrimeVue)


app.mount('#app')
