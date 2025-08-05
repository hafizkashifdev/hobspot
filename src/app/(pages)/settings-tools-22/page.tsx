import { SettingsTools22Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools22Page = () => {
  return (
    <CommonPage
      pageTitle={`Ads`}
      src={SettingsTools22Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools22Page;
