import { DataManagementDatasetsCreateDatasetUploadCsvPreviewImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDatasetsCreateDatasetUploadCsvPreviewPage = () => {
  return (
    <CommonPage
      pageTitle={`Preview`}
      src={DataManagementDatasetsCreateDatasetUploadCsvPreviewImage}
      backRoute="/data-management-datasets"
    />
  );
};

export default DataManagementDatasetsCreateDatasetUploadCsvPreviewPage;
