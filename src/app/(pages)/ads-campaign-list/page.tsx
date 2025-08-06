import { AdsCampaignListImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdsCampaignListPage = () => {
  return (
    <CommonPage
      pageTitle={`Campaign List`}
      src={AdsCampaignListImage}
      backRoute="/ads"
    />
  );
};

export default AdsCampaignListPage;
