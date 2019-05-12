import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import articleList from './component/article/articleList.vue'
import articleView from './component/article/articleView.vue'

Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
			name: 'home',
            component: articleList,
            alias: '/home'
        },
		{
		    path: '/article/:id',
			name: 'article',
		    component: articleView,
		}
    ]
});
new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})