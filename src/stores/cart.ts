import { computed, onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import { cartApi, type CartItem, type ModifyCartDTO } from '@/api/cart'

export const useCartStore = defineStore('cart', () => {
  const cartList = ref<CartItem[]>([])
  async function getCartCount() {
    cartList.value = await cartApi.getCart()
  }
  const cartCount = computed(() => cartList.value.length)

  async function deleteCartItem(id: number) {
    await cartApi.deleteCartItem(id)
    getCartCount()
  }

  async function modifyCartItem(params: ModifyCartDTO) {
    await cartApi.modifyCart(params)
    getCartCount()
  }

  onMounted(() => {
    getCartCount()
  })

  return { cartList, cartCount, getCartCount, modifyCartItem, deleteCartItem }
})
