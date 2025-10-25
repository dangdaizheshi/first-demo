import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/styles/default.scss'
import { useIntersectionObserver } from '@vueuse/core'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

app.directive('img-lazy', {
    mounted(el, binding) {
        useIntersectionObserver(
            el,
            ([{isIntersecting}]) => {
                el.src = binding.value;
            },
        )
    }
})