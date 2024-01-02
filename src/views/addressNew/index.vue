<script lang="ts" setup>
import SimpleHeader from '@/components/SimpleHeader.vue'
import { useRoute } from 'vue-router'
import { areaList } from '@vant/area-data'
import { showSuccessToast, type AddressEditInfo } from 'vant'
import { addressApi, type Address } from '@/api/address'
import { ref, watch } from 'vue'
import { watchEffect } from 'vue'

const route = useRoute()
const id = route.query.id as string

const onSave = async (content: AddressEditInfo) => {
  await addressApi.add({
    userName: content.name,
    userPhone: content.tel,
    provinceName: content.province,
    cityName: content.city,
    regionName: content.county,
    detailAddress: content.addressDetail,
    defaultFlag: content.isDefault ? 1 : 0
  })
  showSuccessToast('地址保存成功')
}
const onDelete = (value: AddressEditInfo) => {
  console.log(value)
}

const addressDetail = ref<AddressEditInfo>()
watchEffect(async () => {
  console.log(id)
  if (!id) return
  const { userName, userPhone, provinceName, cityName, regionName, detailAddress, defaultFlag } =
    await addressApi.addressDetail(+id)
  addressDetail.value = {
    name: userName,
    tel: userPhone,
    province: provinceName,
    city: cityName,
    county: regionName,
    addressDetail: detailAddress,
    isDefault: defaultFlag ? true : false,
    areaCode: '',
    country: ''
  }
})
</script>

<template>
  <div class="page">
    <simple-header>{{ id ? '修改地址' : '新增地址' }}</simple-header>
    <van-address-edit
      :address-info="addressDetail"
      :area-list="areaList"
      :show-delete="id ? true : false"
      show-set-default
      show-search-result
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>
