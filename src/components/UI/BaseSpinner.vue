<template>
  <img src="@/assets/spinner.png" alt="" />
</template>

<style lang="scss" scoped>
@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

img {
  animation: rotate 1.2s infinite;
}
</style>
