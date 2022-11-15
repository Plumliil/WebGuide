<template>
  <div class="classify">
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { computed } from "@vue/reactivity";
import { defineComponent, onMounted, onUpdated } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import ColumnList from "../components/ColumnList.vue";
import { GlobalDataProps } from "../interface";

export default defineComponent({
  components: {
    ColumnList,
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    const route = useRoute();
    console.log(route.params.name);

    onMounted(() => {
      store.dispatch("fetchClassifySites", route.params.name);
    });
    // onUpdated(() => {
    //   store.dispatch("fetchClassifySites", route.params.name);
    // });
    store.commit("activateSideNav");
    const list = computed(() => store.state.classifySites);
    return {
      list,
    };
  },
});
</script>

<style scoped>
.classify {
  margin-top: 20px;
}
</style>
