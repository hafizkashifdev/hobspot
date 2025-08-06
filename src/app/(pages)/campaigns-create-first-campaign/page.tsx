import { CampaignsCreateFirstCampaignImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CampaignsCreateFirstCampaignPage = () => {
  return (
    <CommonPage
      pageTitle={`Create First Campaign `}
      src={CampaignsCreateFirstCampaignImage}
      backRoute="/campaigns"
    />
  );
};

export default CampaignsCreateFirstCampaignPage;
