<template>
  <div class="box">
    <icon class="icon-shequgouwu">主要按钮</icon>
  </div>
</template>

<script lang="ts" setup>
import Icon from '@/components/Icon.vue'
</script>

<style lang="scss" scoped>
@import '@/style/mixin.scss';

.box {
  width: 100px;
  height: 100px;
  @include border-1px(#000);
}
</style>
