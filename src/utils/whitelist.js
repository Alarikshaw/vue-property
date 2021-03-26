export let RouterList = [
    {
        path: "/init",
        name: 'init',
        component: () =>
            // @ts-ignore
            import('@/view/init/init.vue')
    },
    {
        path: '/practice',
        name: 'practice',
        component: () => {
            // @ts-ignore
            import('@/view/practice/practice.vue')
        }
    }
];