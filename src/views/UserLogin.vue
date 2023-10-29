<template>
    <div class="body">
        <div class="loginbg"></div>
        <div class="body-main fff">
            <div class="px-[40px] flex flex-row items-center justify-center w-full min-w-[345px] opacity-[0.9]">
                <div class="w-[300px] h-[400px] p-[40px] bg-white flex flex-col items-center">
                    <div class="flex flex-col items-center">
                        <div class="text1">扫描二维码登录</div>
                        <img :src="qrcode" alt="QR Code" class="w-[250px] max-w-[none] p-[20px] border-r-[1px]" />
                    </div>
                </div>
                <div class="w-[500px] h-[400px] py-[40px] bg-white flex flex-col items-center pr-[40px]">
                    <div class="text1 my-[10px]">密码登录</div>
                    <div class="w-full flex justify-center flex-row items-center my-[10px]">
                        <span class="m-[10px]">账号</span>
                        <input class="select-box w-[80%]" type="text" placeholder="请输入账号">
                    </div>
                    <div class="w-full flex justify-center flex-row items-center">
                        <span class="m-[10px]">密码</span>
                        <input class="select-box w-[80%]" type="text" placeholder="请输入密码">
                    </div>
                    <div class="w-full flex justify-end flex-row items-center my-[20px]">
                        <button class="blackbutton loginbtn regbtn">注册</button>
                        <button class="blackbutton loginbtn">登录</button>
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
    setup() {
        const text = ref('https://vueuse.org')
        const qrcode = useQRCode(text, {
            errorCorrectionLevel: 'H',
        })
        return {
            text,
            qrcode,
        }
    },
    compnent: {
        BackGround
    }
}
</script>

<style scoped>
.loginbg{
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
}

.regbtn {
    background-color: #fff;
    border: 1px solid #797880;
    color: #797880;
    min-width: 80px;
    min-height: 50px;
}

.text1 {
    font-size: 1.2rem;
    color: #5c5c5c;
    font-weight: bold;
}</style>