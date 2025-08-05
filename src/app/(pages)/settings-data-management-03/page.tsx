import { SettingsDataManagement03Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement03Page = () => {
  return (
    <CommonPage
      pageTitle={`Deals`}
      src={SettingsDataManagement03Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement03Page;
