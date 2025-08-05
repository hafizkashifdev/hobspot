import { SettingsTasksImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTasksPage = () => {
  return (
    <CommonPage
      pageTitle={`Tasks`}
      src={SettingsTasksImage}
      backRoute="/settings-your-preferences"
    />
  );
};

export default SettingsTasksPage;
