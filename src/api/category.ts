// user.js
import ajax from '@/utils/ajax' // 二次封装的 ajax

/** 轮播图信息 */
export type CategoryItem = {
  categoryId: number
  categoryLevel: 1 | 2 | 3
  categoryName: string
}

export type Category2 = CategoryItem & { thirdLevelCategoryVOS: Array<CategoryItem> }

export type Category = CategoryItem & { secondLevelCategoryVOS: Array<Category2> }

export const categoryApi = {
  /** 分类列表 */
  async getCategory() {
    return ajax.get<Array<Category>>('/categories').then((res) => res.data)
  }
}
