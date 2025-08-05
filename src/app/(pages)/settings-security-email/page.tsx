import { SettingsSecurityEmailImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsSecurityEmailPage = () => {
  return (
    <CommonPage
      pageTitle={`Email`}
      src={SettingsSecurityEmailImage}
      backRoute="/settings-your-preferences"
    />
  );
};

export default SettingsSecurityEmailPage;
