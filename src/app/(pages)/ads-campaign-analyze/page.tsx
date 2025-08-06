import { AdsCampaignAnalyzeImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdsCampaignAnalyzePage = () => {
  return (
    <CommonPage
      pageTitle={`Campaign Analyze`}
      src={AdsCampaignAnalyzeImage}
      backRoute="/ads"
    />
  );
};

export default AdsCampaignAnalyzePage;
