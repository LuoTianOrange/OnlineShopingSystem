<template>
    <transition name="search-box-body-transition">
        <div class="search-main" v-show="!isBoxClose">
            <!--黑色背景-->
            <div class="search-box-body" @click="CloseSearchBox" @touchmove.prevent v-if="!isBoxClose"></div>
            <div class="search-box-head fff">
                <div class="head-inline">
                    <div class="head-search">
                        <input class="head-search-input head-search-text1" type="text" title="1" placeholder="搜索商品" v-model="searchKeyword">
                        <svg width="25" height="25" viewBox="0 0 48 48" fill="none" class="mx-[20px]">
                            <path
                                d="M33.07 33.071c6.25-6.248 6.25-16.379 0-22.627-6.248-6.249-16.378-6.249-22.627 0-6.248 6.248-6.248 16.379 0 22.627 6.249 6.248 16.38 6.248 22.628 0zm0 0l8.486 8.485"
                                stroke="#162950" stroke-width="4" />
                        </svg>
                    </div>
                    <div @click="CleanInput">
                    <svg width="22" height="22" class="mx-[15px]" viewBox="0 0 48 48" fill="none"
                        xmlns="http://www.w3.org/2000/svg" >
                        <path d="M8 8L40 40" stroke="#333" stroke-width="4" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M8 40L40 8" stroke="#333" stroke-width="4" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg></div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    emits: ["isBoxClose"],
    data() {
        return {
            isBoxClose: true,
            searchKeyword: "",
        };
    },
    methods: {
        CleanInput() {
            this.searchKeyword = "";
        },
        CloseSearchBox() {
            this.isBoxClose = true;
            // this.searchKeyword = "";
        },
        OpenSearchBox() {
            this.isBoxClose = false;
        },
    }
}
</script>

<style scoped>
.search-box-display-none {
    opacity: 0;
}

.search-box-body-transition-enter-active,
.search-box-body-transition-leave-active {
    transition: opacity 0.5s;
}

.search-box-body-transition-enter,
.search-box-body-transition-leave-to {
    opacity: 0;
}

.search-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1001;
}

.search-box-body {
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    transition: opacity 0.5s;
    -webkit-transition: opacity 0.5s;
}

.search-box-body {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.search-box-head {
    margin: 0;
    padding: 0;
    max-width: 100vw;
    width: 100%;
    height: 114px;
    background-color: #f8f8f8;
    z-index: 1001;
}

.head-inline {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    max-width: 748px;
    width: 100%;
}

/*搜索框*/
.head-search {
    border: 1px solid #000;
    border-radius: 2px;
    height: 44px;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #fff;
}

.head-search:hover {
    border: 2px solid #000;
}

.head-search-input {
    width: 100%;
    border: 0;
    outline: none;
    margin: 0 20px;
    background-color: #fff;
}

.head-search-text1 {
    font-size: 1.1rem;

}
</style>