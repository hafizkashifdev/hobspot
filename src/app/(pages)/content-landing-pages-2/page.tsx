import { ContentLandingPages2Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ContentLandingPages2Page = () => {
  return (
    <CommonPage
      pageTitle={`content Landing Pages`}
      src={ContentLandingPages2Image}
      backRoute="/content"
    />
  );
};

export default ContentLandingPages2Page;
