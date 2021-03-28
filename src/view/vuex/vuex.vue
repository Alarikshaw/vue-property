<template>
    <div class="vuex">
        <div class="router-link1">
            <router-link to="/vuexEdit">vuexEdit</router-link>
        </div>
        <div class="router-link1">
            <router-link to="/vuexPro">vuexPro</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'vuex',
    data() {
        return {
            routerList: []
        }
    },
    mounted() {
    }
}
</script>