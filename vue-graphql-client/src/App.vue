<template>
  <div v-for=" item in result?.books">
    <span>{{ item.id }} </span>
    <span>{{ item.name }} </span>
    <span>{{ item.description }} </span>
  </div>
</template>

<script setup lang="ts">

import { useBooks } from '../src/services/index';
// 使用时加可选链，未加载完成时，result为undefined
const result = useBooks();
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
