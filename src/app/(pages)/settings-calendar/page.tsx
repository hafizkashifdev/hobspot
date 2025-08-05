import { SettingsCalendarImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsCalendarPage = () => {
  return (
    <CommonPage
      pageTitle={`Calendar`}
      src={SettingsCalendarImage}
      backRoute="/settings-your-preferences"
    />
  );
};

export default SettingsCalendarPage;
