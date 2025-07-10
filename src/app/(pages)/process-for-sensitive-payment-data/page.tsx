import { ProcessForSensitivePaymentDataImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ProcessForSensitivePaymentDataPage = () => {
  return (
    <CommonPage
      pageTitle={`Process for sensitive payment data`}
      src={ProcessForSensitivePaymentDataImage}
      backRoute="/pisp_spi"
    />
  );
};

export default ProcessForSensitivePaymentDataPage;
