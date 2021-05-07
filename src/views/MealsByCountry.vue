<template>
  <div>
    <Loading v-if="state === 'loading'"/>
    <ErrorComponent v-if="state === 'error'" />
    <div v-if="state === 'loaded'" id="area-meals">
      <h1>{{ $route.params.area }} meals</h1>
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
  name: 'MealsByCountry',
  data: () => ({
    state: 'loading',
    meals: null,
  }),
  mounted() {
    const { area } = this.$route.params;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`).then(async (res) => {
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
#area-meals {
  padding: 20px;
}
</style>
