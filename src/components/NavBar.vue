<script lang="ts" setup>
import Icon from './Icon.vue'
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
          <icon class="icon-gouwuche"></icon>
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
@import '@/style/mixin.scss';
.nav-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 5px 0;
  z-index: 1000;
  background: #fff;
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
