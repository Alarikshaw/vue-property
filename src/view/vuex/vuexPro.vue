<template>
    <div class="vuexPro">
        <div>这是{{userInfo.name}}</div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    name: 'vuexPro',
    date() {
        
    },
    computed: {
        ...mapGetters('user', ['userInfo']),
    },
    methods: {
        loadMore() {
            this.$$store.commit('editName')
        }
    }

}
</script>