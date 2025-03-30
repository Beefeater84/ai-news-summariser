import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./pages/article-list/index.ts"),
  route("article/:articleId", "./pages/article/index.ts"),
] satisfies RouteConfig;
