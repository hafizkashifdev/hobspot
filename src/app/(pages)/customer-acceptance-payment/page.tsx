import { CustomerAcceptancePaymentImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CustomerAcceptancePaymentPage = () => {
  return (
    <CommonPage
      pageTitle={`Customer Acceptance & Payment`}
      src={CustomerAcceptancePaymentImage}
      backRoute="/quotes-main"
    />
  );
};

export default CustomerAcceptancePaymentPage;
