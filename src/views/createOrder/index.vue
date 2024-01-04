<script lang="ts" setup>
import SimpleHeader from '@/components/SimpleHeader.vue'
import OrderAddress from './OrderAddress.vue'
import OrderGoodsItem from './OrderGoodsItem.vue'
import OrderAction from './OrderAction.vue'
import { useRoute } from 'vue-router'
import { onBeforeMount } from 'vue'
import { showFailToast, showLoadingToast, showSuccessToast } from 'vant'
import { useRouter } from 'vue-router'
import { addressApi, type Address } from '@/api/address'
import { ref } from 'vue'
import { cartApi, type CartItem } from '@/api/cart'
import { computed } from 'vue'
import { orderApi } from '@/api/order'
import { reactive } from 'vue'
import { useCartStore } from '@/stores/cart'

const router = useRouter()
const route = useRoute()
const { cartItemIds, addressId } = route.query as { cartItemIds: string; addressId: string }
const cartStore = useCartStore()

onBeforeMount(() => {
  checkCartItemId()
  addressId ? getSelectAddress() : getDefaultAddress()
  getCartItems()
})

const checkCartItemId = () => {
  if (!cartItemIds) {
    showFailToast('无效订单')
    router.back()
  }
}

const address = ref<Address>()
const getDefaultAddress = async () => {
  address.value = await addressApi.defaultAddress()
}
const getSelectAddress = async () => {
  address.value = await addressApi.addressDetail(+(addressId as string))
}

const toAddressList = () => {
  router.push(`/address-list?cartItemIds=${cartItemIds}&from=/create-order`)
}

const cartItems = ref<CartItem[]>()
const getCartItems = async () => {
  if (!cartItemIds) return
  cartItems.value = await cartApi.getByCartItemIds({ cartItemIds })
}

const totalMoney = computed(() => {
  if (!cartItems.value) return
  return cartItems.value.reduce(
    (total, { goodsCount, sellingPrice }) => total + goodsCount * sellingPrice,
    0
  )
})

const orderInfo = reactive({ billNo: '', showPay: false })
const createOrder = async () => {
  if (!address.value) return
  const billNo = await orderApi.createOrder({
    addressId: address.value?.addressId,
    cartItemIds: cartItemIds.split(',').map((id) => +id)
  })
  cartStore.getCartCount()
  orderInfo.billNo = billNo
  orderInfo.showPay = true
}

const onPayOrder = async (payType: 1 | 2) => {
  if (!orderInfo.billNo) {
    showFailToast('单据异常')
    return router.push('/home')
  }
  await orderApi.payOrder({ orderNo: orderInfo.billNo, payType })
  showLoadingToast({ message: '支付中...', duration: 2000 })
  setTimeout(() => {
    showSuccessToast('支付成功')
    router.push('/order')
  }, 2000)
}

const onCancelPay = () => {
  router.push('/order')
  return true
}
</script>

<template>
  <div class="page">
    <simple-header @back="router.push('/cart')">填写订单</simple-header>
    <div class="page-content">
      <order-address :address="address" @click="toAddressList"></order-address>
      <order-goods-item
        v-for="item in cartItems"
        :key="item.goodsId"
        :item="item"
      ></order-goods-item>
    </div>
    <order-action :total-money="totalMoney" @submit="createOrder"></order-action>
    <van-popup
      v-model:show="orderInfo.showPay"
      round
      position="bottom"
      :style="{ height: '30%' }"
      :before-close="onCancelPay"
    >
      <div :style="{ width: '90%', margin: '0 auto', padding: '50px 0' }">
        <van-button :style="{ marginBottom: '10px' }" color="#1989fa" block @click="onPayOrder(1)"
          >支付宝支付</van-button
        >
        <van-button color="#4fc08d" block @click="onPayOrder(2)">微信支付</van-button>
      </div>
    </van-popup>
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
