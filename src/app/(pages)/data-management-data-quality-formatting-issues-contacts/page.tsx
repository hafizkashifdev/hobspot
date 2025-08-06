import { DataManagementDataQualityFormattingIssuesContactsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementDataQualityFormattingIssuesContactsPage = () => {
  return (
    <CommonPage
      pageTitle={`Contacts`}
      src={DataManagementDataQualityFormattingIssuesContactsImage}
      backRoute="/data-management-data-quality"
    />
  );
};

export default DataManagementDataQualityFormattingIssuesContactsPage;
