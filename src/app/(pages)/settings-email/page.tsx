import { SettingsEmailImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsEmailPage = () => {
  return (
    <CommonPage
      pageTitle={`Email`}
      src={SettingsEmailImage}
      backRoute="/settings-your-preferences"
    />
  );
};

export default SettingsEmailPage;
