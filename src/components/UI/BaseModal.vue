<template>
  <teleport to="body">
    <div class="dropout" @click="close" v-if="show"></div>
    <transition name="popUp">
      <dialog open class="modal" v-if="show">
        <slot></slot>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
export default {
  props: ["show", "close"],
};
</script>

<style lang="scss" scoped>
.dropout {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(50, 50, 50, 0.6);
}
.modal {
  position: fixed;
  top: 20vh;
  padding: 36px;
  border: none;
  background-color: #fff;
  border-radius: 8px;
  min-width: 300px;
  max-width: 600px;
}
</style>
