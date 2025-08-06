import { DataManagementDataQualityDataSyncInsightsOverviewImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataQualityDataSyncInsightsOverviewPage = () => {
  return (
    <CommonPage
      pageTitle={`Overview`}
      src={DataManagementDataQualityDataSyncInsightsOverviewImage}
      backRoute="/data-management-data-quality"
    />
  );
};

export default DataManagementDataQualityDataSyncInsightsOverviewPage;
