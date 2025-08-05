import { DataManagementDataQualityPropertiesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataQualityPropertiesPage = () => {
  return (
    <CommonPage
      pageTitle={`Properties`}
      src={DataManagementDataQualityPropertiesImage}
      backRoute="/data-management-data-quality"
    />
  );
};

export default DataManagementDataQualityPropertiesPage;
