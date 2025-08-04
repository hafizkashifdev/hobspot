import { SettingsDataManagement25Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement25Page = () => {
  return (
    <CommonPage
      pageTitle={`Subscriptions`}
      src={SettingsDataManagement25Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement25Page;
