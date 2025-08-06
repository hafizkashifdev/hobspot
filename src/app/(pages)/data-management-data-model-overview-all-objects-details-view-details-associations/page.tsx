import { DataManagementDataModelOverviewAllObjectsDetailsViewDetailsAssociationsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataModelOverviewAllObjectsDetailsViewDetailsAssociationsPage = () => {
  return (
    <CommonPage
      pageTitle={`Associations`}
      src={DataManagementDataModelOverviewAllObjectsDetailsViewDetailsAssociationsImage}
      backRoute="/data-management-data-model"
    />
  );
};

export default DataManagementDataModelOverviewAllObjectsDetailsViewDetailsAssociationsPage;
