export const router = {
    namespaced: true,
    state: {
        routerLoading: false,
        routerArray: []
    },
    mutations: {
        editRoute(state, list) {
            state.routerArray = list;
        },
        editLoading(state, isSateLoading) {
            state.routerLoading = isSateLoading;
        }
    },
    actions: {
        asyncLoading(context, isLoad) {
            context.commit('editLoading', isLoad)
        }
    },
    getters: {
        getRouterPro(state) {
            return state.routerArray;
        },
        getLoading(state) {
            return state.routerLoading
        }
    },
}