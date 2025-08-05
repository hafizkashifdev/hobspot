import { SettingsSecurityOtherAppsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsSecurityOtherAppsPage = () => {
  return (
    <CommonPage
      pageTitle={`Other Apps`}
      src={SettingsSecurityOtherAppsImage}
      backRoute="/settings-your-preferences"
    />
  );
};

export default SettingsSecurityOtherAppsPage;
