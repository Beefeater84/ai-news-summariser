import styles from "./article-list.module.css";
import {ArticleCard} from "@/widgets/article-card";
import type {IArticleCard} from "@/entities/article";

const articles: IArticleCard[] = [
    {
        id: "1",
        type: "article",
        title: "Breaking News: Market Hits Record Highs",
        date: "2025-01-20",
        publishedAt: new Date("2025-01-20T18:25:00Z"),
        tags: ["Youth"],
        image: {
            id: "img1",
            src: "https://images.cdn.yle.fi/image/upload/c_crop,x_0,y_0,w_6985,h_3929/w_352,h_198,ar_1.7777777777777777,dpr_2,c_fill/q_auto:eco,f_auto,fl_lossy/v1715760592/39-1281890663b3715d1883",
            alt: "Stock market graph",
            copyright: null,
            blurhash: null
        },
        author: {
            id: "author1",
            name: "John Doe",
            avatar: "https://example.com/johndoe.jpg",
            title: "Senior Financial Analyst"
        },
        commentsCount: 136,

    },
    {
        id: "2",
        type: "article",
        title: "Tech Giants Announce New Innovations",
        date: "2025-01-19",
        publishedAt: new Date("2025-01-19T15:30:00Z"),
        tags: ["technology", "innovation"],
        image: {
            id: "img2",
            src: "https://images.cdn.yle.fi/image/upload/c_crop,x_0,y_0,w_3972,h_2234/w_736,h_414,ar_1.7777777777777777,dpr_2,c_fill/q_auto:eco,f_auto,fl_lossy/v1737429053/39-1409195678f0fb5868a6",
            alt: "Tech innovations",
            copyright: null,
            blurhash: null
        },
        author: {
            id: "author2",
            name: "Jane Smith",
            avatar: "https://example.com/janesmith.jpg",
            title: "Tech Reporter"
        }
    },
    {
        id: "3",
        type: "article",
        title: "Global Climate Change Conference 2025",
        date: "2025-01-18",
        publishedAt: new Date("2025-01-18T09:00:00Z"),
        tags: ["climate", "conference"],
        image: {
            id: "img3",
            src: "https://example.com/climate.jpg",
            alt: "Climate change conference",
            copyright: null,
            blurhash: null
        },
        author: {
            id: "author3",
            name: "Alice Johnson",
            avatar: "https://example.com/alicejohnson.jpg",
            title: "Environmental Journalist"
        }
    },
    {
        id: "4",
        type: "article",
        title: "New Study Reveals Health Benefits of Meditation",
        date: "2025-01-17",
        publishedAt: new Date("2025-01-17T12:00:00Z"),
        tags: ["health", "meditation"],
        image: {
            id: "img4",
            src: "https://example.com/meditation.jpg",
            alt: "Meditation",
            copyright: null,
            blurhash: null
        },
        author: {
            id: "author4",
            name: "Michael Brown",
            avatar: "https://example.com/michaelbrown.jpg",
            title: "Health Correspondent"
        }
    },
    {
        id: "5",
        type: "article",
        title: "Exploring the Wonders of the Universe",
        date: "2025-01-16",
        publishedAt: new Date("2025-01-16T18:00:00Z"),
        tags: ["space", "universe"],
        image: {
            id: "img5",
            src: "https://example.com/universe.jpg",
            alt: "Universe",
            copyright: null,
            blurhash: null
        },
        author: {
            id: "author5",
            name: "Emily White",
            avatar: "https://example.com/emilywhite.jpg",
            title: "Science Writer"
        }
    }
];

export const ArticleList = () => {
    return (
        <section className="container">
            <h1>Article List</h1>
            <section className={styles.list}>
                {articles.map((article) =>
                    <ArticleCard
                        key={article.id}
                        {...article}
                    />)}
            </section>

        </section>
    );
};
