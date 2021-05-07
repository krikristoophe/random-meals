<template>
  <div>
    <Loading v-if="state === 'loading'"/>
    <ErrorComponent v-if="state === 'error'" />
    <MealView v-if="state === 'loaded'" v-bind:meal="meal"/>
  </div>
</template>

<script>
import MealView from '@/components/MealView.vue';
import Loading from '@/components/Loading.vue';
import ErrorComponent from '@/components/Error.vue';
import Meal from '@/models/Meal';

export default {
  name: 'MealById',
  data: () => ({
    state: 'loading',
    meal: null,
  }),
  mounted() {
    const { id } = this.$route.params;
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then(async (res) => {
      if (res.ok) return res.json();
      throw new Error();
    }).then((body) => {
      this.meal = new Meal(body.meals[0]);
      this.state = 'loaded';
    }).catch(() => {
      this.state = 'error';
    });
  },
  components: {
    MealView,
    Loading,
    ErrorComponent,
  },
};
</script>
