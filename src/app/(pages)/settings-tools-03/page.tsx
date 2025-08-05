import { SettingsTools03Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools03Page = () => {
  return (
    <CommonPage
      pageTitle={`Inbox & help Desk`}
      src={SettingsTools03Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools03Page;
