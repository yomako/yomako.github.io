import { createApp } from 'vue'
import App from './App.vue'
import VueKonva from 'vue-konva';
import router from './router'


const app = createApp(App);
app.use(VueKonva)
    .use(router);
app.mount('#app');