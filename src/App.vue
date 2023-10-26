<template>
  <div>
    <BackGround></BackGround>
    <HeadNav></HeadNav>
    <router-view v-slot="{ Component }" :key="$route.fullPath">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <FootNav></FootNav>
  </div>
</template>

<script>
import FootNav from './components/FootNav.vue'
import BackGround from './components/BackGround.vue'
import HeadNav from './components/HeadNav.vue'
export default {
  components: { HeadNav, BackGround, FootNav },

}
</script>

<style scoped>
body head #app {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  text-align: center;
}
</style>