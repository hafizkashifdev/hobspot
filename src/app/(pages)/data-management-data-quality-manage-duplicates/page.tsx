import { DataManagementDataQualityManageDuplicatesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataQualityManageDuplicatesPage = () => {
  return (
    <CommonPage
      pageTitle={`Manage Duplicates`}
      src={DataManagementDataQualityManageDuplicatesImage}
      backRoute="/data-management-data-quality"
    />
  );
};

export default DataManagementDataQualityManageDuplicatesPage;
