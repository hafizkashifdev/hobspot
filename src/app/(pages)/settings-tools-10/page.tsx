import { SettingsTools10Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools10Page = () => {
  return (
    <CommonPage
      pageTitle={`Pages`}
      src={SettingsTools10Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools10Page;
