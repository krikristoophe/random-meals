<template>
  <div id="meal-view">
    <section id="meal-infos">
      <img :src="meal.pictureUrl" alt="">
      <div>
        <section v-if="meal.tags && meal.tags.length > 0" id="meal-tags">
          <MealTag v-for="tag in meal.tags" :key="tag" :tag="tag" />
        </section>
        <h1>{{ meal.title }}</h1>
        <h2>{{ meal.category }} - {{ meal.area }}</h2>

        <ul id="meal-ingredients">
          <li v-for="ingredient in meal.ingredients" :key="ingredient.name">
            <img :src="`https://www.themealdb.com/images/ingredients/${ingredient.name}-Small.png`" alt="">
            <p>{{ ingredient.quantity }} {{ ingredient.name }}</p>
          </li>
        </ul>

        <div id="meal-source" v-if="meal.source">
          <span>Source :</span>
          <a :href="meal.source">{{ meal.source }}</a>
        </div>
      </div>
    </section>
    <section id="meal-steps">
      <Youtube :src="meal.youtube" width="100%" v-if="meal.youtube" />
      <div id="meal-instructions">
        <article v-for="(step, index) in meal.instructions" :key="step">
          <div>
            <span>{{ index + 1 }}</span>
          </div>
          <div>
            <p>{{ step }}</p></div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import Youtube from 'vue3-youtube';
import MealTag from '@/components/MealTag.vue';

export default {
  name: 'Meal',
  props: {
    meal: null,
  },
  components: {
    Youtube,
    MealTag,
  },
};
</script>

<style lang="scss" scoped>
#meal-view {
  display: flex;

  #meal-infos {
    flex: 1;
    &>img {
      width: 100%;

      @media screen and (max-width: 770px) {
        max-height: 50vh;
        object-fit: contain;
      }
    }

    &>div {
      padding: 10px;
      display: flex;
      flex-direction: column;

      h1 {
        margin: 0px;
      }

      h2 {
        font-size: 1.3em;
        margin: 0px;
        margin-bottom: 15px;
        margin-top: 15px;
      }

      @media screen and (max-width: 770px) {
        h1, h2 {
          text-align: center;
        }
      }

      #meal-tags {
        word-wrap: break-word;
        margin-bottom: 15px;
        text-align: center;
      }

      #meal-ingredients {
        list-style: none;
        margin: 0px;
        padding: 0px;
        li {
          display: flex;
          margin-bottom: 15px;
          img {
            width: 35px;
            height: 35px;
            margin-right: 10px;
            vertical-align: middle;
          }

          p {
            vertical-align: middle;
            margin: auto 0px;
          }
        }
      }

      #meal-source {
        span, a{
          display: inline-block;
          font-size: 14px;
          color: #636363;
        }
      }
    }
  }

  #meal-steps {
    flex: 2;
    padding: 20px;
    #meal-instructions {
      margin-top: 20px;
      article {
        display: flex;
        margin-bottom: 20px;

        div {
          display: flex;
          &:first-of-type {
            margin-right: 20px;
          }
          span {
            margin: auto;
            font-size: 24px;
          }

          p {
            margin: 0px;
            margin: auto 0px;
            text-align: justify;
            line-height: 1.6em;
          }
        }
      }
    }
  }

  @media screen and (max-width: 770px) {
    flex-direction: column;
  }
}
</style>
