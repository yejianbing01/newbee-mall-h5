<script lang="ts" setup>
import { useCartStore } from '@/stores/cart'
import Icon from './Icon.vue'
const cartStore = useCartStore()
</script>

<template>
  <div class="nav-bar">
    <ul class="nav-list">
      <li class="nav-list-item active">
        <router-link class="router-link" to="home">
          <icon class="icon-shouye"></icon>
          <span>首页</span>
        </router-link>
      </li>
      <li class="nav-list-item">
        <router-link class="router-link" to="category">
          <icon class="icon-leimupinleifenleileibie"></icon>
          <span> 分类 </span>
        </router-link>
      </li>
      <li class="nav-list-item">
        <router-link class="router-link" to="cart">
          <van-icon
            name="shopping-cart-o"
            :badge="!cartStore.cartCount ? '' : cartStore.cartCount"
          />
          <span>购物车 </span>
        </router-link>
      </li>
      <li class="nav-list-item">
        <router-link class="router-link" to="user">
          <icon class="icon-wode"></icon>
          <span>我的</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.nav-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  padding: 5px 0;
  z-index: 1000;
  background: #fff;
  border-top: 1px solid $primary;
  .nav-list {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 0;
    &-item {
      display: flex;
      align-items: center;
      justify-content: center;
      .router-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        &-active {
          color: $primary;
        }
        i {
          font-size: 22px;
        }
        span {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
