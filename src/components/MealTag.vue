<template>
  <article class="meal-tag">
    {{ tag }}
  </article>
</template>

<script>
export default {
  name: 'MealTag',
  props: {
    tag: null,
  },
};
</script>

<style lang="scss" scoped>
.meal-tag {
  background-color: blue;
  display: inline-block;
  margin-right: 10px;
  padding: 3px 10px;
  color: #ffffff;
  border-radius: 25px;
  margin-bottom: 3px;
}
</style>
