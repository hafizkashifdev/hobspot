import { AdsCreateAudienceCompanyListImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdsCreateAudienceCompanyListPage = () => {
  return (
    <CommonPage
      pageTitle={`Create Audience Company List`}
      src={AdsCreateAudienceCompanyListImage}
      backRoute="/ads"
    />
  );
};

export default AdsCreateAudienceCompanyListPage;
