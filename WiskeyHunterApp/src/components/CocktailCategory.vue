<script setup>
import { onMounted, ref, watch } from 'vue';
import { getCocktailsByCategory } from '../api/get-cocktails-by-category';
import Cocktail from '../components/Cocktail.vue';

const props = defineProps({
  category: String,
});

const cocktails = ref([]);

onMounted(async () => {
  cocktails.value = await getCocktailsByCategory({
    requestUrl: `filter.php?c=${props.category}`,
  });
});

watch(props, async (prop) => {
  cocktails.value = await getCocktailsByCategory({
    requestUrl: `filter.php?c=${prop.category}`,
  });
});
</script>

<template>
  <p id="category">{{ category }} - {{ cocktails.drinks?.length }}</p>
  <Cocktail
    v-for="(drink, index) in cocktails.drinks"
    :key="index"
    :drink="drink"
  />
</template>

<style scoped>
#category {
  font-size: 22px;
  font-weight: bold;
  color: blanchedalmond;
}
</style>
