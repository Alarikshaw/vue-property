<template>
    <div class="practice" v-loading="getLoading">
        这是practice
        <div class="practice-list">
            <ul class="practice-ul">
                <!-- <li class="practice-li" v-for="(item, index) in routerArray" :key="arrayKeys[index]">
                    {{ item.name }}
                </li> -->
                <li v-for="(item, index) in routerArray" :key="index" >
                    <div @click="routerClick(item)">{{ item.name }}</div>
                    <!-- <router-link :to="{path: '/' + item.name, params: {name: item}}">{{item.name}}</router-link> -->
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { RouterRecursion } from './../../utils/whitelist';
import { mapGetters } from "vuex";
export default {
    name: 'practice',
    data() {
        return {
            routerArray: [],
            arrayKeys: [],
            isLoading: false,
        }
    },
    created() {
        this.InitRouter();
    },
    computed: {
        ...mapGetters('router', ['getLoading']),
    },
    methods: {
        InitRouter() {
            this.routerArray = RouterRecursion
        },
        routerClick(data) {
            this.$router.push({
                name:  data.name,
            })
        }
    },
    mounted(){
    }
}
</script>

<style lang="less" scoped>
    .practice {
        width: 100%;
        height: 100%;
    }
    .practice-ul  {
        li > div {
            cursor: pointer;
        }
    }
</style>
