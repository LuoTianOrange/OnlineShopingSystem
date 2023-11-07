<template>
  <!--主页-->
  <div class="body">
    <!--头图-->
    <img src="https://cdn.shopifycdn.net/s/files/1/0608/1973/4744/files/topPC_1728x.png?v=1639728371" class="photo-1">
    <div class="w-full overflow-hidden">
      <el-carousel trigger="click" height="650px">
        <el-carousel-item v-for="i in image.slice(0, 4)" :key="i.no" class="flex justify-center relative">
          <img :src="i.image" class="w-full min-h-[1200px] h-auto object-cover object-center relative top-[-50%]">
          <div class="button-container">
            <button class="blackbutton box-text">{{ i.name }}</button>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
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
        <button class="blackbutton" @click="gotoGoodClass()">查看全部</button>
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
  methods: {
    //跳转GoodClass并且回到顶部
    gotoGoodClass(){
      this.$router.push('/GoodsClass')
      window.scrollTo(0,0)
    }
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

.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #475669;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.box-text {
  z-index: 2;
  font-size: 1.2rem;
  background: #475669 !important;
  padding: 20px;
  opacity: 0.8;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>