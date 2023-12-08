<script lang="ts" setup>
import SimpleHeader from '@/components/SimpleHeader.vue'
import CategorySearch from './CategorySearch.vue'
import { categoryApi, type Category } from '@/api/category'
import { onMounted } from 'vue'
import { reactive } from 'vue'

type State = {
  categoryList: Array<Category>
  activeCategoryId: number
}
const state = reactive<State>({
  categoryList: [],
  activeCategoryId: 1
})
onMounted(async () => {
  const data = await categoryApi.getCategory()
  state.categoryList = data
  state.activeCategoryId = data[0].categoryId
})

const selectCategory = (categoryId: number) => (state.activeCategoryId = categoryId)
</script>

<template>
  <div class="page">
    <simple-header title="分类">
      <category-search></category-search>
    </simple-header>
    <div class="category-box">
      <ul class="category-nav">
        <li
          v-for="item in state.categoryList"
          v-text="item.categoryName"
          :key="item.categoryId"
          :class="{ active: item.categoryId === state.activeCategoryId }"
          @click="selectCategory(item.categoryId)"
        ></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category-box {
  height: 100%;
  overflow-y: auto;
  display: flex;
  .category-nav {
    width: 28%;
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
}
</style>
