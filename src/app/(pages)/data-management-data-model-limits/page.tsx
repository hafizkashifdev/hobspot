import { DataManagementDataModelLimitsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataModelLimitsPage = () => {
  return (
    <CommonPage
      pageTitle={`Model Limits`}
      src={DataManagementDataModelLimitsImage}
      backRoute="/data-management-data-model"
    />
  );
};

export default DataManagementDataModelLimitsPage;
