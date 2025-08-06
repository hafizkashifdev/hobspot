import { AdsCreateAdsCampaignImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdsCreateAdsCampaignPage = () => {
  return (
    <CommonPage
      pageTitle={`Create Ads Campaign`}
      src={AdsCreateAdsCampaignImage}
      backRoute="/ads"
    />
  );
};

export default AdsCreateAdsCampaignPage;
