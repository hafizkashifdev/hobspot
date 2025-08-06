import { DataManagementIntegrationsConnectedAppsNotificationConfigurationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementIntegrationsConnectedAppsNotificationConfigurationPage = () => {
  return (
    <CommonPage
      pageTitle={`Notification Configuration`}
      src={DataManagementIntegrationsConnectedAppsNotificationConfigurationImage}
      backRoute="/data-management-integrations"
    />
  );
};

export default DataManagementIntegrationsConnectedAppsNotificationConfigurationPage;
