<script setup>
import CategoryCard from '../components/CategoryCard.vue';

const categories = [
  {
    name: 'Distiliries',
    imageSource: 'https://source.unsplash.com/QL3SaEwio_k',
  },
  {
    name: 'Wiskeys',
    imageSource: 'https://source.unsplash.com/55bQ7g3ZlQU',
  },
];
</script>

<template>
  <div id="container">
    <CategoryCard
      v-for="(category, index) in categories"
      :category="category.name"
      :imgSource="category.imageSource"
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
