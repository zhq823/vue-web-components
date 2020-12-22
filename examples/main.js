import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入packages/index.js, 进行测试
import VueWebComponents from '../packages/index';
Vue.use(VueWebComponents);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
