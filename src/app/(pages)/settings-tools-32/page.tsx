import { SettingsTools32Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools32Page = () => {
  return (
    <CommonPage
      pageTitle={`SubScriptions`}
      src={SettingsTools32Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools32Page;
