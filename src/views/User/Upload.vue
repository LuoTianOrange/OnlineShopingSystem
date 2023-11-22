<template>
  <div class="mt-[20px] mx-[30px]">
    <span class="plainText font-[1.6rem!important]">修改头像</span>
  </div>
  <div class="flex flex-col justify-start px-[20px]">
    <!--修改头像-->
    <div class="botton-infobox flex flex-col items-start justify-center mt-[40px] mx-[40px] w-[auto!important]">
      <div>
        <button class="blackbutton w-[120px]">上传图片</button>
      </div>
      <div class="flex flex-col items-start">
        <div class="my-[20px] plainText">当前头像</div>
        <div class="photobg">
          <img src="https://album.biliimg.com/bfs/new_dyn/d3c594ffb826c533506ce49ebda4721b32256434.png"
            class="user-header">
        </div>
      </div>
    </div>
    <div class="botton-infobox flex items-center justify-center">
      <button class="blackbutton w-[120px]">保存</button>
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
  width: 200px;
  height: 200px;
  object-fit: cover;
  overflow: hidden;
  /* border-radius: 50%; */
}
.photobg{
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
    justify-content: center;
  background-color: #cacaca;
}
</style>