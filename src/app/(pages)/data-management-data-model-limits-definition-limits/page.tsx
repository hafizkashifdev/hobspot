import { DataManagementDataModelLimitsDefinitionLimitsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataModelLimitsDefinitionLimitsPage = () => {
  return (
    <CommonPage
      pageTitle={`Definition Limits`}
      src={DataManagementDataModelLimitsDefinitionLimitsImage}
      backRoute="/data-management-data-model"
    />
  );
};

export default DataManagementDataModelLimitsDefinitionLimitsPage;
