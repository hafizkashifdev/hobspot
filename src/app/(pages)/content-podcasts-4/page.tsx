import { ContentPodcasts4Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ContentPodcasts4Page = () => {
  return (
    <CommonPage
      pageTitle={`content Podcasts`}
      src={ContentPodcasts4Image}
      backRoute="/content"
    />
  );
};

export default ContentPodcasts4Page;
