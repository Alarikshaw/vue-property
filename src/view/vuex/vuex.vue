<template>
    <div class="property-vuex">
        <div v-for="(item, index) of routerList" :key="index">
            <router-link :to="item.path">{{ item.name }}</router-link>
            <!-- <keep-alive>
                <component :is="item.component"></component>
            </keep-alive> -->
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    name: 'vuex',
    data() {
        return {
            routerList: []
        }
    },
    computed: {
        ...mapGetters('router', ['getLoading', 'getRouterPro']),
    },
    mounted() {
        this.processingData();
    },
    methods: {
        processingData() {
            this.routerList = [...this.getRouterPro]
            for (let item of this.routerList) {
                item.component = () => import(item.component)
            }
            console.log('routerList', this.routerList)
        }
    }
}
</script>
<style lang="less" scoped>
    .property-vuex {
        display: flex;
        justify-content: space-around;
    }
</style>