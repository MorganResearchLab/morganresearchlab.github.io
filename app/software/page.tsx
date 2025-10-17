"use client";

import React, { useEffect, useState } from "react";

interface Software {
    id: number;
    title: string;
    image: string;
    content: string[];
    github?: string;
    doi?: string;
}

export default function Software() {
    const [software, setSoftware] = useState<Software[]>([]);

    useEffect(() => {
        fetch("/data/software.json")
            .then((response) => response.json())
            .then((data) => setSoftware(data));
    }, []);

    return (
        <>
            <div className="flex flex-col w-full">
                <div className="flex flex-col w-11/12 md:w-3/4 mx-auto">
                    <h1 className="text-center mt-8 text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                        Software
                    </h1>
                </div>
            </div>
            <hr className="border-t border-gray-600 w-11/12 md:w-3/4 mx-auto mb-8" />

            {software.map((item, index) => (
                <div key={item.id}>
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col md:flex-row w-11/12 md:w-3/4 mx-auto items-center">
                            <div className="w-full md:w-1/3 flex flex-col items-center justify-center mb-4 md:mb-0">
                                <img
                                    src={`/img/software/${item.image}`}
                                    alt={item.title}
                                    className="rounded-lg w-48 h-48 object-contain"
                                />
                            </div>
                            <div className="w-full md:w-2/3 flex flex-col justify-center">
                                <h2 className="text-2xl font-semibold mb-2">
                                    {item.title}
                                </h2>
                                <div className="flex flex-row mb-3 space-x-4">
                                    {item.github && (
                                        <a href={item.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-medium">
                                            GitHub
                                        </a>
                                    )}
                                    {item.doi && (
                                        <a href={item.doi} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-medium">
                                            DOI
                                        </a>
                                    )}
                                </div>
                                {item.content.map((paragraph, pIndex) => (
                                    <p key={pIndex} className="text-sm mb-3">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                    {index !== software.length - 1 && (
                        <hr className="border-t border-gray-600 w-11/12 md:w-3/4 mx-auto my-8" />
                    )}
                </div>
            ))}
        </>
    );
}

