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
    muactions: {
        addAge(state) {
            state.age++;
        },
        edit(state, age) {
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
        updateToken(context, data) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    context.commit('edit', data?.edit);
                    context.commit('editName', data?.name);
                    resolve({
                        message: '修改过了',
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
    }

}