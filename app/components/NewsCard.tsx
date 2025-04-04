"use client";
import styled from "styled-components";
import Link from "next/link";
import { NewsArticle } from "@/app/interfaces/news";

const countryColors: Record<string, string> = {
    us: "#FFDDC1", // Light Peach
    gb: "#C1DFF0", // Light Blue
    ca: "#D6E8D2", // Light Green
    au: "#FDE2E2", // Light Red
    in: "#FFF0B3", // Light Yellow
};

const NewsCardWrapper = styled.div<{ country: string }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 1rem;
    width: 300px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    background-color: ${({ country }) => countryColors[country] || "#FFFFFF"};
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 6px;
`;

export default function NewsCard({ country, ...article }: NewsArticle & { country: string }) {
    return (
        <NewsCardWrapper country={country}>
            <Image src={article.image} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <p>
                <strong>Source:</strong>{" "}
                <Link href={article.source.url} target="_blank" rel="noopener noreferrer">
                    {article.source.name}
                </Link>
            </p>
            <Link href={article.url} target="_blank" rel="noopener noreferrer">
                Read full article
            </Link>
        </NewsCardWrapper>
    );
}
