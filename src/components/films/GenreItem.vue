<template>
  <a :href="genreHref">
    <div class="genre" :style="genreStyle">
      <div class="genre__image">
        <!-- <img :src="img" /> -->
        <p>{{ img }}</p>
      </div>
      <p class="genre__title">{{ title }}</p>
    </div>
  </a>
</template>

<script>
export default {
  props: ["title", "img", "color", "genreId"],
  data() {
    return {};
  },
  computed: {
    genreStyle() {
      return `background:${this.color}`;
    },
    genreHref() {
      return "/genres/" + this.genreId;
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes focused {
  from {
    font-size: 48px;
  }
  to {
    font-size: 52px;
  }
}

.genre {
  position: relative;
  width: 280px;
  height: 208px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: gray;
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }

  &:hover &__image {
    animation: focused 0.5s forwards ease-out;
  }

  &__image {
    text-align: center;
    font-size: 48px;
  }

  &__title {
    position: absolute;
    bottom: 25px;
    margin: 0;
    color: #fff;
  }
}
</style>
