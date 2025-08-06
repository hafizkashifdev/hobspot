import { DataManagementDataQualityPropertyInsightsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataQualityPropertyInsightsPage = () => {
  return (
    <CommonPage
      pageTitle={`Property Insights`}
      src={DataManagementDataQualityPropertyInsightsImage}
      backRoute="/data-management-data-quality"
    />
  );
};

export default DataManagementDataQualityPropertyInsightsPage;
