import { DataManagementDatasetsCreateDatasetUploadCsvImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDatasetsCreateDatasetUploadCsvPage = () => {
  return (
    <CommonPage
      pageTitle={`Upload CSV`}
      src={DataManagementDatasetsCreateDatasetUploadCsvImage}
      backRoute="/data-management-datasets"
    />
  );
};

export default DataManagementDatasetsCreateDatasetUploadCsvPage;
