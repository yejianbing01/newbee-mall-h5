<script lang="ts" setup>
import { useRouter } from 'vue-router'
import Icon from './Icon.vue'

type Props = { title: string }
const props = defineProps<Props>()

const router = useRouter()
const onBack = () => router.back()
</script>

<template>
  <header class="simple-header">
    <icon class="icon-back" @click="onBack"></icon>
    <span>{{ props.title }}</span>
    <icon class="icon-more"></icon>
  </header>
</template>

<style lang="scss">
.simple-header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 44px;
  line-height: 44px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid #dcdcdc;
  color: #252525;
  font-size: 14px;
  i {
    font-size: 22px;
  }
}
</style>
