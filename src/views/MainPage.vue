<template>
  <!--主页-->
  <div class="body">
    <!--头图-->
    <img src="https://cdn.shopifycdn.net/s/files/1/0608/1973/4744/files/topPC_1728x.png?v=1639728371" class="photo-1">
    <div id="new-items" class="main-box">
      <div class="new-item">NEW ITEMS</div>
      <div class="new-item-box">
          <GoodsItem :image="image" :itemw="itemw1" class="item-1"></GoodsItem>
      </div>
    </div>
    <div id="new-items" class="main-box">
      <div class="new-item">GOODS</div>
      <div class="new-item-box">
        <GoodsItem :image="image2" :itemw="itemw2" class="item-2"></GoodsItem>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsItem from '../components/GoodsItem.vue'
export default {
  data() {
    return {
      // image: this.$store.state.image,
      hover: false,
      itemw1: 360,
      itemw2: 200,
      image: [
        {
          no: 1,
          href: "https://cdn.shopifycdn.net/s/files/1/0608/1973/4744/files/f36dcd5983ab749dd2c99a54eb52b694_1024x1024_2x_9498ee9b-2cb0-4025-ad8d-bbd5bf9f8d9d_360x.jpg?v=1697440341",
          alt: "抱枕",
          name: "NACHONEKO抱き枕カバー",
          price: "12000"
        },
        {
          no: 2,
          href: "https://cdn.shopifycdn.net/s/files/1/0608/1973/4744/files/3c2fc567c824c5a2c0b4645e8482d106_360x.png?v=1691139506",
          alt: "鼠标垫",
          name: "NACHONEKO ゲーミングマウスパッド",
          price: "5000"
        },
        {
          no: 3,
          href: "https://cdn.shopifycdn.net/s/files/1/0608/1973/4744/files/453de868dfcde60300e945d06e63e9f0_360x.png?v=1694767023",
          alt: "杯子",
          name: "NACHONEKOタンブラー",
          price: "3000"
        },
        {
          no: 4,
          href: "https://cdn.shopifycdn.net/s/files/1/0608/1973/4744/files/006a704d20615d9781a9022c66d721c2_360x.png?v=1686555046",
          alt: "杯子",
          name: "NACHONEKOタンブラー",
          price: "3500"
        },
        {
          no: 5,
          href: "https://cdn.shopifycdn.net/s/files/1/0608/1973/4744/files/d2a865b4f104b1b81ff2e1b5d0786480_360x.png?v=1687746505",
          alt: "杯子",
          name: "NACHONEKOタンブラー",
          price: "6500"
        },
        {
          no: 6,
          href: "https://cdn.shopifycdn.net/s/files/1/0608/1973/4744/files/4ae3e89975448e1d52422623feb41fda_360x.png?v=1691130799",
          alt: "杯子",
          name: "NACHONEKOタンブラー",
          price: "5500"
        },
      ],
      image2: [
        {
          no: 6,
          href: "https://nanyanostore.com/cdn/shop/files/74d0518c9c86d4b743376f3e50e81275_1080x.png?v=1691129630",
          alt: "杯子",
          name: "NACHONEKOタンブラー",
          price: "5500"
        },
        {
          no: 6,
          href: "https://nanyanostore.com/cdn/shop/files/e94d9e1c137c50a691750722ee8dacbd_1080x.png?v=1687767322",
          alt: "杯子",
          name: "NACHONEKOタンブラー",
          price: "5500"
        },
        {
          no: 6,
          href: "https://nanyanostore.com/cdn/shop/files/e94d9e1c137c50a691750722ee8dacbd_1080x.png?v=1687767322",
          alt: "杯子",
          name: "NACHONEKOタンブラー",
          price: "5500"
        },
        {
          no: 6,
          href: "https://nanyanostore.com/cdn/shop/files/e94d9e1c137c50a691750722ee8dacbd_1080x.png?v=1687767322",
          alt: "杯子",
          name: "NACHONEKOタンブラー",
          price: "5500"
        },
        {
          no: 6,
          href: "https://nanyanostore.com/cdn/shop/files/e94d9e1c137c50a691750722ee8dacbd_1080x.png?v=1687767322",
          alt: "杯子",
          name: "NACHONEKOタンブラー",
          price: "5500"
        },
        {
          no: 6,
          href: "https://nanyanostore.com/cdn/shop/files/e94d9e1c137c50a691750722ee8dacbd_1080x.png?v=1687767322",
          alt: "杯子",
          name: "NACHONEKOタンブラー",
          price: "5500"
        },
        {
          no: 6,
          href: "https://nanyanostore.com/cdn/shop/files/e94d9e1c137c50a691750722ee8dacbd_1080x.png?v=1687767322",
          alt: "杯子",
          name: "NACHONEKOタンブラー",
          price: "5500"
        },
        {
          no: 6,
          href: "https://nanyanostore.com/cdn/shop/files/e94d9e1c137c50a691750722ee8dacbd_1080x.png?v=1687767322",
          alt: "杯子",
          name: "NACHONEKOタンブラー",
          price: "5500"
        },
        {
          no: 6,
          href: "https://nanyanostore.com/cdn/shop/files/e94d9e1c137c50a691750722ee8dacbd_1080x.png?v=1687767322",
          alt: "杯子",
          name: "NACHONEKOタンブラー",
          price: "5500"
        },
        {
          no: 6,
          href: "https://nanyanostore.com/cdn/shop/files/e94d9e1c137c50a691750722ee8dacbd_1080x.png?v=1687767322",
          alt: "杯子",
          name: "NACHONEKOタンブラー",
          price: "5500"
        },
        {
          no: 6,
          href: "https://nanyanostore.com/cdn/shop/files/e94d9e1c137c50a691750722ee8dacbd_1080x.png?v=1687767322",
          alt: "杯子",
          name: "NACHONEKOタンブラー",
          price: "5500"
        },
        {
          no: 6,
          href: "https://nanyanostore.com/cdn/shop/files/e94d9e1c137c50a691750722ee8dacbd_1080x.png?v=1687767322",
          alt: "杯子",
          name: "NACHONEKOタンブラー",
          price: "5500"
        },
        {
          no: 6,
          href: "https://nanyanostore.com/cdn/shop/files/e94d9e1c137c50a691750722ee8dacbd_1080x.png?v=1687767322",
          alt: "杯子",
          name: "NACHONEKOタンブラー",
          price: "5500"
        },
        {
          no: 6,
          href: "https://nanyanostore.com/cdn/shop/files/e94d9e1c137c50a691750722ee8dacbd_1080x.png?v=1687767322",
          alt: "杯子",
          name: "NACHONEKOタンブラー",
          price: "5500"
        },
        {
          no: 6,
          href: "https://nanyanostore.com/cdn/shop/files/e94d9e1c137c50a691750722ee8dacbd_1080x.png?v=1687767322",
          alt: "杯子",
          name: "NACHONEKOタンブラー",
          price: "5500"
        },
      ]
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