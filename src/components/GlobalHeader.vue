<template>
  <!-- <nav class="navbar bg-light"> -->
  <nav class="navbar navbar-dark bg-primary justy-content-between mb-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="https://s2.loli.net/2022/11/10/FdNhjf968RzsWIx.jpg"
          alt="Logo"
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        Bootstrap
      </a>
      <ul v-if="!user.isLogin" class="list-inline mb-0">
        <li class="list-inline-item">
          <a href="#" class="btn btn-outline-light my-2">登录</a>
        </li>
        <li class="list-inline-item">
          <a href="#" class="btn btn-outline-light my-2">注册</a>
        </li>
      </ul>
      <ul v-if="user.isLogin" class="list-inline mb-0">
        <li class="list-inline-item">
          <dropdown :title="`你好 ${user.name}`">
            <dropdown-item
              ><a href="#" class="dropdown-item">新建</a></dropdown-item
            >
            <dropdown-item disabled
              ><a href="#" class="dropdown-item">编辑</a></dropdown-item
            >
            <dropdown-item
              ><a href="#" class="dropdown-item">查询</a></dropdown-item
            >
          </dropdown>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Dropdown from "./Dropdown.vue";
import DropdownItem from "./DropdownItem.vue";
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export default defineComponent({
  name: "GlobalHeader",
  components: {
    Dropdown,
    DropdownItem,
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true,
    },
  },
});
</script>

<style lang="less" scoped></style>
