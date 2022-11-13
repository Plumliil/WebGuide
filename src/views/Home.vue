<template>
  <div class="home">
    <column-list :list="list"></column-list>
    <column-list :list="list"></column-list>
    <column-list :list="list"></column-list>
    <column-list :list="list"></column-list>
    <column-list :list="list"></column-list>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { computed } from "@vue/reactivity";
import { defineComponent } from "vue";
import { useStore } from "vuex";
import ColumnList from "../components/ColumnList.vue";
import { GlobalDataProps } from "../interface";

export default defineComponent({
  components: {
    ColumnList,
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    store.commit("activateSideNav");
    const list = computed(() => store.state.columns);
    const count = computed(() => store.state.count);
    const biggerCloumnLen = computed(() => store.getters.biggerCloumnLen);
    return {
      list,
      count,
      biggerCloumnLen,
    };
  },
});
</script>

<style scoped>
.home {
  margin-top: 20px;
}


</style>
