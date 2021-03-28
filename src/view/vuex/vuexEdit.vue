<template>
    <div class="vuexEdit">
        <div>名字：{{userInfo.name}}</div>
        <div>年龄：{{userInfo.age}}</div>
        <el-button @click="editNames">名字</el-button>
        <el-button @click="editAges">年龄</el-button>
        <el-button @click="goMenu">vuexPro</el-button>
    </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
    name: 'vuexEdit',
    date() {
        
    },
    computed: {
        ...mapGetters('user', ['userInfo']),
    },
    watch: {
        userInfo(value) {
            console.log('value', value)
        }
    },
    methods: {
        ...mapMutations('user', ['editName', 'editAge']),
        ...mapActions('user', ['updateToken']),
        editNames() {
            // this.editName('更改后的名字');
            this.updateToken('异步修改').then((res) => {
                if (res?.code) {
                    // @ts-ignore
                    const h = this.$createElement;
                    // @ts-ignore
                    this.$message({
                    message: h('p', null, [
                        h('span', null, '姓名成功修改至 '),
                        h('i', { style: 'color: teal' }, res.message)
                    ])
                    });
                }
            })
        },
        editAges() {
            this.editAge(14);
        },
        goMenu() {
            // @ts-ignore
            this.$router.push({
                name:  'vuexPro',
            });
        }
    }

}
</script>