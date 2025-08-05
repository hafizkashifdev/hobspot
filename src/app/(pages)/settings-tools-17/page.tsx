import { SettingsTools17Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools17Page = () => {
  return (
    <CommonPage
      pageTitle={`Blocked Numbers List`}
      src={SettingsTools17Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools17Page;
