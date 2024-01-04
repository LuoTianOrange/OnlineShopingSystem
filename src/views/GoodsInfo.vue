<template>
    <div>
        <!-- 商品查看和商品信息 -->
        <div class="flex justify-center flex-wrap pt-[55px]">
            <!--商品放大镜-->
            <div id="goodsPics">
                <!--当前查看商品图区域-->
                <div id="imgPre" class="relative overflow-hidden" @mouseleave="seeEnd">
                    <div ref="imgPre">
                        <img :src="BigUrl ?? CurrentImage.images" alt="商品图片" class="w-[452px]">
                    </div>
                    <div class="topMask" id="commodityImg" @mouseenter="seeBegin"></div>
                    <!--鼠标放大镜模块-->
                    <div ref="move" v-show="isShow" class="move" :style="cursorMask">
                        <img :src="BigUrl ?? CurrentImage.images" alt="商品图片" class="w-full">
                    </div>
                </div>
                <div class="pt-[15px] flex" v-if="CurrentImage.images && CurrentImage.images.length > 1">
                    <!--图片-->
                    <img v-for="i in CurrentImage.images.split(',')" :key="i" :src="i" alt=""
                        :style="{ 'border-color': i === BigUrl ? '#000' : 'rgb(255,255,255,0)' }"
                        class="w-[120px] h-[120px] object-cover mr-[10px] border-box" @click="changeImg(i)">
                </div>
            </div>
            <!--商品信息-->
            <div class="max-w-[550px] w-full pl-[40px] infobox">
                <span class="goodname">{{ CurrentImage.name }}</span>
                <span class="goodprice">¥{{ CurrentImage.price }}</span>
                <span class="goodamount">库存：{{ CurrentImage.amount }}</span>
                <div class="infobox w-full pt-[50px]">
                    <span class="mb-[5px]" v-if="CurrentImage.size && CurrentImage.size.length > 0">尺寸</span>
                    <select name="size" id="size" class="select-box w-[50%] mb-[5px]"
                        v-if="CurrentImage.size && CurrentImage.size.length > 0">
                        <option v-for="a in CurrentImage.size.split(',')" :value="a" :key="a">
                            {{ a }}
                        </option>
                    </select>
                    <span class="mb-[5px]">个数</span>
                    <div class="flex flex-row w-full">
                        <input type="number" v-model.number="buynumber" id="" class="select-box w-[15%]"
                            style="border-radius: 0 !important;">
                        <div class="w-[22px] h-[44px] bg-white">
                            <button class="fff w-[22px] h-[22px] plus" @click="addNumber()" id="add">+</button>
                            <button class="fff w-[22px] h-[22px] sub" @click="subNumber()" id="sub">-</button>
                        </div>
                    </div>
                    <button id="btn1" class="select-box w-[100%] mt-[30px] joincar" @click="commitCart">添加购物车</button>
                    <button class="payment w-[100%] mt-[10px]">使用支付宝结算</button>
                </div>
                <div class="describe">
                    <div v-for="i in CurrentImage.describes.split(',')" :key="i.index" class="mb-[40px]">
                        <span >{{ i }}<br></span>
                    </div>
                </div>
            </div>
        </div>
        <!--添加购物车提示框-->
        <AddSCPBox ref="SearchBoxRef" :buynumber="freezeBuyNumber" :name="CurrentImage.name"
            :photo="CurrentImage?.images"></AddSCPBox>
        <!--随机显示商品-->
        <div></div>
    </div>
</template>

<script>
import AddSCPBox from "@/components/AddSCPBox.vue";
import { ref } from 'vue';
import Cart from './Cart.vue';
import throttle from 'lodash/throttle';
import { useStore } from 'vuex'
import axios from 'axios'
const handleMouseMoveFn = throttle(function (e, ew, eh, cursorMask) {
    let moveX = parseInt((900 - ew) * (e.offsetX / ew))
    let moveY = parseInt((900 - eh) * (e.offsetY / eh))
    cursorMask.transform = `translate(-${moveX}px, -${moveY}px)`
}, 50)

