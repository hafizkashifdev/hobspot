import { SettingsTools25Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools25Page = () => {
  return (
    <CommonPage
      pageTitle={`Email`}
      src={SettingsTools25Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools25Page;
