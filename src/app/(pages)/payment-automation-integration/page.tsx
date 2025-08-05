import { PaymentAutomationIntegrationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentAutomationIntegrationPage = () => {
  return (
    <CommonPage
      pageTitle={`Payment Automation & Integration`}
      src={PaymentAutomationIntegrationImage}
      backRoute="/commerce-payment"
    />
  );
};

export default PaymentAutomationIntegrationPage;
