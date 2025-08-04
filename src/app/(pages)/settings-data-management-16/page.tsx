import { SettingsDataManagement16Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement16Page = () => {
  return (
    <CommonPage
      pageTitle={`Deal Configuration Options`}
      src={SettingsDataManagement16Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement16Page;
