import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/* 
  来个不同版本 vue 的区别

    vue.js与vue.runtime.xxx.js的区别：

      vue.js是完整版的Vue，包含：核心功能+模板解析器。

      vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。
      
      因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数
        接收到的createElement函数去指定具体内容。

*/


new Vue({
  render: h => h(App),
}).$mount('#app')
