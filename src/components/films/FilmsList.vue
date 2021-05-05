<template>
  <section class="new">
    <div class="container">
      <template v-if="isLoading && films.length == 0">
        <base-spinner></base-spinner>
      </template>

      <p v-if="!isLoading && films.length == 0">Не найдено фильмов</p>

      <template v-else>
        <h2 class="section-title">🔥 Новинки</h2>
        <div class="wrapper">
          <film-item
            v-for="film in films"
            :key="film.id"
            :id="film.id"
            :title="film.title"
            :description="film.description"
            :img="film.img"
          ></film-item>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import FilmItem from "./FilmItem";
export default {
  components: {
    FilmItem,
  },
  data() {
    return {
      placeholder: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    };
  },
  props: ["films", "isLoading"],
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;

  @media screen and (max-width: 1280px) {
    justify-content: space-around;
  }
}

.section-title {
  font-weight: 500;
}
</style>
