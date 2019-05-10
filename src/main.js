import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import articleList from './component/articleList.vue'
Vue.use(ElementUI);
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/articleList',
        component: articleList
    }]
});
new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})