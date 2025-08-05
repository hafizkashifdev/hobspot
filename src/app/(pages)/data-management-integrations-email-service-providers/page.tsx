import { DataManagementIntegrationsEmailServiceProvidersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementIntegrationsEmailServiceProvidersPage = () => {
  return (
    <CommonPage
      pageTitle={`Email Service Providers`}
      src={DataManagementIntegrationsEmailServiceProvidersImage}
      backRoute="/data-management-integrations"
    />
  );
};

export default DataManagementIntegrationsEmailServiceProvidersPage;
