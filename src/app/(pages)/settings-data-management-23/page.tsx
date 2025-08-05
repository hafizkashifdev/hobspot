import { SettingsDataManagement23Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement23Page = () => {
  return (
    <CommonPage
      pageTitle={`Record & Display Customization`}
      src={SettingsDataManagement23Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement23Page;
