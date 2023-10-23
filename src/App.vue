<template>
  <div>
    <BackGround></BackGround>
    <HeadNav></HeadNav>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import BackGround from './components/BackGround.vue'
import HeadNav from './components/HeadNav.vue'
export default {
  components: { HeadNav, BackGround },

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