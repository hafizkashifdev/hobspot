import { SettingsProfile1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsProfile1Page = () => {
  return (
    <CommonPage
      pageTitle={`Profile`}
      src={SettingsProfile1Image}
      backRoute="/settings-your-preferences"
    />
  );
};

export default SettingsProfile1Page;
