<template>
  <li class="dropdown-option" :class="{ 'is-disabled': disabled }">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      required: false,
    },
  },
  setup(props, ctx) {
    console.log(props.disabled);
  },
});
</script>

<style>
.dropdown-option.is-disabled * {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}
</style>
