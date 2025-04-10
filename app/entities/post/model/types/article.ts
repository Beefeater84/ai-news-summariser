export interface IArticleCard {
    id: string;
    type: "article",
    title: string;
    date: string;
    tags?: string[];
    publishedAt: Date;
    image?: {
        id: string;
        src: string;
        alt: string | null;
        copyright: null,
        blurhash: string | null;
    };
    author?: {
        id: string;
        name: string;
        avatar: string;
        title: string;
    }
}