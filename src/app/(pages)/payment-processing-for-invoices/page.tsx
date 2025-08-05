import { PaymentProcessingForInvoicesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentProcessingForInvoicesPage = () => {
  return (
    <CommonPage
      pageTitle={`Payment Processing for Invoices`}
      src={PaymentProcessingForInvoicesImage}
      backRoute="/invoice-main"
    />
  );
};

export default PaymentProcessingForInvoicesPage;
