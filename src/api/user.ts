// user.js
import ajax from '@/utils/ajax' // 二次封装的 ajax

export type UserInfo = {
  introduceSign: string
  loginName: string
  nickName: string
}

export type LoginParam = {
  loginName: string
  passwordMd5: string
}

export type RegisterParam = {
  loginName: string
  password: string
}

// 获取用户信息
export function getUserInfo() {
  return ajax.get<UserInfo>('/user/info')
}

// 登录
export function login(params: LoginParam) {
  return ajax.post<string>('/user/login', params)
}

// 登出
export function logout() {
  return ajax.post<string>('/user/logout')
}

// 注册
export function register(params: RegisterParam) {
  return ajax.post<string>('/user/register', params)
}
