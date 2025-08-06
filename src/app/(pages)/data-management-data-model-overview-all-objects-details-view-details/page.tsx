import { DataManagementDataModelOverviewAllObjectsDetailsViewDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataModelOverviewAllObjectsDetailsViewDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`View Details`}
      src={DataManagementDataModelOverviewAllObjectsDetailsViewDetailsImage}
      backRoute="/data-management-data-model"
    />
  );
};

export default DataManagementDataModelOverviewAllObjectsDetailsViewDetailsPage;
