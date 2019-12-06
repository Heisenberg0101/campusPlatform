import "@/static/pc"
import Vue from 'vue'
import App from './App'
import isLock from './components/lock.vue'

Vue.config.productionTip = false

Vue.component('isLock', isLock)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
