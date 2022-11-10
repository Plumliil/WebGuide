<template>
  <div class="row">
    <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
      <div class="card shadow-sm" style="width: 20rem">
        <div class="card-body text-center">
          <img
            :src="column.avatar"
            class="rounded-circle border-light border w-25 my-3"
            alt="..."
          />
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-left">
            {{ column.description }}
          </p>
          <a href="#" class="btn btn-outline-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "@vue/reactivity";
import { defineComponent, PropType } from "vue";
export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

export default defineComponent({
  name: "ColumnList",
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true,
    },
  },
  setup(props, ctx) {
    const columnList = computed(() => {
      return props.list.map((column) => {
        if (!column.avatar) {
          // column.avatar = new URL('@/assets/default.png', import.meta.url).href;
          column.avatar = "https://s2.loli.net/2022/04/17/KX8OZV59bjWpUrw.png";
        }
        return column;
      });
    });
    return {
      columnList,
    };
  },
});
</script>
