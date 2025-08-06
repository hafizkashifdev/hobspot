import { DataManagementDatasetsAllDatasetsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDatasetsAllDatasetsPage = () => {
  return (
    <CommonPage
      pageTitle={``}
      src={DataManagementDatasetsAllDatasetsImage}
      backRoute="/data-management-datasets"
    />
  );
};

export default DataManagementDatasetsAllDatasetsPage;
