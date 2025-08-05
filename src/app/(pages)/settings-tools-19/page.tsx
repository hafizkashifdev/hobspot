import { SettingsTools19Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SettingsTools19Page = () => {
  return (
    <CommonPage
      pageTitle={`Transcription & Analysis`}
      src={SettingsTools19Image}
      backRoute="/settings-tools"
    />
  );
};

export default SettingsTools19Page;
