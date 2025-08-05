import { SettingsTools29Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools29Page = () => {
  return (
    <CommonPage
      pageTitle={`Configuration`}
      src={SettingsTools29Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools29Page;
