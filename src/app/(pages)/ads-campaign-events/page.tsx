import { AdsCampaignEventsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdsCampaignEventsPage = () => {
  return (
    <CommonPage
      pageTitle={` Campaign Events`}
      src={AdsCampaignEventsImage}
      backRoute="/ads"
    />
  );
};

export default AdsCampaignEventsPage;
