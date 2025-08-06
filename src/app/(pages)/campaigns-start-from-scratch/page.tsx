import { CampaignsStartFromScratchImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CampaignsStartFromScratchPage = () => {
  return (
    <CommonPage
      pageTitle={` Start from Scratch `}
      src={CampaignsStartFromScratchImage}
      backRoute="/campaigns"
    />
  );
};

export default CampaignsStartFromScratchPage;
