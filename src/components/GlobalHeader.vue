<template>
  <!-- <nav class="navbar bg-light"> -->
  <nav
    class="navbar navbar-dark position-relative bg-primary justy-content-between mb-2"
    style="height: 45px"
  >
    <div class="container-fluid mt-0">
      <router-link
        to="/"
        class="navbar-brand position-absolute top-0 start-10"
        href="#"
      >
        <li class="list-inline-item">
          <a href="#" class="btn" style="pointer-events: none"></a>
        </li>
        <img
          src="https://s2.loli.net/2022/11/10/FdNhjf968RzsWIx.jpg"
          alt="Logo"
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        Bootstrap
      </router-link>
      <div
        class="form-group position-absolute top-50 start-50 translate-middle"
      >
        <input
          type="text"
          class="form-control input-mini"
          @input="updateValue"
          placeholder="Search"
          style="height: 35px; outline: none"
        />
      </div>
      <ul
        v-if="!user.isLogin"
        class="list-inline position-absolute top-0 end-0"
      >
        <li class="list-inline-item">
          <router-link to="/login" class="btn btn-sm btn-outline-light my-1"
            >登录</router-link
          >
        </li>
        <li class="list-inline-item">
          <router-link to="/signin" class="btn btn-sm btn-outline-light my-1"
            >注册</router-link
          >
        </li>
        <li class="list-inline-item">
          <a href="#" class="btn" style="pointer-events: none"></a>
        </li>
      </ul>
      <ul
        v-if="user.isLogin"
        class="list-inline mb-0 position-absolute top-0 end-0"
      >
        <li class="list-inline-item">
          <dropdown :title="`你好 ${user.name}`">
            <dropdown-item
              ><router-link to="/createPost" class="dropdown-item"
                >贡献</router-link
              ></dropdown-item
            >
            <dropdown-item
              ><router-link to="/userContribute" class="dropdown-item"
                >我的贡献</router-link
              ></dropdown-item
            >
            <dropdown-item
              ><router-link to="/userCollect" class="dropdown-item"
                >收藏</router-link
              ></dropdown-item
            >
            <dropdown-item
              ><router-link to="/login" class="dropdown-item" @click="logout"
                >退出</router-link
              ></dropdown-item
            >
          </dropdown>
        </li>
        <li class="list-inline-item">
          <a href="" class="btn"></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";
import Dropdown from "./Dropdown.vue";
import DropdownItem from "./DropdownItem.vue";
import { GlobalDataProps, UserProps } from "../interface";
import { useStore } from "vuex";

export default defineComponent({
  name: "GlobalHeader",
  components: {
    Dropdown,
    DropdownItem,
  },
  emits: ["update:modelValue"],
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true,
    },
    modelValue: String,
  },
  setup(props, ctx) {
    const store = useStore<GlobalDataProps>();
    const inputRef = reactive({
      val: props.modelValue || "",
      error: false,
      message: "",
    });
    const updateValue = (e: Event) => {
      const targetValue = (e.target as HTMLInputElement).value;
      inputRef.val = targetValue;
      ctx.emit("update:modelValue", targetValue);
    };
    const logout = () => {
      store.commit("logout");
    };
    return {
      updateValue,
      logout,
    };
  },
});
</script>

<style>
.navbar-nav > li > a {
  padding-top: 4px;
  padding-bottom: 0;
  height: 28px;
}
.navbar {
  min-height: 20px;
}
</style>
