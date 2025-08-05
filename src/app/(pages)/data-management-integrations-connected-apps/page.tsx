import { DataManagementIntegrationsConnectedAppsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementIntegrationsConnectedAppsPage = () => {
  return (
    <CommonPage
      pageTitle={`Connected Apps`}
      src={DataManagementIntegrationsConnectedAppsImage}
      backRoute="/data-management-integrations"
    />
  );
};

export default DataManagementIntegrationsConnectedAppsPage;
