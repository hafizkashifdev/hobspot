import { SettingsDataManagement40Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement40Page = () => {
  return (
    <CommonPage
      pageTitle={`Data Enrichment`}
      src={SettingsDataManagement40Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement40Page;
