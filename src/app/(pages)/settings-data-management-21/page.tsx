import { SettingsDataManagement21Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement21Page = () => {
  return (
    <CommonPage
      pageTitle={`Carts`}
      src={SettingsDataManagement21Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement21Page;
