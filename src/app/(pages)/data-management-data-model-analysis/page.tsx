import { DataManagementDataModelAnalysisImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataModelAnalysisPage = () => {
  return (
    <CommonPage
      pageTitle={`Analysis`}
      src={DataManagementDataModelAnalysisImage}
      backRoute="/data-management-data-model"
    />
  );
};

export default DataManagementDataModelAnalysisPage;
