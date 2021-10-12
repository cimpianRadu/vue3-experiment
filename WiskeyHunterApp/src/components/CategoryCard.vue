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
:hover {
  cursor: pointer;
}

#title {
  color: whitesmoke;
  font-size: 85px;
}

/* .u-hover--sparkle {
  box-sizing: border-box;
  position: relative;
  padding: 0.75em;
}
::before,
::after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform-origin: center;
}

::before {
  border-top: 0.2em solid red;
  border-bottom: 0.2em solid blue;
  transform: scale3d(0, 1, 1);
}

::after {
  border-left: 0.2em solid green;
  border-right: 0.2em solid yellow;
  transform: scale3d(1, 0, 1);
}

:hover::before,
:hover::after {
  transform: scale3d(1, 1, 1);
  transition: transform 900ms;
} */
</style>
