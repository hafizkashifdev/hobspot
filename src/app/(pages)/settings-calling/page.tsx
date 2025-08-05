import { SettingsCallingImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsCallingPage = () => {
  return (
    <CommonPage
      pageTitle={`Calling`}
      src={SettingsCallingImage}
      backRoute="/settings-your-preferences"
    />
  );
};

export default SettingsCallingPage;
