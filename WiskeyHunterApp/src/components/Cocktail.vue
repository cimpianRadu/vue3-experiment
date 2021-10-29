<script setup>
const props = defineProps({
  drink: {
    idDrink: Number,
    strDrink: String,
    strDrinkThumb: String,
  },
});

console.log(props.drink);
</script>

<template>
  <div>
    <p>Cocktail {{ drink.strDrink }}</p>
  </div>
</template>
