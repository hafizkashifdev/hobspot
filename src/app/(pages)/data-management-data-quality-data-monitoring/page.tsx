import { DataManagementDataQualityDataMonitoringImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataQualityDataMonitoringPage = () => {
  return (
    <CommonPage
      pageTitle={`Data Monitoring`}
      src={DataManagementDataQualityDataMonitoringImage1}
      backRoute="/data-management-data-quality"
    />
  );
};

export default DataManagementDataQualityDataMonitoringPage;
