<template>
  <li class="channel">
    <div class="channel__logo">
      <img :src="logoName" alt="" />
    </div>
    <div class="channel__guide">
      <h3 class="channel__title">{{ titleName }}</h3>
      <ul class="channel__list">
        <channel-guide :guide="guide"></channel-guide>
      </ul>
    </div>
  </li>
</template>

<script>
import ChannelGuide from "./ChannelGuide";
export default {
  components: {
    ChannelGuide,
  },
  props: ["title", "guide"],
  computed: {
    logoName() {
      const logoName = this.title.split("_")[0];
      return require(`@/assets/tv/${logoName}.svg`);
    },
    titleName() {
      return this.title.split("_")[1];
    },
  },
};
</script>

<style lang="scss" scoped>
.channel {
  background-color: #f2f2f2;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  margin-bottom: 16px;

  &:last-of-type {
    margin-bottom: 0;
  }

  &__logo {
    flex: 1.2 0 120px;
    display: grid;
    place-items: center;

    img {
      max-width: 120px;
    }
  }
  &__guide {
    flex: 2.3 1 280px;
    margin-left: 20px;
  }

  &__title {
    font-size: 20px;
    margin: 0 0 17px;
  }
  @media screen and (max-width: 1024px) {
    &__logo {
      flex-grow: 0.5;
    }
  }
  @media screen and (max-width: 576px) {
    &__logo {
      display: none;
    }
    &__guide {
      margin-left: 0;
    }
  }
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
