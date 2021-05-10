<template>
  <the-header
    :user="user"
    :userName="userName"
    @auth="authOpen"
    @changeName="changeNameOpen"
  >
  </the-header>

  <Auth :show="authIsOpen" :close="authClose" />
  <ChangeUserName :show="changeNameIsOpen" :close="changeNameClose" />

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
import Auth from "./components/Auth";
import ChangeUserName from "./components/ChangeUserName";
import TheFooter from "./components/layout/TheFooter";
export default {
  components: {
    TheHeader,
    Auth,
    ChangeUserName,
    TheFooter,
  },
  data() {
    return {
      data: [],
      isLoading: true,
      authIsOpen: false,
      changeNameIsOpen: false,
    };
  },
  computed: {
    user() {
      return this.$store.getters["user"];
    },
    userAuth() {
      return this.$store.getters["userAuth"];
    },
    userProfile() {
      return this.$store.getters["userProfile"];
    },
    userName() {
      if (this.userProfile.firstName) {
        return `${this.userProfile.firstName} ${this.userProfile.lastName[0]}.`;
      } else return "User";
    },
  },
  methods: {
    handleLoading(isLoading) {
      this.isLoading = isLoading;
    },
    authOpen() {
      this.authIsOpen = true;
    },
    authClose() {
      this.authIsOpen = false;
    },
    changeNameOpen() {
      this.changeNameIsOpen = true;
    },
    changeNameClose() {
      this.changeNameIsOpen = false;
    },
  },
  created() {
    this.$store.dispatch("autoAuth");
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

html {
  font-size: 16px;
  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
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

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Edge,  and Firefox */
}
</style>
