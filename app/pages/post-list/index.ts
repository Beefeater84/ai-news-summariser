import type { Route } from "@router/types/app/+types/root";
import { PostList } from "./ui/post-list";

export function meta({}: Route.MetaArgs) {
  return [{ title: "YouTube Video Transcript Articles" }];
}

export default PostList;
