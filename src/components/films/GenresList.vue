<template>
  <section class="genres">
    <div class="container">
      <h2 class="section-title">Жанры</h2>
      <div class="wrapper">
        <genre-item
          v-for="genre in genres"
          :key="genre.id"
          :title="genre.title"
          :img="genre.style.image"
          :color="genre.style.color"
          :genreId="genre.id"
        >
        </genre-item>
      </div>
    </div>
  </section>
</template>

<script>
import GenreItem from "./GenreItem";
export default {
  components: {
    GenreItem,
  },
  computed: {
    genres() {
      return this.$store.getters["genres/genres"];
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 1280px) {
    justify-content: space-around;
  }
}

.section-title {
  font-weight: 500;
}
</style>
