import { DataManagementDataQualityPropertiesGridImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataQualityPropertiesGridPage = () => {
  return (
    <CommonPage
      pageTitle={`Grid`}
      src={DataManagementDataQualityPropertiesGridImage}
      backRoute="/data-management-data-quality"
    />
  );
};

export default DataManagementDataQualityPropertiesGridPage;
