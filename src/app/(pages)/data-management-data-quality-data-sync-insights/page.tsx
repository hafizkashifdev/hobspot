import { DataManagementDataQualityDataSyncInsightsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataQualityDataSyncInsightsPage = () => {
  return (
    <CommonPage
      pageTitle={`Data Sync Insights`}
      src={DataManagementDataQualityDataSyncInsightsImage}
      backRoute="/data-management-data-quality"
    />
  );
};

export default DataManagementDataQualityDataSyncInsightsPage;
