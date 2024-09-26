"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div id="hero" className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/img/hero.png')" }}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div id="navbar" className="relative flex flex-col md:flex-row justify-between p-4 mx-2 z-20">
          <div id="navbar-logo" className="hidden md:flex items-center mb-4 md:mb-0">
            <Link href="/" className="text-lg md:text-xl lg:text-2xl font-bold text-white">MORGAN LAB</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleDropdown} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <div className={`flex-col md:flex md:flex-row space-y-4 md:space-y-0 md:space-x-8 uppercase font-bold text-white ${isOpen ? 'flex' : 'hidden'} md:flex`}>
            <Link href="/" className="hover:text-gray-400 text-sm md:text-base lg:text-lg">Home</Link>
            <Link href="#" className="hover:text-gray-400 text-sm md:text-base lg:text-lg">Research</Link>
            <Link href="#" className="hover:text-gray-400 text-sm md:text-base lg:text-lg">People</Link>
            <Link href="#" className="hover:text-gray-400 text-sm md:text-base lg:text-lg">Publications</Link>
            <Link href="#" className="hover:text-gray-400 text-sm md:text-base lg:text-lg">News</Link>
            <Link href="#" className="hover:text-gray-400 text-sm md:text-base lg:text-lg">Software</Link>
            <Link href="https://morganresearchlab.github.io/wiki/" className="hover:text-gray-400 text-sm md:text-base lg:text-lg">Wiki</Link>
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-bold">MORGAN LAB</h1>
          <p className="text-white text-xl md:text-2xl lg:text-3xl mt-4">Life course engineering to promote healthy ageing</p>
        </div>
      </div>
      <div id="research" className="flex flex-col w-full">
        <div className="flex flex-col w-3/4 mx-auto">
          <h1 className="text-center mt-8 text-xl md:text-2xl lg:text-3xl font-bold mb-4">Our Research</h1>
          <p className="text-center text-base md:text-lg lg:text-xl">
            In our lab, we study how ageing and genetics regulate immune cell states and cell-cell interactions, and how this impacts on immune-mediated diseases, notably autoimmunity. By developing state of the art computational algorithms, we model variation in cell states and cell-cell interactions using single cell 'omics data modalities. This involves combining graph theory and statistical models to identify which cell types or interactions are perturbed by ageing and genetics. The impact of our research is broadened by the computational algorithms that we develop, and their application through collaborations with research groups that study cancer and immunology both nationally and internationally.
          </p>
          <div className="flex justify-center mt-4">
            <button className="uppercase border-2 border-gray-600 text-white rounded px-4 py-2 hover:bg-gray-100">Learn More</button>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-600 w-3/4 mx-auto mt-8" />
      <div id="people" className="flex flex-col w-full">
        <div className="flex flex-col w-3/4 mx-auto">
          <h1 className="text-center mt-8 text-xl md:text-2xl lg:text-3xl font-bold mb-4">Our Team</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <div className="flex flex-col items-center">
              <img src="/img/member/mike_morgan.png" alt="Mike Morgan" className="rounded-lg w-56 h-56" />
              <div className="text-center mt-2">
                <p className="text-lg font-semibold">Mike Morgan</p>
                <p className="text-sm">Principal Investigator</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src="/img/member/haries_ramdhani.png" alt="Haries Ramdhani" className="rounded-lg w-56 h-56" />
              <div className="text-center mt-2">
                <p className="text-lg font-semibold">Haries Ramdhani</p>
                <p className="text-sm">PhD Student</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button className="uppercase border-2 border-gray-600 text-white rounded px-4 py-2 hover:bg-gray-100">Learn More</button>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-600 w-3/4 mx-auto mt-8" />
      <div id="footer" className="flex flex-col w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-3/4 mx-auto">
          <div className="flex flex-col items-start">
            <p className="mt-8">
              Morgan Laboratory<br/> 
              School of Medicine, Medical Sciences and Nutrition<br/>
              Institute of Medical Sciences<br/>
              University of Aberdeen<br/>
              United Kingdom<br/>
              AB25 2ZD<br/>
            </p>
            <img src="/img/uoa_logo.png" alt="University of Aberdeen Logo" className="w-32 h-auto mt-4" />
          </div>
          <div className="flex flex-col items-start">
          <h1 className="text-left text-xl md:text-2xl lg:text-3xl font-bold mb-4 mt-2">News</h1>
            <ul>
              <li>No good news yet :( stay tune! </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}