import { DataManagementDatasetsAllDatasetsDataSetsDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDatasetsAllDatasetsDataSetsDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={` Data Sets Details`}
      src={DataManagementDatasetsAllDatasetsDataSetsDetailsImage}
      backRoute="/data-management-datasets"
    />
  );
};

export default DataManagementDatasetsAllDatasetsDataSetsDetailsPage;
