import { SettingsTools13Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools13Page = () => {
  return (
    <CommonPage
      pageTitle={`Private Content`}
      src={SettingsTools13Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools13Page;
