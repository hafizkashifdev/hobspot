import { AdsCreateAudienceImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdsCreateAudiencePage = () => {
  return (
    <CommonPage
      pageTitle={`Create Audience`}
      src={AdsCreateAudienceImage}
      backRoute="/ads"
    />
  );
};

export default AdsCreateAudiencePage;
