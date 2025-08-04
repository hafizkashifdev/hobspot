import { SettingsDataManagement42Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement42Page = () => {
  return (
    <CommonPage
      pageTitle={`Activities`}
      src={SettingsDataManagement42Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement42Page;
