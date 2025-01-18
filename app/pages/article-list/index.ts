import { ArticleList } from "./ui/article-list";
import type {Route} from "@router/types/app/+types/root";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Article List"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export default ArticleList;
