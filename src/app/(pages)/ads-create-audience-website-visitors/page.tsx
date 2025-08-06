import { AdsCreateAudienceWebsiteVisitorsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdsCreateAudienceWebsiteVisitorsPage = () => {
  return (
    <CommonPage
      pageTitle={`Create Audience Website Visitors`}
      src={AdsCreateAudienceWebsiteVisitorsImage}
      backRoute="/ads"
    />
  );
};

export default AdsCreateAudienceWebsiteVisitorsPage;
