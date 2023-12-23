<script lang="ts" setup>
import SimpleHeader from '@/components/SimpleHeader.vue'
import OrderAddress from './OrderAddress.vue'
import OrderGoodsItem from './OrderGoodsItem.vue'
import OrderAction from './OrderAction.vue'
</script>

<template>
  <div class="page">
    <simple-header>填写订单</simple-header>
    <div class="page-content">
      <order-address></order-address>
      <order-goods-item></order-goods-item>
    </div>
    <order-action></order-action>
  </div>
</template>

<style lang="scss" scoped>
.page-content {
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  background: #f9f9f9;
  padding-bottom: 150px;
}
</style>
