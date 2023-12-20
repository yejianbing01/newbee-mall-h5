<script lang="ts" setup>
import type { PromotionGoods } from '@/api/home'
import { useRouter } from 'vue-router'

type Props = {
  title: string
  promotionGoodsList: Array<PromotionGoods>
}
const props = defineProps<Props>()

const router = useRouter()
const onClickGoods = (id: number) => {
  router.push(`/goods/${id}`)
}
</script>

<template>
  <div class="promotion">
    <h2 class="title">{{ props.title }}</h2>
    <div class="goods-list">
      <div
        class="goods"
        v-for="goods in props.promotionGoodsList"
        :key="goods.goodsId"
        @click="onClickGoods(goods.goodsId)"
      >
        <img :src="goods.goodsCoverImg" alt="" />
        <div class="desc">{{ goods.goodsName }}</div>
        <div class="price">￥{{ goods.sellingPrice }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.promotion {
  .title {
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    color: $primary;
    background: #f9f9f9;
  }
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    .goods {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid #e9e9e9;
      &:nth-child(2n + 1) {
        border-right: 1px solid #e9e9e9;
      }
      img {
        width: 120px;
        height: 120px;
      }
      .desc {
        text-align: center;
      }
      .price {
        color: $primary;
      }
    }
  }
}
</style>
