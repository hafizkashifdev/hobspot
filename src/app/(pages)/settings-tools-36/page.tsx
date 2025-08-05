import { SettingsTools36Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools36Page = () => {
  return (
    <CommonPage
      pageTitle={`Allow & Deny List`}
      src={SettingsTools36Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools36Page;
