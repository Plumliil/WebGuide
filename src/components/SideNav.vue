<template>
  <div class="d-flex flex-column flex-shrink-0" style="width: 12px">
    <ul
      class="nav nav-pills nav-flush position-fixed flex-column mb-auto text-center"
    >
      <li
        class="nav-item"
        style="width: 40px"
        v-for="(nav, index) in NavList"
        :key="index"
      >
        <a
          @click="toClassifySite(nav.name)"
          class="nav-link py-2 px-1 border-bottom"
          :class="{ active: curClassifyName === nav.name }"
          aria-current="page"
          title="首页"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
        >
          <img :src="`src/assets/nav/${nav.logo}.svg`" :alt="nav.title" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Interface } from "readline";
import { defineComponent, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
interface Nav {
  name: string;
  title: string;
  logo: string;
}
export default defineComponent({
  name: "SideNav",
  setup() {
    const NavList: Nav[] = [
      {
        name: "home",
        title: "首页",
        logo: "home",
      },
      {
        name: "search",
        title: "搜索系列",
        logo: "search",
      },
      {
        name: "work",
        title: "办公系列",
        logo: "work",
      },
      {
        name: "design",
        title: "设计系列",
        logo: "design",
      },
      {
        name: "music",
        title: "音乐系列",
        logo: "music",
      },
    ];
    const isActive = ref(true);
    const curClassifyName = ref("home");
    const router = useRouter();
    const store = useStore();
    onMounted(() => {
      router.push("/");
    });
    const toClassifySite = (classifyName: string) => {
      curClassifyName.value = classifyName;
      if (classifyName === "home") return router.push("/");
      router.push(`/classify/${classifyName}`);
      store.dispatch("fetchClassifySites", classifyName);
    };
    return {
      isActive,
      curClassifyName,
      toClassifySite,
      NavList,
    };
  },
});
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
