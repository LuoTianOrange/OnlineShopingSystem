<template>
  <div class="body">
    <img src="https://cdn.shopifycdn.net/s/files/1/0608/1973/4744/files/topPC_1728x.png?v=1639728371" class="photo-1">
    <div id="new-items" class="main-box">
      <div class="new-item">NEW ITEMS</div>
      <div class="new-item-box">
        <a v-for="i in image" :key="i.no" href="">
          <div v-for="i in image" :key="i.no" class="photo-item font-1">
            <img :src=i.href :alt=i.alt>
            <span class="font-1">{{ i.name }}</span>
            <span class="font-2">¥{{ i.price }}</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // image: this.$store.state.image,
      image: [
        {
          no: 1,
          href: "https://cdn.shopifycdn.net/s/files/1/0608/1973/4744/files/f36dcd5983ab749dd2c99a54eb52b694_1024x1024_2x_9498ee9b-2cb0-4025-ad8d-bbd5bf9f8d9d_360x.jpg?v=1697440341",
          alt: "抱枕",
          name: "NACHONEKO抱き枕カバー",
          price: "12000"
        },
        {
          no: 2,
          href: "https://cdn.shopifycdn.net/s/files/1/0608/1973/4744/files/3c2fc567c824c5a2c0b4645e8482d106_360x.png?v=1691139506",
          alt: "鼠标垫",
          name: "NACHONEKO ゲーミングマウスパッド",
          price: "5000"
        },
        {
          no: 3,
          href: "https://cdn.shopifycdn.net/s/files/1/0608/1973/4744/files/453de868dfcde60300e945d06e63e9f0_360x.png?v=1694767023",
          alt: "杯子",
          name: "NACHONEKOタンブラー",
          price: "3000"
        },
        {
          no: 4,
          href: "https://cdn.shopifycdn.net/s/files/1/0608/1973/4744/files/453de868dfcde60300e945d06e63e9f0_360x.png?v=1694767023",
          alt: "杯子",
          name: "NACHONEKOタンブラー",
          price: "3000"
        },
      ]
    }
  },
  // mounted() {
  //   this.$store.state.image
  // }
}
</script>

<style scoped>
.body {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.photo-1 {
  overflow: hidden;
  width: 100%;
  height: 475px;
  object-fit: cover;
  margin-bottom: 60px;
}

.main-box {
  margin-top: 60px;
}

.new-item {
  font-size: 1.3rem;
  text-align: center;
  width: 100%;
  margin-bottom: 30px;
}

.photo-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 30px;
  margin-bottom: 30px;
}

.new-item-box {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
}

.font-1 {
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: 500;
}

.font-1:hover {
  text-decoration: 1x solid #000;
}

.font-2 {
  font-size: 1.2rem;
  font-weight: bold;
  color: #6d6d6d;
}</style>