import { DataManagementIntegrationsPrivateAppsCreateAPrivateAppImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementIntegrationsPrivateAppsCreateAPrivateAppPage = () => {
  return (
    <CommonPage
      pageTitle={`Create a private app`}
      src={DataManagementIntegrationsPrivateAppsCreateAPrivateAppImage}
      backRoute="/data-management-integrations"
    />
  );
};

export default DataManagementIntegrationsPrivateAppsCreateAPrivateAppPage;
