import { DataManagementIntegrationsPrivateAppsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementIntegrationsPrivateAppsPage = () => {
  return (
    <CommonPage
      pageTitle={`Private Apps`}
      src={DataManagementIntegrationsPrivateAppsImage}
      backRoute="/data-management-integrations"
    />
  );
};

export default DataManagementIntegrationsPrivateAppsPage;
