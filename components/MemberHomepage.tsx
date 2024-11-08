"use client";

import Link from "next/link";
import React, {useEffect, useState } from "react";

interface Member {
    id: number;
    name: string;
    role: string;
    join_date: string;
    email: string | null;
    twitter: string | null;
    website: string | null;
    github: string | null;
    scholar: string | null;
    image: string;
    bio: string[];
    tag: string[];
}

export default function MemberHomepage() {
    const [members, setMembers] = useState<Member[]>([]);

    useEffect(() => {
        fetch("/data/member.json")
            .then((response) => response.json())
            .then((data) => setMembers(data));
    }, []);

    return (
        <>
            <div id="people" className="flex flex-col w-full">
                <div className="flex flex-col w-3/4 mx-auto">
                    <h1 className="text-center mt-8 text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                        Our Team
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                        {members.map(
                            (member, index) =>
                                member.name !== "This might be you!" && (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center"
                                    >
                                        <img
                                            src={`/img/member/${member.image}`}
                                            alt={member.name}
                                            className="rounded-lg w-56 h-56"
                                        />
                                        <div className="text-center mt-2">
                                            <p className="text-lg font-semibold">
                                                {member.name}
                                            </p>
                                            <p className="text-sm">
                                                {member.role}
                                            </p>
                                        </div>
                                    </div>
                                )
                        )}
                    </div>
                    <div className="flex justify-center mt-4">
                        <Link href="/people">
                            <button className="uppercase border-2 border-gray-600 text-white rounded px-4 py-2 hover:bg-gray-100 hover:text-black">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
