import { DataManagementDataModelAnalysisCrmGraphImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataModelAnalysisCrmGraphPage = () => {
  return (
    <CommonPage
      pageTitle={`CRM Graph`}
      src={DataManagementDataModelAnalysisCrmGraphImage}
      backRoute="/data-management-data-model"
    />
  );
};

export default DataManagementDataModelAnalysisCrmGraphPage;
