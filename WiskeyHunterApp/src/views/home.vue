<script setup>
import Categories from '../components/Categories.vue';
</script>

<template>
  <Suspense>
    <template #default>
      <div>
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
  justify-content: space-around;
  height: 100%;
}
</style>
