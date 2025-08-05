import { SettingsTools26Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools26Page = () => {
  return (
    <CommonPage
      pageTitle={`Reply Recommendations`}
      src={SettingsTools26Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools26Page;
