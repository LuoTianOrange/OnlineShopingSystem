<template>
  <div class="header">
    <router-link to="/" @click="changeTitle">
      <img src="../assets/photo/03_180x.webp" style="width: 130px;height: auto;">
    </router-link>
    <div class="flex items-center">
      <!--打开搜索框-->
      <svg width="20" height="20" viewBox="0 0 48 48" fill="none" class="mx-[20px] cursor-pointer" @click="OpenSearchBox">
        <path
          d="M33.07 33.071c6.25-6.248 6.25-16.379 0-22.627-6.248-6.249-16.378-6.249-22.627 0-6.248 6.248-6.248 16.379 0 22.627 6.249 6.248 16.38 6.248 22.628 0zm0 0l8.486 8.485"
          stroke="#162950" stroke-width="4" />
      </svg>
      <el-dropdown v-if="isLogin == false">
        <!--用户头像-->
        <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
          class="mx-[10px] max-w-[40px]">
          <circle cx="24" cy="12" r="8" fill="none" stroke="#333" stroke-width="4" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M42 44C42 34.0589 33.9411 26 24 26C14.0589 26 6 34.0589 6 44" stroke="#333" stroke-width="4"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="isLogin = true">
              <router-link to="/UserLogin">
                登录
              </router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/UserReg">
                注册
              </router-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <!--登录后-->
      <el-dropdown v-if="isLogin == true">
        <img src="//i1.hdslb.com/bfs/face/698c2ca3500a2b15ad8f1d129e74acae025c2434.jpg" class="userheader">
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/Cart" class="w-[100%]">
                购物车
              </router-link>
            </el-dropdown-item>
            <el-dropdown-item style="color: tomato;" @click="Loginout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <SearchBox ref="SearchBoxRef"></SearchBox>
  </div>
</template>

<script>

import SearchBox from '@/components/SearchBox.vue';
import { ref } from 'vue';

export default {
  data() {
    return {
      //是否登录
      isLogin: false,
    }
  },
  components: {
    SearchBox,
  },
  methods: {
    changeTitle() {
      document.title = `nanyano OnlineStore - nanyano Online Store`
    },
    Loginout() {
      this.isLogin = false
    }
  },
  setup() {
    const SearchBoxRef = ref(null);

    const OpenSearchBox = () => {
      SearchBoxRef.value.OpenSearchBox()
    }

    return {
      SearchBoxRef,
      OpenSearchBox,
    }
  }

}
</script>

<style>
.header {
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  padding: 15px 60px;
  transition: background-color .5s;
  background: #fff;
  border-bottom: 1px solid #e4e4e4;
}

:focus-visible {
  outline: none !important;
}

.el-only-child__content {
  max-width: 40px !important;
}

.userheader {
  width: 40px;
  height: 40px;
  overflow: hidden;
  object-fit: cover;
  border-radius: 50%;
  transition: 0.4s;
}
</style>