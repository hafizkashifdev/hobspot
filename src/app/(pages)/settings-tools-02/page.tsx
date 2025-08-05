import { SettingsTools02Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools02Page = () => {
  return (
    <CommonPage
      pageTitle={`Calling`}
      src={SettingsTools02Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools02Page;
