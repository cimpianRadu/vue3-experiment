<script setup>
import { ref } from 'vue';
import { getCategories } from '../api/get-categories';
import CocktailCategory from '../components/CocktailCategory.vue';

const categories = await getCategories({ requestUrl: 'list.php?c=list' });
const active = ref(0);
</script>

<template>
  <div>
    <ui-tab-bar v-model="active" v-bind:style="{ position: absolute }">
      <ui-tab v-for="(item, index) in categories.drinks" :key="index">
        {{ item.strCategory }}
      </ui-tab>
    </ui-tab-bar>
    <Suspense>
      <template #default>
        <CocktailCategory :category="categories.drinks[active].strCategory" />
      </template>
      <template #fallback>
        <h3>Loading cocktail...</h3>
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
#container {
  flex: 1;
  flex-direction: column;
  background-color: slateblue;
}
</style>
