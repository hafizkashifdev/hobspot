import { SettingsTools06Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools06Page = () => {
  return (
    <CommonPage
      pageTitle={`AI Assistants`}
      src={SettingsTools06Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools06Page;
