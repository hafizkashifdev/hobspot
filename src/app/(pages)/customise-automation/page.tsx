import { CustomiseAutomationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CustomiseAutomationPage = () => {
  return (
    <CommonPage
      pageTitle={`Customise _ Automation`}
      src={CustomiseAutomationImage}
      backRoute="/surveys-main"
    />
  );
};

export default CustomiseAutomationPage;