export default {
    data() {
        return {
            isShow: 0,
            CurrentImage: {...{}},
            image: this.$store.state.image,
            BigUrl: null, 
            currentImgId: 1,
            cursorMask: {
                display: "none",
                transform: "translate(0px, 0px)",
            },
            magnifier: {
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                position: "fixed",
                display: "none",
            },
        }
    },
    components: {
        AddSCPBox, Cart
    },
    computed: {
        isLogin() { return this.$store.state.isLogin },
        image() { return this.$store.state.image },
    },
    created() {
        // let currentItemIndex = 0
        // this.$store.state.image.some((v, i) => {
        //     if (v.name == this.$route.params.no) {
        //         currentItemIndex = i
        //         return true
        //     }
        // })
        // this.$store.commit("setItemIndex", currentItemIndex)
        // console.log('CurrentImage.images:',CurrentImage.images);
        const id = this.$route.params.no;
        axios.get(`http://localhost:8080/goods/getById?goodId=${id}`)
            .then((response) => {
                console.log(response.data);
                this.CurrentImage = response.data;
            })
    },
    methods: {
        seeEnd() {
            //鼠标移出原图区域时，清空相关信息
            this.left = 0;
            this.top = 0;
            this.isShow = 0;
            this.cursorMask.display = "none";
            let element = document.getElementById("commodityImg")
            element.onmousemove = null;
        },
        seeBegin() {
            this.isShow = 1;
            this.cursorMask.display = "block";
            // console.log("isShow = " + this.isShow);
            let element = document.getElementById("commodityImg")
            let ew = element.offsetWidth, eh = element.offsetHeight;
            element.onmousemove = (e) => handleMouseMoveFn(e, ew, eh, this.cursorMask)
        },
        addNumber() {
            return this.buynumber++
        },
        subNumber() {
            return this.buynumber--
        },
        //检测输入框是否小于0
        checkNumber() {
            if (this.buynumber < 1) {
                this.buynumber = 1;
                alert("数量不能小于0")
                return this.buynumber
            }
        },
        resetBuynumber() {
            this.buynumber = 1;
        },
        stopbtn() {
            if (this.buynumber <= 1) {
                document.getElementById("btn1").disabled = true;
            }
        },
        changeImg(Url) {
            this.BigUrl = Url;
        },
        commitBuynumber() {
            this.$store.commit('setbuynumber')
        },
        //推送商品到Cart数组
        commitCart() {
            if (this.isLogin == true) {
                this.freezeBuyNumber += this.buynumber;
                this.$store.commit('addCart', { goods: this.CurrentImage, count: this.freezeBuyNumber })
                this.$refs.SearchBoxRef.OpenSearchBox()
            }
            else if (this.isLogin == false) {
                this.$router.push('/userlogin')
            } else {
                alert("发生错误")
            }
        },

    },
    destroyed() {
        return this.buynumber = 1;
    },
    setup() {
        const buynumber = ref(1);
        const freezeBuyNumber = ref(0);
        const SearchBoxRef = ref(null);
        const OpenSearchBox = () => {
            freezeBuyNumber.value += buynumber.value;
            SearchBoxRef.value.OpenSearchBox()
        }

        return {
            buynumber,
            SearchBoxRef,
            freezeBuyNumber,
            OpenSearchBox,
        }
    },
    watch: {
        buynumber: {
            handler: "checkNumber",
            immediate: true
        }
    }

}
</script>

<style scoped>
.border-box {
    border: 3px solid;
}

.infobox {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}

#page {
    position: relative;
    height: 700px;
    width: 1246px;
    left: 19.3%;
    top: 111px;
    background-color: aqua;
}

/*商品图*/
#goodsPics {
    width: 452px;
    height: 626px;
    /* background-color: #7c7c; */
    position: relative;
}

/*鼠标查看区域 —— 也即需要放大局部放大查看的区域*/
.move {
    position: absolute;
    /*初始定位*/
    left: 0;
    top: 0;
    width: 900px;
    height: 900px;
    cursor: move;
    background: rgba(142, 223, 255, 0.407);
}

.topMask {

    /*覆盖在放大图的原图表面上的一个遮罩层*/
    width: 452px;
    height: 454px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
}

select {
    /* -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none; */
    background-position: right center;
    background-image: var(--svg-select-icon);
    background-repeat: no-repeat;
    background-position: right 10px center;
    line-height: 1.2;
    text-indent: .01px;
    cursor: pointer;
    padding: 8px 28px 8px 15px;
}


.goodname {
    font-size: 2.2rem;
}

.goodprice {
    font-size: 1.4rem;
    color: #5c5c5c;
    font-weight: bold;
}

.goodamount {
    font-size: 1rem;
    color: #5c5c5c;
}

.payment {
    border: none;
    background-color: #1677ff;
    height: 44px;
    border-radius: 2px;
    padding: 10px;
    font-size: 1.1rem;
    line-height: 22px;
    color: #fff;
    font-weight: bold;
}

.describe {
    margin-top: 60px;
    font-size: 1.3rem;
    font-weight: bold;
    color: #6d6d6d;
    font-family: 'tangyuan';
}

.plus {
    border-top: 1px solid #909090;
    border-right: 1px solid #909090;
    border-bottom: 1px solid #909090;
}

.sub {
    border-right: 1px solid #909090;
    border-bottom: 1px solid #909090;
}

.joincar {
    font-size: 1.1rem;
    color: #797880;
    font-weight: bold;
    line-height: 22px;
}
</style>