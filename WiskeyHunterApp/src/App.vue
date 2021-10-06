<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue';
import WiskeyCard from './components/WiskeyCard.vue';
import CategoryCard from './components/CategoryCard.vue';

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

<style>
body {
  height: max-content;
  background-color: brown;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

#container {
  display: flex;
  justify-content: space-around;
  height: 100%;
}
</style>
