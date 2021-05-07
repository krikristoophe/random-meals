<template>
  <div>
    <Loading v-if="state === 'loading'"/>
    <ErrorComponent v-if="state === 'error'" />
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue';
import ErrorComponent from '@/components/Error.vue';
import Meal from '@/models/Meal';

export default {
  name: 'RandomMeal',
  data: () => ({
    state: 'loading',
  }),
  mounted() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php').then(async (res) => {
      if (res.ok) return res.json();
      throw new Error();
    }).then((body) => {
      const meal = new Meal(body.meals[0]);
      this.$router.push(`/meal/${meal.id}`);
    }).catch(() => {
      this.state = 'error';
    });
  },
  components: {
    Loading,
    ErrorComponent,
  },
};
</script>
