import { ContentSetupKnowledgeBase8Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ContentSetupKnowledgeBase8Page = () => {
  return (
    <CommonPage
      pageTitle={`content Setup Knowledge Base`}
      src={ContentSetupKnowledgeBase8Image}
      backRoute="/content"
    />
  );
};

export default ContentSetupKnowledgeBase8Page;
