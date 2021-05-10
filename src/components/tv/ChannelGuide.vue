<template>
  <li v-for="show in currentGuide" :key="show" class="el">
    <div class="el__item">
      <time class="el__time">{{ show.time }}</time>
      <p class="el__show">{{ show.title }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: ["guide"],
  computed: {
    timeNow() {
      const now = new Date();
      return {
        hours: now.getHours(),
        minutes: now.getUTCMinutes(),
        computed: now.getHours() * 60 + now.getUTCMinutes(),
      };
    },
    currentGuide() {
      const index = this.guide.findIndex(
        (el) =>
          +el.time.slice(0, 2) * 60 + +el.time.slice(3) > this.timeNow.computed
      );
      return [this.guide[index - 1], this.guide[index], this.guide[index + 1]];
    },
  },
};
</script>

<style lang="scss" scoped>
.el {
  &__item {
    margin: 12px 0 0;
    display: flex;
  }
  &__time {
    margin-right: 16px;
    display: block;
    flex: 0 0 40px;
  }
  &__show {
    margin: 0;
  }

  &:first-of-type &__time,
  &:first-of-type &__show {
    color: var(--var-main-red);
  }
}
</style>
