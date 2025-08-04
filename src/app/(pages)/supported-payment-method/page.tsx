import { SupportedPaymentMethodImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SupportedPaymentMethodPage = () => {
  return (
    <CommonPage
      pageTitle={`Supported Payment Method`}
      src={SupportedPaymentMethodImage}
      backRoute="/commerce-payment"
    />
  );
};

export default SupportedPaymentMethodPage;
