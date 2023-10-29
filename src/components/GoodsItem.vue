<template>
    <!--单货物展示盒子-->
    <div v-for="(i, index) in image.slice(img1,img2)" :key="i.no" :data-index="index" class="photo-item font-1"
        :style="{ width: itemw + 'px' }" @click="gotogoodsinfo(i, index)">
        <img :src="i.images?.[0].Url ?? i.image" :alt=i.alt>
        <span class="font-1">{{ i.name }}</span>
        <span class="font-2">¥{{ i.price }}</span>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: Array,
            required: true,
        },
        itemw: {
            type: Number,
            required: true,
        },
        img1:{
            type: Number,
            required: true,
        },
        img2:{
            type: Number,
            required: true,
        }
    },
    methods: {
        gotogoodsinfo(img, item_index) {
            this.$router.push(`/goodsinfo/${img.name}`)
            //修改页面标题
            document.title = `${img.name} - nanyano Online Store`
            // this.$store.commit( 'setId' ,(image))
            // commit：设置点击的商品的索引到state中
            this.$store.commit( 'setItemIndex' ,(item_index))
            console.log(img);
            console.log(this.$store.state.itemIndex);
        },
    }

}
</script>

<style>
.photo-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 30px;
    margin-bottom: 30px;
    cursor: pointer;
    height: auto;
}

.font-1 {
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: 500;
    border-bottom: 1px solid transparent;
}

.font-2 {
    font-size: 1.2rem;
    font-weight: bold;
    color: #6d6d6d;
}

.photo-item:hover img {
    opacity: .8;
    transition: 0.2s;
}

.photo-item:hover .font-1 {
    border-bottom: 1px solid #000;
}
</style>