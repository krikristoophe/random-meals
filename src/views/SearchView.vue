<template>
  <div>
    <Loading v-if="state === 'loading'"/>
    <ErrorComponent v-if="state === 'error'" />
    <div v-if="state === 'loaded'" id="search-meals">
      <h1 v-if="meals.length > 0">Result for "{{ $route.query.query }}"</h1>
      <MealsList v-bind:meals="meals"/>
    </div>
  </div>
</template>

<script>
import MealsList from '@/components/MealsList.vue';
import Loading from '@/components/Loading.vue';
import ErrorComponent from '@/components/Error.vue';
import Meal from '@/models/Meal';

export default {
  name: 'SearchView',
  data: () => ({
    state: 'loading',
    meals: null,
  }),
  mounted() {
    const { query } = this.$route.query;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`).then(async (res) => {
      if (res.ok) return res.json();
      throw new Error();
    }).then((body) => {
      if (body.meals) {
        this.meals = body.meals.map((meal) => new Meal(meal));
      } else {
        this.meals = [];
      }
      this.state = 'loaded';
    }).catch(() => {
      this.state = 'error';
    });
  },
  components: {
    MealsList,
    Loading,
    ErrorComponent,
  },
};
</script>

<style lang="scss" scoped>
#search-meals {
  padding: 20px;
}
</style>
