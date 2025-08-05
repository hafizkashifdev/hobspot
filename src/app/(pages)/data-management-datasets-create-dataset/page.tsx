import { DataManagementDatasetsCreateDatasetImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDatasetsCreateDatasetPage = () => {
  return (
    <CommonPage
      pageTitle={`Create Dataset`}
      src={DataManagementDatasetsCreateDatasetImage}
      backRoute="/data-management-datasets"
    />
  );
};

export default DataManagementDatasetsCreateDatasetPage;
