<template>
    <div class="mt-[20px] mx-[30px]">
        <span class="plainText font-[1.6rem!important]">我的信息</span>
    </div>
    <div class="flex flex-col justify-start px-[20px]">
        <!--头像-->
        <div class="infobox flex items-center mt-[40px]">
            <div class="flex items-center">
                <div class="mx-[20px] plainText">当前头像</div>
                <div @mouseenter="changeHeadon" @mouseleave="changeHeadoff" class="relative user-header">
                    <img src="https://album.biliimg.com/bfs/new_dyn/d3c594ffb826c533506ce49ebda4721b32256434.png"
                        class="user-header">
                    <div v-if="isCover == true" class="replace-avatar" @click="gotoUpload">修改头像</div>
                </div>
            </div>
        </div>
        <!--用户名和昵称-->
        <div class="infobox flex items-start flex-col justify-center">
            <div class="flex items-center">
                <div class="mx-[20px] my-[10px] plainText">UID:</div>
                <div>{{ uid }}</div>
            </div>
            <div class="flex items-center">
                <div class="mx-[20px] my-[10px] plainText">当前昵称</div>
                <input class="select-box" type="text" :value="username" placeholder="你的昵称" />
            </div>
        </div>
        <!--性别-->
        <div class="infobox flex items-center">
            <div class="flex items-center">
                <div class="mx-[20px] plainText">性别</div>
                <el-radio-group v-model="radio">
                    <el-radio :label="1">男</el-radio>
                    <el-radio :label="2">女</el-radio>
                    <el-radio :label="3">保密</el-radio>
                </el-radio-group>
            </div>
        </div>
        <!--修改密码-->
        <div class="infobox flex items-start flex-col justify-center">
            <div class="flex items-center">
                <div class="mx-[20px] my-[10px] plainText">修改密码</div>
                <input class="select-box ml-[20px]" type="text" v-model="newpwd" placeholder="输入新的密码" />
                <input class="select-box ml-[20px]" type="text" v-model="renewpwd" placeholder="再次输入密码" />
            </div>
        </div>
        <!--保存按钮-->
        <div class="botton-infobox flex items-center flex-col justify-center">
            <button class="blackbutton w-[120px]">保存</button>
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue'

const isCover = ref(false)
const newpwd = ref('')
const renewpwd = ref('')
const myinfo = ref({
    uid: '',
    username: '',
    //因为数据库没有字段这个默认设置为1
    radio: 1,

})
import axios from 'axios'
export default {
    name: 'myinfo',
    setup() {
        return {
            isCover, myinfo, newpwd, renewpwd
        }
    },
    methods: {
        changeHeadon() {
            isCover.value = true
            console.log('changeHeadon');
        },
        changeHeadoff() {
            isCover.value = false
        },
        gotoUpload() {
            this.$router.push('Upload')
        },
    },
    mounted() {
        axios.get(`/user/getUserByUid`)
            .then((response) => {
                console.log(response.data);
                // this.$set(this.myinfo,'uid',response.data.uid)
                // this.$set(this.myinfo,'username',response.data.username)
                this.myinfo.uid = response.data.uid
                this.myinfo.username = response.data.username
                console.log(myinfo.value);
            })
    },
    computed:{
        
    }
}

</script>

<style scoped>
.infobox {
    width: 100%;
    min-height: 160px;
    background-color: #fafafa;
    border-bottom: 1px solid #cacaca;
    padding: 10px 20px;
}

.botton-infobox {
    width: 100%;
    min-height: 160px;
    background-color: #fafafa;
    padding: 10px 0;
}

.user-header {
    width: 100px;
    height: 100px;
    object-fit: cover;
    overflow: hidden;
    border-radius: 50%;
}

.replace-avatar {
    width: 100px;
    height: 40px;
    position: absolute;
    bottom: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #7c7c7c;
    opacity: .8;
    color: #fff;
    padding: 3px 0;
}
</style>