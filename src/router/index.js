import VueRouter from 'vue-router';
import Vue from 'vue';
import { RouterList } from './../utils/whitelist';
Vue.use(VueRouter)
const route = new VueRouter({
    routes: RouterList
})

export default route;