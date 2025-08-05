import { SettingsTools20Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools20Page = () => {
  return (
    <CommonPage
      pageTitle={`Permissions ( Show the leads  & Deals Tab)`}
      src={SettingsTools20Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools20Page;
