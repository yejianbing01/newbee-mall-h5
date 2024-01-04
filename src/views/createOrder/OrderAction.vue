<script lang="ts" setup>
defineProps<{ totalMoney?: number }>()
const emit = defineEmits<{
  submit: []
}>()
</script>

<template>
  <div class="order-action">
    <div class="total-money">
      <div class="title">商品金额</div>
      <div class="price">￥{{ totalMoney }}</div>
    </div>
    <div class="order-btn" @click="emit('submit')">
      <van-button type="primary">生成订单</van-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.order-action {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: #fff;
  padding: 10px 20px;
  .total-money {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .title {
      font-size: 16px;
    }
    .price {
      font-size: 14px;
    }
  }

  .van-button {
    width: 100%;
  }
}
</style>
