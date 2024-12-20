import React, { ReactNode } from 'react';

interface RootLayoutProps {
    children: ReactNode;
  }
  

export const metadata = {
    title: 'Research - Morgan Lab',
    description: 'Website for Morgan Lab at the University of Aberdeen: Life course engineering to promote healthy ageing',
    icons: {
      icon: '/img/icon.png',
    },
  };
  
export default function ResearchLayout({ children }: RootLayoutProps) {
return (
    <div>
    {children}
    </div>
);
}