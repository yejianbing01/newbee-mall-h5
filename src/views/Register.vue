<script lang="ts" setup>
import SimpleHeader from '@/components/SimpleHeader.vue'
import logo from '@/assets/img/newbee-mall-vue3-app-logo.png'
import { ref } from 'vue'
import { register, type RegisterParam } from '@/api/user'
import ImageVerify from '@/components/ImageVerify.vue'
import { showFailToast, showSuccessToast } from 'vant'
import { useRouter } from 'vue-router'

const verifyCode = ref<string>('')
const imageVerifyRef = ref<{ check: (verify: string) => boolean }>()
const registerParam = ref<RegisterParam>({
  loginName: '',
  password: ''
})
const router = useRouter()

const onSubmit = async () => {
  if (!imageVerifyRef.value?.check(verifyCode.value)) {
    return showFailToast('验证码有误')
  }
  await register({
    loginName: registerParam.value.loginName,
    password: registerParam.value.password
  })
  showSuccessToast('注册成功')
  router.replace('/login')
}
</script>

<template>
  <div class="page register">
    <simple-header title="注册" />
    <img :src="logo" class="logo" />
    <van-form @submit="onSubmit" :show-error-message="false" show-error>
      <van-field
        v-model="registerParam.loginName"
        label="手机号"
        placeholder="请填写手机号"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="registerParam.password"
        type="password"
        label="密码"
        placeholder="请填写密码"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="verifyCode"
        label-class="verify-code"
        label="验证码"
        placeholder="请输入验证码"
        :rules="[{ required: true }]"
      >
        <template #button>
          <image-verify ref="imageVerifyRef" />
        </template>
      </van-field>
      <div class="login-nav">
        <router-link to="/login">已有账号? 立即登录</router-link>
      </div>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 注册 </van-button>
      </div>
    </van-form>
  </div>
</template>

<style lang="scss" scoped>
.register {
  .logo {
    width: 120px;
    height: 120px;
    display: block;
    margin: 80px auto 20px;
  }
  :deep(.verify-code) {
    display: flex;
    align-items: center;
  }
  .login-nav {
    text-align: right;
    padding: 10px var(--van-cell-horizontal-padding);
    a {
      color: $primary;
    }
  }
}
</style>
