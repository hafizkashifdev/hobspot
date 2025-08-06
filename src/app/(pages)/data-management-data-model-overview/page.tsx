import { DataManagementDataModelOverviewImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataModelOverviewPage = () => {
  return (
    <CommonPage
      pageTitle={`Overview`}
      src={DataManagementDataModelOverviewImage}
      backRoute="/data-management-data-model"
    />
  );
};

export default DataManagementDataModelOverviewPage;
