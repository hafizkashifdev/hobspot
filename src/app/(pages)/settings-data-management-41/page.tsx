import { SettingsDataManagement41Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement41Page = () => {
  return (
    <CommonPage
      pageTitle={`Forecast`}
      src={SettingsDataManagement41Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement41Page;
