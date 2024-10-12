"use client";

import React, { useEffect, useState } from "react";

interface Research {
    id: number;
    title: string;
    image: string | null;
    content: string[];
}

interface currentResearch {
    content: string[];
}

interface Collaborator {
	id: number;
	name: string;
	institution: string;
	project: string;
}

export default function Research() {
    const [research, setResearch] = useState<Research[]>([]);
    const [currentResearch, setCurrentResearch] = useState<currentResearch | null>(null);
	const [collaborators, setCollaborators] = useState<Collaborator[]>([]);
	
    useEffect(() => {
        fetch("/data/research.json")
            .then((response) => response.json())
            .then((data) => setResearch(data));
    }, []);

    useEffect(() => {
        fetch("/data/current_research.json")
            .then((response) => response.json())
            .then((data) => setCurrentResearch(data));
    }, []);

	useEffect(() => {
		fetch("/data/collaborator.json")
			.then((response) => response.json())
			.then((data) => setCollaborators(data));
	}, []);

    return (
        <>
            <div className="flex flex-col w-full">
                <div className="flex flex-col w-3/4 mx-auto">
                    <h1 className="text-left mt-8 text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                        [Current Research]
                    </h1>
                    <p className="text-justify text-base md:text-lg lg:text-xl">
                        {currentResearch?.content}
                    </p>
                </div>
            </div>
            <hr className="border-t border-gray-600 w-3/4 mx-auto mt-8" />
            {research.map((research, index) => (
                <div key={index}>
                    <div className="flex flex-col w-full my-2">
                        <div className="flex flex-col md:flex-row justify-between items-center w-3/4 mx-auto">
                            {index % 2 === 0 ? (
                                <>
                                    {research.image ? (
                                        <img
                                            src={`/img/research/${research.image}`}
                                            alt={research.title}
                                            className="rounded-lg w-96 mr-5"
                                            style={{ height: "auto" }}
                                        />
                                    ) : (
                                        <div className="rounded-lg w-96 h-56 bg-gray-300 flex items-center justify-center mr-5">
                                            <span className="text-gray-500">
                                                No Image
                                            </span>
                                        </div>
                                    )}
                                    <div className="w-full md:w-1/2 flex flex-col justify-center mt-4 md:mt-0">
                                        <p className="text-2xl font-semibold cursor-pointer text-right">
                                            {research.title}
                                        </p>
                                        <p className="text-lg text-justify">
                                            {research.content.map(
                                                (content, i) => (
                                                    <React.Fragment key={i}>
                                                        {content}
                                                        <br />
                                                        <br />
                                                    </React.Fragment>
                                                )
                                            )}
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="w-full md:w-1/2 flex flex-col justify-center mt-4 md:mt-0">
                                        <p className="text-2xl font-semibold cursor-pointer text-left">
                                            {research.title}
                                        </p>
                                        <p className="text-lg text-justify">
                                            {research.content.map(
                                                (content, i) => (
                                                    <React.Fragment key={i}>
                                                        {content}
                                                        <br />
                                                        <br />
                                                    </React.Fragment>
                                                )
                                            )}
                                        </p>
                                    </div>
                                    {research.image ? (
                                        <img
                                            src={`/img/research/${research.image}`}
                                            alt={research.title}
                                            className="rounded-lg w-96 h-56 ml-5"
                                        />
                                    ) : (
                                        <div className="rounded-lg w-96 h-56 bg-gray-300 flex items-center justify-center ml-5">
                                            <span className="text-gray-500">
                                                No Image
                                            </span>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>

                    <hr className="border-t border-gray-600 w-3/4 mx-auto" />
                </div>
            ))}
            <div className="flex flex-col w-full">
                <div className="flex flex-col w-3/4 mx-auto">
                    <h1 className="text-left mt-8 text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                        Our Collaborators
                    </h1>
                    {collaborators.map((collaborator, index) => (
                            <li key={index}>
                                <span className="font-bold">{collaborator.name} </span> ({collaborator.institution}) - {collaborator.project}
                            </li>
                        ))}
                </div>
            </div>
        </>
    );
}
