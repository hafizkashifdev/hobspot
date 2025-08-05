import { SettingsTools27Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools27Page = () => {
  return (
    <CommonPage
      pageTitle={`Tracking`}
      src={SettingsTools27Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools27Page;
