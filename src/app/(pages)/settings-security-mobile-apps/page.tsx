import { SettingsSecurityMobileAppsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsSecurityMobileAppsPage = () => {
  return (
    <CommonPage
      pageTitle={`Mobile Apps`}
      src={SettingsSecurityMobileAppsImage}
      backRoute="/settings-your-preferences"
    />
  );
};

export default SettingsSecurityMobileAppsPage;
