import { AdsCreateAudienceContactListImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdsCreateAudienceContactListPage = () => {
  return (
    <CommonPage
      pageTitle={`Create Audience Contact List`}
      src={AdsCreateAudienceContactListImage}
      backRoute="/ads"
    />
  );
};

export default AdsCreateAudienceContactListPage;
