import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-outfit',
});
export const metadata = {
  title: "Mental Health",
  description: "Concise visual breakdowns and structured diagrams for clear, accessible insight.",
  openGraph: {
    title: "Mental Health",
    description: "Concise visual breakdowns and structured diagrams for clear, accessible insight.",
    url: "https://courthearing.netlify.app/",
    type: "website",
    images: [
      {
         url: "https://courthearing.netlify.app/omg.png",
        width: 1200,
        height: 630,
        alt: "Mental Health",
      },
    ],

  },
  other: {
    "msapplication-TileImage": "https://courthearing.netlify.app/omg.png",
  },
};

import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content="https://courthearing.netlify.app/omg.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:title" content="Mental Health" />
        <meta property="og:description" content="Concise visual breakdowns and structured diagrams for clear, accessible insight." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://courthearing.netlify.app/" />
      </Head>
      <body className={`${outfit.className}`}>
        {children}
      </body>
    </html>
  );
}
