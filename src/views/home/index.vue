<script lang="ts" setup>
import HomeHeader from './HomeHeader.vue'
import HomeBanner from './HomeBanner.vue'
import { onMounted, ref } from 'vue'
import { homeApi, type IndexInfo } from '@/api/home'

const state = ref<IndexInfo>({
  carousels: []
})
onMounted(async () => {
  const data = await homeApi.indexInfo()
  state.value = data
})
</script>

<template>
  <div class="home">
    <home-header></home-header>
    <home-banner :banners="state.carousels"></home-banner>
  </div>
</template>

<style lang="scss" scoped>
.home {
}
</style>
