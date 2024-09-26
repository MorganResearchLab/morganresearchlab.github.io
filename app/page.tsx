import Link from "next/link";

export const metadata = {
  title: 'Morgan Lab',
  description: 'Website for Morgan Lab at the University of Aberdeen: Life course engineering to promote healthy ageing',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/img/icon.png',
  },
};

export default function Home() {
  return (
    <>
      <div id="research" className="flex flex-col w-full">
        <div className="flex flex-col w-3/4 mx-auto">
          <h1 className="text-center mt-8 text-xl md:text-2xl lg:text-3xl font-bold mb-4">Our Research</h1>
          <p className="text-center text-base md:text-lg lg:text-xl">
            In our lab, we study how ageing and genetics regulate immune cell states and cell-cell interactions, and how this impacts on immune-mediated diseases, notably autoimmunity. By developing state of the art computational algorithms, we model variation in cell states and cell-cell interactions using single cell omics data modalities. This involves combining graph theory and statistical models to identify which cell types or interactions are perturbed by ageing and genetics. The impact of our research is broadened by the computational algorithms that we develop, and their application through collaborations with research groups that study cancer and immunology both nationally and internationally.
          </p>
          <div className="flex justify-center mt-4">
            <Link href="/research">
              <button className="uppercase border-2 border-gray-600 text-white rounded px-4 py-2 hover:bg-gray-100 hover:text-black">Learn More</button>
            </Link>
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
            <Link href="/people">
              <button className="uppercase border-2 border-gray-600 text-white rounded px-4 py-2 hover:bg-gray-100 hover:text-black">Learn More</button>
            </Link>
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
              Ashgrove Road West<br/>
              United Kingdom<br/>
              AB25 2ZD<br/>
            </p>
            <img src="/img/uoa_logo.png" alt="University of Aberdeen Logo" className="w-32 h-auto mt-4" />
          </div>
          <div className="flex flex-col items-start">
          <h1 className="text-left text-xl md:text-2xl lg:text-3xl font-bold mb-4 mt-2">News</h1>
            <ul>
              <li>No good news yet, but we promise you to bring more good news soon, stay tuned!</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}