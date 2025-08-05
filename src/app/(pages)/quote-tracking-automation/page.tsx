import { QuoteTrackingAutomationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const QuoteTrackingAutomationPage = () => {
  return (
    <CommonPage
      pageTitle={` Quote Tracking & Automation`}
      src={QuoteTrackingAutomationImage}
      backRoute="/quotes-main"
    />
  );
};

export default QuoteTrackingAutomationPage;
