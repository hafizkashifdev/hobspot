import { SubscriptionManagementAutomationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SubscriptionManagementAutomationPage = () => {
  return (
    <CommonPage
      pageTitle={`Subscription Management & Automation`}
      src={SubscriptionManagementAutomationImage}
      backRoute="/subscriptions-main"
    />
  );
};

export default SubscriptionManagementAutomationPage;
