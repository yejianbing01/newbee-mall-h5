<script lang="ts" setup>
import { goodsApi, type Goods } from '@/api/goods'
import SimpleHeader from '@/components/SimpleHeader.vue'
import GoodsSearch from './GoodsSearch.vue'
import { computed, reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import { showFailToast } from 'vant'

const route = useRoute()
const goodsCategoryId = route.query.categoryId ? Number(route.query.categoryId) : undefined

const state = reactive({
  totalCount: 0,
  totalPage: 5,
  pageSize: 10,

  loading: false,
  goodsList: [] as Array<Goods>
})

const searchParam = reactive({
  orderBy: undefined,
  keyword: undefined,
  pageNumber: 1,
  goodsCategoryId
})

const finished = computed(() => {
  return searchParam.pageNumber >= state.totalPage
})

watch(
  () => searchParam.orderBy,
  () => {
    init()
    findGoods()
  }
)

const onLoad = async () => {
  await findGoods()
  searchParam.pageNumber += 1
}

const onSearch = () => {
  init()
  findGoods()
}

const init = () => {
  state.goodsList = []
  searchParam.pageNumber = 1
}

const findGoods = async () => {
  try {
    state.loading = true
    const { totalCount, totalPage, list } = await goodsApi.findGoods(searchParam)
    state.totalCount = totalCount
    state.totalPage = totalPage
    state.goodsList = state.goodsList.concat(list)
  } catch (error) {
    showFailToast('服务器忙，请稍后再试')
  } finally {
    state.loading = false
  }
}
</script>

<template>
  <div class="goods page">
    <simple-header>
      <goods-search v-model="searchParam.keyword" />
      <template #rightArea>
        <button class="goods-search-btn" @click="onSearch">搜索</button>
      </template>
    </simple-header>
    <van-tabs v-model:active="searchParam.orderBy" type="card">
      <van-tab title="推荐"></van-tab>
      <van-tab title="新品" name="new"></van-tab>
      <van-tab title="价格" name="price"></van-tab>
    </van-tabs>
    <van-list
      v-model:loading="state.loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      class="goods-list"
    >
      <div v-for="goods in state.goodsList" :key="goods.goodsId" class="goods-list-item">
        <div class="left">
          <img :src="'http://47.99.134.126:28019' + goods.goodsCoverImg" alt="" />
        </div>
        <div class="right">
          <span class="name">{{ goods.goodsName }}</span>
          <span class="subtitle">{{ goods.goodsIntro }}</span>
          <span class="price">￥{{ goods.sellingPrice }}</span>
        </div>
      </div>
    </van-list>
  </div>
</template>

<style lang="scss" scoped>
.goods-search-btn {
  padding: 5px;
  background-color: $primary;
  color: #fff;
  line-height: 16px;
  border-radius: 4px;
}
.goods {
  display: flex;
  flex-direction: column;
  .goods-list {
    flex: 1;
    overflow-y: auto;
    .goods-list-item {
      height: 120px;
      width: 100%;
      display: flex;
      .left {
        flex-shrink: 0;
        width: 160px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        > img {
          width: 100px;
        }
      }
      .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        .name {
          margin: 10px 0 20px 0;
          font-size: 16px;
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .subtitle {
          margin-bottom: 10px;
          font-size: 12px;
          color: #999;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .price {
          color: $primary;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
