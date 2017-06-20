/**
 * Created by shangkuikui on 2017/6/19.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import pageA from '../page/pageA.vue';
import pageB from '../page/pageB.vue';
import pageC from '../page/pageC.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'pageA',
            component: pageA
        },
        {
            path: '/pageb',
            name: 'pageB',
            component: pageB
        },
        {
            path: '/pagec',
            name: 'pageC',
            component: pageC
        }
    ]
})
router.beforeEach((to, from, next) => {
    console.log('我是全局导航钩子',to, from)
    next();
})

export default router