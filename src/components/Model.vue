<template>
  <teleport to="#model">
    <div id="center" v-if="isOpen">
      <h2><slot> model </slot></h2>
      <button @click="buttonClick">关闭</button>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    isOpen: Boolean,
  },
  emits: {
    "close-model": null,
  },
  setup(props, context) {
    const buttonClick = () => {
      context.emit("close-model");
    };
    return {
      buttonClick,
    };
  },
});
</script>

<style scoped>
#center {
  width: 200px;
  height: 200px;
  border: 2px solid black;
  background-color: white;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
  text-align: center;
}
</style>
