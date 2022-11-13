import { createStore } from "vuex";
import { testData, testPost } from "./testData";
import { GlobalDataProps } from "./interface";
import useLocalstorage from "./hooks/useLocalstorage";
const store = createStore<GlobalDataProps>({
  state: {
    sideNavState: true,
    columns: testData,
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
  },
  getters: {
    userState() {
      return useLocalstorage.get("userData");
    },
    biggerCloumnLen(state) {
      return state.columns.filter((c) => c.id > 2).length;
    },
    getColumnById(state) {
      return function (id: number) {
        return state.columns.find((c) => c.id === id);
      };
    },
    getPostsByCId(state) {
      return function (id: number) {
        return state.columns.find((c) => c.id === id);
      };
    },
  },
});

export default store;
