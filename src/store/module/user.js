export const user = {
    namespaced: true,
    state: {
        name: '123',
        age: 0,
        userInfo: {
            uuid: "",
            nickName: "",
            headerImg: "",
            authority: "",
        },
        token: '',
    },
    mutations: {
        addAge(state) {
            state.age++;
        },
        editAge(state, age) {
            state.age = age;
        },
        removeAge(state) {
            state.age = '';
        },
        editName(state, name) {
            state.name = name;
        },
        removeName(state) {
            state.name = ''
        }
    },
    actions: {
        updateToken(context, name) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    // context.commit('editAge', data?.edit);
                    context.commit('editName', name);
                    resolve({
                        message: '异步修改',
                        code: 1
                    })
                }, 2000)
            })
        }
    },
    getters: {
        userInfo(state) {
            return state
        }
    },
}