import { DataManagementDatasetsAllDatasetsDataSetsDetailsViewDatasetFieldsPreviewImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDatasetsAllDatasetsDataSetsDetailsViewDatasetFieldsPreviewPage = () => {
  return (
    <CommonPage
      pageTitle={` Preview`}
      src={DataManagementDatasetsAllDatasetsDataSetsDetailsViewDatasetFieldsPreviewImage}
      backRoute="/data-management-datasets"
    />
  );
};

export default DataManagementDatasetsAllDatasetsDataSetsDetailsViewDatasetFieldsPreviewPage;
