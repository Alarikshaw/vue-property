<template>
    <div class="vuexPro">
        <div class="header">
            <div>名字：{{userInfo.name}}</div>
            <div>年龄：{{userInfo.age}}</div>
        </div>
        <div class="proform">
            <el-form class="elform">
                <el-form-item>
                    <el-input
                        placeholder="请输入姓名"
                        v-model="userNames"
                        clearable>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-input
                        placeholder="请输入年龄"
                        v-model="useAges"
                        clearable>
                    </el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="button">
            <el-button @click="goMenu">vuexEdit</el-button>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
    name: 'vuexPro',
    date() {
        
    },
    computed: {
        ...mapGetters('user', ['userInfo']),
        userNames: {
            get() {
                return this.userInfo.name;
            },
            set(value) {
                this.editName(value)
            }
        },
        useAges: {
            get() {
                return this.userInfo.age;
            },
            set(value) {
                this.editAge(value)
            }
        }
    },
    methods: {
        ...mapMutations('user', ['editName', 'editAge']),
        goMenu() {
            // @ts-ignore
            this.$router.push({
                name:  'vuexEdit',
            });
        }
    }

}
</script>

<style lang="less" scoped>
    .vuexPro {
        .proform {
            display: flex;
            justify-content: center;
            .elform {
                width: 180px;
            }
        }
    }
</style>