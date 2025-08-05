import { SettingsTools28Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools28Page = () => {
  return (
    <CommonPage
      pageTitle={`Reply Recommendations`}
      src={SettingsTools28Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools28Page;
