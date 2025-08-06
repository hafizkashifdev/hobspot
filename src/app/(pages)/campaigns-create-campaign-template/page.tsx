import { CampaignsCreateCampaignTemplateImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CampaignsCreateCampaignTemplatePage = () => {
  return (
    <CommonPage
      pageTitle={` Create Campaign Template `}
      src={CampaignsCreateCampaignTemplateImage}
      backRoute="/campaigns"
    />
  );
};

export default CampaignsCreateCampaignTemplatePage;
