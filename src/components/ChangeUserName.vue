<template>
  <base-modal :show="show" :close="close">
    <base-form title="Изменить имя" :submit="changeUserName">
      <template v-slot:content>
        <div class="control">
          <input type="text" v-model="firstName" placeholder="Имя" />
        </div>
        <div class="control">
          <input type="text" v-model="lastName" placeholder="Фамилия" />
        </div>
      </template>
      <template v-slot:default>
        <base-button>Отправить</base-button>
      </template>
    </base-form>
  </base-modal>
</template>

<script>
export default {
  props: ["show", "close"],
  data() {
    return {
      firstName: "",
      lastName: "",
      error: null,
    };
  },
  methods: {
    async changeUserName() {
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
      };
      try {
        await this.$store.dispatch("userProfile", data);
      } catch (error) {
        this.error = error;
      }
      if (!this.error) {
        this.close();
      }
    },
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
</style>
