<template>
    <div class="body">
        <div class="loginbg"></div>
        <div class="body-main fff">
            <div class="px-[40px] flex flex-row items-center justify-center 
            w-full min-w-[345px] opacity-[0.95] reg-main">
                <!--左侧二维码登录-->
                <div class="w-[300px] h-[400px] p-[40px] bg-white flex flex-col items-center left-QRcode">
                    <div class="flex flex-col items-center">
                        <div class="text1">扫描二维码登录</div>
                        <img :src="qrcode" alt="QR Code" class="w-[250px] max-w-[none] p-[20px] border-r-[1px]" />
                    </div>
                </div>
                <!--右侧密码登录-->
                <div class="w-[500px] h-[400px] py-[40px] bg-white flex flex-col items-center pr-[40px] right-pwd"
                    v-if="OpenReg == false">
                    <div class="text1 my-[10px] login-title">
                        <span class="text1 bluetext">密码登录</span>/<span class="text1" @click="setOpenReg">账号注册</span>
                    </div>
                    <div class="w-full flex justify-center flex-row items-center my-[10px]">
                        <span class="m-[10px]">账号</span>
                        <input class="select-box w-[80%]" type="text" placeholder="请输入UID/用户名" v-model="account">
                    </div>
                    <div class="w-full flex justify-center flex-row items-center relative">
                        <span class="m-[10px]">密码</span>

                        <input class="select-box w-[80%]" :type="btnType" placeholder="请输入密码" v-model="password">
                        <!--密码显隐-->
                        <!-- <el-icon class="right-[40px]" style="position: absolute!important;" @click="changeBtnType1"
                            v-if="btnType == 'text'">
                            <View size="1.3rem" />
                        </el-icon>
                        <el-icon class="right-[40px]" style="position: absolute!important;" @click="changeBtnType2"
                            v-if="btnType == 'password'">
                            <Hide size="1.3rem" />
                        </el-icon> -->
                        <div style="position: absolute;right: 60px;font-weight: 600;">忘记密码?</div>
                    </div>
                    <div class="w-full flex justify-end flex-row items-center my-[20px]">
                        <button class="blackbutton loginbtn regbtn" @click="setOpenReg">注册</button>
                        <button class="blackbutton loginbtn" @click="VerifyLogin(account, password)">登录</button>
                    </div>
                </div>
                <!--右侧密码注册-->
                <div class="w-[500px] h-[400px] py-[40px] bg-white flex flex-col items-center justify-start pr-[40px]"
                    v-if="OpenReg == true">
                    <div class="text1 my-[10px] login-title">
                        <span class="text1" @click="setOpenReg">密码登录</span>/<span class="text1 bluetext">账号注册</span>
                    </div>
                    <div class="w-full flex flex-row items-center justify-end my-[10px]">
                        <span class="m-[10px]">用户名</span>
                        <input class="select-box w-[80%]" type="text" placeholder="请输入用户名">
                    </div>
                    <div class="w-full flex mb-[10px] flex-row items-center justify-end relative">
                        <span class="m-[10px]">密码</span>
                        <!--密码显隐-->
                        <input class="select-box w-[80%]" type="text" placeholder="请输入密码">
                    </div>
                    <div class="w-full flex flex-row items-center justify-end relative">
                        <span class="m-[10px]">验证密码</span>
                        <!--密码显隐-->
                        <input class="select-box w-[80%]" type="text" placeholder="请再次输入密码">
                    </div>
                    <div class="w-full flex justify-end flex-row items-center my-[20px]">
                        <button class="blackbutton w-[80%]">注册</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useQRCode } from '@vueuse/integrations/useQRCode'
import { ref } from 'vue'
import BackGround from '../components/BackGround.vue'

export default {
    props: {
        OpenReg: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
        }
    },
    setup(props) {
        const btnType = ref('password')
        const OpenReg = ref(props.OpenReg)
        const password = ref()
        const account = ref()
        const text = ref('https://blog.csdn.net/qq_36181155/article/details/106311262')
        const qrcode = useQRCode(text, {
            errorCorrectionLevel: 'H',
        })
        return {
            text,
            qrcode,
            btnType,
            OpenReg,
            password,
            account,
        }
    },
    compnent: {
        BackGround
    },
    methods: {
        //更改密码显隐
        changeBtnType1() {
            this.btnType = "password"
        },
        changeBtnType2() {
            this.btnType = "text"
        },
        setOpenReg() {
            this.OpenReg = !this.OpenReg
        },
        //密码验证
        VerifyLogin(account, password) {
            if (account == 123 && password == 123) {
                this.$router.push('/')
                this.isLogin = true
            }
            else if (account == '' || password == '' || password == undefined || account == undefined) {
                alert('账号或密码不能为空')
            }
            else {
                alert("账号或密码错误");
                console.log(account, password);
            }
        }
    },
    beforeDestroy() {
        //清空账号和密码输入框
        this.account = ''
        this.password = ''
    }
}
</script>

<style scoped>
@media screen and (width < 768px) {
    .left-QRcode {
        display: none;
    }

    .right-pwd {
        padding: 40px;
    }

    .reg-main {
        padding: 0;
        margin-top: 40px;
    }
}

.loginbg {
    background: url(https://amashiro.com/wp-content/themes/amashiro_v0/assets/images/pc/index/img_KV.png) 0 center/cover no-repeat;
    background-color: unset;
    position: fixed;
    min-height: 100vh;
    z-index: -1;
    width: 100%;
}

.body {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.body-main {
    min-height: calc(100vh - 280px);
    height: 100%;
    width: 90%;
    max-width: 1000px;
}

.loginbtn {
    width: 40%;
    margin: 0 20px;
    min-width: 80px;
    min-height: 50px;
    padding: inherit;
}

.regbtn {
    background-color: #fff;
    border: 1px solid #797880;
    color: #797880;
    min-width: 80px;
    min-height: 50px;
    padding: inherit;
}

.login-title {
    width: 60%;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
}

.text1 {
    font-size: 1.2rem;
    color: #5c5c5c;
    font-weight: bold;
}

.bluetext {
    color: #66ccff
}</style>