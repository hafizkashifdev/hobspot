import { SettingsDataManagement15Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement15Page = () => {
  return (
    <CommonPage
      pageTitle={`Contacts`}
      src={SettingsDataManagement15Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement15Page;
