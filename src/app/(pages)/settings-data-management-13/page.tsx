import { SettingsDataManagement13Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement13Page = () => {
  return (
    <CommonPage
      pageTitle={`Leads`}
      src={SettingsDataManagement13Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement13Page;
