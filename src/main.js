import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/styles/default.scss'

import { getC } from './apis/test'
getC().then((res) => {
  console.log(res);
});

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
