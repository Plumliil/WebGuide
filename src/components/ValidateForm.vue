<template>
  <form action="" class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from "vue";
import mitt from "mitt";
type ValidateFunc = () => boolean;
export const emitter = mitt();
export default defineComponent({
  emits: ["form-submit"],
  setup(props, ctx) {
    let funAry: ValidateFunc[] = [];
    const submitForm = () => {
      const result = funAry.map((func) => func()).every((result) => result);

      ctx.emit("form-submit", result);
    };
    const callback = (func: ValidateFunc): void => {
      funAry.push(func);
    };
    emitter.on("form-item-created", callback);
    onUnmounted(() => {
      emitter.off("form-item-created", callback);
      funAry = [];
    });
    return { submitForm };
  },
});
</script>

<style scoped></style>
