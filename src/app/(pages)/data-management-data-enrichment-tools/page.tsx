import { DataManagementDataEnrichmentToolsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataEnrichmentToolsPage = () => {
  return (
    <CommonPage
      pageTitle={`Tools`}
      src={DataManagementDataEnrichmentToolsImage}
      backRoute="/data-management-data-enrichment"
    />
  );
};

export default DataManagementDataEnrichmentToolsPage;
