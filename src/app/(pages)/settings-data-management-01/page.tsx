import { SettingsDataManagement01Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement01Page = () => {
  return (
    <CommonPage
      pageTitle={`Properties`}
      src={SettingsDataManagement01Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement01Page;
