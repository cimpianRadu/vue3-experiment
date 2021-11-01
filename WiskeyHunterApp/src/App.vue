<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue';
import WiskeyCard from './components/WiskeyCard.vue';
import CategoryCard from './components/CategoryCard.vue';
import { COLORS } from './constants';
</script>

<template>
  <div id="container">
    <div id="nav" v-bind:style="{ backgroundColor: COLORS.JET }">
      <div id="nav-element">
        <router-link to="/"> <span class="nav-text">Home</span></router-link>
      </div>
      <div id="nav-element">
        <router-link to="/about"
          ><span class="nav-text">About</span></router-link
        >
      </div>
      <div id="nav-element">
        <router-link to="/auctions"
          ><span class="nav-text">Auctions</span>
        </router-link>
      </div>
      <div id="nav-element">
        <router-link to="/distilleries">
          <span class="nav-text">Distilleries</span></router-link
        >
      </div>
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

#container {
  display: flex;
}

#nav {
  width: 80px;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  justify-content: space-between;
  z-index: 100;
  font-weight: bold;
}

.nav-text {
  color: hsl(300, 3%, 66%);
}

#nav-element {
  display: flex;
  flex-direction: column;
  color: whitesmoke;
  flex: 1;
  justify-content: center;
}

.router-link-exact-active > .nav-text {
  color: whitesmoke;
}
</style>
