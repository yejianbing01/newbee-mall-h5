<template>
  <i class="iconfont" :class="props.class"></i>
</template>

<script lang="ts" setup>
type Props = {
  class: string
}
const props = defineProps<Props>()
</script>
