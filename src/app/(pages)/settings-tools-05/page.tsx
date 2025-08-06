import { SettingsTools05Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools05Page = () => {
  return (
    <CommonPage
      pageTitle={`Payments`}
      src={SettingsTools05Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools05Page;
