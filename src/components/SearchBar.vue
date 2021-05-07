<template>
  <div id="search-bar">
    <input v-model="query" type="search" placeholder="Search meal">
    <button @click="triggerSearch" aria-label="search">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
    </button>
  </div>
</template>

<script>

export default {
  name: 'SearchBar',
  data: () => ({
    query: '',
  }),
  methods: {
    triggerSearch() {
      window.location.href = `/search?query=${this.query}`;
    },
  },
};
</script>

<style lang="scss" scoped>
#search-bar {
  display: flex;
  input {
    flex-grow: 1;
    margin-right: 10px;
    height: 40px;
    border-radius: 20px;
    border: none;
    box-shadow: 0px 0px 5px 0px #cccccc;
    outline: none;
    padding: 10px 15px;
    font-size: 18px;
    animation: grow-on-appear 500ms ease-in-out forwards;

    @media screen and (max-width: 650px) {
      flex-grow: 0;
      width: 100%;
    }
  }

  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    box-shadow: 0px 0px 5px 0px #cccccc;
    background: none;
    display: flex;
    svg {
      margin: auto;
      color: #353535;
    }
  }
}
</style>
