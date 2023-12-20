// user.js
import ajax from '@/utils/ajax' // 二次封装的 ajax

export type AddCartDTO = {
  goodsCount: number
  goodsId: number
}

export type CartItem = {
  cartItemId: number
  goodsId: number
  goodsCount: number
  goodsName: string
  goodsCoverImg: string
  sellingPrice: number
}

/** 购物车api */
export const cartApi = {
  /** 填加购物车 */
  async addCart(params: AddCartDTO) {
    return ajax.post<string>('/shop-cart', params).then((res) => res.data)
  },
  /** 购物车列表 */
  async getCart() {
    return ajax.get<CartItem[]>('/shop-cart').then((res) => res.data)
  }
}
