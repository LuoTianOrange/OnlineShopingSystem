<template>
  <div class="body">
    <img src="https://cdn.shopifycdn.net/s/files/1/0608/1973/4744/files/topPC_1728x.png?v=1639728371" class="photo-1">
    <div id="new-items">
      <div class="">NEW ITEMS</div>
      <div v-for="i in img" :key="i.no">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return{
      img
    }
  }
}
</script>

<style scoped>
.body {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
}

.photo-1 {
  overflow: hidden;
  width: 100%;
  height: 475px;
  object-fit: cover;
}
</style>