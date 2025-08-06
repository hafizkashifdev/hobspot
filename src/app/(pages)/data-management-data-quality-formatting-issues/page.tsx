import { DataManagementDataQualityFormattingIssuesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataQualityFormattingIssuesPage = () => {
  return (
    <CommonPage
      pageTitle={`Formatting Issues`}
      src={DataManagementDataQualityFormattingIssuesImage}
      backRoute="/data-management-data-quality"
    />
  );
};

export default DataManagementDataQualityFormattingIssuesPage;
