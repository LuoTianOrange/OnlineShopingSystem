<template>
  <div class="cart-body">
    <div class="cart-body-box pl-[55px] pr-[55px]">
      <div class="flex flex-col items-center">
        <span class="text-[2.3rem] mb-[15px]">您的购物车</span>
        <router-link to="/GoodsClass" class="plainText bbl mb-[25px]">继续购物</router-link>
        <table class="cart">
          <tr class="flex justify-between bbl2">
            <th class="shopname text-left">商品</th>
            <th class="w-[20%] text-right disshow">价格</th>
            <th class="w-[20%] text-right disshow">数量</th>
            <th class="w-[10%] text-right">总计</th>
          </tr>
          <tr class="flex justify-between bbl2" v-for="i in image.slice(0, 3)" :key="i.no">
            <th class="w-[50%] text-left flex">
              <img class="cart-img mr-[50px]" v-for="url in imageUrls" :key="url" :src="url" alt="">
              <img class="cart-img mr-[50px]"
                src="https://nanyanostore.com/cdn/shop/files/f36dcd5983ab749dd2c99a54eb52b694_1024x1024_2x_9498ee9b-2cb0-4025-ad8d-bbd5bf9f8d9d_1024x1024@2x.jpg?v=1697440341"
                alt="">
              <span class="text-[1.2rem] flex flex-col">
                <span>{{ i.name }}</span>
                <span class="bbl w-fit">移除</span>
              </span>
            </th>
            <th class="w-[20%] text-right disshow">{{ i.price }}</th>
            <th class="w-[20%] text-right flex flex-row justify-end">
              <div class="w-[20%] text-right show">{{ i.price }}</div>
              <input type="text" v-model="buynumber" id="" class="select-box w-[30%]"
                style="border-radius: 0 !important;">
              <div class="w-[22px] h-[44px] bg-white">
                <button class="fff w-[22px] h-[22px] plus" @click="addNumber()">+</button>
                <button class="fff w-[22px] h-[22px] sub" @click="subNumber()">-</button>
              </div>
            </th>
            <th class="w-[10%] text-right disshow">¥{{ totalNumber }}</th>
          </tr>
        </table>
      </div>
      <div class="cart-foot">
        <div class="cart-text1 pb-[10px] flex justify-end">
          <div>运费</div>
          <div class="pl-[50px]">10RMB</div>
        </div>
        <div class="cart-text1 pb-[10px] flex justify-end">
          <div>小计</div>
          <div class="pl-[50px]">10000000RMB</div>
        </div>
        <div class="cart-text1 pb-[10px] flex justify-end">
          <div>总计</div>
          <div class="pl-[50px]">10000010RMB</div>
        </div>
        <button class="blackbutton">结账</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  // goods: this.$store.state.Cartcount,
  data() {
    return {
      images: this.$store.state.image.images,
      image: this.$store.state.image,
      totalNumber: 0,
      buynumber:1,
    }
  },
  computed: {
    imageUrls() {
      return this.$store.state.image.images && this.$store.state.image.images.map(image => image.Url);
    },

  },
  methods: {
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
  }
}
</script>

<style scoped>
.body {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.cart-body {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cart-body-box {
  width: 90%;
  max-width: 1200px;
  min-height: 600px;
  padding-top: 50px;
}

.bbl {
  border-bottom: 1px solid #797880;
}

.bbl2 {
  border-bottom: 1px solid #e4e4e4;
}

.cart {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  /* background: #fff; */
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 30px;
}

.cart th {
  padding: 20px;
}

.cart td:first-child,
.cart th:first-child {
  padding-left: 0;
}

.cart td:last-child,
.cart th:last-child {
  padding-right: 0;
}

.cart-img {
  width: 95px;
  height: 95px;
  object-fit: cover;
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

.cart-foot {
  min-height: 200px;
  width: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.cart-text1 {
  color: #797880;
  text-align: right;
  font-size: 1.3rem;
}

@media screen and (width <=800px) {
  .disshow {
    display: none;
  }

  .show {
    display: block;
  }

  .shopname {
    width: 80%;
  }
}

@media screen and (width > 800px) {
  .disshow {
    display: block;
  }

  .show {
    display: none;
  }

  .shopname {
    width: 50%;
  }
}
</style>