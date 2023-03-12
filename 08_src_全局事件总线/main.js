// 引入Vue
import Vue from "vue";
// 引入App
import App from "./App"

// 关闭开发提示
Vue.config.productionTip = false

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this// 安装全局事件总线 $bus就是vm，使之可以调用$on $off $emit方法
    },
})