<script lang="ts" setup>
import SimpleHeader from '@/components/SimpleHeader.vue'
import { useRoute } from 'vue-router'
import { areaList } from '@vant/area-data'
import { showSuccessToast, type AddressEditInfo } from 'vant'
import { addressApi } from '@/api/address'
import { ref } from 'vue'
import { watchEffect } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const id = route.query.id as string

const onSave = async (content: AddressEditInfo) => {
  await addressApi.add({
    id: +id,
    userName: content.name,
    userPhone: content.tel,
    provinceName: content.province,
    cityName: content.city,
    regionName: content.county,
    detailAddress: content.addressDetail,
    defaultFlag: content.isDefault ? 1 : 0
  })
  showSuccessToast('地址保存成功')
  router.back()
}
const onDelete = async () => {
  await addressApi.delete(+id)
  showSuccessToast('删除成功')
  router.back()
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
