import { DataManagementDatasetsAllDatasetsDataSetsDetailsViewDatasetImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDatasetsAllDatasetsDataSetsDetailsViewDatasetPage = () => {
  return (
    <CommonPage
      pageTitle={` View Dataset`}
      src={DataManagementDatasetsAllDatasetsDataSetsDetailsViewDatasetImage}
      backRoute="/data-management-datasets"
    />
  );
};

export default DataManagementDatasetsAllDatasetsDataSetsDetailsViewDatasetPage;
