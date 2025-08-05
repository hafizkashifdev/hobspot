import { SettingsSecurityDesktopImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsSecurityDesktopPage = () => {
  return (
    <CommonPage
      pageTitle={`Desktop`}
      src={SettingsSecurityDesktopImage}
      backRoute="/settings-your-preferences"
    />
  );
};

export default SettingsSecurityDesktopPage;
