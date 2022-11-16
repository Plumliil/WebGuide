<template>
  <div class="row">
    <div v-for="column in columnList" :key="column.id" class="col-3 mb-4">
      <div class="card shadow-sm" style="width: 18rem">
        <div class="card-body text-center">
          <img
            :src="column.logo"
            class="rounded-circle border-light border w-20 my-3"
            style="width: 30px"
            alt="..."
          />
          <h5 class="card-title">{{ column.title }}</h5>
          <p
            class="card-text text-left text-wrap text-truncate"
            style="height: 68px; text-overflow: ellipsis"
          >
            {{ column.description }}
          </p>

          <p class="fst-italic text-muted fs-6 my-3 text-truncate">
            收录人:{{ column.contributor }}
            <br />
            收录时间:{{ column.createdAt.toString().substring(0, 10) }}
          </p>
          <a
            :href="column.url"
            target="_blank"
            class="btn btn-sm btn-outline-primary mx-3"
            >&nbsp;&nbsp;&nbsp;Go&nbsp;&nbsp;&nbsp;</a
          >
          <!-- <a
            :href="column.detailWiki"
            target="_blank"
            class="btn btn-sm btn-outline-primary mx-3"
            >&nbsp;About&nbsp;</a
          > -->
          <!-- <small><span>点赞</span> <span>收藏</span></small> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "@vue/reactivity";
import { defineComponent, PropType } from "vue";
import { ColumnProps } from "../interface";

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
      return props.list.map((site) => {
        if (site.logo === "") {
          site.logo = `src/assets/nav/${site.classification}.svg`;
        }
        switch (site.name) {
          case "gitee":
            site.logo = `src/assets/site/${site.name}.svg`;
            break;
          case "google":
            site.logo = `src/assets/site/${site.name}.svg`;
            break;
          
          case "github":
            site.logo = `src/assets/site/${site.name}.svg`;
            break;

          default:
            break;
        }
        return site;
      });
    });
    return {
      columnList,
    };
  },
});
</script>
