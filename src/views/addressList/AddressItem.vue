<script lang="ts" setup></script>

<template>
  <div class="address-item">
    <div class="info">
      <div class="name-phone">
        <span class="name">xxx</span>
        <span class="phone">1111111111111</span>
        <van-tag round type="primary">默认</van-tag>
      </div>
      <div class="address">xxxxxxxxxxxxxxxxxxxsssssssssssssssssssssssssssxxxxxxxxxxxxxxxxx</div>
    </div>
    <div class="action-icon">
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
