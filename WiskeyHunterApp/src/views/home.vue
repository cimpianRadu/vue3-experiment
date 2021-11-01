<script setup>
import Categories from '../components/Categories.vue';
</script>

<template>
  <Suspense>
    <template #default>
      <div id="container">
        <Categories />
      </div>
    </template>
    <template #fallback>
      <p>Loading...</p>
    </template>
  </Suspense>
</template>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 80px;
}
</style>
