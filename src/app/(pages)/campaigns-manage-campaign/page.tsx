import { CampaignsManageCampaignImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CampaignsManageCampaignPage = () => {
  return (
    <CommonPage
      pageTitle={` Manage Campaign  `}
      src={CampaignsManageCampaignImage}
      backRoute="/campaigns"
    />
  );
};

export default CampaignsManageCampaignPage;
