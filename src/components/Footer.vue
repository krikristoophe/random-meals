<template>
  <footer>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><a href="/random">Random meal</a></li>
      <li class="expanded"></li>
      <li>©DEVAC {{ year }}</li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    year: (new Date()).getFullYear(),
  }),
};
</script>

<style lang="scss" scoped>
footer {
  background-color: #4b4b4b;
  padding: 20px;
  box-shadow: 0px 0px 5px 0px #4b4b4b;

  ul {
    margin: 0px;
    display: flex;
    color: #ffffff;
    padding: 0px;

    li {
      display: inline-block;
      padding: 0px 10px;

      border-left: 1px solid #ffffff;

      &:last-of-type {
        padding-right: 0px;
        border: none;
      }

      &:first-of-type {
        border: none;
        padding-left: 0px;
      }
    }

    .expanded {
      flex-grow: 1;
      border: none;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }
}
</style>
