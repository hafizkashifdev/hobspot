import { SettingsDataManagement09Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement09Page = () => {
  return (
    <CommonPage
      pageTitle={`Archived`}
      src={SettingsDataManagement09Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement09Page;
