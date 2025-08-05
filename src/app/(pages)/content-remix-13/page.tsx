import { ContentRemix13Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ContentRemix13Page = () => {
  return (
    <CommonPage
      pageTitle={`content Remix`}
      src={ContentRemix13Image}
      backRoute="/content"
    />
  );
};

export default ContentRemix13Page;
