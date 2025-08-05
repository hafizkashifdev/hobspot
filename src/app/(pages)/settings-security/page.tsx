import { SettingsSecurityImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsSecurityPage = () => {
  return (
    <CommonPage
      pageTitle={`Security`}
      src={SettingsSecurityImage}
      backRoute="/settings-your-preferences"
    />
  );
};

export default SettingsSecurityPage;
