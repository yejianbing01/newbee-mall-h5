<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { cartApi } from '@/api/cart'
import { showSuccessToast } from 'vant'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

const props = defineProps<{ id: number }>()
const cartStore = useCartStore()
const { cartCount } = storeToRefs(cartStore)

const router = useRouter()
const onToCart = () => router.push('/cart')

const onAddCart = async () => {
  await cartApi.addCart({ goodsCount: 1, goodsId: props.id })
  showSuccessToast('添加成功')
  cartStore.getCartCount()
}
</script>

<template>
  <div class="goods-action">
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" />
      <van-action-bar-icon
        icon="cart-o"
        :badge="cartCount ? cartCount : ''"
        text="购物车"
        @click="onToCart"
      />
      <van-action-bar-button type="warning" text="加入购物车" @click="onAddCart" />
      <van-action-bar-button type="danger" text="立即购买" />
    </van-action-bar>
  </div>
</template>

<style lang="scss" scoped>
.goods-action {
  :deep(.van-action-bar-button--warning) {
    background: linear-gradient(to right, #6bd8d8, $primary);
  }
  :deep(.van-action-bar-button--danger) {
    background: linear-gradient(to right, #0dc3c3, #098888) !important;
  }
}
</style>
