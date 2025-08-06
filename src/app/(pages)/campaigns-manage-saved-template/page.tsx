import { CampaignsManageSavedTemplateImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CampaignsManageSavedTemplatePage = () => {
  return (
    <CommonPage
      pageTitle={` Manage Saved Template `}
      src={CampaignsManageSavedTemplateImage}
      backRoute="/campaigns"
    />
  );
};

export default CampaignsManageSavedTemplatePage;
