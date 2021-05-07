<template>
  <div id="search-result-list">
    <div v-if="meals.length > 0">
      <MealPreview v-for="meal in meals" :key="meal.id" :meal="meal" />
    </div>
    <h1 v-if="meals.length === 0">No result for "{{ $route.query.query }}"</h1>
  </div>
</template>

<script>
import MealPreview from '@/components/MealPreview.vue';

export default {
  name: 'MealsList',
  props: {
    meals: null,
  },
  components: {
    MealPreview,
  },
};
</script>

<style lang="scss" scoped>
#search-result-list {

  h1 {
    margin: 0px;
    margin-bottom: 20px;
  }
  &>div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 20px;
    column-gap: 20px;

    @media screen and (max-width: 1100px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 770px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}

</style>
