import { SettingsTools40Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools40Page = () => {
  return (
    <CommonPage
      pageTitle={`Themes & Modules`}
      src={SettingsTools40Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools40Page;
