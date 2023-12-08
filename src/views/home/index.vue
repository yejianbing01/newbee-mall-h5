<script lang="ts" setup>
import HomeHeader from './HomeHeader.vue'
import HomeBanner from './HomeBanner.vue'
import Category from './Category.vue'
import Promotion from './Promotion.vue'
import { onMounted, ref } from 'vue'
import { homeApi, type IndexInfo } from '@/api/home'

const state = ref<IndexInfo>({
  carousels: [],
  hotGoodses: [],
  newGoodses: [],
  recommendGoodses: []
})
onMounted(async () => {
  const data = await homeApi.indexInfo()
  state.value = data
})
</script>

<template>
  <div class="home page">
    <home-header></home-header>
    <div class="content">
      <home-banner :banners="state.carousels"></home-banner>
      <category></category>
      <promotion title="新品上线" :promotion-goods-list="state.newGoodses"></promotion>
      <promotion title="热门商品" :promotion-goods-list="state.hotGoodses"></promotion>
      <promotion title="最新推荐" :promotion-goods-list="state.recommendGoodses"></promotion>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  padding-top: 0;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
