import { DataManagementDataQualityDataSyncImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataQualityDataSyncPage = () => {
  return (
    <CommonPage
      pageTitle={`Data Sync`}
      src={DataManagementDataQualityDataSyncImage}
      backRoute="/data-management-data-quality"
    />
  );
};

export default DataManagementDataQualityDataSyncPage;
