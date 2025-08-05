import { ContentKnowledgeBase7Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ContentKnowledgeBase7Page = () => {
  return (
    <CommonPage
      pageTitle={`content Knowledge base`}
      src={ContentKnowledgeBase7Image}
      backRoute="/content"
    />
  );
};

export default ContentKnowledgeBase7Page;
