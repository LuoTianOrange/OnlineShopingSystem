import apiUser from '../api/modules/user'

/**
 * @type {import('vuex').Module<{}, {}>}
 */
const userStore = {
  state: {
    token: '',
    isLogin: false
  },
  mutations: {
    // setToken(state, token) {
    //   state.token = token
    // },
    setIsLogin(state, isLogin) {
      state.isLogin = isLogin
    }
  },
  actions: {
    async login({ commit }, {
      username,
      password
    }) {
      const res = await apiUser.login(username, password)
      // localStorage.setItem('token', res.data.token)
      // commit('setToken', res.data.token)
      commit('setIsLogin', true)
    },
    async logout({ commit }) {
      await apiUser.logout()
      // localStorage.removeItem('token')
      // commit('setToken', '')
      commit('setIsLogin', false)
    }
  },
  getters: {
    // getToken(state) {
    //   return state.token
    // },
    getIsLogin(state) {
      return state.isLogin
    }
  }
}

export default userStore