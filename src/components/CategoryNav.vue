<template>
  <div class="container">
    <nav>
      <router-link :to="linkFilms">Фильмы</router-link>
      <router-link :to="linkTV">Телеканалы</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    linkTV() {
      return "/tv";
    },
    linkFilms() {
      return "/films";
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  margin-top: 40px;
  text-align: center;
}
a {
  font-weight: 500;
  font-size: 28px;
  text-decoration: none;
  margin: 0 12px;

  &.active {
    position: relative;
    color: var(--var-main-red);
    &:after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: var(--var-main-red);
    }
  }
}
</style>
