"use client";

import Link from "next/link";
import { list } from "postcss";
import React, { useEffect, useState } from "react";

interface News {
    id: number;
    title: string;
    date: string;
    content: string[];
    image: string|null;
}

export default function News() {
    const getYear = (dateString: string) => dateString.split("-")[2];

    const [news, setNews] = useState<News[]>([]);

    useEffect(() => {
        fetch("/data/news.json")
            .then((response) => response.json())
            .then((data) => setNews(data));
    }, []);

    return (
        <>
            <div className="flex flex-col w-full">
                <div className="flex flex-col w-11/12 md:w-3/4 mx-auto">
                    <h1 className="text-center mt-8 text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                        News
                    </h1>
                </div>
            </div>
            <hr className="border-t border-gray-600 w-11/12 md:w-3/4 mx-auto mb-8" />
            {news.map((news, index) => (
                <>
                    <div className="flex flex-col w-full" key={index}>
                        <div className="flex flex-col md:flex-row w-11/12 md:w-3/4 mx-auto">
                            {news.image ? (
                                <img
                                    src={`/img/news/${news.image}`}
                                    alt={news.title}
                                    className="rounded-lg w-96 h-56 mr-5"
                                />
                            ) : (
                                <div className="rounded-lg w-96 h-56 bg-gray-300 flex items-center justify-center mr-5">
                                    <span className="text-gray-500">No Image</span>
                                </div>
                            )}
                            <div className="w-full md:w-1/2 flex flex-col justify-start mt-4 md:mt-0">
                                <p className="text-2xl font-semibold">
                                    {news.title}
                                </p>
                                <p className="text-lg">{news.date}</p>
                                
                                <p className="text-sm">
                                    {news.content.map((content) => (
                                        <>
                                            {content}
                                            <br />
                                            <br />
                                        </>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* {index !== news.length - 1 && (
                        <hr className="border-t border-gray-600 w-11/12 md:w-3/4 mx-auto my-8" />
                    )} */}
                </>
            ))}

        </>
    );
}
