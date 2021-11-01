<script>
import RandomCocktail from '../components/RandomCocktail.vue';

export default {
  data() {
    test: 'test';
  },
  components: {
    RandomCocktail,
  },
};
</script>

<template>
  <div class="container">
    <h2>Random cocktail</h2>
    <RandomCocktail />
  </div>
</template>

<style scoped>
.container {
  padding-left: 80px;
}
</style>
