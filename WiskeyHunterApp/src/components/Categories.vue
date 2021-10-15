<script setup>
import { getCategories } from '../api/get-categories';

const categories = await getCategories({ requestUrl: 'list.php?c=list' });
</script>

<template>
  <div id="container">
    <p v-for="cat in categories.drinks" :key="cat.strCategory">
      {{ cat.strCategory }}
    </p>
  </div>
</template>
<style scoped>
#container {
  flex: 1;
  flex-direction: row;
}
</style>
