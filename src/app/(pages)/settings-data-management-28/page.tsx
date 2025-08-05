import { SettingsDataManagement28Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement28Page = () => {
  return (
    <CommonPage
      pageTitle={`Data backup & restore`}
      src={SettingsDataManagement28Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement28Page;
