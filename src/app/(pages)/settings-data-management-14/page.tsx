import { SettingsDataManagement14Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement14Page = () => {
  return (
    <CommonPage
      pageTitle={`Configure Object Settings`}
      src={SettingsDataManagement14Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement14Page;
