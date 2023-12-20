<script lang="ts" setup>
import SimpleHeader from '@/components/SimpleHeader.vue'
import GoodsDetail from './GoodsDetail.vue'
import GoodsAction from './GoodsAction.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = +route.params.id
</script>

<template>
  <div class="page">
    <simple-header>商品详情</simple-header>
    <goods-detail :id="id"></goods-detail>
    <goods-action :id="id"></goods-action>
  </div>
</template>
