import { DataManagementDataQualityWorkflowsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataQualityWorkflowsPage = () => {
  return (
    <CommonPage
      pageTitle={`Workflows`}
      src={DataManagementDataQualityWorkflowsImage}
      backRoute="/data-management-data-quality"
    />
  );
};

export default DataManagementDataQualityWorkflowsPage;
