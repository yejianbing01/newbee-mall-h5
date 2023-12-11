<script lang="ts" setup>
import type { Category } from '@/api/category'

const props = defineProps<{
  categoryList: Array<Category>
  activeCategoryId: number
}>()
// 当前选择分类
const emit = defineEmits(['update:activeCategoryId'])
const selectCategory = (categoryId: number) => {
  emit('update:activeCategoryId', categoryId)
}
</script>

<template>
  <ul class="category-nav">
    <li
      v-for="item in props.categoryList"
      v-text="item.categoryName"
      :key="item.categoryId"
      :class="{ active: item.categoryId === activeCategoryId }"
      @click="selectCategory(item.categoryId)"
    ></li>
  </ul>
</template>

<style lang="scss" scoped>
.category-nav {
  background: #f8f8f8;
  li {
    height: 56px;
    text-align: center;
    line-height: 56px;
    font-size: 14px;
    &.active {
      color: $primary;
      background-color: #fff;
    }
  }
}
</style>
