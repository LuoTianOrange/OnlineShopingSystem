<template>
    <!--货物展示-->
    <router-link to="" v-for="(i, index) in image" :key="i.no" :data-index="index" class="photo-item font-1"
        :style="{ width: itemw + 'px' }">
        <img :src=i.href :alt=i.alt>
        <span class="font-1">{{ i.name }}</span>
        <span class="font-2">¥{{ i.price }}</span>
    </router-link>
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
        }
    },
    // computed: {
    //     itemw() {
    //         return this.itemw;
    //     },
    // },
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