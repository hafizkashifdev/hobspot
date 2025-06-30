import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-outfit',
});
export const metadata: Metadata = {
  title: "Mental Health",
  description:
    "Concise visual breakdowns and structured diagrams for clear, accessible insight.",
  // viewport: "initial-scale=1, width=device-width",
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico", type: "image/x-icon" },
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: {
      rel: "icon",
      url: "/apple-touch-icon.png",
      type: "image/png",
      sizes: "180x180",
    },
  },
  openGraph: {
    title: "Mental Health",
    description:
      "Concise visual breakdowns and structured diagrams for clear, accessible insight.",
    url: "https://mentalresponsive.netlify.app/",
    type: "website",
    images: [
      {
        url: "/og-img.png",
        width: 1200,
        height: 630,
        alt: "Mental Health",
      },
    ],
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
