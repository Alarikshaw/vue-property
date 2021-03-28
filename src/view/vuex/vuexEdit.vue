<template>
    <div class="vuexEdit">
        <div>这是{{userInfo.name}}</div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    name: 'vuexEdit',
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