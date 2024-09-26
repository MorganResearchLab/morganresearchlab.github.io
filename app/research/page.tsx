import React from 'react';

export const metadata = {
    title: 'Research - Morgan Lab',
    description: 'Website for Morgan Lab at the University of Aberdeen: Life course engineering to promote healthy ageing',
    icons: {
      icon: '/img/icon.png',
    },
  };

export default function Research() {
  return (
    <>
        <div className="flex flex-col w-full">
            <div className="flex flex-col w-3/4 mx-auto">
            <h1 className="text-left mt-8 text-xl md:text-2xl lg:text-3xl font-bold mb-4">[Current Research]</h1>
            <p className="text-justify text-base md:text-lg lg:text-xl">
            Single-cell omic profiling has revealed a bewildering diversity of cell types and states defined at the mRNA and protein levels. We are now in the position to scale up these experiments to profile biological systems across large cohorts of volunteers and patients to understand how these cell states are affected by our genetic make-up and the environments that we live in. Moreover, by profiling complex compositions of cells using dissociated single-cell RNA-sequencing and spatial transcriptomic/proteomic approaches we can resolve how interactions between cells are regulated at the genetic level, how this manifests as cell-to-cell variability, and how this predisposes people to immune-mediated diseases.
            </p>
            
            </div>
        </div>
        <hr className="border-t border-gray-600 w-3/4 mx-auto mt-8" />
        <div className="flex flex-col w-full">
            <div className="flex flex-col w-3/4 mx-auto">
            <h1 className="text-right mt-8 text-xl md:text-2xl lg:text-3xl font-bold mb-4">[Computational research]</h1>
            <p className="text-justify text-base md:text-lg lg:text-xl">
            In my previous appointment I developed a computational algorithm, called Milo, to identify perturbed cell states from single-cell experiments (Dann et al. Nature Biotech 2022). Milo uses a blend of graph theory (nearest-neighbour graphs) and statistical modelling (generalized linear models) to identify which cell states are enriched or depleted in an experiment. My lab continues to develop this framework to incorporate mixed effect models and employ graph-theory to improve the computational speed. Such advancements open the door to statistical genetic analyses of single cell data. My lab uses these computational advances to solve biomedical problems from basic research to disease - which broadens the impact of our research.
            <br/><br/>
            For further reading see Dann et al., Nature Biotech 2022 and Kluzer et al., bioRxiv 2023
            </p>
            
            </div>
        </div>
        <hr className="border-t border-gray-600 w-3/4 mx-auto mt-8" />
        <div className="flex flex-col w-full">
            <div className="flex flex-col w-3/4 mx-auto">
            <h1 className="text-left mt-8 text-xl md:text-2xl lg:text-3xl font-bold mb-4">[Experimental Research]</h1>
            <p className="text-justify text-base md:text-lg lg:text-xl">
            I have recently developed an in vitro system to co-culture and stimulate peripheral immune system cells as a  model of immune response and T cell:antigen presenting cell interactions. The motivation is to use this experimental system to probe how ageing and genetic variation shapes the way that immune cells communicate with each other to shape and direct proper immune responses. Using statistical genetics, we can then identify which genetic variants alter immune cell activation and cell-to-cell communication, and how this predisposes to a range of immune-related diseases, such as autoimmunity and cancer.
            </p>
            
            </div>
        </div>
    </>
  );
}