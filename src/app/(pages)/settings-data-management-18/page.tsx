import { SettingsDataManagement18Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement18Page = () => {
  return (
    <CommonPage
      pageTitle={`Orders`}
      src={SettingsDataManagement18Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement18Page;
