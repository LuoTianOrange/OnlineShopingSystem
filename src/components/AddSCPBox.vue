<template>
    <!--AddShoppingCartpromBox 添加购物车提示框-->
    <transition name="prom-box-main-transition">
        <div class="prom-box-main" v-show="!isBoxClose">
            <div class="prom-box-head plainText">
                <div>已添加到购物车</div>
                <div @click="CloseSearchBox">
                    <svg width="22" height="22" class="mx-[15px]" viewBox="0 0 48 48" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8L40 40" stroke="#333" stroke-width="4" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M8 40L40 8" stroke="#333" stroke-width="4" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <div class="prom-box-item">
                <div class="prom-img">
                    <img :src="photo" alt="">
                </div>
                <div class="flex">
                    <div class="prom-goods-name">{{ name }}</div>
                    <div class="prom-count plainText">数量:&nbsp;{{ this.buynumber }}</div>
                </div>
            </div>
            <button class="select-box w-[100%] prom-watchcar" style="background: #f8f8f8;">
                <router-link to="/Cart" class="w-[100%]">
                    查看购物车({{ Cart.length }})
                </router-link>
            </button>
            <div class="prom-box-foot plainText">
                <button class="foot-button" @click="CloseSearchBox">继续购物</button>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    emits: ["isBoxClose"],
    props: {
        buynumber: {
            type: Number,
            default: 0
        },
        name: {
            type: String,
            default: ''
        },
        photo: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            isBoxClose: true,
            Cart:this.$store.state.cart,
        };
    },
    computed: {
        ...mapState(['Cartcount']),
    },
    methods: {
        OpenSearchBox() {
            this.isBoxClose = false;
            setTimeout(() => {
                this.isBoxClose = true;
            }, 10000);
        },

        CloseSearchBox() {
            this.isBoxClose = true;
        },
    },

}
</script>

<style scoped>
.prom-box-main-transition-enter-active,
.prom-box-main-transition-leave-active {
    transition: transform 1s;
}

.prom-box-main-transition-enter-from,
.prom-box-main-transition-leave-to {
    transform: translateY(-300px) !important;
}


@media screen and (width < 768px) {
    .prom-box-main {
        max-width: auto;
    }
}

@media screen and (width >= 768px) {
    .prom-box-main {
        max-width: 400px;
    }
}

.prom-box-main {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background: #f8f8f8;
    z-index: 20;
    width: 100%;
    min-height: 200px;
    max-height: fit-content;
    padding: 0 25px 20px 25px;
    border: 1px solid #e5e5e5;
    box-shadow: 1px 1px 10px 2px rgba(228, 228, 228, 0.5);
    transform: translateY(0);
}

.prom-box-head {
    border-bottom: 1px solid #e5e5e5;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
}

.prom-img {
    min-width: 60px;
    min-height: 60px;
    max-width: 60px;
    max-height: 60px;
    object-fit: cover;
    overflow: hidden;
    margin-right: 20px;
}

.prom-box-item {
    display: flex;
    margin: 20px 0;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
}

.prom-count {
    margin-left: 10px;
    min-width: 60px;
    white-space: nowrap;
}

.prom-goods-name {
    font-size: 1.3rem;
    font-weight: 600;
    color: #162950;
    line-height: 25px;
}

.prom-watchcar {
    font-size: 1.1rem;
    color: #797880;
    line-height: 22px;
    font-family: 'tangyuan';
}

.prom-box-foot {
    text-align: center;
    margin-top: 10px;
}

.foot-button {
    border-bottom: 1px solid #797880;
}
</style>