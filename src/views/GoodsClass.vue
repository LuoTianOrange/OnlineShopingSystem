<template>
  <!--主页-->
  <div class="body">
    <!--下方商品展示-->
    <div id="new-items" class="main-box">
      <div style="font-size: 2.4rem;" class="text-center">商品</div>
      <div class="new-item py-[40px]">{{27}}&nbsp;项商品</div>
      <div class="new-item-box">
        <GoodsItem :image="image" :itemw="itemw1" :img1="img1" :img2="img2" class="item-2"></GoodsItem>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsItem from '../components/GoodsItem.vue'
export default {
  data() {
    return {
      image: this.$store.state.image,
      hover: false,
      itemw1: 360,
      img1: 0,
      img2: 9999999,
    }
  },
  components: {
    GoodsItem,
  },
  // mounted() {
  //   this.$store.state.image
  // }
  methods: {

  },
}
</script>

<style scoped>
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
</style>