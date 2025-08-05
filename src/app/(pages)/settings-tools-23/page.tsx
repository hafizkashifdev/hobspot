import { SettingsTools23Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools23Page = () => {
  return (
    <CommonPage
      pageTitle={`Domains & URLs`}
      src={SettingsTools23Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools23Page;
