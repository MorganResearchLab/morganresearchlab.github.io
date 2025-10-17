"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Publication {
    id: number;
    title: string;
    doi: string;
    year: number; // Add year field
}

export default function Publications() {
    const [publications, setPublications] = useState<Publication[]>([]);
    const [groupedPublications, setGroupedPublications] = useState<{ [year: number]: Publication[] }>({});

    useEffect(() => {
        fetch("/data/publication.json")
            .then((response) => response.json())
            .then((data) => {
                setPublications(data);
                
                // Group publications by year
                const grouped = data.reduce((acc: { [year: number]: Publication[] }, pub: Publication) => {
                    const year = pub.year;
                    if (!acc[year]) {
                        acc[year] = [];
                    }
                    acc[year].push(pub);
                    return acc;
                }, {});
                
                setGroupedPublications(grouped);
            });
    }, []);

    // Get sorted years in descending order (newest first)
    const sortedYears = Object.keys(groupedPublications)
        .map(Number)
        .sort((a, b) => b - a);

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
                    {sortedYears.map((year) => (
                        <div key={year} className="mb-8">
                            {/* Year sub-header */}
                            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
                                {year}
                            </h2>
                            
                            {/* Publications for this year */}
                            <ul className="list-disc pl-5 space-y-4">
                                {groupedPublications[year].map((publication) => (
                                    <li key={publication.id}>
                                        {publication.title}{" "}
                                        <Link 
                                            href={publication.doi} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-blue-500 hover:underline"
                                        >
                                            (DOI)
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
