import { CustomerCheckoutProcessImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CustomerCheckoutProcessPage = () => {
  return (
    <CommonPage
      pageTitle={`Customer Checkout Process`}
      src={CustomerCheckoutProcessImage}
      backRoute="/invoice-main"
    />
  );
};

export default CustomerCheckoutProcessPage;
