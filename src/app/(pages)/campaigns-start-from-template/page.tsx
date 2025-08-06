import { CampaignsStartFromTemplateImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CampaignsStartFromTemplatePage = () => {
  return (
    <CommonPage
      pageTitle={` Start From Template `}
      src={CampaignsStartFromTemplateImage}
      backRoute="/campaigns"
    />
  );
};

export default CampaignsStartFromTemplatePage;
