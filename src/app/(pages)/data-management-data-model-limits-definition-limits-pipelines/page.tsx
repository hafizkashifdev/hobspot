import { DataManagementDataModelLimitsDefinitionLimitsPipelinesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataModelLimitsDefinitionLimitsPipelinesPage = () => {
  return (
    <CommonPage
      pageTitle={`Pipelines`}
      src={DataManagementDataModelLimitsDefinitionLimitsPipelinesImage}
      backRoute="/data-management-data-model"
    />
  );
};

export default DataManagementDataModelLimitsDefinitionLimitsPipelinesPage;
