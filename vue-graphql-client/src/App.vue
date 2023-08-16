<template>
  <input type="text" @keyup.enter="onEnter" />
  <div class="container" v-for=" item in bookResult" @click="removeBookById(item)">
    <span>id: {{ item.id }} </span>
    <span>name: {{ item.name }} </span>
    <span>description: {{ item.description }} </span>
  </div>
  <div>
    <!-- <div>
      {{ detail }}
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { getBooks, addBook, removeBook } from './services';
import { onMounted, ref } from 'vue';

const bookResult = ref()
// const detail = ref()
onMounted(async () => {
  const { data } = await getBooks()
  bookResult.value = data.books
})
type book = {
  id: number,
  name: string,
  description: string
}
const removeBookById = async (item: book) => {
  const { data } = await removeBook(item.id)
  bookResult.value = data.removeBook
}
const onEnter = async (e: any) => {
  if (e.key === 'Enter') {
    const { data } = await addBook(e.target.value)
    bookResult.value.push(data.createBook)
    e.target.value = ''
  }
}

</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 10px;
  border: 1px solid #ddd;
  margin: 0 20px 20px 0;
  cursor: pointer;
}

.container:hover {
  box-shadow: 0 0 10px 0 #ddd;
}
</style>
