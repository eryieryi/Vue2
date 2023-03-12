// 引入Vue
import Vue from "vue";
// 引入App
import App from "./App"
//引入store
import store from './store/index'

// 关闭开发提示
Vue.config.productionTip = false
// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    store,
    beforeCreate() {
        Vue.prototype.$bus = this
    },
})