import { SettingsDataManagement04Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement04Page = () => {
  return (
    <CommonPage
      pageTitle={`Campaigns`}
      src={SettingsDataManagement04Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement04Page;
