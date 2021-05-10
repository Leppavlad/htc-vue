<template>
  <h2 v-if="title" class="noselect">{{ title }}</h2>
  <form @submit.prevent="submit" class="base">
    <div class="wrapper">
      <slot name="content"></slot>
    </div>
    <slot name="default"></slot>
  </form>
</template>

<script>
export default {
  props: ["title", "submit"],
};
</script>

<style lang="scss">
form.base {
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
  input[type="checkbox"] ~ label {
    cursor: pointer;
    margin-left: 8px;
  }

  button {
    display: block;
    margin: 0 auto;
  }
}
</style>
