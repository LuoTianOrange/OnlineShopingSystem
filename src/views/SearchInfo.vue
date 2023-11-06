<template>
    <!--主页-->
    <div class="body">
        <!--搜索展示-->
        <div id="new-items" class="main-box w-full">
            <div style="font-size: 2rem;" class="text-center">有关于{{ 1 }}个关于「{{ skw }}」的搜素结果</div>
            <input type="text" class="select-box w-full max-w-[800px] mt-[20px] mb-[60px]">
            <div class="new-item-box w-full">
                <!--搜索结果box-->
                <div class="flex flex-row justify-between w-full min-h-[100px] bbl2 mb-[10px] pb-[10px]"
                    v-for="(i, index) in image.slice(0, 4)" :key="i.index" :data-index="index">
                    <div class="flex flex-row items-center px-[20px]">
                        <img :src="i.image" class="w-[100px] h-[100px] object-cover my-[20px]" :alt="i.name" />
                        <div class="searchfont goodsname ml-[40px]">{{ i.name }}</div>
                    </div>
                    <div class="fff searchfont goodsprice">
                        ¥{{ i.price }}
                    </div>
                </div>
            </div>
            <!--分页-->
            <el-pagination background layout="prev, pager, next" :total="image.length" class="flex justify-center"
                @current-change="changePage" :page-count="Math.ceil(image.length / 12)" />
        </div>
    </div>
</template>
  
<script>

export default {
    props:{
    },
    data() {
        return {
            skw: this.$store.state.searchKey,
            image: this.$store.state.image,
            hover: false,
            itemw1: 360,
            img1: 0,
            img2: 12,
            currentpage: 1,
        }
    },
    components: {
    },
    methods: {
        changePage(page) {
            this.currentpage = page
            this.img1 = 12 * (this.currentpage - 1),
                this.img2 = 12 * this.currentpage
            window.scrollTo(0, 0)
        },
        setKeyword(keyword){
            this.searchKeyword = keyword
        }
    },
    computed: {

    }
}
</script>
  
<style scoped>
.bbl2 {
    border-bottom: 1px solid #e4e4e4;
}

.body {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.photo-1 {
    overflow: hidden;
    width: 100%;
    height: 475px;
    object-fit: cover;
    margin-bottom: 60px;
}

.main-box {
    margin-top: 60px;
    min-height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.new-item {
    font-size: 1.3rem;
    text-align: center;
    width: 100%;
    margin-bottom: 30px;
}

.new-item-box {
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    justify-content: center;
}

.searchfont{
    font-size: 1.3rem;
    font-weight: 600;
}
.goodsname {
    color: #162950;
}
.goodsname:hover {
    color: #1c3568;
}
.goodsprice{
    color: #6d6d6d;
}
</style>