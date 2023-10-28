<template>
  <!--主页-->
  <div class="body">
    <!--头图-->
    <img src="https://cdn.shopifycdn.net/s/files/1/0608/1973/4744/files/topPC_1728x.png?v=1639728371" class="photo-1">
    <div id="new-items" class="main-box">
      <!--新品展示-->
      <div class="new-item">NEW ITEMS</div>
      <div class="new-item-box">
        <!--将图片数据和盒子的样式传入GoodItem-->
        <GoodsItem :image="image" :itemw="itemw1" :img1="img1" :img2="img12" class="item-1"></GoodsItem>
      </div>
    </div>
    <!--下方商品展示-->
    <div id="new-items" class="main-box">
      <div class="new-item">GOODS</div>
      <div class="new-item-box">
        <GoodsItem :image="image" :itemw="itemw2" :img1="img2" :img2="img22" class="item-2"></GoodsItem>
      </div>
    </div>
    <!--查看更多商品按钮-->
    <div class="main-box">
      <router-link to="/GoodsClass">
        <button class="blackbutton">查看全部</button>
      </router-link>
    </div>
    <!--底图-->
    <img src="https://nanyanostore.com/cdn/shop/files/tunagiPC_1296x.png?v=1639728452" class="photo-1 py-[60px]"
      style="height: auto;">
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
      itemw2: 200,
      img1: 0,
      img12: 6,
      img2: 6,
      img22: 9999999,
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

<style scoped lang="scss">
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

@media screen and (width < 800px) {
  // .new-item-box {
  //   justify-content: center;
  // }
}
</style>