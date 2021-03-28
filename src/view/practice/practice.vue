<template>
    <div class="practice">
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
import { mapGetters, mapMutations, mapActions } from "vuex";
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
        ...mapGetters('router', ['getLoading', 'getRouterPro']),
    },
    methods: {
        ...mapMutations('router', ['editRoute', 'editLoading']),
        ...mapActions('router', ['asyncLoading']),
        InitRouter() {
            // @ts-ignore
            this.routerArray = RouterRecursion
        },
        routerClick(data) {
            let childrenArray = [...data.children];
            // for (let item of childrenArray) {
            //     item.component = item.component.toString();
            // }
            this.editRoute(childrenArray)
            // @ts-ignore
            this.$router.push({
                name:  data.name,
            });
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
