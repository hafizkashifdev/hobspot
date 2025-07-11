import { UnrelatedPaymentServicesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const UnrelatedPaymentServicesPage = () => {
  return (
    <CommonPage
      pageTitle="Unrelated payment services"
      src={UnrelatedPaymentServicesImage}
      backRoute="/semi"
    />
  );
};

export default UnrelatedPaymentServicesPage;
