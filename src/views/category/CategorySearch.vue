<script lang="ts" setup>
import Icon from '@/components/Icon.vue'
</script>

<template>
  <div class="category-search-box">
    <router-link to="/" class="category-search">
      <icon class="icon-search"></icon>
      <span>全场50元起步</span>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.category-search-box {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .category-search {
    width: 80%;
    height: 30px;
    color: #9a9aa8;
    background: #f7f7f7;
    border-radius: 15px;
    display: flex;
    align-items: center;
    .icon-search {
      margin: 0 10px 0 20px;
    }
  }
}
</style>
