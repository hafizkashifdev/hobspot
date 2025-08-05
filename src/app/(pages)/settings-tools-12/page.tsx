import { SettingsTools12Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools12Page = () => {
  return (
    <CommonPage
      pageTitle={`Podcasts (Reach your audience)`}
      src={SettingsTools12Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools12Page;
