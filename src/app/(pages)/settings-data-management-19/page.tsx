import { SettingsDataManagement19Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement19Page = () => {
  return (
    <CommonPage
      pageTitle={`Pipeline Customization`}
      src={SettingsDataManagement19Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement19Page;
