<template>
  <section class="page">
    <films-list :films="films" :isLoading="isLoading"></films-list>
    <genres-list></genres-list>
  </section>
</template>

<script>
import FilmsList from "../components/films/FilmsList";
import GenresList from "../components/films/GenresList";
export default {
  components: {
    FilmsList,
    GenresList,
  },
  data() {
    return {
      error: null,
      isLoading: false,
    };
  },
  computed: {
    films() {
      return this.$store.getters["films/films"];
    },
    needsUpdate() {
      return this.$store.getters["films/needsUpdate"];
    },
  },
  methods: {
    async loadData() {
      this.isLoading = true;
      this.$emit("isLoading", true);
      try {
        await this.$store.dispatch("films/loadfilms");
      } catch (error) {
        this.error = error.message;
      }
      this.isLoading = false;
      this.$emit("isLoading", false);
    },
  },
  created() {
    if (this.needsUpdate) this.loadData();
  },
};
</script>

<style lang="scss" scoped>
section.page {
  padding-top: 30px;
  padding-bottom: 70px;
}
</style>
