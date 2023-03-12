// 引入Vue
import Vue from "vue";
// 引入App
import App from "./App"

import { Button, Select, Row, Option } from 'element-ui';
Vue.config.productionTip = false

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Row.name, Row);
Vue.component(Option.name, Option);
// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
})