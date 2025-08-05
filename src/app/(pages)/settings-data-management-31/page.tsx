import { SettingsDataManagement31Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement31Page = () => {
  return (
    <CommonPage
      pageTitle={`Translations`}
      src={SettingsDataManagement31Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement31Page;
