import { SettingsTools18Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools18Page = () => {
  return (
    <CommonPage
      pageTitle={`Interactive Voice Response`}
      src={SettingsTools18Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools18Page;
