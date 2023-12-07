// user.js
import ajax from '@/utils/ajax' // 二次封装的 ajax

/** 轮播图信息 */
export type Carousel = {
  carouselUrl: string
  redirectUrl: string
}

/** 首页数据 */
export type IndexInfo = {
  carousels: Array<Carousel>
}

export const homeApi = {
  /** 首页数据 */
  async indexInfo() {
    return ajax.get<IndexInfo>('/index-infos').then((res) => res.data)
  }
}
