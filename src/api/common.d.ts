/** 列表响应 */
interface DataListResponse<T> {
  totalCount: number
  totalPage: number
  pageSize: number
  currPage: number
  list: Array<T>
}
