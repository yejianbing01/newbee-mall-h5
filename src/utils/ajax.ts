// axios.js
import axios from 'axios'
import { showFailToast } from 'vant'
import router from '@/router' // 引入路由组件实例，该实例可以直接操作路由的属性方法，如 router.push、router.goBack 等

// baseURL 基础路径配置，backend-api-01.newbee.ltd/api/v1 为线上请求地址，这里只有一个地址，所以就不做区分
axios.defaults.baseURL =
  import.meta.env.MODE == 'development'
    ? '//backend-api-01.newbee.ltd/api/v1'
    : '//backend-api-01.newbee.ltd/api/v1'
// 跨域请求是要不要携带cookie，本课程没有跨域请求的情况
axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['token'] = localStorage.getItem('token') || ''
// post 请求时，发送 json 形式的数据包
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.response.use((res) => {
  if (typeof res.data !== 'object') {
    showFailToast('服务端异常！')
    return Promise.reject(res)
  }
  if (res.data.resultCode != 200) {
    if (res.data.message) showFailToast(res.data.message)
    if (res.data.resultCode == 416) {
      // 返回 416 代表没有登录状态，路由跳转到/login 页面
      router.push({ path: '/login' })
    }
    if (res.data.data && window.location.hash == '#/login') {
      localStorage.setItem('token', res.data.data)
      axios.defaults.headers['token'] = res.data.data
    }
    return Promise.reject(res.data)
  }

  return res.data
})

export default axios
