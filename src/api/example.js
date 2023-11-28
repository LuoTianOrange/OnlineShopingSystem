import request from './'

/**
 * @author QingXia-Ela
 * 
 * @description 请求示例
 * @param {any} data 要发送的数据
 * @returns {Promise<any>} 响应
 * 
 * @example
 * 
 * import { example } from '@/api/modules/user'
 * 
 * example(data).then(res => {
 *   console.log(res)
 * })
 */
export const example = (data) => {
  return request(`/user/login`, 'post', data)
}