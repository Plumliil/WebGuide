<template>
  <div class="home">
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { computed } from "@vue/reactivity";
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import ColumnList from "../components/ColumnList.vue";
import { GlobalDataProps } from "../interface";

export default defineComponent({
  components: {
    ColumnList,
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    onMounted(() => {
      store.dispatch("fetchSites");
    });
    store.commit("activateSideNav");
    const list = computed(() => store.state.sites);
    return {
      list,
    };
  },
});
</script>

<style scoped>
.home {
  margin-top: 20px;
}
</style>
