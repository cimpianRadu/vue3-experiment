<script setup>
import { onMounted, ref, watch } from 'vue';
import { getDrinksByCategory } from '../api/get-cocktails-by-category';
import Cocktail from '../components/Cocktail.vue';

const props = defineProps({
  category: String,
});

const drinks = ref([]);

onMounted(async () => {
  drinks.value = await getDrinksByCategory({
    requestUrl: `filter.php?c=${props.category}`,
  });
});

watch(props, async (prop) => {
  drinks.value = await getDrinksByCategory({
    requestUrl: `filter.php?c=${prop.category}`,
  });
});
</script>

<template>
  <div>
    <p id="category">{{ category }} - {{ drinks?.length }}</p>
    <div id="container">
      <Cocktail v-for="(drink, index) in drinks" :key="index" :drink="drink" />
    </div>
  </div>
</template>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#category {
  font-size: 22px;
  font-weight: bold;
  color: blanchedalmond;
}
</style>
