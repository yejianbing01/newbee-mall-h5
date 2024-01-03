<script lang="ts" setup>
import SimpleHeader from '@/components/SimpleHeader.vue'
import OrderAddress from './OrderAddress.vue'
import OrderGoodsItem from './OrderGoodsItem.vue'
import OrderAction from './OrderAction.vue'
import { useRoute } from 'vue-router'
import { onBeforeMount } from 'vue'
import { showFailToast } from 'vant'
import { useRouter } from 'vue-router'
import { addressApi, type Address } from '@/api/address'
import { ref } from 'vue'
import { cartApi, type CartItem } from '@/api/cart'
import { computed } from 'vue'

const router = useRouter()
const route = useRoute()
const { cartItemIds, addressId } = route.query as { cartItemIds: string; addressId: string }

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
    <order-action :total-money="totalMoney"></order-action>
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
