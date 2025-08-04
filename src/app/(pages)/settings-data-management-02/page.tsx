import { SettingsDataManagement02Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement02Page = () => {
  return (
    <CommonPage
      pageTitle={`Groups`}
      src={SettingsDataManagement02Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement02Page;
