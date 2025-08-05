import { SettingsTools04Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools04Page = () => {
  return (
    <CommonPage
      pageTitle={`SMS settings`}
      src={SettingsTools04Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools04Page;
