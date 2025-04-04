export type NewsArticle = {
    title: string;
    description: string;
    content: string;
    url: string;
    image: string;
    publishedAt: string;
    source: {
        name: string;
        url: string;
    };
};

export type NewsResponse = {
    totalArticles: number;
    articles: NewsArticle[];
};