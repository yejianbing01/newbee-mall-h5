<script lang="ts" setup>
import { type CartItem, type ModifyCartDTO } from '@/api/cart'
import { showFailToast } from 'vant'
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'delete', id: number): void
  (e: 'modifyCart', params: ModifyCartDTO): void
}>()

const cartItem = defineProps<CartItem>()
const count = ref(cartItem.goodsCount)

const onModifyCart = () => {
  emit('modifyCart', { cartItemId: cartItem.cartItemId, goodsCount: count.value })
}
const onDelete = () => emit('delete', cartItem.cartItemId)
</script>

<template>
  <div class="cart-item">
    <van-swipe-cell>
      <div class="cart-item-content">
        <van-checkbox class="select-wrap" :name="cartItem.cartItemId"></van-checkbox>
        <div class="goods">
          <img :src="cartItem.goodsCoverImg" alt="" class="goods-img" />
          <div class="goods-desc">
            <div class="goods-desc-title">{{ cartItem.goodsName }}</div>
            <div class="goods-desc-action">
              <span>￥{{ cartItem.sellingPrice }}</span>
              <van-stepper v-model="count" max="5" @change="onModifyCart"></van-stepper>
            </div>
          </div>
        </div>
      </div>
      <template #right>
        <van-button square icon="delete" type="danger" class="delete-button" @click="onDelete" />
      </template>
    </van-swipe-cell>
  </div>
</template>

<style lang="scss" scoped>
.cart-item {
  &-content {
    padding: 0 15px;
    margin: 4px 6px;
    border-radius: 6px;
    background-color: #fff;

    height: 120px;
    display: flex;
    align-items: center;
    .goods {
      flex: 1;
      display: flex;
      align-items: center;
      overflow: hidden;
      &-img {
        width: 100px;
        height: 100px;
      }
      &-desc {
        flex: 1;
        overflow: hidden;
        font-size: 14px;
        &-title {
          margin-bottom: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        &-action {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
  .delete-button {
    height: 100%;
  }
}
</style>
