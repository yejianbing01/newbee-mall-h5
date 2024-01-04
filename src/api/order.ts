import ajax from '@/utils/ajax'

export type CreateOrderParam = {
  addressId: number
  cartItemIds: number[]
}

export type PayOrderParam = {
  orderNo: string
  payType: 1 | 2
}

export const orderApi = {
  async createOrder(params: CreateOrderParam) {
    return ajax.post<string>('/saveOrder', params).then((res) => res.data)
  },
  // 获取订单列表
  async getOrderList(params) {
    return ajax.get('/order', { params })
  },

  // 根据 id 获取订单详情
  async getOrderDetail(id: number) {
    return ajax.get(`/order/${id}`)
  },

  // 取消订单
  async cancelOrder(id: number) {
    return ajax.put(`/order/${id}/cancel`)
  },

  // 确认订单
  async confirmOrder(id: number) {
    return ajax.put(`/order/${id}/finish`)
  },

  // 支付接口
  async payOrder(params: PayOrderParam) {
    return ajax.get('/paySuccess', { params })
  }
}
