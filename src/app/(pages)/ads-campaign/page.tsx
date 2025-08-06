import { AdsCampaignImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdsCampaignPage = () => {
  return (
    <CommonPage
      pageTitle={`Campaign`}
      src={AdsCampaignImage}
      backRoute="/ads"
    />
  );
};

export default AdsCampaignPage;
