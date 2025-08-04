import { ContentKnowledgeBaseSetupImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ContentKnowledgeBaseSetupPage = () => {
  return (
    <CommonPage
      pageTitle={`Content & Knowledge Base Setup`}
      src={ContentKnowledgeBaseSetupImage}
      backRoute="/breeze-main"
    />
  );
};

export default ContentKnowledgeBaseSetupPage;
