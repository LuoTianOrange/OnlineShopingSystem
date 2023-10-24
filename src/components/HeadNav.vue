<template>
  <div class="header">
    <img src="../assets/photo/03_180x.webp" style="width: 130px;height: auto;">
    <div class="flex items-center">
      <svg width="20" height="20" viewBox="0 0 48 48" fill="none" class="mx-[10px]">
        <path
          d="M33.07 33.071c6.25-6.248 6.25-16.379 0-22.627-6.248-6.249-16.378-6.249-22.627 0-6.248 6.248-6.248 16.379 0 22.627 6.249 6.248 16.38 6.248 22.628 0zm0 0l8.486 8.485"
          stroke="#162950" stroke-width="4" />
      </svg>
      <el-dropdown v-if="isLogin == false">
        <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-[10px]">
          <circle cx="24" cy="12" r="8" fill="none" stroke="#333" stroke-width="4" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M42 44C42 34.0589 33.9411 26 24 26C14.0589 26 6 34.0589 6 44" stroke="#333" stroke-width="4"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>登录</el-dropdown-item>
            <el-dropdown-item>注册</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown v-if="isLogin == true">
        <img src="//i1.hdslb.com/bfs/face/698c2ca3500a2b15ad8f1d129e74acae025c2434.jpg" class="userheader">
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>购物车</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isLogin: true,
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

.userheader {
  width: 40px;
  height: 40px;
  overflow: hidden;
  object-fit: cover;
  border-radius: 50%;
}
</style>