<template>
  <header>
    <div class="container">
      <div class="wrapper">
        <router-link to="/" class="header__logo">
          <img src="@/assets/logo-service.svg" alt="" />
          <span>Видеосервис</span>
        </router-link>
        <form class="header__search" @submit.prevent="handleInput">
          <input
            type="search"
            placeholder="Поиск..."
            :class="inputStyles"
            v-model="searchInput"
            @keypress.enter="handleInput"
          />
          <base-button mode="flat">Найти</base-button>
        </form>
        <div class="header__auth">
          <template v-if="user">
            <span class="header__userName" @click="askChangeName">
              {{ userName }}
            </span>
            <base-button mode="flat" @click="logout">Выйти</base-button>
          </template>
          <base-button v-else @click="askAuth">Войти</base-button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ["user", "userName"],
  emits: ["search", "auth", "changeName"],
  data() {
    return {
      searchInput: "",
      searchInputTimer: null,
      changeUserNameInput: false,
    };
  },
  computed: {
    inputStyles() {
      return {
        focused: this.searchInput != "",
      };
    },
  },
  methods: {
    handleInput() {
      const query = this.searchInput ? `?search=${this.searchInput}` : "";
      this.$router.push(query);

      this.$emit("search", query);
    },
    askAuth() {
      this.$emit("auth");
    },
    askChangeName() {
      this.$emit("changeName");
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  margin: 34px 0;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
}

.header {
  &__logo {
    display: flex;
    flex: 0 0 190px;
    align-items: center;
    text-decoration: none;

    @media screen and (max-width: 1024px) {
      flex-basis: 37px;
      span {
        display: none;
      }
    }
    span {
      margin-left: 12px;
      font-size: 20px;
      font-weight: 500;
    }
  }

  &__search {
    flex: 0 1 400px;
    margin: 0 50px;
    display: flex;
    align-items: center;

    input {
      width: 100%;
      height: 30px;
      border: none;
      border-bottom: 1px solid;
      outline: none;

      &.focused {
        font-weight: 500;
      }

      &::-webkit-search-cancel-button {
        display: none;
      }
    }
    button {
      @media screen and (max-width: 1024px) {
        padding: 0 10px;
      }
    }
  }

  &__userName {
    font-weight: 500;
    cursor: pointer;
  }

  &__auth {
    flex: none;
  }

  @media screen and (max-width: 768px) {
    &__logo {
      span {
        display: inline;
      }
    }
    &__search {
      order: 1;
      margin: 20px auto 0;
    }
  }
  @media screen and (max-width: 576px) {
    &__logo {
      span {
        display: none;
      }
    }
  }
}
</style>
