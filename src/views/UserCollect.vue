<template>
  <h1>USERSITELIST</h1>
  <pre>{{route}}</pre>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  name: "UserSiteList",
  setup() {
    const store = useStore();
    const route = useRoute();
    return {
      route,
    };
  },
});
</script>

<style scoped></style>
