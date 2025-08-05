import { SettingsTools01Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools01Page = () => {
  return (
    <CommonPage
      pageTitle={`Meetings`}
      src={SettingsTools01Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools01Page;
