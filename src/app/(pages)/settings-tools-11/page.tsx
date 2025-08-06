import { SettingsTools11Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools11Page = () => {
  return (
    <CommonPage
      pageTitle={`Knowledge Base`}
      src={SettingsTools11Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools11Page;
