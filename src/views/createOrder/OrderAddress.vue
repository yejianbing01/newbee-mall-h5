<script lang="ts" setup></script>

<template>
  <div class="order-address">
    <div class="content">
      <div class="name-phone">
        <span class="name">xxx</span>
        <span class="phone">12111111111</span>
      </div>
      <div class="address">ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</div>
    </div>
    <div class="action-icon">
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.order-address {
  width: 100%;
  height: 80px;
  padding: 20px 10px;
  font-size: 16px;
  color: #525254;
  background-color: #fff;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .content {
    flex: 1;
    overflow: hidden;
    margin-right: 20px;
    .name-phone {
      margin-bottom: 8px;
      .name {
        margin-right: 8px;
      }
    }
    .address {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .action-icon {
    width: 16px;
    font-size: 16px;
  }

  &::before {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 2px;
    background: -webkit-repeating-linear-gradient(
      135deg,
      #ff6c6c 0,
      #ff6c6c 20%,
      transparent 0,
      transparent 25%,
      #1989fa 0,
      #1989fa 45%,
      transparent 0,
      transparent 50%
    );
    background: repeating-linear-gradient(
      -45deg,
      #ff6c6c 0,
      #ff6c6c 20%,
      transparent 0,
      transparent 25%,
      #1989fa 0,
      #1989fa 45%,
      transparent 0,
      transparent 50%
    );
    background-size: 80px;
    content: '';
  }
}
</style>
