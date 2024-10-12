"use client";

import React, { useEffect, useState } from "react";

interface Funder {
    id: number;
    name: string;
    logo: string | null;
}

export default function FunderHomepage() {
    const [funders, setFunders] = useState<Funder[]>([]);

    useEffect(() => {
        fetch("/data/funder.json")
            .then((response) => response.json())
            .then((data) => setFunders(data));
    }, []);

    return (
        <>
    <div id="people" className="flex flex-col w-full">
        <div className="flex flex-col w-3/4 mx-auto">
            <h1 className="text-center mt-8 text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                Our Funders
            </h1>

            <div className="flex flex-wrap justify-center gap-4 mt-4">
                {funders.map((funder, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center"
                    >
                        <img
                            src={`/img/funder/${funder.logo}`}
                            alt={funder.name}
                            className="rounded-lg h-56 h-32"
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
</>
    );
}
