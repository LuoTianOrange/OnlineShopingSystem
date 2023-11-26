
import { createStore } from 'vuex'
import image from './image'
import cart from './cart'
import axios from 'axios'

const store = createStore({
  state() {
    return {
      //商品数据
      image: [
        ...image,
      ],
      //购物车数据
      cart: [
        ...cart,
      ],
      //
      itemIndex: 0,
      //购买商品数量
      // buynumber: 1,
      //搜索框数据
      searchKeyword: '',
      //是否登录
      isLogin: false,
      Cartcount: [],
    }
  },
  getters:
  {
    getCart(state) {
      return state.Cartcount
    }
  },
  mutations: {
    setItemIndex(state, index) {
      // commit：将传来的值赋给itemIndex
      state.itemIndex = index
    },
    //添加商品数量
    // setbuynumber(state, number) {
    //   state.buynumber += number
    // },
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

    //添加商品到购物车
    addCart(state, buyinfo) {
      console.log(state.cart, buyinfo);
      // 判断匹配购物车里是否存在相同商品
      let hasItem = state.cart.some(item => {
        if (item.goods.no === buyinfo.goods.no) {
          item.goods.count += buyinfo.goods.count
          return true
        }
      })
      // 没有相同商品添加完整商品
      if (!hasItem) {
        state.cart.push(buyinfo)
      }
    },
    //删除购物车商品
    delCart(state, buyinfo) {
      let hasItem = state.cart.some(item => {
        if (item.goods.no === buyinfo.goods.no) {
          return true
        }
      })
      if (!hasItem) {
        state.cart.pop(buyinfo)
      }
    },
    //登录状态
    Login(state, step) {
      state.isLogin = step
    },
  },
  actions: {
    //更改登录状态
    InLogin(state, step) {
      state.commit('Login', step)
    },
    //获取商品信息
    getGoods() {
      axios.get('/')
        .then(function (response) {

        })
        .catch(function (error) {
          console.log(error);
        })
    },
    //获取用户信息
    getUserInfo() {
      axios.get('/')
        .then(function (response) {

        })
        .catch(function (error) {
          console.log(error);
        })
    },
    //获取收货信息
    getOrdersInfo() {
      axios.get('/')
        .then(function (response) {

        })
        .catch(function (error) {
          console.log(error);
        })
    },
  }
})

export default store