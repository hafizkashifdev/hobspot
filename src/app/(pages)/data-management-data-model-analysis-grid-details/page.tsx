import { DataManagementDataModelAnalysisGridDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataModelAnalysisGridDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`Grid Details`}
      src={DataManagementDataModelAnalysisGridDetailsImage}
      backRoute="/data-management-data-model"
    />
  );
};

export default DataManagementDataModelAnalysisGridDetailsPage;
