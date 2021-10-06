<script setup>
const title = 'Hello there VUE JS';
</script>

<template>
  <div id="container">
    <h3>Test this {{ title }}</h3>
  </div>
</template>

<style scoped>
#container {
  display: flex;
  justify-content: center;
  border: 1px solid black;
}
</style>
