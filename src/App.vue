<template>
  <h1>APP</h1>
  <model :isOpen="modelIsOpen" @close-model="onModelClose">My Model!</model>
  <button @click="openModel">open</button>
  <Suspense>
    <template #default>
      <div>
        <async-show />
        <dog-show />
      </div>
    </template>
    <template #fallback> <h2>loading!...</h2> </template>
  </Suspense>
  <p>{{error}}</p>
</template>

<script lang="ts">
import { reactive, ref } from "@vue/reactivity";
import { defineComponent, onErrorCaptured } from "vue";
import Model from "./components/Model.vue";
import AsyncShow from "./components/AsyncShow.vue";
import DogShow from "./components/DogShow.vue";
</script>

<script setup lang="ts">
const components = defineComponent([Model, AsyncShow, DogShow]);
const modelIsOpen = ref(false);
const openModel = () => {
  modelIsOpen.value = true;
};
const onModelClose = () => {
  modelIsOpen.value = false;
};
const error = ref(null);
onErrorCaptured((err: any) => {
  error.value = err;
  return true;
});
</script>
