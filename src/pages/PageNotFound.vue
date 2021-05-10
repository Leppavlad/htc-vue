<template>
  <section>
    <div class="container">
      <h3>
        Page "{{ page }}" doesn't exist. Maybe you wanted to see our
        <router-link to="/films">Films collection</router-link>
      </h3>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    page() {
      return this.$route.path;
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 50px 0;
}
a {
  color: var(--var-main-red);
}
</style>
