<script lang="ts" setup>
import { reactive } from 'vue'

const state = reactive({
  categoryList: [
    {
      name: '新蜂超市',
      imgUrl: '//s.weituibao.com/1583585285461/cs.png',
      categoryId: 100001
    },
    {
      name: '新蜂服饰',
      imgUrl: '//s.weituibao.com/1583585285468/fs.png',
      categoryId: 100003
    },
    {
      name: '全球购',
      imgUrl: '//s.weituibao.com/1583585285470/qq.png',
      categoryId: 100002
    },
    {
      name: '新蜂生鲜',
      imgUrl: '//s.weituibao.com/1583585285472/sx.png',
      categoryId: 100004
    },
    {
      name: '新蜂到家',
      imgUrl: '//s.weituibao.com/1583585285467/dj.png',
      categoryId: 100005
    },
    {
      name: '充值缴费',
      imgUrl: '//s.weituibao.com/1583585285465/cz.png',
      categoryId: 100006
    },
    {
      name: '9.9元拼',
      imgUrl: '//s.weituibao.com/1583585285469/pt.png',
      categoryId: 100007
    },
    {
      name: '领劵',
      imgUrl: '//s.weituibao.com/1583585285468/juan.png',
      categoryId: 100008
    },
    {
      name: '省钱',
      imgUrl: '//s.weituibao.com/1583585285471/sq.png',
      categoryId: 100009
    },
    {
      name: '全部',
      imgUrl: '//s.weituibao.com/1583585285470/qb.png',
      categoryId: 100010
    }
  ]
})
</script>

<template>
  <div class="category-list">
    <div class="category-item" v-for="item in state.categoryList" :key="item.categoryId">
      <img :src="item.imgUrl" alt="" />
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category-list {
  display: flex;
  flex-wrap: wrap;
  .category-item {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    img {
      width: 36px;
      height: 36px;
      margin-bottom: 8px;
    }
  }
}
</style>
