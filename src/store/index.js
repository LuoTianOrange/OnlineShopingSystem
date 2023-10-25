
import { createStore } from 'vuex'
import image from './image'
import image2 from './image2'
// 创建一个新的 store 实例

const store = createStore({
  state() {
    return {
      image: [
        ...image,
      ],
      image2: [
        ...image2,
      ],
      currentImg: [
        {
          no: 1,
          href: "https://cdn.shopifycdn.net/s/files/1/0608/1973/4744/files/f36dcd5983ab749dd2c99a54eb52b694_1024x1024_2x_9498ee9b-2cb0-4025-ad8d-bbd5bf9f8d9d_360x.jpg?v=1697440341",
          alt: "抱枕",
          name: "NACHONEKO抱き枕カバー",
          price: "12000",
          size: "L", //商品的尺寸选择
          amount: "100",
          images: []
        }
      ]
    }
  },
  mutations: {
  }
})

export default store