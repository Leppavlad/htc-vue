<template>
  <base-modal :show="show" :close="close">
    <base-form title="Вход" :submit="auth">
      <template v-slot:content>
        <div class="control">
          <input
            :class="{ error: !login.isValid }"
            type="email"
            v-model.trim="login.value"
            placeholder="E-mail"
            @input="!login.isValid ? login.validate() : null"
            @blur="login.validate"
          />
          <p v-if="!login.isValid" class="error">{{ login.error }}</p>
        </div>
        <div class="control">
          <input
            :class="{ error: !password.isValid }"
            type="password"
            v-model.trim="password.value"
            placeholder="Пароль"
            @input="!password.isValid ? password.validate() : null"
            @blur="password.validate"
          />
          <p v-if="!password.isValid" class="error">{{ password.error }}</p>
        </div>
        <div class="control">
          <base-checkbox
            id="remember"
            :checked="remember"
            @clicked="handleCheckbox"
          ></base-checkbox>
          <label for="remember" class="noselect">Запомнить</label>
        </div>
        <!-------------------------->
        <br />
        <base-button type="button" mode="flat" @click="switchMode">
          Mode: {{ mode }}
        </base-button>
        <!-------------------------->
        <p v-if="error">{{ error }}</p>
      </template>
      <template v-slot:default>
        <base-button>{{ buttonTitle }}</base-button>
      </template>
    </base-form>
  </base-modal>
</template>

<script>
export default {
  props: ["show", "close"],
  data() {
    return {
      login: {
        value: "",
        isValid: true,
        validate() {
          if (this.value.length < 6 || this.value.length > 20) {
            this.isValid = false;
            this.error = "От 6 символов до 20 символов";
          } else if (!this.value.includes("@") || !this.value.includes(".")) {
            this.isValid = false;
            this.error = "Некорректный адрес";
          } else {
            this.isValid = true;
            this.error = null;
          }
        },
        error: null,
      },
      password: {
        value: "",
        isValid: true,
        validate() {
          if (this.value.length < 6 || this.value.length > 14) {
            this.isValid = false;
            this.error = "От 6 символов до 14 символов";
          } else {
            this.isValid = true;
            this.error = null;
          }
        },
        error: null,
      },
      formIsValid: true,
      remember: false,
      // mode: "signup",
      mode: "login",
      error: "",
    };
  },
  computed: {
    buttonTitle() {
      return this.mode == "login" ? "Войти" : "Зарегистрироваться";
    },
  },
  methods: {
    handleCheckbox(value) {
      this.remember = value;
    },
    async auth() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      const data = {
        email: this.login.value,
        password: this.password.value,
        mode: this.mode,
      };
      try {
        await this.$store.dispatch("auth", data);
      } catch (error) {
        this.error = error;
      }
      if (!this.error) {
        this.close();
      }
    },
    switchMode() {
      if (this.mode == "login") {
        this.mode = "signup";
      } else {
        this.mode = "login";
      }
    },
    validateForm() {
      this.login.validate();
      this.password.validate();
      if (!this.login.isValid || !this.password.isValid) {
        this.formIsValid = false;
        return;
      }
      this.formIsValid = true;
      this.error = "";
      return true;
    },
  },
  created() {
    this.login.value = "";
    this.login.isValid = true;
    this.password.isValid = true;
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 230px;
}
h2 {
  margin: 0;
  text-align: center;
}
.control {
  margin-top: 24px;
}
input[type="text"],
input[type="email"],
input[type="password"] {
  padding: 6px 0;
  width: 100%;
  border: none;
  border-bottom: 1px solid;
  outline: none;
}
input[type="text"].error,
input[type="email"].error,
input[type="password"].error {
  border-color: var(--var-main-red);
  color: var(--var-main-red);
}
input[type="checkbox"] ~ label {
  cursor: pointer;
  margin-left: 8px;
}

button {
  display: block;
  margin: 0 auto;
}

p.error {
  margin: 5px 0;
  font-size: 12px;
  color: var(--var-main-red);
}
</style>
