import { SettingsTools15Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools15Page = () => {
  return (
    <CommonPage
      pageTitle={`Sales Workspace`}
      src={SettingsTools15Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools15Page;
