import { HomeSection } from "@/features/home/home-section";

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
};

export default function Home() {
  return (
    <>
      <HomeSection />
    </>
  );
}
