<script lang="ts" setup>
import SimpleHeader from '@/components/SimpleHeader.vue'
import CategorySearch from './CategorySearch.vue'
import CategoryNav from './CategoryNav.vue'
import CategoryList from './CategoryList.vue'
import { categoryApi, type Category } from '@/api/category'
import { onMounted } from 'vue'
import { reactive, computed } from 'vue'

type State = {
  categoryList: Array<Category>
  activeCategoryId: number
}
const state = reactive<State>({
  categoryList: [],
  activeCategoryId: 0
})
onMounted(async () => {
  const data = await categoryApi.getCategory()
  state.categoryList = data
  state.activeCategoryId = data[0].categoryId
})

const category2List = computed(() => {
  return (
    state.categoryList.find((item) => item.categoryId === state.activeCategoryId)
      ?.secondLevelCategoryVOS || []
  )
})
</script>

<template>
  <div class="page">
    <simple-header title="分类">
      <category-search></category-search>
    </simple-header>
    <div class="category-box">
      <category-nav
        :category-list="state.categoryList"
        v-model:active-category-id="state.activeCategoryId"
        class="category-box-nav"
      ></category-nav>
      <category-list :category2-list="category2List" class="category-box-content"></category-list>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category-box {
  height: 100%;
  overflow-y: auto;
  display: flex;
  &-nav {
    flex: 3;
  }
  &-content {
    flex: 7;
  }
}
</style>
