<script lang="ts" setup>
import type { Category2 } from '@/api/goods'
import categoryImg from '@/assets/img/category.png'
import { useRouter } from 'vue-router'

const props = defineProps<{ category2List: Array<Category2> }>()

const router = useRouter()
const onClickCategoryItem = (categoryId: number) => {
  router.push(`/goods?categoryId=${categoryId}`)
}
</script>

<template>
  <div class="category-list">
    <div class="category-two" v-for="item in props.category2List" :key="item.categoryId">
      <div class="category-two-name">{{ item.categoryName }}</div>
      <ul class="category-three">
        <li
          v-for="category3 in item.thirdLevelCategoryVOS"
          class="category-three-item"
          :key="category3.categoryId"
          @click="onClickCategoryItem(category3.categoryId)"
        >
          <img :src="categoryImg" alt="分类" />
          <span class="category-three-name">{{ category3.categoryName }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category-list {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  .category-two-name {
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
  }
  .category-three {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
    }
    img {
      width: 28px;
      margin-bottom: 10px;
    }
  }
}
</style>
@/api/goods
