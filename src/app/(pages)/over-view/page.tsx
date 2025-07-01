
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
import React from "react";
import { section10 } from "@/assets";
import { CommonPage } from "@/components";

const OverViewPage = () => {
  return (
    <div>
      <CommonPage
        pageTitle="Mental Health / Overview & Purpose "
        backRoute="/court-hearing"
        src={section10}
      />
    </div>
  );
};
export default OverViewPage;
