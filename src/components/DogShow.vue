<template>
  <img :src="result && result.message" alt="" />
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
export default defineComponent({
  async setup() {
    const { data: rawData } = await axios.get(
      "https://dog.ceo/api/breeds/image/ran"
    );
    return {
      result: rawData,
    };
  },
});
</script>

<style lang="less" scoped></style>
