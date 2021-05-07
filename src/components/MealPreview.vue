<template>
  <article @click="goToMeal">
    <img :src="meal.pictureUrl" alt="">
    <div>
      <h2>{{ meal.title }}</h2>
      <h3 v-if="meal.category && meal.area">{{ meal.category }} - {{ meal.area }}</h3>
      <section v-if="meal.tags && meal.tags.length > 0" class="meal-tags">
        <MealTag v-for="tag in meal.tags" :key="tag" :tag="tag" />
      </section>
    </div>
  </article>
</template>

<script>
import MealTag from '@/components/MealTag.vue';

export default {
  name: 'MealPreview',
  props: {
    meal: null,
  },
  methods: {
    goToMeal() {
      this.$router.push(`/meal/${this.meal.id}`);
    },
  },
  components: {
    MealTag,
  },
};
</script>

<style lang="scss" scoped>
article {
  box-shadow: 0px 0px 5px 0px #cccccc;
  flex: 1;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  &>div {
    flex-grow: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;

    h2 {
      margin: 0px;
      margin-bottom: 5px;
    }

    h3 {
      margin: 0px;
      margin-bottom: 10px;
    }

    p {
      margin: 0px;
    }

    .meal-tags {
      margin-top: auto;
      word-wrap: break-word;
      text-align: center;
    }
  }
}
</style>
