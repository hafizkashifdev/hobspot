import { SettingsDataManagement10Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement10Page = () => {
  return (
    <CommonPage
      pageTitle={`Object Library`}
      src={SettingsDataManagement10Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement10Page;
