
import { createStore } from 'vuex'
import image from './image'
import cart from './cart'
import axios from 'axios'
import userStore from './user'

const store = createStore({
  state() {
    return {
      //商品数据
      image:
        [
          // ...image,
        ],
      //购物车数据
      cart: [
        ...cart,
      ],
      //
      itemIndex: 0,
      //搜索框数据
      searchKeyword: '',
      //搜索内容
      searchgoods:[],
      //是否登录
      isLogin: !!localStorage.getItem("isLogin"),
      Cartcount: [],
      address: [],
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
    //设置商品数据
    setGoods(state, response) {
      // state.image.push(response)
      state.image = [...response]
      console.log(response);
      console.log(state.image);
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
    //设置搜索框内容
    setSearchBox(state, n) {
      state.searchKeyword = n
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
      axios.get(`/cart/deleteOne/${buyinfo.goods.consignmentnum}`)
      .then(()=>{
        
      })
      // let hasItem = state.cart.some(item => {
      //   if (item.goods.no === buyinfo.goods.no) {
      //     return true
      //   }
      // })
      // if (!hasItem) {
      //   state.cart.pop(buyinfo)
      // }
    },
    //登录状态
    Login(state, step) {
      state.isLogin = step
    },
    setAddress(state, address) {
      state.address = address
    }
  },
  actions: {
    //更改登录状态
    InLogin(state, step) {
      localStorage.setItem("isLogin", (step))
      state.commit('Login', step)
    },
    //获取商品信息
    getGoods() {
      axios.get('/goods/getAll')
        .then((response) => {
          store.commit('setGoods', response.data)
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
      console.log(store);
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
    //退出登录
    Loginout() {
      store.commit('Login', false)
      axios.get('/user/loginOut')
        .then((response) => {
          alert("成功退出登录！")
        })
    },
    //获取用户地址
    getAddress() {
      axios.get('/user/getAddress')
        .then((response) => {
          store.commit('setAddress', response.data)
        })
    }
  },
  modules: {
    userStore
  }
})

export default store