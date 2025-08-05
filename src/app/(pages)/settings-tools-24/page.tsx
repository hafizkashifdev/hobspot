import { SettingsTools24Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools24Page = () => {
  return (
    <CommonPage
      pageTitle={`Help Desk`}
      src={SettingsTools24Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools24Page;
