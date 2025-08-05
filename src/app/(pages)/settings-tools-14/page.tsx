import { SettingsTools14Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools14Page = () => {
  return (
    <CommonPage
      pageTitle={`Customer Portal ( General & Template)`}
      src={SettingsTools14Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools14Page;
