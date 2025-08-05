import { DataManagementDataEnrichmentSettingsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataEnrichmentSettingsPage = () => {
  return (
    <CommonPage
      pageTitle={`Settings`}
      src={DataManagementDataEnrichmentSettingsImage}
      backRoute="/data-management-data-enrichment"
    />
  );
};

export default DataManagementDataEnrichmentSettingsPage;
