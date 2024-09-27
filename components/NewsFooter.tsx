"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface News {
    id: number;
    title: string;
    date: string;
    content: string;
}

export default function NewsFooter() {
    const pathname = usePathname();
    const [news, setNews] = useState<News[]>([]);

    const isHomePage = pathname === "/";

    useEffect(() => {
        fetch("/data/news.json")
            .then((response) => response.json())
            .then((data) => setNews(data));
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
                                    {/* <Link href={`/news/${newsItem.id}`}> */}
                                    [{newsItem.date}] - {newsItem.title}
                                    {/* </Link> */}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </>
    );
}
