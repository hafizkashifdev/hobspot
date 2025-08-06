import { DataManagementDataQualityPropertyInsightsOverviewImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataQualityPropertyInsightsOverviewPage = () => {
  return (
    <CommonPage
      pageTitle={`Overview`}
      src={DataManagementDataQualityPropertyInsightsOverviewImage}
      backRoute="/data-management-data-quality"
    />
  );
};

export default DataManagementDataQualityPropertyInsightsOverviewPage;
