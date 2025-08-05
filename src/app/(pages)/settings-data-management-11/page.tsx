import { SettingsDataManagement11Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement11Page = () => {
  return (
    <CommonPage
      pageTitle={`Companies`}
      src={SettingsDataManagement11Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement11Page;
