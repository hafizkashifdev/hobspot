import { AdsManageCampaignsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdsManageCampaignsPage = () => {
  return (
    <CommonPage
      pageTitle={`Manage Campaigns`}
      src={AdsManageCampaignsImage}
      backRoute="/ads"
    />
  );
};

export default AdsManageCampaignsPage;
