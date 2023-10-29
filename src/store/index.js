
import { createStore } from 'vuex'
import image from './image'

// 创建一个新的 store 实例

const store = createStore({
  state() {
    return {
      //商品数据
      image: [
        ...image,
      ],
      //购物车数据
      Cartcount: [],
      itemIndex: 0,
      buynumber: Number,//添加商品数量
    }
  },
  getters:
  {
    getCart(state){
      return state.Cartcount
    }
  },
  mutations: {
    setItemIndex(state, index) {
      // commit：将传来的值赋给itemIndex
      state.itemIndex = index
    },
    setbuynumber(state, number) {
      state.buynumber = number
    },
    addCommodity(state, no, count) {
      let hasItem = state.Cartcount.some(item => {
        if (item.no === no) {
          item.count += count
          return true
        }
        return false
      })

      if (!hasItem) {
        state.Cartcount.push({
          no,
          count
        })
      }
    },
    //购物车数据
    Cartcount(state, n){
      state.Cartcount.push(n)
    }
  }
})

export default store