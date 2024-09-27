'use client';

import Link from 'next/link';
import React, {useEffect, useState } from 'react';

interface Research {
    id: number;
    title: string;
    content: string;
}

export default function ResearchHomepage() {

    const [research, setResearch] = useState<Research[]>([]);

    useEffect(() => {
        fetch('/data/research_intro.json')
        .then((response) => response.json())
        .then((data) => setResearch(data));
    }, []);

    return (
        <>
        <div id="research" className="flex flex-col w-full">
                <div className="flex flex-col w-3/4 mx-auto">
                    <h1 className="text-center mt-8 text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                        Our Research
                    </h1>
                    <p className="text-justify text-base md:text-lg lg:text-xl">
                        {research.map((researchItem) => (
                            <>
                                {researchItem.content}
                            </>                            
                        ))}
                    </p>
                    <div className="flex justify-center mt-4">
                        <Link href="/research">
                            <button className="uppercase border-2 border-gray-600 text-white rounded px-4 py-2 hover:bg-gray-100 hover:text-black">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}