import { SettingsTools30Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools30Page = () => {
  return (
    <CommonPage
      pageTitle={`SMTP`}
      src={SettingsTools30Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools30Page;
