import ajax from '@/utils/ajax' // 二次封装的 ajax

type AddressSaveParam = {
  id?: number
  userName: string
  userPhone: string
  provinceName: string
  cityName: string
  regionName: string
  detailAddress: string
  defaultFlag: 1 | 0
}

export type Address = {
  addressId: number
  userName: string
  userPhone: string
  provinceName: string
  cityName: string
  regionName: string
  detailAddress: string
  defaultFlag: 1 | 0
}

export const addressApi = {
  async add(params: AddressSaveParam) {
    return ajax.post<null>('/address', params).then((res) => res.data)
  },

  async edit(params: AddressSaveParam) {
    return ajax.put<null>('/address', params).then((res) => res.data)
  },

  async delete(id: number) {
    return ajax.delete<null>(`/address/${id}`).then((res) => res.data)
  },

  async defaultAddress() {
    return ajax.get<Address>('/address/default').then((res) => res.data)
  },

  async addressList() {
    return ajax
      .get<Address[]>('/address', { params: { pageNumber: 1, pageSize: 1000 } })
      .then((res) => res.data)
  },

  async addressDetail(id: number) {
    return ajax.get<Address>(`/address/${id}`).then((res) => res.data)
  }
}
