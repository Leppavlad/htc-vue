<template>
  <router-link v-if="to" :class="mode">
    <slot></slot>
  </router-link>
  <button v-else :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["to", "mode"],
};
</script>

<style lang="scss" scoped>
a,
button {
  min-width: 113px;
  height: 38px;
  padding: 0 15px;
  border: none;
  border-radius: 4px;
  background-color: var(--var-main-red);
  color: #fff;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: var(--var-main-darkRed);
  }
}

.flat {
  background: none;
  color: var(--var-main-red);
  font-weight: 500;
  width: auto;
  padding: 0 18px;
  &:hover {
    background: none;
    text-decoration: underline;
  }
}
</style>
