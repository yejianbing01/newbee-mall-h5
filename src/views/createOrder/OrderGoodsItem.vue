<script lang="ts" setup>
import type { CartItem } from '@/api/cart'

defineProps<{ item: CartItem }>()
</script>

<template>
  <div class="order-goods-item">
    <div class="goods-img">
      <img :src="item.goodsCoverImg" alt="" />
    </div>
    <div class="goods-desc">
      <div class="title-num">
        <span class="title">{{ item.goodsName }}</span>
        <span class="num">x {{ item.goodsCount }}</span>
      </div>
      <div class="price">￥ {{ item.sellingPrice }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.order-goods-item {
  width: 100%;
  height: 100px;
  background-color: #fff;
  margin: 10px 0;
  padding: 10px;
  display: flex;
  align-items: center;
  .goods-img {
    width: 100px;
    margin-right: 20px;
    img {
      width: 100%;
    }
  }

  .goods-desc {
    flex: 1;
    overflow: hidden;
    padding-right: 20px;
    .title-num {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      font-size: 14px;
      .title {
        flex: 1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-right: 10px;
      }
    }
    .price {
      font-size: 15px;
    }
  }
}
</style>
