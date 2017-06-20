/**
 * Created by shangkuikui on 2017/6/19.
 */
import Vue from 'vue'
import App from './App.vue'
import store from './state'
import router from './router/index'

new Vue({
    el: '#app',
    router,
    //store,
    template: '<App/>',
    components: { App }
})
