<script setup>
defineProps({
  category: String,
  imgSource: String,
});
</script>

<template>
  <div id="container" :style="{ backgroundImage: `url('${imgSource}')` }">
    <h2 id="title">{{ category }}</h2>
  </div>
</template>

<style scoped>
#container {
  flex: 1;
  border: 5px solid #26413c;
  padding-block: 16px;
  margin: 16px;
  height: 90vh;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
}

#title {
  color: whitesmoke;
  font-size: 85px;
}
</style>
