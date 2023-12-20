<script lang="ts" setup>
import { goodsApi, type Goods } from '@/api/goods'
import { onMounted, ref } from 'vue'

const props = defineProps<{ id: number }>()

const goodsDetailRef = ref<Goods>()
onMounted(async () => {
  const detail = await goodsApi.getGoodsDetail(props.id)
  goodsDetailRef.value = detail
})
</script>

<template>
  <div class="goods-detail-content">
    <div class="swipe-wrap">
      <van-swipe class="goods-swipe" indicator-color="white">
        <van-swipe-item v-for="(item, index) in goodsDetailRef?.goodsCarouselList" :key="index">
          <img :src="item" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="goods-info">
      <div class="title">{{ goodsDetailRef?.goodsName }}</div>
      <div class="desc">免邮费 顺丰快递</div>
      <div class="price">￥{{ goodsDetailRef?.sellingPrice }}</div>
    </div>
    <div class="goods-intro">
      <ul class="nav">
        <li>概述</li>
        <li>参数</li>
        <li>安装服务</li>
        <li>常见问题</li>
      </ul>
      <div class="content" v-html="goodsDetailRef?.goodsDetailContent"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.goods-detail-content {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .swipe-wrap {
    .goods-swipe {
      height: 500px;
      img {
        width: 100%;
      }
    }
  }
  .goods-info {
    padding: 0 10px;
    margin-bottom: 10px;
    .title {
      margin-bottom: 5px;
      font-size: 18px;
      color: #333;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .desc {
      margin-bottom: 5px;
      font-size: 16px;
      color: #999;
    }
    .price {
      color: #f63515;
      font-size: 22px;
    }
  }
  .goods-intro {
    padding: 0 20px;
    color: #333;
    .nav {
      display: flex;
      font-size: 15px;
      margin-bottom: 20px;
      li {
        flex: 1;
        height: 40px;
        line-height: 40px;
        border-right: 1px solid #999;
        text-align: center;
        &:last-child {
          border: none;
        }
      }
    }
    .content {
      :deep(img) {
        width: 100%;
      }
    }
  }
}
</style>
