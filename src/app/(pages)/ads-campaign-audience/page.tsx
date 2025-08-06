import { AdsCampaignAudienceImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdsCampaignAudiencePage = () => {
  return (
    <CommonPage
      pageTitle={` Campaign Audience`}
      src={AdsCampaignAudienceImage}
      backRoute="/ads"
    />
  );
};

export default AdsCampaignAudiencePage;
