import { DataManagementDataQualityPropertiesLineGraphImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataQualityPropertiesLineGraphPage = () => {
  return (
    <CommonPage
      pageTitle={`Line Graph`}
      src={DataManagementDataQualityPropertiesLineGraphImage}
      backRoute="/data-management-data-quality"
    />
  );
};

export default DataManagementDataQualityPropertiesLineGraphPage;
