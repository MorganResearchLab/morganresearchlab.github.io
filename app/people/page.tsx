"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Member {
    id: number;
    name: string;
    role: string;
    join_date: string;
    email: string | null;
    twitter: string | null;
    website: string | null;
    github: string | null;
    image: string;
    bio: string[];
    tag: string[];
}

interface Alumni {
    id: number;
    name: string;
    role: string;
    join_date: string;
    project: string;
}

export default function People() {
    const getYear = (dateString: string) => dateString.split("-")[2];

    const [members, setMembers] = useState<Member[]>([]);
    const [alumni, setAlumni] = useState<Alumni[]>([]);

    useEffect(() => {
        fetch("/data/member.json")
            .then((response) => response.json())
            .then((data) => setMembers(data));
    }, []);

    useEffect(() => {
        fetch("/data/alumni.json")
            .then((response) => response.json())
            .then((data) => setAlumni(data));
    }, []);

    return (
        <>
            <div className="flex flex-col w-full">
                <div className="flex flex-col w-11/12 md:w-3/4 mx-auto">
                    <h1 className="text-center mt-8 text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                        Our Team
                    </h1>
                </div>
            </div>
            <hr className="border-t border-gray-600 w-11/12 md:w-3/4 mx-auto mb-8" />
            {members.map((member, index) => (
                <>
                    <div className="flex flex-col w-full" key={index}>
                        <div className="flex flex-col md:flex-row w-11/12 md:w-3/4 mx-auto">
                            <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                                <img
                                    src={`/img/member/${member.image}`}
                                    alt={member.name}
                                    className="rounded-lg w-56 h-56"
                                />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col justify-center mt-4 md:mt-0">
                                <p className="text-2xl font-semibold">
                                    {member.name}
                                </p>
                                <p className="text-lg">{member.role}</p>
                                <div className="flex flex-row mt-2 mb-2">
                                    {member.email && (
                                        <Link href={`mailto:${member.email}`}>
                                            <img
                                                src="/img/social/email.png"
                                                alt="Email"
                                                className="w-6 h-6 mr-2"
                                            />
                                        </Link>
                                    )}
                                    {member.twitter && (
                                        <Link
                                            href={`https://x.com/${member.twitter}`}
                                        >
                                            <img
                                                src="/img/social/twitter.png"
                                                alt="Twitter"
                                                className="w-6 h-6 mr-2"
                                            />
                                        </Link>
                                    )}
                                    {member.website && (
                                        <Link href={member.website}>
                                            <img
                                                src="/img/social/website.png"
                                                alt="Website"
                                                className="w-6 h-6 mr-2"
                                            />
                                        </Link>
                                    )}
                                    {member.github && (
                                        <Link
                                            href={`https://github.com/${member.github}`}
                                        >
                                            <img
                                                src="/img/social/github.png"
                                                alt="GitHub"
                                                className="w-6 h-6 mr-2"
                                            />
                                        </Link>
                                    )}
                                </div>
                                {member.tag && member.tag.length > 0 && (
                                    
                                    <div className="flex flex-wrap mb-5 gap-y-1">
                                        {member.tag.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs text-black bg-indigo-200 rounded-full px-2 py-1 mr-2"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <p className="text-sm">
                                    {member.bio.map((bio) => (
                                        <>
                                            {bio}
                                            <br />
                                            <br />
                                        </>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                    {index !== members.length - 1 && (
                        <hr className="border-t border-gray-600 w-11/12 md:w-3/4 mx-auto my-8" />
                    )}
                </>
            ))}

            <div className="flex flex-col w-full">
                <div className="flex flex-col w-11/12 md:w-3/4 mx-auto">
                    <h1 className="text-center mt-12 text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                        Alumni
                    </h1>
                </div>
            </div>
            <hr className="border-t border-gray-600 w-11/12 md:w-3/4 mx-auto mb-8" />
            <div className="flex flex-col w-full">
                <div className="flex flex-col w-11/12 md:w-3/4 mx-auto">
                    <ul className="list-disc">
                        {alumni.map((alumnus, index) => (
                            <li key={index}>
                                {alumnus.name} ({getYear(alumnus.join_date)})- (
                                {alumnus.project})
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
