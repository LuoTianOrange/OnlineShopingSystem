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
          <div>商品</div>
          <div>单价</div>
          <div>数量</div>
          <div>总价</div>
          <div>交易状态</div>
        </div>
        <div v-for="i in goodsList" :key="i.no" class="goodbox">
          <div>{{ i.time }}</div>
          <div class="goodbody">
            <img :src="i.images" class="w-[100px] h-[100px]" />
            <div>
              <div>{{ i.name }}</div>
              <div>{{ i.size }}</div>
            </div>
            <div>{{ i.amout }}</div>
            <div>{{ i.price }}</div>
            <div>{{ i.buynumber }}</div>
          </div>
        </div>
      </div>
      <div id="good2" v-show="goods == '2'">2</div>
      <div id="good3" v-show="goods == '3'">3</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const activeIndex = ref('1')
const goods = ref('')
const handleSelect = (key, keyPath) => {
  goods.value = key;
  console.log(key, keyPath)
}
const goodsList = [
  {
    no: 1,
    name: '商品1',
    images: "https://nanyanostore.com/cdn/shop/files/f36dcd5983ab749dd2c99a54eb52b694_1024x1024_2x_9498ee9b-2cb0-4025-ad8d-bbd5bf9f8d9d_1024x1024@2x.jpg?v=1697440341",
    url: '',
    price: 100,
    size: 'L',
    amout: 1,
    buynumber: 1,
    time: '2022-01-01',
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