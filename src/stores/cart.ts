import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import { cartApi } from '@/api/cart'

export const useCartStore = defineStore('cart', () => {
  const cartCount = ref(0)

  async function getCartCount() {
    const cartList = await cartApi.getCart()
    cartCount.value = cartList.length
  }

  onMounted(() => {
    getCartCount()
  })

  return { cartCount, getCartCount }
})
