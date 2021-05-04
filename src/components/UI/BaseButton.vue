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
  width: 113px;
  height: 38px;
  border: none;
  border-radius: 4px;
  background-color: var(--var-main-red);
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: var(--var-main-darkRed);
  }
}

.flat {
  background: none;
  color: var(--var-main-red);
  font-weight: 500;
  &:hover {
    background: none;
    text-decoration: underline;
  }
}
</style>
