<script lang="ts" setup>
import Icon from '@/components/Icon.vue'
import { getLocal } from '@/utils/localStage'
import { onMounted, reactive } from 'vue'

const state = reactive({
  isLogin: false
})

onMounted(() => {
  state.isLogin = Boolean(getLocal('token'))
})
</script>

<template>
  <div class="home-header">
    <router-link to="/category" class="menu">
      <icon class="icon-menu" />
    </router-link>
    <router-link to="/goods" class="search">
      <h1 class="title">新蜂商城</h1>
      <i class="line"></i>
      <span class="desc">山河无恙，人间皆安</span>
    </router-link>
    <router-link to="/login" class="login-btn" v-if="!state.isLogin">登录</router-link>
    <router-link class="user-btn" to="./user" v-else>
      <icon class="icon-mine_wode"></icon>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.home-header {
  height: 60px;
  background-color: $primary;
  display: flex;
  align-items: center;
  padding: 0 10px;
  .menu .icon-menu {
    font-size: 26px;
    color: #fff;
  }
  .search {
    flex: 1;
    display: flex;
    align-items: center;
    height: 40px;
    padding: 8px 16px;
    margin: 0 20px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 20px;
    color: #232326;
    .title {
      color: $primary;
      font-size: 18px;
    }
    .line {
      width: 2px;
      height: 26px;
      background-color: #666;
      margin: 0 20px 0 10px;
    }
    .desc {
      color: #666;
      font-size: 12px;
      font-weight: 500;
    }
  }
  .login-btn {
    color: #fff;
    font-size: 18px;
  }
  .user-btn .iconfont {
    color: #fff;
    font-size: 24px;
  }
}
</style>
