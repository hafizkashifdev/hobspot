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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className}`}>
        {children}
      </body>
    </html>
  );
}
