import { SettingsTools16Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools16Page = () => {
  return (
    <CommonPage
      pageTitle={`Call setup`}
      src={SettingsTools16Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools16Page;
