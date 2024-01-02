<script lang="ts" setup>
import SimpleHeader from '@/components/SimpleHeader.vue'
import AddressItem from './AddressItem.vue'
import { onMounted, ref } from 'vue'
import { addressApi, type Address } from '@/api/address'
import { useRouter } from 'vue-router'

const state = ref<{ addressList: Address[] }>({ addressList: [] })
const getAddressList = async () => {
  const dataList = await addressApi.addressList()
  state.value.addressList = dataList
}

onMounted(() => {
  getAddressList()
})

const router = useRouter()
const toAddressNew = () => router.push('/address-new')
const toAddressEdit = (id: number) => {
  router.push(`/address-new?id=${id}`)
}
</script>

<template>
  <div class="page">
    <simple-header>地址管理</simple-header>
    <div class="address-list">
      <address-item
        v-for="address in state.addressList"
        :key="address.addressId"
        :address="address"
        @onEdit="toAddressEdit"
      ></address-item>
    </div>
    <div class="address-new-btn">
      <van-button type="primary" :round="true" block @click="toAddressNew">新增地址</van-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  .address-list {
    height: 100%;
    overflow-y: auto;
  }
  .address-new-btn {
    position: fixed;
    background-color: #fff;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
  }
}
</style>
