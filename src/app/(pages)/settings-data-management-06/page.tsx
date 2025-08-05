import { SettingsDataManagement06Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsDataManagement06Page = () => {
  return (
    <CommonPage
      pageTitle={`Marketing Events`}
      src={SettingsDataManagement06Image}
      backRoute="/settings-data-management"
    />
  );
};

export default SettingsDataManagement06Page;
