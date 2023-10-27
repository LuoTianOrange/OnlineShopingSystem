<template>
    <div>
        <!-- 商品查看和商品信息 -->
        <div class="flex justify-center flex-wrap pt-[55px]">
            <!--商品放大镜-->
            <div id="goodsPics">
                <!--当前查看商品图区域-->
                <div id="imgPre" class="relative overflow-hidden" @mouseleave="seeEnd">

                    <div ref="imgPre">
                        <img :src="CurrentImage.image" alt="商品图片" class="w-[452px]">
                    </div>
                    <div class="topMask" @mouseenter="seeBegin" @mousemove="move"></div>
                    <!--鼠标放大镜模块-->
                    <div ref="move" v-show="isShow" class="move" :style="cursorMask">
                        <img :src="CurrentImage.image" alt="商品图片" class="w-full">
                    </div>
                </div>
                <div class="pt-[10px] flex" v-if="CurrentImage.images && CurrentImage.images.length > 1">
                    <!--图片-->
                    <!-- commit：每次页面渲染时都会调用一次getNewIndex() -->
                    <img v-for="i in CurrentImage.images" :key="i.Imgid" :src="i.Url" alt=""
                        class="w-[112px] h-[112px] object-cover mr-[10px] border-2 border-black">
                </div>
            </div>
            <!--商品信息-->
            <div class="max-w-[550px] w-full pl-[40px] infobox">
                <span class="goodname">{{ CurrentImage.name }}</span>
                <span class="goodprice">¥{{ CurrentImage.price }}</span>
                <div class="infobox w-full pt-[50px]">
                    <span class="mb-[5px]" v-if="CurrentImage.size && CurrentImage.size.length > 0">尺寸</span>
                    <select name="size" id="size" class="select-box w-[50%] mb-[5px]"
                        v-if="CurrentImage.size && CurrentImage.size.length > 0">
                        <option v-for="a in CurrentImage.size" :value="a.Option" :key="a.No">
                            {{ a.Option }}
                        </option>
                    </select>
                    <span class="mb-[5px]">个数</span>
                    <div class="flex flex-row w-full">
                        <input type="text" v-model="buynumber" id="" class="select-box w-[15%]"
                            style="border-radius: 0 !important;">
                        <div class="w-[22px] h-[44px] bg-white">
                            <button class="fff w-[22px] h-[22px] plus" @click="addNumber()">+</button>
                            <button class="fff w-[22px] h-[22px] sub" @click="subNumber()">-</button>
                        </div>
                    </div>
                    <button class="select-box w-[100%] mt-[30px] joincar" @click="OpenSearchBox">添加购物车</button>
                    <button class="payment w-[100%] mt-[10px]">使用支付宝结算</button>
                </div>
                <div class="describe">
                    ※商品画像はイメージです。実際のものとは若干異なる場合がございます。<br>
                    ※お客様がご利用の画面の設定及び特性により、実際のアイテムと比較し色味に若干の誤差が生じる場合がございます。予めご了承ください。<br>
                    ※注文内容や商品状態等により注文の取消し・返品をお受けできない場合がございます。<br>
                    ※同時決済された商品は一括配送されます。他の商品と同時購入される際はご注意ください。<br>
                </div>
            </div>
        </div>
        <!--添加购物车提示框-->
        <AddSCPBox ref="SearchBoxRef" :buynumber="buynumber"></AddSCPBox>
        <!--随机显示商品-->
        <div></div>
    </div>
</template>

<script>
import AddSCPBox from "@/components/AddSCPBox.vue";
import { ref } from 'vue';
import Cart from './Cart.vue';
export default {
    data() {
        return {
            buynumber: 1,
            image: this.$store.state.image,
            cursorMask: {
                display: "none",
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
        CurrentImage() {
            return this.$store.state.image[this.$store.state.itemIndex ?? 0];
        },

    },
    created() {
        let currentItemIndex = 0
        this.$store.state.image.some((v, i) => {
            if (v.name == this.$route.params.no) {
                currentItemIndex = i
                return true
            }
        })
        this.$store.commit("setItemIndex", currentItemIndex)
    },
    methods: {
        seeEnd() {
            //鼠标移出原图区域时，清空相关信息
            this.Bigurl = "";
            this.left = 0;
            this.top = 0;
            this.isShow = 0;
            this.cursorMask.display = "none";
            console.log("isShow = " + this.isShow);
        },
        seeBegin() {
            this.isShow = 1;
            this.cursorMask.display = "block";
            console.log("isShow = " + this.isShow);
        },
        addNumber() {
            return this.buynumber++
        },
        subNumber() {
            var i = this.buynumber - 1;
            if (i < 0) {
                i = 0
            }
            this.buynumber = i;
            return this.buynumber
        },
        resetBuynumber() {
            this.buynumber = 1;
        }
    },
    destroyed() {
        return this.buynumber = 1;
    },
    setup() {
        const SearchBoxRef = ref(null);

        const OpenSearchBox = () => {
            SearchBoxRef.value.OpenSearchBox()
        }

        return {
            SearchBoxRef,
            OpenSearchBox,
        }
    }

}
</script>

<style scoped>
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
    font-size: 1rem;
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