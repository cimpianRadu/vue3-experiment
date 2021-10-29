<script setup>
import { COLORS } from '../constants';

const props = defineProps({
  drink: {
    idDrink: Number,
    strDrink: String,
    strDrinkThumb: String,
  },
});
</script>

<template>
  <div>
    <ui-card id="container">
      <ui-card-content>
        <ui-card-media
          id="content"
          rectangle
          v-bind:style="{ backgroundImage: 'url(' + drink.strDrinkThumb + ')' }"
        >
        </ui-card-media>
      </ui-card-content>
      <ui-card-actions>
        <ui-card-icons>
          <p id="text">{{ drink.strDrink }}</p>
        </ui-card-icons>
      </ui-card-actions>
    </ui-card>
  </div>
</template>

<style scoped>
#container {
  height: 250px;
  width: 400px;
  margin-block: 15px;
}

#content {
  object-fit: cover;
  background-color: coral;
}

#text {
  font-size: 18px;
  font-weight: 700;
}
</style>
