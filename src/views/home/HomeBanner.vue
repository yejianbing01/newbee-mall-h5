<script lang="ts" setup>
import type { Carousel } from '@/api/home'
import { useRouter } from 'vue-router'

type Props = {
  banners: Array<Carousel>
}
const props = defineProps<Props>()

const router = useRouter()
const goTo = () => router.push('/category')
</script>

<template>
  <van-swipe class="home-banner" :autoplay="5000" indicator-color="#1baeae">
    <van-swipe-item v-for="{ carouselUrl } in props.banners" :key="carouselUrl">
      <img :src="carouselUrl" alt="" @click="goTo()" />
    </van-swipe-item>
  </van-swipe>
</template>

<style lang="scss" scoped>
.home-banner {
  height: 200px;
  background-color: #ccc;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
