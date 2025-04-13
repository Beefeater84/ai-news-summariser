import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("*?", "./pages/post-list/index.ts"),
  // index("./pages/post-list/index.ts"),
  route("article/:articleSlug", "./pages/article/index.ts"),
] satisfies RouteConfig;
