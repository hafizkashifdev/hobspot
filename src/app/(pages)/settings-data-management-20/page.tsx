import { SettingsDataManagement20Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement20Page = () => {
  return (
    <CommonPage
      pageTitle={`Quote`}
      src={SettingsDataManagement20Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement20Page;
