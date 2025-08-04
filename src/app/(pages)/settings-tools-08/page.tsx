import { SettingsTools08Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools08Page = () => {
  return (
    <CommonPage
      pageTitle={`Content`}
      src={SettingsTools08Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools08Page;
