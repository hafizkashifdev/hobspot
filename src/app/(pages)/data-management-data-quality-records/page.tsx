import { DataManagementDataQualityRecordsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataQualityRecordsPage = () => {
  return (
    <CommonPage
      pageTitle={`Records`}
      src={DataManagementDataQualityRecordsImage}
      backRoute="/data-management-data-quality"
    />
  );
};

export default DataManagementDataQualityRecordsPage;
