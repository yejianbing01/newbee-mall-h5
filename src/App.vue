<script lang="ts" setup>
import { useRouter } from 'vue-router'
import NavBar from './components/NavBar.vue'
import { ref } from 'vue'
const router = useRouter()

const showNavBar = ref(true)
router.beforeEach((to) => {
  if (to.meta.needNav === false) {
    showNavBar.value = false
  } else {
    showNavBar.value = true
  }
})
</script>

<template>
  <router-view></router-view>
  <nav-bar v-if="showNavBar"></nav-bar>
</template>
