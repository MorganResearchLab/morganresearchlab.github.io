import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: 'People - Morgan Lab',
    description: 'Website for Morgan Lab at the University of Aberdeen: Life course engineering to promote healthy ageing',
    icons: {
      icon: '/img/icon.png',
    },
  };

export default function People() {
  return (
    <>
        <div className="flex flex-col w-full">
            <div className="flex flex-col w-3/4 mx-auto">
            <h1 className="text-center mt-8 text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Our Team</h1>
            </div>
        </div>
        <hr className="border-t border-gray-600 w-3/4 mx-auto mb-8" />
        <div className="flex flex-col w-full">
            <div className="flex flex-row w-3/4 mx-auto">
                <div className="w-full flex flex-col items-center justify-center">
                    <img src="/img/member/mike_morgan.png" alt="Mike Morgan" className="rounded-lg w-56 h-56" />
                </div>
                <div className="flex flex-col justify-center">
                    <Link href="https://www.abdn.ac.uk/people/michael.morgan">
                        <p className="text-2xl font-semibold">Mike Morgan</p>
                    </Link>
                    <p className="text-lg mb-5">Principal Investigator</p>
                    <p className='text-sm'>Mike trained as a wet lab biologist in rheumatology research and genetics before jumping ship to become a computational biologist during his postdoctoral years in Oxford and Cambridge Universities. He contributed to, and developed his own computational methods and applied these to a range of immunological systems, including the ageing thymus, COVID19 and T cell development.
                    <br/><br/>
                    Mike spends his free time running and hiking the Scottish hills or trying to train his recalcitrant Springador Luna not to go chasing rabbits. Mike is not winning at the moment. He has a strong penchant for Yorkshire Tea (the best there is) and porridge. Mike is well suited to life in Scotland.
                    </p>
                </div>
            </div>
        </div>
        {/* <hr className="border-t border-gray-600 w-3/4 mx-auto mt-8" />
        <div className="flex flex-col w-full">
            <div className="flex flex-col w-3/4 mx-auto">
            <h1 className="text-center mt-8 text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Postdocs</h1>
            </div>
        </div> */}
        <hr className="border-t border-gray-600 w-3/4 mx-auto my-8" />
        <div className="flex flex-col w-full">
            <div className="flex flex-row w-3/4 mx-auto">
            <div className="flex flex-col justify-center">
                    <p className="text-2xl font-semibold text-right">Haries Ramdhani</p>
                    <p className="text-lg mb-5 text-right">PhD Student</p>
                    <p className='text-sm text-justify'>Haries recently joined Morgan Lab for his PhD. Haries is originally from Jakarta, Indonesia, but at this point we can call him a nomad. Prior to joining, Haries earned his BSc from Gebze Technical University in Turkey followed by working as a data scientist for a Czech-based Finance Company.
                    <br/><br/>
                    Haries loves watching nature documentaries, quiz shows and animated series. Haries also likes learning new languages (He still keeps his years of Duolingo streaks alive) and hacking random stuff.
                    </p>
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                    <img src="/img/member/haries_ramdhani.png" alt="Haries Ramdhani" className="rounded-lg w-56 h-56" />
                </div>
                
            </div>
        </div>
        <hr className="border-t border-gray-600 w-3/4 mx-auto my-8" />
        <div className="flex flex-col w-full">
            <div className="flex flex-row w-3/4 mx-auto">
                <div className="w-1/3 flex flex-col items-center justify-center">
                    <img src="/img/member/unknown.png" alt="Unknown" className="rounded-lg w-56 h-56" />
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-2xl font-semibold">This might be you!</p>
                    <p className="text-lg mb-5">Scientist</p>
                    <p className='text-sm'>We are always looking for talented scientists to join our team. Please get in touch if you would like to discuss your research ideas further.
                    </p>
                </div>
            </div>
        </div>

        <div className="flex flex-col w-full">
            <div className="flex flex-col w-3/4 mx-auto">
            <h1 className="text-center mt-8 text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Alumni</h1>
            </div>
        </div>
        <hr className="border-t border-gray-600 w-3/4 mx-auto mb-8" />
        <div className="flex flex-col w-full">
            <div className="flex flex-col w-3/4 mx-auto">
                <ul>
                    <li>Kerry Woodward (2023) - Master&apos;s student, Investigating the impact of tumorigenic mutations on immune gene expression programs in small bowel adenocarcinoma</li>
                    <li>Sristi Bhattacharjee (2024) - Master&apos;s student, Do old T cells accumulate somatic mutations?</li>
                    <li>Changel K. Jolly (2024) - Master&apos;s student, Which immune cells accumulate the most somatic mutations?</li>
                </ul>
            </div>
        </div>
        
    </>
  );
}