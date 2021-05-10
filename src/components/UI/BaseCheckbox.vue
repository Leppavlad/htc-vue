<template>
  <input
    type="checkbox"
    :id="id"
    v-model="checkboxValue"
    @change="$emit('clicked', checkboxValue)"
  />
  <label :for="id">
    <span class="checkbox-custom">
      <svg
        width="10"
        height="8"
        viewBox="0 0 10 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.18182 6.02273L0.795455 3.63636L0 4.43182L3.18182 7.61364L10 0.795454L9.20455 0L3.18182 6.02273Z"
          fill="#E5261E"
        />
      </svg>
    </span>
  </label>
</template>

<script>
export default {
  props: ["id", "checked"],
  emits: ["clicked"],
  data() {
    return {
      checkboxValue: null,
    };
  },
  created() {
    this.checkboxValue = this.checked;
  },
};
</script>

<style lang="scss" scoped>
.checkbox-custom {
  display: inline-block;
  place-items: center;
  width: 16px;
  height: 16px;
  border: 1px solid #333;
  border-radius: 4px;
  cursor: pointer;
}

.checkbox-custom svg {
  margin: 3px 2px;
  display: none;
}
input[type="checkbox"] {
  display: none;
}
input[type="checkbox"]:checked ~ label svg {
  display: block;
}
</style>
