import { DataManagementDatasetsCreateDatasetHubspotDataSourcesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDatasetsCreateDatasetHubspotDataSourcesPage = () => {
  return (
    <CommonPage
      pageTitle={`HubSpot data sources`}
      src={DataManagementDatasetsCreateDatasetHubspotDataSourcesImage}
      backRoute="/data-management-datasets"
    />
  );
};

export default DataManagementDatasetsCreateDatasetHubspotDataSourcesPage;
