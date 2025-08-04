import { TrackingAutomationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TrackingAutomationPage = () => {
  return (
    <CommonPage
      pageTitle={`Tracking & Automation`}
      src={TrackingAutomationImage}
      backRoute="/products-main"
    />
  );
};

export default TrackingAutomationPage;
