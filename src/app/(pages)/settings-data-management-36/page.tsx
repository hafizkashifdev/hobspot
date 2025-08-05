import { SettingsDataManagement36Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement36Page = () => {
  return (
    <CommonPage
      pageTitle={`Manage Access to`}
      src={SettingsDataManagement36Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement36Page;
