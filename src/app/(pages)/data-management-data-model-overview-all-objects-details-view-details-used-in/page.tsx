import { DataManagementDataModelOverviewAllObjectsDetailsViewDetailsUsedInImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataModelOverviewAllObjectsDetailsViewDetailsUsedInPage = () => {
  return (
    <CommonPage
      pageTitle={`Used In`}
      src={DataManagementDataModelOverviewAllObjectsDetailsViewDetailsUsedInImage}
      backRoute="/data-management-data-model"
    />
  );
};

export default DataManagementDataModelOverviewAllObjectsDetailsViewDetailsUsedInPage;
