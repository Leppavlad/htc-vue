<template>
  <the-header @search="handleSearch"></the-header>
  <router-view v-slot="{ Component }" name="nav">
    <transition name="popUp" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <router-view v-slot="{ Component }">
    <transition name="popUp" mode="out-in">
      <component :is="Component" @isLoading="handleLoading" />
    </transition>
  </router-view>
  <the-footer v-if="!isLoading"></the-footer>
</template>

<script>
import TheHeader from "./components/layout/TheHeader";
import TheFooter from "./components/layout/TheFooter";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      data: [],
      isLoading: true,
    };
  },
  methods: {
    handleSearch(query) {
      console.log(query);
    },
    handleLoading(isLoading) {
      this.isLoading = isLoading;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap");

:root {
  --var-main-dark: #333;
  --var-main-red: #e5261e;
  --var-main-darkRed: #cc221b;
}

* {
  box-sizing: border-box;
  font-family: "Rubik", serif;
  color: var(--var-main-dark);
}

body {
  padding: 0;
  margin: 0;
}

.container {
  max-width: 1180px;
  margin: 0 auto;

  @media screen and (max-width: 1280px) {
    padding: 0 40px;
  }
}

.page {
  padding-top: 30px;
  padding-bottom: 70px;
}

@keyframes popUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.popUp-enter-active {
  animation: popUp 0.4s;
}
.popUp-leave-active {
  animation: popUp 0.3s reverse;
}

// .popUp-enter-from {}
// .popUp-enter-to {}
// .popUp-leave-from {}
// .popUp-leave-to {}
</style>
