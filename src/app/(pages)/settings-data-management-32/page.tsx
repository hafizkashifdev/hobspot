import { SettingsDataManagement32Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement32Page = () => {
  return (
    <CommonPage
      pageTitle={`Invoices`}
      src={SettingsDataManagement32Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement32Page;
