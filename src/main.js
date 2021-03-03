import store from './store/index.js';
import router from './router/index.js';
import { createApp } from 'vue';
import App from './App.vue';

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');
