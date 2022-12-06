<template>
  <div
    class="card shadow-sm my-3 position-relative"
    v-for="(classSites, i1) in classAndSites"
    :key="i1"
  >
  <span class="badge bg-light text-dark position-absolute end-0" style="width: 100px;">{{ classSites.type }}</span>
    <ul class="nav nav-pills nav-flush text-center">
      <li
        class="nav-item"
        style="width: 40px"
        v-for="(site, index) in classSites.value"
        :key="index"
      >
        <a
          class="nav-link py-2 px-1 border-bottom"
          aria-current="page"
          :href="site.url"
          :title="site.name"
          target="_blank"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
        >
          <img :src="site.logo" :alt="site.name" style="width: 30px" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed } from "@vue/reactivity";
import { defineComponent } from "vue";
import { useStore } from "vuex";
import useChangeClassName from "../hooks/useChangeClassName";
import { ColumnProps, GlobalDataProps } from "../interface";
interface ClassAndSitesProp {
  type: string;
  value: ColumnProps[];
}
export default defineComponent({
  name: "SitesMenu",
  setup(props, ctx) {
    const store = useStore<GlobalDataProps>();
    const list = computed(() => store.state.sites);
    // const classify = computed(() => store.getters.getClassAndSites);
    const classify = store.getters.getClassAndSites;
    const classAndSites: ClassAndSitesProp[] = [];
    console.log(classify);

    classify.forEach((value: ColumnProps[], key: string) => {
      classAndSites.push({
        type: useChangeClassName(key),
        value: value,
      });
    });
    console.log(classAndSites);

    return {
      list,
      classAndSites,
    };
  },
});
</script>

<style scoped>
li {
  margin: 30px;
}
</style>
