import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import { router } from './module/routerPro';
import { user } from './module/user';
Vue.use(Vuex);


const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    modules: ['user', 'router']
})
export const store = new Vuex.Store({
    modules: {
        user,
        router
    },
    plugins: [vuexLocal.plugin]
})
