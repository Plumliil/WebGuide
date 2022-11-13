import ColumnList from "./components/ColumnList.vue";
import { ColumnProps, PostProps } from "./interface";
export const testData: ColumnProps[] = [
  {
    id: 1,
    title: "test1",
    description:
      'import ColumnList, { ColumnProps } from "./components/ColumnList.vue";',
    avatar: "https://s2.loli.net/2022/11/10/FdNhjf968RzsWIx.jpg",
  },
  {
    id: 2,
    title: "test2",
    description:
      'import ColumnList, { ColumnProps } from "./components/ColumnList.vue";',
    avatar: "https://s2.loli.net/2022/11/10/FdNhjf968RzsWIx.jpg",
  },
  {
    id: 3,
    title: "test3",
    description:
      'import ColumnList, { ColumnProps } from "./components/ColumnList.vue";',
    avatar: "https://s2.loli.net/2022/11/10/FdNhjf968RzsWIx.jpg",
  },
  {
    id: 4,
    title: "test4",
    description:
      'import ColumnList, { ColumnProps } from "./components/ColumnList.vue";',
    avatar: "https://s2.loli.net/2022/11/10/FdNhjf968RzsWIx.jpg",
  },
];

export const testPost: PostProps[] = [
  {
    name: "baidu",
    description: "搜索引擎",
    contributor: "zs",
    url: "www.baidu.com",
    logo: "baidu",
    createdAt: "11",
  },
  {
    name: "baidu",
    description: "搜索引擎",
    contributor: "zs",
    url: "www.baidu.com",
    logo: "baidu",
    createdAt: "11",
  },
  {
    name: "baidu",
    description: "搜索引擎",
    contributor: "zs",
    url: "www.baidu.com",
    logo: "baidu",
    createdAt: "11",
  },
];
