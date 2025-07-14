import { CareQualityCommissionCqcOverviewImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CareQualityCommissionCqcOverviewPage = () => {
  return (
    <CommonPage
      pageTitle={`Care Quality Commission (CQC) Overview`}
      src={CareQualityCommissionCqcOverviewImage}
      backRoute="/care-quality-commission"
    />
  );
};

export default CareQualityCommissionCqcOverviewPage;
