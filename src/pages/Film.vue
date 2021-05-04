<template>
  <section>
    <div class="container">
      <h2>{{ film.title }}</h2>
      <img :src="film.img" alt="" />
      <p>{{ film.description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      film: null,
    };
  },
  methods: {
    loadFilm() {
      this.film = this.$store.getters["films/films"].find(
        (film) => film.id == this.id
      );
    },
  },
  created() {
    this.loadFilm();
  },
};
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>
