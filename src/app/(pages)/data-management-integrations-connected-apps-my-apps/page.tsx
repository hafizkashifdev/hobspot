import { DataManagementIntegrationsConnectedAppsMyAppsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementIntegrationsConnectedAppsMyAppsPage = () => {
  return (
    <CommonPage
      pageTitle={`My Apps`}
      src={DataManagementIntegrationsConnectedAppsMyAppsImage}
      backRoute="/data-management-integrations"
    />
  );
};

export default DataManagementIntegrationsConnectedAppsMyAppsPage;
