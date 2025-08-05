import { SettingsDataManagement12Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement12Page = () => {
  return (
    <CommonPage
      pageTitle={`Enable or Disable Objects`}
      src={SettingsDataManagement12Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement12Page;
