export let RouterList = [
    {
        path: '/practice',
        name: 'practice',
        component: () =>
            // @ts-ignore
            import('@/view/practice/practice.vue')
    },
    {
        path: '/vuex',
        name: 'vuex',
        component: () =>
            // @ts-ignore
            import('@/view/vuex/vuex.vue')
    },
    {
        path: '/vuexEdit',
        name: 'vuexEdit',
        component: () =>
            // @ts-ignore
            import('@/view/vuex/vuexEdit.vue')
    },
    {
        path: '/vuexPro',
        name: 'vuexPro',
        component: () =>
            // @ts-ignore
            import('@/view/vuex/vuexPro.vue')
    },
    // {
    //     path: '/vuexPro',
    //     name: 'vuexPro',
    //     component: () => {
    //         // @ts-ignore
    //         import('@/view/vuex/vuexPro.vue')
    //     }
    // }
];
export let RouterRecursion = [
    {
        id: 'vuex',
        path: '/vuex',
        name: 'vuex',
        children: [
            {
                id: 'vuexEdit',
                parent: 'vuex',
                path: "/vuexEdit",
                name: 'vuexEdit',
            },
            {
                id: 'vuexPro',
                parent: 'vuex',
                path: '/vuexPro',
                name: 'vuexPro',
            }
        ]
    },
    
];

