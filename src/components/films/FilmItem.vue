<template>
  <router-link :to="filmLink">
    <div class="film">
      <div class="film__content">
        <div class="film__poster">
          <img v-if="img" :src="img" />
        </div>
        <div class="film__description">
          <p>{{ description }}</p>
        </div>
      </div>
      <p class="film__title">{{ title }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["id", "title", "description", "img"],
  data() {
    return {};
  },
  computed: {
    filmLink() {
      return "/films/" + this.id;
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes focused {
  from {
    height: 100%;
  }
  to {
    height: 105%;
  }
}

.film {
  width: 280px;
  height: 430px;
  margin: 5px;
  position: relative;

  &__content {
    border-radius: 8px;
    overflow: hidden;
  }

  &:hover &__poster {
    img {
      animation: focused 1s forwards;
    }
  }
  &__poster {
    width: 100%;
    height: 370px;
    background-color: #f2f2f2;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:hover &__description {
    display: block;
  }
  &__description {
    display: none;
    position: absolute;
    top: 0;
    width: 100%;
    height: 370px;
    padding: 16px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.4);
    overflow-y: auto;

    p {
      line-height: 1.4;
      color: #fff;
    }
  }
}
</style>
