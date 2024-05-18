// View Router
import { createApp } from 'vue'
import App from './App.vue'
import router from './rooter'
import store from './common/store'

// Bootstrap Components
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Bootstrap Icon
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

