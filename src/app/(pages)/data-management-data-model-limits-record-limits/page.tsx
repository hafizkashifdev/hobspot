import { DataManagementDataModelLimitsRecordLimitsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataModelLimitsRecordLimitsPage = () => {
  return (
    <CommonPage
      pageTitle={`Record Limits`}
      src={DataManagementDataModelLimitsRecordLimitsImage}
      backRoute="/data-management-data-model"
    />
  );
};

export default DataManagementDataModelLimitsRecordLimitsPage;
