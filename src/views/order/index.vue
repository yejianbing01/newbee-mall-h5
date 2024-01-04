<script lang="ts" setup>
import { orderApi, type OrderItem } from '@/api/order'
import SimpleHeaderVue from '@/components/SimpleHeader.vue'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const state = reactive({
  status: '',
  refreshing: false,
  loading: false,
  finished: false,
  list: [] as OrderItem[],
  page: 1,
  totalPage: 0
})

const onLoad = async () => {
  if (!state.refreshing && state.page < state.totalPage) {
    state.page = state.page + 1
  }
  if (state.refreshing) {
    state.list = []
  }
  await loadData()
  state.refreshing = false
}

const onRefresh = () => {
  state.refreshing = true
  state.finished = false
  state.loading = false
  state.page = 1
  onLoad()
}

const onChangeTab = (name: string) => {
  state.status = name
  onRefresh()
}

const goTo = (id: string) => {
  router.push({ path: '/order-detail', query: { id } })
}

const loadData = async () => {
  const { totalPage, list } = await orderApi.getOrderList({
    pageNumber: state.page,
    status: state.status
  })
  state.list = state.list.concat(list)
  state.totalPage = totalPage
  state.loading = false
  if (state.page >= totalPage) {
    state.finished = true
  }
}
</script>

<template>
  <div class="page">
    <simple-header>我的订单</simple-header>
    <van-tabs v-model:active="state.status" @change="onChangeTab">
      <van-tab title="全部" name=""></van-tab>
      <van-tab title="待付款" name="0"></van-tab>
      <van-tab title="待确认" name="1"></van-tab>
      <van-tab title="待发货" name="2"></van-tab>
      <van-tab title="已发货" name="3"></van-tab>
      <van-tab title="交易完成" name="4"></van-tab>
    </van-tabs>
    <div class="content">
      <van-pull-refresh v-model="state.refreshing" @refresh="onRefresh" class="refresh">
        <van-list
          class="content-list"
          finished-text="没有更多了"
          v-model:loading="state.loading"
          :offset="30"
          :finished="state.finished"
          @load="onLoad"
        >
          <div
            v-for="(item, index) in state.list"
            :key="index"
            class="order-item-box"
            @click="goTo(item.orderNo)"
          >
            <div class="order-item-header">
              <span>订单时间：{{ item.createTime }}</span>
              <span>{{ item.orderStatusString }}</span>
            </div>
            <van-card
              v-for="one in item.newBeeMallOrderItemVOS"
              :key="one.goodsId"
              :num="one.goodsCount"
              :price="one.sellingPrice"
              desc="全场包邮"
              :title="one.goodsName"
              :thumb="one.goodsCoverImg"
            />
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  height: 100%;
  overflow: hidden;
  padding: 10px;
  .refresh {
    height: 100%;
    overflow: hidden;
  }
  &-list {
    height: 100%;
    overflow-y: auto;
  }
}
</style>
