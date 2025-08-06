import { DataManagementDatasetsAllDatasetsDataSetsDetailsViewDatasetFieldsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDatasetsAllDatasetsDataSetsDetailsViewDatasetFieldsPage = () => {
  return (
    <CommonPage
      pageTitle={` View Dataset Fields`}
      src={DataManagementDatasetsAllDatasetsDataSetsDetailsViewDatasetFieldsImage}
      backRoute="/data-management-datasets"
    />
  );
};

export default DataManagementDatasetsAllDatasetsDataSetsDetailsViewDatasetFieldsPage;
