export const router = {
    namespaced: true,
    state: {
        routerLoading: false,
        routerArray: []
    },
    muactions: {
        editRoute(state, list) {
            state.routerArray = list;
        },
        editLoading(state, isSateLoading) {
            state.routerLoading = isSateLoading;
        }
    },
    getters: {
        getRouterPro(state) {
            return state.routerArray;
        },
        getLoading(state) {
            return state.routerLoading
        }
    }

}