<script lang="ts" setup>
import { computed, defineProps, defineEmits } from 'vue'
import type { Address } from '@/api/address'

const { address } = defineProps<{ address: Address }>()

const emit = defineEmits<{
  onEdit: [id: number]
  click: [id: number]
}>()

const fullAddress = computed(
  () => `${address.provinceName} ${address.cityName} ${address.regionName} ${address.detailAddress}`
)
</script>

<template>
  <div class="address-item" @click="emit('click', address.addressId)">
    <div class="info">
      <div class="name-phone">
        <span class="name">{{ address.userName }}</span>
        <span class="phone">{{ address.userPhone }}</span>
        <van-tag round type="primary" v-if="address.defaultFlag">默认</van-tag>
      </div>
      <div class="address">{{ fullAddress }}</div>
    </div>
    <div class="action-icon" @click="emit('onEdit', address.addressId)">
      <van-icon name="edit" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.address-item {
  width: 100%;
  overflow: hidden;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .info {
    flex: 1;
    margin-right: 20px;
    overflow: hidden;
    .name-phone {
      font-size: 16px;
      margin-bottom: 8px;
      .phone {
        margin: 0 5px;
      }
    }
    .address {
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 14px;
    }
  }

  .action-icon {
    font-size: 20px;
    color: #999;
  }
}
</style>
