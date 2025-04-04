"use client";
import { useEffect, useState } from "react";
import { NewsArticle } from "@/app/interfaces/news";
import NewsCard from "@/app/components/NewsCard";

const countries = [
  { name: "United States", code: "us" },
  { name: "United Kingdom", code: "gb" },
  { name: "Canada", code: "ca" },
  { name: "Australia", code: "au" },
  { name: "India", code: "in" },
];

export default function Home() {
  const [country, setCountry] = useState("us");
  const [articles, setArticles] = useState<NewsArticle[]>([]);

  useEffect(() => {
    async function fetchNews() {
      const res = await fetch(`/api/news?country=${country}`);
      const data = await res.json();
      setArticles(data.articles);
    }

    fetchNews();
  }, [country]);

  return (
      <main style={{ padding: "2rem" }}>
        <h2>Select a country to view the top 10 trending articles today:</h2>
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          {countries.map((c) => (
              <option key={c.code} value={c.code}>{c.name}</option>
          ))}
        </select>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {articles.map((article, idx) => (
              <NewsCard key={idx} {...article} country={country}/>
          ))}
        </div>
      </main>
  );
}