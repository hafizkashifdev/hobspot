import { SettingsDataManagement22Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement22Page = () => {
  return (
    <CommonPage
      pageTitle={`Listings`}
      src={SettingsDataManagement22Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement22Page;
