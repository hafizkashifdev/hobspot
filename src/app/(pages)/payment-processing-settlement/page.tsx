import { PaymentProcessingSettlementImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentProcessingSettlementPage = () => {
  return (
    <CommonPage
      pageTitle={`Payment Processing & Settlement`}
      src={PaymentProcessingSettlementImage}
      backRoute="/commerce-payment"
    />
  );
};

export default PaymentProcessingSettlementPage;
