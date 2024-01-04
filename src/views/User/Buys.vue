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
      <div id="good2" v-show="goods == '2'">
        <div class="goodhead">
          <div class="w-[360px] text-center">商品</div>
          <div class="w-[150px] text-center">单价</div>
          <div class="w-[150px] text-center">数量</div>
          <div class="w-[150px] text-center">总价</div>
          <div class="w-[250px] text-center">交易状态</div>
        </div>
        <div v-for="i in outgoodsList" :key="i.no" class="goodbox">
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
      <div id="good3" v-show="goods == '3'">
        <div class="goodhead">
          <div class="w-[360px] text-center">商品</div>
          <div class="w-[150px] text-center">单价</div>
          <div class="w-[150px] text-center">数量</div>
          <div class="w-[150px] text-center">总价</div>
          <div class="w-[250px] text-center">交易状态</div>
        </div>
        <div v-for="i in nogoodsList" :key="i.no" class="goodbox">
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
    </div>
  </div>
</template>

<script setup lang="js">
import { onMounted, ref } from 'vue'
import axios from 'axios'
const activeIndex = ref('1')
const goods = ref('1')
const handleSelect = (key, keyPath) => {
  goods.value = key;
  // console.log(key, keyPath)
}
const mo = onMounted(() => {
  activeIndex.value = '1'
})


//获取所有商品列表
const goodsList = axios.get(`/order/all`)
  .then((response) => {
    console.log("goodsList", response.data);
    return response.data
  })
  .catch((error) => {
    console.log(error);
  })
//获取已发货商品列表
const outgoodsList = axios.get(`/order/out`)
  .then((response) => {
    console.log("outgoodsList", response.data);
    return response.data
  })
  .catch((error) => {
    console.log(error);
  })
//获取未发货商品列表
const nogoodsList = axios.get(`/order/out`)
  .then((response) => {
    console.log("nogoodsList", response.data);
    return response.data
  })
  .catch((error) => {
    console.log(error);
  })

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