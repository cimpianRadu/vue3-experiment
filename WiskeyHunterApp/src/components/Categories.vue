<script setup>
import { getCategories } from '../api/get-categories';

const categories = await getCategories({ requestUrl: 'list.php?c=list' });
</script>

<template>
  <div id="container">
    <ui-tab-bar v-model="active" class="hero-demo-tab-bar">
      <ui-tab v-for="(item, index) in categories.drinks" :key="index">{{
        item.strCategory
      }}</ui-tab>
    </ui-tab-bar>
  </div>
</template>
<style scoped>
#container {
  flex: 1;
  flex-direction: row;
}
</style>
