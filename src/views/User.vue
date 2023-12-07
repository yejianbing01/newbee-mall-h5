<script lang="ts" setup>
import SimpleHeader from '@/components/SimpleHeader.vue'
import Icon from '@/components/Icon.vue'
import avatar from '@/assets/img/user-graduate.png'
import { onMounted, ref } from 'vue'
import { getUserInfo, type UserInfo } from '@/api/user'

const userInfo = ref<UserInfo>({
  loginName: '',
  nickName: '',
  introduceSign: ''
})
onMounted(async () => {
  await getUserInfo().then((res) => (userInfo.value = res.data))
})
</script>

<template>
  <div class="page">
    <SimpleHeader title="我的"></SimpleHeader>
    <div class="user-box">
      <div class="user-info">
        <img :src="avatar" alt="头像" class="user-info-avatar" />
        <div class="user-info-desc">
          <span>昵称：{{ userInfo.nickName }}</span>
          <span>登录名：{{ userInfo.loginName }}</span>
          <span>个性签名：{{ userInfo.introduceSign }}</span>
        </div>
      </div>
      <ul class="user-list">
        <li>
          <span>我的订单</span>
          <icon class="icon-a-jiantou-you" />
        </li>
        <li>
          <span>账号管理</span>
          <icon class="icon-a-jiantou-you" />
        </li>
        <li>
          <span>地址管理</span>
          <icon class="icon-a-jiantou-you" />
        </li>
        <li>
          <span>关于我们</span>
          <icon class="icon-a-jiantou-you" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-box {
  padding: 10px 10px;
  .user-info {
    height: 100px;
    background-color: $primary;
    @include borderRadius(6px);
    color: #fff;
    font-size: 14px;
    display: flex;
    align-items: center;
    &-avatar {
      width: 50px;
      margin: 0 20px;
    }
    &-desc {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
  }
  .user-list {
    margin-top: 30px;
    padding: 0 10px;
    font-size: 14px;
    li {
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
