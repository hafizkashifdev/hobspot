import { AdsChooseAdsTypeImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdsChooseAdsTypePage = () => {
  return (
    <CommonPage
      pageTitle={`Choose Ads Type`}
      src={AdsChooseAdsTypeImage}
      backRoute="/ads"
    />
  );
};

export default AdsChooseAdsTypePage;
