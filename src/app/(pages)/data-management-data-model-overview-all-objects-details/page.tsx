import { DataManagementDataModelOverviewAllObjectsDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataModelOverviewAllObjectsDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`All Objects Details`}
      src={DataManagementDataModelOverviewAllObjectsDetailsImage}
      backRoute="/data-management-data-model"
    />
  );
};

export default DataManagementDataModelOverviewAllObjectsDetailsPage;
