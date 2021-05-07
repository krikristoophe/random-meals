<template>
  <div id="home-page">
    <div id="presentation">
      <div>
        <h1>DEVAC MEALS</h1>
        <h2>Find the perfect meal to cook</h2>
      </div>
    </div>
    <div id="world-map-container">
      <h3>Meals by country</h3>
      <h4>Click to see meals of the country</h4>
      <World />
    </div>

    <ListCategories />
  </div>
</template>

<script>
import World from '@/components/World.vue';
import ListCategories from '@/components/ListCategories.vue';

export default {
  name: 'Home',
  components: {
    World,
    ListCategories,
  },
};
</script>

<style lang="scss" scoped>
#home-page {
  #presentation {
    height: 45vh;
    @media screen and (min-width: 651px) {
      background-image: url("../assets/presentation.webp");
    }
    @media screen and (max-width: 650px) {
      background-image: url("../assets/presentation_small.webp");
    }

    background-position: center 70%;
    background-size: cover;
    background-repeat: no-repeat;

    div {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      background: inherit;
      position: relative;
      overflow: hidden;
      padding: 10px;
      text-align: center;

      h1 {
        margin: auto;
        margin-bottom: 10px;
        z-index: 2;
        font-size: 2.7em;
        font-weight: bold;
      }

      h2 {
        margin: auto;
        margin-top: 10px;
        font-style: italic;
        z-index: 2;
        font-size: 2em;
      }

      &:before {
        content: "";
        position: absolute;
        top: -50%;
        left: -50%;
        right: -50%;
        bottom: -50%;
        box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
        filter: blur(8px);
        background: inherit;
        z-index: 1;
      }
    }
  }

  #world-map-container {
    padding: 20px;

    h3,
    h4 {
      margin: 0px;
      margin-bottom: 10px;
    }

    h4 {
      margin-bottom: 20px;
    }
  }
}
</style>
