import request from '../'

export const login = (username, password) => {
  return request(`/user/login?username=${username}&password=${password}`)
}

export const logout = () => {
  return request(`/loginOut`)
}

const apiUser = {
  logout,
  login
}

export default apiUser