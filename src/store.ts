import { Commit, createStore } from "vuex";
import { testData, testPost } from "./testData";
import { GlobalDataProps } from "./interface";
import axios from "axios";
import useLocalstorage from "./hooks/useLocalstorage";

const getAndCommit = async (
  url: string,
  mutationName: string,
  commit: Commit
) => {
  const { data } = await axios.get(url);
  commit(mutationName, data);
};
const store = createStore<GlobalDataProps>({
  state: {
    sideNavState: true,
    columns: testData,
    sites: [],
    classifySites: [],
    count: 0,
    user: useLocalstorage.get("userData") || {
      id: "0",
      isLogin: false,
      name: "site",
      columnId: 0,
    },
    posts: testPost,
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, name: "plumliil", id: "0" };
      useLocalstorage.cacheSet("userData", state.user);
    },
    logout(state) {
      useLocalstorage.remove("userData");
      state.user = {
        id: "0",
        isLogin: false,
        name: "site",
        columnId: 0,
      };
    },
    activateSideNav(state) {
      state.sideNavState = true;
    },
    unActivateSideNav(state) {
      state.sideNavState = false;
    },
    createPost(state, newPost) {
      state.posts?.push(newPost);
    },
    fetchSites(state, rawData) {
      state.sites = rawData.data;
    },
    fetchClassifySites(state, rawData) {
      console.log(rawData);
      state.classifySites = rawData.data;
    },
  },
  actions: {
    async fetchSites({ commit }) {
      getAndCommit("/site", "fetchSites", commit);
    },
    async fetchClassifySites({ commit }, classifyName) {
      getAndCommit(
        `/site/classify/${classifyName}`,
        "fetchClassifySites",
        commit
      );
    },
  },
  getters: {
    userState() {
      return useLocalstorage.get("userData");
    },
  },
});

export default store;
