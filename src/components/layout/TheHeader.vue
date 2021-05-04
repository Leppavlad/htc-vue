<template>
  <header>
    <div class="container">
      <div class="wrapper">
        <router-link to="/" class="header__logo">
          <img src="@/assets/logo-service.png" alt="" />
        </router-link>
        <form class="header__search">
          <input
            type="search"
            placeholder="Поиск..."
            :class="inputStyles"
            v-model="userInput"
            @input="handleInput"
          />
          <base-button mode="flat">Найти</base-button>
        </form>
        <div class="header__auth">
          <base-button>Войти</base-button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  emits: ["search"],
  data() {
    return {
      userInput: "",
      userInputTimer: null,
    };
  },
  computed: {
    inputStyles() {
      return {
        focused: this.userInput != "",
      };
    },
  },
  methods: {
    handleInput() {
      clearTimeout(this.userInputTimer);
      this.userInputTimer = setTimeout(() => {
        this.$emit("search", this.userInput);
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  margin: 34px 0;
}

.header {
  &__logo {
    width: 182px;
    img {
      width: 100%;
    }
  }

  &__search {
    max-width: 400px;
    width: 100%;
    display: flex;
    align-items: center;

    input {
      width: calc(100% - 113px);
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
  }
}
</style>
