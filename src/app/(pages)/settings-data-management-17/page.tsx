import { SettingsDataManagement17Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement17Page = () => {
  return (
    <CommonPage
      pageTitle={`Products`}
      src={SettingsDataManagement17Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement17Page;
