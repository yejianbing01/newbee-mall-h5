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

export type ModifyCartDTO = {
  cartItemId: number
  goodsCount: number
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
  },
  /** 根据购物车id查询购物车列表 */
  async getByCartItemIds(params: { cartItemIds: string }) {
    return ajax.get<CartItem[]>('/shop-cart/settle', { params }).then((res) => res.data)
  },
  /** 删除购物车 */
  async deleteCartItem(id: number) {
    return ajax.delete(`/shop-cart/${id}`).then((res) => res.data)
  },
  async modifyCart(params: ModifyCartDTO) {
    return ajax.put('/shop-cart', params)
  }
}
