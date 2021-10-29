<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue';
import WiskeyCard from './components/WiskeyCard.vue';
import CategoryCard from './components/CategoryCard.vue';
</script>

<template>
  <div>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/auctions">Auctions</router-link> |
      <router-link to="/distilleries">Distilleries</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  height: max-content;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
