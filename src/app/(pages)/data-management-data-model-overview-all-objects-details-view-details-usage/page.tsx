import { DataManagementDataModelOverviewAllObjectsDetailsViewDetailsUsageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataModelOverviewAllObjectsDetailsViewDetailsUsagePage = () => {
  return (
    <CommonPage
      pageTitle={`Usage`}
      src={DataManagementDataModelOverviewAllObjectsDetailsViewDetailsUsageImage}
      backRoute="/data-management-data-model"
    />
  );
};

export default DataManagementDataModelOverviewAllObjectsDetailsViewDetailsUsagePage;
