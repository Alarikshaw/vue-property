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
    {
        path: '/nodeList',
        name: 'nodeList',
        component: () =>
            // @ts-ignore
            import('@/view/nodeList/nodeList.vue')
    },
    {
        path: '/singlyLinkedList',
        name: 'singlyLinkedList',
        component: () =>
            // @ts-ignore
            import('@/view/nodeList/singlyLinkedList.vue')
    },
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
                component: '@/view/vuex/vuexEdit.vue'
            },
            {
                id: 'vuexPro',
                parent: 'vuex',
                path: '/vuexPro',
                name: 'vuexPro',
                component: '@/view/vuex/vuexPro.vue'
            }
        ]
    },
    {
        d: 'nodeList',
        path: '/nodeList',
        name: 'nodeList',
        children: [
            {
                id: 'singlyLinkedList',
                parent: 'nodeList',
                path: "/singlyLinkedList",
                name: 'singlyLinkedList',
                component: '@/view/nodeList/singlyLinkedList.vue'
            },
        ]
    }
    
];

