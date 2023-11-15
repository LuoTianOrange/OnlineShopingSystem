<template>
  <div>
    <!--标题-->
    <div class="mt-[20px] mx-[20px]">
      <span class="plainText">订单信息</span>
    </div>
    <!--导航栏-->
    <el-menu :default-active="activeIndex" class="el-menu-demo mt-[40px!important]" mode="horizontal"
      @select="handleSelect">
      <el-menu-item index="1" class="w-[140px]">所有订单</el-menu-item>
      <el-menu-item index="2" class="w-[140px]">待发货</el-menu-item>
      <el-menu-item index="3" class="w-[140px]">待收货</el-menu-item>
    </el-menu>
    <!--商品订单信息-->
    <div>
      <div id="good1" v-show="goods == '1'">
        <div class="goodhead">
          <div class="w-[360px] text-center">商品</div>
          <div class="w-[150px] text-center">单价</div>
          <div class="w-[150px] text-center">数量</div>
          <div class="w-[150px] text-center">总价</div>
          <div class="w-[250px] text-center">交易状态</div>
        </div>
        <div v-for="i in goodsList" :key="i.no" class="goodbox">
          <div class="flex">
            <div>{{ i.time }}</div>
            <div>{{ i.cartnum }}</div>
          </div>
          <div class="goodbody">
            <img :src="i.images" class="w-[100px] h-[100px]" />
            <div class="w-[260px]">
              <div>{{ i.name }}</div>
              <div>{{ i.size }}</div>
            </div>
            <div class="w-[150px]">{{ i.amout }}</div>
            <div class="w-[150px]">{{ i.price }}</div>
            <div class="w-[150px]">{{ i.buynumber }}</div>
            <div class="w-[250px]">{{ i.state }}</div>
          </div>
        </div>
      </div>
      <div id="good2" v-show="goods == '2'">2</div>
      <div id="good3" v-show="goods == '3'">3</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const activeIndex = ref('1')
const goods = ref('1')
const handleSelect = (key, keyPath) => {
  goods.value = key;
  // console.log(key, keyPath)
}
const mo = onMounted(() => {
  activeIndex.value = '1'
})
const goodsList = [
  {
    no: 1,
    cartnum: '123456789012',
    name: '商品1',
    images: "https://nanyanostore.com/cdn/shop/files/f36dcd5983ab749dd2c99a54eb52b694_1024x1024_2x_9498ee9b-2cb0-4025-ad8d-bbd5bf9f8d9d_1024x1024@2x.jpg?v=1697440341",
    url: '',
    price: 100,
    size: 'L',
    amout: 1,
    buynumber: 1,
    time: '2022-01-01',
    state: '1'
  },
]
</script>

<style scoped>
.infobox {
  width: 100%;
  min-height: 160px;
  background-color: #fafafa;
  border-bottom: 1px solid #cacaca;
  padding: 10px 20px;
}

.goodhead {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.goodbox {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.goodbody {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}
</style>