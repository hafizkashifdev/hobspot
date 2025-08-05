import { DataManagementDataQualityFormattingIssuesLocationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataQualityFormattingIssuesLocationPage = () => {
  return (
    <CommonPage
      pageTitle={`Location`}
      src={DataManagementDataQualityFormattingIssuesLocationImage}
      backRoute="/data-management-data-quality"
    />
  );
};

export default DataManagementDataQualityFormattingIssuesLocationPage;
