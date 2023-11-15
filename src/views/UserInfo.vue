<template>
  <div class="main-body fff">
    <div class="main-box mt-[60px] mx-[40px]">
      <!--左侧菜单-->
      <div class="left">
        <span class="menu-box-header border-left-top">个人中心</span>
        <router-link :to="i.router" class="menu-box" v-for="i in leftmenu" :key="i.no" :style="{
          'background-color': i.no == Ino ? '#475669' : null,
          'color': i.no == Ino ? '#fff' : null
        }" @click="changeboxNo(i.no)">{{ i.name }}</router-link>
      </div>
      <!--右侧展示-->
      <div class="right">
        <router-view v-slot="{ Component }" :key="$route.fullPath">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data() {
    return {
      leftmenu: [
        { name: '我的信息', no: 1, router: '/UserInfo/MyInfo' },
        { name: '修改头像', no: 2, router: '/UserInfo/Upload' },
        { name: '收货地址', no: 3, router: '/UserInfo/Address' },
        { name: '我的购物车', no: 4, router: '/Cart' },
        { name: '订单信息', no: 5, router: '/UserInfo/Buys' },
      ],
      Ino: 1,
    }
  },
  methods: {
    changeboxNo(no) {
      this.Ino = no
    }
  },
}
</script>

<style scoped>
.main-body {
  width: 100%;
  min-height: calc(100vh - 280px);
}

.main-box {
  max-width: 1200px;
  width: 100%;
  min-height: 800px;
  display: flex;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 6px;
}

.left {
  min-width: 140px;
  /* width: 100%; */
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
}

.right {
  width: 100%;
  min-height: 100%;
}

.menu-box {
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
}

.menu-box-header {
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
}

.menu-box:hover {
  background-color: #e1e4ea;
}

.border-left-top {
  border: 1px solid #e1e2e5;
}
</style>