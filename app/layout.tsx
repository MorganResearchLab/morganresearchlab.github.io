import { Source_Sans_3 } from '@next/font/google';
import "./globals.css";

const sourceSans3 = Source_Sans_3({
  weight: ['400', '700'], // Specify the weights you need
  subsets: ['latin'], // Specify the subsets you need
});

export const metadata = {
  title: 'Morgan Lab',
  description: 'Website for Morgan Lab at the University of Aberdeen: Life course engineering to promote healthy ageing',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/img/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sourceSans3.className}`}>
        {children}
      </body>
    </html>
  );
}