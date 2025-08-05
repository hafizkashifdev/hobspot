import { SettingsDataManagement24Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement24Page = () => {
  return (
    <CommonPage
      pageTitle={`Import and Export`}
      src={SettingsDataManagement24Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement24Page;
