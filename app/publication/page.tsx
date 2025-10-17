"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Publication {
    id: number;
    title: string;
    doi: string;
}

export default function Publications() {
    const [publications, setPublications] = useState<Publication[]>([]);

    useEffect(() => {
        fetch("/data/publication.json")
            .then((response) => response.json())
            .then((data) => setPublications(data));
    }, []);

    return (
        <>
            <div className="flex flex-col w-full">
                <div className="flex flex-col w-11/12 md:w-3/4 mx-auto">
                    <h1 className="text-center mt-8 text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                        Publications
                    </h1>
                </div>
            </div>
            <hr className="border-t border-gray-600 w-11/12 md:w-3/4 mx-auto mb-8" />
            <div className="flex flex-col w-full">
                <div className="flex flex-col w-11/12 md:w-3/4 mx-auto">
                    <ul className="list-disc pl-5 space-y-4">
                        {publications.map((publication) => (
                            <li key={publication.id}>
                                {publication.title}{" "}
                                <Link href={publication.doi} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    (DOI)
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
