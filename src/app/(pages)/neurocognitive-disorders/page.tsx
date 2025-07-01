
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
        url: "https://courthearing.netlify.app/og.png",
        width: 1200,
        height: 630,
        alt: "Mental Health",
      },
    ],
  },
};


import { NeurocognitiveDisorders } from "@/features/neurocognitive-disorders";
import React from "react";

const page = () => {
  return <NeurocognitiveDisorders />;
};

export default page;
