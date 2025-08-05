import { SettingsDataManagement30Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement30Page = () => {
  return (
    <CommonPage
      pageTitle={`Services`}
      src={SettingsDataManagement30Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement30Page;
