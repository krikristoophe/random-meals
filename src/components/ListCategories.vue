<template>
  <section id="categories-meals">
    <Loading v-if="state === 'loading'"/>
    <ErrorComponent v-if="state === 'error'" />
    <div v-if="state === 'loaded'">
      <h3>Meals by categories</h3>
      <div id="list-categories">
        <router-link :to="`/category/${category}`" v-for="category in categories" :key="category">
          <article>
            {{ category }}
          </article>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import Loading from '@/components/Loading.vue';
import ErrorComponent from '@/components/Error.vue';

export default {
  name: 'ListCategory',
  data: () => ({
    state: 'loading',
    categories: null,
  }),
  mounted() {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list').then(async (res) => {
      if (res.ok) return res.json();
      throw new Error();
    }).then((body) => {
      if (body.meals) {
        this.categories = body.meals.map((cat) => cat.strCategory);
      } else {
        this.categories = [];
      }
      this.state = 'loaded';
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

<style lang="scss" scoped>
#categories-meals {
  margin-top: 40px;

  h3 {
    padding: 0px 20px;
  }
  #list-categories {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    // row-gap: 20px;
    // column-gap: 20px;

    a {
      border-bottom: 1px solid #cccccc;
      border-right: 1px solid #cccccc;
      display: inline-box;
      // box-shadow: 0px 0px 5px 0px #cccccc;
      // border-radius: 5px;
      padding: 30px 10px;
      text-align: center;
      cursor: pointer;
      text-transform: uppercase;
      color: inherit;
      text-decoration: none;
    }

    @media screen and (min-width: 991px) {
      &:nth-child(7n) {
        border-right: none;
      }

      &:nth-child(n+8) {
        border-bottom: none;
      }
    }

    @media screen and (max-width: 990px) and (min-width: 471px) {
      grid-template-columns: repeat(4, 1fr);

      a {
        &:nth-child(4n) {
          border-right: none;
        }

        &:nth-child(n+13) {
          border-bottom: none;
        }
      }
    }

    @media screen and (max-width: 470px) {
      grid-template-columns: repeat(2, 1fr);

      a {
        &:nth-child(4n) {
          border-right: none;
        }

        &:nth-child(n+13) {
          border-bottom: none;
        }
      }
    }
  }
}
</style>
