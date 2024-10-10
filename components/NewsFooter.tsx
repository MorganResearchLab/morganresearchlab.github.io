"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface News {
    id: number;
    title: string;
    date: string;
    content: string;
}

const generateSlug = (title: string) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
};

export default function NewsFooter() {
    const pathname = usePathname();
    const [news, setNews] = useState<News[]>([]);

    const isHomePage = pathname === "/";

    useEffect(() => {
        fetch("/data/news.json")
            .then((response) => response.json())
            .then((data) => {
                const sortedData = data.sort(
                    (a: News, b: News) =>
                        new Date(b.date).getTime() - new Date(a.date).getTime()
                );
                setNews(sortedData.slice(0, 4));
            });
    }, []);

    return (
        <>
            <div className="flex flex-col items-start">
                {isHomePage && (
                    <>
                        <h1 className="text-left text-xl md:text-2xl lg:text-3xl font-bold mb-4 mt-2">
                            News
                        </h1>
                        <ul className="list-disc">
                            {news.map((newsItem, index) => (
                                <li key={index}>
                                    <a
                                        href={`news#${generateSlug(
                                            newsItem.title
                                        )}`}
                                        className="text-white hover:underline"
                                    >
                                        [{newsItem.date}] - {newsItem.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </>
    );
}
