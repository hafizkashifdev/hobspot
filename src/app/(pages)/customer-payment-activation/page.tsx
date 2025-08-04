import { CustomerPaymentActivationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CustomerPaymentActivationPage = () => {
  return (
    <CommonPage
      pageTitle={`Customer Payment & Activation`}
      src={CustomerPaymentActivationImage}
      backRoute="/subscriptions-main"
    />
  );
};

export default CustomerPaymentActivationPage;
