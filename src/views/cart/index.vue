<script lang="ts" setup>
import SimpleHeader from '@/components/SimpleHeader.vue'
import CartItem from './CartItem.vue'
import { useCartStore } from '@/stores/cart'
import { computed, ref, watch } from 'vue'
import { showSuccessToast, type CheckboxInstance } from 'vant'
import type { ModifyCartDTO } from '@/api/cart'
import { useRouter } from 'vue-router'

const router = useRouter()
const cartStore = useCartStore()
const selectAll = ref(false)
const allCheckBoxRef = ref<CheckboxInstance>()
const selectIdList = ref<number[]>([])

watch(
  () => selectIdList.value.length,
  (selectLength: number) => {
    if (selectLength === cartStore.cartCount) {
      allCheckBoxRef.value?.toggle()
    } else if (selectAll.value && selectLength < cartStore.cartCount) {
      allCheckBoxRef.value?.toggle()
    }
  }
)

const selectPrice = computed(() => {
  const selectCart = cartStore.cartList.filter((item) =>
    selectIdList.value.includes(item.cartItemId)
  )
  return selectCart.reduce(
    (allPrice, cartItem) => allPrice + cartItem.sellingPrice * cartItem.goodsCount * 100,
    0
  )
})

const onAllCheckBoxClick = () => {
  if (selectAll.value) {
    selectIdList.value = cartStore.cartList.map((item) => item.cartItemId)
  } else {
    selectIdList.value = []
  }
}

const onDeleteCartItem = async (id: number) => {
  await cartStore.deleteCartItem(id)
  showSuccessToast('删除成功')
}

const onModifyCartItem = async (params: ModifyCartDTO) => {
  await cartStore.modifyCartItem(params)
}

const onGoHome = () => router.push('/')

const onSubmit = () => {
  if (!selectIdList.value.length) return
  router.push(`/create-order?cartItemIds=${selectIdList.value.join(',')}`)
}
</script>

<template>
  <div class="page">
    <simple-header>购物车</simple-header>
    <div class="cart-list" v-if="cartStore.cartCount">
      <van-checkbox-group v-model="selectIdList">
        <cart-item
          v-for="cartItem in cartStore.cartList"
          v-bind="cartItem"
          :key="cartItem.cartItemId"
          @delete="onDeleteCartItem"
          @modify-cart="onModifyCartItem"
        ></cart-item>
      </van-checkbox-group>
      <van-submit-bar
        button-color="var(--van-primary-color)"
        button-text="提交订单"
        :price="selectPrice"
        :disabled="!selectIdList.length"
        @submit="onSubmit"
      >
        <van-checkbox ref="allCheckBoxRef" v-model="selectAll" @click="onAllCheckBoxClick"
          >全选</van-checkbox
        >
      </van-submit-bar>
    </div>
    <!--购物车空状态-->
    <div class="empty" v-if="!cartStore.cartCount">
      <img
        class="empty-cart"
        src="https://s.yezgea02.com/1604028375097/empty-car.png"
        alt="空购物车"
      />
      <div class="title">购物车空空如也</div>
      <van-button round color="#1baeae" type="primary" @click="onGoHome" block>前往选购</van-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  position: relative;
}
.cart-list {
  height: 100%;
  padding-bottom: 50px;
  overflow-y: auto;
  background-color: #f3f2f2;
  .van-submit-bar {
    position: absolute;
    bottom: 50px;
    left: 0;
  }
}

.empty {
  width: 200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img.empty-cart {
    width: 100%;
    margin-bottom: 20px;
  }
  .title {
    margin-bottom: 20px;
  }
}
</style>
