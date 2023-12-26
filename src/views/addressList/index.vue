<script lang="ts" setup>
import SimpleHeader from '@/components/SimpleHeader.vue'
import AddressItem from './AddressItem.vue'
</script>

<template>
  <div class="page">
    <simple-header>地址管理</simple-header>
    <div class="address-list">
      <address-item v-for="item in 10" :key="item"></address-item>
    </div>
    <div class="address-new-btn">
      <van-button type="primary" :round="true" block>新增地址</van-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  .address-list {
    height: 100%;
    overflow-y: auto;
  }
  .address-new-btn {
    position: fixed;
    background-color: #fff;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
  }
}
</style>
