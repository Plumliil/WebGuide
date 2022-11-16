const useChangeClassName = (value: string): string => {
  switch (value) {
    case "search":
      return "搜索引擎";

    case "software":
      return "软件安装";

    case "music":
      return "音乐视听";

    case "video":
      return "电影电视";

    case "work":
      return "办公必备";

    case "code":
      return "编程语言";

    case "git":
      return "代码仓库";

    case "design":
      return "设计创造";
    default:
      return "其他";
  }
};
export default useChangeClassName;
