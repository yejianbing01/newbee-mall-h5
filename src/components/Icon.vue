<template>
  <i class="iconfont" :class="props.class" @click="onClick"></i>
</template>

<script lang="ts" setup>
type Props = {
  class: string
  onClick?: (payload: MouseEvent) => void
}
const props = defineProps<Props>()
</script>
