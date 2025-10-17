"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Publication {
    id: number;
    title: string;
    doi: string;
    year: number;
}

export default function Publications() {
    const [groupedPublications, setGroupedPublications] = useState<{ [year: number]: Publication[] }>({});

    useEffect(() => {
        fetch("/data/publication.json")
            .then((response) => response.json())
            .then((data) => {
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
