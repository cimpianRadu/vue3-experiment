<script setup>
import { useRouter } from 'vue-router';
import CategoryCard from '../components/CategoryCard.vue';

const router = useRouter();

const categories = [
  {
    name: 'Distilleries',
    imageSource: 'https://source.unsplash.com/QL3SaEwio_k',
  },
  {
    name: 'auctions',
    imageSource: 'https://source.unsplash.com/55bQ7g3ZlQU',
  },
];

const actions = [
  function onClickFirstElement() {
    router.push({ path: '/distilleries' });
  },
  function onClickSecondElement() {
    router.push({ path: '/auctions' });
  },
];
</script>

<template>
  <div id="container">
    <CategoryCard
      v-for="(category, index) in categories"
      :category="category.name"
      :imgSource="category.imageSource"
      :onClick="actions[index]"
      :key="index"
    />
  </div>
</template>

<style scoped>
#container {
  display: flex;
  justify-content: space-around;
  height: 100%;
}
</style>
