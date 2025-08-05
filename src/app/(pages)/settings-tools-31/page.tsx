import { SettingsTools31Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools31Page = () => {
  return (
    <CommonPage
      pageTitle={`Availability Management`}
      src={SettingsTools31Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools31Page;
