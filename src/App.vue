<template>
  <!-- <div class="container-fluid"> -->
  <global-header :user="currentUser" v-model="iptValue"></global-header>
  <side-nav v-if="sideNavState"></side-nav>
  <div class="container">
    <router-view />
  </div>
  <footer class="text-center py-2 text-muted fs-6 mt-1">
    <small>
      <ul class="list-inline mb-0">
        <li class="list-inline-item">&copy; 2022 plumliil</li>
        <li class="list-inline-item">介绍</li>
        <li class="list-inline-item">目录</li>
        <li class="list-inline-item">联系</li>
        <li class="list-inline-item">更多</li>
      </ul>
    </small>
  </footer>
</template>

<script lang="ts">
import { defineComponent, onUpdated, reactive, ref, watch } from "vue";
import { GlobalDataProps, UserProps } from "./interface";
import GlobalHeader from "./components/GlobalHeader.vue";
import SideNav from "./components/SideNav.vue";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

export default defineComponent({
  name: "App",
  components: {
    GlobalHeader,
    SideNav,
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    const iptValue = ref("xxx");
    const sideNavState = computed(() => store.state.sideNavState);
    const currentUser = computed(() => store.state.user);
    return {
      currentUser,
      sideNavState,
      iptValue,
    };
  },
});
</script>

<style>
html::-webkit-scrollbar {
  /*滚动条整体样式*/
  /* width: 8px; 高宽分别对应横竖滚动条的尺寸 */
  width: 0px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
  margin-top: 20px;
}
html::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  /* border-radius: 10px; */
  /* -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.8); */
  background: #ebebeb;
}
html::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  /* -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2); */
  border-radius: 10px;
  background: #fff;
}
</style>
