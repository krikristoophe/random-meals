<template>
  <header>
    <div>
      <router-link to="/" id="main-title"><span>DEVAC MEALS</span></router-link>

      <div id="search-container">
        <search-bar />
      </div>
    </div>
    <a href="/random" id="random-meal-button"><span>Random meal</span></a>
  </header>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';

export default {
  name: 'Header',
  components: {
    SearchBar,
  },
};
</script>

<style scoped lang="scss">
header {
  box-shadow: 0px 0px 10px 0px #cccccc;
  display: flex;
  overflow: hidden;
  position: sticky;
  background-color: #ffffff;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 100;

  &>div:first-of-type {
    flex-grow: 1;
    padding: 20px;
    display: flex;

    #main-title {
      margin-right: 20px;
      display: flex;
      color: #000000;
      text-transform: uppercase;
      text-decoration: none;

      span {
        margin: auto;
      }
    }

    #search-container {
      flex-grow: 1;
    }

    @media screen and (max-width: 650px) {
      flex-direction: column;

      #main-title {
        margin-bottom: 10px;
      }
    }
  }

  #random-meal-button {
    box-shadow: 0px 0px 10px 2px #cccccc;
    background-color: #ee0000;
    display: block;
    margin-right: 20px;
    padding: 20px;
    color: #ffffff;
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    font-weight: 600;
    text-align: center;

    span {
      margin: auto;
    }

    @media screen and (max-width: 470px) {
      margin-right: 0px;
      padding: 10px;
    }
  }
}
</style>
