import { SettingsTools21Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools21Page = () => {
  return (
    <CommonPage
      pageTitle={`Inboxes`}
      src={SettingsTools21Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools21Page;
