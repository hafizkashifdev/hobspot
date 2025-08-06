import { SocialPostsAnalyzeImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SocialPostsAnalyzePage = () => {
  return (
    <CommonPage
      pageTitle={`Posts Analyze`}
      src={SocialPostsAnalyzeImage}
      backRoute="/social"
    />
  );
};

export default SocialPostsAnalyzePage;
