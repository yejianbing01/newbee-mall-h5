// user.js
import ajax from '@/utils/ajax' // 二次封装的 ajax
import { getLocal } from '@/utils/localStage'

/** 轮播图信息 */
export type CategoryItem = {
  categoryId: number
  categoryLevel: 1 | 2 | 3
  categoryName: string
}

/** 2级分类 */
export type Category2 = CategoryItem & { thirdLevelCategoryVOS: Array<CategoryItem> }

/** 3级分类 */
export type Category = CategoryItem & { secondLevelCategoryVOS: Array<Category2> }

export type Orderby = 'new' | 'price' | ''

/** 商品列表查询参数 */
export type FindGoodsParam = {
  pageNumber: number
  goodsCategoryId?: number
  keyword?: string
  orderBy?: Orderby
}

/** 商品 */
export type Goods = {
  goodsId: number
  goodsName: string
  goodsIntro: string
  goodsCoverImg: string
  sellingPrice: number
}

/** 商品api */
export const goodsApi = {
  /** 分类列表 */
  async getCategory() {
    return ajax.get<Array<Category>>('/categories').then((res) => res.data)
  },

  /** 商品列表 */
  async findGoods(params: FindGoodsParam) {
    return ajax.get<DataListResponse<Goods>>('/search', { params }).then((res) => res.data)
  }
}
