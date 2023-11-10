<template>
  <div class="flex flex-col justify-start px-[20px]">
    <!--修改头像-->
    <div class="infobox flex items-center mt-[40px]">
      <div class="flex items-center">
        <div class="mx-[20px] plainText">当前头像</div>
          <img src="https://album.biliimg.com/bfs/new_dyn/d3c594ffb826c533506ce49ebda4721b32256434.png"
            class="user-header">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'upload'
}
</script>

<style scoped>
.infobox {
  width: 100%;
  min-height: 160px;
  background-color: #fafafa;
  border-bottom: 1px solid #cacaca;
  padding: 10px 20px;
}

.botton-infobox {
  width: 100%;
  min-height: 160px;
  background-color: #fafafa;
  padding: 10px 0;
}

.user-header {
  width: 150px;
  height: 150px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 50%;
}
</style>