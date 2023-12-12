<script lang="ts" setup>
import Icon from '@/components/Icon.vue'
import { ref } from 'vue'
const props = defineProps<{
  modelValue: string
}>()
const value = ref(props.modelValue)

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="goods-search-box">
    <div class="goods-search">
      <icon class="icon-search"></icon>
      <input
        placeholder="全场50元起步"
        v-model.lazy="value"
        @input="(e: Event) => emit('update:modelValue', (e.target as HTMLInputElement).value)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.goods-search-box {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  .goods-search {
    width: 100%;
    margin: 0 10px;
    height: 30px;
    background: #f7f7f7;
    border-radius: 15px;
    display: flex;
    align-items: center;
    .icon-search {
      margin: 0 10px 0 20px;
    }
    input {
      flex: 1;
      height: 100%;
      background-color: transparent;
    }
  }
}
</style>
